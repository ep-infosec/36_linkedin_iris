"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function (a, b) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b();
}(void 0, function () {
  "use strict";

  function a() {
    return Hc.apply(null, arguments);
  }

  function b(a) {
    Hc = a;
  }

  function c(a) {
    return "[object Array]" === Object.prototype.toString.call(a);
  }

  function d(a) {
    return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
  }

  function e(a, b) {
    var c,
        d = [];

    for (c = 0; c < a.length; ++c) {
      d.push(b(a[c], c));
    }

    return d;
  }

  function f(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  function g(a, b) {
    for (var c in b) {
      f(b, c) && (a[c] = b[c]);
    }

    return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a;
  }

  function h(a, b, c, d) {
    return Ca(a, b, c, d, !0).utc();
  }

  function i() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1
    };
  }

  function j(a) {
    return null == a._pf && (a._pf = i()), a._pf;
  }

  function k(a) {
    if (null == a._isValid) {
      var b = j(a);
      a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour);
    }

    return a._isValid;
  }

  function l(a) {
    var b = h(NaN);
    return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b;
  }

  function m(a, b) {
    var c, d, e;
    if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Jc.length > 0) for (c in Jc) {
      d = Jc[c], e = b[d], "undefined" != typeof e && (a[d] = e);
    }
    return a;
  }

  function n(b) {
    m(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Kc === !1 && (Kc = !0, a.updateOffset(this), Kc = !1);
  }

  function o(a) {
    return a instanceof n || null != a && null != a._isAMomentObject;
  }

  function p(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a);
  }

  function q(a) {
    var b = +a,
        c = 0;
    return 0 !== b && isFinite(b) && (c = p(b)), c;
  }

  function r(a, b, c) {
    var d,
        e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;

    for (d = 0; e > d; d++) {
      (c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
    }

    return g + f;
  }

  function s() {}

  function t(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }

  function u(a) {
    for (var b, c, d, e, f = 0; f < a.length;) {
      for (e = t(a[f]).split("-"), b = e.length, c = t(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
        if (d = v(e.slice(0, b).join("-"))) return d;
        if (c && c.length >= b && r(e, c, !0) >= b - 1) break;
        b--;
      }

      f++;
    }

    return null;
  }

  function v(a) {
    var b = null;
    if (!Lc[a] && "undefined" != typeof module && module && module.exports) try {
      b = Ic._abbr, require("./locale/" + a), w(b);
    } catch (c) {}
    return Lc[a];
  }

  function w(a, b) {
    var c;
    return a && (c = "undefined" == typeof b ? y(a) : x(a, b), c && (Ic = c)), Ic._abbr;
  }

  function x(a, b) {
    return null !== b ? (b.abbr = a, Lc[a] = Lc[a] || new s(), Lc[a].set(b), w(a), Lc[a]) : (delete Lc[a], null);
  }

  function y(a) {
    var b;
    if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Ic;

    if (!c(a)) {
      if (b = v(a)) return b;
      a = [a];
    }

    return u(a);
  }

  function z(a, b) {
    var c = a.toLowerCase();
    Mc[c] = Mc[c + "s"] = Mc[b] = a;
  }

  function A(a) {
    return "string" == typeof a ? Mc[a] || Mc[a.toLowerCase()] : void 0;
  }

  function B(a) {
    var b,
        c,
        d = {};

    for (c in a) {
      f(a, c) && (b = A(c), b && (d[b] = a[c]));
    }

    return d;
  }

  function C(b, c) {
    return function (d) {
      return null != d ? (E(this, b, d), a.updateOffset(this, c), this) : D(this, b);
    };
  }

  function D(a, b) {
    return a._d["get" + (a._isUTC ? "UTC" : "") + b]();
  }

  function E(a, b, c) {
    return a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
  }

  function F(a, b) {
    var c;
    if ("object" == _typeof(a)) for (c in a) {
      this.set(c, a[c]);
    } else if (a = A(a), "function" == typeof this[a]) return this[a](b);
    return this;
  }

  function G(a, b, c) {
    var d = "" + Math.abs(a),
        e = b - d.length,
        f = a >= 0;
    return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
  }

  function H(a, b, c, d) {
    var e = d;
    "string" == typeof d && (e = function e() {
      return this[d]();
    }), a && (Qc[a] = e), b && (Qc[b[0]] = function () {
      return G(e.apply(this, arguments), b[1], b[2]);
    }), c && (Qc[c] = function () {
      return this.localeData().ordinal(e.apply(this, arguments), a);
    });
  }

  function I(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
  }

  function J(a) {
    var b,
        c,
        d = a.match(Nc);

    for (b = 0, c = d.length; c > b; b++) {
      Qc[d[b]] ? d[b] = Qc[d[b]] : d[b] = I(d[b]);
    }

    return function (e) {
      var f = "";

      for (b = 0; c > b; b++) {
        f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
      }

      return f;
    };
  }

  function K(a, b) {
    return a.isValid() ? (b = L(b, a.localeData()), Pc[b] = Pc[b] || J(b), Pc[b](a)) : a.localeData().invalidDate();
  }

  function L(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }

    var d = 5;

    for (Oc.lastIndex = 0; d >= 0 && Oc.test(a);) {
      a = a.replace(Oc, c), Oc.lastIndex = 0, d -= 1;
    }

    return a;
  }

  function M(a) {
    return "function" == typeof a && "[object Function]" === Object.prototype.toString.call(a);
  }

  function N(a, b, c) {
    dd[a] = M(b) ? b : function (a) {
      return a && c ? c : b;
    };
  }

  function O(a, b) {
    return f(dd, a) ? dd[a](b._strict, b._locale) : new RegExp(P(a));
  }

  function P(a) {
    return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
      return b || c || d || e;
    }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  function Q(a, b) {
    var c,
        d = b;

    for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function d(a, c) {
      c[b] = q(a);
    }), c = 0; c < a.length; c++) {
      ed[a[c]] = d;
    }
  }

  function R(a, b) {
    Q(a, function (a, c, d, e) {
      d._w = d._w || {}, b(a, d._w, d, e);
    });
  }

  function S(a, b, c) {
    null != b && f(ed, a) && ed[a](b, c._a, c, a);
  }

  function T(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }

  function U(a) {
    return this._months[a.month()];
  }

  function V(a) {
    return this._monthsShort[a.month()];
  }

  function W(a, b, c) {
    var d, e, f;

    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
      if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
      if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
      if (!c && this._monthsParse[d].test(a)) return d;
    }
  }

  function X(a, b) {
    var c;
    return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), T(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a);
  }

  function Y(b) {
    return null != b ? (X(this, b), a.updateOffset(this, !0), this) : D(this, "Month");
  }

  function Z() {
    return T(this.year(), this.month());
  }

  function $(a) {
    var b,
        c = a._a;
    return c && -2 === j(a).overflow && (b = c[gd] < 0 || c[gd] > 11 ? gd : c[hd] < 1 || c[hd] > T(c[fd], c[gd]) ? hd : c[id] < 0 || c[id] > 24 || 24 === c[id] && (0 !== c[jd] || 0 !== c[kd] || 0 !== c[ld]) ? id : c[jd] < 0 || c[jd] > 59 ? jd : c[kd] < 0 || c[kd] > 59 ? kd : c[ld] < 0 || c[ld] > 999 ? ld : -1, j(a)._overflowDayOfYear && (fd > b || b > hd) && (b = hd), j(a).overflow = b), a;
  }

  function _(b) {
    a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
  }

  function aa(a, b) {
    var c = !0;
    return g(function () {
      return c && (_(a + "\n" + new Error().stack), c = !1), b.apply(this, arguments);
    }, b);
  }

  function ba(a, b) {
    od[a] || (_(b), od[a] = !0);
  }

  function ca(a) {
    var b,
        c,
        d = a._i,
        e = pd.exec(d);

    if (e) {
      for (j(a).iso = !0, b = 0, c = qd.length; c > b; b++) {
        if (qd[b][1].exec(d)) {
          a._f = qd[b][0];
          break;
        }
      }

      for (b = 0, c = rd.length; c > b; b++) {
        if (rd[b][1].exec(d)) {
          a._f += (e[6] || " ") + rd[b][0];
          break;
        }
      }

      d.match(ad) && (a._f += "Z"), va(a);
    } else a._isValid = !1;
  }

  function da(b) {
    var c = sd.exec(b._i);
    return null !== c ? void (b._d = new Date(+c[1])) : (ca(b), void (b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))));
  }

  function ea(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);
    return 1970 > a && h.setFullYear(a), h;
  }

  function fa(a) {
    var b = new Date(Date.UTC.apply(null, arguments));
    return 1970 > a && b.setUTCFullYear(a), b;
  }

  function ga(a) {
    return ha(a) ? 366 : 365;
  }

  function ha(a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
  }

  function ia() {
    return ha(this.year());
  }

  function ja(a, b, c) {
    var d,
        e = c - b,
        f = c - a.day();
    return f > e && (f -= 7), e - 7 > f && (f += 7), d = Da(a).add(f, "d"), {
      week: Math.ceil(d.dayOfYear() / 7),
      year: d.year()
    };
  }

  function ka(a) {
    return ja(a, this._week.dow, this._week.doy).week;
  }

  function la() {
    return this._week.dow;
  }

  function ma() {
    return this._week.doy;
  }

  function na(a) {
    var b = this.localeData().week(this);
    return null == a ? b : this.add(7 * (a - b), "d");
  }

  function oa(a) {
    var b = ja(this, 1, 4).week;
    return null == a ? b : this.add(7 * (a - b), "d");
  }

  function pa(a, b, c, d, e) {
    var f,
        g = 6 + e - d,
        h = fa(a, 0, 1 + g),
        i = h.getUTCDay();
    return e > i && (i += 7), c = null != c ? 1 * c : e, f = 1 + g + 7 * (b - 1) - i + c, {
      year: f > 0 ? a : a - 1,
      dayOfYear: f > 0 ? f : ga(a - 1) + f
    };
  }

  function qa(a) {
    var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == a ? b : this.add(a - b, "d");
  }

  function ra(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }

  function sa(a) {
    var b = new Date();
    return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()];
  }

  function ta(a) {
    var b,
        c,
        d,
        e,
        f = [];

    if (!a._d) {
      for (d = sa(a), a._w && null == a._a[hd] && null == a._a[gd] && ua(a), a._dayOfYear && (e = ra(a._a[fd], d[fd]), a._dayOfYear > ga(e) && (j(a)._overflowDayOfYear = !0), c = fa(e, 0, a._dayOfYear), a._a[gd] = c.getUTCMonth(), a._a[hd] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) {
        a._a[b] = f[b] = d[b];
      }

      for (; 7 > b; b++) {
        a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
      }

      24 === a._a[id] && 0 === a._a[jd] && 0 === a._a[kd] && 0 === a._a[ld] && (a._nextDay = !0, a._a[id] = 0), a._d = (a._useUTC ? fa : ea).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[id] = 24);
    }
  }

  function ua(a) {
    var b, c, d, e, f, g, h;
    b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = ra(b.GG, a._a[fd], ja(Da(), 1, 4).year), d = ra(b.W, 1), e = ra(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = ra(b.gg, a._a[fd], ja(Da(), f, g).year), d = ra(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f : f), h = pa(c, d, e, g, f), a._a[fd] = h.year, a._dayOfYear = h.dayOfYear;
  }

  function va(b) {
    if (b._f === a.ISO_8601) return void ca(b);
    b._a = [], j(b).empty = !0;
    var c,
        d,
        e,
        f,
        g,
        h = "" + b._i,
        i = h.length,
        k = 0;

    for (e = L(b._f, b._locale).match(Nc) || [], c = 0; c < e.length; c++) {
      f = e[c], d = (h.match(O(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Qc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), S(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
    }

    j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[id] <= 12 && b._a[id] > 0 && (j(b).bigHour = void 0), b._a[id] = wa(b._locale, b._a[id], b._meridiem), ta(b), $(b);
  }

  function wa(a, b, c) {
    var d;
    return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b;
  }

  function xa(a) {
    var b, c, d, e, f;
    if (0 === a._f.length) return j(a).invalidFormat = !0, void (a._d = new Date(NaN));

    for (e = 0; e < a._f.length; e++) {
      f = 0, b = m({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], va(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
    }

    g(a, c || b);
  }

  function ya(a) {
    if (!a._d) {
      var b = B(a._i);
      a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], ta(a);
    }
  }

  function za(a) {
    var b = new n($(Aa(a)));
    return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
  }

  function Aa(a) {
    var b = a._i,
        e = a._f;
    return a._locale = a._locale || y(a._l), null === b || void 0 === e && "" === b ? l({
      nullInput: !0
    }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), o(b) ? new n($(b)) : (c(e) ? xa(a) : e ? va(a) : d(b) ? a._d = b : Ba(a), a));
  }

  function Ba(b) {
    var f = b._i;
    void 0 === f ? b._d = new Date() : d(f) ? b._d = new Date(+f) : "string" == typeof f ? da(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
      return parseInt(a, 10);
    }), ta(b)) : "object" == _typeof(f) ? ya(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b);
  }

  function Ca(a, b, c, d, e) {
    var f = {};
    return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, za(f);
  }

  function Da(a, b, c, d) {
    return Ca(a, b, c, d, !1);
  }

  function Ea(a, b) {
    var d, e;
    if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Da();

    for (d = b[0], e = 1; e < b.length; ++e) {
      (!b[e].isValid() || b[e][a](d)) && (d = b[e]);
    }

    return d;
  }

  function Fa() {
    var a = [].slice.call(arguments, 0);
    return Ea("isBefore", a);
  }

  function Ga() {
    var a = [].slice.call(arguments, 0);
    return Ea("isAfter", a);
  }

  function Ha(a) {
    var b = B(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;
    this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = y(), this._bubble();
  }

  function Ia(a) {
    return a instanceof Ha;
  }

  function Ja(a, b) {
    H(a, 0, 0, function () {
      var a = this.utcOffset(),
          c = "+";
      return 0 > a && (a = -a, c = "-"), c + G(~~(a / 60), 2) + b + G(~~a % 60, 2);
    });
  }

  function Ka(a) {
    var b = (a || "").match(ad) || [],
        c = b[b.length - 1] || [],
        d = (c + "").match(xd) || ["-", 0, 0],
        e = +(60 * d[1]) + q(d[2]);
    return "+" === d[0] ? e : -e;
  }

  function La(b, c) {
    var e, f;
    return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b : +Da(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Da(b).local();
  }

  function Ma(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }

  function Na(b, c) {
    var d,
        e = this._offset || 0;
    return null != b ? ("string" == typeof b && (b = Ka(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ma(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? bb(this, Ya(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ma(this);
  }

  function Oa(a, b) {
    return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
  }

  function Pa(a) {
    return this.utcOffset(0, a);
  }

  function Qa(a) {
    return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ma(this), "m")), this;
  }

  function Ra() {
    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ka(this._i)), this;
  }

  function Sa(a) {
    return a = a ? Da(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0;
  }

  function Ta() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }

  function Ua() {
    if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
    var a = {};

    if (m(a, this), a = Aa(a), a._a) {
      var b = a._isUTC ? h(a._a) : Da(a._a);
      this._isDSTShifted = this.isValid() && r(a._a, b.toArray()) > 0;
    } else this._isDSTShifted = !1;

    return this._isDSTShifted;
  }

  function Va() {
    return !this._isUTC;
  }

  function Wa() {
    return this._isUTC;
  }

  function Xa() {
    return this._isUTC && 0 === this._offset;
  }

  function Ya(a, b) {
    var c,
        d,
        e,
        g = a,
        h = null;
    return Ia(a) ? g = {
      ms: a._milliseconds,
      d: a._days,
      M: a._months
    } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = yd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
      y: 0,
      d: q(h[hd]) * c,
      h: q(h[id]) * c,
      m: q(h[jd]) * c,
      s: q(h[kd]) * c,
      ms: q(h[ld]) * c
    }) : (h = zd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
      y: Za(h[2], c),
      M: Za(h[3], c),
      d: Za(h[4], c),
      h: Za(h[5], c),
      m: Za(h[6], c),
      s: Za(h[7], c),
      w: Za(h[8], c)
    }) : null == g ? g = {} : "object" == _typeof(g) && ("from" in g || "to" in g) && (e = _a(Da(g.from), Da(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ha(g), Ia(a) && f(a, "_locale") && (d._locale = a._locale), d;
  }

  function Za(a, b) {
    var c = a && parseFloat(a.replace(",", "."));
    return (isNaN(c) ? 0 : c) * b;
  }

  function $a(a, b) {
    var c = {
      milliseconds: 0,
      months: 0
    };
    return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
  }

  function _a(a, b) {
    var c;
    return b = La(b, a), a.isBefore(b) ? c = $a(a, b) : (c = $a(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c;
  }

  function ab(a, b) {
    return function (c, d) {
      var e, f;
      return null === d || isNaN(+d) || (ba(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Ya(c, d), bb(this, e, a), this;
    };
  }

  function bb(b, c, d, e) {
    var f = c._milliseconds,
        g = c._days,
        h = c._months;
    e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && E(b, "Date", D(b, "Date") + g * d), h && X(b, D(b, "Month") + h * d), e && a.updateOffset(b, g || h);
  }

  function cb(a, b) {
    var c = a || Da(),
        d = La(c, this).startOf("day"),
        e = this.diff(d, "days", !0),
        f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse";
    return this.format(b && b[f] || this.localeData().calendar(f, this, Da(c)));
  }

  function db() {
    return new n(this);
  }

  function eb(a, b) {
    var c;
    return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this > +a) : (c = o(a) ? +a : +Da(a), c < +this.clone().startOf(b));
  }

  function fb(a, b) {
    var c;
    return b = A("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +a > +this) : (c = o(a) ? +a : +Da(a), +this.clone().endOf(b) < c);
  }

  function gb(a, b, c) {
    return this.isAfter(a, c) && this.isBefore(b, c);
  }

  function hb(a, b) {
    var c;
    return b = A(b || "millisecond"), "millisecond" === b ? (a = o(a) ? a : Da(a), +this === +a) : (c = +Da(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b));
  }

  function ib(a, b, c) {
    var d,
        e,
        f = La(a, this),
        g = 6e4 * (f.utcOffset() - this.utcOffset());
    return b = A(b), "year" === b || "month" === b || "quarter" === b ? (e = jb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : p(e);
  }

  function jb(a, b) {
    var c,
        d,
        e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");
    return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d);
  }

  function kb() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }

  function lb() {
    var a = this.clone().utc();
    return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : K(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : K(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }

  function mb(b) {
    var c = K(this, b || a.defaultFormat);
    return this.localeData().postformat(c);
  }

  function nb(a, b) {
    return this.isValid() ? Ya({
      to: this,
      from: a
    }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }

  function ob(a) {
    return this.from(Da(), a);
  }

  function pb(a, b) {
    return this.isValid() ? Ya({
      from: this,
      to: a
    }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }

  function qb(a) {
    return this.to(Da(), a);
  }

  function rb(a) {
    var b;
    return void 0 === a ? this._locale._abbr : (b = y(a), null != b && (this._locale = b), this);
  }

  function sb() {
    return this._locale;
  }

  function tb(a) {
    switch (a = A(a)) {
      case "year":
        this.month(0);

      case "quarter":
      case "month":
        this.date(1);

      case "week":
      case "isoWeek":
      case "day":
        this.hours(0);

      case "hour":
        this.minutes(0);

      case "minute":
        this.seconds(0);

      case "second":
        this.milliseconds(0);
    }

    return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this;
  }

  function ub(a) {
    return a = A(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms");
  }

  function vb() {
    return +this._d - 6e4 * (this._offset || 0);
  }

  function wb() {
    return Math.floor(+this / 1e3);
  }

  function xb() {
    return this._offset ? new Date(+this) : this._d;
  }

  function yb() {
    var a = this;
    return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()];
  }

  function zb() {
    var a = this;
    return {
      years: a.year(),
      months: a.month(),
      date: a.date(),
      hours: a.hours(),
      minutes: a.minutes(),
      seconds: a.seconds(),
      milliseconds: a.milliseconds()
    };
  }

  function Ab() {
    return k(this);
  }

  function Bb() {
    return g({}, j(this));
  }

  function Cb() {
    return j(this).overflow;
  }

  function Db(a, b) {
    H(0, [a, a.length], 0, b);
  }

  function Eb(a, b, c) {
    return ja(Da([a, 11, 31 + b - c]), b, c).week;
  }

  function Fb(a) {
    var b = ja(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
    return null == a ? b : this.add(a - b, "y");
  }

  function Gb(a) {
    var b = ja(this, 1, 4).year;
    return null == a ? b : this.add(a - b, "y");
  }

  function Hb() {
    return Eb(this.year(), 1, 4);
  }

  function Ib() {
    var a = this.localeData()._week;

    return Eb(this.year(), a.dow, a.doy);
  }

  function Jb(a) {
    return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
  }

  function Kb(a, b) {
    return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
  }

  function Lb(a) {
    return this._weekdays[a.day()];
  }

  function Mb(a) {
    return this._weekdaysShort[a.day()];
  }

  function Nb(a) {
    return this._weekdaysMin[a.day()];
  }

  function Ob(a) {
    var b, c, d;

    for (this._weekdaysParse = this._weekdaysParse || [], b = 0; 7 > b; b++) {
      if (this._weekdaysParse[b] || (c = Da([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b;
    }
  }

  function Pb(a) {
    var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != a ? (a = Kb(a, this.localeData()), this.add(a - b, "d")) : b;
  }

  function Qb(a) {
    var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == a ? b : this.add(a - b, "d");
  }

  function Rb(a) {
    return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
  }

  function Sb(a, b) {
    H(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }

  function Tb(a, b) {
    return b._meridiemParse;
  }

  function Ub(a) {
    return "p" === (a + "").toLowerCase().charAt(0);
  }

  function Vb(a, b, c) {
    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
  }

  function Wb(a, b) {
    b[ld] = q(1e3 * ("0." + a));
  }

  function Xb() {
    return this._isUTC ? "UTC" : "";
  }

  function Yb() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }

  function Zb(a) {
    return Da(1e3 * a);
  }

  function $b() {
    return Da.apply(null, arguments).parseZone();
  }

  function _b(a, b, c) {
    var d = this._calendar[a];
    return "function" == typeof d ? d.call(b, c) : d;
  }

  function ac(a) {
    var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];

    return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
      return a.slice(1);
    }), this._longDateFormat[a]);
  }

  function bc() {
    return this._invalidDate;
  }

  function cc(a) {
    return this._ordinal.replace("%d", a);
  }

  function dc(a) {
    return a;
  }

  function ec(a, b, c, d) {
    var e = this._relativeTime[c];
    return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a);
  }

  function fc(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];
    return "function" == typeof c ? c(b) : c.replace(/%s/i, b);
  }

  function gc(a) {
    var b, c;

    for (c in a) {
      b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
    }

    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
  }

  function hc(a, b, c, d) {
    var e = y(),
        f = h().set(d, b);
    return e[c](f, a);
  }

  function ic(a, b, c, d, e) {
    if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return hc(a, b, c, e);
    var f,
        g = [];

    for (f = 0; d > f; f++) {
      g[f] = hc(a, f, c, e);
    }

    return g;
  }

  function jc(a, b) {
    return ic(a, b, "months", 12, "month");
  }

  function kc(a, b) {
    return ic(a, b, "monthsShort", 12, "month");
  }

  function lc(a, b) {
    return ic(a, b, "weekdays", 7, "day");
  }

  function mc(a, b) {
    return ic(a, b, "weekdaysShort", 7, "day");
  }

  function nc(a, b) {
    return ic(a, b, "weekdaysMin", 7, "day");
  }

  function oc() {
    var a = this._data;
    return this._milliseconds = Wd(this._milliseconds), this._days = Wd(this._days), this._months = Wd(this._months), a.milliseconds = Wd(a.milliseconds), a.seconds = Wd(a.seconds), a.minutes = Wd(a.minutes), a.hours = Wd(a.hours), a.months = Wd(a.months), a.years = Wd(a.years), this;
  }

  function pc(a, b, c, d) {
    var e = Ya(b, c);
    return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble();
  }

  function qc(a, b) {
    return pc(this, a, b, 1);
  }

  function rc(a, b) {
    return pc(this, a, b, -1);
  }

  function sc(a) {
    return 0 > a ? Math.floor(a) : Math.ceil(a);
  }

  function tc() {
    var a,
        b,
        c,
        d,
        e,
        f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;
    return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * sc(vc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = p(f / 1e3), i.seconds = a % 60, b = p(a / 60), i.minutes = b % 60, c = p(b / 60), i.hours = c % 24, g += p(c / 24), e = p(uc(g)), h += e, g -= sc(vc(e)), d = p(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this;
  }

  function uc(a) {
    return 4800 * a / 146097;
  }

  function vc(a) {
    return 146097 * a / 4800;
  }

  function wc(a) {
    var b,
        c,
        d = this._milliseconds;
    if (a = A(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + uc(b), "month" === a ? c : c / 12;

    switch (b = this._days + Math.round(vc(this._months)), a) {
      case "week":
        return b / 7 + d / 6048e5;

      case "day":
        return b + d / 864e5;

      case "hour":
        return 24 * b + d / 36e5;

      case "minute":
        return 1440 * b + d / 6e4;

      case "second":
        return 86400 * b + d / 1e3;

      case "millisecond":
        return Math.floor(864e5 * b) + d;

      default:
        throw new Error("Unknown unit " + a);
    }
  }

  function xc() {
    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12);
  }

  function yc(a) {
    return function () {
      return this.as(a);
    };
  }

  function zc(a) {
    return a = A(a), this[a + "s"]();
  }

  function Ac(a) {
    return function () {
      return this._data[a];
    };
  }

  function Bc() {
    return p(this.days() / 7);
  }

  function Cc(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }

  function Dc(a, b, c) {
    var d = Ya(a).abs(),
        e = ke(d.as("s")),
        f = ke(d.as("m")),
        g = ke(d.as("h")),
        h = ke(d.as("d")),
        i = ke(d.as("M")),
        j = ke(d.as("y")),
        k = e < le.s && ["s", e] || 1 === f && ["m"] || f < le.m && ["mm", f] || 1 === g && ["h"] || g < le.h && ["hh", g] || 1 === h && ["d"] || h < le.d && ["dd", h] || 1 === i && ["M"] || i < le.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
    return k[2] = b, k[3] = +a > 0, k[4] = c, Cc.apply(null, k);
  }

  function Ec(a, b) {
    return void 0 === le[a] ? !1 : void 0 === b ? le[a] : (le[a] = b, !0);
  }

  function Fc(a) {
    var b = this.localeData(),
        c = Dc(this, !a, b);
    return a && (c = b.pastFuture(+this, c)), b.postformat(c);
  }

  function Gc() {
    var a,
        b,
        c,
        d = me(this._milliseconds) / 1e3,
        e = me(this._days),
        f = me(this._months);
    a = p(d / 60), b = p(a / 60), d %= 60, a %= 60, c = p(f / 12), f %= 12;
    var g = c,
        h = f,
        i = e,
        j = b,
        k = a,
        l = d,
        m = this.asSeconds();
    return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
  }

  var Hc,
      Ic,
      Jc = a.momentProperties = [],
      Kc = !1,
      Lc = {},
      Mc = {},
      Nc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      Oc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      Pc = {},
      Qc = {},
      Rc = /\d/,
      Sc = /\d\d/,
      Tc = /\d{3}/,
      Uc = /\d{4}/,
      Vc = /[+-]?\d{6}/,
      Wc = /\d\d?/,
      Xc = /\d{1,3}/,
      Yc = /\d{1,4}/,
      Zc = /[+-]?\d{1,6}/,
      $c = /\d+/,
      _c = /[+-]?\d+/,
      ad = /Z|[+-]\d\d:?\d\d/gi,
      bd = /[+-]?\d+(\.\d{1,3})?/,
      cd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      dd = {},
      ed = {},
      fd = 0,
      gd = 1,
      hd = 2,
      id = 3,
      jd = 4,
      kd = 5,
      ld = 6;
  H("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), H("MMM", 0, 0, function (a) {
    return this.localeData().monthsShort(this, a);
  }), H("MMMM", 0, 0, function (a) {
    return this.localeData().months(this, a);
  }), z("month", "M"), N("M", Wc), N("MM", Wc, Sc), N("MMM", cd), N("MMMM", cd), Q(["M", "MM"], function (a, b) {
    b[gd] = q(a) - 1;
  }), Q(["MMM", "MMMM"], function (a, b, c, d) {
    var e = c._locale.monthsParse(a, d, c._strict);

    null != e ? b[gd] = e : j(c).invalidMonth = a;
  });
  var md = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      nd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      od = {};
  a.suppressDeprecationWarnings = !1;
  var pd = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      qd = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]],
      rd = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]],
      sd = /^\/?Date\((\-?\d+)/i;
  a.createFromInputFallback = aa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
    a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
  }), H(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), z("year", "y"), N("Y", _c), N("YY", Wc, Sc), N("YYYY", Yc, Uc), N("YYYYY", Zc, Vc), N("YYYYYY", Zc, Vc), Q(["YYYYY", "YYYYYY"], fd), Q("YYYY", function (b, c) {
    c[fd] = 2 === b.length ? a.parseTwoDigitYear(b) : q(b);
  }), Q("YY", function (b, c) {
    c[fd] = a.parseTwoDigitYear(b);
  }), a.parseTwoDigitYear = function (a) {
    return q(a) + (q(a) > 68 ? 1900 : 2e3);
  };
  var td = C("FullYear", !1);
  H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), z("week", "w"), z("isoWeek", "W"), N("w", Wc), N("ww", Wc, Sc), N("W", Wc), N("WW", Wc, Sc), R(["w", "ww", "W", "WW"], function (a, b, c, d) {
    b[d.substr(0, 1)] = q(a);
  });
  var ud = {
    dow: 0,
    doy: 6
  };
  H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), z("dayOfYear", "DDD"), N("DDD", Xc), N("DDDD", Tc), Q(["DDD", "DDDD"], function (a, b, c) {
    c._dayOfYear = q(a);
  }), a.ISO_8601 = function () {};
  var vd = aa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
    var a = Da.apply(null, arguments);
    return this > a ? this : a;
  }),
      wd = aa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
    var a = Da.apply(null, arguments);
    return a > this ? this : a;
  });
  Ja("Z", ":"), Ja("ZZ", ""), N("Z", ad), N("ZZ", ad), Q(["Z", "ZZ"], function (a, b, c) {
    c._useUTC = !0, c._tzm = Ka(a);
  });
  var xd = /([\+\-]|\d\d)/gi;

  a.updateOffset = function () {};

  var yd = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
      zd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  Ya.fn = Ha.prototype;
  var Ad = ab(1, "add"),
      Bd = ab(-1, "subtract");
  a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  var Cd = aa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
    return void 0 === a ? this.localeData() : this.locale(a);
  });
  H(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), H(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), Db("gggg", "weekYear"), Db("ggggg", "weekYear"), Db("GGGG", "isoWeekYear"), Db("GGGGG", "isoWeekYear"), z("weekYear", "gg"), z("isoWeekYear", "GG"), N("G", _c), N("g", _c), N("GG", Wc, Sc), N("gg", Wc, Sc), N("GGGG", Yc, Uc), N("gggg", Yc, Uc), N("GGGGG", Zc, Vc), N("ggggg", Zc, Vc), R(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
    b[d.substr(0, 2)] = q(a);
  }), R(["gg", "GG"], function (b, c, d, e) {
    c[e] = a.parseTwoDigitYear(b);
  }), H("Q", 0, 0, "quarter"), z("quarter", "Q"), N("Q", Rc), Q("Q", function (a, b) {
    b[gd] = 3 * (q(a) - 1);
  }), H("D", ["DD", 2], "Do", "date"), z("date", "D"), N("D", Wc), N("DD", Wc, Sc), N("Do", function (a, b) {
    return a ? b._ordinalParse : b._ordinalParseLenient;
  }), Q(["D", "DD"], hd), Q("Do", function (a, b) {
    b[hd] = q(a.match(Wc)[0], 10);
  });
  var Dd = C("Date", !0);
  H("d", 0, "do", "day"), H("dd", 0, 0, function (a) {
    return this.localeData().weekdaysMin(this, a);
  }), H("ddd", 0, 0, function (a) {
    return this.localeData().weekdaysShort(this, a);
  }), H("dddd", 0, 0, function (a) {
    return this.localeData().weekdays(this, a);
  }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), z("day", "d"), z("weekday", "e"), z("isoWeekday", "E"), N("d", Wc), N("e", Wc), N("E", Wc), N("dd", cd), N("ddd", cd), N("dddd", cd), R(["dd", "ddd", "dddd"], function (a, b, c) {
    var d = c._locale.weekdaysParse(a);

    null != d ? b.d = d : j(c).invalidWeekday = a;
  }), R(["d", "e", "E"], function (a, b, c, d) {
    b[d] = q(a);
  });
  var Ed = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      Fd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      Gd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, function () {
    return this.hours() % 12 || 12;
  }), Sb("a", !0), Sb("A", !1), z("hour", "h"), N("a", Tb), N("A", Tb), N("H", Wc), N("h", Wc), N("HH", Wc, Sc), N("hh", Wc, Sc), Q(["H", "HH"], id), Q(["a", "A"], function (a, b, c) {
    c._isPm = c._locale.isPM(a), c._meridiem = a;
  }), Q(["h", "hh"], function (a, b, c) {
    b[id] = q(a), j(c).bigHour = !0;
  });
  var Hd = /[ap]\.?m?\.?/i,
      Id = C("Hours", !0);
  H("m", ["mm", 2], 0, "minute"), z("minute", "m"), N("m", Wc), N("mm", Wc, Sc), Q(["m", "mm"], jd);
  var Jd = C("Minutes", !1);
  H("s", ["ss", 2], 0, "second"), z("second", "s"), N("s", Wc), N("ss", Wc, Sc), Q(["s", "ss"], kd);
  var Kd = C("Seconds", !1);
  H("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), H(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), H(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), H(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), H(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), H(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), H(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), z("millisecond", "ms"), N("S", Xc, Rc), N("SS", Xc, Sc), N("SSS", Xc, Tc);
  var Ld;

  for (Ld = "SSSS"; Ld.length <= 9; Ld += "S") {
    N(Ld, $c);
  }

  for (Ld = "S"; Ld.length <= 9; Ld += "S") {
    Q(Ld, Wb);
  }

  var Md = C("Milliseconds", !1);
  H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
  var Nd = n.prototype;
  Nd.add = Ad, Nd.calendar = cb, Nd.clone = db, Nd.diff = ib, Nd.endOf = ub, Nd.format = mb, Nd.from = nb, Nd.fromNow = ob, Nd.to = pb, Nd.toNow = qb, Nd.get = F, Nd.invalidAt = Cb, Nd.isAfter = eb, Nd.isBefore = fb, Nd.isBetween = gb, Nd.isSame = hb, Nd.isValid = Ab, Nd.lang = Cd, Nd.locale = rb, Nd.localeData = sb, Nd.max = wd, Nd.min = vd, Nd.parsingFlags = Bb, Nd.set = F, Nd.startOf = tb, Nd.subtract = Bd, Nd.toArray = yb, Nd.toObject = zb, Nd.toDate = xb, Nd.toISOString = lb, Nd.toJSON = lb, Nd.toString = kb, Nd.unix = wb, Nd.valueOf = vb, Nd.year = td, Nd.isLeapYear = ia, Nd.weekYear = Fb, Nd.isoWeekYear = Gb, Nd.quarter = Nd.quarters = Jb, Nd.month = Y, Nd.daysInMonth = Z, Nd.week = Nd.weeks = na, Nd.isoWeek = Nd.isoWeeks = oa, Nd.weeksInYear = Ib, Nd.isoWeeksInYear = Hb, Nd.date = Dd, Nd.day = Nd.days = Pb, Nd.weekday = Qb, Nd.isoWeekday = Rb, Nd.dayOfYear = qa, Nd.hour = Nd.hours = Id, Nd.minute = Nd.minutes = Jd, Nd.second = Nd.seconds = Kd, Nd.millisecond = Nd.milliseconds = Md, Nd.utcOffset = Na, Nd.utc = Pa, Nd.local = Qa, Nd.parseZone = Ra, Nd.hasAlignedHourOffset = Sa, Nd.isDST = Ta, Nd.isDSTShifted = Ua, Nd.isLocal = Va, Nd.isUtcOffset = Wa, Nd.isUtc = Xa, Nd.isUTC = Xa, Nd.zoneAbbr = Xb, Nd.zoneName = Yb, Nd.dates = aa("dates accessor is deprecated. Use date instead.", Dd), Nd.months = aa("months accessor is deprecated. Use month instead", Y), Nd.years = aa("years accessor is deprecated. Use year instead", td), Nd.zone = aa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Oa);
  var Od = Nd,
      Pd = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  },
      Qd = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  },
      Rd = "Invalid date",
      Sd = "%d",
      Td = /\d{1,2}/,
      Ud = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  },
      Vd = s.prototype;
  Vd._calendar = Pd, Vd.calendar = _b, Vd._longDateFormat = Qd, Vd.longDateFormat = ac, Vd._invalidDate = Rd, Vd.invalidDate = bc, Vd._ordinal = Sd, Vd.ordinal = cc, Vd._ordinalParse = Td, Vd.preparse = dc, Vd.postformat = dc, Vd._relativeTime = Ud, Vd.relativeTime = ec, Vd.pastFuture = fc, Vd.set = gc, Vd.months = U, Vd._months = md, Vd.monthsShort = V, Vd._monthsShort = nd, Vd.monthsParse = W, Vd.week = ka, Vd._week = ud, Vd.firstDayOfYear = ma, Vd.firstDayOfWeek = la, Vd.weekdays = Lb, Vd._weekdays = Ed, Vd.weekdaysMin = Nb, Vd._weekdaysMin = Gd, Vd.weekdaysShort = Mb, Vd._weekdaysShort = Fd, Vd.weekdaysParse = Ob, Vd.isPM = Ub, Vd._meridiemParse = Hd, Vd.meridiem = Vb, w("en", {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === q(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
      return a + c;
    }
  }), a.lang = aa("moment.lang is deprecated. Use moment.locale instead.", w), a.langData = aa("moment.langData is deprecated. Use moment.localeData instead.", y);

  var Wd = Math.abs,
      Xd = yc("ms"),
      Yd = yc("s"),
      Zd = yc("m"),
      $d = yc("h"),
      _d = yc("d"),
      ae = yc("w"),
      be = yc("M"),
      ce = yc("y"),
      de = Ac("milliseconds"),
      ee = Ac("seconds"),
      fe = Ac("minutes"),
      ge = Ac("hours"),
      he = Ac("days"),
      ie = Ac("months"),
      je = Ac("years"),
      ke = Math.round,
      le = {
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  },
      me = Math.abs,
      ne = Ha.prototype;

  ne.abs = oc, ne.add = qc, ne.subtract = rc, ne.as = wc, ne.asMilliseconds = Xd, ne.asSeconds = Yd, ne.asMinutes = Zd, ne.asHours = $d, ne.asDays = _d, ne.asWeeks = ae, ne.asMonths = be, ne.asYears = ce, ne.valueOf = xc, ne._bubble = tc, ne.get = zc, ne.milliseconds = de, ne.seconds = ee, ne.minutes = fe, ne.hours = ge, ne.days = he, ne.weeks = Bc, ne.months = ie, ne.years = je, ne.humanize = Fc, ne.toISOString = Gc, ne.toString = Gc, ne.toJSON = Gc, ne.locale = rb, ne.localeData = sb, ne.toIsoString = aa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Gc), ne.lang = Cd, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), N("x", _c), N("X", bd), Q("X", function (a, b, c) {
    c._d = new Date(1e3 * parseFloat(a, 10));
  }), Q("x", function (a, b, c) {
    c._d = new Date(q(a));
  }), a.version = "2.10.6", b(Da), a.fn = Od, a.min = Fa, a.max = Ga, a.utc = h, a.unix = Zb, a.months = jc, a.isDate = d, a.locale = w, a.invalid = l, a.duration = Ya, a.isMoment = o, a.weekdays = lc, a.parseZone = $b, a.localeData = y, a.isDuration = Ia, a.monthsShort = kc, a.weekdaysMin = nc, a.defineLocale = x, a.weekdaysShort = mc, a.normalizeUnits = A, a.relativeTimeThreshold = Ec;
  var oe = a;
  return oe;
});
/*! version : 4.15.35
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */

!function (a) {
  "use strict";

  if ("function" == typeof define && define.amd) define(["jquery", "moment"], a);else if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports))) a(require("jquery"), require("moment"));else {
    if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
    if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
    a(jQuery, moment);
  }
}(function (a, b) {
  "use strict";

  if (!b) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");

  var c = function c(_c2, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = b().startOf("d"),
        l = k.clone(),
        m = !0,
        n = !1,
        o = !1,
        p = 0,
        q = [{
      clsName: "days",
      navFnc: "M",
      navStep: 1
    }, {
      clsName: "months",
      navFnc: "y",
      navStep: 1
    }, {
      clsName: "years",
      navFnc: "y",
      navStep: 10
    }, {
      clsName: "decades",
      navFnc: "y",
      navStep: 100
    }],
        r = ["days", "months", "years", "decades"],
        s = ["top", "bottom", "auto"],
        t = ["left", "right", "auto"],
        u = ["default", "top", "bottom"],
        v = {
      up: 38,
      38: "up",
      down: 40,
      40: "down",
      left: 37,
      37: "left",
      right: 39,
      39: "right",
      tab: 9,
      9: "tab",
      escape: 27,
      27: "escape",
      enter: 13,
      13: "enter",
      pageUp: 33,
      33: "pageUp",
      pageDown: 34,
      34: "pageDown",
      shift: 16,
      16: "shift",
      control: 17,
      17: "control",
      space: 32,
      32: "space",
      t: 84,
      84: "t",
      "delete": 46,
      46: "delete"
    },
        w = {},
        x = function x(a) {
      if ("string" != typeof a || a.length > 1) throw new TypeError("isEnabled expects a single character string parameter");

      switch (a) {
        case "y":
          return -1 !== g.indexOf("Y");

        case "M":
          return -1 !== g.indexOf("M");

        case "d":
          return -1 !== g.toLowerCase().indexOf("d");

        case "h":
        case "H":
          return -1 !== g.toLowerCase().indexOf("h");

        case "m":
          return -1 !== g.indexOf("m");

        case "s":
          return -1 !== g.indexOf("s");

        default:
          return !1;
      }
    },
        y = function y() {
      return x("h") || x("m") || x("s");
    },
        z = function z() {
      return x("y") || x("M") || x("d");
    },
        A = function A() {
      var b = a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action", "previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", d.calendarWeeks ? "6" : "5")).append(a("<th>").addClass("next").attr("data-action", "next").append(a("<span>").addClass(d.icons.next)))),
          c = a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan", d.calendarWeeks ? "8" : "7")));
      return [a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))), a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())), a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())), a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))];
    },
        B = function B() {
      var b = a("<tr>"),
          c = a("<tr>"),
          e = a("<tr>");
      return x("h") && (b.append(a("<td>").append(a("<a>").attr({
        href: "#",
        tabindex: "-1",
        title: "Increment Hour"
      }).addClass("btn").attr("data-action", "incrementHours").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({
        "data-time-component": "hours",
        title: "Pick Hour"
      }).attr("data-action", "showHours"))), e.append(a("<td>").append(a("<a>").attr({
        href: "#",
        tabindex: "-1",
        title: "Decrement Hour"
      }).addClass("btn").attr("data-action", "decrementHours").append(a("<span>").addClass(d.icons.down))))), x("m") && (x("h") && (b.append(a("<td>").addClass("separator")), c.append(a("<td>").addClass("separator").html(":")), e.append(a("<td>").addClass("separator"))), b.append(a("<td>").append(a("<a>").attr({
        href: "#",
        tabindex: "-1",
        title: "Increment Minute"
      }).addClass("btn").attr("data-action", "incrementMinutes").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({
        "data-time-component": "minutes",
        title: "Pick Minute"
      }).attr("data-action", "showMinutes"))), e.append(a("<td>").append(a("<a>").attr({
        href: "#",
        tabindex: "-1",
        title: "Decrement Minute"
      }).addClass("btn").attr("data-action", "decrementMinutes").append(a("<span>").addClass(d.icons.down))))), x("s") && (x("m") && (b.append(a("<td>").addClass("separator")), c.append(a("<td>").addClass("separator").html(":")), e.append(a("<td>").addClass("separator"))), b.append(a("<td>").append(a("<a>").attr({
        href: "#",
        tabindex: "-1",
        title: "Increment Second"
      }).addClass("btn").attr("data-action", "incrementSeconds").append(a("<span>").addClass(d.icons.up)))), c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({
        "data-time-component": "seconds",
        title: "Pick Second"
      }).attr("data-action", "showSeconds"))), e.append(a("<td>").append(a("<a>").attr({
        href: "#",
        tabindex: "-1",
        title: "Decrement Second"
      }).addClass("btn").attr("data-action", "decrementSeconds").append(a("<span>").addClass(d.icons.down))))), f || (b.append(a("<td>").addClass("separator")), c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({
        "data-action": "togglePeriod",
        tabindex: "-1",
        title: "Toggle Period"
      }))), e.append(a("<td>").addClass("separator"))), a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b, c, e]));
    },
        C = function C() {
      var b = a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),
          c = a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),
          d = a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),
          e = [B()];
      return x("h") && e.push(b), x("m") && e.push(c), x("s") && e.push(d), e;
    },
        D = function D() {
      var b = [];
      return d.showTodayButton && b.push(a("<td>").append(a("<a>").attr({
        "data-action": "today",
        title: d.tooltips.today
      }).append(a("<span>").addClass(d.icons.today)))), !d.sideBySide && z() && y() && b.push(a("<td>").append(a("<a>").attr({
        "data-action": "togglePicker",
        title: "Select Time"
      }).append(a("<span>").addClass(d.icons.time)))), d.showClear && b.push(a("<td>").append(a("<a>").attr({
        "data-action": "clear",
        title: d.tooltips.clear
      }).append(a("<span>").addClass(d.icons.clear)))), d.showClose && b.push(a("<td>").append(a("<a>").attr({
        "data-action": "close",
        title: d.tooltips.close
      }).append(a("<span>").addClass(d.icons.close)))), a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)));
    },
        E = function E() {
      var b = a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
          c = a("<div>").addClass("datepicker").append(A()),
          e = a("<div>").addClass("timepicker").append(C()),
          g = a("<ul>").addClass("list-unstyled"),
          h = a("<li>").addClass("picker-switch" + (d.collapse ? " accordion-toggle" : "")).append(D());
      return d.inline && b.removeClass("dropdown-menu"), f && b.addClass("usetwentyfour"), x("s") && !f && b.addClass("wider"), d.sideBySide && z() && y() ? (b.addClass("timepicker-sbs"), "top" === d.toolbarPlacement && b.append(h), b.append(a("<div>").addClass("row").append(c.addClass("col-md-6")).append(e.addClass("col-md-6"))), "bottom" === d.toolbarPlacement && b.append(h), b) : ("top" === d.toolbarPlacement && g.append(h), z() && g.append(a("<li>").addClass(d.collapse && y() ? "collapse in" : "").append(c)), "default" === d.toolbarPlacement && g.append(h), y() && g.append(a("<li>").addClass(d.collapse && z() ? "collapse" : "").append(e)), "bottom" === d.toolbarPlacement && g.append(h), b.append(g));
    },
        F = function F() {
      var b,
          e = {};
      return b = _c2.is("input") || d.inline ? _c2.data() : _c2.find("input").data(), b.dateOptions && b.dateOptions instanceof Object && (e = a.extend(!0, e, b.dateOptions)), a.each(d, function (a) {
        var c = "date" + a.charAt(0).toUpperCase() + a.slice(1);
        void 0 !== b[c] && (e[a] = b[c]);
      }), e;
    },
        G = function G() {
      var b,
          e = (n || _c2).position(),
          f = (n || _c2).offset(),
          g = d.widgetPositioning.vertical,
          h = d.widgetPositioning.horizontal;

      if (d.widgetParent) b = d.widgetParent.append(o);else if (_c2.is("input")) b = _c2.after(o).parent();else {
        if (d.inline) return void (b = _c2.append(o));
        b = _c2, _c2.children().first().after(o);
      }
      if ("auto" === g && (g = f.top + 1.5 * o.height() >= a(window).height() + a(window).scrollTop() && o.height() + _c2.outerHeight() < f.top ? "top" : "bottom"), "auto" === h && (h = b.width() < f.left + o.outerWidth() / 2 && f.left + o.outerWidth() > a(window).width() ? "right" : "left"), "top" === g ? o.addClass("top").removeClass("bottom") : o.addClass("bottom").removeClass("top"), "right" === h ? o.addClass("pull-right") : o.removeClass("pull-right"), "relative" !== b.css("position") && (b = b.parents().filter(function () {
        return "relative" === a(this).css("position");
      }).first()), 0 === b.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
      o.css({
        top: "top" === g ? "auto" : e.top + _c2.outerHeight(),
        bottom: "top" === g ? e.top + _c2.outerHeight() : "auto",
        left: "left" === h ? b === _c2 ? 0 : e.left : "auto",
        right: "left" === h ? "auto" : b.outerWidth() - _c2.outerWidth() - (b === _c2 ? 0 : e.left)
      });
    },
        H = function H(a) {
      "dp.change" === a.type && (a.date && a.date.isSame(a.oldDate) || !a.date && !a.oldDate) || _c2.trigger(a);
    },
        I = function I(a) {
      "y" === a && (a = "YYYY"), H({
        type: "dp.update",
        change: a,
        viewDate: l.clone()
      });
    },
        J = function J(a) {
      o && (a && (i = Math.max(p, Math.min(3, i + a))), o.find(".datepicker > div").hide().filter(".datepicker-" + q[i].clsName).show());
    },
        K = function K() {
      var b = a("<tr>"),
          c = l.clone().startOf("w").startOf("d");

      for (d.calendarWeeks === !0 && b.append(a("<th>").addClass("cw").text("#")); c.isBefore(l.clone().endOf("w"));) {
        b.append(a("<th>").addClass("dow").text(c.format("dd"))), c.add(1, "d");
      }

      o.find(".datepicker-days thead").append(b);
    },
        L = function L(a) {
      return d.disabledDates[a.format("YYYY-MM-DD")] === !0;
    },
        M = function M(a) {
      return d.enabledDates[a.format("YYYY-MM-DD")] === !0;
    },
        N = function N(a) {
      return d.disabledHours[a.format("H")] === !0;
    },
        O = function O(a) {
      return d.enabledHours[a.format("H")] === !0;
    },
        P = function P(b, c) {
      if (!b.isValid()) return !1;
      if (d.disabledDates && "d" === c && L(b)) return !1;
      if (d.enabledDates && "d" === c && !M(b)) return !1;
      if (d.minDate && b.isBefore(d.minDate, c)) return !1;
      if (d.maxDate && b.isAfter(d.maxDate, c)) return !1;
      if (d.daysOfWeekDisabled && "d" === c && -1 !== d.daysOfWeekDisabled.indexOf(b.day())) return !1;
      if (d.disabledHours && ("h" === c || "m" === c || "s" === c) && N(b)) return !1;
      if (d.enabledHours && ("h" === c || "m" === c || "s" === c) && !O(b)) return !1;

      if (d.disabledTimeIntervals && ("h" === c || "m" === c || "s" === c)) {
        var e = !1;
        if (a.each(d.disabledTimeIntervals, function () {
          return b.isBetween(this[0], this[1]) ? (e = !0, !1) : void 0;
        }), e) return !1;
      }

      return !0;
    },
        Q = function Q() {
      for (var b = [], c = l.clone().startOf("y").startOf("d"); c.isSame(l, "y");) {
        b.push(a("<span>").attr("data-action", "selectMonth").addClass("month").text(c.format("MMM"))), c.add(1, "M");
      }

      o.find(".datepicker-months td").empty().append(b);
    },
        R = function R() {
      var b = o.find(".datepicker-months"),
          c = b.find("th"),
          e = b.find("tbody").find("span");
      c.eq(0).find("span").attr("title", d.tooltips.prevYear), c.eq(1).attr("title", d.tooltips.selectYear), c.eq(2).find("span").attr("title", d.tooltips.nextYear), b.find(".disabled").removeClass("disabled"), P(l.clone().subtract(1, "y"), "y") || c.eq(0).addClass("disabled"), c.eq(1).text(l.year()), P(l.clone().add(1, "y"), "y") || c.eq(2).addClass("disabled"), e.removeClass("active"), k.isSame(l, "y") && !m && e.eq(k.month()).addClass("active"), e.each(function (b) {
        P(l.clone().month(b), "M") || a(this).addClass("disabled");
      });
    },
        S = function S() {
      var a = o.find(".datepicker-years"),
          b = a.find("th"),
          c = l.clone().subtract(5, "y"),
          e = l.clone().add(6, "y"),
          f = "";

      for (b.eq(0).find("span").attr("title", d.tooltips.nextDecade), b.eq(1).attr("title", d.tooltips.selectDecade), b.eq(2).find("span").attr("title", d.tooltips.prevDecade), a.find(".disabled").removeClass("disabled"), d.minDate && d.minDate.isAfter(c, "y") && b.eq(0).addClass("disabled"), b.eq(1).text(c.year() + "-" + e.year()), d.maxDate && d.maxDate.isBefore(e, "y") && b.eq(2).addClass("disabled"); !c.isAfter(e, "y");) {
        f += '<span data-action="selectYear" class="year' + (c.isSame(k, "y") && !m ? " active" : "") + (P(c, "y") ? "" : " disabled") + '">' + c.year() + "</span>", c.add(1, "y");
      }

      a.find("td").html(f);
    },
        T = function T() {
      var a = o.find(".datepicker-decades"),
          c = a.find("th"),
          e = b(l.isBefore(b({
        y: 1999
      })) ? {
        y: 1899
      } : {
        y: 1999
      }),
          f = e.clone().add(100, "y"),
          g = "";

      for (c.eq(0).find("span").attr("title", d.tooltips.prevCentury), c.eq(2).find("span").attr("title", d.tooltips.nextCentury), a.find(".disabled").removeClass("disabled"), (e.isSame(b({
        y: 1900
      })) || d.minDate && d.minDate.isAfter(e, "y")) && c.eq(0).addClass("disabled"), c.eq(1).text(e.year() + "-" + f.year()), (e.isSame(b({
        y: 2e3
      })) || d.maxDate && d.maxDate.isBefore(f, "y")) && c.eq(2).addClass("disabled"); !e.isAfter(f, "y");) {
        g += '<span data-action="selectDecade" class="decade' + (e.isSame(k, "y") ? " active" : "") + (P(e, "y") ? "" : " disabled") + '" data-selection="' + (e.year() + 6) + '">' + (e.year() + 1) + " - " + (e.year() + 12) + "</span>", e.add(12, "y");
      }

      g += "<span></span><span></span><span></span>", a.find("td").html(g);
    },
        U = function U() {
      var c,
          e,
          f,
          g,
          h = o.find(".datepicker-days"),
          i = h.find("th"),
          j = [];

      if (z()) {
        for (i.eq(0).find("span").attr("title", d.tooltips.prevMonth), i.eq(1).attr("title", d.tooltips.selectMonth), i.eq(2).find("span").attr("title", d.tooltips.nextMonth), h.find(".disabled").removeClass("disabled"), i.eq(1).text(l.format(d.dayViewHeaderFormat)), P(l.clone().subtract(1, "M"), "M") || i.eq(0).addClass("disabled"), P(l.clone().add(1, "M"), "M") || i.eq(2).addClass("disabled"), c = l.clone().startOf("M").startOf("w").startOf("d"), g = 0; 42 > g; g++) {
          0 === c.weekday() && (e = a("<tr>"), d.calendarWeeks && e.append('<td class="cw">' + c.week() + "</td>"), j.push(e)), f = "", c.isBefore(l, "M") && (f += " old"), c.isAfter(l, "M") && (f += " new"), c.isSame(k, "d") && !m && (f += " active"), P(c, "d") || (f += " disabled"), c.isSame(b(), "d") && (f += " today"), (0 === c.day() || 6 === c.day()) && (f += " weekend"), e.append('<td data-action="selectDay" data-day="' + c.format("L") + '" class="day' + f + '">' + c.date() + "</td>"), c.add(1, "d");
        }

        h.find("tbody").empty().append(j), R(), S(), T();
      }
    },
        V = function V() {
      var b = o.find(".timepicker-hours table"),
          c = l.clone().startOf("d"),
          d = [],
          e = a("<tr>");

      for (l.hour() > 11 && !f && c.hour(12); c.isSame(l, "d") && (f || l.hour() < 12 && c.hour() < 12 || l.hour() > 11);) {
        c.hour() % 4 === 0 && (e = a("<tr>"), d.push(e)), e.append('<td data-action="selectHour" class="hour' + (P(c, "h") ? "" : " disabled") + '">' + c.format(f ? "HH" : "hh") + "</td>"), c.add(1, "h");
      }

      b.empty().append(d);
    },
        W = function W() {
      for (var b = o.find(".timepicker-minutes table"), c = l.clone().startOf("h"), e = [], f = a("<tr>"), g = 1 === d.stepping ? 5 : d.stepping; l.isSame(c, "h");) {
        c.minute() % (4 * g) === 0 && (f = a("<tr>"), e.push(f)), f.append('<td data-action="selectMinute" class="minute' + (P(c, "m") ? "" : " disabled") + '">' + c.format("mm") + "</td>"), c.add(g, "m");
      }

      b.empty().append(e);
    },
        X = function X() {
      for (var b = o.find(".timepicker-seconds table"), c = l.clone().startOf("m"), d = [], e = a("<tr>"); l.isSame(c, "m");) {
        c.second() % 20 === 0 && (e = a("<tr>"), d.push(e)), e.append('<td data-action="selectSecond" class="second' + (P(c, "s") ? "" : " disabled") + '">' + c.format("ss") + "</td>"), c.add(5, "s");
      }

      b.empty().append(d);
    },
        Y = function Y() {
      var a,
          b,
          c = o.find(".timepicker span[data-time-component]");
      f || (a = o.find(".timepicker [data-action=togglePeriod]"), b = k.clone().add(k.hours() >= 12 ? -12 : 12, "h"), a.text(k.format("A")), P(b, "h") ? a.removeClass("disabled") : a.addClass("disabled")), c.filter("[data-time-component=hours]").text(k.format(f ? "HH" : "hh")), c.filter("[data-time-component=minutes]").text(k.format("mm")), c.filter("[data-time-component=seconds]").text(k.format("ss")), V(), W(), X();
    },
        Z = function Z() {
      o && (U(), Y());
    },
        $ = function $(a) {
      var b = m ? null : k;
      return a ? (a = a.clone().locale(d.locale), 1 !== d.stepping && a.minutes(Math.round(a.minutes() / d.stepping) * d.stepping % 60).seconds(0), void (P(a) ? (k = a, l = k.clone(), e.val(k.format(g)), _c2.data("date", k.format(g)), m = !1, Z(), H({
        type: "dp.change",
        date: k.clone(),
        oldDate: b
      })) : (d.keepInvalid || e.val(m ? "" : k.format(g)), H({
        type: "dp.error",
        date: a
      })))) : (m = !0, e.val(""), _c2.data("date", ""), H({
        type: "dp.change",
        date: !1,
        oldDate: b
      }), void Z());
    },
        _ = function _() {
      var b = !1;
      return o ? (o.find(".collapse").each(function () {
        var c = a(this).data("collapse");
        return c && c.transitioning ? (b = !0, !1) : !0;
      }), b ? j : (n && n.hasClass("btn") && n.toggleClass("active"), o.hide(), a(window).off("resize", G), o.off("click", "[data-action]"), o.off("mousedown", !1), o.remove(), o = !1, H({
        type: "dp.hide",
        date: k.clone()
      }), e.blur(), j)) : j;
    },
        aa = function aa() {
      $(null);
    },
        ba = {
      next: function next() {
        var a = q[i].navFnc;
        l.add(q[i].navStep, a), U(), I(a);
      },
      previous: function previous() {
        var a = q[i].navFnc;
        l.subtract(q[i].navStep, a), U(), I(a);
      },
      pickerSwitch: function pickerSwitch() {
        J(1);
      },
      selectMonth: function selectMonth(b) {
        var c = a(b.target).closest("tbody").find("span").index(a(b.target));
        l.month(c), i === p ? ($(k.clone().year(l.year()).month(l.month())), d.inline || _()) : (J(-1), U()), I("M");
      },
      selectYear: function selectYear(b) {
        var c = parseInt(a(b.target).text(), 10) || 0;
        l.year(c), i === p ? ($(k.clone().year(l.year())), d.inline || _()) : (J(-1), U()), I("YYYY");
      },
      selectDecade: function selectDecade(b) {
        var c = parseInt(a(b.target).data("selection"), 10) || 0;
        l.year(c), i === p ? ($(k.clone().year(l.year())), d.inline || _()) : (J(-1), U()), I("YYYY");
      },
      selectDay: function selectDay(b) {
        var c = l.clone();
        a(b.target).is(".old") && c.subtract(1, "M"), a(b.target).is(".new") && c.add(1, "M"), $(c.date(parseInt(a(b.target).text(), 10))), y() || d.keepOpen || d.inline || _();
      },
      incrementHours: function incrementHours() {
        var a = k.clone().add(1, "h");
        P(a, "h") && $(a);
      },
      incrementMinutes: function incrementMinutes() {
        var a = k.clone().add(d.stepping, "m");
        P(a, "m") && $(a);
      },
      incrementSeconds: function incrementSeconds() {
        var a = k.clone().add(1, "s");
        P(a, "s") && $(a);
      },
      decrementHours: function decrementHours() {
        var a = k.clone().subtract(1, "h");
        P(a, "h") && $(a);
      },
      decrementMinutes: function decrementMinutes() {
        var a = k.clone().subtract(d.stepping, "m");
        P(a, "m") && $(a);
      },
      decrementSeconds: function decrementSeconds() {
        var a = k.clone().subtract(1, "s");
        P(a, "s") && $(a);
      },
      togglePeriod: function togglePeriod() {
        $(k.clone().add(k.hours() >= 12 ? -12 : 12, "h"));
      },
      togglePicker: function togglePicker(b) {
        var c,
            e = a(b.target),
            f = e.closest("ul"),
            g = f.find(".in"),
            h = f.find(".collapse:not(.in)");

        if (g && g.length) {
          if (c = g.data("collapse"), c && c.transitioning) return;
          g.collapse ? (g.collapse("hide"), h.collapse("show")) : (g.removeClass("in"), h.addClass("in")), e.is("span") ? e.toggleClass(d.icons.time + " " + d.icons.date) : e.find("span").toggleClass(d.icons.time + " " + d.icons.date);
        }
      },
      showPicker: function showPicker() {
        o.find(".timepicker > div:not(.timepicker-picker)").hide(), o.find(".timepicker .timepicker-picker").show();
      },
      showHours: function showHours() {
        o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-hours").show();
      },
      showMinutes: function showMinutes() {
        o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-minutes").show();
      },
      showSeconds: function showSeconds() {
        o.find(".timepicker .timepicker-picker").hide(), o.find(".timepicker .timepicker-seconds").show();
      },
      selectHour: function selectHour(b) {
        var c = parseInt(a(b.target).text(), 10);
        f || (k.hours() >= 12 ? 12 !== c && (c += 12) : 12 === c && (c = 0)), $(k.clone().hours(c)), ba.showPicker.call(j);
      },
      selectMinute: function selectMinute(b) {
        $(k.clone().minutes(parseInt(a(b.target).text(), 10))), ba.showPicker.call(j);
      },
      selectSecond: function selectSecond(b) {
        $(k.clone().seconds(parseInt(a(b.target).text(), 10))), ba.showPicker.call(j);
      },
      clear: aa,
      today: function today() {
        P(b(), "d") && $(b());
      },
      close: _
    },
        ca = function ca(b) {
      return a(b.currentTarget).is(".disabled") ? !1 : (ba[a(b.currentTarget).data("action")].apply(j, arguments), !1);
    },
        da = function da() {
      var c,
          f = {
        year: function year(a) {
          return a.month(0).date(1).hours(0).seconds(0).minutes(0);
        },
        month: function month(a) {
          return a.date(1).hours(0).seconds(0).minutes(0);
        },
        day: function day(a) {
          return a.hours(0).seconds(0).minutes(0);
        },
        hour: function hour(a) {
          return a.seconds(0).minutes(0);
        },
        minute: function minute(a) {
          return a.seconds(0);
        }
      };
      return e.prop("disabled") || !d.ignoreReadonly && e.prop("readonly") || o ? j : (void 0 !== e.val() && 0 !== e.val().trim().length ? $(fa(e.val().trim())) : d.useCurrent && m && (e.is("input") && 0 === e.val().trim().length || d.inline) && (c = b(), "string" == typeof d.useCurrent && (c = f[d.useCurrent](c)), $(c)), o = E(), K(), Q(), o.find(".timepicker-hours").hide(), o.find(".timepicker-minutes").hide(), o.find(".timepicker-seconds").hide(), Z(), J(), a(window).on("resize", G), o.on("click", "[data-action]", ca), o.on("mousedown", !1), n && n.hasClass("btn") && n.toggleClass("active"), o.show(), G(), d.focusOnShow && !e.is(":focus") && e.focus(), H({
        type: "dp.show"
      }), j);
    },
        ea = function ea() {
      return o ? _() : da();
    },
        fa = function fa(a) {
      return a = void 0 === d.parseInputDate ? b.isMoment(a) || a instanceof Date ? b(a) : b(a, h, d.useStrict) : d.parseInputDate(a), a.locale(d.locale), a;
    },
        ga = function ga(a) {
      var b,
          c,
          e,
          f,
          g = null,
          h = [],
          i = {},
          k = a.which,
          l = "p";
      w[k] = l;

      for (b in w) {
        w.hasOwnProperty(b) && w[b] === l && (h.push(b), parseInt(b, 10) !== k && (i[b] = !0));
      }

      for (b in d.keyBinds) {
        if (d.keyBinds.hasOwnProperty(b) && "function" == typeof d.keyBinds[b] && (e = b.split(" "), e.length === h.length && v[k] === e[e.length - 1])) {
          for (f = !0, c = e.length - 2; c >= 0; c--) {
            if (!(v[e[c]] in i)) {
              f = !1;
              break;
            }
          }

          if (f) {
            g = d.keyBinds[b];
            break;
          }
        }
      }

      g && (g.call(j, o), a.stopPropagation(), a.preventDefault());
    },
        ha = function ha(a) {
      w[a.which] = "r", a.stopPropagation(), a.preventDefault();
    },
        ia = function ia(b) {
      var c = a(b.target).val().trim(),
          d = c ? fa(c) : null;
      return $(d), b.stopImmediatePropagation(), !1;
    },
        ja = function ja() {
      e.on({
        change: ia,
        blur: d.debug ? "" : _,
        keydown: ga,
        keyup: ha,
        focus: d.allowInputToggle ? da : ""
      }), _c2.is("input") ? e.on({
        focus: da
      }) : n && (n.on("click", ea), n.on("mousedown", !1));
    },
        ka = function ka() {
      e.off({
        change: ia,
        blur: blur,
        keydown: ga,
        keyup: ha,
        focus: d.allowInputToggle ? _ : ""
      }), _c2.is("input") ? e.off({
        focus: da
      }) : n && (n.off("click", ea), n.off("mousedown", !1));
    },
        la = function la(b) {
      var c = {};
      return a.each(b, function () {
        var a = fa(this);
        a.isValid() && (c[a.format("YYYY-MM-DD")] = !0);
      }), Object.keys(c).length ? c : !1;
    },
        ma = function ma(b) {
      var c = {};
      return a.each(b, function () {
        c[this] = !0;
      }), Object.keys(c).length ? c : !1;
    },
        na = function na() {
      var a = d.format || "L LT";
      g = a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (a) {
        var b = k.localeData().longDateFormat(a) || a;
        return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (a) {
          return k.localeData().longDateFormat(a) || a;
        });
      }), h = d.extraFormats ? d.extraFormats.slice() : [], h.indexOf(a) < 0 && h.indexOf(g) < 0 && h.push(g), f = g.toLowerCase().indexOf("a") < 1 && g.replace(/\[.*?\]/g, "").indexOf("h") < 1, x("y") && (p = 2), x("M") && (p = 1), x("d") && (p = 0), i = Math.max(p, i), m || $(k);
    };

    if (j.destroy = function () {
      _(), ka(), _c2.removeData("DateTimePicker"), _c2.removeData("date");
    }, j.toggle = ea, j.show = da, j.hide = _, j.disable = function () {
      return _(), n && n.hasClass("btn") && n.addClass("disabled"), e.prop("disabled", !0), j;
    }, j.enable = function () {
      return n && n.hasClass("btn") && n.removeClass("disabled"), e.prop("disabled", !1), j;
    }, j.ignoreReadonly = function (a) {
      if (0 === arguments.length) return d.ignoreReadonly;
      if ("boolean" != typeof a) throw new TypeError("ignoreReadonly () expects a boolean parameter");
      return d.ignoreReadonly = a, j;
    }, j.options = function (b) {
      if (0 === arguments.length) return a.extend(!0, {}, d);
      if (!(b instanceof Object)) throw new TypeError("options() options parameter should be an object");
      return a.extend(!0, d, b), a.each(d, function (a, b) {
        if (void 0 === j[a]) throw new TypeError("option " + a + " is not recognized!");
        j[a](b);
      }), j;
    }, j.date = function (a) {
      if (0 === arguments.length) return m ? null : k.clone();
      if (!(null === a || "string" == typeof a || b.isMoment(a) || a instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
      return $(null === a ? null : fa(a)), j;
    }, j.format = function (a) {
      if (0 === arguments.length) return d.format;
      if ("string" != typeof a && ("boolean" != typeof a || a !== !1)) throw new TypeError("format() expects a sting or boolean:false parameter " + a);
      return d.format = a, g && na(), j;
    }, j.dayViewHeaderFormat = function (a) {
      if (0 === arguments.length) return d.dayViewHeaderFormat;
      if ("string" != typeof a) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
      return d.dayViewHeaderFormat = a, j;
    }, j.extraFormats = function (a) {
      if (0 === arguments.length) return d.extraFormats;
      if (a !== !1 && !(a instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
      return d.extraFormats = a, h && na(), j;
    }, j.disabledDates = function (b) {
      if (0 === arguments.length) return d.disabledDates ? a.extend({}, d.disabledDates) : d.disabledDates;
      if (!b) return d.disabledDates = !1, Z(), j;
      if (!(b instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
      return d.disabledDates = la(b), d.enabledDates = !1, Z(), j;
    }, j.enabledDates = function (b) {
      if (0 === arguments.length) return d.enabledDates ? a.extend({}, d.enabledDates) : d.enabledDates;
      if (!b) return d.enabledDates = !1, Z(), j;
      if (!(b instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
      return d.enabledDates = la(b), d.disabledDates = !1, Z(), j;
    }, j.daysOfWeekDisabled = function (a) {
      if (0 === arguments.length) return d.daysOfWeekDisabled.splice(0);
      if ("boolean" == typeof a && !a) return d.daysOfWeekDisabled = !1, Z(), j;
      if (!(a instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");

      if (d.daysOfWeekDisabled = a.reduce(function (a, b) {
        return b = parseInt(b, 10), b > 6 || 0 > b || isNaN(b) ? a : (-1 === a.indexOf(b) && a.push(b), a);
      }, []).sort(), d.useCurrent && !d.keepInvalid) {
        for (var b = 0; !P(k, "d");) {
          if (k.add(1, "d"), 7 === b) throw "Tried 7 times to find a valid date";
          b++;
        }

        $(k);
      }

      return Z(), j;
    }, j.maxDate = function (a) {
      if (0 === arguments.length) return d.maxDate ? d.maxDate.clone() : d.maxDate;
      if ("boolean" == typeof a && a === !1) return d.maxDate = !1, Z(), j;
      "string" == typeof a && ("now" === a || "moment" === a) && (a = b());
      var c = fa(a);
      if (!c.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + a);
      if (d.minDate && c.isBefore(d.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + c.format(g));
      return d.maxDate = c, d.useCurrent && !d.keepInvalid && k.isAfter(a) && $(d.maxDate), l.isAfter(c) && (l = c.clone().subtract(d.stepping, "m")), Z(), j;
    }, j.minDate = function (a) {
      if (0 === arguments.length) return d.minDate ? d.minDate.clone() : d.minDate;
      if ("boolean" == typeof a && a === !1) return d.minDate = !1, Z(), j;
      "string" == typeof a && ("now" === a || "moment" === a) && (a = b());
      var c = fa(a);
      if (!c.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + a);
      if (d.maxDate && c.isAfter(d.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + c.format(g));
      return d.minDate = c, d.useCurrent && !d.keepInvalid && k.isBefore(a) && $(d.minDate), l.isBefore(c) && (l = c.clone().add(d.stepping, "m")), Z(), j;
    }, j.defaultDate = function (a) {
      if (0 === arguments.length) return d.defaultDate ? d.defaultDate.clone() : d.defaultDate;
      if (!a) return d.defaultDate = !1, j;
      "string" == typeof a && ("now" === a || "moment" === a) && (a = b());
      var c = fa(a);
      if (!c.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + a);
      if (!P(c)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
      return d.defaultDate = c, (d.defaultDate && d.inline || "" === e.val().trim() && void 0 === e.attr("placeholder")) && $(d.defaultDate), j;
    }, j.locale = function (a) {
      if (0 === arguments.length) return d.locale;
      if (!b.localeData(a)) throw new TypeError("locale() locale " + a + " is not loaded from moment locales!");
      return d.locale = a, k.locale(d.locale), l.locale(d.locale), g && na(), o && (_(), da()), j;
    }, j.stepping = function (a) {
      return 0 === arguments.length ? d.stepping : (a = parseInt(a, 10), (isNaN(a) || 1 > a) && (a = 1), d.stepping = a, j);
    }, j.useCurrent = function (a) {
      var b = ["year", "month", "day", "hour", "minute"];
      if (0 === arguments.length) return d.useCurrent;
      if ("boolean" != typeof a && "string" != typeof a) throw new TypeError("useCurrent() expects a boolean or string parameter");
      if ("string" == typeof a && -1 === b.indexOf(a.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + b.join(", "));
      return d.useCurrent = a, j;
    }, j.collapse = function (a) {
      if (0 === arguments.length) return d.collapse;
      if ("boolean" != typeof a) throw new TypeError("collapse() expects a boolean parameter");
      return d.collapse === a ? j : (d.collapse = a, o && (_(), da()), j);
    }, j.icons = function (b) {
      if (0 === arguments.length) return a.extend({}, d.icons);
      if (!(b instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
      return a.extend(d.icons, b), o && (_(), da()), j;
    }, j.tooltips = function (b) {
      if (0 === arguments.length) return a.extend({}, d.tooltips);
      if (!(b instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
      return a.extend(d.tooltips, b), o && (_(), da()), j;
    }, j.useStrict = function (a) {
      if (0 === arguments.length) return d.useStrict;
      if ("boolean" != typeof a) throw new TypeError("useStrict() expects a boolean parameter");
      return d.useStrict = a, j;
    }, j.sideBySide = function (a) {
      if (0 === arguments.length) return d.sideBySide;
      if ("boolean" != typeof a) throw new TypeError("sideBySide() expects a boolean parameter");
      return d.sideBySide = a, o && (_(), da()), j;
    }, j.viewMode = function (a) {
      if (0 === arguments.length) return d.viewMode;
      if ("string" != typeof a) throw new TypeError("viewMode() expects a string parameter");
      if (-1 === r.indexOf(a)) throw new TypeError("viewMode() parameter must be one of (" + r.join(", ") + ") value");
      return d.viewMode = a, i = Math.max(r.indexOf(a), p), J(), j;
    }, j.toolbarPlacement = function (a) {
      if (0 === arguments.length) return d.toolbarPlacement;
      if ("string" != typeof a) throw new TypeError("toolbarPlacement() expects a string parameter");
      if (-1 === u.indexOf(a)) throw new TypeError("toolbarPlacement() parameter must be one of (" + u.join(", ") + ") value");
      return d.toolbarPlacement = a, o && (_(), da()), j;
    }, j.widgetPositioning = function (b) {
      if (0 === arguments.length) return a.extend({}, d.widgetPositioning);
      if ("[object Object]" !== {}.toString.call(b)) throw new TypeError("widgetPositioning() expects an object variable");

      if (b.horizontal) {
        if ("string" != typeof b.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
        if (b.horizontal = b.horizontal.toLowerCase(), -1 === t.indexOf(b.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + t.join(", ") + ")");
        d.widgetPositioning.horizontal = b.horizontal;
      }

      if (b.vertical) {
        if ("string" != typeof b.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
        if (b.vertical = b.vertical.toLowerCase(), -1 === s.indexOf(b.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + s.join(", ") + ")");
        d.widgetPositioning.vertical = b.vertical;
      }

      return Z(), j;
    }, j.calendarWeeks = function (a) {
      if (0 === arguments.length) return d.calendarWeeks;
      if ("boolean" != typeof a) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
      return d.calendarWeeks = a, Z(), j;
    }, j.showTodayButton = function (a) {
      if (0 === arguments.length) return d.showTodayButton;
      if ("boolean" != typeof a) throw new TypeError("showTodayButton() expects a boolean parameter");
      return d.showTodayButton = a, o && (_(), da()), j;
    }, j.showClear = function (a) {
      if (0 === arguments.length) return d.showClear;
      if ("boolean" != typeof a) throw new TypeError("showClear() expects a boolean parameter");
      return d.showClear = a, o && (_(), da()), j;
    }, j.widgetParent = function (b) {
      if (0 === arguments.length) return d.widgetParent;
      if ("string" == typeof b && (b = a(b)), null !== b && "string" != typeof b && !(b instanceof a)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
      return d.widgetParent = b, o && (_(), da()), j;
    }, j.keepOpen = function (a) {
      if (0 === arguments.length) return d.keepOpen;
      if ("boolean" != typeof a) throw new TypeError("keepOpen() expects a boolean parameter");
      return d.keepOpen = a, j;
    }, j.focusOnShow = function (a) {
      if (0 === arguments.length) return d.focusOnShow;
      if ("boolean" != typeof a) throw new TypeError("focusOnShow() expects a boolean parameter");
      return d.focusOnShow = a, j;
    }, j.inline = function (a) {
      if (0 === arguments.length) return d.inline;
      if ("boolean" != typeof a) throw new TypeError("inline() expects a boolean parameter");
      return d.inline = a, j;
    }, j.clear = function () {
      return aa(), j;
    }, j.keyBinds = function (a) {
      return d.keyBinds = a, j;
    }, j.debug = function (a) {
      if ("boolean" != typeof a) throw new TypeError("debug() expects a boolean parameter");
      return d.debug = a, j;
    }, j.allowInputToggle = function (a) {
      if (0 === arguments.length) return d.allowInputToggle;
      if ("boolean" != typeof a) throw new TypeError("allowInputToggle() expects a boolean parameter");
      return d.allowInputToggle = a, j;
    }, j.showClose = function (a) {
      if (0 === arguments.length) return d.showClose;
      if ("boolean" != typeof a) throw new TypeError("showClose() expects a boolean parameter");
      return d.showClose = a, j;
    }, j.keepInvalid = function (a) {
      if (0 === arguments.length) return d.keepInvalid;
      if ("boolean" != typeof a) throw new TypeError("keepInvalid() expects a boolean parameter");
      return d.keepInvalid = a, j;
    }, j.datepickerInput = function (a) {
      if (0 === arguments.length) return d.datepickerInput;
      if ("string" != typeof a) throw new TypeError("datepickerInput() expects a string parameter");
      return d.datepickerInput = a, j;
    }, j.parseInputDate = function (a) {
      if (0 === arguments.length) return d.parseInputDate;
      if ("function" != typeof a) throw new TypeError("parseInputDate() sholud be as function");
      return d.parseInputDate = a, j;
    }, j.disabledTimeIntervals = function (b) {
      if (0 === arguments.length) return d.disabledTimeIntervals ? a.extend({}, d.disabledTimeIntervals) : d.disabledTimeIntervals;
      if (!b) return d.disabledTimeIntervals = !1, Z(), j;
      if (!(b instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
      return d.disabledTimeIntervals = b, Z(), j;
    }, j.disabledHours = function (b) {
      if (0 === arguments.length) return d.disabledHours ? a.extend({}, d.disabledHours) : d.disabledHours;
      if (!b) return d.disabledHours = !1, Z(), j;
      if (!(b instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");

      if (d.disabledHours = ma(b), d.enabledHours = !1, d.useCurrent && !d.keepInvalid) {
        for (var c = 0; !P(k, "h");) {
          if (k.add(1, "h"), 24 === c) throw "Tried 24 times to find a valid date";
          c++;
        }

        $(k);
      }

      return Z(), j;
    }, j.enabledHours = function (b) {
      if (0 === arguments.length) return d.enabledHours ? a.extend({}, d.enabledHours) : d.enabledHours;
      if (!b) return d.enabledHours = !1, Z(), j;
      if (!(b instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");

      if (d.enabledHours = ma(b), d.disabledHours = !1, d.useCurrent && !d.keepInvalid) {
        for (var c = 0; !P(k, "h");) {
          if (k.add(1, "h"), 24 === c) throw "Tried 24 times to find a valid date";
          c++;
        }

        $(k);
      }

      return Z(), j;
    }, j.viewDate = function (a) {
      if (0 === arguments.length) return l.clone();
      if (!a) return l = k.clone(), j;
      if (!("string" == typeof a || b.isMoment(a) || a instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
      return l = fa(a), I(), j;
    }, _c2.is("input")) e = _c2;else if (e = _c2.find(d.datepickerInput), 0 === e.size()) e = _c2.find("input");else if (!e.is("input")) throw new Error('CSS class "' + d.datepickerInput + '" cannot be applied to non input element');
    if (_c2.hasClass("input-group") && (n = 0 === _c2.find(".datepickerbutton").size() ? _c2.find(".input-group-addon") : _c2.find(".datepickerbutton")), !d.inline && !e.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
    return a.extend(!0, d, F()), j.options(d), na(), ja(), e.prop("disabled") && j.disable(), e.is("input") && 0 !== e.val().trim().length ? $(fa(e.val().trim())) : d.defaultDate && void 0 === e.attr("placeholder") && $(d.defaultDate), d.inline && da(), j;
  };

  a.fn.datetimepicker = function (b) {
    return this.each(function () {
      var d = a(this);
      d.data("DateTimePicker") || (b = a.extend(!0, {}, a.fn.datetimepicker.defaults, b), d.data("DateTimePicker", c(d, b)));
    });
  }, a.fn.datetimepicker.defaults = {
    format: !1,
    dayViewHeaderFormat: "MMMM YYYY",
    extraFormats: !1,
    stepping: 1,
    minDate: !1,
    maxDate: !1,
    useCurrent: !0,
    collapse: !0,
    locale: b.locale(),
    defaultDate: !1,
    disabledDates: !1,
    enabledDates: !1,
    icons: {
      time: "glyphicon glyphicon-time",
      date: "glyphicon glyphicon-calendar",
      up: "glyphicon glyphicon-chevron-up",
      down: "glyphicon glyphicon-chevron-down",
      previous: "glyphicon glyphicon-chevron-left",
      next: "glyphicon glyphicon-chevron-right",
      today: "glyphicon glyphicon-screenshot",
      clear: "glyphicon glyphicon-trash",
      close: "glyphicon glyphicon-remove"
    },
    tooltips: {
      today: "Go to today",
      clear: "Clear selection",
      close: "Close the picker",
      selectMonth: "Select Month",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      selectYear: "Select Year",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      selectDecade: "Select Decade",
      prevDecade: "Previous Decade",
      nextDecade: "Next Decade",
      prevCentury: "Previous Century",
      nextCentury: "Next Century"
    },
    useStrict: !1,
    sideBySide: !1,
    daysOfWeekDisabled: !1,
    calendarWeeks: !1,
    viewMode: "days",
    toolbarPlacement: "default",
    showTodayButton: !1,
    showClear: !1,
    showClose: !1,
    widgetPositioning: {
      horizontal: "auto",
      vertical: "auto"
    },
    widgetParent: null,
    ignoreReadonly: !1,
    keepOpen: !1,
    focusOnShow: !0,
    inline: !1,
    keepInvalid: !1,
    datepickerInput: ".datepickerinput",
    keyBinds: {
      up: function up(a) {
        if (a) {
          var c = this.date() || b();
          a.find(".datepicker").is(":visible") ? this.date(c.clone().subtract(7, "d")) : this.date(c.clone().add(this.stepping(), "m"));
        }
      },
      down: function down(a) {
        if (!a) return void this.show();
        var c = this.date() || b();
        a.find(".datepicker").is(":visible") ? this.date(c.clone().add(7, "d")) : this.date(c.clone().subtract(this.stepping(), "m"));
      },
      "control up": function controlUp(a) {
        if (a) {
          var c = this.date() || b();
          a.find(".datepicker").is(":visible") ? this.date(c.clone().subtract(1, "y")) : this.date(c.clone().add(1, "h"));
        }
      },
      "control down": function controlDown(a) {
        if (a) {
          var c = this.date() || b();
          a.find(".datepicker").is(":visible") ? this.date(c.clone().add(1, "y")) : this.date(c.clone().subtract(1, "h"));
        }
      },
      left: function left(a) {
        if (a) {
          var c = this.date() || b();
          a.find(".datepicker").is(":visible") && this.date(c.clone().subtract(1, "d"));
        }
      },
      right: function right(a) {
        if (a) {
          var c = this.date() || b();
          a.find(".datepicker").is(":visible") && this.date(c.clone().add(1, "d"));
        }
      },
      pageUp: function pageUp(a) {
        if (a) {
          var c = this.date() || b();
          a.find(".datepicker").is(":visible") && this.date(c.clone().subtract(1, "M"));
        }
      },
      pageDown: function pageDown(a) {
        if (a) {
          var c = this.date() || b();
          a.find(".datepicker").is(":visible") && this.date(c.clone().add(1, "M"));
        }
      },
      enter: function enter() {
        this.hide();
      },
      escape: function escape() {
        this.hide();
      },
      "control space": function controlSpace(a) {
        a.find(".timepicker").is(":visible") && a.find('.btn[data-action="togglePeriod"]').click();
      },
      t: function t() {
        this.date(b());
      },
      "delete": function _delete() {
        this.clear();
      }
    },
    debug: !1,
    allowInputToggle: !1,
    disabledTimeIntervals: !1,
    disabledHours: !1,
    enabledHours: !1,
    viewDate: !1
  };
});