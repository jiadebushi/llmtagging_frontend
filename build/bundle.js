var app = (function () {
  "use strict";
  function t() {}
  const e = (t) => t;
  function n(t) {
    return t();
  }
  function r() {
    return Object.create(null);
  }
  function i(t) {
    t.forEach(n);
  }
  function o(t) {
    return "function" == typeof t;
  }
  function a(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function s(e, ...n) {
    if (null == e) return t;
    const r = e.subscribe(...n);
    return r.unsubscribe ? () => r.unsubscribe() : r;
  }
  function l(t, e, n) {
    t.$$.on_destroy.push(s(e, n));
  }
  function c(t, e, n, r) {
    if (t) {
      const i = u(t, e, n, r);
      return t[0](i);
    }
  }
  function u(t, e, n, r) {
    return t[1] && r
      ? (function (t, e) {
          for (const n in e) t[n] = e[n];
          return t;
        })(n.ctx.slice(), t[1](r(e)))
      : n.ctx;
  }
  function d(t, e, n, r) {
    if (t[2] && r) {
      const i = t[2](r(n));
      if (void 0 === e.dirty) return i;
      if ("object" == typeof i) {
        const t = [],
          n = Math.max(e.dirty.length, i.length);
        for (let r = 0; r < n; r += 1) t[r] = e.dirty[r] | i[r];
        return t;
      }
      return e.dirty | i;
    }
    return e.dirty;
  }
  function h(t, e, n, r, i, o) {
    if (i) {
      const a = u(e, n, r, o);
      t.p(a, i);
    }
  }
  function p(t) {
    if (t.ctx.length > 32) {
      const e = [],
        n = t.ctx.length / 32;
      for (let t = 0; t < n; t++) e[t] = -1;
      return e;
    }
    return -1;
  }
  function f(t) {
    return null == t ? "" : t;
  }
  function m(e) {
    return e && o(e.destroy) ? e.destroy : t;
  }
  const g = "undefined" != typeof window;
  let _ = g ? () => window.performance.now() : () => Date.now(),
    v = g ? (t) => requestAnimationFrame(t) : t;
  const y = new Set();
  function b(t) {
    y.forEach((e) => {
      e.c(t) || (y.delete(e), e.f());
    }),
      0 !== y.size && v(b);
  }
  function w(t) {
    let e;
    return (
      0 === y.size && v(b),
      {
        promise: new Promise((n) => {
          y.add((e = { c: t, f: n }));
        }),
        abort() {
          y.delete(e);
        },
      }
    );
  }
  function S(t, e) {
    t.appendChild(e);
  }
  function E(t) {
    if (!t) return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument;
  }
  function x(t) {
    const e = R("style");
    return (
      (function (t, e) {
        S(t.head || t, e), e.sheet;
      })(E(t), e),
      e.sheet
    );
  }
  function k(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function T(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function C(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function R(t) {
    return document.createElement(t);
  }
  function I(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function N(t) {
    return document.createTextNode(t);
  }
  function $() {
    return N(" ");
  }
  function L() {
    return N("");
  }
  function M(t, e, n, r) {
    return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
  }
  function A(t) {
    return function (e) {
      return e.preventDefault(), t.call(this, e);
    };
  }
  function D(t) {
    return function (e) {
      return e.stopPropagation(), t.call(this, e);
    };
  }
  function O(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function U(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function P(t, e) {
    for (let n = 0; n < t.options.length; n += 1) {
      const r = t.options[n];
      if (r.__value === e) return void (r.selected = !0);
    }
    t.selectedIndex = -1;
  }
  let B;
  function F() {
    if (void 0 === B) {
      B = !1;
      try {
        "undefined" != typeof window && window.parent && window.parent.document;
      } catch (t) {
        B = !0;
      }
    }
    return B;
  }
  function z(t, e, n) {
    t.classList[n ? "add" : "remove"](e);
  }
  function G(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
    const i = document.createEvent("CustomEvent");
    return i.initCustomEvent(t, n, r, e), i;
  }
  class j {
    constructor(t = !1) {
      (this.is_svg = !1), (this.is_svg = t), (this.e = this.n = null);
    }
    c(t) {
      this.h(t);
    }
    m(t, e, n = null) {
      this.e ||
        (this.is_svg ? (this.e = I(e.nodeName)) : (this.e = R(e.nodeName)),
        (this.t = e),
        this.c(t)),
        this.i(n);
    }
    h(t) {
      (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
    }
    i(t) {
      for (let e = 0; e < this.n.length; e += 1) k(this.t, this.n[e], t);
    }
    p(t) {
      this.d(), this.h(t), this.i(this.a);
    }
    d() {
      this.n.forEach(T);
    }
  }
  function W(t, e) {
    return new t(e);
  }
  const Y = new Map();
  let H,
    q = 0;
  function V(t, e, n, r, i, o, a, s = 0) {
    const l = 16.666 / r;
    let c = "{\n";
    for (let t = 0; t <= 1; t += l) {
      const r = e + (n - e) * o(t);
      c += 100 * t + `%{${a(r, 1 - r)}}\n`;
    }
    const u = c + `100% {${a(n, 1 - n)}}\n}`,
      d = `__svelte_${(function (t) {
        let e = 5381,
          n = t.length;
        for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
        return e >>> 0;
      })(u)}_${s}`,
      h = E(t),
      { stylesheet: p, rules: f } =
        Y.get(h) ||
        (function (t, e) {
          const n = { stylesheet: x(e), rules: {} };
          return Y.set(t, n), n;
        })(h, t);
    f[d] ||
      ((f[d] = !0), p.insertRule(`@keyframes ${d} ${u}`, p.cssRules.length));
    const m = t.style.animation || "";
    return (
      (t.style.animation = `${
        m ? `${m}, ` : ""
      }${d} ${r}ms linear ${i}ms 1 both`),
      (q += 1),
      d
    );
  }
  function Z(t, e) {
    const n = (t.style.animation || "").split(", "),
      r = n.filter(
        e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf("__svelte")
      ),
      i = n.length - r.length;
    i &&
      ((t.style.animation = r.join(", ")),
      (q -= i),
      q ||
        v(() => {
          q ||
            (Y.forEach((t) => {
              const { ownerNode: e } = t.stylesheet;
              e && T(e);
            }),
            Y.clear());
        }));
  }
  function X(t) {
    H = t;
  }
  function K() {
    if (!H) throw new Error("Function called outside component initialization");
    return H;
  }
  function Q(t) {
    K().$$.on_mount.push(t);
  }
  function J(t) {
    K().$$.on_destroy.push(t);
  }
  function tt() {
    const t = K();
    return (e, n, { cancelable: r = !1 } = {}) => {
      const i = t.$$.callbacks[e];
      if (i) {
        const o = G(e, n, { cancelable: r });
        return (
          i.slice().forEach((e) => {
            e.call(t, o);
          }),
          !o.defaultPrevented
        );
      }
      return !0;
    };
  }
  function et(t, e) {
    return K().$$.context.set(t, e), e;
  }
  function nt(t) {
    return K().$$.context.get(t);
  }
  function rt(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach((t) => t.call(this, e));
  }
  const it = [],
    ot = [],
    at = [],
    st = [],
    lt = Promise.resolve();
  let ct = !1;
  function ut(t) {
    at.push(t);
  }
  const dt = new Set();
  let ht,
    pt = 0;
  function ft() {
    const t = H;
    do {
      for (; pt < it.length; ) {
        const t = it[pt];
        pt++, X(t), mt(t.$$);
      }
      for (X(null), it.length = 0, pt = 0; ot.length; ) ot.pop()();
      for (let t = 0; t < at.length; t += 1) {
        const e = at[t];
        dt.has(e) || (dt.add(e), e());
      }
      at.length = 0;
    } while (it.length);
    for (; st.length; ) st.pop()();
    (ct = !1), dt.clear(), X(t);
  }
  function mt(t) {
    if (null !== t.fragment) {
      t.update(), i(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(ut);
    }
  }
  function gt() {
    return (
      ht ||
        ((ht = Promise.resolve()),
        ht.then(() => {
          ht = null;
        })),
      ht
    );
  }
  function _t(t, e, n) {
    t.dispatchEvent(G(`${e ? "intro" : "outro"}${n}`));
  }
  const vt = new Set();
  let yt;
  function bt() {
    yt = { r: 0, c: [], p: yt };
  }
  function wt() {
    yt.r || i(yt.c), (yt = yt.p);
  }
  function St(t, e) {
    t && t.i && (vt.delete(t), t.i(e));
  }
  function Et(t, e, n, r) {
    if (t && t.o) {
      if (vt.has(t)) return;
      vt.add(t),
        yt.c.push(() => {
          vt.delete(t), r && (n && t.d(1), r());
        }),
        t.o(e);
    } else r && r();
  }
  const xt = { duration: 0 };
  function kt(n, r, i) {
    const a = { direction: "in" };
    let s,
      l,
      c = r(n, i, a),
      u = !1,
      d = 0;
    function h() {
      s && Z(n, s);
    }
    function p() {
      const {
        delay: r = 0,
        duration: i = 300,
        easing: o = e,
        tick: a = t,
        css: p,
      } = c || xt;
      p && (s = V(n, 0, 1, i, r, o, p, d++)), a(0, 1);
      const f = _() + r,
        m = f + i;
      l && l.abort(),
        (u = !0),
        ut(() => _t(n, !0, "start")),
        (l = w((t) => {
          if (u) {
            if (t >= m) return a(1, 0), _t(n, !0, "end"), h(), (u = !1);
            if (t >= f) {
              const e = o((t - f) / i);
              a(e, 1 - e);
            }
          }
          return u;
        }));
    }
    let f = !1;
    return {
      start() {
        f || ((f = !0), Z(n), o(c) ? ((c = c(a)), gt().then(p)) : p());
      },
      invalidate() {
        f = !1;
      },
      end() {
        u && (h(), (u = !1));
      },
    };
  }
  function Tt(n, r, a, s) {
    const l = { direction: "both" };
    let c = r(n, a, l),
      u = s ? 0 : 1,
      d = null,
      h = null,
      p = null;
    function f() {
      p && Z(n, p);
    }
    function m(t, e) {
      const n = t.b - u;
      return (
        (e *= Math.abs(n)),
        {
          a: u,
          b: t.b,
          d: n,
          duration: e,
          start: t.start,
          end: t.start + e,
          group: t.group,
        }
      );
    }
    function g(r) {
      const {
          delay: o = 0,
          duration: a = 300,
          easing: s = e,
          tick: l = t,
          css: g,
        } = c || xt,
        v = { start: _() + o, b: r };
      r || ((v.group = yt), (yt.r += 1)),
        d || h
          ? (h = v)
          : (g && (f(), (p = V(n, u, r, a, o, s, g))),
            r && l(0, 1),
            (d = m(v, a)),
            ut(() => _t(n, r, "start")),
            w((t) => {
              if (
                (h &&
                  t > h.start &&
                  ((d = m(h, a)),
                  (h = null),
                  _t(n, d.b, "start"),
                  g && (f(), (p = V(n, u, d.b, d.duration, 0, s, c.css)))),
                d)
              )
                if (t >= d.end)
                  l((u = d.b), 1 - u),
                    _t(n, d.b, "end"),
                    h || (d.b ? f() : --d.group.r || i(d.group.c)),
                    (d = null);
                else if (t >= d.start) {
                  const e = t - d.start;
                  (u = d.a + d.d * s(e / d.duration)), l(u, 1 - u);
                }
              return !(!d && !h);
            }));
    }
    return {
      run(t) {
        o(c)
          ? gt().then(() => {
              (c = c(l)), g(t);
            })
          : g(t);
      },
      end() {
        f(), (d = h = null);
      },
    };
  }
  function Ct(t) {
    t && t.c();
  }
  function Rt(t, e, r, a) {
    const { fragment: s, after_update: l } = t.$$;
    s && s.m(e, r),
      a ||
        ut(() => {
          const e = t.$$.on_mount.map(n).filter(o);
          t.$$.on_destroy ? t.$$.on_destroy.push(...e) : i(e),
            (t.$$.on_mount = []);
        }),
      l.forEach(ut);
  }
  function It(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (i(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function Nt(t, e) {
    -1 === t.$$.dirty[0] &&
      (it.push(t), ct || ((ct = !0), lt.then(ft)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function $t(e, n, o, a, s, l, c, u = [-1]) {
    const d = H;
    X(e);
    const h = (e.$$ = {
      fragment: null,
      ctx: [],
      props: l,
      update: t,
      not_equal: s,
      bound: r(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(n.context || (d ? d.$$.context : [])),
      callbacks: r(),
      dirty: u,
      skip_bound: !1,
      root: n.target || d.$$.root,
    });
    c && c(h.root);
    let p = !1;
    if (
      ((h.ctx = o
        ? o(e, n.props || {}, (t, n, ...r) => {
            const i = r.length ? r[0] : n;
            return (
              h.ctx &&
                s(h.ctx[t], (h.ctx[t] = i)) &&
                (!h.skip_bound && h.bound[t] && h.bound[t](i), p && Nt(e, t)),
              n
            );
          })
        : []),
      h.update(),
      (p = !0),
      i(h.before_update),
      (h.fragment = !!a && a(h.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(n.target);
        h.fragment && h.fragment.l(t), t.forEach(T);
      } else h.fragment && h.fragment.c();
      n.intro && St(e.$$.fragment),
        Rt(e, n.target, n.anchor, n.customElement),
        ft();
    }
    X(d);
  }
  class Lt {
    $destroy() {
      It(this, 1), (this.$destroy = t);
    }
    $on(e, n) {
      if (!o(n)) return t;
      const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        r.push(n),
        () => {
          const t = r.indexOf(n);
          -1 !== t && r.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  const Mt = [
      { langCode: "DE", langCodeForSpeech: "de-DE", supportsFormality: !0 },
      {
        langCode: "EN-GB",
        langCodeForSpeech: "en",
        voice: "Google UK English Male",
      },
      {
        langCode: "EN-US",
        langCodeForSpeech: "en",
        voice: "Google UK English Male",
      },
      {
        langCode: "FR",
        langCodeForSpeech: "fr-FR",
        voice: "Thomas",
        supportsFormality: !0,
      },
      {
        langCode: "ES",
        langCodeForSpeech: "es-ES",
        voice: "Google español",
        label: "ES",
        supportsFormality: !0,
      },
      { langCode: "IT", langCodeForSpeech: "it-IT", supportsFormality: !0 },
      { langCode: "ID", langCodeForSpeech: "id-ID" },
      { langCode: "PL", langCodeForSpeech: "pl-PL", supportsFormality: !0 },
      {
        langCode: "NL",
        langCodeForSpeech: "nl-NL",
        voice: "Google Nederlands",
        label: "NL",
        supportsFormality: !0,
      },
      { langCode: "PT-PT", langCodeForSpeech: "pt-PT", supportsFormality: !0 },
      { langCode: "PT-BR", langCodeForSpeech: "pt-PT", supportsFormality: !0 },
      { langCode: "RU", langCodeForSpeech: "ru-RU", supportsFormality: !0 },
      { langCode: "ZH", langCodeForSpeech: "zh-CN" },
      { langCode: "JA", langCodeForSpeech: "ja-JP", supportsFormality: !0 },
      { langCode: "BG", langCodeForSpeech: "bg-BG" },
      { langCode: "CS", langCodeForSpeech: "cs-CZ" },
      { langCode: "DA", langCodeForSpeech: "da-DK" },
      { langCode: "ET", langCodeForSpeech: "et" },
      { langCode: "FI", langCodeForSpeech: "fi-FI", voice: "Satu" },
      { langCode: "EL", langCodeForSpeech: "el-GR" },
      { langCode: "HU", langCodeForSpeech: "hu-HU" },
      { langCode: "LV", langCodeForSpeech: "lv" },
      { langCode: "LT", langCodeForSpeech: "lt" },
      { langCode: "RO", langCodeForSpeech: "ro-RO" },
      { langCode: "SK", langCodeForSpeech: "sk-SK" },
      { langCode: "SL", langCodeForSpeech: "sl" },
      { langCode: "SV", langCodeForSpeech: "sv-SE" },
      { langCode: "TR", langCodeForSpeech: "tr-TR" },
      { langCode: "UK", langCodeForSpeech: "uk-UA" },
      { langCode: "NB", langCodeForSpeech: "nb-NO" },
      { langCode: "KO", langCodeForSpeech: "ko-KR" },
    ],
    At = 0,
    Dt = 1,
    Ot = 2,
    Ut = "",
    Pt = "ONGOING_TRANSLATION",
    Bt = "IS_TRANLSATION_COMPLETE",
    Ft = "ON_GOING_AUTODETECTION",
    zt = "inline",
    Gt = 1,
    jt = { deepl_inline_ui: { z_index: 2147483650 } },
    Wt = {
      inlineTranslationTriggerIcon: "INLINE_TRANSLATION_TRIGGER_ICON",
      inlineTranslationSettingsIcon: "INLINE_TRANSLATION_SETTINGS_ICON",
      inlineTranslationSettingPopup: "INLINE_TRANSLATION_SETTING_POPUP",
      inputTranslationTriggerIcon: "INPUT_TRANSLATION_TRIGGER_ICON",
      inputTranslationSettingsIcon: "INPUT_TRANSLATION_SETTINGS_ICON",
      inputTranslationSettingPopup: "INPUT_TRANSLATION_SETTING_POPUP",
      settingsPageFPT: "SETTINGS_PAGE_FPT",
      settingsPageReading: "SETTINGS_PAGE_READING",
      settingsPageWriting: "SETTINGS_PAGE_WRITING",
      fptHideModal: "FPT_HIDE_MODAL",
      inputTranslationReadMoreLink: "INPUT_TRANSLATION_READ_MORE_LINK",
      inlineTranslationReadMoreLink: "INLINE_TRANSLATION_READ_MORE_LINK",
      fptTranslationReadMoreLink: "FPT_TRANSLATION_READ_MORE_LINK",
      extensionHubToggleSwitch: "EXTENSION_HUB_TOGGLE_SWITCH",
      hubCustomizeShortcut: "HUB_CUSTOMIZE_SHORTCUT",
      hubLoginButton: "HUB_LOGIN_BUTTON",
      hubUpgradeToProLink: "HUB_UPGRADE_TO_PRO_LINK",
      hubTryProLink: "HUB_TRY_PRO_LINK",
      settingsPageCustomizeShortcutButton:
        "SETTINGS_PAGE_CUSTOMIZE_SHORTCUT_BUTTON",
      hubFPTEnableCheckbox: "HUB_FPT_ENABLE_CHECKBOX",
      hubFPTDisableCheckbox: "HUB_FPT_DISABLE_CHECKBOX",
      deeplWriteIcon: "DEEPL_WRITE_ICON",
      gmailOnboardingPopup: "gmailOnboardingPopup",
      gmailOnboardingIcon: "gmailOnboardingIcon",
      gmailCharLimitLogin: "gmailCharLimitLogin",
      gmailFeedbackSurvey: "gmailFeedbackSurvey",
      hubViewIntegrations: "HUB_VIEW_INTEGRATIONS",
      hubCloseCustomizationsWidget: "HUB_CLOSE_CUSTOMIZATIONS_WIDGET",
      gslidesFeedbackSurvey: "GSLIDES_FEEDBACK_SURVEY",
      gslidesCharLimitLogin: "GSLIDES_CHAR_LIMIT_LOGIN",
      zendeskTryProLink: "ZENDESK_TRY_PRO_LINK",
    },
    Yt = "trigger-translation",
    Ht = "CLICK_ON_LOGOUT_MENU_ENTRY",
    qt = "DISABLE_EVERYWHERE",
    Vt = "ENABLE_EVERYWHERE",
    Zt = "INPUT_TRANSLATION",
    Xt = "INLINE_TRANSLATION",
    Kt = "customizations",
    Qt = {
      default: "DEFAULT",
      gdocs: "GDOCS",
      zendesk: "ZENDESK",
      whatsappWeb: "WHATSAPP_WEB",
      twitter: "TWITTER",
      gmail: "GMAIL",
      gslides: "GSLIDES",
    },
    Jt = { translate: "translate", write: "write" },
    te = "ANONYMOUS_USER_LIMIT_EXCEEDED",
    ee = "FREE_ACCOUNT_LIMIT_EXCEEDED",
    ne = "PRO_TRIAL",
    re = "LOGIN",
    ie = "SIGNUP";
  function oe() {
    return !!chrome && !!chrome.tabs;
  }
  const ae = (t) => t.substring(0, 2).toUpperCase(),
    se = () => {
      let t,
        e,
        n = !1;
      return Mt.map((r) => {
        let i;
        return (
          (n = ["EN-US", "EN-GB", "PT-PT", "PT-BR"].includes(r.langCode)),
          n &&
            (({ optionLabel: t, selectedLabel: e } = (function (t) {
              switch (t.langCode) {
                case "EN-US":
                  return {
                    optionLabel: chrome.i18n.getMessage(
                      "supported_languages_EN_US"
                    ),
                    selectedLabel: chrome.i18n.getMessage(
                      "selected_languages_EN_US"
                    ),
                  };
                case "EN-GB":
                  return {
                    optionLabel: chrome.i18n.getMessage(
                      "supported_languages_EN_UK"
                    ),
                    selectedLabel: chrome.i18n.getMessage(
                      "selected_languages_EN_UK"
                    ),
                  };
                case "PT-PT":
                  return {
                    optionLabel: chrome.i18n.getMessage(
                      "supported_languages_PT_PT"
                    ),
                    selectedLabel: chrome.i18n.getMessage(
                      "selected_languages_PT_PT"
                    ),
                  };
                case "PT-BR":
                  return {
                    optionLabel: chrome.i18n.getMessage(
                      "supported_languages_PT_BR"
                    ),
                    selectedLabel: chrome.i18n.getMessage(
                      "selected_languages_PT_BR"
                    ),
                  };
                default:
                  return {
                    optionLabel: chrome.i18n.getMessage(
                      "supported_languages_undefined"
                    ),
                    selectedLabel: chrome.i18n.getMessage(
                      "supported_languages_undefined"
                    ),
                  };
              }
            })(r)),
            (i = r.langCode.slice(0, 2).toLowerCase() + r.langCode.slice(2))),
          {
            value: r.langCode,
            label: n
              ? t
              : chrome.i18n.getMessage(`supported_languages_${r.langCode}`),
            selectedOptionLabel: n
              ? e
              : chrome.i18n.getMessage(`supported_languages_${r.langCode}`),
            regionalVariant: i,
          }
        );
      }).sort((t, e) =>
        t.label.localeCompare(e.label, chrome.i18n.getUILanguage())
      );
    };
  function le(t) {
    return "EN" === t
      ? ["EN-GB", "EN-US"]
      : "PT" === t
      ? ["PT-PT", "PT-BR"]
      : null;
  }
  function ce(t) {
    const e = t - 1;
    return e * e * e + 1;
  }
  function ue(
    t,
    {
      delay: e = 0,
      duration: n = 400,
      easing: r = ce,
      x: i = 0,
      y: o = 0,
      opacity: a = 0,
    } = {}
  ) {
    const s = getComputedStyle(t),
      l = +s.opacity,
      c = "none" === s.transform ? "" : s.transform,
      u = l * (1 - a);
    return {
      delay: e,
      duration: n,
      easing: r,
      css: (t, e) =>
        `\n\t\t\ttransform: ${c} translate(${(1 - t) * i}px, ${
          (1 - t) * o
        }px);\n\t\t\topacity: ${l - u * e}`,
    };
  }
  function de(t, { isShadow: e = !1, exceptions: n = [] } = {}) {
    const r = (r) => {
      const i = e ? r.composedPath()[0] : r.target;
      !t ||
        t.contains(i) ||
        r.defaultPrevented ||
        (function (t, e) {
          for (let n of e) if (t.closest(n)) return !0;
          return !1;
        })(i, n) ||
        t.dispatchEvent(new CustomEvent("click_outside", t));
    };
    return (
      document.addEventListener("click", r, !0),
      {
        destroy() {
          document.removeEventListener("click", r, !0);
        },
      }
    );
  }
  function he(t, e, n) {
    const r = t.slice();
    return (r[39] = e[n]), r;
  }
  function pe(e) {
    let n,
      r,
      i,
      o = e[3],
      a = [];
    for (let t = 0; t < o.length; t += 1) a[t] = ge(he(e, o, t));
    return {
      c() {
        n = R("ul");
        for (let t = 0; t < a.length; t += 1) a[t].c();
        O(n, "id", "dropdown_list"),
          O(n, "class", "dropdown__list svelte-1muw6en"),
          O(n, "role", "listbox"),
          O(n, "aria-labelledby", "dropdown_option"),
          O(n, "tabindex", "-1"),
          O(
            n,
            "style",
            (r =
              "up" === e[12]
                ? "bottom: 30px"
                : `height: ${e[17].height}; top: ${e[17].top};`)
          ),
          O(n, "data-qa", e[6]),
          z(n, "alternate-dropdown-list", "sm" === e[8]),
          z(n, "align-right", e[9]);
      },
      m(t, e) {
        k(t, n, e);
        for (let t = 0; t < a.length; t += 1) a[t].m(n, null);
      },
      p(t, e) {
        if (1056779 & e[0]) {
          let r;
          for (o = t[3], r = 0; r < o.length; r += 1) {
            const i = he(t, o, r);
            a[r] ? a[r].p(i, e) : ((a[r] = ge(i)), a[r].c(), a[r].m(n, null));
          }
          for (; r < a.length; r += 1) a[r].d(1);
          a.length = o.length;
        }
        135168 & e[0] &&
          r !==
            (r =
              "up" === t[12]
                ? "bottom: 30px"
                : `height: ${t[17].height}; top: ${t[17].top};`) &&
          O(n, "style", r),
          64 & e[0] && O(n, "data-qa", t[6]),
          256 & e[0] && z(n, "alternate-dropdown-list", "sm" === t[8]),
          512 & e[0] && z(n, "align-right", t[9]);
      },
      i(t) {
        i ||
          ut(() => {
            (i = kt(n, ue, { y: -5, duration: 500 })), i.start();
          });
      },
      o: t,
      d(t) {
        t && T(n), C(a, t);
      },
    };
  }
  function fe(t) {
    let e,
      n = t[39].label + "";
    return {
      c() {
        e = N(n);
      },
      m(t, n) {
        k(t, e, n);
      },
      p(t, r) {
        8 & r[0] && n !== (n = t[39].label + "") && U(e, n);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function me(t) {
    let e,
      n,
      r = t[39].label + "";
    return {
      c() {
        (e = new j(!1)), (n = L()), (e.a = n);
      },
      m(t, i) {
        e.m(r, t, i), k(t, n, i);
      },
      p(t, n) {
        8 & n[0] && r !== (r = t[39].label + "") && e.p(r);
      },
      d(t) {
        t && T(n), t && e.d();
      },
    };
  }
  function ge(t) {
    let e, n, r, o, a, s, l;
    function c(t, e) {
      return t[13] ? me : fe;
    }
    let u = c(t),
      d = u(t);
    function h() {
      return t[31](t[39]);
    }
    return {
      c() {
        (e = R("li")),
          d.c(),
          (n = $()),
          O(e, "role", "option"),
          O(e, "data-option-value", (r = t[39].value)),
          O(e, "data-option-regionalvariant", (o = t[39].regionalVariant)),
          O(e, "aria-selected", (a = t[0] === t[39])),
          O(e, "class", "svelte-1muw6en"),
          z(e, "selected", t[0] === t[39]);
      },
      m(r, i) {
        k(r, e, i),
          d.m(e, null),
          S(e, n),
          s ||
            ((l = [M(e, "click", h), M(e, "mousedown", D(A(t[28])))]),
            (s = !0));
      },
      p(i, s) {
        u === (u = c((t = i))) && d
          ? d.p(t, s)
          : (d.d(1), (d = u(t)), d && (d.c(), d.m(e, n))),
          8 & s[0] && r !== (r = t[39].value) && O(e, "data-option-value", r),
          8 & s[0] &&
            o !== (o = t[39].regionalVariant) &&
            O(e, "data-option-regionalvariant", o),
          9 & s[0] && a !== (a = t[0] === t[39]) && O(e, "aria-selected", a),
          9 & s[0] && z(e, "selected", t[0] === t[39]);
      },
      d(t) {
        t && T(e), d.d(), (s = !1), i(l);
      },
    };
  }
  function _e(e) {
    let n,
      r,
      o,
      a,
      s,
      l,
      c,
      u,
      d = e[1] && pe(e);
    return {
      c() {
        (n = R("div")),
          (r = R("button")),
          (o = N(e[18])),
          (a = $()),
          d && d.c(),
          O(r, "aria-haspopup", "listbox"),
          O(r, "id", "dropdown_button"),
          O(r, "aria-labelledby", "dropdown_option dropdown_button"),
          O(r, "aria-expanded", e[1]),
          O(r, "data-qa", e[5]),
          O(r, "class", "svelte-1muw6en"),
          z(r, "dropdown-label", "original" === e[7]),
          z(r, "dropdown-label-alternate", "alternate" === e[7]),
          z(r, "dropdown-label-zendesk", "zendesk" === e[7]),
          z(r, "dropdown-label-full-width", e[10]),
          z(r, "dropdown-label-borderless", e[11]),
          z(r, "dropup", "up" === e[12]),
          z(r, "extra-padding", e[14]),
          O(
            n,
            "class",
            (s = f(`dropdown__wrapper ${e[4]}`) + " svelte-1muw6en")
          ),
          O(n, "style", e[19]),
          ut(() => e[33].call(n)),
          z(n, "disabled", e[2]);
      },
      m(t, i) {
        k(t, n, i),
          S(n, r),
          S(r, o),
          e[30](r),
          S(n, a),
          d && d.m(n, null),
          (l = (function (t, e) {
            "static" === getComputedStyle(t).position &&
              (t.style.position = "relative");
            const n = R("iframe");
            n.setAttribute(
              "style",
              "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
            ),
              n.setAttribute("aria-hidden", "true"),
              (n.tabIndex = -1);
            const r = F();
            let i;
            return (
              r
                ? ((n.src =
                    "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
                  (i = M(window, "message", (t) => {
                    t.source === n.contentWindow && e();
                  })))
                : ((n.src = "about:blank"),
                  (n.onload = () => {
                    i = M(n.contentWindow, "resize", e);
                  })),
              S(t, n),
              () => {
                (r || (i && n.contentWindow)) && i(), T(n);
              }
            );
          })(n, e[33].bind(n))),
          c ||
            ((u = [
              M(r, "click", e[21]),
              M(r, "mousedown", D(A(e[29]))),
              m(de.call(null, n, { isShadow: !0 })),
              M(n, "click_outside", e[32]),
            ]),
            (c = !0));
      },
      p(t, e) {
        262144 & e[0] && U(o, t[18]),
          2 & e[0] && O(r, "aria-expanded", t[1]),
          32 & e[0] && O(r, "data-qa", t[5]),
          128 & e[0] && z(r, "dropdown-label", "original" === t[7]),
          128 & e[0] && z(r, "dropdown-label-alternate", "alternate" === t[7]),
          128 & e[0] && z(r, "dropdown-label-zendesk", "zendesk" === t[7]),
          1024 & e[0] && z(r, "dropdown-label-full-width", t[10]),
          2048 & e[0] && z(r, "dropdown-label-borderless", t[11]),
          4096 & e[0] && z(r, "dropup", "up" === t[12]),
          16384 & e[0] && z(r, "extra-padding", t[14]),
          t[1]
            ? d
              ? (d.p(t, e), 2 & e[0] && St(d, 1))
              : ((d = pe(t)), d.c(), St(d, 1), d.m(n, null))
            : d && (d.d(1), (d = null)),
          16 & e[0] &&
            s !== (s = f(`dropdown__wrapper ${t[4]}`) + " svelte-1muw6en") &&
            O(n, "class", s),
          524288 & e[0] && O(n, "style", t[19]),
          20 & e[0] && z(n, "disabled", t[2]);
      },
      i(t) {
        St(d);
      },
      o: t,
      d(t) {
        t && T(n), e[30](null), d && d.d(), l(), (c = !1), i(u);
      },
    };
  }
  function ve(t, e, n) {
    let { isOpen: r = !1 } = e,
      { disabled: i = !1 } = e,
      { items: o = [] } = e,
      { placeholder: a = "" } = e,
      { customClass: s = "" } = e,
      { selectedOption: l } = e,
      { defaultOption: c } = e,
      { dataQaButton: u = "dl-dropdown-button" } = e,
      { dataQaList: d = "dl-dropdown-list" } = e,
      { variant: h = "original" } = e,
      { fontSize: p = "default" } = e,
      { alignRight: f = !0 } = e,
      { extraText: m = "" } = e,
      { isFullWidth: g = !1 } = e,
      { isBorderless: _ = !1 } = e,
      { direction: v = "down" } = e,
      { allowLabelHtml: y = !1 } = e,
      { showSortCode: b = !1 } = e,
      { extraPadding: w = !1 } = e,
      { dropdownMaxHeight: S = 300 } = e;
    const E = nt("deepl_settings");
    let x,
      k,
      T = 0,
      C = {},
      R = {},
      I = {},
      N = "visibility: hidden; opacity:0; height:0;";
    const $ = tt();
    function L() {
      (C.spaceAbove = Math.abs(x.getBoundingClientRect().top)),
        (C.spaceBelow = Math.abs(
          window.innerHeight - x.getBoundingClientRect().bottom
        ));
    }
    c && (l = c),
      Q(() => {
        setTimeout(() => {
          n(19, (N = ""));
        }, 100);
      });
    return (
      (t.$$set = (t) => {
        "isOpen" in t && n(1, (r = t.isOpen)),
          "disabled" in t && n(2, (i = t.disabled)),
          "items" in t && n(3, (o = t.items)),
          "placeholder" in t && n(22, (a = t.placeholder)),
          "customClass" in t && n(4, (s = t.customClass)),
          "selectedOption" in t && n(0, (l = t.selectedOption)),
          "defaultOption" in t && n(23, (c = t.defaultOption)),
          "dataQaButton" in t && n(5, (u = t.dataQaButton)),
          "dataQaList" in t && n(6, (d = t.dataQaList)),
          "variant" in t && n(7, (h = t.variant)),
          "fontSize" in t && n(8, (p = t.fontSize)),
          "alignRight" in t && n(9, (f = t.alignRight)),
          "extraText" in t && n(24, (m = t.extraText)),
          "isFullWidth" in t && n(10, (g = t.isFullWidth)),
          "isBorderless" in t && n(11, (_ = t.isBorderless)),
          "direction" in t && n(12, (v = t.direction)),
          "allowLabelHtml" in t && n(13, (y = t.allowLabelHtml)),
          "showSortCode" in t && n(25, (b = t.showSortCode)),
          "extraPadding" in t && n(14, (w = t.extraPadding)),
          "dropdownMaxHeight" in t && n(26, (S = t.dropdownMaxHeight));
      }),
      (t.$$.update = () => {
        134250497 & t.$$.dirty[0] &&
          (l &&
            ((I?.value === l?.value &&
              I?.regionalVariant === l?.regionalVariant) ||
              (n(27, (I = l)), $("valueselected", { selectedOption: l }))),
          T && L()),
          54525953 & t.$$.dirty[0] &&
            n(
              18,
              (k = l
                ? `${b ? l.value : l.selectedOptionLabel}${m ? ` ${m}` : ""}`
                : `${a}${m ? ` ${m}` : ""}`)
            );
      }),
      [
        l,
        r,
        i,
        o,
        s,
        u,
        d,
        h,
        p,
        f,
        g,
        _,
        v,
        y,
        w,
        T,
        x,
        R,
        k,
        N,
        E,
        function () {
          "down" === v &&
            (function () {
              if (
                (L(),
                n(17, (R.top = "auto"), R),
                n(17, (R.height = `${S}px`), R),
                C.spaceBelow > C.spaceAbove)
              )
                C.spaceBelow <= S &&
                  n(17, (R.height = Math.ceil(0.8 * C.spaceBelow) + "px"), R);
              else {
                let t = S;
                C.spaceAbove <= S && (t = Math.ceil(0.8 * C.spaceAbove)),
                  n(17, (R.height = `${t}px`), R),
                  n(17, (R.top = "-" + (t + 2) + "px"), R);
              }
            })(),
            n(1, (r = !r)),
            (function () {
              let t = x
                .getRootNode()
                .querySelector("ul li[aria-selected=true]");
              setTimeout(() => {
                t?.scrollIntoView({ block: "nearest" });
              }, 0);
            })();
        },
        a,
        c,
        m,
        b,
        S,
        I,
        function (e) {
          rt.call(this, t, e);
        },
        function (e) {
          rt.call(this, t, e);
        },
        function (t) {
          ot[t ? "unshift" : "push"](() => {
            (x = t), n(16, x);
          });
        },
        (t) => {
          n(1, (r = !1)),
            n(0, (l = t)),
            E.set({ regionalVariant: t.regionalVariant || "" });
        },
        () => {
          n(1, (r = !1));
        },
        function () {
          (T = this.clientWidth), n(15, T);
        },
      ]
    );
  }
  class ye extends Lt {
    constructor(t) {
      super(),
        $t(
          this,
          t,
          ve,
          _e,
          a,
          {
            isOpen: 1,
            disabled: 2,
            items: 3,
            placeholder: 22,
            customClass: 4,
            selectedOption: 0,
            defaultOption: 23,
            dataQaButton: 5,
            dataQaList: 6,
            variant: 7,
            fontSize: 8,
            alignRight: 9,
            extraText: 24,
            isFullWidth: 10,
            isBorderless: 11,
            direction: 12,
            allowLabelHtml: 13,
            showSortCode: 25,
            extraPadding: 14,
            dropdownMaxHeight: 26,
          },
          null,
          [-1, -1]
        );
    }
  }
  function be(t, e, n) {
    const r = t.slice();
    return (r[21] = e[n]), r;
  }
  function we(t) {
    let e, n, r, i, o;
    return (
      (n = new ye({
        props: {
          disabled: t[0],
          items: t[15],
          defaultOption: t[16],
          placeholder: t[13],
          dataQaButton: "deepl-language-selection-button",
          dataQaList: "deepl-language-selection-list",
          customClass: t[3],
          variant: t[5],
          fontSize: t[6],
          alignRight: t[7],
          isBorderless: t[8],
          showSortCode: t[9],
          extraPadding: t[10],
          dropdownMaxHeight: t[11],
        },
      })),
      n.$on("valueselected", t[14]),
      {
        c() {
          (e = R("div")), Ct(n.$$.fragment);
        },
        m(a, s) {
          k(a, e, s),
            Rt(n, e, null),
            (r = !0),
            i || ((o = M(e, "mousedown", D(A(t[19])))), (i = !0));
        },
        p(t, e) {
          const r = {};
          1 & e && (r.disabled = t[0]),
            8 & e && (r.customClass = t[3]),
            32 & e && (r.variant = t[5]),
            64 & e && (r.fontSize = t[6]),
            128 & e && (r.alignRight = t[7]),
            256 & e && (r.isBorderless = t[8]),
            512 & e && (r.showSortCode = t[9]),
            1024 & e && (r.extraPadding = t[10]),
            2048 & e && (r.dropdownMaxHeight = t[11]),
            n.$set(r);
        },
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(e), It(n), (i = !1), o();
        },
      }
    );
  }
  function Se(e) {
    let n,
      r,
      i,
      o,
      a,
      s,
      l,
      c = e[2] && Ee(),
      u = e[15],
      d = [];
    for (let t = 0; t < u.length; t += 1) d[t] = xe(be(e, u, t));
    return {
      c() {
        (n = R("div")), (r = R("select")), c && c.c(), (i = L());
        for (let t = 0; t < d.length; t += 1) d[t].c();
        (o = N(">")),
          O(r, "data-qa", "deepl-language-selection"),
          O(r, "class", "svelte-f4rh0n"),
          O(
            n,
            "class",
            (a =
              f(
                "alternate" === e[5]
                  ? "language-selector-alternate"
                  : "language-selector"
              ) + " svelte-f4rh0n")
          );
      },
      m(t, a) {
        k(t, n, a), S(n, r), c && c.m(r, null), S(r, i);
        for (let t = 0; t < d.length; t += 1) d[t].m(r, null);
        S(r, o), P(r, e[1]), s || ((l = M(r, "change", A(e[20]))), (s = !0));
      },
      p(t, e) {
        if (
          (t[2]
            ? c
              ? c.p(t, e)
              : ((c = Ee()), c.c(), c.m(r, i))
            : c && (c.d(1), (c = null)),
          32768 & e)
        ) {
          let n;
          for (u = t[15], n = 0; n < u.length; n += 1) {
            const i = be(t, u, n);
            d[n] ? d[n].p(i, e) : ((d[n] = xe(i)), d[n].c(), d[n].m(r, o));
          }
          for (; n < d.length; n += 1) d[n].d(1);
          d.length = u.length;
        }
        32770 & e && P(r, t[1]),
          32 & e &&
            a !==
              (a =
                f(
                  "alternate" === t[5]
                    ? "language-selector-alternate"
                    : "language-selector"
                ) + " svelte-f4rh0n") &&
            O(n, "class", a);
      },
      i: t,
      o: t,
      d(t) {
        t && T(n), c && c.d(), C(d, t), (s = !1), l();
      },
    };
  }
  function Ee(e) {
    let n,
      r,
      i,
      o = chrome.i18n.getMessage("supported_languages_undefined") + "";
    return {
      c() {
        (n = R("option")),
          (r = N(o)),
          (i = $()),
          (n.__value = void 0),
          (n.value = n.__value),
          O(n, "data-option-regionalvariant", void 0);
      },
      m(t, e) {
        k(t, n, e), S(n, r), S(n, i);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function xe(e) {
    let n,
      r,
      i,
      o = e[21].label + "";
    return {
      c() {
        (n = R("option")),
          (r = N(o)),
          (i = $()),
          (n.__value = e[21].value),
          (n.value = n.__value),
          O(n, "data-option-regionalvariant", e[21].regionalVariant);
      },
      m(t, e) {
        k(t, n, e), S(n, r), S(n, i);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function ke(t) {
    let e, n, r, i;
    const o = [Se, we],
      a = [];
    return (
      (e = oe() ? 0 : 1),
      (n = a[e] = o[e](t)),
      {
        c() {
          n.c(), (r = L());
        },
        m(t, n) {
          a[e].m(t, n), k(t, r, n), (i = !0);
        },
        p(t, [e]) {
          n.p(t, e);
        },
        i(t) {
          i || (St(n), (i = !0));
        },
        o(t) {
          Et(n), (i = !1);
        },
        d(t) {
          a[e].d(t), t && T(r);
        },
      }
    );
  }
  function Te(e, n, r) {
    let i,
      o = t,
      a = () => (o(), (o = s(h, (t) => r(18, (i = t)))), h);
    e.$$.on_destroy.push(() => o());
    const l = tt();
    let { value: c } = n,
      { showChooseLanguageOption: u = !1 } = n,
      { customClass: d = "" } = n,
      { websiteSettings: h } = n;
    a();
    let { disabled: p = !1 } = n,
      { variant: f = "original" } = n,
      { fontSize: m = "default" } = n,
      { alignRight: g = !1 } = n,
      { isBorderless: _ = !1 } = n,
      { showSortCode: v = !1 } = n,
      { extraPadding: y = !1 } = n,
      { showRegionalVariants: b = !0 } = n,
      { dropdownMaxHeight: w = 300 } = n,
      S = u ? chrome.i18n.getMessage("supported_languages_undefined") : void 0;
    const E = b
      ? se()
      : Mt.filter((t) => !["PT-BR", "EN-US"].includes(t.langCode))
          .map((t) =>
            "EN-GB" === t.langCode
              ? { ...t, langCode: "EN" }
              : "PT-PT" === t.langCode
              ? { ...t, langCode: "PT" }
              : t
          )
          .map((t) => ({
            value: t.langCode,
            label: chrome.i18n.getMessage(`supported_languages_${t.langCode}`),
            selectedOptionLabel: chrome.i18n.getMessage(
              `supported_languages_${t.langCode}`
            ),
          }))
          .sort((t, e) =>
            t.label.localeCompare(e.label, chrome.i18n.getUILanguage())
          );
    let x = c ? E.find((t) => t.value === c) : void 0;
    return (
      (e.$$set = (t) => {
        "value" in t && r(1, (c = t.value)),
          "showChooseLanguageOption" in t &&
            r(2, (u = t.showChooseLanguageOption)),
          "customClass" in t && r(3, (d = t.customClass)),
          "websiteSettings" in t && a(r(4, (h = t.websiteSettings))),
          "disabled" in t && r(0, (p = t.disabled)),
          "variant" in t && r(5, (f = t.variant)),
          "fontSize" in t && r(6, (m = t.fontSize)),
          "alignRight" in t && r(7, (g = t.alignRight)),
          "isBorderless" in t && r(8, (_ = t.isBorderless)),
          "showSortCode" in t && r(9, (v = t.showSortCode)),
          "extraPadding" in t && r(10, (y = t.extraPadding)),
          "showRegionalVariants" in t && r(17, (b = t.showRegionalVariants)),
          "dropdownMaxHeight" in t && r(11, (w = t.dropdownMaxHeight));
      }),
      (e.$$.update = () => {
        262144 & e.$$.dirty &&
          (i && i.translationState === Pt
            ? r(0, (p = !0))
            : i && i.translationState === Ut && r(0, (p = !1)));
      }),
      [
        p,
        c,
        u,
        d,
        h,
        f,
        m,
        g,
        _,
        v,
        y,
        w,
        l,
        S,
        function (t) {
          p || l("selection", t.detail);
        },
        E,
        x,
        b,
        i,
        function (t) {
          rt.call(this, e, t);
        },
        (t) => {
          if (p) return;
          const e =
            t.target.options[t.target.selectedIndex].getAttribute(
              "data-option-regionalVariant"
            ) || void 0;
          l("selection", {
            selectedOption: { value: t.target.value, regionalVariant: e },
          });
        },
      ]
    );
  }
  class Ce extends Lt {
    constructor(t) {
      super(),
        $t(this, t, Te, ke, a, {
          value: 1,
          showChooseLanguageOption: 2,
          customClass: 3,
          websiteSettings: 4,
          disabled: 0,
          variant: 5,
          fontSize: 6,
          alignRight: 7,
          isBorderless: 8,
          showSortCode: 9,
          extraPadding: 10,
          showRegionalVariants: 17,
          dropdownMaxHeight: 11,
        });
    }
  }
  function Re(t) {
    return new Promise((e, n) => {
      chrome.runtime.sendMessage(t, function (t) {
        t && t.error && n(t), e(t);
      });
    });
  }
  async function Ie(t) {
    if (!chrome.tabs) return;
    const e = await chrome.tabs.query({ active: !0, currentWindow: !0 });
    chrome.tabs.sendMessage(e[0].id, t);
  }
  const Ne = "NEW_FEEDBACK_FORM",
    $e = "DEEPL_COM_PRO",
    Le = "DEEPL_COM_HOMEPAGE",
    Me = "DEEPL_COM_WRITE",
    Ae = "DEEPL_SUPPORT",
    De = "production",
    Oe = "development";
  function Ue() {
    return De;
  }
  function Pe() {
    return Ue() === Oe;
  }
  const Be = "DEVELOPER_TOOLS",
    Fe = "SETTINGS_PAGE",
    ze = "SETTINGS_WRITING",
    Ge = "SETTINGS_READING",
    je = "SETTINGS_CUSTOMIZATIONS";
  function We(t) {
    let e, n, r;
    return {
      c() {
        (e = R("button")),
          O(e, "type", "button"),
          O(e, "class", "dl-menu-icon dl-menu-icon--user svelte-feu83h");
      },
      m(i, o) {
        k(i, e, o), n || ((r = M(e, "mousedown", A(t[13]))), (n = !0));
      },
      d(t) {
        t && T(e), (n = !1), r();
      },
    };
  }
  function Ye(e) {
    let n,
      r,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h = Pe();
    function p(t, e) {
      return !0 === t[1].isLoggedIn ? qe : He;
    }
    let f = p(e),
      m = f && f(e),
      g =
        h &&
        (function (e) {
          let n, r, i;
          return {
            c() {
              (n = R("div")),
                (n.textContent = "DEV_TOOLS"),
                O(n, "class", "dl-menu-item svelte-feu83h");
            },
            m(t, o) {
              k(t, n, o), r || ((i = M(n, "click", e[8])), (r = !0));
            },
            p: t,
            d(t) {
              t && T(n), (r = !1), i();
            },
          };
        })(e);
    return {
      c() {
        (n = R("div")),
          (r = R("div")),
          (r.innerHTML =
            '<span class="dl-menu-link dl-feedback-link svelte-feu83h"><div>Share feedback</div> \n          \n          \n          <div class="dl-feedback-icon svelte-feu83h"></div></span>'),
          (o = $()),
          (a = R("div")),
          (a.textContent = `${chrome.i18n.getMessage("menu_settings_label")}`),
          (s = $()),
          m && m.c(),
          (l = $()),
          g && g.c(),
          O(r, "class", "dl-menu-item svelte-feu83h"),
          O(a, "class", "dl-menu-item svelte-feu83h"),
          O(n, "class", "dl-menu-list svelte-feu83h");
      },
      m(t, i) {
        k(t, n, i),
          S(n, r),
          S(n, o),
          S(n, a),
          S(n, s),
          m && m.m(n, null),
          S(n, l),
          g && g.m(n, null),
          u || ((d = [M(r, "click", e[6]), M(a, "click", e[9])]), (u = !0));
      },
      p(t, e) {
        f === (f = p(t)) && m
          ? m.p(t, e)
          : (m && m.d(1), (m = f && f(t)), m && (m.c(), m.m(n, l))),
          h && g.p(t, e);
      },
      i(t) {
        c ||
          ut(() => {
            (c = kt(n, ue, { y: -5, duration: 500 })), c.start();
          });
      },
      o: t,
      d(t) {
        t && T(n), m && m.d(), g && g.d(), (u = !1), i(d);
      },
    };
  }
  function He(e) {
    let n, r, o, a, s, l, c, u, d;
    return {
      c() {
        (n = R("div")),
          (n.innerHTML = '<div class="divider svelte-feu83h"></div>'),
          (r = $()),
          (o = R("div")),
          (a = R("span")),
          (a.textContent = `${chrome.i18n.getMessage("menu_login_label")}`),
          (s = $()),
          (l = R("div")),
          (c = R("span")),
          (c.textContent = `${chrome.i18n.getMessage("menu_trial_label")}`),
          O(n, "class", "dl-menu-item dl-menu-item--divider svelte-feu83h"),
          O(o, "class", "dl-menu-item svelte-feu83h"),
          O(c, "class", "dl-menu-link link svelte-feu83h"),
          O(l, "class", "dl-menu-item svelte-feu83h");
      },
      m(t, i) {
        k(t, n, i),
          k(t, r, i),
          k(t, o, i),
          S(o, a),
          k(t, s, i),
          k(t, l, i),
          S(l, c),
          u || ((d = [M(o, "click", e[4]), M(l, "click", e[5])]), (u = !0));
      },
      p: t,
      d(t) {
        t && T(n), t && T(r), t && T(o), t && T(s), t && T(l), (u = !1), i(d);
      },
    };
  }
  function qe(e) {
    let n, r, i, o, a, s;
    return {
      c() {
        (n = R("div")),
          (n.innerHTML = '<div class="divider svelte-feu83h"></div>'),
          (r = $()),
          (i = R("div")),
          (o = R("span")),
          (o.textContent = `${chrome.i18n.getMessage("menu_logout_label")}`),
          O(n, "class", "dl-menu-item dl-menu-item--divider svelte-feu83h"),
          O(i, "class", "dl-menu-item svelte-feu83h");
      },
      m(t, l) {
        k(t, n, l),
          k(t, r, l),
          k(t, i, l),
          S(i, o),
          a || ((s = M(i, "click", e[3])), (a = !0));
      },
      p: t,
      d(t) {
        t && T(n), t && T(r), t && T(i), (a = !1), s();
      },
    };
  }
  function Ve(e) {
    let n,
      r,
      o,
      a,
      s,
      l,
      c,
      u = !0 === e[1].isLoggedIn && We(e),
      d = e[0] && Ye(e);
    return {
      c() {
        (n = R("div")),
          (r = R("div")),
          u && u.c(),
          (o = $()),
          (a = R("button")),
          (s = $()),
          d && d.c(),
          O(a, "type", "button"),
          O(a, "class", "dl-menu-icon dl-menu-icon--hamburger svelte-feu83h"),
          z(a, "isOpen", e[0]),
          O(r, "class", "dl-menu-icon-wrapper svelte-feu83h"),
          O(n, "class", "dl-container-menu svelte-feu83h");
      },
      m(t, i) {
        k(t, n, i),
          S(n, r),
          u && u.m(r, null),
          S(r, o),
          S(r, a),
          S(n, s),
          d && d.m(n, null),
          l ||
            ((c = [
              M(a, "mousedown", A(e[12])),
              M(r, "click", e[14]),
              M(r, "mousedown", D(A(e[11]))),
              m(de.call(null, n, { isShadow: !0 })),
              M(n, "click_outside", e[7]),
              M(n, "mousedown", D(A(e[10]))),
            ]),
            (l = !0));
      },
      p(t, [e]) {
        !0 === t[1].isLoggedIn
          ? u || ((u = We(t)), u.c(), u.m(r, o))
          : u && (u.d(1), (u = null)),
          1 & e && z(a, "isOpen", t[0]),
          t[0]
            ? d
              ? (d.p(t, e), 1 & e && St(d, 1))
              : ((d = Ye(t)), d.c(), St(d, 1), d.m(n, null))
            : d && (d.d(1), (d = null));
      },
      i(t) {
        St(d);
      },
      o: t,
      d(t) {
        t && T(n), u && u.d(), d && d.d(), (l = !1), i(c);
      },
    };
  }
  function Ze(t, e, n) {
    let r;
    const i = nt("deepl_settings");
    l(t, i, (t) => n(1, (r = t)));
    let o = !1;
    function a() {
      n(0, (o = !1));
    }
    return [
      o,
      r,
      i,
      function () {
        Re({ action: "dlRequestLogout" }),
          Re({ action: "dlTrackUiAction", payload: { uiAction: Ht } }),
          a();
      },
      function () {
        Re({ action: "dlRequestLogin" }), a();
      },
      function () {
        Re({
          action: "dlExternalURLRedirect",
          payload: { destination: $e, utmContent: "menu" },
        }),
          a();
      },
      function () {
        Re({ action: "dlExternalURLRedirect", payload: { destination: Ne } }),
          a();
      },
      a,
      function () {
        Re({ action: "dlOpenInternalPage", payload: { destination: Be } }), a();
      },
      function () {
        Re({ action: "dlOpenInternalPage", payload: { destination: Fe } }), a();
      },
      function (e) {
        rt.call(this, t, e);
      },
      function (e) {
        rt.call(this, t, e);
      },
      function (e) {
        rt.call(this, t, e);
      },
      function (e) {
        rt.call(this, t, e);
      },
      () => {
        n(0, (o = !o));
      },
    ];
  }
  class Xe extends Lt {
    constructor(t) {
      super(), $t(this, t, Ze, Ve, a, {});
    }
  }
  function Ke(e) {
    let n;
    return {
      c() {
        (n = R("div")), O(n, "class", "dl-logo svelte-1k53si1");
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function Qe(e) {
    let n, r, i;
    return {
      c() {
        (n = R("div")),
          O(n, "class", "dl-logo dl-logo--clickable svelte-1k53si1");
      },
      m(t, o) {
        k(t, n, o), r || ((i = M(n, "click", e[12])), (r = !0));
      },
      p: t,
      d(t) {
        t && T(n), (r = !1), i();
      },
    };
  }
  function Je(t) {
    let e, n, r, i, o, a;
    return (
      (o = new Ce({
        props: {
          value: t[9].selectedTargetLanguage,
          websiteSettings: t[4],
          customClass: "dropdown__wrapper--header",
          fontSize: "sm",
        },
      })),
      o.$on("selection", t[16]),
      {
        c() {
          (e = R("div")),
            (n = R("span")),
            (n.textContent = `${chrome.i18n.getMessage(
              "layout_header_label_language_switch_v2"
            )}`),
            (r = $()),
            (i = R("div")),
            Ct(o.$$.fragment),
            O(n, "class", "dl-actions-language-selector__label svelte-1k53si1"),
            O(
              i,
              "class",
              "dl-actions-language-selector__dropdown svelte-1k53si1"
            ),
            O(e, "class", "dl-actions-language-selector svelte-1k53si1");
        },
        m(t, s) {
          k(t, e, s), S(e, n), S(e, r), S(e, i), Rt(o, i, null), (a = !0);
        },
        p(t, e) {
          const n = {};
          512 & e && (n.value = t[9].selectedTargetLanguage),
            16 & e && (n.websiteSettings = t[4]),
            o.$set(n);
        },
        i(t) {
          a || (St(o.$$.fragment, t), (a = !0));
        },
        o(t) {
          Et(o.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && T(e), It(o);
        },
      }
    );
  }
  function tn(t) {
    let e;
    function n(t, e) {
      return null == t[8] || t[8].translationState === Pt ? nn : en;
    }
    let r = n(t),
      i = r(t);
    return {
      c() {
        i.c(), (e = L());
      },
      m(t, n) {
        i.m(t, n), k(t, e, n);
      },
      p(t, o) {
        r === (r = n(t)) && i
          ? i.p(t, o)
          : (i.d(1), (i = r(t)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(t) {
        i.d(t), t && T(e);
      },
    };
  }
  function en(e) {
    let n;
    return {
      c() {
        (n = R("div")),
          (n.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_done")}`),
          O(n, "class", "dl-write-heading svelte-1k53si1");
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function nn(e) {
    let n;
    return {
      c() {
        (n = R("div")),
          (n.textContent = `${chrome.i18n.getMessage(
            "ui_gdocs_write_loading"
          )}`),
          O(n, "class", "dl-write-heading svelte-1k53si1");
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function rn(e) {
    let n, r, i;
    return {
      c() {
        (n = R("button")),
          O(n, "class", "dl-settings-icon svelte-1k53si1"),
          O(n, "data-qa", "deepl-layour-header-settings-link");
      },
      m(t, o) {
        k(t, n, o), r || ((i = M(n, "click", e[13])), (r = !0));
      },
      p: t,
      d(t) {
        t && T(n), (r = !1), i();
      },
    };
  }
  function on(t) {
    let e, n;
    return (
      (e = new Xe({})),
      {
        c() {
          Ct(e.$$.fragment);
        },
        m(t, r) {
          Rt(e, t, r), (n = !0);
        },
        i(t) {
          n || (St(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          Et(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          It(e, t);
        },
      }
    );
  }
  function an(t) {
    let e, n, r;
    return {
      c() {
        (e = R("button")),
          O(e, "type", "button"),
          O(e, "class", "dl-close-icon svelte-1k53si1");
      },
      m(i, a) {
        k(i, e, a),
          n ||
            ((r = M(e, "click", function () {
              o(t[0]) && t[0].apply(this, arguments);
            })),
            (n = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && T(e), (n = !1), r();
      },
    };
  }
  function sn(t) {
    let e, n, r, i, o, a, s, l, c, u, d;
    let h = (function (t, e) {
        return t[12] ? Qe : Ke;
      })(t),
      p = h(t),
      m = t[6] === Jt.translate && t[2] && t[9] && t[4] && Je(t),
      g = t[6] === Jt.write && tn(t),
      _ = t[7] && rn(t),
      v = t[1] && on(),
      y = t[0] && an(t);
    return {
      c() {
        (e = R("div")),
          p.c(),
          (n = $()),
          (r = R("div")),
          m && m.c(),
          (i = $()),
          g && g.c(),
          (o = $()),
          _ && _.c(),
          (a = $()),
          v && v.c(),
          (s = $()),
          y && y.c(),
          O(r, "class", "dl-actions svelte-1k53si1"),
          O(
            e,
            "class",
            (l =
              f("dl-header " + (t[2] ? "dl-header--with-lang-selector" : "")) +
              " svelte-1k53si1")
          );
      },
      m(l, h) {
        k(l, e, h),
          p.m(e, null),
          S(e, n),
          S(e, r),
          m && m.m(r, null),
          S(r, i),
          g && g.m(r, null),
          S(r, o),
          _ && _.m(r, null),
          S(r, a),
          v && v.m(r, null),
          S(r, s),
          y && y.m(r, null),
          (c = !0),
          u || ((d = M(e, "mousedown", D(A(t[15])))), (u = !0));
      },
      p(t, [n]) {
        p.p(t, n),
          t[6] === Jt.translate && t[2] && t[9] && t[4]
            ? m
              ? (m.p(t, n), 596 & n && St(m, 1))
              : ((m = Je(t)), m.c(), St(m, 1), m.m(r, i))
            : m &&
              (bt(),
              Et(m, 1, 1, () => {
                m = null;
              }),
              wt()),
          t[6] === Jt.write
            ? g
              ? g.p(t, n)
              : ((g = tn(t)), g.c(), g.m(r, o))
            : g && (g.d(1), (g = null)),
          t[7]
            ? _
              ? _.p(t, n)
              : ((_ = rn(t)), _.c(), _.m(r, a))
            : _ && (_.d(1), (_ = null)),
          t[1]
            ? v
              ? 2 & n && St(v, 1)
              : ((v = on()), v.c(), St(v, 1), v.m(r, s))
            : v &&
              (bt(),
              Et(v, 1, 1, () => {
                v = null;
              }),
              wt()),
          t[0]
            ? y
              ? y.p(t, n)
              : ((y = an(t)), y.c(), y.m(r, null))
            : y && (y.d(1), (y = null)),
          (!c ||
            (4 & n &&
              l !==
                (l =
                  f(
                    "dl-header " + (t[2] ? "dl-header--with-lang-selector" : "")
                  ) + " svelte-1k53si1"))) &&
            O(e, "class", l);
      },
      i(t) {
        c || (St(m), St(v), (c = !0));
      },
      o(t) {
        Et(m), Et(v), (c = !1);
      },
      d(t) {
        t && T(e),
          p.d(),
          m && m.d(),
          g && g.d(),
          _ && _.d(),
          v && v.d(),
          y && y.d(),
          (u = !1),
          d();
      },
    };
  }
  function ln(e, n, r) {
    let i,
      o,
      a = t,
      l = () => (a(), (a = s(m, (t) => r(8, (i = t)))), m),
      c = t,
      u = () => (c(), (c = s(f, (t) => r(9, (o = t)))), f);
    e.$$.on_destroy.push(() => a()), e.$$.on_destroy.push(() => c());
    let { closeWindow: d } = n,
      { showMenu: h = !1 } = n,
      { showLangSelect: p = !1 } = n,
      { settings: f } = n;
    u();
    let { websiteSettings: m } = n;
    l();
    let { extensionContext: g = 0 } = n,
      { platformBehaviour: _ = Qt.default } = n,
      { textProcessingMode: v = Jt.translate } = n,
      { showSettingsIcon: y = !0 } = n;
    async function b(t) {
      await f.set({
        selectedTargetLanguage: t.value,
        isTargetLanguageConfirmed: !0,
        regionalVariant: t.regionalVariant || "",
      }),
        m.update({ translationState: Pt }),
        Re({
          action: "dlRequestInlineTranslation",
          payload: {
            requests: [{ text: i.originalSnippet }],
            domainName: window.location.hostname,
            trigger: zt,
            sourceLang: "auto",
            websiteLanguage: i.websiteLanguage,
          },
        })
          .then((t) => {
            m.update({
              translationState: Ut,
              translatedSnippet: t[0].text,
              snippetDetectedSourceLang: t[0].detected_source_language,
              websiteLanguage: t[0].detected_source_language,
            });
          })
          .catch((t) => {
            m.update({
              translationState: Ut,
              translatedSnippet: "",
              snippetDetectedSourceLang: "",
              error: t.message ? t.message : t,
            });
          });
    }
    async function w(t) {
      await f.set({
        selectedTargetLanguage: t.value,
        isTargetLanguageConfirmed: !0,
        regionalVariant: t.regionalVariant || "",
      });
      const e = document.getElementsByTagName("deepl-gdocs-icon")[0];
      e && e.requestNewTranslation(t.value);
    }
    return (
      (e.$$set = (t) => {
        "closeWindow" in t && r(0, (d = t.closeWindow)),
          "showMenu" in t && r(1, (h = t.showMenu)),
          "showLangSelect" in t && r(2, (p = t.showLangSelect)),
          "settings" in t && u(r(3, (f = t.settings))),
          "websiteSettings" in t && l(r(4, (m = t.websiteSettings))),
          "extensionContext" in t && r(14, (g = t.extensionContext)),
          "platformBehaviour" in t && r(5, (_ = t.platformBehaviour)),
          "textProcessingMode" in t && r(6, (v = t.textProcessingMode)),
          "showSettingsIcon" in t && r(7, (y = t.showSettingsIcon));
      }),
      [
        d,
        h,
        p,
        f,
        m,
        _,
        v,
        y,
        i,
        o,
        b,
        w,
        function () {
          let t = Le;
          Re({
            action: "dlTrackLogoClickedEvent",
            payload: { extensionContext: g },
          }),
            v === Jt.write && (t = Me),
            Re({
              action: "dlExternalURLRedirect",
              payload: { destination: t, utmContent: "gdocs_logo" },
            });
        },
        function () {
          Re({ action: "dlOpenInternalPage", payload: { destination: Fe } });
        },
        g,
        function (t) {
          rt.call(this, e, t);
        },
        (t) => {
          switch (_) {
            case Qt.gdocs:
              w(t.detail.selectedOption);
              break;
            case Qt.default:
            default:
              b(t.detail.selectedOption);
          }
        },
      ]
    );
  }
  class cn extends Lt {
    constructor(t) {
      super(),
        $t(this, t, ln, sn, a, {
          closeWindow: 0,
          showMenu: 1,
          showLangSelect: 2,
          settings: 3,
          websiteSettings: 4,
          extensionContext: 14,
          platformBehaviour: 5,
          textProcessingMode: 6,
          showSettingsIcon: 7,
        });
    }
  }
  function un(t) {
    let e, n;
    return (
      (e = new cn({
        props: {
          websiteSettings: t[5],
          settings: t[4],
          showLangSelect: t[2],
          showMenu: t[1],
          closeWindow: t[0],
          extensionContext: t[6],
          platformBehaviour: t[7],
          textProcessingMode: t[8],
          showSettingsIcon: t[9],
        },
      })),
      {
        c() {
          Ct(e.$$.fragment);
        },
        m(t, r) {
          Rt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          32 & n && (r.websiteSettings = t[5]),
            16 & n && (r.settings = t[4]),
            4 & n && (r.showLangSelect = t[2]),
            2 & n && (r.showMenu = t[1]),
            1 & n && (r.closeWindow = t[0]),
            64 & n && (r.extensionContext = t[6]),
            128 & n && (r.platformBehaviour = t[7]),
            256 & n && (r.textProcessingMode = t[8]),
            512 & n && (r.showSettingsIcon = t[9]),
            e.$set(r);
        },
        i(t) {
          n || (St(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          Et(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          It(e, t);
        },
      }
    );
  }
  function dn(t) {
    let e,
      n,
      r,
      i,
      o,
      a = t[3] && un(t);
    const s = t[11].default,
      l = c(s, t, t[10], null);
    return {
      c() {
        (e = R("div")),
          a && a.c(),
          (n = $()),
          (r = R("div")),
          l && l.c(),
          O(r, "class", "dl-content svelte-1dtlgso"),
          O(
            e,
            "class",
            (i =
              f(`dl-layout ${t[2] && "dl-layout--with-lang-selector"}`) +
              " svelte-1dtlgso")
          ),
          O(e, "translate", "no");
      },
      m(t, i) {
        k(t, e, i),
          a && a.m(e, null),
          S(e, n),
          S(e, r),
          l && l.m(r, null),
          (o = !0);
      },
      p(t, [r]) {
        t[3]
          ? a
            ? (a.p(t, r), 8 & r && St(a, 1))
            : ((a = un(t)), a.c(), St(a, 1), a.m(e, n))
          : a &&
            (bt(),
            Et(a, 1, 1, () => {
              a = null;
            }),
            wt()),
          l &&
            l.p &&
            (!o || 1024 & r) &&
            h(l, s, t, t[10], o ? d(s, t[10], r, null) : p(t[10]), null),
          (!o ||
            (4 & r &&
              i !==
                (i =
                  f(`dl-layout ${t[2] && "dl-layout--with-lang-selector"}`) +
                  " svelte-1dtlgso"))) &&
            O(e, "class", i);
      },
      i(t) {
        o || (St(a), St(l, t), (o = !0));
      },
      o(t) {
        Et(a), Et(l, t), (o = !1);
      },
      d(t) {
        t && T(e), a && a.d(), l && l.d(t);
      },
    };
  }
  function hn(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e,
      { closeWindow: o } = e,
      { showMenu: a = !1 } = e,
      { showLangSelect: s = !1 } = e,
      { withHeader: l = !0 } = e,
      { settings: c } = e,
      { websiteSettings: u } = e,
      { extensionContext: d } = e,
      { platformBehaviour: h = Qt.default } = e,
      { textProcessingMode: p = Jt.translate } = e,
      { showSettingsIcon: f = !0 } = e;
    return (
      (t.$$set = (t) => {
        "closeWindow" in t && n(0, (o = t.closeWindow)),
          "showMenu" in t && n(1, (a = t.showMenu)),
          "showLangSelect" in t && n(2, (s = t.showLangSelect)),
          "withHeader" in t && n(3, (l = t.withHeader)),
          "settings" in t && n(4, (c = t.settings)),
          "websiteSettings" in t && n(5, (u = t.websiteSettings)),
          "extensionContext" in t && n(6, (d = t.extensionContext)),
          "platformBehaviour" in t && n(7, (h = t.platformBehaviour)),
          "textProcessingMode" in t && n(8, (p = t.textProcessingMode)),
          "showSettingsIcon" in t && n(9, (f = t.showSettingsIcon)),
          "$$scope" in t && n(10, (i = t.$$scope));
      }),
      [o, a, s, l, c, u, d, h, p, f, i, r]
    );
  }
  class pn extends Lt {
    constructor(t) {
      super(),
        $t(this, t, hn, dn, a, {
          closeWindow: 0,
          showMenu: 1,
          showLangSelect: 2,
          withHeader: 3,
          settings: 4,
          websiteSettings: 5,
          extensionContext: 6,
          platformBehaviour: 7,
          textProcessingMode: 8,
          showSettingsIcon: 9,
        });
    }
  }
  const fn = [];
  function mn(e, n = t) {
    let r;
    const i = new Set();
    function o(t) {
      if (a(e, t) && ((e = t), r)) {
        const t = !fn.length;
        for (const t of i) t[1](), fn.push(t, e);
        if (t) {
          for (let t = 0; t < fn.length; t += 2) fn[t][0](fn[t + 1]);
          fn.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (t) {
        o(t(e));
      },
      subscribe: function (a, s = t) {
        const l = [a, s];
        return (
          i.add(l),
          1 === i.size && (r = n(o) || t),
          a(e),
          () => {
            i.delete(l), 0 === i.size && (r(), (r = null));
          }
        );
      },
    };
  }
  const gn = (function () {
      const { subscribe: t, set: e, update: n } = mn({});
      return (
        chrome.storage.sync.get(null, (t) => {
          e(t),
            chrome.storage.local.get(
              [
                "isLoggedIn",
                "isProUser",
                "translatorServiceType",
                "apiServiceType",
                "docTranslatorServiceType",
                "browserInstanceId",
                "featureSet",
              ],
              (t) => {
                n((e) => ({ ...e, ...t }));
              }
            );
        }),
        chrome.storage.onChanged.addListener((t) => {
          const e = ["a_t", "r_t", "i_t", "accountId"];
          let r = {};
          for (const [n, i] of Object.entries(t))
            !1 === e.includes(n) && (r[n] = i.newValue);
          if (Pe()) {
            const t =
              "background-color: #324054;padding: 3px; font-size:12px;color:#e1e8c3; font-weight:600";
            console.log(
              `%c${new Date().toISOString()} UPDATE USER SETTINGS`,
              t,
              r
            );
          }
          n((t) => ({ ...t, ...r }));
        }),
        { subscribe: t, set: (t) => chrome.storage.sync.set(t) }
      );
    })(),
    _n = (function () {
      const { subscribe: t, update: e } = mn({});
      return (
        chrome.runtime.onMessage.addListener(function (t, n) {
          switch (t.action) {
            case "newWebsiteState":
              t.payload &&
                e((e) => ({
                  ...e,
                  [n.tab.id]: {
                    ...e[n.tab.id],
                    ...t.payload,
                    error: t.payload.error ? t.payload.error : void 0,
                  },
                }));
              break;
            case "resetWebsiteState":
              t.payload && e((e) => ({ ...e, [n.tab.id]: { ...t.payload } }));
          }
        }),
        {
          subscribe: t,
          fetchCurrentWebsiteSettings: () => {
            chrome.tabs &&
              chrome.tabs.query(
                { active: !0, currentWindow: !0 },
                function (t) {
                  chrome.tabs.sendMessage(
                    t[0].id,
                    { action: "dlGetWebsiteData" },
                    function (n) {
                      e((e) => ({ ...e, [t[0].id]: { ...e[t[0].id], ...n } }));
                    }
                  );
                }
              );
          },
        }
      );
    })(),
    vn = (function (e, n, r) {
      const a = !Array.isArray(e),
        l = a ? [e] : e,
        c = n.length < 2;
      return (
        (u = (e) => {
          let r = !1;
          const u = [];
          let d = 0,
            h = t;
          const p = () => {
              if (d) return;
              h();
              const r = n(a ? u[0] : u, e);
              c ? e(r) : (h = o(r) ? r : t);
            },
            f = l.map((t, e) =>
              s(
                t,
                (t) => {
                  (u[e] = t), (d &= ~(1 << e)), r && p();
                },
                () => {
                  d |= 1 << e;
                }
              )
            );
          return (
            (r = !0),
            p(),
            function () {
              i(f), h();
            }
          );
        }),
        { subscribe: mn(r, u).subscribe }
      );
      var u;
    })(_n, async (t, e) => {
      if (!chrome.tabs) return;
      e(t[(await chrome.tabs.query({ active: !0, currentWindow: !0 }))[0].id]);
    });
  function yn(t, e) {
    return !!t.blacklistedPopupWidgets && t.blacklistedPopupWidgets.includes(e);
  }
  function bn(t) {
    let e, n;
    const r = t[8].default,
      i = c(r, t, t[7], null);
    return {
      c() {
        (e = R("div")), i && i.c();
      },
      m(t, r) {
        k(t, e, r), i && i.m(e, null), (n = !0);
      },
      p(t, e) {
        i &&
          i.p &&
          (!n || 128 & e) &&
          h(i, r, t, t[7], n ? d(r, t[7], e, null) : p(t[7]), null);
      },
      i(t) {
        n || (St(i, t), (n = !0));
      },
      o(t) {
        Et(i, t), (n = !1);
      },
      d(t) {
        t && T(e), i && i.d(t);
      },
    };
  }
  function wn(t) {
    let e, n, r;
    const i = t[8].default,
      o = c(i, t, t[7], null);
    return {
      c() {
        (e = R("div")),
          o && o.c(),
          O(e, "data-tooltip", t[0]),
          O(e, "style", (n = `z-index: ${t[2]}; ${t[5]}`)),
          O(e, "class", "svelte-1fngq5n"),
          z(e, "multiline", t[1]),
          z(e, "isFlexItem", t[4]);
      },
      m(t, n) {
        k(t, e, n), o && o.m(e, null), (r = !0);
      },
      p(t, a) {
        o &&
          o.p &&
          (!r || 128 & a) &&
          h(o, i, t, t[7], r ? d(i, t[7], a, null) : p(t[7]), null),
          (!r || 1 & a) && O(e, "data-tooltip", t[0]),
          (!r || (36 & a && n !== (n = `z-index: ${t[2]}; ${t[5]}`))) &&
            O(e, "style", n),
          (!r || 2 & a) && z(e, "multiline", t[1]),
          (!r || 16 & a) && z(e, "isFlexItem", t[4]);
      },
      i(t) {
        r || (St(o, t), (r = !0));
      },
      o(t) {
        Et(o, t), (r = !1);
      },
      d(t) {
        t && T(e), o && o.d(t);
      },
    };
  }
  function Sn(t) {
    let e, n, r, i;
    const o = [wn, bn],
      a = [];
    function s(t, e) {
      return t[3] ? 0 : 1;
    }
    return (
      (e = s(t)),
      (n = a[e] = o[e](t)),
      {
        c() {
          n.c(), (r = L());
        },
        m(t, n) {
          a[e].m(t, n), k(t, r, n), (i = !0);
        },
        p(t, [i]) {
          let l = e;
          (e = s(t)),
            e === l
              ? a[e].p(t, i)
              : (bt(),
                Et(a[l], 1, 1, () => {
                  a[l] = null;
                }),
                wt(),
                (n = a[e]),
                n ? n.p(t, i) : ((n = a[e] = o[e](t)), n.c()),
                St(n, 1),
                n.m(r.parentNode, r));
        },
        i(t) {
          i || (St(n), (i = !0));
        },
        o(t) {
          Et(n), (i = !1);
        },
        d(t) {
          a[e].d(t), t && T(r);
        },
      }
    );
  }
  function En(t, e, n) {
    let r,
      { $$slots: i = {}, $$scope: o } = e;
    const { deepl_inline_ui: a } = jt;
    let { tooltip: s = !1 } = e,
      { multiline: l = !1 } = e,
      { zIndex: c = a.z_index } = e,
      { isEnabled: u = !0 } = e,
      { isFlexItem: d = !1 } = e,
      { width: h = null } = e;
    return (
      (t.$$set = (t) => {
        "tooltip" in t && n(0, (s = t.tooltip)),
          "multiline" in t && n(1, (l = t.multiline)),
          "zIndex" in t && n(2, (c = t.zIndex)),
          "isEnabled" in t && n(3, (u = t.isEnabled)),
          "isFlexItem" in t && n(4, (d = t.isFlexItem)),
          "width" in t && n(6, (h = t.width)),
          "$$scope" in t && n(7, (o = t.$$scope));
      }),
      (t.$$.update = () => {
        64 & t.$$.dirty && n(5, (r = h ? `width: ${h}px` : ""));
      }),
      [s, l, c, u, d, r, h, o, i]
    );
  }
  !(function () {
    const { subscribe: t, set: e } = mn([]);
    Re({ action: "dlGetExperiments", payload: { forceFetch: !1 } }).then((t) =>
      e(t)
    ),
      chrome.runtime.onMessage.addListener(function (t) {
        if ("dlExperimentsUpdated" === t.action)
          t.payload && e(t.payload.experiments);
      });
  })();
  class xn extends Lt {
    constructor(t) {
      super(),
        $t(this, t, En, Sn, a, {
          tooltip: 0,
          multiline: 1,
          zIndex: 2,
          isEnabled: 3,
          isFlexItem: 4,
          width: 6,
        });
    }
  }
  function kn(e) {
    let n;
    return {
      c() {
        (n = R("div")),
          O(n, "class", "loader svelte-c65fyl"),
          z(n, "small", e[0]);
      },
      m(t, e) {
        k(t, n, e);
      },
      p(t, [e]) {
        1 & e && z(n, "small", t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function Tn(t, e, n) {
    let { small: r = !1 } = e;
    return (
      (t.$$set = (t) => {
        "small" in t && n(0, (r = t.small));
      }),
      [r]
    );
  }
  class Cn extends Lt {
    constructor(t) {
      super(), $t(this, t, Tn, kn, a, { small: 0 });
    }
  }
  const Rn = "ACCESS_DENIED",
    In = "INVALID_REQUEST",
    Nn = "INVALID_GRANT",
    $n = "INVALID_NONCE",
    Ln = "PROTOCOL_ERROR",
    Mn = "NETWORK_ERROR",
    An = "FULL_PAGE_SERVER_ERROR",
    Dn = "-32003",
    On = "429",
    Un = "403",
    Pn = "1045601",
    Bn = "1042902",
    Fn = Object.prototype.toString;
  function zn(t) {
    switch (Fn.call(t)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return Xn(t, Error);
    }
  }
  function Gn(t, e) {
    return Fn.call(t) === `[object ${e}]`;
  }
  function jn(t) {
    return Gn(t, "ErrorEvent");
  }
  function Wn(t) {
    return Gn(t, "DOMError");
  }
  function Yn(t) {
    return Gn(t, "String");
  }
  function Hn(t) {
    return null === t || ("object" != typeof t && "function" != typeof t);
  }
  function qn(t) {
    return Gn(t, "Object");
  }
  function Vn(t) {
    return "undefined" != typeof Event && Xn(t, Event);
  }
  function Zn(t) {
    return Boolean(t && t.then && "function" == typeof t.then);
  }
  function Xn(t, e) {
    try {
      return t instanceof e;
    } catch (t) {
      return !1;
    }
  }
  function Kn(t) {
    return t && t.Math == Math ? t : void 0;
  }
  const Qn =
    ("object" == typeof globalThis && Kn(globalThis)) ||
    ("object" == typeof window && Kn(window)) ||
    ("object" == typeof self && Kn(self)) ||
    ("object" == typeof global && Kn(global)) ||
    (function () {
      return this;
    })() ||
    {};
  function Jn() {
    return Qn;
  }
  function tr(t, e, n) {
    const r = n || Qn,
      i = (r.__SENTRY__ = r.__SENTRY__ || {});
    return i[t] || (i[t] = e());
  }
  const er = Jn();
  function nr(t, e = {}) {
    try {
      let n = t;
      const r = 5,
        i = [];
      let o = 0,
        a = 0;
      const s = " > ",
        l = s.length;
      let c;
      const u = Array.isArray(e) ? e : e.keyAttrs,
        d = (!Array.isArray(e) && e.maxStringLength) || 80;
      for (
        ;
        n &&
        o++ < r &&
        ((c = rr(n, u)),
        !("html" === c || (o > 1 && a + i.length * l + c.length >= d)));

      )
        i.push(c), (a += c.length), (n = n.parentNode);
      return i.reverse().join(s);
    } catch (t) {
      return "<unknown>";
    }
  }
  function rr(t, e) {
    const n = t,
      r = [];
    let i, o, a, s, l;
    if (!n || !n.tagName) return "";
    r.push(n.tagName.toLowerCase());
    const c =
      e && e.length
        ? e.filter((t) => n.getAttribute(t)).map((t) => [t, n.getAttribute(t)])
        : null;
    if (c && c.length)
      c.forEach((t) => {
        r.push(`[${t[0]}="${t[1]}"]`);
      });
    else if ((n.id && r.push(`#${n.id}`), (i = n.className), i && Yn(i)))
      for (o = i.split(/\s+/), l = 0; l < o.length; l++) r.push(`.${o[l]}`);
    const u = ["type", "name", "title", "alt"];
    for (l = 0; l < u.length; l++)
      (a = u[l]), (s = n.getAttribute(a)), s && r.push(`[${a}="${s}"]`);
    return r.join("");
  }
  class ir extends Error {
    constructor(t, e = "warn") {
      super(t),
        (this.message = t),
        (this.name = new.target.prototype.constructor.name),
        Object.setPrototypeOf(this, new.target.prototype),
        (this.logLevel = e);
    }
  }
  const or = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function ar(t, e = !1) {
    const {
      host: n,
      path: r,
      pass: i,
      port: o,
      projectId: a,
      protocol: s,
      publicKey: l,
    } = t;
    return `${s}://${l}${e && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${
      r ? `${r}/` : r
    }${a}`;
  }
  function sr(t) {
    return {
      protocol: t.protocol,
      publicKey: t.publicKey || "",
      pass: t.pass || "",
      host: t.host,
      port: t.port || "",
      path: t.path || "",
      projectId: t.projectId,
    };
  }
  function lr(t) {
    const e =
      "string" == typeof t
        ? (function (t) {
            const e = or.exec(t);
            if (!e) throw new ir(`Invalid Sentry Dsn: ${t}`);
            const [n, r, i = "", o, a = "", s] = e.slice(1);
            let l = "",
              c = s;
            const u = c.split("/");
            if (
              (u.length > 1 && ((l = u.slice(0, -1).join("/")), (c = u.pop())),
              c)
            ) {
              const t = c.match(/^\d+/);
              t && (c = t[0]);
            }
            return sr({
              host: o,
              pass: i,
              path: l,
              projectId: c,
              port: a,
              protocol: n,
              publicKey: r,
            });
          })(t)
        : sr(t);
    return (
      (function (t) {
        if ("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) return;
        const { port: e, projectId: n, protocol: r } = t;
        if (
          (["protocol", "publicKey", "host", "projectId"].forEach((e) => {
            if (!t[e]) throw new ir(`Invalid Sentry Dsn: ${e} missing`);
          }),
          !n.match(/^\d+$/))
        )
          throw new ir(`Invalid Sentry Dsn: Invalid projectId ${n}`);
        if (
          !(function (t) {
            return "http" === t || "https" === t;
          })(r)
        )
          throw new ir(`Invalid Sentry Dsn: Invalid protocol ${r}`);
        if (e && isNaN(parseInt(e, 10)))
          throw new ir(`Invalid Sentry Dsn: Invalid port ${e}`);
      })(e),
      e
    );
  }
  const cr = ["debug", "info", "warn", "error", "log", "assert", "trace"];
  function ur(t) {
    if (!("console" in Qn)) return t();
    const e = Qn.console,
      n = {};
    cr.forEach((t) => {
      const r = e[t] && e[t].__sentry_original__;
      t in e && r && ((n[t] = e[t]), (e[t] = r));
    });
    try {
      return t();
    } finally {
      Object.keys(n).forEach((t) => {
        e[t] = n[t];
      });
    }
  }
  function dr() {
    let t = !1;
    const e = {
      enable: () => {
        t = !0;
      },
      disable: () => {
        t = !1;
      },
    };
    return (
      "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
        ? cr.forEach((n) => {
            e[n] = (...e) => {
              t &&
                ur(() => {
                  Qn.console[n](`Sentry Logger [${n}]:`, ...e);
                });
            };
          })
        : cr.forEach((t) => {
            e[t] = () => {};
          }),
      e
    );
  }
  let hr;
  function pr(t, e = 0) {
    return "string" != typeof t || 0 === e || t.length <= e
      ? t
      : `${t.substr(0, e)}...`;
  }
  function fr(t, e) {
    if (!Array.isArray(t)) return "";
    const n = [];
    for (let e = 0; e < t.length; e++) {
      const r = t[e];
      try {
        n.push(String(r));
      } catch (t) {
        n.push("[value cannot be serialized]");
      }
    }
    return n.join(e);
  }
  function mr(t, e, n = !1) {
    return (
      !!Yn(t) &&
      (Gn(e, "RegExp") ? e.test(t) : !!Yn(e) && (n ? t === e : t.includes(e)))
    );
  }
  function gr(t, e = [], n = !1) {
    return e.some((e) => mr(t, e, n));
  }
  function _r(t, e, n) {
    if (!(e in t)) return;
    const r = t[e],
      i = n(r);
    if ("function" == typeof i)
      try {
        yr(i, r);
      } catch (t) {}
    t[e] = i;
  }
  function vr(t, e, n) {
    Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
  }
  function yr(t, e) {
    const n = e.prototype || {};
    (t.prototype = e.prototype = n), vr(t, "__sentry_original__", e);
  }
  function br(t) {
    return t.__sentry_original__;
  }
  function wr(t) {
    if (zn(t))
      return { message: t.message, name: t.name, stack: t.stack, ...Er(t) };
    if (Vn(t)) {
      const e = {
        type: t.type,
        target: Sr(t.target),
        currentTarget: Sr(t.currentTarget),
        ...Er(t),
      };
      return (
        "undefined" != typeof CustomEvent &&
          Xn(t, CustomEvent) &&
          (e.detail = t.detail),
        e
      );
    }
    return t;
  }
  function Sr(t) {
    try {
      return (
        (e = t),
        "undefined" != typeof Element && Xn(e, Element)
          ? nr(t)
          : Object.prototype.toString.call(t)
      );
    } catch (t) {
      return "<unknown>";
    }
    var e;
  }
  function Er(t) {
    if ("object" == typeof t && null !== t) {
      const e = {};
      for (const n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    }
    return {};
  }
  function xr(t, e = 40) {
    const n = Object.keys(wr(t));
    if ((n.sort(), !n.length)) return "[object has no keys]";
    if (n[0].length >= e) return pr(n[0], e);
    for (let t = n.length; t > 0; t--) {
      const r = n.slice(0, t).join(", ");
      if (!(r.length > e)) return t === n.length ? r : pr(r, e);
    }
    return "";
  }
  function kr(t) {
    return Tr(t, new Map());
  }
  function Tr(t, e) {
    if (qn(t)) {
      const n = e.get(t);
      if (void 0 !== n) return n;
      const r = {};
      e.set(t, r);
      for (const n of Object.keys(t)) void 0 !== t[n] && (r[n] = Tr(t[n], e));
      return r;
    }
    if (Array.isArray(t)) {
      const n = e.get(t);
      if (void 0 !== n) return n;
      const r = [];
      return (
        e.set(t, r),
        t.forEach((t) => {
          r.push(Tr(t, e));
        }),
        r
      );
    }
    return t;
  }
  function Cr(t) {
    let e,
      n = t[0],
      r = 1;
    for (; r < t.length; ) {
      const i = t[r],
        o = t[r + 1];
      if (
        ((r += 2),
        ("optionalAccess" === i || "optionalCall" === i) && null == n)
      )
        return;
      "access" === i || "optionalAccess" === i
        ? ((e = n), (n = o(n)))
        : ("call" !== i && "optionalCall" !== i) ||
          ((n = o((...t) => n.call(e, ...t))), (e = void 0));
    }
    return n;
  }
  hr =
    "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
      ? tr("logger", dr)
      : dr();
  function Rr(...t) {
    const e = t.sort((t, e) => t[0] - e[0]).map((t) => t[1]);
    return (t, n = 0) => {
      const r = [];
      for (const i of t.split("\n").slice(n)) {
        const t = i.replace(/\(error: (.*)\)/, "$1");
        for (const n of e) {
          const e = n(t);
          if (e) {
            r.push(e);
            break;
          }
        }
      }
      return (function (t) {
        if (!t.length) return [];
        let e = t;
        const n = e[0].function || "",
          r = e[e.length - 1].function || "";
        (-1 === n.indexOf("captureMessage") &&
          -1 === n.indexOf("captureException")) ||
          (e = e.slice(1));
        -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1));
        return e
          .slice(0, 50)
          .map((t) => ({
            ...t,
            filename: t.filename || e[0].filename,
            function: t.function || "?",
          }))
          .reverse();
      })(r);
    };
  }
  const Ir = "<anonymous>";
  function Nr(t) {
    try {
      return (t && "function" == typeof t && t.name) || Ir;
    } catch (t) {
      return Ir;
    }
  }
  const $r = Jn();
  function Lr() {
    if (!("fetch" in $r)) return !1;
    try {
      return (
        new Headers(), new Request("http://www.example.com"), new Response(), !0
      );
    } catch (t) {
      return !1;
    }
  }
  function Mr(t) {
    return (
      t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    );
  }
  const Ar = Jn(),
    Dr = {},
    Or = {};
  function Ur(t) {
    if (!Or[t])
      switch (((Or[t] = !0), t)) {
        case "console":
          !(function () {
            if (!("console" in Ar)) return;
            cr.forEach(function (t) {
              t in Ar.console &&
                _r(Ar.console, t, function (e) {
                  return function (...n) {
                    Br("console", { args: n, level: t }),
                      e && e.apply(Ar.console, n);
                  };
                });
            });
          })();
          break;
        case "dom":
          !(function () {
            if (!("document" in Ar)) return;
            const t = Br.bind(null, "dom"),
              e = Yr(t, !0);
            Ar.document.addEventListener("click", e, !1),
              Ar.document.addEventListener("keypress", e, !1),
              ["EventTarget", "Node"].forEach((e) => {
                const n = Ar[e] && Ar[e].prototype;
                n &&
                  n.hasOwnProperty &&
                  n.hasOwnProperty("addEventListener") &&
                  (_r(n, "addEventListener", function (e) {
                    return function (n, r, i) {
                      if ("click" === n || "keypress" == n)
                        try {
                          const r = this,
                            o = (r.__sentry_instrumentation_handlers__ =
                              r.__sentry_instrumentation_handlers__ || {}),
                            a = (o[n] = o[n] || { refCount: 0 });
                          if (!a.handler) {
                            const r = Yr(t);
                            (a.handler = r), e.call(this, n, r, i);
                          }
                          a.refCount++;
                        } catch (t) {}
                      return e.call(this, n, r, i);
                    };
                  }),
                  _r(n, "removeEventListener", function (t) {
                    return function (e, n, r) {
                      if ("click" === e || "keypress" == e)
                        try {
                          const n = this,
                            i = n.__sentry_instrumentation_handlers__ || {},
                            o = i[e];
                          o &&
                            (o.refCount--,
                            o.refCount <= 0 &&
                              (t.call(this, e, o.handler, r),
                              (o.handler = void 0),
                              delete i[e]),
                            0 === Object.keys(i).length &&
                              delete n.__sentry_instrumentation_handlers__);
                        } catch (t) {}
                      return t.call(this, e, n, r);
                    };
                  }));
              });
          })();
          break;
        case "xhr":
          !(function () {
            if (!("XMLHttpRequest" in Ar)) return;
            const t = XMLHttpRequest.prototype;
            _r(t, "open", function (t) {
              return function (...e) {
                const n = this,
                  r = e[1],
                  i = (n.__sentry_xhr__ = {
                    method: Yn(e[0]) ? e[0].toUpperCase() : e[0],
                    url: e[1],
                  });
                Yn(r) &&
                  "POST" === i.method &&
                  r.match(/sentry_key/) &&
                  (n.__sentry_own_request__ = !0);
                const o = function () {
                  if (4 === n.readyState) {
                    try {
                      i.status_code = n.status;
                    } catch (t) {}
                    Br("xhr", {
                      args: e,
                      endTimestamp: Date.now(),
                      startTimestamp: Date.now(),
                      xhr: n,
                    });
                  }
                };
                return (
                  "onreadystatechange" in n &&
                  "function" == typeof n.onreadystatechange
                    ? _r(n, "onreadystatechange", function (t) {
                        return function (...e) {
                          return o(), t.apply(n, e);
                        };
                      })
                    : n.addEventListener("readystatechange", o),
                  t.apply(n, e)
                );
              };
            }),
              _r(t, "send", function (t) {
                return function (...e) {
                  return (
                    this.__sentry_xhr__ &&
                      void 0 !== e[0] &&
                      (this.__sentry_xhr__.body = e[0]),
                    Br("xhr", {
                      args: e,
                      startTimestamp: Date.now(),
                      xhr: this,
                    }),
                    t.apply(this, e)
                  );
                };
              });
          })();
          break;
        case "fetch":
          !(function () {
            if (
              !(function () {
                if (!Lr()) return !1;
                if (Mr($r.fetch)) return !0;
                let t = !1;
                const e = $r.document;
                if (e && "function" == typeof e.createElement)
                  try {
                    const n = e.createElement("iframe");
                    (n.hidden = !0),
                      e.head.appendChild(n),
                      n.contentWindow &&
                        n.contentWindow.fetch &&
                        (t = Mr(n.contentWindow.fetch)),
                      e.head.removeChild(n);
                  } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ ||
                      __SENTRY_DEBUG__) &&
                      hr.warn(
                        "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                        t
                      );
                  }
                return t;
              })()
            )
              return;
            _r(Ar, "fetch", function (t) {
              return function (...e) {
                const n = {
                  args: e,
                  fetchData: { method: Fr(e), url: zr(e) },
                  startTimestamp: Date.now(),
                };
                return (
                  Br("fetch", { ...n }),
                  t.apply(Ar, e).then(
                    (t) => (
                      Br("fetch", {
                        ...n,
                        endTimestamp: Date.now(),
                        response: t,
                      }),
                      t
                    ),
                    (t) => {
                      throw (
                        (Br("fetch", {
                          ...n,
                          endTimestamp: Date.now(),
                          error: t,
                        }),
                        t)
                      );
                    }
                  )
                );
              };
            });
          })();
          break;
        case "history":
          !(function () {
            if (
              !(function () {
                const t = $r.chrome,
                  e = t && t.app && t.app.runtime,
                  n =
                    "history" in $r &&
                    !!$r.history.pushState &&
                    !!$r.history.replaceState;
                return !e && n;
              })()
            )
              return;
            const t = Ar.onpopstate;
            function e(t) {
              return function (...e) {
                const n = e.length > 2 ? e[2] : void 0;
                if (n) {
                  const t = Gr,
                    e = String(n);
                  (Gr = e), Br("history", { from: t, to: e });
                }
                return t.apply(this, e);
              };
            }
            (Ar.onpopstate = function (...e) {
              const n = Ar.location.href,
                r = Gr;
              if (((Gr = n), Br("history", { from: r, to: n }), t))
                try {
                  return t.apply(this, e);
                } catch (t) {}
            }),
              _r(Ar.history, "pushState", e),
              _r(Ar.history, "replaceState", e);
          })();
          break;
        case "error":
          (Hr = Ar.onerror),
            (Ar.onerror = function (t, e, n, r, i) {
              return (
                Br("error", { column: r, error: i, line: n, msg: t, url: e }),
                !!Hr && Hr.apply(this, arguments)
              );
            });
          break;
        case "unhandledrejection":
          (qr = Ar.onunhandledrejection),
            (Ar.onunhandledrejection = function (t) {
              return (
                Br("unhandledrejection", t), !qr || qr.apply(this, arguments)
              );
            });
          break;
        default:
          return void (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.warn("unknown instrumentation type:", t)
          );
      }
  }
  function Pr(t, e) {
    (Dr[t] = Dr[t] || []), Dr[t].push(e), Ur(t);
  }
  function Br(t, e) {
    if (t && Dr[t])
      for (const n of Dr[t] || [])
        try {
          n(e);
        } catch (e) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.error(
              `Error while triggering instrumentation handler.\nType: ${t}\nName: ${Nr(
                n
              )}\nError:`,
              e
            );
        }
  }
  function Fr(t = []) {
    return "Request" in Ar && Xn(t[0], Request) && t[0].method
      ? String(t[0].method).toUpperCase()
      : t[1] && t[1].method
      ? String(t[1].method).toUpperCase()
      : "GET";
  }
  function zr(t = []) {
    return "string" == typeof t[0]
      ? t[0]
      : "Request" in Ar && Xn(t[0], Request)
      ? t[0].url
      : String(t[0]);
  }
  let Gr;
  let jr, Wr;
  function Yr(t, e = !1) {
    return (n) => {
      if (!n || Wr === n) return;
      if (
        (function (t) {
          if ("keypress" !== t.type) return !1;
          try {
            const e = t.target;
            if (!e || !e.tagName) return !0;
            if (
              "INPUT" === e.tagName ||
              "TEXTAREA" === e.tagName ||
              e.isContentEditable
            )
              return !1;
          } catch (t) {}
          return !0;
        })(n)
      )
        return;
      const r = "keypress" === n.type ? "input" : n.type;
      (void 0 === jr ||
        (function (t, e) {
          if (!t) return !0;
          if (t.type !== e.type) return !0;
          try {
            if (t.target !== e.target) return !0;
          } catch (t) {}
          return !1;
        })(Wr, n)) &&
        (t({ event: n, name: r, global: e }), (Wr = n)),
        clearTimeout(jr),
        (jr = Ar.setTimeout(() => {
          jr = void 0;
        }, 1e3));
    };
  }
  let Hr = null;
  let qr = null;
  function Vr() {
    const t = Qn,
      e = t.crypto || t.msCrypto;
    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
    const n =
      e && e.getRandomValues
        ? () => e.getRandomValues(new Uint8Array(1))[0]
        : () => 16 * Math.random();
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t) =>
      (t ^ ((15 & n()) >> (t / 4))).toString(16)
    );
  }
  function Zr(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0;
  }
  function Xr(t) {
    const { message: e, event_id: n } = t;
    if (e) return e;
    const r = Zr(t);
    return r
      ? r.type && r.value
        ? `${r.type}: ${r.value}`
        : r.type || r.value || n || "<unknown>"
      : n || "<unknown>";
  }
  function Kr(t, e, n) {
    const r = (t.exception = t.exception || {}),
      i = (r.values = r.values || []),
      o = (i[0] = i[0] || {});
    o.value || (o.value = e || ""), o.type || (o.type = n || "Error");
  }
  function Qr(t, e) {
    const n = Zr(t);
    if (!n) return;
    const r = n.mechanism;
    if (
      ((n.mechanism = { type: "generic", handled: !0, ...r, ...e }),
      e && "data" in e)
    ) {
      const t = { ...(r && r.data), ...e.data };
      n.mechanism.data = t;
    }
  }
  function Jr(t) {
    if (t && t.__sentry_captured__) return !0;
    try {
      vr(t, "__sentry_captured__", !0);
    } catch (t) {}
    return !1;
  }
  function ti(t) {
    return Array.isArray(t) ? t : [t];
  }
  function ei() {
    return (
      !(
        "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
        __SENTRY_BROWSER_BUNDLE__
      ) &&
      "[object process]" ===
        Object.prototype.toString.call(
          "undefined" != typeof process ? process : 0
        )
    );
  }
  function ni(t, e = 1 / 0, n = 1 / 0) {
    try {
      return ii("", t, e, n);
    } catch (t) {
      return { ERROR: `**non-serializable** (${t})` };
    }
  }
  function ri(t, e = 3, n = 102400) {
    const r = ni(t, e);
    return (
      (i = r),
      (function (t) {
        return ~-encodeURI(t).split(/%..|./).length;
      })(JSON.stringify(i)) > n
        ? ri(t, e - 1, n)
        : r
    );
    var i;
  }
  function ii(
    t,
    e,
    n = 1 / 0,
    r = 1 / 0,
    i = (function () {
      const t = "function" == typeof WeakSet,
        e = t ? new WeakSet() : [];
      return [
        function (n) {
          if (t) return !!e.has(n) || (e.add(n), !1);
          for (let t = 0; t < e.length; t++) if (e[t] === n) return !0;
          return e.push(n), !1;
        },
        function (n) {
          if (t) e.delete(n);
          else
            for (let t = 0; t < e.length; t++)
              if (e[t] === n) {
                e.splice(t, 1);
                break;
              }
        },
      ];
    })()
  ) {
    const [o, a] = i;
    if (
      null === e ||
      (["number", "boolean", "string"].includes(typeof e) &&
        ("number" != typeof (s = e) || s == s))
    )
      return e;
    var s;
    const l = (function (t, e) {
      try {
        return "domain" === t && e && "object" == typeof e && e._events
          ? "[Domain]"
          : "domainEmitter" === t
          ? "[DomainEmitter]"
          : "undefined" != typeof global && e === global
          ? "[Global]"
          : "undefined" != typeof window && e === window
          ? "[Window]"
          : "undefined" != typeof document && e === document
          ? "[Document]"
          : (function (t) {
              return (
                qn(t) &&
                "nativeEvent" in t &&
                "preventDefault" in t &&
                "stopPropagation" in t
              );
            })(e)
          ? "[SyntheticEvent]"
          : "number" == typeof e && e != e
          ? "[NaN]"
          : void 0 === e
          ? "[undefined]"
          : "function" == typeof e
          ? `[Function: ${Nr(e)}]`
          : "symbol" == typeof e
          ? `[${String(e)}]`
          : "bigint" == typeof e
          ? `[BigInt: ${String(e)}]`
          : `[object ${Object.getPrototypeOf(e).constructor.name}]`;
      } catch (t) {
        return `**non-serializable** (${t})`;
      }
    })(t, e);
    if (!l.startsWith("[object ")) return l;
    if (e.__sentry_skip_normalization__) return e;
    if (0 === n) return l.replace("object ", "");
    if (o(e)) return "[Circular ~]";
    const c = e;
    if (c && "function" == typeof c.toJSON)
      try {
        return ii("", c.toJSON(), n - 1, r, i);
      } catch (t) {}
    const u = Array.isArray(e) ? [] : {};
    let d = 0;
    const h = wr(e);
    for (const t in h) {
      if (!Object.prototype.hasOwnProperty.call(h, t)) continue;
      if (d >= r) {
        u[t] = "[MaxProperties ~]";
        break;
      }
      const e = h[t];
      (u[t] = ii(t, e, n - 1, r, i)), d++;
    }
    return a(e), u;
  }
  var oi;
  function ai(t) {
    return new li((e) => {
      e(t);
    });
  }
  function si(t) {
    return new li((e, n) => {
      n(t);
    });
  }
  !(function (t) {
    t[(t.PENDING = 0)] = "PENDING";
    t[(t.RESOLVED = 1)] = "RESOLVED";
    t[(t.REJECTED = 2)] = "REJECTED";
  })(oi || (oi = {}));
  class li {
    __init() {
      this._state = oi.PENDING;
    }
    __init2() {
      this._handlers = [];
    }
    constructor(t) {
      li.prototype.__init.call(this),
        li.prototype.__init2.call(this),
        li.prototype.__init3.call(this),
        li.prototype.__init4.call(this),
        li.prototype.__init5.call(this),
        li.prototype.__init6.call(this);
      try {
        t(this._resolve, this._reject);
      } catch (t) {
        this._reject(t);
      }
    }
    then(t, e) {
      return new li((n, r) => {
        this._handlers.push([
          !1,
          (e) => {
            if (t)
              try {
                n(t(e));
              } catch (t) {
                r(t);
              }
            else n(e);
          },
          (t) => {
            if (e)
              try {
                n(e(t));
              } catch (t) {
                r(t);
              }
            else r(t);
          },
        ]),
          this._executeHandlers();
      });
    }
    catch(t) {
      return this.then((t) => t, t);
    }
    finally(t) {
      return new li((e, n) => {
        let r, i;
        return this.then(
          (e) => {
            (i = !1), (r = e), t && t();
          },
          (e) => {
            (i = !0), (r = e), t && t();
          }
        ).then(() => {
          i ? n(r) : e(r);
        });
      });
    }
    __init3() {
      this._resolve = (t) => {
        this._setResult(oi.RESOLVED, t);
      };
    }
    __init4() {
      this._reject = (t) => {
        this._setResult(oi.REJECTED, t);
      };
    }
    __init5() {
      this._setResult = (t, e) => {
        this._state === oi.PENDING &&
          (Zn(e)
            ? e.then(this._resolve, this._reject)
            : ((this._state = t), (this._value = e), this._executeHandlers()));
      };
    }
    __init6() {
      this._executeHandlers = () => {
        if (this._state === oi.PENDING) return;
        const t = this._handlers.slice();
        (this._handlers = []),
          t.forEach((t) => {
            t[0] ||
              (this._state === oi.RESOLVED && t[1](this._value),
              this._state === oi.REJECTED && t[2](this._value),
              (t[0] = !0));
          });
      };
    }
  }
  function ci(t) {
    const e = [];
    function n(t) {
      return e.splice(e.indexOf(t), 1)[0];
    }
    return {
      $: e,
      add: function (r) {
        if (!(void 0 === t || e.length < t))
          return si(
            new ir("Not adding Promise because buffer limit was reached.")
          );
        const i = r();
        return (
          -1 === e.indexOf(i) && e.push(i),
          i.then(() => n(i)).then(null, () => n(i).then(null, () => {})),
          i
        );
      },
      drain: function (t) {
        return new li((n, r) => {
          let i = e.length;
          if (!i) return n(!0);
          const o = setTimeout(() => {
            t && t > 0 && n(!1);
          }, t);
          e.forEach((t) => {
            ai(t).then(() => {
              --i || (clearTimeout(o), n(!0));
            }, r);
          });
        });
      },
    };
  }
  function ui(t) {
    if (!t) return {};
    const e = t.match(
      /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
    );
    if (!e) return {};
    const n = e[6] || "",
      r = e[8] || "";
    return { host: e[4], path: e[5], protocol: e[2], relative: e[5] + n + r };
  }
  const di = ["fatal", "error", "warning", "log", "info", "debug"];
  const hi = Jn(),
    pi = { nowSeconds: () => Date.now() / 1e3 };
  const fi = ei()
      ? (function () {
          try {
            return ((t = module), (e = "perf_hooks"), t.require(e)).performance;
          } catch (t) {
            return;
          }
          var t, e;
        })()
      : (function () {
          const { performance: t } = hi;
          if (!t || !t.now) return;
          return { now: () => t.now(), timeOrigin: Date.now() - t.now() };
        })(),
    mi =
      void 0 === fi
        ? pi
        : { nowSeconds: () => (fi.timeOrigin + fi.now()) / 1e3 },
    gi = pi.nowSeconds.bind(pi),
    _i = mi.nowSeconds.bind(mi),
    vi = (() => {
      const { performance: t } = hi;
      if (!t || !t.now) return;
      const e = 36e5,
        n = t.now(),
        r = Date.now(),
        i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
        o = i < e,
        a = t.timing && t.timing.navigationStart,
        s = "number" == typeof a ? Math.abs(a + n - r) : e;
      return o || s < e ? (i <= s ? t.timeOrigin : a) : r;
    })();
  function yi(t, e = []) {
    return [t, e];
  }
  function bi(t, e) {
    const [n, r] = t;
    return [n, [...r, e]];
  }
  function wi(t, e) {
    t[1].forEach((t) => {
      const n = t[0].type;
      e(t, n);
    });
  }
  function Si(t, e) {
    return (e || new TextEncoder()).encode(t);
  }
  function Ei(t, e) {
    const [n, r] = t;
    let i = JSON.stringify(n);
    function o(t) {
      "string" == typeof i
        ? (i = "string" == typeof t ? i + t : [Si(i, e), t])
        : i.push("string" == typeof t ? Si(t, e) : t);
    }
    for (const t of r) {
      const [e, n] = t;
      if (
        (o(`\n${JSON.stringify(e)}\n`),
        "string" == typeof n || n instanceof Uint8Array)
      )
        o(n);
      else {
        let t;
        try {
          t = JSON.stringify(n);
        } catch (e) {
          t = JSON.stringify(ni(n));
        }
        o(t);
      }
    }
    return "string" == typeof i
      ? i
      : (function (t) {
          const e = t.reduce((t, e) => t + e.length, 0),
            n = new Uint8Array(e);
          let r = 0;
          for (const e of t) n.set(e, r), (r += e.length);
          return n;
        })(i);
  }
  function xi(t, e) {
    const n = "string" == typeof t.data ? Si(t.data, e) : t.data;
    return [
      kr({
        type: "attachment",
        length: n.length,
        filename: t.filename,
        content_type: t.contentType,
        attachment_type: t.attachmentType,
      }),
      n,
    ];
  }
  const ki = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
  };
  function Ti(t) {
    return ki[t];
  }
  function Ci(t) {
    if (!t || !t.sdk) return;
    const { name: e, version: n } = t.sdk;
    return { name: e, version: n };
  }
  function Ri(t, e, n, r) {
    const i =
      t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: t.event_id,
      sent_at: new Date().toISOString(),
      ...(e && { sdk: e }),
      ...(!!n && { dsn: ar(r) }),
      ...("transaction" === t.type && i && { trace: kr({ ...i }) }),
    };
  }
  function Ii(t, { statusCode: e, headers: n }, r = Date.now()) {
    const i = { ...t },
      o = n && n["x-sentry-rate-limits"],
      a = n && n["retry-after"];
    if (o)
      for (const t of o.trim().split(",")) {
        const [e, n] = t.split(":", 2),
          o = parseInt(e, 10),
          a = 1e3 * (isNaN(o) ? 60 : o);
        if (n) for (const t of n.split(";")) i[t] = r + a;
        else i.all = r + a;
      }
    else
      a
        ? (i.all =
            r +
            (function (t, e = Date.now()) {
              const n = parseInt(`${t}`, 10);
              if (!isNaN(n)) return 1e3 * n;
              const r = Date.parse(`${t}`);
              return isNaN(r) ? 6e4 : r - e;
            })(a, r))
        : 429 === e && (i.all = r + 6e4);
    return i;
  }
  function Ni(t) {
    const e = _i(),
      n = {
        sid: Vr(),
        init: !0,
        timestamp: e,
        started: e,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () =>
          (function (t) {
            return kr({
              sid: `${t.sid}`,
              init: t.init,
              started: new Date(1e3 * t.started).toISOString(),
              timestamp: new Date(1e3 * t.timestamp).toISOString(),
              status: t.status,
              errors: t.errors,
              did:
                "number" == typeof t.did || "string" == typeof t.did
                  ? `${t.did}`
                  : void 0,
              duration: t.duration,
              attrs: {
                release: t.release,
                environment: t.environment,
                ip_address: t.ipAddress,
                user_agent: t.userAgent,
              },
            });
          })(n),
      };
    return t && $i(n, t), n;
  }
  function $i(t, e = {}) {
    if (
      (e.user &&
        (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
        t.did ||
          e.did ||
          (t.did = e.user.id || e.user.email || e.user.username)),
      (t.timestamp = e.timestamp || _i()),
      e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
      e.sid && (t.sid = 32 === e.sid.length ? e.sid : Vr()),
      void 0 !== e.init && (t.init = e.init),
      !t.did && e.did && (t.did = `${e.did}`),
      "number" == typeof e.started && (t.started = e.started),
      t.ignoreDuration)
    )
      t.duration = void 0;
    else if ("number" == typeof e.duration) t.duration = e.duration;
    else {
      const e = t.timestamp - t.started;
      t.duration = e >= 0 ? e : 0;
    }
    e.release && (t.release = e.release),
      e.environment && (t.environment = e.environment),
      !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
      !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
      "number" == typeof e.errors && (t.errors = e.errors),
      e.status && (t.status = e.status);
  }
  class Li {
    constructor() {
      (this._notifyingListeners = !1),
        (this._scopeListeners = []),
        (this._eventProcessors = []),
        (this._breadcrumbs = []),
        (this._attachments = []),
        (this._user = {}),
        (this._tags = {}),
        (this._extra = {}),
        (this._contexts = {}),
        (this._sdkProcessingMetadata = {});
    }
    static clone(t) {
      const e = new Li();
      return (
        t &&
          ((e._breadcrumbs = [...t._breadcrumbs]),
          (e._tags = { ...t._tags }),
          (e._extra = { ...t._extra }),
          (e._contexts = { ...t._contexts }),
          (e._user = t._user),
          (e._level = t._level),
          (e._span = t._span),
          (e._session = t._session),
          (e._transactionName = t._transactionName),
          (e._fingerprint = t._fingerprint),
          (e._eventProcessors = [...t._eventProcessors]),
          (e._requestSession = t._requestSession),
          (e._attachments = [...t._attachments]),
          (e._sdkProcessingMetadata = { ...t._sdkProcessingMetadata })),
        e
      );
    }
    addScopeListener(t) {
      this._scopeListeners.push(t);
    }
    addEventProcessor(t) {
      return this._eventProcessors.push(t), this;
    }
    setUser(t) {
      return (
        (this._user = t || {}),
        this._session && $i(this._session, { user: t }),
        this._notifyScopeListeners(),
        this
      );
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(t) {
      return (this._requestSession = t), this;
    }
    setTags(t) {
      return (
        (this._tags = { ...this._tags, ...t }),
        this._notifyScopeListeners(),
        this
      );
    }
    setTag(t, e) {
      return (
        (this._tags = { ...this._tags, [t]: e }),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtras(t) {
      return (
        (this._extra = { ...this._extra, ...t }),
        this._notifyScopeListeners(),
        this
      );
    }
    setExtra(t, e) {
      return (
        (this._extra = { ...this._extra, [t]: e }),
        this._notifyScopeListeners(),
        this
      );
    }
    setFingerprint(t) {
      return (this._fingerprint = t), this._notifyScopeListeners(), this;
    }
    setLevel(t) {
      return (this._level = t), this._notifyScopeListeners(), this;
    }
    setTransactionName(t) {
      return (this._transactionName = t), this._notifyScopeListeners(), this;
    }
    setContext(t, e) {
      return (
        null === e ? delete this._contexts[t] : (this._contexts[t] = e),
        this._notifyScopeListeners(),
        this
      );
    }
    setSpan(t) {
      return (this._span = t), this._notifyScopeListeners(), this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      const t = this.getSpan();
      return t && t.transaction;
    }
    setSession(t) {
      return (
        t ? (this._session = t) : delete this._session,
        this._notifyScopeListeners(),
        this
      );
    }
    getSession() {
      return this._session;
    }
    update(t) {
      if (!t) return this;
      if ("function" == typeof t) {
        const e = t(this);
        return e instanceof Li ? e : this;
      }
      return (
        t instanceof Li
          ? ((this._tags = { ...this._tags, ...t._tags }),
            (this._extra = { ...this._extra, ...t._extra }),
            (this._contexts = { ...this._contexts, ...t._contexts }),
            t._user && Object.keys(t._user).length && (this._user = t._user),
            t._level && (this._level = t._level),
            t._fingerprint && (this._fingerprint = t._fingerprint),
            t._requestSession && (this._requestSession = t._requestSession))
          : qn(t) &&
            ((this._tags = { ...this._tags, ...t.tags }),
            (this._extra = { ...this._extra, ...t.extra }),
            (this._contexts = { ...this._contexts, ...t.contexts }),
            t.user && (this._user = t.user),
            t.level && (this._level = t.level),
            t.fingerprint && (this._fingerprint = t.fingerprint),
            t.requestSession && (this._requestSession = t.requestSession)),
        this
      );
    }
    clear() {
      return (
        (this._breadcrumbs = []),
        (this._tags = {}),
        (this._extra = {}),
        (this._user = {}),
        (this._contexts = {}),
        (this._level = void 0),
        (this._transactionName = void 0),
        (this._fingerprint = void 0),
        (this._requestSession = void 0),
        (this._span = void 0),
        (this._session = void 0),
        this._notifyScopeListeners(),
        (this._attachments = []),
        this
      );
    }
    addBreadcrumb(t, e) {
      const n = "number" == typeof e ? e : 100;
      if (n <= 0) return this;
      const r = { timestamp: gi(), ...t };
      return (
        (this._breadcrumbs = [...this._breadcrumbs, r].slice(-n)),
        this._notifyScopeListeners(),
        this
      );
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
    }
    addAttachment(t) {
      return this._attachments.push(t), this;
    }
    getAttachments() {
      return this._attachments;
    }
    clearAttachments() {
      return (this._attachments = []), this;
    }
    applyToEvent(t, e = {}) {
      if (
        (this._extra &&
          Object.keys(this._extra).length &&
          (t.extra = { ...this._extra, ...t.extra }),
        this._tags &&
          Object.keys(this._tags).length &&
          (t.tags = { ...this._tags, ...t.tags }),
        this._user &&
          Object.keys(this._user).length &&
          (t.user = { ...this._user, ...t.user }),
        this._contexts &&
          Object.keys(this._contexts).length &&
          (t.contexts = { ...this._contexts, ...t.contexts }),
        this._level && (t.level = this._level),
        this._transactionName && (t.transaction = this._transactionName),
        this._span)
      ) {
        t.contexts = { trace: this._span.getTraceContext(), ...t.contexts };
        const e = this._span.transaction && this._span.transaction.name;
        e && (t.tags = { transaction: e, ...t.tags });
      }
      return (
        this._applyFingerprint(t),
        (t.breadcrumbs = [...(t.breadcrumbs || []), ...this._breadcrumbs]),
        (t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
        (t.sdkProcessingMetadata = {
          ...t.sdkProcessingMetadata,
          ...this._sdkProcessingMetadata,
        }),
        this._notifyEventProcessors([...Mi(), ...this._eventProcessors], t, e)
      );
    }
    setSDKProcessingMetadata(t) {
      return (
        (this._sdkProcessingMetadata = {
          ...this._sdkProcessingMetadata,
          ...t,
        }),
        this
      );
    }
    _notifyEventProcessors(t, e, n, r = 0) {
      return new li((i, o) => {
        const a = t[r];
        if (null === e || "function" != typeof a) i(e);
        else {
          const s = a({ ...e }, n);
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.id &&
            null === s &&
            hr.log(`Event processor "${a.id}" dropped event`),
            Zn(s)
              ? s
                  .then((e) =>
                    this._notifyEventProcessors(t, e, n, r + 1).then(i)
                  )
                  .then(null, o)
              : this._notifyEventProcessors(t, s, n, r + 1)
                  .then(i)
                  .then(null, o);
        }
      });
    }
    _notifyScopeListeners() {
      this._notifyingListeners ||
        ((this._notifyingListeners = !0),
        this._scopeListeners.forEach((t) => {
          t(this);
        }),
        (this._notifyingListeners = !1));
    }
    _applyFingerprint(t) {
      (t.fingerprint = t.fingerprint ? ti(t.fingerprint) : []),
        this._fingerprint &&
          (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
        t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
    }
  }
  function Mi() {
    return tr("globalEventProcessors", () => []);
  }
  function Ai(t) {
    Mi().push(t);
  }
  const Di = 100;
  class Oi {
    __init() {
      this._stack = [{}];
    }
    constructor(t, e = new Li(), n = 4) {
      (this._version = n),
        Oi.prototype.__init.call(this),
        (this.getStackTop().scope = e),
        t && this.bindClient(t);
    }
    isOlderThan(t) {
      return this._version < t;
    }
    bindClient(t) {
      (this.getStackTop().client = t),
        t && t.setupIntegrations && t.setupIntegrations();
    }
    pushScope() {
      const t = Li.clone(this.getScope());
      return this.getStack().push({ client: this.getClient(), scope: t }), t;
    }
    popScope() {
      return !(this.getStack().length <= 1) && !!this.getStack().pop();
    }
    withScope(t) {
      const e = this.pushScope();
      try {
        t(e);
      } finally {
        this.popScope();
      }
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(t, e) {
      const n = (this._lastEventId = e && e.event_id ? e.event_id : Vr()),
        r = new Error("Sentry syntheticException");
      return (
        this._withClient((i, o) => {
          i.captureException(
            t,
            { originalException: t, syntheticException: r, ...e, event_id: n },
            o
          );
        }),
        n
      );
    }
    captureMessage(t, e, n) {
      const r = (this._lastEventId = n && n.event_id ? n.event_id : Vr()),
        i = new Error(t);
      return (
        this._withClient((o, a) => {
          o.captureMessage(
            t,
            e,
            { originalException: t, syntheticException: i, ...n, event_id: r },
            a
          );
        }),
        r
      );
    }
    captureEvent(t, e) {
      const n = e && e.event_id ? e.event_id : Vr();
      return (
        "transaction" !== t.type && (this._lastEventId = n),
        this._withClient((r, i) => {
          r.captureEvent(t, { ...e, event_id: n }, i);
        }),
        n
      );
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(t, e) {
      const { scope: n, client: r } = this.getStackTop();
      if (!n || !r) return;
      const { beforeBreadcrumb: i = null, maxBreadcrumbs: o = Di } =
        (r.getOptions && r.getOptions()) || {};
      if (o <= 0) return;
      const a = { timestamp: gi(), ...t },
        s = i ? ur(() => i(a, e)) : a;
      null !== s && n.addBreadcrumb(s, o);
    }
    setUser(t) {
      const e = this.getScope();
      e && e.setUser(t);
    }
    setTags(t) {
      const e = this.getScope();
      e && e.setTags(t);
    }
    setExtras(t) {
      const e = this.getScope();
      e && e.setExtras(t);
    }
    setTag(t, e) {
      const n = this.getScope();
      n && n.setTag(t, e);
    }
    setExtra(t, e) {
      const n = this.getScope();
      n && n.setExtra(t, e);
    }
    setContext(t, e) {
      const n = this.getScope();
      n && n.setContext(t, e);
    }
    configureScope(t) {
      const { scope: e, client: n } = this.getStackTop();
      e && n && t(e);
    }
    run(t) {
      const e = Pi(this);
      try {
        t(this);
      } finally {
        Pi(e);
      }
    }
    getIntegration(t) {
      const e = this.getClient();
      if (!e) return null;
      try {
        return e.getIntegration(t);
      } catch (e) {
        return (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
          null
        );
      }
    }
    startTransaction(t, e) {
      return this._callExtensionMethod("startTransaction", t, e);
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(t = !1) {
      if (t) return this.endSession();
      this._sendSessionUpdate();
    }
    endSession() {
      const t = this.getStackTop(),
        e = t && t.scope,
        n = e && e.getSession();
      n &&
        (function (t, e) {
          let n = {};
          e
            ? (n = { status: e })
            : "ok" === t.status && (n = { status: "exited" }),
            $i(t, n);
        })(n),
        this._sendSessionUpdate(),
        e && e.setSession();
    }
    startSession(t) {
      const { scope: e, client: n } = this.getStackTop(),
        { release: r, environment: i } = (n && n.getOptions()) || {},
        { userAgent: o } = Qn.navigator || {},
        a = Ni({
          release: r,
          environment: i,
          ...(e && { user: e.getUser() }),
          ...(o && { userAgent: o }),
          ...t,
        });
      if (e) {
        const t = e.getSession && e.getSession();
        t && "ok" === t.status && $i(t, { status: "exited" }),
          this.endSession(),
          e.setSession(a);
      }
      return a;
    }
    shouldSendDefaultPii() {
      const t = this.getClient(),
        e = t && t.getOptions();
      return Boolean(e && e.sendDefaultPii);
    }
    _sendSessionUpdate() {
      const { scope: t, client: e } = this.getStackTop();
      if (!t) return;
      const n = t.getSession();
      n && e && e.captureSession && e.captureSession(n);
    }
    _withClient(t) {
      const { scope: e, client: n } = this.getStackTop();
      n && t(n, e);
    }
    _callExtensionMethod(t, ...e) {
      const n = Ui().__SENTRY__;
      if (n && n.extensions && "function" == typeof n.extensions[t])
        return n.extensions[t].apply(this, e);
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        hr.warn(`Extension method ${t} couldn't be found, doing nothing.`);
    }
  }
  function Ui() {
    return (
      (Qn.__SENTRY__ = Qn.__SENTRY__ || { extensions: {}, hub: void 0 }), Qn
    );
  }
  function Pi(t) {
    const e = Ui(),
      n = zi(e);
    return Gi(e, t), n;
  }
  function Bi() {
    const t = Ui();
    return (
      (Fi(t) && !zi(t).isOlderThan(4)) || Gi(t, new Oi()),
      ei()
        ? (function (t) {
            try {
              const e = Ui().__SENTRY__,
                n =
                  e &&
                  e.extensions &&
                  e.extensions.domain &&
                  e.extensions.domain.active;
              if (!n) return zi(t);
              if (!Fi(n) || zi(n).isOlderThan(4)) {
                const e = zi(t).getStackTop();
                Gi(n, new Oi(e.client, Li.clone(e.scope)));
              }
              return zi(n);
            } catch (e) {
              return zi(t);
            }
          })(t)
        : zi(t)
    );
  }
  function Fi(t) {
    return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
  }
  function zi(t) {
    return tr("hub", () => new Oi(), t);
  }
  function Gi(t, e) {
    if (!t) return !1;
    return ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e), !0;
  }
  function ji(t, e) {
    return Bi().captureException(t, { captureContext: e });
  }
  function Wi(t, e) {
    return Bi().captureEvent(t, e);
  }
  function Yi(t) {
    Bi().addBreadcrumb(t);
  }
  function Hi(t, e) {
    Bi().setContext(t, e);
  }
  function qi(t) {
    Bi().withScope(t);
  }
  function Vi(t) {
    const e = t.protocol ? `${t.protocol}:` : "",
      n = t.port ? `:${t.port}` : "";
    return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
  }
  function Zi(t, e) {
    return (
      (n = {
        sentry_key: t.publicKey,
        sentry_version: "7",
        ...(e && { sentry_client: `${e.name}/${e.version}` }),
      }),
      Object.keys(n)
        .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(n[t])}`)
        .join("&")
    );
    var n;
  }
  function Xi(t, e = {}) {
    const n = "string" == typeof e ? e : e.tunnel,
      r = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
    return (
      n ||
      `${(function (t) {
        return `${Vi(t)}${t.projectId}/envelope/`;
      })(t)}?${Zi(t, r)}`
    );
  }
  const Ki = [];
  function Qi(t) {
    const e = t.defaultIntegrations || [],
      n = t.integrations;
    let r;
    e.forEach((t) => {
      t.isDefaultInstance = !0;
    }),
      (r = Array.isArray(n)
        ? [...e, ...n]
        : "function" == typeof n
        ? ti(n(e))
        : e);
    const i = (function (t) {
        const e = {};
        return (
          t.forEach((t) => {
            const { name: n } = t,
              r = e[n];
            (r && !r.isDefaultInstance && t.isDefaultInstance) || (e[n] = t);
          }),
          Object.values(e)
        );
      })(r),
      o = i.findIndex((t) => "Debug" === t.name);
    if (-1 !== o) {
      const [t] = i.splice(o, 1);
      i.push(t);
    }
    return i;
  }
  const Ji = "Not capturing exception because it's already been captured.";
  class to {
    __init() {
      this._integrations = {};
    }
    __init2() {
      this._integrationsInitialized = !1;
    }
    __init3() {
      this._numProcessing = 0;
    }
    __init4() {
      this._outcomes = {};
    }
    constructor(t) {
      if (
        (to.prototype.__init.call(this),
        to.prototype.__init2.call(this),
        to.prototype.__init3.call(this),
        to.prototype.__init4.call(this),
        (this._options = t),
        t.dsn)
      ) {
        this._dsn = lr(t.dsn);
        const e = Xi(this._dsn, t);
        this._transport = t.transport({
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...t.transportOptions,
          url: e,
        });
      } else
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.warn("No DSN provided, client will not do anything.");
    }
    captureException(t, e, n) {
      if (Jr(t))
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.log(Ji)
        );
      let r = e && e.event_id;
      return (
        this._process(
          this.eventFromException(t, e)
            .then((t) => this._captureEvent(t, e, n))
            .then((t) => {
              r = t;
            })
        ),
        r
      );
    }
    captureMessage(t, e, n, r) {
      let i = n && n.event_id;
      const o = Hn(t)
        ? this.eventFromMessage(String(t), e, n)
        : this.eventFromException(t, n);
      return (
        this._process(
          o
            .then((t) => this._captureEvent(t, n, r))
            .then((t) => {
              i = t;
            })
        ),
        i
      );
    }
    captureEvent(t, e, n) {
      if (e && e.originalException && Jr(e.originalException))
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.log(Ji)
        );
      let r = e && e.event_id;
      return (
        this._process(
          this._captureEvent(t, e, n).then((t) => {
            r = t;
          })
        ),
        r
      );
    }
    captureSession(t) {
      this._isEnabled()
        ? "string" != typeof t.release
          ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.warn(
              "Discarded session because of missing or non-string release"
            )
          : (this.sendSession(t), $i(t, { init: !1 }))
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.warn("SDK not enabled, will not capture session.");
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getTransport() {
      return this._transport;
    }
    flush(t) {
      const e = this._transport;
      return e
        ? this._isClientDoneProcessing(t).then((n) =>
            e.flush(t).then((t) => n && t)
          )
        : ai(!0);
    }
    close(t) {
      return this.flush(t).then((t) => ((this.getOptions().enabled = !1), t));
    }
    setupIntegrations() {
      this._isEnabled() &&
        !this._integrationsInitialized &&
        ((this._integrations = (function (t) {
          const e = {};
          return (
            t.forEach((t) => {
              (e[t.name] = t),
                -1 === Ki.indexOf(t.name) &&
                  (t.setupOnce(Ai, Bi),
                  Ki.push(t.name),
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    hr.log(`Integration installed: ${t.name}`));
            }),
            e
          );
        })(this._options.integrations)),
        (this._integrationsInitialized = !0));
    }
    getIntegrationById(t) {
      return this._integrations[t];
    }
    getIntegration(t) {
      try {
        return this._integrations[t.id] || null;
      } catch (e) {
        return (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.warn(
              `Cannot retrieve integration ${t.id} from the current Client`
            ),
          null
        );
      }
    }
    sendEvent(t, e = {}) {
      if (this._dsn) {
        let n = (function (t, e, n, r) {
          const i = Ci(n),
            o = t.type || "event";
          !(function (t, e) {
            e &&
              ((t.sdk = t.sdk || {}),
              (t.sdk.name = t.sdk.name || e.name),
              (t.sdk.version = t.sdk.version || e.version),
              (t.sdk.integrations = [
                ...(t.sdk.integrations || []),
                ...(e.integrations || []),
              ]),
              (t.sdk.packages = [
                ...(t.sdk.packages || []),
                ...(e.packages || []),
              ]));
          })(t, n && n.sdk);
          const a = Ri(t, i, r, e);
          return delete t.sdkProcessingMetadata, yi(a, [[{ type: o }, t]]);
        })(t, this._dsn, this._options._metadata, this._options.tunnel);
        for (const t of e.attachments || [])
          n = bi(
            n,
            xi(
              t,
              this._options.transportOptions &&
                this._options.transportOptions.textEncoder
            )
          );
        this._sendEnvelope(n);
      }
    }
    sendSession(t) {
      if (this._dsn) {
        const e = (function (t, e, n, r) {
          const i = Ci(n);
          return yi(
            {
              sent_at: new Date().toISOString(),
              ...(i && { sdk: i }),
              ...(!!r && { dsn: ar(e) }),
            },
            [
              "aggregates" in t
                ? [{ type: "sessions" }, t]
                : [{ type: "session" }, t],
            ]
          );
        })(t, this._dsn, this._options._metadata, this._options.tunnel);
        this._sendEnvelope(e);
      }
    }
    recordDroppedEvent(t, e, n) {
      if (this._options.sendClientReports) {
        const n = `${t}:${e}`;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.log(`Adding outcome: "${n}"`),
          (this._outcomes[n] = this._outcomes[n] + 1 || 1);
      }
    }
    _updateSessionFromEvent(t, e) {
      let n = !1,
        r = !1;
      const i = e.exception && e.exception.values;
      if (i) {
        r = !0;
        for (const t of i) {
          const e = t.mechanism;
          if (e && !1 === e.handled) {
            n = !0;
            break;
          }
        }
      }
      const o = "ok" === t.status;
      ((o && 0 === t.errors) || (o && n)) &&
        ($i(t, {
          ...(n && { status: "crashed" }),
          errors: t.errors || Number(r || n),
        }),
        this.captureSession(t));
    }
    _isClientDoneProcessing(t) {
      return new li((e) => {
        let n = 0;
        const r = setInterval(() => {
          0 == this._numProcessing
            ? (clearInterval(r), e(!0))
            : ((n += 1), t && n >= t && (clearInterval(r), e(!1)));
        }, 1);
      });
    }
    _isEnabled() {
      return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
    }
    _prepareEvent(t, e, n) {
      const { normalizeDepth: r = 3, normalizeMaxBreadth: i = 1e3 } =
          this.getOptions(),
        o = {
          ...t,
          event_id: t.event_id || e.event_id || Vr(),
          timestamp: t.timestamp || gi(),
        };
      this._applyClientOptions(o), this._applyIntegrationsMetadata(o);
      let a = n;
      e.captureContext && (a = Li.clone(a).update(e.captureContext));
      let s = ai(o);
      if (a && a.getAttachments) {
        const t = [...(e.attachments || []), ...a.getAttachments()];
        t.length && (e.attachments = t), (s = a.applyToEvent(o, e));
      }
      return s.then((t) =>
        "number" == typeof r && r > 0 ? this._normalizeEvent(t, r, i) : t
      );
    }
    _normalizeEvent(t, e, n) {
      if (!t) return null;
      const r = {
        ...t,
        ...(t.breadcrumbs && {
          breadcrumbs: t.breadcrumbs.map((t) => ({
            ...t,
            ...(t.data && { data: ni(t.data, e, n) }),
          })),
        }),
        ...(t.user && { user: ni(t.user, e, n) }),
        ...(t.contexts && { contexts: ni(t.contexts, e, n) }),
        ...(t.extra && { extra: ni(t.extra, e, n) }),
      };
      return (
        t.contexts &&
          t.contexts.trace &&
          r.contexts &&
          ((r.contexts.trace = t.contexts.trace),
          t.contexts.trace.data &&
            (r.contexts.trace.data = ni(t.contexts.trace.data, e, n))),
        t.spans &&
          (r.spans = t.spans.map(
            (t) => (t.data && (t.data = ni(t.data, e, n)), t)
          )),
        r
      );
    }
    _applyClientOptions(t) {
      const e = this.getOptions(),
        { environment: n, release: r, dist: i, maxValueLength: o = 250 } = e;
      "environment" in t ||
        (t.environment = "environment" in e ? n : "production"),
        void 0 === t.release && void 0 !== r && (t.release = r),
        void 0 === t.dist && void 0 !== i && (t.dist = i),
        t.message && (t.message = pr(t.message, o));
      const a = t.exception && t.exception.values && t.exception.values[0];
      a && a.value && (a.value = pr(a.value, o));
      const s = t.request;
      s && s.url && (s.url = pr(s.url, o));
    }
    _applyIntegrationsMetadata(t) {
      const e = Object.keys(this._integrations);
      e.length > 0 &&
        ((t.sdk = t.sdk || {}),
        (t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
    }
    _captureEvent(t, e = {}, n) {
      return this._processEvent(t, e, n).then(
        (t) => t.event_id,
        (t) => {
          if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
            const e = t;
            "log" === e.logLevel ? hr.log(e.message) : hr.warn(e);
          }
        }
      );
    }
    _processEvent(t, e, n) {
      const r = this.getOptions(),
        { sampleRate: i } = r;
      if (!this._isEnabled())
        return si(new ir("SDK not enabled, will not capture event.", "log"));
      const o = no(t),
        a = eo(t),
        s = t.type || "error",
        l = `before send for type \`${s}\``;
      return a && "number" == typeof i && Math.random() > i
        ? (this.recordDroppedEvent("sample_rate", "error", t),
          si(
            new ir(
              `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
              "log"
            )
          ))
        : this._prepareEvent(t, e, n)
            .then((n) => {
              if (null === n)
                throw (
                  (this.recordDroppedEvent("event_processor", s, t),
                  new ir(
                    "An event processor returned `null`, will not send event.",
                    "log"
                  ))
                );
              if (e.data && !0 === e.data.__sentry__) return n;
              const i = (function (t, e, n) {
                const { beforeSend: r, beforeSendTransaction: i } = t;
                if (eo(e) && r) return r(e, n);
                if (no(e) && i) return i(e, n);
                return e;
              })(r, n, e);
              return (function (t, e) {
                const n = `${e} must return \`null\` or a valid event.`;
                if (Zn(t))
                  return t.then(
                    (t) => {
                      if (!qn(t) && null !== t) throw new ir(n);
                      return t;
                    },
                    (t) => {
                      throw new ir(`${e} rejected with ${t}`);
                    }
                  );
                if (!qn(t) && null !== t) throw new ir(n);
                return t;
              })(i, l);
            })
            .then((r) => {
              if (null === r)
                throw (
                  (this.recordDroppedEvent("before_send", t.type || "error", t),
                  new ir(`${l} returned \`null\`, will not send event.`, "log"))
                );
              const i = n && n.getSession();
              !o && i && this._updateSessionFromEvent(i, r);
              const a = r.transaction_info;
              if (o && a && r.transaction !== t.transaction) {
                const t = "custom";
                r.transaction_info = {
                  ...a,
                  source: t,
                  changes: [
                    ...a.changes,
                    {
                      source: t,
                      timestamp: r.timestamp,
                      propagations: a.propagations,
                    },
                  ],
                };
              }
              return this.sendEvent(r, e), r;
            })
            .then(null, (t) => {
              if (t instanceof ir) throw t;
              throw (
                (this.captureException(t, {
                  data: { __sentry__: !0 },
                  originalException: t,
                }),
                new ir(
                  `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`
                ))
              );
            });
    }
    _process(t) {
      this._numProcessing++,
        t.then(
          (t) => (this._numProcessing--, t),
          (t) => (this._numProcessing--, t)
        );
    }
    _sendEnvelope(t) {
      this._transport && this._dsn
        ? this._transport.send(t).then(null, (t) => {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              hr.error("Error while sending event:", t);
          })
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.error("Transport disabled");
    }
    _clearOutcomes() {
      const t = this._outcomes;
      return (
        (this._outcomes = {}),
        Object.keys(t).map((e) => {
          const [n, r] = e.split(":");
          return { reason: n, category: r, quantity: t[e] };
        })
      );
    }
  }
  function eo(t) {
    return void 0 === t.type;
  }
  function no(t) {
    return "transaction" === t.type;
  }
  function ro(t, e, n = ci(t.bufferSize || 30)) {
    let r = {};
    return {
      send: function (i) {
        const o = [];
        if (
          (wi(i, (e, n) => {
            const i = Ti(n);
            if (
              (function (t, e, n = Date.now()) {
                return (
                  (function (t, e) {
                    return t[e] || t.all || 0;
                  })(t, e) > n
                );
              })(r, i)
            ) {
              const r = io(e, n);
              t.recordDroppedEvent("ratelimit_backoff", i, r);
            } else o.push(e);
          }),
          0 === o.length)
        )
          return ai();
        const a = yi(i[0], o),
          s = (e) => {
            wi(a, (n, r) => {
              const i = io(n, r);
              t.recordDroppedEvent(e, Ti(r), i);
            });
          };
        return n
          .add(() =>
            e({ body: Ei(a, t.textEncoder) }).then(
              (t) => {
                void 0 !== t.statusCode &&
                  (t.statusCode < 200 || t.statusCode >= 300) &&
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                  hr.warn(
                    `Sentry responded with status code ${t.statusCode} to sent event.`
                  ),
                  (r = Ii(r, t));
              },
              (t) => {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  hr.error("Failed while sending event:", t),
                  s("network_error");
              }
            )
          )
          .then(
            (t) => t,
            (t) => {
              if (t instanceof ir)
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    hr.error("Skipped sending event because buffer is full."),
                  s("queue_overflow"),
                  ai()
                );
              throw t;
            }
          );
      },
      flush: (t) => n.drain(t),
    };
  }
  function io(t, e) {
    if ("event" === e || "transaction" === e)
      return Array.isArray(t) ? t[1] : void 0;
  }
  const oo = "7.27.0";
  let ao;
  class so {
    constructor() {
      so.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "FunctionToString";
    }
    __init() {
      this.name = so.id;
    }
    setupOnce() {
      (ao = Function.prototype.toString),
        (Function.prototype.toString = function (...t) {
          const e = br(this) || this;
          return ao.apply(e, t);
        });
    }
  }
  so.__initStatic();
  const lo = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
  ];
  class co {
    static __initStatic() {
      this.id = "InboundFilters";
    }
    __init() {
      this.name = co.id;
    }
    constructor(t = {}) {
      (this._options = t), co.prototype.__init.call(this);
    }
    setupOnce(t, e) {
      const n = (t) => {
        const n = e();
        if (n) {
          const e = n.getIntegration(co);
          if (e) {
            const r = n.getClient(),
              i = r ? r.getOptions() : {},
              o = (function (t = {}, e = {}) {
                return {
                  allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
                  denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
                  ignoreErrors: [
                    ...(t.ignoreErrors || []),
                    ...(e.ignoreErrors || []),
                    ...lo,
                  ],
                  ignoreInternal:
                    void 0 === t.ignoreInternal || t.ignoreInternal,
                };
              })(e._options, i);
            return (function (t, e) {
              if (
                e.ignoreInternal &&
                (function (t) {
                  try {
                    return "SentryError" === t.exception.values[0].type;
                  } catch (t) {}
                  return !1;
                })(t)
              )
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    hr.warn(
                      `Event dropped due to being internal Sentry Error.\nEvent: ${Xr(
                        t
                      )}`
                    ),
                  !0
                );
              if (
                (function (t, e) {
                  if (!e || !e.length) return !1;
                  return (function (t) {
                    if (t.message) return [t.message];
                    if (t.exception)
                      try {
                        const { type: e = "", value: n = "" } =
                          (t.exception.values && t.exception.values[0]) || {};
                        return [`${n}`, `${e}: ${n}`];
                      } catch (e) {
                        return (
                          ("undefined" == typeof __SENTRY_DEBUG__ ||
                            __SENTRY_DEBUG__) &&
                            hr.error(
                              `Cannot extract message for event ${Xr(t)}`
                            ),
                          []
                        );
                      }
                    return [];
                  })(t).some((t) => gr(t, e));
                })(t, e.ignoreErrors)
              )
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    hr.warn(
                      `Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${Xr(
                        t
                      )}`
                    ),
                  !0
                );
              if (
                (function (t, e) {
                  if (!e || !e.length) return !1;
                  const n = uo(t);
                  return !!n && gr(n, e);
                })(t, e.denyUrls)
              )
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    hr.warn(
                      `Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${Xr(
                        t
                      )}.\nUrl: ${uo(t)}`
                    ),
                  !0
                );
              if (
                !(function (t, e) {
                  if (!e || !e.length) return !0;
                  const n = uo(t);
                  return !n || gr(n, e);
                })(t, e.allowUrls)
              )
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    hr.warn(
                      `Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${Xr(
                        t
                      )}.\nUrl: ${uo(t)}`
                    ),
                  !0
                );
              return !1;
            })(t, o)
              ? null
              : t;
          }
        }
        return t;
      };
      (n.id = this.name), t(n);
    }
  }
  function uo(t) {
    try {
      let e;
      try {
        e = t.exception.values[0].stacktrace.frames;
      } catch (t) {}
      return e
        ? (function (t = []) {
            for (let e = t.length - 1; e >= 0; e--) {
              const n = t[e];
              if (
                n &&
                "<anonymous>" !== n.filename &&
                "[native code]" !== n.filename
              )
                return n.filename || null;
            }
            return null;
          })(e)
        : null;
    } catch (e) {
      return (
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.error(`Cannot extract url for event ${Xr(t)}`),
        null
      );
    }
  }
  co.__initStatic();
  var ho = Object.freeze({
    __proto__: null,
    FunctionToString: so,
    InboundFilters: co,
  });
  const po = Qn;
  let fo = 0;
  function mo() {
    return fo > 0;
  }
  function go() {
    fo++,
      setTimeout(() => {
        fo--;
      });
  }
  function _o(t, e = {}, n) {
    if ("function" != typeof t) return t;
    try {
      const e = t.__sentry_wrapped__;
      if (e) return e;
      if (br(t)) return t;
    } catch (e) {
      return t;
    }
    const r = function () {
      const r = Array.prototype.slice.call(arguments);
      try {
        n && "function" == typeof n && n.apply(this, arguments);
        const i = r.map((t) => _o(t, e));
        return t.apply(this, i);
      } catch (t) {
        throw (
          (go(),
          qi((n) => {
            n.addEventProcessor(
              (t) => (
                e.mechanism && (Kr(t, void 0, void 0), Qr(t, e.mechanism)),
                (t.extra = { ...t.extra, arguments: r }),
                t
              )
            ),
              ji(t);
          }),
          t)
        );
      }
    };
    try {
      for (const e in t)
        Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
    } catch (t) {}
    yr(r, t), vr(t, "__sentry_wrapped__", r);
    try {
      Object.getOwnPropertyDescriptor(r, "name").configurable &&
        Object.defineProperty(r, "name", { get: () => t.name });
    } catch (t) {}
    return r;
  }
  function vo(t, e) {
    const n = bo(t, e),
      r = { type: e && e.name, value: So(e) };
    return (
      n.length && (r.stacktrace = { frames: n }),
      void 0 === r.type &&
        "" === r.value &&
        (r.value = "Unrecoverable error caught"),
      r
    );
  }
  function yo(t, e) {
    return { exception: { values: [vo(t, e)] } };
  }
  function bo(t, e) {
    const n = e.stacktrace || e.stack || "",
      r = (function (t) {
        if (t) {
          if ("number" == typeof t.framesToPop) return t.framesToPop;
          if (wo.test(t.message)) return 1;
        }
        return 0;
      })(e);
    try {
      return t(n, r);
    } catch (t) {}
    return [];
  }
  const wo = /Minified React error #\d+;/i;
  function So(t) {
    const e = t && t.message;
    return e
      ? e.error && "string" == typeof e.error.message
        ? e.error.message
        : e
      : "No error message";
  }
  function Eo(t, e, n, r) {
    const i = ko(t, e, (n && n.syntheticException) || void 0, r);
    return (
      Qr(i),
      (i.level = "error"),
      n && n.event_id && (i.event_id = n.event_id),
      ai(i)
    );
  }
  function xo(t, e, n = "info", r, i) {
    const o = To(t, e, (r && r.syntheticException) || void 0, i);
    return (o.level = n), r && r.event_id && (o.event_id = r.event_id), ai(o);
  }
  function ko(t, e, n, r, i) {
    let o;
    if (jn(e) && e.error) {
      return yo(t, e.error);
    }
    if (Wn(e) || Gn(e, "DOMException")) {
      const i = e;
      if ("stack" in e) o = yo(t, e);
      else {
        const e = i.name || (Wn(i) ? "DOMError" : "DOMException"),
          a = i.message ? `${e}: ${i.message}` : e;
        (o = To(t, a, n, r)), Kr(o, a);
      }
      return (
        "code" in i &&
          (o.tags = { ...o.tags, "DOMException.code": `${i.code}` }),
        o
      );
    }
    if (zn(e)) return yo(t, e);
    if (qn(e) || Vn(e)) {
      return (
        (o = (function (t, e, n, r) {
          const i = Bi().getClient(),
            o = i && i.getOptions().normalizeDepth,
            a = {
              exception: {
                values: [
                  {
                    type: Vn(e)
                      ? e.constructor.name
                      : r
                      ? "UnhandledRejection"
                      : "Error",
                    value: `Non-Error ${
                      r ? "promise rejection" : "exception"
                    } captured with keys: ${xr(e)}`,
                  },
                ],
              },
              extra: { __serialized__: ri(e, o) },
            };
          if (n) {
            const e = bo(t, n);
            e.length && (a.exception.values[0].stacktrace = { frames: e });
          }
          return a;
        })(t, e, n, i)),
        Qr(o, { synthetic: !0 }),
        o
      );
    }
    return (
      (o = To(t, e, n, r)), Kr(o, `${e}`, void 0), Qr(o, { synthetic: !0 }), o
    );
  }
  function To(t, e, n, r) {
    const i = { message: e };
    if (r && n) {
      const r = bo(t, n);
      r.length &&
        (i.exception = { values: [{ value: e, stacktrace: { frames: r } }] });
    }
    return i;
  }
  const Co = 1024,
    Ro = "Breadcrumbs";
  class Io {
    static __initStatic() {
      this.id = Ro;
    }
    __init() {
      this.name = Io.id;
    }
    constructor(t) {
      Io.prototype.__init.call(this),
        (this.options = {
          console: !0,
          dom: !0,
          fetch: !0,
          history: !0,
          sentry: !0,
          xhr: !0,
          ...t,
        });
    }
    setupOnce() {
      this.options.console && Pr("console", No),
        this.options.dom &&
          Pr(
            "dom",
            (function (t) {
              function e(e) {
                let n,
                  r = "object" == typeof t ? t.serializeAttribute : void 0,
                  i =
                    "object" == typeof t && "number" == typeof t.maxStringLength
                      ? t.maxStringLength
                      : void 0;
                i &&
                  i > Co &&
                  (("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    hr.warn(
                      `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`
                    ),
                  (i = Co)),
                  "string" == typeof r && (r = [r]);
                try {
                  n = e.event.target
                    ? nr(e.event.target, { keyAttrs: r, maxStringLength: i })
                    : nr(e.event, { keyAttrs: r, maxStringLength: i });
                } catch (t) {
                  n = "<unknown>";
                }
                0 !== n.length &&
                  Bi().addBreadcrumb(
                    { category: `ui.${e.name}`, message: n },
                    { event: e.event, name: e.name, global: e.global }
                  );
              }
              return e;
            })(this.options.dom)
          ),
        this.options.xhr && Pr("xhr", $o),
        this.options.fetch && Pr("fetch", Lo),
        this.options.history && Pr("history", Mo);
    }
    addSentryBreadcrumb(t) {
      this.options.sentry &&
        Bi().addBreadcrumb(
          {
            category:
              "sentry." + ("transaction" === t.type ? "transaction" : "event"),
            event_id: t.event_id,
            level: t.level,
            message: Xr(t),
          },
          { event: t }
        );
    }
  }
  function No(t) {
    for (let e = 0; e < t.args.length; e++)
      if ("ref=Ref<" === t.args[e]) {
        t.args[e + 1] = "viewRef";
        break;
      }
    const e = {
      category: "console",
      data: { arguments: t.args, logger: "console" },
      level:
        ((n = t.level), "warn" === n ? "warning" : di.includes(n) ? n : "log"),
      message: fr(t.args, " "),
    };
    var n;
    if ("assert" === t.level) {
      if (!1 !== t.args[0]) return;
      (e.message = `Assertion failed: ${
        fr(t.args.slice(1), " ") || "console.assert"
      }`),
        (e.data.arguments = t.args.slice(1));
    }
    Bi().addBreadcrumb(e, { input: t.args, level: t.level });
  }
  function $o(t) {
    if (t.endTimestamp) {
      if (t.xhr.__sentry_own_request__) return;
      const {
        method: e,
        url: n,
        status_code: r,
        body: i,
      } = t.xhr.__sentry_xhr__ || {};
      Bi().addBreadcrumb(
        {
          category: "xhr",
          data: { method: e, url: n, status_code: r },
          type: "http",
        },
        { xhr: t.xhr, input: i }
      );
    } else;
  }
  function Lo(t) {
    t.endTimestamp &&
      ((t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method) ||
        (t.error
          ? Bi().addBreadcrumb(
              {
                category: "fetch",
                data: t.fetchData,
                level: "error",
                type: "http",
              },
              { data: t.error, input: t.args }
            )
          : Bi().addBreadcrumb(
              {
                category: "fetch",
                data: { ...t.fetchData, status_code: t.response.status },
                type: "http",
              },
              { input: t.args, response: t.response }
            )));
  }
  function Mo(t) {
    let e = t.from,
      n = t.to;
    const r = ui(po.location.href);
    let i = ui(e);
    const o = ui(n);
    i.path || (i = r),
      r.protocol === o.protocol && r.host === o.host && (n = o.relative),
      r.protocol === i.protocol && r.host === i.host && (e = i.relative),
      Bi().addBreadcrumb({ category: "navigation", data: { from: e, to: n } });
  }
  Io.__initStatic();
  class Ao extends to {
    constructor(t) {
      (t._metadata = t._metadata || {}),
        (t._metadata.sdk = t._metadata.sdk || {
          name: "sentry.javascript.browser",
          packages: [{ name: "npm:@sentry/browser", version: oo }],
          version: oo,
        }),
        super(t),
        t.sendClientReports &&
          po.document &&
          po.document.addEventListener("visibilitychange", () => {
            "hidden" === po.document.visibilityState && this._flushOutcomes();
          });
    }
    eventFromException(t, e) {
      return Eo(
        this._options.stackParser,
        t,
        e,
        this._options.attachStacktrace
      );
    }
    eventFromMessage(t, e = "info", n) {
      return xo(
        this._options.stackParser,
        t,
        e,
        n,
        this._options.attachStacktrace
      );
    }
    sendEvent(t, e) {
      Cr([
        this.getIntegrationById(Ro),
        "optionalAccess",
        (t) => t.addSentryBreadcrumb,
        "optionalCall",
        (e) => e(t),
      ]),
        super.sendEvent(t, e);
    }
    _prepareEvent(t, e, n) {
      return (
        (t.platform = t.platform || "javascript"), super._prepareEvent(t, e, n)
      );
    }
    _flushOutcomes() {
      const t = this._clearOutcomes();
      if (0 === t.length)
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.log("No outcomes to send")
        );
      if (!this._dsn)
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.log("No dsn provided, will not send outcomes")
        );
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        hr.log("Sending outcomes:", t);
      const e = Xi(this._dsn, this._options),
        n =
          ((r = t),
          yi((i = this._options.tunnel && ar(this._dsn)) ? { dsn: i } : {}, [
            [
              { type: "client_report" },
              { timestamp: o || gi(), discarded_events: r },
            ],
          ]));
      var r, i, o;
      try {
        const t =
          "[object Navigator]" ===
          Object.prototype.toString.call(po && po.navigator);
        if (
          t &&
          "function" == typeof po.navigator.sendBeacon &&
          !this._options.transportOptions
        ) {
          po.navigator.sendBeacon.bind(po.navigator)(e, Ei(n));
        } else this._sendEnvelope(n);
      } catch (t) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.error(t);
      }
    }
  }
  let Do;
  function Oo(
    t,
    e = (function () {
      if (Do) return Do;
      if (Mr(po.fetch)) return (Do = po.fetch.bind(po));
      const t = po.document;
      let e = po.fetch;
      if (t && "function" == typeof t.createElement)
        try {
          const n = t.createElement("iframe");
          (n.hidden = !0), t.head.appendChild(n);
          const r = n.contentWindow;
          r && r.fetch && (e = r.fetch), t.head.removeChild(n);
        } catch (t) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.warn(
              "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
              t
            );
        }
      return (Do = e.bind(po));
    })()
  ) {
    return ro(t, function (n) {
      const r = {
        body: n.body,
        method: "POST",
        referrerPolicy: "origin",
        headers: t.headers,
        keepalive: n.body.length <= 65536,
        ...t.fetchOptions,
      };
      try {
        return e(t.url, r).then((t) => ({
          statusCode: t.status,
          headers: {
            "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": t.headers.get("Retry-After"),
          },
        }));
      } catch (t) {
        return (Do = void 0), si(t);
      }
    });
  }
  function Uo(t) {
    return ro(t, function (e) {
      return new li((n, r) => {
        const i = new XMLHttpRequest();
        (i.onerror = r),
          (i.onreadystatechange = () => {
            4 === i.readyState &&
              n({
                statusCode: i.status,
                headers: {
                  "x-sentry-rate-limits": i.getResponseHeader(
                    "X-Sentry-Rate-Limits"
                  ),
                  "retry-after": i.getResponseHeader("Retry-After"),
                },
              });
          }),
          i.open("POST", t.url);
        for (const e in t.headers)
          Object.prototype.hasOwnProperty.call(t.headers, e) &&
            i.setRequestHeader(e, t.headers[e]);
        i.send(e.body);
      });
    });
  }
  const Po = "?";
  function Bo(t, e, n, r) {
    const i = { filename: t, function: e, in_app: !0 };
    return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i;
  }
  const Fo =
      /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    zo = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    Go = [
      30,
      (t) => {
        const e = Fo.exec(t);
        if (e) {
          if (e[2] && 0 === e[2].indexOf("eval")) {
            const t = zo.exec(e[2]);
            t && ((e[2] = t[1]), (e[3] = t[2]), (e[4] = t[3]));
          }
          const [t, n] = ta(e[1] || Po, e[2]);
          return Bo(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
        }
      },
    ],
    jo =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    Wo = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    Yo = [
      50,
      (t) => {
        const e = jo.exec(t);
        if (e) {
          if (e[3] && e[3].indexOf(" > eval") > -1) {
            const t = Wo.exec(e[3]);
            t &&
              ((e[1] = e[1] || "eval"),
              (e[3] = t[1]),
              (e[4] = t[2]),
              (e[5] = ""));
          }
          let t = e[3],
            n = e[1] || Po;
          return (
            ([n, t] = ta(n, t)),
            Bo(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
          );
        }
      },
    ],
    Ho =
      /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    qo = [
      40,
      (t) => {
        const e = Ho.exec(t);
        return e ? Bo(e[2], e[1] || Po, +e[3], e[4] ? +e[4] : void 0) : void 0;
      },
    ],
    Vo = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
    Zo = [
      10,
      (t) => {
        const e = Vo.exec(t);
        return e ? Bo(e[2], e[3] || Po, +e[1]) : void 0;
      },
    ],
    Xo =
      / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
    Ko = [
      20,
      (t) => {
        const e = Xo.exec(t);
        return e ? Bo(e[5], e[3] || e[4] || Po, +e[1], +e[2]) : void 0;
      },
    ],
    Qo = [Go, Yo, qo],
    Jo = Rr(...Qo),
    ta = (t, e) => {
      const n = -1 !== t.indexOf("safari-extension"),
        r = -1 !== t.indexOf("safari-web-extension");
      return n || r
        ? [
            -1 !== t.indexOf("@") ? t.split("@")[0] : Po,
            n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
          ]
        : [t, e];
    };
  class ea {
    static __initStatic() {
      this.id = "GlobalHandlers";
    }
    __init() {
      this.name = ea.id;
    }
    __init2() {
      this._installFunc = { onerror: na, onunhandledrejection: ra };
    }
    constructor(t) {
      ea.prototype.__init.call(this),
        ea.prototype.__init2.call(this),
        (this._options = { onerror: !0, onunhandledrejection: !0, ...t });
    }
    setupOnce() {
      Error.stackTraceLimit = 50;
      const t = this._options;
      for (const n in t) {
        const r = this._installFunc[n];
        r &&
          t[n] &&
          ((e = n),
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.log(`Global Handler attached: ${e}`),
          r(),
          (this._installFunc[n] = void 0));
      }
      var e;
    }
  }
  function na() {
    Pr("error", (t) => {
      const [e, n, r] = aa();
      if (!e.getIntegration(ea)) return;
      const { msg: i, url: o, line: a, column: s, error: l } = t;
      if (mo() || (l && l.__sentry_own_request__)) return;
      const c =
        void 0 === l && Yn(i)
          ? (function (t, e, n, r) {
              const i =
                /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
              let o = jn(t) ? t.message : t,
                a = "Error";
              const s = o.match(i);
              s && ((a = s[1]), (o = s[2]));
              return ia(
                { exception: { values: [{ type: a, value: o }] } },
                e,
                n,
                r
              );
            })(i, o, a, s)
          : ia(ko(n, l || i, void 0, r, !1), o, a, s);
      (c.level = "error"), oa(e, l, c, "onerror");
    });
  }
  function ra() {
    Pr("unhandledrejection", (t) => {
      const [e, n, r] = aa();
      if (!e.getIntegration(ea)) return;
      let i = t;
      try {
        "reason" in t
          ? (i = t.reason)
          : "detail" in t && "reason" in t.detail && (i = t.detail.reason);
      } catch (t) {}
      if (mo() || (i && i.__sentry_own_request__)) return !0;
      const o = Hn(i)
        ? {
            exception: {
              values: [
                {
                  type: "UnhandledRejection",
                  value: `Non-Error promise rejection captured with value: ${String(
                    i
                  )}`,
                },
              ],
            },
          }
        : ko(n, i, void 0, r, !0);
      (o.level = "error"), oa(e, i, o, "onunhandledrejection");
    });
  }
  function ia(t, e, n, r) {
    const i = (t.exception = t.exception || {}),
      o = (i.values = i.values || []),
      a = (o[0] = o[0] || {}),
      s = (a.stacktrace = a.stacktrace || {}),
      l = (s.frames = s.frames || []),
      c = isNaN(parseInt(r, 10)) ? void 0 : r,
      u = isNaN(parseInt(n, 10)) ? void 0 : n,
      d =
        Yn(e) && e.length > 0
          ? e
          : (function () {
              try {
                return er.document.location.href;
              } catch (t) {
                return "";
              }
            })();
    return (
      0 === l.length &&
        l.push({ colno: c, filename: d, function: "?", in_app: !0, lineno: u }),
      t
    );
  }
  function oa(t, e, n, r) {
    Qr(n, { handled: !1, type: r }),
      t.captureEvent(n, { originalException: e });
  }
  function aa() {
    const t = Bi(),
      e = t.getClient(),
      n = (e && e.getOptions()) || {
        stackParser: () => [],
        attachStacktrace: !1,
      };
    return [t, n.stackParser, n.attachStacktrace];
  }
  ea.__initStatic();
  const sa = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ];
  class la {
    static __initStatic() {
      this.id = "TryCatch";
    }
    __init() {
      this.name = la.id;
    }
    constructor(t) {
      la.prototype.__init.call(this),
        (this._options = {
          XMLHttpRequest: !0,
          eventTarget: !0,
          requestAnimationFrame: !0,
          setInterval: !0,
          setTimeout: !0,
          ...t,
        });
    }
    setupOnce() {
      this._options.setTimeout && _r(po, "setTimeout", ca),
        this._options.setInterval && _r(po, "setInterval", ca),
        this._options.requestAnimationFrame &&
          _r(po, "requestAnimationFrame", ua),
        this._options.XMLHttpRequest &&
          "XMLHttpRequest" in po &&
          _r(XMLHttpRequest.prototype, "send", da);
      const t = this._options.eventTarget;
      if (t) {
        (Array.isArray(t) ? t : sa).forEach(ha);
      }
    }
  }
  function ca(t) {
    return function (...e) {
      const n = e[0];
      return (
        (e[0] = _o(n, {
          mechanism: {
            data: { function: Nr(t) },
            handled: !0,
            type: "instrument",
          },
        })),
        t.apply(this, e)
      );
    };
  }
  function ua(t) {
    return function (e) {
      return t.apply(this, [
        _o(e, {
          mechanism: {
            data: { function: "requestAnimationFrame", handler: Nr(t) },
            handled: !0,
            type: "instrument",
          },
        }),
      ]);
    };
  }
  function da(t) {
    return function (...e) {
      const n = this;
      return (
        ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
          (t) => {
            t in n &&
              "function" == typeof n[t] &&
              _r(n, t, function (e) {
                const n = {
                    mechanism: {
                      data: { function: t, handler: Nr(e) },
                      handled: !0,
                      type: "instrument",
                    },
                  },
                  r = br(e);
                return r && (n.mechanism.data.handler = Nr(r)), _o(e, n);
              });
          }
        ),
        t.apply(this, e)
      );
    };
  }
  function ha(t) {
    const e = po,
      n = e[t] && e[t].prototype;
    n &&
      n.hasOwnProperty &&
      n.hasOwnProperty("addEventListener") &&
      (_r(n, "addEventListener", function (e) {
        return function (n, r, i) {
          try {
            "function" == typeof r.handleEvent &&
              (r.handleEvent = _o(r.handleEvent, {
                mechanism: {
                  data: { function: "handleEvent", handler: Nr(r), target: t },
                  handled: !0,
                  type: "instrument",
                },
              }));
          } catch (t) {}
          return e.apply(this, [
            n,
            _o(r, {
              mechanism: {
                data: {
                  function: "addEventListener",
                  handler: Nr(r),
                  target: t,
                },
                handled: !0,
                type: "instrument",
              },
            }),
            i,
          ]);
        };
      }),
      _r(n, "removeEventListener", function (t) {
        return function (e, n, r) {
          const i = n;
          try {
            const n = i && i.__sentry_wrapped__;
            n && t.call(this, e, n, r);
          } catch (t) {}
          return t.call(this, e, i, r);
        };
      }));
  }
  la.__initStatic();
  class pa {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    __init() {
      this.name = pa.id;
    }
    constructor(t = {}) {
      pa.prototype.__init.call(this),
        (this._key = t.key || "cause"),
        (this._limit = t.limit || 5);
    }
    setupOnce() {
      const t = Bi().getClient();
      t &&
        Ai((e, n) => {
          const r = Bi().getIntegration(pa);
          return r
            ? (function (t, e, n, r, i) {
                if (
                  !(
                    r.exception &&
                    r.exception.values &&
                    i &&
                    Xn(i.originalException, Error)
                  )
                )
                  return r;
                const o = fa(t, n, i.originalException, e);
                return (r.exception.values = [...o, ...r.exception.values]), r;
              })(t.getOptions().stackParser, r._key, r._limit, e, n)
            : e;
        });
    }
  }
  function fa(t, e, n, r, i = []) {
    if (!Xn(n[r], Error) || i.length + 1 >= e) return i;
    const o = vo(t, n[r]);
    return fa(t, e, n[r], r, [o, ...i]);
  }
  pa.__initStatic();
  class ma {
    constructor() {
      ma.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "HttpContext";
    }
    __init() {
      this.name = ma.id;
    }
    setupOnce() {
      Ai((t) => {
        if (Bi().getIntegration(ma)) {
          if (!po.navigator && !po.location && !po.document) return t;
          const e =
              (t.request && t.request.url) || (po.location && po.location.href),
            { referrer: n } = po.document || {},
            { userAgent: r } = po.navigator || {},
            i = {
              ...(e && { url: e }),
              headers: {
                ...(t.request && t.request.headers),
                ...(n && { Referer: n }),
                ...(r && { "User-Agent": r }),
              },
            };
          return { ...t, request: i };
        }
        return t;
      });
    }
  }
  ma.__initStatic();
  class ga {
    constructor() {
      ga.prototype.__init.call(this);
    }
    static __initStatic() {
      this.id = "Dedupe";
    }
    __init() {
      this.name = ga.id;
    }
    setupOnce(t, e) {
      const n = (t) => {
        const n = e().getIntegration(ga);
        if (n) {
          try {
            if (
              (function (t, e) {
                if (!e) return !1;
                if (
                  (function (t, e) {
                    const n = t.message,
                      r = e.message;
                    if (!n && !r) return !1;
                    if ((n && !r) || (!n && r)) return !1;
                    if (n !== r) return !1;
                    if (!va(t, e)) return !1;
                    if (!_a(t, e)) return !1;
                    return !0;
                  })(t, e)
                )
                  return !0;
                if (
                  (function (t, e) {
                    const n = ya(e),
                      r = ya(t);
                    if (!n || !r) return !1;
                    if (n.type !== r.type || n.value !== r.value) return !1;
                    if (!va(t, e)) return !1;
                    if (!_a(t, e)) return !1;
                    return !0;
                  })(t, e)
                )
                  return !0;
                return !1;
              })(t, n._previousEvent)
            )
              return (
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  hr.warn(
                    "Event dropped due to being a duplicate of previously captured event."
                  ),
                null
              );
          } catch (e) {
            return (n._previousEvent = t);
          }
          return (n._previousEvent = t);
        }
        return t;
      };
      (n.id = this.name), t(n);
    }
  }
  function _a(t, e) {
    let n = ba(t),
      r = ba(e);
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r)) return !1;
    if (r.length !== n.length) return !1;
    for (let t = 0; t < r.length; t++) {
      const e = r[t],
        i = n[t];
      if (
        e.filename !== i.filename ||
        e.lineno !== i.lineno ||
        e.colno !== i.colno ||
        e.function !== i.function
      )
        return !1;
    }
    return !0;
  }
  function va(t, e) {
    let n = t.fingerprint,
      r = e.fingerprint;
    if (!n && !r) return !0;
    if ((n && !r) || (!n && r)) return !1;
    try {
      return !(n.join("") !== r.join(""));
    } catch (t) {
      return !1;
    }
  }
  function ya(t) {
    return t.exception && t.exception.values && t.exception.values[0];
  }
  function ba(t) {
    const e = t.exception;
    if (e)
      try {
        return e.values[0].stacktrace.frames;
      } catch (t) {
        return;
      }
  }
  ga.__initStatic();
  var wa = Object.freeze({
    __proto__: null,
    GlobalHandlers: ea,
    TryCatch: la,
    Breadcrumbs: Io,
    LinkedErrors: pa,
    HttpContext: ma,
    Dedupe: ga,
  });
  const Sa = [
    new co(),
    new so(),
    new la(),
    new Io(),
    new ea(),
    new pa(),
    new ga(),
    new ma(),
  ];
  function Ea(t = {}) {
    void 0 === t.defaultIntegrations && (t.defaultIntegrations = Sa),
      void 0 === t.release &&
        ("string" == typeof __SENTRY_RELEASE__ &&
          (t.release = __SENTRY_RELEASE__),
        po.SENTRY_RELEASE &&
          po.SENTRY_RELEASE.id &&
          (t.release = po.SENTRY_RELEASE.id)),
      void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
      void 0 === t.sendClientReports && (t.sendClientReports = !0);
    const e = {
      ...t,
      stackParser: ((n = t.stackParser || Jo), Array.isArray(n) ? Rr(...n) : n),
      integrations: Qi(t),
      transport: t.transport || (Lr() ? Oo : Uo),
    };
    var n;
    !(function (t, e) {
      !0 === e.debug &&
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
          ? hr.enable()
          : console.warn(
              "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
            ));
      const n = Bi(),
        r = n.getScope();
      r && r.update(e.initialScope);
      const i = new t(e);
      n.bindClient(i);
    })(Ao, e),
      t.autoSessionTracking &&
        (function () {
          if (void 0 === po.document)
            return void (
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              hr.warn(
                "Session tracking in non-browser environment with @sentry/browser is not supported."
              )
            );
          const t = Bi();
          if (!t.captureSession) return;
          xa(t),
            Pr("history", ({ from: t, to: e }) => {
              void 0 !== t && t !== e && xa(Bi());
            });
        })();
  }
  function xa(t) {
    t.startSession({ ignoreDuration: !0 }), t.captureSession();
  }
  const ka = Qn,
    Ta = "sentryReplaySession",
    Ca = "replay_event",
    Ra = "Unable to send Replay",
    Ia = 3e5,
    Na = Ia,
    $a = 36e5;
  var La =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    Ma = /^\s+|\s+$/g,
    Aa = /^[-+]0x[0-9a-f]+$/i,
    Da = /^0b[01]+$/i,
    Oa = /^0o[0-7]+$/i,
    Ua = parseInt,
    Pa = "object" == typeof La && La && La.Object === Object && La,
    Ba = "object" == typeof self && self && self.Object === Object && self,
    Fa = Pa || Ba,
    za = Object.prototype.toString,
    Ga = Math.max,
    ja = Math.min,
    Wa = function () {
      return Fa.Date.now();
    };
  function Ya(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function Ha(t) {
    if ("number" == typeof t) return t;
    if (
      (function (t) {
        return (
          "symbol" == typeof t ||
          ((function (t) {
            return !!t && "object" == typeof t;
          })(t) &&
            "[object Symbol]" == za.call(t))
        );
      })(t)
    )
      return NaN;
    if (Ya(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = Ya(e) ? e + "" : e;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(Ma, "");
    var n = Da.test(t);
    return n || Oa.test(t) ? Ua(t.slice(2), n ? 2 : 8) : Aa.test(t) ? NaN : +t;
  }
  var qa,
    Va = function (t, e, n) {
      var r,
        i,
        o,
        a,
        s,
        l,
        c = 0,
        u = !1,
        d = !1,
        h = !0;
      if ("function" != typeof t) throw new TypeError("Expected a function");
      function p(e) {
        var n = r,
          o = i;
        return (r = i = void 0), (c = e), (a = t.apply(o, n));
      }
      function f(t) {
        return (c = t), (s = setTimeout(g, e)), u ? p(t) : a;
      }
      function m(t) {
        var n = t - l;
        return void 0 === l || n >= e || n < 0 || (d && t - c >= o);
      }
      function g() {
        var t = Wa();
        if (m(t)) return _(t);
        s = setTimeout(
          g,
          (function (t) {
            var n = e - (t - l);
            return d ? ja(n, o - (t - c)) : n;
          })(t)
        );
      }
      function _(t) {
        return (s = void 0), h && r ? p(t) : ((r = i = void 0), a);
      }
      function v() {
        var t = Wa(),
          n = m(t);
        if (((r = arguments), (i = this), (l = t), n)) {
          if (void 0 === s) return f(l);
          if (d) return (s = setTimeout(g, e)), p(l);
        }
        return void 0 === s && (s = setTimeout(g, e)), a;
      }
      return (
        (e = Ha(e) || 0),
        Ya(n) &&
          ((u = !!n.leading),
          (o = (d = "maxWait" in n) ? Ga(Ha(n.maxWait) || 0, e) : o),
          (h = "trailing" in n ? !!n.trailing : h)),
        (v.cancel = function () {
          void 0 !== s && clearTimeout(s), (c = 0), (r = l = i = s = void 0);
        }),
        (v.flush = function () {
          return void 0 === s ? a : _(Wa());
        }),
        v
      );
    },
    Za = function () {
      return (
        (Za =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }),
        Za.apply(this, arguments)
      );
    };
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ function Xa(
    t
  ) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      n = e && t[e],
      r = 0;
    if (n) return n.call(t);
    if (t && "number" == typeof t.length)
      return {
        next: function () {
          return (
            t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
          );
        },
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function Ka(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var r,
      i,
      o = n.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
        a.push(r.value);
    } catch (t) {
      i = { error: t };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  function Qa(t, e, n) {
    if (n || 2 === arguments.length)
      for (var r, i = 0, o = e.length; i < o; i++)
        (!r && i in e) ||
          (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
    return t.concat(r || Array.prototype.slice.call(e));
  }
  function Ja(t) {
    return t.nodeType === t.ELEMENT_NODE;
  }
  function ts(t) {
    var e,
      n = null === (e = t) || void 0 === e ? void 0 : e.host;
    return Boolean(n && n.shadowRoot && n.shadowRoot === t);
  }
  function es(t) {
    var e = t.maskInputOptions,
      n = t.tagName,
      r = t.type,
      i = t.value,
      o = t.maskInputFn,
      a = i || "";
    return (
      (e[n.toLowerCase()] || e[r]) && (a = o ? o(a) : "*".repeat(a.length)), a
    );
  }
  !(function (t) {
    (t[(t.Document = 0)] = "Document"),
      (t[(t.DocumentType = 1)] = "DocumentType"),
      (t[(t.Element = 2)] = "Element"),
      (t[(t.Text = 3)] = "Text"),
      (t[(t.CDATA = 4)] = "CDATA"),
      (t[(t.Comment = 5)] = "Comment");
  })(qa || (qa = {}));
  var ns = "__rrweb_original__";
  var rs,
    is,
    os = 1,
    as = new RegExp("[^a-z0-9-_:]");
  function ss(t) {
    try {
      var e = t.rules || t.cssRules;
      return e ? Array.from(e).map(ls).join("") : null;
    } catch (t) {
      return null;
    }
  }
  function ls(t) {
    var e = t.cssText;
    if (
      (function (t) {
        return "styleSheet" in t;
      })(t)
    )
      try {
        e = ss(t.styleSheet) || e;
      } catch (t) {}
    return e;
  }
  var cs = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
    us = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
    ds = /^(data:)([^,]*),(.*)/i;
  function hs(t, e) {
    return (t || "").replace(cs, function (t, n, r, i, o, a) {
      var s,
        l = r || o || a,
        c = n || i || "";
      if (!l) return t;
      if (!us.test(l)) return "url(" + c + l + c + ")";
      if (ds.test(l)) return "url(" + c + l + c + ")";
      if ("/" === l[0])
        return (
          "url(" +
          c +
          (((s = e).indexOf("//") > -1
            ? s.split("/").slice(0, 3).join("/")
            : s.split("/")[0]
          ).split("?")[0] +
            l) +
          c +
          ")"
        );
      var u = e.split("/"),
        d = l.split("/");
      u.pop();
      for (var h = 0, p = d; h < p.length; h++) {
        var f = p[h];
        "." !== f && (".." === f ? u.pop() : u.push(f));
      }
      return "url(" + c + u.join("/") + c + ")";
    });
  }
  var ps = /^[^ \t\n\r\u000c]+/,
    fs = /^[, \t\n\r\u000c]+/;
  function ms(t, e) {
    if (!e || "" === e.trim()) return e;
    var n = t.createElement("a");
    return (n.href = e), n.href;
  }
  function gs() {
    var t = document.createElement("a");
    return (t.href = ""), t.href;
  }
  function _s(t, e, n, r) {
    return "src" === n ||
      ("href" === n && r) ||
      ("xlink:href" === n && r && "#" !== r[0])
      ? ms(t, r)
      : "background" !== n || !r || ("table" !== e && "td" !== e && "th" !== e)
      ? "srcset" === n && r
        ? (function (t, e) {
            if ("" === e.trim()) return e;
            var n = 0;
            function r(t) {
              var r,
                i = t.exec(e.substring(n));
              return i ? ((r = i[0]), (n += r.length), r) : "";
            }
            for (var i = []; r(fs), !(n >= e.length); ) {
              var o = r(ps);
              if ("," === o.slice(-1))
                (o = ms(t, o.substring(0, o.length - 1))), i.push(o);
              else {
                var a = "";
                o = ms(t, o);
                for (var s = !1; ; ) {
                  var l = e.charAt(n);
                  if ("" === l) {
                    i.push((o + a).trim());
                    break;
                  }
                  if (s) ")" === l && (s = !1);
                  else {
                    if ("," === l) {
                      (n += 1), i.push((o + a).trim());
                      break;
                    }
                    "(" === l && (s = !0);
                  }
                  (a += l), (n += 1);
                }
              }
            }
            return i.join(", ");
          })(t, r)
        : "style" === n && r
        ? hs(r, gs())
        : "object" === e && "data" === n && r
        ? ms(t, r)
        : r
      : ms(t, r);
  }
  function vs(t, e, n) {
    if (!t) return !1;
    if (t.nodeType === t.ELEMENT_NODE) {
      if ("string" == typeof e) {
        if (t.classList.contains(e)) return !0;
      } else
        for (var r = 0; r < t.classList.length; r++) {
          var i = t.classList[r];
          if (e.test(i)) return !0;
        }
      return !(!n || !t.matches(n)) || vs(t.parentNode, e, n);
    }
    return t.nodeType, t.TEXT_NODE, vs(t.parentNode, e, n);
  }
  function ys(t, e) {
    var n,
      r,
      i,
      o,
      a = e.doc,
      s = e.blockClass,
      l = e.blockSelector,
      c = e.maskTextClass,
      u = e.maskTextSelector,
      d = e.inlineStylesheet,
      h = e.maskInputOptions,
      p = void 0 === h ? {} : h,
      f = e.maskTextFn,
      m = e.maskInputFn,
      g = e.dataURLOptions,
      _ = void 0 === g ? {} : g,
      v = e.inlineImages,
      y = e.recordCanvas,
      b = e.keepIframeSrcFn;
    if (a.__sn) {
      var w = a.__sn.id;
      r = 1 === w ? void 0 : w;
    }
    switch (t.nodeType) {
      case t.DOCUMENT_NODE:
        return "CSS1Compat" !== t.compatMode
          ? {
              type: qa.Document,
              childNodes: [],
              compatMode: t.compatMode,
              rootId: r,
            }
          : { type: qa.Document, childNodes: [], rootId: r };
      case t.DOCUMENT_TYPE_NODE:
        return {
          type: qa.DocumentType,
          name: t.name,
          publicId: t.publicId,
          systemId: t.systemId,
          rootId: r,
        };
      case t.ELEMENT_NODE:
        for (
          var S = (function (t, e, n) {
              if ("string" == typeof e) {
                if (t.classList.contains(e)) return !0;
              } else
                for (var r = 0; r < t.classList.length; r++) {
                  var i = t.classList[r];
                  if (e.test(i)) return !0;
                }
              return !!n && t.matches(n);
            })(t, s, l),
            E = (function (t) {
              if (t instanceof HTMLFormElement) return "form";
              var e = t.tagName.toLowerCase().trim();
              return as.test(e) ? "div" : e;
            })(t),
            x = {},
            k = 0,
            T = Array.from(t.attributes);
          k < T.length;
          k++
        ) {
          var C = T[k],
            R = C.name,
            I = C.value;
          x[R] = _s(a, E, R, I);
        }
        if ("link" === E && d) {
          var N = Array.from(a.styleSheets).find(function (e) {
              return e.href === t.href;
            }),
            $ = null;
          N && ($ = ss(N)),
            $ && (delete x.rel, delete x.href, (x._cssText = hs($, N.href)));
        }
        if (
          "style" === E &&
          t.sheet &&
          !(t.innerText || t.textContent || "").trim().length
        )
          ($ = ss(t.sheet)) && (x._cssText = hs($, gs()));
        if ("input" === E || "textarea" === E || "select" === E) {
          I = t.value;
          "radio" !== x.type &&
          "checkbox" !== x.type &&
          "submit" !== x.type &&
          "button" !== x.type &&
          I
            ? (x.value = es({
                type: x.type,
                tagName: E,
                value: I,
                maskInputOptions: p,
                maskInputFn: m,
              }))
            : t.checked && (x.checked = t.checked);
        }
        if (
          ("option" === E &&
            (t.selected && !p.select ? (x.selected = !0) : delete x.selected),
          "canvas" === E && y)
        )
          if ("2d" === t.__context)
            (function (t) {
              var e = t.getContext("2d");
              if (!e) return !0;
              for (var n = 0; n < t.width; n += 50)
                for (var r = 0; r < t.height; r += 50) {
                  var i = e.getImageData,
                    o = ns in i ? i.__rrweb_original__ : i;
                  if (
                    new Uint32Array(
                      o.call(
                        e,
                        n,
                        r,
                        Math.min(50, t.width - n),
                        Math.min(50, t.height - r)
                      ).data.buffer
                    ).some(function (t) {
                      return 0 !== t;
                    })
                  )
                    return !1;
                }
              return !0;
            })(t) || (x.rr_dataURL = t.toDataURL(_.type, _.quality));
          else if (!("__context" in t)) {
            var L = t.toDataURL(_.type, _.quality),
              M = document.createElement("canvas");
            (M.width = t.width),
              (M.height = t.height),
              L !== M.toDataURL(_.type, _.quality) && (x.rr_dataURL = L);
          }
        if ("img" === E && v) {
          rs || ((rs = a.createElement("canvas")), (is = rs.getContext("2d")));
          var A = t,
            D = A.crossOrigin;
          A.crossOrigin = "anonymous";
          var O = function () {
            try {
              (rs.width = A.naturalWidth),
                (rs.height = A.naturalHeight),
                is.drawImage(A, 0, 0),
                (x.rr_dataURL = rs.toDataURL(_.type, _.quality));
            } catch (t) {
              console.warn(
                "Cannot inline img src=" + A.currentSrc + "! Error: " + t
              );
            }
            D ? (x.crossOrigin = D) : delete x.crossOrigin;
          };
          A.complete && 0 !== A.naturalWidth ? O() : (A.onload = O);
        }
        if (
          (("audio" !== E && "video" !== E) ||
            ((x.rr_mediaState = t.paused ? "paused" : "played"),
            (x.rr_mediaCurrentTime = t.currentTime)),
          t.scrollLeft && (x.rr_scrollLeft = t.scrollLeft),
          t.scrollTop && (x.rr_scrollTop = t.scrollTop),
          S)
        ) {
          var U = t.getBoundingClientRect(),
            P = U.width,
            B = U.height;
          x = { class: x.class, rr_width: P + "px", rr_height: B + "px" };
        }
        return (
          "iframe" !== E ||
            b(x.src) ||
            (t.contentDocument || (x.rr_src = x.src), delete x.src),
          {
            type: qa.Element,
            tagName: E,
            attributes: x,
            childNodes: [],
            isSVG:
              ((o = t),
              Boolean("svg" === o.tagName || o.ownerSVGElement) || void 0),
            needBlock: S,
            rootId: r,
          }
        );
      case t.TEXT_NODE:
        var F = t.parentNode && t.parentNode.tagName,
          z = t.textContent,
          G = "STYLE" === F || void 0,
          j = "SCRIPT" === F || void 0;
        if (G && z) {
          try {
            t.nextSibling ||
              t.previousSibling ||
              ((null === (n = t.parentNode.sheet) || void 0 === n
                ? void 0
                : n.cssRules) &&
                (z = (i = t.parentNode.sheet).cssRules
                  ? Array.from(i.cssRules)
                      .map(function (t) {
                        return t.cssText || "";
                      })
                      .join("")
                  : ""));
          } catch (e) {
            console.warn(
              "Cannot get CSS styles from text's parentNode. Error: " + e,
              t
            );
          }
          z = hs(z, gs());
        }
        return (
          j && (z = "SCRIPT_PLACEHOLDER"),
          !G &&
            !j &&
            vs(t, c, u) &&
            z &&
            (z = f ? f(z) : z.replace(/[\S]/g, "*")),
          { type: qa.Text, textContent: z || "", isStyle: G, rootId: r }
        );
      case t.CDATA_SECTION_NODE:
        return { type: qa.CDATA, textContent: "", rootId: r };
      case t.COMMENT_NODE:
        return {
          type: qa.Comment,
          textContent: t.textContent || "",
          rootId: r,
        };
      default:
        return !1;
    }
  }
  function bs(t) {
    return void 0 === t ? "" : t.toLowerCase();
  }
  function ws(t, e) {
    var n,
      r = e.doc,
      i = e.map,
      o = e.blockClass,
      a = e.blockSelector,
      s = e.maskTextClass,
      l = e.maskTextSelector,
      c = e.skipChild,
      u = void 0 !== c && c,
      d = e.inlineStylesheet,
      h = void 0 === d || d,
      p = e.maskInputOptions,
      f = void 0 === p ? {} : p,
      m = e.maskTextFn,
      g = e.maskInputFn,
      _ = e.slimDOMOptions,
      v = e.dataURLOptions,
      y = void 0 === v ? {} : v,
      b = e.inlineImages,
      w = void 0 !== b && b,
      S = e.recordCanvas,
      E = void 0 !== S && S,
      x = e.onSerialize,
      k = e.onIframeLoad,
      T = e.iframeLoadTimeout,
      C = void 0 === T ? 5e3 : T,
      R = e.keepIframeSrcFn,
      I =
        void 0 === R
          ? function () {
              return !1;
            }
          : R,
      N = e.preserveWhiteSpace,
      $ = void 0 === N || N,
      L = ys(t, {
        doc: r,
        blockClass: o,
        blockSelector: a,
        maskTextClass: s,
        maskTextSelector: l,
        inlineStylesheet: h,
        maskInputOptions: f,
        maskTextFn: m,
        maskInputFn: g,
        dataURLOptions: y,
        inlineImages: w,
        recordCanvas: E,
        keepIframeSrcFn: I,
      });
    if (!L) return console.warn(t, "not serialized"), null;
    n =
      "__sn" in t
        ? t.__sn.id
        : !(function (t, e) {
            if (e.comment && t.type === qa.Comment) return !0;
            if (t.type === qa.Element) {
              if (
                e.script &&
                ("script" === t.tagName ||
                  ("link" === t.tagName &&
                    "preload" === t.attributes.rel &&
                    "script" === t.attributes.as) ||
                  ("link" === t.tagName &&
                    "prefetch" === t.attributes.rel &&
                    "string" == typeof t.attributes.href &&
                    t.attributes.href.endsWith(".js")))
              )
                return !0;
              if (
                e.headFavicon &&
                (("link" === t.tagName &&
                  "shortcut icon" === t.attributes.rel) ||
                  ("meta" === t.tagName &&
                    (bs(t.attributes.name).match(
                      /^msapplication-tile(image|color)$/
                    ) ||
                      "application-name" === bs(t.attributes.name) ||
                      "icon" === bs(t.attributes.rel) ||
                      "apple-touch-icon" === bs(t.attributes.rel) ||
                      "shortcut icon" === bs(t.attributes.rel))))
              )
                return !0;
              if ("meta" === t.tagName) {
                if (
                  e.headMetaDescKeywords &&
                  bs(t.attributes.name).match(/^description|keywords$/)
                )
                  return !0;
                if (
                  e.headMetaSocial &&
                  (bs(t.attributes.property).match(/^(og|twitter|fb):/) ||
                    bs(t.attributes.name).match(/^(og|twitter):/) ||
                    "pinterest" === bs(t.attributes.name))
                )
                  return !0;
                if (
                  e.headMetaRobots &&
                  ("robots" === bs(t.attributes.name) ||
                    "googlebot" === bs(t.attributes.name) ||
                    "bingbot" === bs(t.attributes.name))
                )
                  return !0;
                if (
                  e.headMetaHttpEquiv &&
                  void 0 !== t.attributes["http-equiv"]
                )
                  return !0;
                if (
                  e.headMetaAuthorship &&
                  ("author" === bs(t.attributes.name) ||
                    "generator" === bs(t.attributes.name) ||
                    "framework" === bs(t.attributes.name) ||
                    "publisher" === bs(t.attributes.name) ||
                    "progid" === bs(t.attributes.name) ||
                    bs(t.attributes.property).match(/^article:/) ||
                    bs(t.attributes.property).match(/^product:/))
                )
                  return !0;
                if (
                  e.headMetaVerification &&
                  ("google-site-verification" === bs(t.attributes.name) ||
                    "yandex-verification" === bs(t.attributes.name) ||
                    "csrf-token" === bs(t.attributes.name) ||
                    "p:domain_verify" === bs(t.attributes.name) ||
                    "verify-v1" === bs(t.attributes.name) ||
                    "verification" === bs(t.attributes.name) ||
                    "shopify-checkout-api-token" === bs(t.attributes.name))
                )
                  return !0;
              }
            }
            return !1;
          })(L, _) &&
          ($ ||
            L.type !== qa.Text ||
            L.isStyle ||
            L.textContent.replace(/^\s+|\s+$/gm, "").length)
        ? os++
        : -2;
    var M = Object.assign(L, { id: n });
    if (((t.__sn = M), -2 === n)) return null;
    (i[n] = t), x && x(t);
    var A = !u;
    if (
      (M.type === qa.Element &&
        ((A = A && !M.needBlock),
        delete M.needBlock,
        t.shadowRoot && (M.isShadowHost = !0)),
      (M.type === qa.Document || M.type === qa.Element) && A)
    ) {
      _.headWhitespace &&
        L.type === qa.Element &&
        "head" === L.tagName &&
        ($ = !1);
      for (
        var D = {
            doc: r,
            map: i,
            blockClass: o,
            blockSelector: a,
            maskTextClass: s,
            maskTextSelector: l,
            skipChild: u,
            inlineStylesheet: h,
            maskInputOptions: f,
            maskTextFn: m,
            maskInputFn: g,
            slimDOMOptions: _,
            dataURLOptions: y,
            inlineImages: w,
            recordCanvas: E,
            preserveWhiteSpace: $,
            onSerialize: x,
            onIframeLoad: k,
            iframeLoadTimeout: C,
            keepIframeSrcFn: I,
          },
          O = 0,
          U = Array.from(t.childNodes);
        O < U.length;
        O++
      ) {
        (F = ws(U[O], D)) && M.childNodes.push(F);
      }
      if (Ja(t) && t.shadowRoot)
        for (
          var P = 0, B = Array.from(t.shadowRoot.childNodes);
          P < B.length;
          P++
        ) {
          var F;
          (F = ws(B[P], D)) && ((F.isShadow = !0), M.childNodes.push(F));
        }
    }
    return (
      t.parentNode && ts(t.parentNode) && (M.isShadow = !0),
      M.type === qa.Element &&
        "iframe" === M.tagName &&
        (function (t, e, n) {
          var r = t.contentWindow;
          if (r) {
            var i,
              o = !1;
            try {
              i = r.document.readyState;
            } catch (t) {
              return;
            }
            if ("complete" === i) {
              var a = "about:blank";
              r.location.href === a && t.src !== a && "" !== t.src
                ? t.addEventListener("load", e)
                : setTimeout(e, 0);
            } else {
              var s = setTimeout(function () {
                o || (e(), (o = !0));
              }, n);
              t.addEventListener("load", function () {
                clearTimeout(s), (o = !0), e();
              });
            }
          }
        })(
          t,
          function () {
            var e = t.contentDocument;
            if (e && k) {
              var n = ws(e, {
                doc: e,
                map: i,
                blockClass: o,
                blockSelector: a,
                maskTextClass: s,
                maskTextSelector: l,
                skipChild: !1,
                inlineStylesheet: h,
                maskInputOptions: f,
                maskTextFn: m,
                maskInputFn: g,
                slimDOMOptions: _,
                dataURLOptions: y,
                inlineImages: w,
                recordCanvas: E,
                preserveWhiteSpace: $,
                onSerialize: x,
                onIframeLoad: k,
                iframeLoadTimeout: C,
                keepIframeSrcFn: I,
              });
              n && k(t, n);
            }
          },
          C
        ),
      M
    );
  }
  var Ss = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  function Es(t, e) {
    void 0 === e && (e = {});
    var n = 1,
      r = 1;
    function i(t) {
      var e = t.match(/\n/g);
      e && (n += e.length);
      var i = t.lastIndexOf("\n");
      r = -1 === i ? r + t.length : t.length - i;
    }
    function o() {
      var t = { line: n, column: r };
      return function (e) {
        return (e.position = new a(t)), p(), e;
      };
    }
    var a = function (t) {
      (this.start = t),
        (this.end = { line: n, column: r }),
        (this.source = e.source);
    };
    a.prototype.content = t;
    var s = [];
    function l(i) {
      var o = new Error(e.source + ":" + n + ":" + r + ": " + i);
      if (
        ((o.reason = i),
        (o.filename = e.source),
        (o.line = n),
        (o.column = r),
        (o.source = t),
        !e.silent)
      )
        throw o;
      s.push(o);
    }
    function c() {
      return h(/^{\s*/);
    }
    function u() {
      return h(/^}/);
    }
    function d() {
      var e,
        n = [];
      for (p(), f(n); t.length && "}" !== t.charAt(0) && (e = k() || T()); )
        !1 !== e && (n.push(e), f(n));
      return n;
    }
    function h(e) {
      var n = e.exec(t);
      if (n) {
        var r = n[0];
        return i(r), (t = t.slice(r.length)), n;
      }
    }
    function p() {
      h(/^\s*/);
    }
    function f(t) {
      var e;
      for (void 0 === t && (t = []); (e = m()); )
        !1 !== e && t.push(e), (e = m());
      return t;
    }
    function m() {
      var e = o();
      if ("/" === t.charAt(0) && "*" === t.charAt(1)) {
        for (
          var n = 2;
          "" !== t.charAt(n) &&
          ("*" !== t.charAt(n) || "/" !== t.charAt(n + 1));

        )
          ++n;
        if (((n += 2), "" === t.charAt(n - 1)))
          return l("End of comment missing");
        var a = t.slice(2, n - 2);
        return (
          (r += 2),
          i(a),
          (t = t.slice(n)),
          (r += 2),
          e({ type: "comment", comment: a })
        );
      }
    }
    function g() {
      var t = h(/^([^{]+)/);
      if (t)
        return xs(t[0])
          .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "")
          .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (t) {
            return t.replace(/,/g, "‌");
          })
          .split(/\s*(?![^(]*\)),\s*/)
          .map(function (t) {
            return t.replace(/\u200C/g, ",");
          });
    }
    function _() {
      var t = o(),
        e = h(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (e) {
        var n = xs(e[0]);
        if (!h(/^:\s*/)) return l("property missing ':'");
        var r = h(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/),
          i = t({
            type: "declaration",
            property: n.replace(Ss, ""),
            value: r ? xs(r[0]).replace(Ss, "") : "",
          });
        return h(/^[;\s]*/), i;
      }
    }
    function v() {
      var t,
        e = [];
      if (!c()) return l("missing '{'");
      for (f(e); (t = _()); ) !1 !== t && (e.push(t), f(e)), (t = _());
      return u() ? e : l("missing '}'");
    }
    function y() {
      for (
        var t, e = [], n = o();
        (t = h(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/));

      )
        e.push(t[1]), h(/^,\s*/);
      if (e.length)
        return n({ type: "keyframe", values: e, declarations: v() });
    }
    var b,
      w = x("import"),
      S = x("charset"),
      E = x("namespace");
    function x(t) {
      var e = new RegExp("^@" + t + "\\s*([^;]+);");
      return function () {
        var n = o(),
          r = h(e);
        if (r) {
          var i = { type: t };
          return (i[t] = r[1].trim()), n(i);
        }
      };
    }
    function k() {
      if ("@" === t[0])
        return (
          (function () {
            var t = o(),
              e = h(/^@([-\w]+)?keyframes\s*/);
            if (e) {
              var n = e[1];
              if (!(e = h(/^([-\w]+)\s*/))) return l("@keyframes missing name");
              var r,
                i = e[1];
              if (!c()) return l("@keyframes missing '{'");
              for (var a = f(); (r = y()); ) a.push(r), (a = a.concat(f()));
              return u()
                ? t({ type: "keyframes", name: i, vendor: n, keyframes: a })
                : l("@keyframes missing '}'");
            }
          })() ||
          (function () {
            var t = o(),
              e = h(/^@media *([^{]+)/);
            if (e) {
              var n = xs(e[1]);
              if (!c()) return l("@media missing '{'");
              var r = f().concat(d());
              return u()
                ? t({ type: "media", media: n, rules: r })
                : l("@media missing '}'");
            }
          })() ||
          (function () {
            var t = o(),
              e = h(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
            if (e)
              return t({
                type: "custom-media",
                name: xs(e[1]),
                media: xs(e[2]),
              });
          })() ||
          (function () {
            var t = o(),
              e = h(/^@supports *([^{]+)/);
            if (e) {
              var n = xs(e[1]);
              if (!c()) return l("@supports missing '{'");
              var r = f().concat(d());
              return u()
                ? t({ type: "supports", supports: n, rules: r })
                : l("@supports missing '}'");
            }
          })() ||
          w() ||
          S() ||
          E() ||
          (function () {
            var t = o(),
              e = h(/^@([-\w]+)?document *([^{]+)/);
            if (e) {
              var n = xs(e[1]),
                r = xs(e[2]);
              if (!c()) return l("@document missing '{'");
              var i = f().concat(d());
              return u()
                ? t({ type: "document", document: r, vendor: n, rules: i })
                : l("@document missing '}'");
            }
          })() ||
          (function () {
            var t = o();
            if (h(/^@page */)) {
              var e = g() || [];
              if (!c()) return l("@page missing '{'");
              for (var n, r = f(); (n = _()); ) r.push(n), (r = r.concat(f()));
              return u()
                ? t({ type: "page", selectors: e, declarations: r })
                : l("@page missing '}'");
            }
          })() ||
          (function () {
            var t = o();
            if (h(/^@host\s*/)) {
              if (!c()) return l("@host missing '{'");
              var e = f().concat(d());
              return u()
                ? t({ type: "host", rules: e })
                : l("@host missing '}'");
            }
          })() ||
          (function () {
            var t = o();
            if (h(/^@font-face\s*/)) {
              if (!c()) return l("@font-face missing '{'");
              for (var e, n = f(); (e = _()); ) n.push(e), (n = n.concat(f()));
              return u()
                ? t({ type: "font-face", declarations: n })
                : l("@font-face missing '}'");
            }
          })()
        );
    }
    function T() {
      var t = o(),
        e = g();
      return e
        ? (f(), t({ type: "rule", selectors: e, declarations: v() }))
        : l("selector missing");
    }
    return ks(
      ((b = d()),
      {
        type: "stylesheet",
        stylesheet: { source: e.source, rules: b, parsingErrors: s },
      })
    );
  }
  function xs(t) {
    return t ? t.replace(/^\s+|\s+$/g, "") : "";
  }
  function ks(t, e) {
    for (
      var n = t && "string" == typeof t.type,
        r = n ? t : e,
        i = 0,
        o = Object.keys(t);
      i < o.length;
      i++
    ) {
      var a = t[o[i]];
      Array.isArray(a)
        ? a.forEach(function (t) {
            ks(t, r);
          })
        : a && "object" == typeof a && ks(a, r);
    }
    return (
      n &&
        Object.defineProperty(t, "parent", {
          configurable: !0,
          writable: !0,
          enumerable: !1,
          value: e || null,
        }),
      t
    );
  }
  var Ts = {
    script: "noscript",
    altglyph: "altGlyph",
    altglyphdef: "altGlyphDef",
    altglyphitem: "altGlyphItem",
    animatecolor: "animateColor",
    animatemotion: "animateMotion",
    animatetransform: "animateTransform",
    clippath: "clipPath",
    feblend: "feBlend",
    fecolormatrix: "feColorMatrix",
    fecomponenttransfer: "feComponentTransfer",
    fecomposite: "feComposite",
    feconvolvematrix: "feConvolveMatrix",
    fediffuselighting: "feDiffuseLighting",
    fedisplacementmap: "feDisplacementMap",
    fedistantlight: "feDistantLight",
    fedropshadow: "feDropShadow",
    feflood: "feFlood",
    fefunca: "feFuncA",
    fefuncb: "feFuncB",
    fefuncg: "feFuncG",
    fefuncr: "feFuncR",
    fegaussianblur: "feGaussianBlur",
    feimage: "feImage",
    femerge: "feMerge",
    femergenode: "feMergeNode",
    femorphology: "feMorphology",
    feoffset: "feOffset",
    fepointlight: "fePointLight",
    fespecularlighting: "feSpecularLighting",
    fespotlight: "feSpotLight",
    fetile: "feTile",
    feturbulence: "feTurbulence",
    foreignobject: "foreignObject",
    glyphref: "glyphRef",
    lineargradient: "linearGradient",
    radialgradient: "radialGradient",
  };
  var Cs,
    Rs,
    Is,
    Ns,
    $s,
    Ls,
    Ms = /([^\\]):hover/,
    As = new RegExp(Ms.source, "g");
  function Ds(t, e) {
    var n = null == e ? void 0 : e.stylesWithHoverClass.get(t);
    if (n) return n;
    var r = Es(t, { silent: !0 });
    if (!r.stylesheet) return t;
    var i = [];
    if (
      (r.stylesheet.rules.forEach(function (t) {
        "selectors" in t &&
          (t.selectors || []).forEach(function (t) {
            Ms.test(t) && i.push(t);
          });
      }),
      0 === i.length)
    )
      return t;
    var o = new RegExp(
        i
          .filter(function (t, e) {
            return i.indexOf(t) === e;
          })
          .sort(function (t, e) {
            return e.length - t.length;
          })
          .map(function (t) {
            return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          })
          .join("|"),
        "g"
      ),
      a = t.replace(o, function (t) {
        var e = t.replace(As, "$1.\\:hover");
        return t + ", " + e;
      });
    return null == e || e.stylesWithHoverClass.set(t, a), a;
  }
  function Os() {
    return { stylesWithHoverClass: new Map() };
  }
  function Us(t, e) {
    var n = e.doc,
      r = e.hackCss,
      i = e.cache;
    switch (t.type) {
      case qa.Document:
        return n.implementation.createDocument(null, "", null);
      case qa.DocumentType:
        return n.implementation.createDocumentType(
          t.name || "html",
          t.publicId,
          t.systemId
        );
      case qa.Element:
        var o,
          a = (function (t) {
            var e = Ts[t.tagName] ? Ts[t.tagName] : t.tagName;
            return "link" === e && t.attributes._cssText && (e = "style"), e;
          })(t);
        o = t.isSVG
          ? n.createElementNS("http://www.w3.org/2000/svg", a)
          : n.createElement(a);
        var s = function (e) {
          if (!t.attributes.hasOwnProperty(e)) return "continue";
          var s = t.attributes[e];
          if ("option" === a && "selected" === e && !1 === s) return "continue";
          if (
            ((s = "boolean" == typeof s || "number" == typeof s ? "" : s),
            e.startsWith("rr_"))
          ) {
            if ("canvas" === a && "rr_dataURL" === e) {
              var l = document.createElement("img");
              (l.src = s),
                (l.onload = function () {
                  var t = o.getContext("2d");
                  t && t.drawImage(l, 0, 0, l.width, l.height);
                });
            } else if ("img" === a && "rr_dataURL" === e) {
              var c = o;
              c.currentSrc.startsWith("data:") ||
                (c.setAttribute("rrweb-original-src", t.attributes.src),
                (c.src = s));
            }
            if ("rr_width" === e) o.style.width = s;
            else if ("rr_height" === e) o.style.height = s;
            else if ("rr_mediaCurrentTime" === e)
              o.currentTime = t.attributes.rr_mediaCurrentTime;
            else if ("rr_mediaState" === e)
              switch (s) {
                case "played":
                  o.play().catch(function (t) {
                    return console.warn("media playback error", t);
                  });
                  break;
                case "paused":
                  o.pause();
              }
          } else {
            var u = "textarea" === a && "value" === e,
              d = "style" === a && "_cssText" === e;
            if ((d && r && (s = Ds(s, i)), u || d)) {
              for (
                var h = n.createTextNode(s),
                  p = 0,
                  f = Array.from(o.childNodes);
                p < f.length;
                p++
              ) {
                var m = f[p];
                m.nodeType === o.TEXT_NODE && o.removeChild(m);
              }
              return o.appendChild(h), "continue";
            }
            try {
              if (t.isSVG && "xlink:href" === e)
                o.setAttributeNS("http://www.w3.org/1999/xlink", e, s);
              else if (
                "onload" === e ||
                "onclick" === e ||
                "onmouse" === e.substring(0, 7)
              )
                o.setAttribute("_" + e, s);
              else {
                if (
                  "meta" === a &&
                  "Content-Security-Policy" === t.attributes["http-equiv"] &&
                  "content" === e
                )
                  return o.setAttribute("csp-content", s), "continue";
                ("link" === a &&
                  "preload" === t.attributes.rel &&
                  "script" === t.attributes.as) ||
                  ("link" === a &&
                    "prefetch" === t.attributes.rel &&
                    "string" == typeof t.attributes.href &&
                    t.attributes.href.endsWith(".js")) ||
                  ("img" === a && t.attributes.srcset && t.attributes.rr_dataURL
                    ? o.setAttribute(
                        "rrweb-original-srcset",
                        t.attributes.srcset
                      )
                    : o.setAttribute(e, s));
              }
            } catch (t) {}
          }
        };
        for (var l in t.attributes) s(l);
        if (t.isShadowHost)
          if (o.shadowRoot)
            for (; o.shadowRoot.firstChild; )
              o.shadowRoot.removeChild(o.shadowRoot.firstChild);
          else o.attachShadow({ mode: "open" });
        return o;
      case qa.Text:
        return n.createTextNode(
          t.isStyle && r ? Ds(t.textContent, i) : t.textContent
        );
      case qa.CDATA:
        return n.createCDATASection(t.textContent);
      case qa.Comment:
        return n.createComment(t.textContent);
      default:
        return null;
    }
  }
  function Ps(t, e) {
    var n = e.doc,
      r = e.map,
      i = e.skipChild,
      o = void 0 !== i && i,
      a = e.hackCss,
      s = void 0 === a || a,
      l = e.afterAppend,
      c = e.cache,
      u = Us(t, { doc: n, hackCss: s, cache: c });
    if (!u) return null;
    if (
      (t.rootId &&
        console.assert(
          r[t.rootId] === n,
          "Target document should has the same root id."
        ),
      t.type === qa.Document &&
        (n.close(),
        n.open(),
        "BackCompat" === t.compatMode &&
          t.childNodes &&
          t.childNodes[0].type !== qa.DocumentType &&
          (t.childNodes[0].type === qa.Element &&
          "xmlns" in t.childNodes[0].attributes &&
          "http://www.w3.org/1999/xhtml" === t.childNodes[0].attributes.xmlns
            ? n.write(
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">'
              )
            : n.write(
                '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">'
              )),
        (u = n)),
      (u.__sn = t),
      (r[t.id] = u),
      (t.type === qa.Document || t.type === qa.Element) && !o)
    )
      for (var d = 0, h = t.childNodes; d < h.length; d++) {
        var p = h[d],
          f = Ps(p, {
            doc: n,
            map: r,
            skipChild: !1,
            hackCss: s,
            afterAppend: l,
            cache: c,
          });
        f
          ? (p.isShadow && Ja(u) && u.shadowRoot
              ? u.shadowRoot.appendChild(f)
              : u.appendChild(f),
            l && l(f))
          : console.warn("Failed to rebuild", p);
      }
    return u;
  }
  function Bs(t, e) {
    var n = e.doc,
      r = e.onVisit,
      i = e.hackCss,
      o = {},
      a = Ps(t, {
        doc: n,
        map: o,
        skipChild: !1,
        hackCss: void 0 === i || i,
        afterAppend: e.afterAppend,
        cache: e.cache,
      });
    return (
      (function (t, e) {
        for (var n in t) t[n] && ((r = t[n]), e(r));
        var r;
      })(o, function (t) {
        r && r(t),
          (function (t) {
            var e = t.__sn;
            if (e.type === qa.Element) {
              var n = t;
              for (var r in e.attributes)
                if (e.attributes.hasOwnProperty(r) && r.startsWith("rr_")) {
                  var i = e.attributes[r];
                  "rr_scrollLeft" === r && (n.scrollLeft = i),
                    "rr_scrollTop" === r && (n.scrollTop = i);
                }
            }
          })(t);
      }),
      [a, o]
    );
  }
  function Fs(t, e, n) {
    void 0 === n && (n = document);
    var r = { capture: !0, passive: !0 };
    return (
      n.addEventListener(t, e, r),
      function () {
        return n.removeEventListener(t, e, r);
      }
    );
  }
  !(function (t) {
    (t[(t.DomContentLoaded = 0)] = "DomContentLoaded"),
      (t[(t.Load = 1)] = "Load"),
      (t[(t.FullSnapshot = 2)] = "FullSnapshot"),
      (t[(t.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
      (t[(t.Meta = 4)] = "Meta"),
      (t[(t.Custom = 5)] = "Custom"),
      (t[(t.Plugin = 6)] = "Plugin");
  })(Cs || (Cs = {})),
    (function (t) {
      (t[(t.Mutation = 0)] = "Mutation"),
        (t[(t.MouseMove = 1)] = "MouseMove"),
        (t[(t.MouseInteraction = 2)] = "MouseInteraction"),
        (t[(t.Scroll = 3)] = "Scroll"),
        (t[(t.ViewportResize = 4)] = "ViewportResize"),
        (t[(t.Input = 5)] = "Input"),
        (t[(t.TouchMove = 6)] = "TouchMove"),
        (t[(t.MediaInteraction = 7)] = "MediaInteraction"),
        (t[(t.StyleSheetRule = 8)] = "StyleSheetRule"),
        (t[(t.CanvasMutation = 9)] = "CanvasMutation"),
        (t[(t.Font = 10)] = "Font"),
        (t[(t.Log = 11)] = "Log"),
        (t[(t.Drag = 12)] = "Drag"),
        (t[(t.StyleDeclaration = 13)] = "StyleDeclaration");
    })(Rs || (Rs = {})),
    (function (t) {
      (t[(t.MouseUp = 0)] = "MouseUp"),
        (t[(t.MouseDown = 1)] = "MouseDown"),
        (t[(t.Click = 2)] = "Click"),
        (t[(t.ContextMenu = 3)] = "ContextMenu"),
        (t[(t.DblClick = 4)] = "DblClick"),
        (t[(t.Focus = 5)] = "Focus"),
        (t[(t.Blur = 6)] = "Blur"),
        (t[(t.TouchStart = 7)] = "TouchStart"),
        (t[(t.TouchMove_Departed = 8)] = "TouchMove_Departed"),
        (t[(t.TouchEnd = 9)] = "TouchEnd"),
        (t[(t.TouchCancel = 10)] = "TouchCancel");
    })(Is || (Is = {})),
    (function (t) {
      (t[(t["2D"] = 0)] = "2D"),
        (t[(t.WebGL = 1)] = "WebGL"),
        (t[(t.WebGL2 = 2)] = "WebGL2");
    })(Ns || (Ns = {})),
    (function (t) {
      (t[(t.Play = 0)] = "Play"),
        (t[(t.Pause = 1)] = "Pause"),
        (t[(t.Seeked = 2)] = "Seeked"),
        (t[(t.VolumeChange = 3)] = "VolumeChange");
    })($s || ($s = {})),
    (function (t) {
      (t.Start = "start"),
        (t.Pause = "pause"),
        (t.Resume = "resume"),
        (t.Resize = "resize"),
        (t.Finish = "finish"),
        (t.FullsnapshotRebuilded = "fullsnapshot-rebuilded"),
        (t.LoadStylesheetStart = "load-stylesheet-start"),
        (t.LoadStylesheetEnd = "load-stylesheet-end"),
        (t.SkipStart = "skip-start"),
        (t.SkipEnd = "skip-end"),
        (t.MouseInteraction = "mouse-interaction"),
        (t.EventCast = "event-cast"),
        (t.CustomEvent = "custom-event"),
        (t.Flush = "flush"),
        (t.StateChange = "state-change"),
        (t.PlayBack = "play-back");
    })(Ls || (Ls = {}));
  var zs =
      "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    Gs = {
      map: {},
      getId: function () {
        return console.error(zs), -1;
      },
      getNode: function () {
        return console.error(zs), null;
      },
      removeNodeFromMap: function () {
        console.error(zs);
      },
      has: function () {
        return console.error(zs), !1;
      },
      reset: function () {
        console.error(zs);
      },
    };
  function js(t, e, n) {
    void 0 === n && (n = {});
    var r = null,
      i = 0;
    return function (o) {
      var a = Date.now();
      i || !1 !== n.leading || (i = a);
      var s = e - (a - i),
        l = this,
        c = arguments;
      s <= 0 || s > e
        ? (r && (clearTimeout(r), (r = null)), (i = a), t.apply(l, c))
        : r ||
          !1 === n.trailing ||
          (r = setTimeout(function () {
            (i = !1 === n.leading ? 0 : Date.now()), (r = null), t.apply(l, c);
          }, s));
    };
  }
  function Ws(t, e, n, r, i) {
    void 0 === i && (i = window);
    var o = i.Object.getOwnPropertyDescriptor(t, e);
    return (
      i.Object.defineProperty(
        t,
        e,
        r
          ? n
          : {
              set: function (t) {
                var e = this;
                setTimeout(function () {
                  n.set.call(e, t);
                }, 0),
                  o && o.set && o.set.call(this, t);
              },
            }
      ),
      function () {
        return Ws(t, e, o || {}, !0);
      }
    );
  }
  function Ys(t, e, n) {
    try {
      if (!(e in t)) return function () {};
      var r = t[e],
        i = n(r);
      return (
        "function" == typeof i &&
          ((i.prototype = i.prototype || {}),
          Object.defineProperties(i, {
            __rrweb_original__: { enumerable: !1, value: r },
          })),
        (t[e] = i),
        function () {
          t[e] = r;
        }
      );
    } catch (t) {
      return function () {};
    }
  }
  function Hs() {
    return (
      window.innerHeight ||
      (document.documentElement && document.documentElement.clientHeight) ||
      (document.body && document.body.clientHeight)
    );
  }
  function qs() {
    return (
      window.innerWidth ||
      (document.documentElement && document.documentElement.clientWidth) ||
      (document.body && document.body.clientWidth)
    );
  }
  function Vs(t, e) {
    if (!t) return !1;
    if (t.nodeType === t.ELEMENT_NODE) {
      var n = !1;
      if ("string" == typeof e) {
        if (void 0 !== t.closest) return null !== t.closest("." + e);
        n = t.classList.contains(e);
      } else
        t.classList.forEach(function (t) {
          e.test(t) && (n = !0);
        });
      return n || Vs(t.parentNode, e);
    }
    return t.nodeType, t.TEXT_NODE, Vs(t.parentNode, e);
  }
  function Zs(t) {
    return "__sn" in t && -2 === t.__sn.id;
  }
  function Xs(t, e) {
    if (ts(t)) return !1;
    var n = e.getId(t);
    return (
      !e.has(n) ||
      ((!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) &&
        (!t.parentNode || Xs(t.parentNode, e)))
    );
  }
  function Ks(t) {
    return Boolean(t.changedTouches);
  }
  function Qs(t) {
    void 0 === t && (t = window),
      "NodeList" in t &&
        !t.NodeList.prototype.forEach &&
        (t.NodeList.prototype.forEach = Array.prototype.forEach),
      "DOMTokenList" in t &&
        !t.DOMTokenList.prototype.forEach &&
        (t.DOMTokenList.prototype.forEach = Array.prototype.forEach),
      Node.prototype.contains ||
        (Node.prototype.contains = function (t) {
          if (!(0 in arguments)) throw new TypeError("1 argument is required");
          do {
            if (this === t) return !0;
          } while ((t = t && t.parentNode));
          return !1;
        });
  }
  "undefined" != typeof window &&
    window.Proxy &&
    window.Reflect &&
    (Gs = new Proxy(Gs, {
      get: function (t, e, n) {
        return "map" === e && console.error(zs), Reflect.get(t, e, n);
      },
    }));
  var Js = (function () {
    function t() {
      this.reset();
    }
    return (
      (t.prototype.add = function (t) {
        var e = this.indexes.get(t.parentId),
          n = {
            id: t.node.id,
            mutation: t,
            children: [],
            texts: [],
            attributes: [],
          };
        e ? ((n.parent = e), (e.children[n.id] = n)) : (this.tree[n.id] = n),
          this.indexes.set(n.id, n);
      }),
      (t.prototype.remove = function (t, e) {
        var n = this,
          r = this.indexes.get(t.parentId),
          i = this.indexes.get(t.id),
          o = function (t) {
            n.removeIdSet.add(t);
            var r = e.getNode(t);
            null == r ||
              r.childNodes.forEach(function (t) {
                "__sn" in t && o(t.__sn.id);
              });
          },
          a = function (e) {
            n.removeIdSet.add(e.id),
              Object.values(e.children).forEach(function (t) {
                return a(t);
              });
            var r = n.indexes.get(e.id);
            if (r) {
              var i = r.parent;
              i &&
                (delete r.parent,
                delete i.children[r.id],
                n.indexes.delete(t.id));
            }
          };
        i
          ? r
            ? (delete i.parent,
              delete r.children[i.id],
              this.indexes.delete(t.id),
              a(i))
            : (delete this.tree[i.id], this.indexes.delete(i.id), a(i))
          : (this.removeNodeMutations.push(t), o(t.id));
      }),
      (t.prototype.text = function (t) {
        var e = this.indexes.get(t.id);
        e ? e.texts.push(t) : this.textMutations.push(t);
      }),
      (t.prototype.attribute = function (t) {
        var e = this.indexes.get(t.id);
        e ? e.attributes.push(t) : this.attributeMutations.push(t);
      }),
      (t.prototype.scroll = function (t) {
        this.scrollMap.set(t.id, t);
      }),
      (t.prototype.input = function (t) {
        this.inputMap.set(t.id, t);
      }),
      (t.prototype.flush = function () {
        var t,
          e,
          n,
          r,
          i = this,
          o = this,
          a = o.tree,
          s = o.removeNodeMutations,
          l = o.textMutations,
          c = o.attributeMutations,
          u = {
            source: Rs.Mutation,
            removes: s,
            texts: l,
            attributes: c,
            adds: [],
          },
          d = function (t, e) {
            e && i.removeIdSet.add(t.id),
              (u.texts = u.texts.concat(e ? [] : t.texts).filter(function (t) {
                return !i.removeIdSet.has(t.id);
              })),
              (u.attributes = u.attributes
                .concat(e ? [] : t.attributes)
                .filter(function (t) {
                  return !i.removeIdSet.has(t.id);
                })),
              i.removeIdSet.has(t.id) ||
              i.removeIdSet.has(t.mutation.parentId) ||
              e
                ? Object.values(t.children).forEach(function (t) {
                    return d(t, !0);
                  })
                : (u.adds.push(t.mutation),
                  t.children &&
                    Object.values(t.children).forEach(function (t) {
                      return d(t, !1);
                    }));
          };
        Object.values(a).forEach(function (t) {
          return d(t, !1);
        });
        try {
          for (
            var h = Xa(this.scrollMap.keys()), p = h.next();
            !p.done;
            p = h.next()
          ) {
            var f = p.value;
            this.removeIdSet.has(f) && this.scrollMap.delete(f);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            p && !p.done && (e = h.return) && e.call(h);
          } finally {
            if (t) throw t.error;
          }
        }
        try {
          for (
            var m = Xa(this.inputMap.keys()), g = m.next();
            !g.done;
            g = m.next()
          ) {
            f = g.value;
            this.removeIdSet.has(f) && this.inputMap.delete(f);
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            g && !g.done && (r = m.return) && r.call(m);
          } finally {
            if (n) throw n.error;
          }
        }
        var _ = new Map(this.scrollMap),
          v = new Map(this.inputMap);
        return this.reset(), { mutationData: u, scrollMap: _, inputMap: v };
      }),
      (t.prototype.reset = function () {
        (this.tree = []),
          (this.indexes = new Map()),
          (this.removeNodeMutations = []),
          (this.textMutations = []),
          (this.attributeMutations = []),
          (this.removeIdSet = new Set()),
          (this.scrollMap = new Map()),
          (this.inputMap = new Map());
      }),
      (t.prototype.idRemoved = function (t) {
        return this.removeIdSet.has(t);
      }),
      t
    );
  })();
  function tl(t) {
    var e,
      n,
      r = {},
      i = function (t, e) {
        var n = { value: t, parent: e, children: [] };
        return (r[t.node.id] = n), n;
      },
      o = [];
    try {
      for (var a = Xa(t), s = a.next(); !s.done; s = a.next()) {
        var l = s.value,
          c = l.nextId,
          u = l.parentId;
        if (c && c in r) {
          var d = r[c];
          if (d.parent) {
            var h = d.parent.children.indexOf(d);
            d.parent.children.splice(h, 0, i(l, d.parent));
          } else {
            h = o.indexOf(d);
            o.splice(h, 0, i(l, null));
          }
        } else if (u in r) {
          var p = r[u];
          p.children.push(i(l, p));
        } else o.push(i(l, null));
      }
    } catch (t) {
      e = { error: t };
    } finally {
      try {
        s && !s.done && (n = a.return) && n.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  function el(t, e) {
    e(t.value);
    for (var n = t.children.length - 1; n >= 0; n--) el(t.children[n], e);
  }
  function nl(t) {
    return (
      "__sn" in t && t.__sn.type === qa.Element && "iframe" === t.__sn.tagName
    );
  }
  function rl(t, e) {
    var n,
      r,
      i =
        null ===
          (r =
            null === (n = t.ownerDocument) || void 0 === n
              ? void 0
              : n.defaultView) || void 0 === r
          ? void 0
          : r.frameElement;
    if (!i || i === e)
      return { x: 0, y: 0, relativeScale: 1, absoluteScale: 1 };
    var o = i.getBoundingClientRect(),
      a = rl(i, e),
      s = o.height / i.clientHeight;
    return {
      x: o.x * a.relativeScale + a.x,
      y: o.y * a.relativeScale + a.y,
      relativeScale: s,
      absoluteScale: a.absoluteScale * s,
    };
  }
  function il(t) {
    return Boolean(null == t ? void 0 : t.shadowRoot);
  }
  function ol(t) {
    return "__ln" in t;
  }
  var al = (function () {
      function t() {
        (this.length = 0), (this.head = null);
      }
      return (
        (t.prototype.get = function (t) {
          if (t >= this.length)
            throw new Error("Position outside of list range");
          for (var e = this.head, n = 0; n < t; n++)
            e = (null == e ? void 0 : e.next) || null;
          return e;
        }),
        (t.prototype.addNode = function (t) {
          var e = { value: t, previous: null, next: null };
          if (((t.__ln = e), t.previousSibling && ol(t.previousSibling))) {
            var n = t.previousSibling.__ln.next;
            (e.next = n),
              (e.previous = t.previousSibling.__ln),
              (t.previousSibling.__ln.next = e),
              n && (n.previous = e);
          } else if (
            t.nextSibling &&
            ol(t.nextSibling) &&
            t.nextSibling.__ln.previous
          ) {
            n = t.nextSibling.__ln.previous;
            (e.previous = n),
              (e.next = t.nextSibling.__ln),
              (t.nextSibling.__ln.previous = e),
              n && (n.next = e);
          } else
            this.head && (this.head.previous = e),
              (e.next = this.head),
              (this.head = e);
          this.length++;
        }),
        (t.prototype.removeNode = function (t) {
          var e = t.__ln;
          this.head &&
            (e.previous
              ? ((e.previous.next = e.next),
                e.next && (e.next.previous = e.previous))
              : ((this.head = e.next),
                this.head && (this.head.previous = null)),
            t.__ln && delete t.__ln,
            this.length--);
        }),
        t
      );
    })(),
    sl = function (t, e) {
      return "".concat(t, "@").concat(e);
    };
  function ll(t) {
    return "__sn" in t;
  }
  var cl = (function () {
    function t() {
      var t = this;
      (this.frozen = !1),
        (this.locked = !1),
        (this.texts = []),
        (this.attributes = []),
        (this.removes = []),
        (this.mapRemoves = []),
        (this.movedMap = {}),
        (this.addedSet = new Set()),
        (this.movedSet = new Set()),
        (this.droppedSet = new Set()),
        (this.processMutations = function (e) {
          e.forEach(t.processMutation), t.emit();
        }),
        (this.emit = function () {
          var e, n, r, i;
          if (!t.frozen && !t.locked) {
            for (
              var o = [],
                a = new al(),
                s = function (e) {
                  for (var n = e, r = -2; -2 === r; )
                    r = (n = n && n.nextSibling) && t.mirror.getId(n);
                  return r;
                },
                l = function (e) {
                  for (
                    var n,
                      r,
                      i,
                      l,
                      c,
                      u = e.getRootNode
                        ? null === (n = e.getRootNode()) || void 0 === n
                          ? void 0
                          : n.host
                        : null,
                      d = u;
                    null ===
                      (i =
                        null === (r = null == d ? void 0 : d.getRootNode) ||
                        void 0 === r
                          ? void 0
                          : r.call(d)) || void 0 === i
                      ? void 0
                      : i.host;

                  )
                    d =
                      (null ===
                        (c =
                          null === (l = null == d ? void 0 : d.getRootNode) ||
                          void 0 === l
                            ? void 0
                            : l.call(d)) || void 0 === c
                        ? void 0
                        : c.host) || null;
                  var h = !(
                    t.doc.contains(e) ||
                    (null !== d && t.doc.contains(d))
                  );
                  if (e.parentNode && !h) {
                    var p = ts(e.parentNode)
                        ? t.mirror.getId(u)
                        : t.mirror.getId(e.parentNode),
                      f = s(e);
                    if (-1 === p || -1 === f) return a.addNode(e);
                    var m = ws(e, {
                      doc: t.doc,
                      map: t.mirror.map,
                      blockClass: t.blockClass,
                      blockSelector: t.blockSelector,
                      maskTextClass: t.maskTextClass,
                      maskTextSelector: t.maskTextSelector,
                      skipChild: !0,
                      inlineStylesheet: t.inlineStylesheet,
                      maskInputOptions: t.maskInputOptions,
                      maskTextFn: t.maskTextFn,
                      maskInputFn: t.maskInputFn,
                      slimDOMOptions: t.slimDOMOptions,
                      recordCanvas: t.recordCanvas,
                      inlineImages: t.inlineImages,
                      onSerialize: function (n) {
                        nl(n) && t.iframeManager.addIframe(n),
                          il(e) &&
                            t.shadowDomManager.addShadowRoot(
                              e.shadowRoot,
                              document
                            );
                      },
                      onIframeLoad: function (e, n) {
                        t.iframeManager.attachIframe(e, n),
                          t.shadowDomManager.observeAttachShadow(e);
                      },
                    });
                    m && o.push({ parentId: p, nextId: f, node: m });
                  }
                };
              t.mapRemoves.length;

            )
              t.mirror.removeNodeFromMap(t.mapRemoves.shift());
            try {
              for (
                var c = Xa(t.movedSet), u = c.next();
                !u.done;
                u = c.next()
              ) {
                var d = u.value;
                (dl(t.removes, d, t.mirror) && !t.movedSet.has(d.parentNode)) ||
                  l(d);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                u && !u.done && (n = c.return) && n.call(c);
              } finally {
                if (e) throw e.error;
              }
            }
            try {
              for (
                var h = Xa(t.addedSet), p = h.next();
                !p.done;
                p = h.next()
              ) {
                d = p.value;
                hl(t.droppedSet, d) || dl(t.removes, d, t.mirror)
                  ? hl(t.movedSet, d)
                    ? l(d)
                    : t.droppedSet.add(d)
                  : l(d);
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                p && !p.done && (i = h.return) && i.call(h);
              } finally {
                if (r) throw r.error;
              }
            }
            for (var f = null; a.length; ) {
              var m = null;
              if (f) {
                var g = t.mirror.getId(f.value.parentNode),
                  _ = s(f.value);
                -1 !== g && -1 !== _ && (m = f);
              }
              if (!m)
                for (var v = a.length - 1; v >= 0; v--) {
                  var y = a.get(v);
                  if (y) {
                    (g = t.mirror.getId(y.value.parentNode)), (_ = s(y.value));
                    if (-1 !== g && -1 !== _) {
                      m = y;
                      break;
                    }
                  }
                }
              if (!m) {
                for (; a.head; ) a.removeNode(a.head.value);
                break;
              }
              (f = m.previous), a.removeNode(m.value), l(m.value);
            }
            var b = {
              texts: t.texts
                .map(function (e) {
                  return { id: t.mirror.getId(e.node), value: e.value };
                })
                .filter(function (e) {
                  return t.mirror.has(e.id);
                }),
              attributes: t.attributes
                .map(function (e) {
                  return {
                    id: t.mirror.getId(e.node),
                    attributes: e.attributes,
                  };
                })
                .filter(function (e) {
                  return t.mirror.has(e.id);
                }),
              removes: t.removes,
              adds: o,
            };
            (b.texts.length ||
              b.attributes.length ||
              b.removes.length ||
              b.adds.length) &&
              ((t.texts = []),
              (t.attributes = []),
              (t.removes = []),
              (t.addedSet = new Set()),
              (t.movedSet = new Set()),
              (t.droppedSet = new Set()),
              (t.movedMap = {}),
              t.mutationCb(b));
          }
        }),
        (this.processMutation = function (e) {
          var n, r, i, o;
          if (!Zs(e.target))
            switch (e.type) {
              case "characterData":
                var a = e.target.textContent;
                Vs(e.target, t.blockClass) ||
                  a === e.oldValue ||
                  t.texts.push({
                    value:
                      vs(e.target, t.maskTextClass, t.maskTextSelector) && a
                        ? t.maskTextFn
                          ? t.maskTextFn(a)
                          : a.replace(/[\S]/g, "*")
                        : a,
                    node: e.target,
                  });
                break;
              case "attributes":
                var s = e.target;
                a = e.target.getAttribute(e.attributeName);
                if (
                  ("value" === e.attributeName &&
                    (a = es({
                      maskInputOptions: t.maskInputOptions,
                      tagName: e.target.tagName,
                      type: e.target.getAttribute("type"),
                      value: a,
                      maskInputFn: t.maskInputFn,
                    })),
                  Vs(e.target, t.blockClass) || a === e.oldValue)
                )
                  return;
                var l = t.attributes.find(function (t) {
                  return t.node === e.target;
                });
                if (
                  (l ||
                    ((l = { node: e.target, attributes: {} }),
                    t.attributes.push(l)),
                  "style" === e.attributeName)
                ) {
                  var c = t.doc.createElement("span");
                  e.oldValue && c.setAttribute("style", e.oldValue),
                    (void 0 !== l.attributes.style &&
                      null !== l.attributes.style) ||
                      (l.attributes.style = {});
                  var u = l.attributes.style;
                  try {
                    for (
                      var d = Xa(Array.from(s.style)), h = d.next();
                      !h.done;
                      h = d.next()
                    ) {
                      var p = h.value,
                        f = s.style.getPropertyValue(p),
                        m = s.style.getPropertyPriority(p);
                      (f === c.style.getPropertyValue(p) &&
                        m === c.style.getPropertyPriority(p)) ||
                        (u[p] = "" === m ? f : [f, m]);
                    }
                  } catch (t) {
                    n = { error: t };
                  } finally {
                    try {
                      h && !h.done && (r = d.return) && r.call(d);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                  try {
                    for (
                      var g = Xa(Array.from(c.style)), _ = g.next();
                      !_.done;
                      _ = g.next()
                    ) {
                      p = _.value;
                      "" === s.style.getPropertyValue(p) && (u[p] = !1);
                    }
                  } catch (t) {
                    i = { error: t };
                  } finally {
                    try {
                      _ && !_.done && (o = g.return) && o.call(g);
                    } finally {
                      if (i) throw i.error;
                    }
                  }
                } else
                  l.attributes[e.attributeName] = _s(
                    t.doc,
                    e.target.tagName,
                    e.attributeName,
                    a
                  );
                break;
              case "childList":
                e.addedNodes.forEach(function (n) {
                  return t.genAdds(n, e.target);
                }),
                  e.removedNodes.forEach(function (n) {
                    var r = t.mirror.getId(n),
                      i = ts(e.target)
                        ? t.mirror.getId(e.target.host)
                        : t.mirror.getId(e.target);
                    Vs(e.target, t.blockClass) ||
                      Zs(n) ||
                      (t.addedSet.has(n)
                        ? (ul(t.addedSet, n), t.droppedSet.add(n))
                        : (t.addedSet.has(e.target) && -1 === r) ||
                          Xs(e.target, t.mirror) ||
                          (t.movedSet.has(n) && t.movedMap[sl(r, i)]
                            ? ul(t.movedSet, n)
                            : t.removes.push({
                                parentId: i,
                                id: r,
                                isShadow: !!ts(e.target) || void 0,
                              })),
                      t.mapRemoves.push(n));
                  });
            }
        }),
        (this.genAdds = function (e, n) {
          if (!n || !Vs(n, t.blockClass)) {
            if (ll(e)) {
              if (Zs(e)) return;
              t.movedSet.add(e);
              var r = null;
              n && ll(n) && (r = n.__sn.id),
                r && (t.movedMap[sl(e.__sn.id, r)] = !0);
            } else t.addedSet.add(e), t.droppedSet.delete(e);
            Vs(e, t.blockClass) ||
              e.childNodes.forEach(function (e) {
                return t.genAdds(e);
              });
          }
        });
    }
    return (
      (t.prototype.init = function (t) {
        var e = this;
        [
          "mutationCb",
          "blockClass",
          "blockSelector",
          "maskTextClass",
          "maskTextSelector",
          "inlineStylesheet",
          "maskInputOptions",
          "maskTextFn",
          "maskInputFn",
          "recordCanvas",
          "inlineImages",
          "slimDOMOptions",
          "doc",
          "mirror",
          "iframeManager",
          "shadowDomManager",
          "canvasManager",
        ].forEach(function (n) {
          e[n] = t[n];
        });
      }),
      (t.prototype.freeze = function () {
        (this.frozen = !0), this.canvasManager.freeze();
      }),
      (t.prototype.unfreeze = function () {
        (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
      }),
      (t.prototype.isFrozen = function () {
        return this.frozen;
      }),
      (t.prototype.lock = function () {
        (this.locked = !0), this.canvasManager.lock();
      }),
      (t.prototype.unlock = function () {
        (this.locked = !1), this.canvasManager.unlock(), this.emit();
      }),
      (t.prototype.reset = function () {
        this.shadowDomManager.reset(), this.canvasManager.reset();
      }),
      t
    );
  })();
  function ul(t, e) {
    t.delete(e),
      e.childNodes.forEach(function (e) {
        return ul(t, e);
      });
  }
  function dl(t, e, n) {
    var r = e.parentNode;
    if (!r) return !1;
    var i = n.getId(r);
    return (
      !!t.some(function (t) {
        return t.id === i;
      }) || dl(t, r, n)
    );
  }
  function hl(t, e) {
    var n = e.parentNode;
    return !!n && (!!t.has(n) || hl(t, n));
  }
  var pl = [],
    fl = "undefined" != typeof CSSGroupingRule,
    ml = "undefined" != typeof CSSMediaRule,
    gl = "undefined" != typeof CSSSupportsRule,
    _l = "undefined" != typeof CSSConditionRule;
  function vl(t) {
    try {
      if ("composedPath" in t) {
        var e = t.composedPath();
        if (e.length) return e[0];
      } else if ("path" in t && t.path.length) return t.path[0];
      return t.target;
    } catch (e) {
      return t.target;
    }
  }
  function yl(t, e) {
    var n,
      r,
      i = new cl();
    pl.push(i), i.init(t);
    var o = window.MutationObserver || window.__rrMutationObserver,
      a =
        null ===
          (r =
            null ===
              (n =
                null === window || void 0 === window ? void 0 : window.Zone) ||
            void 0 === n
              ? void 0
              : n.__symbol__) || void 0 === r
          ? void 0
          : r.call(n, "MutationObserver");
    a && window[a] && (o = window[a]);
    var s = new o(i.processMutations.bind(i));
    return (
      s.observe(e, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0,
      }),
      s
    );
  }
  function bl(t) {
    var e = t.mouseInteractionCb,
      n = t.doc,
      r = t.mirror,
      i = t.blockClass,
      o = t.sampling;
    if (!1 === o.mouseInteraction) return function () {};
    var a =
        !0 === o.mouseInteraction || void 0 === o.mouseInteraction
          ? {}
          : o.mouseInteraction,
      s = [];
    return (
      Object.keys(Is)
        .filter(function (t) {
          return (
            Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== a[t]
          );
        })
        .forEach(function (t) {
          var o = t.toLowerCase(),
            a = (function (t) {
              return function (n) {
                var o = vl(n);
                if (!Vs(o, i)) {
                  var a = Ks(n) ? n.changedTouches[0] : n;
                  if (a) {
                    var s = r.getId(o),
                      l = a.clientX,
                      c = a.clientY;
                    e({ type: Is[t], id: s, x: l, y: c });
                  }
                }
              };
            })(t);
          s.push(Fs(o, a, n));
        }),
      function () {
        s.forEach(function (t) {
          return t();
        });
      }
    );
  }
  function wl(t) {
    var e = t.scrollCb,
      n = t.doc,
      r = t.mirror,
      i = t.blockClass;
    return Fs(
      "scroll",
      js(function (t) {
        var o = vl(t);
        if (o && !Vs(o, i)) {
          var a = r.getId(o);
          if (o === n) {
            var s = n.scrollingElement || n.documentElement;
            e({ id: a, x: s.scrollLeft, y: s.scrollTop });
          } else e({ id: a, x: o.scrollLeft, y: o.scrollTop });
        }
      }, t.sampling.scroll || 100),
      n
    );
  }
  function Sl(t, e) {
    var n = Za({}, t);
    return e || delete n.userTriggered, n;
  }
  var El = ["INPUT", "TEXTAREA", "SELECT"],
    xl = new WeakMap();
  function kl(t) {
    return (function (t, e) {
      if (
        (fl && t.parentRule instanceof CSSGroupingRule) ||
        (ml && t.parentRule instanceof CSSMediaRule) ||
        (gl && t.parentRule instanceof CSSSupportsRule) ||
        (_l && t.parentRule instanceof CSSConditionRule)
      ) {
        var n = Array.from(t.parentRule.cssRules).indexOf(t);
        e.unshift(n);
      } else {
        n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
        e.unshift(n);
      }
      return e;
    })(t, []);
  }
  function Tl(t, e) {
    var n, r;
    void 0 === e && (e = {});
    var i = t.doc.defaultView;
    if (!i) return function () {};
    !(function (t, e) {
      var n = t.mutationCb,
        r = t.mousemoveCb,
        i = t.mouseInteractionCb,
        o = t.scrollCb,
        a = t.viewportResizeCb,
        s = t.inputCb,
        l = t.mediaInteractionCb,
        c = t.styleSheetRuleCb,
        u = t.styleDeclarationCb,
        d = t.canvasMutationCb,
        h = t.fontCb;
      (t.mutationCb = function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        e.mutation && e.mutation.apply(e, Qa([], Ka(t), !1)),
          n.apply(void 0, Qa([], Ka(t), !1));
      }),
        (t.mousemoveCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.mousemove && e.mousemove.apply(e, Qa([], Ka(t), !1)),
            r.apply(void 0, Qa([], Ka(t), !1));
        }),
        (t.mouseInteractionCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.mouseInteraction && e.mouseInteraction.apply(e, Qa([], Ka(t), !1)),
            i.apply(void 0, Qa([], Ka(t), !1));
        }),
        (t.scrollCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.scroll && e.scroll.apply(e, Qa([], Ka(t), !1)),
            o.apply(void 0, Qa([], Ka(t), !1));
        }),
        (t.viewportResizeCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.viewportResize && e.viewportResize.apply(e, Qa([], Ka(t), !1)),
            a.apply(void 0, Qa([], Ka(t), !1));
        }),
        (t.inputCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.input && e.input.apply(e, Qa([], Ka(t), !1)),
            s.apply(void 0, Qa([], Ka(t), !1));
        }),
        (t.mediaInteractionCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.mediaInteaction && e.mediaInteaction.apply(e, Qa([], Ka(t), !1)),
            l.apply(void 0, Qa([], Ka(t), !1));
        }),
        (t.styleSheetRuleCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.styleSheetRule && e.styleSheetRule.apply(e, Qa([], Ka(t), !1)),
            c.apply(void 0, Qa([], Ka(t), !1));
        }),
        (t.styleDeclarationCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.styleDeclaration && e.styleDeclaration.apply(e, Qa([], Ka(t), !1)),
            u.apply(void 0, Qa([], Ka(t), !1));
        }),
        (t.canvasMutationCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.canvasMutation && e.canvasMutation.apply(e, Qa([], Ka(t), !1)),
            d.apply(void 0, Qa([], Ka(t), !1));
        }),
        (t.fontCb = function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          e.font && e.font.apply(e, Qa([], Ka(t), !1)),
            h.apply(void 0, Qa([], Ka(t), !1));
        });
    })(t, e);
    var o = yl(t, t.doc),
      a = (function (t) {
        var e = t.mousemoveCb,
          n = t.sampling,
          r = t.doc,
          i = t.mirror;
        if (!1 === n.mousemove) return function () {};
        var o,
          a = "number" == typeof n.mousemove ? n.mousemove : 50,
          s =
            "number" == typeof n.mousemoveCallback ? n.mousemoveCallback : 500,
          l = [],
          c = js(function (t) {
            var n = Date.now() - o;
            e(
              l.map(function (t) {
                return (t.timeOffset -= n), t;
              }),
              t
            ),
              (l = []),
              (o = null);
          }, s),
          u = js(
            function (t) {
              var e = vl(t),
                n = Ks(t) ? t.changedTouches[0] : t,
                r = n.clientX,
                a = n.clientY;
              o || (o = Date.now()),
                l.push({
                  x: r,
                  y: a,
                  id: i.getId(e),
                  timeOffset: Date.now() - o,
                }),
                c(
                  "undefined" != typeof DragEvent && t instanceof DragEvent
                    ? Rs.Drag
                    : t instanceof MouseEvent
                    ? Rs.MouseMove
                    : Rs.TouchMove
                );
            },
            a,
            { trailing: !1 }
          ),
          d = [Fs("mousemove", u, r), Fs("touchmove", u, r), Fs("drag", u, r)];
        return function () {
          d.forEach(function (t) {
            return t();
          });
        };
      })(t),
      s = bl(t),
      l = wl(t),
      c = (function (t) {
        var e = t.viewportResizeCb,
          n = -1,
          r = -1;
        return Fs(
          "resize",
          js(function () {
            var t = Hs(),
              i = qs();
            (n === t && r === i) ||
              (e({ width: Number(i), height: Number(t) }), (n = t), (r = i));
          }, 200),
          window
        );
      })(t),
      u = (function (t) {
        var e = t.inputCb,
          n = t.doc,
          r = t.mirror,
          i = t.blockClass,
          o = t.ignoreClass,
          a = t.maskInputOptions,
          s = t.maskInputFn,
          l = t.sampling,
          c = t.userTriggeredOnInput;
        function u(t) {
          var e = vl(t),
            r = t.isTrusted;
          if (
            (e && "OPTION" === e.tagName && (e = e.parentElement),
            e && e.tagName && !(El.indexOf(e.tagName) < 0) && !Vs(e, i))
          ) {
            var l = e.type;
            if (!e.classList.contains(o)) {
              var u = e.value,
                h = !1;
              "radio" === l || "checkbox" === l
                ? (h = e.checked)
                : (a[e.tagName.toLowerCase()] || a[l]) &&
                  (u = es({
                    maskInputOptions: a,
                    tagName: e.tagName,
                    type: l,
                    value: u,
                    maskInputFn: s,
                  })),
                d(e, Sl({ text: u, isChecked: h, userTriggered: r }, c));
              var p = e.name;
              "radio" === l &&
                p &&
                h &&
                n
                  .querySelectorAll(
                    'input[type="radio"][name="'.concat(p, '"]')
                  )
                  .forEach(function (t) {
                    t !== e &&
                      d(
                        t,
                        Sl(
                          { text: t.value, isChecked: !h, userTriggered: !1 },
                          c
                        )
                      );
                  });
            }
          }
        }
        function d(t, n) {
          var i = xl.get(t);
          if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
            xl.set(t, n);
            var o = r.getId(t);
            e(Za(Za({}, n), { id: o }));
          }
        }
        var h = ("last" === l.input ? ["change"] : ["input", "change"]).map(
            function (t) {
              return Fs(t, u, n);
            }
          ),
          p = Object.getOwnPropertyDescriptor(
            HTMLInputElement.prototype,
            "value"
          ),
          f = [
            [HTMLInputElement.prototype, "value"],
            [HTMLInputElement.prototype, "checked"],
            [HTMLSelectElement.prototype, "value"],
            [HTMLTextAreaElement.prototype, "value"],
            [HTMLSelectElement.prototype, "selectedIndex"],
            [HTMLOptionElement.prototype, "selected"],
          ];
        return (
          p &&
            p.set &&
            h.push.apply(
              h,
              Qa(
                [],
                Ka(
                  f.map(function (t) {
                    return Ws(t[0], t[1], {
                      set: function () {
                        u({ target: this });
                      },
                    });
                  })
                ),
                !1
              )
            ),
          function () {
            h.forEach(function (t) {
              return t();
            });
          }
        );
      })(t),
      d = (function (t) {
        var e = t.mediaInteractionCb,
          n = t.blockClass,
          r = t.mirror,
          i = t.sampling,
          o = function (t) {
            return js(function (i) {
              var o = vl(i);
              if (o && !Vs(o, n)) {
                var a = o,
                  s = a.currentTime,
                  l = a.volume,
                  c = a.muted;
                e({
                  type: t,
                  id: r.getId(o),
                  currentTime: s,
                  volume: l,
                  muted: c,
                });
              }
            }, i.media || 500);
          },
          a = [
            Fs("play", o(0)),
            Fs("pause", o(1)),
            Fs("seeked", o(2)),
            Fs("volumechange", o(3)),
          ];
        return function () {
          a.forEach(function (t) {
            return t();
          });
        };
      })(t),
      h = (function (t, e) {
        var n = t.styleSheetRuleCb,
          r = t.mirror,
          i = e.win,
          o = i.CSSStyleSheet.prototype.insertRule;
        i.CSSStyleSheet.prototype.insertRule = function (t, e) {
          var i = r.getId(this.ownerNode);
          return (
            -1 !== i && n({ id: i, adds: [{ rule: t, index: e }] }),
            o.apply(this, arguments)
          );
        };
        var a = i.CSSStyleSheet.prototype.deleteRule;
        i.CSSStyleSheet.prototype.deleteRule = function (t) {
          var e = r.getId(this.ownerNode);
          return (
            -1 !== e && n({ id: e, removes: [{ index: t }] }),
            a.apply(this, arguments)
          );
        };
        var s = {};
        fl
          ? (s.CSSGroupingRule = i.CSSGroupingRule)
          : (ml && (s.CSSMediaRule = i.CSSMediaRule),
            _l && (s.CSSConditionRule = i.CSSConditionRule),
            gl && (s.CSSSupportsRule = i.CSSSupportsRule));
        var l = {};
        return (
          Object.entries(s).forEach(function (t) {
            var e = Ka(t, 2),
              i = e[0],
              o = e[1];
            (l[i] = {
              insertRule: o.prototype.insertRule,
              deleteRule: o.prototype.deleteRule,
            }),
              (o.prototype.insertRule = function (t, e) {
                var o = r.getId(this.parentStyleSheet.ownerNode);
                return (
                  -1 !== o &&
                    n({
                      id: o,
                      adds: [
                        {
                          rule: t,
                          index: Qa(Qa([], Ka(kl(this)), !1), [e || 0], !1),
                        },
                      ],
                    }),
                  l[i].insertRule.apply(this, arguments)
                );
              }),
              (o.prototype.deleteRule = function (t) {
                var e = r.getId(this.parentStyleSheet.ownerNode);
                return (
                  -1 !== e &&
                    n({
                      id: e,
                      removes: [
                        { index: Qa(Qa([], Ka(kl(this)), !1), [t], !1) },
                      ],
                    }),
                  l[i].deleteRule.apply(this, arguments)
                );
              });
          }),
          function () {
            (i.CSSStyleSheet.prototype.insertRule = o),
              (i.CSSStyleSheet.prototype.deleteRule = a),
              Object.entries(s).forEach(function (t) {
                var e = Ka(t, 2),
                  n = e[0],
                  r = e[1];
                (r.prototype.insertRule = l[n].insertRule),
                  (r.prototype.deleteRule = l[n].deleteRule);
              });
          }
        );
      })(t, { win: i }),
      p = (function (t, e) {
        var n = t.styleDeclarationCb,
          r = t.mirror,
          i = e.win,
          o = i.CSSStyleDeclaration.prototype.setProperty;
        i.CSSStyleDeclaration.prototype.setProperty = function (t, e, i) {
          var a,
            s,
            l = r.getId(
              null ===
                (s =
                  null === (a = this.parentRule) || void 0 === a
                    ? void 0
                    : a.parentStyleSheet) || void 0 === s
                ? void 0
                : s.ownerNode
            );
          return (
            -1 !== l &&
              n({
                id: l,
                set: { property: t, value: e, priority: i },
                index: kl(this.parentRule),
              }),
            o.apply(this, arguments)
          );
        };
        var a = i.CSSStyleDeclaration.prototype.removeProperty;
        return (
          (i.CSSStyleDeclaration.prototype.removeProperty = function (t) {
            var e,
              i,
              o = r.getId(
                null ===
                  (i =
                    null === (e = this.parentRule) || void 0 === e
                      ? void 0
                      : e.parentStyleSheet) || void 0 === i
                  ? void 0
                  : i.ownerNode
              );
            return (
              -1 !== o &&
                n({
                  id: o,
                  remove: { property: t },
                  index: kl(this.parentRule),
                }),
              a.apply(this, arguments)
            );
          }),
          function () {
            (i.CSSStyleDeclaration.prototype.setProperty = o),
              (i.CSSStyleDeclaration.prototype.removeProperty = a);
          }
        );
      })(t, { win: i }),
      f = t.collectFonts
        ? (function (t) {
            var e = t.fontCb,
              n = t.doc,
              r = n.defaultView;
            if (!r) return function () {};
            var i = [],
              o = new WeakMap(),
              a = r.FontFace;
            r.FontFace = function (t, e, n) {
              var r = new a(t, e, n);
              return (
                o.set(r, {
                  family: t,
                  buffer: "string" != typeof e,
                  descriptors: n,
                  fontSource:
                    "string" == typeof e
                      ? e
                      : JSON.stringify(Array.from(new Uint8Array(e))),
                }),
                r
              );
            };
            var s = Ys(n.fonts, "add", function (t) {
              return function (n) {
                return (
                  setTimeout(function () {
                    var t = o.get(n);
                    t && (e(t), o.delete(n));
                  }, 0),
                  t.apply(this, [n])
                );
              };
            });
            return (
              i.push(function () {
                r.FontFace = a;
              }),
              i.push(s),
              function () {
                i.forEach(function (t) {
                  return t();
                });
              }
            );
          })(t)
        : function () {},
      m = [];
    try {
      for (var g = Xa(t.plugins), _ = g.next(); !_.done; _ = g.next()) {
        var v = _.value;
        m.push(v.observer(v.callback, i, v.options));
      }
    } catch (t) {
      n = { error: t };
    } finally {
      try {
        _ && !_.done && (r = g.return) && r.call(g);
      } finally {
        if (n) throw n.error;
      }
    }
    return function () {
      pl.forEach(function (t) {
        return t.reset();
      }),
        o.disconnect(),
        a(),
        s(),
        l(),
        c(),
        u(),
        d(),
        h(),
        p(),
        f(),
        m.forEach(function (t) {
          return t();
        });
    };
  }
  var Cl = (function () {
      function t(t) {
        (this.iframes = new WeakMap()), (this.mutationCb = t.mutationCb);
      }
      return (
        (t.prototype.addIframe = function (t) {
          this.iframes.set(t, !0);
        }),
        (t.prototype.addLoadListener = function (t) {
          this.loadListener = t;
        }),
        (t.prototype.attachIframe = function (t, e) {
          var n;
          this.mutationCb({
            adds: [{ parentId: t.__sn.id, nextId: null, node: e }],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: !0,
          }),
            null === (n = this.loadListener) || void 0 === n || n.call(this, t);
        }),
        t
      );
    })(),
    Rl = (function () {
      function t(t) {
        (this.restorePatches = []),
          (this.mutationCb = t.mutationCb),
          (this.scrollCb = t.scrollCb),
          (this.bypassOptions = t.bypassOptions),
          (this.mirror = t.mirror);
        var e = this;
        this.restorePatches.push(
          Ys(HTMLElement.prototype, "attachShadow", function (t) {
            return function () {
              var n = t.apply(this, arguments);
              return (
                this.shadowRoot &&
                  e.addShadowRoot(this.shadowRoot, this.ownerDocument),
                n
              );
            };
          })
        );
      }
      return (
        (t.prototype.addShadowRoot = function (t, e) {
          yl(
            Za(Za({}, this.bypassOptions), {
              doc: e,
              mutationCb: this.mutationCb,
              mirror: this.mirror,
              shadowDomManager: this,
            }),
            t
          ),
            wl(
              Za(Za({}, this.bypassOptions), {
                scrollCb: this.scrollCb,
                doc: t,
                mirror: this.mirror,
              })
            );
        }),
        (t.prototype.observeAttachShadow = function (t) {
          if (t.contentWindow) {
            var e = this;
            this.restorePatches.push(
              Ys(
                t.contentWindow.HTMLElement.prototype,
                "attachShadow",
                function (n) {
                  return function () {
                    var r = n.apply(this, arguments);
                    return (
                      this.shadowRoot &&
                        e.addShadowRoot(this.shadowRoot, t.contentDocument),
                      r
                    );
                  };
                }
              )
            );
          }
        }),
        (t.prototype.reset = function () {
          this.restorePatches.forEach(function (t) {
            return t();
          });
        }),
        t
      );
    })();
  for (
    var Il = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      Nl = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
      $l = 0;
    $l < Il.length;
    $l++
  )
    Nl[Il.charCodeAt($l)] = $l;
  var Ll = new Map();
  var Ml = function (t, e, n) {
    if (t && (Ol(t, e) || "object" == typeof t)) {
      var r = (function (t, e) {
          var n = Ll.get(t);
          return (
            n || ((n = new Map()), Ll.set(t, n)),
            n.has(e) || n.set(e, []),
            n.get(e)
          );
        })(n, t.constructor.name),
        i = r.indexOf(t);
      return -1 === i && ((i = r.length), r.push(t)), i;
    }
  };
  function Al(t, e, n) {
    if (t instanceof Array)
      return t.map(function (t) {
        return Al(t, e, n);
      });
    if (null === t) return t;
    if (
      t instanceof Float32Array ||
      t instanceof Float64Array ||
      t instanceof Int32Array ||
      t instanceof Uint32Array ||
      t instanceof Uint8Array ||
      t instanceof Uint16Array ||
      t instanceof Int16Array ||
      t instanceof Int8Array ||
      t instanceof Uint8ClampedArray
    )
      return { rr_type: t.constructor.name, args: [Object.values(t)] };
    if (t instanceof ArrayBuffer) {
      var r = t.constructor.name,
        i = (function (t) {
          var e,
            n = new Uint8Array(t),
            r = n.length,
            i = "";
          for (e = 0; e < r; e += 3)
            (i += Il[n[e] >> 2]),
              (i += Il[((3 & n[e]) << 4) | (n[e + 1] >> 4)]),
              (i += Il[((15 & n[e + 1]) << 2) | (n[e + 2] >> 6)]),
              (i += Il[63 & n[e + 2]]);
          return (
            r % 3 == 2
              ? (i = i.substring(0, i.length - 1) + "=")
              : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
            i
          );
        })(t);
      return { rr_type: r, base64: i };
    }
    return t instanceof DataView
      ? {
          rr_type: t.constructor.name,
          args: [Al(t.buffer, e, n), t.byteOffset, t.byteLength],
        }
      : t instanceof HTMLImageElement
      ? { rr_type: t.constructor.name, src: t.src }
      : t instanceof ImageData
      ? {
          rr_type: t.constructor.name,
          args: [Al(t.data, e, n), t.width, t.height],
        }
      : Ol(t, e) || "object" == typeof t
      ? { rr_type: t.constructor.name, index: Ml(t, e, n) }
      : t;
  }
  var Dl = function (t, e, n) {
      return Qa([], Ka(t), !1).map(function (t) {
        return Al(t, e, n);
      });
    },
    Ol = function (t, e) {
      var n = [
        "WebGLActiveInfo",
        "WebGLBuffer",
        "WebGLFramebuffer",
        "WebGLProgram",
        "WebGLRenderbuffer",
        "WebGLShader",
        "WebGLShaderPrecisionFormat",
        "WebGLTexture",
        "WebGLUniformLocation",
        "WebGLVertexArrayObject",
        "WebGLVertexArrayObjectOES",
      ].filter(function (t) {
        return "function" == typeof e[t];
      });
      return Boolean(
        n.find(function (n) {
          return t instanceof e[n];
        })
      );
    };
  function Ul(t, e, n, r, i, o) {
    var a,
      s,
      l = [],
      c = Object.getOwnPropertyNames(t),
      u = function (a) {
        try {
          if ("function" != typeof t[a]) return "continue";
          var s = Ys(t, a, function (s) {
            return function () {
              for (var l = [], c = 0; c < arguments.length; c++)
                l[c] = arguments[c];
              var u = s.apply(this, l);
              if ((Ml(u, o, t), !Vs(this.canvas, r))) {
                i.getId(this.canvas);
                var d = Dl(Qa([], Ka(l), !1), o, t),
                  h = { type: e, property: a, args: d };
                n(this.canvas, h);
              }
              return u;
            };
          });
          l.push(s);
        } catch (r) {
          var c = Ws(t, a, {
            set: function (t) {
              n(this.canvas, { type: e, property: a, args: [t], setter: !0 });
            },
          });
          l.push(c);
        }
      };
    try {
      for (var d = Xa(c), h = d.next(); !h.done; h = d.next()) {
        u(h.value);
      }
    } catch (t) {
      a = { error: t };
    } finally {
      try {
        h && !h.done && (s = d.return) && s.call(d);
      } finally {
        if (a) throw a.error;
      }
    }
    return l;
  }
  var Pl,
    Bl,
    Fl = (function () {
      function t(t) {
        (this.pendingCanvasMutations = new Map()),
          (this.rafStamps = { latestId: 0, invokeId: null }),
          (this.frozen = !1),
          (this.locked = !1),
          (this.processMutation = function (t, e) {
            (!(
              this.rafStamps.invokeId &&
              this.rafStamps.latestId !== this.rafStamps.invokeId
            ) &&
              this.rafStamps.invokeId) ||
              (this.rafStamps.invokeId = this.rafStamps.latestId),
              this.pendingCanvasMutations.has(t) ||
                this.pendingCanvasMutations.set(t, []),
              this.pendingCanvasMutations.get(t).push(e);
          }),
          (this.mutationCb = t.mutationCb),
          (this.mirror = t.mirror),
          !0 === t.recordCanvas &&
            this.initCanvasMutationObserver(t.win, t.blockClass);
      }
      return (
        (t.prototype.reset = function () {
          this.pendingCanvasMutations.clear(),
            this.resetObservers && this.resetObservers();
        }),
        (t.prototype.freeze = function () {
          this.frozen = !0;
        }),
        (t.prototype.unfreeze = function () {
          this.frozen = !1;
        }),
        (t.prototype.lock = function () {
          this.locked = !0;
        }),
        (t.prototype.unlock = function () {
          this.locked = !1;
        }),
        (t.prototype.initCanvasMutationObserver = function (t, e) {
          this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
          var n = (function (t, e) {
              var n = [];
              try {
                var r = Ys(
                  t.HTMLCanvasElement.prototype,
                  "getContext",
                  function (t) {
                    return function (n) {
                      for (var r = [], i = 1; i < arguments.length; i++)
                        r[i - 1] = arguments[i];
                      return (
                        Vs(this, e) ||
                          "__context" in this ||
                          (this.__context = n),
                        t.apply(this, Qa([n], Ka(r), !1))
                      );
                    };
                  }
                );
                n.push(r);
              } catch (t) {
                console.error(
                  "failed to patch HTMLCanvasElement.prototype.getContext"
                );
              }
              return function () {
                n.forEach(function (t) {
                  return t();
                });
              };
            })(t, e),
            r = (function (t, e, n, r) {
              var i,
                o,
                a = [],
                s = Object.getOwnPropertyNames(
                  e.CanvasRenderingContext2D.prototype
                ),
                l = function (r) {
                  try {
                    if (
                      "function" !=
                      typeof e.CanvasRenderingContext2D.prototype[r]
                    )
                      return "continue";
                    var i = Ys(
                      e.CanvasRenderingContext2D.prototype,
                      r,
                      function (e) {
                        return function () {
                          for (
                            var i = this, o = [], a = 0;
                            a < arguments.length;
                            a++
                          )
                            o[a] = arguments[a];
                          return (
                            Vs(this.canvas, n) ||
                              setTimeout(function () {
                                var e = Qa([], Ka(o), !1);
                                if (
                                  "drawImage" === r &&
                                  e[0] &&
                                  e[0] instanceof HTMLCanvasElement
                                ) {
                                  var n = e[0],
                                    a = n.getContext("2d"),
                                    s =
                                      null == a
                                        ? void 0
                                        : a.getImageData(
                                            0,
                                            0,
                                            n.width,
                                            n.height
                                          ),
                                    l = null == s ? void 0 : s.data;
                                  e[0] = JSON.stringify(l);
                                }
                                t(i.canvas, {
                                  type: Ns["2D"],
                                  property: r,
                                  args: e,
                                });
                              }, 0),
                            e.apply(this, o)
                          );
                        };
                      }
                    );
                    a.push(i);
                  } catch (n) {
                    var o = Ws(e.CanvasRenderingContext2D.prototype, r, {
                      set: function (e) {
                        t(this.canvas, {
                          type: Ns["2D"],
                          property: r,
                          args: [e],
                          setter: !0,
                        });
                      },
                    });
                    a.push(o);
                  }
                };
              try {
                for (var c = Xa(s), u = c.next(); !u.done; u = c.next())
                  l(u.value);
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  u && !u.done && (o = c.return) && o.call(c);
                } finally {
                  if (i) throw i.error;
                }
              }
              return function () {
                a.forEach(function (t) {
                  return t();
                });
              };
            })(this.processMutation.bind(this), t, e, this.mirror),
            i = (function (t, e, n, r) {
              var i = [];
              return (
                i.push.apply(
                  i,
                  Qa(
                    [],
                    Ka(
                      Ul(
                        e.WebGLRenderingContext.prototype,
                        Ns.WebGL,
                        t,
                        n,
                        r,
                        e
                      )
                    ),
                    !1
                  )
                ),
                void 0 !== e.WebGL2RenderingContext &&
                  i.push.apply(
                    i,
                    Qa(
                      [],
                      Ka(
                        Ul(
                          e.WebGL2RenderingContext.prototype,
                          Ns.WebGL2,
                          t,
                          n,
                          r,
                          e
                        )
                      ),
                      !1
                    )
                  ),
                function () {
                  i.forEach(function (t) {
                    return t();
                  });
                }
              );
            })(this.processMutation.bind(this), t, e, this.mirror);
          this.resetObservers = function () {
            n(), r(), i();
          };
        }),
        (t.prototype.startPendingCanvasMutationFlusher = function () {
          var t = this;
          requestAnimationFrame(function () {
            return t.flushPendingCanvasMutations();
          });
        }),
        (t.prototype.startRAFTimestamping = function () {
          var t = this,
            e = function (n) {
              (t.rafStamps.latestId = n), requestAnimationFrame(e);
            };
          requestAnimationFrame(e);
        }),
        (t.prototype.flushPendingCanvasMutations = function () {
          var t = this;
          this.pendingCanvasMutations.forEach(function (e, n) {
            var r = t.mirror.getId(n);
            t.flushPendingCanvasMutationFor(n, r);
          }),
            requestAnimationFrame(function () {
              return t.flushPendingCanvasMutations();
            });
        }),
        (t.prototype.flushPendingCanvasMutationFor = function (t, e) {
          if (!this.frozen && !this.locked) {
            var n = this.pendingCanvasMutations.get(t);
            if (n && -1 !== e) {
              var r = n.map(function (t) {
                  t.type;
                  var e = (function (t, e) {
                    var n = {};
                    for (var r in t)
                      Object.prototype.hasOwnProperty.call(t, r) &&
                        e.indexOf(r) < 0 &&
                        (n[r] = t[r]);
                    if (
                      null != t &&
                      "function" == typeof Object.getOwnPropertySymbols
                    ) {
                      var i = 0;
                      for (
                        r = Object.getOwnPropertySymbols(t);
                        i < r.length;
                        i++
                      )
                        e.indexOf(r[i]) < 0 &&
                          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                          (n[r[i]] = t[r[i]]);
                    }
                    return n;
                  })(t, ["type"]);
                  return e;
                }),
                i = n[0].type;
              this.mutationCb({ id: e, type: i, commands: r }),
                this.pendingCanvasMutations.delete(t);
            }
          }
        }),
        t
      );
    })();
  function zl(t) {
    return Za(Za({}, t), { timestamp: Date.now() });
  }
  var Gl = {
    map: {},
    getId: function (t) {
      return t && t.__sn ? t.__sn.id : -1;
    },
    getNode: function (t) {
      return this.map[t] || null;
    },
    removeNodeFromMap: function (t) {
      var e = this,
        n = t.__sn && t.__sn.id;
      delete this.map[n],
        t.childNodes &&
          t.childNodes.forEach(function (t) {
            return e.removeNodeFromMap(t);
          });
    },
    has: function (t) {
      return this.map.hasOwnProperty(t);
    },
    reset: function () {
      this.map = {};
    },
  };
  function jl(t) {
    void 0 === t && (t = {});
    var e = t.emit,
      n = t.checkoutEveryNms,
      r = t.checkoutEveryNth,
      i = t.blockClass,
      o = void 0 === i ? "rr-block" : i,
      a = t.blockSelector,
      s = void 0 === a ? null : a,
      l = t.ignoreClass,
      c = void 0 === l ? "rr-ignore" : l,
      u = t.maskTextClass,
      d = void 0 === u ? "rr-mask" : u,
      h = t.maskTextSelector,
      p = void 0 === h ? null : h,
      f = t.inlineStylesheet,
      m = void 0 === f || f,
      g = t.maskAllInputs,
      _ = t.maskInputOptions,
      v = t.slimDOMOptions,
      y = t.maskInputFn,
      b = t.maskTextFn,
      w = t.hooks,
      S = t.packFn,
      E = t.sampling,
      x = void 0 === E ? {} : E,
      k = t.mousemoveWait,
      T = t.recordCanvas,
      C = void 0 !== T && T,
      R = t.userTriggeredOnInput,
      I = void 0 !== R && R,
      N = t.collectFonts,
      $ = void 0 !== N && N,
      L = t.inlineImages,
      M = void 0 !== L && L,
      A = t.plugins,
      D = t.keepIframeSrcFn,
      O =
        void 0 === D
          ? function () {
              return !1;
            }
          : D;
    if (!e) throw new Error("emit function is required");
    void 0 !== k && void 0 === x.mousemove && (x.mousemove = k);
    var U,
      P =
        !0 === g
          ? {
              color: !0,
              date: !0,
              "datetime-local": !0,
              email: !0,
              month: !0,
              number: !0,
              range: !0,
              search: !0,
              tel: !0,
              text: !0,
              time: !0,
              url: !0,
              week: !0,
              textarea: !0,
              select: !0,
              password: !0,
            }
          : void 0 !== _
          ? _
          : { password: !0 },
      B =
        !0 === v || "all" === v
          ? {
              script: !0,
              comment: !0,
              headFavicon: !0,
              headWhitespace: !0,
              headMetaSocial: !0,
              headMetaRobots: !0,
              headMetaHttpEquiv: !0,
              headMetaVerification: !0,
              headMetaAuthorship: "all" === v,
              headMetaDescKeywords: "all" === v,
            }
          : v || {};
    Qs();
    var F = 0;
    Pl = function (t, i) {
      var o;
      if (
        (!(null === (o = pl[0]) || void 0 === o ? void 0 : o.isFrozen()) ||
          t.type === Cs.FullSnapshot ||
          (t.type === Cs.IncrementalSnapshot &&
            t.data.source === Rs.Mutation) ||
          pl.forEach(function (t) {
            return t.unfreeze();
          }),
        e(
          (function (t) {
            var e, n;
            try {
              for (var r = Xa(A || []), i = r.next(); !i.done; i = r.next()) {
                var o = i.value;
                o.eventProcessor && (t = o.eventProcessor(t));
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (n = r.return) && n.call(r);
              } finally {
                if (e) throw e.error;
              }
            }
            return S && (t = S(t)), t;
          })(t),
          i
        ),
        t.type === Cs.FullSnapshot)
      )
        (U = t), (F = 0);
      else if (t.type === Cs.IncrementalSnapshot) {
        if (t.data.source === Rs.Mutation && t.data.isAttachIframe) return;
        F++;
        var a = r && F >= r,
          s = n && t.timestamp - U.timestamp > n;
        (a || s) && Bl(!0);
      }
    };
    var z = function (t) {
        Pl(
          zl({
            type: Cs.IncrementalSnapshot,
            data: Za({ source: Rs.Mutation }, t),
          })
        );
      },
      G = function (t) {
        return Pl(
          zl({
            type: Cs.IncrementalSnapshot,
            data: Za({ source: Rs.Scroll }, t),
          })
        );
      },
      j = function (t) {
        return Pl(
          zl({
            type: Cs.IncrementalSnapshot,
            data: Za({ source: Rs.CanvasMutation }, t),
          })
        );
      },
      W = new Cl({ mutationCb: z }),
      Y = new Fl({
        recordCanvas: C,
        mutationCb: j,
        win: window,
        blockClass: o,
        mirror: Gl,
      }),
      H = new Rl({
        mutationCb: z,
        scrollCb: G,
        bypassOptions: {
          blockClass: o,
          blockSelector: s,
          maskTextClass: d,
          maskTextSelector: p,
          inlineStylesheet: m,
          maskInputOptions: P,
          maskTextFn: b,
          maskInputFn: y,
          recordCanvas: C,
          inlineImages: M,
          sampling: x,
          slimDOMOptions: B,
          iframeManager: W,
          canvasManager: Y,
        },
        mirror: Gl,
      });
    Bl = function (t) {
      var e, n, r, i;
      void 0 === t && (t = !1),
        Pl(
          zl({
            type: Cs.Meta,
            data: { href: window.location.href, width: qs(), height: Hs() },
          }),
          t
        ),
        pl.forEach(function (t) {
          return t.lock();
        });
      var a = Ka(
          (function (t, e) {
            var n = e || {},
              r = n.blockClass,
              i = void 0 === r ? "rr-block" : r,
              o = n.blockSelector,
              a = void 0 === o ? null : o,
              s = n.maskTextClass,
              l = void 0 === s ? "rr-mask" : s,
              c = n.maskTextSelector,
              u = void 0 === c ? null : c,
              d = n.inlineStylesheet,
              h = void 0 === d || d,
              p = n.inlineImages,
              f = void 0 !== p && p,
              m = n.recordCanvas,
              g = void 0 !== m && m,
              _ = n.maskAllInputs,
              v = void 0 !== _ && _,
              y = n.maskTextFn,
              b = n.maskInputFn,
              w = n.slimDOM,
              S = void 0 !== w && w,
              E = n.dataURLOptions,
              x = n.preserveWhiteSpace,
              k = n.onSerialize,
              T = n.onIframeLoad,
              C = n.iframeLoadTimeout,
              R = n.keepIframeSrcFn,
              I = {};
            return [
              ws(t, {
                doc: t,
                map: I,
                blockClass: i,
                blockSelector: a,
                maskTextClass: l,
                maskTextSelector: u,
                skipChild: !1,
                inlineStylesheet: h,
                maskInputOptions:
                  !0 === v
                    ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        password: !0,
                      }
                    : !1 === v
                    ? { password: !0 }
                    : v,
                maskTextFn: y,
                maskInputFn: b,
                slimDOMOptions:
                  !0 === S || "all" === S
                    ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaDescKeywords: "all" === S,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaAuthorship: !0,
                        headMetaVerification: !0,
                      }
                    : !1 === S
                    ? {}
                    : S,
                dataURLOptions: E,
                inlineImages: f,
                recordCanvas: g,
                preserveWhiteSpace: x,
                onSerialize: k,
                onIframeLoad: T,
                iframeLoadTimeout: C,
                keepIframeSrcFn:
                  void 0 === R
                    ? function () {
                        return !1;
                      }
                    : R,
              }),
              I,
            ];
          })(document, {
            blockClass: o,
            blockSelector: s,
            maskTextClass: d,
            maskTextSelector: p,
            inlineStylesheet: m,
            maskAllInputs: P,
            maskTextFn: b,
            slimDOM: B,
            recordCanvas: C,
            inlineImages: M,
            onSerialize: function (t) {
              nl(t) && W.addIframe(t),
                il(t) && H.addShadowRoot(t.shadowRoot, document);
            },
            onIframeLoad: function (t, e) {
              W.attachIframe(t, e), H.observeAttachShadow(t);
            },
            keepIframeSrcFn: O,
          }),
          2
        ),
        l = a[0],
        c = a[1];
      if (!l) return console.warn("Failed to snapshot the document");
      (Gl.map = c),
        Pl(
          zl({
            type: Cs.FullSnapshot,
            data: {
              node: l,
              initialOffset: {
                left:
                  void 0 !== window.pageXOffset
                    ? window.pageXOffset
                    : (null === document || void 0 === document
                        ? void 0
                        : document.documentElement.scrollLeft) ||
                      (null ===
                        (n =
                          null ===
                            (e =
                              null === document || void 0 === document
                                ? void 0
                                : document.body) || void 0 === e
                            ? void 0
                            : e.parentElement) || void 0 === n
                        ? void 0
                        : n.scrollLeft) ||
                      (null === document || void 0 === document
                        ? void 0
                        : document.body.scrollLeft) ||
                      0,
                top:
                  void 0 !== window.pageYOffset
                    ? window.pageYOffset
                    : (null === document || void 0 === document
                        ? void 0
                        : document.documentElement.scrollTop) ||
                      (null ===
                        (i =
                          null ===
                            (r =
                              null === document || void 0 === document
                                ? void 0
                                : document.body) || void 0 === r
                            ? void 0
                            : r.parentElement) || void 0 === i
                        ? void 0
                        : i.scrollTop) ||
                      (null === document || void 0 === document
                        ? void 0
                        : document.body.scrollTop) ||
                      0,
              },
            },
          })
        ),
        pl.forEach(function (t) {
          return t.unlock();
        });
    };
    try {
      var q = [];
      q.push(
        Fs("DOMContentLoaded", function () {
          Pl(zl({ type: Cs.DomContentLoaded, data: {} }));
        })
      );
      var V = function (t) {
        var e;
        return Tl(
          {
            mutationCb: z,
            mousemoveCb: function (t, e) {
              return Pl(
                zl({
                  type: Cs.IncrementalSnapshot,
                  data: { source: e, positions: t },
                })
              );
            },
            mouseInteractionCb: function (t) {
              return Pl(
                zl({
                  type: Cs.IncrementalSnapshot,
                  data: Za({ source: Rs.MouseInteraction }, t),
                })
              );
            },
            scrollCb: G,
            viewportResizeCb: function (t) {
              return Pl(
                zl({
                  type: Cs.IncrementalSnapshot,
                  data: Za({ source: Rs.ViewportResize }, t),
                })
              );
            },
            inputCb: function (t) {
              return Pl(
                zl({
                  type: Cs.IncrementalSnapshot,
                  data: Za({ source: Rs.Input }, t),
                })
              );
            },
            mediaInteractionCb: function (t) {
              return Pl(
                zl({
                  type: Cs.IncrementalSnapshot,
                  data: Za({ source: Rs.MediaInteraction }, t),
                })
              );
            },
            styleSheetRuleCb: function (t) {
              return Pl(
                zl({
                  type: Cs.IncrementalSnapshot,
                  data: Za({ source: Rs.StyleSheetRule }, t),
                })
              );
            },
            styleDeclarationCb: function (t) {
              return Pl(
                zl({
                  type: Cs.IncrementalSnapshot,
                  data: Za({ source: Rs.StyleDeclaration }, t),
                })
              );
            },
            canvasMutationCb: j,
            fontCb: function (t) {
              return Pl(
                zl({
                  type: Cs.IncrementalSnapshot,
                  data: Za({ source: Rs.Font }, t),
                })
              );
            },
            blockClass: o,
            ignoreClass: c,
            maskTextClass: d,
            maskTextSelector: p,
            maskInputOptions: P,
            inlineStylesheet: m,
            sampling: x,
            recordCanvas: C,
            inlineImages: M,
            userTriggeredOnInput: I,
            collectFonts: $,
            doc: t,
            maskInputFn: y,
            maskTextFn: b,
            blockSelector: s,
            slimDOMOptions: B,
            mirror: Gl,
            iframeManager: W,
            shadowDomManager: H,
            canvasManager: Y,
            plugins:
              (null ===
                (e =
                  null == A
                    ? void 0
                    : A.filter(function (t) {
                        return t.observer;
                      })) || void 0 === e
                ? void 0
                : e.map(function (t) {
                    return {
                      observer: t.observer,
                      options: t.options,
                      callback: function (e) {
                        return Pl(
                          zl({
                            type: Cs.Plugin,
                            data: { plugin: t.name, payload: e },
                          })
                        );
                      },
                    };
                  })) || [],
          },
          w
        );
      };
      W.addLoadListener(function (t) {
        try {
          q.push(V(t.contentDocument));
        } catch (t) {
          console.warn("error in rrweb iframe observer", t);
        }
      });
      var Z = function () {
        Bl(), q.push(V(document));
      };
      return (
        "interactive" === document.readyState ||
        "complete" === document.readyState
          ? Z()
          : q.push(
              Fs(
                "load",
                function () {
                  Pl(zl({ type: Cs.Load, data: {} })), Z();
                },
                window
              )
            ),
        function () {
          q.forEach(function (t) {
            return t();
          });
        }
      );
    } catch (t) {
      console.warn(t);
    }
  }
  function Wl(t) {
    return (
      (t = t || Object.create(null)),
      {
        on: function (e, n) {
          (t[e] || (t[e] = [])).push(n);
        },
        off: function (e, n) {
          t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1);
        },
        emit: function (e, n) {
          (t[e] || []).slice().map(function (t) {
            t(n);
          }),
            (t["*"] || []).slice().map(function (t) {
              t(e, n);
            });
        },
      }
    );
  }
  (jl.addCustomEvent = function (t, e) {
    if (!Pl) throw new Error("please add custom event after start recording");
    Pl(zl({ type: Cs.Custom, data: { tag: t, payload: e } }));
  }),
    (jl.freezePage = function () {
      pl.forEach(function (t) {
        return t.freeze();
      });
    }),
    (jl.takeFullSnapshot = function (t) {
      if (!Bl)
        throw new Error("please take full snapshot after start recording");
      Bl(t);
    }),
    (jl.mirror = Gl);
  var Yl = Object.freeze({ __proto__: null, default: Wl });
  function Hl(t, e) {
    if (
      (void 0 === t && (t = window),
      void 0 === e && (e = document),
      !("scrollBehavior" in e.documentElement.style) ||
        !0 === t.__forceSmoothScrollPolyfill__)
    ) {
      var n,
        r = t.HTMLElement || t.Element,
        i = {
          scroll: t.scroll || t.scrollTo,
          scrollBy: t.scrollBy,
          elementScroll: r.prototype.scroll || s,
          scrollIntoView: r.prototype.scrollIntoView,
        },
        o =
          t.performance && t.performance.now
            ? t.performance.now.bind(t.performance)
            : Date.now,
        a =
          ((n = t.navigator.userAgent),
          new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
      (t.scroll = t.scrollTo =
        function () {
          void 0 !== arguments[0] &&
            (!0 !== l(arguments[0])
              ? f.call(
                  t,
                  e.body,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left
                    : t.scrollX || t.pageXOffset,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top
                    : t.scrollY || t.pageYOffset
                )
              : i.scroll.call(
                  t,
                  void 0 !== arguments[0].left
                    ? arguments[0].left
                    : "object" != typeof arguments[0]
                    ? arguments[0]
                    : t.scrollX || t.pageXOffset,
                  void 0 !== arguments[0].top
                    ? arguments[0].top
                    : void 0 !== arguments[1]
                    ? arguments[1]
                    : t.scrollY || t.pageYOffset
                ));
        }),
        (t.scrollBy = function () {
          void 0 !== arguments[0] &&
            (l(arguments[0])
              ? i.scrollBy.call(
                  t,
                  void 0 !== arguments[0].left
                    ? arguments[0].left
                    : "object" != typeof arguments[0]
                    ? arguments[0]
                    : 0,
                  void 0 !== arguments[0].top
                    ? arguments[0].top
                    : void 0 !== arguments[1]
                    ? arguments[1]
                    : 0
                )
              : f.call(
                  t,
                  e.body,
                  ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                  ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                ));
        }),
        (r.prototype.scroll = r.prototype.scrollTo =
          function () {
            if (void 0 !== arguments[0])
              if (!0 !== l(arguments[0])) {
                var t = arguments[0].left,
                  e = arguments[0].top;
                f.call(
                  this,
                  this,
                  void 0 === t ? this.scrollLeft : ~~t,
                  void 0 === e ? this.scrollTop : ~~e
                );
              } else {
                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                  throw new SyntaxError("Value could not be converted");
                i.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left
                    : "object" != typeof arguments[0]
                    ? ~~arguments[0]
                    : this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top
                    : void 0 !== arguments[1]
                    ? ~~arguments[1]
                    : this.scrollTop
                );
              }
          }),
        (r.prototype.scrollBy = function () {
          void 0 !== arguments[0] &&
            (!0 !== l(arguments[0])
              ? this.scroll({
                  left: ~~arguments[0].left + this.scrollLeft,
                  top: ~~arguments[0].top + this.scrollTop,
                  behavior: arguments[0].behavior,
                })
              : i.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
                ));
        }),
        (r.prototype.scrollIntoView = function () {
          if (!0 !== l(arguments[0])) {
            var n = h(this),
              r = n.getBoundingClientRect(),
              o = this.getBoundingClientRect();
            n !== e.body
              ? (f.call(
                  this,
                  n,
                  n.scrollLeft + o.left - r.left,
                  n.scrollTop + o.top - r.top
                ),
                "fixed" !== t.getComputedStyle(n).position &&
                  t.scrollBy({ left: r.left, top: r.top, behavior: "smooth" }))
              : t.scrollBy({ left: o.left, top: o.top, behavior: "smooth" });
          } else
            i.scrollIntoView.call(
              this,
              void 0 === arguments[0] || arguments[0]
            );
        });
    }
    function s(t, e) {
      (this.scrollLeft = t), (this.scrollTop = e);
    }
    function l(t) {
      if (
        null === t ||
        "object" != typeof t ||
        void 0 === t.behavior ||
        "auto" === t.behavior ||
        "instant" === t.behavior
      )
        return !0;
      if ("object" == typeof t && "smooth" === t.behavior) return !1;
      throw new TypeError(
        "behavior member of ScrollOptions " +
          t.behavior +
          " is not a valid value for enumeration ScrollBehavior."
      );
    }
    function c(t, e) {
      return "Y" === e
        ? t.clientHeight + a < t.scrollHeight
        : "X" === e
        ? t.clientWidth + a < t.scrollWidth
        : void 0;
    }
    function u(e, n) {
      var r = t.getComputedStyle(e, null)["overflow" + n];
      return "auto" === r || "scroll" === r;
    }
    function d(t) {
      var e = c(t, "Y") && u(t, "Y"),
        n = c(t, "X") && u(t, "X");
      return e || n;
    }
    function h(t) {
      for (; t !== e.body && !1 === d(t); ) t = t.parentNode || t.host;
      return t;
    }
    function p(e) {
      var n,
        r,
        i,
        a,
        s = (o() - e.startTime) / 468;
      (a = s = s > 1 ? 1 : s),
        (n = 0.5 * (1 - Math.cos(Math.PI * a))),
        (r = e.startX + (e.x - e.startX) * n),
        (i = e.startY + (e.y - e.startY) * n),
        e.method.call(e.scrollable, r, i),
        (r === e.x && i === e.y) || t.requestAnimationFrame(p.bind(t, e));
    }
    function f(n, r, a) {
      var l,
        c,
        u,
        d,
        h = o();
      n === e.body
        ? ((l = t),
          (c = t.scrollX || t.pageXOffset),
          (u = t.scrollY || t.pageYOffset),
          (d = i.scroll))
        : ((l = n), (c = n.scrollLeft), (u = n.scrollTop), (d = s)),
        p({
          scrollable: l,
          method: d,
          startTime: h,
          startX: c,
          startY: u,
          x: r,
          y: a,
        });
    }
  }
  var ql,
    Vl = (function () {
      function t(t, e) {
        void 0 === t && (t = []),
          (this.timeOffset = 0),
          (this.raf = null),
          (this.actions = t),
          (this.speed = e);
      }
      return (
        (t.prototype.addAction = function (t) {
          var e = this.findActionIndex(t);
          this.actions.splice(e, 0, t);
        }),
        (t.prototype.addActions = function (t) {
          this.actions = this.actions.concat(t);
        }),
        (t.prototype.start = function () {
          this.timeOffset = 0;
          var t = performance.now(),
            e = this.actions,
            n = this;
          this.raf = requestAnimationFrame(function r() {
            var i = performance.now();
            for (n.timeOffset += (i - t) * n.speed, t = i; e.length; ) {
              var o = e[0];
              if (!(n.timeOffset >= o.delay)) break;
              e.shift(), o.doAction();
            }
            (e.length > 0 || n.liveMode) && (n.raf = requestAnimationFrame(r));
          });
        }),
        (t.prototype.clear = function () {
          this.raf && (cancelAnimationFrame(this.raf), (this.raf = null)),
            (this.actions.length = 0);
        }),
        (t.prototype.setSpeed = function (t) {
          this.speed = t;
        }),
        (t.prototype.toggleLiveMode = function (t) {
          this.liveMode = t;
        }),
        (t.prototype.isActive = function () {
          return null !== this.raf;
        }),
        (t.prototype.findActionIndex = function (t) {
          for (var e = 0, n = this.actions.length - 1; e <= n; ) {
            var r = Math.floor((e + n) / 2);
            if (this.actions[r].delay < t.delay) e = r + 1;
            else {
              if (!(this.actions[r].delay > t.delay)) return r + 1;
              n = r - 1;
            }
          }
          return e;
        }),
        t
      );
    })();
  function Zl(t, e) {
    if (t.type === Cs.IncrementalSnapshot && t.data.source === Rs.MouseMove) {
      var n = t.data.positions[0].timeOffset,
        r = t.timestamp + n;
      return (t.delay = r - e), r - e;
    }
    return (t.delay = t.timestamp - e), t.delay;
  }
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ function Xl(
    t,
    e
  ) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var r,
      i,
      o = n.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
        a.push(r.value);
    } catch (t) {
      i = { error: t };
    } finally {
      try {
        r && !r.done && (n = o.return) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  !(function (t) {
    (t[(t.NotStarted = 0)] = "NotStarted"),
      (t[(t.Running = 1)] = "Running"),
      (t[(t.Stopped = 2)] = "Stopped");
  })(ql || (ql = {}));
  var Kl = { type: "xstate.init" };
  function Ql(t) {
    return void 0 === t ? [] : [].concat(t);
  }
  function Jl(t) {
    return { type: "xstate.assign", assignment: t };
  }
  function tc(t, e) {
    return "string" == typeof (t = "string" == typeof t && e && e[t] ? e[t] : t)
      ? { type: t }
      : "function" == typeof t
      ? { type: t.name, exec: t }
      : t;
  }
  function ec(t) {
    return function (e) {
      return t === e;
    };
  }
  function nc(t) {
    return "string" == typeof t ? { type: t } : t;
  }
  function rc(t, e) {
    return { value: t, context: e, actions: [], changed: !1, matches: ec(t) };
  }
  function ic(t, e, n) {
    var r = e,
      i = !1;
    return [
      t.filter(function (t) {
        if ("xstate.assign" === t.type) {
          i = !0;
          var e = Object.assign({}, r);
          return (
            "function" == typeof t.assignment
              ? (e = t.assignment(r, n))
              : Object.keys(t.assignment).forEach(function (i) {
                  e[i] =
                    "function" == typeof t.assignment[i]
                      ? t.assignment[i](r, n)
                      : t.assignment[i];
                }),
            (r = e),
            !1
          );
        }
        return !0;
      }),
      r,
      i,
    ];
  }
  function oc(t, e) {
    void 0 === e && (e = {});
    var n = Xl(
        ic(
          Ql(t.states[t.initial].entry).map(function (t) {
            return tc(t, e.actions);
          }),
          t.context,
          Kl
        ),
        2
      ),
      r = n[0],
      i = n[1],
      o = {
        config: t,
        _options: e,
        initialState: {
          value: t.initial,
          actions: r,
          context: i,
          matches: ec(t.initial),
        },
        transition: function (e, n) {
          var r,
            i,
            a = "string" == typeof e ? { value: e, context: t.context } : e,
            s = a.value,
            l = a.context,
            c = nc(n),
            u = t.states[s];
          if (u.on) {
            var d = Ql(u.on[c.type]);
            try {
              for (
                var h = (function (t) {
                    var e = "function" == typeof Symbol && Symbol.iterator,
                      n = e && t[e],
                      r = 0;
                    if (n) return n.call(t);
                    if (t && "number" == typeof t.length)
                      return {
                        next: function () {
                          return (
                            t && r >= t.length && (t = void 0),
                            { value: t && t[r++], done: !t }
                          );
                        },
                      };
                    throw new TypeError(
                      e
                        ? "Object is not iterable."
                        : "Symbol.iterator is not defined."
                    );
                  })(d),
                  p = h.next();
                !p.done;
                p = h.next()
              ) {
                var f = p.value;
                if (void 0 === f) return rc(s, l);
                var m = "string" == typeof f ? { target: f } : f,
                  g = m.target,
                  _ = m.actions,
                  v = void 0 === _ ? [] : _,
                  y = m.cond,
                  b =
                    void 0 === y
                      ? function () {
                          return !0;
                        }
                      : y,
                  w = void 0 === g,
                  S = null != g ? g : s,
                  E = t.states[S];
                if (b(l, c)) {
                  var x = Xl(
                      ic(
                        (w
                          ? Ql(v)
                          : [].concat(u.exit, v, E.entry).filter(function (t) {
                              return t;
                            })
                        ).map(function (t) {
                          return tc(t, o._options.actions);
                        }),
                        l,
                        c
                      ),
                      3
                    ),
                    k = x[0],
                    T = x[1],
                    C = x[2],
                    R = null != g ? g : s;
                  return {
                    value: R,
                    context: T,
                    actions: k,
                    changed: g !== s || k.length > 0 || C,
                    matches: ec(R),
                  };
                }
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                p && !p.done && (i = h.return) && i.call(h);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          return rc(s, l);
        },
      };
    return o;
  }
  var ac = function (t, e) {
    return t.actions.forEach(function (n) {
      var r = n.exec;
      return r && r(t.context, e);
    });
  };
  function sc(t) {
    var e = t.initialState,
      n = ql.NotStarted,
      r = new Set(),
      i = {
        _machine: t,
        send: function (i) {
          n === ql.Running &&
            ((e = t.transition(e, i)),
            ac(e, nc(i)),
            r.forEach(function (t) {
              return t(e);
            }));
        },
        subscribe: function (t) {
          return (
            r.add(t),
            t(e),
            {
              unsubscribe: function () {
                return r.delete(t);
              },
            }
          );
        },
        start: function (r) {
          if (r) {
            var o =
              "object" == typeof r
                ? r
                : { context: t.config.context, value: r };
            e = {
              value: o.value,
              actions: [],
              context: o.context,
              matches: ec(o.value),
            };
          }
          return (n = ql.Running), ac(e, Kl), i;
        },
        stop: function () {
          return (n = ql.Stopped), r.clear(), i;
        },
        get state() {
          return e;
        },
        get status() {
          return n;
        },
      };
    return i;
  }
  function lc(t, e) {
    var n = e.getCastFn,
      r = e.applyEventsSynchronously,
      i = e.emitter,
      o = oc(
        {
          id: "player",
          context: t,
          initial: "paused",
          states: {
            playing: {
              on: {
                PAUSE: { target: "paused", actions: ["pause"] },
                CAST_EVENT: { target: "playing", actions: "castEvent" },
                END: {
                  target: "paused",
                  actions: ["resetLastPlayedEvent", "pause"],
                },
                ADD_EVENT: { target: "playing", actions: ["addEvent"] },
              },
            },
            paused: {
              on: {
                PLAY: {
                  target: "playing",
                  actions: ["recordTimeOffset", "play"],
                },
                CAST_EVENT: { target: "paused", actions: "castEvent" },
                TO_LIVE: { target: "live", actions: ["startLive"] },
                ADD_EVENT: { target: "paused", actions: ["addEvent"] },
              },
            },
            live: {
              on: {
                ADD_EVENT: { target: "live", actions: ["addEvent"] },
                CAST_EVENT: { target: "live", actions: ["castEvent"] },
              },
            },
          },
        },
        {
          actions: {
            castEvent: Jl({
              lastPlayedEvent: function (t, e) {
                return "CAST_EVENT" === e.type
                  ? e.payload.event
                  : t.lastPlayedEvent;
              },
            }),
            recordTimeOffset: Jl(function (t, e) {
              var n = t.timeOffset;
              return (
                "payload" in e &&
                  "timeOffset" in e.payload &&
                  (n = e.payload.timeOffset),
                Za(Za({}, t), {
                  timeOffset: n,
                  baselineTime: t.events[0].timestamp + n,
                })
              );
            }),
            play: function (t) {
              var e,
                o,
                a,
                s,
                l,
                c = t.timer,
                u = t.events,
                d = t.baselineTime,
                h = t.lastPlayedEvent;
              c.clear();
              try {
                for (var p = Xa(u), f = p.next(); !f.done; f = p.next()) {
                  Zl(f.value, d);
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  f && !f.done && (o = p.return) && o.call(p);
                } finally {
                  if (e) throw e.error;
                }
              }
              var m = (function (t, e) {
                  for (var n = t.length - 1; n >= 0; n--) {
                    var r = t[n];
                    if (r.type === Cs.Meta && r.timestamp <= e)
                      return t.slice(n);
                  }
                  return t;
                })(u, d),
                g = null == h ? void 0 : h.timestamp;
              (null == h ? void 0 : h.type) === Cs.IncrementalSnapshot &&
                h.data.source === Rs.MouseMove &&
                (g =
                  h.timestamp +
                  (null === (l = h.data.positions[0]) || void 0 === l
                    ? void 0
                    : l.timeOffset)),
                d < (g || 0) && i.emit(Ls.PlayBack);
              var _ = new Array(),
                v = new Array(),
                y = function (t) {
                  if (g && g < d && (t.timestamp <= g || t === h))
                    return "continue";
                  if (t.timestamp < d) _.push(t);
                  else {
                    var e = n(t, !1);
                    v.push({
                      doAction: function () {
                        e();
                      },
                      delay: t.delay,
                    });
                  }
                };
              try {
                for (var b = Xa(m), w = b.next(); !w.done; w = b.next()) {
                  y(w.value);
                }
              } catch (t) {
                a = { error: t };
              } finally {
                try {
                  w && !w.done && (s = b.return) && s.call(b);
                } finally {
                  if (a) throw a.error;
                }
              }
              r(_), i.emit(Ls.Flush), c.addActions(v), c.start();
            },
            pause: function (t) {
              t.timer.clear();
            },
            resetLastPlayedEvent: Jl(function (t) {
              return Za(Za({}, t), { lastPlayedEvent: null });
            }),
            startLive: Jl({
              baselineTime: function (t, e) {
                return (
                  t.timer.toggleLiveMode(!0),
                  t.timer.start(),
                  "TO_LIVE" === e.type && e.payload.baselineTime
                    ? e.payload.baselineTime
                    : Date.now()
                );
              },
            }),
            addEvent: Jl(function (t, e) {
              var r = t.baselineTime,
                i = t.timer,
                o = t.events;
              if ("ADD_EVENT" === e.type) {
                var a = e.payload.event;
                Zl(a, r);
                var s = o.length - 1;
                if (!o[s] || o[s].timestamp <= a.timestamp) o.push(a);
                else {
                  for (var l = -1, c = 0; c <= s; ) {
                    var u = Math.floor((c + s) / 2);
                    o[u].timestamp <= a.timestamp ? (c = u + 1) : (s = u - 1);
                  }
                  -1 === l && (l = c), o.splice(l, 0, a);
                }
                var d = a.timestamp < r,
                  h = n(a, d);
                d
                  ? h()
                  : i.isActive() &&
                    i.addAction({
                      doAction: function () {
                        h();
                      },
                      delay: a.delay,
                    });
              }
              return Za(Za({}, t), { events: o });
            }),
          },
        }
      );
    return sc(o);
  }
  var cc;
  function uc(t, e) {
    var n = t[e[0]];
    return 1 === e.length ? n : uc(n.cssRules[e[1]].cssRules, e.slice(2));
  }
  function dc(t) {
    var e = Qa([], Ka(t), !1),
      n = e.pop();
    return { positions: e, index: n };
  }
  function hc(t, e) {
    var n = e.sheet;
    n &&
      t.forEach(function (t) {
        if (t.type === cc.Insert)
          try {
            if (Array.isArray(t.index)) {
              var r = dc(t.index),
                i = r.positions,
                o = r.index;
              uc(n.cssRules, i).insertRule(t.cssText, o);
            } else n.insertRule(t.cssText, t.index);
          } catch (t) {}
        else if (t.type === cc.Remove)
          try {
            if (Array.isArray(t.index)) {
              var a = dc(t.index);
              (i = a.positions), (o = a.index);
              uc(n.cssRules, i).deleteRule(o || 0);
            } else n.deleteRule(t.index);
          } catch (t) {}
        else if (t.type === cc.Snapshot)
          !(function (t, e) {
            var n;
            try {
              var r = Array.from(
                  (null === (n = e.sheet) || void 0 === n
                    ? void 0
                    : n.cssRules) || []
                ).map(function (t) {
                  return t.cssText;
                }),
                i = Object.entries(r).reverse(),
                o = r.length;
              i.forEach(function (n) {
                var r,
                  i = Ka(n, 2),
                  a = i[0],
                  s = i[1],
                  l = t.indexOf(s);
                if (-1 === l || l > o)
                  try {
                    null === (r = e.sheet) ||
                      void 0 === r ||
                      r.deleteRule(Number(a));
                  } catch (t) {}
                o = l;
              }),
                t.forEach(function (t, n) {
                  var r, i, o;
                  try {
                    (null ===
                      (i =
                        null === (r = e.sheet) || void 0 === r
                          ? void 0
                          : r.cssRules[n]) || void 0 === i
                      ? void 0
                      : i.cssText) !== t &&
                      (null === (o = e.sheet) ||
                        void 0 === o ||
                        o.insertRule(t, n));
                  } catch (t) {}
                });
            } catch (t) {}
          })(t.cssTexts, e);
        else if (t.type === cc.SetProperty) {
          uc(n.cssRules, t.index).style.setProperty(
            t.property,
            t.value,
            t.priority
          );
        } else if (t.type === cc.RemoveProperty) {
          uc(n.cssRules, t.index).style.removeProperty(t.property);
        }
      });
  }
  !(function (t) {
    (t[(t.Insert = 0)] = "Insert"),
      (t[(t.Remove = 1)] = "Remove"),
      (t[(t.Snapshot = 2)] = "Snapshot"),
      (t[(t.SetProperty = 3)] = "SetProperty"),
      (t[(t.RemoveProperty = 4)] = "RemoveProperty");
  })(cc || (cc = {}));
  var pc = new Map();
  function fc(t, e) {
    var n = pc.get(t);
    return (
      n || ((n = new Map()), pc.set(t, n)), n.has(e) || n.set(e, []), n.get(e)
    );
  }
  var mc = [
    "WebGLActiveInfo",
    "WebGLBuffer",
    "WebGLFramebuffer",
    "WebGLProgram",
    "WebGLRenderbuffer",
    "WebGLShader",
    "WebGLShaderPrecisionFormat",
    "WebGLTexture",
    "WebGLUniformLocation",
    "WebGLVertexArrayObject",
  ];
  function gc(t, e) {
    return function (n) {
      if (n && "object" == typeof n && "rr_type" in n) {
        if ("index" in n) {
          var r = n.rr_type,
            i = n.index;
          return fc(e, r)[i];
        }
        if ("args" in n) {
          var o = n.rr_type,
            a = n.args,
            s = window[o];
          return new (s.bind.apply(s, Qa([void 0], Ka(a.map(gc(t, e))), !1)))();
        }
        if ("base64" in n)
          return (function (t) {
            var e,
              n,
              r,
              i,
              o,
              a = 0.75 * t.length,
              s = t.length,
              l = 0;
            "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
            var c = new ArrayBuffer(a),
              u = new Uint8Array(c);
            for (e = 0; e < s; e += 4)
              (n = Nl[t.charCodeAt(e)]),
                (r = Nl[t.charCodeAt(e + 1)]),
                (i = Nl[t.charCodeAt(e + 2)]),
                (o = Nl[t.charCodeAt(e + 3)]),
                (u[l++] = (n << 2) | (r >> 4)),
                (u[l++] = ((15 & r) << 4) | (i >> 2)),
                (u[l++] = ((3 & i) << 6) | (63 & o));
            return c;
          })(n.base64);
        if ("src" in n) {
          var l = t.get(n.src);
          if (l) return l;
          var c = new Image();
          return (c.src = n.src), t.set(n.src, c), c;
        }
      } else if (Array.isArray(n)) return n.map(gc(t, e));
      return n;
    };
  }
  function _c(t) {
    var e = t.mutation,
      n = t.target,
      r = t.type,
      i = t.imageMap,
      o = t.errorHandler;
    try {
      var a = (function (t, e) {
        try {
          return e === Ns.WebGL
            ? t.getContext("webgl") || t.getContext("experimental-webgl")
            : t.getContext("webgl2");
        } catch (t) {
          return null;
        }
      })(n, r);
      if (!a) return;
      if (e.setter) return void (a[e.property] = e.args[0]);
      var s = a[e.property],
        l = e.args.map(gc(i, a));
      !(function (t, e) {
        if (null == e ? void 0 : e.constructor) {
          var n = e.constructor.name;
          if (mc.includes(n)) {
            var r = fc(t, n);
            r.includes(e) || r.push(e);
          }
        }
      })(a, s.apply(a, l));
    } catch (t) {
      o(e, t);
    }
  }
  var vc = Wl || Yl,
    yc = "[replayer]",
    bc = { duration: 500, lineCap: "round", lineWidth: 3, strokeStyle: "red" };
  function wc(t) {
    return (
      t.type == Cs.IncrementalSnapshot &&
      (t.data.source == Rs.TouchMove ||
        (t.data.source == Rs.MouseInteraction && t.data.type == Is.TouchStart))
    );
  }
  !(function () {
    function t(t, e) {
      var n = this;
      if (
        ((this.mouseTail = null),
        (this.tailPositions = []),
        (this.emitter = vc()),
        (this.legacy_missingNodeRetryMap = {}),
        (this.cache = Os()),
        (this.imageMap = new Map()),
        (this.mirror = {
          map: {},
          getId: function (t) {
            return t && t.__sn ? t.__sn.id : -1;
          },
          getNode: function (t) {
            return this.map[t] || null;
          },
          removeNodeFromMap: function (t) {
            var e = this,
              n = t.__sn && t.__sn.id;
            delete this.map[n],
              t.childNodes &&
                t.childNodes.forEach(function (t) {
                  return e.removeNodeFromMap(t);
                });
          },
          has: function (t) {
            return this.map.hasOwnProperty(t);
          },
          reset: function () {
            this.map = {};
          },
        }),
        (this.firstFullSnapshot = null),
        (this.newDocumentQueue = []),
        (this.mousePos = null),
        (this.touchActive = null),
        !(null == e ? void 0 : e.liveMode) && t.length < 2)
      )
        throw new Error("Replayer need at least 2 events.");
      var r = {
        speed: 1,
        maxSpeed: 360,
        root: document.body,
        loadTimeout: 0,
        skipInactive: !1,
        showWarning: !0,
        showDebug: !1,
        blockClass: "rr-block",
        liveMode: !1,
        insertStyleRules: [],
        triggerFocus: !0,
        UNSAFE_replayCanvas: !1,
        pauseAnimation: !0,
        mouseTail: bc,
      };
      (this.config = Object.assign({}, r, e)),
        (this.handleResize = this.handleResize.bind(this)),
        (this.getCastFn = this.getCastFn.bind(this)),
        (this.applyEventsSynchronously =
          this.applyEventsSynchronously.bind(this)),
        this.emitter.on(Ls.Resize, this.handleResize),
        this.setupDom(),
        (this.treeIndex = new Js()),
        (this.fragmentParentMap = new Map()),
        (this.elementStateMap = new Map()),
        (this.virtualStyleRulesMap = new Map()),
        this.emitter.on(Ls.Flush, function () {
          var t,
            e,
            r,
            i,
            o,
            a,
            s,
            l,
            c = n.treeIndex.flush(),
            u = c.scrollMap,
            d = c.inputMap,
            h = c.mutationData;
          n.fragmentParentMap.forEach(function (t, e) {
            return n.restoreRealParent(e, t);
          });
          try {
            for (var p = Xa(h.texts), f = p.next(); !f.done; f = p.next()) {
              var m = f.value;
              n.applyText(m, h);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              f && !f.done && (e = p.return) && e.call(p);
            } finally {
              if (t) throw t.error;
            }
          }
          try {
            for (
              var g = Xa(n.virtualStyleRulesMap.keys()), _ = g.next();
              !_.done;
              _ = g.next()
            ) {
              var v = _.value;
              n.restoreNodeSheet(v);
            }
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              _ && !_.done && (i = g.return) && i.call(g);
            } finally {
              if (r) throw r.error;
            }
          }
          n.fragmentParentMap.clear(),
            n.elementStateMap.clear(),
            n.virtualStyleRulesMap.clear();
          try {
            for (var y = Xa(u.values()), b = y.next(); !b.done; b = y.next()) {
              m = b.value;
              n.applyScroll(m, !0);
            }
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              b && !b.done && (a = y.return) && a.call(y);
            } finally {
              if (o) throw o.error;
            }
          }
          try {
            for (var w = Xa(d.values()), S = w.next(); !S.done; S = w.next()) {
              m = S.value;
              n.applyInput(m);
            }
          } catch (t) {
            s = { error: t };
          } finally {
            try {
              S && !S.done && (l = w.return) && l.call(w);
            } finally {
              if (s) throw s.error;
            }
          }
        }),
        this.emitter.on(Ls.PlayBack, function () {
          (n.firstFullSnapshot = null), n.mirror.reset();
        });
      var i = new Vl([], (null == e ? void 0 : e.speed) || r.speed);
      (this.service = lc(
        {
          events: t
            .map(function (t) {
              return e && e.unpackFn ? e.unpackFn(t) : t;
            })
            .sort(function (t, e) {
              return t.timestamp - e.timestamp;
            }),
          timer: i,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null,
        },
        {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter,
        }
      )),
        this.service.start(),
        this.service.subscribe(function (t) {
          n.emitter.emit(Ls.StateChange, { player: t });
        }),
        (this.speedService = sc(
          oc(
            {
              id: "speed",
              context: { normalSpeed: -1, timer: i },
              initial: "normal",
              states: {
                normal: {
                  on: {
                    FAST_FORWARD: {
                      target: "skipping",
                      actions: ["recordSpeed", "setSpeed"],
                    },
                    SET_SPEED: { target: "normal", actions: ["setSpeed"] },
                  },
                },
                skipping: {
                  on: {
                    BACK_TO_NORMAL: {
                      target: "normal",
                      actions: ["restoreSpeed"],
                    },
                    SET_SPEED: { target: "normal", actions: ["setSpeed"] },
                  },
                },
              },
            },
            {
              actions: {
                setSpeed: function (t, e) {
                  "payload" in e && t.timer.setSpeed(e.payload.speed);
                },
                recordSpeed: Jl({
                  normalSpeed: function (t) {
                    return t.timer.speed;
                  },
                }),
                restoreSpeed: function (t) {
                  t.timer.setSpeed(t.normalSpeed);
                },
              },
            }
          )
        )),
        this.speedService.start(),
        this.speedService.subscribe(function (t) {
          n.emitter.emit(Ls.StateChange, { speed: t });
        });
      var o = this.service.state.context.events.find(function (t) {
          return t.type === Cs.Meta;
        }),
        a = this.service.state.context.events.find(function (t) {
          return t.type === Cs.FullSnapshot;
        });
      if (o) {
        var s = o.data,
          l = s.width,
          c = s.height;
        setTimeout(function () {
          n.emitter.emit(Ls.Resize, { width: l, height: c });
        }, 0);
      }
      a &&
        setTimeout(function () {
          n.firstFullSnapshot ||
            ((n.firstFullSnapshot = a),
            n.rebuildFullSnapshot(a),
            n.iframe.contentWindow.scrollTo(a.data.initialOffset));
        }, 1),
        this.service.state.context.events.find(wc) &&
          this.mouse.classList.add("touch-device");
    }
    Object.defineProperty(t.prototype, "timer", {
      get: function () {
        return this.service.state.context.timer;
      },
      enumerable: !1,
      configurable: !0,
    }),
      (t.prototype.on = function (t, e) {
        return this.emitter.on(t, e), this;
      }),
      (t.prototype.off = function (t, e) {
        return this.emitter.off(t, e), this;
      }),
      (t.prototype.setConfig = function (t) {
        var e = this;
        Object.keys(t).forEach(function (n) {
          e.config[n] = t[n];
        }),
          this.config.skipInactive || this.backToNormal(),
          void 0 !== t.speed &&
            this.speedService.send({
              type: "SET_SPEED",
              payload: { speed: t.speed },
            }),
          void 0 !== t.mouseTail &&
            (!1 === t.mouseTail
              ? this.mouseTail && (this.mouseTail.style.display = "none")
              : (this.mouseTail ||
                  ((this.mouseTail = document.createElement("canvas")),
                  (this.mouseTail.width = Number.parseFloat(this.iframe.width)),
                  (this.mouseTail.height = Number.parseFloat(
                    this.iframe.height
                  )),
                  this.mouseTail.classList.add("replayer-mouse-tail"),
                  this.wrapper.insertBefore(this.mouseTail, this.iframe)),
                (this.mouseTail.style.display = "inherit")));
      }),
      (t.prototype.getMetaData = function () {
        var t = this.service.state.context.events[0],
          e =
            this.service.state.context.events[
              this.service.state.context.events.length - 1
            ];
        return {
          startTime: t.timestamp,
          endTime: e.timestamp,
          totalTime: e.timestamp - t.timestamp,
        };
      }),
      (t.prototype.getCurrentTime = function () {
        return this.timer.timeOffset + this.getTimeOffset();
      }),
      (t.prototype.getTimeOffset = function () {
        var t = this.service.state.context;
        return t.baselineTime - t.events[0].timestamp;
      }),
      (t.prototype.getMirror = function () {
        return this.mirror;
      }),
      (t.prototype.play = function (t) {
        var e;
        void 0 === t && (t = 0),
          this.service.state.matches("paused") ||
            this.service.send({ type: "PAUSE" }),
          this.service.send({ type: "PLAY", payload: { timeOffset: t } }),
          null === (e = this.iframe.contentDocument) ||
            void 0 === e ||
            e.getElementsByTagName("html")[0].classList.remove("rrweb-paused"),
          this.emitter.emit(Ls.Start);
      }),
      (t.prototype.pause = function (t) {
        var e;
        void 0 === t &&
          this.service.state.matches("playing") &&
          this.service.send({ type: "PAUSE" }),
          "number" == typeof t &&
            (this.play(t), this.service.send({ type: "PAUSE" })),
          null === (e = this.iframe.contentDocument) ||
            void 0 === e ||
            e.getElementsByTagName("html")[0].classList.add("rrweb-paused"),
          this.emitter.emit(Ls.Pause);
      }),
      (t.prototype.resume = function (t) {
        void 0 === t && (t = 0),
          console.warn(
            "The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface."
          ),
          this.play(t),
          this.emitter.emit(Ls.Resume);
      }),
      (t.prototype.startLive = function (t) {
        this.service.send({ type: "TO_LIVE", payload: { baselineTime: t } });
      }),
      (t.prototype.addEvent = function (t) {
        var e = this,
          n = this.config.unpackFn ? this.config.unpackFn(t) : t;
        wc(n) && this.mouse.classList.add("touch-device"),
          Promise.resolve().then(function () {
            return e.service.send({ type: "ADD_EVENT", payload: { event: n } });
          });
      }),
      (t.prototype.enableInteract = function () {
        this.iframe.setAttribute("scrolling", "auto"),
          (this.iframe.style.pointerEvents = "auto");
      }),
      (t.prototype.disableInteract = function () {
        this.iframe.setAttribute("scrolling", "no"),
          (this.iframe.style.pointerEvents = "none");
      }),
      (t.prototype.resetCache = function () {
        this.cache = Os();
      }),
      (t.prototype.setupDom = function () {
        (this.wrapper = document.createElement("div")),
          this.wrapper.classList.add("replayer-wrapper"),
          this.config.root.appendChild(this.wrapper),
          (this.mouse = document.createElement("div")),
          this.mouse.classList.add("replayer-mouse"),
          this.wrapper.appendChild(this.mouse),
          !1 !== this.config.mouseTail &&
            ((this.mouseTail = document.createElement("canvas")),
            this.mouseTail.classList.add("replayer-mouse-tail"),
            (this.mouseTail.style.display = "inherit"),
            this.wrapper.appendChild(this.mouseTail)),
          (this.iframe = document.createElement("iframe"));
        var t = ["allow-same-origin"];
        this.config.UNSAFE_replayCanvas && t.push("allow-scripts"),
          (this.iframe.style.display = "none"),
          this.iframe.setAttribute("sandbox", t.join(" ")),
          this.disableInteract(),
          this.wrapper.appendChild(this.iframe),
          this.iframe.contentWindow &&
            this.iframe.contentDocument &&
            (Hl(this.iframe.contentWindow, this.iframe.contentDocument),
            Qs(this.iframe.contentWindow));
      }),
      (t.prototype.handleResize = function (t) {
        var e, n;
        this.iframe.style.display = "inherit";
        try {
          for (
            var r = Xa([this.mouseTail, this.iframe]), i = r.next();
            !i.done;
            i = r.next()
          ) {
            var o = i.value;
            o &&
              (o.setAttribute("width", String(t.width)),
              o.setAttribute("height", String(t.height)));
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (e) throw e.error;
          }
        }
      }),
      (t.prototype.applyEventsSynchronously = function (t) {
        var e, n;
        try {
          for (var r = Xa(t), i = r.next(); !i.done; i = r.next()) {
            var o = i.value;
            switch (o.type) {
              case Cs.DomContentLoaded:
              case Cs.Load:
              case Cs.Custom:
                continue;
              case Cs.FullSnapshot:
              case Cs.Meta:
              case Cs.Plugin:
                break;
              case Cs.IncrementalSnapshot:
                if (o.data.source === Rs.MediaInteraction) continue;
            }
            this.getCastFn(o, !0)();
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (e) throw e.error;
          }
        }
        this.mousePos &&
          this.moveAndHover(
            this.mousePos.x,
            this.mousePos.y,
            this.mousePos.id,
            !0,
            this.mousePos.debugData
          ),
          (this.mousePos = null),
          !0 === this.touchActive
            ? this.mouse.classList.add("touch-active")
            : !1 === this.touchActive &&
              this.mouse.classList.remove("touch-active"),
          (this.touchActive = null);
      }),
      (t.prototype.getCastFn = function (t, e) {
        var n,
          r = this;
        switch ((void 0 === e && (e = !1), t.type)) {
          case Cs.DomContentLoaded:
          case Cs.Load:
            break;
          case Cs.Custom:
            n = function () {
              r.emitter.emit(Ls.CustomEvent, t);
            };
            break;
          case Cs.Meta:
            n = function () {
              return r.emitter.emit(Ls.Resize, {
                width: t.data.width,
                height: t.data.height,
              });
            };
            break;
          case Cs.FullSnapshot:
            n = function () {
              if (r.firstFullSnapshot) {
                if (r.firstFullSnapshot === t)
                  return void (r.firstFullSnapshot = !0);
              } else r.firstFullSnapshot = !0;
              r.rebuildFullSnapshot(t, e),
                r.iframe.contentWindow.scrollTo(t.data.initialOffset);
            };
            break;
          case Cs.IncrementalSnapshot:
            n = function () {
              var n, i;
              if (
                (r.applyIncremental(t, e),
                !e &&
                  (t === r.nextUserInteractionEvent &&
                    ((r.nextUserInteractionEvent = null), r.backToNormal()),
                  r.config.skipInactive && !r.nextUserInteractionEvent))
              ) {
                try {
                  for (
                    var o = Xa(r.service.state.context.events), a = o.next();
                    !a.done;
                    a = o.next()
                  ) {
                    var s = a.value;
                    if (
                      !(s.timestamp <= t.timestamp) &&
                      r.isUserInteraction(s)
                    ) {
                      s.delay - t.delay >
                        1e4 * r.speedService.state.context.timer.speed &&
                        (r.nextUserInteractionEvent = s);
                      break;
                    }
                  }
                } catch (t) {
                  n = { error: t };
                } finally {
                  try {
                    a && !a.done && (i = o.return) && i.call(o);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                if (r.nextUserInteractionEvent) {
                  var l = r.nextUserInteractionEvent.delay - t.delay,
                    c = {
                      speed: Math.min(Math.round(l / 5e3), r.config.maxSpeed),
                    };
                  r.speedService.send({ type: "FAST_FORWARD", payload: c }),
                    r.emitter.emit(Ls.SkipStart, c);
                }
              }
            };
        }
        return function () {
          var i, o;
          n && n();
          try {
            for (
              var a = Xa(r.config.plugins || []), s = a.next();
              !s.done;
              s = a.next()
            ) {
              s.value.handler(t, e, { replayer: r });
            }
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              s && !s.done && (o = a.return) && o.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          r.service.send({ type: "CAST_EVENT", payload: { event: t } });
          var l = r.service.state.context.events.length - 1;
          if (t === r.service.state.context.events[l]) {
            var c = function () {
              l < r.service.state.context.events.length - 1 ||
                (r.backToNormal(),
                r.service.send("END"),
                r.emitter.emit(Ls.Finish));
            };
            t.type === Cs.IncrementalSnapshot &&
            t.data.source === Rs.MouseMove &&
            t.data.positions.length
              ? setTimeout(function () {
                  c();
                }, Math.max(0, 50 - t.data.positions[0].timeOffset))
              : c();
          }
          r.emitter.emit(Ls.EventCast, t);
        };
      }),
      (t.prototype.rebuildFullSnapshot = function (t, e) {
        var n,
          r,
          i = this;
        if ((void 0 === e && (e = !1), !this.iframe.contentDocument))
          return console.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length &&
          console.warn(
            "Found unresolved missing node map",
            this.legacy_missingNodeRetryMap
          ),
          (this.legacy_missingNodeRetryMap = {});
        var o = [];
        this.mirror.map = Bs(t.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: function (t) {
            i.collectIframeAndAttachDocument(o, t);
          },
          cache: this.cache,
        })[1];
        var a = function (t, e) {
            s.attachDocumentToIframe(t, e),
              (s.newDocumentQueue = s.newDocumentQueue.filter(function (e) {
                return e !== t;
              }));
          },
          s = this;
        try {
          for (var l = Xa(o), c = l.next(); !c.done; c = l.next()) {
            var u = c.value;
            a(u.mutationInQueue, u.builtNode);
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            c && !c.done && (r = l.return) && r.call(l);
          } finally {
            if (n) throw n.error;
          }
        }
        var d = this.iframe.contentDocument,
          h = d.documentElement,
          p = d.head;
        this.insertStyleRules(h, p),
          this.service.state.matches("playing") ||
            this.iframe.contentDocument
              .getElementsByTagName("html")[0]
              .classList.add("rrweb-paused"),
          this.emitter.emit(Ls.FullsnapshotRebuilded, t),
          e || this.waitForStylesheetLoad(),
          this.config.UNSAFE_replayCanvas && this.preloadAllImages();
      }),
      (t.prototype.insertStyleRules = function (t, e) {
        var n = document.createElement("style");
        t.insertBefore(n, e);
        var r,
          i = ((r = this.config.blockClass),
          [
            ".".concat(r, " { background: currentColor }"),
            "noscript { display: none !important; }",
          ]).concat(this.config.insertStyleRules);
        this.config.pauseAnimation &&
          i.push(
            "html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"
          );
        for (var o = 0; o < i.length; o++) n.sheet.insertRule(i[o], o);
      }),
      (t.prototype.attachDocumentToIframe = function (t, e) {
        var n,
          r,
          i = this,
          o = [];
        if (!e.contentDocument)
          for (var a = e.parentNode; a; ) {
            if (this.fragmentParentMap.has(a)) {
              var s = a,
                l = this.fragmentParentMap.get(s);
              this.restoreRealParent(s, l);
              break;
            }
            a = a.parentNode;
          }
        Ps(t.node, {
          doc: e.contentDocument,
          map: this.mirror.map,
          hackCss: !0,
          skipChild: !1,
          afterAppend: function (t) {
            if (
              (i.collectIframeAndAttachDocument(o, t),
              t.__sn.type === qa.Element &&
                "HTML" === t.__sn.tagName.toUpperCase())
            ) {
              var n = e.contentDocument,
                r = n.documentElement,
                a = n.head;
              i.insertStyleRules(r, a);
            }
          },
          cache: this.cache,
        });
        var c = function (t, e) {
            u.attachDocumentToIframe(t, e),
              (u.newDocumentQueue = u.newDocumentQueue.filter(function (e) {
                return e !== t;
              }));
          },
          u = this;
        try {
          for (var d = Xa(o), h = d.next(); !h.done; h = d.next()) {
            var p = h.value;
            c(p.mutationInQueue, p.builtNode);
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            h && !h.done && (r = d.return) && r.call(d);
          } finally {
            if (n) throw n.error;
          }
        }
      }),
      (t.prototype.collectIframeAndAttachDocument = function (t, e) {
        if (nl(e)) {
          var n = this.newDocumentQueue.find(function (t) {
            return t.parentId === e.__sn.id;
          });
          n && t.push({ mutationInQueue: n, builtNode: e });
        }
      }),
      (t.prototype.waitForStylesheetLoad = function () {
        var t,
          e = this,
          n =
            null === (t = this.iframe.contentDocument) || void 0 === t
              ? void 0
              : t.head;
        if (n) {
          var r,
            i = new Set(),
            o = this.service.state,
            a = function () {
              o = e.service.state;
            };
          this.emitter.on(Ls.Start, a), this.emitter.on(Ls.Pause, a);
          var s = function () {
            e.emitter.off(Ls.Start, a), e.emitter.off(Ls.Pause, a);
          };
          n.querySelectorAll('link[rel="stylesheet"]').forEach(function (t) {
            t.sheet ||
              (i.add(t),
              t.addEventListener("load", function () {
                i.delete(t),
                  0 === i.size &&
                    -1 !== r &&
                    (o.matches("playing") && e.play(e.getCurrentTime()),
                    e.emitter.emit(Ls.LoadStylesheetEnd),
                    r && clearTimeout(r),
                    s());
              }));
          }),
            i.size > 0 &&
              (this.service.send({ type: "PAUSE" }),
              this.emitter.emit(Ls.LoadStylesheetStart),
              (r = setTimeout(function () {
                o.matches("playing") && e.play(e.getCurrentTime()),
                  (r = -1),
                  s();
              }, this.config.loadTimeout)));
        }
      }),
      (t.prototype.hasImageArg = function (t) {
        var e, n;
        try {
          for (var r = Xa(t), i = r.next(); !i.done; i = r.next()) {
            var o = i.value;
            if (o && "object" == typeof o)
              if ("rr_type" in o && "args" in o) {
                if (this.hasImageArg(o.args)) return !0;
              } else {
                if ("rr_type" in o && "HTMLImageElement" === o.rr_type)
                  return !0;
                if (o instanceof Array && this.hasImageArg(o)) return !0;
              }
            else;
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            i && !i.done && (n = r.return) && n.call(r);
          } finally {
            if (e) throw e.error;
          }
        }
        return !1;
      }),
      (t.prototype.getImageArgs = function (t) {
        var e,
          n,
          r = [];
        try {
          for (var i = Xa(t), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;
            a &&
              "object" == typeof a &&
              ("rr_type" in a && "args" in a
                ? r.push.apply(r, Qa([], Ka(this.getImageArgs(a.args)), !1))
                : "rr_type" in a && "HTMLImageElement" === a.rr_type
                ? r.push(a.src)
                : a instanceof Array &&
                  r.push.apply(r, Qa([], Ka(this.getImageArgs(a)), !1)));
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return r;
      }),
      (t.prototype.preloadAllImages = function () {
        var t,
          e,
          n = this;
        this.service.state;
        var r = function () {
          n.service.state;
        };
        this.emitter.on(Ls.Start, r), this.emitter.on(Ls.Pause, r);
        var i = function (t) {
            t.type === Cs.IncrementalSnapshot &&
              t.data.source === Rs.CanvasMutation &&
              ("commands" in t.data
                ? t.data.commands.forEach(function (e) {
                    return n.preloadImages(e, t);
                  })
                : o.preloadImages(t.data, t));
          },
          o = this;
        try {
          for (
            var a = Xa(this.service.state.context.events), s = a.next();
            !s.done;
            s = a.next()
          ) {
            i(s.value);
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            s && !s.done && (e = a.return) && e.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (t.prototype.preloadImages = function (t, e) {
        var n = this;
        if (
          "drawImage" !== t.property ||
          "string" != typeof t.args[0] ||
          this.imageMap.has(e)
        )
          this.hasImageArg(t.args) &&
            this.getImageArgs(t.args).forEach(function (t) {
              var e = new Image();
              (e.src = t), n.imageMap.set(t, e);
            });
        else {
          var r = document.createElement("canvas"),
            i = r.getContext("2d"),
            o = null == i ? void 0 : i.createImageData(r.width, r.height);
          null == o || o.data,
            JSON.parse(t.args[0]),
            null == i || i.putImageData(o, 0, 0);
        }
      }),
      (t.prototype.applyIncremental = function (t, e) {
        var n,
          r,
          i = this,
          o = t.data;
        switch (o.source) {
          case Rs.Mutation:
            e &&
              (o.adds.forEach(function (t) {
                return i.treeIndex.add(t);
              }),
              o.texts.forEach(function (t) {
                var e = i.mirror.getNode(t.id),
                  n = null == e ? void 0 : e.parentNode;
                n &&
                  i.virtualStyleRulesMap.has(n) &&
                  i.virtualStyleRulesMap.delete(n),
                  i.treeIndex.text(t);
              }),
              o.attributes.forEach(function (t) {
                return i.treeIndex.attribute(t);
              }),
              o.removes.forEach(function (t) {
                return i.treeIndex.remove(t, i.mirror);
              }));
            try {
              this.applyMutation(o, e);
            } catch (t) {
              this.warn("Exception in mutation ".concat(t.message || t), o);
            }
            break;
          case Rs.Drag:
          case Rs.TouchMove:
          case Rs.MouseMove:
            if (e) {
              var a = o.positions[o.positions.length - 1];
              this.mousePos = { x: a.x, y: a.y, id: a.id, debugData: o };
            } else
              o.positions.forEach(function (n) {
                var r = {
                  doAction: function () {
                    i.moveAndHover(n.x, n.y, n.id, e, o);
                  },
                  delay:
                    n.timeOffset +
                    t.timestamp -
                    i.service.state.context.baselineTime,
                };
                i.timer.addAction(r);
              }),
                this.timer.addAction({
                  doAction: function () {},
                  delay:
                    t.delay -
                    (null === (n = o.positions[0]) || void 0 === n
                      ? void 0
                      : n.timeOffset),
                });
            break;
          case Rs.MouseInteraction:
            if (-1 === o.id) break;
            var s = new Event(Is[o.type].toLowerCase());
            if (!(v = this.mirror.getNode(o.id)))
              return this.debugNodeNotFound(o, o.id);
            this.emitter.emit(Ls.MouseInteraction, { type: o.type, target: v });
            var l = this.config.triggerFocus;
            switch (o.type) {
              case Is.Blur:
                "blur" in v && v.blur();
                break;
              case Is.Focus:
                l && v.focus && v.focus({ preventScroll: !0 });
                break;
              case Is.Click:
              case Is.TouchStart:
              case Is.TouchEnd:
                e
                  ? (o.type === Is.TouchStart
                      ? (this.touchActive = !0)
                      : o.type === Is.TouchEnd && (this.touchActive = !1),
                    (this.mousePos = {
                      x: o.x,
                      y: o.y,
                      id: o.id,
                      debugData: o,
                    }))
                  : (o.type === Is.TouchStart &&
                      (this.tailPositions.length = 0),
                    this.moveAndHover(o.x, o.y, o.id, e, o),
                    o.type === Is.Click
                      ? (this.mouse.classList.remove("active"),
                        this.mouse.offsetWidth,
                        this.mouse.classList.add("active"))
                      : o.type === Is.TouchStart
                      ? (this.mouse.offsetWidth,
                        this.mouse.classList.add("touch-active"))
                      : o.type === Is.TouchEnd &&
                        this.mouse.classList.remove("touch-active"));
                break;
              case Is.TouchCancel:
                e
                  ? (this.touchActive = !1)
                  : this.mouse.classList.remove("touch-active");
                break;
              default:
                v.dispatchEvent(s);
            }
            break;
          case Rs.Scroll:
            if (-1 === o.id) break;
            if (e) {
              this.treeIndex.scroll(o);
              break;
            }
            this.applyScroll(o, !1);
            break;
          case Rs.ViewportResize:
            this.emitter.emit(Ls.Resize, { width: o.width, height: o.height });
            break;
          case Rs.Input:
            if (-1 === o.id) break;
            if (e) {
              this.treeIndex.input(o);
              break;
            }
            this.applyInput(o);
            break;
          case Rs.MediaInteraction:
            if (!(v = this.mirror.getNode(o.id)))
              return this.debugNodeNotFound(o, o.id);
            var c = v;
            try {
              o.currentTime && (c.currentTime = o.currentTime),
                o.volume && (c.volume = o.volume),
                o.muted && (c.muted = o.muted),
                1 === o.type && c.pause(),
                0 === o.type && c.play();
            } catch (t) {
              this.config.showWarning &&
                console.warn(
                  "Failed to replay media interactions: ".concat(t.message || t)
                );
            }
            break;
          case Rs.StyleSheetRule:
            if (!(v = this.mirror.getNode(o.id)))
              return this.debugNodeNotFound(o, o.id);
            var u,
              d = v,
              h = v.parentNode,
              p = this.fragmentParentMap.has(h),
              f = p ? null : d.sheet;
            f ||
              (this.virtualStyleRulesMap.has(v)
                ? (u = this.virtualStyleRulesMap.get(v))
                : ((u = []), this.virtualStyleRulesMap.set(v, u))),
              o.adds &&
                o.adds.forEach(function (t) {
                  var e = t.rule,
                    n = t.index;
                  if (f)
                    try {
                      if (Array.isArray(n)) {
                        var r = dc(n),
                          i = r.positions,
                          o = r.index;
                        uc(f.cssRules, i).insertRule(e, o);
                      } else {
                        o =
                          void 0 === n
                            ? void 0
                            : Math.min(n, f.cssRules.length);
                        f.insertRule(e, o);
                      }
                    } catch (t) {}
                  else
                    null == u ||
                      u.push({ cssText: e, index: n, type: cc.Insert });
                }),
              o.removes &&
                o.removes.forEach(function (t) {
                  var e = t.index;
                  if (p) null == u || u.push({ index: e, type: cc.Remove });
                  else
                    try {
                      if (Array.isArray(e)) {
                        var n = dc(e),
                          r = n.positions,
                          i = n.index;
                        uc(f.cssRules, r).deleteRule(i || 0);
                      } else null == f || f.deleteRule(e);
                    } catch (t) {}
                });
            break;
          case Rs.StyleDeclaration:
            if (!(v = this.mirror.getNode(o.id)))
              return this.debugNodeNotFound(o, o.id);
            d = v;
            var m = v.parentNode,
              g = this.fragmentParentMap.has(m) ? null : d.sheet,
              _ = [];
            if (
              (g ||
                (this.virtualStyleRulesMap.has(v)
                  ? (_ = this.virtualStyleRulesMap.get(v))
                  : ((_ = []), this.virtualStyleRulesMap.set(v, _))),
              o.set)
            )
              if (g)
                uc(g.rules, o.index).style.setProperty(
                  o.set.property,
                  o.set.value,
                  o.set.priority
                );
              else _.push(Za({ type: cc.SetProperty, index: o.index }, o.set));
            if (o.remove)
              if (g)
                uc(g.rules, o.index).style.removeProperty(o.remove.property);
              else
                _.push(
                  Za({ type: cc.RemoveProperty, index: o.index }, o.remove)
                );
            break;
          case Rs.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            var v;
            if (!(v = this.mirror.getNode(o.id)))
              return this.debugNodeNotFound(o, o.id);
            !(function (t) {
              var e = t.event,
                n = t.mutation,
                r = t.target,
                i = t.imageMap,
                o = t.errorHandler;
              try {
                var a = "commands" in n ? n.commands : [n];
                [Ns.WebGL, Ns.WebGL2].includes(n.type)
                  ? a.forEach(function (t) {
                      _c({
                        mutation: t,
                        type: n.type,
                        target: r,
                        imageMap: i,
                        errorHandler: o,
                      });
                    })
                  : a.forEach(function (t) {
                      !(function (t) {
                        var e = t.event,
                          n = t.mutation,
                          r = t.target,
                          i = t.imageMap,
                          o = t.errorHandler;
                        try {
                          var a = r.getContext("2d");
                          if (n.setter) return void (a[n.property] = n.args[0]);
                          var s = a[n.property];
                          if (
                            "drawImage" === n.property &&
                            "string" == typeof n.args[0]
                          ) {
                            var l = i.get(e);
                            (n.args[0] = l), s.apply(a, n.args);
                          } else s.apply(a, n.args);
                        } catch (t) {
                          o(n, t);
                        }
                      })({
                        event: e,
                        mutation: t,
                        target: r,
                        imageMap: i,
                        errorHandler: o,
                      });
                    });
              } catch (t) {
                o(n, t);
              }
            })({
              event: t,
              mutation: o,
              target: v,
              imageMap: this.imageMap,
              errorHandler: this.warnCanvasMutationFailed.bind(this),
            });
            break;
          case Rs.Font:
            try {
              var y = new FontFace(
                o.family,
                o.buffer
                  ? new Uint8Array(JSON.parse(o.fontSource))
                  : o.fontSource,
                o.descriptors
              );
              null === (r = this.iframe.contentDocument) ||
                void 0 === r ||
                r.fonts.add(y);
            } catch (t) {
              this.config.showWarning && console.warn(t);
            }
        }
      }),
      (t.prototype.applyMutation = function (t, e) {
        var n,
          r,
          i = this;
        t.removes.forEach(function (e) {
          var n = i.mirror.getNode(e.id);
          if (!n) {
            if (
              t.removes.find(function (t) {
                return t.id === e.parentId;
              })
            )
              return;
            return i.warnNodeNotFound(t, e.id);
          }
          i.virtualStyleRulesMap.has(n) && i.virtualStyleRulesMap.delete(n);
          var r = i.mirror.getNode(e.parentId);
          if (!r) return i.warnNodeNotFound(t, e.parentId);
          if (
            (e.isShadow && il(r) && (r = r.shadowRoot),
            i.mirror.removeNodeFromMap(n),
            r)
          ) {
            var o = null,
              a = "__sn" in r ? i.fragmentParentMap.get(r) : void 0;
            a && a.contains(n)
              ? (r = a)
              : i.fragmentParentMap.has(n) &&
                ((o = i.fragmentParentMap.get(n)),
                i.fragmentParentMap.delete(n),
                (n = o));
            try {
              r.removeChild(n);
            } catch (e) {
              if (!(e instanceof DOMException)) throw e;
              i.warn(
                "parent could not remove child in mutation",
                r,
                a,
                n,
                o,
                t
              );
            }
          }
        });
        var o = Za({}, this.legacy_missingNodeRetryMap),
          a = [],
          s = function (t) {
            var n, r, s, l;
            if (!i.iframe.contentDocument)
              return console.warn(
                "Looks like your replayer has been destroyed."
              );
            var c = i.mirror.getNode(t.parentId);
            if (!c)
              return t.node.type === qa.Document
                ? i.newDocumentQueue.push(t)
                : a.push(t);
            var u = null;
            i.iframe.contentDocument.contains
              ? (u = i.iframe.contentDocument.contains(c))
              : i.iframe.contentDocument.body.contains &&
                (u = i.iframe.contentDocument.body.contains(c));
            var d =
              (null === (l = (s = c).getElementsByTagName) || void 0 === l
                ? void 0
                : l.call(s, "iframe").length) > 0;
            if (e && u && !nl(c) && !d) {
              var h = document.createDocumentFragment();
              for (
                i.mirror.map[t.parentId] = h,
                  i.fragmentParentMap.set(h, c),
                  i.storeState(c);
                c.firstChild;

              )
                h.appendChild(c.firstChild);
              c = h;
            }
            t.node.isShadow &&
              (il(c) || c.attachShadow({ mode: "open" }), (c = c.shadowRoot));
            var p = null,
              f = null;
            if (
              (t.previousId && (p = i.mirror.getNode(t.previousId)),
              t.nextId && (f = i.mirror.getNode(t.nextId)),
              (function (t) {
                var e = null;
                return (
                  t.nextId && (e = i.mirror.getNode(t.nextId)),
                  null !== t.nextId &&
                    void 0 !== t.nextId &&
                    -1 !== t.nextId &&
                    !e
                );
              })(t))
            )
              return a.push(t);
            if (!t.node.rootId || i.mirror.getNode(t.node.rootId)) {
              var m = t.node.rootId
                ? i.mirror.getNode(t.node.rootId)
                : i.iframe.contentDocument;
              if (nl(c)) i.attachDocumentToIframe(t, c);
              else {
                var g = Ps(t.node, {
                  doc: m,
                  map: i.mirror.map,
                  skipChild: !0,
                  hackCss: !0,
                  cache: i.cache,
                });
                if (-1 !== t.previousId && -1 !== t.nextId) {
                  if (
                    "__sn" in c &&
                    c.__sn.type === qa.Element &&
                    "textarea" === c.__sn.tagName &&
                    t.node.type === qa.Text
                  )
                    try {
                      for (
                        var _ = Xa(Array.from(c.childNodes)), v = _.next();
                        !v.done;
                        v = _.next()
                      ) {
                        var y = v.value;
                        y.nodeType === c.TEXT_NODE && c.removeChild(y);
                      }
                    } catch (t) {
                      n = { error: t };
                    } finally {
                      try {
                        v && !v.done && (r = _.return) && r.call(_);
                      } finally {
                        if (n) throw n.error;
                      }
                    }
                  if (p && p.nextSibling && p.nextSibling.parentNode)
                    c.insertBefore(g, p.nextSibling);
                  else if (f && f.parentNode)
                    c.contains(f)
                      ? c.insertBefore(g, f)
                      : c.insertBefore(g, null);
                  else {
                    if (c === m)
                      for (; m.firstChild; ) m.removeChild(m.firstChild);
                    c.appendChild(g);
                  }
                  if (nl(g)) {
                    var b = i.newDocumentQueue.find(function (t) {
                      return t.parentId === g.__sn.id;
                    });
                    b &&
                      (i.attachDocumentToIframe(b, g),
                      (i.newDocumentQueue = i.newDocumentQueue.filter(function (
                        t
                      ) {
                        return t !== b;
                      })));
                  }
                  (t.previousId || t.nextId) &&
                    i.legacy_resolveMissingNode(o, c, g, t);
                } else o[t.node.id] = { node: g, mutation: t };
              }
            }
          };
        t.adds.forEach(function (t) {
          s(t);
        });
        for (var l = Date.now(); a.length; ) {
          var c = tl(a);
          if (((a.length = 0), Date.now() - l > 500)) {
            this.warn(
              "Timeout in the loop, please check the resolve tree data:",
              c
            );
            break;
          }
          try {
            for (
              var u = ((n = void 0), Xa(c)), d = u.next();
              !d.done;
              d = u.next()
            ) {
              var h = d.value;
              this.mirror.getNode(h.value.parentId)
                ? el(h, function (t) {
                    s(t);
                  })
                : this.debug(
                    "Drop resolve tree since there is no parent for the root node.",
                    h
                  );
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              d && !d.done && (r = u.return) && r.call(u);
            } finally {
              if (n) throw n.error;
            }
          }
        }
        Object.keys(o).length &&
          Object.assign(this.legacy_missingNodeRetryMap, o),
          t.texts.forEach(function (e) {
            var n = i.mirror.getNode(e.id);
            if (!n) {
              if (
                t.removes.find(function (t) {
                  return t.id === e.id;
                })
              )
                return;
              return i.warnNodeNotFound(t, e.id);
            }
            i.fragmentParentMap.has(n) && (n = i.fragmentParentMap.get(n)),
              (n.textContent = e.value);
          }),
          t.attributes.forEach(function (e) {
            var n = i.mirror.getNode(e.id);
            if (!n) {
              if (
                t.removes.find(function (t) {
                  return t.id === e.id;
                })
              )
                return;
              return i.warnNodeNotFound(t, e.id);
            }
            for (var r in (i.fragmentParentMap.has(n) &&
              (n = i.fragmentParentMap.get(n)),
            e.attributes))
              if ("string" == typeof r) {
                var o = e.attributes[r];
                if (null === o) n.removeAttribute(r);
                else if ("string" == typeof o)
                  try {
                    n.setAttribute(r, o);
                  } catch (t) {
                    i.config.showWarning &&
                      console.warn(
                        "An error occurred may due to the checkout feature.",
                        t
                      );
                  }
                else if ("style" === r) {
                  var a = o,
                    s = n;
                  for (var l in a)
                    if (!1 === a[l]) s.style.removeProperty(l);
                    else if (a[l] instanceof Array) {
                      var c = a[l];
                      s.style.setProperty(l, c[0], c[1]);
                    } else {
                      var u = a[l];
                      s.style.setProperty(l, u);
                    }
                }
              }
          });
      }),
      (t.prototype.applyScroll = function (t, e) {
        var n = this.mirror.getNode(t.id);
        if (!n) return this.debugNodeNotFound(t, t.id);
        if (n === this.iframe.contentDocument)
          this.iframe.contentWindow.scrollTo({
            top: t.y,
            left: t.x,
            behavior: e ? "auto" : "smooth",
          });
        else if (n.__sn.type === qa.Document)
          n.defaultView.scrollTo({
            top: t.y,
            left: t.x,
            behavior: e ? "auto" : "smooth",
          });
        else
          try {
            (n.scrollTop = t.y), (n.scrollLeft = t.x);
          } catch (t) {}
      }),
      (t.prototype.applyInput = function (t) {
        var e = this.mirror.getNode(t.id);
        if (!e) return this.debugNodeNotFound(t, t.id);
        try {
          (e.checked = t.isChecked), (e.value = t.text);
        } catch (t) {}
      }),
      (t.prototype.applyText = function (t, e) {
        var n = this.mirror.getNode(t.id);
        if (!n) return this.debugNodeNotFound(e, t.id);
        try {
          n.textContent = t.value;
        } catch (t) {}
      }),
      (t.prototype.legacy_resolveMissingNode = function (t, e, n, r) {
        var i = r.previousId,
          o = r.nextId,
          a = i && t[i],
          s = o && t[o];
        if (a) {
          var l = a,
            c = l.node,
            u = l.mutation;
          e.insertBefore(c, n),
            delete t[u.node.id],
            delete this.legacy_missingNodeRetryMap[u.node.id],
            (u.previousId || u.nextId) &&
              this.legacy_resolveMissingNode(t, e, c, u);
        }
        if (s) {
          var d = s;
          (c = d.node), (u = d.mutation);
          e.insertBefore(c, n.nextSibling),
            delete t[u.node.id],
            delete this.legacy_missingNodeRetryMap[u.node.id],
            (u.previousId || u.nextId) &&
              this.legacy_resolveMissingNode(t, e, c, u);
        }
      }),
      (t.prototype.moveAndHover = function (t, e, n, r, i) {
        var o = this.mirror.getNode(n);
        if (!o) return this.debugNodeNotFound(i, n);
        var a = rl(o, this.iframe),
          s = t * a.absoluteScale + a.x,
          l = e * a.absoluteScale + a.y;
        (this.mouse.style.left = "".concat(s, "px")),
          (this.mouse.style.top = "".concat(l, "px")),
          r || this.drawMouseTail({ x: s, y: l }),
          this.hoverElements(o);
      }),
      (t.prototype.drawMouseTail = function (t) {
        var e = this;
        if (this.mouseTail) {
          var n =
              !0 === this.config.mouseTail
                ? bc
                : Object.assign({}, bc, this.config.mouseTail),
            r = n.lineCap,
            i = n.lineWidth,
            o = n.strokeStyle,
            a = n.duration,
            s = function () {
              if (e.mouseTail) {
                var t = e.mouseTail.getContext("2d");
                t &&
                  e.tailPositions.length &&
                  (t.clearRect(0, 0, e.mouseTail.width, e.mouseTail.height),
                  t.beginPath(),
                  (t.lineWidth = i),
                  (t.lineCap = r),
                  (t.strokeStyle = o),
                  t.moveTo(e.tailPositions[0].x, e.tailPositions[0].y),
                  e.tailPositions.forEach(function (e) {
                    return t.lineTo(e.x, e.y);
                  }),
                  t.stroke());
              }
            };
          this.tailPositions.push(t),
            s(),
            setTimeout(function () {
              (e.tailPositions = e.tailPositions.filter(function (e) {
                return e !== t;
              })),
                s();
            }, a / this.speedService.state.context.timer.speed);
        }
      }),
      (t.prototype.hoverElements = function (t) {
        var e;
        null === (e = this.iframe.contentDocument) ||
          void 0 === e ||
          e.querySelectorAll(".\\:hover").forEach(function (t) {
            t.classList.remove(":hover");
          });
        for (var n = t; n; )
          n.classList && n.classList.add(":hover"), (n = n.parentElement);
      }),
      (t.prototype.isUserInteraction = function (t) {
        return (
          t.type === Cs.IncrementalSnapshot &&
          t.data.source > Rs.Mutation &&
          t.data.source <= Rs.Input
        );
      }),
      (t.prototype.backToNormal = function () {
        (this.nextUserInteractionEvent = null),
          this.speedService.state.matches("normal") ||
            (this.speedService.send({ type: "BACK_TO_NORMAL" }),
            this.emitter.emit(Ls.SkipEnd, {
              speed: this.speedService.state.context.normalSpeed,
            }));
      }),
      (t.prototype.restoreRealParent = function (t, e) {
        (this.mirror.map[e.__sn.id] = e),
          e.__sn.type === qa.Element &&
            "textarea" === e.__sn.tagName &&
            t.textContent &&
            (e.value = t.textContent),
          e.appendChild(t),
          this.restoreState(e);
      }),
      (t.prototype.storeState = function (t) {
        var e, n;
        if (t && t.nodeType === t.ELEMENT_NODE) {
          var r = t;
          (r.scrollLeft || r.scrollTop) &&
            this.elementStateMap.set(t, {
              scroll: [r.scrollLeft, r.scrollTop],
            }),
            "STYLE" === r.tagName &&
              (function (t, e) {
                var n;
                try {
                  var r = Array.from(
                    (null === (n = t.sheet) || void 0 === n
                      ? void 0
                      : n.cssRules) || []
                  ).map(function (t) {
                    return t.cssText;
                  });
                  e.set(t, [{ type: cc.Snapshot, cssTexts: r }]);
                } catch (t) {}
              })(r, this.virtualStyleRulesMap);
          var i = r.children;
          try {
            for (
              var o = Xa(Array.from(i)), a = o.next();
              !a.done;
              a = o.next()
            ) {
              var s = a.value;
              this.storeState(s);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              a && !a.done && (n = o.return) && n.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        }
      }),
      (t.prototype.restoreState = function (t) {
        var e, n;
        if (t.nodeType === t.ELEMENT_NODE) {
          var r = t;
          if (this.elementStateMap.has(t)) {
            var i = this.elementStateMap.get(t);
            i.scroll &&
              ((r.scrollLeft = i.scroll[0]), (r.scrollTop = i.scroll[1])),
              this.elementStateMap.delete(t);
          }
          var o = r.children;
          try {
            for (
              var a = Xa(Array.from(o)), s = a.next();
              !s.done;
              s = a.next()
            ) {
              var l = s.value;
              this.restoreState(l);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (n = a.return) && n.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
        }
      }),
      (t.prototype.restoreNodeSheet = function (t) {
        var e = this.virtualStyleRulesMap.get(t);
        "STYLE" === t.nodeName && e && hc(e, t);
      }),
      (t.prototype.warnNodeNotFound = function (t, e) {
        this.treeIndex.idRemoved(e)
          ? this.warn(
              "Node with id '".concat(e, "' was previously removed. "),
              t
            )
          : this.warn("Node with id '".concat(e, "' not found. "), t);
      }),
      (t.prototype.warnCanvasMutationFailed = function (t, e) {
        this.warn("Has error on canvas update", e, "canvas mutation:", t);
      }),
      (t.prototype.debugNodeNotFound = function (t, e) {
        this.treeIndex.idRemoved(e)
          ? this.debug(
              yc,
              "Node with id '".concat(e, "' was previously removed. "),
              t
            )
          : this.debug(yc, "Node with id '".concat(e, "' not found. "), t);
      }),
      (t.prototype.warn = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.config.showWarning &&
          console.warn.apply(console, Qa([yc], Ka(t), !1));
      }),
      (t.prototype.debug = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.config.showDebug &&
          console.log.apply(console, Qa([yc], Ka(t), !1));
      });
  })(),
    jl.addCustomEvent,
    jl.freezePage;
  var Sc = Uint8Array,
    Ec = Uint16Array,
    xc = Uint32Array,
    kc = new Sc([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    Tc = new Sc([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    Cc = function (t, e) {
      for (var n = new Ec(31), r = 0; r < 31; ++r) n[r] = e += 1 << t[r - 1];
      var i = new xc(n[30]);
      for (r = 1; r < 30; ++r)
        for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r;
      return [n, i];
    },
    Rc = Cc(kc, 2),
    Ic = Rc[0],
    Nc = Rc[1];
  (Ic[28] = 258), (Nc[258] = 28), Cc(Tc, 0);
  for (var $c = new Ec(32768), Lc = 0; Lc < 32768; ++Lc) {
    var Mc = ((43690 & Lc) >>> 1) | ((21845 & Lc) << 1);
    (Mc =
      ((61680 & (Mc = ((52428 & Mc) >>> 2) | ((13107 & Mc) << 2))) >>> 4) |
      ((3855 & Mc) << 4)),
      ($c[Lc] = (((65280 & Mc) >>> 8) | ((255 & Mc) << 8)) >>> 1);
  }
  var Ac = new Sc(288);
  for (Lc = 0; Lc < 144; ++Lc) Ac[Lc] = 8;
  for (Lc = 144; Lc < 256; ++Lc) Ac[Lc] = 9;
  for (Lc = 256; Lc < 280; ++Lc) Ac[Lc] = 7;
  for (Lc = 280; Lc < 288; ++Lc) Ac[Lc] = 8;
  var Dc = new Sc(32);
  for (Lc = 0; Lc < 32; ++Lc) Dc[Lc] = 5;
  function Oc(t) {
    return { timestamp: new Date().getTime() / 1e3, type: "default", ...t };
  }
  function Uc(t) {
    let e, n;
    try {
      (n = (function (t) {
        if (((e = t.event), e.target)) return t.event.target;
        var e;
        return t.event;
      })(t)),
        (e = nr(n));
    } catch (t) {
      e = "<unknown>";
    }
    return 0 === e.length
      ? null
      : Oc({
          category: `ui.${t.name}`,
          message: e,
          data: { ...(n ? { nodeId: jl.mirror.getId(n) } : {}) },
        });
  }
  let Pc = null;
  function Bc(t, e) {
    return "scope" === t
      ? (function (t) {
          const e = t.getLastBreadcrumb();
          return Pc !== e && e
            ? ((Pc = e),
              e.category &&
              (["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
                e.category
              ) ||
                e.category.startsWith("ui."))
                ? null
                : Oc(e))
            : null;
        })(e)
      : Uc(e);
  }
  function Fc(t, e, n) {
    if (!t.eventBuffer) return;
    if (t.isPaused()) return;
    const r = e.timestamp > 9999999999 ? e.timestamp : 1e3 * e.timestamp;
    if (r + Ia < new Date().getTime()) return;
    const i = t.getContext().earliestEvent;
    0 ===
      Cr([
        t,
        "access",
        (t) => t.session,
        "optionalAccess",
        (t) => t.segmentId,
      ]) &&
      (!i || r < i) &&
      (t.getContext().earliestEvent = r),
      t.eventBuffer.addEvent(e, n);
  }
  function zc(t, e) {
    e.map(({ type: e, start: n, end: r, name: i, data: o }) =>
      Fc(t, {
        type: Cs.Custom,
        timestamp: n,
        data: {
          tag: "performanceSpan",
          payload: {
            op: e,
            description: i,
            startTimestamp: n,
            endTimestamp: r,
            data: o,
          },
        },
      })
    );
  }
  function Gc(t, e) {
    return (
      (("undefined" != typeof __SENTRY_DEBUG__ && !__SENTRY_DEBUG__) ||
        !Cr([
          t,
          "access",
          (t) => t.getOptions,
          "call",
          (t) => t(),
          "access",
          (t) => t._experiments,
          "optionalAccess",
          (t) => t.traceInternals,
        ])) &&
      !(function (t) {
        const e = Cr([
          Bi,
          "call",
          (t) => t(),
          "access",
          (t) => t.getClient,
          "call",
          (t) => t(),
          "optionalAccess",
          (t) => t.getDsn,
          "call",
          (t) => t(),
        ]);
        return !!e && t.includes(e.host);
      })(e)
    );
  }
  function jc(t) {
    return (e) => {
      if (e.type === Ca) return delete e.breadcrumbs, e;
      if (
        (function (t) {
          return (
            !(
              t.type ||
              !Cr([
                t,
                "access",
                (t) => t.exception,
                "optionalAccess",
                (t) => t.values,
                "optionalAccess",
                (t) => t.length,
              ])
            ) &&
            t.exception.values.some(
              (t) =>
                !!Cr([
                  t,
                  "access",
                  (t) => t.stacktrace,
                  "optionalAccess",
                  (t) => t.frames,
                  "optionalAccess",
                  (t) => t.length,
                ]) &&
                t.stacktrace.frames.some((t) =>
                  Cr([
                    t,
                    "access",
                    (t) => t.filename,
                    "optionalAccess",
                    (t) => t.includes,
                    "call",
                    (t) => t("/rrweb/src/"),
                  ])
                )
            )
          );
        })(e) &&
        !Cr([
          t,
          "access",
          (t) => t.getOptions,
          "call",
          (t) => t(),
          "access",
          (t) => t._experiments,
          "optionalAccess",
          (t) => t.captureExceptions,
        ])
      )
        return (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.log("[Replay] Ignoring error from rrweb internals", e),
          null
        );
      if (
        (("transaction" === e.type && "session" !== t.recordingMode) ||
          (e.tags = {
            ...e.tags,
            replayId: Cr([
              t,
              "access",
              (t) => t.session,
              "optionalAccess",
              (t) => t.id,
            ]),
          }),
        "transaction" === e.type &&
          e.contexts &&
          e.contexts.trace &&
          e.contexts.trace.trace_id)
      )
        return t.getContext().traceIds.add(e.contexts.trace.trace_id), e;
      e.type || t.getContext().errorIds.add(e.event_id);
      const n = Cr([
        e,
        "access",
        (t) => t.exception,
        "optionalAccess",
        (t) => t.values,
        "optionalAccess",
        (t) => t[0],
      ]);
      return (
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          Cr([
            t,
            "access",
            (t) => t.getOptions,
            "call",
            (t) => t(),
            "access",
            (t) => t._experiments,
            "optionalAccess",
            (t) => t.traceInternals,
          ]) &&
          (function (t) {
            const { category: e, level: n, message: r, ...i } = t;
            Yi({
              category: e || "console",
              level: n || "debug",
              message: `[debug]: ${r}`,
              ...i,
            });
          })({
            message: `Tagging event (${e.event_id}) - ${e.message} - ${
              Cr([n, "optionalAccess", (t) => t.type]) || "Unknown"
            }: ${Cr([n, "optionalAccess", (t) => t.value]) || "n/a"}`,
          }),
        "error" === t.recordingMode &&
          e.exception &&
          e.message !== Ra &&
          setTimeout(async () => {
            await t.flushImmediate(),
              t.stopRecording() &&
                ((t.recordingMode = "session"), t.startRecording());
          }),
        e
      );
    };
  }
  function Wc(t) {
    return (e) => {
      if (!t.isEnabled()) return;
      const n = (function (t) {
        const { from: e, to: n } = t,
          r = new Date().getTime() / 1e3;
        return {
          type: "navigation.push",
          start: r,
          end: r,
          name: n,
          data: { previous: e },
        };
      })(e);
      null !== n &&
        (t.getContext().urls.push(n.name),
        t.triggerUserActivity(),
        t.addUpdate(() => (zc(t, [n]), !1)));
    };
  }
  function Yc(t) {
    return (e) => {
      if (!t.isEnabled()) return;
      const n = (function (t) {
        if (t.xhr.__sentry_own_request__) return null;
        if (
          (t.startTimestamp &&
            ((t.xhr.__sentry_xhr__ = t.xhr.__sentry_xhr__ || {}),
            (t.xhr.__sentry_xhr__.startTimestamp = t.startTimestamp)),
          !t.endTimestamp)
        )
          return null;
        const {
          method: e,
          url: n,
          status_code: r,
        } = t.xhr.__sentry_xhr__ || {};
        return void 0 === n
          ? null
          : {
              type: "resource.xhr",
              name: n,
              start:
                (Cr([
                  t,
                  "access",
                  (t) => t.xhr,
                  "access",
                  (t) => t.__sentry_xhr__,
                  "optionalAccess",
                  (t) => t.startTimestamp,
                ]) || 0) / 1e3 || t.endTimestamp / 1e3,
              end: t.endTimestamp / 1e3,
              data: { method: e, statusCode: r },
            };
      })(e);
      null !== n && (Gc(t, n.name) || t.addUpdate(() => (zc(t, [n]), !0)));
    };
  }
  const Hc = ["name", "type", "startTime", "transferSize", "duration"];
  function qc(t) {
    return function (e) {
      return Hc.every((n) => t[n] === e[n]);
    };
  }
  function Vc(t) {
    const e = new PerformanceObserver((e) => {
      const n = (function (t, e) {
        const [n, r, i] = t.reduce(
            (t, e) => (
              "navigation" === e.entryType
                ? t[0].push(e)
                : "largest-contentful-paint" === e.entryType
                ? t[1].push(e)
                : t[2].push(e),
              t
            ),
            [[], [], []]
          ),
          o = [],
          a = [];
        let s = r.length ? r[r.length - 1] : void 0;
        return (
          e.forEach((t) => {
            if ("largest-contentful-paint" !== t.entryType)
              if ("navigation" !== t.entryType) o.push(t);
              else {
                const e = t;
                t.duration > 0 && !n.find(qc(e)) && !a.find(qc(e)) && a.push(e);
              }
            else (!s || s.startTime < t.startTime) && (s = t);
          }),
          [...(s ? [s] : []), ...n, ...i, ...o, ...a].sort(
            (t, e) => t.startTime - e.startTime
          )
        );
      })(t.performanceEvents, e.getEntries());
      t.performanceEvents = n;
    });
    return (
      [
        "element",
        "event",
        "first-input",
        "largest-contentful-paint",
        "layout-shift",
        "longtask",
        "navigation",
        "paint",
        "resource",
      ].forEach((t) => {
        try {
          e.observe({ type: t, buffered: !0 });
        } catch (t) {}
      }),
      e
    );
  }
  const Zc = {
    resource: function (t) {
      const {
        entryType: e,
        initiatorType: n,
        name: r,
        responseEnd: i,
        startTime: o,
        encodedBodySize: a,
        transferSize: s,
      } = t;
      if (["fetch", "xmlhttprequest"].includes(n)) return null;
      return {
        type: `${e}.${n}`,
        start: Kc(o),
        end: Kc(i),
        name: r,
        data: { size: s, encodedBodySize: a },
      };
    },
    paint: function (t) {
      const { duration: e, entryType: n, name: r, startTime: i } = t,
        o = Kc(i);
      return { type: n, name: r, start: o, end: o + e };
    },
    navigation: function (t) {
      const {
        entryType: e,
        name: n,
        duration: r,
        domComplete: i,
        startTime: o,
        transferSize: a,
        type: s,
      } = t;
      if (0 === r) return null;
      return {
        type: `${e}.${s}`,
        start: Kc(o),
        end: Kc(i),
        name: n,
        data: { size: a, duration: r },
      };
    },
    "largest-contentful-paint": function (t) {
      const { duration: e, entryType: n, startTime: r, size: i } = t,
        o = Kc(r);
      return {
        type: n,
        name: n,
        start: o,
        end: o + e,
        data: { duration: e, size: i, nodeId: jl.mirror.getId(t.element) },
      };
    },
  };
  function Xc(t) {
    return void 0 === Zc[t.entryType] ? null : Zc[t.entryType](t);
  }
  function Kc(t) {
    return ((vi || ka.performance.timeOrigin) + t) / 1e3;
  }
  class Qc {
    constructor() {
      this._events = [];
    }
    destroy() {
      this._events = [];
    }
    get length() {
      return this._events.length;
    }
    addEvent(t, e) {
      e ? (this._events = [t]) : this._events.push(t);
    }
    finish() {
      return new Promise((t) => {
        const e = this._events;
        (this._events = []), t(JSON.stringify(e));
      });
    }
  }
  class Jc {
    __init() {
      this._eventBufferItemLength = 0;
    }
    __init2() {
      this._id = 0;
    }
    constructor(t) {
      Jc.prototype.__init.call(this),
        Jc.prototype.__init2.call(this),
        (this._worker = t);
    }
    destroy() {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        hr.log("[Replay] Destroying compression worker"),
        Cr([
          this,
          "access",
          (t) => t._worker,
          "optionalAccess",
          (t) => t.terminate,
          "call",
          (t) => t(),
        ]),
        (this._worker = null);
    }
    get length() {
      return this._eventBufferItemLength;
    }
    async addEvent(t, e) {
      return (
        e &&
          (await this._postMessage({
            id: this._getAndIncrementId(),
            method: "init",
            args: [],
          })),
        this._sendEventToWorker(t)
      );
    }
    finish() {
      return this._finishRequest(this._getAndIncrementId());
    }
    _postMessage({ id: t, method: e, args: n }) {
      return new Promise((r, i) => {
        const o = ({ data: n }) => {
          if (n.method === e && n.id === t) {
            if (
              (Cr([
                this,
                "access",
                (t) => t._worker,
                "optionalAccess",
                (t) => t.removeEventListener,
                "call",
                (t) => t("message", o),
              ]),
              !n.success)
            )
              return (
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  hr.error("[Replay]", n.response),
                void i(new Error("Error in compression worker"))
              );
            r(n.response);
          }
        };
        let a;
        try {
          a = JSON.stringify(n);
        } catch (t) {
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.error("[Replay] Error when trying to stringify args", t),
            (a = "[]");
        }
        Cr([
          this,
          "access",
          (t) => t._worker,
          "optionalAccess",
          (t) => t.addEventListener,
          "call",
          (t) => t("message", o),
        ]),
          Cr([
            this,
            "access",
            (t) => t._worker,
            "optionalAccess",
            (t) => t.postMessage,
            "call",
            (n) => n({ id: t, method: e, args: a }),
          ]);
      });
    }
    _sendEventToWorker(t) {
      const e = this._postMessage({
        id: this._getAndIncrementId(),
        method: "addEvent",
        args: [t],
      });
      return this._eventBufferItemLength++, e;
    }
    async _finishRequest(t) {
      const e = this._postMessage({ id: t, method: "finish", args: [] });
      return (this._eventBufferItemLength = 0), e;
    }
    _getAndIncrementId() {
      return this._id++;
    }
  }
  function tu(t, e, n = +new Date()) {
    return null === t || void 0 === e || e < 0 || (0 !== e && t + e <= n);
  }
  function eu(t, e, n = +new Date()) {
    return (
      tu(t.started, $a, n) ||
      tu(Cr([t, "optionalAccess", (t) => t.lastActivity]), e, n)
    );
  }
  function nu(t) {
    if ("sessionStorage" in ka)
      try {
        ka.sessionStorage.setItem(Ta, JSON.stringify(t));
      } catch (t) {}
  }
  function ru(t) {
    return void 0 !== t && Math.random() < t;
  }
  function iu(t) {
    const e = new Date().getTime();
    return {
      id: t.id || Vr(),
      started: t.started || e,
      lastActivity: t.lastActivity || e,
      segmentId: t.segmentId || 0,
      sampled: t.sampled,
    };
  }
  function ou({
    sessionSampleRate: t,
    errorSampleRate: e,
    stickySession: n = !1,
  }) {
    const r = (function (t, e) {
        return ru(t) ? "session" : !!ru(e) && "error";
      })(t, e),
      i = iu({ sampled: r });
    return (
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        hr.log(`[Replay] Creating new session: ${i.id}`),
      n && nu(i),
      i
    );
  }
  function au({
    expiry: t,
    currentSession: e,
    stickySession: n,
    sessionSampleRate: r,
    errorSampleRate: i,
  }) {
    const o =
      e ||
      (n &&
        (function () {
          if (!("sessionStorage" in ka)) return null;
          try {
            const t = ka.sessionStorage.getItem(Ta);
            return t ? iu(JSON.parse(t)) : null;
          } catch (t) {
            return null;
          }
        })());
    if (o) {
      if (!eu(o, t)) return { type: "saved", session: o };
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        hr.log("[Replay] Session has expired");
    }
    return {
      type: "new",
      session: ou({
        stickySession: n,
        sessionSampleRate: r,
        errorSampleRate: i,
      }),
    };
  }
  let su;
  class lu {
    __init() {
      this.eventBuffer = null;
    }
    __init2() {
      this.performanceEvents = [];
    }
    __init3() {
      this.recordingMode = "session";
    }
    __init4() {
      this._performanceObserver = null;
    }
    __init5() {
      this._retryCount = 0;
    }
    __init6() {
      this._retryInterval = 5e3;
    }
    __init7() {
      this._flushLock = null;
    }
    __init8() {
      this._lastActivity = new Date().getTime();
    }
    __init9() {
      this._isEnabled = !1;
    }
    __init10() {
      this._isPaused = !1;
    }
    __init11() {
      this._hasInitializedCoreListeners = !1;
    }
    __init12() {
      this._stopRecording = null;
    }
    __init13() {
      this._context = {
        errorIds: new Set(),
        traceIds: new Set(),
        urls: [],
        earliestEvent: null,
        initialTimestamp: new Date().getTime(),
        initialUrl: "",
      };
    }
    constructor({ options: t, recordingOptions: e }) {
      lu.prototype.__init.call(this),
        lu.prototype.__init2.call(this),
        lu.prototype.__init3.call(this),
        lu.prototype.__init4.call(this),
        lu.prototype.__init5.call(this),
        lu.prototype.__init6.call(this),
        lu.prototype.__init7.call(this),
        lu.prototype.__init8.call(this),
        lu.prototype.__init9.call(this),
        lu.prototype.__init10.call(this),
        lu.prototype.__init11.call(this),
        lu.prototype.__init12.call(this),
        lu.prototype.__init13.call(this),
        lu.prototype.__init14.call(this),
        lu.prototype.__init15.call(this),
        lu.prototype.__init16.call(this),
        lu.prototype.__init17.call(this),
        lu.prototype.__init18.call(this),
        lu.prototype.__init19.call(this),
        (this._recordingOptions = e),
        (this._options = t),
        (this._debouncedFlush = Va(
          () => this.flush(),
          this._options.flushMinDelay,
          { maxWait: this._options.flushMaxDelay }
        ));
    }
    getContext() {
      return this._context;
    }
    isEnabled() {
      return this._isEnabled;
    }
    isPaused() {
      return this._isPaused;
    }
    getOptions() {
      return this._options;
    }
    start() {
      this.setInitialState(),
        this.loadSession({ expiry: Ia }),
        this.session
          ? this.session.sampled &&
            ("error" === this.session.sampled && (this.recordingMode = "error"),
            this.updateSessionActivity(),
            (this.eventBuffer = (function ({ useCompression: t }) {
              if (t && window.Worker) {
                const t = new Blob([
                    '/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */\nfunction t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},S=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let U=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var O=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);S(t,t.dyn_ltree,e-1),S(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},T={_tr_init:t=>{U||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),U=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:O,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var N=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const F=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var L=(t,e,a,i)=>{const n=F,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=T,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:J,Z_OK:W,Z_STREAM_END:q,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=N(t.adler,e,n,a):2===t.state.wrap&&(t.adler=L(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),W},Zt=t=>{const e=Rt(t);var a;return e===W&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},St=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var Ut={deflateInit:(t,e)=>St(t,e,ot,15,8,st),deflateInit2:St,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,W),deflate:(t,e)=>{if(Et(t)||e>J||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,W}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,W}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=L(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,W;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=L(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,W;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=L(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=L(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,W;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=L(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=L(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,W;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=L(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,W;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,W}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),W;if(2===i&&(e===Y?K(a):e!==J&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,W}return e!==X?W:a.wrap<=0?q:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?W:q)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):W},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=N(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,W},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Ot=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Tt=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Nt=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Nt=!1}const Ft=new Uint8Array(256);for(let t=0;t<256;t++)Ft[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Ft[254]=Ft[254]=1;var Lt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Ft[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Nt)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Ft[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Jt,Z_DEFLATED:Wt}=B;function qt(t){this.options=Ot({level:Xt,method:Wt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Jt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ut.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&Ut.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Lt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=Ut.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new qt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}qt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Lt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=Ut.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=Ut.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},qt.prototype.onData=function(t){this.chunks.push(t)},qt.prototype.onEnd=function(t){t===Yt&&(this.result=Tt(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:qt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,S,U,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(S=0,U=r[m]):r[m]>=u?(S=D[r[m]-u],U=A[r[m]-u]):(S=96,U=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|S<<16|U|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Se={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=L(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=L(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=L(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=L(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=L(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=L(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=L(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=L(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?L(a.check,n,f,r-f):N(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?L(a.check,n,f,t.next_out-f):N(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=N(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Ue=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Oe,Z_FINISH:Te,Z_OK:Ne,Z_STREAM_END:Fe,Z_NEED_DICT:Le,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Ot({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Se.inflateInit2(this.strm,e.windowBits);if(a!==Ne)throw new Error(I[a]);if(this.header=new Ue,Se.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Lt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Se.inflateSetDictionary(this.strm,e.dictionary),a!==Ne)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Te:Oe,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Se.inflate(a,r),s===Le&&n&&(s=Se.inflateSetDictionary(a,n),s===Ne?s=Se.inflate(a,r):s===Be&&(s=Le));a.avail_in>0&&s===Fe&&a.state.wrap>0&&0!==t[a.next_in];)Se.inflateReset(a),s=Se.inflate(a,r);switch(s){case Ie:case Be:case Le:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Fe))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Ne||0!==o){if(s===Fe)return s=Se.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Ne&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Tt(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=B;const Xe=new class{constructor(){this.added=0,this.init()}init(){this.added=0,this.deflate=new Ye,this.deflate.push("[",Ge.Z_NO_FLUSH)}addEvent(t){if(!t)return;const e=this.added>0?",":"";this.deflate.push(e+JSON.stringify(t),Ge.Z_NO_FLUSH),this.added++}finish(){if(this.deflate.push("]",Ge.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this.init(),t}},Je={init:()=>(Xe.init(),""),addEvent:t=>(Xe.addEvent(t),""),finish:()=>Xe.finish()};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,[i]=t.data.args?JSON.parse(t.data.args):[];if(e in Je&&"function"==typeof Je[e])try{const t=Je[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t}),console.error(t)}}));',
                  ]),
                  e = URL.createObjectURL(t);
                try {
                  ("undefined" == typeof __SENTRY_DEBUG__ ||
                    __SENTRY_DEBUG__) &&
                    hr.log("[Replay] Using compression worker");
                  const t = new Worker(e);
                  if (t) return new Jc(t);
                  ji(new Error("Unable to create compression worker"));
                } catch (t) {}
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  hr.log("[Replay] Falling back to simple event buffer");
              }
              return (
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  hr.log("[Replay] Using simple buffer"),
                new Qc()
              );
            })({ useCompression: Boolean(this._options.useCompression) })),
            this.addListeners(),
            (this._isEnabled = !0),
            this.startRecording())
          : this.handleException(new Error("No session found"));
    }
    startRecording() {
      try {
        this._stopRecording = jl({
          ...this._recordingOptions,
          ...("error" === this.recordingMode && { checkoutEveryNth: 6e4 }),
          emit: this.handleRecordingEmit,
        });
      } catch (t) {
        this.handleException(t);
      }
    }
    stopRecording() {
      return !!this._stopRecording && (this._stopRecording(), !0);
    }
    stop() {
      try {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.log("[Replay] Stopping Replays"),
          (this._isEnabled = !1),
          this.removeListeners(),
          Cr([
            this,
            "access",
            (t) => t._stopRecording,
            "optionalCall",
            (t) => t(),
          ]),
          Cr([
            this,
            "access",
            (t) => t.eventBuffer,
            "optionalAccess",
            (t) => t.destroy,
            "call",
            (t) => t(),
          ]),
          (this.eventBuffer = null);
      } catch (t) {
        this.handleException(t);
      }
    }
    pause() {
      this._isPaused = !0;
      try {
        this._stopRecording &&
          (this._stopRecording(), (this._stopRecording = void 0));
      } catch (t) {
        this.handleException(t);
      }
    }
    resume() {
      (this._isPaused = !1), this.startRecording();
    }
    handleException(t) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        hr.error("[Replay]", t),
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          this._options._experiments &&
          this._options._experiments.captureExceptions &&
          ji(t);
    }
    clearSession() {
      try {
        !(function () {
          if ("sessionStorage" in ka)
            try {
              ka.sessionStorage.removeItem(Ta);
            } catch (t) {}
        })(),
          (this.session = void 0);
      } catch (t) {
        this.handleException(t);
      }
    }
    loadSession({ expiry: t }) {
      const { type: e, session: n } = au({
        expiry: t,
        stickySession: Boolean(this._options.stickySession),
        currentSession: this.session,
        sessionSampleRate: this._options.sessionSampleRate,
        errorSampleRate: this._options.errorSampleRate,
      });
      "new" === e && this.setInitialState(),
        n.id !==
          Cr([
            this,
            "access",
            (t) => t.session,
            "optionalAccess",
            (t) => t.id,
          ]) &&
          (n.previousSessionId = Cr([
            this,
            "access",
            (t) => t.session,
            "optionalAccess",
            (t) => t.id,
          ])),
        (this.session = n);
    }
    setInitialState() {
      const t = `${ka.location.pathname}${ka.location.hash}${ka.location.search}`,
        e = `${ka.location.origin}${t}`;
      (this.performanceEvents = []),
        this.clearContext(),
        (this._context.initialUrl = e),
        (this._context.initialTimestamp = new Date().getTime()),
        this._context.urls.push(e);
    }
    addListeners() {
      try {
        if (
          (ka.document.addEventListener(
            "visibilitychange",
            this.handleVisibilityChange
          ),
          ka.addEventListener("blur", this.handleWindowBlur),
          ka.addEventListener("focus", this.handleWindowFocus),
          (function (t) {
            const e = Bi().getClient();
            if (!e) return;
            const n = e.recordDroppedEvent.bind(e);
            (e.recordDroppedEvent = (e, r, i) => (
              i && i.event_id && t.delete(i.event_id), n(e, r, i)
            )),
              (su = n);
          })(this._context.errorIds),
          !this._hasInitializedCoreListeners)
        ) {
          Cr([
            Bi().getScope(),
            "optionalAccess",
            (t) => t.addScopeListener,
            "call",
            (t) => t(this.handleCoreBreadcrumbListener("scope")),
          ]),
            Pr("dom", this.handleCoreBreadcrumbListener("dom")),
            Pr(
              "fetch",
              ((t = this),
              (e) => {
                if (!t.isEnabled()) return;
                const n = (function (t) {
                  if (!t.endTimestamp) return null;
                  const {
                    startTimestamp: e,
                    endTimestamp: n,
                    fetchData: r,
                    response: i,
                  } = t;
                  return {
                    type: "resource.fetch",
                    start: e / 1e3,
                    end: n / 1e3,
                    name: r.url,
                    data: { method: r.method, statusCode: i.status },
                  };
                })(e);
                null !== n &&
                  (Gc(t, n.name) || t.addUpdate(() => (zc(t, [n]), !0)));
              })
            ),
            Pr("xhr", Yc(this)),
            Pr("history", Wc(this)),
            Ai(jc(this)),
            (this._hasInitializedCoreListeners = !0);
        }
      } catch (t) {
        this.handleException(t);
      }
      var t;
      "_performanceObserver" in ka && (this._performanceObserver = Vc(this));
    }
    removeListeners() {
      try {
        ka.document.removeEventListener(
          "visibilitychange",
          this.handleVisibilityChange
        ),
          ka.removeEventListener("blur", this.handleWindowBlur),
          ka.removeEventListener("focus", this.handleWindowFocus),
          (function () {
            const t = Bi().getClient();
            t && su && (t.recordDroppedEvent = su);
          })(),
          this._performanceObserver &&
            (this._performanceObserver.disconnect(),
            (this._performanceObserver = null));
      } catch (t) {
        this.handleException(t);
      }
    }
    addUpdate(t) {
      const e = Cr([t, "optionalCall", (t) => t()]);
      "error" !== this.recordingMode && !0 !== e && this._debouncedFlush();
    }
    __init14() {
      this.handleRecordingEmit = (t, e) => {
        this.checkAndHandleExpiredSession()
          ? this.addUpdate(
              () => (
                "error" === this.recordingMode &&
                  2 === t.type &&
                  this.setInitialState(),
                Fc(this, t, e),
                2 === t.type &&
                  (Cr([
                    this,
                    "access",
                    (t) => t.session,
                    "optionalAccess",
                    (t) => t.previousSessionId,
                  ]) ||
                    ("error" === this.recordingMode &&
                      this.session &&
                      this._context.earliestEvent &&
                      ((this.session.started = this._context.earliestEvent),
                      this._maybeSaveSession()),
                    "session" === this.recordingMode && this.flushImmediate()),
                  !0)
              )
            )
          : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.error("[Replay] Received replay event after session expired.");
      };
    }
    __init15() {
      this.handleVisibilityChange = () => {
        "visible" === ka.document.visibilityState
          ? this.doChangeToForegroundTasks()
          : this.doChangeToBackgroundTasks();
      };
    }
    __init16() {
      this.handleWindowBlur = () => {
        const t = Oc({ category: "ui.blur" });
        this.doChangeToBackgroundTasks(t);
      };
    }
    __init17() {
      this.handleWindowFocus = () => {
        const t = Oc({ category: "ui.focus" });
        this.doChangeToForegroundTasks(t);
      };
    }
    __init18() {
      this.handleCoreBreadcrumbListener = (t) => (e) => {
        if (!this._isEnabled) return;
        const n = Bc(t, e);
        null !== n &&
          "sentry.transaction" !== n.category &&
          ("ui.click" === n.category
            ? this.triggerUserActivity()
            : this.checkAndHandleExpiredSession(),
          this.addUpdate(
            () => (
              Fc(this, {
                type: Cs.Custom,
                timestamp: 1e3 * (n.timestamp || 0),
                data: { tag: "breadcrumb", payload: n },
              }),
              "console" === n.category
            )
          ));
      };
    }
    doChangeToBackgroundTasks(t) {
      if (!this.session) return;
      const e = eu(this.session, Na);
      t && !e && this.createCustomBreadcrumb(t), this.conditionalFlush();
    }
    doChangeToForegroundTasks(t) {
      if (!this.session) return;
      this.checkAndHandleExpiredSession({ expiry: Na })
        ? t && this.createCustomBreadcrumb(t)
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.log(
            "[Replay] Document has become active, but session has expired"
          );
    }
    triggerFullSnapshot() {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
        hr.log("[Replay] Taking full rrweb snapshot"),
        jl.takeFullSnapshot(!0);
    }
    updateUserActivity(t = new Date().getTime()) {
      this._lastActivity = t;
    }
    updateSessionActivity(t = new Date().getTime()) {
      this.session &&
        ((this.session.lastActivity = t), this._maybeSaveSession());
    }
    triggerUserActivity() {
      if ((this.updateUserActivity(), !this._stopRecording))
        return this.loadSession({ expiry: Ia }), void this.resume();
      this.checkAndHandleExpiredSession(), this.updateSessionActivity();
    }
    createCustomBreadcrumb(t) {
      this.addUpdate(() => {
        Fc(this, {
          type: Cs.Custom,
          timestamp: t.timestamp || 0,
          data: { tag: "breadcrumb", payload: t },
        });
      });
    }
    addPerformanceEntries() {
      const t = [...this.performanceEvents];
      (this.performanceEvents = []),
        zc(
          this,
          (function (t) {
            return t.map(Xc).filter(Boolean);
          })(t)
        );
    }
    checkAndHandleExpiredSession({ expiry: t = 3e5 } = {}) {
      const e = Cr([
        this,
        "access",
        (t) => t.session,
        "optionalAccess",
        (t) => t.id,
      ]);
      if (this._lastActivity && tu(this._lastActivity, $a))
        return void this.pause();
      this.loadSession({ expiry: t });
      return (
        e ===
          Cr([
            this,
            "access",
            (t) => t.session,
            "optionalAccess",
            (t) => t.id,
          ]) || (this.triggerFullSnapshot(), !1)
      );
    }
    conditionalFlush() {
      "error" !== this.recordingMode && this.flushImmediate();
    }
    clearContext() {
      this._context.errorIds.clear(),
        this._context.traceIds.clear(),
        (this._context.urls = []),
        (this._context.earliestEvent = null);
    }
    popEventContext() {
      this._context.earliestEvent &&
        this._context.earliestEvent < this._context.initialTimestamp &&
        (this._context.initialTimestamp = this._context.earliestEvent);
      const t = {
        initialTimestamp: this._context.initialTimestamp,
        initialUrl: this._context.initialUrl,
        errorIds: Array.from(this._context.errorIds).filter(Boolean),
        traceIds: Array.from(this._context.traceIds).filter(Boolean),
        urls: this._context.urls,
      };
      return this.clearContext(), t;
    }
    async runFlush() {
      if (this.session) {
        if (
          (await this.addPerformanceEntries(),
          Cr([
            this,
            "access",
            (t) => t.eventBuffer,
            "optionalAccess",
            (t) => t.length,
          ]))
        ) {
          await (function (t) {
            try {
              zc(t, [createMemoryEntry(ka.performance.memory)]);
            } catch (t) {}
          })(this);
          try {
            const t = await this.eventBuffer.finish(),
              e = this.session.id,
              n = this.popEventContext(),
              r = this.session.segmentId++;
            this._maybeSaveSession(),
              await this.sendReplay({
                replayId: e,
                events: t,
                segmentId: r,
                includeReplayStartTimestamp: 0 === r,
                eventContext: n,
              });
          } catch (t) {
            this.handleException(t);
          }
        }
      } else
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.error("[Replay] No session found to flush.");
    }
    __init19() {
      this.flush = async () => {
        if (this._isEnabled)
          if (this.checkAndHandleExpiredSession())
            if (
              Cr([
                this,
                "access",
                (t) => t.session,
                "optionalAccess",
                (t) => t.id,
              ])
            ) {
              if (
                (Cr([
                  this,
                  "access",
                  (t) => t._debouncedFlush,
                  "optionalAccess",
                  (t) => t.cancel,
                  "call",
                  (t) => t(),
                ]),
                !this._flushLock)
              )
                return (
                  (this._flushLock = this.runFlush()),
                  await this._flushLock,
                  void (this._flushLock = null)
                );
              try {
                await this._flushLock;
              } catch (t) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  hr.error(t);
              } finally {
                this._debouncedFlush();
              }
            } else
              ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                hr.error("[Replay] No session found to flush.");
          else
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              hr.error(
                "[Replay] Attempting to finish replay event after session expired."
              );
      };
    }
    flushImmediate() {
      return this._debouncedFlush(), this._debouncedFlush.flush();
    }
    async sendReplayRequest({
      events: t,
      replayId: e,
      segmentId: n,
      includeReplayStartTimestamp: r,
      eventContext: i,
    }) {
      const o = (function ({ events: t, headers: e }) {
          let n;
          const r = `${JSON.stringify(e)}\n`;
          if ("string" == typeof t) n = `${r}${t}`;
          else {
            const e = new TextEncoder().encode(r);
            (n = new Uint8Array(e.length + t.length)),
              n.set(e),
              n.set(t, e.length);
          }
          return n;
        })({ events: t, headers: { segment_id: n } }),
        { urls: a, errorIds: s, traceIds: l, initialTimestamp: c } = i,
        u = new Date().getTime(),
        d = Bi(),
        h = d.getClient(),
        p = d.getScope(),
        f = h && h.getTransport(),
        m = Cr([h, "optionalAccess", (t) => t.getDsn, "call", (t) => t()]);
      if (!(h && p && f && m)) return;
      const g = {
          type: Ca,
          ...(r ? { replay_start_timestamp: c / 1e3 } : {}),
          timestamp: u / 1e3,
          error_ids: s,
          trace_ids: l,
          urls: a,
          replay_id: e,
          segment_id: n,
        },
        _ = await (async function ({
          client: t,
          scope: e,
          replayId: n,
          event: r,
        }) {
          const i = await t._prepareEvent(r, { event_id: n }, e),
            o = t.getOptions() && t.getOptions()._metadata,
            { name: a } = (o && o.sdk) || {};
          return (i.sdk = { ...i.sdk, version: "7.27.0", name: a }), i;
        })({ scope: p, client: h, replayId: e, event: g });
      _.tags = {
        ..._.tags,
        sessionSampleRate: this._options.sessionSampleRate,
        errorSampleRate: this._options.errorSampleRate,
        replayType: Cr([
          this,
          "access",
          (t) => t.session,
          "optionalAccess",
          (t) => t.sampled,
        ]),
      };
      const v = (function (t, e, n, r) {
        return yi(Ri(t, Ci(t), r, n), [
          [{ type: "replay_event" }, t],
          [{ type: "replay_recording", length: e.length }, e],
        ]);
      })(_, o, m, h.getOptions().tunnel);
      try {
        return f.send(v);
      } catch (t) {
        throw new Error(Ra);
      }
    }
    resetRetries() {
      (this._retryCount = 0), (this._retryInterval = 5e3);
    }
    async sendReplay({
      replayId: t,
      events: e,
      segmentId: n,
      includeReplayStartTimestamp: r,
      eventContext: i,
    }) {
      if (e.length)
        try {
          return (
            await this.sendReplayRequest({
              events: e,
              replayId: t,
              segmentId: n,
              includeReplayStartTimestamp: r,
              eventContext: i,
            }),
            this.resetRetries(),
            !0
          );
        } catch (o) {
          if (
            (Hi("Replays", { _retryCount: this._retryCount }),
            this.handleException(o),
            this._retryCount >= 3)
          )
            throw new Error("Unable to send Replay - max retries exceeded");
          return (
            (this._retryCount = this._retryCount + 1),
            (this._retryInterval = this._retryCount * this._retryInterval),
            await new Promise((o, a) => {
              setTimeout(async () => {
                try {
                  await this.sendReplay({
                    replayId: t,
                    events: e,
                    segmentId: n,
                    includeReplayStartTimestamp: r,
                    eventContext: i,
                  }),
                    o(!0);
                } catch (t) {
                  a(t);
                }
              }, this._retryInterval);
            })
          );
        }
    }
    _maybeSaveSession() {
      this.session && this._options.stickySession && nu(this.session);
    }
  }
  function cu() {
    return "undefined" != typeof window && !ei();
  }
  const uu =
    "img,image,svg,path,rect,area,video,object,picture,embed,map,audio";
  let du = !1;
  class hu {
    static __initStatic() {
      this.id = "Replay";
    }
    __init() {
      this.name = hu.id;
    }
    get _isInitialized() {
      return du;
    }
    set _isInitialized(t) {
      du = t;
    }
    constructor({
      flushMinDelay: t = 5e3,
      flushMaxDelay: e = 15e3,
      initialFlushDelay: n = 5e3,
      stickySession: r = !0,
      useCompression: i = !0,
      sessionSampleRate: o,
      errorSampleRate: a,
      maskAllText: s = !0,
      maskAllInputs: l = !0,
      blockAllMedia: c = !0,
      _experiments: u = {},
      blockClass: d = "sentry-block",
      ignoreClass: h = "sentry-ignore",
      maskTextClass: p = "sentry-mask",
      blockSelector: f = "[data-sentry-block]",
      ...m
    } = {}) {
      if (
        (hu.prototype.__init.call(this),
        (this.recordingOptions = {
          maskAllInputs: l,
          blockClass: d,
          ignoreClass: h,
          maskTextClass: p,
          blockSelector: f,
          ...m,
        }),
        (this.options = {
          flushMinDelay: t,
          flushMaxDelay: e,
          stickySession: r,
          initialFlushDelay: n,
          sessionSampleRate: 0.1,
          errorSampleRate: 1,
          useCompression: i,
          maskAllText: s,
          blockAllMedia: c,
          _experiments: u,
        }),
        "number" == typeof o &&
          (console.warn(
            `[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${o} })`
          ),
          (this.options.sessionSampleRate = o)),
        "number" == typeof a &&
          (console.warn(
            `[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${a} })`
          ),
          (this.options.errorSampleRate = a)),
        this.options.maskAllText &&
          (this.recordingOptions.maskTextSelector = "body *:not(style,script)"),
        this.options.blockAllMedia &&
          (this.recordingOptions.blockSelector = this.recordingOptions
            .blockSelector
            ? `${this.recordingOptions.blockSelector},${uu}`
            : uu),
        cu() && this._isInitialized)
      )
        throw new Error(
          "Multiple Sentry Session Replay instances are not supported"
        );
      this._isInitialized = !0;
    }
    setupOnce() {
      cu() && (this._setup(), setTimeout(() => this.start()));
    }
    start() {
      this._replay && this._replay.start();
    }
    stop() {
      this._replay && this._replay.stop();
    }
    _setup() {
      this._loadReplayOptionsFromClient(),
        (this._replay = new lu({
          options: this.options,
          recordingOptions: this.recordingOptions,
        }));
    }
    _loadReplayOptionsFromClient() {
      const t = Bi().getClient(),
        e = t && t.getOptions();
      e &&
        "number" == typeof e.replaysSessionSampleRate &&
        (this.options.sessionSampleRate = e.replaysSessionSampleRate),
        e &&
          "number" == typeof e.replaysOnErrorSampleRate &&
          (this.options.errorSampleRate = e.replaysOnErrorSampleRate);
    }
  }
  hu.__initStatic();
  let pu = {};
  po.Sentry && po.Sentry.Integrations && (pu = po.Sentry.Integrations);
  const fu = { ...pu, ...ho, ...wa };
  var mu = Object.freeze({
    __proto__: null,
    Integrations: fu,
    FunctionToString: so,
    Hub: Oi,
    InboundFilters: co,
    SDK_VERSION: oo,
    Scope: Li,
    addBreadcrumb: Yi,
    addGlobalEventProcessor: Ai,
    captureEvent: Wi,
    captureException: ji,
    captureMessage: function (t, e) {
      const n = "string" == typeof e ? e : void 0,
        r = "string" != typeof e ? { captureContext: e } : void 0;
      return Bi().captureMessage(t, n, r);
    },
    configureScope: function (t) {
      Bi().configureScope(t);
    },
    createTransport: ro,
    getCurrentHub: Bi,
    getHubFromCarrier: zi,
    makeMain: Pi,
    setContext: Hi,
    setExtra: function (t, e) {
      Bi().setExtra(t, e);
    },
    setExtras: function (t) {
      Bi().setExtras(t);
    },
    setTag: function (t, e) {
      Bi().setTag(t, e);
    },
    setTags: function (t) {
      Bi().setTags(t);
    },
    setUser: function (t) {
      Bi().setUser(t);
    },
    startTransaction: function (t, e) {
      return Bi().startTransaction({ ...t }, e);
    },
    withScope: qi,
    WINDOW: po,
    Replay: hu,
    BrowserClient: Ao,
    makeFetchTransport: Oo,
    makeXHRTransport: Uo,
    chromeStackLineParser: Go,
    defaultStackLineParsers: Qo,
    defaultStackParser: Jo,
    geckoStackLineParser: Yo,
    opera10StackLineParser: Zo,
    opera11StackLineParser: Ko,
    winjsStackLineParser: qo,
    eventFromException: Eo,
    eventFromMessage: xo,
    close: function (t) {
      const e = Bi().getClient();
      return e
        ? e.close(t)
        : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.warn("Cannot flush events and disable SDK. No client defined."),
          ai(!1));
    },
    defaultIntegrations: Sa,
    flush: function (t) {
      const e = Bi().getClient();
      return e
        ? e.flush(t)
        : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            hr.warn("Cannot flush events. No client defined."),
          ai(!1));
    },
    forceLoad: function () {},
    init: Ea,
    lastEventId: function () {
      return Bi().lastEventId();
    },
    onLoad: function (t) {
      t();
    },
    showReportDialog: function (t = {}, e = Bi()) {
      if (!po.document)
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.error("Global document not defined in showReportDialog call")
        );
      const { client: n, scope: r } = e.getStackTop(),
        i = t.dsn || (n && n.getDsn());
      if (!i)
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.error("DSN not configured for showReportDialog call")
        );
      r && (t.user = { ...r.getUser(), ...t.user }),
        t.eventId || (t.eventId = e.lastEventId());
      const o = po.document.createElement("script");
      (o.async = !0),
        (o.src = (function (t, e) {
          const n = lr(t),
            r = `${Vi(n)}embed/error-page/`;
          let i = `dsn=${ar(n)}`;
          for (const t in e)
            if ("dsn" !== t)
              if ("user" === t) {
                const t = e.user;
                if (!t) continue;
                t.name && (i += `&name=${encodeURIComponent(t.name)}`),
                  t.email && (i += `&email=${encodeURIComponent(t.email)}`);
              } else
                i += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
          return `${r}?${i}`;
        })(i, t)),
        t.onLoad && (o.onload = t.onLoad);
      const a = po.document.head || po.document.body;
      a
        ? a.appendChild(o)
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          hr.error(
            "Not injecting report dialog. No injection point found in HTML"
          );
    },
    wrap: function (t) {
      return _o(t)();
    },
    GlobalHandlers: ea,
    TryCatch: la,
    Breadcrumbs: Io,
    LinkedErrors: pa,
    HttpContext: ma,
    Dedupe: ga,
  });
  const gu = "PROTOCOL_ERROR",
    _u = "NETWORK_ERROR",
    vu = "FULL_PAGE_SERVER_ERROR",
    yu = "-32003",
    bu = "429",
    wu = "403",
    Su = "1045601",
    Eu = "1042902",
    xu = "TRANSLATED_INPUT_NOT_SET",
    ku = "HTML_NODE_CHAR_LENGTH_TOO_LONG",
    Tu = "FREE_ACCOUNT_LIMIT_EXCEEDED",
    Cu = "ANONYMOUS_LIMIT_EXCEEDED",
    Ru = mn(!1);
  function Iu(t) {
    let e, n, r;
    return {
      c() {
        (e = R("button")),
          (e.innerHTML =
            '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="#DA5E5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
          O(e, "class", "dl-close-icon svelte-qdqw71");
      },
      m(i, a) {
        k(i, e, a),
          n ||
            ((r = M(e, "click", function () {
              o(t[0]) && t[0].apply(this, arguments);
            })),
            (n = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && T(e), (n = !1), r();
      },
    };
  }
  function Nu(t) {
    let e, n, r, i, o, a;
    const s = t[2].default,
      l = c(s, t, t[1], null);
    let u = t[0] && Iu(t);
    return {
      c() {
        (e = R("div")),
          (n = R("div")),
          (n.innerHTML =
            '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L10 10M10 10L12 8M10 10L8 8M10 10L12 12M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#DA5E5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
          (r = $()),
          (i = R("div")),
          l && l.c(),
          (o = $()),
          u && u.c(),
          O(n, "class", "icon-container svelte-qdqw71"),
          O(i, "class", "message svelte-qdqw71"),
          O(e, "class", "error-msg svelte-qdqw71");
      },
      m(t, s) {
        k(t, e, s),
          S(e, n),
          S(e, r),
          S(e, i),
          l && l.m(i, null),
          S(e, o),
          u && u.m(e, null),
          (a = !0);
      },
      p(t, [n]) {
        l &&
          l.p &&
          (!a || 2 & n) &&
          h(l, s, t, t[1], a ? d(s, t[1], n, null) : p(t[1]), null),
          t[0]
            ? u
              ? u.p(t, n)
              : ((u = Iu(t)), u.c(), u.m(e, null))
            : u && (u.d(1), (u = null));
      },
      i(t) {
        a || (St(l, t), (a = !0));
      },
      o(t) {
        Et(l, t), (a = !1);
      },
      d(t) {
        t && T(e), l && l.d(t), u && u.d();
      },
    };
  }
  function $u(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e,
      { close: o } = e;
    return (
      (t.$$set = (t) => {
        "close" in t && n(0, (o = t.close)),
          "$$scope" in t && n(1, (i = t.$$scope));
      }),
      [o, i, r]
    );
  }
  class Lu extends Lt {
    constructor(t) {
      super(), $t(this, t, $u, Nu, a, { close: 0 });
    }
  }
  function Mu(t) {
    let e, n, r;
    return {
      c() {
        (e = R("button")),
          (e.innerHTML =
            '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="#ECBA82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
          O(e, "class", "dl-close-icon svelte-1jf0jj0");
      },
      m(i, a) {
        k(i, e, a),
          n ||
            ((r = M(e, "click", function () {
              o(t[0]) && t[0].apply(this, arguments);
            })),
            (n = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && T(e), (n = !1), r();
      },
    };
  }
  function Au(t) {
    let e, n, r, i, o, a;
    const s = t[2].default,
      l = c(s, t, t[1], null);
    let u = t[0] && Mu(t);
    return {
      c() {
        (e = R("div")),
          (n = R("div")),
          (n.innerHTML =
            '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#ECBA82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),
          (r = $()),
          (i = R("div")),
          l && l.c(),
          (o = $()),
          u && u.c(),
          O(n, "class", "icon-container svelte-1jf0jj0"),
          O(i, "class", "message svelte-1jf0jj0"),
          O(e, "class", "warn-msg svelte-1jf0jj0");
      },
      m(t, s) {
        k(t, e, s),
          S(e, n),
          S(e, r),
          S(e, i),
          l && l.m(i, null),
          S(e, o),
          u && u.m(e, null),
          (a = !0);
      },
      p(t, [n]) {
        l &&
          l.p &&
          (!a || 2 & n) &&
          h(l, s, t, t[1], a ? d(s, t[1], n, null) : p(t[1]), null),
          t[0]
            ? u
              ? u.p(t, n)
              : ((u = Mu(t)), u.c(), u.m(e, null))
            : u && (u.d(1), (u = null));
      },
      i(t) {
        a || (St(l, t), (a = !0));
      },
      o(t) {
        Et(l, t), (a = !1);
      },
      d(t) {
        t && T(e), l && l.d(t), u && u.d();
      },
    };
  }
  function Du(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e,
      { close: o } = e;
    return (
      (t.$$set = (t) => {
        "close" in t && n(0, (o = t.close)),
          "$$scope" in t && n(1, (i = t.$$scope));
      }),
      [o, i, r]
    );
  }
  class Ou extends Lt {
    constructor(t) {
      super(), $t(this, t, Du, Au, a, { close: 0 });
    }
  }
  function Uu(e) {
    let n;
    return {
      c() {
        (n = R("span")),
          (n.textContent = `${chrome.i18n.getMessage(
            "error_message_generic_error"
          )}`),
          O(n, "data-qa", "error-message-generic");
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  class Pu extends Lt {
    constructor(t) {
      super(), $t(this, t, null, Uu, a, {});
    }
  }
  function Bu(e) {
    let n;
    return {
      c() {
        (n = R("span")),
          (n.textContent = `${chrome.i18n.getMessage(
            "error_message_internet_connection"
          )}`);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  class Fu extends Lt {
    constructor(t) {
      super(), $t(this, t, null, Bu, a, {});
    }
  }
  function zu(e) {
    let n;
    return {
      c() {
        (n = R("span")),
          (n.textContent = `${chrome.i18n.getMessage(
            "full_page_translation_error_service_not_available"
          )}`);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  class Gu extends Lt {
    constructor(t) {
      super(), $t(this, t, null, zu, a, {});
    }
  }
  function ju(e) {
    let n, r, i, o, a, s;
    return {
      c() {
        (n = R("div")),
          (r = R("div")),
          (r.textContent = `${chrome.i18n.getMessage(
            "warning_message_different_subscription_needed"
          )}`),
          (i = $()),
          (o = R("div")),
          (o.textContent = `${chrome.i18n.getMessage("link_get_pro_license")}`),
          O(o, "class", "link svelte-1mpkjv7"),
          O(n, "class", "container svelte-1mpkjv7");
      },
      m(t, l) {
        k(t, n, l),
          S(n, r),
          S(n, i),
          S(n, o),
          a || ((s = M(o, "click", e[0])), (a = !0));
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && T(n), (a = !1), s();
      },
    };
  }
  function Wu(t) {
    return [
      function () {
        Re({
          action: "dlExternalURLRedirect",
          payload: { destination: $e, utmContent: "warning_user_unauthorised" },
        });
      },
    ];
  }
  class Yu extends Lt {
    constructor(t) {
      super(), $t(this, t, Wu, ju, a, {});
    }
  }
  function Hu(e) {
    let n, r, i, o, a, s;
    return {
      c() {
        (n = R("div")),
          (r = R("div")),
          (r.textContent = `${chrome.i18n.getMessage(
            "warning_message_free_usage_limit_reached"
          )}`),
          (i = $()),
          (o = R("div")),
          (o.textContent = `${chrome.i18n.getMessage("link_try_deepl")}`),
          O(o, "class", "link svelte-1mpkjv7"),
          O(n, "class", "container svelte-1mpkjv7");
      },
      m(t, l) {
        k(t, n, l),
          S(n, r),
          S(n, i),
          S(n, o),
          a || ((s = M(o, "click", e[0])), (a = !0));
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && T(n), (a = !1), s();
      },
    };
  }
  function qu(t) {
    return [
      function () {
        Re({
          action: "dlExternalURLRedirect",
          payload: { destination: $e, utmContent: "warning_user_blocked" },
        });
      },
    ];
  }
  class Vu extends Lt {
    constructor(t) {
      super(), $t(this, t, qu, Hu, a, {});
    }
  }
  function Zu(e) {
    let n;
    return {
      c() {
        (n = R("span")),
          (n.textContent = `${chrome.i18n.getMessage(
            "error_message_please_login"
          )}`);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  class Xu extends Lt {
    constructor(t) {
      super(), $t(this, t, null, Zu, a, {});
    }
  }
  function Ku(t, e, n) {
    let r = { block: "end", position: t.length };
    return (
      e.forEach((e) => {
        const i = t.indexOf(`<${e}>`, n);
        i > -1 && i < r.position && (r = { block: e, position: i });
      }),
      [r.block, r.position]
    );
  }
  function Qu(t, e = []) {
    const n = [];
    let r = 0,
      i = !1;
    for (; !i; ) {
      const [o, a] = Ku(t, e, r);
      if (
        ("end" === o && (i = !0),
        r < a && n.push({ block: "main", text: t.substring(r, a) }),
        i)
      )
        break;
      const s = t.indexOf(`</${o}>`, a);
      -1 === s
        ? (n.push({ block: o, text: t.substring(a + `<${o}>`.length) }),
          (i = !0))
        : (n.push({ block: o, text: t.substring(a + `<${o}>`.length, s) }),
          (r = s + `</${o}>`.length));
    }
    return n;
  }
  function Ju(t, e, n) {
    const r = t.slice();
    return (r[1] = e[n]), r;
  }
  function td(e) {
    let n,
      r = e[1].text + "";
    return {
      c() {
        n = N(r);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function ed(e) {
    let n,
      r,
      i,
      o,
      a,
      s = e[1].text + "";
    return {
      c() {
        (n = R("span")),
          (r = N(s)),
          (i = $()),
          O(n, "class", "link svelte-1mpkjv7");
      },
      m(t, s) {
        k(t, n, s),
          S(n, r),
          S(n, i),
          o || ((a = M(n, "click", e[0])), (o = !0));
      },
      p: t,
      d(t) {
        t && T(n), (o = !1), a();
      },
    };
  }
  function nd(t) {
    let e;
    let n = (function (t, e) {
        return "deeplSupportLink" === t[1].block ? ed : td;
      })(t),
      r = n(t);
    return {
      c() {
        r.c(), (e = L());
      },
      m(t, n) {
        r.m(t, n), k(t, e, n);
      },
      p(t, e) {
        r.p(t, e);
      },
      d(t) {
        r.d(t), t && T(e);
      },
    };
  }
  function rd(e) {
    let n,
      r = Qu(chrome.i18n.getMessage("warning_message_account_limit_reached"), [
        "deeplSupportLink",
      ]),
      i = [];
    for (let t = 0; t < r.length; t += 1) i[t] = nd(Ju(e, r, t));
    return {
      c() {
        n = R("div");
        for (let t = 0; t < i.length; t += 1) i[t].c();
        O(n, "class", "container svelte-1mpkjv7");
      },
      m(t, e) {
        k(t, n, e);
        for (let t = 0; t < i.length; t += 1) i[t].m(n, null);
      },
      p(t, [e]) {
        if (1 & e) {
          let o;
          for (
            r = Qu(
              chrome.i18n.getMessage("warning_message_account_limit_reached"),
              ["deeplSupportLink"]
            ),
              o = 0;
            o < r.length;
            o += 1
          ) {
            const a = Ju(t, r, o);
            i[o] ? i[o].p(a, e) : ((i[o] = nd(a)), i[o].c(), i[o].m(n, null));
          }
          for (; o < i.length; o += 1) i[o].d(1);
          i.length = r.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && T(n), C(i, t);
      },
    };
  }
  function id(t) {
    return [
      function () {
        Re({ action: "dlExternalURLRedirect", payload: { destination: Ae } });
      },
    ];
  }
  class od extends Lt {
    constructor(t) {
      super(), $t(this, t, id, rd, a, {});
    }
  }
  function ad(e) {
    let n;
    return {
      c() {
        (n = R("span")),
          (n.textContent = `${chrome.i18n.getMessage(
            "error_message_technical_issue"
          )}`);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  class sd extends Lt {
    constructor(t) {
      super(), $t(this, t, null, ad, a, {});
    }
  }
  function ld(e) {
    let n;
    return {
      c() {
        (n = R("span")),
          (n.textContent = `${chrome.i18n.getMessage(
            "error_message_session_expired"
          )}`);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  class cd extends Lt {
    constructor(t) {
      super(), $t(this, t, null, ld, a, {});
    }
  }
  function ud(e) {
    let n;
    return {
      c() {
        (n = R("span")),
          (n.textContent = `${chrome.i18n.getMessage(
            "full_page_translation_error_exceeds_char_limit"
          )}`);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  class dd extends Lt {
    constructor(t) {
      super(), $t(this, t, null, ud, a, {});
    }
  }
  function hd(t, e, n) {
    const r = t.slice();
    return (r[5] = e[n]), r;
  }
  function pd(t) {
    let e,
      n = t[5].text + "";
    return {
      c() {
        e = N(n);
      },
      m(t, n) {
        k(t, e, n);
      },
      p(t, r) {
        4 & r && n !== (n = t[5].text + "") && U(e, n);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function fd(t) {
    let e,
      n,
      r = t[5].text + "";
    return {
      c() {
        (e = R("strong")), (n = N(r));
      },
      m(t, r) {
        k(t, e, r), S(e, n);
      },
      p(t, e) {
        4 & e && r !== (r = t[5].text + "") && U(n, r);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function md(t) {
    let e;
    function n(t, e) {
      return "strong" === t[5].block ? fd : pd;
    }
    let r = n(t),
      i = r(t);
    return {
      c() {
        i.c(), (e = L());
      },
      m(t, n) {
        i.m(t, n), k(t, e, n);
      },
      p(t, o) {
        r === (r = n(t)) && i
          ? i.p(t, o)
          : (i.d(1), (i = r(t)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(t) {
        i.d(t), t && T(e);
      },
    };
  }
  function gd(t) {
    let e, n, r, i;
    return {
      c() {
        (e = I("svg")),
          (n = I("path")),
          O(n, "d", "M4 12L12 4M4 4L12 12"),
          O(n, "stroke", "white"),
          O(n, "stroke-width", "1.5"),
          O(n, "stroke-linecap", "round"),
          O(n, "stroke-linejoin", "round"),
          O(e, "width", "16"),
          O(e, "height", "16"),
          O(e, "viewBox", "0 0 16 16"),
          O(e, "fill", "none"),
          O(e, "xmlns", "http://www.w3.org/2000/svg"),
          O(e, "class", "svelte-1wok1yz");
      },
      m(a, s) {
        k(a, e, s),
          S(e, n),
          r ||
            ((i = M(e, "click", function () {
              o(t[1]) && t[1].apply(this, arguments);
            })),
            (r = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && T(e), (r = !1), i();
      },
    };
  }
  function _d(e) {
    let n,
      r,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h,
      p,
      f,
      m,
      g = Qu(
        chrome.i18n.getMessage(
          "notification_anonymous_user_limit_exceeded_description",
          e[2]
        ),
        ["strong"]
      ),
      _ = [];
    for (let t = 0; t < g.length; t += 1) _[t] = md(hd(e, g, t));
    let v = e[1] && gd(e);
    return {
      c() {
        (n = R("div")),
          (r = R("div")),
          (o = R("h1")),
          (o.textContent = `${chrome.i18n.getMessage(
            "notification_anonymous_user_limit_exceeded_headline"
          )}`),
          (a = $()),
          (s = R("p"));
        for (let t = 0; t < _.length; t += 1) _[t].c();
        (l = $()),
          (c = R("div")),
          (u = R("button")),
          (u.textContent = `${chrome.i18n.getMessage(
            "notification_anonymous_user_limit_exceeded_login_button"
          )}`),
          (d = $()),
          (h = R("button")),
          (h.textContent = `${chrome.i18n.getMessage(
            "notification_anonymous_user_limit_exceeded_signup_button"
          )}`),
          (p = $()),
          v && v.c(),
          O(o, "class", "svelte-1wok1yz"),
          O(s, "class", "description svelte-1wok1yz"),
          O(r, "class", "messages svelte-1wok1yz"),
          z(r, "small", e[0].small),
          O(u, "class", "log-in svelte-1wok1yz"),
          O(h, "class", "sign-up svelte-1wok1yz"),
          O(c, "class", "actions svelte-1wok1yz"),
          z(c, "small", e[0].small),
          O(n, "class", "container svelte-1wok1yz"),
          O(n, "data-testid", "error-message-anonymous-limit-exceeded"),
          z(n, "small", e[0].small);
      },
      m(t, i) {
        k(t, n, i), S(n, r), S(r, o), S(r, a), S(r, s);
        for (let t = 0; t < _.length; t += 1) _[t].m(s, null);
        S(n, l),
          S(n, c),
          S(c, u),
          S(c, d),
          S(c, h),
          S(n, p),
          v && v.m(n, null),
          f || ((m = [M(u, "click", e[3]), M(h, "click", e[4])]), (f = !0));
      },
      p(t, [e]) {
        if (4 & e) {
          let n;
          for (
            g = Qu(
              chrome.i18n.getMessage(
                "notification_anonymous_user_limit_exceeded_description",
                t[2]
              ),
              ["strong"]
            ),
              n = 0;
            n < g.length;
            n += 1
          ) {
            const r = hd(t, g, n);
            _[n] ? _[n].p(r, e) : ((_[n] = md(r)), _[n].c(), _[n].m(s, null));
          }
          for (; n < _.length; n += 1) _[n].d(1);
          _.length = g.length;
        }
        1 & e && z(r, "small", t[0].small),
          1 & e && z(c, "small", t[0].small),
          t[1]
            ? v
              ? v.p(t, e)
              : ((v = gd(t)), v.c(), v.m(n, null))
            : v && (v.d(1), (v = null)),
          1 & e && z(n, "small", t[0].small);
      },
      i: t,
      o: t,
      d(t) {
        t && T(n), C(_, t), v && v.d(), (f = !1), i(m);
      },
    };
  }
  function vd(t, e, n) {
    let { config: r } = e,
      { close: i } = e,
      o = "";
    return (
      Q(() => {
        Re({ action: "dlGetUsersCharacterLimit" }).then((t) =>
          n(2, (o = t.toString()))
        ),
          Re({
            action: "dlTrackUpgradeNotificationIsDisplayed",
            payload: { type: te },
          });
      }),
      J(() => {
        Re({
          action: "dlTrackUpgradeNotificationClosed",
          payload: { type: te },
        });
      }),
      (t.$$set = (t) => {
        "config" in t && n(0, (r = t.config)),
          "close" in t && n(1, (i = t.close));
      }),
      [
        r,
        i,
        o,
        function () {
          Re({ action: "dlRequestLogin" })
            .then(() => {})
            .catch((t) => {
              console.log(t);
            }),
            Re({
              action: "dlTrackUpgradeNotificationAction",
              payload: { type: te, cta: re },
            });
        },
        function () {
          Re({
            action: "dlExternalURLRedirect",
            payload: {
              destination: $e,
              utmContent: "notification_anonymous_user_limit_exceeded",
            },
          }),
            Re({
              action: "dlTrackUpgradeNotificationAction",
              payload: { type: te, cta: ie },
            });
        },
      ]
    );
  }
  class yd extends Lt {
    constructor(t) {
      super(), $t(this, t, vd, _d, a, { config: 0, close: 1 });
    }
  }
  function bd(t, e, n) {
    const r = t.slice();
    return (r[4] = e[n]), r;
  }
  function wd(t) {
    let e,
      n = t[4].text + "";
    return {
      c() {
        e = N(n);
      },
      m(t, n) {
        k(t, e, n);
      },
      p(t, r) {
        4 & r && n !== (n = t[4].text + "") && U(e, n);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function Sd(t) {
    let e,
      n,
      r = t[4].text + "";
    return {
      c() {
        (e = R("strong")), (n = N(r));
      },
      m(t, r) {
        k(t, e, r), S(e, n);
      },
      p(t, e) {
        4 & e && r !== (r = t[4].text + "") && U(n, r);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function Ed(t) {
    let e;
    function n(t, e) {
      return "strong" === t[4].block ? Sd : wd;
    }
    let r = n(t),
      i = r(t);
    return {
      c() {
        i.c(), (e = L());
      },
      m(t, n) {
        i.m(t, n), k(t, e, n);
      },
      p(t, o) {
        r === (r = n(t)) && i
          ? i.p(t, o)
          : (i.d(1), (i = r(t)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(t) {
        i.d(t), t && T(e);
      },
    };
  }
  function xd(t) {
    let e, n, r, i;
    return {
      c() {
        (e = I("svg")),
          (n = I("path")),
          O(n, "d", "M4 12L12 4M4 4L12 12"),
          O(n, "stroke", "white"),
          O(n, "stroke-width", "1.5"),
          O(n, "stroke-linecap", "round"),
          O(n, "stroke-linejoin", "round"),
          O(e, "width", "16"),
          O(e, "height", "16"),
          O(e, "viewBox", "0 0 16 16"),
          O(e, "fill", "none"),
          O(e, "xmlns", "http://www.w3.org/2000/svg"),
          O(e, "class", "svelte-1kndj9");
      },
      m(a, s) {
        k(a, e, s),
          S(e, n),
          r ||
            ((i = M(e, "click", function () {
              o(t[1]) && t[1].apply(this, arguments);
            })),
            (r = !0));
      },
      p(e, n) {
        t = e;
      },
      d(t) {
        t && T(e), (r = !1), i();
      },
    };
  }
  function kd(e) {
    let n,
      r,
      i,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h,
      p = Qu(
        chrome.i18n.getMessage(
          "notification_free_account_limit_exceeded_description",
          e[2]
        ),
        ["strong"]
      ),
      f = [];
    for (let t = 0; t < p.length; t += 1) f[t] = Ed(bd(e, p, t));
    let m = e[1] && xd(e);
    return {
      c() {
        (n = R("div")),
          (r = R("div")),
          (i = R("h1")),
          (i.textContent = `${chrome.i18n.getMessage(
            "notification_free_account_limit_exceeded_headline"
          )}`),
          (o = $()),
          (a = R("p"));
        for (let t = 0; t < f.length; t += 1) f[t].c();
        (s = $()),
          (l = R("div")),
          (c = R("button")),
          (c.textContent = `${chrome.i18n.getMessage(
            "notification_free_account_limit_exceeded_signup_button"
          )}`),
          (u = $()),
          m && m.c(),
          O(i, "class", "svelte-1kndj9"),
          O(a, "class", "description svelte-1kndj9"),
          O(r, "class", "messages svelte-1kndj9"),
          z(r, "small", e[0].small),
          O(c, "class", "sign-up svelte-1kndj9"),
          O(l, "class", "actions svelte-1kndj9"),
          z(l, "small", e[0].small),
          O(n, "class", "container svelte-1kndj9"),
          O(n, "data-testid", "error-message-free-account-limit-exceeded"),
          z(n, "small", e[0].small);
      },
      m(t, p) {
        k(t, n, p), S(n, r), S(r, i), S(r, o), S(r, a);
        for (let t = 0; t < f.length; t += 1) f[t].m(a, null);
        S(n, s),
          S(n, l),
          S(l, c),
          S(n, u),
          m && m.m(n, null),
          d || ((h = M(c, "click", e[3])), (d = !0));
      },
      p(t, [e]) {
        if (4 & e) {
          let n;
          for (
            p = Qu(
              chrome.i18n.getMessage(
                "notification_free_account_limit_exceeded_description",
                t[2]
              ),
              ["strong"]
            ),
              n = 0;
            n < p.length;
            n += 1
          ) {
            const r = bd(t, p, n);
            f[n] ? f[n].p(r, e) : ((f[n] = Ed(r)), f[n].c(), f[n].m(a, null));
          }
          for (; n < f.length; n += 1) f[n].d(1);
          f.length = p.length;
        }
        1 & e && z(r, "small", t[0].small),
          1 & e && z(l, "small", t[0].small),
          t[1]
            ? m
              ? m.p(t, e)
              : ((m = xd(t)), m.c(), m.m(n, null))
            : m && (m.d(1), (m = null)),
          1 & e && z(n, "small", t[0].small);
      },
      i: t,
      o: t,
      d(t) {
        t && T(n), C(f, t), m && m.d(), (d = !1), h();
      },
    };
  }
  function Td(t, e, n) {
    let { config: r } = e,
      { close: i } = e,
      o = "";
    return (
      Q(() => {
        Re({ action: "dlGetUsersCharacterLimit" }).then((t) =>
          n(2, (o = t.toString()))
        ),
          Re({
            action: "dlTrackUpgradeNotificationIsDisplayed",
            payload: { type: ee },
          });
      }),
      J(() => {
        Re({
          action: "dlTrackUpgradeNotificationClosed",
          payload: { type: ee },
        });
      }),
      (t.$$set = (t) => {
        "config" in t && n(0, (r = t.config)),
          "close" in t && n(1, (i = t.close));
      }),
      [
        r,
        i,
        o,
        function () {
          Re({
            action: "dlExternalURLRedirect",
            payload: {
              destination: $e,
              utmContent: "notification_free_account_limit_exceeded",
            },
          }),
            Re({
              action: "dlTrackUpgradeNotificationAction",
              payload: { type: ee, cta: ne },
            });
        },
      ]
    );
  }
  class Cd extends Lt {
    constructor(t) {
      super(), $t(this, t, Td, kd, a, { config: 0, close: 1 });
    }
  }
  function Rd(t) {
    let e, n, r;
    var i = t[2];
    function o(t) {
      return { props: { config: t[1], close: t[0] } };
    }
    return (
      i && (e = W(i, o(t))),
      {
        c() {
          e && Ct(e.$$.fragment), (n = L());
        },
        m(t, i) {
          e && Rt(e, t, i), k(t, n, i), (r = !0);
        },
        p(t, r) {
          const a = {};
          if (
            (2 & r && (a.config = t[1]),
            1 & r && (a.close = t[0]),
            i !== (i = t[2]))
          ) {
            if (e) {
              bt();
              const t = e;
              Et(t.$$.fragment, 1, 0, () => {
                It(t, 1);
              }),
                wt();
            }
            i
              ? ((e = W(i, o(t))),
                Ct(e.$$.fragment),
                St(e.$$.fragment, 1),
                Rt(e, n.parentNode, n))
              : (e = null);
          } else i && e.$set(a);
        },
        i(t) {
          r || (e && St(e.$$.fragment, t), (r = !0));
        },
        o(t) {
          e && Et(e.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(n), e && It(e, t);
        },
      }
    );
  }
  function Id(t) {
    let e, n;
    return (
      (e = new Ou({
        props: {
          close: t[0],
          config: t[1],
          $$slots: { default: [$d] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          Ct(e.$$.fragment);
        },
        m(t, r) {
          Rt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          1 & n && (r.close = t[0]),
            2 & n && (r.config = t[1]),
            260 & n && (r.$$scope = { dirty: n, ctx: t }),
            e.$set(r);
        },
        i(t) {
          n || (St(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          Et(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          It(e, t);
        },
      }
    );
  }
  function Nd(t) {
    let e, n;
    return (
      (e = new Lu({
        props: {
          close: t[0],
          config: t[1],
          $$slots: { default: [Ld] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          Ct(e.$$.fragment);
        },
        m(t, r) {
          Rt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          1 & n && (r.close = t[0]),
            2 & n && (r.config = t[1]),
            260 & n && (r.$$scope = { dirty: n, ctx: t }),
            e.$set(r);
        },
        i(t) {
          n || (St(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          Et(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          It(e, t);
        },
      }
    );
  }
  function $d(t) {
    let e, n, r;
    var i = t[2];
    return (
      i && (e = W(i, {})),
      {
        c() {
          e && Ct(e.$$.fragment), (n = L());
        },
        m(t, i) {
          e && Rt(e, t, i), k(t, n, i), (r = !0);
        },
        p(t, r) {
          if (i !== (i = t[2])) {
            if (e) {
              bt();
              const t = e;
              Et(t.$$.fragment, 1, 0, () => {
                It(t, 1);
              }),
                wt();
            }
            i
              ? ((e = W(i, {})),
                Ct(e.$$.fragment),
                St(e.$$.fragment, 1),
                Rt(e, n.parentNode, n))
              : (e = null);
          }
        },
        i(t) {
          r || (e && St(e.$$.fragment, t), (r = !0));
        },
        o(t) {
          e && Et(e.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(n), e && It(e, t);
        },
      }
    );
  }
  function Ld(t) {
    let e, n, r;
    var i = t[2];
    return (
      i && (e = W(i, {})),
      {
        c() {
          e && Ct(e.$$.fragment), (n = L());
        },
        m(t, i) {
          e && Rt(e, t, i), k(t, n, i), (r = !0);
        },
        p(t, r) {
          if (i !== (i = t[2])) {
            if (e) {
              bt();
              const t = e;
              Et(t.$$.fragment, 1, 0, () => {
                It(t, 1);
              }),
                wt();
            }
            i
              ? ((e = W(i, {})),
                Ct(e.$$.fragment),
                St(e.$$.fragment, 1),
                Rt(e, n.parentNode, n))
              : (e = null);
          }
        },
        i(t) {
          r || (e && St(e.$$.fragment, t), (r = !0));
        },
        o(t) {
          e && Et(e.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(n), e && It(e, t);
        },
      }
    );
  }
  function Md(t) {
    let e, n, r, i;
    const o = [Nd, Id, Rd],
      a = [];
    function s(t, e) {
      return t[3] === t[4].SERIOUS || t[3] === t[4].UNKNOWN
        ? 0
        : t[3] === t[4].WARNING
        ? 1
        : t[3] === t[4].CUSTOM
        ? 2
        : -1;
    }
    return (
      ~(e = s(t)) && (n = a[e] = o[e](t)),
      {
        c() {
          n && n.c(), (r = L());
        },
        m(t, n) {
          ~e && a[e].m(t, n), k(t, r, n), (i = !0);
        },
        p(t, [i]) {
          let l = e;
          (e = s(t)),
            e === l
              ? ~e && a[e].p(t, i)
              : (n &&
                  (bt(),
                  Et(a[l], 1, 1, () => {
                    a[l] = null;
                  }),
                  wt()),
                ~e
                  ? ((n = a[e]),
                    n ? n.p(t, i) : ((n = a[e] = o[e](t)), n.c()),
                    St(n, 1),
                    n.m(r.parentNode, r))
                  : (n = null));
        },
        i(t) {
          i || (St(n), (i = !0));
        },
        o(t) {
          Et(n), (i = !1);
        },
        d(t) {
          ~e && a[e].d(t), t && T(r);
        },
      }
    );
  }
  function Ad(t, e, n) {
    let r,
      i,
      { error: o } = e,
      { close: a } = e,
      { config: s = {} } = e;
    const l = { UNKNOWN: 1, WARNING: 2, SERIOUS: 3, CUSTOM: 4 },
      c = {
        [gu]: Pu,
        [_u]: Fu,
        [vu]: Gu,
        [wu]: Xu,
        [Rn]: cd,
        [Nn]: cd,
        [In]: cd,
        [$n]: cd,
        [bu]: Vu,
        [Eu]: Vu,
        [ku]: dd,
        [yu]: Yu,
        [Su]: od,
        [xu]: sd,
        [Tu]: Cd,
        [Cu]: yd,
        [Ln]: Pu,
        [Mn]: Fu,
        [An]: Gu,
        [Un]: Xu,
        [On]: Vu,
        [Bn]: Vu,
        [Dn]: Yu,
        [Pn]: od,
      };
    return (
      Q(() => {
        oe()
          ? Ie({ action: "dlErrorVisibility", payload: { state: !0 } })
          : Ru.set(!0);
      }),
      J(() => {
        oe()
          ? Ie({ action: "dlErrorVisibility", payload: { state: !1 } })
          : Ru.set(!1);
      }),
      (t.$$set = (t) => {
        "error" in t && n(5, (o = t.error)),
          "close" in t && n(0, (a = t.close)),
          "config" in t && n(1, (s = t.config));
      }),
      (t.$$.update = () => {
        32 & t.$$.dirty &&
          n(
            3,
            (r = (function (t) {
              switch (t) {
                case gu:
                case _u:
                case vu:
                case wu:
                case Ln:
                case Mn:
                case An:
                case Un:
                case Rn:
                case Nn:
                case In:
                case $n:
                case xu:
                  return l.SERIOUS;
                case bu:
                case Eu:
                case On:
                case Bn:
                case ku:
                case yu:
                case Su:
                case Dn:
                case Pn:
                  return l.WARNING;
                case Tu:
                case Cu:
                  return l.CUSTOM;
                default:
                  return l.UNKNOWN;
              }
            })(o ? o.error : ""))
          ),
          32 & t.$$.dirty && n(2, (i = (o && c[o.error]) || Pu));
      }),
      [a, s, i, r, l, o]
    );
  }
  class Dd extends Lt {
    constructor(t) {
      super(), $t(this, t, Ad, Md, a, { error: 5, close: 0, config: 1 });
    }
  }
  function Od(e) {
    let n, r;
    return {
      c() {
        (n = R("div")), (r = N(e[0])), O(n, "class", "info-msg svelte-17qaccl");
      },
      m(t, e) {
        k(t, n, e), S(n, r);
      },
      p(t, [e]) {
        1 & e && U(r, t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function Ud(t, e, n) {
    let { message: r } = e;
    return (
      (t.$$set = (t) => {
        "message" in t && n(0, (r = t.message));
      }),
      [r]
    );
  }
  class Pd extends Lt {
    constructor(t) {
      super(), $t(this, t, Ud, Od, a, { message: 0 });
    }
  }
  function Bd(e) {
    let n,
      r,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h,
      p,
      f,
      m,
      g,
      _,
      v,
      y,
      b = chrome.i18n.getMessage("ui_no_translate_language", e[0]) + "";
    return {
      c() {
        (n = R("div")),
          (r = R("div")),
          (o = R("label")),
          (a = R("span")),
          (s = R("input")),
          (l = $()),
          (c = R("span")),
          (c.textContent = `${chrome.i18n.getMessage(
            "ui_no_translate_website"
          )}`),
          (u = $()),
          (d = R("div")),
          (h = R("label")),
          (p = R("span")),
          (f = R("input")),
          (m = $()),
          (g = R("span")),
          (_ = N(b)),
          O(s, "id", "blacklist-website"),
          O(s, "type", "checkbox"),
          (s.checked = e[2]),
          O(s, "class", "svelte-1qjg4r6"),
          O(c, "class", "label svelte-1qjg4r6"),
          O(o, "for", "blacklist-website"),
          O(o, "class", "svelte-1qjg4r6"),
          O(r, "class", "option svelte-1qjg4r6"),
          O(f, "id", "blacklist-language"),
          O(f, "type", "checkbox"),
          (f.checked = e[1]),
          O(f, "class", "svelte-1qjg4r6"),
          O(g, "class", "label svelte-1qjg4r6"),
          O(h, "for", "blacklist-language"),
          O(h, "class", "svelte-1qjg4r6"),
          O(d, "class", "option svelte-1qjg4r6"),
          O(n, "class", "cancel-container svelte-1qjg4r6");
      },
      m(t, i) {
        k(t, n, i),
          S(n, r),
          S(r, o),
          S(o, a),
          S(a, s),
          S(o, l),
          S(o, c),
          S(n, u),
          S(n, d),
          S(d, h),
          S(h, p),
          S(p, f),
          S(h, m),
          S(h, g),
          S(g, _),
          v || ((y = [M(s, "change", e[5]), M(f, "change", e[6])]), (v = !0));
      },
      p(t, [e]) {
        4 & e && (s.checked = t[2]),
          2 & e && (f.checked = t[1]),
          1 & e &&
            b !==
              (b =
                chrome.i18n.getMessage("ui_no_translate_language", t[0]) +
                "") &&
            U(_, b);
      },
      i: t,
      o: t,
      d(t) {
        t && T(n), (v = !1), i(y);
      },
    };
  }
  function Fd(t, e, n) {
    let r, i, o, a;
    const s = nt("deepl_settings");
    l(t, s, (t) => n(8, (a = t)));
    const c = nt("deepl_website_settings");
    l(t, c, (t) => n(7, (o = t)));
    let { sourceLang: u = "" } = e;
    return (
      (t.$$set = (t) => {
        "sourceLang" in t && n(0, (u = t.sourceLang));
      }),
      (t.$$.update = () => {
        384 & t.$$.dirty &&
          n(1, (r = a.languagesForTranslation[o.websiteLanguage] === Ot)),
          384 & t.$$.dirty &&
            n(2, (i = a.blacklistDomains.includes(o.hostname)));
      }),
      [
        u,
        r,
        i,
        s,
        c,
        () => {
          i
            ? (() => {
                let t = a.blacklistDomains;
                t.includes(o.hostname) &&
                  ((t = t.filter((t) => t !== o.hostname)),
                  s.set({ blacklistDomains: t }));
              })()
            : (() => {
                let t = a.blacklistDomains;
                t.includes(o.hostname) ||
                  (t.push(o.hostname), s.set({ blacklistDomains: t }));
              })();
        },
        () => {
          r
            ? (() => {
                let t = a.languagesForTranslation;
                o.websiteLanguage &&
                  ("EN" === o.websiteLanguage
                    ? ((t["EN-GB"] = At), (t["EN-US"] = At))
                    : "PT" === o.websiteLanguage
                    ? ((t["PT-PT"] = At), (t["PT-BR"] = At))
                    : (t[o.websiteLanguage] = At),
                  s.set({ languagesForTranslation: t }));
              })()
            : (() => {
                let t = a.languagesForTranslation;
                o.websiteLanguage &&
                  ("EN" === o.websiteLanguage
                    ? ((t["EN-GB"] = Ot), (t["EN-US"] = Ot))
                    : "PT" === o.websiteLanguage
                    ? ((t["PT-PT"] = Ot), (t["PT-BR"] = Ot))
                    : (t[o.websiteLanguage] = Ot),
                  s.set({ languagesForTranslation: t }));
              })();
        },
        o,
        a,
      ]
    );
  }
  class zd extends Lt {
    constructor(t) {
      super(), $t(this, t, Fd, Bd, a, { sourceLang: 0 });
    }
  }
  function Gd(t) {
    let e, n, r, o, a;
    const s = t[7].default,
      l = c(s, t, t[6], null);
    return {
      c() {
        (e = R("button")),
          l && l.c(),
          O(e, "type", "button"),
          O(e, "class", (n = f(t[0]) + " svelte-1b6vay0")),
          (e.disabled = t[1]),
          O(e, "id", t[5]),
          O(e, "data-qa", t[4]),
          z(e, "disabled", t[1]),
          z(e, "font-size-sm", "sm" === t[2]),
          z(e, "padding-x-md", "md" === t[3]),
          z(e, "padding-x-none", "none" === t[3]);
      },
      m(n, i) {
        k(n, e, i),
          l && l.m(e, null),
          (r = !0),
          o ||
            ((a = [M(e, "click", t[8]), M(e, "mousedown", D(A(t[9])))]),
            (o = !0));
      },
      p(t, [i]) {
        l &&
          l.p &&
          (!r || 64 & i) &&
          h(l, s, t, t[6], r ? d(s, t[6], i, null) : p(t[6]), null),
          (!r || (1 & i && n !== (n = f(t[0]) + " svelte-1b6vay0"))) &&
            O(e, "class", n),
          (!r || 2 & i) && (e.disabled = t[1]),
          (!r || 32 & i) && O(e, "id", t[5]),
          (!r || 16 & i) && O(e, "data-qa", t[4]),
          (!r || 3 & i) && z(e, "disabled", t[1]),
          (!r || 5 & i) && z(e, "font-size-sm", "sm" === t[2]),
          (!r || 9 & i) && z(e, "padding-x-md", "md" === t[3]),
          (!r || 9 & i) && z(e, "padding-x-none", "none" === t[3]);
      },
      i(t) {
        r || (St(l, t), (r = !0));
      },
      o(t) {
        Et(l, t), (r = !1);
      },
      d(t) {
        t && T(e), l && l.d(t), (o = !1), i(a);
      },
    };
  }
  function jd(t, e, n) {
    let { $$slots: r = {}, $$scope: i } = e,
      { className: o = "button-primary" } = e,
      { disabled: a = !1 } = e,
      { fontSize: s = "default" } = e,
      { paddingX: l } = e,
      { dataQa: c = "dl-button" } = e,
      { id: u = "" } = e;
    return (
      (t.$$set = (t) => {
        "className" in t && n(0, (o = t.className)),
          "disabled" in t && n(1, (a = t.disabled)),
          "fontSize" in t && n(2, (s = t.fontSize)),
          "paddingX" in t && n(3, (l = t.paddingX)),
          "dataQa" in t && n(4, (c = t.dataQa)),
          "id" in t && n(5, (u = t.id)),
          "$$scope" in t && n(6, (i = t.$$scope));
      }),
      [
        o,
        a,
        s,
        l,
        c,
        u,
        i,
        r,
        function (e) {
          rt.call(this, t, e);
        },
        function (e) {
          rt.call(this, t, e);
        },
      ]
    );
  }
  class Wd extends Lt {
    constructor(t) {
      super(),
        $t(this, t, jd, Gd, a, {
          className: 0,
          disabled: 1,
          fontSize: 2,
          paddingX: 3,
          dataQa: 4,
          id: 5,
        });
    }
  }
  function Yd(t, e, n) {
    const r = t.slice();
    return (r[18] = e[n]), r;
  }
  function Hd(t, e, n) {
    const r = t.slice();
    return (r[18] = e[n]), r;
  }
  function qd(t, e, n) {
    const r = t.slice();
    return (r[18] = e[n]), r;
  }
  function Vd(t, e, n) {
    const r = t.slice();
    return (r[18] = e[n]), r;
  }
  function Zd(t, e, n) {
    const r = t.slice();
    return (r[18] = e[n]), r;
  }
  function Xd(t) {
    let e, n, r, i, o, a, s, l, c, u, d, h, p, f, m, g, _;
    (u = new Ce({
      props: {
        value: t[1].selectedTargetLanguage,
        regionalVariant: t[1].regionalVariant,
        variant: "alternate",
        fontSize: "sm",
      },
    })),
      u.$on("selection", t[14]);
    let v = !t[3] && ih(t);
    (m = new Wd({
      props: {
        className: "btn-primary btn-full-width",
        dataQa: "dl-button-translate-page",
        $$slots: { default: [ah] },
        $$scope: { ctx: t },
      },
    })),
      m.$on("click", t[10]);
    let y = !t[3] && sh(t);
    return {
      c() {
        (e = R("p")),
          (e.textContent = `${chrome.i18n.getMessage(
            "full_page_translation_target_label"
          )}`),
          (n = $()),
          (r = R("div")),
          (i = R("div")),
          (o = N(t[4])),
          (a = $()),
          (s = R("div")),
          (l = $()),
          (c = R("div")),
          Ct(u.$$.fragment),
          (d = $()),
          v && v.c(),
          (h = $()),
          (p = R("div")),
          (f = R("div")),
          Ct(m.$$.fragment),
          (g = $()),
          y && y.c(),
          O(e, "class", "font-bold mb-md svelte-18g5sm3"),
          O(i, "class", "website-lang svelte-18g5sm3"),
          O(s, "class", "translate-to-arrow svelte-18g5sm3"),
          O(c, "class", "language-switch svelte-18g5sm3"),
          O(r, "class", "language-selection svelte-18g5sm3"),
          O(f, "class", "translate-button svelte-18g5sm3"),
          O(p, "class", "buttons-row svelte-18g5sm3");
      },
      m(t, b) {
        k(t, e, b),
          k(t, n, b),
          k(t, r, b),
          S(r, i),
          S(i, o),
          S(r, a),
          S(r, s),
          S(r, l),
          S(r, c),
          Rt(u, c, null),
          k(t, d, b),
          v && v.m(t, b),
          k(t, h, b),
          k(t, p, b),
          S(p, f),
          Rt(m, f, null),
          S(p, g),
          y && y.m(p, null),
          (_ = !0);
      },
      p(t, e) {
        (!_ || 16 & e) && U(o, t[4]);
        const n = {};
        2 & e && (n.value = t[1].selectedTargetLanguage),
          2 & e && (n.regionalVariant = t[1].regionalVariant),
          u.$set(n),
          t[3]
            ? v &&
              (bt(),
              Et(v, 1, 1, () => {
                v = null;
              }),
              wt())
            : v
            ? (v.p(t, e), 8 & e && St(v, 1))
            : ((v = ih(t)), v.c(), St(v, 1), v.m(h.parentNode, h));
        const r = {};
        536870912 & e && (r.$$scope = { dirty: e, ctx: t }),
          m.$set(r),
          t[3]
            ? y &&
              (bt(),
              Et(y, 1, 1, () => {
                y = null;
              }),
              wt())
            : y
            ? (y.p(t, e), 8 & e && St(y, 1))
            : ((y = sh(t)), y.c(), St(y, 1), y.m(p, null));
      },
      i(t) {
        _ ||
          (St(u.$$.fragment, t), St(v), St(m.$$.fragment, t), St(y), (_ = !0));
      },
      o(t) {
        Et(u.$$.fragment, t), Et(v), Et(m.$$.fragment, t), Et(y), (_ = !1);
      },
      d(t) {
        t && T(e),
          t && T(n),
          t && T(r),
          It(u),
          t && T(d),
          v && v.d(t),
          t && T(h),
          t && T(p),
          It(m),
          y && y.d();
      },
    };
  }
  function Kd(e) {
    let n, r, i, o;
    function a(t, e) {
      return (
        3 & e && (r = null),
        null == r && (r = !!t[1].blacklistDomains.includes(t[0].hostname)),
        r ? uh : t[5] ? ch : void 0
      );
    }
    let s = a(e, -1),
      l = s && s(e),
      c = Qu(chrome.i18n.getMessage("ui_notice_no_translate_change_option"), [
        "settingsLink",
      ]),
      u = [];
    for (let t = 0; t < c.length; t += 1) u[t] = xh(Yd(e, c, t));
    return {
      c() {
        (n = R("p")), l && l.c(), (i = $()), (o = R("p"));
        for (let t = 0; t < u.length; t += 1) u[t].c();
        O(n, "class", "svelte-18g5sm3"), O(o, "class", "svelte-18g5sm3");
      },
      m(t, e) {
        k(t, n, e), l && l.m(n, null), k(t, i, e), k(t, o, e);
        for (let t = 0; t < u.length; t += 1) u[t].m(o, null);
      },
      p(t, e) {
        if (
          (s === (s = a(t, e)) && l
            ? l.p(t, e)
            : (l && l.d(1), (l = s && s(t)), l && (l.c(), l.m(n, null))),
          512 & e)
        ) {
          let n;
          for (
            c = Qu(
              chrome.i18n.getMessage("ui_notice_no_translate_change_option"),
              ["settingsLink"]
            ),
              n = 0;
            n < c.length;
            n += 1
          ) {
            const r = Yd(t, c, n);
            u[n] ? u[n].p(r, e) : ((u[n] = xh(r)), u[n].c(), u[n].m(o, null));
          }
          for (; n < u.length; n += 1) u[n].d(1);
          u.length = c.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && T(n), l && l.d(), t && T(i), t && T(o), C(u, t);
      },
    };
  }
  function Qd(t) {
    let e,
      n,
      r,
      i,
      o,
      a = Qu(chrome.i18n.getMessage("ui_translated_automatically", t[4]), [
        "strong",
      ]),
      s = [];
    for (let e = 0; e < a.length; e += 1) s[e] = Ch(Zd(t, a, e));
    return (
      (i = new Wd({
        props: {
          className: "button-reload",
          $$slots: { default: [Rh] },
          $$scope: { ctx: t },
        },
      })),
      i.$on("click", t[13]),
      {
        c() {
          e = R("p");
          for (let t = 0; t < s.length; t += 1) s[t].c();
          (n = $()),
            (r = R("p")),
            Ct(i.$$.fragment),
            O(e, "class", "svelte-18g5sm3"),
            O(r, "class", "svelte-18g5sm3");
        },
        m(t, a) {
          k(t, e, a);
          for (let t = 0; t < s.length; t += 1) s[t].m(e, null);
          k(t, n, a), k(t, r, a), Rt(i, r, null), (o = !0);
        },
        p(t, n) {
          if (16 & n) {
            let r;
            for (
              a = Qu(
                chrome.i18n.getMessage("ui_translated_automatically", t[4]),
                ["strong"]
              ),
                r = 0;
              r < a.length;
              r += 1
            ) {
              const i = Zd(t, a, r);
              s[r] ? s[r].p(i, n) : ((s[r] = Ch(i)), s[r].c(), s[r].m(e, null));
            }
            for (; r < s.length; r += 1) s[r].d(1);
            s.length = a.length;
          }
          const r = {};
          536870912 & n && (r.$$scope = { dirty: n, ctx: t }), i.$set(r);
        },
        i(t) {
          o || (St(i.$$.fragment, t), (o = !0));
        },
        o(t) {
          Et(i.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && T(e), C(s, t), t && T(n), t && T(r), It(i);
        },
      }
    );
  }
  function Jd(e) {
    let n, r, i, o, a;
    return (
      (r = new Cn({})),
      {
        c() {
          (n = R("div")),
            Ct(r.$$.fragment),
            (i = $()),
            (o = R("p")),
            (o.textContent = `${chrome.i18n.getMessage(
              "full_page_translation_ongoing_translation"
            )}`),
            O(n, "class", "loading-spinner-container mb-sm svelte-18g5sm3"),
            O(o, "class", "center svelte-18g5sm3");
        },
        m(t, e) {
          k(t, n, e), Rt(r, n, null), k(t, i, e), k(t, o, e), (a = !0);
        },
        p: t,
        i(t) {
          a || (St(r.$$.fragment, t), (a = !0));
        },
        o(t) {
          Et(r.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && T(n), It(r), t && T(i), t && T(o);
        },
      }
    );
  }
  function th(e) {
    let n, r, i, o, a;
    return (
      (r = new Cn({})),
      {
        c() {
          (n = R("div")),
            Ct(r.$$.fragment),
            (i = $()),
            (o = R("p")),
            (o.textContent = `${chrome.i18n.getMessage(
              "full_page_translation_auto_detect_lang"
            )}`),
            O(n, "class", "loading-spinner-container mb-sm svelte-18g5sm3"),
            O(o, "class", "center svelte-18g5sm3");
        },
        m(t, e) {
          k(t, n, e), Rt(r, n, null), k(t, i, e), k(t, o, e), (a = !0);
        },
        p: t,
        i(t) {
          a || (St(r.$$.fragment, t), (a = !0));
        },
        o(t) {
          Et(r.$$.fragment, t), (a = !1);
        },
        d(t) {
          t && T(n), It(r), t && T(i), t && T(o);
        },
      }
    );
  }
  function eh(e) {
    let n, r;
    return (
      (n = new Pd({
        props: {
          message: chrome.i18n.getMessage(
            "full_page_translation_info_google_translate"
          ),
        },
      })),
      {
        c() {
          Ct(n.$$.fragment);
        },
        m(t, e) {
          Rt(n, t, e), (r = !0);
        },
        p: t,
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          It(n, t);
        },
      }
    );
  }
  function nh(e) {
    let n, r;
    return (
      (n = new Pd({
        props: {
          message: chrome.i18n.getMessage(
            "full_page_translation_no_website_data"
          ),
        },
      })),
      {
        c() {
          Ct(n.$$.fragment);
        },
        m(t, e) {
          Rt(n, t, e), (r = !0);
        },
        p: t,
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          It(n, t);
        },
      }
    );
  }
  function rh(e) {
    let n, r, i;
    return (
      (r = new Cn({})),
      {
        c() {
          (n = R("div")),
            Ct(r.$$.fragment),
            O(n, "class", "loading-spinner-container svelte-18g5sm3");
        },
        m(t, e) {
          k(t, n, e), Rt(r, n, null), (i = !0);
        },
        p: t,
        i(t) {
          i || (St(r.$$.fragment, t), (i = !0));
        },
        o(t) {
          Et(r.$$.fragment, t), (i = !1);
        },
        d(t) {
          t && T(n), It(r);
        },
      }
    );
  }
  function ih(t) {
    let e, n;
    return (
      (e = new xn({
        props: {
          tooltip: chrome.i18n.getMessage("ui_auto_translate_tooltip", t[4]),
          multiline: !0,
          zIndex: "0",
          $$slots: { default: [oh] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          Ct(e.$$.fragment);
        },
        m(t, r) {
          Rt(e, t, r), (n = !0);
        },
        p(t, n) {
          const r = {};
          16 & n &&
            (r.tooltip = chrome.i18n.getMessage(
              "ui_auto_translate_tooltip",
              t[4]
            )),
            536870912 & n && (r.$$scope = { dirty: n, ctx: t }),
            e.$set(r);
        },
        i(t) {
          n || (St(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          Et(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          It(e, t);
        },
      }
    );
  }
  function oh(e) {
    let n,
      r,
      i,
      o,
      a,
      s,
      l,
      c = chrome.i18n.getMessage("full_page_translation_auto_translate") + "";
    return {
      c() {
        (n = R("div")),
          (r = R("label")),
          (i = R("input")),
          (o = $()),
          (a = N(c)),
          O(i, "type", "checkbox"),
          (i.checked = e[11]()),
          O(i, "class", "svelte-18g5sm3"),
          O(r, "class", "svelte-18g5sm3"),
          O(n, "class", "checkbox-row svelte-18g5sm3");
      },
      m(t, c) {
        k(t, n, c),
          S(n, r),
          S(r, i),
          S(r, o),
          S(r, a),
          s || ((l = M(i, "change", e[15])), (s = !0));
      },
      p: t,
      d(t) {
        t && T(n), (s = !1), l();
      },
    };
  }
  function ah(e) {
    let n;
    return {
      c() {
        (n = R("span")),
          (n.textContent = `${chrome.i18n.getMessage(
            "full_page_translation_translate_button"
          )}`),
          O(n, "class", "svelte-18g5sm3");
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function sh(t) {
    let e, n, r;
    return (
      (n = new Wd({
        props: {
          className: "btn-ghost btn-icon",
          id: "dl-cancel-no-translation-selection",
          $$slots: { default: [lh] },
          $$scope: { ctx: t },
        },
      })),
      n.$on("click", t[16]),
      {
        c() {
          (e = R("div")), Ct(n.$$.fragment), O(e, "class", "cancel-button");
        },
        m(t, i) {
          k(t, e, i), Rt(n, e, null), (r = !0);
        },
        p(t, e) {
          const r = {};
          536870912 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(e), It(n);
        },
      }
    );
  }
  function lh(e) {
    let n;
    return {
      c() {
        (n = R("span")), O(n, "class", "dots-vertical svelte-18g5sm3");
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function ch(t) {
    let e,
      n = Qu(chrome.i18n.getMessage("ui_notice_no_translate_language", t[4]), [
        "strong",
      ]),
      r = [];
    for (let e = 0; e < n.length; e += 1) r[e] = ph(Hd(t, n, e));
    return {
      c() {
        for (let t = 0; t < r.length; t += 1) r[t].c();
        e = L();
      },
      m(t, n) {
        for (let e = 0; e < r.length; e += 1) r[e].m(t, n);
        k(t, e, n);
      },
      p(t, i) {
        if (16 & i) {
          let o;
          for (
            n = Qu(
              chrome.i18n.getMessage("ui_notice_no_translate_language", t[4]),
              ["strong"]
            ),
              o = 0;
            o < n.length;
            o += 1
          ) {
            const a = Hd(t, n, o);
            r[o]
              ? r[o].p(a, i)
              : ((r[o] = ph(a)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = n.length;
        }
      },
      d(t) {
        C(r, t), t && T(e);
      },
    };
  }
  function uh(t) {
    let e;
    function n(t, e) {
      return t[5] ? mh : fh;
    }
    let r = n(t),
      i = r(t);
    return {
      c() {
        i.c(), (e = L());
      },
      m(t, n) {
        i.m(t, n), k(t, e, n);
      },
      p(t, o) {
        r === (r = n(t)) && i
          ? i.p(t, o)
          : (i.d(1), (i = r(t)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(t) {
        i.d(t), t && T(e);
      },
    };
  }
  function dh(t) {
    let e,
      n = t[18].text + "";
    return {
      c() {
        e = N(n);
      },
      m(t, n) {
        k(t, e, n);
      },
      p(t, r) {
        16 & r && n !== (n = t[18].text + "") && U(e, n);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function hh(t) {
    let e,
      n,
      r = t[18].text + "";
    return {
      c() {
        (e = R("strong")), (n = N(r)), O(e, "class", "svelte-18g5sm3");
      },
      m(t, r) {
        k(t, e, r), S(e, n);
      },
      p(t, e) {
        16 & e && r !== (r = t[18].text + "") && U(n, r);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function ph(t) {
    let e;
    function n(t, e) {
      return "strong" === t[18].block ? hh : dh;
    }
    let r = n(t),
      i = r(t);
    return {
      c() {
        i.c(), (e = L());
      },
      m(t, n) {
        i.m(t, n), k(t, e, n);
      },
      p(t, o) {
        r === (r = n(t)) && i
          ? i.p(t, o)
          : (i.d(1), (i = r(t)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(t) {
        i.d(t), t && T(e);
      },
    };
  }
  function fh(t) {
    let e,
      n = Qu(
        chrome.i18n.getMessage("ui_notice_no_translate_website", t[0].hostname),
        ["strong"]
      ),
      r = [];
    for (let e = 0; e < n.length; e += 1) r[e] = vh(qd(t, n, e));
    return {
      c() {
        for (let t = 0; t < r.length; t += 1) r[t].c();
        e = L();
      },
      m(t, n) {
        for (let e = 0; e < r.length; e += 1) r[e].m(t, n);
        k(t, e, n);
      },
      p(t, i) {
        if (1 & i) {
          let o;
          for (
            n = Qu(
              chrome.i18n.getMessage(
                "ui_notice_no_translate_website",
                t[0].hostname
              ),
              ["strong"]
            ),
              o = 0;
            o < n.length;
            o += 1
          ) {
            const a = qd(t, n, o);
            r[o]
              ? r[o].p(a, i)
              : ((r[o] = vh(a)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = n.length;
        }
      },
      d(t) {
        C(r, t), t && T(e);
      },
    };
  }
  function mh(t) {
    let e,
      n = Qu(
        chrome.i18n.getMessage("ui_notice_no_translate_website_and_language", [
          t[0].hostname,
          t[4],
        ]),
        ["strong"]
      ),
      r = [];
    for (let e = 0; e < n.length; e += 1) r[e] = wh(Vd(t, n, e));
    return {
      c() {
        for (let t = 0; t < r.length; t += 1) r[t].c();
        e = L();
      },
      m(t, n) {
        for (let e = 0; e < r.length; e += 1) r[e].m(t, n);
        k(t, e, n);
      },
      p(t, i) {
        if (17 & i) {
          let o;
          for (
            n = Qu(
              chrome.i18n.getMessage(
                "ui_notice_no_translate_website_and_language",
                [t[0].hostname, t[4]]
              ),
              ["strong"]
            ),
              o = 0;
            o < n.length;
            o += 1
          ) {
            const a = Vd(t, n, o);
            r[o]
              ? r[o].p(a, i)
              : ((r[o] = wh(a)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = n.length;
        }
      },
      d(t) {
        C(r, t), t && T(e);
      },
    };
  }
  function gh(t) {
    let e,
      n = t[18].text + "";
    return {
      c() {
        e = N(n);
      },
      m(t, n) {
        k(t, e, n);
      },
      p(t, r) {
        1 & r && n !== (n = t[18].text + "") && U(e, n);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function _h(t) {
    let e,
      n,
      r = t[18].text + "";
    return {
      c() {
        (e = R("strong")), (n = N(r)), O(e, "class", "svelte-18g5sm3");
      },
      m(t, r) {
        k(t, e, r), S(e, n);
      },
      p(t, e) {
        1 & e && r !== (r = t[18].text + "") && U(n, r);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function vh(t) {
    let e;
    function n(t, e) {
      return "strong" === t[18].block ? _h : gh;
    }
    let r = n(t),
      i = r(t);
    return {
      c() {
        i.c(), (e = L());
      },
      m(t, n) {
        i.m(t, n), k(t, e, n);
      },
      p(t, o) {
        r === (r = n(t)) && i
          ? i.p(t, o)
          : (i.d(1), (i = r(t)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(t) {
        i.d(t), t && T(e);
      },
    };
  }
  function yh(t) {
    let e,
      n = t[18].text + "";
    return {
      c() {
        e = N(n);
      },
      m(t, n) {
        k(t, e, n);
      },
      p(t, r) {
        17 & r && n !== (n = t[18].text + "") && U(e, n);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function bh(t) {
    let e,
      n,
      r = t[18].text + "";
    return {
      c() {
        (e = R("strong")), (n = N(r)), O(e, "class", "svelte-18g5sm3");
      },
      m(t, r) {
        k(t, e, r), S(e, n);
      },
      p(t, e) {
        17 & e && r !== (r = t[18].text + "") && U(n, r);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function wh(t) {
    let e;
    function n(t, e) {
      return "strong" === t[18].block ? bh : yh;
    }
    let r = n(t),
      i = r(t);
    return {
      c() {
        i.c(), (e = L());
      },
      m(t, n) {
        i.m(t, n), k(t, e, n);
      },
      p(t, o) {
        r === (r = n(t)) && i
          ? i.p(t, o)
          : (i.d(1), (i = r(t)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(t) {
        i.d(t), t && T(e);
      },
    };
  }
  function Sh(e) {
    let n,
      r = e[18].text + "";
    return {
      c() {
        n = N(r);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function Eh(e) {
    let n,
      r,
      i,
      o,
      a = e[18].text + "";
    return {
      c() {
        (n = R("span")), (r = N(a)), O(n, "class", "link svelte-18g5sm3");
      },
      m(t, a) {
        k(t, n, a), S(n, r), i || ((o = M(n, "click", e[9])), (i = !0));
      },
      p: t,
      d(t) {
        t && T(n), (i = !1), o();
      },
    };
  }
  function xh(t) {
    let e;
    let n = (function (t, e) {
        return "settingsLink" === t[18].block ? Eh : Sh;
      })(t),
      r = n(t);
    return {
      c() {
        r.c(), (e = L());
      },
      m(t, n) {
        r.m(t, n), k(t, e, n);
      },
      p(t, e) {
        r.p(t, e);
      },
      d(t) {
        r.d(t), t && T(e);
      },
    };
  }
  function kh(t) {
    let e,
      n = t[18].text + "";
    return {
      c() {
        e = N(n);
      },
      m(t, n) {
        k(t, e, n);
      },
      p(t, r) {
        16 & r && n !== (n = t[18].text + "") && U(e, n);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function Th(t) {
    let e,
      n,
      r = t[18].text + "";
    return {
      c() {
        (e = R("strong")), (n = N(r)), O(e, "class", "svelte-18g5sm3");
      },
      m(t, r) {
        k(t, e, r), S(e, n);
      },
      p(t, e) {
        16 & e && r !== (r = t[18].text + "") && U(n, r);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function Ch(t) {
    let e;
    function n(t, e) {
      return "strong" === t[18].block ? Th : kh;
    }
    let r = n(t),
      i = r(t);
    return {
      c() {
        i.c(), (e = L());
      },
      m(t, n) {
        i.m(t, n), k(t, e, n);
      },
      p(t, o) {
        r === (r = n(t)) && i
          ? i.p(t, o)
          : (i.d(1), (i = r(t)), i && (i.c(), i.m(e.parentNode, e)));
      },
      d(t) {
        i.d(t), t && T(e);
      },
    };
  }
  function Rh(e) {
    let n,
      r = chrome.i18n.getMessage("full_page_translation_show_original") + "";
    return {
      c() {
        n = N(r);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function Ih(t) {
    let e, n, r;
    return (
      (n = new Dd({ props: { error: t[0].error } })),
      {
        c() {
          (e = R("div")),
            Ct(n.$$.fragment),
            O(e, "class", "error-container svelte-18g5sm3");
        },
        m(t, i) {
          k(t, e, i), Rt(n, e, null), (r = !0);
        },
        p(t, e) {
          const r = {};
          1 & e && (r.error = t[0].error), n.$set(r);
        },
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(e), It(n);
        },
      }
    );
  }
  function Nh(t) {
    let e, n, r, o, a, s, l;
    return (
      (r = new zd({ props: { sourceLang: t[4] } })),
      {
        c() {
          (e = R("div")),
            (n = R("div")),
            Ct(r.$$.fragment),
            O(n, "class", "cancel-selection-box svelte-18g5sm3"),
            O(e, "class", "cancel-selection svelte-18g5sm3");
        },
        m(i, o) {
          k(i, e, o),
            S(e, n),
            Rt(r, n, null),
            (a = !0),
            s ||
              ((l = [
                m(
                  de.call(null, n, {
                    isShadow: !0,
                    exceptions: ["#dl-cancel-no-translation-selection"],
                  })
                ),
                M(n, "click_outside", t[17]),
              ]),
              (s = !0));
        },
        p(t, e) {
          const n = {};
          16 & e && (n.sourceLang = t[4]), r.$set(n);
        },
        i(t) {
          a ||
            (St(r.$$.fragment, t),
            ut(() => {
              o || (o = Tt(e, ue, { y: -10, duration: 300 }, !0)), o.run(1);
            }),
            (a = !0));
        },
        o(t) {
          Et(r.$$.fragment, t),
            o || (o = Tt(e, ue, { y: -10, duration: 300 }, !1)),
            o.run(0),
            (a = !1);
        },
        d(t) {
          t && T(e), It(r), t && o && o.end(), (s = !1), i(l);
        },
      }
    );
  }
  function $h(t) {
    let e, n, r, i, o, a, s, l;
    const c = [rh, nh, eh, th, Jd, Qd, Kd, Xd],
      u = [];
    function d(t, e) {
      return (
        1 & e && (n = null),
        35 & e && (r = null),
        null == t[0]
          ? 0
          : (null == n && (n = !(0 !== Object.keys(t[0]).length)),
            n
              ? 1
              : t[0].isGoogleTranslatedActive
              ? 2
              : t[0].translationState === Ft
              ? 3
              : t[0].translationState === Pt
              ? 4
              : t[0].translationState === Bt
              ? 5
              : (null == r &&
                  (r = !(
                    !t[1].blacklistDomains.includes(t[0].hostname) && !t[5]
                  )),
                r ? 6 : t[0].websiteLanguage ? 7 : -1))
      );
    }
    ~(i = d(t, -1)) && (o = u[i] = c[i](t));
    let h = t[6] && Ih(t),
      p = t[2] && Nh(t);
    return {
      c() {
        (e = R("div")),
          o && o.c(),
          (a = $()),
          h && h.c(),
          (s = $()),
          p && p.c(),
          O(e, "class", "full-page-translation-widget svelte-18g5sm3");
      },
      m(t, n) {
        k(t, e, n),
          ~i && u[i].m(e, null),
          S(e, a),
          h && h.m(e, null),
          S(e, s),
          p && p.m(e, null),
          (l = !0);
      },
      p(t, [n]) {
        let r = i;
        (i = d(t, n)),
          i === r
            ? ~i && u[i].p(t, n)
            : (o &&
                (bt(),
                Et(u[r], 1, 1, () => {
                  u[r] = null;
                }),
                wt()),
              ~i
                ? ((o = u[i]),
                  o ? o.p(t, n) : ((o = u[i] = c[i](t)), o.c()),
                  St(o, 1),
                  o.m(e, a))
                : (o = null)),
          t[6]
            ? h
              ? (h.p(t, n), 64 & n && St(h, 1))
              : ((h = Ih(t)), h.c(), St(h, 1), h.m(e, s))
            : h &&
              (bt(),
              Et(h, 1, 1, () => {
                h = null;
              }),
              wt()),
          t[2]
            ? p
              ? (p.p(t, n), 4 & n && St(p, 1))
              : ((p = Nh(t)), p.c(), St(p, 1), p.m(e, null))
            : p &&
              (bt(),
              Et(p, 1, 1, () => {
                p = null;
              }),
              wt());
      },
      i(t) {
        l || (St(o), St(h), St(p), (l = !0));
      },
      o(t) {
        Et(o), Et(h), Et(p), (l = !1);
      },
      d(t) {
        t && T(e), ~i && u[i].d(), h && h.d(), p && p.d();
      },
    };
  }
  function Lh(t, e, n) {
    let r, i, o, a;
    const s = nt("deepl_settings");
    l(t, s, (t) => n(1, (a = t)));
    const c = nt("deepl_website_settings");
    l(t, c, (t) => n(0, (o = t)));
    let u,
      d = !1,
      h = !1;
    const p = () => {
      const t = le(o.websiteLanguage);
      let e = a.languagesForTranslation;
      if (t)
        for (const n of t)
          a.languagesForTranslation[n] === Dt
            ? ((e[n] = At),
              Re({
                action: "dlTrackUILocationClicked",
                payload: Wt.hubFPTDisableCheckbox,
              }))
            : ((e[n] = Dt),
              Re({
                action: "dlTrackUILocationClicked",
                payload: Wt.hubFPTEnableCheckbox,
              }));
      else
        a.languagesForTranslation[o.websiteLanguage] === Dt
          ? ((e[o.websiteLanguage] = At),
            Re({
              action: "dlTrackUILocationClicked",
              payload: Wt.hubFPTDisableCheckbox,
            }))
          : ((e[o.websiteLanguage] = Dt),
            Re({
              action: "dlTrackUILocationClicked",
              payload: Wt.hubFPTEnableCheckbox,
            }));
      s.set({ languagesForTranslation: e });
    };
    return (
      (t.$$.update = () => {
        var e, s;
        1 & t.$$.dirty && n(6, (r = o && o.error)),
          3 & t.$$.dirty &&
            n(
              5,
              (i = (function (t, e, n) {
                return "EN" === t
                  ? e["EN-GB"] === n || e["EN-US"] === n
                  : "PT" === t
                  ? e["PT-PT"] === n || e["PT-BR"] === n
                  : e[t] === n;
              })(o.websiteLanguage, a.languagesForTranslation, Ot))
            ),
          3 & t.$$.dirty &&
            (o &&
            a &&
            ((e = a.selectedTargetLanguage),
            (s = o.websiteLanguage),
            ae(e) === s)
              ? n(3, (h = !0))
              : n(3, (h = !1))),
          1 & t.$$.dirty &&
            o &&
            (o.isSupportedLanguage
              ? n(
                  4,
                  (u = chrome.i18n.getMessage(
                    `supported_languages_${o.websiteLanguage}`
                  ))
                )
              : n(4, (u = chrome.i18n.getMessage("supported_languages_EN"))));
      }),
      [
        o,
        a,
        d,
        h,
        u,
        i,
        r,
        s,
        c,
        function () {
          Re({ action: "dlOpenInternalPage", payload: { destination: Fe } });
        },
        function () {
          0 == a.isTargetLanguageConfirmed &&
            s.set({ isTargetLanguageConfirmed: !0 }),
            chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
              chrome.tabs.sendMessage(t[0].id, {
                action: "dlTranslate",
                sourceLang: o.websiteLanguage,
                targetLang: a.selectedTargetLanguage,
              });
            });
        },
        function () {
          const t = le(o.websiteLanguage);
          return t
            ? a.languagesForTranslation[t[0]] === Dt ||
                a.languagesForTranslation[t[1]] === Dt
            : a.languagesForTranslation[o.websiteLanguage] === Dt;
        },
        p,
        () => {
          chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
            chrome.tabs.sendMessage(t[0].id, { action: "dlShowOriginal" });
          });
        },
        (t) =>
          s.set({
            selectedTargetLanguage: t.detail.selectedOption.value,
            isTargetLanguageConfirmed: !0,
            regionalVariant: t.detail.selectedOption.regionalVariant,
          }),
        () => p(),
        () => n(2, (d = !d)),
        () => n(2, (d = !1)),
      ]
    );
  }
  class Mh extends Lt {
    constructor(t) {
      super(), $t(this, t, Lh, $h, a, {});
    }
  }
  function Ah(t, e, n) {
    const r = t.slice();
    return (r[6] = e[n]), r;
  }
  function Dh(e) {
    let n, r, i;
    return {
      c() {
        (n = R("button")),
          (n.textContent = `${chrome.i18n.getMessage(
            "login_widget_login_link"
          )}`),
          O(n, "class", "login-button svelte-3czcg9");
      },
      m(t, o) {
        k(t, n, o), r || ((i = M(n, "click", e[3])), (r = !0));
      },
      p: t,
      d(t) {
        t && T(n), (r = !1), i();
      },
    };
  }
  function Oh(e) {
    let n, r, i;
    return {
      c() {
        (n = R("button")),
          (n.textContent = `${chrome.i18n.getMessage(
            "login_widget_upgrade_to_pro"
          )}`),
          O(n, "class", "try-pro-button svelte-3czcg9");
      },
      m(t, o) {
        k(t, n, o), r || ((i = M(n, "click", e[5])), (r = !0));
      },
      p: t,
      d(t) {
        t && T(n), (r = !1), i();
      },
    };
  }
  function Uh(e) {
    let n,
      r = e[6].text + "";
    return {
      c() {
        n = N(r);
      },
      m(t, e) {
        k(t, n, e);
      },
      p: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function Ph(e) {
    let n,
      r,
      i,
      o,
      a = e[6].text + "";
    return {
      c() {
        (n = R("span")), (r = N(a)), O(n, "class", "link svelte-3czcg9");
      },
      m(t, a) {
        k(t, n, a), S(n, r), i || ((o = M(n, "click", e[4])), (i = !0));
      },
      p: t,
      d(t) {
        t && T(n), (i = !1), o();
      },
    };
  }
  function Bh(t) {
    let e;
    let n = (function (t, e) {
        return "tryOutLink" === t[6].block ? Ph : Uh;
      })(t),
      r = n(t);
    return {
      c() {
        r.c(), (e = L());
      },
      m(t, n) {
        r.m(t, n), k(t, e, n);
      },
      p(t, e) {
        r.p(t, e);
      },
      d(t) {
        r.d(t), t && T(e);
      },
    };
  }
  function Fh(t) {
    let e, n, r;
    return (
      (n = new Dd({ props: { error: t[1] } })),
      {
        c() {
          (e = R("div")),
            Ct(n.$$.fragment),
            O(e, "class", "error-container svelte-3czcg9");
        },
        m(t, i) {
          k(t, e, i), Rt(n, e, null), (r = !0);
        },
        p(t, e) {
          const r = {};
          2 & e && (r.error = t[1]), n.$set(r);
        },
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(e), It(n);
        },
      }
    );
  }
  function zh(t) {
    let e,
      n,
      r,
      i,
      o,
      a,
      s,
      l,
      c = chrome.i18n.getMessage("login_widget_pro_user_label") + "";
    function u(t, e) {
      return !0 === t[2].isLoggedIn ? Oh : Dh;
    }
    let d = u(t),
      h = d(t),
      p = Qu(chrome.i18n.getMessage("login_widget_try_pro_label"), [
        "tryOutLink",
      ]),
      f = [];
    for (let e = 0; e < p.length; e += 1) f[e] = Bh(Ah(t, p, e));
    let m = t[1] && Fh(t);
    return {
      c() {
        (e = R("div")), (n = R("p")), (r = $()), h.c(), (i = $()), (o = R("p"));
        for (let t = 0; t < f.length; t += 1) f[t].c();
        (a = $()),
          m && m.c(),
          O(n, "class", "svelte-3czcg9"),
          O(o, "class", "svelte-3czcg9"),
          O(
            e,
            "class",
            (s = "login-widget" + (t[0] ? " disabled" : "") + " svelte-3czcg9")
          );
      },
      m(t, s) {
        k(t, e, s),
          S(e, n),
          (n.innerHTML = c),
          S(e, r),
          h.m(e, null),
          S(e, i),
          S(e, o);
        for (let t = 0; t < f.length; t += 1) f[t].m(o, null);
        S(e, a), m && m.m(e, null), (l = !0);
      },
      p(t, [n]) {
        if (
          (d === (d = u(t)) && h
            ? h.p(t, n)
            : (h.d(1), (h = d(t)), h && (h.c(), h.m(e, i))),
          16 & n)
        ) {
          let e;
          for (
            p = Qu(chrome.i18n.getMessage("login_widget_try_pro_label"), [
              "tryOutLink",
            ]),
              e = 0;
            e < p.length;
            e += 1
          ) {
            const r = Ah(t, p, e);
            f[e] ? f[e].p(r, n) : ((f[e] = Bh(r)), f[e].c(), f[e].m(o, null));
          }
          for (; e < f.length; e += 1) f[e].d(1);
          f.length = p.length;
        }
        t[1]
          ? m
            ? (m.p(t, n), 2 & n && St(m, 1))
            : ((m = Fh(t)), m.c(), St(m, 1), m.m(e, null))
          : m &&
            (bt(),
            Et(m, 1, 1, () => {
              m = null;
            }),
            wt()),
          (!l ||
            (1 & n &&
              s !==
                (s =
                  "login-widget" +
                  (t[0] ? " disabled" : "") +
                  " svelte-3czcg9"))) &&
            O(e, "class", s);
      },
      i(t) {
        l || (St(m), (l = !0));
      },
      o(t) {
        Et(m), (l = !1);
      },
      d(t) {
        t && T(e), h.d(), C(f, t), m && m.d();
      },
    };
  }
  function Gh(t, e, n) {
    let r;
    l(t, gn, (t) => n(2, (r = t))), et("deepl_settings", gn);
    let i = !1,
      o = "";
    return [
      i,
      o,
      r,
      function () {
        i ||
          (Re({
            action: "dlTrackUILocationClicked",
            payload: Wt.hubLoginButton,
          }),
          n(0, (i = !0)),
          Re({ action: "dlRequestLogin" })
            .then(() => n(0, (i = !1)))
            .catch((t) => {
              n(1, (o = t)), n(0, (i = !1));
            }));
      },
      function () {
        i ||
          (Re({
            action: "dlTrackUILocationClicked",
            payload: Wt.hubTryProLink,
          }),
          Re({
            action: "dlExternalURLRedirect",
            payload: { destination: $e, utmContent: "header_home" },
          }));
      },
      function () {
        i ||
          (Re({
            action: "dlTrackUILocationClicked",
            payload: Wt.hubUpgradeToProLink,
          }),
          Re({
            action: "dlExternalURLRedirect",
            payload: { destination: $e, utmContent: "header_home" },
          }));
      },
    ];
  }
  class jh extends Lt {
    constructor(t) {
      super(), $t(this, t, Gh, zh, a, {});
    }
  }
  function Wh(e) {
    let n, r, i;
    return {
      c() {
        (n = R("button")),
          (n.textContent = " "),
          O(n, "class", "svelte-p31uz4");
      },
      m(t, o) {
        k(t, n, o), r || ((i = M(n, "click", e[1])), (r = !0));
      },
      p: t,
      d(t) {
        t && T(n), (r = !1), i();
      },
    };
  }
  function Yh(t) {
    let e,
      n,
      r,
      i,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h,
      p,
      f,
      m = chrome.i18n.getMessage("ui_hub_customization_promotion_content") + "";
    return (
      (r = new xn({
        props: {
          tooltip: chrome.i18n.getMessage("ui_hub_do_not_show_again"),
          $$slots: { default: [Wh] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          (e = R("div")),
            (n = R("div")),
            Ct(r.$$.fragment),
            (i = $()),
            (o = R("div")),
            (a = R("span")),
            (a.textContent = `${chrome.i18n.getMessage("ui_hub_tip_badge")}`),
            (s = $()),
            (l = R("p")),
            (c = $()),
            (u = R("div")),
            (d = R("span")),
            (d.textContent = `${chrome.i18n.getMessage(
              "ui_hub_customization_promotion_cta"
            )}`),
            O(n, "class", "close-button svelte-p31uz4"),
            O(a, "class", "tip-badge svelte-p31uz4"),
            O(o, "class", "tip-badge-container svelte-p31uz4"),
            O(l, "class", "svelte-p31uz4"),
            O(d, "class", "link svelte-p31uz4"),
            O(e, "class", "customizations-widget svelte-p31uz4");
        },
        m(g, _) {
          k(g, e, _),
            S(e, n),
            Rt(r, n, null),
            S(e, i),
            S(e, o),
            S(o, a),
            S(e, s),
            S(e, l),
            (l.innerHTML = m),
            S(e, c),
            S(e, u),
            S(u, d),
            (h = !0),
            p || ((f = M(d, "click", t[2])), (p = !0));
        },
        p(t, [e]) {
          const n = {};
          16 & e && (n.$$scope = { dirty: e, ctx: t }), r.$set(n);
        },
        i(t) {
          h || (St(r.$$.fragment, t), (h = !0));
        },
        o(t) {
          Et(r.$$.fragment, t), (h = !1);
        },
        d(t) {
          t && T(e), It(r), (p = !1), f();
        },
      }
    );
  }
  function Hh(t, e, n) {
    let r;
    const i = nt("deepl_settings");
    l(t, i, (t) => n(3, (r = t)));
    return [
      i,
      () => {
        !(function (t, e, n) {
          let r = e.blacklistedPopupWidgets;
          r || (r = []),
            (e.blacklistedPopupWidgets &&
              e.blacklistedPopupWidgets.includes(n)) ||
              t.set({ blacklistedPopupWidgets: [...r, n] });
        })(i, r, Kt),
          Re({
            action: "dlTrackUILocationClicked",
            payload: Wt.hubCloseCustomizationsWidget,
          });
      },
      function () {
        Re({ action: "dlOpenInternalPage", payload: { destination: je } }),
          Re({
            action: "dlTrackUILocationClicked",
            payload: Wt.hubViewIntegrations,
          });
      },
    ];
  }
  class qh extends Lt {
    constructor(t) {
      super(), $t(this, t, Hh, Yh, a, {});
    }
  }
  function Vh(e) {
    let n, r, o, a, s, l, c, u, d;
    return {
      c() {
        (n = R("div")),
          (r = R("span")),
          (r.textContent = `${chrome.i18n.getMessage(
            "reading_writing_select_tab_title"
          )}`),
          (o = $()),
          (a = R("div")),
          (s = R("button")),
          (s.textContent = `${chrome.i18n.getMessage(
            "reading_writing_select_tab_reading_label"
          )}`),
          (l = $()),
          (c = R("button")),
          (c.textContent = `${chrome.i18n.getMessage(
            "reading_writing_select_tab_writing_label"
          )}`),
          O(r, "class", "title svelte-1fre81w"),
          O(s, "class", "tab svelte-1fre81w"),
          z(s, "isActive", "READING" === e[0]),
          O(c, "class", "tab svelte-1fre81w"),
          z(c, "isActive", "WRITING" === e[0]),
          O(a, "class", "tab-container svelte-1fre81w"),
          O(n, "data-testid", "tab-select-container");
      },
      m(t, i) {
        k(t, n, i),
          S(n, r),
          S(n, o),
          S(n, a),
          S(a, s),
          S(a, l),
          S(a, c),
          u || ((d = [M(s, "click", e[2]), M(c, "click", e[3])]), (u = !0));
      },
      p(t, [e]) {
        1 & e && z(s, "isActive", "READING" === t[0]),
          1 & e && z(c, "isActive", "WRITING" === t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && T(n), (u = !1), i(d);
      },
    };
  }
  function Zh(t, e, n) {
    let { selectedTabValue: r = "READING" } = e;
    const i = (t) => {
      n(0, (r = t));
    };
    return (
      (t.$$set = (t) => {
        "selectedTabValue" in t && n(0, (r = t.selectedTabValue));
      }),
      [
        r,
        i,
        () => i("READING"),
        () => {
          i("WRITING");
        },
      ]
    );
  }
  class Xh extends Lt {
    constructor(t) {
      super(), $t(this, t, Zh, Vh, a, { selectedTabValue: 0 });
    }
  }
  function Kh(e) {
    let n, r, i, o;
    return {
      c() {
        (n = R("button")),
          (r = R("span")),
          O(r, "class", "svelte-1mtvz9f"),
          O(n, "class", "switch svelte-1mtvz9f"),
          O(n, "data-qa", e[1]),
          z(n, "checked", e[0]);
      },
      m(t, a) {
        k(t, n, a), S(n, r), i || ((o = M(n, "click", e[2])), (i = !0));
      },
      p(t, [e]) {
        2 & e && O(n, "data-qa", t[1]), 1 & e && z(n, "checked", t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && T(n), (i = !1), o();
      },
    };
  }
  function Qh(t, e, n) {
    let { checked: r = !1 } = e,
      { qaRoot: i = "dl-switch" } = e;
    const o = tt();
    return (
      (t.$$set = (t) => {
        "checked" in t && n(0, (r = t.checked)),
          "qaRoot" in t && n(1, (i = t.qaRoot));
      }),
      [
        r,
        i,
        function () {
          o("change", { checked: !r });
        },
      ]
    );
  }
  class Jh extends Lt {
    constructor(t) {
      super(), $t(this, t, Qh, Kh, a, { checked: 0, qaRoot: 1 });
    }
  }
  function tp(e) {
    let n, r, i, o;
    return {
      c() {
        (n = I("svg")),
          (r = I("path")),
          O(r, "d", "M1 7L5 11L15 1"),
          O(r, "stroke", (i = e[0] ? e[3] : e[4])),
          O(r, "stroke-width", "2"),
          O(r, "stroke-linecap", "round"),
          O(r, "stroke-linejoin", "round"),
          O(r, "class", "svelte-mrm8jk"),
          O(n, "width", e[2]),
          O(n, "height", e[1]),
          O(n, "class", "checkmark svelte-mrm8jk"),
          O(n, "viewBox", "0 0 16 12"),
          O(n, "fill", "none"),
          O(n, "xmlns", "http://www.w3.org/2000/svg"),
          O(n, "style", (o = `padding: ${e[6]};`)),
          z(n, "enableHover", e[5]);
      },
      m(t, e) {
        k(t, n, e), S(n, r);
      },
      p(t, [e]) {
        25 & e && i !== (i = t[0] ? t[3] : t[4]) && O(r, "stroke", i),
          4 & e && O(n, "width", t[2]),
          2 & e && O(n, "height", t[1]),
          64 & e && o !== (o = `padding: ${t[6]};`) && O(n, "style", o),
          32 & e && z(n, "enableHover", t[5]);
      },
      i: t,
      o: t,
      d(t) {
        t && T(n);
      },
    };
  }
  function ep(t, e, n) {
    let { disabled: r = !1 } = e,
      { height: i = "16px" } = e,
      { width: o = "16px" } = e,
      { disabledColor: a = "#727A83" } = e,
      { enabledColor: s = "#007E5E" } = e,
      { enableHover: l = !1 } = e,
      { padding: c } = e;
    return (
      (t.$$set = (t) => {
        "disabled" in t && n(0, (r = t.disabled)),
          "height" in t && n(1, (i = t.height)),
          "width" in t && n(2, (o = t.width)),
          "disabledColor" in t && n(3, (a = t.disabledColor)),
          "enabledColor" in t && n(4, (s = t.enabledColor)),
          "enableHover" in t && n(5, (l = t.enableHover)),
          "padding" in t && n(6, (c = t.padding));
      }),
      [r, i, o, a, s, l, c]
    );
  }
  class np extends Lt {
    constructor(t) {
      super(),
        $t(this, t, ep, tp, a, {
          disabled: 0,
          height: 1,
          width: 2,
          disabledColor: 3,
          enabledColor: 4,
          enableHover: 5,
          padding: 6,
        });
    }
  }
  function rp(t, e, n) {
    const r = t.slice();
    return (r[7] = e[n]), (r[9] = n), r;
  }
  function ip(t) {
    let e,
      n = t[0],
      r = [];
    for (let e = 0; e < n.length; e += 1) r[e] = ap(rp(t, n, e));
    return {
      c() {
        for (let t = 0; t < r.length; t += 1) r[t].c();
        e = L();
      },
      m(t, n) {
        for (let e = 0; e < r.length; e += 1) r[e].m(t, n);
        k(t, e, n);
      },
      p(t, i) {
        if (1 & i) {
          let o;
          for (n = t[0], o = 0; o < n.length; o += 1) {
            const a = rp(t, n, o);
            r[o]
              ? r[o].p(a, i)
              : ((r[o] = ap(a)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = n.length;
        }
      },
      d(t) {
        C(r, t), t && T(e);
      },
    };
  }
  function op(t) {
    let e;
    return {
      c() {
        (e = R("span")),
          (e.textContent = "+ "),
          O(e, "class", "svelte-1ofq2wd");
      },
      m(t, n) {
        k(t, e, n);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function ap(t) {
    let e,
      n,
      r,
      i,
      o = t[7] + "",
      a = t[9] < t[0].length - 1 && op();
    return {
      c() {
        (e = R("span")),
          (n = N(o)),
          (r = $()),
          a && a.c(),
          (i = L()),
          O(e, "class", "shortcut-key svelte-1ofq2wd");
      },
      m(t, o) {
        k(t, e, o), S(e, n), k(t, r, o), a && a.m(t, o), k(t, i, o);
      },
      p(t, e) {
        1 & e && o !== (o = t[7] + "") && U(n, o),
          t[9] < t[0].length - 1
            ? a || ((a = op()), a.c(), a.m(i.parentNode, i))
            : a && (a.d(1), (a = null));
      },
      d(t) {
        t && T(e), t && T(r), a && a.d(t), t && T(i);
      },
    };
  }
  function sp(t) {
    let e,
      n,
      r,
      i,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h,
      p,
      f,
      m,
      g,
      _,
      v,
      y,
      b,
      w,
      E,
      x,
      C,
      I,
      L,
      A,
      D,
      U,
      P,
      B,
      F,
      G,
      W,
      Y,
      H,
      q = chrome.i18n.getMessage("config_tab_click_icon") + "",
      V =
        chrome.i18n.getMessage("reading_writing_config_tab_right_click_label") +
        "",
      Z =
        chrome.i18n.getMessage("reading_writing_config_tab_shortcut_label") +
        "",
      X = chrome.i18n.getMessage("config_tab_customize_link") + "";
    (o = new Ce({ props: { value: t[1].selectedTargetLanguage } })),
      o.$on("selection", t[5]),
      (l = new np({
        props: {
          height: "14px",
          width: "14px",
          disabled: !t[1].enableInlineTranslation,
        },
      })),
      (p = new np({ props: { height: "14px", width: "14px" } })),
      (v = new np({ props: { height: "14px", width: "14px" } }));
    let K = t[0].length > 0 && ip(t);
    return (
      (G = new Jh({
        props: {
          checked: t[1].enableInlineTranslation,
          qaRoot: "settings-page_section-inline-translation_toggle",
        },
      })),
      G.$on("change", t[6]),
      {
        c() {
          (e = R("div")),
            (n = R("div")),
            (r = R("div")),
            (r.textContent = `${chrome.i18n.getMessage(
              "reading_config_tab_description"
            )}`),
            (i = $()),
            Ct(o.$$.fragment),
            (a = $()),
            (s = R("div")),
            Ct(l.$$.fragment),
            (c = $()),
            (u = new j(!1)),
            (d = $()),
            (h = R("div")),
            Ct(p.$$.fragment),
            (f = $()),
            (m = new j(!1)),
            (g = $()),
            (_ = R("div")),
            Ct(v.$$.fragment),
            (y = $()),
            (b = new j(!1)),
            (w = $()),
            K && K.c(),
            (E = $()),
            (x = R("div")),
            (C = N(X)),
            (I = $()),
            (L = R("span")),
            (A = $()),
            (D = R("div")),
            (U = R("div")),
            (P = R("p")),
            (P.textContent = `${chrome.i18n.getMessage(
              "reading_config_tab_switch_label"
            )}`),
            (B = $()),
            (F = R("div")),
            Ct(G.$$.fragment),
            O(r, "class", "title svelte-1ofq2wd"),
            (u.a = null),
            O(s, "class", "status-line top-status svelte-1ofq2wd"),
            z(s, "disabled", !t[1].enableInlineTranslation),
            (m.a = null),
            O(h, "class", "status-line svelte-1ofq2wd"),
            (b.a = w),
            O(_, "class", "status-line svelte-1ofq2wd"),
            O(L, "class", "icon icon-external-link svelte-1ofq2wd"),
            O(x, "class", "customize-link svelte-1ofq2wd"),
            O(n, "class", "config-tab svelte-1ofq2wd"),
            O(P, "class", "svelte-1ofq2wd"),
            O(U, "class", "switch-content svelte-1ofq2wd"),
            O(F, "class", "switch svelte-1ofq2wd"),
            O(D, "class", "settings-section switch-container svelte-1ofq2wd"),
            O(e, "class", "container svelte-1ofq2wd");
        },
        m(T, R) {
          k(T, e, R),
            S(e, n),
            S(n, r),
            S(n, i),
            Rt(o, n, null),
            S(n, a),
            S(n, s),
            Rt(l, s, null),
            S(s, c),
            u.m(q, s),
            S(n, d),
            S(n, h),
            Rt(p, h, null),
            S(h, f),
            m.m(V, h),
            S(n, g),
            S(n, _),
            Rt(v, _, null),
            S(_, y),
            b.m(Z, _),
            S(_, w),
            K && K.m(_, null),
            S(n, E),
            S(n, x),
            S(x, C),
            S(x, I),
            S(x, L),
            S(e, A),
            S(e, D),
            S(D, U),
            S(U, P),
            S(D, B),
            S(D, F),
            Rt(G, F, null),
            (W = !0),
            Y || ((H = M(x, "click", t[3])), (Y = !0));
        },
        p(t, [e]) {
          const n = {};
          2 & e && (n.value = t[1].selectedTargetLanguage), o.$set(n);
          const r = {};
          2 & e && (r.disabled = !t[1].enableInlineTranslation),
            l.$set(r),
            (!W || 2 & e) && z(s, "disabled", !t[1].enableInlineTranslation),
            t[0].length > 0
              ? K
                ? K.p(t, e)
                : ((K = ip(t)), K.c(), K.m(_, null))
              : K && (K.d(1), (K = null));
          const i = {};
          2 & e && (i.checked = t[1].enableInlineTranslation), G.$set(i);
        },
        i(t) {
          W ||
            (St(o.$$.fragment, t),
            St(l.$$.fragment, t),
            St(p.$$.fragment, t),
            St(v.$$.fragment, t),
            St(G.$$.fragment, t),
            (W = !0));
        },
        o(t) {
          Et(o.$$.fragment, t),
            Et(l.$$.fragment, t),
            Et(p.$$.fragment, t),
            Et(v.$$.fragment, t),
            Et(G.$$.fragment, t),
            (W = !1);
        },
        d(t) {
          t && T(e),
            It(o),
            It(l),
            It(p),
            It(v),
            K && K.d(),
            It(G),
            (Y = !1),
            H();
        },
      }
    );
  }
  function lp(t, e, n) {
    let r;
    const i = nt("deepl_settings");
    function o(t) {
      i.set({ enableInlineTranslation: t }),
        Re({
          action: "dlTrackSettingChanged",
          payload: {
            settingType: t ? Vt : qt,
            domainName: "",
            uiFunction: Xt,
            uiLocation: Wt.extensionHubToggleIconSwitch,
          },
        });
    }
    l(t, i, (t) => n(1, (r = t)));
    let a = [];
    Re({ action: "dlCheckCommandShortcuts" }).then((t) => {
      const e = t ? t.filter((t) => t.name == Yt)[0].shortcut : "";
      e.length > 0 && n(0, (a = e.split(e.includes("+") ? "+" : "")));
    });
    return [
      a,
      r,
      i,
      function () {
        Re({
          action: "dlTrackUILocationClicked",
          payload: Wt.hubCustomizeShortcut,
        }),
          Re({ action: "dlOpenInternalPage", payload: { destination: Ge } });
      },
      o,
      (t) =>
        i.set({
          selectedTargetLanguage: t.detail.selectedOption.value,
          isTargetLanguageConfirmed: !0,
        }),
      (t) => o(t.detail.checked),
    ];
  }
  class cp extends Lt {
    constructor(t) {
      super(), $t(this, t, lp, sp, a, {});
    }
  }
  function up(t, e, n) {
    const r = t.slice();
    return (r[7] = e[n]), (r[9] = n), r;
  }
  function dp(t) {
    let e,
      n = t[0],
      r = [];
    for (let e = 0; e < n.length; e += 1) r[e] = pp(up(t, n, e));
    return {
      c() {
        for (let t = 0; t < r.length; t += 1) r[t].c();
        e = L();
      },
      m(t, n) {
        for (let e = 0; e < r.length; e += 1) r[e].m(t, n);
        k(t, e, n);
      },
      p(t, i) {
        if (1 & i) {
          let o;
          for (n = t[0], o = 0; o < n.length; o += 1) {
            const a = up(t, n, o);
            r[o]
              ? r[o].p(a, i)
              : ((r[o] = pp(a)), r[o].c(), r[o].m(e.parentNode, e));
          }
          for (; o < r.length; o += 1) r[o].d(1);
          r.length = n.length;
        }
      },
      d(t) {
        C(r, t), t && T(e);
      },
    };
  }
  function hp(t) {
    let e;
    return {
      c() {
        (e = R("span")),
          (e.textContent = "+ "),
          O(e, "class", "svelte-1ofq2wd");
      },
      m(t, n) {
        k(t, e, n);
      },
      d(t) {
        t && T(e);
      },
    };
  }
  function pp(t) {
    let e,
      n,
      r,
      i,
      o = t[7] + "",
      a = t[9] < t[0].length - 1 && hp();
    return {
      c() {
        (e = R("span")),
          (n = N(o)),
          (r = $()),
          a && a.c(),
          (i = L()),
          O(e, "class", "shortcut-key svelte-1ofq2wd");
      },
      m(t, o) {
        k(t, e, o), S(e, n), k(t, r, o), a && a.m(t, o), k(t, i, o);
      },
      p(t, e) {
        1 & e && o !== (o = t[7] + "") && U(n, o),
          t[9] < t[0].length - 1
            ? a || ((a = hp()), a.c(), a.m(i.parentNode, i))
            : a && (a.d(1), (a = null));
      },
      d(t) {
        t && T(e), t && T(r), a && a.d(t), t && T(i);
      },
    };
  }
  function fp(t) {
    let e,
      n,
      r,
      i,
      o,
      a,
      s,
      l,
      c,
      u,
      d,
      h,
      p,
      f,
      m,
      g,
      _,
      v,
      y,
      b,
      w,
      E,
      x,
      C,
      I,
      L,
      A,
      D,
      U,
      P,
      B,
      F,
      G,
      W,
      Y,
      H,
      q = chrome.i18n.getMessage("config_tab_click_icon") + "",
      V =
        chrome.i18n.getMessage("reading_writing_config_tab_right_click_label") +
        "",
      Z =
        chrome.i18n.getMessage("reading_writing_config_tab_shortcut_label") +
        "",
      X = chrome.i18n.getMessage("config_tab_customize_link") + "";
    (o = new Ce({
      props: {
        showChooseLanguageOption: !0,
        value: t[1].targetLanguageUserInput,
      },
    })),
      o.$on("selection", t[5]),
      (l = new np({
        props: {
          height: "14px",
          width: "14px",
          disabled: !t[1].enableInputTranslation,
        },
      })),
      (p = new np({ props: { height: "14px", width: "14px" } })),
      (v = new np({ props: { height: "14px", width: "14px" } }));
    let K = t[0].length > 0 && dp(t);
    return (
      (G = new Jh({
        props: {
          checked: t[1].enableInputTranslation,
          qaRoot: "settings-page_section-inline-translation_toggle",
        },
      })),
      G.$on("change", t[6]),
      {
        c() {
          (e = R("div")),
            (n = R("div")),
            (r = R("div")),
            (r.textContent = `${chrome.i18n.getMessage(
              "writing_config_tab_description"
            )}`),
            (i = $()),
            Ct(o.$$.fragment),
            (a = $()),
            (s = R("div")),
            Ct(l.$$.fragment),
            (c = $()),
            (u = new j(!1)),
            (d = $()),
            (h = R("div")),
            Ct(p.$$.fragment),
            (f = $()),
            (m = new j(!1)),
            (g = $()),
            (_ = R("div")),
            Ct(v.$$.fragment),
            (y = $()),
            (b = new j(!1)),
            (w = $()),
            K && K.c(),
            (E = $()),
            (x = R("div")),
            (C = N(X)),
            (I = $()),
            (L = R("span")),
            (A = $()),
            (D = R("div")),
            (U = R("div")),
            (P = R("p")),
            (P.textContent = `${chrome.i18n.getMessage(
              "writing_config_tab_switch_label"
            )}`),
            (B = $()),
            (F = R("div")),
            Ct(G.$$.fragment),
            O(r, "class", "title svelte-1ofq2wd"),
            (u.a = null),
            O(s, "class", "status-line top-status svelte-1ofq2wd"),
            z(s, "disabled", !t[1].enableInputTranslation),
            (m.a = null),
            O(h, "class", "status-line svelte-1ofq2wd"),
            (b.a = w),
            O(_, "class", "status-line svelte-1ofq2wd"),
            O(L, "class", "icon icon-external-link  svelte-1ofq2wd"),
            O(x, "class", "customize-link svelte-1ofq2wd"),
            O(n, "class", "config-tab svelte-1ofq2wd"),
            O(P, "class", "svelte-1ofq2wd"),
            O(U, "class", "switch-content svelte-1ofq2wd"),
            O(F, "class", "switch svelte-1ofq2wd"),
            O(D, "class", "settings-section switch-container svelte-1ofq2wd"),
            O(e, "class", "container svelte-1ofq2wd");
        },
        m(T, R) {
          k(T, e, R),
            S(e, n),
            S(n, r),
            S(n, i),
            Rt(o, n, null),
            S(n, a),
            S(n, s),
            Rt(l, s, null),
            S(s, c),
            u.m(q, s),
            S(n, d),
            S(n, h),
            Rt(p, h, null),
            S(h, f),
            m.m(V, h),
            S(n, g),
            S(n, _),
            Rt(v, _, null),
            S(_, y),
            b.m(Z, _),
            S(_, w),
            K && K.m(_, null),
            S(n, E),
            S(n, x),
            S(x, C),
            S(x, I),
            S(x, L),
            S(e, A),
            S(e, D),
            S(D, U),
            S(U, P),
            S(D, B),
            S(D, F),
            Rt(G, F, null),
            (W = !0),
            Y || ((H = M(x, "click", t[3])), (Y = !0));
        },
        p(t, [e]) {
          const n = {};
          2 & e && (n.value = t[1].targetLanguageUserInput), o.$set(n);
          const r = {};
          2 & e && (r.disabled = !t[1].enableInputTranslation),
            l.$set(r),
            (!W || 2 & e) && z(s, "disabled", !t[1].enableInputTranslation),
            t[0].length > 0
              ? K
                ? K.p(t, e)
                : ((K = dp(t)), K.c(), K.m(_, null))
              : K && (K.d(1), (K = null));
          const i = {};
          2 & e && (i.checked = t[1].enableInputTranslation), G.$set(i);
        },
        i(t) {
          W ||
            (St(o.$$.fragment, t),
            St(l.$$.fragment, t),
            St(p.$$.fragment, t),
            St(v.$$.fragment, t),
            St(G.$$.fragment, t),
            (W = !0));
        },
        o(t) {
          Et(o.$$.fragment, t),
            Et(l.$$.fragment, t),
            Et(p.$$.fragment, t),
            Et(v.$$.fragment, t),
            Et(G.$$.fragment, t),
            (W = !1);
        },
        d(t) {
          t && T(e),
            It(o),
            It(l),
            It(p),
            It(v),
            K && K.d(),
            It(G),
            (Y = !1),
            H();
        },
      }
    );
  }
  function mp(t, e, n) {
    let r;
    const i = nt("deepl_settings");
    function o(t) {
      i.set({ enableInputTranslation: t }),
        Re({
          action: "dlTrackSettingChanged",
          payload: {
            settingType: t ? Vt : qt,
            domainName: "",
            uiFunction: Zt,
            uiLocation: Wt.extensionHubToggleIconSwitch,
          },
        });
    }
    l(t, i, (t) => n(1, (r = t)));
    let a = [];
    Re({ action: "dlCheckCommandShortcuts" }).then((t) => {
      const e = t ? t.filter((t) => t.name == Yt)[0].shortcut : "";
      e.length > 0 && n(0, (a = e.split(e.includes("+") ? "+" : "")));
    });
    return [
      a,
      r,
      i,
      function () {
        Re({
          action: "dlTrackUILocationClicked",
          payload: Wt.hubCustomizeShortcut,
        }),
          Re({ action: "dlOpenInternalPage", payload: { destination: ze } });
      },
      o,
      (t) =>
        i.set({
          targetLanguageUserInput: t.detail.selectedOption.value,
          isTargetLanguageConfirmed: !0,
        }),
      (t) => o(t.detail.checked),
    ];
  }
  class gp extends Lt {
    constructor(t) {
      super(), $t(this, t, mp, fp, a, {});
    }
  }
  function _p(t) {
    let e, n, r;
    return (
      (n = new qh({})),
      {
        c() {
          (e = R("div")),
            Ct(n.$$.fragment),
            O(e, "class", "dl-widget svelte-18o50wn");
        },
        m(t, i) {
          k(t, e, i), Rt(n, e, null), (r = !0);
        },
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(e), It(n);
        },
      }
    );
  }
  function vp(t) {
    let e, n, r;
    return (
      (n = new Mh({})),
      {
        c() {
          (e = R("div")),
            Ct(n.$$.fragment),
            O(e, "class", "dl-widget svelte-18o50wn");
        },
        m(t, i) {
          k(t, e, i), Rt(n, e, null), (r = !0);
        },
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(e), It(n);
        },
      }
    );
  }
  function yp(t) {
    let e, n, r;
    return (
      (n = new jh({})),
      {
        c() {
          (e = R("div")),
            Ct(n.$$.fragment),
            O(e, "class", "dl-widget svelte-18o50wn");
        },
        m(t, i) {
          k(t, e, i), Rt(n, e, null), (r = !0);
        },
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(e), It(n);
        },
      }
    );
  }
  function bp(t) {
    let e, n;
    return (
      (e = new cp({})),
      {
        c() {
          Ct(e.$$.fragment);
        },
        m(t, r) {
          Rt(e, t, r), (n = !0);
        },
        i(t) {
          n || (St(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          Et(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          It(e, t);
        },
      }
    );
  }
  function wp(t) {
    let e, n;
    return (
      (e = new gp({})),
      {
        c() {
          Ct(e.$$.fragment);
        },
        m(t, r) {
          Rt(e, t, r), (n = !0);
        },
        i(t) {
          n || (St(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          Et(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          It(e, t);
        },
      }
    );
  }
  function Sp(t) {
    let e,
      n,
      r,
      i,
      o,
      a,
      s,
      l,
      c,
      u = !yn(t[0], Kt),
      d = u && _p(),
      h = (function (t) {
        let e, n, r, i;
        const o = [yp, vp],
          a = [];
        function s(t, e) {
          return t[3] ? 0 : t[2] ? 1 : -1;
        }
        return (
          ~(e = s(t)) && (n = a[e] = o[e](t)),
          {
            c() {
              n && n.c(), (r = L());
            },
            m(t, n) {
              ~e && a[e].m(t, n), k(t, r, n), (i = !0);
            },
            p(t, i) {
              let l = e;
              (e = s(t)),
                e !== l &&
                  (n &&
                    (bt(),
                    Et(a[l], 1, 1, () => {
                      a[l] = null;
                    }),
                    wt()),
                  ~e
                    ? ((n = a[e]),
                      n || ((n = a[e] = o[e](t)), n.c()),
                      St(n, 1),
                      n.m(r.parentNode, r))
                    : (n = null));
            },
            i(t) {
              i || (St(n), (i = !0));
            },
            o(t) {
              Et(n), (i = !1);
            },
            d(t) {
              ~e && a[e].d(t), t && T(r);
            },
          }
        );
      })(t);
    function p(e) {
      t[8](e);
    }
    let f = {};
    void 0 !== t[1] && (f.selectedTabValue = t[1]),
      (o = new Xh({ props: f })),
      ot.push(() =>
        (function (t, e, n, r) {
          const i = t.$$.props[e];
          void 0 !== i && ((t.$$.bound[i] = n), void 0 === r && n(t.$$.ctx[i]));
        })(o, "selectedTabValue", p, t[1])
      );
    let m = "READING" === t[1] && bp(),
      g = "WRITING" === t[1] && wp();
    return {
      c() {
        (e = R("div")),
          d && d.c(),
          (n = $()),
          h && h.c(),
          (r = $()),
          (i = R("div")),
          Ct(o.$$.fragment),
          (s = $()),
          m && m.c(),
          (l = $()),
          g && g.c(),
          O(
            i,
            "class",
            "widget-with-background dl-widget-minimal-padding svelte-18o50wn"
          ),
          O(e, "class", "font-default svelte-18o50wn");
      },
      m(t, a) {
        k(t, e, a),
          d && d.m(e, null),
          S(e, n),
          h && h.m(e, null),
          S(e, r),
          S(e, i),
          Rt(o, i, null),
          S(e, s),
          m && m.m(e, null),
          S(e, l),
          g && g.m(e, null),
          (c = !0);
      },
      p(t, r) {
        1 & r && (u = !yn(t[0], Kt)),
          u
            ? d
              ? 1 & r && St(d, 1)
              : ((d = _p()), d.c(), St(d, 1), d.m(e, n))
            : d &&
              (bt(),
              Et(d, 1, 1, () => {
                d = null;
              }),
              wt()),
          h.p(t, r);
        const i = {};
        var s;
        !a &&
          2 & r &&
          ((a = !0),
          (i.selectedTabValue = t[1]),
          (s = () => (a = !1)),
          st.push(s)),
          o.$set(i),
          "READING" === t[1]
            ? m
              ? 2 & r && St(m, 1)
              : ((m = bp()), m.c(), St(m, 1), m.m(e, l))
            : m &&
              (bt(),
              Et(m, 1, 1, () => {
                m = null;
              }),
              wt()),
          "WRITING" === t[1]
            ? g
              ? 2 & r && St(g, 1)
              : ((g = wp()), g.c(), St(g, 1), g.m(e, null))
            : g &&
              (bt(),
              Et(g, 1, 1, () => {
                g = null;
              }),
              wt());
      },
      i(t) {
        c || (St(d), St(h), St(o.$$.fragment, t), St(m), St(g), (c = !0));
      },
      o(t) {
        Et(d), Et(h), Et(o.$$.fragment, t), Et(m), Et(g), (c = !1);
      },
      d(t) {
        t && T(e), d && d.d(), h && h.d(), It(o), m && m.d(), g && g.d();
      },
    };
  }
  function Ep(t) {
    let e, n, r;
    return (
      (n = new pn({
        props: {
          showMenu: !0,
          extensionContext: t[4],
          $$slots: { default: [Sp] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          (e = R("main")),
            Ct(n.$$.fragment),
            O(e, "class", "dl-popup svelte-18o50wn");
        },
        m(t, i) {
          k(t, e, i), Rt(n, e, null), (r = !0);
        },
        p(t, [e]) {
          const r = {};
          527 & e && (r.$$scope = { dirty: e, ctx: t }), n.$set(r);
        },
        i(t) {
          r || (St(n.$$.fragment, t), (r = !0));
        },
        o(t) {
          Et(n.$$.fragment, t), (r = !1);
        },
        d(t) {
          t && T(e), It(n);
        },
      }
    );
  }
  function xp(t, e, n) {
    let r, i, o, a, s;
    l(t, vn, (t) => n(7, (a = t))),
      l(t, gn, (t) => n(0, (s = t))),
      et("deepl_settings", gn),
      et("deepl_website_settings", vn);
    let c,
      u,
      d = Gt;
    return (
      Q(() => {
        _n.fetchCurrentWebsiteSettings(),
          chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
            chrome.tabs.sendMessage(t[0].id, {
              action: "dlDefaultPopUpMounting",
            });
          });
      }),
      (t.$$.update = () => {
        128 & t.$$.dirty && n(6, (r = a && a.isValidUrlForPopup)),
          1 & t.$$.dirty &&
            n(3, (i = !s.isLoggedIn || (s.isLoggedIn && !0 !== s.isProUser))),
          65 & t.$$.dirty && n(2, (o = s.isLoggedIn && s.isProUser && r)),
          160 & t.$$.dirty &&
            a &&
            a.hostname &&
            a.hostname !== u &&
            (n(5, (u = a.hostname)),
            Re({
              action: "dlTrackExtensionOpenedEvent",
              payload: { domainName: u, extensionContext: d },
            }));
      }),
      [
        s,
        c,
        o,
        i,
        d,
        u,
        r,
        a,
        function (t) {
          (c = t), n(1, c);
        },
      ]
    );
  }
  const kp =
    (Ea({
      dsn: "https://f7c23f019d154c319e91e8de004727dc@errortracking.deepl.com/12",
      release: "deepl-browser-extension@1.12.2",
      environment: Ue(),
      tracesSampleRate: Ue() === De ? 0.9 : 1,
    }),
    window.addEventListener("unhandledrejection", (t) => {
      Wi(t.reason);
    }),
    mu);
  chrome.runtime.onMessage.addListener((t, e, n) => {
    switch (t.action) {
      case "dlTrackError": {
        const r = `${e.tab ? "content script" : "background script"} - ${
          t.errorMessage
        }`;
        kp.captureMessage(r, "error"), n();
        break;
      }
    }
    return !0;
  });
  return new (class extends Lt {
    constructor(t) {
      super(), $t(this, t, xp, Ep, a, {});
    }
  })({ target: document.body });
})();
//# sourceMappingURL=bundle.js.map
