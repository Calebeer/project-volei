import {
  require_react
} from "/build/_shared/chunk-RQ7GWW3B.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-DG4HR4CT.js";

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function u(r6, n4, ...a4) {
  if (r6 in n4) {
    let e3 = n4[r6];
    return typeof e3 == "function" ? e3(...a4) : e3;
  }
  let t9 = new Error(`Tried to handle "${r6}" but there is no handler defined. Only defined handlers are: ${Object.keys(n4).map((e3) => `"${e3}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t9, u), t9;
}

// node_modules/@headlessui/react/dist/utils/render.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function e(...n4) {
  return n4.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S = ((a4) => (a4[a4.None = 0] = "None", a4[a4.RenderStrategy = 1] = "RenderStrategy", a4[a4.Static = 2] = "Static", a4))(S || {});
var j = ((e3) => (e3[e3.Unmount = 0] = "Unmount", e3[e3.Hidden = 1] = "Hidden", e3))(j || {});
function X({ ourProps: r6, theirProps: t9, slot: e3, defaultTag: a4, features: s6, visible: n4 = true, name: f6 }) {
  let o10 = N(t9, r6);
  if (n4)
    return c(o10, e3, a4, f6);
  let u4 = s6 != null ? s6 : 0;
  if (u4 & 2) {
    let { static: l6 = false, ...p3 } = o10;
    if (l6)
      return c(p3, e3, a4, f6);
  }
  if (u4 & 1) {
    let { unmount: l6 = true, ...p3 } = o10;
    return u(l6 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c({ ...p3, hidden: true, style: { display: "none" } }, e3, a4, f6);
    } });
  }
  return c(o10, e3, a4, f6);
}
function c(r6, t9 = {}, e3, a4) {
  let { as: s6 = e3, children: n4, refName: f6 = "ref", ...o10 } = g(r6, ["unmount", "static"]), u4 = r6.ref !== void 0 ? { [f6]: r6.ref } : {}, l6 = typeof n4 == "function" ? n4(t9) : n4;
  "className" in o10 && o10.className && typeof o10.className == "function" && (o10.className = o10.className(t9));
  let p3 = {};
  if (t9) {
    let i5 = false, m3 = [];
    for (let [y4, d7] of Object.entries(t9))
      typeof d7 == "boolean" && (i5 = true), d7 === true && m3.push(y4);
    i5 && (p3["data-headlessui-state"] = m3.join(" "));
  }
  if (s6 === import_react.Fragment && Object.keys(R(o10)).length > 0) {
    if (!(0, import_react.isValidElement)(l6) || Array.isArray(l6) && l6.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a4} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o10).map((d7) => `  - ${d7}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d7) => `  - ${d7}`).join(`
`)].join(`
`));
    let i5 = l6.props, m3 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...d7) => e(i5 == null ? void 0 : i5.className(...d7), o10.className) : e(i5 == null ? void 0 : i5.className, o10.className), y4 = m3 ? { className: m3 } : {};
    return (0, import_react.cloneElement)(l6, Object.assign({}, N(l6.props, R(g(o10, ["ref"]))), p3, u4, w(l6.ref, u4.ref), y4));
  }
  return (0, import_react.createElement)(s6, Object.assign({}, g(o10, ["ref"]), s6 !== import_react.Fragment && u4, s6 !== import_react.Fragment && p3), l6);
}
function w(...r6) {
  return { ref: r6.every((t9) => t9 == null) ? void 0 : (t9) => {
    for (let e3 of r6)
      e3 != null && (typeof e3 == "function" ? e3(t9) : e3.current = t9);
  } };
}
function N(...r6) {
  var a4;
  if (r6.length === 0)
    return {};
  if (r6.length === 1)
    return r6[0];
  let t9 = {}, e3 = {};
  for (let s6 of r6)
    for (let n4 in s6)
      n4.startsWith("on") && typeof s6[n4] == "function" ? ((a4 = e3[n4]) != null || (e3[n4] = []), e3[n4].push(s6[n4])) : t9[n4] = s6[n4];
  if (t9.disabled || t9["aria-disabled"])
    return Object.assign(t9, Object.fromEntries(Object.keys(e3).map((s6) => [s6, void 0])));
  for (let s6 in e3)
    Object.assign(t9, { [s6](n4, ...f6) {
      let o10 = e3[s6];
      for (let u4 of o10) {
        if ((n4 instanceof Event || (n4 == null ? void 0 : n4.nativeEvent) instanceof Event) && n4.defaultPrevented)
          return;
        u4(n4, ...f6);
      }
    } });
  return t9;
}
function D(r6) {
  var t9;
  return Object.assign((0, import_react.forwardRef)(r6), { displayName: (t9 = r6.displayName) != null ? t9 : r6.name });
}
function R(r6) {
  let t9 = Object.assign({}, r6);
  for (let e3 in t9)
    t9[e3] === void 0 && delete t9[e3];
  return t9;
}
function g(r6, t9 = []) {
  let e3 = Object.assign({}, r6);
  for (let a4 of t9)
    a4 in e3 && delete e3[a4];
  return e3;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var i = Object.defineProperty;
var d = (t9, e3, n4) => e3 in t9 ? i(t9, e3, { enumerable: true, configurable: true, writable: true, value: n4 }) : t9[e3] = n4;
var r = (t9, e3, n4) => (d(t9, typeof e3 != "symbol" ? e3 + "" : e3, n4), n4);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e3) {
    this.current !== e3 && (this.handoffState = "pending", this.currentId = 0, this.current = e3);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e3, f6) => {
  s.isServer ? (0, import_react2.useEffect)(e3, f6) : (0, import_react2.useLayoutEffect)(e3, f6);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s2(e3) {
  let r6 = (0, import_react3.useRef)(e3);
  return l(() => {
    r6.current = e3;
  }, [e3]), r6;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o2 = function(t9) {
  let e3 = s2(t9);
  return import_react4.default.useCallback((...r6) => e3.current(...r6), [e3]);
};

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var u2 = Symbol();
function T2(t9, n4 = true) {
  return Object.assign(t9, { [u2]: n4 });
}
function y(...t9) {
  let n4 = (0, import_react5.useRef)(t9);
  (0, import_react5.useEffect)(() => {
    n4.current = t9;
  }, [t9]);
  let c6 = o2((e3) => {
    for (let o10 of n4.current)
      o10 != null && (typeof o10 == "function" ? o10(e3) : o10.current = e3);
  });
  return t9.every((e3) => e3 == null || (e3 == null ? void 0 : e3[u2])) ? void 0 : c6;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react6 = __toESM(require_react(), 1);
function l3() {
  let [e3, f6] = (0, import_react6.useState)(s.isHandoffComplete);
  return e3 && s.isHandoffComplete === false && f6(false), (0, import_react6.useEffect)(() => {
    e3 !== true && f6(true);
  }, [e3]), (0, import_react6.useEffect)(() => s.handoff(), []), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o4;
var I = (o4 = import_react7.default.useId) != null ? o4 : function() {
  let n4 = l3(), [e3, u4] = import_react7.default.useState(n4 ? () => s.nextId() : null);
  return l(() => {
    e3 === null && u4(s.nextId());
  }, [e3]), e3 != null ? "" + e3 : void 0;
};

// node_modules/@headlessui/react/dist/components/keyboard.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var o5 = ((r6) => (r6.Space = " ", r6.Enter = "Enter", r6.Escape = "Escape", r6.Backspace = "Backspace", r6.Delete = "Delete", r6.ArrowLeft = "ArrowLeft", r6.ArrowUp = "ArrowUp", r6.ArrowRight = "ArrowRight", r6.ArrowDown = "ArrowDown", r6.Home = "Home", r6.End = "End", r6.PageUp = "PageUp", r6.PageDown = "PageDown", r6.Tab = "Tab", r6))(o5 || {});

// node_modules/@headlessui/react/dist/utils/bugs.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function r3(n4) {
  let e3 = n4.parentElement, l6 = null;
  for (; e3 && !(e3 instanceof HTMLFieldSetElement); )
    e3 instanceof HTMLLegendElement && (l6 = e3), e3 = e3.parentElement;
  let t9 = (e3 == null ? void 0 : e3.getAttribute("disabled")) === "";
  return t9 && i3(l6) ? false : t9;
}
function i3(n4) {
  if (!n4)
    return false;
  let e3 = n4.previousElementSibling;
  for (; e3 !== null; ) {
    if (e3 instanceof HTMLLegendElement)
      return false;
    e3 = e3.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react8 = __toESM(require_react(), 1);
var n = (0, import_react8.createContext)(null);
n.displayName = "OpenClosedContext";
var d2 = ((e3) => (e3[e3.Open = 1] = "Open", e3[e3.Closed = 2] = "Closed", e3[e3.Closing = 4] = "Closing", e3[e3.Opening = 8] = "Opening", e3))(d2 || {});
function C() {
  return (0, import_react8.useContext)(n);
}
function c3({ value: o10, children: r6 }) {
  return import_react8.default.createElement(n.Provider, { value: o10 }, r6);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react9 = __toESM(require_react(), 1);
function i4(t9) {
  var n4;
  if (t9.type)
    return t9.type;
  let e3 = (n4 = t9.as) != null ? n4 : "button";
  if (typeof e3 == "string" && e3.toLowerCase() === "button")
    return "button";
}
function s3(t9, e3) {
  let [n4, u4] = (0, import_react9.useState)(() => i4(t9));
  return l(() => {
    u4(i4(t9));
  }, [t9.type, t9.as]), l(() => {
    n4 || e3.current && e3.current instanceof HTMLButtonElement && !e3.current.hasAttribute("type") && u4("button");
  }, [n4, e3]), n4;
}

// node_modules/@headlessui/react/dist/utils/owner.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function e2(r6) {
  return s.isServer ? null : r6 instanceof Node ? r6.ownerDocument : r6 != null && r6.hasOwnProperty("current") && r6.current instanceof Node ? r6.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/start-transition.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react10 = __toESM(require_react(), 1);
var t5;
var a2 = (t5 = import_react10.default.startTransition) != null ? t5 : function(i5) {
  i5();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o10) => (o10[o10.Open = 0] = "Open", o10[o10.Closed = 1] = "Closed", o10))(q || {});
var z = ((t9) => (t9[t9.ToggleDisclosure = 0] = "ToggleDisclosure", t9[t9.CloseDisclosure = 1] = "CloseDisclosure", t9[t9.SetButtonId = 2] = "SetButtonId", t9[t9.SetPanelId = 3] = "SetPanelId", t9[t9.LinkPanel = 4] = "LinkPanel", t9[t9.UnlinkPanel = 5] = "UnlinkPanel", t9))(z || {});
var Q = { [0]: (e3) => ({ ...e3, disclosureState: u(e3.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e3) => e3.disclosureState === 1 ? e3 : { ...e3, disclosureState: 1 }, [4](e3) {
  return e3.linkedPanel === true ? e3 : { ...e3, linkedPanel: true };
}, [5](e3) {
  return e3.linkedPanel === false ? e3 : { ...e3, linkedPanel: false };
}, [2](e3, n4) {
  return e3.buttonId === n4.buttonId ? e3 : { ...e3, buttonId: n4.buttonId };
}, [3](e3, n4) {
  return e3.panelId === n4.panelId ? e3 : { ...e3, panelId: n4.panelId };
} };
var k = (0, import_react11.createContext)(null);
k.displayName = "DisclosureContext";
function M(e3) {
  let n4 = (0, import_react11.useContext)(k);
  if (n4 === null) {
    let o10 = new Error(`<${e3} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, M), o10;
  }
  return n4;
}
var v = (0, import_react11.createContext)(null);
v.displayName = "DisclosureAPIContext";
function w2(e3) {
  let n4 = (0, import_react11.useContext)(v);
  if (n4 === null) {
    let o10 = new Error(`<${e3} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, w2), o10;
  }
  return n4;
}
var H = (0, import_react11.createContext)(null);
H.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react11.useContext)(H);
}
function Y(e3, n4) {
  return u(n4.type, Q, e3, n4);
}
var Z = import_react11.Fragment;
function ee(e3, n4) {
  let { defaultOpen: o10 = false, ...u4 } = e3, T4 = (0, import_react11.useRef)(null), l6 = y(n4, T2((a4) => {
    T4.current = a4;
  }, e3.as === void 0 || e3.as === import_react11.Fragment)), t9 = (0, import_react11.useRef)(null), f6 = (0, import_react11.useRef)(null), s6 = (0, import_react11.useReducer)(Y, { disclosureState: o10 ? 0 : 1, linkedPanel: false, buttonRef: f6, panelRef: t9, buttonId: null, panelId: null }), [{ disclosureState: i5, buttonId: c6 }, D4] = s6, d7 = o2((a4) => {
    D4({ type: 1 });
    let r6 = e2(T4);
    if (!r6 || !c6)
      return;
    let p3 = (() => a4 ? a4 instanceof HTMLElement ? a4 : a4.current instanceof HTMLElement ? a4.current : r6.getElementById(c6) : r6.getElementById(c6))();
    p3 == null || p3.focus();
  }), P3 = (0, import_react11.useMemo)(() => ({ close: d7 }), [d7]), b2 = (0, import_react11.useMemo)(() => ({ open: i5 === 0, close: d7 }), [i5, d7]), y4 = { ref: l6 };
  return import_react11.default.createElement(k.Provider, { value: s6 }, import_react11.default.createElement(v.Provider, { value: P3 }, import_react11.default.createElement(c3, { value: u(i5, { [0]: d2.Open, [1]: d2.Closed }) }, X({ ourProps: y4, theirProps: u4, slot: b2, defaultTag: Z, name: "Disclosure" }))));
}
var te = "button";
function ne(e3, n4) {
  let o10 = I(), { id: u4 = `headlessui-disclosure-button-${o10}`, ...T4 } = e3, [l6, t9] = M("Disclosure.Button"), f6 = V(), s6 = f6 === null ? false : f6 === l6.panelId, i5 = (0, import_react11.useRef)(null), c6 = y(i5, n4, s6 ? null : l6.buttonRef);
  (0, import_react11.useEffect)(() => {
    if (!s6)
      return t9({ type: 2, buttonId: u4 }), () => {
        t9({ type: 2, buttonId: null });
      };
  }, [u4, t9, s6]);
  let D4 = o2((r6) => {
    var p3;
    if (s6) {
      if (l6.disclosureState === 1)
        return;
      switch (r6.key) {
        case o5.Space:
        case o5.Enter:
          r6.preventDefault(), r6.stopPropagation(), t9({ type: 0 }), (p3 = l6.buttonRef.current) == null || p3.focus();
          break;
      }
    } else
      switch (r6.key) {
        case o5.Space:
        case o5.Enter:
          r6.preventDefault(), r6.stopPropagation(), t9({ type: 0 });
          break;
      }
  }), d7 = o2((r6) => {
    switch (r6.key) {
      case o5.Space:
        r6.preventDefault();
        break;
    }
  }), P3 = o2((r6) => {
    var p3;
    r3(r6.currentTarget) || e3.disabled || (s6 ? (t9({ type: 0 }), (p3 = l6.buttonRef.current) == null || p3.focus()) : t9({ type: 0 }));
  }), b2 = (0, import_react11.useMemo)(() => ({ open: l6.disclosureState === 0 }), [l6]), y4 = s3(e3, i5), a4 = s6 ? { ref: c6, type: y4, onKeyDown: D4, onClick: P3 } : { ref: c6, id: u4, type: y4, "aria-expanded": e3.disabled ? void 0 : l6.disclosureState === 0, "aria-controls": l6.linkedPanel ? l6.panelId : void 0, onKeyDown: D4, onKeyUp: d7, onClick: P3 };
  return X({ ourProps: a4, theirProps: T4, slot: b2, defaultTag: te, name: "Disclosure.Button" });
}
var le = "div";
var oe = S.RenderStrategy | S.Static;
function re(e3, n4) {
  let o10 = I(), { id: u4 = `headlessui-disclosure-panel-${o10}`, ...T4 } = e3, [l6, t9] = M("Disclosure.Panel"), { close: f6 } = w2("Disclosure.Panel"), s6 = y(n4, l6.panelRef, (P3) => {
    a2(() => t9({ type: P3 ? 4 : 5 }));
  });
  (0, import_react11.useEffect)(() => (t9({ type: 3, panelId: u4 }), () => {
    t9({ type: 3, panelId: null });
  }), [u4, t9]);
  let i5 = C(), c6 = (() => i5 !== null ? (i5 & d2.Open) === d2.Open : l6.disclosureState === 0)(), D4 = (0, import_react11.useMemo)(() => ({ open: l6.disclosureState === 0, close: f6 }), [l6, f6]), d7 = { ref: s6, id: u4 };
  return import_react11.default.createElement(H.Provider, { value: l6.panelId }, X({ ourProps: d7, theirProps: T4, slot: D4, defaultTag: le, features: oe, visible: c6, name: "Disclosure.Panel" }));
}
var se = D(ee);
var ue = D(ne);
var ie = D(re);
var ve = Object.assign(se, { Button: ue, Panel: ie });

// node_modules/@headlessui/react/dist/components/menu/menu.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react18 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/disposables.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@headlessui/react/dist/utils/micro-task.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function t6(e3) {
  typeof queueMicrotask == "function" ? queueMicrotask(e3) : Promise.resolve().then(e3).catch((o10) => setTimeout(() => {
    throw o10;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o7() {
  let n4 = [], r6 = { addEventListener(e3, t9, s6, a4) {
    return e3.addEventListener(t9, s6, a4), r6.add(() => e3.removeEventListener(t9, s6, a4));
  }, requestAnimationFrame(...e3) {
    let t9 = requestAnimationFrame(...e3);
    return r6.add(() => cancelAnimationFrame(t9));
  }, nextFrame(...e3) {
    return r6.requestAnimationFrame(() => r6.requestAnimationFrame(...e3));
  }, setTimeout(...e3) {
    let t9 = setTimeout(...e3);
    return r6.add(() => clearTimeout(t9));
  }, microTask(...e3) {
    let t9 = { current: true };
    return t6(() => {
      t9.current && e3[0]();
    }), r6.add(() => {
      t9.current = false;
    });
  }, style(e3, t9, s6) {
    let a4 = e3.style.getPropertyValue(t9);
    return Object.assign(e3.style, { [t9]: s6 }), this.add(() => {
      Object.assign(e3.style, { [t9]: a4 });
    });
  }, group(e3) {
    let t9 = o7();
    return e3(t9), this.add(() => t9.dispose());
  }, add(e3) {
    return n4.push(e3), () => {
      let t9 = n4.indexOf(e3);
      if (t9 >= 0)
        for (let s6 of n4.splice(t9, 1))
          s6();
    };
  }, dispose() {
    for (let e3 of n4.splice(0))
      e3();
  } };
  return r6;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react12 = __toESM(require_react(), 1);
function p2() {
  let [e3] = (0, import_react12.useState)(o7);
  return (0, import_react12.useEffect)(() => () => e3.dispose(), [e3]), e3;
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function f(r6) {
  throw new Error("Unexpected object: " + r6);
}
var a3 = ((e3) => (e3[e3.First = 0] = "First", e3[e3.Previous = 1] = "Previous", e3[e3.Next = 2] = "Next", e3[e3.Last = 3] = "Last", e3[e3.Specific = 4] = "Specific", e3[e3.Nothing = 5] = "Nothing", e3))(a3 || {});
function x2(r6, n4) {
  let t9 = n4.resolveItems();
  if (t9.length <= 0)
    return null;
  let l6 = n4.resolveActiveIndex(), s6 = l6 != null ? l6 : -1, d7 = (() => {
    switch (r6.focus) {
      case 0:
        return t9.findIndex((e3) => !n4.resolveDisabled(e3));
      case 1: {
        let e3 = t9.slice().reverse().findIndex((i5, c6, u4) => s6 !== -1 && u4.length - c6 - 1 >= s6 ? false : !n4.resolveDisabled(i5));
        return e3 === -1 ? e3 : t9.length - 1 - e3;
      }
      case 2:
        return t9.findIndex((e3, i5) => i5 <= s6 ? false : !n4.resolveDisabled(e3));
      case 3: {
        let e3 = t9.slice().reverse().findIndex((i5) => !n4.resolveDisabled(i5));
        return e3 === -1 ? e3 : t9.length - 1 - e3;
      }
      case 4:
        return t9.findIndex((e3) => n4.resolveId(e3) === r6.id);
      case 5:
        return null;
      default:
        f(r6);
    }
  })();
  return d7 === -1 ? l6 : d7;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var c4 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e3) => `${e3}:not([tabindex='-1'])`).join(",");
var M2 = ((n4) => (n4[n4.First = 1] = "First", n4[n4.Previous = 2] = "Previous", n4[n4.Next = 4] = "Next", n4[n4.Last = 8] = "Last", n4[n4.WrapAround = 16] = "WrapAround", n4[n4.NoScroll = 32] = "NoScroll", n4))(M2 || {});
var N3 = ((o10) => (o10[o10.Error = 0] = "Error", o10[o10.Overflow = 1] = "Overflow", o10[o10.Success = 2] = "Success", o10[o10.Underflow = 3] = "Underflow", o10))(N3 || {});
var F2 = ((t9) => (t9[t9.Previous = -1] = "Previous", t9[t9.Next = 1] = "Next", t9))(F2 || {});
function f2(e3 = document.body) {
  return e3 == null ? [] : Array.from(e3.querySelectorAll(c4)).sort((r6, t9) => Math.sign((r6.tabIndex || Number.MAX_SAFE_INTEGER) - (t9.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T3 = ((t9) => (t9[t9.Strict = 0] = "Strict", t9[t9.Loose = 1] = "Loose", t9))(T3 || {});
function h3(e3, r6 = 0) {
  var t9;
  return e3 === ((t9 = e2(e3)) == null ? void 0 : t9.body) ? false : u(r6, { [0]() {
    return e3.matches(c4);
  }, [1]() {
    let l6 = e3;
    for (; l6 !== null; ) {
      if (l6.matches(c4))
        return true;
      l6 = l6.parentElement;
    }
    return false;
  } });
}
function D2(e3) {
  let r6 = e2(e3);
  o7().nextFrame(() => {
    r6 && !h3(r6.activeElement, 0) && y2(e3);
  });
}
var w3 = ((t9) => (t9[t9.Keyboard = 0] = "Keyboard", t9[t9.Mouse = 1] = "Mouse", t9))(w3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e3) => {
  e3.metaKey || e3.altKey || e3.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e3) => {
  e3.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e3.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y2(e3) {
  e3 == null || e3.focus({ preventScroll: true });
}
var S3 = ["textarea", "input"].join(",");
function H2(e3) {
  var r6, t9;
  return (t9 = (r6 = e3 == null ? void 0 : e3.matches) == null ? void 0 : r6.call(e3, S3)) != null ? t9 : false;
}
function I3(e3, r6 = (t9) => t9) {
  return e3.slice().sort((t9, l6) => {
    let o10 = r6(t9), i5 = r6(l6);
    if (o10 === null || i5 === null)
      return 0;
    let n4 = o10.compareDocumentPosition(i5);
    return n4 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n4 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e3, r6) {
  return O(f2(), r6, { relativeTo: e3 });
}
function O(e3, r6, { sorted: t9 = true, relativeTo: l6 = null, skipElements: o10 = [] } = {}) {
  let i5 = Array.isArray(e3) ? e3.length > 0 ? e3[0].ownerDocument : document : e3.ownerDocument, n4 = Array.isArray(e3) ? t9 ? I3(e3) : e3 : f2(e3);
  o10.length > 0 && n4.length > 1 && (n4 = n4.filter((s6) => !o10.includes(s6))), l6 = l6 != null ? l6 : i5.activeElement;
  let E4 = (() => {
    if (r6 & 5)
      return 1;
    if (r6 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x3 = (() => {
    if (r6 & 1)
      return 0;
    if (r6 & 2)
      return Math.max(0, n4.indexOf(l6)) - 1;
    if (r6 & 4)
      return Math.max(0, n4.indexOf(l6)) + 1;
    if (r6 & 8)
      return n4.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p3 = r6 & 32 ? { preventScroll: true } : {}, d7 = 0, a4 = n4.length, u4;
  do {
    if (d7 >= a4 || d7 + a4 <= 0)
      return 0;
    let s6 = x3 + d7;
    if (r6 & 16)
      s6 = (s6 + a4) % a4;
    else {
      if (s6 < 0)
        return 3;
      if (s6 >= a4)
        return 1;
    }
    u4 = n4[s6], u4 == null || u4.focus(p3), d7 += E4;
  } while (u4 !== i5.activeElement);
  return r6 & 6 && H2(u4) && u4.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react13 = __toESM(require_react(), 1);
function d3(e3, r6, n4) {
  let o10 = s2(r6);
  (0, import_react13.useEffect)(() => {
    function t9(u4) {
      o10.current(u4);
    }
    return document.addEventListener(e3, t9, n4), () => document.removeEventListener(e3, t9, n4);
  }, [e3, n4]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L(m3, E4, c6 = true) {
  let i5 = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    requestAnimationFrame(() => {
      i5.current = c6;
    });
  }, [c6]);
  function f6(e3, o10) {
    if (!i5.current || e3.defaultPrevented)
      return;
    let l6 = function r6(t9) {
      return typeof t9 == "function" ? r6(t9()) : Array.isArray(t9) || t9 instanceof Set ? t9 : [t9];
    }(m3), n4 = o10(e3);
    if (n4 !== null && n4.getRootNode().contains(n4)) {
      for (let r6 of l6) {
        if (r6 === null)
          continue;
        let t9 = r6 instanceof HTMLElement ? r6 : r6.current;
        if (t9 != null && t9.contains(n4) || e3.composed && e3.composedPath().includes(t9))
          return;
      }
      return !h3(n4, T3.Loose) && n4.tabIndex !== -1 && e3.preventDefault(), E4(e3, n4);
    }
  }
  let u4 = (0, import_react14.useRef)(null);
  d3("mousedown", (e3) => {
    var o10, l6;
    i5.current && (u4.current = ((l6 = (o10 = e3.composedPath) == null ? void 0 : o10.call(e3)) == null ? void 0 : l6[0]) || e3.target);
  }, true), d3("click", (e3) => {
    u4.current && (f6(e3, () => u4.current), u4.current = null);
  }, true), d3("blur", (e3) => f6(e3, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react15 = __toESM(require_react(), 1);
function F3({ container: e3, accept: t9, walk: r6, enabled: c6 = true }) {
  let o10 = (0, import_react15.useRef)(t9), l6 = (0, import_react15.useRef)(r6);
  (0, import_react15.useEffect)(() => {
    o10.current = t9, l6.current = r6;
  }, [t9, r6]), l(() => {
    if (!e3 || !c6)
      return;
    let n4 = e2(e3);
    if (!n4)
      return;
    let f6 = o10.current, p3 = l6.current, d7 = Object.assign((i5) => f6(i5), { acceptNode: f6 }), u4 = n4.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, d7, false);
    for (; u4.nextNode(); )
      p3(u4.currentNode);
  }, [e3, c6, o10, l6]);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react16 = __toESM(require_react(), 1);
function n2(...e3) {
  return (0, import_react16.useMemo)(() => e2(...e3), [...e3]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react17 = __toESM(require_react(), 1);
function t8(e3) {
  return [e3.screenX, e3.screenY];
}
function u3() {
  let e3 = (0, import_react17.useRef)([-1, -1]);
  return { wasMoved(r6) {
    let n4 = t8(r6);
    return e3.current[0] === n4[0] && e3.current[1] === n4[1] ? false : (e3.current = n4, true);
  }, update(r6) {
    e3.current = t8(r6);
  } };
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var pe = ((r6) => (r6[r6.Open = 0] = "Open", r6[r6.Closed = 1] = "Closed", r6))(pe || {});
var ce = ((r6) => (r6[r6.Pointer = 0] = "Pointer", r6[r6.Other = 1] = "Other", r6))(ce || {});
var me = ((a4) => (a4[a4.OpenMenu = 0] = "OpenMenu", a4[a4.CloseMenu = 1] = "CloseMenu", a4[a4.GoToItem = 2] = "GoToItem", a4[a4.Search = 3] = "Search", a4[a4.ClearSearch = 4] = "ClearSearch", a4[a4.RegisterItem = 5] = "RegisterItem", a4[a4.UnregisterItem = 6] = "UnregisterItem", a4))(me || {});
function w4(e3, u4 = (r6) => r6) {
  let r6 = e3.activeItemIndex !== null ? e3.items[e3.activeItemIndex] : null, i5 = I3(u4(e3.items.slice()), (t9) => t9.dataRef.current.domRef.current), s6 = r6 ? i5.indexOf(r6) : null;
  return s6 === -1 && (s6 = null), { items: i5, activeItemIndex: s6 };
}
var de = { [1](e3) {
  return e3.menuState === 1 ? e3 : { ...e3, activeItemIndex: null, menuState: 1 };
}, [0](e3) {
  return e3.menuState === 0 ? e3 : { ...e3, menuState: 0 };
}, [2]: (e3, u4) => {
  var s6;
  let r6 = w4(e3), i5 = x2(u4, { resolveItems: () => r6.items, resolveActiveIndex: () => r6.activeItemIndex, resolveId: (t9) => t9.id, resolveDisabled: (t9) => t9.dataRef.current.disabled });
  return { ...e3, ...r6, searchQuery: "", activeItemIndex: i5, activationTrigger: (s6 = u4.trigger) != null ? s6 : 1 };
}, [3]: (e3, u4) => {
  let i5 = e3.searchQuery !== "" ? 0 : 1, s6 = e3.searchQuery + u4.value.toLowerCase(), o10 = (e3.activeItemIndex !== null ? e3.items.slice(e3.activeItemIndex + i5).concat(e3.items.slice(0, e3.activeItemIndex + i5)) : e3.items).find((l6) => {
    var m3;
    return ((m3 = l6.dataRef.current.textValue) == null ? void 0 : m3.startsWith(s6)) && !l6.dataRef.current.disabled;
  }), a4 = o10 ? e3.items.indexOf(o10) : -1;
  return a4 === -1 || a4 === e3.activeItemIndex ? { ...e3, searchQuery: s6 } : { ...e3, searchQuery: s6, activeItemIndex: a4, activationTrigger: 1 };
}, [4](e3) {
  return e3.searchQuery === "" ? e3 : { ...e3, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e3, u4) => {
  let r6 = w4(e3, (i5) => [...i5, { id: u4.id, dataRef: u4.dataRef }]);
  return { ...e3, ...r6 };
}, [6]: (e3, u4) => {
  let r6 = w4(e3, (i5) => {
    let s6 = i5.findIndex((t9) => t9.id === u4.id);
    return s6 !== -1 && i5.splice(s6, 1), i5;
  });
  return { ...e3, ...r6, activationTrigger: 1 };
} };
var U = (0, import_react18.createContext)(null);
U.displayName = "MenuContext";
function F4(e3) {
  let u4 = (0, import_react18.useContext)(U);
  if (u4 === null) {
    let r6 = new Error(`<${e3} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r6, F4), r6;
  }
  return u4;
}
function fe(e3, u4) {
  return u(u4.type, de, e3, u4);
}
var Te = import_react18.Fragment;
function ye(e3, u4) {
  let r6 = (0, import_react18.useReducer)(fe, { menuState: 1, buttonRef: (0, import_react18.createRef)(), itemsRef: (0, import_react18.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i5, itemsRef: s6, buttonRef: t9 }, o10] = r6, a4 = y(u4);
  L([t9, s6], (g3, A2) => {
    var I5;
    o10({ type: 1 }), h3(A2, T3.Loose) || (g3.preventDefault(), (I5 = t9.current) == null || I5.focus());
  }, i5 === 0);
  let l6 = o2(() => {
    o10({ type: 1 });
  }), m3 = (0, import_react18.useMemo)(() => ({ open: i5 === 0, close: l6 }), [i5, l6]), M3 = e3, f6 = { ref: a4 };
  return import_react18.default.createElement(U.Provider, { value: r6 }, import_react18.default.createElement(c3, { value: u(i5, { [0]: d2.Open, [1]: d2.Closed }) }, X({ ourProps: f6, theirProps: M3, slot: m3, defaultTag: Te, name: "Menu" })));
}
var Ie = "button";
function Me(e3, u4) {
  var I5;
  let r6 = I(), { id: i5 = `headlessui-menu-button-${r6}`, ...s6 } = e3, [t9, o10] = F4("Menu.Button"), a4 = y(t9.buttonRef, u4), l6 = p2(), m3 = o2((p3) => {
    switch (p3.key) {
      case o5.Space:
      case o5.Enter:
      case o5.ArrowDown:
        p3.preventDefault(), p3.stopPropagation(), o10({ type: 0 }), l6.nextFrame(() => o10({ type: 2, focus: a3.First }));
        break;
      case o5.ArrowUp:
        p3.preventDefault(), p3.stopPropagation(), o10({ type: 0 }), l6.nextFrame(() => o10({ type: 2, focus: a3.Last }));
        break;
    }
  }), M3 = o2((p3) => {
    switch (p3.key) {
      case o5.Space:
        p3.preventDefault();
        break;
    }
  }), f6 = o2((p3) => {
    if (r3(p3.currentTarget))
      return p3.preventDefault();
    e3.disabled || (t9.menuState === 0 ? (o10({ type: 1 }), l6.nextFrame(() => {
      var R2;
      return (R2 = t9.buttonRef.current) == null ? void 0 : R2.focus({ preventScroll: true });
    })) : (p3.preventDefault(), o10({ type: 0 })));
  }), g3 = (0, import_react18.useMemo)(() => ({ open: t9.menuState === 0 }), [t9]), A2 = { ref: a4, id: i5, type: s3(e3, t9.buttonRef), "aria-haspopup": "menu", "aria-controls": (I5 = t9.itemsRef.current) == null ? void 0 : I5.id, "aria-expanded": e3.disabled ? void 0 : t9.menuState === 0, onKeyDown: m3, onKeyUp: M3, onClick: f6 };
  return X({ ourProps: A2, theirProps: s6, slot: g3, defaultTag: Ie, name: "Menu.Button" });
}
var ge = "div";
var Re = S.RenderStrategy | S.Static;
function Ae(e3, u4) {
  var R2, E4;
  let r6 = I(), { id: i5 = `headlessui-menu-items-${r6}`, ...s6 } = e3, [t9, o10] = F4("Menu.Items"), a4 = y(t9.itemsRef, u4), l6 = n2(t9.itemsRef), m3 = p2(), M3 = C(), f6 = (() => M3 !== null ? (M3 & d2.Open) === d2.Open : t9.menuState === 0)();
  (0, import_react18.useEffect)(() => {
    let n4 = t9.itemsRef.current;
    n4 && t9.menuState === 0 && n4 !== (l6 == null ? void 0 : l6.activeElement) && n4.focus({ preventScroll: true });
  }, [t9.menuState, t9.itemsRef, l6]), F3({ container: t9.itemsRef.current, enabled: t9.menuState === 0, accept(n4) {
    return n4.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n4.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n4) {
    n4.setAttribute("role", "none");
  } });
  let g3 = o2((n4) => {
    var S5, O2;
    switch (m3.dispose(), n4.key) {
      case o5.Space:
        if (t9.searchQuery !== "")
          return n4.preventDefault(), n4.stopPropagation(), o10({ type: 3, value: n4.key });
      case o5.Enter:
        if (n4.preventDefault(), n4.stopPropagation(), o10({ type: 1 }), t9.activeItemIndex !== null) {
          let { dataRef: c6 } = t9.items[t9.activeItemIndex];
          (O2 = (S5 = c6.current) == null ? void 0 : S5.domRef.current) == null || O2.click();
        }
        D2(t9.buttonRef.current);
        break;
      case o5.ArrowDown:
        return n4.preventDefault(), n4.stopPropagation(), o10({ type: 2, focus: a3.Next });
      case o5.ArrowUp:
        return n4.preventDefault(), n4.stopPropagation(), o10({ type: 2, focus: a3.Previous });
      case o5.Home:
      case o5.PageUp:
        return n4.preventDefault(), n4.stopPropagation(), o10({ type: 2, focus: a3.First });
      case o5.End:
      case o5.PageDown:
        return n4.preventDefault(), n4.stopPropagation(), o10({ type: 2, focus: a3.Last });
      case o5.Escape:
        n4.preventDefault(), n4.stopPropagation(), o10({ type: 1 }), o7().nextFrame(() => {
          var c6;
          return (c6 = t9.buttonRef.current) == null ? void 0 : c6.focus({ preventScroll: true });
        });
        break;
      case o5.Tab:
        n4.preventDefault(), n4.stopPropagation(), o10({ type: 1 }), o7().nextFrame(() => {
          _(t9.buttonRef.current, n4.shiftKey ? M2.Previous : M2.Next);
        });
        break;
      default:
        n4.key.length === 1 && (o10({ type: 3, value: n4.key }), m3.setTimeout(() => o10({ type: 4 }), 350));
        break;
    }
  }), A2 = o2((n4) => {
    switch (n4.key) {
      case o5.Space:
        n4.preventDefault();
        break;
    }
  }), I5 = (0, import_react18.useMemo)(() => ({ open: t9.menuState === 0 }), [t9]), p3 = { "aria-activedescendant": t9.activeItemIndex === null || (R2 = t9.items[t9.activeItemIndex]) == null ? void 0 : R2.id, "aria-labelledby": (E4 = t9.buttonRef.current) == null ? void 0 : E4.id, id: i5, onKeyDown: g3, onKeyUp: A2, role: "menu", tabIndex: 0, ref: a4 };
  return X({ ourProps: p3, theirProps: s6, slot: I5, defaultTag: ge, features: Re, visible: f6, name: "Menu.Items" });
}
var be = import_react18.Fragment;
function Ee(e3, u4) {
  let r6 = I(), { id: i5 = `headlessui-menu-item-${r6}`, disabled: s6 = false, ...t9 } = e3, [o10, a4] = F4("Menu.Item"), l6 = o10.activeItemIndex !== null ? o10.items[o10.activeItemIndex].id === i5 : false, m3 = (0, import_react18.useRef)(null), M3 = y(u4, m3);
  l(() => {
    if (o10.menuState !== 0 || !l6 || o10.activationTrigger === 0)
      return;
    let c6 = o7();
    return c6.requestAnimationFrame(() => {
      var b2, _3;
      (_3 = (b2 = m3.current) == null ? void 0 : b2.scrollIntoView) == null || _3.call(b2, { block: "nearest" });
    }), c6.dispose;
  }, [m3, l6, o10.menuState, o10.activationTrigger, o10.activeItemIndex]);
  let f6 = (0, import_react18.useRef)({ disabled: s6, domRef: m3 });
  l(() => {
    f6.current.disabled = s6;
  }, [f6, s6]), l(() => {
    var c6, b2;
    f6.current.textValue = (b2 = (c6 = m3.current) == null ? void 0 : c6.textContent) == null ? void 0 : b2.toLowerCase();
  }, [f6, m3]), l(() => (a4({ type: 5, id: i5, dataRef: f6 }), () => a4({ type: 6, id: i5 })), [f6, i5]);
  let g3 = o2(() => {
    a4({ type: 1 });
  }), A2 = o2((c6) => {
    if (s6)
      return c6.preventDefault();
    a4({ type: 1 }), D2(o10.buttonRef.current);
  }), I5 = o2(() => {
    if (s6)
      return a4({ type: 2, focus: a3.Nothing });
    a4({ type: 2, focus: a3.Specific, id: i5 });
  }), p3 = u3(), R2 = o2((c6) => p3.update(c6)), E4 = o2((c6) => {
    p3.wasMoved(c6) && (s6 || l6 || a4({ type: 2, focus: a3.Specific, id: i5, trigger: 0 }));
  }), n4 = o2((c6) => {
    p3.wasMoved(c6) && (s6 || l6 && a4({ type: 2, focus: a3.Nothing }));
  }), S5 = (0, import_react18.useMemo)(() => ({ active: l6, disabled: s6, close: g3 }), [l6, s6, g3]);
  return X({ ourProps: { id: i5, ref: M3, role: "menuitem", tabIndex: s6 === true ? void 0 : -1, "aria-disabled": s6 === true ? true : void 0, disabled: void 0, onClick: A2, onFocus: I5, onPointerEnter: R2, onMouseEnter: R2, onPointerMove: E4, onMouseMove: E4, onPointerLeave: n4, onMouseLeave: n4 }, theirProps: t9, slot: S5, defaultTag: be, name: "Menu.Item" });
}
var Se = D(ye);
var Pe = D(Me);
var ve2 = D(Ae);
var xe = D(Ee);
var ot = Object.assign(Se, { Button: Pe, Items: ve2, Item: xe });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react21 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react19 = __toESM(require_react(), 1);
function f3() {
  let e3 = (0, import_react19.useRef)(false);
  return l(() => (e3.current = true, () => {
    e3.current = false;
  }), []), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@headlessui/react/dist/utils/once.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function l5(r6) {
  let e3 = { called: false };
  return (...t9) => {
    if (!e3.called)
      return e3.called = true, r6(...t9);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d5(t9, ...e3) {
  t9 && e3.length > 0 && t9.classList.add(...e3);
}
function v2(t9, ...e3) {
  t9 && e3.length > 0 && t9.classList.remove(...e3);
}
function F5(t9, e3) {
  let n4 = o7();
  if (!t9)
    return n4.dispose;
  let { transitionDuration: m3, transitionDelay: o10 } = getComputedStyle(t9), [u4, p3] = [m3, o10].map((a4) => {
    let [r6 = 0] = a4.split(",").filter(Boolean).map((i5) => i5.includes("ms") ? parseFloat(i5) : parseFloat(i5) * 1e3).sort((i5, f6) => f6 - i5);
    return r6;
  }), l6 = u4 + p3;
  if (l6 !== 0) {
    n4.group((r6) => {
      r6.setTimeout(() => {
        e3(), r6.dispose();
      }, l6), r6.addEventListener(t9, "transitionrun", (i5) => {
        i5.target === i5.currentTarget && r6.dispose();
      });
    });
    let a4 = n4.addEventListener(t9, "transitionend", (r6) => {
      r6.target === r6.currentTarget && (e3(), a4());
    });
  } else
    e3();
  return n4.add(() => e3()), n4.dispose;
}
function y3(t9, e3, n4, m3) {
  let o10 = n4 ? "enter" : "leave", u4 = o7(), p3 = m3 !== void 0 ? l5(m3) : () => {
  };
  o10 === "enter" && (t9.removeAttribute("hidden"), t9.style.display = "");
  let l6 = u(o10, { enter: () => e3.enter, leave: () => e3.leave }), a4 = u(o10, { enter: () => e3.enterTo, leave: () => e3.leaveTo }), r6 = u(o10, { enter: () => e3.enterFrom, leave: () => e3.leaveFrom });
  return v2(t9, ...e3.enter, ...e3.enterTo, ...e3.enterFrom, ...e3.leave, ...e3.leaveFrom, ...e3.leaveTo, ...e3.entered), d5(t9, ...l6, ...r6), u4.nextFrame(() => {
    v2(t9, ...r6), d5(t9, ...a4), F5(t9, () => (v2(t9, ...l6), d5(t9, ...e3.entered), p3()));
  }), u4.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D3({ container: i5, direction: t9, classes: o10, onStart: s6, onStop: u4 }) {
  let a4 = f3(), c6 = p2(), r6 = s2(t9);
  l(() => {
    let e3 = o7();
    c6.add(e3.dispose);
    let n4 = i5.current;
    if (n4 && r6.current !== "idle" && a4.current)
      return e3.dispose(), s6.current(r6.current), e3.add(y3(n4, o10.current, r6.current === "enter", () => {
        e3.dispose(), u4.current(r6.current);
      })), e3.dispose;
  }, [t9]);
}

// node_modules/@headlessui/react/dist/hooks/use-flags.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react20 = __toESM(require_react(), 1);
function c5(a4 = 0) {
  let [l6, r6] = (0, import_react20.useState)(a4), t9 = f3(), o10 = (0, import_react20.useCallback)((e3) => {
    t9.current && r6((u4) => u4 | e3);
  }, [l6, t9]), m3 = (0, import_react20.useCallback)((e3) => Boolean(l6 & e3), [l6]), s6 = (0, import_react20.useCallback)((e3) => {
    t9.current && r6((u4) => u4 & ~e3);
  }, [r6, t9]), g3 = (0, import_react20.useCallback)((e3) => {
    t9.current && r6((u4) => u4 ^ e3);
  }, [r6]);
  return { flags: l6, addFlag: o10, hasFlag: m3, removeFlag: s6, toggleFlag: g3 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S4(n4 = "") {
  return n4.split(" ").filter((t9) => t9.trim().length > 1);
}
var A = (0, import_react21.createContext)(null);
A.displayName = "TransitionContext";
var Ce = ((r6) => (r6.Visible = "visible", r6.Hidden = "hidden", r6))(Ce || {});
function Ee2() {
  let n4 = (0, import_react21.useContext)(A);
  if (n4 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n4;
}
function be2() {
  let n4 = (0, import_react21.useContext)(I4);
  if (n4 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n4;
}
var I4 = (0, import_react21.createContext)(null);
I4.displayName = "NestingContext";
function _2(n4) {
  return "children" in n4 ? _2(n4.children) : n4.current.filter(({ el: t9 }) => t9.current !== null).filter(({ state: t9 }) => t9 === "visible").length > 0;
}
function ne2(n4, t9) {
  let r6 = s2(n4), o10 = (0, import_react21.useRef)([]), y4 = f3(), N5 = p2(), p3 = o2((s6, e3 = j.Hidden) => {
    let a4 = o10.current.findIndex(({ el: i5 }) => i5 === s6);
    a4 !== -1 && (u(e3, { [j.Unmount]() {
      o10.current.splice(a4, 1);
    }, [j.Hidden]() {
      o10.current[a4].state = "hidden";
    } }), N5.microTask(() => {
      var i5;
      !_2(o10) && y4.current && ((i5 = r6.current) == null || i5.call(r6));
    }));
  }), x3 = o2((s6) => {
    let e3 = o10.current.find(({ el: a4 }) => a4 === s6);
    return e3 ? e3.state !== "visible" && (e3.state = "visible") : o10.current.push({ el: s6, state: "visible" }), () => p3(s6, j.Unmount);
  }), m3 = (0, import_react21.useRef)([]), c6 = (0, import_react21.useRef)(Promise.resolve()), u4 = (0, import_react21.useRef)({ enter: [], leave: [], idle: [] }), h4 = o2((s6, e3, a4) => {
    m3.current.splice(0), t9 && (t9.chains.current[e3] = t9.chains.current[e3].filter(([i5]) => i5 !== s6)), t9 == null || t9.chains.current[e3].push([s6, new Promise((i5) => {
      m3.current.push(i5);
    })]), t9 == null || t9.chains.current[e3].push([s6, new Promise((i5) => {
      Promise.all(u4.current[e3].map(([l6, T4]) => T4)).then(() => i5());
    })]), e3 === "enter" ? c6.current = c6.current.then(() => t9 == null ? void 0 : t9.wait.current).then(() => a4(e3)) : a4(e3);
  }), v3 = o2((s6, e3, a4) => {
    Promise.all(u4.current[e3].splice(0).map(([i5, l6]) => l6)).then(() => {
      var i5;
      (i5 = m3.current.shift()) == null || i5();
    }).then(() => a4(e3));
  });
  return (0, import_react21.useMemo)(() => ({ children: o10, register: x3, unregister: p3, onStart: h4, onStop: v3, wait: c6, chains: u4 }), [x3, p3, o10, h4, v3, u4, c6]);
}
function Se2() {
}
var xe2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function re2(n4) {
  var r6;
  let t9 = {};
  for (let o10 of xe2)
    t9[o10] = (r6 = n4[o10]) != null ? r6 : Se2;
  return t9;
}
function Pe2(n4) {
  let t9 = (0, import_react21.useRef)(re2(n4));
  return (0, import_react21.useEffect)(() => {
    t9.current = re2(n4);
  }, [n4]), t9;
}
var Re2 = "div";
var ie2 = S.RenderStrategy;
function ye2(n4, t9) {
  let { beforeEnter: r6, afterEnter: o10, beforeLeave: y4, afterLeave: N5, enter: p3, enterFrom: x3, enterTo: m3, entered: c6, leave: u4, leaveFrom: h4, leaveTo: v3, ...s6 } = n4, e3 = (0, import_react21.useRef)(null), a4 = y(e3, t9), i5 = s6.unmount ? j.Unmount : j.Hidden, { show: l6, appear: T4, initial: se2 } = Ee2(), [g3, M3] = (0, import_react21.useState)(l6 ? "visible" : "hidden"), z2 = be2(), { register: F6, unregister: L2 } = z2, U2 = (0, import_react21.useRef)(null);
  (0, import_react21.useEffect)(() => F6(e3), [F6, e3]), (0, import_react21.useEffect)(() => {
    if (i5 === j.Hidden && e3.current) {
      if (l6 && g3 !== "visible") {
        M3("visible");
        return;
      }
      return u(g3, { ["hidden"]: () => L2(e3), ["visible"]: () => F6(e3) });
    }
  }, [g3, e3, F6, L2, l6, i5]);
  let j2 = s2({ enter: S4(p3), enterFrom: S4(x3), enterTo: S4(m3), entered: S4(c6), leave: S4(u4), leaveFrom: S4(h4), leaveTo: S4(v3) }), w5 = Pe2({ beforeEnter: r6, afterEnter: o10, beforeLeave: y4, afterLeave: N5 }), k2 = l3();
  (0, import_react21.useEffect)(() => {
    if (k2 && g3 === "visible" && e3.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e3, g3, k2]);
  let G2 = se2 && !T4, ae = (() => !k2 || G2 || U2.current === l6 ? "idle" : l6 ? "enter" : "leave")(), H4 = c5(0), le2 = o2((C3) => u(C3, { enter: () => {
    H4.addFlag(d2.Opening), w5.current.beforeEnter();
  }, leave: () => {
    H4.addFlag(d2.Closing), w5.current.beforeLeave();
  }, idle: () => {
  } })), ue2 = o2((C3) => u(C3, { enter: () => {
    H4.removeFlag(d2.Opening), w5.current.afterEnter();
  }, leave: () => {
    H4.removeFlag(d2.Closing), w5.current.afterLeave();
  }, idle: () => {
  } })), O2 = ne2(() => {
    M3("hidden"), L2(e3);
  }, z2);
  D3({ container: e3, classes: j2, direction: ae, onStart: s2((C3) => {
    O2.onStart(e3, C3, le2);
  }), onStop: s2((C3) => {
    O2.onStop(e3, C3, ue2), C3 === "leave" && !_2(O2) && (M3("hidden"), L2(e3));
  }) }), (0, import_react21.useEffect)(() => {
    G2 && (i5 === j.Hidden ? U2.current = null : U2.current = l6);
  }, [l6, G2, g3]);
  let B2 = s6, Te2 = { ref: a4 };
  return T4 && l6 && (B2 = { ...B2, className: e(s6.className, ...j2.current.enter, ...j2.current.enterFrom) }), import_react21.default.createElement(I4.Provider, { value: O2 }, import_react21.default.createElement(c3, { value: u(g3, { ["visible"]: d2.Open, ["hidden"]: d2.Closed }) | H4.flags }, X({ ourProps: Te2, theirProps: B2, defaultTag: Re2, features: ie2, visible: g3 === "visible", name: "Transition.Child" })));
}
function Ne(n4, t9) {
  let { show: r6, appear: o10 = false, unmount: y4, ...N5 } = n4, p3 = (0, import_react21.useRef)(null), x3 = y(p3, t9);
  l3();
  let m3 = C();
  if (r6 === void 0 && m3 !== null && (r6 = (m3 & d2.Open) === d2.Open), ![true, false].includes(r6))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c6, u4] = (0, import_react21.useState)(r6 ? "visible" : "hidden"), h4 = ne2(() => {
    u4("hidden");
  }), [v3, s6] = (0, import_react21.useState)(true), e3 = (0, import_react21.useRef)([r6]);
  l(() => {
    v3 !== false && e3.current[e3.current.length - 1] !== r6 && (e3.current.push(r6), s6(false));
  }, [e3, r6]);
  let a4 = (0, import_react21.useMemo)(() => ({ show: r6, appear: o10, initial: v3 }), [r6, o10, v3]);
  (0, import_react21.useEffect)(() => {
    if (r6)
      u4("visible");
    else if (!_2(h4))
      u4("hidden");
    else {
      let l6 = p3.current;
      if (!l6)
        return;
      let T4 = l6.getBoundingClientRect();
      T4.x === 0 && T4.y === 0 && T4.width === 0 && T4.height === 0 && u4("hidden");
    }
  }, [r6, h4]);
  let i5 = { unmount: y4 };
  return import_react21.default.createElement(I4.Provider, { value: h4 }, import_react21.default.createElement(A.Provider, { value: a4 }, X({ ourProps: { ...i5, as: import_react21.Fragment, children: import_react21.default.createElement(oe2, { ref: x3, ...i5, ...N5 }) }, theirProps: {}, defaultTag: import_react21.Fragment, features: ie2, visible: c6 === "visible", name: "Transition" })));
}
function He(n4, t9) {
  let r6 = (0, import_react21.useContext)(A) !== null, o10 = C() !== null;
  return import_react21.default.createElement(import_react21.default.Fragment, null, !r6 && o10 ? import_react21.default.createElement(q3, { ref: t9, ...n4 }) : import_react21.default.createElement(oe2, { ref: t9, ...n4 }));
}
var q3 = D(Ne);
var oe2 = D(ye2);
var De = D(He);
var tt = Object.assign(q3, { Child: De, Root: q3 });

// node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var React = __toESM(require_react(), 1);
function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
var ForwardRef = React.forwardRef(Bars3Icon);
var Bars3Icon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/BellIcon.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var React2 = __toESM(require_react(), 1);
function BellIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
  }));
}
var ForwardRef2 = React2.forwardRef(BellIcon);
var BellIcon_default = ForwardRef2;

// node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var React3 = __toESM(require_react(), 1);
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
var ForwardRef3 = React3.forwardRef(XMarkIcon);
var XMarkIcon_default = ForwardRef3;

// node_modules/@heroicons/react/24/outline/esm/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

export {
  ve,
  ot,
  tt,
  Bars3Icon_default,
  BellIcon_default,
  XMarkIcon_default
};
//# sourceMappingURL=/build/_shared/chunk-FFZXZXWH.js.map
