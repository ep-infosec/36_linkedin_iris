# Copyright (c) LinkedIn Corporation. All rights reserved. Licensed under the BSD-2 Clause license.
# See LICENSE in the project root for license information.

import subprocess
import os
import socket
import time
import sys
from glob import glob
from iris.config import load_config

dbpath = os.environ.get('DATABASE_PATH', '/home/iris/db')
initializedfile = os.environ.get('INIT_FILE', '/home/iris/db_initialized')


def load_sqldump(config, sqlfile, one_db=True):
    print('Importing %s...' % sqlfile)
    effective_port = 3306
    if 'port' in config:
        effective_port = config['port']
    with open(sqlfile) as h:
        cmd = ['/usr/bin/mysql', '-h', config['host'], '-u',
               config['user'], '-p' + config['password'], '-P' + str(effective_port)]
        if one_db:
            cmd += ['-o', config['database']]
        proc = subprocess.Popen(cmd, stdin=h)
        proc.communicate()

        if proc.returncode == 0:
            print('DB successfully loaded ' + sqlfile)
            return True
        else:
            print(('Ran into problems during DB bootstrap. '
                   'IRIS will likely not function correctly. '
                   'mysql exit code: %s for %s') % (proc.returncode, sqlfile))
            return False


def wait_for_mysql(config):
    print('Checking MySQL liveness on %s...' % config['host'])

    effective_port = 3306
    if 'port' in config:
        effective_port = config['port']

    db_address = (config['host'], effective_port)
    tries = 0
    while True:
        try:
            sock = socket.socket()
            sock.connect(db_address)
            sock.close()
            break
        except socket.error:
            if tries > 20:
                print('Waited too long for DB to come up. Bailing.')
                sys.exit(1)

            print('DB not up yet. Waiting a few seconds..')
            time.sleep(2)
            tries += 1
            continue


def initialize_mysql_schema(config):
    print('Initializing Iris database')
    # disable one_db to let schema_0.sql create the database
    re = load_sqldump(config, os.path.join(dbpath, 'schema_0.sql'), one_db=False)
    if not re:
        sys.exit('Failed to load schema into DB.')

    for f in glob(os.path.join(dbpath, 'patches', '*.sql')):
        re = load_sqldump(config, f)
        if not re:
            sys.exit('Failed to load DB patche: %s.' % f)

    re = load_sqldump(config, os.path.join(dbpath, 'dummy_data.sql'))
    if not re:
        sys.stderr.write('Failed to load dummy data.')

    with open(initializedfile, 'w'):
        print('Wrote %s so we don\'t bootstrap db again' % initializedfile)


def main():
    iris_config = load_config(
        os.environ.get('IRIS_CFG_PATH', '/home/iris/config/config.yaml'))
    mysql_config = iris_config['db']['conn']['kwargs']

    # It often takes several seconds for MySQL to start up. iris dies upon start
    # if it can't immediately connect to MySQL, so we have to wait for it.
    wait_for_mysql(mysql_config)

    if 'DOCKER_DB_BOOTSTRAP' in os.environ:
        if not os.path.exists(initializedfile):
            initialize_mysql_schema(mysql_config)

    os.execv('/usr/bin/uwsgi',
             # first array element is ARGV0, since python 3.6 it cannot be empty, using space
             # https://bugs.python.org/issue28732
             ['/usr/bin/uwsgi', '--yaml', '/home/iris/daemons/uwsgi.yaml:prod'])


if __name__ == '__main__':
    main()
