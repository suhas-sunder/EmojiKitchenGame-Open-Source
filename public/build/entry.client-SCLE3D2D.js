import {
  require_client
} from "/build/_shared/chunk-YR2B2LOX.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-46YC46ZY.js";
import "/build/_shared/chunk-74BWT7FI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-TQMAZLEN.js";
import {
  require_react
} from "/build/_shared/chunk-QT64XSGC.js";
import {
  createHotContext
} from "/build/_shared/chunk-QGCIVLFQ.js";
import "/build/_shared/chunk-5GUXQVXG.js";
import {
  __publicField,
  __toESM
} from "/build/_shared/chunk-73CLBT4D.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);

// node_modules/posthog-js/dist/module.js
var e = "undefined" != typeof window ? window : void 0;
var t = "undefined" != typeof globalThis ? globalThis : e;
var i = Array.prototype;
var n = i.forEach;
var s = i.indexOf;
var r = null == t ? void 0 : t.navigator;
var o = null == t ? void 0 : t.document;
var a = null == t ? void 0 : t.location;
var l = null == t ? void 0 : t.fetch;
var c = null != t && t.XMLHttpRequest && "withCredentials" in new t.XMLHttpRequest() ? t.XMLHttpRequest : void 0;
var u = null == t ? void 0 : t.AbortController;
var d = null == r ? void 0 : r.userAgent;
var h = null != e ? e : {};
var _ = { DEBUG: false, LIB_VERSION: "1.182.0" };
var p = Array.isArray;
var g = Object.prototype;
var f = g.hasOwnProperty;
var v = g.toString;
var m = p || function(e2) {
  return "[object Array]" === v.call(e2);
};
var y = function(e2) {
  return "function" == typeof e2;
};
var b = function(e2) {
  return e2 === Object(e2) && !m(e2);
};
var w = function(e2) {
  if (b(e2)) {
    for (const t2 in e2)
      if (f.call(e2, t2))
        return false;
    return true;
  }
  return false;
};
var S = function(e2) {
  return void 0 === e2;
};
var E = function(e2) {
  return "[object String]" == v.call(e2);
};
var k = function(e2) {
  return E(e2) && 0 === e2.trim().length;
};
var x = function(e2) {
  return null === e2;
};
var I = function(e2) {
  return S(e2) || x(e2);
};
var P = function(e2) {
  return "[object Number]" == v.call(e2);
};
var F = function(e2) {
  return "[object Boolean]" === v.call(e2);
};
var R = (e2) => e2 instanceof FormData;
var C = "[PostHog.js]";
var T = { _log: function(t2) {
  if (e && (_.DEBUG || h.POSTHOG_DEBUG) && !S(e.console) && e.console) {
    const r2 = "__rrweb_original__" in e.console[t2] ? e.console[t2].__rrweb_original__ : e.console[t2];
    for (var i2 = arguments.length, n2 = new Array(i2 > 1 ? i2 - 1 : 0), s2 = 1; s2 < i2; s2++)
      n2[s2 - 1] = arguments[s2];
    r2(C, ...n2);
  }
}, info: function() {
  for (var e2 = arguments.length, t2 = new Array(e2), i2 = 0; i2 < e2; i2++)
    t2[i2] = arguments[i2];
  T._log("log", ...t2);
}, warn: function() {
  for (var e2 = arguments.length, t2 = new Array(e2), i2 = 0; i2 < e2; i2++)
    t2[i2] = arguments[i2];
  T._log("warn", ...t2);
}, error: function() {
  for (var e2 = arguments.length, t2 = new Array(e2), i2 = 0; i2 < e2; i2++)
    t2[i2] = arguments[i2];
  T._log("error", ...t2);
}, critical: function() {
  for (var e2 = arguments.length, t2 = new Array(e2), i2 = 0; i2 < e2; i2++)
    t2[i2] = arguments[i2];
  console.error(C, ...t2);
}, uninitializedWarning: (e2) => {
  T.error(`You must initialize PostHog before calling ${e2}`);
} };
var $ = (e2, t2, i2) => {
  if (e2.config.disable_external_dependency_loading)
    return T.warn(`${t2} was requested but loading of external scripts is disabled.`), i2("Loading of external scripts is disabled");
  const n2 = () => {
    if (!o)
      return i2("document not found");
    const e3 = o.createElement("script");
    e3.type = "text/javascript", e3.crossOrigin = "anonymous", e3.src = t2, e3.onload = (e4) => i2(void 0, e4), e3.onerror = (e4) => i2(e4);
    const n3 = o.querySelectorAll("body > script");
    var s2;
    n3.length > 0 ? null === (s2 = n3[0].parentNode) || void 0 === s2 || s2.insertBefore(e3, n3[0]) : o.body.appendChild(e3);
  };
  null != o && o.body ? n2() : null == o || o.addEventListener("DOMContentLoaded", n2);
};
h.__PosthogExtensions__ = h.__PosthogExtensions__ || {}, h.__PosthogExtensions__.loadExternalDependency = (e2, t2, i2) => {
  let n2 = `/static/${t2}.js?v=${e2.version}`;
  if ("toolbar" === t2) {
    const e3 = 3e5;
    n2 = `${n2}&t=${Math.floor(Date.now() / e3) * e3}`;
  }
  const s2 = e2.requestRouter.endpointFor("assets", n2);
  $(e2, s2, i2);
}, h.__PosthogExtensions__.loadSiteApp = (e2, t2, i2) => {
  const n2 = e2.requestRouter.endpointFor("api", t2);
  $(e2, n2, i2);
};
var A = {};
var M = function(e2) {
  return e2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function L(e2, t2, i2) {
  if (m(e2)) {
    if (n && e2.forEach === n)
      e2.forEach(t2, i2);
    else if ("length" in e2 && e2.length === +e2.length) {
      for (let n2 = 0, s2 = e2.length; n2 < s2; n2++)
        if (n2 in e2 && t2.call(i2, e2[n2], n2) === A)
          return;
    }
  }
}
function D(e2, t2, i2) {
  if (!I(e2)) {
    if (m(e2))
      return L(e2, t2, i2);
    if (R(e2)) {
      for (const n2 of e2.entries())
        if (t2.call(i2, n2[1], n2[0]) === A)
          return;
    } else
      for (const n2 in e2)
        if (f.call(e2, n2) && t2.call(i2, e2[n2], n2) === A)
          return;
  }
}
var O = function(e2) {
  for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++)
    i2[n2 - 1] = arguments[n2];
  return L(i2, function(t3) {
    for (const i3 in t3)
      void 0 !== t3[i3] && (e2[i3] = t3[i3]);
  }), e2;
};
function N(e2, t2) {
  return -1 !== e2.indexOf(t2);
}
function q(e2) {
  const t2 = Object.keys(e2);
  let i2 = t2.length;
  const n2 = new Array(i2);
  for (; i2--; )
    n2[i2] = [t2[i2], e2[t2[i2]]];
  return n2;
}
var B = function(e2) {
  try {
    return e2();
  } catch {
    return;
  }
};
var H = function(e2) {
  return function() {
    try {
      for (var t2 = arguments.length, i2 = new Array(t2), n2 = 0; n2 < t2; n2++)
        i2[n2] = arguments[n2];
      return e2.apply(this, i2);
    } catch (e3) {
      T.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), T.critical(e3);
    }
  };
};
var U = function(e2) {
  const t2 = {};
  return D(e2, function(e3, i2) {
    E(e3) && e3.length > 0 && (t2[i2] = e3);
  }), t2;
};
var W = function(e2) {
  return e2.replace(/^\$/, "");
};
function z(e2, t2) {
  return function(e3, t3) {
    const i2 = /* @__PURE__ */ new Set();
    return function e4(n2, s2) {
      if (n2 !== Object(n2))
        return t3 ? t3(n2, s2) : n2;
      if (i2.has(n2))
        return;
      let r2;
      return i2.add(n2), m(n2) ? (r2 = [], L(n2, (t4) => {
        r2.push(e4(t4));
      })) : (r2 = {}, D(n2, (t4, n3) => {
        i2.has(t4) || (r2[n3] = e4(t4, n3));
      })), r2;
    }(e3);
  }(e2, (e3) => E(e3) && !x(t2) ? e3.slice(0, t2) : e3);
}
var V = function(e2) {
  let t2, i2, n2, s2 = "", r2 = 0;
  for (t2 = i2 = 0, r2 = (e2 = (e2 + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, n2 = 0; n2 < r2; n2++) {
    const r3 = e2.charCodeAt(n2);
    let o2 = null;
    r3 < 128 ? i2++ : o2 = r3 > 127 && r3 < 2048 ? String.fromCharCode(r3 >> 6 | 192, 63 & r3 | 128) : String.fromCharCode(r3 >> 12 | 224, r3 >> 6 & 63 | 128, 63 & r3 | 128), x(o2) || (i2 > t2 && (s2 += e2.substring(t2, i2)), s2 += o2, t2 = i2 = n2 + 1);
  }
  return i2 > t2 && (s2 += e2.substring(t2, e2.length)), s2;
};
var G = function() {
  function t2(e2) {
    return e2 && (e2.preventDefault = t2.preventDefault, e2.stopPropagation = t2.stopPropagation), e2;
  }
  return t2.preventDefault = function() {
    this.returnValue = false;
  }, t2.stopPropagation = function() {
    this.cancelBubble = true;
  }, function(i2, n2, s2, r2, o2) {
    if (i2) {
      if (i2.addEventListener && !r2)
        i2.addEventListener(n2, s2, !!o2);
      else {
        const r3 = "on" + n2, o3 = i2[r3];
        i2[r3] = function(i3, n3, s3) {
          return function(r4) {
            if (!(r4 = r4 || t2(null == e ? void 0 : e.event)))
              return;
            let o4, a2 = true;
            y(s3) && (o4 = s3(r4));
            const l2 = n3.call(i3, r4);
            return false !== o4 && false !== l2 || (a2 = false), a2;
          };
        }(i2, s2, o3);
      }
    } else
      T.error("No valid element provided to register_event");
  };
}();
function j(e2) {
  const t2 = null == e2 ? void 0 : e2.hostname;
  return !!E(t2) && "herokuapp.com" !== t2.split(".").slice(-2).join(".");
}
function Q(e2, t2) {
  for (let i2 = 0; i2 < e2.length; i2++)
    if (t2(e2[i2]))
      return e2[i2];
}
var J;
!function(e2) {
  e2.GZipJS = "gzip-js", e2.Base64 = "base64";
}(J || (J = {}));
var X = "$people_distinct_id";
var K = "__alias";
var Z = "__timers";
var ee = "$autocapture_disabled_server_side";
var te = "$heatmaps_enabled_server_side";
var ie = "$exception_capture_enabled_server_side";
var ne = "$exception_capture_endpoint_suffix";
var se = "$web_vitals_enabled_server_side";
var re = "$dead_clicks_enabled_server_side";
var oe = "$web_vitals_allowed_metrics";
var ae = "$session_recording_enabled_server_side";
var le = "$console_log_recording_enabled_server_side";
var ce = "$session_recording_network_payload_capture";
var ue = "$session_recording_canvas_recording";
var de = "$replay_sample_rate";
var he = "$replay_minimum_duration";
var _e = "$sesid";
var pe = "$session_is_sampled";
var ge = "$session_recording_url_trigger_activated_session";
var fe = "$session_recording_url_trigger_status";
var ve = "$enabled_feature_flags";
var me = "$early_access_features";
var ye = "$stored_person_properties";
var be = "$stored_group_properties";
var we = "$surveys";
var Se = "$surveys_activated";
var Ee = "$flag_call_reported";
var ke = "$user_state";
var xe = "$client_session_props";
var Ie = "$capture_rate_limit";
var Pe = "$initial_campaign_params";
var Fe = "$initial_referrer_info";
var Re = "$initial_person_info";
var Ce = "$epp";
var Te = "__POSTHOG_TOOLBAR__";
var $e = [X, K, "__cmpns", Z, ae, te, _e, ve, ke, me, be, ye, we, Ee, xe, Ie, Pe, Fe, Ce];
var Ae = "$active_feature_flags";
var Me = "$override_feature_flags";
var Le = "$feature_flag_payloads";
var De = (e2) => {
  const t2 = {};
  for (const [i2, n2] of q(e2 || {}))
    n2 && (t2[i2] = n2);
  return t2;
};
var Oe = class {
  constructor(e2) {
    this.instance = e2, this._override_warning = false, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = false, this.reloadFeatureFlagsInAction = false;
  }
  getFlags() {
    return Object.keys(this.getFlagVariants());
  }
  getFlagVariants() {
    const e2 = this.instance.get_property(ve), t2 = this.instance.get_property(Me);
    if (!t2)
      return e2 || {};
    const i2 = O({}, e2), n2 = Object.keys(t2);
    for (let e3 = 0; e3 < n2.length; e3++)
      i2[n2[e3]] = t2[n2[e3]];
    return this._override_warning || (T.warn(" Overriding feature flags!", { enabledFlags: e2, overriddenFlags: t2, finalFlags: i2 }), this._override_warning = true), i2;
  }
  getFlagPayloads() {
    return this.instance.get_property(Le) || {};
  }
  reloadFeatureFlags() {
    this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = true, this._startReloadTimer());
  }
  setAnonymousDistinctId(e2) {
    this.$anon_distinct_id = e2;
  }
  setReloadingPaused(e2) {
    this.reloadFeatureFlagsInAction = e2;
  }
  resetRequestQueue() {
    this.reloadFeatureFlagsQueued = false;
  }
  _startReloadTimer() {
    this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(() => {
      !this.reloadFeatureFlagsInAction && this.reloadFeatureFlagsQueued && (this.reloadFeatureFlagsQueued = false, this._reloadFeatureFlagsRequest());
    }, 5);
  }
  _reloadFeatureFlagsRequest() {
    if (this.instance.config.advanced_disable_feature_flags)
      return;
    this.setReloadingPaused(true);
    const e2 = this.instance.config.token, t2 = this.instance.get_property(ye), i2 = this.instance.get_property(be), n2 = { token: e2, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: t2, group_properties: i2, disable_flags: this.instance.config.advanced_disable_feature_flags || void 0 };
    this.instance._send_request({ method: "POST", url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), data: n2, compression: this.instance.config.disable_compression ? void 0 : J.Base64, timeout: this.instance.config.feature_flag_request_timeout_ms, callback: (e3) => {
      var t3;
      this.setReloadingPaused(false);
      let i3 = true;
      200 === e3.statusCode && (this.$anon_distinct_id = void 0, i3 = false), this.receivedFeatureFlags(null !== (t3 = e3.json) && void 0 !== t3 ? t3 : {}, i3), this._startReloadTimer();
    } });
  }
  getFeatureFlag(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!(this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0))
      return void T.warn('getFeatureFlag for key "' + e2 + `" failed. Feature flags didn't load in time.`);
    const i2 = this.getFlagVariants()[e2], n2 = `${i2}`, s2 = this.instance.get_property(Ee) || {};
    var r2;
    !t2.send_event && "send_event" in t2 || e2 in s2 && s2[e2].includes(n2) || (m(s2[e2]) ? s2[e2].push(n2) : s2[e2] = [n2], null === (r2 = this.instance.persistence) || void 0 === r2 || r2.register({ [Ee]: s2 }), this.instance.capture("$feature_flag_called", { $feature_flag: e2, $feature_flag_response: i2 }));
    return i2;
  }
  getFeatureFlagPayload(e2) {
    return this.getFlagPayloads()[e2];
  }
  isFeatureEnabled(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0)
      return !!this.getFeatureFlag(e2, t2);
    T.warn('isFeatureEnabled for key "' + e2 + `" failed. Feature flags didn't load in time.`);
  }
  addFeatureFlagsHandler(e2) {
    this.featureFlagEventHandlers.push(e2);
  }
  removeFeatureFlagsHandler(e2) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((t2) => t2 !== e2);
  }
  receivedFeatureFlags(e2, t2) {
    if (!this.instance.persistence)
      return;
    this.instance.decideEndpointWasHit = true;
    const i2 = this.getFlagVariants(), n2 = this.getFlagPayloads();
    !function(e3, t3) {
      let i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const s2 = e3.featureFlags, r2 = e3.featureFlagPayloads;
      if (!s2)
        return;
      if (m(s2)) {
        const e4 = {};
        if (s2)
          for (let t4 = 0; t4 < s2.length; t4++)
            e4[s2[t4]] = true;
        return void (t3 && t3.register({ [Ae]: s2, [ve]: e4 }));
      }
      let o2 = s2, a2 = r2;
      e3.errorsWhileComputingFlags && (o2 = { ...i3, ...o2 }, a2 = { ...n3, ...a2 }), t3 && t3.register({ [Ae]: Object.keys(De(o2)), [ve]: o2 || {}, [Le]: a2 || {} });
    }(e2, this.instance.persistence, i2, n2), this._fireFeatureFlagsCallbacks(t2);
  }
  override(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!this.instance.__loaded || !this.instance.persistence)
      return T.uninitializedWarning("posthog.feature_flags.override");
    if (this._override_warning = t2, false === e2)
      this.instance.persistence.unregister(Me);
    else if (m(e2)) {
      const t3 = {};
      for (let i2 = 0; i2 < e2.length; i2++)
        t3[e2[i2]] = true;
      this.instance.persistence.register({ [Me]: t3 });
    } else
      this.instance.persistence.register({ [Me]: e2 });
  }
  onFeatureFlags(e2) {
    if (this.addFeatureFlagsHandler(e2), this.instance.decideEndpointWasHit) {
      const { flags: t2, flagVariants: i2 } = this._prepareFeatureFlagsForCallbacks();
      e2(t2, i2);
    }
    return () => this.removeFeatureFlagsHandler(e2);
  }
  updateEarlyAccessFeatureEnrollment(e2, t2) {
    var i2;
    const n2 = { [`$feature_enrollment/${e2}`]: t2 };
    this.instance.capture("$feature_enrollment_update", { $feature_flag: e2, $feature_enrollment: t2, $set: n2 }), this.setPersonPropertiesForFlags(n2, false);
    const s2 = { ...this.getFlagVariants(), [e2]: t2 };
    null === (i2 = this.instance.persistence) || void 0 === i2 || i2.register({ [Ae]: Object.keys(De(s2)), [ve]: s2 }), this._fireFeatureFlagsCallbacks();
  }
  getEarlyAccessFeatures(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const i2 = this.instance.get_property(me);
    if (i2 && !t2)
      return e2(i2);
    this.instance._send_request({ transport: "XHR", url: this.instance.requestRouter.endpointFor("api", `/api/early_access_features/?token=${this.instance.config.token}`), method: "GET", callback: (t3) => {
      var i3;
      if (!t3.json)
        return;
      const n2 = t3.json.earlyAccessFeatures;
      return null === (i3 = this.instance.persistence) || void 0 === i3 || i3.register({ [me]: n2 }), e2(n2);
    } });
  }
  _prepareFeatureFlagsForCallbacks() {
    const e2 = this.getFlags(), t2 = this.getFlagVariants();
    return { flags: e2.filter((e3) => t2[e3]), flagVariants: Object.keys(t2).filter((e3) => t2[e3]).reduce((e3, i2) => (e3[i2] = t2[i2], e3), {}) };
  }
  _fireFeatureFlagsCallbacks(e2) {
    const { flags: t2, flagVariants: i2 } = this._prepareFeatureFlagsForCallbacks();
    this.featureFlagEventHandlers.forEach((n2) => n2(t2, i2, { errorsLoading: e2 }));
  }
  setPersonPropertiesForFlags(e2) {
    let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    const i2 = this.instance.get_property(ye) || {};
    this.instance.register({ [ye]: { ...i2, ...e2 } }), t2 && this.instance.reloadFeatureFlags();
  }
  resetPersonPropertiesForFlags() {
    this.instance.unregister(ye);
  }
  setGroupPropertiesForFlags(e2) {
    let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    const i2 = this.instance.get_property(be) || {};
    0 !== Object.keys(i2).length && Object.keys(i2).forEach((t3) => {
      i2[t3] = { ...i2[t3], ...e2[t3] }, delete e2[t3];
    }), this.instance.register({ [be]: { ...i2, ...e2 } }), t2 && this.instance.reloadFeatureFlags();
  }
  resetGroupPropertiesForFlags(e2) {
    if (e2) {
      const t2 = this.instance.get_property(be) || {};
      this.instance.register({ [be]: { ...t2, [e2]: {} } });
    } else
      this.instance.unregister(be);
  }
};
Math.trunc || (Math.trunc = function(e2) {
  return e2 < 0 ? Math.ceil(e2) : Math.floor(e2);
}), Number.isInteger || (Number.isInteger = function(e2) {
  return P(e2) && isFinite(e2) && Math.floor(e2) === e2;
});
var Ne = "0123456789abcdef";
var qe = class {
  constructor(e2) {
    if (this.bytes = e2, 16 !== e2.length)
      throw new TypeError("not 128-bit length");
  }
  static fromFieldsV7(e2, t2, i2, n2) {
    if (!Number.isInteger(e2) || !Number.isInteger(t2) || !Number.isInteger(i2) || !Number.isInteger(n2) || e2 < 0 || t2 < 0 || i2 < 0 || n2 < 0 || e2 > 281474976710655 || t2 > 4095 || i2 > 1073741823 || n2 > 4294967295)
      throw new RangeError("invalid field value");
    const s2 = new Uint8Array(16);
    return s2[0] = e2 / 2 ** 40, s2[1] = e2 / 2 ** 32, s2[2] = e2 / 2 ** 24, s2[3] = e2 / 65536, s2[4] = e2 / 256, s2[5] = e2, s2[6] = 112 | t2 >>> 8, s2[7] = t2, s2[8] = 128 | i2 >>> 24, s2[9] = i2 >>> 16, s2[10] = i2 >>> 8, s2[11] = i2, s2[12] = n2 >>> 24, s2[13] = n2 >>> 16, s2[14] = n2 >>> 8, s2[15] = n2, new qe(s2);
  }
  toString() {
    let e2 = "";
    for (let t2 = 0; t2 < this.bytes.length; t2++)
      e2 = e2 + Ne.charAt(this.bytes[t2] >>> 4) + Ne.charAt(15 & this.bytes[t2]), 3 !== t2 && 5 !== t2 && 7 !== t2 && 9 !== t2 || (e2 += "-");
    if (36 !== e2.length)
      throw new Error("Invalid UUIDv7 was generated");
    return e2;
  }
  clone() {
    return new qe(this.bytes.slice(0));
  }
  equals(e2) {
    return 0 === this.compareTo(e2);
  }
  compareTo(e2) {
    for (let t2 = 0; t2 < 16; t2++) {
      const i2 = this.bytes[t2] - e2.bytes[t2];
      if (0 !== i2)
        return Math.sign(i2);
    }
    return 0;
  }
};
var Be = class {
  timestamp = 0;
  counter = 0;
  random = new We();
  generate() {
    const e2 = this.generateOrAbort();
    if (S(e2)) {
      this.timestamp = 0;
      const e3 = this.generateOrAbort();
      if (S(e3))
        throw new Error("Could not generate UUID after timestamp reset");
      return e3;
    }
    return e2;
  }
  generateOrAbort() {
    const e2 = Date.now();
    if (e2 > this.timestamp)
      this.timestamp = e2, this.resetCounter();
    else {
      if (!(e2 + 1e4 > this.timestamp))
        return;
      this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
    }
    return qe.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 2 ** 30), this.counter & 2 ** 30 - 1, this.random.nextUint32());
  }
  resetCounter() {
    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  }
};
var He;
var Ue = (e2) => {
  if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
    throw new Error("no cryptographically strong RNG available");
  for (let t2 = 0; t2 < e2.length; t2++)
    e2[t2] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return e2;
};
e && !S(e.crypto) && crypto.getRandomValues && (Ue = (e2) => crypto.getRandomValues(e2));
var We = class {
  buffer = new Uint32Array(8);
  cursor = 1 / 0;
  nextUint32() {
    return this.cursor >= this.buffer.length && (Ue(this.buffer), this.cursor = 0), this.buffer[this.cursor++];
  }
};
var ze = () => Ve().toString();
var Ve = () => (He || (He = new Be())).generate();
var Ge = "Thu, 01 Jan 1970 00:00:00 GMT";
var je = "";
var Qe = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
function Je(e2, t2) {
  if (t2) {
    let t3 = function(e3) {
      let t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
      if (je)
        return je;
      if (!t4)
        return "";
      if (["localhost", "127.0.0.1"].includes(e3))
        return "";
      const i2 = e3.split(".");
      let n2 = Math.min(i2.length, 8);
      const s2 = "dmn_chk_" + ze(), r2 = new RegExp("(^|;)\\s*" + s2 + "=1");
      for (; !je && n2--; ) {
        const e4 = i2.slice(n2).join("."), o2 = s2 + "=1;domain=." + e4;
        t4.cookie = o2, r2.test(t4.cookie) && (t4.cookie = o2 + ";expires=" + Ge, je = e4);
      }
      return je;
    }(e2);
    if (!t3) {
      const i2 = ((e3) => {
        const t4 = e3.match(Qe);
        return t4 ? t4[0] : "";
      })(e2);
      i2 !== t3 && T.info("Warning: cookie subdomain discovery mismatch", i2, t3), t3 = i2;
    }
    return t3 ? "; domain=." + t3 : "";
  }
  return "";
}
var Ye = { is_supported: () => !!o, error: function(e2) {
  T.error("cookieStore error: " + e2);
}, get: function(e2) {
  if (o) {
    try {
      const t2 = e2 + "=", i2 = o.cookie.split(";").filter((e3) => e3.length);
      for (let e3 = 0; e3 < i2.length; e3++) {
        let n2 = i2[e3];
        for (; " " == n2.charAt(0); )
          n2 = n2.substring(1, n2.length);
        if (0 === n2.indexOf(t2))
          return decodeURIComponent(n2.substring(t2.length, n2.length));
      }
    } catch {
    }
    return null;
  }
}, parse: function(e2) {
  let t2;
  try {
    t2 = JSON.parse(Ye.get(e2)) || {};
  } catch {
  }
  return t2;
}, set: function(e2, t2, i2, n2, s2) {
  if (o)
    try {
      let r2 = "", a2 = "";
      const l2 = Je(o.location.hostname, n2);
      if (i2) {
        const e3 = /* @__PURE__ */ new Date();
        e3.setTime(e3.getTime() + 24 * i2 * 60 * 60 * 1e3), r2 = "; expires=" + e3.toUTCString();
      }
      s2 && (a2 = "; secure");
      const c2 = e2 + "=" + encodeURIComponent(JSON.stringify(t2)) + r2 + "; SameSite=Lax; path=/" + l2 + a2;
      return c2.length > 3686.4 && T.warn("cookieStore warning: large cookie, len=" + c2.length), o.cookie = c2, c2;
    } catch {
      return;
    }
}, remove: function(e2, t2) {
  try {
    Ye.set(e2, "", -1, t2);
  } catch {
    return;
  }
} };
var Xe = null;
var Ke = { is_supported: function() {
  if (!x(Xe))
    return Xe;
  let t2 = true;
  if (S(e))
    t2 = false;
  else
    try {
      const e2 = "__mplssupport__", i2 = "xyz";
      Ke.set(e2, i2), '"xyz"' !== Ke.get(e2) && (t2 = false), Ke.remove(e2);
    } catch {
      t2 = false;
    }
  return t2 || T.error("localStorage unsupported; falling back to cookie store"), Xe = t2, t2;
}, error: function(e2) {
  T.error("localStorage error: " + e2);
}, get: function(t2) {
  try {
    return null == e ? void 0 : e.localStorage.getItem(t2);
  } catch (e2) {
    Ke.error(e2);
  }
  return null;
}, parse: function(e2) {
  try {
    return JSON.parse(Ke.get(e2)) || {};
  } catch {
  }
  return null;
}, set: function(t2, i2) {
  try {
    null == e || e.localStorage.setItem(t2, JSON.stringify(i2));
  } catch (e2) {
    Ke.error(e2);
  }
}, remove: function(t2) {
  try {
    null == e || e.localStorage.removeItem(t2);
  } catch (e2) {
    Ke.error(e2);
  }
} };
var Ze = ["distinct_id", _e, pe, Ce];
var et = { ...Ke, parse: function(e2) {
  try {
    let t2 = {};
    try {
      t2 = Ye.parse(e2) || {};
    } catch {
    }
    const i2 = O(t2, JSON.parse(Ke.get(e2) || "{}"));
    return Ke.set(e2, i2), i2;
  } catch {
  }
  return null;
}, set: function(e2, t2, i2, n2, s2, r2) {
  try {
    Ke.set(e2, t2, void 0, void 0, r2);
    const o2 = {};
    Ze.forEach((e3) => {
      t2[e3] && (o2[e3] = t2[e3]);
    }), Object.keys(o2).length && Ye.set(e2, o2, i2, n2, s2, r2);
  } catch (e3) {
    Ke.error(e3);
  }
}, remove: function(t2, i2) {
  try {
    null == e || e.localStorage.removeItem(t2), Ye.remove(t2, i2);
  } catch (e2) {
    Ke.error(e2);
  }
} };
var tt = {};
var it = { is_supported: function() {
  return true;
}, error: function(e2) {
  T.error("memoryStorage error: " + e2);
}, get: function(e2) {
  return tt[e2] || null;
}, parse: function(e2) {
  return tt[e2] || null;
}, set: function(e2, t2) {
  tt[e2] = t2;
}, remove: function(e2) {
  delete tt[e2];
} };
var nt = null;
var st = { is_supported: function() {
  if (!x(nt))
    return nt;
  if (nt = true, S(e))
    nt = false;
  else
    try {
      const e2 = "__support__", t2 = "xyz";
      st.set(e2, t2), '"xyz"' !== st.get(e2) && (nt = false), st.remove(e2);
    } catch {
      nt = false;
    }
  return nt;
}, error: function(e2) {
  T.error("sessionStorage error: ", e2);
}, get: function(t2) {
  try {
    return null == e ? void 0 : e.sessionStorage.getItem(t2);
  } catch (e2) {
    st.error(e2);
  }
  return null;
}, parse: function(e2) {
  try {
    return JSON.parse(st.get(e2)) || null;
  } catch {
  }
  return null;
}, set: function(t2, i2) {
  try {
    null == e || e.sessionStorage.setItem(t2, JSON.stringify(i2));
  } catch (e2) {
    st.error(e2);
  }
}, remove: function(t2) {
  try {
    null == e || e.sessionStorage.removeItem(t2);
  } catch (e2) {
    st.error(e2);
  }
} };
var rt = ["localhost", "127.0.0.1"];
var ot = (e2) => {
  const t2 = null == o ? void 0 : o.createElement("a");
  return S(t2) ? null : (t2.href = e2, t2);
};
var at = function(e2, t2) {
  return !!function(e3) {
    try {
      new RegExp(e3);
    } catch {
      return false;
    }
    return true;
  }(t2) && new RegExp(t2).test(e2);
};
var lt = function(e2) {
  let t2, i2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
  const s2 = [];
  return D(e2, function(e3, n3) {
    S(e3) || S(n3) || "undefined" === n3 || (t2 = encodeURIComponent(((e4) => e4 instanceof File)(e3) ? e3.name : e3.toString()), i2 = encodeURIComponent(n3), s2[s2.length] = i2 + "=" + t2);
  }), s2.join(n2);
};
var ct = function(e2, t2) {
  const i2 = ((e2.split("#")[0] || "").split("?")[1] || "").split("&");
  let n2;
  for (let e3 = 0; e3 < i2.length; e3++) {
    const s2 = i2[e3].split("=");
    if (s2[0] === t2) {
      n2 = s2;
      break;
    }
  }
  if (!m(n2) || n2.length < 2)
    return "";
  {
    let e3 = n2[1];
    try {
      e3 = decodeURIComponent(e3);
    } catch {
      T.error("Skipping decoding for malformed query param: " + e3);
    }
    return e3.replace(/\+/g, " ");
  }
};
var ut = function(e2, t2) {
  const i2 = e2.match(new RegExp(t2 + "=([^&]*)"));
  return i2 ? i2[1] : null;
};
var dt = "Mobile";
var ht = "iOS";
var _t = "Android";
var pt = "Tablet";
var gt = _t + " " + pt;
var ft = "iPad";
var vt = "Apple";
var mt = vt + " Watch";
var yt = "Safari";
var bt = "BlackBerry";
var wt = "Samsung";
var St = wt + "Browser";
var Et = wt + " Internet";
var kt = "Chrome";
var xt = kt + " OS";
var It = kt + " " + ht;
var Pt = "Internet Explorer";
var Ft = Pt + " " + dt;
var Rt = "Opera";
var Ct = Rt + " Mini";
var Tt = "Edge";
var $t = "Microsoft " + Tt;
var At = "Firefox";
var Mt = At + " " + ht;
var Lt = "Nintendo";
var Dt = "PlayStation";
var Ot = "Xbox";
var Nt = _t + " " + dt;
var qt = dt + " " + yt;
var Bt = "Windows";
var Ht = Bt + " Phone";
var Ut = "Nokia";
var Wt = "Ouya";
var zt = "Generic";
var Vt = zt + " " + dt.toLowerCase();
var Gt = zt + " " + pt.toLowerCase();
var jt = "Konqueror";
var Qt = "(\\d+(\\.\\d+)?)";
var Jt = new RegExp("Version/" + Qt);
var Yt = new RegExp(Ot, "i");
var Xt = new RegExp(Dt + " \\w+", "i");
var Kt = new RegExp(Lt + " \\w+", "i");
var Zt = new RegExp(bt + "|PlayBook|BB10", "i");
var ei = { "NT3.51": "NT 3.11", "NT4.0": "NT 4.0", "5.0": "2000", 5.1: "XP", 5.2: "XP", "6.0": "Vista", 6.1: "7", 6.2: "8", 6.3: "8.1", 6.4: "10", "10.0": "10" };
var ti = (e2, t2) => t2 && N(t2, vt) || function(e3) {
  return N(e3, yt) && !N(e3, kt) && !N(e3, _t);
}(e2);
var ii = function(e2, t2) {
  return t2 = t2 || "", N(e2, " OPR/") && N(e2, "Mini") ? Ct : N(e2, " OPR/") ? Rt : Zt.test(e2) ? bt : N(e2, "IE" + dt) || N(e2, "WPDesktop") ? Ft : N(e2, St) ? Et : N(e2, Tt) || N(e2, "Edg/") ? $t : N(e2, "FBIOS") ? "Facebook " + dt : N(e2, "UCWEB") || N(e2, "UCBrowser") ? "UC Browser" : N(e2, "CriOS") ? It : N(e2, "CrMo") ? kt : N(e2, _t) && N(e2, yt) ? Nt : N(e2, kt) ? kt : N(e2, "FxiOS") ? Mt : N(e2.toLowerCase(), jt.toLowerCase()) ? jt : ti(e2, t2) ? N(e2, dt) ? qt : yt : N(e2, At) ? At : N(e2, "MSIE") || N(e2, "Trident/") ? Pt : N(e2, "Gecko") ? At : "";
};
var ni = { [Ft]: [new RegExp("rv:" + Qt)], [$t]: [new RegExp(Tt + "?\\/" + Qt)], [kt]: [new RegExp("(" + kt + "|CrMo)\\/" + Qt)], [It]: [new RegExp("CriOS\\/" + Qt)], "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + Qt)], [yt]: [Jt], [qt]: [Jt], [Rt]: [new RegExp("(Opera|OPR)\\/" + Qt)], [At]: [new RegExp(At + "\\/" + Qt)], [Mt]: [new RegExp("FxiOS\\/" + Qt)], [jt]: [new RegExp("Konqueror[:/]?" + Qt, "i")], [bt]: [new RegExp(bt + " " + Qt), Jt], [Nt]: [new RegExp("android\\s" + Qt, "i")], [Et]: [new RegExp(St + "\\/" + Qt)], [Pt]: [new RegExp("(rv:|MSIE )" + Qt)], Mozilla: [new RegExp("rv:" + Qt)] };
var si = [[new RegExp(Ot + "; " + Ot + " (.*?)[);]", "i"), (e2) => [Ot, e2 && e2[1] || ""]], [new RegExp(Lt, "i"), [Lt, ""]], [new RegExp(Dt, "i"), [Dt, ""]], [Zt, [bt, ""]], [new RegExp(Bt, "i"), (e2, t2) => {
  if (/Phone/.test(t2) || /WPDesktop/.test(t2))
    return [Ht, ""];
  if (new RegExp(dt).test(t2) && !/IEMobile\b/.test(t2))
    return [Bt + " " + dt, ""];
  const i2 = /Windows NT ([0-9.]+)/i.exec(t2);
  if (i2 && i2[1]) {
    const e3 = i2[1];
    let n2 = ei[e3] || "";
    return /arm/i.test(t2) && (n2 = "RT"), [Bt, n2];
  }
  return [Bt, ""];
}], [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, (e2) => {
  if (e2 && e2[3]) {
    const t2 = [e2[3], e2[4], e2[5] || "0"];
    return [ht, t2.join(".")];
  }
  return [ht, ""];
}], [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, (e2) => {
  let t2 = "";
  return e2 && e2.length >= 3 && (t2 = S(e2[2]) ? e2[3] : e2[2]), ["watchOS", t2];
}], [new RegExp("(" + _t + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + _t + ")", "i"), (e2) => {
  if (e2 && e2[2]) {
    const t2 = [e2[2], e2[3], e2[4] || "0"];
    return [_t, t2.join(".")];
  }
  return [_t, ""];
}], [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, (e2) => {
  const t2 = ["Mac OS X", ""];
  if (e2 && e2[1]) {
    const i2 = [e2[1], e2[2], e2[3] || "0"];
    t2[1] = i2.join(".");
  }
  return t2;
}], [/Mac/i, ["Mac OS X", ""]], [/CrOS/, [xt, ""]], [/Linux|debian/i, ["Linux", ""]]];
var ri = function(e2) {
  return Kt.test(e2) ? Lt : Xt.test(e2) ? Dt : Yt.test(e2) ? Ot : new RegExp(Wt, "i").test(e2) ? Wt : new RegExp("(" + Ht + "|WPDesktop)", "i").test(e2) ? Ht : /iPad/.test(e2) ? ft : /iPod/.test(e2) ? "iPod Touch" : /iPhone/.test(e2) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e2) ? mt : Zt.test(e2) ? bt : /(kobo)\s(ereader|touch)/i.test(e2) ? "Kobo" : new RegExp(Ut, "i").test(e2) ? Ut : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e2) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e2) ? "Kindle Fire" : /(Android|ZTE)/i.test(e2) ? !new RegExp(dt).test(e2) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e2) ? /pixel[\daxl ]{1,6}/i.test(e2) && !/pixel c/i.test(e2) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e2) || /lmy47v/i.test(e2) && !/QTAQZ3/i.test(e2) ? _t : gt : _t : new RegExp("(pda|" + dt + ")", "i").test(e2) ? Vt : new RegExp(pt, "i").test(e2) && !new RegExp(pt + " pc", "i").test(e2) ? Gt : "";
};
var oi = "https?://(.*)";
var ai = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid"];
var li = { campaignParams: function(e2) {
  return o ? this._campaignParamsFromUrl(o.URL, e2) : {};
}, _campaignParamsFromUrl: function(e2, t2) {
  const i2 = ai.concat(t2 || []), n2 = {};
  return D(i2, function(t3) {
    const i3 = ct(e2, t3);
    n2[t3] = i3 || null;
  }), n2;
}, _searchEngine: function(e2) {
  return e2 ? 0 === e2.search(oi + "google.([^/?]*)") ? "google" : 0 === e2.search(oi + "bing.com") ? "bing" : 0 === e2.search(oi + "yahoo.com") ? "yahoo" : 0 === e2.search(oi + "duckduckgo.com") ? "duckduckgo" : null : null;
}, _searchInfoFromReferrer: function(e2) {
  const t2 = li._searchEngine(e2), i2 = "yahoo" != t2 ? "q" : "p", n2 = {};
  if (!x(t2)) {
    n2.$search_engine = t2;
    const e3 = o ? ct(o.referrer, i2) : "";
    e3.length && (n2.ph_keyword = e3);
  }
  return n2;
}, searchInfo: function() {
  const e2 = null == o ? void 0 : o.referrer;
  return e2 ? this._searchInfoFromReferrer(e2) : {};
}, browser: ii, browserVersion: function(e2, t2) {
  const i2 = ii(e2, t2), n2 = ni[i2];
  if (S(n2))
    return null;
  for (let t3 = 0; t3 < n2.length; t3++) {
    const i3 = n2[t3], s2 = e2.match(i3);
    if (s2)
      return parseFloat(s2[s2.length - 2]);
  }
  return null;
}, browserLanguage: function() {
  return navigator.language || navigator.userLanguage;
}, os: function(e2) {
  for (let t2 = 0; t2 < si.length; t2++) {
    const [i2, n2] = si[t2], s2 = i2.exec(e2), r2 = s2 && (y(n2) ? n2(s2, e2) : n2);
    if (r2)
      return r2;
  }
  return ["", ""];
}, device: ri, deviceType: function(e2) {
  const t2 = ri(e2);
  return t2 === ft || t2 === gt || "Kobo" === t2 || "Kindle Fire" === t2 || t2 === Gt ? pt : t2 === Lt || t2 === Ot || t2 === Dt || t2 === Wt ? "Console" : t2 === mt ? "Wearable" : t2 ? dt : "Desktop";
}, referrer: function() {
  return (null == o ? void 0 : o.referrer) || "$direct";
}, referringDomain: function() {
  var e2;
  return null != o && o.referrer && (null === (e2 = ot(o.referrer)) || void 0 === e2 ? void 0 : e2.host) || "$direct";
}, referrerInfo: function() {
  return { $referrer: this.referrer(), $referring_domain: this.referringDomain() };
}, initialPersonInfo: function() {
  return { r: this.referrer(), u: null == a ? void 0 : a.href };
}, initialPersonPropsFromInfo: function(e2) {
  var t2;
  const { r: i2, u: n2 } = e2, s2 = { $initial_referrer: i2, $initial_referring_domain: null == i2 ? void 0 : "$direct" == i2 ? "$direct" : null === (t2 = ot(i2)) || void 0 === t2 ? void 0 : t2.host };
  if (n2) {
    s2.$initial_current_url = n2;
    const e3 = ot(n2);
    s2.$initial_host = null == e3 ? void 0 : e3.host, s2.$initial_pathname = null == e3 ? void 0 : e3.pathname;
    D(this._campaignParamsFromUrl(n2), function(e4, t3) {
      s2["$initial_" + W(t3)] = e4;
    });
  }
  if (i2) {
    D(this._searchInfoFromReferrer(i2), function(e3, t3) {
      s2["$initial_" + W(t3)] = e3;
    });
  }
  return s2;
}, timezone: function() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return;
  }
}, properties: function() {
  if (!d)
    return {};
  const [t2, i2] = li.os(d);
  return O(U({ $os: t2, $os_version: i2, $browser: li.browser(d, navigator.vendor), $device: li.device(d), $device_type: li.deviceType(d), $timezone: li.timezone() }), { $current_url: null == a ? void 0 : a.href, $host: null == a ? void 0 : a.host, $pathname: null == a ? void 0 : a.pathname, $raw_user_agent: d.length > 1e3 ? d.substring(0, 997) + "..." : d, $browser_version: li.browserVersion(d, navigator.vendor), $browser_language: li.browserLanguage(), $screen_height: null == e ? void 0 : e.screen.height, $screen_width: null == e ? void 0 : e.screen.width, $viewport_height: null == e ? void 0 : e.innerHeight, $viewport_width: null == e ? void 0 : e.innerWidth, $lib: "web", $lib_version: _.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: Date.now() / 1e3 });
}, people_properties: function() {
  if (!d)
    return {};
  const [e2, t2] = li.os(d);
  return O(U({ $os: e2, $os_version: t2, $browser: li.browser(d, navigator.vendor) }), { $browser_version: li.browserVersion(d, navigator.vendor) });
} };
var ci = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"];
var ui = class {
  constructor(e2) {
    this.config = e2, this.props = {}, this.campaign_params_saved = false, this.name = ((e3) => {
      let t2 = "";
      return e3.token && (t2 = e3.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e3.persistence_name ? "ph_" + e3.persistence_name : "ph_" + t2 + "_posthog";
    })(e2), this.storage = this.buildStorage(e2), this.load(), e2.debug && T.info("Persistence loaded", e2.persistence, { ...this.props }), this.update_config(e2, e2), this.save();
  }
  buildStorage(e2) {
    let t2;
    -1 === ci.indexOf(e2.persistence.toLowerCase()) && (T.critical("Unknown persistence type " + e2.persistence + "; falling back to localStorage+cookie"), e2.persistence = "localStorage+cookie");
    const i2 = e2.persistence.toLowerCase();
    return t2 = "localstorage" === i2 && Ke.is_supported() ? Ke : "localstorage+cookie" === i2 && et.is_supported() ? et : "sessionstorage" === i2 && st.is_supported() ? st : "memory" === i2 ? it : "cookie" === i2 ? Ye : et.is_supported() ? et : Ye, t2;
  }
  properties() {
    const e2 = {};
    return D(this.props, function(t2, i2) {
      if (i2 === ve && b(t2)) {
        const i3 = Object.keys(t2);
        for (let n2 = 0; n2 < i3.length; n2++)
          e2[`$feature/${i3[n2]}`] = t2[i3[n2]];
      } else
        (function(e3, t3) {
          let i3 = false;
          return x(e3) ? i3 : s && e3.indexOf === s ? -1 != e3.indexOf(t3) : (D(e3, function(e4) {
            if (i3 || (i3 = e4 === t3))
              return A;
          }), i3);
        })($e, i2) || (e2[i2] = t2);
    }), e2;
  }
  load() {
    if (this.disabled)
      return;
    const e2 = this.storage.parse(this.name);
    e2 && (this.props = O({}, e2));
  }
  save() {
    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure, this.config.debug);
  }
  remove() {
    this.storage.remove(this.name, false), this.storage.remove(this.name, true);
  }
  clear() {
    this.remove(), this.props = {};
  }
  register_once(e2, t2, i2) {
    if (b(e2)) {
      S(t2) && (t2 = "None"), this.expire_days = S(i2) ? this.default_expiry : i2;
      let n2 = false;
      if (D(e2, (e3, i3) => {
        this.props.hasOwnProperty(i3) && this.props[i3] !== t2 || (this.props[i3] = e3, n2 = true);
      }), n2)
        return this.save(), true;
    }
    return false;
  }
  register(e2, t2) {
    if (b(e2)) {
      this.expire_days = S(t2) ? this.default_expiry : t2;
      let i2 = false;
      if (D(e2, (t3, n2) => {
        e2.hasOwnProperty(n2) && this.props[n2] !== t3 && (this.props[n2] = t3, i2 = true);
      }), i2)
        return this.save(), true;
    }
    return false;
  }
  unregister(e2) {
    e2 in this.props && (delete this.props[e2], this.save());
  }
  update_campaign_params() {
    if (!this.campaign_params_saved) {
      const e2 = li.campaignParams(this.config.custom_campaign_params);
      w(U(e2)) || this.register(li.campaignParams(this.config.custom_campaign_params)), this.campaign_params_saved = true;
    }
  }
  update_search_keyword() {
    this.register(li.searchInfo());
  }
  update_referrer_info() {
    this.register_once(li.referrerInfo(), void 0);
  }
  set_initial_person_info() {
    this.props[Pe] || this.props[Fe] || this.register_once({ [Re]: li.initialPersonInfo() }, void 0);
  }
  get_referrer_info() {
    return U({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
  }
  get_initial_props() {
    const e2 = {};
    D([Fe, Pe], (t3) => {
      const i2 = this.props[t3];
      i2 && D(i2, function(t4, i3) {
        e2["$initial_" + W(i3)] = t4;
      });
    });
    const t2 = this.props[Re];
    if (t2) {
      const i2 = li.initialPersonPropsFromInfo(t2);
      O(e2, i2);
    }
    return e2;
  }
  safe_merge(e2) {
    return D(this.props, function(t2, i2) {
      i2 in e2 || (e2[i2] = t2);
    }), e2;
  }
  update_config(e2, t2) {
    if (this.default_expiry = this.expire_days = e2.cookie_expiration, this.set_disabled(e2.disable_persistence), this.set_cross_subdomain(e2.cross_subdomain_cookie), this.set_secure(e2.secure_cookie), e2.persistence !== t2.persistence) {
      const t3 = this.buildStorage(e2), i2 = this.props;
      this.clear(), this.storage = t3, this.props = i2, this.save();
    }
  }
  set_disabled(e2) {
    this.disabled = e2, this.disabled ? this.remove() : this.save();
  }
  set_cross_subdomain(e2) {
    e2 !== this.cross_subdomain && (this.cross_subdomain = e2, this.remove(), this.save());
  }
  get_cross_subdomain() {
    return !!this.cross_subdomain;
  }
  set_secure(e2) {
    e2 !== this.secure && (this.secure = e2, this.remove(), this.save());
  }
  set_event_timer(e2, t2) {
    const i2 = this.props[Z] || {};
    i2[e2] = t2, this.props[Z] = i2, this.save();
  }
  remove_event_timer(e2) {
    const t2 = (this.props[Z] || {})[e2];
    return S(t2) || (delete this.props[Z][e2], this.save()), t2;
  }
  get_property(e2) {
    return this.props[e2];
  }
  set_property(e2, t2) {
    this.props[e2] = t2, this.save();
  }
};
function di(e2) {
  var t2;
  return (null === (t2 = JSON.stringify(e2, function() {
    const e3 = [];
    return function(t3, i2) {
      if (b(i2)) {
        for (; e3.length > 0 && e3.at(-1) !== this; )
          e3.pop();
        return e3.includes(i2) ? "[Circular]" : (e3.push(i2), i2);
      }
      return i2;
    };
  }())) || void 0 === t2 ? void 0 : t2.length) || 0;
}
function hi(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66060288e-1;
  if (e2.size >= t2 && e2.data.length > 1) {
    const t3 = Math.floor(e2.data.length / 2), i2 = e2.data.slice(0, t3), n2 = e2.data.slice(t3);
    return [hi({ size: di(i2), data: i2, sessionId: e2.sessionId, windowId: e2.windowId }), hi({ size: di(n2), data: n2, sessionId: e2.sessionId, windowId: e2.windowId })].flatMap((e3) => e3);
  }
  return [e2];
}
var _i = ((e2) => (e2[e2.DomContentLoaded = 0] = "DomContentLoaded", e2[e2.Load = 1] = "Load", e2[e2.FullSnapshot = 2] = "FullSnapshot", e2[e2.IncrementalSnapshot = 3] = "IncrementalSnapshot", e2[e2.Meta = 4] = "Meta", e2[e2.Custom = 5] = "Custom", e2[e2.Plugin = 6] = "Plugin", e2))(_i || {});
var pi = ((e2) => (e2[e2.Mutation = 0] = "Mutation", e2[e2.MouseMove = 1] = "MouseMove", e2[e2.MouseInteraction = 2] = "MouseInteraction", e2[e2.Scroll = 3] = "Scroll", e2[e2.ViewportResize = 4] = "ViewportResize", e2[e2.Input = 5] = "Input", e2[e2.TouchMove = 6] = "TouchMove", e2[e2.MediaInteraction = 7] = "MediaInteraction", e2[e2.StyleSheetRule = 8] = "StyleSheetRule", e2[e2.CanvasMutation = 9] = "CanvasMutation", e2[e2.Font = 10] = "Font", e2[e2.Log = 11] = "Log", e2[e2.Drag = 12] = "Drag", e2[e2.StyleDeclaration = 13] = "StyleDeclaration", e2[e2.Selection = 14] = "Selection", e2[e2.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e2[e2.CustomElement = 16] = "CustomElement", e2))(pi || {});
function gi(e2) {
  var t2;
  return e2.id === Te || !(null === (t2 = e2.closest) || void 0 === t2 || !t2.call(e2, "#" + Te));
}
function fi(e2) {
  return !!e2 && 1 === e2.nodeType;
}
function vi(e2, t2) {
  return !!e2 && !!e2.tagName && e2.tagName.toLowerCase() === t2.toLowerCase();
}
function mi(e2) {
  return !!e2 && 3 === e2.nodeType;
}
function yi(e2) {
  return !!e2 && 11 === e2.nodeType;
}
function bi(e2) {
  return e2 ? M(e2).split(/\s+/) : [];
}
function wi(t2) {
  const i2 = null == e ? void 0 : e.location.href;
  return !!(i2 && t2 && t2.some((e2) => i2.match(e2)));
}
function Si(e2) {
  let t2 = "";
  switch (typeof e2.className) {
    case "string":
      t2 = e2.className;
      break;
    case "object":
      t2 = (e2.className && "baseVal" in e2.className ? e2.className.baseVal : null) || e2.getAttribute("class") || "";
      break;
    default:
      t2 = "";
  }
  return bi(t2);
}
function Ei(e2) {
  return I(e2) ? null : M(e2).split(/(\s+)/).filter((e3) => Oi(e3)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255);
}
function ki(e2) {
  let t2 = "";
  return Ri(e2) && !Ci(e2) && e2.childNodes && e2.childNodes.length && D(e2.childNodes, function(e3) {
    var i2;
    mi(e3) && e3.textContent && (t2 += null !== (i2 = Ei(e3.textContent)) && void 0 !== i2 ? i2 : "");
  }), M(t2);
}
function xi(e2) {
  return S(e2.target) ? e2.srcElement || null : null !== (t2 = e2.target) && void 0 !== t2 && t2.shadowRoot ? e2.composedPath()[0] || null : e2.target || null;
  var t2;
}
var Ii = ["a", "button", "form", "input", "select", "textarea", "label"];
function Pi(e2) {
  const t2 = e2.parentNode;
  return !(!t2 || !fi(t2)) && t2;
}
function Fi(t2, i2) {
  let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, s2 = arguments.length > 3 ? arguments[3] : void 0, r2 = arguments.length > 4 ? arguments[4] : void 0;
  if (!e || !t2 || vi(t2, "html") || !fi(t2))
    return false;
  if (null != n2 && n2.url_allowlist && !wi(n2.url_allowlist))
    return false;
  if (null != n2 && n2.url_ignorelist && wi(n2.url_ignorelist))
    return false;
  if (null != n2 && n2.dom_event_allowlist) {
    const e2 = n2.dom_event_allowlist;
    if (e2 && !e2.some((e3) => i2.type === e3))
      return false;
  }
  let o2 = false;
  const a2 = [t2];
  let l2 = true, c2 = t2;
  for (; c2.parentNode && !vi(c2, "body"); )
    if (yi(c2.parentNode))
      a2.push(c2.parentNode.host), c2 = c2.parentNode.host;
    else {
      if (l2 = Pi(c2), !l2)
        break;
      if (s2 || Ii.indexOf(l2.tagName.toLowerCase()) > -1)
        o2 = true;
      else {
        const t3 = e.getComputedStyle(l2);
        t3 && "pointer" === t3.getPropertyValue("cursor") && (o2 = true);
      }
      a2.push(l2), c2 = l2;
    }
  if (!function(e2, t3) {
    const i3 = null == t3 ? void 0 : t3.element_allowlist;
    if (S(i3))
      return true;
    for (const t4 of e2)
      if (i3.some((e3) => t4.tagName.toLowerCase() === e3))
        return true;
    return false;
  }(a2, n2))
    return false;
  if (!function(e2, t3) {
    const i3 = null == t3 ? void 0 : t3.css_selector_allowlist;
    if (S(i3))
      return true;
    for (const t4 of e2)
      if (i3.some((e3) => t4.matches(e3)))
        return true;
    return false;
  }(a2, n2))
    return false;
  const u2 = e.getComputedStyle(t2);
  if (u2 && "pointer" === u2.getPropertyValue("cursor") && "click" === i2.type)
    return true;
  const d2 = t2.tagName.toLowerCase();
  switch (d2) {
    case "html":
      return false;
    case "form":
      return (r2 || ["submit"]).indexOf(i2.type) >= 0;
    case "input":
    case "select":
    case "textarea":
      return (r2 || ["change", "click"]).indexOf(i2.type) >= 0;
    default:
      return o2 ? (r2 || ["click"]).indexOf(i2.type) >= 0 : (r2 || ["click"]).indexOf(i2.type) >= 0 && (Ii.indexOf(d2) > -1 || "true" === t2.getAttribute("contenteditable"));
  }
}
function Ri(e2) {
  for (let t3 = e2; t3.parentNode && !vi(t3, "body"); t3 = t3.parentNode) {
    const e3 = Si(t3);
    if (N(e3, "ph-sensitive") || N(e3, "ph-no-capture"))
      return false;
  }
  if (N(Si(e2), "ph-include"))
    return true;
  const t2 = e2.type || "";
  if (E(t2))
    switch (t2.toLowerCase()) {
      case "hidden":
      case "password":
        return false;
    }
  const i2 = e2.name || e2.id || "";
  if (E(i2)) {
    if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i2.replace(/[^a-zA-Z0-9]/g, "")))
      return false;
  }
  return true;
}
function Ci(e2) {
  return !!(vi(e2, "input") && !["button", "checkbox", "submit", "reset"].includes(e2.type) || vi(e2, "select") || vi(e2, "textarea") || "true" === e2.getAttribute("contenteditable"));
}
var Ti = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})";
var $i = new RegExp(`^(?:${Ti})$`);
var Ai = new RegExp(Ti);
var Mi = "\\d{3}-?\\d{2}-?\\d{4}";
var Li = new RegExp(`^(${Mi})$`);
var Di = new RegExp(`(${Mi})`);
function Oi(e2) {
  let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  if (I(e2))
    return false;
  if (E(e2)) {
    e2 = M(e2);
    if ((t2 ? $i : Ai).test((e2 || "").replace(/[- ]/g, "")))
      return false;
    if ((t2 ? Li : Di).test(e2))
      return false;
  }
  return true;
}
function Ni(e2) {
  let t2 = ki(e2);
  return t2 = `${t2} ${qi(e2)}`.trim(), Oi(t2) ? t2 : "";
}
function qi(e2) {
  let t2 = "";
  return e2 && e2.childNodes && e2.childNodes.length && D(e2.childNodes, function(e3) {
    var i2;
    if (e3 && "span" === (null === (i2 = e3.tagName) || void 0 === i2 ? void 0 : i2.toLowerCase()))
      try {
        const i3 = ki(e3);
        t2 = `${t2} ${i3}`.trim(), e3.childNodes && e3.childNodes.length && (t2 = `${t2} ${qi(e3)}`.trim());
      } catch (e4) {
        T.error(e4);
      }
  }), t2;
}
function Bi(e2) {
  return function(e3) {
    const t2 = e3.map((e4) => {
      var t3, i2;
      let n2 = "";
      if (e4.tag_name && (n2 += e4.tag_name), e4.attr_class) {
        e4.attr_class.sort();
        for (const t4 of e4.attr_class)
          n2 += `.${t4.replace(/"/g, "")}`;
      }
      const s2 = { ...e4.text ? { text: e4.text } : {}, "nth-child": null !== (t3 = e4.nth_child) && void 0 !== t3 ? t3 : 0, "nth-of-type": null !== (i2 = e4.nth_of_type) && void 0 !== i2 ? i2 : 0, ...e4.href ? { href: e4.href } : {}, ...e4.attr_id ? { attr_id: e4.attr_id } : {}, ...e4.attributes }, r2 = {};
      return q(s2).sort((e5, t4) => {
        let [i3] = e5, [n3] = t4;
        return i3.localeCompare(n3);
      }).forEach((e5) => {
        let [t4, i3] = e5;
        return r2[Hi(t4.toString())] = Hi(i3.toString());
      }), n2 += ":", n2 += q(s2).map((e5) => {
        let [t4, i3] = e5;
        return `${t4}="${i3}"`;
      }).join(""), n2;
    });
    return t2.join(";");
  }(function(e3) {
    return e3.map((e4) => {
      var t2, i2;
      const n2 = { text: null === (t2 = e4.$el_text) || void 0 === t2 ? void 0 : t2.slice(0, 400), tag_name: e4.tag_name, href: null === (i2 = e4.attr__href) || void 0 === i2 ? void 0 : i2.slice(0, 2048), attr_class: Ui(e4), attr_id: e4.attr__id, nth_child: e4.nth_child, nth_of_type: e4.nth_of_type, attributes: {} };
      return q(e4).filter((e5) => {
        let [t3] = e5;
        return 0 === t3.indexOf("attr__");
      }).forEach((e5) => {
        let [t3, i3] = e5;
        return n2.attributes[t3] = i3;
      }), n2;
    });
  }(e2));
}
function Hi(e2) {
  return e2.replace(/"|\\"/g, '\\"');
}
function Ui(e2) {
  const t2 = e2.attr__class;
  return t2 ? m(t2) ? t2 : bi(t2) : void 0;
}
var Wi = "[SessionRecording]";
var zi = "redacted";
var Vi = { initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"], maskRequestFn: (e2) => e2, recordHeaders: false, recordBody: false, recordInitialRequests: false, recordPerformance: false, performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"], payloadSizeLimitBytes: 1e6, payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io"] };
var Gi = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"];
var ji = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"];
var Qi = ["/s/", "/e/", "/i/"];
function Ji(e2, t2, i2, n2) {
  if (I(e2))
    return e2;
  let s2 = (null == t2 ? void 0 : t2["content-length"]) || function(e3) {
    return new Blob([e3]).size;
  }(e2);
  return E(s2) && (s2 = parseInt(s2)), s2 > i2 ? Wi + ` ${n2} body too large to record (${s2} bytes)` : e2;
}
function Yi(e2, t2) {
  if (I(e2))
    return e2;
  let i2 = e2;
  return Oi(i2, false) || (i2 = Wi + " " + t2 + " body " + zi), D(ji, (e3) => {
    var n2, s2;
    null !== (n2 = i2) && void 0 !== n2 && n2.length && -1 !== (null === (s2 = i2) || void 0 === s2 ? void 0 : s2.indexOf(e3)) && (i2 = Wi + " " + t2 + " body " + zi + " as might contain: " + e3);
  }), i2;
}
var Xi = (e2, t2) => {
  const i2 = { payloadSizeLimitBytes: Vi.payloadSizeLimitBytes, performanceEntryTypeToObserve: [...Vi.performanceEntryTypeToObserve], payloadHostDenyList: [...t2.payloadHostDenyList || [], ...Vi.payloadHostDenyList] }, n2 = false !== e2.session_recording.recordHeaders && t2.recordHeaders, s2 = false !== e2.session_recording.recordBody && t2.recordBody, r2 = false !== e2.capture_performance && t2.recordPerformance, o2 = ((e3) => {
    var t3;
    const i3 = Math.min(1e6, null !== (t3 = e3.payloadSizeLimitBytes) && void 0 !== t3 ? t3 : 1e6);
    return (e4) => (null != e4 && e4.requestBody && (e4.requestBody = Ji(e4.requestBody, e4.requestHeaders, i3, "Request")), null != e4 && e4.responseBody && (e4.responseBody = Ji(e4.responseBody, e4.responseHeaders, i3, "Response")), e4);
  })(i2), a2 = (e3) => o2(((e4) => {
    const t3 = ot(e4.name);
    if (!(t3 && t3.pathname && Qi.some((e5) => 0 === t3.pathname.indexOf(e5))))
      return e4;
  })(((e4) => {
    const t3 = e4.requestHeaders;
    return I(t3) || D(Object.keys(null != t3 ? t3 : {}), (e5) => {
      Gi.includes(e5.toLowerCase()) && (t3[e5] = zi);
    }), e4;
  })(e3))), l2 = y(e2.session_recording.maskNetworkRequestFn);
  return l2 && y(e2.session_recording.maskCapturedNetworkRequestFn) && T.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), l2 && (e2.session_recording.maskCapturedNetworkRequestFn = (t3) => {
    const i3 = e2.session_recording.maskNetworkRequestFn({ url: t3.name });
    return { ...t3, name: null == i3 ? void 0 : i3.url };
  }), i2.maskRequestFn = y(e2.session_recording.maskCapturedNetworkRequestFn) ? (t3) => {
    var i3, n3, s3;
    const r3 = a2(t3);
    return r3 && null !== (i3 = null === (n3 = (s3 = e2.session_recording).maskCapturedNetworkRequestFn) || void 0 === n3 ? void 0 : n3.call(s3, r3)) && void 0 !== i3 ? i3 : void 0;
  } : (e3) => function(e4) {
    if (!S(e4))
      return e4.requestBody = Yi(e4.requestBody, "Request"), e4.responseBody = Yi(e4.responseBody, "Response"), e4;
  }(a2(e3)), { ...Vi, ...i2, recordHeaders: n2, recordBody: s2, recordPerformance: r2, recordInitialRequests: r2 };
};
function Ki(e2, t2, i2, n2) {
  return t2 > i2 && (T.warn("min cannot be greater than max."), t2 = i2), P(e2) ? e2 > i2 ? (n2 && T.warn(n2 + " cannot be  greater than max: " + i2 + ". Using max value instead."), i2) : e2 < t2 ? (n2 && T.warn(n2 + " cannot be less than min: " + t2 + ". Using min value instead."), t2) : e2 : (n2 && T.warn(n2 + " must be a number. Defaulting to max value:" + i2), i2);
}
var Zi = class {
  bucketSize = 100;
  refillRate = 10;
  mutationBuckets = {};
  loggedTracker = {};
  constructor(e2) {
    var t2, i2;
    let n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.rrweb = e2, this.options = n2, this.refillRate = Ki(null !== (t2 = this.options.refillRate) && void 0 !== t2 ? t2 : this.refillRate, 0, 100, "mutation throttling refill rate"), this.bucketSize = Ki(null !== (i2 = this.options.bucketSize) && void 0 !== i2 ? i2 : this.bucketSize, 0, 100, "mutation throttling bucket size"), setInterval(() => {
      this.refillBuckets();
    }, 1e3);
  }
  refillBuckets = () => {
    Object.keys(this.mutationBuckets).forEach((e2) => {
      this.mutationBuckets[e2] = this.mutationBuckets[e2] + this.refillRate, this.mutationBuckets[e2] >= this.bucketSize && delete this.mutationBuckets[e2];
    });
  };
  getNodeOrRelevantParent = (e2) => {
    const t2 = this.rrweb.mirror.getNode(e2);
    if ("svg" !== (null == t2 ? void 0 : t2.nodeName) && t2 instanceof Element) {
      const e3 = t2.closest("svg");
      if (e3)
        return [this.rrweb.mirror.getId(e3), e3];
    }
    return [e2, t2];
  };
  numberOfChanges = (e2) => {
    var t2, i2, n2, s2, r2, o2, a2, l2;
    return (null !== (t2 = null === (i2 = e2.removes) || void 0 === i2 ? void 0 : i2.length) && void 0 !== t2 ? t2 : 0) + (null !== (n2 = null === (s2 = e2.attributes) || void 0 === s2 ? void 0 : s2.length) && void 0 !== n2 ? n2 : 0) + (null !== (r2 = null === (o2 = e2.texts) || void 0 === o2 ? void 0 : o2.length) && void 0 !== r2 ? r2 : 0) + (null !== (a2 = null === (l2 = e2.adds) || void 0 === l2 ? void 0 : l2.length) && void 0 !== a2 ? a2 : 0);
  };
  throttleMutations = (e2) => {
    if (3 !== e2.type || 0 !== e2.data.source)
      return e2;
    const t2 = e2.data, i2 = this.numberOfChanges(t2);
    t2.attributes && (t2.attributes = t2.attributes.filter((e3) => {
      var t3;
      const [i3, n3] = this.getNodeOrRelevantParent(e3.id);
      if (0 === this.mutationBuckets[i3])
        return false;
      var s2, r2;
      (this.mutationBuckets[i3] = null !== (t3 = this.mutationBuckets[i3]) && void 0 !== t3 ? t3 : this.bucketSize, this.mutationBuckets[i3] = Math.max(this.mutationBuckets[i3] - 1, 0), 0 === this.mutationBuckets[i3]) && (this.loggedTracker[i3] || (this.loggedTracker[i3] = true, null === (s2 = (r2 = this.options).onBlockedNode) || void 0 === s2 || s2.call(r2, i3, n3)));
      return e3;
    }));
    const n2 = this.numberOfChanges(t2);
    return 0 !== n2 || i2 === n2 ? e2 : void 0;
  };
};
var en = Uint8Array;
var tn = Uint16Array;
var nn = Uint32Array;
var sn = new en([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var rn = new en([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var on = new en([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var an = function(e2, t2) {
  for (var i2 = new tn(31), n2 = 0; n2 < 31; ++n2)
    i2[n2] = t2 += 1 << e2[n2 - 1];
  var s2 = new nn(i2[30]);
  for (n2 = 1; n2 < 30; ++n2)
    for (var r2 = i2[n2]; r2 < i2[n2 + 1]; ++r2)
      s2[r2] = r2 - i2[n2] << 5 | n2;
  return [i2, s2];
};
var ln = an(sn, 2);
var cn = ln[0];
var un = ln[1];
cn[28] = 258, un[258] = 28;
for (dn = an(rn, 0)[1], hn = new tn(32768), _n = 0; _n < 32768; ++_n) {
  pn = (43690 & _n) >>> 1 | (21845 & _n) << 1;
  pn = (61680 & (pn = (52428 & pn) >>> 2 | (13107 & pn) << 2)) >>> 4 | (3855 & pn) << 4, hn[_n] = ((65280 & pn) >>> 8 | (255 & pn) << 8) >>> 1;
}
var pn;
var dn;
var hn;
var _n;
var gn = function(e2, t2, i2) {
  for (var n2 = e2.length, s2 = 0, r2 = new tn(t2); s2 < n2; ++s2)
    ++r2[e2[s2] - 1];
  var o2, a2 = new tn(t2);
  for (s2 = 0; s2 < t2; ++s2)
    a2[s2] = a2[s2 - 1] + r2[s2 - 1] << 1;
  if (i2) {
    o2 = new tn(1 << t2);
    var l2 = 15 - t2;
    for (s2 = 0; s2 < n2; ++s2)
      if (e2[s2])
        for (var c2 = s2 << 4 | e2[s2], u2 = t2 - e2[s2], d2 = a2[e2[s2] - 1]++ << u2, h2 = d2 | (1 << u2) - 1; d2 <= h2; ++d2)
          o2[hn[d2] >>> l2] = c2;
  } else
    for (o2 = new tn(n2), s2 = 0; s2 < n2; ++s2)
      o2[s2] = hn[a2[e2[s2] - 1]++] >>> 15 - e2[s2];
  return o2;
};
var fn = new en(288);
for (_n = 0; _n < 144; ++_n)
  fn[_n] = 8;
for (_n = 144; _n < 256; ++_n)
  fn[_n] = 9;
for (_n = 256; _n < 280; ++_n)
  fn[_n] = 7;
for (_n = 280; _n < 288; ++_n)
  fn[_n] = 8;
var vn = new en(32);
for (_n = 0; _n < 32; ++_n)
  vn[_n] = 5;
var mn = gn(fn, 9, 0);
var yn = gn(vn, 5, 0);
var bn = function(e2) {
  return (e2 / 8 >> 0) + (7 & e2 && 1);
};
var wn = function(e2, t2, i2) {
  (null == i2 || i2 > e2.length) && (i2 = e2.length);
  var n2 = new (e2 instanceof tn ? tn : e2 instanceof nn ? nn : en)(i2 - t2);
  return n2.set(e2.subarray(t2, i2)), n2;
};
var Sn = function(e2, t2, i2) {
  i2 <<= 7 & t2;
  var n2 = t2 / 8 >> 0;
  e2[n2] |= i2, e2[n2 + 1] |= i2 >>> 8;
};
var En = function(e2, t2, i2) {
  i2 <<= 7 & t2;
  var n2 = t2 / 8 >> 0;
  e2[n2] |= i2, e2[n2 + 1] |= i2 >>> 8, e2[n2 + 2] |= i2 >>> 16;
};
var kn = function(e2, t2) {
  for (var i2 = [], n2 = 0; n2 < e2.length; ++n2)
    e2[n2] && i2.push({ s: n2, f: e2[n2] });
  var s2 = i2.length, r2 = i2.slice();
  if (!s2)
    return [new en(0), 0];
  if (1 == s2) {
    var o2 = new en(i2[0].s + 1);
    return o2[i2[0].s] = 1, [o2, 1];
  }
  i2.sort(function(e3, t3) {
    return e3.f - t3.f;
  }), i2.push({ s: -1, f: 25001 });
  var a2 = i2[0], l2 = i2[1], c2 = 0, u2 = 1, d2 = 2;
  for (i2[0] = { s: -1, f: a2.f + l2.f, l: a2, r: l2 }; u2 != s2 - 1; )
    a2 = i2[i2[c2].f < i2[d2].f ? c2++ : d2++], l2 = i2[c2 != u2 && i2[c2].f < i2[d2].f ? c2++ : d2++], i2[u2++] = { s: -1, f: a2.f + l2.f, l: a2, r: l2 };
  var h2 = r2[0].s;
  for (n2 = 1; n2 < s2; ++n2)
    r2[n2].s > h2 && (h2 = r2[n2].s);
  var _2 = new tn(h2 + 1), p2 = xn(i2[u2 - 1], _2, 0);
  if (p2 > t2) {
    n2 = 0;
    var g2 = 0, f2 = p2 - t2, v2 = 1 << f2;
    for (r2.sort(function(e3, t3) {
      return _2[t3.s] - _2[e3.s] || e3.f - t3.f;
    }); n2 < s2; ++n2) {
      var m2 = r2[n2].s;
      if (!(_2[m2] > t2))
        break;
      g2 += v2 - (1 << p2 - _2[m2]), _2[m2] = t2;
    }
    for (g2 >>>= f2; g2 > 0; ) {
      var y2 = r2[n2].s;
      _2[y2] < t2 ? g2 -= 1 << t2 - _2[y2]++ - 1 : ++n2;
    }
    for (; n2 >= 0 && g2; --n2) {
      var b2 = r2[n2].s;
      _2[b2] == t2 && (--_2[b2], ++g2);
    }
    p2 = t2;
  }
  return [new en(_2), p2];
};
var xn = function(e2, t2, i2) {
  return -1 == e2.s ? Math.max(xn(e2.l, t2, i2 + 1), xn(e2.r, t2, i2 + 1)) : t2[e2.s] = i2;
};
var In = function(e2) {
  for (var t2 = e2.length; t2 && !e2[--t2]; )
    ;
  for (var i2 = new tn(++t2), n2 = 0, s2 = e2[0], r2 = 1, o2 = function(e3) {
    i2[n2++] = e3;
  }, a2 = 1; a2 <= t2; ++a2)
    if (e2[a2] == s2 && a2 != t2)
      ++r2;
    else {
      if (!s2 && r2 > 2) {
        for (; r2 > 138; r2 -= 138)
          o2(32754);
        r2 > 2 && (o2(r2 > 10 ? r2 - 11 << 5 | 28690 : r2 - 3 << 5 | 12305), r2 = 0);
      } else if (r2 > 3) {
        for (o2(s2), --r2; r2 > 6; r2 -= 6)
          o2(8304);
        r2 > 2 && (o2(r2 - 3 << 5 | 8208), r2 = 0);
      }
      for (; r2--; )
        o2(s2);
      r2 = 1, s2 = e2[a2];
    }
  return [i2.subarray(0, n2), t2];
};
var Pn = function(e2, t2) {
  for (var i2 = 0, n2 = 0; n2 < t2.length; ++n2)
    i2 += e2[n2] * t2[n2];
  return i2;
};
var Fn = function(e2, t2, i2) {
  var n2 = i2.length, s2 = bn(t2 + 2);
  e2[s2] = 255 & n2, e2[s2 + 1] = n2 >>> 8, e2[s2 + 2] = 255 ^ e2[s2], e2[s2 + 3] = 255 ^ e2[s2 + 1];
  for (var r2 = 0; r2 < n2; ++r2)
    e2[s2 + r2 + 4] = i2[r2];
  return 8 * (s2 + 4 + n2);
};
var Rn = function(e2, t2, i2, n2, s2, r2, o2, a2, l2, c2, u2) {
  Sn(t2, u2++, i2), ++s2[256];
  for (var d2 = kn(s2, 15), h2 = d2[0], _2 = d2[1], p2 = kn(r2, 15), g2 = p2[0], f2 = p2[1], v2 = In(h2), m2 = v2[0], y2 = v2[1], b2 = In(g2), w2 = b2[0], S2 = b2[1], E2 = new tn(19), k2 = 0; k2 < m2.length; ++k2)
    E2[31 & m2[k2]]++;
  for (k2 = 0; k2 < w2.length; ++k2)
    E2[31 & w2[k2]]++;
  for (var x2 = kn(E2, 7), I2 = x2[0], P2 = x2[1], F2 = 19; F2 > 4 && !I2[on[F2 - 1]]; --F2)
    ;
  var R2, C2, T2, $2, A2 = c2 + 5 << 3, M2 = Pn(s2, fn) + Pn(r2, vn) + o2, L2 = Pn(s2, h2) + Pn(r2, g2) + o2 + 14 + 3 * F2 + Pn(E2, I2) + (2 * E2[16] + 3 * E2[17] + 7 * E2[18]);
  if (A2 <= M2 && A2 <= L2)
    return Fn(t2, u2, e2.subarray(l2, l2 + c2));
  if (Sn(t2, u2, 1 + (L2 < M2)), u2 += 2, L2 < M2) {
    R2 = gn(h2, _2, 0), C2 = h2, T2 = gn(g2, f2, 0), $2 = g2;
    var D2 = gn(I2, P2, 0);
    Sn(t2, u2, y2 - 257), Sn(t2, u2 + 5, S2 - 1), Sn(t2, u2 + 10, F2 - 4), u2 += 14;
    for (k2 = 0; k2 < F2; ++k2)
      Sn(t2, u2 + 3 * k2, I2[on[k2]]);
    u2 += 3 * F2;
    for (var O2 = [m2, w2], N2 = 0; N2 < 2; ++N2) {
      var q2 = O2[N2];
      for (k2 = 0; k2 < q2.length; ++k2) {
        var B2 = 31 & q2[k2];
        Sn(t2, u2, D2[B2]), u2 += I2[B2], B2 > 15 && (Sn(t2, u2, q2[k2] >>> 5 & 127), u2 += q2[k2] >>> 12);
      }
    }
  } else
    R2 = mn, C2 = fn, T2 = yn, $2 = vn;
  for (k2 = 0; k2 < a2; ++k2)
    if (n2[k2] > 255) {
      B2 = n2[k2] >>> 18 & 31;
      En(t2, u2, R2[B2 + 257]), u2 += C2[B2 + 257], B2 > 7 && (Sn(t2, u2, n2[k2] >>> 23 & 31), u2 += sn[B2]);
      var H2 = 31 & n2[k2];
      En(t2, u2, T2[H2]), u2 += $2[H2], H2 > 3 && (En(t2, u2, n2[k2] >>> 5 & 8191), u2 += rn[H2]);
    } else
      En(t2, u2, R2[n2[k2]]), u2 += C2[n2[k2]];
  return En(t2, u2, R2[256]), u2 + C2[256];
};
var Cn = new nn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var Tn = function() {
  for (var e2 = new nn(256), t2 = 0; t2 < 256; ++t2) {
    for (var i2 = t2, n2 = 9; --n2; )
      i2 = (1 & i2 && 3988292384) ^ i2 >>> 1;
    e2[t2] = i2;
  }
  return e2;
}();
var $n = function() {
  var e2 = 4294967295;
  return { p: function(t2) {
    for (var i2 = e2, n2 = 0; n2 < t2.length; ++n2)
      i2 = Tn[255 & i2 ^ t2[n2]] ^ i2 >>> 8;
    e2 = i2;
  }, d: function() {
    return 4294967295 ^ e2;
  } };
};
var An = function(e2, t2, i2, n2, s2) {
  return function(e3, t3, i3, n3, s3, r2) {
    var o2 = e3.length, a2 = new en(n3 + o2 + 5 * (1 + Math.floor(o2 / 7e3)) + s3), l2 = a2.subarray(n3, a2.length - s3), c2 = 0;
    if (!t3 || o2 < 8)
      for (var u2 = 0; u2 <= o2; u2 += 65535) {
        var d2 = u2 + 65535;
        d2 < o2 ? c2 = Fn(l2, c2, e3.subarray(u2, d2)) : (l2[u2] = r2, c2 = Fn(l2, c2, e3.subarray(u2, o2)));
      }
    else {
      for (var h2 = Cn[t3 - 1], _2 = h2 >>> 13, p2 = 8191 & h2, g2 = (1 << i3) - 1, f2 = new tn(32768), v2 = new tn(g2 + 1), m2 = Math.ceil(i3 / 3), y2 = 2 * m2, b2 = function(t4) {
        return (e3[t4] ^ e3[t4 + 1] << m2 ^ e3[t4 + 2] << y2) & g2;
      }, w2 = new nn(25e3), S2 = new tn(288), E2 = new tn(32), k2 = 0, x2 = 0, I2 = (u2 = 0, 0), P2 = 0, F2 = 0; u2 < o2; ++u2) {
        var R2 = b2(u2), C2 = 32767 & u2, T2 = v2[R2];
        if (f2[C2] = T2, v2[R2] = C2, P2 <= u2) {
          var $2 = o2 - u2;
          if ((k2 > 7e3 || I2 > 24576) && $2 > 423) {
            c2 = Rn(e3, l2, 0, w2, S2, E2, x2, I2, F2, u2 - F2, c2), I2 = k2 = x2 = 0, F2 = u2;
            for (var A2 = 0; A2 < 286; ++A2)
              S2[A2] = 0;
            for (A2 = 0; A2 < 30; ++A2)
              E2[A2] = 0;
          }
          var M2 = 2, L2 = 0, D2 = p2, O2 = C2 - T2 & 32767;
          if ($2 > 2 && R2 == b2(u2 - O2))
            for (var N2 = Math.min(_2, $2) - 1, q2 = Math.min(32767, u2), B2 = Math.min(258, $2); O2 <= q2 && --D2 && C2 != T2; ) {
              if (e3[u2 + M2] == e3[u2 + M2 - O2]) {
                for (var H2 = 0; H2 < B2 && e3[u2 + H2] == e3[u2 + H2 - O2]; ++H2)
                  ;
                if (H2 > M2) {
                  if (M2 = H2, L2 = O2, H2 > N2)
                    break;
                  var U2 = Math.min(O2, H2 - 2), W2 = 0;
                  for (A2 = 0; A2 < U2; ++A2) {
                    var z2 = u2 - O2 + A2 + 32768 & 32767, V2 = z2 - f2[z2] + 32768 & 32767;
                    V2 > W2 && (W2 = V2, T2 = z2);
                  }
                }
              }
              O2 += (C2 = T2) - (T2 = f2[C2]) + 32768 & 32767;
            }
          if (L2) {
            w2[I2++] = 268435456 | un[M2] << 18 | dn[L2];
            var G2 = 31 & un[M2], j2 = 31 & dn[L2];
            x2 += sn[G2] + rn[j2], ++S2[257 + G2], ++E2[j2], P2 = u2 + M2, ++k2;
          } else
            w2[I2++] = e3[u2], ++S2[e3[u2]];
        }
      }
      c2 = Rn(e3, l2, r2, w2, S2, E2, x2, I2, F2, u2 - F2, c2);
    }
    return wn(a2, 0, n3 + bn(c2) + s3);
  }(e2, null == t2.level ? 6 : t2.level, null == t2.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e2.length)))) : 12 + t2.mem, i2, n2, !s2);
};
var Mn = function(e2, t2, i2) {
  for (; i2; ++t2)
    e2[t2] = i2, i2 >>>= 8;
};
var Ln = function(e2, t2) {
  var i2 = t2.filename;
  if (e2[0] = 31, e2[1] = 139, e2[2] = 8, e2[8] = t2.level < 2 ? 4 : 9 == t2.level ? 2 : 0, e2[9] = 3, 0 != t2.mtime && Mn(e2, 4, Math.floor(new Date(t2.mtime || Date.now()) / 1e3)), i2) {
    e2[3] = 8;
    for (var n2 = 0; n2 <= i2.length; ++n2)
      e2[n2 + 10] = i2.charCodeAt(n2);
  }
};
var Dn = function(e2) {
  return 10 + (e2.filename && e2.filename.length + 1 || 0);
};
function On(e2, t2) {
  void 0 === t2 && (t2 = {});
  var i2 = $n(), n2 = e2.length;
  i2.p(e2);
  var s2 = An(e2, t2, Dn(t2), 8), r2 = s2.length;
  return Ln(s2, t2), Mn(s2, r2 - 8, i2.d()), Mn(s2, r2 - 4, n2), s2;
}
function Nn(e2, t2) {
  var i2 = e2.length;
  if ("undefined" != typeof TextEncoder)
    return new TextEncoder().encode(e2);
  for (var n2 = new en(e2.length + (e2.length >>> 1)), s2 = 0, r2 = function(e3) {
    n2[s2++] = e3;
  }, o2 = 0; o2 < i2; ++o2) {
    if (s2 + 5 > n2.length) {
      var a2 = new en(s2 + 8 + (i2 - o2 << 1));
      a2.set(n2), n2 = a2;
    }
    var l2 = e2.charCodeAt(o2);
    l2 < 128 || t2 ? r2(l2) : l2 < 2048 ? (r2(192 | l2 >>> 6), r2(128 | 63 & l2)) : l2 > 55295 && l2 < 57344 ? (r2(240 | (l2 = 65536 + (1047552 & l2) | 1023 & e2.charCodeAt(++o2)) >>> 18), r2(128 | l2 >>> 12 & 63), r2(128 | l2 >>> 6 & 63), r2(128 | 63 & l2)) : (r2(224 | l2 >>> 12), r2(128 | l2 >>> 6 & 63), r2(128 | 63 & l2));
  }
  return wn(n2, 0, s2);
}
var qn = 3e5;
var Bn = [pi.MouseMove, pi.MouseInteraction, pi.Scroll, pi.ViewportResize, pi.Input, pi.TouchMove, pi.MediaInteraction, pi.Drag];
var Hn = ["trigger_activated", "trigger_pending", "trigger_disabled"];
var Un = (e2) => ({ rrwebMethod: e2, enqueuedAt: Date.now(), attempt: 1 });
var Wn = "[SessionRecording]";
function zn(e2) {
  return function(e3, t2) {
    for (var i2 = "", n2 = 0; n2 < e3.length; ) {
      var s2 = e3[n2++];
      s2 < 128 || t2 ? i2 += String.fromCharCode(s2) : s2 < 224 ? i2 += String.fromCharCode((31 & s2) << 6 | 63 & e3[n2++]) : s2 < 240 ? i2 += String.fromCharCode((15 & s2) << 12 | (63 & e3[n2++]) << 6 | 63 & e3[n2++]) : (s2 = ((15 & s2) << 18 | (63 & e3[n2++]) << 12 | (63 & e3[n2++]) << 6 | 63 & e3[n2++]) - 65536, i2 += String.fromCharCode(55296 | s2 >> 10, 56320 | 1023 & s2));
    }
    return i2;
  }(On(Nn(JSON.stringify(e2))), true);
}
function Vn(e2) {
  return e2.type === _i.Custom && "sessionIdle" === e2.data.tag;
}
var Gn = class {
  queuedRRWebEvents = [];
  isIdle = false;
  _linkedFlagSeen = false;
  _lastActivityTimestamp = Date.now();
  _linkedFlag = null;
  _removePageViewCaptureHook = void 0;
  _onSessionIdListener = void 0;
  _persistDecideOnSessionListener = void 0;
  _samplingSessionListener = void 0;
  _urlTriggers = [];
  _forceAllowLocalhostNetworkCapture = false;
  get sessionIdleThresholdMilliseconds() {
    return this.instance.config.session_recording.session_idle_threshold_ms || 3e5;
  }
  get rrwebRecord() {
    var e2, t2;
    return null == h || null === (e2 = h.__PosthogExtensions__) || void 0 === e2 || null === (t2 = e2.rrweb) || void 0 === t2 ? void 0 : t2.record;
  }
  get started() {
    return this._captureStarted;
  }
  get sessionManager() {
    if (!this.instance.sessionManager)
      throw new Error(Wn + " must be started with a valid sessionManager.");
    return this.instance.sessionManager;
  }
  get fullSnapshotIntervalMillis() {
    var e2, t2;
    return "trigger_pending" === this.urlTriggerStatus ? 6e4 : null !== (e2 = null === (t2 = this.instance.config.session_recording) || void 0 === t2 ? void 0 : t2.full_snapshot_interval_millis) && void 0 !== e2 ? e2 : qn;
  }
  get isSampled() {
    const e2 = this.instance.get_property(pe);
    return F(e2) ? e2 : null;
  }
  get sessionDuration() {
    var e2, t2;
    const i2 = null === (e2 = this.buffer) || void 0 === e2 ? void 0 : e2.data[(null === (t2 = this.buffer) || void 0 === t2 ? void 0 : t2.data.length) - 1], { sessionStartTimestamp: n2 } = this.sessionManager.checkAndGetSessionAndWindowId(true);
    return i2 ? i2.timestamp - n2 : null;
  }
  get isRecordingEnabled() {
    const t2 = !!this.instance.get_property(ae), i2 = !this.instance.config.disable_session_recording;
    return e && t2 && i2;
  }
  get isConsoleLogCaptureEnabled() {
    const e2 = !!this.instance.get_property(le), t2 = this.instance.config.enable_recording_console_log;
    return null != t2 ? t2 : e2;
  }
  get canvasRecording() {
    var e2, t2, i2, n2, s2, r2;
    const o2 = this.instance.config.session_recording.captureCanvas, a2 = this.instance.get_property(ue), l2 = null !== (e2 = null !== (t2 = null == o2 ? void 0 : o2.recordCanvas) && void 0 !== t2 ? t2 : null == a2 ? void 0 : a2.enabled) && void 0 !== e2 && e2, c2 = null !== (i2 = null !== (n2 = null == o2 ? void 0 : o2.canvasFps) && void 0 !== n2 ? n2 : null == a2 ? void 0 : a2.fps) && void 0 !== i2 ? i2 : 0, u2 = null !== (s2 = null !== (r2 = null == o2 ? void 0 : o2.canvasQuality) && void 0 !== r2 ? r2 : null == a2 ? void 0 : a2.quality) && void 0 !== s2 ? s2 : 0;
    return { enabled: l2, fps: Ki(c2, 0, 12, "canvas recording fps"), quality: Ki(u2, 0, 1, "canvas recording quality") };
  }
  get networkPayloadCapture() {
    var e2, t2;
    const i2 = this.instance.get_property(ce), n2 = { recordHeaders: null === (e2 = this.instance.config.session_recording) || void 0 === e2 ? void 0 : e2.recordHeaders, recordBody: null === (t2 = this.instance.config.session_recording) || void 0 === t2 ? void 0 : t2.recordBody }, s2 = (null == n2 ? void 0 : n2.recordHeaders) || (null == i2 ? void 0 : i2.recordHeaders), r2 = (null == n2 ? void 0 : n2.recordBody) || (null == i2 ? void 0 : i2.recordBody), o2 = b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance, a2 = !!(F(o2) ? o2 : null == i2 ? void 0 : i2.capturePerformance);
    return s2 || r2 || a2 ? { recordHeaders: s2, recordBody: r2, recordPerformance: a2 } : void 0;
  }
  get sampleRate() {
    const e2 = this.instance.get_property(de);
    return P(e2) ? e2 : null;
  }
  get minimumDuration() {
    const e2 = this.instance.get_property(he);
    return P(e2) ? e2 : null;
  }
  get status() {
    return this.receivedDecide ? this.isRecordingEnabled ? I(this._linkedFlag) || this._linkedFlagSeen ? "trigger_pending" === this.urlTriggerStatus ? "buffering" : F(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering";
  }
  get urlTriggerStatus() {
    var e2, t2;
    if (this.receivedDecide && 0 === this._urlTriggers.length)
      return "trigger_disabled";
    const i2 = null === (e2 = this.instance) || void 0 === e2 ? void 0 : e2.get_property(fe);
    var n2, s2, r2, o2;
    return (null === (t2 = this.instance) || void 0 === t2 ? void 0 : t2.get_property(ge)) !== this.sessionId ? (null === (n2 = this.instance) || void 0 === n2 || null === (s2 = n2.persistence) || void 0 === s2 || s2.unregister(ge), null === (r2 = this.instance) || void 0 === r2 || null === (o2 = r2.persistence) || void 0 === o2 || o2.unregister(fe), "trigger_pending") : Hn.includes(i2) ? i2 : "trigger_pending";
  }
  set urlTriggerStatus(e2) {
    var t2, i2;
    null === (t2 = this.instance) || void 0 === t2 || null === (i2 = t2.persistence) || void 0 === i2 || i2.register({ [ge]: this.sessionId, [fe]: e2 });
  }
  constructor(e2) {
    if (this.instance = e2, this._captureStarted = false, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = false, !this.instance.sessionManager)
      throw T.error(Wn + " started without valid sessionManager"), new Error(Wn + " started without valid sessionManager. This is a bug.");
    const { sessionId: t2, windowId: i2 } = this.sessionManager.checkAndGetSessionAndWindowId();
    this.sessionId = t2, this.windowId = i2, this.buffer = this.clearBuffer(), this.sessionIdleThresholdMilliseconds >= this.sessionManager.sessionTimeoutMs && T.warn(Wn + ` session_idle_threshold_ms (${this.sessionIdleThresholdMilliseconds}) is greater than the session timeout (${this.sessionManager.sessionTimeoutMs}). Session will never be detected as idle`);
  }
  _onBeforeUnload = () => {
    this._flushBuffer();
  };
  _onOffline = () => {
    this._tryAddCustomEvent("browser offline", {});
  };
  _onOnline = () => {
    this._tryAddCustomEvent("browser online", {});
  };
  _onVisibilityChange = () => {
    if (null != o && o.visibilityState) {
      const e2 = "window " + o.visibilityState;
      this._tryAddCustomEvent(e2, {});
    }
  };
  startIfEnabledOrStop(t2) {
    this.isRecordingEnabled ? (this._startCapture(t2), null == e || e.addEventListener("beforeunload", this._onBeforeUnload), null == e || e.addEventListener("offline", this._onOffline), null == e || e.addEventListener("online", this._onOnline), null == e || e.addEventListener("visibilitychange", this._onVisibilityChange), this._setupSampling(), I(this._removePageViewCaptureHook) && (this._removePageViewCaptureHook = this.instance._addCaptureHook((t3) => {
      try {
        if ("$pageview" === t3) {
          const t4 = e ? this._maskUrl(e.location.href) : "";
          if (!t4)
            return;
          this._tryAddCustomEvent("$pageview", { href: t4 });
        }
      } catch (e2) {
        T.error("Could not add $pageview to rrweb session", e2);
      }
    })), this._onSessionIdListener || (this._onSessionIdListener = this.sessionManager.onSessionId((e2, t3, i2) => {
      var n2, s2, r2, o2;
      i2 && (this._tryAddCustomEvent("$session_id_change", { sessionId: e2, windowId: t3, changeReason: i2 }), null === (n2 = this.instance) || void 0 === n2 || null === (s2 = n2.persistence) || void 0 === s2 || s2.unregister(ge), null === (r2 = this.instance) || void 0 === r2 || null === (o2 = r2.persistence) || void 0 === o2 || o2.unregister(fe));
    }))) : this.stopRecording();
  }
  stopRecording() {
    var t2, i2, n2;
    this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = false, null == e || e.removeEventListener("beforeunload", this._onBeforeUnload), null == e || e.removeEventListener("offline", this._onOffline), null == e || e.removeEventListener("online", this._onOnline), null == e || e.removeEventListener("visibilitychange", this._onVisibilityChange), this.clearBuffer(), clearInterval(this._fullSnapshotTimer), null === (t2 = this._removePageViewCaptureHook) || void 0 === t2 || t2.call(this), this._removePageViewCaptureHook = void 0, null === (i2 = this._onSessionIdListener) || void 0 === i2 || i2.call(this), this._onSessionIdListener = void 0, null === (n2 = this._samplingSessionListener) || void 0 === n2 || n2.call(this), this._samplingSessionListener = void 0, T.info(Wn + " stopped"));
  }
  makeSamplingDecision(e2) {
    var t2;
    const i2 = this.sessionId !== e2, n2 = this.sampleRate;
    var s2;
    if (!P(n2))
      return void (null === (s2 = this.instance.persistence) || void 0 === s2 || s2.register({ [pe]: null }));
    const r2 = this.isSampled;
    let o2;
    const a2 = i2 || !F(r2);
    if (a2) {
      o2 = Math.random() < n2;
    } else
      o2 = r2;
    a2 && (o2 ? this._reportStarted("sampling") : T.warn(Wn + ` Sample rate (${n2}) has determined that this sessionId (${e2}) will not be sent to the server.`), this._tryAddCustomEvent("samplingDecisionMade", { sampleRate: n2, isSampled: o2 })), null === (t2 = this.instance.persistence) || void 0 === t2 || t2.register({ [pe]: o2 });
  }
  afterDecideResponse(e2) {
    var t2, i2, n2, s2;
    (this._persistDecideResponse(e2), this._linkedFlag = (null === (t2 = e2.sessionRecording) || void 0 === t2 ? void 0 : t2.linkedFlag) || null, null !== (i2 = e2.sessionRecording) && void 0 !== i2 && i2.endpoint) && (this._endpoint = null === (s2 = e2.sessionRecording) || void 0 === s2 ? void 0 : s2.endpoint);
    if (this._setupSampling(), !I(this._linkedFlag) && !this._linkedFlagSeen) {
      const e3 = E(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag, t3 = E(this._linkedFlag) ? null : this._linkedFlag.variant;
      this.instance.onFeatureFlags((i3, n3) => {
        const s3 = b(n3) && e3 in n3, r2 = t3 ? n3[e3] === t3 : s3;
        if (r2) {
          const i4 = { linkedFlag: e3, linkedVariant: t3 }, n4 = "linked flag matched";
          T.info(Wn + " " + n4, i4), this._tryAddCustomEvent(n4, i4), this._reportStarted("linked_flag_match");
        }
        this._linkedFlagSeen = r2;
      });
    }
    null !== (n2 = e2.sessionRecording) && void 0 !== n2 && n2.urlTriggers && (this._urlTriggers = e2.sessionRecording.urlTriggers), this.receivedDecide = true, this.startIfEnabledOrStop();
  }
  _setupSampling() {
    P(this.sampleRate) && I(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId((e2) => {
      this.makeSamplingDecision(e2);
    }));
  }
  _persistDecideResponse(e2) {
    if (this.instance.persistence) {
      var t2;
      const i2 = this.instance.persistence, n2 = () => {
        var t3, n3, s2, r2, o2, a2, l2;
        const c2 = null === (t3 = e2.sessionRecording) || void 0 === t3 ? void 0 : t3.sampleRate, u2 = I(c2) ? null : parseFloat(c2), d2 = null === (n3 = e2.sessionRecording) || void 0 === n3 ? void 0 : n3.minimumDurationMilliseconds;
        i2.register({ [ae]: !!e2.sessionRecording, [le]: null === (s2 = e2.sessionRecording) || void 0 === s2 ? void 0 : s2.consoleLogRecordingEnabled, [ce]: { capturePerformance: e2.capturePerformance, ...null === (r2 = e2.sessionRecording) || void 0 === r2 ? void 0 : r2.networkPayloadCapture }, [ue]: { enabled: null === (o2 = e2.sessionRecording) || void 0 === o2 ? void 0 : o2.recordCanvas, fps: null === (a2 = e2.sessionRecording) || void 0 === a2 ? void 0 : a2.canvasFps, quality: null === (l2 = e2.sessionRecording) || void 0 === l2 ? void 0 : l2.canvasQuality }, [de]: u2, [he]: S(d2) ? null : d2 });
      };
      n2(), null === (t2 = this._persistDecideOnSessionListener) || void 0 === t2 || t2.call(this), this._persistDecideOnSessionListener = this.sessionManager.onSessionId(n2);
    }
  }
  log(e2) {
    var t2;
    let i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
    null === (t2 = this.instance.sessionRecording) || void 0 === t2 || t2.onRRwebEmit({ type: 6, data: { plugin: "rrweb/console@1", payload: { level: i2, trace: [], payload: [JSON.stringify(e2)] } }, timestamp: Date.now() });
  }
  _startCapture(e2) {
    if (!S(Object.assign) && !S(Array.from) && !(this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut())) {
      var t2, i2;
      if (this._captureStarted = true, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord)
        this._onScriptLoaded();
      else
        null === (t2 = h.__PosthogExtensions__) || void 0 === t2 || null === (i2 = t2.loadExternalDependency) || void 0 === i2 || i2.call(t2, this.instance, "recorder", (e3) => {
          if (e3)
            return T.error(Wn + " could not load recorder", e3);
          this._onScriptLoaded();
        });
      T.info(Wn + " starting"), "active" === this.status && this._reportStarted(e2 || "recording_initialized");
    }
  }
  isInteractiveEvent(e2) {
    var t2;
    return 3 === e2.type && -1 !== Bn.indexOf(null === (t2 = e2.data) || void 0 === t2 ? void 0 : t2.source);
  }
  _updateWindowAndSessionIds(e2) {
    const t2 = this.isInteractiveEvent(e2);
    if (!t2 && !this.isIdle) {
      e2.timestamp - this._lastActivityTimestamp > this.sessionIdleThresholdMilliseconds && (this.isIdle = true, clearInterval(this._fullSnapshotTimer), this._tryAddCustomEvent("sessionIdle", { eventTimestamp: e2.timestamp, lastActivityTimestamp: this._lastActivityTimestamp, threshold: this.sessionIdleThresholdMilliseconds, bufferLength: this.buffer.data.length, bufferSize: this.buffer.size }), this._flushBuffer());
    }
    let i2 = false;
    if (t2 && (this._lastActivityTimestamp = e2.timestamp, this.isIdle && (this.isIdle = false, this._tryAddCustomEvent("sessionNoLongerIdle", { reason: "user activity", type: e2.type }), i2 = true)), this.isIdle)
      return;
    const { windowId: n2, sessionId: s2 } = this.sessionManager.checkAndGetSessionAndWindowId(!t2, e2.timestamp), r2 = this.sessionId !== s2, o2 = this.windowId !== n2;
    this.windowId = n2, this.sessionId = s2, r2 || o2 ? (this.stopRecording(), this.startIfEnabledOrStop("session_id_changed")) : i2 && this._scheduleFullSnapshot();
  }
  _tryRRWebMethod(e2) {
    try {
      return e2.rrwebMethod(), true;
    } catch (t2) {
      return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({ enqueuedAt: e2.enqueuedAt || Date.now(), attempt: e2.attempt++, rrwebMethod: e2.rrwebMethod }) : T.warn(Wn + " could not emit queued rrweb event.", t2, e2), false;
    }
  }
  _tryAddCustomEvent(e2, t2) {
    return this._tryRRWebMethod(Un(() => this.rrwebRecord.addCustomEvent(e2, t2)));
  }
  _tryTakeFullSnapshot() {
    return this._tryRRWebMethod(Un(() => this.rrwebRecord.takeFullSnapshot()));
  }
  _onScriptLoaded() {
    var e2;
    const t2 = { blockClass: "ph-no-capture", blockSelector: void 0, ignoreClass: "ph-ignore-input", maskTextClass: "ph-mask", maskTextSelector: void 0, maskTextFn: void 0, maskAllInputs: true, maskInputOptions: { password: true }, maskInputFn: void 0, slimDOMOptions: {}, collectFonts: false, inlineStylesheet: true, recordCrossOriginIframes: false }, i2 = this.instance.config.session_recording;
    for (const [e3, n3] of Object.entries(i2 || {}))
      e3 in t2 && ("maskInputOptions" === e3 ? t2.maskInputOptions = { password: true, ...n3 } : t2[e3] = n3);
    if (this.canvasRecording && this.canvasRecording.enabled && (t2.recordCanvas = true, t2.sampling = { canvas: this.canvasRecording.fps }, t2.dataURLOptions = { type: "image/webp", quality: this.canvasRecording.quality }), !this.rrwebRecord)
      return void T.error(Wn + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
    this.mutationRateLimiter = null !== (e2 = this.mutationRateLimiter) && void 0 !== e2 ? e2 : new Zi(this.rrwebRecord, { refillRate: this.instance.config.session_recording.__mutationRateLimiterRefillRate, bucketSize: this.instance.config.session_recording.__mutationRateLimiterBucketSize, onBlockedNode: (e3, t3) => {
      const i3 = `Too many mutations on node '${e3}'. Rate limiting. This could be due to SVG animations or something similar`;
      T.info(i3, { node: t3 }), this.log(Wn + " " + i3, "warn");
    } });
    const n2 = this._gatherRRWebPlugins();
    this.stopRrweb = this.rrwebRecord({ emit: (e3) => {
      this.onRRwebEmit(e3);
    }, plugins: n2, ...t2 }), this._lastActivityTimestamp = Date.now(), this.isIdle = false, this._tryAddCustomEvent("$session_options", { sessionRecordingOptions: t2, activePlugins: n2.map((e3) => null == e3 ? void 0 : e3.name) }), this._tryAddCustomEvent("$posthog_config", { config: this.instance.config });
  }
  _scheduleFullSnapshot() {
    if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), this.isIdle)
      return;
    const e2 = this.fullSnapshotIntervalMillis;
    e2 && (this._fullSnapshotTimer = setInterval(() => {
      this._tryTakeFullSnapshot();
    }, e2));
  }
  _gatherRRWebPlugins() {
    var e2, t2, i2, n2;
    const s2 = [], r2 = null === (e2 = h.__PosthogExtensions__) || void 0 === e2 || null === (t2 = e2.rrwebPlugins) || void 0 === t2 ? void 0 : t2.getRecordConsolePlugin;
    r2 && this.isConsoleLogCaptureEnabled && s2.push(r2());
    const o2 = null === (i2 = h.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.rrwebPlugins) || void 0 === n2 ? void 0 : n2.getRecordNetworkPlugin;
    if (this.networkPayloadCapture && y(o2)) {
      !rt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? s2.push(o2(Xi(this.instance.config, this.networkPayloadCapture))) : T.info(Wn + " NetworkCapture not started because we are on localhost.");
    }
    return s2;
  }
  onRRwebEmit(e2) {
    var t2;
    if (this._processQueuedEvents(), !e2 || !b(e2))
      return;
    if (e2.type === _i.Meta) {
      const t3 = this._maskUrl(e2.data.href);
      if (this._lastHref = t3, !t3)
        return;
      e2.data.href = t3;
    } else
      this._pageViewFallBack();
    this._checkUrlTrigger(), e2.type === _i.FullSnapshot && this._scheduleFullSnapshot(), e2.type === _i.FullSnapshot && "trigger_pending" === this.urlTriggerStatus && this.clearBuffer();
    const i2 = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e2) : e2;
    if (!i2)
      return;
    const n2 = function(e3) {
      const t3 = e3;
      if (t3 && b(t3) && 6 === t3.type && b(t3.data) && "rrweb/console@1" === t3.data.plugin) {
        t3.data.payload.payload.length > 10 && (t3.data.payload.payload = t3.data.payload.payload.slice(0, 10), t3.data.payload.payload.push("...[truncated]"));
        const i3 = [];
        for (let e4 = 0; e4 < t3.data.payload.payload.length; e4++)
          t3.data.payload.payload[e4] && t3.data.payload.payload[e4].length > 2e3 ? i3.push(t3.data.payload.payload[e4].slice(0, 2e3) + "...[truncated]") : i3.push(t3.data.payload.payload[e4]);
        return t3.data.payload.payload = i3, e3;
      }
      return e3;
    }(i2);
    if (this._updateWindowAndSessionIds(n2), this.isIdle && !Vn(n2))
      return;
    if (Vn(n2)) {
      const e3 = n2.data.payload;
      if (e3) {
        const t3 = e3.lastActivityTimestamp, i3 = e3.threshold;
        n2.timestamp = t3 + i3;
      }
    }
    const s2 = null === (t2 = this.instance.config.session_recording.compress_events) || void 0 === t2 || t2 ? function(e3) {
      if (di(e3) < 1024)
        return e3;
      try {
        if (e3.type === _i.FullSnapshot)
          return { ...e3, data: zn(e3.data), cv: "2024-10" };
        if (e3.type === _i.IncrementalSnapshot && e3.data.source === pi.Mutation)
          return { ...e3, cv: "2024-10", data: { ...e3.data, texts: zn(e3.data.texts), attributes: zn(e3.data.attributes), removes: zn(e3.data.removes), adds: zn(e3.data.adds) } };
        if (e3.type === _i.IncrementalSnapshot && e3.data.source === pi.StyleSheetRule)
          return { ...e3, cv: "2024-10", data: { ...e3.data, adds: zn(e3.data.adds), removes: zn(e3.data.removes) } };
      } catch (e4) {
        T.error(Wn + " could not compress event - will use uncompressed event", e4);
      }
      return e3;
    }(n2) : n2, r2 = { $snapshot_bytes: di(s2), $snapshot_data: s2, $session_id: this.sessionId, $window_id: this.windowId };
    "disabled" !== this.status ? this._captureSnapshotBuffered(r2) : this.clearBuffer();
  }
  _pageViewFallBack() {
    if (this.instance.config.capture_pageview || !e)
      return;
    const t2 = this._maskUrl(e.location.href);
    this._lastHref !== t2 && (this._tryAddCustomEvent("$url_changed", { href: t2 }), this._lastHref = t2);
  }
  _processQueuedEvents() {
    if (this.queuedRRWebEvents.length) {
      const e2 = [...this.queuedRRWebEvents];
      this.queuedRRWebEvents = [], e2.forEach((e3) => {
        Date.now() - e3.enqueuedAt <= 2e3 && this._tryRRWebMethod(e3);
      });
    }
  }
  _maskUrl(e2) {
    const t2 = this.instance.config.session_recording;
    if (t2.maskNetworkRequestFn) {
      var i2;
      let n2 = { url: e2 };
      return n2 = t2.maskNetworkRequestFn(n2), null === (i2 = n2) || void 0 === i2 ? void 0 : i2.url;
    }
    return e2;
  }
  clearBuffer() {
    return this.buffer = { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId }, this.buffer;
  }
  _flushBuffer() {
    this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
    const e2 = this.minimumDuration, t2 = this.sessionDuration, i2 = P(t2) && t2 >= 0, n2 = P(e2) && i2 && t2 < e2;
    if ("buffering" === this.status || n2)
      return this.flushBufferTimer = setTimeout(() => {
        this._flushBuffer();
      }, 2e3), this.buffer;
    if (this.buffer.data.length > 0) {
      hi(this.buffer).forEach((e3) => {
        this._captureSnapshot({ $snapshot_bytes: e3.size, $snapshot_data: e3.data, $session_id: e3.sessionId, $window_id: e3.windowId });
      });
    }
    return this.clearBuffer();
  }
  _captureSnapshotBuffered(e2) {
    var t2;
    const i2 = 2 + ((null === (t2 = this.buffer) || void 0 === t2 ? void 0 : t2.data.length) || 0);
    !this.isIdle && (this.buffer.size + e2.$snapshot_bytes + i2 > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), this.buffer.size += e2.$snapshot_bytes, this.buffer.data.push(e2.$snapshot_data), this.flushBufferTimer || this.isIdle || (this.flushBufferTimer = setTimeout(() => {
      this._flushBuffer();
    }, 2e3));
  }
  _captureSnapshot(e2) {
    this.instance.capture("$snapshot", e2, { _url: this.instance.requestRouter.endpointFor("api", this._endpoint), _noTruncate: true, _batchKey: "recordings", skip_client_rate_limiting: true });
  }
  _checkUrlTrigger() {
    if (void 0 === e || !e.location.href)
      return;
    const t2 = e.location.href;
    this._urlTriggers.some((e2) => "regex" === e2.matching && new RegExp(e2.url).test(t2)) && this._activateUrlTrigger();
  }
  _activateUrlTrigger() {
    "trigger_pending" === this.urlTriggerStatus && (this.urlTriggerStatus = "trigger_activated", this._tryAddCustomEvent("url trigger activated", {}), this._flushBuffer(), T.info(Wn + " recording triggered by URL pattern match"));
  }
  overrideLinkedFlag() {
    this._linkedFlagSeen = true, this._reportStarted("linked_flag_override");
  }
  overrideSampling() {
    var e2;
    null === (e2 = this.instance.persistence) || void 0 === e2 || e2.register({ [pe]: true }), this._reportStarted("sampling_override");
  }
  _reportStarted(e2) {
    (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => true)() && this.instance.register_for_session({ $session_recording_start_reason: e2 });
  }
};
var jn = class {
  constructor(e2) {
    this.instance = e2, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
  }
  call() {
    const e2 = { token: this.instance.config.token, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), person_properties: this.instance.get_property(ye), group_properties: this.instance.get_property(be), disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0 };
    this.instance._send_request({ method: "POST", url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"), data: e2, compression: this.instance.config.disable_compression ? void 0 : J.Base64, timeout: this.instance.config.feature_flag_request_timeout_ms, callback: (e3) => this.parseDecideResponse(e3.json) });
  }
  parseDecideResponse(e2) {
    this.instance.featureFlags.setReloadingPaused(false), this.instance.featureFlags._startReloadTimer();
    const t2 = !e2;
    if (this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(null != e2 ? e2 : {}, t2), t2)
      T.error("Failed to fetch feature flags from PostHog.");
    else {
      if (!o || !o.body)
        return T.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(() => {
          this.parseDecideResponse(e2);
        }, 500);
      if (this.instance._afterDecideResponse(e2), e2.siteApps)
        if (this.instance.config.opt_in_site_apps)
          for (const { id: t3, url: r2 } of e2.siteApps) {
            var i2, n2, s2;
            h[`__$$ph_site_app_${t3}`] = this.instance, null === (i2 = h.__PosthogExtensions__) || void 0 === i2 || null === (n2 = (s2 = i2).loadSiteApp) || void 0 === n2 || n2.call(s2, this.instance, r2, (e3) => {
              if (e3)
                return T.error(`Error while initializing PostHog app with config id ${t3}`, e3);
            });
          }
        else
          e2.siteApps.length > 0 && T.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    }
  }
};
var Qn = null != e && e.location ? ut(e.location.hash, "__posthog") || ut(location.hash, "state") : null;
var Jn = "_postHogToolbarParams";
var Yn;
!function(e2) {
  e2[e2.UNINITIALIZED = 0] = "UNINITIALIZED", e2[e2.LOADING = 1] = "LOADING", e2[e2.LOADED = 2] = "LOADED";
}(Yn || (Yn = {}));
var Xn = class {
  constructor(e2) {
    this.instance = e2;
  }
  setToolbarState(e2) {
    h.ph_toolbar_state = e2;
  }
  getToolbarState() {
    var e2;
    return null !== (e2 = h.ph_toolbar_state) && void 0 !== e2 ? e2 : Yn.UNINITIALIZED;
  }
  maybeLoadToolbar() {
    var t2, i2;
    let n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (!e || !o)
      return false;
    n2 = null !== (t2 = n2) && void 0 !== t2 ? t2 : e.location, r2 = null !== (i2 = r2) && void 0 !== i2 ? i2 : e.history;
    try {
      if (!s2) {
        try {
          e.localStorage.setItem("test", "test"), e.localStorage.removeItem("test");
        } catch {
          return false;
        }
        s2 = null == e ? void 0 : e.localStorage;
      }
      const t3 = Qn || ut(n2.hash, "__posthog") || ut(n2.hash, "state");
      let i3;
      const o2 = t3 ? B(() => JSON.parse(atob(decodeURIComponent(t3)))) || B(() => JSON.parse(decodeURIComponent(t3))) : null;
      return o2 && "ph_authorize" === o2.action ? (i3 = o2, i3.source = "url", i3 && Object.keys(i3).length > 0 && (o2.desiredHash ? n2.hash = o2.desiredHash : r2 ? r2.replaceState(r2.state, "", n2.pathname + n2.search) : n2.hash = "")) : (i3 = JSON.parse(s2.getItem(Jn) || "{}"), i3.source = "localstorage", delete i3.userIntent), !(!i3.token || this.instance.config.token !== i3.token) && (this.loadToolbar(i3), true);
    } catch {
      return false;
    }
  }
  _callLoadToolbar(e2) {
    (h.ph_load_toolbar || h.ph_load_editor)(e2, this.instance);
  }
  loadToolbar(t2) {
    const i2 = !(null == o || !o.getElementById(Te));
    if (!e || i2)
      return false;
    const n2 = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics, s2 = { token: this.instance.config.token, ...t2, apiURL: this.instance.requestRouter.endpointFor("ui"), ...n2 ? { instrument: false } : {} };
    if (e.localStorage.setItem(Jn, JSON.stringify({ ...s2, source: void 0 })), this.getToolbarState() === Yn.LOADED)
      this._callLoadToolbar(s2);
    else if (this.getToolbarState() === Yn.UNINITIALIZED) {
      var r2, a2;
      this.setToolbarState(Yn.LOADING), null === (r2 = h.__PosthogExtensions__) || void 0 === r2 || null === (a2 = r2.loadExternalDependency) || void 0 === a2 || a2.call(r2, this.instance, "toolbar", (e2) => {
        if (e2)
          return T.error("Failed to load toolbar", e2), void this.setToolbarState(Yn.UNINITIALIZED);
        this.setToolbarState(Yn.LOADED), this._callLoadToolbar(s2);
      }), G(e, "turbolinks:load", () => {
        this.setToolbarState(Yn.UNINITIALIZED), this.loadToolbar(s2);
      });
    }
    return true;
  }
  _loadEditor(e2) {
    return this.loadToolbar(e2);
  }
  maybeLoadEditor() {
    let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    return this.maybeLoadToolbar(e2, t2, i2);
  }
};
var Kn = class {
  isPaused = true;
  queue = [];
  flushTimeoutMs = 3e3;
  constructor(e2) {
    this.sendRequest = e2;
  }
  enqueue(e2) {
    this.queue.push(e2), this.flushTimeout || this.setFlushTimeout();
  }
  unload() {
    this.clearFlushTimeout();
    const e2 = this.queue.length > 0 ? this.formatQueue() : {}, t2 = Object.values(e2), i2 = [...t2.filter((e3) => 0 === e3.url.indexOf("/e")), ...t2.filter((e3) => 0 !== e3.url.indexOf("/e"))];
    i2.map((e3) => {
      this.sendRequest({ ...e3, transport: "sendBeacon" });
    });
  }
  enable() {
    this.isPaused = false, this.setFlushTimeout();
  }
  setFlushTimeout() {
    this.isPaused || (this.flushTimeout = setTimeout(() => {
      if (this.clearFlushTimeout(), this.queue.length > 0) {
        const e2 = this.formatQueue();
        for (const t2 in e2) {
          const i2 = e2[t2], n2 = (/* @__PURE__ */ new Date()).getTime();
          i2.data && m(i2.data) && D(i2.data, (e3) => {
            e3.offset = Math.abs(e3.timestamp - n2), delete e3.timestamp;
          }), this.sendRequest(i2);
        }
      }
    }, this.flushTimeoutMs));
  }
  clearFlushTimeout() {
    clearTimeout(this.flushTimeout), this.flushTimeout = void 0;
  }
  formatQueue() {
    const e2 = {};
    return D(this.queue, (t2) => {
      var i2;
      const n2 = t2, s2 = (n2 ? n2.batchKey : null) || n2.url;
      S(e2[s2]) && (e2[s2] = { ...n2, data: [] }), null === (i2 = e2[s2].data) || void 0 === i2 || i2.push(n2.data);
    }), this.queue = [], e2;
  }
};
var Zn = !!c || !!l;
var es = "text/plain";
var ts = (e2, t2) => {
  const [i2, n2] = e2.split("?"), s2 = { ...t2 };
  null == n2 || n2.split("&").forEach((e3) => {
    const [t3] = e3.split("=");
    delete s2[t3];
  });
  let r2 = lt(s2);
  return r2 = r2 ? (n2 ? n2 + "&" : "") + r2 : n2, `${i2}?${r2}`;
};
var is = (e2) => {
  let { data: t2, compression: i2 } = e2;
  if (!t2)
    return;
  if (i2 === J.GZipJS) {
    const e3 = On(Nn(JSON.stringify(t2)), { mtime: 0 }), i3 = new Blob([e3], { type: es });
    return { contentType: es, body: i3, estimatedSize: i3.size };
  }
  if (i2 === J.Base64) {
    const e3 = function(e4) {
      const t3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      let i4, n3, s2, r2, o2, a2, l2, c2, u2 = 0, d2 = 0, h2 = "";
      const _2 = [];
      if (!e4)
        return e4;
      e4 = V(e4);
      do {
        i4 = e4.charCodeAt(u2++), n3 = e4.charCodeAt(u2++), s2 = e4.charCodeAt(u2++), c2 = i4 << 16 | n3 << 8 | s2, r2 = c2 >> 18 & 63, o2 = c2 >> 12 & 63, a2 = c2 >> 6 & 63, l2 = 63 & c2, _2[d2++] = t3.charAt(r2) + t3.charAt(o2) + t3.charAt(a2) + t3.charAt(l2);
      } while (u2 < e4.length);
      switch (h2 = _2.join(""), e4.length % 3) {
        case 1:
          h2 = h2.slice(0, -2) + "==";
          break;
        case 2:
          h2 = h2.slice(0, -1) + "=";
      }
      return h2;
    }(JSON.stringify(t2)), i3 = ((e4) => "data=" + encodeURIComponent("string" == typeof e4 ? e4 : JSON.stringify(e4)))(e3);
    return { contentType: "application/x-www-form-urlencoded", body: i3, estimatedSize: new Blob([i3]).size };
  }
  const n2 = JSON.stringify(t2);
  return { contentType: "application/json", body: n2, estimatedSize: new Blob([n2]).size };
};
var ns = (e2) => {
  var t2;
  const i2 = new c();
  i2.open(e2.method || "GET", e2.url, true);
  const { contentType: n2, body: s2 } = null !== (t2 = is(e2)) && void 0 !== t2 ? t2 : {};
  D(e2.headers, function(e3, t3) {
    i2.setRequestHeader(t3, e3);
  }), n2 && i2.setRequestHeader("Content-Type", n2), e2.timeout && (i2.timeout = e2.timeout), i2.withCredentials = true, i2.onreadystatechange = () => {
    if (4 === i2.readyState) {
      var t3;
      const n3 = { statusCode: i2.status, text: i2.responseText };
      if (200 === i2.status)
        try {
          n3.json = JSON.parse(i2.responseText);
        } catch {
        }
      null === (t3 = e2.callback) || void 0 === t3 || t3.call(e2, n3);
    }
  }, i2.send(s2);
};
var ss = (e2) => {
  var t2, i2;
  const { contentType: n2, body: s2, estimatedSize: r2 } = null !== (t2 = is(e2)) && void 0 !== t2 ? t2 : {}, o2 = new Headers();
  D(e2.headers, function(e3, t3) {
    o2.append(t3, e3);
  }), n2 && o2.append("Content-Type", n2);
  const a2 = e2.url;
  let c2 = null;
  if (u) {
    const t3 = new u();
    c2 = { signal: t3.signal, timeout: setTimeout(() => t3.abort(), e2.timeout) };
  }
  l(a2, { method: (null == e2 ? void 0 : e2.method) || "GET", headers: o2, keepalive: "POST" === e2.method && (r2 || 0) < 52428.8, body: s2, signal: null === (i2 = c2) || void 0 === i2 ? void 0 : i2.signal }).then((t3) => t3.text().then((i3) => {
    var n3;
    const s3 = { statusCode: t3.status, text: i3 };
    if (200 === t3.status)
      try {
        s3.json = JSON.parse(i3);
      } catch (e3) {
        T.error(e3);
      }
    null === (n3 = e2.callback) || void 0 === n3 || n3.call(e2, s3);
  })).catch((t3) => {
    var i3;
    T.error(t3), null === (i3 = e2.callback) || void 0 === i3 || i3.call(e2, { statusCode: 0, text: t3 });
  }).finally(() => c2 ? clearTimeout(c2.timeout) : null);
};
var rs = (e2) => {
  const t2 = ts(e2.url, { beacon: "1" });
  try {
    var i2;
    const { contentType: n2, body: s2 } = null !== (i2 = is(e2)) && void 0 !== i2 ? i2 : {}, o2 = "string" == typeof s2 ? new Blob([s2], { type: n2 }) : s2;
    r.sendBeacon(t2, o2);
  } catch {
  }
};
var os = [];
c && os.push({ transport: "XHR", method: ns }), l && os.push({ transport: "fetch", method: ss }), null != r && r.sendBeacon && os.push({ transport: "sendBeacon", method: rs });
var as = class {
  isPolling = false;
  pollIntervalMs = 3e3;
  queue = [];
  constructor(t2) {
    this.instance = t2, this.queue = [], this.areWeOnline = true, !S(e) && "onLine" in e.navigator && (this.areWeOnline = e.navigator.onLine, e.addEventListener("online", () => {
      this.areWeOnline = true, this.flush();
    }), e.addEventListener("offline", () => {
      this.areWeOnline = false;
    }));
  }
  retriableRequest(e2) {
    let { retriesPerformedSoFar: t2, ...i2 } = e2;
    P(t2) && t2 > 0 && (i2.url = ts(i2.url, { retry_count: t2 })), this.instance._send_request({ ...i2, callback: (e3) => {
      var n2;
      200 !== e3.statusCode && (e3.statusCode < 400 || e3.statusCode >= 500) && (null != t2 ? t2 : 0) < 10 ? this.enqueue({ retriesPerformedSoFar: t2, ...i2 }) : null === (n2 = i2.callback) || void 0 === n2 || n2.call(i2, e3);
    } });
  }
  enqueue(e2) {
    const t2 = e2.retriesPerformedSoFar || 0;
    e2.retriesPerformedSoFar = t2 + 1;
    const i2 = function(e3) {
      const t3 = 3e3 * 2 ** e3, i3 = t3 / 2, n3 = Math.min(18e5, t3), s3 = (Math.random() - 0.5) * (n3 - i3);
      return Math.ceil(n3 + s3);
    }(t2), n2 = Date.now() + i2;
    this.queue.push({ retryAt: n2, requestOptions: e2 });
    let s2 = `Enqueued failed request for retry in ${i2}`;
    navigator.onLine || (s2 += " (Browser is offline)"), T.warn(s2), this.isPolling || (this.isPolling = true, this.poll());
  }
  poll() {
    this.poller && clearTimeout(this.poller), this.poller = setTimeout(() => {
      this.areWeOnline && this.queue.length > 0 && this.flush(), this.poll();
    }, this.pollIntervalMs);
  }
  flush() {
    const e2 = Date.now(), t2 = [], i2 = this.queue.filter((i3) => i3.retryAt < e2 || (t2.push(i3), false));
    if (this.queue = t2, i2.length > 0)
      for (const { requestOptions: e3 } of i2)
        this.retriableRequest(e3);
  }
  unload() {
    this.poller && (clearTimeout(this.poller), this.poller = void 0);
    for (const { requestOptions: e2 } of this.queue)
      try {
        this.instance._send_request({ ...e2, transport: "sendBeacon" });
      } catch (e3) {
        T.error(e3);
      }
    this.queue = [];
  }
};
var ls = class {
  _sessionIdChangedHandlers = [];
  constructor(e2, t2, i2, n2) {
    var s2;
    this.config = e2, this.persistence = t2, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = i2 || ze, this._windowIdGenerator = n2 || ze;
    const r2 = e2.persistence_name || e2.token, o2 = e2.session_idle_timeout_seconds || 1800;
    if (this._sessionTimeoutMs = 1e3 * Ki(o2, 60, 1800, "session_idle_timeout_seconds"), this._window_id_storage_key = "ph_" + r2 + "_window_id", this._primary_window_exists_storage_key = "ph_" + r2 + "_primary_window_exists", this._canUseSessionStorage()) {
      const e3 = st.parse(this._window_id_storage_key), t3 = st.parse(this._primary_window_exists_storage_key);
      e3 && !t3 ? this._windowId = e3 : st.remove(this._window_id_storage_key), st.set(this._primary_window_exists_storage_key, true);
    }
    if (null !== (s2 = this.config.bootstrap) && void 0 !== s2 && s2.sessionID)
      try {
        const e3 = ((e4) => {
          const t3 = e4.replace(/-/g, "");
          if (32 !== t3.length)
            throw new Error("Not a valid UUID");
          if ("7" !== t3[12])
            throw new Error("Not a UUIDv7");
          return parseInt(t3.substring(0, 12), 16);
        })(this.config.bootstrap.sessionID);
        this._setSessionId(this.config.bootstrap.sessionID, (/* @__PURE__ */ new Date()).getTime(), e3);
      } catch (e3) {
        T.error("Invalid sessionID in bootstrap", e3);
      }
    this._listenToReloadWindow();
  }
  get sessionTimeoutMs() {
    return this._sessionTimeoutMs;
  }
  onSessionId(e2) {
    return S(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e2), this._sessionId && e2(this._sessionId, this._windowId), () => {
      this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((t2) => t2 !== e2);
    };
  }
  _canUseSessionStorage() {
    return "memory" !== this.config.persistence && !this.persistence.disabled && st.is_supported();
  }
  _setWindowId(e2) {
    e2 !== this._windowId && (this._windowId = e2, this._canUseSessionStorage() && st.set(this._window_id_storage_key, e2));
  }
  _getWindowId() {
    return this._windowId ? this._windowId : this._canUseSessionStorage() ? st.parse(this._window_id_storage_key) : null;
  }
  _setSessionId(e2, t2, i2) {
    e2 === this._sessionId && t2 === this._sessionActivityTimestamp && i2 === this._sessionStartTimestamp || (this._sessionStartTimestamp = i2, this._sessionActivityTimestamp = t2, this._sessionId = e2, this.persistence.register({ [_e]: [t2, e2, i2] }));
  }
  _getSessionId() {
    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
      return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
    const e2 = this.persistence.props[_e];
    return m(e2) && 2 === e2.length && e2.push(e2[0]), e2 || [0, null, 0];
  }
  resetSessionId() {
    this._setSessionId(null, null, null);
  }
  _listenToReloadWindow() {
    null == e || e.addEventListener("beforeunload", () => {
      this._canUseSessionStorage() && st.remove(this._primary_window_exists_storage_key);
    });
  }
  checkAndGetSessionAndWindowId() {
    let e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    const t2 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (/* @__PURE__ */ new Date()).getTime();
    let [i2, n2, s2] = this._getSessionId(), r2 = this._getWindowId();
    const o2 = P(s2) && s2 > 0 && Math.abs(t2 - s2) > 864e5;
    let a2 = false;
    const l2 = !n2, c2 = !e2 && Math.abs(t2 - i2) > this.sessionTimeoutMs;
    l2 || c2 || o2 ? (n2 = this._sessionIdGenerator(), r2 = this._windowIdGenerator(), T.info("[SessionId] new session ID generated", { sessionId: n2, windowId: r2, changeReason: { noSessionId: l2, activityTimeout: c2, sessionPastMaximumLength: o2 } }), s2 = t2, a2 = true) : r2 || (r2 = this._windowIdGenerator(), a2 = true);
    const u2 = 0 === i2 || !e2 || o2 ? t2 : i2, d2 = 0 === s2 ? (/* @__PURE__ */ new Date()).getTime() : s2;
    return this._setWindowId(r2), this._setSessionId(n2, u2, d2), a2 && this._sessionIdChangedHandlers.forEach((e3) => e3(n2, r2, a2 ? { noSessionId: l2, activityTimeout: c2, sessionPastMaximumLength: o2 } : void 0)), { sessionId: n2, windowId: r2, sessionStartTimestamp: d2, changeReason: a2 ? { noSessionId: l2, activityTimeout: c2, sessionPastMaximumLength: o2 } : void 0, lastActivityTimestamp: i2 };
  }
};
var cs;
!function(e2) {
  e2.US = "us", e2.EU = "eu", e2.CUSTOM = "custom";
}(cs || (cs = {}));
var us = "i.posthog.com";
var ds = class {
  _regionCache = {};
  constructor(e2) {
    this.instance = e2;
  }
  get apiHost() {
    const e2 = this.instance.config.api_host.trim().replace(/\/$/, "");
    return "https://app.posthog.com" === e2 ? "https://us.i.posthog.com" : e2;
  }
  get uiHost() {
    var e2;
    let t2 = null === (e2 = this.instance.config.ui_host) || void 0 === e2 ? void 0 : e2.replace(/\/$/, "");
    return t2 || (t2 = this.apiHost.replace(`.${us}`, ".posthog.com")), "https://app.posthog.com" === t2 ? "https://us.posthog.com" : t2;
  }
  get region() {
    return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = cs.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = cs.EU : this._regionCache[this.apiHost] = cs.CUSTOM), this._regionCache[this.apiHost];
  }
  endpointFor(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (t2 && (t2 = "/" === t2[0] ? t2 : `/${t2}`), "ui" === e2)
      return this.uiHost + t2;
    if (this.region === cs.CUSTOM)
      return this.apiHost + t2;
    const i2 = us + t2;
    switch (e2) {
      case "assets":
        return `https://${this.region}-assets.${i2}`;
      case "api":
        return `https://${this.region}.${i2}`;
    }
  }
};
var hs = "posthog-js";
function _s(e2) {
  let { organization: t2, projectId: i2, prefix: n2, severityAllowList: s2 = ["error"] } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return (r2) => {
    var o2, a2, l2, c2, u2;
    if (!("*" === s2 || s2.includes(r2.level)) || !e2.__loaded)
      return r2;
    r2.tags || (r2.tags = {});
    const d2 = e2.requestRouter.endpointFor("ui", `/project/${e2.config.token}/person/${e2.get_distinct_id()}`);
    r2.tags["PostHog Person URL"] = d2, e2.sessionRecordingStarted() && (r2.tags["PostHog Recording URL"] = e2.get_session_replay_url({ withTimestamp: true }));
    const h2 = (null === (o2 = r2.exception) || void 0 === o2 ? void 0 : o2.values) || [], _2 = { $exception_message: (null === (a2 = h2[0]) || void 0 === a2 ? void 0 : a2.value) || r2.message, $exception_type: null === (l2 = h2[0]) || void 0 === l2 ? void 0 : l2.type, $exception_personURL: d2, $exception_level: r2.level, $exception_list: h2, $sentry_event_id: r2.event_id, $sentry_exception: r2.exception, $sentry_exception_message: (null === (c2 = h2[0]) || void 0 === c2 ? void 0 : c2.value) || r2.message, $sentry_exception_type: null === (u2 = h2[0]) || void 0 === u2 ? void 0 : u2.type, $sentry_tags: r2.tags, $level: r2.level };
    return t2 && i2 && (_2.$sentry_url = (n2 || "https://sentry.io/organizations/") + t2 + "/issues/?project=" + i2 + "&query=" + r2.event_id), e2.exceptions.sendExceptionEvent(_2), r2;
  };
}
var ps = class {
  constructor(e2, t2, i2, n2, s2) {
    this.name = hs, this.setupOnce = function(r2) {
      r2(_s(e2, { organization: t2, projectId: i2, prefix: n2, severityAllowList: s2 }));
    };
  }
};
function gs(e2, t2) {
  const i2 = e2.config.segment;
  if (!i2)
    return t2();
  !function(e3, t3) {
    const i3 = e3.config.segment;
    if (!i3)
      return t3();
    const n2 = (i4) => {
      const n3 = () => i4.anonymousId() || ze();
      e3.config.get_device_id = n3, i4.id() && (e3.register({ distinct_id: i4.id(), $device_id: n3() }), e3.persistence.set_property(ke, "identified")), t3();
    }, s2 = i3.user();
    "then" in s2 && y(s2.then) ? s2.then((e4) => n2(e4)) : n2(s2);
  }(e2, () => {
    i2.register(((e3) => {
      Promise && Promise.resolve || T.warn("This browser does not have Promise support, and can not use the segment integration");
      const t3 = (t4, i3) => {
        var n2;
        if (!i3)
          return t4;
        t4.event.userId || t4.event.anonymousId === e3.get_distinct_id() || (T.info("Segment integration does not have a userId set, resetting PostHog"), e3.reset()), t4.event.userId && t4.event.userId !== e3.get_distinct_id() && (T.info("Segment integration has a userId set, identifying with PostHog"), e3.identify(t4.event.userId));
        const s2 = e3._calculate_event_properties(i3, null !== (n2 = t4.event.properties) && void 0 !== n2 ? n2 : {}, /* @__PURE__ */ new Date());
        return t4.event.properties = Object.assign({}, s2, t4.event.properties), t4;
      };
      return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: () => true, load: () => Promise.resolve(), track: (e4) => t3(e4, e4.event.event), page: (e4) => t3(e4, "$pageview"), identify: (e4) => t3(e4, "$identify"), screen: (e4) => t3(e4, "$screen") };
    })(e2)).then(() => {
      t2();
    });
  });
}
var fs = class {
  constructor(e2) {
    this._instance = e2;
  }
  doPageView(t2) {
    var i2;
    const n2 = this._previousPageViewProperties(t2);
    return this._currentPath = null !== (i2 = null == e ? void 0 : e.location.pathname) && void 0 !== i2 ? i2 : "", this._instance.scrollManager.resetContext(), this._prevPageviewTimestamp = t2, n2;
  }
  doPageLeave(e2) {
    return this._previousPageViewProperties(e2);
  }
  _previousPageViewProperties(e2) {
    const t2 = this._currentPath, i2 = this._prevPageviewTimestamp, n2 = this._instance.scrollManager.getContext();
    if (!i2)
      return {};
    let s2 = {};
    if (n2) {
      let { maxScrollHeight: e3, lastScrollY: t3, maxScrollY: i3, maxContentHeight: r2, lastContentY: o2, maxContentY: a2 } = n2;
      if (!(S(e3) || S(t3) || S(i3) || S(r2) || S(o2) || S(a2))) {
        e3 = Math.ceil(e3), t3 = Math.ceil(t3), i3 = Math.ceil(i3), r2 = Math.ceil(r2), o2 = Math.ceil(o2), a2 = Math.ceil(a2);
        s2 = { $prev_pageview_last_scroll: t3, $prev_pageview_last_scroll_percentage: e3 <= 1 ? 1 : Ki(t3 / e3, 0, 1), $prev_pageview_max_scroll: i3, $prev_pageview_max_scroll_percentage: e3 <= 1 ? 1 : Ki(i3 / e3, 0, 1), $prev_pageview_last_content: o2, $prev_pageview_last_content_percentage: r2 <= 1 ? 1 : Ki(o2 / r2, 0, 1), $prev_pageview_max_content: a2, $prev_pageview_max_content_percentage: r2 <= 1 ? 1 : Ki(a2 / r2, 0, 1) };
      }
    }
    return t2 && (s2.$prev_pageview_pathname = t2), i2 && (s2.$prev_pageview_duration = (e2.getTime() - i2.getTime()) / 1e3), s2;
  }
};
var vs;
var ms;
var ys;
!function(e2) {
  e2.Popover = "popover", e2.API = "api", e2.Widget = "widget";
}(vs || (vs = {})), function(e2) {
  e2.Open = "open", e2.MultipleChoice = "multiple_choice", e2.SingleChoice = "single_choice", e2.Rating = "rating", e2.Link = "link";
}(ms || (ms = {})), function(e2) {
  e2.NextQuestion = "next_question", e2.End = "end", e2.ResponseBased = "response_based", e2.SpecificQuestion = "specific_question";
}(ys || (ys = {}));
var bs = class {
  events = {};
  constructor() {
    this.events = {};
  }
  on(e2, t2) {
    return this.events[e2] || (this.events[e2] = []), this.events[e2].push(t2), () => {
      this.events[e2] = this.events[e2].filter((e3) => e3 !== t2);
    };
  }
  emit(e2, t2) {
    for (const i2 of this.events[e2] || [])
      i2(t2);
    for (const i2 of this.events["*"] || [])
      i2(e2, t2);
  }
};
var ws = class {
  _debugEventEmitter = new bs();
  constructor(e2) {
    this.instance = e2, this.actionEvents = /* @__PURE__ */ new Set(), this.actionRegistry = /* @__PURE__ */ new Set();
  }
  init() {
    var e2;
    if (!S(null === (e2 = this.instance) || void 0 === e2 ? void 0 : e2._addCaptureHook)) {
      var t2;
      const e3 = (e4, t3) => {
        this.on(e4, t3);
      };
      null === (t2 = this.instance) || void 0 === t2 || t2._addCaptureHook(e3);
    }
  }
  register(e2) {
    var t2, i2;
    if (!S(null === (t2 = this.instance) || void 0 === t2 ? void 0 : t2._addCaptureHook) && (e2.forEach((e3) => {
      var t3, i3;
      null === (t3 = this.actionRegistry) || void 0 === t3 || t3.add(e3), null === (i3 = e3.steps) || void 0 === i3 || i3.forEach((e4) => {
        var t4;
        null === (t4 = this.actionEvents) || void 0 === t4 || t4.add((null == e4 ? void 0 : e4.event) || "");
      });
    }), null !== (i2 = this.instance) && void 0 !== i2 && i2.autocapture)) {
      var n2;
      const t3 = /* @__PURE__ */ new Set();
      e2.forEach((e3) => {
        var i3;
        null === (i3 = e3.steps) || void 0 === i3 || i3.forEach((e4) => {
          null != e4 && e4.selector && t3.add(null == e4 ? void 0 : e4.selector);
        });
      }), null === (n2 = this.instance) || void 0 === n2 || n2.autocapture.setElementSelectors(t3);
    }
  }
  on(e2, t2) {
    var i2;
    null != t2 && 0 != e2.length && (this.actionEvents.has(e2) || this.actionEvents.has(null == t2 ? void 0 : t2.event)) && this.actionRegistry && (null === (i2 = this.actionRegistry) || void 0 === i2 ? void 0 : i2.size) > 0 && this.actionRegistry.forEach((e3) => {
      this.checkAction(t2, e3) && this._debugEventEmitter.emit("actionCaptured", e3.name);
    });
  }
  _addActionHook(e2) {
    this.onAction("actionCaptured", (t2) => e2(t2));
  }
  checkAction(e2, t2) {
    if (null == (null == t2 ? void 0 : t2.steps))
      return false;
    for (const i2 of t2.steps)
      if (this.checkStep(e2, i2))
        return true;
    return false;
  }
  onAction(e2, t2) {
    return this._debugEventEmitter.on(e2, t2);
  }
  checkStep = (e2, t2) => this.checkStepEvent(e2, t2) && this.checkStepUrl(e2, t2) && this.checkStepElement(e2, t2);
  checkStepEvent = (e2, t2) => null == t2 || !t2.event || (null == e2 ? void 0 : e2.event) === (null == t2 ? void 0 : t2.event);
  checkStepUrl(e2, t2) {
    if (null != t2 && t2.url) {
      var i2;
      const n2 = null == e2 || null === (i2 = e2.properties) || void 0 === i2 ? void 0 : i2.$current_url;
      if (!n2 || "string" != typeof n2)
        return false;
      if (!ws.matchString(n2, null == t2 ? void 0 : t2.url, (null == t2 ? void 0 : t2.url_matching) || "contains"))
        return false;
    }
    return true;
  }
  static matchString(t2, i2, n2) {
    switch (n2) {
      case "regex":
        return !!e && at(t2, i2);
      case "exact":
        return i2 === t2;
      case "contains":
        const n3 = ws.escapeStringRegexp(i2).replace(/_/g, ".").replace(/%/g, ".*");
        return at(t2, n3);
      default:
        return false;
    }
  }
  static escapeStringRegexp(e2) {
    return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  checkStepElement(e2, t2) {
    if (null != t2 && t2.href || null != t2 && t2.tag_name || null != t2 && t2.text) {
      if (!this.getElementsList(e2).some((e3) => !(null != t2 && t2.href && !ws.matchString(e3.href || "", null == t2 ? void 0 : t2.href, (null == t2 ? void 0 : t2.href_matching) || "exact")) && (null == t2 || !t2.tag_name || e3.tag_name === (null == t2 ? void 0 : t2.tag_name)) && !(null != t2 && t2.text && !ws.matchString(e3.text || "", null == t2 ? void 0 : t2.text, (null == t2 ? void 0 : t2.text_matching) || "exact") && !ws.matchString(e3.$el_text || "", null == t2 ? void 0 : t2.text, (null == t2 ? void 0 : t2.text_matching) || "exact"))))
        return false;
    }
    if (null != t2 && t2.selector) {
      var i2;
      const n2 = null == e2 || null === (i2 = e2.properties) || void 0 === i2 ? void 0 : i2.$element_selectors;
      if (!n2)
        return false;
      if (!n2.includes(null == t2 ? void 0 : t2.selector))
        return false;
    }
    return true;
  }
  getElementsList(e2) {
    return null == (null == e2 ? void 0 : e2.properties.$elements) ? [] : null == e2 ? void 0 : e2.properties.$elements;
  }
};
var _Ss = class {
  constructor(e2) {
    this.instance = e2, this.eventToSurveys = /* @__PURE__ */ new Map(), this.actionToSurveys = /* @__PURE__ */ new Map();
  }
  register(e2) {
    var t2;
    S(null === (t2 = this.instance) || void 0 === t2 ? void 0 : t2._addCaptureHook) || (this.setupEventBasedSurveys(e2), this.setupActionBasedSurveys(e2));
  }
  setupActionBasedSurveys(e2) {
    const t2 = e2.filter((e3) => {
      var t3, i2, n2, s2;
      return (null === (t3 = e3.conditions) || void 0 === t3 ? void 0 : t3.actions) && (null === (i2 = e3.conditions) || void 0 === i2 || null === (n2 = i2.actions) || void 0 === n2 || null === (s2 = n2.values) || void 0 === s2 ? void 0 : s2.length) > 0;
    });
    if (0 !== t2.length) {
      if (null == this.actionMatcher) {
        this.actionMatcher = new ws(this.instance), this.actionMatcher.init();
        const e3 = (e4) => {
          this.onAction(e4);
        };
        this.actionMatcher._addActionHook(e3);
      }
      t2.forEach((e3) => {
        var t3, i2, n2, s2, r2, o2, a2, l2, c2, u2;
        e3.conditions && null !== (t3 = e3.conditions) && void 0 !== t3 && t3.actions && null !== (i2 = e3.conditions) && void 0 !== i2 && null !== (n2 = i2.actions) && void 0 !== n2 && n2.values && (null === (s2 = e3.conditions) || void 0 === s2 || null === (r2 = s2.actions) || void 0 === r2 || null === (o2 = r2.values) || void 0 === o2 ? void 0 : o2.length) > 0 && (null === (a2 = this.actionMatcher) || void 0 === a2 || a2.register(e3.conditions.actions.values), null === (l2 = e3.conditions) || void 0 === l2 || null === (c2 = l2.actions) || void 0 === c2 || null === (u2 = c2.values) || void 0 === u2 || u2.forEach((t4) => {
          if (t4 && t4.name) {
            const i3 = this.actionToSurveys.get(t4.name);
            i3 && i3.push(e3.id), this.actionToSurveys.set(t4.name, i3 || [e3.id]);
          }
        }));
      });
    }
  }
  setupEventBasedSurveys(e2) {
    var t2;
    if (0 === e2.filter((e3) => {
      var t3, i2, n2, s2;
      return (null === (t3 = e3.conditions) || void 0 === t3 ? void 0 : t3.events) && (null === (i2 = e3.conditions) || void 0 === i2 || null === (n2 = i2.events) || void 0 === n2 || null === (s2 = n2.values) || void 0 === s2 ? void 0 : s2.length) > 0;
    }).length)
      return;
    null === (t2 = this.instance) || void 0 === t2 || t2._addCaptureHook((e3, t3) => {
      this.onEvent(e3, t3);
    }), e2.forEach((e3) => {
      var t3, i2, n2;
      null === (t3 = e3.conditions) || void 0 === t3 || null === (i2 = t3.events) || void 0 === i2 || null === (n2 = i2.values) || void 0 === n2 || n2.forEach((t4) => {
        if (t4 && t4.name) {
          const i3 = this.eventToSurveys.get(t4.name);
          i3 && i3.push(e3.id), this.eventToSurveys.set(t4.name, i3 || [e3.id]);
        }
      });
    });
  }
  onEvent(e2, t2) {
    var i2, n2;
    const s2 = (null === (i2 = this.instance) || void 0 === i2 || null === (n2 = i2.persistence) || void 0 === n2 ? void 0 : n2.props[Se]) || [];
    if (_Ss.SURVEY_SHOWN_EVENT_NAME == e2 && t2 && s2.length > 0) {
      var r2;
      const e3 = null == t2 || null === (r2 = t2.properties) || void 0 === r2 ? void 0 : r2.$survey_id;
      if (e3) {
        const t3 = s2.indexOf(e3);
        t3 >= 0 && (s2.splice(t3, 1), this._updateActivatedSurveys(s2));
      }
    } else
      this.eventToSurveys.has(e2) && this._updateActivatedSurveys(s2.concat(this.eventToSurveys.get(e2) || []));
  }
  onAction(e2) {
    var t2, i2;
    const n2 = (null === (t2 = this.instance) || void 0 === t2 || null === (i2 = t2.persistence) || void 0 === i2 ? void 0 : i2.props[Se]) || [];
    this.actionToSurveys.has(e2) && this._updateActivatedSurveys(n2.concat(this.actionToSurveys.get(e2) || []));
  }
  _updateActivatedSurveys(e2) {
    var t2, i2;
    null === (t2 = this.instance) || void 0 === t2 || null === (i2 = t2.persistence) || void 0 === i2 || i2.register({ [Se]: [...new Set(e2)] });
  }
  getSurveys() {
    var e2, t2;
    const i2 = null === (e2 = this.instance) || void 0 === e2 || null === (t2 = e2.persistence) || void 0 === t2 ? void 0 : t2.props[Se];
    return i2 || [];
  }
  getEventToSurveys() {
    return this.eventToSurveys;
  }
  _getActionMatcher() {
    return this.actionMatcher;
  }
};
var Ss = _Ss;
__publicField(Ss, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
var Es;
var ks;
var xs;
var Is;
var Ps;
var Fs;
var Rs;
var Cs;
var Ts = {};
var $s = [];
var As = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var Ms = Array.isArray;
function Ls(e2, t2) {
  for (var i2 in t2)
    e2[i2] = t2[i2];
  return e2;
}
function Ds(e2) {
  var t2 = e2.parentNode;
  t2 && t2.removeChild(e2);
}
function Os(e2, t2, i2, n2, s2) {
  var r2 = { type: e2, props: t2, key: i2, ref: n2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == s2 ? ++xs : s2, __i: -1, __u: 0 };
  return null == s2 && null != ks.vnode && ks.vnode(r2), r2;
}
function Ns(e2) {
  return e2.children;
}
function qs(e2, t2) {
  this.props = e2, this.context = t2;
}
function Bs(e2, t2) {
  if (null == t2)
    return e2.__ ? Bs(e2.__, e2.__i + 1) : null;
  for (var i2; t2 < e2.__k.length; t2++)
    if (null != (i2 = e2.__k[t2]) && null != i2.__e)
      return i2.__e;
  return "function" == typeof e2.type ? Bs(e2) : null;
}
function Hs(e2) {
  var t2, i2;
  if (null != (e2 = e2.__) && null != e2.__c) {
    for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++)
      if (null != (i2 = e2.__k[t2]) && null != i2.__e) {
        e2.__e = e2.__c.base = i2.__e;
        break;
      }
    return Hs(e2);
  }
}
function Us(e2) {
  (!e2.__d && (e2.__d = true) && Is.push(e2) && !Ws.__r++ || Ps !== ks.debounceRendering) && ((Ps = ks.debounceRendering) || Fs)(Ws);
}
function Ws() {
  var e2, t2, i2, n2, s2, r2, o2, a2, l2;
  for (Is.sort(Rs); e2 = Is.shift(); )
    e2.__d && (t2 = Is.length, n2 = void 0, r2 = (s2 = (i2 = e2).__v).__e, a2 = [], l2 = [], (o2 = i2.__P) && ((n2 = Ls({}, s2)).__v = s2.__v + 1, ks.vnode && ks.vnode(n2), Ks(o2, n2, s2, i2.__n, void 0 !== o2.ownerSVGElement, 32 & s2.__u ? [r2] : null, a2, null == r2 ? Bs(s2) : r2, !!(32 & s2.__u), l2), n2.__.__k[n2.__i] = n2, Zs(a2, n2, l2), n2.__e != r2 && Hs(n2)), Is.length > t2 && Is.sort(Rs));
  Ws.__r = 0;
}
function zs(e2, t2, i2, n2, s2, r2, o2, a2, l2, c2, u2) {
  var d2, h2, _2, p2, g2, f2 = n2 && n2.__k || $s, v2 = t2.length;
  for (i2.__d = l2, Vs(i2, t2, f2), l2 = i2.__d, d2 = 0; d2 < v2; d2++)
    null != (_2 = i2.__k[d2]) && "boolean" != typeof _2 && "function" != typeof _2 && (h2 = -1 === _2.__i ? Ts : f2[_2.__i] || Ts, _2.__i = d2, Ks(e2, _2, h2, s2, r2, o2, a2, l2, c2, u2), p2 = _2.__e, _2.ref && h2.ref != _2.ref && (h2.ref && tr(h2.ref, null, _2), u2.push(_2.ref, _2.__c || p2, _2)), null == g2 && null != p2 && (g2 = p2), 65536 & _2.__u || h2.__k === _2.__k ? l2 = Gs(_2, l2, e2) : "function" == typeof _2.type && void 0 !== _2.__d ? l2 = _2.__d : p2 && (l2 = p2.nextSibling), _2.__d = void 0, _2.__u &= -196609);
  i2.__d = l2, i2.__e = g2;
}
function Vs(e2, t2, i2) {
  var n2, s2, r2, o2, a2, l2 = t2.length, c2 = i2.length, u2 = c2, d2 = 0;
  for (e2.__k = [], n2 = 0; n2 < l2; n2++)
    null != (s2 = e2.__k[n2] = null == (s2 = t2[n2]) || "boolean" == typeof s2 || "function" == typeof s2 ? null : "string" == typeof s2 || "number" == typeof s2 || "bigint" == typeof s2 || s2.constructor == String ? Os(null, s2, null, null, s2) : Ms(s2) ? Os(Ns, { children: s2 }, null, null, null) : void 0 === s2.constructor && s2.__b > 0 ? Os(s2.type, s2.props, s2.key, s2.ref ? s2.ref : null, s2.__v) : s2) ? (s2.__ = e2, s2.__b = e2.__b + 1, a2 = js(s2, i2, o2 = n2 + d2, u2), s2.__i = a2, r2 = null, -1 !== a2 && (u2--, (r2 = i2[a2]) && (r2.__u |= 131072)), null == r2 || null === r2.__v ? (-1 == a2 && d2--, "function" != typeof s2.type && (s2.__u |= 65536)) : a2 !== o2 && (a2 === o2 + 1 ? d2++ : a2 > o2 ? u2 > l2 - o2 ? d2 += a2 - o2 : d2-- : d2 = a2 < o2 && a2 == o2 - 1 ? a2 - o2 : 0, a2 !== n2 + d2 && (s2.__u |= 65536))) : (r2 = i2[n2]) && null == r2.key && r2.__e && (r2.__e == e2.__d && (e2.__d = Bs(r2)), ir(r2, r2, false), i2[n2] = null, u2--);
  if (u2)
    for (n2 = 0; n2 < c2; n2++)
      null != (r2 = i2[n2]) && 0 == (131072 & r2.__u) && (r2.__e == e2.__d && (e2.__d = Bs(r2)), ir(r2, r2));
}
function Gs(e2, t2, i2) {
  var n2, s2;
  if ("function" == typeof e2.type) {
    for (n2 = e2.__k, s2 = 0; n2 && s2 < n2.length; s2++)
      n2[s2] && (n2[s2].__ = e2, t2 = Gs(n2[s2], t2, i2));
    return t2;
  }
  return e2.__e != t2 && (i2.insertBefore(e2.__e, t2 || null), t2 = e2.__e), t2 && t2.nextSibling;
}
function js(e2, t2, i2, n2) {
  var s2 = e2.key, r2 = e2.type, o2 = i2 - 1, a2 = i2 + 1, l2 = t2[i2];
  if (null === l2 || l2 && s2 == l2.key && r2 === l2.type)
    return i2;
  if (n2 > (null != l2 && 0 == (131072 & l2.__u) ? 1 : 0))
    for (; o2 >= 0 || a2 < t2.length; ) {
      if (o2 >= 0) {
        if ((l2 = t2[o2]) && 0 == (131072 & l2.__u) && s2 == l2.key && r2 === l2.type)
          return o2;
        o2--;
      }
      if (a2 < t2.length) {
        if ((l2 = t2[a2]) && 0 == (131072 & l2.__u) && s2 == l2.key && r2 === l2.type)
          return a2;
        a2++;
      }
    }
  return -1;
}
function Qs(e2, t2, i2) {
  "-" === t2[0] ? e2.setProperty(t2, null == i2 ? "" : i2) : e2[t2] = null == i2 ? "" : "number" != typeof i2 || As.test(t2) ? i2 : i2 + "px";
}
function Js(e2, t2, i2, n2, s2) {
  var r2;
  e:
    if ("style" === t2) {
      if ("string" == typeof i2)
        e2.style.cssText = i2;
      else {
        if ("string" == typeof n2 && (e2.style.cssText = n2 = ""), n2)
          for (t2 in n2)
            i2 && t2 in i2 || Qs(e2.style, t2, "");
        if (i2)
          for (t2 in i2)
            n2 && i2[t2] === n2[t2] || Qs(e2.style, t2, i2[t2]);
      }
    } else if ("o" === t2[0] && "n" === t2[1])
      r2 = t2 !== (t2 = t2.replace(/(PointerCapture)$|Capture$/, "$1")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + r2] = i2, i2 ? n2 ? i2.u = n2.u : (i2.u = Date.now(), e2.addEventListener(t2, r2 ? Xs : Ys, r2)) : e2.removeEventListener(t2, r2 ? Xs : Ys, r2);
    else {
      if (s2)
        t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== t2 && "height" !== t2 && "href" !== t2 && "list" !== t2 && "form" !== t2 && "tabIndex" !== t2 && "download" !== t2 && "rowSpan" !== t2 && "colSpan" !== t2 && "role" !== t2 && t2 in e2)
        try {
          e2[t2] = null == i2 ? "" : i2;
          break e;
        } catch (e3) {
        }
      "function" == typeof i2 || (null == i2 || false === i2 && "-" !== t2[4] ? e2.removeAttribute(t2) : e2.setAttribute(t2, i2));
    }
}
function Ys(e2) {
  var t2 = this.l[e2.type + false];
  if (e2.t) {
    if (e2.t <= t2.u)
      return;
  } else
    e2.t = Date.now();
  return t2(ks.event ? ks.event(e2) : e2);
}
function Xs(e2) {
  return this.l[e2.type + true](ks.event ? ks.event(e2) : e2);
}
function Ks(e2, t2, i2, n2, s2, r2, o2, a2, l2, c2) {
  var u2, d2, h2, _2, p2, g2, f2, v2, m2, y2, b2, w2, S2, E2, k2, x2 = t2.type;
  if (void 0 !== t2.constructor)
    return null;
  128 & i2.__u && (l2 = !!(32 & i2.__u), r2 = [a2 = t2.__e = i2.__e]), (u2 = ks.__b) && u2(t2);
  e:
    if ("function" == typeof x2)
      try {
        if (v2 = t2.props, m2 = (u2 = x2.contextType) && n2[u2.__c], y2 = u2 ? m2 ? m2.props.value : u2.__ : n2, i2.__c ? f2 = (d2 = t2.__c = i2.__c).__ = d2.__E : ("prototype" in x2 && x2.prototype.render ? t2.__c = d2 = new x2(v2, y2) : (t2.__c = d2 = new qs(v2, y2), d2.constructor = x2, d2.render = nr), m2 && m2.sub(d2), d2.props = v2, d2.state || (d2.state = {}), d2.context = y2, d2.__n = n2, h2 = d2.__d = true, d2.__h = [], d2._sb = []), null == d2.__s && (d2.__s = d2.state), null != x2.getDerivedStateFromProps && (d2.__s == d2.state && (d2.__s = Ls({}, d2.__s)), Ls(d2.__s, x2.getDerivedStateFromProps(v2, d2.__s))), _2 = d2.props, p2 = d2.state, d2.__v = t2, h2)
          null == x2.getDerivedStateFromProps && null != d2.componentWillMount && d2.componentWillMount(), null != d2.componentDidMount && d2.__h.push(d2.componentDidMount);
        else {
          if (null == x2.getDerivedStateFromProps && v2 !== _2 && null != d2.componentWillReceiveProps && d2.componentWillReceiveProps(v2, y2), !d2.__e && (null != d2.shouldComponentUpdate && false === d2.shouldComponentUpdate(v2, d2.__s, y2) || t2.__v === i2.__v)) {
            for (t2.__v !== i2.__v && (d2.props = v2, d2.state = d2.__s, d2.__d = false), t2.__e = i2.__e, t2.__k = i2.__k, t2.__k.forEach(function(e3) {
              e3 && (e3.__ = t2);
            }), b2 = 0; b2 < d2._sb.length; b2++)
              d2.__h.push(d2._sb[b2]);
            d2._sb = [], d2.__h.length && o2.push(d2);
            break e;
          }
          null != d2.componentWillUpdate && d2.componentWillUpdate(v2, d2.__s, y2), null != d2.componentDidUpdate && d2.__h.push(function() {
            d2.componentDidUpdate(_2, p2, g2);
          });
        }
        if (d2.context = y2, d2.props = v2, d2.__P = e2, d2.__e = false, w2 = ks.__r, S2 = 0, "prototype" in x2 && x2.prototype.render) {
          for (d2.state = d2.__s, d2.__d = false, w2 && w2(t2), u2 = d2.render(d2.props, d2.state, d2.context), E2 = 0; E2 < d2._sb.length; E2++)
            d2.__h.push(d2._sb[E2]);
          d2._sb = [];
        } else
          do {
            d2.__d = false, w2 && w2(t2), u2 = d2.render(d2.props, d2.state, d2.context), d2.state = d2.__s;
          } while (d2.__d && ++S2 < 25);
        d2.state = d2.__s, null != d2.getChildContext && (n2 = Ls(Ls({}, n2), d2.getChildContext())), h2 || null == d2.getSnapshotBeforeUpdate || (g2 = d2.getSnapshotBeforeUpdate(_2, p2)), zs(e2, Ms(k2 = null != u2 && u2.type === Ns && null == u2.key ? u2.props.children : u2) ? k2 : [k2], t2, i2, n2, s2, r2, o2, a2, l2, c2), d2.base = t2.__e, t2.__u &= -161, d2.__h.length && o2.push(d2), f2 && (d2.__E = d2.__ = null);
      } catch (e3) {
        t2.__v = null, l2 || null != r2 ? (t2.__e = a2, t2.__u |= l2 ? 160 : 32, r2[r2.indexOf(a2)] = null) : (t2.__e = i2.__e, t2.__k = i2.__k), ks.__e(e3, t2, i2);
      }
    else
      null == r2 && t2.__v === i2.__v ? (t2.__k = i2.__k, t2.__e = i2.__e) : t2.__e = er(i2.__e, t2, i2, n2, s2, r2, o2, l2, c2);
  (u2 = ks.diffed) && u2(t2);
}
function Zs(e2, t2, i2) {
  t2.__d = void 0;
  for (var n2 = 0; n2 < i2.length; n2++)
    tr(i2[n2], i2[++n2], i2[++n2]);
  ks.__c && ks.__c(t2, e2), e2.some(function(t3) {
    try {
      e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
        e3.call(t3);
      });
    } catch (e3) {
      ks.__e(e3, t3.__v);
    }
  });
}
function er(e2, t2, i2, n2, s2, r2, o2, a2, l2) {
  var c2, u2, d2, h2, _2, p2, g2, f2 = i2.props, v2 = t2.props, m2 = t2.type;
  if ("svg" === m2 && (s2 = true), null != r2) {
    for (c2 = 0; c2 < r2.length; c2++)
      if ((_2 = r2[c2]) && "setAttribute" in _2 == !!m2 && (m2 ? _2.localName === m2 : 3 === _2.nodeType)) {
        e2 = _2, r2[c2] = null;
        break;
      }
  }
  if (null == e2) {
    if (null === m2)
      return document.createTextNode(v2);
    e2 = s2 ? document.createElementNS("http://www.w3.org/2000/svg", m2) : document.createElement(m2, v2.is && v2), r2 = null, a2 = false;
  }
  if (null === m2)
    f2 === v2 || a2 && e2.data === v2 || (e2.data = v2);
  else {
    if (r2 = r2 && Es.call(e2.childNodes), f2 = i2.props || Ts, !a2 && null != r2)
      for (f2 = {}, c2 = 0; c2 < e2.attributes.length; c2++)
        f2[(_2 = e2.attributes[c2]).name] = _2.value;
    for (c2 in f2)
      _2 = f2[c2], "children" == c2 || ("dangerouslySetInnerHTML" == c2 ? d2 = _2 : "key" === c2 || c2 in v2 || Js(e2, c2, null, _2, s2));
    for (c2 in v2)
      _2 = v2[c2], "children" == c2 ? h2 = _2 : "dangerouslySetInnerHTML" == c2 ? u2 = _2 : "value" == c2 ? p2 = _2 : "checked" == c2 ? g2 = _2 : "key" === c2 || a2 && "function" != typeof _2 || f2[c2] === _2 || Js(e2, c2, _2, f2[c2], s2);
    if (u2)
      a2 || d2 && (u2.__html === d2.__html || u2.__html === e2.innerHTML) || (e2.innerHTML = u2.__html), t2.__k = [];
    else if (d2 && (e2.innerHTML = ""), zs(e2, Ms(h2) ? h2 : [h2], t2, i2, n2, s2 && "foreignObject" !== m2, r2, o2, r2 ? r2[0] : i2.__k && Bs(i2, 0), a2, l2), null != r2)
      for (c2 = r2.length; c2--; )
        null != r2[c2] && Ds(r2[c2]);
    a2 || (c2 = "value", void 0 !== p2 && (p2 !== e2[c2] || "progress" === m2 && !p2 || "option" === m2 && p2 !== f2[c2]) && Js(e2, c2, p2, f2[c2], false), c2 = "checked", void 0 !== g2 && g2 !== e2[c2] && Js(e2, c2, g2, f2[c2], false));
  }
  return e2;
}
function tr(e2, t2, i2) {
  try {
    "function" == typeof e2 ? e2(t2) : e2.current = t2;
  } catch (e3) {
    ks.__e(e3, i2);
  }
}
function ir(e2, t2, i2) {
  var n2, s2;
  if (ks.unmount && ks.unmount(e2), (n2 = e2.ref) && (n2.current && n2.current !== e2.__e || tr(n2, null, t2)), null != (n2 = e2.__c)) {
    if (n2.componentWillUnmount)
      try {
        n2.componentWillUnmount();
      } catch (e3) {
        ks.__e(e3, t2);
      }
    n2.base = n2.__P = null, e2.__c = void 0;
  }
  if (n2 = e2.__k)
    for (s2 = 0; s2 < n2.length; s2++)
      n2[s2] && ir(n2[s2], t2, i2 || "function" != typeof e2.type);
  i2 || null == e2.__e || Ds(e2.__e), e2.__ = e2.__e = e2.__d = void 0;
}
function nr(e2, t2, i2) {
  return this.constructor(e2, i2);
}
Es = $s.slice, ks = { __e: function(e2, t2, i2, n2) {
  for (var s2, r2, o2; t2 = t2.__; )
    if ((s2 = t2.__c) && !s2.__)
      try {
        if ((r2 = s2.constructor) && null != r2.getDerivedStateFromError && (s2.setState(r2.getDerivedStateFromError(e2)), o2 = s2.__d), null != s2.componentDidCatch && (s2.componentDidCatch(e2, n2 || {}), o2 = s2.__d), o2)
          return s2.__E = s2;
      } catch (t3) {
        e2 = t3;
      }
  throw e2;
} }, xs = 0, qs.prototype.setState = function(e2, t2) {
  var i2;
  i2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Ls({}, this.state), "function" == typeof e2 && (e2 = e2(Ls({}, i2), this.props)), e2 && Ls(i2, e2), null != e2 && this.__v && (t2 && this._sb.push(t2), Us(this));
}, qs.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), Us(this));
}, qs.prototype.render = Ns, Is = [], Fs = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Rs = function(e2, t2) {
  return e2.__v.__b - t2.__v.__b;
}, Ws.__r = 0, Cs = 0;
!function(e2, t2) {
  var i2 = { __c: t2 = "__cC" + Cs++, __: e2, Consumer: function(e3, t3) {
    return e3.children(t3);
  }, Provider: function(e3) {
    var i3, n2;
    return this.getChildContext || (i3 = [], (n2 = {})[t2] = this, this.getChildContext = function() {
      return n2;
    }, this.shouldComponentUpdate = function(e4) {
      this.props.value !== e4.value && i3.some(function(e5) {
        e5.__e = true, Us(e5);
      });
    }, this.sub = function(e4) {
      i3.push(e4);
      var t3 = e4.componentWillUnmount;
      e4.componentWillUnmount = function() {
        i3.splice(i3.indexOf(e4), 1), t3 && t3.call(e4);
      };
    }), e3.children;
  } };
  i2.Provider.__ = i2.Consumer.contextType = i2;
}({ isPreviewMode: false, previewPageIndex: 0, handleCloseSurveyPopup: () => {
}, isPopup: true });
var sr = "[Surveys]";
var rr = { icontains: (t2) => !!e && e.location.href.toLowerCase().indexOf(t2.toLowerCase()) > -1, not_icontains: (t2) => !!e && -1 === e.location.href.toLowerCase().indexOf(t2.toLowerCase()), regex: (t2) => !!e && at(e.location.href, t2), not_regex: (t2) => !!e && !at(e.location.href, t2), exact: (t2) => (null == e ? void 0 : e.location.href) === t2, is_not: (t2) => (null == e ? void 0 : e.location.href) !== t2 };
var or = class {
  constructor(e2) {
    this.instance = e2, this._surveyEventReceiver = null;
  }
  afterDecideResponse(e2) {
    this._decideServerResponse = !!e2.surveys, this.loadIfEnabled();
  }
  reset() {
    localStorage.removeItem("lastSeenSurveyDate");
    const e2 = (() => {
      const e3 = [];
      for (let t2 = 0; t2 < localStorage.length; t2++) {
        const i2 = localStorage.key(t2);
        null != i2 && i2.startsWith("seenSurvey_") && e3.push(i2);
      }
      return e3;
    })();
    e2.forEach((e3) => localStorage.removeItem(e3));
  }
  loadIfEnabled() {
    var e2;
    const t2 = null == h || null === (e2 = h.__PosthogExtensions__) || void 0 === e2 ? void 0 : e2.generateSurveys;
    var i2, n2;
    this.instance.config.disable_surveys || !this._decideServerResponse || t2 || (null == this._surveyEventReceiver && (this._surveyEventReceiver = new Ss(this.instance)), null === (i2 = h.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.loadExternalDependency) || void 0 === n2 || n2.call(i2, this.instance, "surveys", (e3) => {
      var t3, i3;
      if (e3)
        return T.error(sr, "Could not load surveys script", e3);
      this._surveyManager = null === (t3 = h.__PosthogExtensions__) || void 0 === t3 || null === (i3 = t3.generateSurveys) || void 0 === i3 ? void 0 : i3.call(t3, this.instance);
    }));
  }
  getSurveys(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this.instance.config.disable_surveys)
      return e2([]);
    null == this._surveyEventReceiver && (this._surveyEventReceiver = new Ss(this.instance));
    const i2 = this.instance.get_property(we);
    if (i2 && !t2)
      return e2(i2);
    this.instance._send_request({ url: this.instance.requestRouter.endpointFor("api", `/api/surveys/?token=${this.instance.config.token}`), method: "GET", transport: "XHR", callback: (t3) => {
      var i3;
      if (200 !== t3.statusCode || !t3.json)
        return e2([]);
      const n2 = t3.json.surveys || [], s2 = n2.filter((e3) => {
        var t4, i4, n3, s3, r3, o2, a2, l2, c2, u2, d2, h2;
        return (null === (t4 = e3.conditions) || void 0 === t4 ? void 0 : t4.events) && (null === (i4 = e3.conditions) || void 0 === i4 || null === (n3 = i4.events) || void 0 === n3 ? void 0 : n3.values) && (null === (s3 = e3.conditions) || void 0 === s3 || null === (r3 = s3.events) || void 0 === r3 || null === (o2 = r3.values) || void 0 === o2 ? void 0 : o2.length) > 0 || (null === (a2 = e3.conditions) || void 0 === a2 ? void 0 : a2.actions) && (null === (l2 = e3.conditions) || void 0 === l2 || null === (c2 = l2.actions) || void 0 === c2 ? void 0 : c2.values) && (null === (u2 = e3.conditions) || void 0 === u2 || null === (d2 = u2.actions) || void 0 === d2 || null === (h2 = d2.values) || void 0 === h2 ? void 0 : h2.length) > 0;
      });
      var r2;
      s2.length > 0 && (null === (r2 = this._surveyEventReceiver) || void 0 === r2 || r2.register(s2));
      return null === (i3 = this.instance.persistence) || void 0 === i3 || i3.register({ [we]: n2 }), e2(n2);
    } });
  }
  getActiveMatchingSurveys(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.getSurveys((t3) => {
      var i2;
      const n2 = t3.filter((e3) => !(!e3.start_date || e3.end_date)).filter((e3) => {
        var t4, i3, n3, s3;
        if (!e3.conditions)
          return true;
        const r3 = null === (t4 = e3.conditions) || void 0 === t4 || !t4.url || rr[null !== (i3 = null === (n3 = e3.conditions) || void 0 === n3 ? void 0 : n3.urlMatchType) && void 0 !== i3 ? i3 : "icontains"](e3.conditions.url), a2 = null === (s3 = e3.conditions) || void 0 === s3 || !s3.selector || (null == o ? void 0 : o.querySelector(e3.conditions.selector));
        return r3 && a2;
      }), s2 = null === (i2 = this._surveyEventReceiver) || void 0 === i2 ? void 0 : i2.getSurveys(), r2 = n2.filter((e3) => {
        var t4, i3, n3, r3, o2, a2, l2, c2, u2, d2;
        if (!e3.linked_flag_key && !e3.targeting_flag_key && !e3.internal_targeting_flag_key)
          return true;
        const h2 = !e3.linked_flag_key || this.instance.featureFlags.isFeatureEnabled(e3.linked_flag_key), _2 = !e3.targeting_flag_key || this.instance.featureFlags.isFeatureEnabled(e3.targeting_flag_key), p2 = (null === (t4 = e3.conditions) || void 0 === t4 ? void 0 : t4.events) && (null === (i3 = e3.conditions) || void 0 === i3 || null === (n3 = i3.events) || void 0 === n3 ? void 0 : n3.values) && (null === (r3 = e3.conditions) || void 0 === r3 || null === (o2 = r3.events) || void 0 === o2 ? void 0 : o2.values.length) > 0, g2 = (null === (a2 = e3.conditions) || void 0 === a2 ? void 0 : a2.actions) && (null === (l2 = e3.conditions) || void 0 === l2 || null === (c2 = l2.actions) || void 0 === c2 ? void 0 : c2.values) && (null === (u2 = e3.conditions) || void 0 === u2 || null === (d2 = u2.actions) || void 0 === d2 ? void 0 : d2.values.length) > 0, f2 = !p2 && !g2 || (null == s2 ? void 0 : s2.includes(e3.id)), v2 = this._canActivateRepeatedly(e3), m2 = !(e3.internal_targeting_flag_key && !v2) || this.instance.featureFlags.isFeatureEnabled(e3.internal_targeting_flag_key);
        return h2 && _2 && m2 && f2;
      });
      return e2(r2);
    }, t2);
  }
  getNextSurveyStep(e2, t2, i2) {
    var n2;
    const s2 = e2.questions[t2], r2 = t2 + 1;
    if (null === (n2 = s2.branching) || void 0 === n2 || !n2.type)
      return t2 === e2.questions.length - 1 ? ys.End : r2;
    if (s2.branching.type === ys.End)
      return ys.End;
    if (s2.branching.type === ys.SpecificQuestion) {
      if (Number.isInteger(s2.branching.index))
        return s2.branching.index;
    } else if (s2.branching.type === ys.ResponseBased) {
      if (s2.type === ms.SingleChoice) {
        var o2, a2;
        const e3 = s2.choices.indexOf(`${i2}`);
        if (null !== (o2 = s2.branching) && void 0 !== o2 && null !== (a2 = o2.responseValues) && void 0 !== a2 && a2.hasOwnProperty(e3)) {
          const t3 = s2.branching.responseValues[e3];
          return Number.isInteger(t3) ? t3 : t3 === ys.End ? ys.End : r2;
        }
      } else if (s2.type === ms.Rating) {
        var l2, c2;
        if ("number" != typeof i2 || !Number.isInteger(i2))
          throw new Error("The response type must be an integer");
        const e3 = function(e4, t3) {
          if (3 === t3) {
            if (e4 < 1 || e4 > 3)
              throw new Error("The response must be in range 1-3");
            return 1 === e4 ? "negative" : 2 === e4 ? "neutral" : "positive";
          }
          if (5 === t3) {
            if (e4 < 1 || e4 > 5)
              throw new Error("The response must be in range 1-5");
            return e4 <= 2 ? "negative" : 3 === e4 ? "neutral" : "positive";
          }
          if (7 === t3) {
            if (e4 < 1 || e4 > 7)
              throw new Error("The response must be in range 1-7");
            return e4 <= 3 ? "negative" : 4 === e4 ? "neutral" : "positive";
          }
          if (10 === t3) {
            if (e4 < 0 || e4 > 10)
              throw new Error("The response must be in range 0-10");
            return e4 <= 6 ? "detractors" : e4 <= 8 ? "passives" : "promoters";
          }
          throw new Error("The scale must be one of: 3, 5, 7, 10");
        }(i2, s2.scale);
        if (null !== (l2 = s2.branching) && void 0 !== l2 && null !== (c2 = l2.responseValues) && void 0 !== c2 && c2.hasOwnProperty(e3)) {
          const t3 = s2.branching.responseValues[e3];
          return Number.isInteger(t3) ? t3 : t3 === ys.End ? ys.End : r2;
        }
      }
      return r2;
    }
    return T.warn(sr, "Falling back to next question index due to unexpected branching type"), r2;
  }
  _canActivateRepeatedly(e2) {
    var t2;
    return I(null === (t2 = h.__PosthogExtensions__) || void 0 === t2 ? void 0 : t2.canActivateRepeatedly) ? (T.warn(sr, "canActivateRepeatedly is not defined, must init before calling"), false) : h.__PosthogExtensions__.canActivateRepeatedly(e2);
  }
  canRenderSurvey(e2) {
    I(this._surveyManager) ? T.warn(sr, "canActivateRepeatedly is not defined, must init before calling") : this.getSurveys((t2) => {
      const i2 = t2.filter((t3) => t3.id === e2)[0];
      this._surveyManager.canRenderSurvey(i2);
    });
  }
  renderSurvey(e2, t2) {
    I(this._surveyManager) ? T.warn(sr, "canActivateRepeatedly is not defined, must init before calling") : this.getSurveys((i2) => {
      const n2 = i2.filter((t3) => t3.id === e2)[0];
      this._surveyManager.renderSurvey(n2, null == o ? void 0 : o.querySelector(t2));
    });
  }
};
var ar = class {
  serverLimits = {};
  lastEventRateLimited = false;
  constructor(e2) {
    var t2, i2;
    this.instance = e2, this.captureEventsPerSecond = (null === (t2 = e2.config.rate_limiting) || void 0 === t2 ? void 0 : t2.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null === (i2 = e2.config.rate_limiting) || void 0 === i2 ? void 0 : i2.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(true).isRateLimited;
  }
  clientRateLimitContext() {
    var e2, t2, i2;
    let n2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    const s2 = (/* @__PURE__ */ new Date()).getTime(), r2 = null !== (e2 = null === (t2 = this.instance.persistence) || void 0 === t2 ? void 0 : t2.get_property(Ie)) && void 0 !== e2 ? e2 : { tokens: this.captureEventsBurstLimit, last: s2 };
    r2.tokens += (s2 - r2.last) / 1e3 * this.captureEventsPerSecond, r2.last = s2, r2.tokens > this.captureEventsBurstLimit && (r2.tokens = this.captureEventsBurstLimit);
    const o2 = r2.tokens < 1;
    return o2 || n2 || (r2.tokens = Math.max(0, r2.tokens - 1)), !o2 || this.lastEventRateLimited || n2 || this.instance.capture("$$client_ingestion_warning", { $$client_ingestion_warning_message: `posthog-js client rate limited. Config is set to ${this.captureEventsPerSecond} events per second and ${this.captureEventsBurstLimit} events burst limit.` }, { skip_client_rate_limiting: true }), this.lastEventRateLimited = o2, null === (i2 = this.instance.persistence) || void 0 === i2 || i2.set_property(Ie, r2), { isRateLimited: o2, remainingTokens: r2.tokens };
  }
  isServerRateLimited(e2) {
    const t2 = this.serverLimits[e2 || "events"] || false;
    return false !== t2 && (/* @__PURE__ */ new Date()).getTime() < t2;
  }
  checkForLimiting = (e2) => {
    const t2 = e2.text;
    if (t2 && t2.length)
      try {
        const e3 = JSON.parse(t2);
        (e3.quota_limited || []).forEach((e4) => {
          T.info(`[RateLimiter] ${e4 || "events"} is quota limited.`), this.serverLimits[e4] = (/* @__PURE__ */ new Date()).getTime() + 6e4;
        });
      } catch (e3) {
        return void T.warn(`[RateLimiter] could not rate limit - continuing. Error: "${null == e3 ? void 0 : e3.message}"`, { text: t2 });
      }
  };
};
var lr = () => ({ initialPathName: (null == a ? void 0 : a.pathname) || "", referringDomain: li.referringDomain(), ...li.campaignParams() });
var cr = class {
  constructor(e2, t2, i2) {
    this._sessionIdManager = e2, this._persistence = t2, this._sessionSourceParamGenerator = i2 || lr, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
  }
  _getStoredProps() {
    return this._persistence.props[xe];
  }
  _onSessionIdCallback = (e2) => {
    const t2 = this._getStoredProps();
    if (t2 && t2.sessionId === e2)
      return;
    const i2 = { sessionId: e2, props: this._sessionSourceParamGenerator() };
    this._persistence.register({ [xe]: i2 });
  };
  getSessionProps() {
    var e2;
    const t2 = null === (e2 = this._getStoredProps()) || void 0 === e2 ? void 0 : e2.props;
    return t2 ? { $client_session_initial_referring_host: t2.referringDomain, $client_session_initial_pathname: t2.initialPathName, $client_session_initial_utm_source: t2.utm_source, $client_session_initial_utm_campaign: t2.utm_campaign, $client_session_initial_utm_medium: t2.utm_medium, $client_session_initial_utm_content: t2.utm_content, $client_session_initial_utm_term: t2.utm_term } : {};
  }
};
var ur = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "headlesschrome", "cypress", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"];
var dr = function(e2, t2) {
  if (!e2)
    return false;
  const i2 = e2.toLowerCase();
  return ur.concat(t2 || []).some((e3) => {
    const t3 = e3.toLowerCase();
    return -1 !== i2.indexOf(t3);
  });
};
var hr = function(e2, t2) {
  if (!e2)
    return false;
  const i2 = e2.userAgent;
  if (i2 && dr(i2, t2))
    return true;
  try {
    const i3 = null == e2 ? void 0 : e2.userAgentData;
    if (null != i3 && i3.brands && i3.brands.some((e3) => dr(null == e3 ? void 0 : e3.brand, t2)))
      return true;
  } catch {
  }
  return !!e2.webdriver;
};
var _r = class {
  constructor() {
    this.clicks = [];
  }
  isRageClick(e2, t2, i2) {
    const n2 = this.clicks[this.clicks.length - 1];
    if (n2 && Math.abs(e2 - n2.x) + Math.abs(t2 - n2.y) < 30 && i2 - n2.timestamp < 1e3) {
      if (this.clicks.push({ x: e2, y: t2, timestamp: i2 }), 3 === this.clicks.length)
        return true;
    } else
      this.clicks = [{ x: e2, y: t2, timestamp: i2 }];
    return false;
  }
};
var pr = class {
  rageclicks = new _r();
  _enabledServerSide = false;
  _initialized = false;
  _flushInterval = null;
  constructor(t2) {
    var i2;
    this.instance = t2, this._enabledServerSide = !(null === (i2 = this.instance.persistence) || void 0 === i2 || !i2.props[te]), null == e || e.addEventListener("beforeunload", () => {
      this.flush();
    });
  }
  get flushIntervalMilliseconds() {
    let e2 = 5e3;
    return b(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e2 = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e2;
  }
  get isEnabled() {
    return S(this.instance.config.capture_heatmaps) ? S(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : false !== this.instance.config.capture_heatmaps;
  }
  startIfEnabled() {
    if (this.isEnabled) {
      if (this._initialized)
        return;
      T.info("[heatmaps] starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds);
    } else {
      var e2;
      clearInterval(null !== (e2 = this._flushInterval) && void 0 !== e2 ? e2 : void 0), this.getAndClearBuffer();
    }
  }
  afterDecideResponse(e2) {
    const t2 = !!e2.heatmaps;
    this.instance.persistence && this.instance.persistence.register({ [te]: t2 }), this._enabledServerSide = t2, this.startIfEnabled();
  }
  getAndClearBuffer() {
    const e2 = this.buffer;
    return this.buffer = void 0, e2;
  }
  _setupListeners() {
    e && o && (G(o, "click", (t2) => this._onClick(t2 || (null == e ? void 0 : e.event)), false, true), G(o, "mousemove", (t2) => this._onMouseMove(t2 || (null == e ? void 0 : e.event)), false, true), this._initialized = true);
  }
  _getProperties(t2, i2) {
    const n2 = this.instance.scrollManager.scrollY(), s2 = this.instance.scrollManager.scrollX(), r2 = this.instance.scrollManager.scrollElement(), o2 = function(t3, i3, n3) {
      let s3 = t3;
      for (; s3 && fi(s3) && !vi(s3, "body"); ) {
        if (s3 === n3)
          return false;
        if (N(i3, null == e ? void 0 : e.getComputedStyle(s3).position))
          return true;
        s3 = Pi(s3);
      }
      return false;
    }(xi(t2), ["fixed", "sticky"], r2);
    return { x: t2.clientX + (o2 ? 0 : s2), y: t2.clientY + (o2 ? 0 : n2), target_fixed: o2, type: i2 };
  }
  _onClick(e2) {
    var t2;
    if (gi(e2.target))
      return;
    const i2 = this._getProperties(e2, "click");
    null !== (t2 = this.rageclicks) && void 0 !== t2 && t2.isRageClick(e2.clientX, e2.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._capture({ ...i2, type: "rageclick" }), this._capture(i2);
  }
  _onMouseMove(e2) {
    gi(e2.target) || (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(() => {
      this._capture(this._getProperties(e2, "mousemove"));
    }, 500));
  }
  _capture(t2) {
    if (!e)
      return;
    const i2 = e.location.href;
    this.buffer = this.buffer || {}, this.buffer[i2] || (this.buffer[i2] = []), this.buffer[i2].push(t2);
  }
  flush() {
    this.buffer && !w(this.buffer) && this.instance.capture("$$heatmap", { $heatmap_data: this.getAndClearBuffer() });
  }
};
var gr = class {
  constructor(e2) {
    this.instance = e2;
  }
  getContext() {
    return this.context;
  }
  resetContext() {
    const e2 = this.context;
    return setTimeout(this._updateScrollData, 0), e2;
  }
  _updateScrollData = () => {
    var e2, t2, i2, n2;
    this.context || (this.context = {});
    const s2 = this.scrollElement(), r2 = this.scrollY(), o2 = s2 ? Math.max(0, s2.scrollHeight - s2.clientHeight) : 0, a2 = r2 + ((null == s2 ? void 0 : s2.clientHeight) || 0), l2 = (null == s2 ? void 0 : s2.scrollHeight) || 0;
    this.context.lastScrollY = Math.ceil(r2), this.context.maxScrollY = Math.max(r2, null !== (e2 = this.context.maxScrollY) && void 0 !== e2 ? e2 : 0), this.context.maxScrollHeight = Math.max(o2, null !== (t2 = this.context.maxScrollHeight) && void 0 !== t2 ? t2 : 0), this.context.lastContentY = a2, this.context.maxContentY = Math.max(a2, null !== (i2 = this.context.maxContentY) && void 0 !== i2 ? i2 : 0), this.context.maxContentHeight = Math.max(l2, null !== (n2 = this.context.maxContentHeight) && void 0 !== n2 ? n2 : 0);
  };
  startMeasuringScrollPosition() {
    null == e || e.addEventListener("scroll", this._updateScrollData, true), null == e || e.addEventListener("scrollend", this._updateScrollData, true), null == e || e.addEventListener("resize", this._updateScrollData);
  }
  scrollElement() {
    if (!this.instance.config.scroll_root_selector)
      return null == e ? void 0 : e.document.documentElement;
    {
      const t2 = m(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector];
      for (const i2 of t2) {
        const t3 = null == e ? void 0 : e.document.querySelector(i2);
        if (t3)
          return t3;
      }
    }
  }
  scrollY() {
    if (this.instance.config.scroll_root_selector) {
      const e2 = this.scrollElement();
      return e2 && e2.scrollTop || 0;
    }
    return e && (e.scrollY || e.pageYOffset || e.document.documentElement.scrollTop) || 0;
  }
  scrollX() {
    if (this.instance.config.scroll_root_selector) {
      const e2 = this.scrollElement();
      return e2 && e2.scrollLeft || 0;
    }
    return e && (e.scrollX || e.pageXOffset || e.document.documentElement.scrollLeft) || 0;
  }
};
var fr = "$copy_autocapture";
function vr(e2, t2) {
  return t2.length > e2 ? t2.slice(0, e2) + "..." : t2;
}
function mr(e2) {
  if (e2.previousElementSibling)
    return e2.previousElementSibling;
  let t2 = e2;
  do {
    t2 = t2.previousSibling;
  } while (t2 && !fi(t2));
  return t2;
}
function yr(e2, t2, i2, n2) {
  const s2 = e2.tagName.toLowerCase(), r2 = { tag_name: s2 };
  Ii.indexOf(s2) > -1 && !i2 && ("a" === s2.toLowerCase() || "button" === s2.toLowerCase() ? r2.$el_text = vr(1024, Ni(e2)) : r2.$el_text = vr(1024, ki(e2)));
  const o2 = Si(e2);
  o2.length > 0 && (r2.classes = o2.filter(function(e3) {
    return "" !== e3;
  })), D(e2.attributes, function(i3) {
    var s3;
    if ((!Ci(e2) || -1 !== ["name", "id", "class", "aria-label"].indexOf(i3.name)) && (null == n2 || !n2.includes(i3.name)) && !t2 && Oi(i3.value) && (s3 = i3.name, !E(s3) || "_ngcontent" !== s3.substring(0, 10) && "_nghost" !== s3.substring(0, 7))) {
      let e3 = i3.value;
      "class" === i3.name && (e3 = bi(e3).join(" ")), r2["attr__" + i3.name] = vr(1024, e3);
    }
  });
  let a2 = 1, l2 = 1, c2 = e2;
  for (; c2 = mr(c2); )
    a2++, c2.tagName === e2.tagName && l2++;
  return r2.nth_child = a2, r2.nth_of_type = l2, r2;
}
function br(t2, i2) {
  var n2, s2;
  let { e: r2, maskAllElementAttributes: o2, maskAllText: a2, elementAttributeIgnoreList: l2, elementsChainAsString: c2 } = i2;
  const u2 = [t2];
  let d2 = t2;
  for (; d2.parentNode && !vi(d2, "body"); )
    yi(d2.parentNode) ? (u2.push(d2.parentNode.host), d2 = d2.parentNode.host) : (u2.push(d2.parentNode), d2 = d2.parentNode);
  const h2 = [], _2 = {};
  let p2, g2 = false, f2 = false;
  if (D(u2, (e2) => {
    const t3 = Ri(e2);
    "a" === e2.tagName.toLowerCase() && (g2 = e2.getAttribute("href"), g2 = t3 && g2 && Oi(g2) && g2);
    N(Si(e2), "ph-no-capture") && (f2 = true), h2.push(yr(e2, o2, a2, l2));
    const i3 = function(e3) {
      if (!Ri(e3))
        return {};
      const t4 = {};
      return D(e3.attributes, function(e4) {
        if (e4.name && 0 === e4.name.indexOf("data-ph-capture-attribute")) {
          const i4 = e4.name.replace("data-ph-capture-attribute-", ""), n3 = e4.value;
          i4 && n3 && Oi(n3) && (t4[i4] = n3);
        }
      }), t4;
    }(e2);
    O(_2, i3);
  }), f2)
    return { props: {}, explicitNoCapture: f2 };
  if (a2 || ("a" === t2.tagName.toLowerCase() || "button" === t2.tagName.toLowerCase() ? h2[0].$el_text = Ni(t2) : h2[0].$el_text = ki(t2)), g2) {
    var v2, m2;
    h2[0].attr__href = g2;
    const t3 = null === (v2 = ot(g2)) || void 0 === v2 ? void 0 : v2.host, i3 = null == e || null === (m2 = e.location) || void 0 === m2 ? void 0 : m2.host;
    t3 && i3 && t3 !== i3 && (p2 = g2);
  }
  return { props: O({ $event_type: r2.type, $ce_version: 1 }, c2 ? { $elements_chain: Bi(h2) } : { $elements: h2 }, null !== (n2 = h2[0]) && void 0 !== n2 && n2.$el_text ? { $el_text: null === (s2 = h2[0]) || void 0 === s2 ? void 0 : s2.$el_text } : {}, p2 && "click" === r2.type ? { $external_click_url: p2 } : {}, _2) };
}
var wr = class {
  _initialized = false;
  _isDisabledServerSide = null;
  rageclicks = new _r();
  _elementsChainAsString = false;
  constructor(e2) {
    this.instance = e2, this._elementSelectors = null;
  }
  get config() {
    var e2, t2;
    const i2 = b(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
    return i2.url_allowlist = null === (e2 = i2.url_allowlist) || void 0 === e2 ? void 0 : e2.map((e3) => new RegExp(e3)), i2.url_ignorelist = null === (t2 = i2.url_ignorelist) || void 0 === t2 ? void 0 : t2.map((e3) => new RegExp(e3)), i2;
  }
  _addDomEventHandlers() {
    if (!this.isBrowserSupported())
      return void T.info("Disabling Automatic Event Collection because this browser is not supported");
    if (!e || !o)
      return;
    const t2 = (t3) => {
      t3 = t3 || (null == e ? void 0 : e.event);
      try {
        this._captureEvent(t3);
      } catch (e2) {
        T.error("Failed to capture event", e2);
      }
    }, i2 = (t3) => {
      t3 = t3 || (null == e ? void 0 : e.event), this._captureEvent(t3, fr);
    };
    G(o, "submit", t2, false, true), G(o, "change", t2, false, true), G(o, "click", t2, false, true), this.config.capture_copied_text && (G(o, "copy", i2, false, true), G(o, "cut", i2, false, true));
  }
  startIfEnabled() {
    this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = true);
  }
  afterDecideResponse(e2) {
    e2.elementsChainAsString && (this._elementsChainAsString = e2.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({ [ee]: !!e2.autocapture_opt_out }), this._isDisabledServerSide = !!e2.autocapture_opt_out, this.startIfEnabled();
  }
  setElementSelectors(e2) {
    this._elementSelectors = e2;
  }
  getElementSelectors(e2) {
    var t2;
    const i2 = [];
    return null === (t2 = this._elementSelectors) || void 0 === t2 || t2.forEach((t3) => {
      const n2 = null == o ? void 0 : o.querySelectorAll(t3);
      null == n2 || n2.forEach((n3) => {
        e2 === n3 && i2.push(t3);
      });
    }), i2;
  }
  get isEnabled() {
    var e2, t2;
    const i2 = null === (e2 = this.instance.persistence) || void 0 === e2 ? void 0 : e2.props[ee], n2 = this._isDisabledServerSide;
    if (x(n2) && !F(i2) && !this.instance.config.advanced_disable_decide)
      return false;
    const s2 = null !== (t2 = this._isDisabledServerSide) && void 0 !== t2 ? t2 : !!i2;
    return !!this.instance.config.autocapture && !s2;
  }
  _captureEvent(t2) {
    let i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
    if (!this.isEnabled)
      return;
    let n2 = xi(t2);
    var s2;
    (mi(n2) && (n2 = n2.parentNode || null), "$autocapture" === i2 && "click" === t2.type && t2 instanceof MouseEvent) && this.instance.config.rageclick && null !== (s2 = this.rageclicks) && void 0 !== s2 && s2.isRageClick(t2.clientX, t2.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._captureEvent(t2, "$rageclick");
    const r2 = i2 === fr;
    if (n2 && Fi(n2, t2, this.config, r2, r2 ? ["copy", "cut"] : void 0)) {
      const { props: s3, explicitNoCapture: r3 } = br(n2, { e: t2, maskAllElementAttributes: this.instance.config.mask_all_element_attributes, maskAllText: this.instance.config.mask_all_text, elementAttributeIgnoreList: this.config.element_attribute_ignorelist, elementsChainAsString: this._elementsChainAsString });
      if (r3)
        return false;
      const a2 = this.getElementSelectors(n2);
      if (a2 && a2.length > 0 && (s3.$element_selectors = a2), i2 === fr) {
        var o2;
        const i3 = Ei(null == e || null === (o2 = e.getSelection()) || void 0 === o2 ? void 0 : o2.toString()), n3 = t2.type || "clipboard";
        if (!i3)
          return false;
        s3.$selected_content = i3, s3.$copy_type = n3;
      }
      return this.instance.capture(i2, s3), true;
    }
  }
  isBrowserSupported() {
    return y(null == o ? void 0 : o.querySelectorAll);
  }
};
var Sr = class {
  _restoreXHRPatch = void 0;
  _restoreFetchPatch = void 0;
  constructor(e2) {
    this.instance = e2;
  }
  _loadScript(e2) {
    var t2, i2, n2;
    null !== (t2 = h.__PosthogExtensions__) && void 0 !== t2 && t2.tracingHeadersPatchFns && e2(), null === (i2 = h.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.loadExternalDependency) || void 0 === n2 || n2.call(i2, this.instance, "tracing-headers", (t3) => {
      if (t3)
        return T.error("[TRACING-HEADERS] failed to load script", t3);
      e2();
    });
  }
  startIfEnabledOrStop() {
    var e2, t2;
    this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e2 = this._restoreXHRPatch) || void 0 === e2 || e2.call(this), null === (t2 = this._restoreFetchPatch) || void 0 === t2 || t2.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0);
  }
  _startCapturing = () => {
    var e2, t2, i2, n2;
    S(this._restoreXHRPatch) && (null === (e2 = h.__PosthogExtensions__) || void 0 === e2 || null === (t2 = e2.tracingHeadersPatchFns) || void 0 === t2 || t2._patchXHR(this.instance.sessionManager));
    S(this._restoreFetchPatch) && (null === (i2 = h.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.tracingHeadersPatchFns) || void 0 === n2 || n2._patchFetch(this.instance.sessionManager));
  };
};
var Er;
!function(e2) {
  e2[e2.PENDING = -1] = "PENDING", e2[e2.DENIED = 0] = "DENIED", e2[e2.GRANTED = 1] = "GRANTED";
}(Er || (Er = {}));
var kr = class {
  constructor(e2) {
    this.instance = e2;
  }
  get config() {
    return this.instance.config;
  }
  get consent() {
    return this.getDnt() ? Er.DENIED : this.storedConsent;
  }
  isOptedOut() {
    return this.consent === Er.DENIED || this.consent === Er.PENDING && this.config.opt_out_capturing_by_default;
  }
  isOptedIn() {
    return !this.isOptedOut();
  }
  optInOut(e2) {
    this.storage.set(this.storageKey, e2 ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie);
  }
  reset() {
    this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie);
  }
  get storageKey() {
    const { token: e2, opt_out_capturing_cookie_prefix: t2 } = this.instance.config;
    return (t2 || "__ph_opt_in_out_") + e2;
  }
  get storedConsent() {
    const e2 = this.storage.get(this.storageKey);
    return "1" === e2 ? Er.GRANTED : "0" === e2 ? Er.DENIED : Er.PENDING;
  }
  get storage() {
    if (!this._storage) {
      const e2 = this.config.opt_out_capturing_persistence_type;
      this._storage = "localStorage" === e2 ? Ke : Ye;
      const t2 = "localStorage" === e2 ? Ye : Ke;
      t2.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t2.get(this.storageKey)), t2.remove(this.storageKey, this.config.cross_subdomain_cookie));
    }
    return this._storage;
  }
  getDnt() {
    return !!this.config.respect_dnt && !!Q([null == r ? void 0 : r.doNotTrack, null == r ? void 0 : r.msDoNotTrack, h.doNotTrack], (e2) => N([true, 1, "1", "yes"], e2));
  }
};
var xr = "[Exception Autocapture]";
var Ir = class {
  originalOnUnhandledRejectionHandler = void 0;
  constructor(e2) {
    var t2;
    this.instance = e2, this.remoteEnabled = !(null === (t2 = this.instance.persistence) || void 0 === t2 || !t2.props[ie]), this.startIfEnabled();
  }
  get isEnabled() {
    var e2;
    return null !== (e2 = this.remoteEnabled) && void 0 !== e2 && e2;
  }
  get isCapturing() {
    var t2;
    return !(null == e || null === (t2 = e.onerror) || void 0 === t2 || !t2.__POSTHOG_INSTRUMENTED__);
  }
  get hasHandlers() {
    return this.originalOnUnhandledRejectionHandler || this.unwrapOnError;
  }
  startIfEnabled() {
    this.isEnabled && !this.isCapturing && (T.info(xr + " enabled, starting..."), this.loadScript(this.startCapturing));
  }
  loadScript(e2) {
    var t2, i2;
    this.hasHandlers && e2(), null === (t2 = h.__PosthogExtensions__) || void 0 === t2 || null === (i2 = t2.loadExternalDependency) || void 0 === i2 || i2.call(t2, this.instance, "exception-autocapture", (t3) => {
      if (t3)
        return T.error(xr + " failed to load script", t3);
      e2();
    });
  }
  startCapturing = () => {
    var t2, i2, n2, s2;
    if (!e || !this.isEnabled || this.hasHandlers || this.isCapturing)
      return;
    const r2 = null === (t2 = h.__PosthogExtensions__) || void 0 === t2 || null === (i2 = t2.errorWrappingFunctions) || void 0 === i2 ? void 0 : i2.wrapOnError, o2 = null === (n2 = h.__PosthogExtensions__) || void 0 === n2 || null === (s2 = n2.errorWrappingFunctions) || void 0 === s2 ? void 0 : s2.wrapUnhandledRejection;
    if (r2 && o2)
      try {
        this.unwrapOnError = r2(this.captureException.bind(this)), this.unwrapUnhandledRejection = o2(this.captureException.bind(this));
      } catch (e2) {
        T.error(xr + " failed to start", e2), this.stopCapturing();
      }
    else
      T.error(xr + " failed to load error wrapping functions - cannot start");
  };
  stopCapturing() {
    var e2, t2;
    null === (e2 = this.unwrapOnError) || void 0 === e2 || e2.call(this), null === (t2 = this.unwrapUnhandledRejection) || void 0 === t2 || t2.call(this);
  }
  afterDecideResponse(e2) {
    const t2 = e2.autocaptureExceptions;
    this.remoteEnabled = !!t2 || false, this.instance.persistence && this.instance.persistence.register({ [ie]: this.remoteEnabled }), this.startIfEnabled();
  }
  captureException(e2) {
    const t2 = this.instance.requestRouter.endpointFor("ui");
    e2.$exception_personURL = `${t2}/project/${this.instance.config.token}/person/${this.instance.get_distinct_id()}`, this.instance.exceptions.sendExceptionEvent(e2);
  }
};
var Pr = 9e5;
var Fr = "[Web Vitals]";
var Rr = class {
  _enabledServerSide = false;
  _initialized = false;
  buffer = { url: void 0, metrics: [], firstMetricTimestamp: void 0 };
  constructor(e2) {
    var t2;
    this.instance = e2, this._enabledServerSide = !(null === (t2 = this.instance.persistence) || void 0 === t2 || !t2.props[se]), this.startIfEnabled();
  }
  get allowedMetrics() {
    var e2, t2;
    const i2 = b(this.instance.config.capture_performance) ? null === (e2 = this.instance.config.capture_performance) || void 0 === e2 ? void 0 : e2.web_vitals_allowed_metrics : void 0;
    return S(i2) ? (null === (t2 = this.instance.persistence) || void 0 === t2 ? void 0 : t2.props[oe]) || ["CLS", "FCP", "INP", "LCP"] : i2;
  }
  get flushToCaptureTimeoutMs() {
    return (b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals_delayed_flush_ms : void 0) || 5e3;
  }
  get _maxAllowedValue() {
    const e2 = b(this.instance.config.capture_performance) && P(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : Pr;
    return 0 < e2 && e2 <= 6e4 ? Pr : e2;
  }
  get isEnabled() {
    const e2 = b(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
    return F(e2) ? e2 : this._enabledServerSide;
  }
  startIfEnabled() {
    this.isEnabled && !this._initialized && (T.info(Fr + " enabled, starting..."), this.loadScript(this._startCapturing));
  }
  afterDecideResponse(e2) {
    const t2 = b(e2.capturePerformance) && !!e2.capturePerformance.web_vitals, i2 = b(e2.capturePerformance) ? e2.capturePerformance.web_vitals_allowed_metrics : void 0;
    this.instance.persistence && (this.instance.persistence.register({ [se]: t2 }), this.instance.persistence.register({ [oe]: i2 })), this._enabledServerSide = t2, this.startIfEnabled();
  }
  loadScript(e2) {
    var t2, i2, n2;
    null !== (t2 = h.__PosthogExtensions__) && void 0 !== t2 && t2.postHogWebVitalsCallbacks && e2(), null === (i2 = h.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.loadExternalDependency) || void 0 === n2 || n2.call(i2, this.instance, "web-vitals", (t3) => {
      t3 ? T.error(Fr + " failed to load script", t3) : e2();
    });
  }
  _currentURL() {
    const t2 = e ? e.location.href : void 0;
    return t2 || T.error(Fr + "Could not determine current URL"), t2;
  }
  _flushToCapture = () => {
    clearTimeout(this._delayedFlushTimer), 0 !== this.buffer.metrics.length && (this.instance.capture("$web_vitals", this.buffer.metrics.reduce((e2, t2) => ({ ...e2, [`$web_vitals_${t2.name}_event`]: { ...t2 }, [`$web_vitals_${t2.name}_value`]: t2.value }), {})), this.buffer = { url: void 0, metrics: [], firstMetricTimestamp: void 0 });
  };
  _addToBuffer = (e2) => {
    var t2;
    const i2 = null === (t2 = this.instance.sessionManager) || void 0 === t2 ? void 0 : t2.checkAndGetSessionAndWindowId(true);
    if (S(i2))
      return void T.error(Fr + "Could not read session ID. Dropping metrics!");
    this.buffer = this.buffer || { url: void 0, metrics: [], firstMetricTimestamp: void 0 };
    const n2 = this._currentURL();
    if (S(n2))
      return;
    if (I(null == e2 ? void 0 : e2.name) || I(null == e2 ? void 0 : e2.value))
      return void T.error(Fr + "Invalid metric received", e2);
    if (this._maxAllowedValue && e2.value >= this._maxAllowedValue)
      return void T.error(Fr + "Ignoring metric with value >= " + this._maxAllowedValue, e2);
    this.buffer.url !== n2 && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), S(this.buffer.url) && (this.buffer.url = n2), this.buffer.firstMetricTimestamp = S(this.buffer.firstMetricTimestamp) ? Date.now() : this.buffer.firstMetricTimestamp, e2.attribution && e2.attribution.interactionTargetElement && (e2.attribution.interactionTargetElement = void 0), this.buffer.metrics.push({ ...e2, $current_url: n2, $session_id: i2.sessionId, $window_id: i2.windowId, timestamp: Date.now() }), this.buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture();
  };
  _startCapturing = () => {
    let e2, t2, i2, n2;
    const s2 = h.__PosthogExtensions__;
    S(s2) || S(s2.postHogWebVitalsCallbacks) || ({ onLCP: e2, onCLS: t2, onFCP: i2, onINP: n2 } = s2.postHogWebVitalsCallbacks), e2 && t2 && i2 && n2 ? (this.allowedMetrics.indexOf("LCP") > -1 && e2(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && t2(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && i2(this._addToBuffer.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && n2(this._addToBuffer.bind(this)), this._initialized = true) : T.error(Fr + "web vitals callbacks not loaded - not starting");
  };
};
var Cr = { icontains: (t2, i2) => !!e && i2.href.toLowerCase().indexOf(t2.toLowerCase()) > -1, not_icontains: (t2, i2) => !!e && -1 === i2.href.toLowerCase().indexOf(t2.toLowerCase()), regex: (t2, i2) => !!e && at(i2.href, t2), not_regex: (t2, i2) => !!e && !at(i2.href, t2), exact: (e2, t2) => t2.href === e2, is_not: (e2, t2) => t2.href !== e2 };
var Tr = class {
  constructor(e2) {
    this.instance = e2;
    const t2 = (e3) => {
      this.applyFeatureFlagChanges(e3);
    };
    this.instance.onFeatureFlags && this.instance.onFeatureFlags(t2), this._flagToExperiments = /* @__PURE__ */ new Map();
  }
  applyFeatureFlagChanges(e2) {
    I(this._flagToExperiments) || this.instance.config.disable_web_experiments || (Tr.logInfo("applying feature flags", e2), e2.forEach((e3) => {
      var t2;
      if (this._flagToExperiments && null !== (t2 = this._flagToExperiments) && void 0 !== t2 && t2.has(e3)) {
        var i2;
        const t3 = this.instance.getFeatureFlag(e3), n2 = null === (i2 = this._flagToExperiments) || void 0 === i2 ? void 0 : i2.get(e3);
        t3 && null != n2 && n2.variants[t3] && this.applyTransforms(n2.name, t3, n2.variants[t3].transforms);
      }
    }));
  }
  afterDecideResponse(e2) {
    this._is_bot() ? Tr.logInfo("Refusing to render web experiment since the viewer is a likely bot") : (this._featureFlags = e2.featureFlags, this.loadIfEnabled(), this.previewWebExperiment());
  }
  previewWebExperiment() {
    const e2 = Tr.getWindowLocation();
    if (null != e2 && e2.search) {
      const t2 = ct(null == e2 ? void 0 : e2.search, "__experiment_id"), i2 = ct(null == e2 ? void 0 : e2.search, "__experiment_variant");
      t2 && i2 && (Tr.logInfo(`previewing web experiments ${t2} && ${i2}`), this.getWebExperiments((e3) => {
        this.showPreviewWebExperiment(parseInt(t2), i2, e3);
      }, false, true));
    }
  }
  loadIfEnabled() {
    this.instance.config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic();
  }
  getWebExperimentsAndEvaluateDisplayLogic = (() => {
    var e2 = this;
    return function() {
      let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e2.getWebExperiments((t3) => {
        Tr.logInfo("retrieved web experiments from the server"), e2._flagToExperiments = /* @__PURE__ */ new Map(), t3.forEach((t4) => {
          if (t4.feature_flag_key && e2._featureFlags && e2._featureFlags[t4.feature_flag_key]) {
            var i2;
            if (e2._flagToExperiments)
              Tr.logInfo("setting flag key ", t4.feature_flag_key, " to web experiment ", t4), null === (i2 = e2._flagToExperiments) || void 0 === i2 || i2.set(t4.feature_flag_key, t4);
            const n2 = e2._featureFlags[t4.feature_flag_key];
            n2 && t4.variants[n2] && e2.applyTransforms(t4.name, n2, t4.variants[n2].transforms);
          } else if (t4.variants)
            for (const i3 in t4.variants) {
              const n2 = t4.variants[i3];
              Tr.matchesTestVariant(n2) && e2.applyTransforms(t4.name, i3, n2.transforms);
            }
        });
      }, t2);
    };
  })();
  getWebExperiments(e2, t2, i2) {
    if (this.instance.config.disable_web_experiments && !i2)
      return e2([]);
    const n2 = this.instance.get_property("$web_experiments");
    if (n2 && !t2)
      return e2(n2);
    this.instance._send_request({ url: this.instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this.instance.config.token}`), method: "GET", transport: "XHR", callback: (t3) => {
      if (200 !== t3.statusCode || !t3.json)
        return e2([]);
      const i3 = t3.json.experiments || [];
      return e2(i3);
    } });
  }
  showPreviewWebExperiment(e2, t2, i2) {
    const n2 = i2.filter((t3) => t3.id === e2);
    n2 && n2.length > 0 && (Tr.logInfo(`Previewing web experiment [${n2[0].name}] with variant [${t2}]`), this.applyTransforms(n2[0].name, t2, n2[0].variants[t2].transforms, true));
  }
  static matchesTestVariant(e2) {
    return !I(e2.conditions) && Tr.matchUrlConditions(e2) && Tr.matchUTMConditions(e2);
  }
  static matchUrlConditions(e2) {
    var t2;
    if (I(e2.conditions) || I(null === (t2 = e2.conditions) || void 0 === t2 ? void 0 : t2.url))
      return true;
    const i2 = Tr.getWindowLocation();
    if (i2) {
      var n2, s2, r2;
      return null === (n2 = e2.conditions) || void 0 === n2 || !n2.url || Cr[null !== (s2 = null === (r2 = e2.conditions) || void 0 === r2 ? void 0 : r2.urlMatchType) && void 0 !== s2 ? s2 : "icontains"](e2.conditions.url, i2);
    }
    return false;
  }
  static getWindowLocation() {
    return null == e ? void 0 : e.location;
  }
  static matchUTMConditions(e2) {
    var t2;
    if (I(e2.conditions) || I(null === (t2 = e2.conditions) || void 0 === t2 ? void 0 : t2.utm))
      return true;
    const i2 = li.campaignParams();
    if (i2.utm_source) {
      var n2, s2, r2, o2, a2, l2, c2, u2, d2, h2, _2, p2, g2, f2, v2, m2;
      const t3 = null === (n2 = e2.conditions) || void 0 === n2 || null === (s2 = n2.utm) || void 0 === s2 || !s2.utm_campaign || (null === (r2 = e2.conditions) || void 0 === r2 || null === (o2 = r2.utm) || void 0 === o2 ? void 0 : o2.utm_campaign) == i2.utm_campaign, y2 = null === (a2 = e2.conditions) || void 0 === a2 || null === (l2 = a2.utm) || void 0 === l2 || !l2.utm_source || (null === (c2 = e2.conditions) || void 0 === c2 || null === (u2 = c2.utm) || void 0 === u2 ? void 0 : u2.utm_source) == i2.utm_source, b2 = null === (d2 = e2.conditions) || void 0 === d2 || null === (h2 = d2.utm) || void 0 === h2 || !h2.utm_medium || (null === (_2 = e2.conditions) || void 0 === _2 || null === (p2 = _2.utm) || void 0 === p2 ? void 0 : p2.utm_medium) == i2.utm_medium, w2 = null === (g2 = e2.conditions) || void 0 === g2 || null === (f2 = g2.utm) || void 0 === f2 || !f2.utm_term || (null === (v2 = e2.conditions) || void 0 === v2 || null === (m2 = v2.utm) || void 0 === m2 ? void 0 : m2.utm_term) == i2.utm_term;
      return t3 && b2 && w2 && y2;
    }
    return false;
  }
  static logInfo(e2) {
    for (var t2 = arguments.length, i2 = new Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++)
      i2[n2 - 1] = arguments[n2];
    T.info(`[WebExperiments] ${e2}`, i2);
  }
  applyTransforms(e2, t2, i2, n2) {
    var s2;
    this._is_bot() ? Tr.logInfo("Refusing to render web experiment since the viewer is a likely bot") : "control" !== t2 ? i2.forEach((i3) => {
      if (i3.selector) {
        var s3;
        Tr.logInfo(`applying transform of variant ${t2} for experiment ${e2} `, i3);
        let o2 = 0;
        const a2 = null === (s3 = document) || void 0 === s3 ? void 0 : s3.querySelectorAll(i3.selector);
        var r2;
        if (null == a2 || a2.forEach((e3) => {
          const t3 = e3;
          o2 += 1, i3.attributes && i3.attributes.forEach((e4) => {
            switch (e4.name) {
              case "text":
                t3.innerText = e4.value;
                break;
              case "html":
                t3.innerHTML = e4.value;
                break;
              case "cssClass":
                t3.className = e4.value;
                break;
              default:
                t3.setAttribute(e4.name, e4.value);
            }
          }), i3.text && (t3.innerText = i3.text), i3.html && (t3.parentElement ? t3.parentElement.innerHTML = i3.html : t3.innerHTML = i3.html), i3.css && t3.setAttribute("style", i3.css);
        }), this.instance && this.instance.capture)
          this.instance.capture("$web_experiment_applied", { $web_experiment_name: e2, $web_experiment_variant: t2, $web_experiment_preview: n2, $web_experiment_document_url: null === (r2 = Tr.getWindowLocation()) || void 0 === r2 ? void 0 : r2.href, $web_experiment_elements_modified: o2 });
      }
    }) : (Tr.logInfo("Control variants leave the page unmodified."), this.instance && this.instance.capture && this.instance.capture("$web_experiment_applied", { $web_experiment_name: e2, $web_experiment_preview: n2, $web_experiment_variant: t2, $web_experiment_document_url: null === (s2 = Tr.getWindowLocation()) || void 0 === s2 ? void 0 : s2.href, $web_experiment_elements_modified: 0 }));
  }
  _is_bot() {
    return r && this.instance ? hr(r, this.instance.config.custom_blocked_useragents) : void 0;
  }
};
var $r = "/e/";
var Ar = class {
  constructor(e2) {
    var t2;
    this.instance = e2, this._endpointSuffix = (null === (t2 = this.instance.persistence) || void 0 === t2 ? void 0 : t2.props[ne]) || $r;
  }
  get endpoint() {
    return this.instance.requestRouter.endpointFor("api", this._endpointSuffix);
  }
  afterDecideResponse(e2) {
    const t2 = e2.autocaptureExceptions;
    this._endpointSuffix = b(t2) && t2.endpoint || $r, this.instance.persistence && this.instance.persistence.register({ [ne]: this._endpointSuffix });
  }
  sendExceptionEvent(e2) {
    this.instance.capture("$exception", e2, { _noTruncate: true, _batchKey: "exceptionEvent", _url: this.endpoint });
  }
};
var Mr = "[Dead Clicks]";
var Lr = class {
  get lazyLoadedDeadClicksAutocapture() {
    return this._lazyLoadedDeadClicksAutocapture;
  }
  constructor(e2) {
    this.instance = e2, this.startIfEnabled();
  }
  get isRemoteEnabled() {
    var e2;
    return !(null === (e2 = this.instance.persistence) || void 0 === e2 || !e2.get_property(re));
  }
  get isEnabled() {
    const e2 = this.instance.config.capture_dead_clicks;
    return F(e2) ? e2 : this.isRemoteEnabled;
  }
  afterDecideResponse(e2) {
    this.instance.persistence && this.instance.persistence.register({ [re]: null == e2 ? void 0 : e2.captureDeadClicks }), this.startIfEnabled();
  }
  startIfEnabled() {
    this.isEnabled && this.loadScript(this.start.bind(this));
  }
  loadScript(e2) {
    var t2, i2, n2;
    null !== (t2 = h.__PosthogExtensions__) && void 0 !== t2 && t2.initDeadClicksAutocapture && e2(), null === (i2 = h.__PosthogExtensions__) || void 0 === i2 || null === (n2 = i2.loadExternalDependency) || void 0 === n2 || n2.call(i2, this.instance, "dead-clicks-autocapture", (t3) => {
      t3 ? T.error(Mr + " failed to load script", t3) : e2();
    });
  }
  start() {
    var e2;
    o ? !this._lazyLoadedDeadClicksAutocapture && null !== (e2 = h.__PosthogExtensions__) && void 0 !== e2 && e2.initDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture = h.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, b(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : void 0), this._lazyLoadedDeadClicksAutocapture.start(o), T.info(`${Mr} starting...`)) : T.error(Mr + " `document` not found. Cannot start.");
  }
  stop() {
    this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, T.info(`${Mr} stopping...`));
  }
};
var Dr = {};
var Or = () => {
};
var Nr = "posthog";
var qr = !Zn && -1 === (null == d ? void 0 : d.indexOf("MSIE")) && -1 === (null == d ? void 0 : d.indexOf("Mozilla"));
var Br = () => {
  var t2;
  return { api_host: "https://us.i.posthog.com", ui_host: null, token: "", autocapture: true, rageclick: true, cross_subdomain_cookie: j(null == o ? void 0 : o.location), persistence: "localStorage+cookie", persistence_name: "", loaded: Or, store_google: true, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: true, capture_pageview: true, capture_pageleave: "if_capture_pageview", debug: a && E(null == a ? void 0 : a.search) && -1 !== a.search.indexOf("__posthog_debug=true") || false, verbose: false, cookie_expiration: 365, upgrade: false, disable_session_recording: false, disable_persistence: false, disable_web_experiments: true, disable_surveys: false, enable_recording_console_log: void 0, secure_cookie: "https:" === (null == e || null === (t2 = e.location) || void 0 === t2 ? void 0 : t2.protocol), ip: true, opt_out_capturing_by_default: false, opt_out_persistence_by_default: false, opt_out_useragent_filter: false, opt_out_capturing_persistence_type: "localStorage", opt_out_capturing_cookie_prefix: null, opt_in_site_apps: false, property_denylist: [], respect_dnt: false, sanitize_properties: null, request_headers: {}, inapp_protocol: "//", inapp_link_new_window: false, request_batching: true, properties_string_max_length: 65535, session_recording: {}, mask_all_element_attributes: false, mask_all_text: false, advanced_disable_decide: false, advanced_disable_feature_flags: false, advanced_disable_feature_flags_on_first_load: false, advanced_disable_toolbar_metrics: false, feature_flag_request_timeout_ms: 3e3, on_request_error: (e2) => {
    const t3 = "Bad HTTP status: " + e2.statusCode + " " + e2.text;
    T.error(t3);
  }, get_device_id: (e2) => e2, _onCapture: Or, capture_performance: void 0, name: "posthog", bootstrap: {}, disable_compression: false, session_idle_timeout_seconds: 1800, person_profiles: "identified_only", __add_tracing_headers: false };
};
var Hr = (e2) => {
  const t2 = {};
  S(e2.process_person) || (t2.person_profiles = e2.process_person), S(e2.xhr_headers) || (t2.request_headers = e2.xhr_headers), S(e2.cookie_name) || (t2.persistence_name = e2.cookie_name), S(e2.disable_cookie) || (t2.disable_persistence = e2.disable_cookie);
  const i2 = O({}, t2, e2);
  return m(e2.property_blacklist) && (S(e2.property_denylist) ? i2.property_denylist = e2.property_blacklist : m(e2.property_denylist) ? i2.property_denylist = [...e2.property_blacklist, ...e2.property_denylist] : T.error("Invalid value for property_denylist config: " + e2.property_denylist)), i2;
};
var Ur = class {
  get _forceAllowLocalhost() {
    return this.__forceAllowLocalhost;
  }
  set _forceAllowLocalhost(e2) {
    T.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e2;
  }
  __forceAllowLocalhost = false;
};
var Wr = class {
  webPerformance = new Ur();
  version = _.LIB_VERSION;
  _internalEventEmitter = new bs();
  constructor() {
    this.config = Br(), this.decideEndpointWasHit = false, this.SentryIntegration = ps, this.sentryIntegration = (e2) => function(e3, t2) {
      const i2 = _s(e3, t2);
      return { name: hs, processEvent: (e4) => i2(e4) };
    }(this, e2), this.__request_queue = [], this.__loaded = false, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = false, this._initialPersonProfilesConfig = null, this.featureFlags = new Oe(this), this.toolbar = new Xn(this), this.scrollManager = new gr(this), this.pageViewManager = new fs(this), this.surveys = new or(this), this.experiments = new Tr(this), this.exceptions = new Ar(this), this.rateLimiter = new ar(this), this.requestRouter = new ds(this), this.consent = new kr(this), this.people = { set: (e2, t2, i2) => {
      const n2 = E(e2) ? { [e2]: t2 } : e2;
      this.setPersonProperties(n2), null == i2 || i2({});
    }, set_once: (e2, t2, i2) => {
      const n2 = E(e2) ? { [e2]: t2 } : e2;
      this.setPersonProperties(void 0, n2), null == i2 || i2({});
    } }, this.on("eventCaptured", (e2) => T.info(`send "${null == e2 ? void 0 : e2.event}"`, e2));
  }
  init(e2, t2, i2) {
    if (i2 && i2 !== Nr) {
      var n2;
      const s2 = null !== (n2 = Dr[i2]) && void 0 !== n2 ? n2 : new Wr();
      return s2._init(e2, t2, i2), Dr[i2] = s2, Dr[Nr][i2] = s2, s2;
    }
    return this._init(e2, t2, i2);
  }
  _init(t2) {
    var i2, n2;
    let s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = arguments.length > 2 ? arguments[2] : void 0;
    if (S(t2) || k(t2))
      return T.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
    if (this.__loaded)
      return T.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
    this.__loaded = true, this.config = {}, this._triggered_notifs = [], s2.person_profiles && (this._initialPersonProfilesConfig = s2.person_profiles), this.set_config(O({}, Br(), Hr(s2), { name: r2, token: t2 })), this.config.on_xhr_error && T.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"), this.compression = s2.disable_compression ? void 0 : J.GZipJS, this.persistence = new ui(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new ui({ ...this.config, persistence: "sessionStorage" });
    const o2 = { ...this.persistence.props }, a2 = { ...this.sessionPersistence.props };
    if (this._requestQueue = new Kn((e2) => this._send_retriable_request(e2)), this._retryQueue = new as(this), this.__request_queue = [], this.sessionManager = new ls(this.config, this.persistence), this.sessionPropsManager = new cr(this.sessionManager, this.persistence), new Sr(this).startIfEnabledOrStop(), this.sessionRecording = new Gn(this), this.sessionRecording.startIfEnabledOrStop(), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new wr(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new pr(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new Rr(this), this.exceptionObserver = new Ir(this), this.exceptionObserver.startIfEnabled(), this.deadClicksAutocapture = new Lr(this), this.deadClicksAutocapture.startIfEnabled(), _.DEBUG = _.DEBUG || this.config.debug, _.DEBUG && T.info("Starting in debug mode", { this: this, config: s2, thisC: { ...this.config }, p: o2, s: a2 }), this._sync_opt_out_with_persistence(), void 0 !== (null === (i2 = s2.bootstrap) || void 0 === i2 ? void 0 : i2.distinctID)) {
      var l2, c2;
      const e2 = this.config.get_device_id(ze()), t3 = null !== (l2 = s2.bootstrap) && void 0 !== l2 && l2.isIdentifiedID ? e2 : s2.bootstrap.distinctID;
      this.persistence.set_property(ke, null !== (c2 = s2.bootstrap) && void 0 !== c2 && c2.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: s2.bootstrap.distinctID, $device_id: t3 });
    }
    if (this._hasBootstrappedFeatureFlags()) {
      var u2, d2;
      const e2 = Object.keys((null === (u2 = s2.bootstrap) || void 0 === u2 ? void 0 : u2.featureFlags) || {}).filter((e3) => {
        var t4, i3;
        return !(null === (t4 = s2.bootstrap) || void 0 === t4 || null === (i3 = t4.featureFlags) || void 0 === i3 || !i3[e3]);
      }).reduce((e3, t4) => {
        var i3, n3;
        return e3[t4] = (null === (i3 = s2.bootstrap) || void 0 === i3 || null === (n3 = i3.featureFlags) || void 0 === n3 ? void 0 : n3[t4]) || false, e3;
      }, {}), t3 = Object.keys((null === (d2 = s2.bootstrap) || void 0 === d2 ? void 0 : d2.featureFlagPayloads) || {}).filter((t4) => e2[t4]).reduce((e3, t4) => {
        var i3, n3, r3, o3;
        null !== (i3 = s2.bootstrap) && void 0 !== i3 && null !== (n3 = i3.featureFlagPayloads) && void 0 !== n3 && n3[t4] && (e3[t4] = null === (r3 = s2.bootstrap) || void 0 === r3 || null === (o3 = r3.featureFlagPayloads) || void 0 === o3 ? void 0 : o3[t4]);
        return e3;
      }, {});
      this.featureFlags.receivedFeatureFlags({ featureFlags: e2, featureFlagPayloads: t3 });
    }
    if (!this.get_distinct_id()) {
      const e2 = this.config.get_device_id(ze());
      this.register_once({ distinct_id: e2, $device_id: e2 }, ""), this.persistence.set_property(ke, "anonymous");
    }
    return null == e || null === (n2 = e.addEventListener) || void 0 === n2 || n2.call(e, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), this.toolbar.maybeLoadToolbar(), s2.segment ? gs(this, () => this._loaded()) : this._loaded(), y(this.config._onCapture) && this.on("eventCaptured", (e2) => this.config._onCapture(e2.event, e2)), this;
  }
  _afterDecideResponse(e2) {
    var t2, i2, n2, s2, r2, o2, a2, l2, c2, u2;
    this.compression = void 0, e2.supportedCompression && !this.config.disable_compression && (this.compression = N(e2.supportedCompression, J.GZipJS) ? J.GZipJS : N(e2.supportedCompression, J.Base64) ? J.Base64 : void 0), null !== (t2 = e2.analytics) && void 0 !== t2 && t2.endpoint && (this.analyticsDefaultEndpoint = e2.analytics.endpoint), this.set_config({ person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : e2.defaultIdentifiedOnly ? "identified_only" : "always" }), null === (i2 = this.sessionRecording) || void 0 === i2 || i2.afterDecideResponse(e2), null === (n2 = this.autocapture) || void 0 === n2 || n2.afterDecideResponse(e2), null === (s2 = this.heatmaps) || void 0 === s2 || s2.afterDecideResponse(e2), null === (r2 = this.experiments) || void 0 === r2 || r2.afterDecideResponse(e2), null === (o2 = this.surveys) || void 0 === o2 || o2.afterDecideResponse(e2), null === (a2 = this.webVitalsAutocapture) || void 0 === a2 || a2.afterDecideResponse(e2), null === (l2 = this.exceptions) || void 0 === l2 || l2.afterDecideResponse(e2), null === (c2 = this.exceptionObserver) || void 0 === c2 || c2.afterDecideResponse(e2), null === (u2 = this.deadClicksAutocapture) || void 0 === u2 || u2.afterDecideResponse(e2);
  }
  _loaded() {
    const e2 = this.config.advanced_disable_decide;
    e2 || this.featureFlags.setReloadingPaused(true);
    try {
      this.config.loaded(this);
    } catch (e3) {
      T.critical("`loaded` function failed", e3);
    }
    this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout(() => {
      this.consent.isOptedIn() && this._captureInitialPageview();
    }, 1), e2 || (new jn(this).call(), this.featureFlags.resetRequestQueue());
  }
  _start_queue_if_opted_in() {
    var e2;
    this.has_opted_out_capturing() || this.config.request_batching && (null === (e2 = this._requestQueue) || void 0 === e2 || e2.enable());
  }
  _dom_loaded() {
    this.has_opted_out_capturing() || L(this.__request_queue, (e2) => this._send_retriable_request(e2)), this.__request_queue = [], this._start_queue_if_opted_in();
  }
  _handle_unload() {
    var e2, t2;
    this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), null === (e2 = this._requestQueue) || void 0 === e2 || e2.unload(), null === (t2 = this._retryQueue) || void 0 === t2 || t2.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, { transport: "sendBeacon" });
  }
  _send_request(e2) {
    this.__loaded && (qr ? this.__request_queue.push(e2) : this.rateLimiter.isServerRateLimited(e2.batchKey) || (e2.transport = e2.transport || this.config.api_transport, e2.url = ts(e2.url, { ip: this.config.ip ? 1 : 0 }), e2.headers = { ...this.config.request_headers }, e2.compression = "best-available" === e2.compression ? this.compression : e2.compression, ((e3) => {
      var t2, i2, n2;
      const s2 = { ...e3 };
      s2.timeout = s2.timeout || 6e4, s2.url = ts(s2.url, { _: (/* @__PURE__ */ new Date()).getTime().toString(), ver: _.LIB_VERSION, compression: s2.compression });
      const r2 = null !== (t2 = s2.transport) && void 0 !== t2 ? t2 : "XHR", o2 = null !== (i2 = null === (n2 = Q(os, (e4) => e4.transport === r2)) || void 0 === n2 ? void 0 : n2.method) && void 0 !== i2 ? i2 : os[0].method;
      if (!o2)
        throw new Error("No available transport method");
      o2(s2);
    })({ ...e2, callback: (t2) => {
      var i2, n2, s2;
      (this.rateLimiter.checkForLimiting(t2), t2.statusCode >= 400) && (null === (n2 = (s2 = this.config).on_request_error) || void 0 === n2 || n2.call(s2, t2));
      null === (i2 = e2.callback) || void 0 === i2 || i2.call(e2, t2);
    } })));
  }
  _send_retriable_request(e2) {
    this._retryQueue ? this._retryQueue.retriableRequest(e2) : this._send_request(e2);
  }
  _execute_array(e2) {
    let t2;
    const i2 = [], n2 = [], s2 = [];
    L(e2, (e3) => {
      e3 && (t2 = e3[0], m(t2) ? s2.push(e3) : y(e3) ? e3.call(this) : m(e3) && "alias" === t2 ? i2.push(e3) : m(e3) && -1 !== t2.indexOf("capture") && y(this[t2]) ? s2.push(e3) : n2.push(e3));
    });
    const r2 = function(e3, t3) {
      L(e3, function(e4) {
        if (m(e4[0])) {
          let i3 = t3;
          D(e4, function(e5) {
            i3 = i3[e5[0]].apply(i3, e5.slice(1));
          });
        } else
          this[e4[0]].apply(this, e4.slice(1));
      }, t3);
    };
    r2(i2, this), r2(n2, this), r2(s2, this);
  }
  _hasBootstrappedFeatureFlags() {
    var e2, t2;
    return (null === (e2 = this.config.bootstrap) || void 0 === e2 ? void 0 : e2.featureFlags) && Object.keys(null === (t2 = this.config.bootstrap) || void 0 === t2 ? void 0 : t2.featureFlags).length > 0 || false;
  }
  push(e2) {
    this._execute_array([e2]);
  }
  capture(e2, t2, i2) {
    var n2;
    if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue))
      return void T.uninitializedWarning("posthog.capture");
    if (this.consent.isOptedOut())
      return;
    if (S(e2) || !E(e2))
      return void T.error("No event name provided to posthog.capture");
    if (!this.config.opt_out_useragent_filter && this._is_bot())
      return;
    const s2 = null != i2 && i2.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
    if (null != s2 && s2.isRateLimited)
      return void T.critical("This capture call is ignored due to client rate limiting.");
    this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
    const r2 = /* @__PURE__ */ new Date(), o2 = (null == i2 ? void 0 : i2.timestamp) || r2;
    let a2 = { uuid: ze(), event: e2, properties: this._calculate_event_properties(e2, t2 || {}, o2) };
    s2 && (a2.properties.$lib_rate_limit_remaining_tokens = s2.remainingTokens);
    (null == i2 ? void 0 : i2.$set) && (a2.$set = null == i2 ? void 0 : i2.$set);
    const l2 = this._calculate_set_once_properties(null == i2 ? void 0 : i2.$set_once);
    l2 && (a2.$set_once = l2), a2 = z(a2, null != i2 && i2._noTruncate ? null : this.config.properties_string_max_length), a2.timestamp = o2, S(null == i2 ? void 0 : i2.timestamp) || (a2.properties.$event_time_override_provided = true, a2.properties.$event_time_override_system_time = r2);
    const c2 = { ...a2.properties.$set, ...a2.$set };
    w(c2) || this.setPersonPropertiesForFlags(c2), this._internalEventEmitter.emit("eventCaptured", a2);
    const u2 = { method: "POST", url: null !== (n2 = null == i2 ? void 0 : i2._url) && void 0 !== n2 ? n2 : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint), data: a2, compression: "best-available", batchKey: null == i2 ? void 0 : i2._batchKey };
    return !this.config.request_batching || i2 && (null == i2 || !i2._batchKey) || null != i2 && i2.send_instantly ? this._send_retriable_request(u2) : this._requestQueue.enqueue(u2), a2;
  }
  _addCaptureHook(e2) {
    return this.on("eventCaptured", (t2) => e2(t2.event, t2));
  }
  _calculate_event_properties(e2, t2, i2) {
    if (i2 = i2 || /* @__PURE__ */ new Date(), !this.persistence || !this.sessionPersistence)
      return t2;
    const n2 = this.persistence.remove_event_timer(e2);
    let s2 = { ...t2 };
    if (s2.token = this.config.token, "$snapshot" === e2) {
      const e3 = { ...this.persistence.properties(), ...this.sessionPersistence.properties() };
      return s2.distinct_id = e3.distinct_id, (!E(s2.distinct_id) && !P(s2.distinct_id) || k(s2.distinct_id)) && T.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), s2;
    }
    const r2 = li.properties();
    if (this.sessionManager) {
      const { sessionId: e3, windowId: t3 } = this.sessionManager.checkAndGetSessionAndWindowId();
      s2.$session_id = e3, s2.$window_id = t3;
    }
    if (this.requestRouter.region === cs.CUSTOM && (s2.$lib_custom_api_host = this.config.api_host), this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e2 || "$pageleave" === e2 || "$autocapture" === e2)) {
      const e3 = this.sessionPropsManager.getSessionProps();
      s2 = O(s2, e3);
    }
    if (!this.config.disable_scroll_properties) {
      let t3 = {};
      "$pageview" === e2 ? t3 = this.pageViewManager.doPageView(i2) : "$pageleave" === e2 && (t3 = this.pageViewManager.doPageLeave(i2)), s2 = O(s2, t3);
    }
    if ("$pageview" === e2 && o && (s2.title = o.title), !S(n2)) {
      const e3 = i2.getTime() - n2;
      s2.$duration = parseFloat((e3 / 1e3).toFixed(3));
    }
    d && this.config.opt_out_useragent_filter && (s2.$browser_type = this._is_bot() ? "bot" : "browser"), s2 = O({}, r2, this.persistence.properties(), this.sessionPersistence.properties(), s2), s2.$is_identified = this._isIdentified(), m(this.config.property_denylist) ? D(this.config.property_denylist, function(e3) {
      delete s2[e3];
    }) : T.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
    const a2 = this.config.sanitize_properties;
    a2 && (s2 = a2(s2, e2));
    const l2 = this._hasPersonProcessing();
    return s2.$process_person_profile = l2, l2 && this._requirePersonProcessing("_calculate_event_properties"), s2;
  }
  _calculate_set_once_properties(e2) {
    if (!this.persistence || !this._hasPersonProcessing())
      return e2;
    let t2 = O({}, this.persistence.get_initial_props(), e2 || {});
    const i2 = this.config.sanitize_properties;
    return i2 && (t2 = i2(t2, "$set_once")), w(t2) ? void 0 : t2;
  }
  register(e2, t2) {
    var i2;
    null === (i2 = this.persistence) || void 0 === i2 || i2.register(e2, t2);
  }
  register_once(e2, t2, i2) {
    var n2;
    null === (n2 = this.persistence) || void 0 === n2 || n2.register_once(e2, t2, i2);
  }
  register_for_session(e2) {
    var t2;
    null === (t2 = this.sessionPersistence) || void 0 === t2 || t2.register(e2);
  }
  unregister(e2) {
    var t2;
    null === (t2 = this.persistence) || void 0 === t2 || t2.unregister(e2);
  }
  unregister_for_session(e2) {
    var t2;
    null === (t2 = this.sessionPersistence) || void 0 === t2 || t2.unregister(e2);
  }
  _register_single(e2, t2) {
    this.register({ [e2]: t2 });
  }
  getFeatureFlag(e2, t2) {
    return this.featureFlags.getFeatureFlag(e2, t2);
  }
  getFeatureFlagPayload(e2) {
    const t2 = this.featureFlags.getFeatureFlagPayload(e2);
    try {
      return JSON.parse(t2);
    } catch {
      return t2;
    }
  }
  isFeatureEnabled(e2, t2) {
    return this.featureFlags.isFeatureEnabled(e2, t2);
  }
  reloadFeatureFlags() {
    this.featureFlags.reloadFeatureFlags();
  }
  updateEarlyAccessFeatureEnrollment(e2, t2) {
    this.featureFlags.updateEarlyAccessFeatureEnrollment(e2, t2);
  }
  getEarlyAccessFeatures(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.featureFlags.getEarlyAccessFeatures(e2, t2);
  }
  on(e2, t2) {
    return this._internalEventEmitter.on(e2, t2);
  }
  onFeatureFlags(e2) {
    return this.featureFlags.onFeatureFlags(e2);
  }
  onSessionId(e2) {
    var t2, i2;
    return null !== (t2 = null === (i2 = this.sessionManager) || void 0 === i2 ? void 0 : i2.onSessionId(e2)) && void 0 !== t2 ? t2 : () => {
    };
  }
  getSurveys(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getSurveys(e2, t2);
  }
  getActiveMatchingSurveys(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getActiveMatchingSurveys(e2, t2);
  }
  renderSurvey(e2, t2) {
    this.surveys.renderSurvey(e2, t2);
  }
  canRenderSurvey(e2) {
    this.surveys.canRenderSurvey(e2);
  }
  getNextSurveyStep(e2, t2, i2) {
    return this.surveys.getNextSurveyStep(e2, t2, i2);
  }
  identify(e2, t2, i2) {
    if (!this.__loaded || !this.persistence)
      return T.uninitializedWarning("posthog.identify");
    if (P(e2) && (e2 = e2.toString(), T.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !e2)
      return void T.error("Unique user id has not been set in posthog.identify");
    if (["distinct_id", "distinctid"].includes(e2.toLowerCase()))
      return void T.critical(`The string "${e2}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`);
    if (!this._requirePersonProcessing("posthog.identify"))
      return;
    const n2 = this.get_distinct_id();
    if (this.register({ $user_id: e2 }), !this.get_property("$device_id")) {
      const e3 = n2;
      this.register_once({ $had_persisted_distinct_id: true, $device_id: e3 }, "");
    }
    e2 !== n2 && e2 !== this.get_property(K) && (this.unregister(K), this.register({ distinct_id: e2 }));
    const s2 = "anonymous" === (this.persistence.get_property(ke) || "anonymous");
    e2 !== n2 && s2 ? (this.persistence.set_property(ke, "identified"), this.setPersonPropertiesForFlags(t2 || {}, false), this.capture("$identify", { distinct_id: e2, $anon_distinct_id: n2 }, { $set: t2 || {}, $set_once: i2 || {} }), this.featureFlags.setAnonymousDistinctId(n2)) : (t2 || i2) && this.setPersonProperties(t2, i2), e2 !== n2 && (this.reloadFeatureFlags(), this.unregister(Ee));
  }
  setPersonProperties(e2, t2) {
    (e2 || t2) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e2 || {}), this.capture("$set", { $set: e2 || {}, $set_once: t2 || {} }));
  }
  group(e2, t2, i2) {
    if (!e2 || !t2)
      return void T.error("posthog.group requires a group type and group key");
    if (!this._requirePersonProcessing("posthog.group"))
      return;
    const n2 = this.getGroups();
    n2[e2] !== t2 && this.resetGroupPropertiesForFlags(e2), this.register({ $groups: { ...n2, [e2]: t2 } }), i2 && (this.capture("$groupidentify", { $group_type: e2, $group_key: t2, $group_set: i2 }), this.setGroupPropertiesForFlags({ [e2]: i2 })), n2[e2] === t2 || i2 || this.reloadFeatureFlags();
  }
  resetGroups() {
    this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
  }
  setPersonPropertiesForFlags(e2) {
    let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") && this.featureFlags.setPersonPropertiesForFlags(e2, t2);
  }
  resetPersonPropertiesForFlags() {
    this.featureFlags.resetPersonPropertiesForFlags();
  }
  setGroupPropertiesForFlags(e2) {
    let t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e2, t2);
  }
  resetGroupPropertiesForFlags(e2) {
    this.featureFlags.resetGroupPropertiesForFlags(e2);
  }
  reset(e2) {
    var t2, i2, n2, s2, r2;
    if (T.info("reset"), !this.__loaded)
      return T.uninitializedWarning("posthog.reset");
    const o2 = this.get_property("$device_id");
    this.consent.reset(), null === (t2 = this.persistence) || void 0 === t2 || t2.clear(), null === (i2 = this.sessionPersistence) || void 0 === i2 || i2.clear(), null === (n2 = this.surveys) || void 0 === n2 || n2.reset(), null === (s2 = this.persistence) || void 0 === s2 || s2.set_property(ke, "anonymous"), null === (r2 = this.sessionManager) || void 0 === r2 || r2.resetSessionId();
    const a2 = this.config.get_device_id(ze());
    this.register_once({ distinct_id: a2, $device_id: e2 ? a2 : o2 }, "");
  }
  get_distinct_id() {
    return this.get_property("distinct_id");
  }
  getGroups() {
    return this.get_property("$groups") || {};
  }
  get_session_id() {
    var e2, t2;
    return null !== (e2 = null === (t2 = this.sessionManager) || void 0 === t2 ? void 0 : t2.checkAndGetSessionAndWindowId(true).sessionId) && void 0 !== e2 ? e2 : "";
  }
  get_session_replay_url(e2) {
    if (!this.sessionManager)
      return "";
    const { sessionId: t2, sessionStartTimestamp: i2 } = this.sessionManager.checkAndGetSessionAndWindowId(true);
    let n2 = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${t2}`);
    if (null != e2 && e2.withTimestamp && i2) {
      var s2;
      const t3 = null !== (s2 = e2.timestampLookBack) && void 0 !== s2 ? s2 : 10;
      if (!i2)
        return n2;
      n2 += `?t=${Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - i2) / 1e3) - t3, 0)}`;
    }
    return n2;
  }
  alias(e2, t2) {
    return e2 === this.get_property(X) ? (T.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (S(t2) && (t2 = this.get_distinct_id()), e2 !== t2 ? (this._register_single(K, e2), this.capture("$create_alias", { alias: e2, distinct_id: t2 })) : (T.warn("alias matches current distinct_id - skipping api call."), this.identify(e2), -1)) : void 0;
  }
  set_config(e2) {
    const t2 = { ...this.config };
    var i2, n2, s2, r2;
    b(e2) && (O(this.config, Hr(e2)), null === (i2 = this.persistence) || void 0 === i2 || i2.update_config(this.config, t2), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new ui({ ...this.config, persistence: "sessionStorage" }), Ke.is_supported() && "true" === Ke.get("ph_debug") && (this.config.debug = true), this.config.debug && (_.DEBUG = true, T.info("set_config", { config: e2, oldConfig: t2, newConfig: { ...this.config } })), null === (n2 = this.sessionRecording) || void 0 === n2 || n2.startIfEnabledOrStop(), null === (s2 = this.autocapture) || void 0 === s2 || s2.startIfEnabled(), null === (r2 = this.heatmaps) || void 0 === r2 || r2.startIfEnabled(), this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence());
  }
  startSessionRecording(e2) {
    const t2 = F(e2) && e2;
    if (t2 || null != e2 && e2.sampling || null != e2 && e2.linked_flag) {
      var i2;
      const r2 = null === (i2 = this.sessionManager) || void 0 === i2 ? void 0 : i2.checkAndGetSessionAndWindowId();
      var n2, s2;
      if (t2 || null != e2 && e2.sampling)
        null === (n2 = this.sessionRecording) || void 0 === n2 || n2.overrideSampling(), T.info("Session recording started with sampling override for session: ", null == r2 ? void 0 : r2.sessionId);
      if (t2 || null != e2 && e2.linked_flag)
        null === (s2 = this.sessionRecording) || void 0 === s2 || s2.overrideLinkedFlag(), T.info("Session recording started with linked_flags override");
    }
    this.set_config({ disable_session_recording: false });
  }
  stopSessionRecording() {
    this.set_config({ disable_session_recording: true });
  }
  sessionRecordingStarted() {
    var e2;
    return !(null === (e2 = this.sessionRecording) || void 0 === e2 || !e2.started);
  }
  captureException(e2, t2) {
    var i2;
    const n2 = new Error("PostHog syntheticException"), s2 = y(null === (i2 = h.__PosthogExtensions__) || void 0 === i2 ? void 0 : i2.parseErrorAsProperties) ? h.__PosthogExtensions__.parseErrorAsProperties([e2.message, void 0, void 0, void 0, e2], { syntheticException: n2 }) : { $exception_level: "error", $exception_list: [{ type: e2.name, value: e2.message, mechanism: { handled: true, synthetic: false } }], ...t2 };
    this.exceptions.sendExceptionEvent(s2);
  }
  loadToolbar(e2) {
    return this.toolbar.loadToolbar(e2);
  }
  get_property(e2) {
    var t2;
    return null === (t2 = this.persistence) || void 0 === t2 ? void 0 : t2.props[e2];
  }
  getSessionProperty(e2) {
    var t2;
    return null === (t2 = this.sessionPersistence) || void 0 === t2 ? void 0 : t2.props[e2];
  }
  toString() {
    var e2;
    let t2 = null !== (e2 = this.config.name) && void 0 !== e2 ? e2 : Nr;
    return t2 !== Nr && (t2 = Nr + "." + t2), t2;
  }
  _isIdentified() {
    var e2, t2;
    return "identified" === (null === (e2 = this.persistence) || void 0 === e2 ? void 0 : e2.get_property(ke)) || "identified" === (null === (t2 = this.sessionPersistence) || void 0 === t2 ? void 0 : t2.get_property(ke));
  }
  _hasPersonProcessing() {
    var e2, t2, i2, n2;
    return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && w(this.getGroups()) && (null === (e2 = this.persistence) || void 0 === e2 || null === (t2 = e2.props) || void 0 === t2 || !t2[K]) && (null === (i2 = this.persistence) || void 0 === i2 || null === (n2 = i2.props) || void 0 === n2 || !n2[Ce]));
  }
  _shouldCapturePageleave() {
    return true === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview;
  }
  createPersonProfile() {
    this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {});
  }
  _requirePersonProcessing(e2) {
    return "never" === this.config.person_profiles ? (T.error(e2 + ' was called, but process_person is set to "never". This call will be ignored.'), false) : (this._register_single(Ce, true), true);
  }
  _sync_opt_out_with_persistence() {
    var e2, t2;
    const i2 = this.consent.isOptedOut(), n2 = this.config.opt_out_persistence_by_default, s2 = this.config.disable_persistence || i2 && !!n2;
    var r2, o2;
    (null === (e2 = this.persistence) || void 0 === e2 ? void 0 : e2.disabled) !== s2 && (null === (r2 = this.persistence) || void 0 === r2 || r2.set_disabled(s2));
    (null === (t2 = this.sessionPersistence) || void 0 === t2 ? void 0 : t2.disabled) !== s2 && (null === (o2 = this.sessionPersistence) || void 0 === o2 || o2.set_disabled(s2));
  }
  opt_in_capturing(e2) {
    var t2;
    (this.consent.optInOut(true), this._sync_opt_out_with_persistence(), S(null == e2 ? void 0 : e2.captureEventName) || null != e2 && e2.captureEventName) && this.capture(null !== (t2 = null == e2 ? void 0 : e2.captureEventName) && void 0 !== t2 ? t2 : "$opt_in", null == e2 ? void 0 : e2.captureProperties, { send_instantly: true });
    this.config.capture_pageview && this._captureInitialPageview();
  }
  opt_out_capturing() {
    this.consent.optInOut(false), this._sync_opt_out_with_persistence();
  }
  has_opted_in_capturing() {
    return this.consent.isOptedIn();
  }
  has_opted_out_capturing() {
    return this.consent.isOptedOut();
  }
  clear_opt_in_out_capturing() {
    this.consent.reset(), this._sync_opt_out_with_persistence();
  }
  _is_bot() {
    return r ? hr(r, this.config.custom_blocked_useragents) : void 0;
  }
  _captureInitialPageview() {
    o && !this._initialPageviewCaptured && (this._initialPageviewCaptured = true, this.capture("$pageview", { title: o.title }, { send_instantly: true }));
  }
  debug(t2) {
    false === t2 ? (null == e || e.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: false })) : (null == e || e.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({ debug: true }));
  }
};
!function(e2, t2) {
  for (let i2 = 0; i2 < t2.length; i2++)
    e2.prototype[t2[i2]] = H(e2.prototype[t2[i2]]);
}(Wr, ["identify"]);
var zr = function() {
  const t2 = Dr[Nr] = new Wr();
  return function() {
    function t3() {
      t3.done || (t3.done = true, qr = false, D(Dr, function(e2) {
        e2._dom_loaded();
      }));
    }
    null != o && o.addEventListener && ("complete" === o.readyState ? t3() : o.addEventListener("DOMContentLoaded", t3, false)), e && G(e, "load", t3, true);
  }(), t2;
}();

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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1731046171312.9763";
}
function PosthogInit() {
  _s2();
  (0, import_react2.useEffect)(() => {
    const timer = setTimeout(() => {
      zr.init("phc_mLbknZ7mYfJxODEdfCwb8T2Rmc6S488fHIiU9TARqWM", {
        api_host: "https://us.i.posthog.com",
        person_profiles: "identified_only"
        // or 'always' for anonymous users
      });
    }, 5e3);
    return () => clearTimeout(timer);
  }, []);
  return null;
}
_s2(PosthogInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
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
/*! Bundled license information:

posthog-js/dist/module.js:
  (**
   * uuidv7: An experimental implementation of the proposed UUID Version 7
   *
   * @license Apache-2.0
   * @copyright 2021-2023 LiosK
   * @packageDocumentation
   *
   * from https://github.com/LiosK/uuidv7/blob/e501462ea3d23241de13192ceae726956f9b3b7d/src/index.ts
   *)
*/
//# sourceMappingURL=/build/entry.client-SCLE3D2D.js.map
