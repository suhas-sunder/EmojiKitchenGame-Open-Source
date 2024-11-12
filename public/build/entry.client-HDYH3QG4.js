import {
  require_client
} from "/build/_shared/chunk-X3PXDGUE.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-PDH4YUDG.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-4FKPXXDG.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);

// node_modules/posthog-js/dist/module.js
var e = "undefined" != typeof window ? window : void 0;
var t = "undefined" != typeof globalThis ? globalThis : e;
var n = Array.prototype;
var i = n.forEach;
var r = n.indexOf;
var s = null == t ? void 0 : t.navigator;
var o = null == t ? void 0 : t.document;
var a = null == t ? void 0 : t.location;
var u = null == t ? void 0 : t.fetch;
var l = null != t && t.XMLHttpRequest && "withCredentials" in new t.XMLHttpRequest() ? t.XMLHttpRequest : void 0;
var c = null == t ? void 0 : t.AbortController;
var d = null == s ? void 0 : s.userAgent;
var h = null != e ? e : {};
var f = { DEBUG: false, LIB_VERSION: "1.166.1" };
var v = Array.isArray;
var p = Object.prototype;
var g = p.hasOwnProperty;
var _ = p.toString;
var m = v || function(e5) {
  return "[object Array]" === _.call(e5);
};
var y = function(e5) {
  return "function" == typeof e5;
};
var b = function(e5) {
  return e5 === Object(e5) && !m(e5);
};
var k = function(e5) {
  if (b(e5)) {
    for (var t2 in e5)
      if (g.call(e5, t2))
        return false;
    return true;
  }
  return false;
};
var w = function(e5) {
  return void 0 === e5;
};
var S = function(e5) {
  return "[object String]" == _.call(e5);
};
var E = function(e5) {
  return S(e5) && 0 === e5.trim().length;
};
var x = function(e5) {
  return null === e5;
};
var I = function(e5) {
  return w(e5) || x(e5);
};
var F = function(e5) {
  return "[object Number]" == _.call(e5);
};
var P = function(e5) {
  return "[object Boolean]" === _.call(e5);
};
var R = function(e5) {
  return e5 instanceof FormData;
};
var T = "[PostHog.js]";
var C = { _log: function(t2) {
  if (e && (f.DEBUG || h.POSTHOG_DEBUG) && !w(e.console) && e.console) {
    for (var n2 = ("__rrweb_original__" in e.console[t2]) ? e.console[t2].__rrweb_original__ : e.console[t2], i2 = arguments.length, r2 = new Array(i2 > 1 ? i2 - 1 : 0), s2 = 1; s2 < i2; s2++)
      r2[s2 - 1] = arguments[s2];
    n2.apply(void 0, [T].concat(r2));
  }
}, info: function() {
  for (var e5 = arguments.length, t2 = new Array(e5), n2 = 0; n2 < e5; n2++)
    t2[n2] = arguments[n2];
  C._log.apply(C, ["log"].concat(t2));
}, warn: function() {
  for (var e5 = arguments.length, t2 = new Array(e5), n2 = 0; n2 < e5; n2++)
    t2[n2] = arguments[n2];
  C._log.apply(C, ["warn"].concat(t2));
}, error: function() {
  for (var e5 = arguments.length, t2 = new Array(e5), n2 = 0; n2 < e5; n2++)
    t2[n2] = arguments[n2];
  C._log.apply(C, ["error"].concat(t2));
}, critical: function() {
  for (var e5, t2 = arguments.length, n2 = new Array(t2), i2 = 0; i2 < t2; i2++)
    n2[i2] = arguments[i2];
  (e5 = console).error.apply(e5, [T].concat(n2));
}, uninitializedWarning: function(e5) {
  C.error("You must initialize PostHog before calling ".concat(e5));
} };
var M = function(e5, t2, n2) {
  if (e5.config.disable_external_dependency_loading)
    return C.warn("".concat(t2, " was requested but loading of external scripts is disabled.")), n2("Loading of external scripts is disabled");
  var i2 = function() {
    if (!o)
      return n2("document not found");
    var e6 = o.createElement("script");
    e6.type = "text/javascript", e6.src = t2, e6.onload = function(e7) {
      return n2(void 0, e7);
    }, e6.onerror = function(e7) {
      return n2(e7);
    };
    var i3, r2 = o.querySelectorAll("body > script");
    r2.length > 0 ? null === (i3 = r2[0].parentNode) || void 0 === i3 || i3.insertBefore(e6, r2[0]) : o.body.appendChild(e6);
  };
  null != o && o.body ? i2() : null == o || o.addEventListener("DOMContentLoaded", i2);
};
function $(e5, t2) {
  var n2 = Object.keys(e5);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e5);
    t2 && (i2 = i2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e5, t3).enumerable;
    })), n2.push.apply(n2, i2);
  }
  return n2;
}
function O(e5) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? $(Object(n2), true).forEach(function(t3) {
      q(e5, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n2)) : $(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e5, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e5;
}
function A(e5) {
  return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e6) {
    return typeof e6;
  } : function(e6) {
    return e6 && "function" == typeof Symbol && e6.constructor === Symbol && e6 !== Symbol.prototype ? "symbol" : typeof e6;
  }, A(e5);
}
function L(e5, t2) {
  if (!(e5 instanceof t2))
    throw new TypeError("Cannot call a class as a function");
}
function D(e5, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var i2 = t2[n2];
    i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e5, i2.key, i2);
  }
}
function N(e5, t2, n2) {
  return t2 && D(e5.prototype, t2), n2 && D(e5, n2), Object.defineProperty(e5, "prototype", { writable: false }), e5;
}
function q(e5, t2, n2) {
  return t2 in e5 ? Object.defineProperty(e5, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e5[t2] = n2, e5;
}
function B(e5, t2) {
  if (null == e5)
    return {};
  var n2, i2, r2 = function(e6, t3) {
    if (null == e6)
      return {};
    var n3, i3, r3 = {}, s3 = Object.keys(e6);
    for (i3 = 0; i3 < s3.length; i3++)
      n3 = s3[i3], t3.indexOf(n3) >= 0 || (r3[n3] = e6[n3]);
    return r3;
  }(e5, t2);
  if (Object.getOwnPropertySymbols) {
    var s2 = Object.getOwnPropertySymbols(e5);
    for (i2 = 0; i2 < s2.length; i2++)
      n2 = s2[i2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e5, n2) && (r2[n2] = e5[n2]);
  }
  return r2;
}
function H(e5, t2) {
  return function(e6) {
    if (Array.isArray(e6))
      return e6;
  }(e5) || function(e6, t3) {
    var n2 = null == e6 ? null : "undefined" != typeof Symbol && e6[Symbol.iterator] || e6["@@iterator"];
    if (null == n2)
      return;
    var i2, r2, s2 = [], o2 = true, a2 = false;
    try {
      for (n2 = n2.call(e6); !(o2 = (i2 = n2.next()).done) && (s2.push(i2.value), !t3 || s2.length !== t3); o2 = true)
        ;
    } catch (e7) {
      a2 = true, r2 = e7;
    } finally {
      try {
        o2 || null == n2.return || n2.return();
      } finally {
        if (a2)
          throw r2;
      }
    }
    return s2;
  }(e5, t2) || j(e5, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function U(e5) {
  return function(e6) {
    if (Array.isArray(e6))
      return W(e6);
  }(e5) || function(e6) {
    if ("undefined" != typeof Symbol && null != e6[Symbol.iterator] || null != e6["@@iterator"])
      return Array.from(e6);
  }(e5) || j(e5) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function j(e5, t2) {
  if (e5) {
    if ("string" == typeof e5)
      return W(e5, t2);
    var n2 = Object.prototype.toString.call(e5).slice(8, -1);
    return "Object" === n2 && e5.constructor && (n2 = e5.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e5) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? W(e5, t2) : void 0;
  }
}
function W(e5, t2) {
  (null == t2 || t2 > e5.length) && (t2 = e5.length);
  for (var n2 = 0, i2 = new Array(t2); n2 < t2; n2++)
    i2[n2] = e5[n2];
  return i2;
}
function z(e5, t2) {
  var n2 = "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
  if (!n2) {
    if (Array.isArray(e5) || (n2 = j(e5)) || t2 && e5 && "number" == typeof e5.length) {
      n2 && (e5 = n2);
      var i2 = 0, r2 = function() {
      };
      return { s: r2, n: function() {
        return i2 >= e5.length ? { done: true } : { done: false, value: e5[i2++] };
      }, e: function(e6) {
        throw e6;
      }, f: r2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var s2, o2 = true, a2 = false;
  return { s: function() {
    n2 = n2.call(e5);
  }, n: function() {
    var e6 = n2.next();
    return o2 = e6.done, e6;
  }, e: function(e6) {
    a2 = true, s2 = e6;
  }, f: function() {
    try {
      o2 || null == n2.return || n2.return();
    } finally {
      if (a2)
        throw s2;
    }
  } };
}
h.__PosthogExtensions__ = h.__PosthogExtensions__ || {}, h.__PosthogExtensions__.loadExternalDependency = function(e5, t2, n2) {
  var i2 = "/static/".concat(t2, ".js") + "?v=".concat(e5.version);
  if ("toolbar" === t2) {
    var r2 = 3e5, s2 = Math.floor(Date.now() / r2) * r2;
    i2 = "".concat(i2, "?&=").concat(s2);
  }
  var o2 = e5.requestRouter.endpointFor("assets", i2);
  M(e5, o2, n2);
}, h.__PosthogExtensions__.loadSiteApp = function(e5, t2, n2) {
  var i2 = e5.requestRouter.endpointFor("api", t2);
  M(e5, i2, n2);
};
var V = {};
var G = function(e5) {
  return e5.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function Q(e5, t2, n2) {
  if (m(e5)) {
    if (i && e5.forEach === i)
      e5.forEach(t2, n2);
    else if ("length" in e5 && e5.length === +e5.length) {
      for (var r2 = 0, s2 = e5.length; r2 < s2; r2++)
        if (r2 in e5 && t2.call(n2, e5[r2], r2) === V)
          return;
    }
  }
}
function J(e5, t2, n2) {
  if (!I(e5)) {
    if (m(e5))
      return Q(e5, t2, n2);
    if (R(e5)) {
      var i2, r2 = z(e5.entries());
      try {
        for (r2.s(); !(i2 = r2.n()).done; ) {
          var s2 = i2.value;
          if (t2.call(n2, s2[1], s2[0]) === V)
            return;
        }
      } catch (e6) {
        r2.e(e6);
      } finally {
        r2.f();
      }
    } else
      for (var o2 in e5)
        if (g.call(e5, o2) && t2.call(n2, e5[o2], o2) === V)
          return;
  }
}
var Y = function(e5) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), i2 = 1; i2 < t2; i2++)
    n2[i2 - 1] = arguments[i2];
  return Q(n2, function(t3) {
    for (var n3 in t3)
      void 0 !== t3[n3] && (e5[n3] = t3[n3]);
  }), e5;
};
function X(e5, t2) {
  return -1 !== e5.indexOf(t2);
}
function K(e5) {
  for (var t2 = Object.keys(e5), n2 = t2.length, i2 = new Array(n2); n2--; )
    i2[n2] = [t2[n2], e5[t2[n2]]];
  return i2;
}
var Z = function(e5) {
  try {
    return e5();
  } catch (e6) {
    return;
  }
};
var ee = function(e5) {
  return function() {
    try {
      for (var t2 = arguments.length, n2 = new Array(t2), i2 = 0; i2 < t2; i2++)
        n2[i2] = arguments[i2];
      return e5.apply(this, n2);
    } catch (e6) {
      C.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), C.critical(e6);
    }
  };
};
var te = function(e5) {
  var t2 = {};
  return J(e5, function(e6, n2) {
    S(e6) && e6.length > 0 && (t2[n2] = e6);
  }), t2;
};
var ne = function(e5) {
  return e5.replace(/^\$/, "");
};
function ie(e5, t2) {
  return n2 = e5, i2 = function(e6) {
    return S(e6) && !x(t2) ? e6.slice(0, t2) : e6;
  }, r2 = /* @__PURE__ */ new Set(), function e6(t3, n3) {
    return t3 !== Object(t3) ? i2 ? i2(t3, n3) : t3 : r2.has(t3) ? void 0 : (r2.add(t3), m(t3) ? (s2 = [], Q(t3, function(t4) {
      s2.push(e6(t4));
    })) : (s2 = {}, J(t3, function(t4, n4) {
      r2.has(t4) || (s2[n4] = e6(t4, n4));
    })), s2);
    var s2;
  }(n2);
  var n2, i2, r2;
}
var re;
var se = function(e5) {
  var t2, n2, i2, r2, s2 = "";
  for (t2 = n2 = 0, i2 = (e5 = (e5 + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, r2 = 0; r2 < i2; r2++) {
    var o2 = e5.charCodeAt(r2), a2 = null;
    o2 < 128 ? n2++ : a2 = o2 > 127 && o2 < 2048 ? String.fromCharCode(o2 >> 6 | 192, 63 & o2 | 128) : String.fromCharCode(o2 >> 12 | 224, o2 >> 6 & 63 | 128, 63 & o2 | 128), x(a2) || (n2 > t2 && (s2 += e5.substring(t2, n2)), s2 += a2, t2 = n2 = r2 + 1);
  }
  return n2 > t2 && (s2 += e5.substring(t2, e5.length)), s2;
};
var oe = function() {
  function t2(e5) {
    return e5 && (e5.preventDefault = t2.preventDefault, e5.stopPropagation = t2.stopPropagation), e5;
  }
  return t2.preventDefault = function() {
    this.returnValue = false;
  }, t2.stopPropagation = function() {
    this.cancelBubble = true;
  }, function(n2, i2, r2, s2, o2) {
    if (n2) {
      if (n2.addEventListener && !s2)
        n2.addEventListener(i2, r2, !!o2);
      else {
        var a2 = "on" + i2, u2 = n2[a2];
        n2[a2] = function(n3, i3, r3) {
          return function(s3) {
            if (s3 = s3 || t2(null == e ? void 0 : e.event)) {
              var o3, a3 = true;
              y(r3) && (o3 = r3(s3));
              var u3 = i3.call(n3, s3);
              return false !== o3 && false !== u3 || (a3 = false), a3;
            }
          };
        }(n2, r2, u2);
      }
    } else
      C.error("No valid element provided to register_event");
  };
}();
function ae(e5, t2) {
  for (var n2 = 0; n2 < e5.length; n2++)
    if (t2(e5[n2]))
      return e5[n2];
}
!function(e5) {
  e5.GZipJS = "gzip-js", e5.Base64 = "base64";
}(re || (re = {}));
var le = "$people_distinct_id";
var ce = "__alias";
var de = "__timers";
var he = "$autocapture_disabled_server_side";
var fe = "$heatmaps_enabled_server_side";
var ve = "$exception_capture_enabled_server_side";
var pe = "$exception_capture_endpoint_suffix";
var ge = "$web_vitals_enabled_server_side";
var _e = "$web_vitals_allowed_metrics";
var me = "$session_recording_enabled_server_side";
var ye = "$console_log_recording_enabled_server_side";
var be = "$session_recording_network_payload_capture";
var ke = "$session_recording_canvas_recording";
var we = "$replay_sample_rate";
var Se = "$replay_minimum_duration";
var Ee = "$sesid";
var xe = "$session_is_sampled";
var Ie = "$enabled_feature_flags";
var Fe = "$early_access_features";
var Pe = "$stored_person_properties";
var Re = "$stored_group_properties";
var Te = "$surveys";
var Ce = "$surveys_activated";
var Me = "$flag_call_reported";
var $e = "$user_state";
var Oe = "$client_session_props";
var Ae = "$capture_rate_limit";
var Le = "$initial_campaign_params";
var De = "$initial_referrer_info";
var Ne = "$initial_person_info";
var qe = "$epp";
var Be = "__POSTHOG_TOOLBAR__";
var He = [le, ce, "__cmpns", de, me, fe, Ee, Ie, $e, Fe, Re, Pe, Te, Me, Oe, Ae, Le, De, qe];
var Ue = "$active_feature_flags";
var je = "$override_feature_flags";
var We = "$feature_flag_payloads";
var ze = function(e5) {
  var t2, n2 = {}, i2 = z(K(e5 || {}));
  try {
    for (i2.s(); !(t2 = i2.n()).done; ) {
      var r2 = H(t2.value, 2), s2 = r2[0], o2 = r2[1];
      o2 && (n2[s2] = o2);
    }
  } catch (e6) {
    i2.e(e6);
  } finally {
    i2.f();
  }
  return n2;
};
var Ve = function() {
  function e5(t2) {
    L(this, e5), this.instance = t2, this._override_warning = false, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = false, this.reloadFeatureFlagsInAction = false;
  }
  return N(e5, [{ key: "getFlags", value: function() {
    return Object.keys(this.getFlagVariants());
  } }, { key: "getFlagVariants", value: function() {
    var e6 = this.instance.get_property(Ie), t2 = this.instance.get_property(je);
    if (!t2)
      return e6 || {};
    for (var n2 = Y({}, e6), i2 = Object.keys(t2), r2 = 0; r2 < i2.length; r2++)
      n2[i2[r2]] = t2[i2[r2]];
    return this._override_warning || (C.warn(" Overriding feature flags!", { enabledFlags: e6, overriddenFlags: t2, finalFlags: n2 }), this._override_warning = true), n2;
  } }, { key: "getFlagPayloads", value: function() {
    return this.instance.get_property(We) || {};
  } }, { key: "reloadFeatureFlags", value: function() {
    this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = true, this._startReloadTimer());
  } }, { key: "setAnonymousDistinctId", value: function(e6) {
    this.$anon_distinct_id = e6;
  } }, { key: "setReloadingPaused", value: function(e6) {
    this.reloadFeatureFlagsInAction = e6;
  } }, { key: "resetRequestQueue", value: function() {
    this.reloadFeatureFlagsQueued = false;
  } }, { key: "_startReloadTimer", value: function() {
    var e6 = this;
    this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
      !e6.reloadFeatureFlagsInAction && e6.reloadFeatureFlagsQueued && (e6.reloadFeatureFlagsQueued = false, e6._reloadFeatureFlagsRequest());
    }, 5);
  } }, { key: "_reloadFeatureFlagsRequest", value: function() {
    var e6 = this;
    if (!this.instance.config.advanced_disable_feature_flags) {
      this.setReloadingPaused(true);
      var t2 = this.instance.config.token, n2 = this.instance.get_property(Pe), i2 = this.instance.get_property(Re), r2 = { token: t2, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: n2, group_properties: i2, disable_flags: this.instance.config.advanced_disable_feature_flags || void 0 };
      this.instance._send_request({ method: "POST", url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), data: r2, compression: this.instance.config.disable_compression ? void 0 : re.Base64, timeout: this.instance.config.feature_flag_request_timeout_ms, callback: function(t3) {
        var n3;
        e6.setReloadingPaused(false);
        var i3 = true;
        200 === t3.statusCode && (e6.$anon_distinct_id = void 0, i3 = false), e6.receivedFeatureFlags(null !== (n3 = t3.json) && void 0 !== n3 ? n3 : {}, i3), e6._startReloadTimer();
      } });
    }
  } }, { key: "getFeatureFlag", value: function(e6) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
      var n2, i2 = this.getFlagVariants()[e6], r2 = "".concat(i2), s2 = this.instance.get_property(Me) || {};
      if (t2.send_event || !("send_event" in t2)) {
        if (!(e6 in s2) || !s2[e6].includes(r2))
          m(s2[e6]) ? s2[e6].push(r2) : s2[e6] = [r2], null === (n2 = this.instance.persistence) || void 0 === n2 || n2.register(q({}, Me, s2)), this.instance.capture("$feature_flag_called", { $feature_flag: e6, $feature_flag_response: i2 });
      }
      return i2;
    }
    C.warn('getFeatureFlag for key "' + e6 + `" failed. Feature flags didn't load in time.`);
  } }, { key: "getFeatureFlagPayload", value: function(e6) {
    return this.getFlagPayloads()[e6];
  } }, { key: "isFeatureEnabled", value: function(e6) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0)
      return !!this.getFeatureFlag(e6, t2);
    C.warn('isFeatureEnabled for key "' + e6 + `" failed. Feature flags didn't load in time.`);
  } }, { key: "addFeatureFlagsHandler", value: function(e6) {
    this.featureFlagEventHandlers.push(e6);
  } }, { key: "removeFeatureFlagsHandler", value: function(e6) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function(t2) {
      return t2 !== e6;
    });
  } }, { key: "receivedFeatureFlags", value: function(e6, t2) {
    if (this.instance.persistence) {
      this.instance.decideEndpointWasHit = true;
      var n2 = this.getFlagVariants(), i2 = this.getFlagPayloads();
      !function(e7, t3) {
        var n3, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s2 = e7.featureFlags, o2 = e7.featureFlagPayloads;
        if (s2)
          if (m(s2)) {
            var a2, u2 = {};
            if (s2)
              for (var l2 = 0; l2 < s2.length; l2++)
                u2[s2[l2]] = true;
            t3 && t3.register((q(a2 = {}, Ue, s2), q(a2, Ie, u2), a2));
          } else {
            var c2 = s2, d2 = o2;
            e7.errorsWhileComputingFlags && (c2 = O(O({}, i3), c2), d2 = O(O({}, r2), d2)), t3 && t3.register((q(n3 = {}, Ue, Object.keys(ze(c2))), q(n3, Ie, c2 || {}), q(n3, We, d2 || {}), n3));
          }
      }(e6, this.instance.persistence, n2, i2), this._fireFeatureFlagsCallbacks(t2);
    }
  } }, { key: "override", value: function(e6) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!this.instance.__loaded || !this.instance.persistence)
      return C.uninitializedWarning("posthog.feature_flags.override");
    if (this._override_warning = t2, false === e6)
      this.instance.persistence.unregister(je);
    else if (m(e6)) {
      for (var n2 = {}, i2 = 0; i2 < e6.length; i2++)
        n2[e6[i2]] = true;
      this.instance.persistence.register(q({}, je, n2));
    } else
      this.instance.persistence.register(q({}, je, e6));
  } }, { key: "onFeatureFlags", value: function(e6) {
    var t2 = this;
    if (this.addFeatureFlagsHandler(e6), this.instance.decideEndpointWasHit) {
      var n2 = this._prepareFeatureFlagsForCallbacks(), i2 = n2.flags, r2 = n2.flagVariants;
      e6(i2, r2);
    }
    return function() {
      return t2.removeFeatureFlagsHandler(e6);
    };
  } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e6, t2) {
    var n2, i2, r2 = q({}, "$feature_enrollment/".concat(e6), t2);
    this.instance.capture("$feature_enrollment_update", { $feature_flag: e6, $feature_enrollment: t2, $set: r2 }), this.setPersonPropertiesForFlags(r2, false);
    var s2 = O(O({}, this.getFlagVariants()), {}, q({}, e6, t2));
    null === (n2 = this.instance.persistence) || void 0 === n2 || n2.register((q(i2 = {}, Ue, Object.keys(ze(s2))), q(i2, Ie, s2), i2)), this._fireFeatureFlagsCallbacks();
  } }, { key: "getEarlyAccessFeatures", value: function(e6) {
    var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i2 = this.instance.get_property(Fe);
    if (i2 && !n2)
      return e6(i2);
    this.instance._send_request({ transport: "XHR", url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)), method: "GET", callback: function(n3) {
      var i3;
      if (n3.json) {
        var r2 = n3.json.earlyAccessFeatures;
        return null === (i3 = t2.instance.persistence) || void 0 === i3 || i3.register(q({}, Fe, r2)), e6(r2);
      }
    } });
  } }, { key: "_prepareFeatureFlagsForCallbacks", value: function() {
    var e6 = this.getFlags(), t2 = this.getFlagVariants();
    return { flags: e6.filter(function(e7) {
      return t2[e7];
    }), flagVariants: Object.keys(t2).filter(function(e7) {
      return t2[e7];
    }).reduce(function(e7, n2) {
      return e7[n2] = t2[n2], e7;
    }, {}) };
  } }, { key: "_fireFeatureFlagsCallbacks", value: function(e6) {
    var t2 = this._prepareFeatureFlagsForCallbacks(), n2 = t2.flags, i2 = t2.flagVariants;
    this.featureFlagEventHandlers.forEach(function(t3) {
      return t3(n2, i2, { errorsLoading: e6 });
    });
  } }, { key: "setPersonPropertiesForFlags", value: function(e6) {
    var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = this.instance.get_property(Pe) || {};
    this.instance.register(q({}, Pe, O(O({}, n2), e6))), t2 && this.instance.reloadFeatureFlags();
  } }, { key: "resetPersonPropertiesForFlags", value: function() {
    this.instance.unregister(Pe);
  } }, { key: "setGroupPropertiesForFlags", value: function(e6) {
    var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = this.instance.get_property(Re) || {};
    0 !== Object.keys(n2).length && Object.keys(n2).forEach(function(t3) {
      n2[t3] = O(O({}, n2[t3]), e6[t3]), delete e6[t3];
    }), this.instance.register(q({}, Re, O(O({}, n2), e6))), t2 && this.instance.reloadFeatureFlags();
  } }, { key: "resetGroupPropertiesForFlags", value: function(e6) {
    if (e6) {
      var t2 = this.instance.get_property(Re) || {};
      this.instance.register(q({}, Re, O(O({}, t2), {}, q({}, e6, {}))));
    } else
      this.instance.unregister(Re);
  } }]), e5;
}();
Math.trunc || (Math.trunc = function(e5) {
  return e5 < 0 ? Math.ceil(e5) : Math.floor(e5);
}), Number.isInteger || (Number.isInteger = function(e5) {
  return F(e5) && isFinite(e5) && Math.floor(e5) === e5;
});
var Ge = "0123456789abcdef";
var Qe = function() {
  function e5(t2) {
    if (L(this, e5), this.bytes = t2, 16 !== t2.length)
      throw new TypeError("not 128-bit length");
  }
  return N(e5, [{ key: "toString", value: function() {
    for (var e6 = "", t2 = 0; t2 < this.bytes.length; t2++)
      e6 = e6 + Ge.charAt(this.bytes[t2] >>> 4) + Ge.charAt(15 & this.bytes[t2]), 3 !== t2 && 5 !== t2 && 7 !== t2 && 9 !== t2 || (e6 += "-");
    if (36 !== e6.length)
      throw new Error("Invalid UUIDv7 was generated");
    return e6;
  } }, { key: "clone", value: function() {
    return new e5(this.bytes.slice(0));
  } }, { key: "equals", value: function(e6) {
    return 0 === this.compareTo(e6);
  } }, { key: "compareTo", value: function(e6) {
    for (var t2 = 0; t2 < 16; t2++) {
      var n2 = this.bytes[t2] - e6.bytes[t2];
      if (0 !== n2)
        return Math.sign(n2);
    }
    return 0;
  } }], [{ key: "fromFieldsV7", value: function(t2, n2, i2, r2) {
    if (!Number.isInteger(t2) || !Number.isInteger(n2) || !Number.isInteger(i2) || !Number.isInteger(r2) || t2 < 0 || n2 < 0 || i2 < 0 || r2 < 0 || t2 > 281474976710655 || n2 > 4095 || i2 > 1073741823 || r2 > 4294967295)
      throw new RangeError("invalid field value");
    var s2 = new Uint8Array(16);
    return s2[0] = t2 / Math.pow(2, 40), s2[1] = t2 / Math.pow(2, 32), s2[2] = t2 / Math.pow(2, 24), s2[3] = t2 / Math.pow(2, 16), s2[4] = t2 / Math.pow(2, 8), s2[5] = t2, s2[6] = 112 | n2 >>> 8, s2[7] = n2, s2[8] = 128 | i2 >>> 24, s2[9] = i2 >>> 16, s2[10] = i2 >>> 8, s2[11] = i2, s2[12] = r2 >>> 24, s2[13] = r2 >>> 16, s2[14] = r2 >>> 8, s2[15] = r2, new e5(s2);
  } }]), e5;
}();
var Je = function() {
  function e5() {
    L(this, e5), q(this, "timestamp", 0), q(this, "counter", 0), q(this, "random", new Ke());
  }
  return N(e5, [{ key: "generate", value: function() {
    var e6 = this.generateOrAbort();
    if (w(e6)) {
      this.timestamp = 0;
      var t2 = this.generateOrAbort();
      if (w(t2))
        throw new Error("Could not generate UUID after timestamp reset");
      return t2;
    }
    return e6;
  } }, { key: "generateOrAbort", value: function() {
    var e6 = Date.now();
    if (e6 > this.timestamp)
      this.timestamp = e6, this.resetCounter();
    else {
      if (!(e6 + 1e4 > this.timestamp))
        return;
      this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
    }
    return Qe.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
  } }, { key: "resetCounter", value: function() {
    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  } }]), e5;
}();
var Ye = function(e5) {
  if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
    throw new Error("no cryptographically strong RNG available");
  for (var t2 = 0; t2 < e5.length; t2++)
    e5[t2] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return e5;
};
e && !w(e.crypto) && crypto.getRandomValues && (Ye = function(e5) {
  return crypto.getRandomValues(e5);
});
var Xe;
var Ke = function() {
  function e5() {
    L(this, e5), q(this, "buffer", new Uint32Array(8)), q(this, "cursor", 1 / 0);
  }
  return N(e5, [{ key: "nextUint32", value: function() {
    return this.cursor >= this.buffer.length && (Ye(this.buffer), this.cursor = 0), this.buffer[this.cursor++];
  } }]), e5;
}();
var Ze = function() {
  return et().toString();
};
var et = function() {
  return (Xe || (Xe = new Je())).generate();
};
var tt = "Thu, 01 Jan 1970 00:00:00 GMT";
var nt = "";
var it = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
function rt(e5, t2) {
  if (t2) {
    var n2 = function(e6) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
      if (nt)
        return nt;
      if (!t3)
        return "";
      if (["localhost", "127.0.0.1"].includes(e6))
        return "";
      for (var n3 = e6.split("."), i3 = Math.min(n3.length, 8), r2 = "dmn_chk_" + Ze(), s2 = new RegExp("(^|;)\\s*" + r2 + "=1"); !nt && i3--; ) {
        var a2 = n3.slice(i3).join("."), u2 = r2 + "=1;domain=." + a2;
        t3.cookie = u2, s2.test(t3.cookie) && (t3.cookie = u2 + ";expires=" + tt, nt = a2);
      }
      return nt;
    }(e5);
    if (!n2) {
      var i2 = function(e6) {
        var t3 = e6.match(it);
        return t3 ? t3[0] : "";
      }(e5);
      i2 !== n2 && C.info("Warning: cookie subdomain discovery mismatch", i2, n2), n2 = i2;
    }
    return n2 ? "; domain=." + n2 : "";
  }
  return "";
}
var st;
var ot = { is_supported: function() {
  return !!o;
}, error: function(e5) {
  C.error("cookieStore error: " + e5);
}, get: function(e5) {
  if (o) {
    try {
      for (var t2 = e5 + "=", n2 = o.cookie.split(";").filter(function(e6) {
        return e6.length;
      }), i2 = 0; i2 < n2.length; i2++) {
        for (var r2 = n2[i2]; " " == r2.charAt(0); )
          r2 = r2.substring(1, r2.length);
        if (0 === r2.indexOf(t2))
          return decodeURIComponent(r2.substring(t2.length, r2.length));
      }
    } catch (e6) {
    }
    return null;
  }
}, parse: function(e5) {
  var t2;
  try {
    t2 = JSON.parse(ot.get(e5)) || {};
  } catch (e6) {
  }
  return t2;
}, set: function(e5, t2, n2, i2, r2) {
  if (o)
    try {
      var s2 = "", a2 = "", u2 = rt(o.location.hostname, i2);
      if (n2) {
        var l2 = /* @__PURE__ */ new Date();
        l2.setTime(l2.getTime() + 24 * n2 * 60 * 60 * 1e3), s2 = "; expires=" + l2.toUTCString();
      }
      r2 && (a2 = "; secure");
      var c2 = e5 + "=" + encodeURIComponent(JSON.stringify(t2)) + s2 + "; SameSite=Lax; path=/" + u2 + a2;
      return c2.length > 3686.4 && C.warn("cookieStore warning: large cookie, len=" + c2.length), o.cookie = c2, c2;
    } catch (e6) {
      return;
    }
}, remove: function(e5, t2) {
  try {
    ot.set(e5, "", -1, t2);
  } catch (e6) {
    return;
  }
} };
var at = null;
var ut = { is_supported: function() {
  if (!x(at))
    return at;
  var t2 = true;
  if (w(e))
    t2 = false;
  else
    try {
      var n2 = "__mplssupport__";
      ut.set(n2, "xyz"), '"xyz"' !== ut.get(n2) && (t2 = false), ut.remove(n2);
    } catch (e5) {
      t2 = false;
    }
  return t2 || C.error("localStorage unsupported; falling back to cookie store"), at = t2, t2;
}, error: function(e5) {
  C.error("localStorage error: " + e5);
}, get: function(t2) {
  try {
    return null == e ? void 0 : e.localStorage.getItem(t2);
  } catch (e5) {
    ut.error(e5);
  }
  return null;
}, parse: function(e5) {
  try {
    return JSON.parse(ut.get(e5)) || {};
  } catch (e6) {
  }
  return null;
}, set: function(t2, n2) {
  try {
    null == e || e.localStorage.setItem(t2, JSON.stringify(n2));
  } catch (e5) {
    ut.error(e5);
  }
}, remove: function(t2) {
  try {
    null == e || e.localStorage.removeItem(t2);
  } catch (e5) {
    ut.error(e5);
  }
} };
var lt = ["distinct_id", Ee, xe, qe];
var ct = O(O({}, ut), {}, { parse: function(e5) {
  try {
    var t2 = {};
    try {
      t2 = ot.parse(e5) || {};
    } catch (e6) {
    }
    var n2 = Y(t2, JSON.parse(ut.get(e5) || "{}"));
    return ut.set(e5, n2), n2;
  } catch (e6) {
  }
  return null;
}, set: function(e5, t2, n2, i2, r2, s2) {
  try {
    ut.set(e5, t2, void 0, void 0, s2);
    var o2 = {};
    lt.forEach(function(e6) {
      t2[e6] && (o2[e6] = t2[e6]);
    }), Object.keys(o2).length && ot.set(e5, o2, n2, i2, r2, s2);
  } catch (e6) {
    ut.error(e6);
  }
}, remove: function(t2, n2) {
  try {
    null == e || e.localStorage.removeItem(t2), ot.remove(t2, n2);
  } catch (e5) {
    ut.error(e5);
  }
} });
var dt = {};
var ht = { is_supported: function() {
  return true;
}, error: function(e5) {
  C.error("memoryStorage error: " + e5);
}, get: function(e5) {
  return dt[e5] || null;
}, parse: function(e5) {
  return dt[e5] || null;
}, set: function(e5, t2) {
  dt[e5] = t2;
}, remove: function(e5) {
  delete dt[e5];
} };
var ft = null;
var vt = { is_supported: function() {
  if (!x(ft))
    return ft;
  if (ft = true, w(e))
    ft = false;
  else
    try {
      var t2 = "__support__";
      vt.set(t2, "xyz"), '"xyz"' !== vt.get(t2) && (ft = false), vt.remove(t2);
    } catch (e5) {
      ft = false;
    }
  return ft;
}, error: function(e5) {
  C.error("sessionStorage error: ", e5);
}, get: function(t2) {
  try {
    return null == e ? void 0 : e.sessionStorage.getItem(t2);
  } catch (e5) {
    vt.error(e5);
  }
  return null;
}, parse: function(e5) {
  try {
    return JSON.parse(vt.get(e5)) || null;
  } catch (e6) {
  }
  return null;
}, set: function(t2, n2) {
  try {
    null == e || e.sessionStorage.setItem(t2, JSON.stringify(n2));
  } catch (e5) {
    vt.error(e5);
  }
}, remove: function(t2) {
  try {
    null == e || e.sessionStorage.removeItem(t2);
  } catch (e5) {
    vt.error(e5);
  }
} };
var pt = ["localhost", "127.0.0.1"];
var gt = function(e5) {
  var t2 = null == o ? void 0 : o.createElement("a");
  return w(t2) ? null : (t2.href = e5, t2);
};
var _t = function(e5, t2) {
  return !!function(e6) {
    try {
      new RegExp(e6);
    } catch (e7) {
      return false;
    }
    return true;
  }(t2) && new RegExp(t2).test(e5);
};
var mt = function(e5) {
  var t2, n2, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", r2 = [];
  return J(e5, function(e6, i3) {
    w(e6) || w(i3) || "undefined" === i3 || (t2 = encodeURIComponent(function(e7) {
      return e7 instanceof File;
    }(e6) ? e6.name : e6.toString()), n2 = encodeURIComponent(i3), r2[r2.length] = n2 + "=" + t2);
  }), r2.join(i2);
};
var yt = function(e5, t2) {
  for (var n2, i2 = ((e5.split("#")[0] || "").split("?")[1] || "").split("&"), r2 = 0; r2 < i2.length; r2++) {
    var s2 = i2[r2].split("=");
    if (s2[0] === t2) {
      n2 = s2;
      break;
    }
  }
  if (!m(n2) || n2.length < 2)
    return "";
  var o2 = n2[1];
  try {
    o2 = decodeURIComponent(o2);
  } catch (e6) {
    C.error("Skipping decoding for malformed query param: " + o2);
  }
  return o2.replace(/\+/g, " ");
};
var bt = function(e5, t2) {
  var n2 = e5.match(new RegExp(t2 + "=([^&]*)"));
  return n2 ? n2[1] : null;
};
var kt = "Mobile";
var wt = "iOS";
var St = "Android";
var Et = "Tablet";
var xt = St + " " + Et;
var It = "iPad";
var Ft = "Apple";
var Pt = Ft + " Watch";
var Rt = "Safari";
var Tt = "BlackBerry";
var Ct = "Samsung";
var Mt = Ct + "Browser";
var $t = Ct + " Internet";
var Ot = "Chrome";
var At = Ot + " OS";
var Lt = Ot + " " + wt;
var Dt = "Internet Explorer";
var Nt = Dt + " " + kt;
var qt = "Opera";
var Bt = qt + " Mini";
var Ht = "Edge";
var Ut = "Microsoft " + Ht;
var jt = "Firefox";
var Wt = jt + " " + wt;
var zt = "Nintendo";
var Vt = "PlayStation";
var Gt = "Xbox";
var Qt = St + " " + kt;
var Jt = kt + " " + Rt;
var Yt = "Windows";
var Xt = Yt + " Phone";
var Kt = "Nokia";
var Zt = "Ouya";
var en = "Generic";
var tn = en + " " + kt.toLowerCase();
var nn = en + " " + Et.toLowerCase();
var rn = "Konqueror";
var sn = "(\\d+(\\.\\d+)?)";
var on = new RegExp("Version/" + sn);
var an = new RegExp(Gt, "i");
var un = new RegExp(Vt + " \\w+", "i");
var ln = new RegExp(zt + " \\w+", "i");
var cn = new RegExp(Tt + "|PlayBook|BB10", "i");
var dn = { "NT3.51": "NT 3.11", "NT4.0": "NT 4.0", "5.0": "2000", 5.1: "XP", 5.2: "XP", "6.0": "Vista", 6.1: "7", 6.2: "8", 6.3: "8.1", 6.4: "10", "10.0": "10" };
var hn = function(e5, t2) {
  return t2 && X(t2, Ft) || function(e6) {
    return X(e6, Rt) && !X(e6, Ot) && !X(e6, St);
  }(e5);
};
var fn = function(e5, t2) {
  return t2 = t2 || "", X(e5, " OPR/") && X(e5, "Mini") ? Bt : X(e5, " OPR/") ? qt : cn.test(e5) ? Tt : X(e5, "IE" + kt) || X(e5, "WPDesktop") ? Nt : X(e5, Mt) ? $t : X(e5, Ht) || X(e5, "Edg/") ? Ut : X(e5, "FBIOS") ? "Facebook " + kt : X(e5, "UCWEB") || X(e5, "UCBrowser") ? "UC Browser" : X(e5, "CriOS") ? Lt : X(e5, "CrMo") ? Ot : X(e5, St) && X(e5, Rt) ? Qt : X(e5, Ot) ? Ot : X(e5, "FxiOS") ? Wt : X(e5.toLowerCase(), rn.toLowerCase()) ? rn : hn(e5, t2) ? X(e5, kt) ? Jt : Rt : X(e5, jt) ? jt : X(e5, "MSIE") || X(e5, "Trident/") ? Dt : X(e5, "Gecko") ? jt : "";
};
var vn = (q(st = {}, Nt, [new RegExp("rv:" + sn)]), q(st, Ut, [new RegExp(Ht + "?\\/" + sn)]), q(st, Ot, [new RegExp("(" + Ot + "|CrMo)\\/" + sn)]), q(st, Lt, [new RegExp("CriOS\\/" + sn)]), q(st, "UC Browser", [new RegExp("(UCBrowser|UCWEB)\\/" + sn)]), q(st, Rt, [on]), q(st, Jt, [on]), q(st, qt, [new RegExp("(Opera|OPR)\\/" + sn)]), q(st, jt, [new RegExp(jt + "\\/" + sn)]), q(st, Wt, [new RegExp("FxiOS\\/" + sn)]), q(st, rn, [new RegExp("Konqueror[:/]?" + sn, "i")]), q(st, Tt, [new RegExp(Tt + " " + sn), on]), q(st, Qt, [new RegExp("android\\s" + sn, "i")]), q(st, $t, [new RegExp(Mt + "\\/" + sn)]), q(st, Dt, [new RegExp("(rv:|MSIE )" + sn)]), q(st, "Mozilla", [new RegExp("rv:" + sn)]), st);
var pn = [[new RegExp(Gt + "; " + Gt + " (.*?)[);]", "i"), function(e5) {
  return [Gt, e5 && e5[1] || ""];
}], [new RegExp(zt, "i"), [zt, ""]], [new RegExp(Vt, "i"), [Vt, ""]], [cn, [Tt, ""]], [new RegExp(Yt, "i"), function(e5, t2) {
  if (/Phone/.test(t2) || /WPDesktop/.test(t2))
    return [Xt, ""];
  if (new RegExp(kt).test(t2) && !/IEMobile\b/.test(t2))
    return [Yt + " " + kt, ""];
  var n2 = /Windows NT ([0-9.]+)/i.exec(t2);
  if (n2 && n2[1]) {
    var i2 = n2[1], r2 = dn[i2] || "";
    return /arm/i.test(t2) && (r2 = "RT"), [Yt, r2];
  }
  return [Yt, ""];
}], [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, function(e5) {
  if (e5 && e5[3]) {
    var t2 = [e5[3], e5[4], e5[5] || "0"];
    return [wt, t2.join(".")];
  }
  return [wt, ""];
}], [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, function(e5) {
  var t2 = "";
  return e5 && e5.length >= 3 && (t2 = w(e5[2]) ? e5[3] : e5[2]), ["watchOS", t2];
}], [new RegExp("(" + St + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + St + ")", "i"), function(e5) {
  if (e5 && e5[2]) {
    var t2 = [e5[2], e5[3], e5[4] || "0"];
    return [St, t2.join(".")];
  }
  return [St, ""];
}], [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, function(e5) {
  var t2 = ["Mac OS X", ""];
  if (e5 && e5[1]) {
    var n2 = [e5[1], e5[2], e5[3] || "0"];
    t2[1] = n2.join(".");
  }
  return t2;
}], [/Mac/i, ["Mac OS X", ""]], [/CrOS/, [At, ""]], [/Linux|debian/i, ["Linux", ""]]];
var gn = function(e5) {
  return ln.test(e5) ? zt : un.test(e5) ? Vt : an.test(e5) ? Gt : new RegExp(Zt, "i").test(e5) ? Zt : new RegExp("(" + Xt + "|WPDesktop)", "i").test(e5) ? Xt : /iPad/.test(e5) ? It : /iPod/.test(e5) ? "iPod Touch" : /iPhone/.test(e5) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e5) ? Pt : cn.test(e5) ? Tt : /(kobo)\s(ereader|touch)/i.test(e5) ? "Kobo" : new RegExp(Kt, "i").test(e5) ? Kt : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e5) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e5) ? "Kindle Fire" : /(Android|ZTE)/i.test(e5) ? !new RegExp(kt).test(e5) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e5) ? /pixel[\daxl ]{1,6}/i.test(e5) && !/pixel c/i.test(e5) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e5) || /lmy47v/i.test(e5) && !/QTAQZ3/i.test(e5) ? St : xt : St : new RegExp("(pda|" + kt + ")", "i").test(e5) ? tn : new RegExp(Et, "i").test(e5) && !new RegExp(Et + " pc", "i").test(e5) ? nn : "";
};
var _n = "https?://(.*)";
var mn = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid"];
var yn = { campaignParams: function(e5) {
  return o ? this._campaignParamsFromUrl(o.URL, e5) : {};
}, _campaignParamsFromUrl: function(e5, t2) {
  var n2 = mn.concat(t2 || []), i2 = {};
  return J(n2, function(t3) {
    var n3 = yt(e5, t3);
    n3 && (i2[t3] = n3);
  }), i2;
}, _searchEngine: function(e5) {
  return e5 ? 0 === e5.search(_n + "google.([^/?]*)") ? "google" : 0 === e5.search(_n + "bing.com") ? "bing" : 0 === e5.search(_n + "yahoo.com") ? "yahoo" : 0 === e5.search(_n + "duckduckgo.com") ? "duckduckgo" : null : null;
}, _searchInfoFromReferrer: function(e5) {
  var t2 = yn._searchEngine(e5), n2 = "yahoo" != t2 ? "q" : "p", i2 = {};
  if (!x(t2)) {
    i2.$search_engine = t2;
    var r2 = o ? yt(o.referrer, n2) : "";
    r2.length && (i2.ph_keyword = r2);
  }
  return i2;
}, searchInfo: function() {
  var e5 = null == o ? void 0 : o.referrer;
  return e5 ? this._searchInfoFromReferrer(e5) : {};
}, browser: fn, browserVersion: function(e5, t2) {
  var n2 = fn(e5, t2), i2 = vn[n2];
  if (w(i2))
    return null;
  for (var r2 = 0; r2 < i2.length; r2++) {
    var s2 = i2[r2], o2 = e5.match(s2);
    if (o2)
      return parseFloat(o2[o2.length - 2]);
  }
  return null;
}, browserLanguage: function() {
  return navigator.language || navigator.userLanguage;
}, os: function(e5) {
  for (var t2 = 0; t2 < pn.length; t2++) {
    var n2 = H(pn[t2], 2), i2 = n2[0], r2 = n2[1], s2 = i2.exec(e5), o2 = s2 && (y(r2) ? r2(s2, e5) : r2);
    if (o2)
      return o2;
  }
  return ["", ""];
}, device: gn, deviceType: function(e5) {
  var t2 = gn(e5);
  return t2 === It || t2 === xt || "Kobo" === t2 || "Kindle Fire" === t2 || t2 === nn ? Et : t2 === zt || t2 === Gt || t2 === Vt || t2 === Zt ? "Console" : t2 === Pt ? "Wearable" : t2 ? kt : "Desktop";
}, referrer: function() {
  return (null == o ? void 0 : o.referrer) || "$direct";
}, referringDomain: function() {
  var e5;
  return null != o && o.referrer && (null === (e5 = gt(o.referrer)) || void 0 === e5 ? void 0 : e5.host) || "$direct";
}, referrerInfo: function() {
  return { $referrer: this.referrer(), $referring_domain: this.referringDomain() };
}, initialPersonInfo: function() {
  return { r: this.referrer(), u: null == a ? void 0 : a.href };
}, initialPersonPropsFromInfo: function(e5) {
  var t2, n2 = e5.r, i2 = e5.u, r2 = { $initial_referrer: n2, $initial_referring_domain: null == n2 ? void 0 : "$direct" == n2 ? "$direct" : null === (t2 = gt(n2)) || void 0 === t2 ? void 0 : t2.host };
  if (i2) {
    r2.$initial_current_url = i2;
    var s2 = gt(i2);
    r2.$initial_host = null == s2 ? void 0 : s2.host, r2.$initial_pathname = null == s2 ? void 0 : s2.pathname, J(this._campaignParamsFromUrl(i2), function(e6, t3) {
      r2["$initial_" + ne(t3)] = e6;
    });
  }
  n2 && J(this._searchInfoFromReferrer(n2), function(e6, t3) {
    r2["$initial_" + ne(t3)] = e6;
  });
  return r2;
}, properties: function() {
  if (!d)
    return {};
  var t2 = H(yn.os(d), 2), n2 = t2[0], i2 = t2[1];
  return Y(te({ $os: n2, $os_version: i2, $browser: yn.browser(d, navigator.vendor), $device: yn.device(d), $device_type: yn.deviceType(d) }), { $current_url: null == a ? void 0 : a.href, $host: null == a ? void 0 : a.host, $pathname: null == a ? void 0 : a.pathname, $raw_user_agent: d.length > 1e3 ? d.substring(0, 997) + "..." : d, $browser_version: yn.browserVersion(d, navigator.vendor), $browser_language: yn.browserLanguage(), $screen_height: null == e ? void 0 : e.screen.height, $screen_width: null == e ? void 0 : e.screen.width, $viewport_height: null == e ? void 0 : e.innerHeight, $viewport_width: null == e ? void 0 : e.innerWidth, $lib: "web", $lib_version: f.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: Date.now() / 1e3 });
}, people_properties: function() {
  if (!d)
    return {};
  var e5 = H(yn.os(d), 2), t2 = e5[0], n2 = e5[1];
  return Y(te({ $os: t2, $os_version: n2, $browser: yn.browser(d, navigator.vendor) }), { $browser_version: yn.browserVersion(d, navigator.vendor) });
} };
var bn = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
var kn = function() {
  function e5(t2) {
    L(this, e5), this.config = t2, this.props = {}, this.campaign_params_saved = false, this.name = function(e6) {
      var t3 = "";
      return e6.token && (t3 = e6.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e6.persistence_name ? "ph_" + e6.persistence_name : "ph_" + t3 + "_posthog";
    }(t2), this.storage = this.buildStorage(t2), this.load(), t2.debug && C.info("Persistence loaded", t2.persistence, O({}, this.props)), this.update_config(t2, t2), this.save();
  }
  return N(e5, [{ key: "buildStorage", value: function(e6) {
    -1 === bn.indexOf(e6.persistence.toLowerCase()) && (C.critical("Unknown persistence type " + e6.persistence + "; falling back to localStorage+cookie"), e6.persistence = "localStorage+cookie");
    var t2 = e6.persistence.toLowerCase();
    return "localstorage" === t2 && ut.is_supported() ? ut : "localstorage+cookie" === t2 && ct.is_supported() ? ct : "sessionstorage" === t2 && vt.is_supported() ? vt : "memory" === t2 ? ht : "cookie" === t2 ? ot : ct.is_supported() ? ct : ot;
  } }, { key: "properties", value: function() {
    var e6 = {};
    return J(this.props, function(t2, n2) {
      if (n2 === Ie && b(t2))
        for (var i2 = Object.keys(t2), s2 = 0; s2 < i2.length; s2++)
          e6["$feature/".concat(i2[s2])] = t2[i2[s2]];
      else
        a2 = n2, u2 = false, (x(o2 = He) ? u2 : r && o2.indexOf === r ? -1 != o2.indexOf(a2) : (J(o2, function(e7) {
          if (u2 || (u2 = e7 === a2))
            return V;
        }), u2)) || (e6[n2] = t2);
      var o2, a2, u2;
    }), e6;
  } }, { key: "load", value: function() {
    if (!this.disabled) {
      var e6 = this.storage.parse(this.name);
      e6 && (this.props = Y({}, e6));
    }
  } }, { key: "save", value: function() {
    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug);
  } }, { key: "remove", value: function() {
    this.storage.remove(this.name, false), this.storage.remove(this.name, true);
  } }, { key: "clear", value: function() {
    this.remove(), this.props = {};
  } }, { key: "register_once", value: function(e6, t2, n2) {
    var i2 = this;
    if (b(e6)) {
      w(t2) && (t2 = "None"), this.expire_days = w(n2) ? this.default_expiry : n2;
      var r2 = false;
      if (J(e6, function(e7, n3) {
        i2.props.hasOwnProperty(n3) && i2.props[n3] !== t2 || (i2.props[n3] = e7, r2 = true);
      }), r2)
        return this.save(), true;
    }
    return false;
  } }, { key: "register", value: function(e6, t2) {
    var n2 = this;
    if (b(e6)) {
      this.expire_days = w(t2) ? this.default_expiry : t2;
      var i2 = false;
      if (J(e6, function(t3, r2) {
        e6.hasOwnProperty(r2) && n2.props[r2] !== t3 && (n2.props[r2] = t3, i2 = true);
      }), i2)
        return this.save(), true;
    }
    return false;
  } }, { key: "unregister", value: function(e6) {
    e6 in this.props && (delete this.props[e6], this.save());
  } }, { key: "update_campaign_params", value: function() {
    this.campaign_params_saved || (this.register(yn.campaignParams(this.config.custom_campaign_params)), this.campaign_params_saved = true);
  } }, { key: "update_search_keyword", value: function() {
    this.register(yn.searchInfo());
  } }, { key: "update_referrer_info", value: function() {
    this.register_once(yn.referrerInfo(), void 0);
  } }, { key: "set_initial_person_info", value: function() {
    this.props[Le] || this.props[De] || this.register_once(q({}, Ne, yn.initialPersonInfo()), void 0);
  } }, { key: "get_referrer_info", value: function() {
    return te({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
  } }, { key: "get_initial_props", value: function() {
    var e6 = this, t2 = {};
    J([De, Le], function(n3) {
      var i3 = e6.props[n3];
      i3 && J(i3, function(e7, n4) {
        t2["$initial_" + ne(n4)] = e7;
      });
    });
    var n2 = this.props[Ne];
    if (n2) {
      var i2 = yn.initialPersonPropsFromInfo(n2);
      Y(t2, i2);
    }
    return t2;
  } }, { key: "safe_merge", value: function(e6) {
    return J(this.props, function(t2, n2) {
      n2 in e6 || (e6[n2] = t2);
    }), e6;
  } }, { key: "update_config", value: function(e6, t2) {
    if (this.default_expiry = this.expire_days = e6.cookie_expiration, this.set_disabled(e6.disable_persistence), this.set_cross_subdomain(e6.cross_subdomain_cookie), this.set_secure(e6.secure_cookie), e6.persistence !== t2.persistence) {
      var n2 = this.buildStorage(e6), i2 = this.props;
      this.clear(), this.storage = n2, this.props = i2, this.save();
    }
  } }, { key: "set_disabled", value: function(e6) {
    this.disabled = e6, this.disabled ? this.remove() : this.save();
  } }, { key: "set_cross_subdomain", value: function(e6) {
    e6 !== this.cross_subdomain && (this.cross_subdomain = e6, this.remove(), this.save());
  } }, { key: "get_cross_subdomain", value: function() {
    return !!this.cross_subdomain;
  } }, { key: "set_secure", value: function(e6) {
    e6 !== this.secure && (this.secure = e6, this.remove(), this.save());
  } }, { key: "set_event_timer", value: function(e6, t2) {
    var n2 = this.props[de] || {};
    n2[e6] = t2, this.props[de] = n2, this.save();
  } }, { key: "remove_event_timer", value: function(e6) {
    var t2 = (this.props[de] || {})[e6];
    return w(t2) || (delete this.props[de][e6], this.save()), t2;
  } }, { key: "get_property", value: function(e6) {
    return this.props[e6];
  } }, { key: "set_property", value: function(e6, t2) {
    this.props[e6] = t2, this.save();
  } }]), e5;
}();
function wn(e5) {
  return JSON.stringify(e5, (t2 = [], function(e6, n2) {
    if (b(n2)) {
      for (; t2.length > 0 && t2.at(-1) !== this; )
        t2.pop();
      return t2.includes(n2) ? "[Circular]" : (t2.push(n2), n2);
    }
    return n2;
  })).length;
  var t2;
}
function Sn(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66060288e-1;
  if (e5.size >= t2 && e5.data.length > 1) {
    var n2 = Math.floor(e5.data.length / 2), i2 = e5.data.slice(0, n2), r2 = e5.data.slice(n2);
    return [Sn({ size: wn(i2), data: i2, sessionId: e5.sessionId, windowId: e5.windowId }), Sn({ size: wn(r2), data: r2, sessionId: e5.sessionId, windowId: e5.windowId })].flatMap(function(e6) {
      return e6;
    });
  }
  return [e5];
}
var En = function(e5) {
  return e5[e5.DomContentLoaded = 0] = "DomContentLoaded", e5[e5.Load = 1] = "Load", e5[e5.FullSnapshot = 2] = "FullSnapshot", e5[e5.IncrementalSnapshot = 3] = "IncrementalSnapshot", e5[e5.Meta = 4] = "Meta", e5[e5.Custom = 5] = "Custom", e5[e5.Plugin = 6] = "Plugin", e5;
}(En || {});
var xn = function(e5) {
  return e5[e5.Mutation = 0] = "Mutation", e5[e5.MouseMove = 1] = "MouseMove", e5[e5.MouseInteraction = 2] = "MouseInteraction", e5[e5.Scroll = 3] = "Scroll", e5[e5.ViewportResize = 4] = "ViewportResize", e5[e5.Input = 5] = "Input", e5[e5.TouchMove = 6] = "TouchMove", e5[e5.MediaInteraction = 7] = "MediaInteraction", e5[e5.StyleSheetRule = 8] = "StyleSheetRule", e5[e5.CanvasMutation = 9] = "CanvasMutation", e5[e5.Font = 10] = "Font", e5[e5.Log = 11] = "Log", e5[e5.Drag = 12] = "Drag", e5[e5.StyleDeclaration = 13] = "StyleDeclaration", e5[e5.Selection = 14] = "Selection", e5[e5.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e5[e5.CustomElement = 16] = "CustomElement", e5;
}(xn || {});
function In(e5) {
  return e5 ? G(e5).split(/\s+/) : [];
}
function Fn(t2) {
  var n2 = null == e ? void 0 : e.location.href;
  return !!(n2 && t2 && t2.some(function(e5) {
    return n2.match(e5);
  }));
}
function Pn(e5) {
  var t2 = "";
  switch (A(e5.className)) {
    case "string":
      t2 = e5.className;
      break;
    case "object":
      t2 = (e5.className && "baseVal" in e5.className ? e5.className.baseVal : null) || e5.getAttribute("class") || "";
      break;
    default:
      t2 = "";
  }
  return In(t2);
}
function Rn(e5) {
  return I(e5) ? null : G(e5).split(/(\s+)/).filter(function(e6) {
    return Gn(e6);
  }).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function Tn(e5) {
  var t2 = "";
  return qn(e5) && !Bn(e5) && e5.childNodes && e5.childNodes.length && J(e5.childNodes, function(e6) {
    var n2;
    On(e6) && e6.textContent && (t2 += null !== (n2 = Rn(e6.textContent)) && void 0 !== n2 ? n2 : "");
  }), G(t2);
}
function Cn(e5) {
  return w(e5.target) ? e5.srcElement || null : null !== (t2 = e5.target) && void 0 !== t2 && t2.shadowRoot ? e5.composedPath()[0] || null : e5.target || null;
  var t2;
}
function Mn(e5) {
  return !!e5 && 1 === e5.nodeType;
}
function $n(e5, t2) {
  return !!e5 && !!e5.tagName && e5.tagName.toLowerCase() === t2.toLowerCase();
}
function On(e5) {
  return !!e5 && 3 === e5.nodeType;
}
function An(e5) {
  return !!e5 && 11 === e5.nodeType;
}
var Ln = ["a", "button", "form", "input", "select", "textarea", "label"];
function Dn(e5) {
  var t2 = e5.parentNode;
  return !(!t2 || !Mn(t2)) && t2;
}
function Nn(t2, n2) {
  var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r2 = arguments.length > 3 ? arguments[3] : void 0, s2 = arguments.length > 4 ? arguments[4] : void 0;
  if (!e || !t2 || $n(t2, "html") || !Mn(t2))
    return false;
  if (null != i2 && i2.url_allowlist && !Fn(i2.url_allowlist))
    return false;
  if (null != i2 && i2.url_ignorelist && Fn(i2.url_ignorelist))
    return false;
  if (null != i2 && i2.dom_event_allowlist) {
    var o2 = i2.dom_event_allowlist;
    if (o2 && !o2.some(function(e5) {
      return n2.type === e5;
    }))
      return false;
  }
  for (var a2 = false, u2 = [t2], l2 = true, c2 = t2; c2.parentNode && !$n(c2, "body"); )
    if (An(c2.parentNode))
      u2.push(c2.parentNode.host), c2 = c2.parentNode.host;
    else {
      if (!(l2 = Dn(c2)))
        break;
      if (r2 || Ln.indexOf(l2.tagName.toLowerCase()) > -1)
        a2 = true;
      else {
        var d2 = e.getComputedStyle(l2);
        d2 && "pointer" === d2.getPropertyValue("cursor") && (a2 = true);
      }
      u2.push(l2), c2 = l2;
    }
  if (!function(e5, t3) {
    var n3 = null == t3 ? void 0 : t3.element_allowlist;
    if (w(n3))
      return true;
    var i3, r3 = z(e5);
    try {
      var s3 = function() {
        var e6 = i3.value;
        if (n3.some(function(t4) {
          return e6.tagName.toLowerCase() === t4;
        }))
          return { v: true };
      };
      for (r3.s(); !(i3 = r3.n()).done; ) {
        var o3 = s3();
        if ("object" === A(o3))
          return o3.v;
      }
    } catch (e6) {
      r3.e(e6);
    } finally {
      r3.f();
    }
    return false;
  }(u2, i2))
    return false;
  if (!function(e5, t3) {
    var n3 = null == t3 ? void 0 : t3.css_selector_allowlist;
    if (w(n3))
      return true;
    var i3, r3 = z(e5);
    try {
      var s3 = function() {
        var e6 = i3.value;
        if (n3.some(function(t4) {
          return e6.matches(t4);
        }))
          return { v: true };
      };
      for (r3.s(); !(i3 = r3.n()).done; ) {
        var o3 = s3();
        if ("object" === A(o3))
          return o3.v;
      }
    } catch (e6) {
      r3.e(e6);
    } finally {
      r3.f();
    }
    return false;
  }(u2, i2))
    return false;
  var h2 = e.getComputedStyle(t2);
  if (h2 && "pointer" === h2.getPropertyValue("cursor") && "click" === n2.type)
    return true;
  var f2 = t2.tagName.toLowerCase();
  switch (f2) {
    case "html":
      return false;
    case "form":
      return (s2 || ["submit"]).indexOf(n2.type) >= 0;
    case "input":
    case "select":
    case "textarea":
      return (s2 || ["change", "click"]).indexOf(n2.type) >= 0;
    default:
      return a2 ? (s2 || ["click"]).indexOf(n2.type) >= 0 : (s2 || ["click"]).indexOf(n2.type) >= 0 && (Ln.indexOf(f2) > -1 || "true" === t2.getAttribute("contenteditable"));
  }
}
function qn(e5) {
  for (var t2 = e5; t2.parentNode && !$n(t2, "body"); t2 = t2.parentNode) {
    var n2 = Pn(t2);
    if (X(n2, "ph-sensitive") || X(n2, "ph-no-capture"))
      return false;
  }
  if (X(Pn(e5), "ph-include"))
    return true;
  var i2 = e5.type || "";
  if (S(i2))
    switch (i2.toLowerCase()) {
      case "hidden":
      case "password":
        return false;
    }
  var r2 = e5.name || e5.id || "";
  if (S(r2)) {
    if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r2.replace(/[^a-zA-Z0-9]/g, "")))
      return false;
  }
  return true;
}
function Bn(e5) {
  return !!($n(e5, "input") && !["button", "checkbox", "submit", "reset"].includes(e5.type) || $n(e5, "select") || $n(e5, "textarea") || "true" === e5.getAttribute("contenteditable"));
}
var Hn = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})";
var Un = new RegExp("^(?:".concat(Hn, ")$"));
var jn = new RegExp(Hn);
var Wn = "\\d{3}-?\\d{2}-?\\d{4}";
var zn = new RegExp("^(".concat(Wn, ")$"));
var Vn = new RegExp("(".concat(Wn, ")"));
function Gn(e5) {
  var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (I(e5))
    return false;
  if (S(e5)) {
    if (e5 = G(e5), (t2 ? Un : jn).test((e5 || "").replace(/[- ]/g, "")))
      return false;
    if ((t2 ? zn : Vn).test(e5))
      return false;
  }
  return true;
}
function Qn(e5) {
  var t2 = Tn(e5);
  return Gn(t2 = "".concat(t2, " ").concat(Jn(e5)).trim()) ? t2 : "";
}
function Jn(e5) {
  var t2 = "";
  return e5 && e5.childNodes && e5.childNodes.length && J(e5.childNodes, function(e6) {
    var n2;
    if (e6 && "span" === (null === (n2 = e6.tagName) || void 0 === n2 ? void 0 : n2.toLowerCase()))
      try {
        var i2 = Tn(e6);
        t2 = "".concat(t2, " ").concat(i2).trim(), e6.childNodes && e6.childNodes.length && (t2 = "".concat(t2, " ").concat(Jn(e6)).trim());
      } catch (e7) {
        C.error(e7);
      }
  }), t2;
}
function Yn(e5) {
  return function(e6) {
    var t2 = e6.map(function(e7) {
      var t3, n2, i2 = "";
      if (e7.tag_name && (i2 += e7.tag_name), e7.attr_class) {
        e7.attr_class.sort();
        var r2, s2 = z(e7.attr_class);
        try {
          for (s2.s(); !(r2 = s2.n()).done; ) {
            var o2 = r2.value;
            i2 += ".".concat(o2.replace(/"/g, ""));
          }
        } catch (e8) {
          s2.e(e8);
        } finally {
          s2.f();
        }
      }
      var a2 = O(O(O(O({}, e7.text ? { text: e7.text } : {}), {}, { "nth-child": null !== (t3 = e7.nth_child) && void 0 !== t3 ? t3 : 0, "nth-of-type": null !== (n2 = e7.nth_of_type) && void 0 !== n2 ? n2 : 0 }, e7.href ? { href: e7.href } : {}), e7.attr_id ? { attr_id: e7.attr_id } : {}), e7.attributes), u2 = {};
      return K(a2).sort(function(e8, t4) {
        var n3 = H(e8, 1)[0], i3 = H(t4, 1)[0];
        return n3.localeCompare(i3);
      }).forEach(function(e8) {
        var t4 = H(e8, 2), n3 = t4[0], i3 = t4[1];
        return u2[Xn(n3.toString())] = Xn(i3.toString());
      }), i2 += ":", i2 += K(a2).map(function(e8) {
        var t4 = H(e8, 2), n3 = t4[0], i3 = t4[1];
        return "".concat(n3, '="').concat(i3, '"');
      }).join("");
    });
    return t2.join(";");
  }(function(e6) {
    return e6.map(function(e7) {
      var t2, n2, i2 = { text: null === (t2 = e7.$el_text) || void 0 === t2 ? void 0 : t2.slice(0, 400), tag_name: e7.tag_name, href: null === (n2 = e7.attr__href) || void 0 === n2 ? void 0 : n2.slice(0, 2048), attr_class: Kn(e7), attr_id: e7.attr__id, nth_child: e7.nth_child, nth_of_type: e7.nth_of_type, attributes: {} };
      return K(e7).filter(function(e8) {
        return 0 === H(e8, 1)[0].indexOf("attr__");
      }).forEach(function(e8) {
        var t3 = H(e8, 2), n3 = t3[0], r2 = t3[1];
        return i2.attributes[n3] = r2;
      }), i2;
    });
  }(e5));
}
function Xn(e5) {
  return e5.replace(/"|\\"/g, '\\"');
}
function Kn(e5) {
  var t2 = e5.attr__class;
  return t2 ? m(t2) ? t2 : In(t2) : void 0;
}
var Zn = "[SessionRecording]";
var ei = "redacted";
var ti = { initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"], maskRequestFn: function(e5) {
  return e5;
}, recordHeaders: false, recordBody: false, recordInitialRequests: false, recordPerformance: false, performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"], payloadSizeLimitBytes: 1e6, payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io"] };
var ni = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"];
var ii = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"];
var ri = ["/s/", "/e/", "/i/"];
function si(e5, t2, n2, i2) {
  if (I(e5))
    return e5;
  var r2 = (null == t2 ? void 0 : t2["content-length"]) || function(e6) {
    return new Blob([e6]).size;
  }(e5);
  return S(r2) && (r2 = parseInt(r2)), r2 > n2 ? Zn + " ".concat(i2, " body too large to record (").concat(r2, " bytes)") : e5;
}
function oi(e5, t2) {
  if (I(e5))
    return e5;
  var n2 = e5;
  return Gn(n2, false) || (n2 = Zn + " " + t2 + " body " + ei), J(ii, function(e6) {
    var i2, r2;
    null !== (i2 = n2) && void 0 !== i2 && i2.length && -1 !== (null === (r2 = n2) || void 0 === r2 ? void 0 : r2.indexOf(e6)) && (n2 = Zn + " " + t2 + " body " + ei + " as might contain: " + e6);
  }), n2;
}
var ai = function(e5, t2) {
  var n2, i2, r2, s2 = { payloadSizeLimitBytes: ti.payloadSizeLimitBytes, performanceEntryTypeToObserve: U(ti.performanceEntryTypeToObserve), payloadHostDenyList: [].concat(U(t2.payloadHostDenyList || []), U(ti.payloadHostDenyList)) }, o2 = false !== e5.session_recording.recordHeaders && t2.recordHeaders, a2 = false !== e5.session_recording.recordBody && t2.recordBody, u2 = false !== e5.capture_performance && t2.recordPerformance, l2 = (n2 = s2, r2 = Math.min(1e6, null !== (i2 = n2.payloadSizeLimitBytes) && void 0 !== i2 ? i2 : 1e6), function(e6) {
    return null != e6 && e6.requestBody && (e6.requestBody = si(e6.requestBody, e6.requestHeaders, r2, "Request")), null != e6 && e6.responseBody && (e6.responseBody = si(e6.responseBody, e6.responseHeaders, r2, "Response")), e6;
  }), c2 = function(e6) {
    return l2(function(e7) {
      var t4 = gt(e7.name);
      if (!(t4 && t4.pathname && ri.some(function(e8) {
        return 0 === t4.pathname.indexOf(e8);
      })))
        return e7;
    }((n3 = (t3 = e6).requestHeaders, I(n3) || J(Object.keys(null != n3 ? n3 : {}), function(e7) {
      ni.includes(e7.toLowerCase()) && (n3[e7] = ei);
    }), t3)));
    var t3, n3;
  }, d2 = y(e5.session_recording.maskNetworkRequestFn);
  return d2 && y(e5.session_recording.maskCapturedNetworkRequestFn) && C.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), d2 && (e5.session_recording.maskCapturedNetworkRequestFn = function(t3) {
    var n3 = e5.session_recording.maskNetworkRequestFn({ url: t3.name });
    return O(O({}, t3), {}, { name: null == n3 ? void 0 : n3.url });
  }), s2.maskRequestFn = y(e5.session_recording.maskCapturedNetworkRequestFn) ? function(t3) {
    var n3, i3, r3, s3 = c2(t3);
    return s3 && null !== (n3 = null === (i3 = (r3 = e5.session_recording).maskCapturedNetworkRequestFn) || void 0 === i3 ? void 0 : i3.call(r3, s3)) && void 0 !== n3 ? n3 : void 0;
  } : function(e6) {
    return function(e7) {
      if (!w(e7))
        return e7.requestBody = oi(e7.requestBody, "Request"), e7.responseBody = oi(e7.responseBody, "Response"), e7;
    }(c2(e6));
  }, O(O(O({}, ti), s2), {}, { recordHeaders: o2, recordBody: a2, recordPerformance: u2, recordInitialRequests: u2 });
};
var ui = N(function e2(t2) {
  var n2, i2, r2 = this, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  L(this, e2), q(this, "bucketSize", 100), q(this, "refillRate", 10), q(this, "mutationBuckets", {}), q(this, "loggedTracker", {}), q(this, "refillBuckets", function() {
    Object.keys(r2.mutationBuckets).forEach(function(e5) {
      r2.mutationBuckets[e5] = r2.mutationBuckets[e5] + r2.refillRate, r2.mutationBuckets[e5] >= r2.bucketSize && delete r2.mutationBuckets[e5];
    });
  }), q(this, "getNodeOrRelevantParent", function(e5) {
    var t3 = r2.rrweb.mirror.getNode(e5);
    if ("svg" !== (null == t3 ? void 0 : t3.nodeName) && t3 instanceof Element) {
      var n3 = t3.closest("svg");
      if (n3)
        return [r2.rrweb.mirror.getId(n3), n3];
    }
    return [e5, t3];
  }), q(this, "numberOfChanges", function(e5) {
    var t3, n3, i3, r3, s3, o2, a2, u2;
    return (null !== (t3 = null === (n3 = e5.removes) || void 0 === n3 ? void 0 : n3.length) && void 0 !== t3 ? t3 : 0) + (null !== (i3 = null === (r3 = e5.attributes) || void 0 === r3 ? void 0 : r3.length) && void 0 !== i3 ? i3 : 0) + (null !== (s3 = null === (o2 = e5.texts) || void 0 === o2 ? void 0 : o2.length) && void 0 !== s3 ? s3 : 0) + (null !== (a2 = null === (u2 = e5.adds) || void 0 === u2 ? void 0 : u2.length) && void 0 !== a2 ? a2 : 0);
  }), q(this, "throttleMutations", function(e5) {
    if (3 !== e5.type || 0 !== e5.data.source)
      return e5;
    var t3 = e5.data, n3 = r2.numberOfChanges(t3);
    t3.attributes && (t3.attributes = t3.attributes.filter(function(e6) {
      var t4, n4, i4, s3 = H(r2.getNodeOrRelevantParent(e6.id), 2), o2 = s3[0], a2 = s3[1];
      if (0 === r2.mutationBuckets[o2])
        return false;
      (r2.mutationBuckets[o2] = null !== (t4 = r2.mutationBuckets[o2]) && void 0 !== t4 ? t4 : r2.bucketSize, r2.mutationBuckets[o2] = Math.max(r2.mutationBuckets[o2] - 1, 0), 0 === r2.mutationBuckets[o2]) && (r2.loggedTracker[o2] || (r2.loggedTracker[o2] = true, null === (n4 = (i4 = r2.options).onBlockedNode) || void 0 === n4 || n4.call(i4, o2, a2)));
      return e6;
    }));
    var i3 = r2.numberOfChanges(t3);
    return 0 !== i3 || n3 === i3 ? e5 : void 0;
  }), this.rrweb = t2, this.options = s2, this.refillRate = null !== (n2 = this.options.refillRate) && void 0 !== n2 ? n2 : this.refillRate, this.bucketSize = null !== (i2 = this.options.bucketSize) && void 0 !== i2 ? i2 : this.bucketSize, setInterval(function() {
    r2.refillBuckets();
  }, 1e3);
});
var li = Uint8Array;
var ci = Uint16Array;
var di = Uint32Array;
var hi = new li([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var fi = new li([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var vi = new li([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var pi = function(e5, t2) {
  for (var n2 = new ci(31), i2 = 0; i2 < 31; ++i2)
    n2[i2] = t2 += 1 << e5[i2 - 1];
  var r2 = new di(n2[30]);
  for (i2 = 1; i2 < 30; ++i2)
    for (var s2 = n2[i2]; s2 < n2[i2 + 1]; ++s2)
      r2[s2] = s2 - n2[i2] << 5 | i2;
  return [n2, r2];
};
var gi = pi(hi, 2);
var _i = gi[0];
var mi = gi[1];
_i[28] = 258, mi[258] = 28;
for (yi = pi(fi, 0)[1], bi = new ci(32768), ki = 0; ki < 32768; ++ki) {
  wi = (43690 & ki) >>> 1 | (21845 & ki) << 1;
  wi = (61680 & (wi = (52428 & wi) >>> 2 | (13107 & wi) << 2)) >>> 4 | (3855 & wi) << 4, bi[ki] = ((65280 & wi) >>> 8 | (255 & wi) << 8) >>> 1;
}
var wi;
var yi;
var bi;
var ki;
var Si = function(e5, t2, n2) {
  for (var i2 = e5.length, r2 = 0, s2 = new ci(t2); r2 < i2; ++r2)
    ++s2[e5[r2] - 1];
  var o2, a2 = new ci(t2);
  for (r2 = 0; r2 < t2; ++r2)
    a2[r2] = a2[r2 - 1] + s2[r2 - 1] << 1;
  if (n2) {
    o2 = new ci(1 << t2);
    var u2 = 15 - t2;
    for (r2 = 0; r2 < i2; ++r2)
      if (e5[r2])
        for (var l2 = r2 << 4 | e5[r2], c2 = t2 - e5[r2], d2 = a2[e5[r2] - 1]++ << c2, h2 = d2 | (1 << c2) - 1; d2 <= h2; ++d2)
          o2[bi[d2] >>> u2] = l2;
  } else
    for (o2 = new ci(i2), r2 = 0; r2 < i2; ++r2)
      o2[r2] = bi[a2[e5[r2] - 1]++] >>> 15 - e5[r2];
  return o2;
};
var Ei = new li(288);
for (ki = 0; ki < 144; ++ki)
  Ei[ki] = 8;
for (ki = 144; ki < 256; ++ki)
  Ei[ki] = 9;
for (ki = 256; ki < 280; ++ki)
  Ei[ki] = 7;
for (ki = 280; ki < 288; ++ki)
  Ei[ki] = 8;
var xi = new li(32);
for (ki = 0; ki < 32; ++ki)
  xi[ki] = 5;
var Ii = Si(Ei, 9, 0);
var Fi = Si(xi, 5, 0);
var Pi = function(e5) {
  return (e5 / 8 >> 0) + (7 & e5 && 1);
};
var Ri = function(e5, t2, n2) {
  (null == t2 || t2 < 0) && (t2 = 0), (null == n2 || n2 > e5.length) && (n2 = e5.length);
  var i2 = new (e5 instanceof ci ? ci : e5 instanceof di ? di : li)(n2 - t2);
  return i2.set(e5.subarray(t2, n2)), i2;
};
var Ti = function(e5, t2, n2) {
  n2 <<= 7 & t2;
  var i2 = t2 / 8 >> 0;
  e5[i2] |= n2, e5[i2 + 1] |= n2 >>> 8;
};
var Ci = function(e5, t2, n2) {
  n2 <<= 7 & t2;
  var i2 = t2 / 8 >> 0;
  e5[i2] |= n2, e5[i2 + 1] |= n2 >>> 8, e5[i2 + 2] |= n2 >>> 16;
};
var Mi = function(e5, t2) {
  for (var n2 = [], i2 = 0; i2 < e5.length; ++i2)
    e5[i2] && n2.push({ s: i2, f: e5[i2] });
  var r2 = n2.length, s2 = n2.slice();
  if (!r2)
    return [new li(0), 0];
  if (1 == r2) {
    var o2 = new li(n2[0].s + 1);
    return o2[n2[0].s] = 1, [o2, 1];
  }
  n2.sort(function(e6, t3) {
    return e6.f - t3.f;
  }), n2.push({ s: -1, f: 25001 });
  var a2 = n2[0], u2 = n2[1], l2 = 0, c2 = 1, d2 = 2;
  for (n2[0] = { s: -1, f: a2.f + u2.f, l: a2, r: u2 }; c2 != r2 - 1; )
    a2 = n2[n2[l2].f < n2[d2].f ? l2++ : d2++], u2 = n2[l2 != c2 && n2[l2].f < n2[d2].f ? l2++ : d2++], n2[c2++] = { s: -1, f: a2.f + u2.f, l: a2, r: u2 };
  var h2 = s2[0].s;
  for (i2 = 1; i2 < r2; ++i2)
    s2[i2].s > h2 && (h2 = s2[i2].s);
  var f2 = new ci(h2 + 1), v2 = $i(n2[c2 - 1], f2, 0);
  if (v2 > t2) {
    i2 = 0;
    var p2 = 0, g2 = v2 - t2, _2 = 1 << g2;
    for (s2.sort(function(e6, t3) {
      return f2[t3.s] - f2[e6.s] || e6.f - t3.f;
    }); i2 < r2; ++i2) {
      var m2 = s2[i2].s;
      if (!(f2[m2] > t2))
        break;
      p2 += _2 - (1 << v2 - f2[m2]), f2[m2] = t2;
    }
    for (p2 >>>= g2; p2 > 0; ) {
      var y2 = s2[i2].s;
      f2[y2] < t2 ? p2 -= 1 << t2 - f2[y2]++ - 1 : ++i2;
    }
    for (; i2 >= 0 && p2; --i2) {
      var b2 = s2[i2].s;
      f2[b2] == t2 && (--f2[b2], ++p2);
    }
    v2 = t2;
  }
  return [new li(f2), v2];
};
var $i = function e3(t2, n2, i2) {
  return -1 == t2.s ? Math.max(e3(t2.l, n2, i2 + 1), e3(t2.r, n2, i2 + 1)) : n2[t2.s] = i2;
};
var Oi = function(e5) {
  for (var t2 = e5.length; t2 && !e5[--t2]; )
    ;
  for (var n2 = new ci(++t2), i2 = 0, r2 = e5[0], s2 = 1, o2 = function(e6) {
    n2[i2++] = e6;
  }, a2 = 1; a2 <= t2; ++a2)
    if (e5[a2] == r2 && a2 != t2)
      ++s2;
    else {
      if (!r2 && s2 > 2) {
        for (; s2 > 138; s2 -= 138)
          o2(32754);
        s2 > 2 && (o2(s2 > 10 ? s2 - 11 << 5 | 28690 : s2 - 3 << 5 | 12305), s2 = 0);
      } else if (s2 > 3) {
        for (o2(r2), --s2; s2 > 6; s2 -= 6)
          o2(8304);
        s2 > 2 && (o2(s2 - 3 << 5 | 8208), s2 = 0);
      }
      for (; s2--; )
        o2(r2);
      s2 = 1, r2 = e5[a2];
    }
  return [n2.subarray(0, i2), t2];
};
var Ai = function(e5, t2) {
  for (var n2 = 0, i2 = 0; i2 < t2.length; ++i2)
    n2 += e5[i2] * t2[i2];
  return n2;
};
var Li = function(e5, t2, n2) {
  var i2 = n2.length, r2 = Pi(t2 + 2);
  e5[r2] = 255 & i2, e5[r2 + 1] = i2 >>> 8, e5[r2 + 2] = 255 ^ e5[r2], e5[r2 + 3] = 255 ^ e5[r2 + 1];
  for (var s2 = 0; s2 < i2; ++s2)
    e5[r2 + s2 + 4] = n2[s2];
  return 8 * (r2 + 4 + i2);
};
var Di = function(e5, t2, n2, i2, r2, s2, o2, a2, u2, l2, c2) {
  Ti(t2, c2++, n2), ++r2[256];
  for (var d2 = Mi(r2, 15), h2 = d2[0], f2 = d2[1], v2 = Mi(s2, 15), p2 = v2[0], g2 = v2[1], _2 = Oi(h2), m2 = _2[0], y2 = _2[1], b2 = Oi(p2), k2 = b2[0], w2 = b2[1], S2 = new ci(19), E2 = 0; E2 < m2.length; ++E2)
    S2[31 & m2[E2]]++;
  for (E2 = 0; E2 < k2.length; ++E2)
    S2[31 & k2[E2]]++;
  for (var x2 = Mi(S2, 7), I2 = x2[0], F2 = x2[1], P2 = 19; P2 > 4 && !I2[vi[P2 - 1]]; --P2)
    ;
  var R2, T2, C2, M2, $2 = l2 + 5 << 3, O2 = Ai(r2, Ei) + Ai(s2, xi) + o2, A2 = Ai(r2, h2) + Ai(s2, p2) + o2 + 14 + 3 * P2 + Ai(S2, I2) + (2 * S2[16] + 3 * S2[17] + 7 * S2[18]);
  if ($2 <= O2 && $2 <= A2)
    return Li(t2, c2, e5.subarray(u2, u2 + l2));
  if (Ti(t2, c2, 1 + (A2 < O2)), c2 += 2, A2 < O2) {
    R2 = Si(h2, f2, 0), T2 = h2, C2 = Si(p2, g2, 0), M2 = p2;
    var L2 = Si(I2, F2, 0);
    Ti(t2, c2, y2 - 257), Ti(t2, c2 + 5, w2 - 1), Ti(t2, c2 + 10, P2 - 4), c2 += 14;
    for (E2 = 0; E2 < P2; ++E2)
      Ti(t2, c2 + 3 * E2, I2[vi[E2]]);
    c2 += 3 * P2;
    for (var D2 = [m2, k2], N2 = 0; N2 < 2; ++N2) {
      var q2 = D2[N2];
      for (E2 = 0; E2 < q2.length; ++E2) {
        var B2 = 31 & q2[E2];
        Ti(t2, c2, L2[B2]), c2 += I2[B2], B2 > 15 && (Ti(t2, c2, q2[E2] >>> 5 & 127), c2 += q2[E2] >>> 12);
      }
    }
  } else
    R2 = Ii, T2 = Ei, C2 = Fi, M2 = xi;
  for (E2 = 0; E2 < a2; ++E2)
    if (i2[E2] > 255) {
      B2 = i2[E2] >>> 18 & 31;
      Ci(t2, c2, R2[B2 + 257]), c2 += T2[B2 + 257], B2 > 7 && (Ti(t2, c2, i2[E2] >>> 23 & 31), c2 += hi[B2]);
      var H2 = 31 & i2[E2];
      Ci(t2, c2, C2[H2]), c2 += M2[H2], H2 > 3 && (Ci(t2, c2, i2[E2] >>> 5 & 8191), c2 += fi[H2]);
    } else
      Ci(t2, c2, R2[i2[E2]]), c2 += T2[i2[E2]];
  return Ci(t2, c2, R2[256]), c2 + T2[256];
};
var Ni = new di([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var qi = new li(0);
var Bi = function() {
  for (var e5 = new di(256), t2 = 0; t2 < 256; ++t2) {
    for (var n2 = t2, i2 = 9; --i2; )
      n2 = (1 & n2 && 3988292384) ^ n2 >>> 1;
    e5[t2] = n2;
  }
  return e5;
}();
var Hi = function() {
  var e5 = 4294967295;
  return { p: function(t2) {
    for (var n2 = e5, i2 = 0; i2 < t2.length; ++i2)
      n2 = Bi[255 & n2 ^ t2[i2]] ^ n2 >>> 8;
    e5 = n2;
  }, d: function() {
    return 4294967295 ^ e5;
  } };
};
var Ui = function(e5, t2, n2, i2, r2) {
  return function(e6, t3, n3, i3, r3, s2) {
    var o2 = e6.length, a2 = new li(i3 + o2 + 5 * (1 + Math.floor(o2 / 7e3)) + r3), u2 = a2.subarray(i3, a2.length - r3), l2 = 0;
    if (!t3 || o2 < 8)
      for (var c2 = 0; c2 <= o2; c2 += 65535) {
        var d2 = c2 + 65535;
        d2 < o2 ? l2 = Li(u2, l2, e6.subarray(c2, d2)) : (u2[c2] = s2, l2 = Li(u2, l2, e6.subarray(c2, o2)));
      }
    else {
      for (var h2 = Ni[t3 - 1], f2 = h2 >>> 13, v2 = 8191 & h2, p2 = (1 << n3) - 1, g2 = new ci(32768), _2 = new ci(p2 + 1), m2 = Math.ceil(n3 / 3), y2 = 2 * m2, b2 = function(t4) {
        return (e6[t4] ^ e6[t4 + 1] << m2 ^ e6[t4 + 2] << y2) & p2;
      }, k2 = new di(25e3), w2 = new ci(288), S2 = new ci(32), E2 = 0, x2 = 0, I2 = (c2 = 0, 0), F2 = 0, P2 = 0; c2 < o2; ++c2) {
        var R2 = b2(c2), T2 = 32767 & c2, C2 = _2[R2];
        if (g2[T2] = C2, _2[R2] = T2, F2 <= c2) {
          var M2 = o2 - c2;
          if ((E2 > 7e3 || I2 > 24576) && M2 > 423) {
            l2 = Di(e6, u2, 0, k2, w2, S2, x2, I2, P2, c2 - P2, l2), I2 = E2 = x2 = 0, P2 = c2;
            for (var $2 = 0; $2 < 286; ++$2)
              w2[$2] = 0;
            for ($2 = 0; $2 < 30; ++$2)
              S2[$2] = 0;
          }
          var O2 = 2, A2 = 0, L2 = v2, D2 = T2 - C2 & 32767;
          if (M2 > 2 && R2 == b2(c2 - D2))
            for (var N2 = Math.min(f2, M2) - 1, q2 = Math.min(32767, c2), B2 = Math.min(258, M2); D2 <= q2 && --L2 && T2 != C2; ) {
              if (e6[c2 + O2] == e6[c2 + O2 - D2]) {
                for (var H2 = 0; H2 < B2 && e6[c2 + H2] == e6[c2 + H2 - D2]; ++H2)
                  ;
                if (H2 > O2) {
                  if (O2 = H2, A2 = D2, H2 > N2)
                    break;
                  var U2 = Math.min(D2, H2 - 2), j2 = 0;
                  for ($2 = 0; $2 < U2; ++$2) {
                    var W2 = c2 - D2 + $2 + 32768 & 32767, z2 = W2 - g2[W2] + 32768 & 32767;
                    z2 > j2 && (j2 = z2, C2 = W2);
                  }
                }
              }
              D2 += (T2 = C2) - (C2 = g2[T2]) + 32768 & 32767;
            }
          if (A2) {
            k2[I2++] = 268435456 | mi[O2] << 18 | yi[A2];
            var V2 = 31 & mi[O2], G2 = 31 & yi[A2];
            x2 += hi[V2] + fi[G2], ++w2[257 + V2], ++S2[G2], F2 = c2 + O2, ++E2;
          } else
            k2[I2++] = e6[c2], ++w2[e6[c2]];
        }
      }
      l2 = Di(e6, u2, s2, k2, w2, S2, x2, I2, P2, c2 - P2, l2), s2 || (l2 = Li(u2, l2, qi));
    }
    return Ri(a2, 0, i3 + Pi(l2) + r3);
  }(e5, null == t2.level ? 6 : t2.level, null == t2.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e5.length)))) : 12 + t2.mem, n2, i2, !r2);
};
var ji = function(e5, t2, n2) {
  for (; n2; ++t2)
    e5[t2] = n2, n2 >>>= 8;
};
var Wi = function(e5, t2) {
  var n2 = t2.filename;
  if (e5[0] = 31, e5[1] = 139, e5[2] = 8, e5[8] = t2.level < 2 ? 4 : 9 == t2.level ? 2 : 0, e5[9] = 3, 0 != t2.mtime && ji(e5, 4, Math.floor(new Date(t2.mtime || Date.now()) / 1e3)), n2) {
    e5[3] = 8;
    for (var i2 = 0; i2 <= n2.length; ++i2)
      e5[i2 + 10] = n2.charCodeAt(i2);
  }
};
var zi = function(e5) {
  return 10 + (e5.filename && e5.filename.length + 1 || 0);
};
function Vi(e5, t2) {
  void 0 === t2 && (t2 = {});
  var n2 = Hi(), i2 = e5.length;
  n2.p(e5);
  var r2 = Ui(e5, t2, zi(t2), 8), s2 = r2.length;
  return Wi(r2, t2), ji(r2, s2 - 8, n2.d()), ji(r2, s2 - 4, i2), r2;
}
function Gi(e5, t2) {
  var n2 = e5.length;
  if (!t2 && "undefined" != typeof TextEncoder)
    return new TextEncoder().encode(e5);
  for (var i2 = new li(e5.length + (e5.length >>> 1)), r2 = 0, s2 = function(e6) {
    i2[r2++] = e6;
  }, o2 = 0; o2 < n2; ++o2) {
    if (r2 + 5 > i2.length) {
      var a2 = new li(r2 + 8 + (n2 - o2 << 1));
      a2.set(i2), i2 = a2;
    }
    var u2 = e5.charCodeAt(o2);
    u2 < 128 || t2 ? s2(u2) : u2 < 2048 ? (s2(192 | u2 >>> 6), s2(128 | 63 & u2)) : u2 > 55295 && u2 < 57344 ? (s2(240 | (u2 = 65536 + (1047552 & u2) | 1023 & e5.charCodeAt(++o2)) >>> 18), s2(128 | u2 >>> 12 & 63), s2(128 | u2 >>> 6 & 63), s2(128 | 63 & u2)) : (s2(224 | u2 >>> 12), s2(128 | u2 >>> 6 & 63), s2(128 | 63 & u2));
  }
  return Ri(i2, 0, r2);
}
var Qi = 3e5;
var Ji = [xn.MouseMove, xn.MouseInteraction, xn.Scroll, xn.ViewportResize, xn.Input, xn.TouchMove, xn.MediaInteraction, xn.Drag];
var Yi = function(e5) {
  return { rrwebMethod: e5, enqueuedAt: Date.now(), attempt: 1 };
};
var Xi = "[SessionRecording]";
function Ki(e5) {
  return function(e6, t2) {
    var n2 = "";
    if (!t2 && "undefined" != typeof TextDecoder)
      return new TextDecoder().decode(e6);
    for (var i2 = 0; i2 < e6.length; ) {
      var r2 = e6[i2++];
      r2 < 128 || t2 ? n2 += String.fromCharCode(r2) : r2 < 224 ? n2 += String.fromCharCode((31 & r2) << 6 | 63 & e6[i2++]) : r2 < 240 ? n2 += String.fromCharCode((15 & r2) << 12 | (63 & e6[i2++]) << 6 | 63 & e6[i2++]) : (r2 = ((15 & r2) << 18 | (63 & e6[i2++]) << 12 | (63 & e6[i2++]) << 6 | 63 & e6[i2++]) - 65536, n2 += String.fromCharCode(55296 | r2 >> 10, 56320 | 1023 & r2));
    }
    return n2;
  }(Vi(Gi(JSON.stringify(e5))), true);
}
function Zi(e5) {
  return e5.type === En.Custom && "sessionIdle" === e5.data.tag;
}
var er;
var tr = function() {
  function t2(e5) {
    var n2 = this;
    if (L(this, t2), q(this, "queuedRRWebEvents", []), q(this, "isIdle", false), q(this, "_linkedFlagSeen", false), q(this, "_lastActivityTimestamp", Date.now()), q(this, "_linkedFlag", null), q(this, "_removePageViewCaptureHook", void 0), q(this, "_onSessionIdListener", void 0), q(this, "_persistDecideOnSessionListener", void 0), q(this, "_samplingSessionListener", void 0), q(this, "_forceAllowLocalhostNetworkCapture", false), q(this, "_onBeforeUnload", function() {
      n2._flushBuffer();
    }), q(this, "_onOffline", function() {
      n2._tryAddCustomEvent("browser offline", {});
    }), q(this, "_onOnline", function() {
      n2._tryAddCustomEvent("browser online", {});
    }), q(this, "_onVisibilityChange", function() {
      if (null != o && o.visibilityState) {
        var e6 = "window " + o.visibilityState;
        n2._tryAddCustomEvent(e6, {});
      }
    }), this.instance = e5, this._captureStarted = false, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = false, !this.instance.sessionManager)
      throw C.error(Xi + " started without valid sessionManager"), new Error(Xi + " started without valid sessionManager. This is a bug.");
    var i2 = this.sessionManager.checkAndGetSessionAndWindowId(), r2 = i2.sessionId, s2 = i2.windowId;
    this.sessionId = r2, this.windowId = s2, this.buffer = this.clearBuffer(), this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && C.warn(Xi + " session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds, ") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs, "). Session will never be detected as idle"));
  }
  return N(t2, [{ key: "sessionIdleThresholdMilliseconds", get: function() {
    return this.instance.config.session_recording.session_idle_threshold_ms || 3e5;
  } }, { key: "rrwebRecord", get: function() {
    var e5, t3;
    return null == h || null === (e5 = h.__PosthogExtensions__) || void 0 === e5 || null === (t3 = e5.rrweb) || void 0 === t3 ? void 0 : t3.record;
  } }, { key: "started", get: function() {
    return this._captureStarted;
  } }, { key: "sessionManager", get: function() {
    if (!this.instance.sessionManager)
      throw new Error(Xi + " must be started with a valid sessionManager.");
    return this.instance.sessionManager;
  } }, { key: "fullSnapshotIntervalMillis", get: function() {
    var e5;
    return (null === (e5 = this.instance.config.session_recording) || void 0 === e5 ? void 0 : e5.full_snapshot_interval_millis) || Qi;
  } }, { key: "isSampled", get: function() {
    var e5 = this.instance.get_property(xe);
    return P(e5) ? e5 : null;
  } }, { key: "sessionDuration", get: function() {
    var e5, t3, n2 = null === (e5 = this.buffer) || void 0 === e5 ? void 0 : e5.data[(null === (t3 = this.buffer) || void 0 === t3 ? void 0 : t3.data.length) - 1], i2 = this.sessionManager.checkAndGetSessionAndWindowId(true).sessionStartTimestamp;
    return n2 ? n2.timestamp - i2 : null;
  } }, { key: "isRecordingEnabled", get: function() {
    var t3 = !!this.instance.get_property(me), n2 = !this.instance.config.disable_session_recording;
    return e && t3 && n2;
  } }, { key: "isConsoleLogCaptureEnabled", get: function() {
    var e5 = !!this.instance.get_property(ye), t3 = this.instance.config.enable_recording_console_log;
    return null != t3 ? t3 : e5;
  } }, { key: "canvasRecording", get: function() {
    var e5 = this.instance.get_property(ke);
    return e5 && e5.fps && e5.quality ? { enabled: e5.enabled, fps: e5.fps, quality: e5.quality } : void 0;
  } }, { key: "networkPayloadCapture", get: function() {
    var e5, t3, n2 = this.instance.get_property(be), i2 = { recordHeaders: null === (e5 = this.instance.config.session_recording) || void 0 === e5 ? void 0 : e5.recordHeaders, recordBody: null === (t3 = this.instance.config.session_recording) || void 0 === t3 ? void 0 : t3.recordBody }, r2 = (null == i2 ? void 0 : i2.recordHeaders) || (null == n2 ? void 0 : n2.recordHeaders), s2 = (null == i2 ? void 0 : i2.recordBody) || (null == n2 ? void 0 : n2.recordBody), o2 = b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance, a2 = !!(P(o2) ? o2 : null == n2 ? void 0 : n2.capturePerformance);
    return r2 || s2 || a2 ? { recordHeaders: r2, recordBody: s2, recordPerformance: a2 } : void 0;
  } }, { key: "sampleRate", get: function() {
    var e5 = this.instance.get_property(we);
    return F(e5) ? e5 : null;
  } }, { key: "minimumDuration", get: function() {
    var e5 = this.instance.get_property(Se);
    return F(e5) ? e5 : null;
  } }, { key: "status", get: function() {
    return this.receivedDecide ? this.isRecordingEnabled ? I(this._linkedFlag) || this._linkedFlagSeen ? P(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering";
  } }, { key: "startIfEnabledOrStop", value: function() {
    var t3 = this;
    this.isRecordingEnabled ? (this._startCapture(), null == e || e.addEventListener("beforeunload", this._onBeforeUnload), null == e || e.addEventListener("offline", this._onOffline), null == e || e.addEventListener("online", this._onOnline), null == e || e.addEventListener("visibilitychange", this._onVisibilityChange), this._setupSampling(), I(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance._addCaptureHook(function(n2) {
      try {
        if ("$pageview" === n2) {
          var i2 = e ? t3._maskUrl(e.location.href) : "";
          if (!i2)
            return;
          t3._tryAddCustomEvent("$pageview", { href: i2 });
        }
      } catch (e5) {
        C.error("Could not add $pageview to rrweb session", e5);
      }
    })), this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId(function(e5, n2, i2) {
      i2 && t3._tryAddCustomEvent("$session_id_change", { sessionId: e5, windowId: n2, changeReason: i2 });
    }))) : this.stopRecording();
  } }, { key: "stopRecording", value: function() {
    var t3, n2, i2;
    this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = false, null == e || e.removeEventListener("beforeunload", this._onBeforeUnload), null == e || e.removeEventListener("offline", this._onOffline), null == e || e.removeEventListener("online", this._onOnline), null == e || e.removeEventListener("visibilitychange", this._onVisibilityChange), this.clearBuffer(), clearInterval(this._fullSnapshotTimer), null === (t3 = this._removePageViewCaptureHook) || void 0 === t3 || t3.call(this), this._removePageViewCaptureHook = void 0, null === (n2 = this._onSessionIdListener) || void 0 === n2 || n2.call(this), this._onSessionIdListener = void 0, null === (i2 = this._samplingSessionListener) || void 0 === i2 || i2.call(this), this._samplingSessionListener = void 0, C.info(Xi + " stopped"));
  } }, { key: "makeSamplingDecision", value: function(e5) {
    var t3, n2 = this.sessionId !== e5, i2 = this.sampleRate;
    if (F(i2)) {
      var r2, s2 = this.isSampled, o2 = n2 || !P(s2);
      if (o2)
        r2 = Math.random() < i2;
      else
        r2 = s2;
      !r2 && o2 && C.warn(Xi + " Sample rate (".concat(i2, ") has determined that this sessionId (").concat(e5, ") will not be sent to the server.")), this._tryAddCustomEvent("samplingDecisionMade", { sampleRate: i2 }), null === (t3 = this.instance.persistence) || void 0 === t3 || t3.register(q({}, xe, r2));
    } else {
      var a2;
      null === (a2 = this.instance.persistence) || void 0 === a2 || a2.register(q({}, xe, null));
    }
  } }, { key: "afterDecideResponse", value: function(e5) {
    var t3, n2, i2, r2 = this;
    (this._persistDecideResponse(e5), this._linkedFlag = (null === (t3 = e5.sessionRecording) || void 0 === t3 ? void 0 : t3.linkedFlag) || null, null !== (n2 = e5.sessionRecording) && void 0 !== n2 && n2.endpoint) && (this._endpoint = null === (i2 = e5.sessionRecording) || void 0 === i2 ? void 0 : i2.endpoint);
    if (this._setupSampling(), !I(this._linkedFlag) && !this._linkedFlagSeen) {
      var s2 = S(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag, o2 = S(this._linkedFlag) ? null : this._linkedFlag.variant;
      this.instance.onFeatureFlags(function(e6, t4) {
        var n3 = b(t4) && s2 in t4, i3 = o2 ? t4[s2] === o2 : n3;
        if (i3) {
          var a2 = { linkedFlag: s2, linkedVariant: o2 }, u2 = "linked flag matched";
          C.info(Xi + " " + u2, a2), r2._tryAddCustomEvent(u2, a2);
        }
        r2._linkedFlagSeen = i3;
      });
    }
    this.receivedDecide = true, this.startIfEnabledOrStop();
  } }, { key: "_setupSampling", value: function() {
    var e5 = this;
    F(this.sampleRate) && I(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId(function(t3) {
      e5.makeSamplingDecision(t3);
    }));
  } }, { key: "_persistDecideResponse", value: function(e5) {
    if (this.instance.persistence) {
      var t3, n2 = this.instance.persistence, i2 = function() {
        var t4, i3, r2, s2, o2, a2, u2, l2, c2 = null === (t4 = e5.sessionRecording) || void 0 === t4 ? void 0 : t4.sampleRate, d2 = I(c2) ? null : parseFloat(c2), h2 = null === (i3 = e5.sessionRecording) || void 0 === i3 ? void 0 : i3.minimumDurationMilliseconds;
        n2.register((q(l2 = {}, me, !!e5.sessionRecording), q(l2, ye, null === (r2 = e5.sessionRecording) || void 0 === r2 ? void 0 : r2.consoleLogRecordingEnabled), q(l2, be, O({ capturePerformance: e5.capturePerformance }, null === (s2 = e5.sessionRecording) || void 0 === s2 ? void 0 : s2.networkPayloadCapture)), q(l2, ke, { enabled: null === (o2 = e5.sessionRecording) || void 0 === o2 ? void 0 : o2.recordCanvas, fps: null === (a2 = e5.sessionRecording) || void 0 === a2 ? void 0 : a2.canvasFps, quality: null === (u2 = e5.sessionRecording) || void 0 === u2 ? void 0 : u2.canvasQuality }), q(l2, we, d2), q(l2, Se, w(h2) ? null : h2), l2));
      };
      i2(), null === (t3 = this._persistDecideOnSessionListener) || void 0 === t3 || t3.call(this), this._persistDecideOnSessionListener = this.sessionManager.onSessionId(i2);
    }
  } }, { key: "log", value: function(e5) {
    var t3, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
    null === (t3 = this.instance.sessionRecording) || void 0 === t3 || t3.onRRwebEmit({ type: 6, data: { plugin: "rrweb/console@1", payload: { level: n2, trace: [], payload: [JSON.stringify(e5)] } }, timestamp: Date.now() });
  } }, { key: "_startCapture", value: function() {
    var e5, t3, n2 = this;
    w(Object.assign) || this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut() || (this._captureStarted = true, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord ? this._onScriptLoaded() : null === (e5 = h.__PosthogExtensions__) || void 0 === e5 || null === (t3 = e5.loadExternalDependency) || void 0 === t3 || t3.call(e5, this.instance, "recorder", function(e6) {
      if (e6)
        return C.error(Xi + " could not load recorder", e6);
      n2._onScriptLoaded();
    }));
  } }, { key: "isInteractiveEvent", value: function(e5) {
    var t3;
    return 3 === e5.type && -1 !== Ji.indexOf(null === (t3 = e5.data) || void 0 === t3 ? void 0 : t3.source);
  } }, { key: "_updateWindowAndSessionIds", value: function(e5) {
    var t3 = this.isInteractiveEvent(e5);
    t3 || this.isIdle || e5.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = true, clearInterval(this._fullSnapshotTimer), this._tryAddCustomEvent("sessionIdle", { eventTimestamp: e5.timestamp, lastActivityTimestamp: this._lastActivityTimestamp, threshold: this.sessionIdleThresholdMilliseconds, bufferLength: this.buffer.data.length, bufferSize: this.buffer.size }), this._flushBuffer());
    var n2 = false;
    if (t3 && (this._lastActivityTimestamp = e5.timestamp, this.isIdle && (this.isIdle = false, this._tryAddCustomEvent("sessionNoLongerIdle", { reason: "user activity", type: e5.type }), n2 = true)), !this.isIdle) {
      var i2 = this.sessionManager.checkAndGetSessionAndWindowId(!t3, e5.timestamp), r2 = i2.windowId, s2 = i2.sessionId, o2 = this.sessionId !== s2, a2 = this.windowId !== r2;
      this.windowId = r2, this.sessionId = s2, o2 || a2 ? (this.stopRecording(), this.startIfEnabledOrStop()) : n2 && this._scheduleFullSnapshot();
    }
  } }, { key: "_tryRRWebMethod", value: function(e5) {
    try {
      return e5.rrwebMethod(), true;
    } catch (t3) {
      return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({ enqueuedAt: e5.enqueuedAt || Date.now(), attempt: e5.attempt++, rrwebMethod: e5.rrwebMethod }) : C.warn(Xi + " could not emit queued rrweb event.", t3, e5), false;
    }
  } }, { key: "_tryAddCustomEvent", value: function(e5, t3) {
    var n2 = this;
    return this._tryRRWebMethod(Yi(function() {
      return n2.rrwebRecord.addCustomEvent(e5, t3);
    }));
  } }, { key: "_tryTakeFullSnapshot", value: function() {
    var e5 = this;
    return this._tryRRWebMethod(Yi(function() {
      return e5.rrwebRecord.takeFullSnapshot();
    }));
  } }, { key: "_onScriptLoaded", value: function() {
    for (var e5, t3 = this, n2 = { blockClass: "ph-no-capture", blockSelector: void 0, ignoreClass: "ph-ignore-input", maskTextClass: "ph-mask", maskTextSelector: void 0, maskTextFn: void 0, maskAllInputs: true, maskInputOptions: { password: true }, maskInputFn: void 0, slimDOMOptions: {}, collectFonts: false, inlineStylesheet: true, recordCrossOriginIframes: false }, i2 = this.instance.config.session_recording, r2 = 0, s2 = Object.entries(i2 || {}); r2 < s2.length; r2++) {
      var o2 = H(s2[r2], 2), a2 = o2[0], u2 = o2[1];
      a2 in n2 && ("maskInputOptions" === a2 ? n2.maskInputOptions = O({ password: true }, u2) : n2[a2] = u2);
    }
    if (this.canvasRecording && this.canvasRecording.enabled && (n2.recordCanvas = true, n2.sampling = { canvas: this.canvasRecording.fps }, n2.dataURLOptions = { type: "image/webp", quality: this.canvasRecording.quality }), this.rrwebRecord) {
      this.mutationRateLimiter = null !== (e5 = this.mutationRateLimiter) && void 0 !== e5 ? e5 : new ui(this.rrwebRecord, { onBlockedNode: function(e6, n3) {
        var i3 = "Too many mutations on node '".concat(e6, "'. Rate limiting. This could be due to SVG animations or something similar");
        C.info(i3, { node: n3 }), t3.log(Xi + " " + i3, "warn");
      } });
      var l2 = this._gatherRRWebPlugins();
      this.stopRrweb = this.rrwebRecord(O({ emit: function(e6) {
        t3.onRRwebEmit(e6);
      }, plugins: l2 }, n2)), this._lastActivityTimestamp = Date.now(), this.isIdle = false, this._tryAddCustomEvent("$session_options", { sessionRecordingOptions: n2, activePlugins: l2.map(function(e6) {
        return null == e6 ? void 0 : e6.name;
      }) }), this._tryAddCustomEvent("$posthog_config", { config: this.instance.config }), C.info(Xi + " started", { idleThreshold: this.sessionIdleThresholdMilliseconds, maxIdleTime: this.sessionManager.sessionTimeoutMs });
    } else
      C.error(Xi + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
  } }, { key: "_scheduleFullSnapshot", value: function() {
    var e5 = this;
    if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle) {
      var t3 = this.fullSnapshotIntervalMillis;
      t3 && (this._fullSnapshotTimer = setInterval(function() {
        e5._tryTakeFullSnapshot();
      }, t3));
    }
  } }, { key: "_gatherRRWebPlugins", value: function() {
    var e5, t3, n2, i2, r2 = [], s2 = null === (e5 = h.__PosthogExtensions__) || void 0 === e5 || null === (t3 = e5.rrwebPlugins) || void 0 === t3 ? void 0 : t3.getRecordConsolePlugin;
    s2 && this.isConsoleLogCaptureEnabled && r2.push(s2());
    var o2 = null === (n2 = h.__PosthogExtensions__) || void 0 === n2 || null === (i2 = n2.rrwebPlugins) || void 0 === i2 ? void 0 : i2.getRecordNetworkPlugin;
    this.networkPayloadCapture && y(o2) && (!pt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? r2.push(o2(ai(this.instance.config, this.networkPayloadCapture))) : C.info(Xi + " NetworkCapture not started because we are on localhost."));
    return r2;
  } }, { key: "onRRwebEmit", value: function(e5) {
    var t3;
    if (this._processQueuedEvents(), e5 && b(e5)) {
      if (e5.type === En.Meta) {
        var n2 = this._maskUrl(e5.data.href);
        if (this._lastHref = n2, !n2)
          return;
        e5.data.href = n2;
      } else
        this._pageViewFallBack();
      e5.type === En.FullSnapshot && this._scheduleFullSnapshot();
      var i2 = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e5) : e5;
      if (i2) {
        var r2 = function(e6) {
          var t4 = e6;
          if (t4 && b(t4) && 6 === t4.type && b(t4.data) && "rrweb/console@1" === t4.data.plugin) {
            t4.data.payload.payload.length > 10 && (t4.data.payload.payload = t4.data.payload.payload.slice(0, 10), t4.data.payload.payload.push("...[truncated]"));
            for (var n3 = [], i3 = 0; i3 < t4.data.payload.payload.length; i3++)
              t4.data.payload.payload[i3] && t4.data.payload.payload[i3].length > 2e3 ? n3.push(t4.data.payload.payload[i3].slice(0, 2e3) + "...[truncated]") : n3.push(t4.data.payload.payload[i3]);
            return t4.data.payload.payload = n3, e6;
          }
          return e6;
        }(i2);
        if (this._updateWindowAndSessionIds(r2), !this.isIdle || Zi(r2)) {
          if (Zi(r2)) {
            var s2 = r2.data.payload;
            if (s2) {
              var o2 = s2.lastActivityTimestamp, a2 = s2.threshold;
              r2.timestamp = o2 + a2;
            }
          }
          var u2 = null === (t3 = this.instance.config.session_recording.compress_events) || void 0 === t3 || t3 ? function(e6, t4) {
            if (wn(e6) < 1024)
              return e6;
            try {
              if (e6.type === En.FullSnapshot)
                return O(O({}, e6), {}, { data: Ki(e6.data), cv: "2024-10" });
              if (e6.type === En.IncrementalSnapshot && e6.data.source === xn.Mutation)
                return O(O({}, e6), {}, { cv: "2024-10", data: O(O({}, e6.data), {}, { texts: Ki(e6.data.texts), attributes: Ki(e6.data.attributes), removes: Ki(e6.data.removes), adds: Ki(e6.data.adds) }) });
              if (e6.type === En.IncrementalSnapshot && e6.data.source === xn.StyleSheetRule)
                return O(O({}, e6), {}, { cv: "2024-10", data: O(O({}, e6.data), {}, { adds: Ki(e6.data.adds), removes: Ki(e6.data.removes) }) });
            } catch (n3) {
              C.error(Xi + " could not compress event", n3), t4.captureException(n3 || "e was not an error", { attempted_event_type: (null == e6 ? void 0 : e6.type) || "no event type" });
            }
            return e6;
          }(r2, this.instance) : r2, l2 = { $snapshot_bytes: wn(u2), $snapshot_data: u2, $session_id: this.sessionId, $window_id: this.windowId };
          "disabled" !== this.status ? this._captureSnapshotBuffered(l2) : this.clearBuffer();
        }
      }
    }
  } }, { key: "_pageViewFallBack", value: function() {
    if (!this.instance.config.capture_pageview && e) {
      var t3 = this._maskUrl(e.location.href);
      this._lastHref !== t3 && (this._tryAddCustomEvent("$url_changed", { href: t3 }), this._lastHref = t3);
    }
  } }, { key: "_processQueuedEvents", value: function() {
    var e5 = this;
    if (this.queuedRRWebEvents.length) {
      var t3 = U(this.queuedRRWebEvents);
      this.queuedRRWebEvents = [], t3.forEach(function(t4) {
        Date.now() - t4.enqueuedAt <= 2e3 && e5._tryRRWebMethod(t4);
      });
    }
  } }, { key: "_maskUrl", value: function(e5) {
    var t3 = this.instance.config.session_recording;
    if (t3.maskNetworkRequestFn) {
      var n2, i2 = { url: e5 };
      return null === (n2 = i2 = t3.maskNetworkRequestFn(i2)) || void 0 === n2 ? void 0 : n2.url;
    }
    return e5;
  } }, { key: "clearBuffer", value: function() {
    return this.buffer = { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId }, this.buffer;
  } }, { key: "_flushBuffer", value: function() {
    var e5 = this;
    this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
    var t3 = this.minimumDuration, n2 = this.sessionDuration, i2 = F(n2) && n2 >= 0, r2 = F(t3) && i2 && n2 < t3;
    if ("buffering" === this.status || r2)
      return this.flushBufferTimer = setTimeout(function() {
        e5._flushBuffer();
      }, 2e3), this.buffer;
    this.buffer.data.length > 0 && Sn(this.buffer).forEach(function(t4) {
      e5._captureSnapshot({ $snapshot_bytes: t4.size, $snapshot_data: t4.data, $session_id: t4.sessionId, $window_id: t4.windowId });
    });
    return this.clearBuffer();
  } }, { key: "_captureSnapshotBuffered", value: function(e5) {
    var t3, n2 = this, i2 = 2 + ((null === (t3 = this.buffer) || void 0 === t3 ? void 0 : t3.data.length) || 0);
    !this.isIdle && (this.buffer.size + e5.$snapshot_bytes + i2 > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), this.buffer.size += e5.$snapshot_bytes, this.buffer.data.push(e5.$snapshot_data), this.flushBufferTimer || this.isIdle || (this.flushBufferTimer = setTimeout(function() {
      n2._flushBuffer();
    }, 2e3));
  } }, { key: "_captureSnapshot", value: function(e5) {
    this.instance.capture("$snapshot", e5, { _url: this.instance.requestRouter.endpointFor("api", this._endpoint), _noTruncate: true, _batchKey: "recordings", skip_client_rate_limiting: true });
  } }, { key: "overrideLinkedFlag", value: function() {
    this._linkedFlagSeen = true;
  } }]), t2;
}();
var nr = function() {
  function e5(t2) {
    L(this, e5), this.instance = t2, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
  }
  return N(e5, [{ key: "call", value: function() {
    var e6 = this, t2 = { token: this.instance.config.token, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), person_properties: this.instance.get_property(Pe), group_properties: this.instance.get_property(Re), disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0 };
    this.instance._send_request({ method: "POST", url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), data: t2, compression: this.instance.config.disable_compression ? void 0 : re.Base64, timeout: this.instance.config.feature_flag_request_timeout_ms, callback: function(t3) {
      return e6.parseDecideResponse(t3.json);
    } });
  } }, { key: "parseDecideResponse", value: function(e6) {
    var t2 = this;
    this.instance.featureFlags.setReloadingPaused(false), this.instance.featureFlags._startReloadTimer();
    var n2 = !e6;
    if (this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(null != e6 ? e6 : {}, n2), n2)
      C.error("Failed to fetch feature flags from PostHog.");
    else {
      if (!o || !o.body)
        return C.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(function() {
          t2.parseDecideResponse(e6);
        }, 500);
      if (this.instance._afterDecideResponse(e6), e6.siteApps)
        if (this.instance.config.opt_in_site_apps) {
          var i2, r2 = z(e6.siteApps);
          try {
            var s2 = function() {
              var e7, n3, r3 = i2.value, s3 = r3.id, o2 = r3.url;
              h["__$$ph_site_app_".concat(s3)] = t2.instance, null === (e7 = h.__PosthogExtensions__) || void 0 === e7 || null === (n3 = e7.loadSiteApp) || void 0 === n3 || n3.call(e7, t2.instance, o2, function(e8) {
                if (e8)
                  return C.error("Error while initializing PostHog app with config id ".concat(s3), e8);
              });
            };
            for (r2.s(); !(i2 = r2.n()).done; )
              s2();
          } catch (e7) {
            r2.e(e7);
          } finally {
            r2.f();
          }
        } else
          e6.siteApps.length > 0 && C.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    }
  } }]), e5;
}();
var ir = null != e && e.location ? bt(e.location.hash, "__posthog") || bt(location.hash, "state") : null;
var rr = "_postHogToolbarParams";
!function(e5) {
  e5[e5.UNINITIALIZED = 0] = "UNINITIALIZED", e5[e5.LOADING = 1] = "LOADING", e5[e5.LOADED = 2] = "LOADED";
}(er || (er = {}));
var sr = function() {
  function t2(e5) {
    L(this, t2), this.instance = e5;
  }
  return N(t2, [{ key: "setToolbarState", value: function(e5) {
    h.ph_toolbar_state = e5;
  } }, { key: "getToolbarState", value: function() {
    var e5;
    return null !== (e5 = h.ph_toolbar_state) && void 0 !== e5 ? e5 : er.UNINITIALIZED;
  } }, { key: "maybeLoadToolbar", value: function() {
    var t3, n2, i2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (!e || !o)
      return false;
    i2 = null !== (t3 = i2) && void 0 !== t3 ? t3 : e.location, s2 = null !== (n2 = s2) && void 0 !== n2 ? n2 : e.history;
    try {
      if (!r2) {
        try {
          e.localStorage.setItem("test", "test"), e.localStorage.removeItem("test");
        } catch (e5) {
          return false;
        }
        r2 = null == e ? void 0 : e.localStorage;
      }
      var a2, u2 = ir || bt(i2.hash, "__posthog") || bt(i2.hash, "state"), l2 = u2 ? Z(function() {
        return JSON.parse(atob(decodeURIComponent(u2)));
      }) || Z(function() {
        return JSON.parse(decodeURIComponent(u2));
      }) : null;
      return l2 && "ph_authorize" === l2.action ? ((a2 = l2).source = "url", a2 && Object.keys(a2).length > 0 && (l2.desiredHash ? i2.hash = l2.desiredHash : s2 ? s2.replaceState(s2.state, "", i2.pathname + i2.search) : i2.hash = "")) : ((a2 = JSON.parse(r2.getItem(rr) || "{}")).source = "localstorage", delete a2.userIntent), !(!a2.token || this.instance.config.token !== a2.token) && (this.loadToolbar(a2), true);
    } catch (e5) {
      return false;
    }
  } }, { key: "_callLoadToolbar", value: function(e5) {
    (h.ph_load_toolbar || h.ph_load_editor)(e5, this.instance);
  } }, { key: "loadToolbar", value: function(t3) {
    var n2 = this, i2 = !(null == o || !o.getElementById(Be));
    if (!e || i2)
      return false;
    var r2 = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, s2 = O(O({ token: this.instance.config.token }, t3), {}, { apiURL: this.instance.requestRouter.endpointFor("ui") }, r2 ? { instrument: false } : {});
    if (e.localStorage.setItem(rr, JSON.stringify(O(O({}, s2), {}, { source: void 0 }))), this.getToolbarState() === er.LOADED)
      this._callLoadToolbar(s2);
    else if (this.getToolbarState() === er.UNINITIALIZED) {
      var a2, u2;
      this.setToolbarState(er.LOADING), null === (a2 = h.__PosthogExtensions__) || void 0 === a2 || null === (u2 = a2.loadExternalDependency) || void 0 === u2 || u2.call(a2, this.instance, "toolbar", function(e5) {
        if (e5)
          return C.error("Failed to load toolbar", e5), void n2.setToolbarState(er.UNINITIALIZED);
        n2.setToolbarState(er.LOADED), n2._callLoadToolbar(s2);
      }), oe(e, "turbolinks:load", function() {
        n2.setToolbarState(er.UNINITIALIZED), n2.loadToolbar(s2);
      });
    }
    return true;
  } }, { key: "_loadEditor", value: function(e5) {
    return this.loadToolbar(e5);
  } }, { key: "maybeLoadEditor", value: function() {
    var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    return this.maybeLoadToolbar(e5, t3, n2);
  } }]), t2;
}();
var or = function() {
  function e5(t2) {
    L(this, e5), q(this, "isPaused", true), q(this, "queue", []), q(this, "flushTimeoutMs", 3e3), this.sendRequest = t2;
  }
  return N(e5, [{ key: "enqueue", value: function(e6) {
    this.queue.push(e6), this.flushTimeout || this.setFlushTimeout();
  } }, { key: "unload", value: function() {
    var e6 = this;
    this.clearFlushTimeout();
    var t2 = this.queue.length > 0 ? this.formatQueue() : {}, n2 = Object.values(t2);
    [].concat(U(n2.filter(function(e7) {
      return 0 === e7.url.indexOf("/e");
    })), U(n2.filter(function(e7) {
      return 0 !== e7.url.indexOf("/e");
    }))).map(function(t3) {
      e6.sendRequest(O(O({}, t3), {}, { transport: "sendBeacon" }));
    });
  } }, { key: "enable", value: function() {
    this.isPaused = false, this.setFlushTimeout();
  } }, { key: "setFlushTimeout", value: function() {
    var e6 = this;
    this.isPaused || (this.flushTimeout = setTimeout(function() {
      if (e6.clearFlushTimeout(), e6.queue.length > 0) {
        var t2 = e6.formatQueue(), n2 = function(n3) {
          var i3 = t2[n3], r2 = (/* @__PURE__ */ new Date()).getTime();
          i3.data && m(i3.data) && J(i3.data, function(e7) {
            e7.offset = Math.abs(e7.timestamp - r2), delete e7.timestamp;
          }), e6.sendRequest(i3);
        };
        for (var i2 in t2)
          n2(i2);
      }
    }, this.flushTimeoutMs));
  } }, { key: "clearFlushTimeout", value: function() {
    clearTimeout(this.flushTimeout), this.flushTimeout = void 0;
  } }, { key: "formatQueue", value: function() {
    var e6 = {};
    return J(this.queue, function(t2) {
      var n2, i2 = t2, r2 = (i2 ? i2.batchKey : null) || i2.url;
      w(e6[r2]) && (e6[r2] = O(O({}, i2), {}, { data: [] })), null === (n2 = e6[r2].data) || void 0 === n2 || n2.push(i2.data);
    }), this.queue = [], e6;
  } }]), e5;
}();
var ar = !!l || !!u;
var ur = "text/plain";
var lr = function(e5, t2) {
  var n2 = H(e5.split("?"), 2), i2 = n2[0], r2 = n2[1], s2 = O({}, t2);
  null == r2 || r2.split("&").forEach(function(e6) {
    var t3 = H(e6.split("="), 1)[0];
    delete s2[t3];
  });
  var o2 = mt(s2);
  return o2 = o2 ? (r2 ? r2 + "&" : "") + o2 : r2, "".concat(i2, "?").concat(o2);
};
var cr = function(e5) {
  var t2 = e5.data, n2 = e5.compression;
  if (t2) {
    if (n2 === re.GZipJS) {
      var i2 = Vi(Gi(JSON.stringify(t2)), { mtime: 0 }), r2 = new Blob([i2], { type: ur });
      return { contentType: ur, body: r2, estimatedSize: r2.size };
    }
    if (n2 === re.Base64) {
      var s2 = function(e6) {
        var t3, n3, i3, r3, s3, o3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a3 = 0, u2 = 0, l2 = "", c2 = [];
        if (!e6)
          return e6;
        e6 = se(e6);
        do {
          t3 = (s3 = e6.charCodeAt(a3++) << 16 | e6.charCodeAt(a3++) << 8 | e6.charCodeAt(a3++)) >> 18 & 63, n3 = s3 >> 12 & 63, i3 = s3 >> 6 & 63, r3 = 63 & s3, c2[u2++] = o3.charAt(t3) + o3.charAt(n3) + o3.charAt(i3) + o3.charAt(r3);
        } while (a3 < e6.length);
        switch (l2 = c2.join(""), e6.length % 3) {
          case 1:
            l2 = l2.slice(0, -2) + "==";
            break;
          case 2:
            l2 = l2.slice(0, -1) + "=";
        }
        return l2;
      }(JSON.stringify(t2)), o2 = function(e6) {
        return "data=" + encodeURIComponent("string" == typeof e6 ? e6 : JSON.stringify(e6));
      }(s2);
      return { contentType: "application/x-www-form-urlencoded", body: o2, estimatedSize: new Blob([o2]).size };
    }
    var a2 = JSON.stringify(t2);
    return { contentType: "application/json", body: a2, estimatedSize: new Blob([a2]).size };
  }
};
var dr = [];
l && dr.push({ transport: "XHR", method: function(e5) {
  var t2, n2 = new l();
  n2.open(e5.method || "GET", e5.url, true);
  var i2 = null !== (t2 = cr(e5)) && void 0 !== t2 ? t2 : {}, r2 = i2.contentType, s2 = i2.body;
  J(e5.headers, function(e6, t3) {
    n2.setRequestHeader(t3, e6);
  }), r2 && n2.setRequestHeader("Content-Type", r2), e5.timeout && (n2.timeout = e5.timeout), n2.withCredentials = true, n2.onreadystatechange = function() {
    if (4 === n2.readyState) {
      var t3, i3 = { statusCode: n2.status, text: n2.responseText };
      if (200 === n2.status)
        try {
          i3.json = JSON.parse(n2.responseText);
        } catch (e6) {
        }
      null === (t3 = e5.callback) || void 0 === t3 || t3.call(e5, i3);
    }
  }, n2.send(s2);
} }), u && dr.push({ transport: "fetch", method: function(e5) {
  var t2, n2, i2 = null !== (t2 = cr(e5)) && void 0 !== t2 ? t2 : {}, r2 = i2.contentType, s2 = i2.body, o2 = i2.estimatedSize, a2 = new Headers();
  J(e5.headers, function(e6, t3) {
    a2.append(t3, e6);
  }), r2 && a2.append("Content-Type", r2);
  var l2 = e5.url, d2 = null;
  if (c) {
    var h2 = new c();
    d2 = { signal: h2.signal, timeout: setTimeout(function() {
      return h2.abort();
    }, e5.timeout) };
  }
  u(l2, { method: (null == e5 ? void 0 : e5.method) || "GET", headers: a2, keepalive: "POST" === e5.method && (o2 || 0) < 65536, body: s2, signal: null === (n2 = d2) || void 0 === n2 ? void 0 : n2.signal }).then(function(t3) {
    return t3.text().then(function(n3) {
      var i3, r3 = { statusCode: t3.status, text: n3 };
      if (200 === t3.status)
        try {
          r3.json = JSON.parse(n3);
        } catch (e6) {
          C.error(e6);
        }
      null === (i3 = e5.callback) || void 0 === i3 || i3.call(e5, r3);
    });
  }).catch(function(t3) {
    var n3;
    C.error(t3), null === (n3 = e5.callback) || void 0 === n3 || n3.call(e5, { statusCode: 0, text: t3 });
  }).finally(function() {
    return d2 ? clearTimeout(d2.timeout) : null;
  });
} }), null != s && s.sendBeacon && dr.push({ transport: "sendBeacon", method: function(e5) {
  var t2 = lr(e5.url, { beacon: "1" });
  try {
    var n2, i2 = null !== (n2 = cr(e5)) && void 0 !== n2 ? n2 : {}, r2 = i2.contentType, o2 = i2.body, a2 = "string" == typeof o2 ? new Blob([o2], { type: r2 }) : o2;
    s.sendBeacon(t2, a2);
  } catch (e6) {
  }
} });
var hr = ["retriesPerformedSoFar"];
var fr;
var vr = function() {
  function t2(n2) {
    var i2 = this;
    L(this, t2), q(this, "isPolling", false), q(this, "pollIntervalMs", 3e3), q(this, "queue", []), this.instance = n2, this.queue = [], this.areWeOnline = true, !w(e) && "onLine" in e.navigator && (this.areWeOnline = e.navigator.onLine, e.addEventListener("online", function() {
      i2.areWeOnline = true, i2.flush();
    }), e.addEventListener("offline", function() {
      i2.areWeOnline = false;
    }));
  }
  return N(t2, [{ key: "retriableRequest", value: function(e5) {
    var t3 = this, n2 = e5.retriesPerformedSoFar, i2 = B(e5, hr);
    F(n2) && n2 > 0 && (i2.url = lr(i2.url, { retry_count: n2 })), this.instance._send_request(O(O({}, i2), {}, { callback: function(e6) {
      var r2;
      200 !== e6.statusCode && (e6.statusCode < 400 || e6.statusCode >= 500) && (null != n2 ? n2 : 0) < 10 ? t3.enqueue(O({ retriesPerformedSoFar: n2 }, i2)) : null === (r2 = i2.callback) || void 0 === r2 || r2.call(i2, e6);
    } }));
  } }, { key: "enqueue", value: function(e5) {
    var t3 = e5.retriesPerformedSoFar || 0;
    e5.retriesPerformedSoFar = t3 + 1;
    var n2 = function(e6) {
      var t4 = 3e3 * Math.pow(2, e6), n3 = t4 / 2, i3 = Math.min(18e5, t4), r3 = (Math.random() - 0.5) * (i3 - n3);
      return Math.ceil(i3 + r3);
    }(t3), i2 = Date.now() + n2;
    this.queue.push({ retryAt: i2, requestOptions: e5 });
    var r2 = "Enqueued failed request for retry in ".concat(n2);
    navigator.onLine || (r2 += " (Browser is offline)"), C.warn(r2), this.isPolling || (this.isPolling = true, this.poll());
  } }, { key: "poll", value: function() {
    var e5 = this;
    this.poller && clearTimeout(this.poller), this.poller = setTimeout(function() {
      e5.areWeOnline && e5.queue.length > 0 && e5.flush(), e5.poll();
    }, this.pollIntervalMs);
  } }, { key: "flush", value: function() {
    var e5 = Date.now(), t3 = [], n2 = this.queue.filter(function(n3) {
      return n3.retryAt < e5 || (t3.push(n3), false);
    });
    if (this.queue = t3, n2.length > 0) {
      var i2, r2 = z(n2);
      try {
        for (r2.s(); !(i2 = r2.n()).done; ) {
          var s2 = i2.value.requestOptions;
          this.retriableRequest(s2);
        }
      } catch (e6) {
        r2.e(e6);
      } finally {
        r2.f();
      }
    }
  } }, { key: "unload", value: function() {
    this.poller && (clearTimeout(this.poller), this.poller = void 0);
    var e5, t3 = z(this.queue);
    try {
      for (t3.s(); !(e5 = t3.n()).done; ) {
        var n2 = e5.value.requestOptions;
        try {
          this.instance._send_request(O(O({}, n2), {}, { transport: "sendBeacon" }));
        } catch (e6) {
          C.error(e6);
        }
      }
    } catch (e6) {
      t3.e(e6);
    } finally {
      t3.f();
    }
    this.queue = [];
  } }]), t2;
}();
var pr = 1800;
var gr = function() {
  function t2(e5, n2, i2, r2) {
    var s2;
    L(this, t2), q(this, "_sessionIdChangedHandlers", []), this.config = e5, this.persistence = n2, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = i2 || Ze, this._windowIdGenerator = r2 || Ze;
    var o2 = e5.persistence_name || e5.token, a2 = e5.session_idle_timeout_seconds || pr;
    if (F(a2) ? a2 > pr ? C.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : a2 < 60 && C.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (C.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), a2 = pr), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(a2, 60), pr), this._window_id_storage_key = "ph_" + o2 + "_window_id", this._primary_window_exists_storage_key = "ph_" + o2 + "_primary_window_exists", this._canUseSessionStorage()) {
      var u2 = vt.parse(this._window_id_storage_key), l2 = vt.parse(this._primary_window_exists_storage_key);
      u2 && !l2 ? this._windowId = u2 : vt.remove(this._window_id_storage_key), vt.set(this._primary_window_exists_storage_key, true);
    }
    if (null !== (s2 = this.config.bootstrap) && void 0 !== s2 && s2.sessionID)
      try {
        var c2 = function(e6) {
          var t3 = e6.replace(/-/g, "");
          if (32 !== t3.length)
            throw new Error("Not a valid UUID");
          if ("7" !== t3[12])
            throw new Error("Not a UUIDv7");
          return parseInt(t3.substring(0, 12), 16);
        }(this.config.bootstrap.sessionID);
        this._setSessionId(this.config.bootstrap.sessionID, (/* @__PURE__ */ new Date()).getTime(), c2);
      } catch (e6) {
        C.error("Invalid sessionID in bootstrap", e6);
      }
    this._listenToReloadWindow();
  }
  return N(t2, [{ key: "sessionTimeoutMs", get: function() {
    return this._sessionTimeoutMs;
  } }, { key: "onSessionId", value: function(e5) {
    var t3 = this;
    return w(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e5), this._sessionId && e5(this._sessionId, this._windowId), function() {
      t3._sessionIdChangedHandlers = t3._sessionIdChangedHandlers.filter(function(t4) {
        return t4 !== e5;
      });
    };
  } }, { key: "_canUseSessionStorage", value: function() {
    return "memory" !== this.config.persistence && !this.persistence.disabled && vt.is_supported();
  } }, { key: "_setWindowId", value: function(e5) {
    e5 !== this._windowId && (this._windowId = e5, this._canUseSessionStorage() && vt.set(this._window_id_storage_key, e5));
  } }, { key: "_getWindowId", value: function() {
    return this._windowId ? this._windowId : this._canUseSessionStorage() ? vt.parse(this._window_id_storage_key) : null;
  } }, { key: "_setSessionId", value: function(e5, t3, n2) {
    e5 === this._sessionId && t3 === this._sessionActivityTimestamp && n2 === this._sessionStartTimestamp || (this._sessionStartTimestamp = n2, this._sessionActivityTimestamp = t3, this._sessionId = e5, this.persistence.register(q({}, Ee, [t3, e5, n2])));
  } }, { key: "_getSessionId", value: function() {
    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
      return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
    var e5 = this.persistence.props[Ee];
    return m(e5) && 2 === e5.length && e5.push(e5[0]), e5 || [0, null, 0];
  } }, { key: "resetSessionId", value: function() {
    this._setSessionId(null, null, null);
  } }, { key: "_listenToReloadWindow", value: function() {
    var t3 = this;
    null == e || e.addEventListener("beforeunload", function() {
      t3._canUseSessionStorage() && vt.remove(t3._primary_window_exists_storage_key);
    });
  } }, { key: "checkAndGetSessionAndWindowId", value: function() {
    var e5 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t3 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (/* @__PURE__ */ new Date()).getTime(), n2 = H(this._getSessionId(), 3), i2 = n2[0], r2 = n2[1], s2 = n2[2], o2 = this._getWindowId(), a2 = F(s2) && s2 > 0 && Math.abs(t3 - s2) > 864e5, u2 = false, l2 = !r2, c2 = !e5 && Math.abs(t3 - i2) > this.sessionTimeoutMs;
    l2 || c2 || a2 ? (r2 = this._sessionIdGenerator(), o2 = this._windowIdGenerator(), C.info("[SessionId] new session ID generated", { sessionId: r2, windowId: o2, changeReason: { noSessionId: l2, activityTimeout: c2, sessionPastMaximumLength: a2 } }), s2 = t3, u2 = true) : o2 || (o2 = this._windowIdGenerator(), u2 = true);
    var d2 = 0 === i2 || !e5 || a2 ? t3 : i2, h2 = 0 === s2 ? (/* @__PURE__ */ new Date()).getTime() : s2;
    return this._setWindowId(o2), this._setSessionId(r2, d2, h2), u2 && this._sessionIdChangedHandlers.forEach(function(e6) {
      return e6(r2, o2, u2 ? { noSessionId: l2, activityTimeout: c2, sessionPastMaximumLength: a2 } : void 0);
    }), { sessionId: r2, windowId: o2, sessionStartTimestamp: h2, changeReason: u2 ? { noSessionId: l2, activityTimeout: c2, sessionPastMaximumLength: a2 } : void 0 };
  } }]), t2;
}();
!function(e5) {
  e5.US = "us", e5.EU = "eu", e5.CUSTOM = "custom";
}(fr || (fr = {}));
var _r = "i.posthog.com";
var mr = function() {
  function e5(t2) {
    L(this, e5), q(this, "_regionCache", {}), this.instance = t2;
  }
  return N(e5, [{ key: "apiHost", get: function() {
    var e6 = this.instance.config.api_host.trim().replace(/\/$/, "");
    return "https://app.posthog.com" === e6 ? "https://us.i.posthog.com" : e6;
  } }, { key: "uiHost", get: function() {
    var e6, t2 = null === (e6 = this.instance.config.ui_host) || void 0 === e6 ? void 0 : e6.replace(/\/$/, "");
    return t2 || (t2 = this.apiHost.replace(".".concat(_r), ".posthog.com")), "https://app.posthog.com" === t2 ? "https://us.posthog.com" : t2;
  } }, { key: "region", get: function() {
    return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = fr.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = fr.EU : this._regionCache[this.apiHost] = fr.CUSTOM), this._regionCache[this.apiHost];
  } }, { key: "endpointFor", value: function(e6) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (t2 && (t2 = "/" === t2[0] ? t2 : "/".concat(t2)), "ui" === e6)
      return this.uiHost + t2;
    if (this.region === fr.CUSTOM)
      return this.apiHost + t2;
    var n2 = _r + t2;
    switch (e6) {
      case "assets":
        return "https://".concat(this.region, "-assets.").concat(n2);
      case "api":
        return "https://".concat(this.region, ".").concat(n2);
    }
  } }]), e5;
}();
var yr = "posthog-js";
function br(e5) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.organization, i2 = t2.projectId, r2 = t2.prefix, s2 = t2.severityAllowList, o2 = void 0 === s2 ? ["error"] : s2;
  return function(t3) {
    var s3, a2, u2, l2, c2;
    if (!("*" === o2 || o2.includes(t3.level)) || !e5.__loaded)
      return t3;
    t3.tags || (t3.tags = {});
    var d2 = e5.requestRouter.endpointFor("ui", "/project/".concat(e5.config.token, "/person/").concat(e5.get_distinct_id()));
    t3.tags["PostHog Person URL"] = d2, e5.sessionRecordingStarted() && (t3.tags["PostHog Recording URL"] = e5.get_session_replay_url({ withTimestamp: true }));
    var h2 = (null === (s3 = t3.exception) || void 0 === s3 ? void 0 : s3.values) || [], f2 = { $exception_message: (null === (a2 = h2[0]) || void 0 === a2 ? void 0 : a2.value) || t3.message, $exception_type: null === (u2 = h2[0]) || void 0 === u2 ? void 0 : u2.type, $exception_personURL: d2, $exception_level: t3.level, $sentry_event_id: t3.event_id, $sentry_exception: t3.exception, $sentry_exception_message: (null === (l2 = h2[0]) || void 0 === l2 ? void 0 : l2.value) || t3.message, $sentry_exception_type: null === (c2 = h2[0]) || void 0 === c2 ? void 0 : c2.type, $sentry_tags: t3.tags, $level: t3.level };
    return n2 && i2 && (f2.$sentry_url = (r2 || "https://sentry.io/organizations/") + n2 + "/issues/?project=" + i2 + "&query=" + t3.event_id), e5.exceptions.sendExceptionEvent(f2), t3;
  };
}
var kr = N(function e4(t2, n2, i2, r2, s2) {
  L(this, e4), this.name = yr, this.setupOnce = function(e5) {
    e5(br(t2, { organization: n2, projectId: i2, prefix: r2, severityAllowList: s2 }));
  };
});
function wr(e5, t2) {
  var n2 = e5.config.segment;
  if (!n2)
    return t2();
  !function(e6, t3) {
    var n3 = e6.config.segment;
    if (!n3)
      return t3();
    var i2 = function(n4) {
      var i3 = function() {
        return n4.anonymousId() || Ze();
      };
      e6.config.get_device_id = i3, n4.id() && (e6.register({ distinct_id: n4.id(), $device_id: i3() }), e6.persistence.set_property($e, "identified")), t3();
    }, r2 = n3.user();
    "then" in r2 && y(r2.then) ? r2.then(function(e7) {
      return i2(e7);
    }) : i2(r2);
  }(e5, function() {
    n2.register(function(e6) {
      Promise && Promise.resolve || C.warn("This browser does not have Promise support, and can not use the segment integration");
      var t3 = function(t4, n3) {
        var i2;
        if (!n3)
          return t4;
        t4.event.userId || t4.event.anonymousId === e6.get_distinct_id() || (C.info("Segment integration does not have a userId set, resetting PostHog"), e6.reset()), t4.event.userId && t4.event.userId !== e6.get_distinct_id() && (C.info("Segment integration has a userId set, identifying with PostHog"), e6.identify(t4.event.userId));
        var r2 = e6._calculate_event_properties(n3, null !== (i2 = t4.event.properties) && void 0 !== i2 ? i2 : {}, /* @__PURE__ */ new Date());
        return t4.event.properties = Object.assign({}, r2, t4.event.properties), t4;
      };
      return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: function() {
        return true;
      }, load: function() {
        return Promise.resolve();
      }, track: function(e7) {
        return t3(e7, e7.event.event);
      }, page: function(e7) {
        return t3(e7, "$pageview");
      }, identify: function(e7) {
        return t3(e7, "$identify");
      }, screen: function(e7) {
        return t3(e7, "$screen");
      } };
    }(e5)).then(function() {
      t2();
    });
  });
}
var Sr;
var Er;
var xr;
var Ir = function() {
  function t2(e5) {
    L(this, t2), this._instance = e5;
  }
  return N(t2, [{ key: "doPageView", value: function(t3) {
    var n2, i2 = this._previousPageViewProperties(t3);
    return this._currentPath = null !== (n2 = null == e ? void 0 : e.location.pathname) && void 0 !== n2 ? n2 : "", this._instance.scrollManager.resetContext(), this._prevPageviewTimestamp = t3, i2;
  } }, { key: "doPageLeave", value: function(e5) {
    return this._previousPageViewProperties(e5);
  } }, { key: "_previousPageViewProperties", value: function(e5) {
    var t3 = this._currentPath, n2 = this._prevPageviewTimestamp, i2 = this._instance.scrollManager.getContext();
    if (!n2)
      return {};
    var r2 = {};
    if (i2) {
      var s2 = i2.maxScrollHeight, o2 = i2.lastScrollY, a2 = i2.maxScrollY, u2 = i2.maxContentHeight, l2 = i2.lastContentY, c2 = i2.maxContentY;
      if (!(w(s2) || w(o2) || w(a2) || w(u2) || w(l2) || w(c2)))
        s2 = Math.ceil(s2), o2 = Math.ceil(o2), a2 = Math.ceil(a2), u2 = Math.ceil(u2), l2 = Math.ceil(l2), c2 = Math.ceil(c2), r2 = { $prev_pageview_last_scroll: o2, $prev_pageview_last_scroll_percentage: s2 <= 1 ? 1 : Fr(o2 / s2, 0, 1), $prev_pageview_max_scroll: a2, $prev_pageview_max_scroll_percentage: s2 <= 1 ? 1 : Fr(a2 / s2, 0, 1), $prev_pageview_last_content: l2, $prev_pageview_last_content_percentage: u2 <= 1 ? 1 : Fr(l2 / u2, 0, 1), $prev_pageview_max_content: c2, $prev_pageview_max_content_percentage: u2 <= 1 ? 1 : Fr(c2 / u2, 0, 1) };
    }
    return t3 && (r2.$prev_pageview_pathname = t3), n2 && (r2.$prev_pageview_duration = (e5.getTime() - n2.getTime()) / 1e3), r2;
  } }]), t2;
}();
function Fr(e5, t2, n2) {
  return Math.max(t2, Math.min(e5, n2));
}
!function(e5) {
  e5.Popover = "popover", e5.API = "api", e5.Widget = "widget";
}(Sr || (Sr = {})), function(e5) {
  e5.Open = "open", e5.MultipleChoice = "multiple_choice", e5.SingleChoice = "single_choice", e5.Rating = "rating", e5.Link = "link";
}(Er || (Er = {})), function(e5) {
  e5.NextQuestion = "next_question", e5.End = "end", e5.ResponseBased = "response_based", e5.SpecificQuestion = "specific_question";
}(xr || (xr = {}));
var Pr = function() {
  function e5() {
    L(this, e5), q(this, "events", {}), this.events = {};
  }
  return N(e5, [{ key: "on", value: function(e6, t2) {
    var n2 = this;
    return this.events[e6] || (this.events[e6] = []), this.events[e6].push(t2), function() {
      n2.events[e6] = n2.events[e6].filter(function(e7) {
        return e7 !== t2;
      });
    };
  } }, { key: "emit", value: function(e6, t2) {
    var n2, i2 = z(this.events[e6] || []);
    try {
      for (i2.s(); !(n2 = i2.n()).done; ) {
        (0, n2.value)(t2);
      }
    } catch (e7) {
      i2.e(e7);
    } finally {
      i2.f();
    }
    var r2, s2 = z(this.events["*"] || []);
    try {
      for (s2.s(); !(r2 = s2.n()).done; ) {
        (0, r2.value)(e6, t2);
      }
    } catch (e7) {
      s2.e(e7);
    } finally {
      s2.f();
    }
  } }]), e5;
}();
var Rr = function() {
  function t2(e5) {
    var n2 = this;
    L(this, t2), q(this, "_debugEventEmitter", new Pr()), q(this, "checkStep", function(e6, t3) {
      return n2.checkStepEvent(e6, t3) && n2.checkStepUrl(e6, t3) && n2.checkStepElement(e6, t3);
    }), q(this, "checkStepEvent", function(e6, t3) {
      return null == t3 || !t3.event || (null == e6 ? void 0 : e6.event) === (null == t3 ? void 0 : t3.event);
    }), this.instance = e5, this.actionEvents = /* @__PURE__ */ new Set(), this.actionRegistry = /* @__PURE__ */ new Set();
  }
  return N(t2, [{ key: "init", value: function() {
    var e5, t3 = this;
    if (!w(null === (e5 = this.instance) || void 0 === e5 ? void 0 : e5._addCaptureHook)) {
      var n2;
      null === (n2 = this.instance) || void 0 === n2 || n2._addCaptureHook(function(e6, n3) {
        t3.on(e6, n3);
      });
    }
  } }, { key: "register", value: function(e5) {
    var t3, n2, i2 = this;
    if (!w(null === (t3 = this.instance) || void 0 === t3 ? void 0 : t3._addCaptureHook) && (e5.forEach(function(e6) {
      var t4, n3;
      null === (t4 = i2.actionRegistry) || void 0 === t4 || t4.add(e6), null === (n3 = e6.steps) || void 0 === n3 || n3.forEach(function(e7) {
        var t5;
        null === (t5 = i2.actionEvents) || void 0 === t5 || t5.add((null == e7 ? void 0 : e7.event) || "");
      });
    }), null !== (n2 = this.instance) && void 0 !== n2 && n2.autocapture)) {
      var r2, s2 = /* @__PURE__ */ new Set();
      e5.forEach(function(e6) {
        var t4;
        null === (t4 = e6.steps) || void 0 === t4 || t4.forEach(function(e7) {
          null != e7 && e7.selector && s2.add(null == e7 ? void 0 : e7.selector);
        });
      }), null === (r2 = this.instance) || void 0 === r2 || r2.autocapture.setElementSelectors(s2);
    }
  } }, { key: "on", value: function(e5, t3) {
    var n2, i2 = this;
    null != t3 && 0 != e5.length && (this.actionEvents.has(e5) || this.actionEvents.has(null == t3 ? void 0 : t3.event)) && this.actionRegistry && (null === (n2 = this.actionRegistry) || void 0 === n2 ? void 0 : n2.size) > 0 && this.actionRegistry.forEach(function(e6) {
      i2.checkAction(t3, e6) && i2._debugEventEmitter.emit("actionCaptured", e6.name);
    });
  } }, { key: "_addActionHook", value: function(e5) {
    this.onAction("actionCaptured", function(t3) {
      return e5(t3);
    });
  } }, { key: "checkAction", value: function(e5, t3) {
    if (null == (null == t3 ? void 0 : t3.steps))
      return false;
    var n2, i2 = z(t3.steps);
    try {
      for (i2.s(); !(n2 = i2.n()).done; ) {
        var r2 = n2.value;
        if (this.checkStep(e5, r2))
          return true;
      }
    } catch (e6) {
      i2.e(e6);
    } finally {
      i2.f();
    }
    return false;
  } }, { key: "onAction", value: function(e5, t3) {
    return this._debugEventEmitter.on(e5, t3);
  } }, { key: "checkStepUrl", value: function(e5, n2) {
    if (null != n2 && n2.url) {
      var i2, r2 = null == e5 || null === (i2 = e5.properties) || void 0 === i2 ? void 0 : i2.$current_url;
      if (!r2 || "string" != typeof r2)
        return false;
      if (!t2.matchString(r2, null == n2 ? void 0 : n2.url, (null == n2 ? void 0 : n2.url_matching) || "contains"))
        return false;
    }
    return true;
  } }, { key: "checkStepElement", value: function(e5, n2) {
    if ((null != n2 && n2.href || null != n2 && n2.tag_name || null != n2 && n2.text) && !this.getElementsList(e5).some(function(e6) {
      return !(null != n2 && n2.href && !t2.matchString(e6.href || "", null == n2 ? void 0 : n2.href, (null == n2 ? void 0 : n2.href_matching) || "exact")) && (null == n2 || !n2.tag_name || e6.tag_name === (null == n2 ? void 0 : n2.tag_name)) && !(null != n2 && n2.text && !t2.matchString(e6.text || "", null == n2 ? void 0 : n2.text, (null == n2 ? void 0 : n2.text_matching) || "exact") && !t2.matchString(e6.$el_text || "", null == n2 ? void 0 : n2.text, (null == n2 ? void 0 : n2.text_matching) || "exact"));
    }))
      return false;
    if (null != n2 && n2.selector) {
      var i2, r2 = null == e5 || null === (i2 = e5.properties) || void 0 === i2 ? void 0 : i2.$element_selectors;
      if (!r2)
        return false;
      if (!r2.includes(null == n2 ? void 0 : n2.selector))
        return false;
    }
    return true;
  } }, { key: "getElementsList", value: function(e5) {
    return null == (null == e5 ? void 0 : e5.properties.$elements) ? [] : null == e5 ? void 0 : e5.properties.$elements;
  } }], [{ key: "matchString", value: function(n2, i2, r2) {
    switch (r2) {
      case "regex":
        return !!e && _t(n2, i2);
      case "exact":
        return i2 === n2;
      case "contains":
        var s2 = t2.escapeStringRegexp(i2).replace(/_/g, ".").replace(/%/g, ".*");
        return _t(n2, s2);
      default:
        return false;
    }
  } }, { key: "escapeStringRegexp", value: function(e5) {
    return e5.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  } }]), t2;
}();
var Tr = function() {
  function e5(t2) {
    L(this, e5), this.instance = t2, this.eventToSurveys = /* @__PURE__ */ new Map(), this.actionToSurveys = /* @__PURE__ */ new Map();
  }
  return N(e5, [{ key: "register", value: function(e6) {
    var t2;
    w(null === (t2 = this.instance) || void 0 === t2 ? void 0 : t2._addCaptureHook) || (this.setupEventBasedSurveys(e6), this.setupActionBasedSurveys(e6));
  } }, { key: "setupActionBasedSurveys", value: function(e6) {
    var t2 = this, n2 = e6.filter(function(e7) {
      var t3, n3, i2, r2;
      return (null === (t3 = e7.conditions) || void 0 === t3 ? void 0 : t3.actions) && (null === (n3 = e7.conditions) || void 0 === n3 || null === (i2 = n3.actions) || void 0 === i2 || null === (r2 = i2.values) || void 0 === r2 ? void 0 : r2.length) > 0;
    });
    if (0 !== n2.length) {
      if (null == this.actionMatcher) {
        this.actionMatcher = new Rr(this.instance), this.actionMatcher.init();
        this.actionMatcher._addActionHook(function(e7) {
          t2.onAction(e7);
        });
      }
      n2.forEach(function(e7) {
        var n3, i2, r2, s2, o2, a2, u2, l2, c2, d2;
        e7.conditions && null !== (n3 = e7.conditions) && void 0 !== n3 && n3.actions && null !== (i2 = e7.conditions) && void 0 !== i2 && null !== (r2 = i2.actions) && void 0 !== r2 && r2.values && (null === (s2 = e7.conditions) || void 0 === s2 || null === (o2 = s2.actions) || void 0 === o2 || null === (a2 = o2.values) || void 0 === a2 ? void 0 : a2.length) > 0 && (null === (u2 = t2.actionMatcher) || void 0 === u2 || u2.register(e7.conditions.actions.values), null === (l2 = e7.conditions) || void 0 === l2 || null === (c2 = l2.actions) || void 0 === c2 || null === (d2 = c2.values) || void 0 === d2 || d2.forEach(function(n4) {
          if (n4 && n4.name) {
            var i3 = t2.actionToSurveys.get(n4.name);
            i3 && i3.push(e7.id), t2.actionToSurveys.set(n4.name, i3 || [e7.id]);
          }
        }));
      });
    }
  } }, { key: "setupEventBasedSurveys", value: function(e6) {
    var t2, n2 = this;
    if (0 !== e6.filter(function(e7) {
      var t3, n3, i2, r2;
      return (null === (t3 = e7.conditions) || void 0 === t3 ? void 0 : t3.events) && (null === (n3 = e7.conditions) || void 0 === n3 || null === (i2 = n3.events) || void 0 === i2 || null === (r2 = i2.values) || void 0 === r2 ? void 0 : r2.length) > 0;
    }).length) {
      null === (t2 = this.instance) || void 0 === t2 || t2._addCaptureHook(function(e7, t3) {
        n2.onEvent(e7, t3);
      }), e6.forEach(function(e7) {
        var t3, i2, r2;
        null === (t3 = e7.conditions) || void 0 === t3 || null === (i2 = t3.events) || void 0 === i2 || null === (r2 = i2.values) || void 0 === r2 || r2.forEach(function(t4) {
          if (t4 && t4.name) {
            var i3 = n2.eventToSurveys.get(t4.name);
            i3 && i3.push(e7.id), n2.eventToSurveys.set(t4.name, i3 || [e7.id]);
          }
        });
      });
    }
  } }, { key: "onEvent", value: function(t2, n2) {
    var i2, r2, s2 = (null === (i2 = this.instance) || void 0 === i2 || null === (r2 = i2.persistence) || void 0 === r2 ? void 0 : r2.props[Ce]) || [];
    if (e5.SURVEY_SHOWN_EVENT_NAME == t2 && n2 && s2.length > 0) {
      var o2, a2 = null == n2 || null === (o2 = n2.properties) || void 0 === o2 ? void 0 : o2.$survey_id;
      if (a2) {
        var u2 = s2.indexOf(a2);
        u2 >= 0 && (s2.splice(u2, 1), this._updateActivatedSurveys(s2));
      }
    } else
      this.eventToSurveys.has(t2) && this._updateActivatedSurveys(s2.concat(this.eventToSurveys.get(t2) || []));
  } }, { key: "onAction", value: function(e6) {
    var t2, n2, i2 = (null === (t2 = this.instance) || void 0 === t2 || null === (n2 = t2.persistence) || void 0 === n2 ? void 0 : n2.props[Ce]) || [];
    this.actionToSurveys.has(e6) && this._updateActivatedSurveys(i2.concat(this.actionToSurveys.get(e6) || []));
  } }, { key: "_updateActivatedSurveys", value: function(e6) {
    var t2, n2;
    null === (t2 = this.instance) || void 0 === t2 || null === (n2 = t2.persistence) || void 0 === n2 || n2.register(q({}, Ce, U(new Set(e6))));
  } }, { key: "getSurveys", value: function() {
    var e6, t2, n2 = null === (e6 = this.instance) || void 0 === e6 || null === (t2 = e6.persistence) || void 0 === t2 ? void 0 : t2.props[Ce];
    return n2 || [];
  } }, { key: "getEventToSurveys", value: function() {
    return this.eventToSurveys;
  } }, { key: "_getActionMatcher", value: function() {
    return this.actionMatcher;
  } }]), e5;
}();
q(Tr, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
var Cr = "[Surveys]";
var Mr = { icontains: function(t2) {
  return !!e && e.location.href.toLowerCase().indexOf(t2.toLowerCase()) > -1;
}, not_icontains: function(t2) {
  return !!e && -1 === e.location.href.toLowerCase().indexOf(t2.toLowerCase());
}, regex: function(t2) {
  return !!e && _t(e.location.href, t2);
}, not_regex: function(t2) {
  return !!e && !_t(e.location.href, t2);
}, exact: function(t2) {
  return (null == e ? void 0 : e.location.href) === t2;
}, is_not: function(t2) {
  return (null == e ? void 0 : e.location.href) !== t2;
} };
var $r = function() {
  function e5(t2) {
    L(this, e5), this.instance = t2, this._surveyEventReceiver = null;
  }
  return N(e5, [{ key: "afterDecideResponse", value: function(e6) {
    this._decideServerResponse = !!e6.surveys, this.loadIfEnabled();
  } }, { key: "loadIfEnabled", value: function() {
    var e6, t2, n2, i2 = this, r2 = null == h || null === (e6 = h.__PosthogExtensions__) || void 0 === e6 ? void 0 : e6.generateSurveys;
    this.instance.config.disable_surveys || !this._decideServerResponse || r2 || (null == this._surveyEventReceiver && (this._surveyEventReceiver = new Tr(this.instance)), null === (t2 = h.__PosthogExtensions__) || void 0 === t2 || null === (n2 = t2.loadExternalDependency) || void 0 === n2 || n2.call(t2, this.instance, "surveys", function(e7) {
      var t3, n3;
      if (e7)
        return C.error(Cr, "Could not load surveys script", e7);
      i2._surveyManager = null === (t3 = h.__PosthogExtensions__) || void 0 === t3 || null === (n3 = t3.generateSurveys) || void 0 === n3 ? void 0 : n3.call(t3, i2.instance);
    }));
  } }, { key: "getSurveys", value: function(e6) {
    var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.instance.config.disable_surveys)
      return e6([]);
    null == this._surveyEventReceiver && (this._surveyEventReceiver = new Tr(this.instance));
    var i2 = this.instance.get_property(Te);
    if (i2 && !n2)
      return e6(i2);
    this.instance._send_request({ url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)), method: "GET", transport: "XHR", callback: function(n3) {
      var i3;
      if (200 !== n3.statusCode || !n3.json)
        return e6([]);
      var r2, s2 = n3.json.surveys || [], o2 = s2.filter(function(e7) {
        var t3, n4, i4, r3, s3, o3, a2, u2, l2, c2, d2, h2;
        return (null === (t3 = e7.conditions) || void 0 === t3 ? void 0 : t3.events) && (null === (n4 = e7.conditions) || void 0 === n4 || null === (i4 = n4.events) || void 0 === i4 ? void 0 : i4.values) && (null === (r3 = e7.conditions) || void 0 === r3 || null === (s3 = r3.events) || void 0 === s3 || null === (o3 = s3.values) || void 0 === o3 ? void 0 : o3.length) > 0 || (null === (a2 = e7.conditions) || void 0 === a2 ? void 0 : a2.actions) && (null === (u2 = e7.conditions) || void 0 === u2 || null === (l2 = u2.actions) || void 0 === l2 ? void 0 : l2.values) && (null === (c2 = e7.conditions) || void 0 === c2 || null === (d2 = c2.actions) || void 0 === d2 || null === (h2 = d2.values) || void 0 === h2 ? void 0 : h2.length) > 0;
      });
      o2.length > 0 && (null === (r2 = t2._surveyEventReceiver) || void 0 === r2 || r2.register(o2));
      return null === (i3 = t2.instance.persistence) || void 0 === i3 || i3.register(q({}, Te, s2)), e6(s2);
    } });
  } }, { key: "getActiveMatchingSurveys", value: function(e6) {
    var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.getSurveys(function(n3) {
      var i2, r2 = n3.filter(function(e7) {
        return !(!e7.start_date || e7.end_date);
      }).filter(function(e7) {
        var t3, n4, i3, r3;
        if (!e7.conditions)
          return true;
        var s3 = null === (t3 = e7.conditions) || void 0 === t3 || !t3.url || Mr[null !== (n4 = null === (i3 = e7.conditions) || void 0 === i3 ? void 0 : i3.urlMatchType) && void 0 !== n4 ? n4 : "icontains"](e7.conditions.url), a3 = null === (r3 = e7.conditions) || void 0 === r3 || !r3.selector || (null == o ? void 0 : o.querySelector(e7.conditions.selector));
        return s3 && a3;
      }), s2 = null === (i2 = t2._surveyEventReceiver) || void 0 === i2 ? void 0 : i2.getSurveys(), a2 = r2.filter(function(e7) {
        var n4, i3, r3, o2, a3, u2, l2, c2, d2, h2;
        if (!e7.linked_flag_key && !e7.targeting_flag_key && !e7.internal_targeting_flag_key)
          return true;
        var f2 = !e7.linked_flag_key || t2.instance.featureFlags.isFeatureEnabled(e7.linked_flag_key), v2 = !e7.targeting_flag_key || t2.instance.featureFlags.isFeatureEnabled(e7.targeting_flag_key), p2 = (null === (n4 = e7.conditions) || void 0 === n4 ? void 0 : n4.events) && (null === (i3 = e7.conditions) || void 0 === i3 || null === (r3 = i3.events) || void 0 === r3 ? void 0 : r3.values) && (null === (o2 = e7.conditions) || void 0 === o2 || null === (a3 = o2.events) || void 0 === a3 ? void 0 : a3.values.length) > 0, g2 = (null === (u2 = e7.conditions) || void 0 === u2 ? void 0 : u2.actions) && (null === (l2 = e7.conditions) || void 0 === l2 || null === (c2 = l2.actions) || void 0 === c2 ? void 0 : c2.values) && (null === (d2 = e7.conditions) || void 0 === d2 || null === (h2 = d2.actions) || void 0 === h2 ? void 0 : h2.values.length) > 0, _2 = !p2 && !g2 || (null == s2 ? void 0 : s2.includes(e7.id)), m2 = t2._canActivateRepeatedly(e7), y2 = !(e7.internal_targeting_flag_key && !m2) || t2.instance.featureFlags.isFeatureEnabled(e7.internal_targeting_flag_key);
        return f2 && v2 && y2 && _2;
      });
      return e6(a2);
    }, n2);
  } }, { key: "getNextSurveyStep", value: function(e6, t2, n2) {
    var i2, r2 = e6.questions[t2], s2 = t2 + 1;
    if (null === (i2 = r2.branching) || void 0 === i2 || !i2.type)
      return t2 === e6.questions.length - 1 ? xr.End : s2;
    if (r2.branching.type === xr.End)
      return xr.End;
    if (r2.branching.type === xr.SpecificQuestion) {
      if (Number.isInteger(r2.branching.index))
        return r2.branching.index;
    } else if (r2.branching.type === xr.ResponseBased) {
      if (r2.type === Er.SingleChoice) {
        var o2, a2, u2 = r2.choices.indexOf("".concat(n2));
        if (null !== (o2 = r2.branching) && void 0 !== o2 && null !== (a2 = o2.responseValues) && void 0 !== a2 && a2.hasOwnProperty(u2)) {
          var l2 = r2.branching.responseValues[u2];
          return Number.isInteger(l2) ? l2 : l2 === xr.End ? xr.End : s2;
        }
      } else if (r2.type === Er.Rating) {
        var c2, d2;
        if ("number" != typeof n2 || !Number.isInteger(n2))
          throw new Error("The response type must be an integer");
        var h2 = function(e7, t3) {
          if (3 === t3) {
            if (e7 < 1 || e7 > 3)
              throw new Error("The response must be in range 1-3");
            return 1 === e7 ? "negative" : 2 === e7 ? "neutral" : "positive";
          }
          if (5 === t3) {
            if (e7 < 1 || e7 > 5)
              throw new Error("The response must be in range 1-5");
            return e7 <= 2 ? "negative" : 3 === e7 ? "neutral" : "positive";
          }
          if (7 === t3) {
            if (e7 < 1 || e7 > 7)
              throw new Error("The response must be in range 1-7");
            return e7 <= 3 ? "negative" : 4 === e7 ? "neutral" : "positive";
          }
          if (10 === t3) {
            if (e7 < 0 || e7 > 10)
              throw new Error("The response must be in range 0-10");
            return e7 <= 6 ? "detractors" : e7 <= 8 ? "passives" : "promoters";
          }
          throw new Error("The scale must be one of: 3, 5, 7, 10");
        }(n2, r2.scale);
        if (null !== (c2 = r2.branching) && void 0 !== c2 && null !== (d2 = c2.responseValues) && void 0 !== d2 && d2.hasOwnProperty(h2)) {
          var f2 = r2.branching.responseValues[h2];
          return Number.isInteger(f2) ? f2 : f2 === xr.End ? xr.End : s2;
        }
      }
      return s2;
    }
    return C.warn(Cr, "Falling back to next question index due to unexpected branching type"), s2;
  } }, { key: "_canActivateRepeatedly", value: function(e6) {
    var t2;
    return I(null === (t2 = h.__PosthogExtensions__) || void 0 === t2 ? void 0 : t2.canActivateRepeatedly) ? (C.warn(Cr, "canActivateRepeatedly is not defined, must init before calling"), false) : h.__PosthogExtensions__.canActivateRepeatedly(e6);
  } }, { key: "canRenderSurvey", value: function(e6) {
    var t2 = this;
    I(this._surveyManager) ? C.warn(Cr, "canActivateRepeatedly is not defined, must init before calling") : this.getSurveys(function(n2) {
      var i2 = n2.filter(function(t3) {
        return t3.id === e6;
      })[0];
      t2._surveyManager.canRenderSurvey(i2);
    });
  } }, { key: "renderSurvey", value: function(e6, t2) {
    var n2 = this;
    I(this._surveyManager) ? C.warn(Cr, "canActivateRepeatedly is not defined, must init before calling") : this.getSurveys(function(i2) {
      var r2 = i2.filter(function(t3) {
        return t3.id === e6;
      })[0];
      n2._surveyManager.renderSurvey(r2, null == o ? void 0 : o.querySelector(t2));
    });
  } }]), e5;
}();
var Or = function() {
  function e5(t2) {
    var n2, i2, r2 = this;
    L(this, e5), q(this, "serverLimits", {}), q(this, "lastEventRateLimited", false), q(this, "checkForLimiting", function(e6) {
      var t3 = e6.text;
      if (t3 && t3.length)
        try {
          (JSON.parse(t3).quota_limited || []).forEach(function(e7) {
            C.info("[RateLimiter] ".concat(e7 || "events", " is quota limited.")), r2.serverLimits[e7] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
          });
        } catch (e7) {
          return void C.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e7 ? void 0 : e7.message, '"'), { text: t3 });
        }
    }), this.instance = t2, this.captureEventsPerSecond = (null === (n2 = t2.config.rate_limiting) || void 0 === n2 ? void 0 : n2.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null === (i2 = t2.config.rate_limiting) || void 0 === i2 ? void 0 : i2.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(true).isRateLimited;
  }
  return N(e5, [{ key: "clientRateLimitContext", value: function() {
    var e6, t2, n2, i2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], r2 = (/* @__PURE__ */ new Date()).getTime(), s2 = null !== (e6 = null === (t2 = this.instance.persistence) || void 0 === t2 ? void 0 : t2.get_property(Ae)) && void 0 !== e6 ? e6 : { tokens: this.captureEventsBurstLimit, last: r2 };
    s2.tokens += (r2 - s2.last) / 1e3 * this.captureEventsPerSecond, s2.last = r2, s2.tokens > this.captureEventsBurstLimit && (s2.tokens = this.captureEventsBurstLimit);
    var o2 = s2.tokens < 1;
    return o2 || i2 || (s2.tokens = Math.max(0, s2.tokens - 1)), !o2 || this.lastEventRateLimited || i2 || this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.") }, { skip_client_rate_limiting: true }), this.lastEventRateLimited = o2, null === (n2 = this.instance.persistence) || void 0 === n2 || n2.set_property(Ae, s2), { isRateLimited: o2, remainingTokens: s2.tokens };
  } }, { key: "isServerRateLimited", value: function(e6) {
    var t2 = this.serverLimits[e6 || "events"] || false;
    return false !== t2 && (/* @__PURE__ */ new Date()).getTime() < t2;
  } }]), e5;
}();
var Ar = function() {
  return O({ initialPathName: (null == a ? void 0 : a.pathname) || "", referringDomain: yn.referringDomain() }, yn.campaignParams());
};
var Lr = function() {
  function e5(t2, n2, i2) {
    var r2 = this;
    L(this, e5), q(this, "_onSessionIdCallback", function(e6) {
      var t3 = r2._getStoredProps();
      if (!t3 || t3.sessionId !== e6) {
        var n3 = { sessionId: e6, props: r2._sessionSourceParamGenerator() };
        r2._persistence.register(q({}, Oe, n3));
      }
    }), this._sessionIdManager = t2, this._persistence = n2, this._sessionSourceParamGenerator = i2 || Ar, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
  }
  return N(e5, [{ key: "_getStoredProps", value: function() {
    return this._persistence.props[Oe];
  } }, { key: "getSessionProps", value: function() {
    var e6, t2 = null === (e6 = this._getStoredProps()) || void 0 === e6 ? void 0 : e6.props;
    return t2 ? { $client_session_initial_referring_host: t2.referringDomain, $client_session_initial_pathname: t2.initialPathName, $client_session_initial_utm_source: t2.utm_source, $client_session_initial_utm_campaign: t2.utm_campaign, $client_session_initial_utm_medium: t2.utm_medium, $client_session_initial_utm_content: t2.utm_content, $client_session_initial_utm_term: t2.utm_term } : {};
  } }]), e5;
}();
var Dr = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "headlesschrome", "cypress", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"];
var Nr = function(e5, t2) {
  if (!e5)
    return false;
  var n2 = e5.toLowerCase();
  return Dr.concat(t2 || []).some(function(e6) {
    var t3 = e6.toLowerCase();
    return -1 !== n2.indexOf(t3);
  });
};
var qr = function() {
  function e5() {
    L(this, e5), this.clicks = [];
  }
  return N(e5, [{ key: "isRageClick", value: function(e6, t2, n2) {
    var i2 = this.clicks[this.clicks.length - 1];
    if (i2 && Math.abs(e6 - i2.x) + Math.abs(t2 - i2.y) < 30 && n2 - i2.timestamp < 1e3) {
      if (this.clicks.push({ x: e6, y: t2, timestamp: n2 }), 3 === this.clicks.length)
        return true;
    } else
      this.clicks = [{ x: e6, y: t2, timestamp: n2 }];
    return false;
  } }]), e5;
}();
function Br(e5) {
  var t2;
  return e5.id === Be || !(null === (t2 = e5.closest) || void 0 === t2 || !t2.call(e5, "#" + Be));
}
var Hr = function() {
  function t2(n2) {
    var i2, r2 = this;
    L(this, t2), q(this, "rageclicks", new qr()), q(this, "_enabledServerSide", false), q(this, "_initialized", false), q(this, "_flushInterval", null), this.instance = n2, this._enabledServerSide = !(null === (i2 = this.instance.persistence) || void 0 === i2 || !i2.props[fe]), null == e || e.addEventListener("beforeunload", function() {
      r2.flush();
    });
  }
  return N(t2, [{ key: "flushIntervalMilliseconds", get: function() {
    var e5 = 5e3;
    return b(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e5 = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e5;
  } }, { key: "isEnabled", get: function() {
    return w(this.instance.config.capture_heatmaps) ? w(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : false !== this.instance.config.capture_heatmaps;
  } }, { key: "startIfEnabled", value: function() {
    if (this.isEnabled) {
      if (this._initialized)
        return;
      C.info("[heatmaps] starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds);
    } else {
      var e5;
      clearInterval(null !== (e5 = this._flushInterval) && void 0 !== e5 ? e5 : void 0), this.getAndClearBuffer();
    }
  } }, { key: "afterDecideResponse", value: function(e5) {
    var t3 = !!e5.heatmaps;
    this.instance.persistence && this.instance.persistence.register(q({}, fe, t3)), this._enabledServerSide = t3, this.startIfEnabled();
  } }, { key: "getAndClearBuffer", value: function() {
    var e5 = this.buffer;
    return this.buffer = void 0, e5;
  } }, { key: "_setupListeners", value: function() {
    var t3 = this;
    e && o && (oe(o, "click", function(n2) {
      return t3._onClick(n2 || (null == e ? void 0 : e.event));
    }, false, true), oe(o, "mousemove", function(n2) {
      return t3._onMouseMove(n2 || (null == e ? void 0 : e.event));
    }, false, true), this._initialized = true);
  } }, { key: "_getProperties", value: function(t3, n2) {
    var i2 = this.instance.scrollManager.scrollY(), r2 = this.instance.scrollManager.scrollX(), s2 = this.instance.scrollManager.scrollElement(), o2 = function(t4, n3, i3) {
      for (var r3 = t4; r3 && Mn(r3) && !$n(r3, "body"); ) {
        if (r3 === i3)
          return false;
        if (X(n3, null == e ? void 0 : e.getComputedStyle(r3).position))
          return true;
        r3 = Dn(r3);
      }
      return false;
    }(Cn(t3), ["fixed", "sticky"], s2);
    return { x: t3.clientX + (o2 ? 0 : r2), y: t3.clientY + (o2 ? 0 : i2), target_fixed: o2, type: n2 };
  } }, { key: "_onClick", value: function(e5) {
    var t3;
    if (!Br(e5.target)) {
      var n2 = this._getProperties(e5, "click");
      null !== (t3 = this.rageclicks) && void 0 !== t3 && t3.isRageClick(e5.clientX, e5.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._capture(O(O({}, n2), {}, { type: "rageclick" })), this._capture(n2);
    }
  } }, { key: "_onMouseMove", value: function(e5) {
    var t3 = this;
    Br(e5.target) || (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(function() {
      t3._capture(t3._getProperties(e5, "mousemove"));
    }, 500));
  } }, { key: "_capture", value: function(t3) {
    if (e) {
      var n2 = e.location.href;
      this.buffer = this.buffer || {}, this.buffer[n2] || (this.buffer[n2] = []), this.buffer[n2].push(t3);
    }
  } }, { key: "flush", value: function() {
    this.buffer && !k(this.buffer) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
  } }]), t2;
}();
var Ur = function() {
  function t2(e5) {
    var n2 = this;
    L(this, t2), q(this, "_updateScrollData", function() {
      var e6, t3, i2, r2;
      n2.context || (n2.context = {});
      var s2 = n2.scrollElement(), o2 = n2.scrollY(), a2 = s2 ? Math.max(0, s2.scrollHeight - s2.clientHeight) : 0, u2 = o2 + ((null == s2 ? void 0 : s2.clientHeight) || 0), l2 = (null == s2 ? void 0 : s2.scrollHeight) || 0;
      n2.context.lastScrollY = Math.ceil(o2), n2.context.maxScrollY = Math.max(o2, null !== (e6 = n2.context.maxScrollY) && void 0 !== e6 ? e6 : 0), n2.context.maxScrollHeight = Math.max(a2, null !== (t3 = n2.context.maxScrollHeight) && void 0 !== t3 ? t3 : 0), n2.context.lastContentY = u2, n2.context.maxContentY = Math.max(u2, null !== (i2 = n2.context.maxContentY) && void 0 !== i2 ? i2 : 0), n2.context.maxContentHeight = Math.max(l2, null !== (r2 = n2.context.maxContentHeight) && void 0 !== r2 ? r2 : 0);
    }), this.instance = e5;
  }
  return N(t2, [{ key: "getContext", value: function() {
    return this.context;
  } }, { key: "resetContext", value: function() {
    var e5 = this.context;
    return setTimeout(this._updateScrollData, 0), e5;
  } }, { key: "startMeasuringScrollPosition", value: function() {
    null == e || e.addEventListener("scroll", this._updateScrollData, true), null == e || e.addEventListener("scrollend", this._updateScrollData, true), null == e || e.addEventListener("resize", this._updateScrollData);
  } }, { key: "scrollElement", value: function() {
    if (!this.instance.config.scroll_root_selector)
      return null == e ? void 0 : e.document.documentElement;
    var t3, n2 = z(m(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector]);
    try {
      for (n2.s(); !(t3 = n2.n()).done; ) {
        var i2 = t3.value, r2 = null == e ? void 0 : e.document.querySelector(i2);
        if (r2)
          return r2;
      }
    } catch (e5) {
      n2.e(e5);
    } finally {
      n2.f();
    }
  } }, { key: "scrollY", value: function() {
    if (this.instance.config.scroll_root_selector) {
      var t3 = this.scrollElement();
      return t3 && t3.scrollTop || 0;
    }
    return e && (e.scrollY || e.pageYOffset || e.document.documentElement.scrollTop) || 0;
  } }, { key: "scrollX", value: function() {
    if (this.instance.config.scroll_root_selector) {
      var t3 = this.scrollElement();
      return t3 && t3.scrollLeft || 0;
    }
    return e && (e.scrollX || e.pageXOffset || e.document.documentElement.scrollLeft) || 0;
  } }]), t2;
}();
var jr = "$copy_autocapture";
function Wr(e5, t2) {
  return t2.length > e5 ? t2.slice(0, e5) + "..." : t2;
}
var zr;
var Vr = function() {
  function t2(e5) {
    L(this, t2), q(this, "_initialized", false), q(this, "_isDisabledServerSide", null), q(this, "rageclicks", new qr()), q(this, "_elementsChainAsString", false), this.instance = e5, this._elementSelectors = null;
  }
  return N(t2, [{ key: "config", get: function() {
    var e5, t3, n2 = b(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
    return n2.url_allowlist = null === (e5 = n2.url_allowlist) || void 0 === e5 ? void 0 : e5.map(function(e6) {
      return new RegExp(e6);
    }), n2.url_ignorelist = null === (t3 = n2.url_ignorelist) || void 0 === t3 ? void 0 : t3.map(function(e6) {
      return new RegExp(e6);
    }), n2;
  } }, { key: "_addDomEventHandlers", value: function() {
    var t3 = this;
    if (this.isBrowserSupported()) {
      if (e && o) {
        var n2 = function(n3) {
          n3 = n3 || (null == e ? void 0 : e.event);
          try {
            t3._captureEvent(n3);
          } catch (e5) {
            C.error("Failed to capture event", e5);
          }
        }, i2 = function(n3) {
          n3 = n3 || (null == e ? void 0 : e.event), t3._captureEvent(n3, jr);
        };
        oe(o, "submit", n2, false, true), oe(o, "change", n2, false, true), oe(o, "click", n2, false, true), this.config.capture_copied_text && (oe(o, "copy", i2, false, true), oe(o, "cut", i2, false, true));
      }
    } else
      C.info("Disabling Automatic Event Collection because this browser is not supported");
  } }, { key: "startIfEnabled", value: function() {
    this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = true);
  } }, { key: "afterDecideResponse", value: function(e5) {
    e5.elementsChainAsString && (this._elementsChainAsString = e5.elementsChainAsString), this.instance.persistence && this.instance.persistence.register(q({}, he, !!e5.autocapture_opt_out)), this._isDisabledServerSide = !!e5.autocapture_opt_out, this.startIfEnabled();
  } }, { key: "setElementSelectors", value: function(e5) {
    this._elementSelectors = e5;
  } }, { key: "getElementSelectors", value: function(e5) {
    var t3, n2 = [];
    return null === (t3 = this._elementSelectors) || void 0 === t3 || t3.forEach(function(t4) {
      var i2 = null == o ? void 0 : o.querySelectorAll(t4);
      null == i2 || i2.forEach(function(i3) {
        e5 === i3 && n2.push(t4);
      });
    }), n2;
  } }, { key: "isEnabled", get: function() {
    var e5, t3, n2 = null === (e5 = this.instance.persistence) || void 0 === e5 ? void 0 : e5.props[he], i2 = this._isDisabledServerSide;
    if (x(i2) && !P(n2) && !this.instance.config.advanced_disable_decide)
      return false;
    var r2 = null !== (t3 = this._isDisabledServerSide) && void 0 !== t3 ? t3 : !!n2;
    return !!this.instance.config.autocapture && !r2;
  } }, { key: "_previousElementSibling", value: function(e5) {
    if (e5.previousElementSibling)
      return e5.previousElementSibling;
    var t3 = e5;
    do {
      t3 = t3.previousSibling;
    } while (t3 && !Mn(t3));
    return t3;
  } }, { key: "_getAugmentPropertiesFromElement", value: function(e5) {
    if (!qn(e5))
      return {};
    var t3 = {};
    return J(e5.attributes, function(e6) {
      if (e6.name && 0 === e6.name.indexOf("data-ph-capture-attribute")) {
        var n2 = e6.name.replace("data-ph-capture-attribute-", ""), i2 = e6.value;
        n2 && i2 && Gn(i2) && (t3[n2] = i2);
      }
    }), t3;
  } }, { key: "_getPropertiesFromElement", value: function(e5, t3, n2) {
    var i2, r2 = e5.tagName.toLowerCase(), s2 = { tag_name: r2 };
    Ln.indexOf(r2) > -1 && !n2 && ("a" === r2.toLowerCase() || "button" === r2.toLowerCase() ? s2.$el_text = Wr(1024, Qn(e5)) : s2.$el_text = Wr(1024, Tn(e5)));
    var o2 = Pn(e5);
    o2.length > 0 && (s2.classes = o2.filter(function(e6) {
      return "" !== e6;
    }));
    var a2 = null === (i2 = this.config) || void 0 === i2 ? void 0 : i2.element_attribute_ignorelist;
    J(e5.attributes, function(n3) {
      var i3;
      if ((!Bn(e5) || -1 !== ["name", "id", "class", "aria-label"].indexOf(n3.name)) && (null == a2 || !a2.includes(n3.name)) && !t3 && Gn(n3.value) && (i3 = n3.name, !S(i3) || "_ngcontent" !== i3.substring(0, 10) && "_nghost" !== i3.substring(0, 7))) {
        var r3 = n3.value;
        "class" === n3.name && (r3 = In(r3).join(" ")), s2["attr__" + n3.name] = Wr(1024, r3);
      }
    });
    for (var u2 = 1, l2 = 1, c2 = e5; c2 = this._previousElementSibling(c2); )
      u2++, c2.tagName === e5.tagName && l2++;
    return s2.nth_child = u2, s2.nth_of_type = l2, s2;
  } }, { key: "_getDefaultProperties", value: function(e5) {
    return { $event_type: e5, $ce_version: 1 };
  } }, { key: "_captureEvent", value: function(t3) {
    var n2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
    if (this.isEnabled) {
      var r2, s2 = Cn(t3);
      if (On(s2) && (s2 = s2.parentNode || null), "$autocapture" === i2 && "click" === t3.type && t3 instanceof MouseEvent)
        this.instance.config.rageclick && null !== (r2 = this.rageclicks) && void 0 !== r2 && r2.isRageClick(t3.clientX, t3.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._captureEvent(t3, "$rageclick");
      var o2 = i2 === jr;
      if (s2 && Nn(s2, t3, this.config, o2, o2 ? ["copy", "cut"] : void 0)) {
        for (var a2, u2, l2 = [s2], c2 = s2; c2.parentNode && !$n(c2, "body"); )
          An(c2.parentNode) ? (l2.push(c2.parentNode.host), c2 = c2.parentNode.host) : (l2.push(c2.parentNode), c2 = c2.parentNode);
        var d2, h2, f2 = [], v2 = {}, p2 = false;
        if (J(l2, function(e5) {
          var t4 = qn(e5);
          "a" === e5.tagName.toLowerCase() && (d2 = e5.getAttribute("href"), d2 = t4 && Gn(d2) && d2), X(Pn(e5), "ph-no-capture") && (p2 = true), f2.push(n2._getPropertiesFromElement(e5, n2.instance.config.mask_all_element_attributes, n2.instance.config.mask_all_text));
          var i3 = n2._getAugmentPropertiesFromElement(e5);
          Y(v2, i3);
        }), this.instance.config.mask_all_text || ("a" === s2.tagName.toLowerCase() || "button" === s2.tagName.toLowerCase() ? f2[0].$el_text = Qn(s2) : f2[0].$el_text = Tn(s2)), d2) {
          var g2, _2;
          f2[0].attr__href = d2;
          var m2 = null === (g2 = gt(d2)) || void 0 === g2 ? void 0 : g2.host, y2 = null == e || null === (_2 = e.location) || void 0 === _2 ? void 0 : _2.host;
          m2 && y2 && m2 !== y2 && (h2 = d2);
        }
        if (p2)
          return false;
        var b2 = Y(this._getDefaultProperties(t3.type), this._elementsChainAsString ? { $elements_chain: Yn(f2) } : { $elements: f2 }, null !== (a2 = f2[0]) && void 0 !== a2 && a2.$el_text ? { $el_text: null === (u2 = f2[0]) || void 0 === u2 ? void 0 : u2.$el_text } : {}, h2 && "click" === t3.type ? { $external_click_url: h2 } : {}, v2), k2 = this.getElementSelectors(s2);
        if (k2 && k2.length > 0 && (b2.$element_selectors = k2), i2 === jr) {
          var w2, S2 = Rn(null == e || null === (w2 = e.getSelection()) || void 0 === w2 ? void 0 : w2.toString()), E2 = t3.type || "clipboard";
          if (!S2)
            return false;
          b2.$selected_content = S2, b2.$copy_type = E2;
        }
        return this.instance.capture(i2, b2), true;
      }
    }
  } }, { key: "isBrowserSupported", value: function() {
    return y(null == o ? void 0 : o.querySelectorAll);
  } }]), t2;
}();
var Gr = function() {
  function e5(t2) {
    var n2 = this;
    L(this, e5), q(this, "_restoreXHRPatch", void 0), q(this, "_restoreFetchPatch", void 0), q(this, "_startCapturing", function() {
      var e6, t3, i2, r2;
      w(n2._restoreXHRPatch) && (null === (e6 = h.__PosthogExtensions__) || void 0 === e6 || null === (t3 = e6.tracingHeadersPatchFns) || void 0 === t3 || t3._patchXHR(n2.instance.sessionManager));
      w(n2._restoreFetchPatch) && (null === (i2 = h.__PosthogExtensions__) || void 0 === i2 || null === (r2 = i2.tracingHeadersPatchFns) || void 0 === r2 || r2._patchFetch(n2.instance.sessionManager));
    }), this.instance = t2;
  }
  return N(e5, [{ key: "_loadScript", value: function(e6) {
    var t2, n2, i2;
    null !== (t2 = h.__PosthogExtensions__) && void 0 !== t2 && t2.tracingHeadersPatchFns && e6(), null === (n2 = h.__PosthogExtensions__) || void 0 === n2 || null === (i2 = n2.loadExternalDependency) || void 0 === i2 || i2.call(n2, this.instance, "tracing-headers", function(t3) {
      if (t3)
        return C.error("[TRACING-HEADERS] failed to load script", t3);
      e6();
    });
  } }, { key: "startIfEnabledOrStop", value: function() {
    var e6, t2;
    this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e6 = this._restoreXHRPatch) || void 0 === e6 || e6.call(this), null === (t2 = this._restoreFetchPatch) || void 0 === t2 || t2.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0);
  } }]), e5;
}();
!function(e5) {
  e5[e5.PENDING = -1] = "PENDING", e5[e5.DENIED = 0] = "DENIED", e5[e5.GRANTED = 1] = "GRANTED";
}(zr || (zr = {}));
var Qr = function() {
  function e5(t2) {
    L(this, e5), this.instance = t2;
  }
  return N(e5, [{ key: "config", get: function() {
    return this.instance.config;
  } }, { key: "consent", get: function() {
    return this.getDnt() ? zr.DENIED : this.storedConsent;
  } }, { key: "isOptedOut", value: function() {
    return this.consent === zr.DENIED || this.consent === zr.PENDING && this.config.opt_out_capturing_by_default;
  } }, { key: "isOptedIn", value: function() {
    return !this.isOptedOut();
  } }, { key: "optInOut", value: function(e6) {
    this.storage.set(this.storageKey, e6 ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie);
  } }, { key: "reset", value: function() {
    this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie);
  } }, { key: "storageKey", get: function() {
    var e6 = this.instance.config, t2 = e6.token;
    return (e6.opt_out_capturing_cookie_prefix || "__ph_opt_in_out_") + t2;
  } }, { key: "storedConsent", get: function() {
    var e6 = this.storage.get(this.storageKey);
    return "1" === e6 ? zr.GRANTED : "0" === e6 ? zr.DENIED : zr.PENDING;
  } }, { key: "storage", get: function() {
    if (!this._storage) {
      var e6 = this.config.opt_out_capturing_persistence_type;
      this._storage = "localStorage" === e6 ? ut : ot;
      var t2 = "localStorage" === e6 ? ot : ut;
      t2.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t2.get(this.storageKey)), t2.remove(this.storageKey, this.config.cross_subdomain_cookie));
    }
    return this._storage;
  } }, { key: "getDnt", value: function() {
    return !!this.config.respect_dnt && !!ae([null == s ? void 0 : s.doNotTrack, null == s ? void 0 : s.msDoNotTrack, h.doNotTrack], function(e6) {
      return X([true, 1, "1", "yes"], e6);
    });
  } }]), e5;
}();
var Jr = "[Exception Autocapture]";
var Yr = function() {
  function t2(n2) {
    var i2, r2 = this;
    L(this, t2), q(this, "originalOnUnhandledRejectionHandler", void 0), q(this, "startCapturing", function() {
      var t3, n3, i3, s2;
      if (e && r2.isEnabled && !r2.hasHandlers && !r2.isCapturing) {
        var o2 = null === (t3 = h.__PosthogExtensions__) || void 0 === t3 || null === (n3 = t3.errorWrappingFunctions) || void 0 === n3 ? void 0 : n3.wrapOnError, a2 = null === (i3 = h.__PosthogExtensions__) || void 0 === i3 || null === (s2 = i3.errorWrappingFunctions) || void 0 === s2 ? void 0 : s2.wrapUnhandledRejection;
        if (o2 && a2)
          try {
            r2.unwrapOnError = o2(r2.captureException.bind(r2)), r2.unwrapUnhandledRejection = a2(r2.captureException.bind(r2));
          } catch (e5) {
            C.error(Jr + " failed to start", e5), r2.stopCapturing();
          }
        else
          C.error(Jr + " failed to load error wrapping functions - cannot start");
      }
    }), this.instance = n2, this.remoteEnabled = !(null === (i2 = this.instance.persistence) || void 0 === i2 || !i2.props[ve]), this.startIfEnabled();
  }
  return N(t2, [{ key: "isEnabled", get: function() {
    var e5;
    return null !== (e5 = this.remoteEnabled) && void 0 !== e5 && e5;
  } }, { key: "isCapturing", get: function() {
    var t3;
    return !(null == e || null === (t3 = e.onerror) || void 0 === t3 || !t3.__POSTHOG_INSTRUMENTED__);
  } }, { key: "hasHandlers", get: function() {
    return this.originalOnUnhandledRejectionHandler || this.unwrapOnError;
  } }, { key: "startIfEnabled", value: function() {
    this.isEnabled && !this.isCapturing && (C.info(Jr + " enabled, starting..."), this.loadScript(this.startCapturing));
  } }, { key: "loadScript", value: function(e5) {
    var t3, n2;
    this.hasHandlers && e5(), null === (t3 = h.__PosthogExtensions__) || void 0 === t3 || null === (n2 = t3.loadExternalDependency) || void 0 === n2 || n2.call(t3, this.instance, "exception-autocapture", function(t4) {
      if (t4)
        return C.error(Jr + " failed to load script", t4);
      e5();
    });
  } }, { key: "stopCapturing", value: function() {
    var e5, t3;
    null === (e5 = this.unwrapOnError) || void 0 === e5 || e5.call(this), null === (t3 = this.unwrapUnhandledRejection) || void 0 === t3 || t3.call(this);
  } }, { key: "afterDecideResponse", value: function(e5) {
    var t3 = e5.autocaptureExceptions;
    this.remoteEnabled = !!t3 || false, this.instance.persistence && this.instance.persistence.register(q({}, ve, this.remoteEnabled)), this.startIfEnabled();
  } }, { key: "captureException", value: function(e5) {
    var t3 = this.instance.requestRouter.endpointFor("ui");
    e5.$exception_personURL = "".concat(t3, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()), this.instance.exceptions.sendExceptionEvent(e5);
  } }]), t2;
}();
var Xr = 9e5;
var Kr = "[Web Vitals]";
var Zr = function() {
  function t2(e5) {
    var n2, i2 = this;
    L(this, t2), q(this, "_enabledServerSide", false), q(this, "_initialized", false), q(this, "buffer", { url: void 0, metrics: [], firstMetricTimestamp: void 0 }), q(this, "_flushToCapture", function() {
      clearTimeout(i2._delayedFlushTimer), 0 !== i2.buffer.metrics.length && (i2.instance.capture("$web_vitals", i2.buffer.metrics.reduce(function(e6, t3) {
        var n3;
        return O(O({}, e6), {}, (q(n3 = {}, "$web_vitals_".concat(t3.name, "_event"), O({}, t3)), q(n3, "$web_vitals_".concat(t3.name, "_value"), t3.value), n3));
      }, {})), i2.buffer = { url: void 0, metrics: [], firstMetricTimestamp: void 0 });
    }), q(this, "_addToBuffer", function(e6) {
      var t3, n3 = null === (t3 = i2.instance.sessionManager) || void 0 === t3 ? void 0 : t3.checkAndGetSessionAndWindowId(true);
      if (w(n3))
        C.error(Kr + "Could not read session ID. Dropping metrics!");
      else {
        i2.buffer = i2.buffer || { url: void 0, metrics: [], firstMetricTimestamp: void 0 };
        var r2 = i2._currentURL();
        if (!w(r2))
          if (I(null == e6 ? void 0 : e6.name) || I(null == e6 ? void 0 : e6.value))
            C.error(Kr + "Invalid metric received", e6);
          else if (i2._maxAllowedValue && e6.value >= i2._maxAllowedValue)
            C.error(Kr + "Ignoring metric with value >= " + i2._maxAllowedValue, e6);
          else
            i2.buffer.url !== r2 && (i2._flushToCapture(), i2._delayedFlushTimer = setTimeout(i2._flushToCapture, 8e3)), w(i2.buffer.url) && (i2.buffer.url = r2), i2.buffer.firstMetricTimestamp = w(i2.buffer.firstMetricTimestamp) ? Date.now() : i2.buffer.firstMetricTimestamp, i2.buffer.metrics.push(O(O({}, e6), {}, { $current_url: r2, $session_id: n3.sessionId, $window_id: n3.windowId, timestamp: Date.now() })), i2.buffer.metrics.length === i2.allowedMetrics.length && i2._flushToCapture();
      }
    }), q(this, "_startCapturing", function() {
      var e6, t3, n3, r2, s2 = h.__PosthogExtensions__;
      if (!w(s2) && !w(s2.postHogWebVitalsCallbacks)) {
        var o2 = s2.postHogWebVitalsCallbacks;
        e6 = o2.onLCP, t3 = o2.onCLS, n3 = o2.onFCP, r2 = o2.onINP;
      }
      e6 && t3 && n3 && r2 ? (i2.allowedMetrics.indexOf("LCP") > -1 && e6(i2._addToBuffer.bind(i2)), i2.allowedMetrics.indexOf("CLS") > -1 && t3(i2._addToBuffer.bind(i2)), i2.allowedMetrics.indexOf("FCP") > -1 && n3(i2._addToBuffer.bind(i2)), i2.allowedMetrics.indexOf("INP") > -1 && r2(i2._addToBuffer.bind(i2)), i2._initialized = true) : C.error(Kr + "web vitals callbacks not loaded - not starting");
    }), this.instance = e5, this._enabledServerSide = !(null === (n2 = this.instance.persistence) || void 0 === n2 || !n2.props[ge]), this.startIfEnabled();
  }
  return N(t2, [{ key: "allowedMetrics", get: function() {
    var e5, t3, n2 = b(this.instance.config.capture_performance) ? null === (e5 = this.instance.config.capture_performance) || void 0 === e5 ? void 0 : e5.web_vitals_allowed_metrics : void 0;
    return w(n2) ? (null === (t3 = this.instance.persistence) || void 0 === t3 ? void 0 : t3.props[_e]) || ["CLS", "FCP", "INP", "LCP"] : n2;
  } }, { key: "_maxAllowedValue", get: function() {
    var e5 = b(this.instance.config.capture_performance) && F(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : Xr;
    return 0 < e5 && e5 <= 6e4 ? Xr : e5;
  } }, { key: "isEnabled", get: function() {
    var e5 = b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
    return P(e5) ? e5 : this._enabledServerSide;
  } }, { key: "startIfEnabled", value: function() {
    this.isEnabled && !this._initialized && (C.info(Kr + " enabled, starting..."), this.loadScript(this._startCapturing));
  } }, { key: "afterDecideResponse", value: function(e5) {
    var t3 = b(e5.capturePerformance) && !!e5.capturePerformance.web_vitals, n2 = b(e5.capturePerformance) ? e5.capturePerformance.web_vitals_allowed_metrics : void 0;
    this.instance.persistence && (this.instance.persistence.register(q({}, ge, t3)), this.instance.persistence.register(q({}, _e, n2))), this._enabledServerSide = t3, this.startIfEnabled();
  } }, { key: "loadScript", value: function(e5) {
    var t3, n2, i2;
    null !== (t3 = h.__PosthogExtensions__) && void 0 !== t3 && t3.postHogWebVitalsCallbacks && e5(), null === (n2 = h.__PosthogExtensions__) || void 0 === n2 || null === (i2 = n2.loadExternalDependency) || void 0 === i2 || i2.call(n2, this.instance, "web-vitals", function(t4) {
      t4 ? C.error(Kr + " failed to load script", t4) : e5();
    });
  } }, { key: "_currentURL", value: function() {
    var t3 = e ? e.location.href : void 0;
    return t3 || C.error(Kr + "Could not determine current URL"), t3;
  } }]), t2;
}();
var es = { icontains: function(t2, n2) {
  return !!e && n2.href.toLowerCase().indexOf(t2.toLowerCase()) > -1;
}, not_icontains: function(t2, n2) {
  return !!e && -1 === n2.href.toLowerCase().indexOf(t2.toLowerCase());
}, regex: function(t2, n2) {
  return !!e && _t(n2.href, t2);
}, not_regex: function(t2, n2) {
  return !!e && !_t(n2.href, t2);
}, exact: function(e5, t2) {
  return t2.href === e5;
}, is_not: function(e5, t2) {
  return t2.href !== e5;
} };
var ts = function() {
  function t2(e5) {
    var n2 = this;
    L(this, t2), q(this, "getWebExperimentsAndEvaluateDisplayLogic", function() {
      var e6 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      n2.getWebExperiments(function(e7) {
        t2.logInfo("retrieved web experiments from the server"), n2._flagToExperiments = /* @__PURE__ */ new Map(), e7.forEach(function(e8) {
          if (e8.feature_flag_key && n2._featureFlags && n2._featureFlags[e8.feature_flag_key]) {
            var i2;
            if (n2._flagToExperiments)
              t2.logInfo("setting flag key ", e8.feature_flag_key, " to web experiment ", e8), null === (i2 = n2._flagToExperiments) || void 0 === i2 || i2.set(e8.feature_flag_key, e8);
            var r2 = n2._featureFlags[e8.feature_flag_key];
            r2 && e8.variants[r2] && t2.applyTransforms(e8.name, r2, e8.variants[r2].transforms);
          } else if (e8.variants)
            for (var s2 in e8.variants) {
              var o2 = e8.variants[s2];
              t2.matchesTestVariant(o2) && t2.applyTransforms(e8.name, s2, o2.transforms);
            }
        });
      }, e6);
    }), this.instance = e5;
    this.instance.onFeatureFlags && this.instance.onFeatureFlags(function(e6) {
      n2.applyFeatureFlagChanges(e6);
    }), this._flagToExperiments = /* @__PURE__ */ new Map();
  }
  return N(t2, [{ key: "applyFeatureFlagChanges", value: function(e5) {
    var n2 = this;
    t2.logInfo("applying feature flags", e5), I(this._flagToExperiments) || this.instance.config.disable_web_experiments || e5.forEach(function(e6) {
      var i2;
      if (n2._flagToExperiments && null !== (i2 = n2._flagToExperiments) && void 0 !== i2 && i2.has(e6)) {
        var r2, s2 = n2.instance.getFeatureFlag(e6), o2 = null === (r2 = n2._flagToExperiments) || void 0 === r2 ? void 0 : r2.get(e6);
        s2 && null != o2 && o2.variants[s2] && t2.applyTransforms(o2.name, s2, o2.variants[s2].transforms);
      }
    });
  } }, { key: "afterDecideResponse", value: function(e5) {
    this._featureFlags = e5.featureFlags, this.loadIfEnabled();
  } }, { key: "loadIfEnabled", value: function() {
    this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
  } }, { key: "getWebExperiments", value: function(e5, t3) {
    if (this.instance.config.disable_web_experiments)
      return e5([]);
    var n2 = this.instance.get_property("$web_experiments");
    if (n2 && !t3)
      return e5(n2);
    this.instance._send_request({ url: this.instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=".concat(this.instance.config.token)), method: "GET", transport: "XHR", callback: function(t4) {
      if (200 !== t4.statusCode || !t4.json)
        return e5([]);
      var n3 = t4.json.experiments || [];
      return e5(n3);
    } });
  } }], [{ key: "matchesTestVariant", value: function(e5) {
    return !I(e5.conditions) && t2.matchUrlConditions(e5) && t2.matchUTMConditions(e5);
  } }, { key: "matchUrlConditions", value: function(e5) {
    var n2;
    if (I(e5.conditions) || I(null === (n2 = e5.conditions) || void 0 === n2 ? void 0 : n2.url))
      return true;
    var i2, r2, s2, o2 = t2.getWindowLocation();
    return !!o2 && (null === (i2 = e5.conditions) || void 0 === i2 || !i2.url || es[null !== (r2 = null === (s2 = e5.conditions) || void 0 === s2 ? void 0 : s2.urlMatchType) && void 0 !== r2 ? r2 : "icontains"](e5.conditions.url, o2));
  } }, { key: "getWindowLocation", value: function() {
    return null == e ? void 0 : e.location;
  } }, { key: "matchUTMConditions", value: function(e5) {
    var t3;
    if (I(e5.conditions) || I(null === (t3 = e5.conditions) || void 0 === t3 ? void 0 : t3.utm))
      return true;
    var n2 = yn.campaignParams();
    if (n2.utm_source) {
      var i2, r2, s2, o2, a2, u2, l2, c2, d2, h2, f2, v2, p2, g2, _2, m2, y2 = null === (i2 = e5.conditions) || void 0 === i2 || null === (r2 = i2.utm) || void 0 === r2 || !r2.utm_campaign || (null === (s2 = e5.conditions) || void 0 === s2 || null === (o2 = s2.utm) || void 0 === o2 ? void 0 : o2.utm_campaign) == n2.utm_campaign, b2 = null === (a2 = e5.conditions) || void 0 === a2 || null === (u2 = a2.utm) || void 0 === u2 || !u2.utm_source || (null === (l2 = e5.conditions) || void 0 === l2 || null === (c2 = l2.utm) || void 0 === c2 ? void 0 : c2.utm_source) == n2.utm_source, k2 = null === (d2 = e5.conditions) || void 0 === d2 || null === (h2 = d2.utm) || void 0 === h2 || !h2.utm_medium || (null === (f2 = e5.conditions) || void 0 === f2 || null === (v2 = f2.utm) || void 0 === v2 ? void 0 : v2.utm_medium) == n2.utm_medium, w2 = null === (p2 = e5.conditions) || void 0 === p2 || null === (g2 = p2.utm) || void 0 === g2 || !g2.utm_term || (null === (_2 = e5.conditions) || void 0 === _2 || null === (m2 = _2.utm) || void 0 === m2 ? void 0 : m2.utm_term) == n2.utm_term;
      return y2 && k2 && w2 && b2;
    }
    return false;
  } }, { key: "logInfo", value: function(e5) {
    for (var t3 = arguments.length, n2 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++)
      n2[i2 - 1] = arguments[i2];
    C.info("[WebExperiments] ".concat(e5), n2);
  } }, { key: "applyTransforms", value: function(e5, n2, i2) {
    i2.forEach(function(i3) {
      if (i3.selector) {
        var r2;
        t2.logInfo("applying transform of variant ".concat(n2, " for experiment ").concat(e5, " "), i3);
        var s2 = null === (r2 = document) || void 0 === r2 ? void 0 : r2.querySelectorAll(i3.selector);
        null == s2 || s2.forEach(function(e6) {
          var t3 = e6;
          i3.attributes && i3.attributes.forEach(function(e7) {
            switch (e7.name) {
              case "text":
                t3.innerText = e7.value;
                break;
              case "html":
                t3.innerHTML = e7.value;
                break;
              case "cssClass":
                t3.className = e7.value;
                break;
              default:
                t3.setAttribute(e7.name, e7.value);
            }
          }), i3.text && (t3.innerText = i3.text), i3.html && (t3.innerHTML = i3.html), i3.className && (t3.className = i3.className);
        });
      }
    });
  } }]), t2;
}();
var ns = "/e/";
var is = function() {
  function e5(t2) {
    var n2;
    L(this, e5), this.instance = t2, this._endpointSuffix = (null === (n2 = this.instance.persistence) || void 0 === n2 ? void 0 : n2.props[pe]) || ns;
  }
  return N(e5, [{ key: "endpoint", get: function() {
    return this.instance.requestRouter.endpointFor("api", this._endpointSuffix);
  } }, { key: "afterDecideResponse", value: function(e6) {
    var t2 = e6.autocaptureExceptions;
    this._endpointSuffix = b(t2) && t2.endpoint || ns, this.instance.persistence && this.instance.persistence.register(q({}, pe, this._endpointSuffix));
  } }, { key: "sendExceptionEvent", value: function(e6) {
    this.instance.capture("$exception", e6, { _noTruncate: true, _batchKey: "exceptionEvent", _url: this.endpoint });
  } }]), e5;
}();
var rs = {};
var ss = function() {
};
var os = "posthog";
var as = !ar && -1 === (null == d ? void 0 : d.indexOf("MSIE")) && -1 === (null == d ? void 0 : d.indexOf("Mozilla"));
var us = function() {
  var t2, n2, i2;
  return { api_host: "https://us.i.posthog.com", ui_host: null, token: "", autocapture: true, rageclick: true, cross_subdomain_cookie: (n2 = null == o ? void 0 : o.location, i2 = null == n2 ? void 0 : n2.hostname, !!S(i2) && "herokuapp.com" !== i2.split(".").slice(-2).join(".")), persistence: "localStorage+cookie", persistence_name: "", loaded: ss, store_google: true, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: true, capture_pageview: true, capture_pageleave: "if_capture_pageview", debug: a && S(null == a ? void 0 : a.search) && -1 !== a.search.indexOf("__posthog_debug=true") || false, verbose: false, cookie_expiration: 365, upgrade: false, disable_session_recording: false, disable_persistence: false, disable_web_experiments: true, disable_surveys: false, enable_recording_console_log: void 0, secure_cookie: "https:" === (null == e || null === (t2 = e.location) || void 0 === t2 ? void 0 : t2.protocol), ip: true, opt_out_capturing_by_default: false, opt_out_persistence_by_default: false, opt_out_useragent_filter: false, opt_out_capturing_persistence_type: "localStorage", opt_out_capturing_cookie_prefix: null, opt_in_site_apps: false, property_denylist: [], respect_dnt: false, sanitize_properties: null, request_headers: {}, inapp_protocol: "//", inapp_link_new_window: false, request_batching: true, properties_string_max_length: 65535, session_recording: {}, mask_all_element_attributes: false, mask_all_text: false, advanced_disable_decide: false, advanced_disable_feature_flags: false, advanced_disable_feature_flags_on_first_load: false, advanced_disable_toolbar_metrics: false, feature_flag_request_timeout_ms: 3e3, on_request_error: function(e5) {
    var t3 = "Bad HTTP status: " + e5.statusCode + " " + e5.text;
    C.error(t3);
  }, get_device_id: function(e5) {
    return e5;
  }, _onCapture: ss, capture_performance: void 0, name: "posthog", bootstrap: {}, disable_compression: false, session_idle_timeout_seconds: 1800, person_profiles: "always", __add_tracing_headers: false };
};
var ls = function(e5) {
  var t2 = {};
  w(e5.process_person) || (t2.person_profiles = e5.process_person), w(e5.xhr_headers) || (t2.request_headers = e5.xhr_headers), w(e5.cookie_name) || (t2.persistence_name = e5.cookie_name), w(e5.disable_cookie) || (t2.disable_persistence = e5.disable_cookie);
  var n2 = Y({}, t2, e5);
  return m(e5.property_blacklist) && (w(e5.property_denylist) ? n2.property_denylist = e5.property_blacklist : m(e5.property_denylist) ? n2.property_denylist = [].concat(U(e5.property_blacklist), U(e5.property_denylist)) : C.error("Invalid value for property_denylist config: " + e5.property_denylist)), n2;
};
var cs = function() {
  function e5() {
    L(this, e5), q(this, "__forceAllowLocalhost", false);
  }
  return N(e5, [{ key: "_forceAllowLocalhost", get: function() {
    return this.__forceAllowLocalhost;
  }, set: function(e6) {
    C.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e6;
  } }]), e5;
}();
var ds = function() {
  function t2() {
    var e5 = this;
    L(this, t2), q(this, "webPerformance", new cs()), q(this, "version", f.LIB_VERSION), q(this, "_internalEventEmitter", new Pr()), this.config = us(), this.decideEndpointWasHit = false, this.SentryIntegration = kr, this.sentryIntegration = function(t3) {
      return function(e6, t4) {
        var n2 = br(e6, t4);
        return { name: yr, processEvent: function(e7) {
          return n2(e7);
        } };
      }(e5, t3);
    }, this.__request_queue = [], this.__loaded = false, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = false, this.featureFlags = new Ve(this), this.toolbar = new sr(this), this.scrollManager = new Ur(this), this.pageViewManager = new Ir(this), this.surveys = new $r(this), this.experiments = new ts(this), this.exceptions = new is(this), this.rateLimiter = new Or(this), this.requestRouter = new mr(this), this.consent = new Qr(this), this.people = { set: function(t3, n2, i2) {
      var r2 = S(t3) ? q({}, t3, n2) : t3;
      e5.setPersonProperties(r2), null == i2 || i2({});
    }, set_once: function(t3, n2, i2) {
      var r2 = S(t3) ? q({}, t3, n2) : t3;
      e5.setPersonProperties(void 0, r2), null == i2 || i2({});
    } }, this.on("eventCaptured", function(e6) {
      return C.info("send", e6);
    });
  }
  return N(t2, [{ key: "init", value: function(e5, n2, i2) {
    if (i2 && i2 !== os) {
      var r2, s2 = null !== (r2 = rs[i2]) && void 0 !== r2 ? r2 : new t2();
      return s2._init(e5, n2, i2), rs[i2] = s2, rs[os][i2] = s2, s2;
    }
    return this._init(e5, n2, i2);
  } }, { key: "_init", value: function(t3) {
    var n2, i2, r2 = this, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o2 = arguments.length > 2 ? arguments[2] : void 0;
    if (w(t3) || E(t3))
      return C.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
    if (this.__loaded)
      return C.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
    this.__loaded = true, this.config = {}, this._triggered_notifs = [], this.set_config(Y({}, us(), ls(s2), { name: o2, token: t3 })), this.config.on_xhr_error && C.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"), this.compression = s2.disable_compression ? void 0 : re.GZipJS, this.persistence = new kn(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new kn(O(O({}, this.config), {}, { persistence: "sessionStorage" }));
    var a2 = O({}, this.persistence.props), u2 = O({}, this.sessionPersistence.props);
    if (this._requestQueue = new or(function(e5) {
      return r2._send_retriable_request(e5);
    }), this._retryQueue = new vr(this), this.__request_queue = [], this.sessionManager = new gr(this.config, this.persistence), this.sessionPropsManager = new Lr(this.sessionManager, this.persistence), new Gr(this).startIfEnabledOrStop(), this.sessionRecording = new tr(this), this.sessionRecording.startIfEnabledOrStop(), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new Vr(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new Hr(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new Zr(this), this.exceptionObserver = new Yr(this), this.exceptionObserver.startIfEnabled(), f.DEBUG = f.DEBUG || this.config.debug, f.DEBUG && C.info("Starting in debug mode", { this: this, config: s2, thisC: O({}, this.config), p: a2, s: u2 }), this._sync_opt_out_with_persistence(), void 0 !== (null === (n2 = s2.bootstrap) || void 0 === n2 ? void 0 : n2.distinctID)) {
      var l2, c2, d2 = this.config.get_device_id(Ze()), h2 = null !== (l2 = s2.bootstrap) && void 0 !== l2 && l2.isIdentifiedID ? d2 : s2.bootstrap.distinctID;
      this.persistence.set_property($e, null !== (c2 = s2.bootstrap) && void 0 !== c2 && c2.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: s2.bootstrap.distinctID, $device_id: h2 });
    }
    if (this._hasBootstrappedFeatureFlags()) {
      var v2, p2, g2 = Object.keys((null === (v2 = s2.bootstrap) || void 0 === v2 ? void 0 : v2.featureFlags) || {}).filter(function(e5) {
        var t4, n3;
        return !(null === (t4 = s2.bootstrap) || void 0 === t4 || null === (n3 = t4.featureFlags) || void 0 === n3 || !n3[e5]);
      }).reduce(function(e5, t4) {
        var n3, i3;
        return e5[t4] = (null === (n3 = s2.bootstrap) || void 0 === n3 || null === (i3 = n3.featureFlags) || void 0 === i3 ? void 0 : i3[t4]) || false, e5;
      }, {}), _2 = Object.keys((null === (p2 = s2.bootstrap) || void 0 === p2 ? void 0 : p2.featureFlagPayloads) || {}).filter(function(e5) {
        return g2[e5];
      }).reduce(function(e5, t4) {
        var n3, i3, r3, o3;
        null !== (n3 = s2.bootstrap) && void 0 !== n3 && null !== (i3 = n3.featureFlagPayloads) && void 0 !== i3 && i3[t4] && (e5[t4] = null === (r3 = s2.bootstrap) || void 0 === r3 || null === (o3 = r3.featureFlagPayloads) || void 0 === o3 ? void 0 : o3[t4]);
        return e5;
      }, {});
      this.featureFlags.receivedFeatureFlags({ featureFlags: g2, featureFlagPayloads: _2 });
    }
    if (!this.get_distinct_id()) {
      var m2 = this.config.get_device_id(Ze());
      this.register_once({ distinct_id: m2, $device_id: m2 }, ""), this.persistence.set_property($e, "anonymous");
    }
    return null == e || null === (i2 = e.addEventListener) || void 0 === i2 || i2.call(e, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), this.toolbar.maybeLoadToolbar(), s2.segment ? wr(this, function() {
      return r2._loaded();
    }) : this._loaded(), y(this.config._onCapture) && this.on("eventCaptured", function(e5) {
      return r2.config._onCapture(e5.event, e5);
    }), this;
  } }, { key: "_afterDecideResponse", value: function(e5) {
    var t3, n2, i2, r2, s2, o2, a2, u2, l2;
    this.compression = void 0, e5.supportedCompression && !this.config.disable_compression && (this.compression = X(e5.supportedCompression, re.GZipJS) ? re.GZipJS : X(e5.supportedCompression, re.Base64) ? re.Base64 : void 0), null !== (t3 = e5.analytics) && void 0 !== t3 && t3.endpoint && (this.analyticsDefaultEndpoint = e5.analytics.endpoint), null === (n2 = this.sessionRecording) || void 0 === n2 || n2.afterDecideResponse(e5), null === (i2 = this.autocapture) || void 0 === i2 || i2.afterDecideResponse(e5), null === (r2 = this.heatmaps) || void 0 === r2 || r2.afterDecideResponse(e5), null === (s2 = this.experiments) || void 0 === s2 || s2.afterDecideResponse(e5), null === (o2 = this.surveys) || void 0 === o2 || o2.afterDecideResponse(e5), null === (a2 = this.webVitalsAutocapture) || void 0 === a2 || a2.afterDecideResponse(e5), null === (u2 = this.exceptions) || void 0 === u2 || u2.afterDecideResponse(e5), null === (l2 = this.exceptionObserver) || void 0 === l2 || l2.afterDecideResponse(e5);
  } }, { key: "_loaded", value: function() {
    var e5 = this, t3 = this.config.advanced_disable_decide;
    t3 || this.featureFlags.setReloadingPaused(true);
    try {
      this.config.loaded(this);
    } catch (e6) {
      C.critical("`loaded` function failed", e6);
    }
    this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout(function() {
      e5.consent.isOptedIn() && e5._captureInitialPageview();
    }, 1), t3 || (new nr(this).call(), this.featureFlags.resetRequestQueue());
  } }, { key: "_start_queue_if_opted_in", value: function() {
    var e5;
    this.has_opted_out_capturing() || this.config.request_batching && (null === (e5 = this._requestQueue) || void 0 === e5 || e5.enable());
  } }, { key: "_dom_loaded", value: function() {
    var e5 = this;
    this.has_opted_out_capturing() || Q(this.__request_queue, function(t3) {
      return e5._send_retriable_request(t3);
    }), this.__request_queue = [], this._start_queue_if_opted_in();
  } }, { key: "_handle_unload", value: function() {
    var e5, t3;
    this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), null === (e5 = this._requestQueue) || void 0 === e5 || e5.unload(), null === (t3 = this._retryQueue) || void 0 === t3 || t3.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, { transport: "sendBeacon" });
  } }, { key: "_send_request", value: function(e5) {
    var t3 = this;
    this.__loaded && (as ? this.__request_queue.push(e5) : this.rateLimiter.isServerRateLimited(e5.batchKey) || (e5.transport = e5.transport || this.config.api_transport, e5.url = lr(e5.url, { ip: this.config.ip ? 1 : 0 }), e5.headers = O({}, this.config.request_headers), e5.compression = "best-available" === e5.compression ? this.compression : e5.compression, function(e6) {
      var t4, n2, i2, r2 = O({}, e6);
      r2.timeout = r2.timeout || 6e4, r2.url = lr(r2.url, { _: (/* @__PURE__ */ new Date()).getTime().toString(), ver: f.LIB_VERSION, compression: r2.compression });
      var s2 = null !== (t4 = r2.transport) && void 0 !== t4 ? t4 : "XHR", o2 = null !== (n2 = null === (i2 = ae(dr, function(e7) {
        return e7.transport === s2;
      })) || void 0 === i2 ? void 0 : i2.method) && void 0 !== n2 ? n2 : dr[0].method;
      if (!o2)
        throw new Error("No available transport method");
      o2(r2);
    }(O(O({}, e5), {}, { callback: function(n2) {
      var i2, r2, s2;
      (t3.rateLimiter.checkForLimiting(n2), n2.statusCode >= 400) && (null === (r2 = (s2 = t3.config).on_request_error) || void 0 === r2 || r2.call(s2, n2));
      null === (i2 = e5.callback) || void 0 === i2 || i2.call(e5, n2);
    } }))));
  } }, { key: "_send_retriable_request", value: function(e5) {
    this._retryQueue ? this._retryQueue.retriableRequest(e5) : this._send_request(e5);
  } }, { key: "_execute_array", value: function(e5) {
    var t3, n2 = this, i2 = [], r2 = [], s2 = [];
    Q(e5, function(e6) {
      e6 && (t3 = e6[0], m(t3) ? s2.push(e6) : y(e6) ? e6.call(n2) : m(e6) && "alias" === t3 ? i2.push(e6) : m(e6) && -1 !== t3.indexOf("capture") && y(n2[t3]) ? s2.push(e6) : r2.push(e6));
    });
    var o2 = function(e6, t4) {
      Q(e6, function(e7) {
        if (m(e7[0])) {
          var n3 = t4;
          J(e7, function(e8) {
            n3 = n3[e8[0]].apply(n3, e8.slice(1));
          });
        } else
          this[e7[0]].apply(this, e7.slice(1));
      }, t4);
    };
    o2(i2, this), o2(r2, this), o2(s2, this);
  } }, { key: "_hasBootstrappedFeatureFlags", value: function() {
    var e5, t3;
    return (null === (e5 = this.config.bootstrap) || void 0 === e5 ? void 0 : e5.featureFlags) && Object.keys(null === (t3 = this.config.bootstrap) || void 0 === t3 ? void 0 : t3.featureFlags).length > 0 || false;
  } }, { key: "push", value: function(e5) {
    this._execute_array([e5]);
  } }, { key: "capture", value: function(e5, t3, n2) {
    var i2;
    if (this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue) {
      if (!this.consent.isOptedOut())
        if (!w(e5) && S(e5)) {
          if (this.config.opt_out_useragent_filter || !this._is_bot()) {
            var r2 = null != n2 && n2.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
            if (null == r2 || !r2.isRateLimited) {
              this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
              var s2 = /* @__PURE__ */ new Date(), o2 = (null == n2 ? void 0 : n2.timestamp) || s2, a2 = { uuid: Ze(), event: e5, properties: this._calculate_event_properties(e5, t3 || {}, o2) };
              r2 && (a2.properties.$lib_rate_limit_remaining_tokens = r2.remainingTokens), (null == n2 ? void 0 : n2.$set) && (a2.$set = null == n2 ? void 0 : n2.$set);
              var u2 = this._calculate_set_once_properties(null == n2 ? void 0 : n2.$set_once);
              u2 && (a2.$set_once = u2), (a2 = ie(a2, null != n2 && n2._noTruncate ? null : this.config.properties_string_max_length)).timestamp = o2, w(null == n2 ? void 0 : n2.timestamp) || (a2.properties.$event_time_override_provided = true, a2.properties.$event_time_override_system_time = s2);
              var l2 = O(O({}, a2.properties.$set), a2.$set);
              k(l2) || this.setPersonPropertiesForFlags(l2), this._internalEventEmitter.emit("eventCaptured", a2);
              var c2 = { method: "POST", url: null !== (i2 = null == n2 ? void 0 : n2._url) && void 0 !== i2 ? i2 : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), data: a2, compression: "best-available", batchKey: null == n2 ? void 0 : n2._batchKey };
              return !this.config.request_batching || n2 && (null == n2 || !n2._batchKey) || null != n2 && n2.send_instantly ? this._send_retriable_request(c2) : this._requestQueue.enqueue(c2), a2;
            }
            C.critical("This capture call is ignored due to client rate limiting.");
          }
        } else
          C.error("No event name provided to posthog.capture");
    } else
      C.uninitializedWarning("posthog.capture");
  } }, { key: "_addCaptureHook", value: function(e5) {
    return this.on("eventCaptured", function(t3) {
      return e5(t3.event, t3);
    });
  } }, { key: "_calculate_event_properties", value: function(e5, t3, n2) {
    if (n2 = n2 || /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence)
      return t3;
    var i2 = this.persistence.remove_event_timer(e5), r2 = O({}, t3);
    if (r2.token = this.config.token, "$snapshot" === e5) {
      var s2 = O(O({}, this.persistence.properties()), this.sessionPersistence.properties());
      return r2.distinct_id = s2.distinct_id, (!S(r2.distinct_id) && !F(r2.distinct_id) || E(r2.distinct_id)) && C.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), r2;
    }
    var a2 = yn.properties();
    if (this.sessionManager) {
      var u2 = this.sessionManager.checkAndGetSessionAndWindowId(), l2 = u2.sessionId, c2 = u2.windowId;
      r2.$session_id = l2, r2.$window_id = c2;
    }
    if (this.requestRouter.region === fr.CUSTOM && (r2.$lib_custom_api_host = this.config.api_host), this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e5 || "$pageleave" === e5 || "$autocapture" === e5)) {
      var h2 = this.sessionPropsManager.getSessionProps();
      r2 = Y(r2, h2);
    }
    if (!this.config.disable_scroll_properties) {
      var f2 = {};
      "$pageview" === e5 ? f2 = this.pageViewManager.doPageView(n2) : "$pageleave" === e5 && (f2 = this.pageViewManager.doPageLeave(n2)), r2 = Y(r2, f2);
    }
    if ("$pageview" === e5 && o && (r2.title = o.title), !w(i2)) {
      var v2 = n2.getTime() - i2;
      r2.$duration = parseFloat((v2 / 1e3).toFixed(3));
    }
    d && this.config.opt_out_useragent_filter && (r2.$browser_type = this._is_bot() ? "bot" : "browser"), (r2 = Y({}, a2, this.persistence.properties(), this.sessionPersistence.properties(), r2)).$is_identified = this._isIdentified(), m(this.config.property_denylist) ? J(this.config.property_denylist, function(e6) {
      delete r2[e6];
    }) : C.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
    var p2 = this.config.sanitize_properties;
    return p2 && (r2 = p2(r2, e5)), r2.$process_person_profile = this._hasPersonProcessing(), r2;
  } }, { key: "_calculate_set_once_properties", value: function(e5) {
    if (!this.persistence || !this._hasPersonProcessing())
      return e5;
    var t3 = Y({}, this.persistence.get_initial_props(), e5 || {});
    return k(t3) ? void 0 : t3;
  } }, { key: "register", value: function(e5, t3) {
    var n2;
    null === (n2 = this.persistence) || void 0 === n2 || n2.register(e5, t3);
  } }, { key: "register_once", value: function(e5, t3, n2) {
    var i2;
    null === (i2 = this.persistence) || void 0 === i2 || i2.register_once(e5, t3, n2);
  } }, { key: "register_for_session", value: function(e5) {
    var t3;
    null === (t3 = this.sessionPersistence) || void 0 === t3 || t3.register(e5);
  } }, { key: "unregister", value: function(e5) {
    var t3;
    null === (t3 = this.persistence) || void 0 === t3 || t3.unregister(e5);
  } }, { key: "unregister_for_session", value: function(e5) {
    var t3;
    null === (t3 = this.sessionPersistence) || void 0 === t3 || t3.unregister(e5);
  } }, { key: "_register_single", value: function(e5, t3) {
    this.register(q({}, e5, t3));
  } }, { key: "getFeatureFlag", value: function(e5, t3) {
    return this.featureFlags.getFeatureFlag(e5, t3);
  } }, { key: "getFeatureFlagPayload", value: function(e5) {
    var t3 = this.featureFlags.getFeatureFlagPayload(e5);
    try {
      return JSON.parse(t3);
    } catch (e6) {
      return t3;
    }
  } }, { key: "isFeatureEnabled", value: function(e5, t3) {
    return this.featureFlags.isFeatureEnabled(e5, t3);
  } }, { key: "reloadFeatureFlags", value: function() {
    this.featureFlags.reloadFeatureFlags();
  } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e5, t3) {
    this.featureFlags.updateEarlyAccessFeatureEnrollment(e5, t3);
  } }, { key: "getEarlyAccessFeatures", value: function(e5) {
    var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.featureFlags.getEarlyAccessFeatures(e5, t3);
  } }, { key: "on", value: function(e5, t3) {
    return this._internalEventEmitter.on(e5, t3);
  } }, { key: "onFeatureFlags", value: function(e5) {
    return this.featureFlags.onFeatureFlags(e5);
  } }, { key: "onSessionId", value: function(e5) {
    var t3, n2;
    return null !== (t3 = null === (n2 = this.sessionManager) || void 0 === n2 ? void 0 : n2.onSessionId(e5)) && void 0 !== t3 ? t3 : function() {
    };
  } }, { key: "getSurveys", value: function(e5) {
    var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getSurveys(e5, t3);
  } }, { key: "getActiveMatchingSurveys", value: function(e5) {
    var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getActiveMatchingSurveys(e5, t3);
  } }, { key: "renderSurvey", value: function(e5, t3) {
    this.surveys.renderSurvey(e5, t3);
  } }, { key: "canRenderSurvey", value: function(e5) {
    this.surveys.canRenderSurvey(e5);
  } }, { key: "getNextSurveyStep", value: function(e5, t3, n2) {
    return this.surveys.getNextSurveyStep(e5, t3, n2);
  } }, { key: "identify", value: function(e5, t3, n2) {
    if (!this.__loaded || !this.persistence)
      return C.uninitializedWarning("posthog.identify");
    if (F(e5) && (e5 = e5.toString(), C.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e5) {
      if (["distinct_id", "distinctid"].includes(e5.toLowerCase()))
        C.critical('The string "'.concat(e5, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
      else if (this._requirePersonProcessing("posthog.identify")) {
        var i2 = this.get_distinct_id();
        if (this.register({ $user_id: e5 }), !this.get_property("$device_id")) {
          var r2 = i2;
          this.register_once({ $had_persisted_distinct_id: true, $device_id: r2 }, "");
        }
        e5 !== i2 && e5 !== this.get_property(ce) && (this.unregister(ce), this.register({ distinct_id: e5 }));
        var s2 = "anonymous" === (this.persistence.get_property($e) || "anonymous");
        e5 !== i2 && s2 ? (this.persistence.set_property($e, "identified"), this.setPersonPropertiesForFlags(t3 || {}, false), this.capture("$identify", { distinct_id: e5, $anon_distinct_id: i2 }, { $set: t3 || {}, $set_once: n2 || {} }), this.featureFlags.setAnonymousDistinctId(i2)) : (t3 || n2) && this.setPersonProperties(t3, n2), e5 !== i2 && (this.reloadFeatureFlags(), this.unregister(Me));
      }
    } else
      C.error("Unique user id has not been set in posthog.identify");
  } }, { key: "setPersonProperties", value: function(e5, t3) {
    (e5 || t3) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e5 || {}), this.capture("$set", { $set: e5 || {}, $set_once: t3 || {} }));
  } }, { key: "group", value: function(e5, t3, n2) {
    if (e5 && t3) {
      if (this._requirePersonProcessing("posthog.group")) {
        var i2 = this.getGroups();
        i2[e5] !== t3 && this.resetGroupPropertiesForFlags(e5), this.register({ $groups: O(O({}, i2), {}, q({}, e5, t3)) }), n2 && (this.capture("$groupidentify", { $group_type: e5, $group_key: t3, $group_set: n2 }), this.setGroupPropertiesForFlags(q({}, e5, n2))), i2[e5] === t3 || n2 || this.reloadFeatureFlags();
      }
    } else
      C.error("posthog.group requires a group type and group key");
  } }, { key: "resetGroups", value: function() {
    this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
  } }, { key: "setPersonPropertiesForFlags", value: function(e5) {
    var t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") && this.featureFlags.setPersonPropertiesForFlags(e5, t3);
  } }, { key: "resetPersonPropertiesForFlags", value: function() {
    this.featureFlags.resetPersonPropertiesForFlags();
  } }, { key: "setGroupPropertiesForFlags", value: function(e5) {
    var t3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e5, t3);
  } }, { key: "resetGroupPropertiesForFlags", value: function(e5) {
    this.featureFlags.resetGroupPropertiesForFlags(e5);
  } }, { key: "reset", value: function(e5) {
    var t3, n2, i2, r2;
    if (C.info("reset"), !this.__loaded)
      return C.uninitializedWarning("posthog.reset");
    var s2 = this.get_property("$device_id");
    this.consent.reset(), null === (t3 = this.persistence) || void 0 === t3 || t3.clear(), null === (n2 = this.sessionPersistence) || void 0 === n2 || n2.clear(), null === (i2 = this.persistence) || void 0 === i2 || i2.set_property($e, "anonymous"), null === (r2 = this.sessionManager) || void 0 === r2 || r2.resetSessionId();
    var o2 = this.config.get_device_id(Ze());
    this.register_once({ distinct_id: o2, $device_id: e5 ? o2 : s2 }, "");
  } }, { key: "get_distinct_id", value: function() {
    return this.get_property("distinct_id");
  } }, { key: "getGroups", value: function() {
    return this.get_property("$groups") || {};
  } }, { key: "get_session_id", value: function() {
    var e5, t3;
    return null !== (e5 = null === (t3 = this.sessionManager) || void 0 === t3 ? void 0 : t3.checkAndGetSessionAndWindowId(true).sessionId) && void 0 !== e5 ? e5 : "";
  } }, { key: "get_session_replay_url", value: function(e5) {
    if (!this.sessionManager)
      return "";
    var t3 = this.sessionManager.checkAndGetSessionAndWindowId(true), n2 = t3.sessionId, i2 = t3.sessionStartTimestamp, r2 = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(n2));
    if (null != e5 && e5.withTimestamp && i2) {
      var s2, o2 = null !== (s2 = e5.timestampLookBack) && void 0 !== s2 ? s2 : 10;
      if (!i2)
        return r2;
      var a2 = Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - i2) / 1e3) - o2, 0);
      r2 += "?t=".concat(a2);
    }
    return r2;
  } }, { key: "alias", value: function(e5, t3) {
    return e5 === this.get_property(le) ? (C.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (w(t3) && (t3 = this.get_distinct_id()), e5 !== t3 ? (this._register_single(ce, e5), this.capture("$create_alias", { alias: e5, distinct_id: t3 })) : (C.warn("alias matches current distinct_id - skipping api call."), this.identify(e5), -1)) : void 0;
  } }, { key: "set_config", value: function(e5) {
    var t3, n2, i2, r2, s2 = O({}, this.config);
    b(e5) && (Y(this.config, ls(e5)), null === (t3 = this.persistence) || void 0 === t3 || t3.update_config(this.config, s2), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new kn(O(O({}, this.config), {}, { persistence: "sessionStorage" })), ut.is_supported() && "true" === ut.get("ph_debug") && (this.config.debug = true), this.config.debug && (f.DEBUG = true, C.info("set_config", { config: e5, oldConfig: s2, newConfig: O({}, this.config) })), null === (n2 = this.sessionRecording) || void 0 === n2 || n2.startIfEnabledOrStop(), null === (i2 = this.autocapture) || void 0 === i2 || i2.startIfEnabled(), null === (r2 = this.heatmaps) || void 0 === r2 || r2.startIfEnabled(), this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence());
  } }, { key: "startSessionRecording", value: function(e5) {
    var t3, n2 = P(e5) && e5;
    if (n2 || null != e5 && e5.sampling) {
      var i2, r2, s2 = null === (i2 = this.sessionManager) || void 0 === i2 ? void 0 : i2.checkAndGetSessionAndWindowId();
      null === (r2 = this.persistence) || void 0 === r2 || r2.register(q({}, xe, true)), C.info("Session recording started with sampling override for session: ", null == s2 ? void 0 : s2.sessionId);
    }
    (n2 || null != e5 && e5.linked_flag) && (null === (t3 = this.sessionRecording) || void 0 === t3 || t3.overrideLinkedFlag(), C.info("Session recording started with linked_flags override"));
    this.set_config({ disable_session_recording: false });
  } }, { key: "stopSessionRecording", value: function() {
    this.set_config({ disable_session_recording: true });
  } }, { key: "sessionRecordingStarted", value: function() {
    var e5;
    return !(null === (e5 = this.sessionRecording) || void 0 === e5 || !e5.started);
  } }, { key: "captureException", value: function(e5, t3) {
    var n2, i2 = y(null === (n2 = h.__PosthogExtensions__) || void 0 === n2 ? void 0 : n2.parseErrorAsProperties) ? h.__PosthogExtensions__.parseErrorAsProperties([e5.message, void 0, void 0, void 0, e5]) : O({ $exception_type: e5.name, $exception_message: e5.message, $exception_level: "error" }, t3);
    this.exceptions.sendExceptionEvent(i2);
  } }, { key: "loadToolbar", value: function(e5) {
    return this.toolbar.loadToolbar(e5);
  } }, { key: "get_property", value: function(e5) {
    var t3;
    return null === (t3 = this.persistence) || void 0 === t3 ? void 0 : t3.props[e5];
  } }, { key: "getSessionProperty", value: function(e5) {
    var t3;
    return null === (t3 = this.sessionPersistence) || void 0 === t3 ? void 0 : t3.props[e5];
  } }, { key: "toString", value: function() {
    var e5, t3 = null !== (e5 = this.config.name) && void 0 !== e5 ? e5 : os;
    return t3 !== os && (t3 = os + "." + t3), t3;
  } }, { key: "_isIdentified", value: function() {
    var e5, t3;
    return "identified" === (null === (e5 = this.persistence) || void 0 === e5 ? void 0 : e5.get_property($e)) || "identified" === (null === (t3 = this.sessionPersistence) || void 0 === t3 ? void 0 : t3.get_property($e));
  } }, { key: "_hasPersonProcessing", value: function() {
    var e5, t3, n2, i2;
    return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && k(this.getGroups()) && (null === (e5 = this.persistence) || void 0 === e5 || null === (t3 = e5.props) || void 0 === t3 || !t3[ce]) && (null === (n2 = this.persistence) || void 0 === n2 || null === (i2 = n2.props) || void 0 === i2 || !i2[qe]));
  } }, { key: "_shouldCapturePageleave", value: function() {
    return true === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview;
  } }, { key: "createPersonProfile", value: function() {
    this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {});
  } }, { key: "_requirePersonProcessing", value: function(e5) {
    return "never" === this.config.person_profiles ? (C.error(e5 + ' was called, but process_person is set to "never". This call will be ignored.'), false) : (this._register_single(qe, true), true);
  } }, { key: "_sync_opt_out_with_persistence", value: function() {
    var e5, t3, n2, i2, r2 = this.consent.isOptedOut(), s2 = this.config.opt_out_persistence_by_default, o2 = this.config.disable_persistence || r2 && !!s2;
    (null === (e5 = this.persistence) || void 0 === e5 ? void 0 : e5.disabled) !== o2 && (null === (n2 = this.persistence) || void 0 === n2 || n2.set_disabled(o2));
    (null === (t3 = this.sessionPersistence) || void 0 === t3 ? void 0 : t3.disabled) !== o2 && (null === (i2 = this.sessionPersistence) || void 0 === i2 || i2.set_disabled(o2));
  } }, { key: "opt_in_capturing", value: function(e5) {
    var t3;
    (this.consent.optInOut(true), this._sync_opt_out_with_persistence(), w(null == e5 ? void 0 : e5.captureEventName) || null != e5 && e5.captureEventName) && this.capture(null !== (t3 = null == e5 ? void 0 : e5.captureEventName) && void 0 !== t3 ? t3 : "$opt_in", null == e5 ? void 0 : e5.captureProperties, { send_instantly: true });
    this.config.capture_pageview && this._captureInitialPageview();
  } }, { key: "opt_out_capturing", value: function() {
    this.consent.optInOut(false), this._sync_opt_out_with_persistence();
  } }, { key: "has_opted_in_capturing", value: function() {
    return this.consent.isOptedIn();
  } }, { key: "has_opted_out_capturing", value: function() {
    return this.consent.isOptedOut();
  } }, { key: "clear_opt_in_out_capturing", value: function() {
    this.consent.reset(), this._sync_opt_out_with_persistence();
  } }, { key: "_is_bot", value: function() {
    return s ? function(e5, t3) {
      if (!e5)
        return false;
      var n2 = e5.userAgent;
      if (n2 && Nr(n2, t3))
        return true;
      try {
        var i2 = null == e5 ? void 0 : e5.userAgentData;
        if (null != i2 && i2.brands && i2.brands.some(function(e6) {
          return Nr(null == e6 ? void 0 : e6.brand, t3);
        }))
          return true;
      } catch (e6) {
      }
      return !!e5.webdriver;
    }(s, this.config.custom_blocked_useragents) : void 0;
  } }, { key: "_captureInitialPageview", value: function() {
    o && !this._initialPageviewCaptured && (this._initialPageviewCaptured = true, this.capture("$pageview", { title: o.title }, { send_instantly: true }));
  } }, { key: "debug", value: function(t3) {
    false === t3 ? (null == e || e.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: false })) : (null == e || e.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({ debug: true }));
  } }]), t2;
}();
!function(e5, t2) {
  for (var n2 = 0; n2 < t2.length; n2++)
    e5.prototype[t2[n2]] = ee(e5.prototype[t2[n2]]);
}(ds, ["identify"]);
var hs;
var fs = (hs = rs[os] = new ds(), function() {
  function t2() {
    t2.done || (t2.done = true, as = false, J(rs, function(e5) {
      e5._dom_loaded();
    }));
  }
  null != o && o.addEventListener && ("complete" === o.readyState ? t2() : o.addEventListener("DOMContentLoaded", t2, false)), e && oe(e, "load", t2, true);
}(), hs);

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/entry.client.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1731046171312.9763";
}
function PosthogInit() {
  _s();
  (0, import_react2.useEffect)(() => {
    const timer = setTimeout(() => {
      fs.init("phc_mLbknZ7mYfJxODEdfCwb8T2Rmc6S488fHIiU9TARqWM", {
        api_host: "https://us.i.posthog.com",
        person_profiles: "identified_only"
        // or 'always' for anonymous users
      });
    }, 5e3);
    return () => clearTimeout(timer);
  }, []);
  return null;
}
_s(PosthogInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PosthogInit;
(0, import_react2.startTransition)(() => {
  (0, import_client.hydrateRoot)(document, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PosthogInit, {}, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/entry.client.tsx",
    lineNumber: 44,
    columnNumber: 25
  }, this));
});
var _c;
$RefreshReg$(_c, "PosthogInit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
//# sourceMappingURL=/build/entry.client-HDYH3QG4.js.map
