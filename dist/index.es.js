(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("._modal-overlay_pac0m_1{position:fixed;width:100vw;height:100vh;background-color:#00000080;display:flex;align-items:center;justify-content:center;inset:0;z-index:20;opacity:0}._modal-container_pac0m_14{padding:12px 64px;background-color:#fff;box-shadow:2px 2px 30px 10px #ffffff1a;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:600px;box-sizing:border-box}@media (max-width: 768px){._modal-container_pac0m_14{width:calc(100% - 32px);max-width:calc(100% - 32px);padding:24px}}._modal-title_pac0m_36{display:flex;font-size:16px;color:#000;font-weight:700;align-items:center;justify-content:center}._modal-content_pac0m_45{font-size:16px;margin-top:20px;color:#000;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}._modal-actions_pac0m_56{width:100%;display:flex;justify-content:space-around;margin-top:24px;gap:16px}@media (max-width: 768px){._modal-actions_pac0m_56{gap:8px}}._modal-button_pac0m_69{padding:8px 24px;cursor:pointer;display:flex;align-items:center;justify-content:center;width:136px;margin-top:20px;border-radius:8px;font-size:14px;color:#fff;background-color:#000}._modal-button-cancel_pac0m_82{background-color:#0000004d}@keyframes _board_show_pac0m_1{0%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}@keyframes _overlay_show_pac0m_1{0%{opacity:0}to{opacity:1}}@keyframes _board_hide_pac0m_1{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.5)}}@keyframes _overlay_hide_pac0m_1{0%{opacity:1}to{opacity:0}}._overlay-show_pac0m_134{animation:_overlay_show_pac0m_1 .3s forwards}._overlay-hide_pac0m_137{animation:_overlay_hide_pac0m_1 .3s forwards}._container-show_pac0m_140{animation:_board_show_pac0m_1 .3s forwards}._container-hide_pac0m_143{animation:_board_hide_pac0m_1 .3s forwards}")),document.head.appendChild(a)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import Pe, { useState as Q } from "react";
import { createRoot as Se } from "react-dom/client";
var B = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function mr() {
  if (xe) return N;
  xe = 1;
  var E = Pe, R = Symbol.for("react.element"), j = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, b = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(d, u, x) {
    var m, C = {}, O = null, W = null;
    x !== void 0 && (O = "" + x), u.key !== void 0 && (O = "" + u.key), u.ref !== void 0 && (W = u.ref);
    for (m in u) y.call(u, m) && !T.hasOwnProperty(m) && (C[m] = u[m]);
    if (d && d.defaultProps) for (m in u = d.defaultProps, u) C[m] === void 0 && (C[m] = u[m]);
    return { $$typeof: R, type: d, key: O, ref: W, props: C, _owner: b.current };
  }
  return N.Fragment = j, N.jsx = v, N.jsxs = v, N;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function pr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var E = Pe, R = Symbol.for("react.element"), j = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), d = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ee = Symbol.iterator, ke = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var $ = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = $.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var c = t.map(function(o) {
          return String(o);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Ae = !1, Fe = !1, Ie = !1, Ne = !1, Ye = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === T || Ye || e === b || e === x || e === m || Ne || e === W || Ae || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === C || e.$$typeof === v || e.$$typeof === d || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case j:
          return "Portal";
        case T:
          return "Profiler";
        case b:
          return "StrictMode";
        case x:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return te(r) + ".Consumer";
          case v:
            var t = e;
            return te(t._context) + ".Provider";
          case u:
            return Le(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case O: {
            var i = e, c = i._payload, o = i._init;
            try {
              return P(o(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, ne, ae, oe, ie, ce, se, le;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Ve() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ce = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Me() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ne
            }),
            info: S({}, e, {
              value: ae
            }),
            warn: S({}, e, {
              value: oe
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: ce
            }),
            groupCollapsed: S({}, e, {
              value: se
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = $.ReactCurrentDispatcher, q;
    function L(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var K = !1, V;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ue();
    }
    function fe(e, r) {
      if (!e || K)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = J.current, J.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (g) {
              n = g;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (g) {
              n = g;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (g) {
            n = g;
          }
          e();
        }
      } catch (g) {
        if (g && n && typeof g.stack == "string") {
          for (var a = g.stack.split(`
`), _ = n.stack.split(`
`), l = a.length - 1, f = _.length - 1; l >= 1 && f >= 0 && a[l] !== _[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== _[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== _[f]) {
                    var w = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, w), w;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = c, Me(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", k = A ? L(A) : "";
      return typeof e == "function" && V.set(e, k), k;
    }
    function Be(e, r, t) {
      return fe(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Je(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case x:
          return L("Suspense");
        case m:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Be(e.render);
          case C:
            return M(e.type, r, t);
          case O: {
            var n = e, i = n._payload, c = n._init;
            try {
              return M(c(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, de = {}, ve = $.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var c = Function.call.bind(I);
        for (var o in e)
          if (c(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var _ = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (U(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, U(i), p("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Ke = Array.isArray;
    function G(e) {
      return Ke(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function pe(e) {
      if (ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), me(e);
    }
    var _e = $.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ye;
    function He(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function er(e, r) {
      {
        var t = function() {
          he || (he = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, c, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var c, o = {}, a = null, _ = null;
        t !== void 0 && (pe(t), a = "" + t), Ze(r) && (pe(r.key), a = "" + r.key), He(r) && (_ = r.ref, Qe(r, i));
        for (c in r)
          I.call(r, c) && !Xe.hasOwnProperty(c) && (o[c] = r[c]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (c in l)
            o[c] === void 0 && (o[c] = l[c]);
        }
        if (a || _) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, f), _ && rr(o, f);
        }
        return tr(e, a, _, i, n, _e.current, o);
      }
    }
    var z = $.ReactCurrentOwner, be = $.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === R;
    }
    function ge() {
      {
        if (z.current) {
          var e = P(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Ee = {};
    function or(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + P(e._owner.type) + "."), D(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Te(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Re(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = $e(e);
          if (typeof i == "function" && i !== e.entries)
            for (var c = i.call(e), o; !(o = c.next()).done; )
              H(o.value) && Re(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = P(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var we = {};
    function je(e, r, t, n, i, c) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = ar();
          _ ? a += _ : a += ge();
          var l;
          e === null ? l = "null" : G(e) ? l = "array" : e !== void 0 && e.$$typeof === R ? (l = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = nr(e, r, t, i, c);
        if (f == null)
          return f;
        if (o) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (G(w)) {
                for (var A = 0; A < w.length; A++)
                  Te(w[A], e);
                Object.freeze && Object.freeze(w);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Te(w, e);
        }
        if (I.call(r, "key")) {
          var k = P(e), g = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), Z = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[k + Z]) {
            var dr = g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Z, k, dr, k), we[k + Z] = !0;
          }
        }
        return e === y ? cr(f) : ir(f), f;
      }
    }
    function sr(e, r, t) {
      return je(e, r, t, !0);
    }
    function lr(e, r, t) {
      return je(e, r, t, !1);
    }
    var ur = lr, fr = sr;
    Y.Fragment = y, Y.jsx = ur, Y.jsxs = fr;
  }()), Y;
}
var Oe;
function _r() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? B.exports = mr() : B.exports = pr()), B.exports;
}
var h = _r();
const s = {
  "modal-overlay": "_modal-overlay_pac0m_1",
  "modal-container": "_modal-container_pac0m_14",
  "modal-title": "_modal-title_pac0m_36",
  "modal-content": "_modal-content_pac0m_45",
  "modal-actions": "_modal-actions_pac0m_56",
  "modal-button": "_modal-button_pac0m_69",
  "modal-button-cancel": "_modal-button-cancel_pac0m_82",
  "overlay-show": "_overlay-show_pac0m_134",
  "overlay-hide": "_overlay-hide_pac0m_137",
  "container-show": "_container-show_pac0m_140",
  "container-hide": "_container-hide_pac0m_143"
}, hr = ({
  title: E = "",
  content: R = "",
  yes: j = () => {
  },
  confirm_text: y = "Okay"
}) => {
  const [b, T] = Q(!1), v = () => {
    T(!0);
  };
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      className: `${s["modal-overlay"]}  ${b ? s["overlay-hide"] : s["overlay-show"]} react-aac-overlay`,
      children: /* @__PURE__ */ h.jsxs(
        "div",
        {
          onAnimationEnd: (d) => {
            d.stopPropagation(), b && j();
          },
          className: `${s["modal-container"]} ${b ? s["container-hide"] : s["container-show"]} react-aac-container`,
          children: [
            !!E && /* @__PURE__ */ h.jsx("div", { className: `${s["modal-title"]} react-aac-title`, children: E }),
            /* @__PURE__ */ h.jsx("div", { className: `${s["modal-content"]} react-aac-content`, children: R }),
            /* @__PURE__ */ h.jsx("div", { className: `${s["modal-actions"]} react-aac-actions`, children: /* @__PURE__ */ h.jsx(
              "div",
              {
                className: `${s["modal-button"]} react-aac-btn`,
                onClick: v,
                children: y
              }
            ) })
          ]
        }
      )
    }
  );
}, Er = async ({
  title: E = "",
  content: R = "I am an alert content",
  confirm_text: j = "Okay",
  node_name: y = "confirm-and-alert"
}) => new Promise((b) => {
  const T = document.getElementById(y), v = Se(T), d = () => {
    v.unmount(), b(!0);
  };
  v.render(
    /* @__PURE__ */ h.jsx(
      hr,
      {
        title: E,
        content: R,
        confirm_text: j,
        yes: d
      }
    )
  );
}), yr = ({
  title: E = "I am a confirm title",
  content: R = "I am a confirm content",
  yes: j = () => {
  },
  no: y = () => {
  },
  confirm_text: b = "Confirm",
  cancel_text: T = "Cancel"
}) => {
  const [v, d] = Q(!1), [u, x] = Q(""), m = () => {
    d(!0), x("yes");
  }, C = () => {
    d(!0), x("no");
  };
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      className: `${s["modal-overlay"]}  ${v ? s["overlay-hide"] : s["overlay-show"]} react-aac-overlay`,
      children: /* @__PURE__ */ h.jsxs(
        "div",
        {
          onAnimationEnd: (O) => {
            O.stopPropagation(), u === "no" && y(), u === "yes" && j();
          },
          className: `${s["modal-container"]} ${v ? s["container-hide"] : s["container-show"]} react-aac-container`,
          children: [
            !!E && /* @__PURE__ */ h.jsx("div", { className: `${s["modal-title"]} react-aac-title`, children: E }),
            /* @__PURE__ */ h.jsx("div", { className: `${s["modal-content"]} react-aac-content`, children: R }),
            /* @__PURE__ */ h.jsxs("div", { className: `${s["modal-actions"]} react-aac-actions`, children: [
              /* @__PURE__ */ h.jsx(
                "div",
                {
                  className: `${s["modal-button"]} ${s["modal-button-cancel"]} react-aac-cancel-button`,
                  onClick: C,
                  children: T
                }
              ),
              /* @__PURE__ */ h.jsx(
                "div",
                {
                  className: `${s["modal-button"]} react-aac-confirm-button`,
                  onClick: m,
                  children: b
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, Rr = async ({
  title: E = "I am a confirm title",
  content: R = "I am a confirm content",
  cancel_text: j = "Cancel",
  confirm_text: y = "Confirm",
  node_name: b = "confirm-and-alert"
}) => new Promise((T) => {
  const v = document.getElementById(b), d = Se(v), u = () => {
    d.unmount(), T(!1);
  }, x = () => {
    d.unmount(), T(!0);
  };
  d.render(
    /* @__PURE__ */ h.jsx(
      yr,
      {
        title: E,
        content: R,
        cancel_text: j,
        confirm_text: y,
        no: u,
        yes: x
      }
    )
  );
});
export {
  Er as app_alert,
  Rr as app_confirm
};
