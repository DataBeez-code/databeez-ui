"use client";
var Dc = (e) => {
  throw TypeError(e);
};
var Tc = (e, t, n) => t.has(e) || Dc("Cannot " + n);
var X = (e, t, n) => (Tc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), to = (e, t, n) => t.has(e) ? Dc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), bn = (e, t, n, r) => (Tc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import { jsx as f, jsxs as D, Fragment as Be } from "react/jsx-runtime";
import * as c from "react";
import V, { useLayoutEffect as Ru, useState as pt, createContext as Du, useContext as Tu, useCallback as Ue, useRef as tn, useEffect as Pn, useMemo as ho, forwardRef as _b, useId as $b } from "react";
import * as Ve from "react-dom";
import Fb, { createPortal as Lb } from "react-dom";
import { ChevronDown as rr, XCircle as Mu, AlertTriangle as ku, CheckCircle as Au, Info as Ks, Send as Wb, Check as Ir, Minus as Iu, ChevronRight as _u, Pipette as zb, X as or, ChevronsUpDown as Ki, Search as Xi, MapPin as $u, Warehouse as Bb, HelpCircle as Hb, Receipt as Vb, Globe as jb, Landmark as Ub, Store as Yb, Building2 as qi, User as Nr, Briefcase as Gb, ShieldCheck as Kb, Banknote as Xb, Copy as Fu, Loader2 as qb, Database as Mc, Sparkles as kc, ArrowDown as Lu, ArrowUp as Wu, Calendar as zu, RefreshCw as Zb, ThumbsUp as Qb, ThumbsDown as Jb, GripVertical as ey, ChevronUp as Bu, ChevronLeft as ty, Clock as ny, Moon as ry, Monitor as oy, Sun as sy, ExternalLink as iy, LayoutGrid as ay, LogOut as cy } from "lucide-react";
var ly = Object.defineProperty, rt = (e, t) => ly(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function uy(e, t) {
  const n = c.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ rt((s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ f(n.Provider, { value: l, children: i });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(s, i = {}) {
    const { optional: a = !1 } = i, l = c.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return rt(o, "useContext"), [r, o];
}
rt(uy, "createContext");
// @__NO_SIDE_EFFECTS__
function zo(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i);
    a.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ rt((d) => {
      const { scope: p, children: h, ...g } = d, v = p?.[e]?.[l] || a, b = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ f(v.Provider, { value: b, children: h });
    }, "Provider");
    u.displayName = s + "Provider";
    function m(d, p, h = {}) {
      const { optional: g = !1 } = h, v = p?.[e]?.[l] || a, b = c.useContext(v);
      if (b) return b;
      if (i !== void 0) return i;
      if (!g)
        throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return rt(m, "useContext"), [u, m];
  }
  rt(r, "createContext");
  const o = /* @__PURE__ */ rt(() => {
    const s = n.map((i) => c.createContext(i));
    return /* @__PURE__ */ rt(function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, Hu(o, ...t)];
}
rt(zo, "createContextScope");
function Hu(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ rt(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ rt(function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
rt(Hu, "composeContextScopes");
var dy = Object.defineProperty, Zi = (e, t) => dy(e, "name", { value: t, configurable: !0 });
function Xs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Zi(Xs, "setRef");
function Vu(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Xs(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Xs(e[o], null);
        }
      };
  };
}
Zi(Vu, "composeRefs");
function En(...e) {
  return c.useCallback(Vu(...e), e);
}
Zi(En, "useComposedRefs");
var fy = Object.defineProperty, Qi = (e, t) => fy(e, "name", { value: t, configurable: !0 });
function qs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Qi(qs, "setRef");
function ju(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = qs(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : qs(e[o], null);
        }
      };
  };
}
Qi(ju, "composeRefs");
function Uu(...e) {
  return c.useCallback(ju(...e), e);
}
Qi(Uu, "useComposedRefs");
var my = Object.defineProperty, tt = (e, t) => my(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  const t = c.forwardRef((n, r) => {
    let { children: o, ...s } = n, i = null, a = !1;
    const l = [];
    o = Qu(o), c.Children.forEach(o, (p) => {
      if (qu(p)) {
        a = !0;
        const h = p;
        let g = "child" in h.props ? h.props.child : h.props.children;
        for (; Ji(g) && typeof Oo == "function"; )
          g = Oo(g._payload);
        i = hy(h, g), l.push(i?.props?.children);
      } else
        l.push(p);
    }), i ? i = c.cloneElement(i, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !a && c.Children.count(o) === 1 && c.isValidElement(o) && (i = o)
    );
    const u = i ? Xu(i) : void 0, m = Uu(r, u);
    if (!i) {
      if (o || o === 0)
        throw new Error(
          a ? by(e) : vy(e)
        );
      return o;
    }
    const d = Ku(s, i.props ?? {});
    return i.type !== c.Fragment && (d.ref = r ? m : u), c.cloneElement(i, d);
  });
  return t.displayName = `${e}.Slot`, t;
}
tt(Pe, "createSlot");
var py = /* @__PURE__ */ Pe("Slot"), Yu = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Gu(e) {
  const t = /* @__PURE__ */ tt((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = Yu, t;
}
tt(Gu, "createSlottable");
var hy = /* @__PURE__ */ tt((e, t) => "child" in e.props ? c.isValidElement(t) ? c.cloneElement(t, void 0, e.props.children(t.props.children)) : null : c.isValidElement(t) ? t : null, "getSlottableElementFromSlottable");
function Ku(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" ? n[r] = [o, s].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = Ju(s, o));
  }
  return { ...e, ...n };
}
tt(Ku, "mergeProps");
function Xu(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
tt(Xu, "getElementRef");
function qu(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Yu;
}
tt(qu, "isSlottable");
var gy = /* @__PURE__ */ Symbol.for("react.lazy");
function Ji(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === gy && "_payload" in e && Zu(e._payload);
}
tt(Ji, "isLazyComponent");
function Zu(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
tt(Zu, "isPromiseLike");
function Qu(e) {
  let t = e;
  for (; Ji(t) && typeof Oo == "function"; )
    t = Oo(t._payload);
  return t;
}
tt(Qu, "useUnwrappedLazy");
function Ju(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (typeof n == "string")
      for (const r of String(n).trim().split(/\s+/))
        r && t.add(r);
  return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
tt(Ju, "concatAriaDescribedby");
var vy = /* @__PURE__ */ tt((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), by = /* @__PURE__ */ tt((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Oo = c[" use ".trim().toString()], Bo = globalThis?.document ? c.useLayoutEffect : () => {
}, yy = Object.defineProperty, Te = (e, t) => yy(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function wy(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ zo(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ Te((v) => {
    const { scope: b, children: w } = v, x = c.useRef(null), y = c.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: y, collectionRef: x, children: w });
  }, "CollectionProvider");
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Pe(a), u = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x } = v, y = s(a, w), C = En(b, y.collectionRef);
      return /* @__PURE__ */ f(l, { ref: C, children: x });
    }
  );
  u.displayName = a;
  const m = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Pe(m), h = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x, ...y } = v, C = c.useRef(null), P = En(b, C), S = s(m, w);
      return c.useEffect(() => (S.itemMap.set(C, { ref: C, ...y }), () => {
        S.itemMap.delete(C);
      })), /* @__PURE__ */ f(p, { [d]: "", ref: P, children: x });
    }
  );
  h.displayName = m;
  function g(v) {
    const b = s(e + "CollectionConsumer", v);
    return c.useCallback(() => {
      const x = b.collectionRef.current;
      if (!x) return [];
      const y = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(b.itemMap.values()).sort(
        (S, E) => y.indexOf(S.ref.current) - y.indexOf(E.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return Te(g, "useCollection"), [
    { Provider: i, Slot: u, ItemSlot: h },
    g,
    r
  ];
}
Te(wy, "createCollection");
var Ac = /* @__PURE__ */ new WeakMap(), Ce, Ge, no = (Ge = class extends Map {
  constructor(n) {
    super(n);
    to(this, Ce);
    bn(this, Ce, [...super.keys()]), Ac.set(this, !0);
  }
  set(n, r) {
    return Ac.get(this) && !this.has(n) && X(this, Ce).push(n), super.set(n, r), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(n, r, o) {
    const s = this.has(r), i = s ? this.size : this.size + 1, a = ea(n), l = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
    if (s ? X(this, Ce).indexOf(r) === l : l === this.size)
      return this.set(r, o), this;
    const u = X(this, Ce).filter((d) => d !== r);
    u.splice(l, 0, r);
    const m = u.map((d) => [
      d,
      d === r ? o : this.get(d)
    ]);
    this.clear();
    for (const [d, p] of m)
      this.set(d, p);
    return this;
  }
  with(n, r, o) {
    const s = new Ge(this);
    return s.insert(n, r, o), s;
  }
  before(n) {
    const r = X(this, Ce).indexOf(n) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, r, o) {
    const s = X(this, Ce).indexOf(n);
    if (s === -1)
      return this;
    const i = X(this, Ce).indexOf(r), a = i !== -1 && i < s ? s - 1 : s;
    return this.insert(a, r, o);
  }
  after(n) {
    let r = X(this, Ce).indexOf(n);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, r, o) {
    const s = X(this, Ce).indexOf(n);
    if (s === -1)
      return this;
    const i = X(this, Ce).indexOf(r), a = i !== -1 && i <= s ? s : s + 1;
    return this.insert(a, r, o);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return bn(this, Ce, []), super.clear();
  }
  delete(n) {
    const r = super.delete(n);
    return r && X(this, Ce).splice(X(this, Ce).indexOf(n), 1), r;
  }
  deleteAt(n) {
    const r = this.keyAt(n);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(n) {
    const r = go(X(this, Ce), n);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(n) {
    const r = go(X(this, Ce), n);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(n) {
    return X(this, Ce).indexOf(n);
  }
  keyAt(n) {
    return go(X(this, Ce), n);
  }
  from(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let s = o + r;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.at(s);
  }
  keyFrom(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let s = o + r;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.keyAt(s);
  }
  find(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return s;
      o++;
    }
  }
  findIndex(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return o;
      o++;
    }
    return -1;
  }
  filter(n, r) {
    const o = [];
    let s = 0;
    for (const i of this)
      Reflect.apply(n, r, [i, s, this]) && o.push(i), s++;
    return new Ge(o);
  }
  map(n, r) {
    const o = [];
    let s = 0;
    for (const i of this)
      o.push([i[0], Reflect.apply(n, r, [i, s, this])]), s++;
    return new Ge(o);
  }
  reduce(...n) {
    const [r, o] = n, s = n.length > 1;
    if (!s && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let i = 0, a = o;
    for (const l of this)
      i === 0 && !s ? a = l : a = Reflect.apply(r, this, [a, l, i, this]), i++;
    return a;
  }
  reduceRight(...n) {
    const [r, o] = n, s = n.length > 1;
    if (!s && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let i = o;
    for (let a = this.size - 1; a >= 0; a--) {
      const l = this.entryAt(a);
      a === this.size - 1 && !s ? i = l : i = Reflect.apply(r, this, [i, l, a, this]);
    }
    return i;
  }
  /**
   * Sorts the dictionary in place. This method mutates the dictionary and
   * returns a reference to the same object
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  sort(n) {
    if (typeof n != "function")
      throw new TypeError("OrderedDict.sort requires a compare function");
    const r = [...this.entries()].sort(n);
    this.clear();
    for (const [o, s] of r)
      this.set(o, s);
    return this;
  }
  /**
   * Returns a copy of the dictionary with its elements sorted.
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  toSorted(n) {
    if (typeof n != "function")
      throw new TypeError("OrderedDict.toSorted requires a compare function");
    const r = [...this.entries()].sort(n);
    return new Ge(r);
  }
  toReversed() {
    const n = new Ge();
    for (let r = this.size - 1; r >= 0; r--) {
      const o = this.keyAt(r), s = this.get(o);
      n.set(o, s);
    }
    return n;
  }
  toSpliced(...n) {
    const r = [...this.entries()];
    return r.splice(...n), new Ge(r);
  }
  slice(n, r) {
    const o = new Ge();
    for (const s of X(this, Ce).slice(n, r))
      o.set(s, this.get(s));
    return o;
  }
  every(n, r) {
    let o = 0;
    for (const s of this) {
      if (!Reflect.apply(n, r, [s, o, this]))
        return !1;
      o++;
    }
    return !0;
  }
  some(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return !0;
      o++;
    }
    return !1;
  }
}, Ce = new WeakMap(), Te(Ge, "OrderedDict"), Ge);
function go(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = ed(e, t);
  return n === -1 ? void 0 : e[n];
}
Te(go, "at");
function ed(e, t) {
  const n = e.length, r = ea(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
Te(ed, "toSafeIndex");
function ea(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Te(ea, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function td(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ zo(t), [o, s] = n(t);
  o.displayName = e + "CollectionStableContextProvider";
  const [i, a] = n(t);
  i.displayName = e + "CollectionStatefulContextProvider";
  const l = /* @__PURE__ */ Te(({ state: S, ...E }) => S ? /* @__PURE__ */ f(m, { ...E, state: S }) : /* @__PURE__ */ f(u, { ...E }), "CollectionProvider");
  l.displayName = t;
  const u = /* @__PURE__ */ Te((S) => {
    const E = x();
    return /* @__PURE__ */ f(m, { ...S, state: E });
  }, "CollectionInit");
  u.displayName = e + "CollectionInit";
  const m = /* @__PURE__ */ Te((S) => {
    const { scope: E, children: N, state: R } = S, k = c.useRef(null), [_, T] = c.useState(
      null
    ), L = En(k, T), [F, z] = R, A = c.useRef(
      new no()
    ), W = c.useCallback(() => {
      const M = A.current;
      return od(M) || M.sort(vo), M;
    }, []);
    return c.useEffect(() => {
      if (!_)
        return;
      const M = sd(() => {
        z(($) => {
          const O = $.toSorted(vo);
          return O.some(([Q], re) => $.keyAt(re) !== Q) ? O : $;
        });
      });
      return M.observe(_, {
        childList: !0,
        subtree: !0
      }), () => {
        M.disconnect();
      };
    }, [_, z]), /* @__PURE__ */ f(
      o,
      {
        scope: E,
        collectionElementRef: L,
        collectionElementRefObject: k,
        getCollection: W,
        setCollection: z,
        registryRef: A,
        children: /* @__PURE__ */ f(
          i,
          {
            scope: E,
            collectionElement: _,
            collection: F,
            children: N
          }
        )
      }
    );
  }, "CollectionProviderImpl");
  m.displayName = e + "CollectionProviderImpl";
  const d = e + "CollectionSlot", p = /* @__PURE__ */ Pe(d), h = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R } = S, k = s(d, N), _ = En(E, k.collectionElementRef);
      return /* @__PURE__ */ f(p, { ref: _, children: R });
    }
  );
  h.displayName = d;
  const g = e + "CollectionItemSlot", v = "data-radix-collection-item", b = /* @__PURE__ */ Pe(g), w = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R, ...k } = S, _ = c.useRef(null), T = s(g, N), { setCollection: L, registryRef: F } = T, z = c.useRef(k);
      nd(z.current, k) || (z.current = k);
      const A = z.current, W = c.useCallback(
        (O) => {
          const B = F.current;
          O ? B.set(O, {
            ...z.current,
            element: O
          }) : _.current && B.delete(_.current);
        },
        [F]
      ), M = En(E, W, _);
      Bo(() => {
        const O = _.current, B = F.current;
        O && B.has(O) && B.set(O, { ...A, element: O });
      }, [A, F]);
      const $ = c.useRef(null);
      return c.useEffect(() => {
        const O = _.current, B = $.current;
        (B?.element ?? null) === O && (!O || B?.itemData === A) || ($.current = O ? { element: O, itemData: A } : null, L((Q) => {
          const re = new no(Q);
          return B && B.element !== O && re.delete(B.element), O && re.set(O, { ...A, element: O }), re.sort(vo);
        }));
      }), c.useEffect(() => () => {
        const O = $.current;
        $.current = null, O && L((B) => {
          if (!B.has(O.element))
            return B;
          const Q = new no(B);
          return Q.delete(O.element), Q;
        });
      }, [L]), /* @__PURE__ */ f(b, { [v]: "", ref: M, children: R });
    }
  );
  w.displayName = g;
  function x() {
    return c.useState(new no());
  }
  Te(x, "useInitCollection");
  function y(S) {
    const { collection: E } = a(e + "CollectionConsumer", S);
    return E;
  }
  Te(y, "useCollection");
  function C(S) {
    const { getCollection: E } = s(e + "CollectionConsumer", S);
    return E;
  }
  return Te(C, "useGetCollection"), [
    { Provider: l, Slot: h, ItemSlot: w },
    {
      createCollectionScope: r,
      useCollection: y,
      useGetCollection: C,
      useInitCollection: x
    }
  ];
}
Te(td, "createCollection");
function nd(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
Te(nd, "shallowEqual");
function rd(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Te(rd, "isElementPreceding");
function od(e) {
  let t;
  for (const n of e.keys()) {
    if (t) {
      const r = t.compareDocumentPosition(n);
      if (!(r & Node.DOCUMENT_POSITION_DISCONNECTED) && r & Node.DOCUMENT_POSITION_PRECEDING)
        return !1;
    }
    t = n;
  }
  return !0;
}
Te(od, "isInDocumentOrder");
function vo(e, t) {
  return !e[1].element || !t[1].element ? 0 : rd(e[1].element, t[1].element) ? -1 : 1;
}
Te(vo, "sortByDocumentPosition");
function sd(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
Te(sd, "getChildListObserver");
var xy = Object.defineProperty, sr = (e, t) => xy(e, "name", { value: t, configurable: !0 }), id = !!(typeof window < "u" && window.document && window.document.createElement);
function ad(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ sr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
sr(ad, "composeEventHandlers");
function Cy(e) {
  if (!id)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
sr(Cy, "getOwnerWindow");
function Zs(e) {
  if (!id)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
sr(Zs, "getOwnerDocument");
function cd(e, t = !1) {
  const { activeElement: n } = Zs(e);
  if (!n?.nodeName)
    return null;
  if (ld(n) && n.contentDocument)
    return cd(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Zs(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
sr(cd, "getActiveElement");
function ld(e) {
  return e.tagName === "IFRAME";
}
sr(ld, "isFrame");
var Sy = Object.defineProperty, Ey = (e, t) => Sy(e, "name", { value: t, configurable: !0 }), Ic = c[" useEffectEvent ".trim().toString()], _c = c[" useInsertionEffect ".trim().toString()];
function ud(e) {
  if (typeof Ic == "function")
    return Ic(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof _c == "function" ? _c(() => {
    t.current = e;
  }) : Bo(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
Ey(ud, "useEffectEvent");
var Py = Object.defineProperty, _r = (e, t) => Py(e, "name", { value: t, configurable: !0 }), Ny = c[" useInsertionEffect ".trim().toString()] || Bo;
function ta({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ _r(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = dd({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = fd(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
_r(ta, "useControllableState");
function dd({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return Ny(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
_r(dd, "useUncontrolledState");
function fd(e) {
  return typeof e == "function";
}
_r(fd, "isFunction");
var $c = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function Oy(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = ud(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === $c)
        return { ...b, state: w.state };
      const x = e(b, w);
      return l && !Object.is(x.state, b.state) && u(x.state), x;
    },
    ...m
  ), h = d.state, g = c.useRef(h);
  c.useEffect(() => {
    g.current !== h && (g.current = h, l || u(h));
  }, [h, g, l]);
  const v = c.useMemo(() => o !== void 0 ? { ...d, state: o } : d, [d, o]);
  return c.useEffect(() => {
    l && !Object.is(o, d.state) && p({ type: $c, state: o });
  }, [o, d.state, l]), [v, p];
}
_r(Oy, "useControllableStateReducer");
var Ry = Object.defineProperty, Dy = (e, t) => Ry(e, "name", { value: t, configurable: !0 }), Ty = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], md = Ty.reduce((e, t) => {
  const n = /* @__PURE__ */ Pe(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function My(e, t) {
  e && Ve.flushSync(() => e.dispatchEvent(t));
}
Dy(My, "dispatchDiscreteCustomEvent");
var ky = Object.defineProperty, ir = (e, t) => ky(e, "name", { value: t, configurable: !0 }), pd = !!(typeof window < "u" && window.document && window.document.createElement);
function hd(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ ir(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
ir(hd, "composeEventHandlers");
function Ay(e) {
  if (!pd)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
ir(Ay, "getOwnerWindow");
function Qs(e) {
  if (!pd)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
ir(Qs, "getOwnerDocument");
function gd(e, t = !1) {
  const { activeElement: n } = Qs(e);
  if (!n?.nodeName)
    return null;
  if (vd(n) && n.contentDocument)
    return gd(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Qs(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
ir(gd, "getActiveElement");
function vd(e) {
  return e.tagName === "IFRAME";
}
ir(vd, "isFrame");
var Iy = Object.defineProperty, ot = (e, t) => Iy(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function _y(e, t) {
  const n = c.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ ot((s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ f(n.Provider, { value: l, children: i });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(s, i = {}) {
    const { optional: a = !1 } = i, l = c.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return ot(o, "useContext"), [r, o];
}
ot(_y, "createContext");
// @__NO_SIDE_EFFECTS__
function bd(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i);
    a.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ ot((d) => {
      const { scope: p, children: h, ...g } = d, v = p?.[e]?.[l] || a, b = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ f(v.Provider, { value: b, children: h });
    }, "Provider");
    u.displayName = s + "Provider";
    function m(d, p, h = {}) {
      const { optional: g = !1 } = h, v = p?.[e]?.[l] || a, b = c.useContext(v);
      if (b) return b;
      if (i !== void 0) return i;
      if (!g)
        throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return ot(m, "useContext"), [u, m];
  }
  ot(r, "createContext");
  const o = /* @__PURE__ */ ot(() => {
    const s = n.map((i) => c.createContext(i));
    return /* @__PURE__ */ ot(function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, yd(o, ...t)];
}
ot(bd, "createContextScope");
function yd(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ ot(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ ot(function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
ot(yd, "composeContextScopes");
var Qn = globalThis?.document ? c.useLayoutEffect : () => {
}, $y = Object.defineProperty, Fy = (e, t) => $y(e, "name", { value: t, configurable: !0 }), Fc = c[" useEffectEvent ".trim().toString()], Lc = c[" useInsertionEffect ".trim().toString()];
function wd(e) {
  if (typeof Fc == "function")
    return Fc(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Lc == "function" ? Lc(() => {
    t.current = e;
  }) : Qn(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
Fy(wd, "useEffectEvent");
var Ly = Object.defineProperty, $r = (e, t) => Ly(e, "name", { value: t, configurable: !0 }), Wy = c[" useInsertionEffect ".trim().toString()] || Qn;
function xd({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ $r(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = Cd({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = Sd(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
$r(xd, "useControllableState");
function Cd({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return Wy(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
$r(Cd, "useUncontrolledState");
function Sd(e) {
  return typeof e == "function";
}
$r(Sd, "isFunction");
var Wc = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function zy(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = wd(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === Wc)
        return { ...b, state: w.state };
      const x = e(b, w);
      return l && !Object.is(x.state, b.state) && u(x.state), x;
    },
    ...m
  ), h = d.state, g = c.useRef(h);
  c.useEffect(() => {
    g.current !== h && (g.current = h, l || u(h));
  }, [h, g, l]);
  const v = c.useMemo(() => o !== void 0 ? { ...d, state: o } : d, [d, o]);
  return c.useEffect(() => {
    l && !Object.is(o, d.state) && p({ type: Wc, state: o });
  }, [o, d.state, l]), [v, p];
}
$r(zy, "useControllableStateReducer");
var By = Object.defineProperty, na = (e, t) => By(e, "name", { value: t, configurable: !0 });
function Js(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
na(Js, "setRef");
function Ed(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Js(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Js(e[o], null);
        }
      };
  };
}
na(Ed, "composeRefs");
function Pd(...e) {
  return c.useCallback(Ed(...e), e);
}
na(Pd, "useComposedRefs");
var Hy = Object.defineProperty, Vy = (e, t) => Hy(e, "name", { value: t, configurable: !0 }), jy = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ra = jy.reduce((e, t) => {
  const n = /* @__PURE__ */ Pe(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Uy(e, t) {
  e && Ve.flushSync(() => e.dispatchEvent(t));
}
Vy(Uy, "dispatchDiscreteCustomEvent");
var Yy = Object.defineProperty, Bt = (e, t) => Yy(e, "name", { value: t, configurable: !0 });
function Nd(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
Bt(Nd, "useStateMachine");
var Gy = /* @__PURE__ */ Bt((e) => {
  const { present: t, children: n } = e, r = Od(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = Rd(r.ref, Dd(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
}, "Presence");
function Od(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = c.useRef(void 0), a = e ? "mounted" : "unmounted", [l, u] = Nd(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    l === "mounted" ? (s.current = i.current ?? jn(r.current), i.current = void 0) : s.current = "none";
  }, [l]), Qn(() => {
    const m = r.current, d = o.current;
    if (d !== e) {
      const h = s.current, g = jn(m);
      e ? (i.current = g, u("MOUNT")) : g === "none" || m?.display === "none" ? u("UNMOUNT") : u(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), Qn(() => {
    if (t) {
      let m;
      const d = t.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ Bt((g) => {
        const b = jn(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && b && (u("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Bt((g) => {
        g.target === t && (s.current = jn(r.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(m), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: c.useCallback((m) => {
      if (m) {
        const d = getComputedStyle(m);
        r.current = d, i.current = jn(d);
      } else
        r.current = null;
      n(m);
    }, [])
  };
}
Bt(Od, "usePresence");
function ei(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Bt(ei, "setRef");
function Rd(...e) {
  const t = c.useRef(e);
  return t.current = e, c.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((i) => {
      const a = ei(i, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == "function" ? a() : ei(r[i], null);
        }
      };
  }, []);
}
Bt(Rd, "useStableComposedRefs");
function jn(e) {
  return e?.animationName || "none";
}
Bt(jn, "getAnimationName");
function Dd(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Bt(Dd, "getElementRef");
var Ky = Object.defineProperty, Xy = (e, t) => Ky(e, "name", { value: t, configurable: !0 }), qy = c[" useId ".trim().toString()] || (() => {
}), Zy = 0;
function Td(e) {
  const [t, n] = c.useState(qy());
  return Qn(() => {
    e || n((r) => r ?? String(Zy++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
Xy(Td, "useId");
var Qy = Object.defineProperty, Fr = (e, t) => Qy(e, "name", { value: t, configurable: !0 }), oa = "Collapsible", [Jy, Md] = /* @__PURE__ */ bd(oa), [ew, sa] = Jy(oa), tw = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Fr(function(t, n) {
    const {
      __scopeCollapsible: r,
      open: o,
      defaultOpen: s,
      disabled: i,
      onOpenChange: a,
      ...l
    } = t, [u, m] = xd({
      prop: o,
      defaultProp: s ?? !1,
      onChange: a,
      caller: oa
    });
    return /* @__PURE__ */ f(
      ew,
      {
        scope: r,
        disabled: i,
        contentId: Td(),
        open: u,
        onOpenToggle: c.useCallback(() => m((d) => !d), [m]),
        children: /* @__PURE__ */ f(
          ra.div,
          {
            "data-state": Ho(u),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: n
          }
        )
      }
    );
  }, "Collapsible")
), nw = "CollapsibleTrigger", rw = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Fr(function(t, n) {
    const { __scopeCollapsible: r, ...o } = t, s = sa(nw, r);
    return /* @__PURE__ */ f(
      ra.button,
      {
        type: "button",
        "aria-controls": s.open ? s.contentId : void 0,
        "aria-expanded": s.open || !1,
        "data-state": Ho(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        disabled: s.disabled,
        ...o,
        ref: n,
        onClick: hd(t.onClick, s.onOpenToggle)
      }
    );
  }, "CollapsibleTrigger")
), kd = "CollapsibleContent", ow = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Fr(function(t, n) {
    const { forceMount: r, ...o } = t, s = sa(kd, t.__scopeCollapsible);
    return /* @__PURE__ */ f(Gy, { present: r || s.open, children: ({ present: i }) => /* @__PURE__ */ f(sw, { ...o, ref: n, present: i }) });
  }, "CollapsibleContent")
), sw = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ Fr(function(t, n) {
  const { __scopeCollapsible: r, present: o, children: s, ...i } = t, a = sa(kd, r), [l, u] = c.useState(o), m = c.useRef(null), d = Pd(n, m), p = c.useRef(0), h = p.current, g = c.useRef(0), v = g.current, b = a.open || l, w = c.useRef(b), x = c.useRef(void 0);
  return c.useEffect(() => {
    const y = requestAnimationFrame(() => w.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), Qn(() => {
    const y = m.current;
    if (y) {
      x.current = x.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const C = y.getBoundingClientRect();
      p.current = C.height, g.current = C.width, w.current || (y.style.transitionDuration = x.current.transitionDuration, y.style.animationName = x.current.animationName), u(o);
    }
  }, [a.open, o]), /* @__PURE__ */ f(
    ra.div,
    {
      "data-state": Ho(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !b,
      ...i,
      ref: d,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...t.style
      },
      children: b && s
    }
  );
}, "CollapsibleContentImpl"));
function Ho(e) {
  return e ? "open" : "closed";
}
Fr(Ho, "getState");
var iw = Object.defineProperty, aw = (e, t) => iw(e, "name", { value: t, configurable: !0 }), cw = c[" useId ".trim().toString()] || (() => {
}), lw = 0;
function Ad(e) {
  const [t, n] = c.useState(cw());
  return Bo(() => {
    e || n((r) => r ?? String(lw++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
aw(Ad, "useId");
var uw = Object.defineProperty, dw = (e, t) => uw(e, "name", { value: t, configurable: !0 }), fw = {
  LTR: "ltr"
}, mw = c.createContext(void 0);
function Id(e) {
  const t = c.useContext(mw);
  return e || t || fw.LTR;
}
dw(Id, "useDirection");
var pw = Object.defineProperty, Ze = (e, t) => pw(e, "name", { value: t, configurable: !0 }), hw = {
  Multiple: "multiple"
}, wr = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, gw = {
  LTR: "ltr"
}, Tt = "Accordion", vw = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [ia, { useGetCollection: bw, createCollectionScope: yw }] = /* @__PURE__ */ td(Tt), [Vo, rI] = /* @__PURE__ */ zo(Tt, [
  yw,
  Md
]), aa = Md(), ww = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { type: r, ...o } = t, s = o, i = o;
    return /* @__PURE__ */ f(ia.Provider, { scope: t.__scopeAccordion, children: r === hw.Multiple ? /* @__PURE__ */ f(Ew, { ...i, ref: n }) : /* @__PURE__ */ f(Sw, { ...s, ref: n }) });
  }, "Accordion")
), [_d, xw] = Vo(Tt), [$d, Cw] = Vo(
  Tt,
  { collapsible: !1 }
), Sw = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const {
      value: r,
      defaultValue: o,
      onValueChange: s = /* @__PURE__ */ Ze(() => {
      }, "onValueChange"),
      collapsible: i = !1,
      ...a
    } = t, [l, u] = ta({
      prop: r,
      defaultProp: o ?? "",
      onChange: s,
      caller: Tt
    });
    return /* @__PURE__ */ f(
      _d,
      {
        scope: t.__scopeAccordion,
        value: c.useMemo(() => l ? [l] : [], [l]),
        onItemOpen: u,
        onItemClose: c.useCallback(() => i && u(""), [i, u]),
        children: /* @__PURE__ */ f($d, { scope: t.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ f(Fd, { ...a, ref: n }) })
      }
    );
  }, "AccordionImplSingle")
), Ew = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ Ze(function(t, n) {
  const {
    value: r,
    defaultValue: o,
    onValueChange: s = /* @__PURE__ */ Ze(() => {
    }, "onValueChange"),
    ...i
  } = t, [a, l] = ta({
    prop: r,
    defaultProp: o ?? [],
    onChange: s,
    caller: Tt
  }), u = c.useCallback(
    (d) => l((p = []) => [...p, d]),
    [l]
  ), m = c.useCallback(
    (d) => l((p = []) => p.filter((h) => h !== d)),
    [l]
  );
  return /* @__PURE__ */ f(
    _d,
    {
      scope: t.__scopeAccordion,
      value: a,
      onItemOpen: u,
      onItemClose: m,
      children: /* @__PURE__ */ f($d, { scope: t.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ f(Fd, { ...i, ref: n }) })
    }
  );
}, "AccordionImplMultiple")), [Pw, jo] = Vo(Tt), Fd = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const {
      __scopeAccordion: r,
      disabled: o,
      dir: s,
      orientation: i = wr.Vertical,
      ...a
    } = t, l = c.useRef(null), u = En(l, n), m = bw(r), p = Id(s) === gw.LTR, h = ad(t.onKeyDown, (g) => {
      if (!vw.includes(g.key))
        return;
      const v = m(), b = g.target, w = v.filter(([, k]) => !k.element.disabled), x = w.findIndex(([, k]) => k.element === b), y = w.size;
      if (x === -1)
        return;
      g.preventDefault();
      let C = x;
      const P = 0, S = y - 1, E = /* @__PURE__ */ Ze(() => {
        C = x + 1, C > S && (C = P);
      }, "moveNext"), N = /* @__PURE__ */ Ze(() => {
        C = x - 1, C < P && (C = S);
      }, "movePrev");
      switch (g.key) {
        case "Home":
          C = P;
          break;
        case "End":
          C = S;
          break;
        case "ArrowRight":
          i === wr.Horizontal && (p ? E() : N());
          break;
        case "ArrowDown":
          i === wr.Vertical && E();
          break;
        case "ArrowLeft":
          i === wr.Horizontal && (p ? N() : E());
          break;
        case "ArrowUp":
          i === wr.Vertical && N();
          break;
      }
      const R = C % y;
      w.at(R)?.element.focus();
    });
    return /* @__PURE__ */ f(
      Pw,
      {
        scope: r,
        disabled: o,
        direction: s,
        orientation: i,
        children: /* @__PURE__ */ f(ia.Slot, { scope: r, children: /* @__PURE__ */ f(
          md.div,
          {
            ...a,
            "data-orientation": i,
            ref: u,
            onKeyDown: o ? void 0 : h
          }
        ) })
      }
    );
  }, "AccordionImpl")
), ti = "AccordionItem", [Nw, ca] = Vo(ti), Ow = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeAccordion: r, value: o, ...s } = t, i = jo(ti, r), a = xw(ti, r), l = aa(r), u = Ad(), m = o && a.value.includes(o) || !1, d = i.disabled || t.disabled;
    return /* @__PURE__ */ f(
      Nw,
      {
        scope: r,
        open: m,
        disabled: d,
        triggerId: u,
        children: /* @__PURE__ */ f(
          tw,
          {
            "data-orientation": i.orientation,
            "data-state": la(m),
            ...l,
            ...s,
            ref: n,
            disabled: d,
            open: m,
            onOpenChange: (p) => {
              p ? a.onItemOpen(o) : a.onItemClose(o);
            }
          }
        )
      }
    );
  }, "AccordionItem")
), Rw = "AccordionHeader", Dw = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeAccordion: r, ...o } = t, s = jo(Tt, r), i = ca(Rw, r);
    return /* @__PURE__ */ f(
      md.h3,
      {
        "data-orientation": s.orientation,
        "data-state": la(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "AccordionHeader")
), zc = "AccordionTrigger", Tw = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeAccordion: r, ...o } = t, s = jo(Tt, r), i = ca(zc, r), a = Cw(zc, r), l = aa(r);
    return /* @__PURE__ */ f(ia.ItemSlot, { scope: r, children: /* @__PURE__ */ f(
      rw,
      {
        "aria-disabled": i.open && !a.collapsible || void 0,
        "data-orientation": s.orientation,
        id: i.triggerId,
        ...l,
        ...o,
        ref: n
      }
    ) });
  }, "AccordionTrigger")
), Mw = "AccordionContent", kw = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ze(function(t, n) {
    const { __scopeAccordion: r, ...o } = t, s = jo(Tt, r), i = ca(Mw, r), a = aa(r);
    return /* @__PURE__ */ f(
      ow,
      {
        role: "region",
        "aria-labelledby": i.triggerId,
        "data-orientation": s.orientation,
        ...a,
        ...o,
        ref: n,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...t.style
        }
      }
    );
  }, "AccordionContent")
);
function la(e) {
  return e ? "open" : "closed";
}
Ze(la, "getState");
function Ld(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ld(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ua() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ld(e)) && (r && (r += " "), r += t);
  return r;
}
const Aw = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Iw = (e, t) => ({
  classGroupId: e,
  validator: t
}), Wd = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Ro = "-", Bc = [], _w = "arbitrary..", $w = (e) => {
  const t = Lw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return Fw(i);
      const a = i.split(Ro), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return zd(a, l, t);
    },
    getConflictingClassGroupIds: (i, a) => {
      if (a) {
        const l = r[i], u = n[i];
        return l ? u ? Aw(u, l) : l : u || Bc;
      }
      return n[i] || Bc;
    }
  };
}, zd = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const u = zd(e, t + 1, s);
    if (u) return u;
  }
  const i = n.validators;
  if (i === null)
    return;
  const a = t === 0 ? e.join(Ro) : e.slice(t).join(Ro), l = i.length;
  for (let u = 0; u < l; u++) {
    const m = i[u];
    if (m.validator(a))
      return m.classGroupId;
  }
}, Fw = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? _w + r : void 0;
})(), Lw = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Ww(n, t);
}, Ww = (e, t) => {
  const n = Wd();
  for (const r in e) {
    const o = e[r];
    da(o, n, r, t);
  }
  return n;
}, da = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const i = e[s];
    zw(i, t, n, r);
  }
}, zw = (e, t, n, r) => {
  if (typeof e == "string") {
    Bw(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Hw(e, t, n, r);
    return;
  }
  Vw(e, t, n, r);
}, Bw = (e, t, n) => {
  const r = e === "" ? t : Bd(t, e);
  r.classGroupId = n;
}, Hw = (e, t, n, r) => {
  if (jw(e)) {
    da(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Iw(n, e));
}, Vw = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let i = 0; i < s; i++) {
    const [a, l] = o[i];
    da(l, Bd(t, a), n, r);
  }
}, Bd = (e, t) => {
  let n = e;
  const r = t.split(Ro), o = r.length;
  for (let s = 0; s < o; s++) {
    const i = r[s];
    let a = n.nextPart.get(i);
    a || (a = Wd(), n.nextPart.set(i, a)), n = a;
  }
  return n;
}, jw = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Uw = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (s, i) => {
    n[s] = i, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let i = n[s];
      if (i !== void 0)
        return i;
      if ((i = r[s]) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      s in n ? n[s] = i : o(s, i);
    }
  };
}, ni = "!", Hc = ":", Yw = [], Vc = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Gw = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, l = 0, u;
    const m = o.length;
    for (let v = 0; v < m; v++) {
      const b = o[v];
      if (i === 0 && a === 0) {
        if (b === Hc) {
          s.push(o.slice(l, v)), l = v + 1;
          continue;
        }
        if (b === "/") {
          u = v;
          continue;
        }
      }
      b === "[" ? i++ : b === "]" ? i-- : b === "(" ? a++ : b === ")" && a--;
    }
    const d = s.length === 0 ? o : o.slice(l);
    let p = d, h = !1;
    d.endsWith(ni) ? (p = d.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      d.startsWith(ni) && (p = d.slice(1), h = !0)
    );
    const g = u && u > l ? u - l : void 0;
    return Vc(s, h, p, g);
  };
  if (t) {
    const o = t + Hc, s = r;
    r = (i) => i.startsWith(o) ? s(i.slice(o.length)) : Vc(Yw, !1, i, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, Kw = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s], a = i[0] === "[", l = t.has(i);
      a || l ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, Xw = (e) => ({
  cache: Uw(e.cacheSize),
  parseClassName: Gw(e),
  sortModifiers: Kw(e),
  ...$w(e)
}), qw = /\s+/, Zw = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(qw);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const m = a[u], {
      isExternal: d,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: v
    } = n(m);
    if (d) {
      l = m + (l.length > 0 ? " " + l : l);
      continue;
    }
    let b = !!v, w = r(b ? g.substring(0, v) : g);
    if (!w) {
      if (!b) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(g), !w) {
        l = m + (l.length > 0 ? " " + l : l);
        continue;
      }
      b = !1;
    }
    const x = p.length === 0 ? "" : p.length === 1 ? p[0] : s(p).join(":"), y = h ? x + ni : x, C = y + w;
    if (i.indexOf(C) > -1)
      continue;
    i.push(C);
    const P = o(w, b);
    for (let S = 0; S < P.length; ++S) {
      const E = P[S];
      i.push(y + E);
    }
    l = m + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Qw = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Hd(n)) && (o && (o += " "), o += r);
  return o;
}, Hd = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Hd(e[r])) && (n && (n += " "), n += t);
  return n;
}, Jw = (e, ...t) => {
  let n, r, o, s;
  const i = (l) => {
    const u = t.reduce((m, d) => d(m), e());
    return n = Xw(u), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }, a = (l) => {
    const u = r(l);
    if (u)
      return u;
    const m = Zw(l, n);
    return o(l, m), m;
  };
  return s = i, (...l) => s(Qw(...l));
}, ex = [], Re = (e) => {
  const t = (n) => n[e] || ex;
  return t.isThemeGetter = !0, t;
}, Vd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, jd = /^\((?:(\w[\w-]*):)?(.+)\)$/i, tx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, nx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, rx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ox = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, sx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ix = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qt = (e) => tx.test(e), ie = (e) => !!e && !Number.isNaN(Number(e)), Zt = (e) => !!e && Number.isInteger(Number(e)), Ns = (e) => e.endsWith("%") && ie(e.slice(0, -1)), _t = (e) => nx.test(e), Ud = () => !0, ax = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  rx.test(e) && !ox.test(e)
), fa = () => !1, cx = (e) => sx.test(e), lx = (e) => ix.test(e), ux = (e) => !U(e) && !Y(e), dx = (e) => dn(e, Kd, fa), U = (e) => Vd.test(e), yn = (e) => dn(e, Xd, ax), jc = (e) => dn(e, yx, ie), fx = (e) => dn(e, Zd, Ud), mx = (e) => dn(e, qd, fa), Uc = (e) => dn(e, Yd, fa), px = (e) => dn(e, Gd, lx), ro = (e) => dn(e, Qd, cx), Y = (e) => jd.test(e), xr = (e) => Mn(e, Xd), hx = (e) => Mn(e, qd), Yc = (e) => Mn(e, Yd), gx = (e) => Mn(e, Kd), vx = (e) => Mn(e, Gd), oo = (e) => Mn(e, Qd, !0), bx = (e) => Mn(e, Zd, !0), dn = (e, t, n) => {
  const r = Vd.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Mn = (e, t, n = !1) => {
  const r = jd.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Yd = (e) => e === "position" || e === "percentage", Gd = (e) => e === "image" || e === "url", Kd = (e) => e === "length" || e === "size" || e === "bg-size", Xd = (e) => e === "length", yx = (e) => e === "number", qd = (e) => e === "family-name", Zd = (e) => e === "number" || e === "weight", Qd = (e) => e === "shadow", wx = () => {
  const e = Re("color"), t = Re("font"), n = Re("text"), r = Re("font-weight"), o = Re("tracking"), s = Re("leading"), i = Re("breakpoint"), a = Re("container"), l = Re("spacing"), u = Re("radius"), m = Re("shadow"), d = Re("inset-shadow"), p = Re("text-shadow"), h = Re("drop-shadow"), g = Re("blur"), v = Re("perspective"), b = Re("aspect"), w = Re("ease"), x = Re("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], P = () => [...C(), Y, U], S = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], N = () => [Y, U, l], R = () => [qt, "full", "auto", ...N()], k = () => [Zt, "none", "subgrid", Y, U], _ = () => ["auto", {
    span: ["full", Zt, Y, U]
  }, Zt, Y, U], T = () => [Zt, "auto", Y, U], L = () => ["auto", "min", "max", "fr", Y, U], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...N()], W = () => [qt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], M = () => [qt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], $ = () => [qt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], O = () => [e, Y, U], B = () => [...C(), Yc, Uc, {
    position: [Y, U]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], re = () => ["auto", "cover", "contain", gx, dx, {
    size: [Y, U]
  }], be = () => [Ns, xr, yn], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Y,
    U
  ], H = () => ["", ie, xr, yn], j = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [ie, Ns, Yc, Uc], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    Y,
    U
  ], se = () => ["none", ie, Y, U], ae = () => ["none", ie, Y, U], me = () => [ie, Y, U], ye = () => [qt, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [_t],
      breakpoint: [_t],
      color: [Ud],
      container: [_t],
      "drop-shadow": [_t],
      ease: ["in", "out", "in-out"],
      font: [ux],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [_t],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [_t],
      shadow: [_t],
      spacing: ["px", ie],
      text: [_t],
      "text-shadow": [_t],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", qt, U, Y, b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ie, U, Y, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: P()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: R()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": R(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: R()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": R(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: R()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": R()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Zt, "auto", Y, U]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [qt, "full", "auto", a, ...N()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ie, qt, "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ie, Y, U]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ie, Y, U]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Zt, "first", "last", "none", Y, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": k()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: _()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": T()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": T()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": k()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: _()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": T()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": T()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": L()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": L()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: N()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: A()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: A()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: A()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: A()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: A()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: A()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: A()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: A()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: A()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: A()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: A()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": N()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": N()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: W()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...M()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...M()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...M()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...$()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...$()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...$()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...W()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...W()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, xr, yn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, bx, fx]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ns, U]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [hx, mx, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [U]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, Y, U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ie, "none", Y, jc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y, U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", Y, U]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: O()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: O()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ie, "from-font", "auto", Y, yn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: O()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ie, "auto", Y, U]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y, U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Y, U]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: B()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Q()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: re()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Zt, Y, U],
          radial: ["", Y, U],
          conic: [Zt, Y, U]
        }, vx, px]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: O()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: be()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: be()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: be()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: O()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: J()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": J()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": J()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": J()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": J()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": J()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": J()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": J()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": J()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": J()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": J()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": J()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": J()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": J()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": J()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: H()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": H()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": H()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": H()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": H()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": H()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": H()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": H()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": H()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": H()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": H()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": H()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": H()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...j(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: O()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": O()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": O()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": O()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": O()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": O()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": O()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": O()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": O()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": O()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": O()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: O()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...j(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ie, Y, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ie, xr, yn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: O()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          m,
          oo,
          ro
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: O()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, oo, ro]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": O()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: H()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: O()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ie, yn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": O()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": H()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": O()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, oo, ro]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": O()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ie, Y, U]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ie]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": K()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": K()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": O()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": K()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": K()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": O()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": K()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": K()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": O()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": K()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": K()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": O()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": K()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": K()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": O()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": K()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": K()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": O()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": K()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": K()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": O()
      }],
      "mask-image-radial": [{
        "mask-radial": [Y, U]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": K()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": K()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": O()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ie]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": K()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": K()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": O()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: B()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Q()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: re()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", Y, U]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Y,
          U
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ee()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ie, Y, U]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ie, Y, U]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          h,
          oo,
          ro
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": O()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ie, Y, U]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ie, Y, U]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ie, Y, U]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ie, Y, U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ie, Y, U]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          Y,
          U
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ee()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ie, Y, U]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ie, Y, U]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ie, Y, U]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ie, Y, U]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ie, Y, U]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ie, Y, U]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ie, Y, U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ie, Y, U]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Y, U]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ie, "initial", Y, U]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, Y, U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ie, Y, U]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, Y, U]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [v, Y, U]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": P()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ae()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ae()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ae()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ae()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: me()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": me()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": me()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Y, U, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: P()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ye()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ye()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ye()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ye()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: O()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: O()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y, U]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": N()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": N()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": N()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Y, U]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...O()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ie, xr, yn, jc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...O()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, xx = /* @__PURE__ */ Jw(wx);
function I(...e) {
  return xx(ua(e));
}
const Cx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  ww,
  {
    ref: n,
    className: I("w-full divide-y divide-border rounded-lg border border-border bg-surface", e),
    ...t
  }
));
Cx.displayName = "Accordion";
const Sx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(Ow, { ref: n, className: I("first:rounded-t-lg last:rounded-b-lg", e), ...t }));
Sx.displayName = "AccordionItem";
const Ex = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(Dw, { className: "flex", children: /* @__PURE__ */ D(
  Tw,
  {
    ref: r,
    className: I(
      "group flex flex-1 items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium text-text-base transition-colors",
      "hover:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
      "disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f(
        rr,
        {
          "aria-hidden": "true",
          className: "h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
        }
      )
    ]
  }
) }));
Ex.displayName = "AccordionTrigger";
const Px = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(
  kw,
  {
    ref: r,
    forceMount: !0,
    className: I(
      "grid text-sm text-text-base transition-[grid-template-rows,visibility] duration-200 motion-reduce:transition-none",
      "data-[state=closed]:invisible data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]"
    ),
    ...n,
    children: /* @__PURE__ */ f("div", { className: "overflow-hidden", children: /* @__PURE__ */ f("div", { className: I("px-4 pb-4 pt-1", e), children: t }) })
  }
));
Px.displayName = "AccordionContent";
const Gc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Kc = ua, fn = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Kc(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const m = n?.[u], d = s?.[u];
    if (m === null) return null;
    const p = Gc(m) || Gc(d);
    return o[u][p];
  }), a = n && Object.entries(n).reduce((u, m) => {
    let [d, p] = m;
    return p === void 0 || (u[d] = p), u;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, m) => {
    let { class: d, className: p, ...h } = m;
    return Object.entries(h).every((g) => {
      let [v, b] = g;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...a
      }[v]) : {
        ...s,
        ...a
      }[v] === b;
    }) ? [
      ...u,
      d,
      p
    ] : u;
  }, []);
  return Kc(e, i, l, n?.class, n?.className);
}, Nx = fn(
  "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        default: "bg-subtle border-border text-text-base",
        info: "bg-info-bg border-info-border text-info-fg",
        success: "bg-success-bg border-success-border text-success-fg",
        warning: "bg-warning-bg border-warning-border text-warning-fg",
        destructive: "bg-error-bg border-error-border text-error-fg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Ox = {
  default: Ks,
  info: Ks,
  success: Au,
  warning: ku,
  destructive: Mu
}, Rx = c.forwardRef(
  ({ className: e, variant: t = "default", title: n, children: r, ...o }, s) => {
    const i = Ox[t ?? "default"];
    return /* @__PURE__ */ D(
      "div",
      {
        ref: s,
        role: "alert",
        className: I(Nx({ variant: t }), e),
        ...o,
        children: [
          /* @__PURE__ */ f(i, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          /* @__PURE__ */ D("div", { className: "flex-1 min-w-0", children: [
            n && /* @__PURE__ */ f("p", { className: "font-semibold mb-0.5", children: n }),
            r && /* @__PURE__ */ f("p", { className: "leading-relaxed", children: r })
          ] })
        ]
      }
    );
  }
);
Rx.displayName = "Alert";
function Dx({ size: e = 48, className: t }) {
  return /* @__PURE__ */ D("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ f("ellipse", { cx: "24", cy: "22", rx: "7", ry: "5.5", fill: "#F59E0B" }),
    /* @__PURE__ */ f("rect", { x: "20", y: "19", width: "8", height: "2", rx: "1", fill: "#92400E" }),
    /* @__PURE__ */ f("rect", { x: "20", y: "23", width: "8", height: "2", rx: "1", fill: "#92400E" }),
    /* @__PURE__ */ f("ellipse", { cx: "19", cy: "17", rx: "4", ry: "3", fill: "#FFFBEB", stroke: "#F59E0B", strokeWidth: "0.8", opacity: "0.8" }),
    /* @__PURE__ */ f("ellipse", { cx: "29", cy: "17", rx: "4", ry: "3", fill: "#FFFBEB", stroke: "#F59E0B", strokeWidth: "0.8", opacity: "0.8" }),
    /* @__PURE__ */ f("line", { x1: "22", y1: "17", x2: "19", y2: "12", stroke: "#D97706", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("line", { x1: "26", y1: "17", x2: "29", y2: "12", stroke: "#D97706", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("circle", { cx: "19", cy: "12", r: "1", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "29", cy: "12", r: "1", fill: "#D97706" }),
    /* @__PURE__ */ f("path", { d: "M31 22l4 2-4 2", fill: "#D97706" })
  ] });
}
function Tx({ size: e = 48, className: t }) {
  return /* @__PURE__ */ D("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ f("circle", { cx: "16", cy: "28", r: "3", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "24", cy: "14", r: "3", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "32", cy: "24", r: "3", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "20", cy: "20", r: "2.5", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "28", cy: "32", r: "2.5", fill: "#D97706" }),
    /* @__PURE__ */ f("line", { x1: "16", y1: "28", x2: "20", y2: "20", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "20", y1: "20", x2: "24", y2: "14", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "14", x2: "32", y2: "24", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "32", y1: "24", x2: "28", y2: "32", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "28", y1: "32", x2: "16", y2: "28", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "20", y1: "20", x2: "32", y2: "24", stroke: "#D97706", strokeWidth: "1", opacity: "0.5" })
  ] });
}
function Mx({ size: e = 48, className: t }) {
  return /* @__PURE__ */ D("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ f("path", { d: "M24 12c-4.4 0-8 3.6-8 8 0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "24", cy: "20", r: "3.5", fill: "#FFFBEB" }),
    /* @__PURE__ */ f("line", { x1: "12", y1: "30", x2: "36", y2: "30", stroke: "#D97706", strokeWidth: "1", opacity: "0.4" }),
    /* @__PURE__ */ f("line", { x1: "14", y1: "34", x2: "34", y2: "34", stroke: "#D97706", strokeWidth: "1", opacity: "0.3" }),
    /* @__PURE__ */ f("line", { x1: "18", y1: "30", x2: "16", y2: "34", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.3" }),
    /* @__PURE__ */ f("line", { x1: "30", y1: "30", x2: "32", y2: "34", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.3" })
  ] });
}
function kx({ size: e = 48, className: t }) {
  return /* @__PURE__ */ D("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 3L41 13v22L24 45 7 35V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2" }),
    /* @__PURE__ */ f("path", { d: "M24 10l11 6.5v13L24 36l-11-6.5v-13z", fill: "#FFFBEB", stroke: "#F59E0B", strokeWidth: "1", opacity: "0.6" }),
    /* @__PURE__ */ f("circle", { cx: "22", cy: "22", r: "7.5", stroke: "#D97706", strokeWidth: "2.2" }),
    /* @__PURE__ */ f("line", { x1: "27.5", y1: "27.5", x2: "34", y2: "34", stroke: "#D97706", strokeWidth: "2.4", strokeLinecap: "round" }),
    /* @__PURE__ */ f("circle", { cx: "22", cy: "22", r: "2", fill: "#F59E0B" }),
    /* @__PURE__ */ f("line", { x1: "22", y1: "15.5", x2: "22", y2: "18", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("line", { x1: "22", y1: "26", x2: "22", y2: "28.5", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("line", { x1: "15.5", y1: "22", x2: "18", y2: "22", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("line", { x1: "26", y1: "22", x2: "28.5", y2: "22", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" })
  ] });
}
function Ax({ size: e = 48, className: t }) {
  return /* @__PURE__ */ D("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", stroke: "#F59E0B", strokeWidth: "2.5", fill: "#FEF3C7" }),
    /* @__PURE__ */ f("path", { d: "M24 12L32.5 17v10L24 32l-8.5-5V17z", stroke: "#F59E0B", strokeWidth: "1.5", fill: "#FFFBEB" }),
    /* @__PURE__ */ f("circle", { cx: "24", cy: "22", r: "3.5", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "16", cy: "17", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "32", cy: "17", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "16", cy: "27", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "32", cy: "27", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "22", x2: "16", y2: "17", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "22", x2: "32", y2: "17", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "22", x2: "16", y2: "27", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "22", x2: "32", y2: "27", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ f("line", { x1: "16", y1: "17", x2: "16", y2: "27", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.5" }),
    /* @__PURE__ */ f("line", { x1: "32", y1: "17", x2: "32", y2: "27", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.5" })
  ] });
}
const Jd = {
  swarm: { label: "Swarm", component: Dx },
  beegraph: { label: "BeeGraph", component: Tx },
  beemap: { label: "BeeMap", component: Mx },
  beescout: { label: "BeeScout", component: kx },
  haive: { label: "Haive", component: Ax }
}, oI = Object.keys(Jd);
function sI({ slug: e, size: t = 48, className: n, fallback: r }) {
  const o = Jd[e];
  if (o) {
    const i = o.component;
    return /* @__PURE__ */ f(i, { size: t, className: n });
  }
  const s = (r ?? e ?? "?").charAt(0).toUpperCase();
  return /* @__PURE__ */ f(
    "div",
    {
      className: `rounded-lg bg-primary/15 flex items-center justify-center text-2xl text-primary shrink-0 ${n ?? ""}`,
      style: { width: t, height: t },
      children: s
    }
  );
}
function iI({ label: e, value: t, className: n, ...r }) {
  return /* @__PURE__ */ D("div", { className: I("flex flex-col gap-0.5", n), ...r, children: [
    /* @__PURE__ */ f("span", { className: "text-xs text-text-muted", children: e }),
    /* @__PURE__ */ f("span", { className: "text-sm font-medium break-words text-text-base", children: t ?? "—" })
  ] });
}
function aI({ title: e, children: t, className: n, ...r }) {
  return /* @__PURE__ */ D("div", { className: I("flex flex-col gap-3", n), ...r, children: [
    /* @__PURE__ */ f("h3", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border pb-1", children: e }),
    /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: t })
  ] });
}
const Ix = fn(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-fg hover:bg-primary/80",
        secondary: "border-transparent bg-subtle text-text-base hover:bg-subtle/80",
        destructive: "border-transparent bg-error-bg text-error-fg hover:bg-error-bg/80",
        outline: "text-text-base",
        top: "border-transparent bg-category-top/20 text-category-top",
        base: "border-transparent bg-category-base/20 text-category-base",
        vertical: "border-transparent bg-category-vertical/20 text-category-vertical"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function cI({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f("div", { className: I(Ix({ variant: t }), e), ...n });
}
const _x = fn(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: (
          // Testo scuro sull'ambra del tema: il bianco su ambra 500 era a 2,2:1 (TASK-896)
          "bg-primary text-primary-fg hover:bg-primary-hover shadow-sm"
        ),
        destructive: "bg-error-600 text-white hover:bg-error-700 shadow-sm",
        outline: "border border-border bg-surface text-text-base hover:bg-subtle hover:text-text-base",
        secondary: "bg-subtle text-text-base hover:bg-subtle/80",
        ghost: "text-text-base hover:bg-subtle hover:text-text-base",
        link: "text-databeez-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Jn = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => /* @__PURE__ */ f(
    r ? py : "button",
    {
      className: I(_x({ variant: t, size: n, className: e })),
      ref: s,
      ...o
    }
  )
);
Jn.displayName = "Button";
const $x = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "div",
  {
    ref: n,
    className: I(
      "rounded-xl border border-border bg-surface text-text-base shadow-sm",
      e
    ),
    ...t
  }
));
$x.displayName = "Card";
const Fx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { ref: n, className: I("flex flex-col space-y-1.5 p-6", e), ...t }));
Fx.displayName = "CardHeader";
const Lx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "h3",
  {
    ref: n,
    className: I("text-lg font-semibold leading-none tracking-tight text-text-base", e),
    ...t
  }
));
Lx.displayName = "CardTitle";
const Wx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "p",
  {
    ref: n,
    className: I("text-sm text-text-muted", e),
    ...t
  }
));
Wx.displayName = "CardDescription";
const zx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { ref: n, className: I("p-6 pt-0", e), ...t }));
zx.displayName = "CardContent";
const Bx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "div",
  {
    ref: n,
    className: I("flex items-center p-6 pt-0", e),
    ...t
  }
));
Bx.displayName = "CardFooter";
const Hx = c.forwardRef(
  ({
    onSend: e,
    disabled: t,
    placeholder: n = "Scrivi un messaggio...",
    className: r,
    maxHeight: o = 160
  }, s) => {
    const [i, a] = c.useState(""), l = c.useRef(null), u = s ?? l, m = () => {
      const h = i.trim();
      !h || t || (e(h), a(""), u.current && (u.current.style.height = "auto"));
    }, d = (h) => {
      h.key === "Enter" && !h.shiftKey && (h.preventDefault(), m());
    }, p = () => {
      const h = u.current;
      h && (h.style.height = "auto", h.style.height = `${Math.min(h.scrollHeight, o)}px`);
    };
    return /* @__PURE__ */ D("div", { className: I("border-t border-border bg-surface px-4 py-3", r), children: [
      /* @__PURE__ */ D("div", { className: "max-w-4xl mx-auto flex gap-3 items-end", children: [
        /* @__PURE__ */ f(
          "textarea",
          {
            ref: u,
            value: i,
            onChange: (h) => a(h.target.value),
            onKeyDown: d,
            onInput: p,
            placeholder: n,
            disabled: t,
            rows: 1,
            className: I(
              "flex-1 resize-none rounded-xl border border-border bg-base px-4 py-3 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "placeholder:text-text-muted transition-colors",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "min-h-[44px]"
            ),
            style: { maxHeight: o }
          }
        ),
        /* @__PURE__ */ f(
          Jn,
          {
            onClick: m,
            disabled: t || !i.trim(),
            size: "icon",
            className: "h-11 w-11 rounded-xl flex-shrink-0 shadow-databeez hover:shadow-databeez-lg",
            children: /* @__PURE__ */ f(Wb, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ f("p", { className: "text-center text-xs text-text-muted mt-2", children: "Invio per inviare · Shift+Invio per andare a capo" })
    ] });
  }
);
Hx.displayName = "ChatInput";
const Xc = {
  default: "h-4 w-4",
  sm: "h-3.5 w-3.5"
}, Do = c.forwardRef(
  ({
    className: e,
    indeterminate: t = !1,
    size: n = "default",
    checked: r,
    defaultChecked: o,
    disabled: s,
    onChange: i,
    ...a
  }, l) => {
    const u = c.useRef(null), m = r !== void 0, [d, p] = c.useState(
      o ?? !1
    ), h = m ? !!r : d;
    c.useEffect(() => {
      u.current && (u.current.indeterminate = t);
    }, [t]);
    function g(w) {
      m || p(w.target.checked), i?.(w);
    }
    const v = h && !t, b = t;
    return /* @__PURE__ */ D("span", { className: I("relative inline-flex shrink-0", Xc[n]), children: [
      /* @__PURE__ */ f(
        "input",
        {
          type: "checkbox",
          checked: h,
          disabled: s,
          onChange: g,
          ref: (w) => {
            u.current = w, typeof l == "function" ? l(w) : l && (l.current = w);
          },
          className: I(
            "peer m-0 shrink-0 cursor-pointer appearance-none rounded border transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            "disabled:cursor-not-allowed disabled:opacity-50",
            v || b ? "border-databeez-primary bg-databeez-primary" : "border-border bg-surface",
            Xc[n],
            e
          ),
          ...a
        }
      ),
      /* @__PURE__ */ f(
        Ir,
        {
          strokeWidth: 3,
          className: I(
            "pointer-events-none absolute inset-0 h-full w-full p-[2px] text-surface",
            v ? "opacity-100" : "opacity-0"
          )
        }
      ),
      /* @__PURE__ */ f(
        Iu,
        {
          strokeWidth: 3,
          className: I(
            "pointer-events-none absolute inset-0 h-full w-full p-[2px] text-surface",
            b ? "opacity-100" : "opacity-0"
          )
        }
      )
    ] });
  }
);
Do.displayName = "Checkbox";
function lI({
  label: e,
  checked: t,
  onToggle: n,
  children: r,
  expanded: o,
  onExpandedChange: s,
  size: i = "default",
  className: a
}) {
  const l = r.length > 0, u = l && r.every((g) => !g.checked), m = l && !u && r.some((g) => !g.checked), d = t && !u, p = t && m;
  function h() {
    if (d || p) {
      t && n();
      return;
    }
    if (!t) {
      n();
      return;
    }
    r.forEach((g) => {
      g.checked || g.onToggle();
    });
  }
  return /* @__PURE__ */ D("div", { className: a, children: [
    /* @__PURE__ */ D("div", { className: "flex items-center gap-1.5", children: [
      l ? /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => s(!o),
          "aria-label": o ? "Comprimi" : "Espandi",
          "aria-expanded": o,
          className: "flex shrink-0 items-center justify-center text-text-muted hover:text-text-base",
          children: o ? /* @__PURE__ */ f(rr, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ f(_u, { className: "h-3.5 w-3.5" })
        }
      ) : /* @__PURE__ */ f("span", { className: "w-3.5 shrink-0" }),
      /* @__PURE__ */ D("label", { className: "flex cursor-pointer select-none items-center gap-2", children: [
        /* @__PURE__ */ f(
          Do,
          {
            size: i,
            checked: d,
            indeterminate: p,
            onChange: h
          }
        ),
        /* @__PURE__ */ f(
          "span",
          {
            className: I(
              "text-sm",
              d || p ? "text-text-base" : "text-text-muted"
            ),
            children: e
          }
        )
      ] })
    ] }),
    l && o && /* @__PURE__ */ f("div", { className: "ml-5 mt-1 flex flex-col gap-1", children: r.map((g) => {
      const v = !t || !!g.disabled;
      return /* @__PURE__ */ D(
        "label",
        {
          className: I(
            "flex select-none items-center gap-2",
            v ? "cursor-default opacity-50" : "cursor-pointer"
          ),
          children: [
            /* @__PURE__ */ f(
              Do,
              {
                size: "sm",
                checked: g.checked,
                disabled: v,
                onChange: g.onToggle
              }
            ),
            /* @__PURE__ */ f("span", { className: "text-xs text-text-base", children: g.label })
          ]
        },
        g.key
      );
    }) })
  ] });
}
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function qc(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ar(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = qc(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : qc(e[o], null);
        }
      };
  };
}
function le(...e) {
  return c.useCallback(ar(...e), e);
}
function Vx(e, t) {
  const n = c.createContext(t), r = (s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ f(n.Provider, { value: l, children: i });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const i = c.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Kt(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i), l = n.length;
    n = [...n, i];
    const u = (d) => {
      const { scope: p, children: h, ...g } = d, v = p?.[e]?.[l] || a, b = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ f(v.Provider, { value: b, children: h });
    };
    u.displayName = s + "Provider";
    function m(d, p) {
      const h = p?.[e]?.[l] || a, g = c.useContext(h);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [u, m];
  }
  const o = () => {
    const s = n.map((i) => c.createContext(i));
    return function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, jx(o, ...t)];
}
function jx(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Ux(e) {
  const t = /* @__PURE__ */ Yx(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(Kx);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Yx(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = qx(o), a = Xx(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? ar(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Gx = /* @__PURE__ */ Symbol("radix.slottable");
function Kx(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Gx;
}
function Xx(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function qx(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Zx = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ne = Zx.reduce((e, t) => {
  const n = /* @__PURE__ */ Ux(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Qx(e, t) {
  e && Ve.flushSync(() => e.dispatchEvent(t));
}
function We(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => t.current?.(...n), []);
}
function Jx(e, t = globalThis?.document) {
  const n = We(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var eC = "DismissableLayer", ri = "dismissableLayer.update", tC = "dismissableLayer.pointerDownOutside", nC = "dismissableLayer.focusOutside", Zc, ef = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Uo = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(ef), [m, d] = c.useState(null), p = m?.ownerDocument ?? globalThis?.document, [, h] = c.useState({}), g = le(t, (E) => d(E)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(b), x = m ? v.indexOf(m) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= w, P = sC((E) => {
      const N = E.target, R = [...u.branches].some((k) => k.contains(N));
      !C || R || (o?.(E), i?.(E), E.defaultPrevented || a?.());
    }, p), S = iC((E) => {
      const N = E.target;
      [...u.branches].some((k) => k.contains(N)) || (s?.(E), i?.(E), E.defaultPrevented || a?.());
    }, p);
    return Jx((E) => {
      x === u.layers.size - 1 && (r?.(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, p), c.useEffect(() => {
      if (m)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Zc = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(m)), u.layers.add(m), Qc(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Zc);
        };
    }, [m, p, n, u]), c.useEffect(() => () => {
      m && (u.layers.delete(m), u.layersWithOutsidePointerEventsDisabled.delete(m), Qc());
    }, [m, u]), c.useEffect(() => {
      const E = () => h({});
      return document.addEventListener(ri, E), () => document.removeEventListener(ri, E);
    }, []), /* @__PURE__ */ f(
      ne.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Uo.displayName = eC;
var rC = "DismissableLayerBranch", oC = c.forwardRef((e, t) => {
  const n = c.useContext(ef), r = c.useRef(null), o = le(t, r);
  return c.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ f(ne.div, { ...e, ref: o });
});
oC.displayName = rC;
function sC(e, t = globalThis?.document) {
  const n = We(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          tf(
            tC,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function iC(e, t = globalThis?.document) {
  const n = We(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && tf(nC, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Qc() {
  const e = new CustomEvent(ri);
  document.dispatchEvent(e);
}
function tf(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Qx(o, s) : o.dispatchEvent(s);
}
var Os = 0;
function ma() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Jc()), document.body.insertAdjacentElement("beforeend", e[1] ?? Jc()), Os++, () => {
      Os === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Os--;
    };
  }, []);
}
function Jc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Rs = "focusScope.autoFocusOnMount", Ds = "focusScope.autoFocusOnUnmount", el = { bubbles: !1, cancelable: !0 }, aC = "FocusScope", Yo = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = c.useState(null), u = We(o), m = We(s), d = c.useRef(null), p = le(t, (v) => l(v)), h = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let v = function(y) {
        if (h.paused || !a) return;
        const C = y.target;
        a.contains(C) ? d.current = C : Jt(d.current, { select: !0 });
      }, b = function(y) {
        if (h.paused || !a) return;
        const C = y.relatedTarget;
        C !== null && (a.contains(C) || Jt(d.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const P of y)
            P.removedNodes.length > 0 && Jt(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", b);
      const x = new MutationObserver(w);
      return a && x.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", b), x.disconnect();
      };
    }
  }, [r, a, h.paused]), c.useEffect(() => {
    if (a) {
      nl.add(h);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const w = new CustomEvent(Rs, el);
        a.addEventListener(Rs, u), a.dispatchEvent(w), w.defaultPrevented || (cC(mC(nf(a)), { select: !0 }), document.activeElement === v && Jt(a));
      }
      return () => {
        a.removeEventListener(Rs, u), setTimeout(() => {
          const w = new CustomEvent(Ds, el);
          a.addEventListener(Ds, m), a.dispatchEvent(w), w.defaultPrevented || Jt(v ?? document.body, { select: !0 }), a.removeEventListener(Ds, m), nl.remove(h);
        }, 0);
      };
    }
  }, [a, u, m, h]);
  const g = c.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (b && w) {
        const x = v.currentTarget, [y, C] = lC(x);
        y && C ? !v.shiftKey && w === C ? (v.preventDefault(), n && Jt(y, { select: !0 })) : v.shiftKey && w === y && (v.preventDefault(), n && Jt(C, { select: !0 })) : w === x && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ f(ne.div, { tabIndex: -1, ...i, ref: p, onKeyDown: g });
});
Yo.displayName = aC;
function cC(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Jt(r, { select: t }), document.activeElement !== n) return;
}
function lC(e) {
  const t = nf(e), n = tl(t, e), r = tl(t.reverse(), e);
  return [n, r];
}
function nf(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function tl(e, t) {
  for (const n of e)
    if (!uC(n, { upTo: t })) return n;
}
function uC(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function dC(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Jt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && dC(e) && t && e.select();
  }
}
var nl = fC();
function fC() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = rl(e, t), e.unshift(t);
    },
    remove(t) {
      e = rl(e, t), e[0]?.resume();
    }
  };
}
function rl(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function mC(e) {
  return e.filter((t) => t.tagName !== "A");
}
var $e = globalThis?.document ? c.useLayoutEffect : () => {
}, pC = c[" useId ".trim().toString()] || (() => {
}), hC = 0;
function zt(e) {
  const [t, n] = c.useState(pC());
  return $e(() => {
    n((r) => r ?? String(hC++));
  }, [e]), t ? `radix-${t}` : "";
}
const gC = ["top", "right", "bottom", "left"], sn = Math.min, qe = Math.max, To = Math.round, so = Math.floor, Ot = (e) => ({
  x: e,
  y: e
}), vC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function oi(e, t, n) {
  return qe(e, sn(t, n));
}
function Ht(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vt(e) {
  return e.split("-")[0];
}
function cr(e) {
  return e.split("-")[1];
}
function pa(e) {
  return e === "x" ? "y" : "x";
}
function ha(e) {
  return e === "y" ? "height" : "width";
}
function Pt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ga(e) {
  return pa(Pt(e));
}
function bC(e, t, n) {
  n === void 0 && (n = !1);
  const r = cr(e), o = ga(e), s = ha(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Mo(i)), [i, Mo(i)];
}
function yC(e) {
  const t = Mo(e);
  return [si(e), t, si(t)];
}
function si(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const ol = ["left", "right"], sl = ["right", "left"], wC = ["top", "bottom"], xC = ["bottom", "top"];
function CC(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? sl : ol : t ? ol : sl;
    case "left":
    case "right":
      return t ? wC : xC;
    default:
      return [];
  }
}
function SC(e, t, n, r) {
  const o = cr(e);
  let s = CC(Vt(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(si)))), s;
}
function Mo(e) {
  const t = Vt(e);
  return vC[t] + e.slice(t.length);
}
function EC(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function rf(e) {
  return typeof e != "number" ? EC(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ko(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function il(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Pt(t), i = ga(t), a = ha(i), l = Vt(t), u = s === "y", m = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: m,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: m,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (cr(t)) {
    case "start":
      h[i] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      h[i] += p * (n && u ? -1 : 1);
      break;
  }
  return h;
}
async function PC(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Ht(t, e), g = rf(h), b = a[p ? d === "floating" ? "reference" : "floating" : d], w = ko(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: m,
    strategy: l
  })), x = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), C = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = ko(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: y,
    strategy: l
  }) : x);
  return {
    top: (w.top - P.top + g.top) / C.y,
    bottom: (P.bottom - w.bottom + g.bottom) / C.y,
    left: (w.left - P.left + g.left) / C.x,
    right: (P.right - w.right + g.right) / C.x
  };
}
const NC = 50, OC = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = i.detectOverflow ? i : {
    ...i,
    detectOverflow: PC
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: m,
    y: d
  } = il(u, r, l), p = r, h = 0;
  const g = {};
  for (let v = 0; v < s.length; v++) {
    const b = s[v];
    if (!b)
      continue;
    const {
      name: w,
      fn: x
    } = b, {
      x: y,
      y: C,
      data: P,
      reset: S
    } = await x({
      x: m,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: g,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    m = y ?? m, d = C ?? d, g[w] = {
      ...g[w],
      ...P
    }, S && h < NC && (h++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: m,
      y: d
    } = il(u, p, l)), v = -1);
  }
  return {
    x: m,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: g
  };
}, RC = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: m = 0
    } = Ht(e, t) || {};
    if (u == null)
      return {};
    const d = rf(m), p = {
      x: n,
      y: r
    }, h = ga(o), g = ha(h), v = await i.getDimensions(u), b = h === "y", w = b ? "top" : "left", x = b ? "bottom" : "right", y = b ? "clientHeight" : "clientWidth", C = s.reference[g] + s.reference[h] - p[h] - s.floating[g], P = p[h] - s.reference[h], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let E = S ? S[y] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(S))) && (E = a.floating[y] || s.floating[g]);
    const N = C / 2 - P / 2, R = E / 2 - v[g] / 2 - 1, k = sn(d[w], R), _ = sn(d[x], R), T = k, L = E - v[g] - _, F = E / 2 - v[g] / 2 + N, z = oi(T, F, L), A = !l.arrow && cr(o) != null && F !== z && s.reference[g] / 2 - (F < T ? k : _) - v[g] / 2 < 0, W = A ? F < T ? F - T : F - L : 0;
    return {
      [h]: p[h] + W,
      data: {
        [h]: z,
        centerOffset: F - z - W,
        ...A && {
          alignmentOffset: W
        }
      },
      reset: A
    };
  }
}), DC = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: m = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...b
      } = Ht(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = Vt(o), x = Pt(a), y = Vt(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), P = p || (y || !v ? [Mo(a)] : yC(a)), S = g !== "none";
      !p && S && P.push(...SC(a, v, g, C));
      const E = [a, ...P], N = await l.detectOverflow(t, b), R = [];
      let k = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (m && R.push(N[w]), d) {
        const F = bC(o, i, C);
        R.push(N[F[0]], N[F[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: R
      }], !R.every((F) => F <= 0)) {
        var _, T;
        const F = (((_ = s.flip) == null ? void 0 : _.index) || 0) + 1, z = E[F];
        if (z && (!(d === "alignment" ? x !== Pt(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((M) => Pt(M.placement) === x ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: k
            },
            reset: {
              placement: z
            }
          };
        let A = (T = k.filter((W) => W.overflows[0] <= 0).sort((W, M) => W.overflows[1] - M.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!A)
          switch (h) {
            case "bestFit": {
              var L;
              const W = (L = k.filter((M) => {
                if (S) {
                  const $ = Pt(M.placement);
                  return $ === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter(($) => $ > 0).reduce(($, O) => $ + O, 0)]).sort((M, $) => M[1] - $[1])[0]) == null ? void 0 : L[0];
              W && (A = W);
              break;
            }
            case "initialPlacement":
              A = a;
              break;
          }
        if (o !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function al(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function cl(e) {
  return gC.some((t) => e[t] >= 0);
}
const TC = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Ht(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), a = al(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: cl(a)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), a = al(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: cl(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, of = /* @__PURE__ */ new Set(["left", "top"]);
async function MC(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Vt(n), a = cr(n), l = Pt(n) === "y", u = of.has(i) ? -1 : 1, m = s && l ? -1 : 1, d = Ht(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof g == "number" && (h = a === "end" ? g * -1 : g), l ? {
    x: h * m,
    y: p * u
  } : {
    x: p * u,
    y: h * m
  };
}
const kC = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await MC(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, AC = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (w) => {
            let {
              x,
              y
            } = w;
            return {
              x,
              y
            };
          }
        },
        ...u
      } = Ht(e, t), m = {
        x: n,
        y: r
      }, d = await s.detectOverflow(t, u), p = Pt(Vt(o)), h = pa(p);
      let g = m[h], v = m[p];
      if (i) {
        const w = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", y = g + d[w], C = g - d[x];
        g = oi(y, g, C);
      }
      if (a) {
        const w = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", y = v + d[w], C = v - d[x];
        v = oi(y, v, C);
      }
      const b = l.fn({
        ...t,
        [h]: g,
        [p]: v
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [h]: i,
            [p]: a
          }
        }
      };
    }
  };
}, IC = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Ht(e, t), m = {
        x: n,
        y: r
      }, d = Pt(o), p = pa(d);
      let h = m[p], g = m[d];
      const v = Ht(a, t), b = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const y = p === "y" ? "height" : "width", C = s.reference[p] - s.floating[y] + b.mainAxis, P = s.reference[p] + s.reference[y] - b.mainAxis;
        h < C ? h = C : h > P && (h = P);
      }
      if (u) {
        var w, x;
        const y = p === "y" ? "width" : "height", C = of.has(Vt(o)), P = s.reference[d] - s.floating[y] + (C && ((w = i.offset) == null ? void 0 : w[d]) || 0) + (C ? 0 : b.crossAxis), S = s.reference[d] + s.reference[y] + (C ? 0 : ((x = i.offset) == null ? void 0 : x[d]) || 0) - (C ? b.crossAxis : 0);
        g < P ? g = P : g > S && (g = S);
      }
      return {
        [p]: h,
        [d]: g
      };
    }
  };
}, _C = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...u
      } = Ht(e, t), m = await i.detectOverflow(t, u), d = Vt(o), p = cr(o), h = Pt(o) === "y", {
        width: g,
        height: v
      } = s.floating;
      let b, w;
      d === "top" || d === "bottom" ? (b = d, w = p === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = d, b = p === "end" ? "top" : "bottom");
      const x = v - m.top - m.bottom, y = g - m.left - m.right, C = sn(v - m[b], x), P = sn(g - m[w], y), S = !t.middlewareData.shift;
      let E = C, N = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = y), (r = t.middlewareData.shift) != null && r.enabled.y && (E = x), S && !p) {
        const k = qe(m.left, 0), _ = qe(m.right, 0), T = qe(m.top, 0), L = qe(m.bottom, 0);
        h ? N = g - 2 * (k !== 0 || _ !== 0 ? k + _ : qe(m.left, m.right)) : E = v - 2 * (T !== 0 || L !== 0 ? T + L : qe(m.top, m.bottom));
      }
      await l({
        ...t,
        availableWidth: N,
        availableHeight: E
      });
      const R = await i.getDimensions(a.floating);
      return g !== R.width || v !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Go() {
  return typeof window < "u";
}
function lr(e) {
  return sf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Qe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Mt(e) {
  var t;
  return (t = (sf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sf(e) {
  return Go() ? e instanceof Node || e instanceof Qe(e).Node : !1;
}
function ht(e) {
  return Go() ? e instanceof Element || e instanceof Qe(e).Element : !1;
}
function Xt(e) {
  return Go() ? e instanceof HTMLElement || e instanceof Qe(e).HTMLElement : !1;
}
function ll(e) {
  return !Go() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Qe(e).ShadowRoot;
}
function Lr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function $C(e) {
  return /^(table|td|th)$/.test(lr(e));
}
function Ko(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const FC = /transform|translate|scale|rotate|perspective|filter/, LC = /paint|layout|strict|content/, wn = (e) => !!e && e !== "none";
let Ts;
function va(e) {
  const t = ht(e) ? gt(e) : e;
  return wn(t.transform) || wn(t.translate) || wn(t.scale) || wn(t.rotate) || wn(t.perspective) || !ba() && (wn(t.backdropFilter) || wn(t.filter)) || FC.test(t.willChange || "") || LC.test(t.contain || "");
}
function WC(e) {
  let t = an(e);
  for (; Xt(t) && !er(t); ) {
    if (va(t))
      return t;
    if (Ko(t))
      return null;
    t = an(t);
  }
  return null;
}
function ba() {
  return Ts == null && (Ts = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ts;
}
function er(e) {
  return /^(html|body|#document)$/.test(lr(e));
}
function gt(e) {
  return Qe(e).getComputedStyle(e);
}
function Xo(e) {
  return ht(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function an(e) {
  if (lr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ll(e) && e.host || // Fallback.
    Mt(e)
  );
  return ll(t) ? t.host : t;
}
function af(e) {
  const t = an(e);
  return er(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xt(t) && Lr(t) ? t : af(t);
}
function Or(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = af(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Qe(o);
  if (s) {
    const a = ii(i);
    return t.concat(i, i.visualViewport || [], Lr(o) ? o : [], a && n ? Or(a) : []);
  } else
    return t.concat(o, Or(o, [], n));
}
function ii(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function cf(e) {
  const t = gt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Xt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = To(n) !== s || To(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function ya(e) {
  return ht(e) ? e : e.contextElement;
}
function Xn(e) {
  const t = ya(e);
  if (!Xt(t))
    return Ot(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = cf(t);
  let i = (s ? To(n.width) : n.width) / r, a = (s ? To(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const zC = /* @__PURE__ */ Ot(0);
function lf(e) {
  const t = Qe(e);
  return !ba() || !t.visualViewport ? zC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function BC(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Qe(e) ? !1 : t;
}
function Nn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = ya(e);
  let i = Ot(1);
  t && (r ? ht(r) && (i = Xn(r)) : i = Xn(e));
  const a = BC(s, n, r) ? lf(s) : Ot(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, m = o.width / i.x, d = o.height / i.y;
  if (s) {
    const p = Qe(s), h = r && ht(r) ? Qe(r) : r;
    let g = p, v = ii(g);
    for (; v && r && h !== g; ) {
      const b = Xn(v), w = v.getBoundingClientRect(), x = gt(v), y = w.left + (v.clientLeft + parseFloat(x.paddingLeft)) * b.x, C = w.top + (v.clientTop + parseFloat(x.paddingTop)) * b.y;
      l *= b.x, u *= b.y, m *= b.x, d *= b.y, l += y, u += C, g = Qe(v), v = ii(g);
    }
  }
  return ko({
    width: m,
    height: d,
    x: l,
    y: u
  });
}
function qo(e, t) {
  const n = Xo(e).scrollLeft;
  return t ? t.left + n : Nn(Mt(e)).left + n;
}
function uf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - qo(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function HC(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Mt(r), a = t ? Ko(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ot(1);
  const m = Ot(0), d = Xt(r);
  if ((d || !d && !s) && ((lr(r) !== "body" || Lr(i)) && (l = Xo(r)), d)) {
    const h = Nn(r);
    u = Xn(r), m.x = h.x + r.clientLeft, m.y = h.y + r.clientTop;
  }
  const p = i && !d && !s ? uf(i, l) : Ot(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + m.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + m.y + p.y
  };
}
function VC(e) {
  return Array.from(e.getClientRects());
}
function jC(e) {
  const t = Mt(e), n = Xo(e), r = e.ownerDocument.body, o = qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + qo(e);
  const a = -n.scrollTop;
  return gt(r).direction === "rtl" && (i += qe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const ul = 25;
function UC(e, t) {
  const n = Qe(e), r = Mt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const m = ba();
    (!m || m && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = qo(r);
  if (u <= 0) {
    const m = r.ownerDocument, d = m.body, p = getComputedStyle(d), h = m.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - d.clientWidth - h);
    g <= ul && (s -= g);
  } else u <= ul && (s += u);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function YC(e, t) {
  const n = Nn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Xt(e) ? Xn(e) : Ot(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function dl(e, t, n) {
  let r;
  if (t === "viewport")
    r = UC(e, n);
  else if (t === "document")
    r = jC(Mt(e));
  else if (ht(t))
    r = YC(t, n);
  else {
    const o = lf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ko(r);
}
function df(e, t) {
  const n = an(e);
  return n === t || !ht(n) || er(n) ? !1 : gt(n).position === "fixed" || df(n, t);
}
function GC(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Or(e, [], !1).filter((a) => ht(a) && lr(a) !== "body"), o = null;
  const s = gt(e).position === "fixed";
  let i = s ? an(e) : e;
  for (; ht(i) && !er(i); ) {
    const a = gt(i), l = va(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || Lr(i) && !l && df(e, i)) ? r = r.filter((m) => m !== i) : o = a, i = an(i);
  }
  return t.set(e, r), r;
}
function KC(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ko(t) ? [] : GC(t, this._c) : [].concat(n), r], a = dl(t, i[0], o);
  let l = a.top, u = a.right, m = a.bottom, d = a.left;
  for (let p = 1; p < i.length; p++) {
    const h = dl(t, i[p], o);
    l = qe(h.top, l), u = sn(h.right, u), m = sn(h.bottom, m), d = qe(h.left, d);
  }
  return {
    width: u - d,
    height: m - l,
    x: d,
    y: l
  };
}
function XC(e) {
  const {
    width: t,
    height: n
  } = cf(e);
  return {
    width: t,
    height: n
  };
}
function qC(e, t, n) {
  const r = Xt(t), o = Mt(t), s = n === "fixed", i = Nn(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ot(0);
  function u() {
    l.x = qo(o);
  }
  if (r || !r && !s)
    if ((lr(t) !== "body" || Lr(o)) && (a = Xo(t)), r) {
      const h = Nn(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const m = o && !r && !s ? uf(o, a) : Ot(0), d = i.left + a.scrollLeft - l.x - m.x, p = i.top + a.scrollTop - l.y - m.y;
  return {
    x: d,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Ms(e) {
  return gt(e).position === "static";
}
function fl(e, t) {
  if (!Xt(e) || gt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Mt(e) === n && (n = n.ownerDocument.body), n;
}
function ff(e, t) {
  const n = Qe(e);
  if (Ko(e))
    return n;
  if (!Xt(e)) {
    let o = an(e);
    for (; o && !er(o); ) {
      if (ht(o) && !Ms(o))
        return o;
      o = an(o);
    }
    return n;
  }
  let r = fl(e, t);
  for (; r && $C(r) && Ms(r); )
    r = fl(r, t);
  return r && er(r) && Ms(r) && !va(r) ? n : r || WC(e) || n;
}
const ZC = async function(e) {
  const t = this.getOffsetParent || ff, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: qC(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function QC(e) {
  return gt(e).direction === "rtl";
}
const JC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: HC,
  getDocumentElement: Mt,
  getClippingRect: KC,
  getOffsetParent: ff,
  getElementRects: ZC,
  getClientRects: VC,
  getDimensions: XC,
  getScale: Xn,
  isElement: ht,
  isRTL: QC
};
function mf(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function eS(e, t) {
  let n = null, r;
  const o = Mt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const u = e.getBoundingClientRect(), {
      left: m,
      top: d,
      width: p,
      height: h
    } = u;
    if (a || t(), !p || !h)
      return;
    const g = so(d), v = so(o.clientWidth - (m + p)), b = so(o.clientHeight - (d + h)), w = so(m), y = {
      rootMargin: -g + "px " + -v + "px " + -b + "px " + -w + "px",
      threshold: qe(0, sn(1, l)) || 1
    };
    let C = !0;
    function P(S) {
      const E = S[0].intersectionRatio;
      if (E !== l) {
        if (!C)
          return i();
        E ? i(!1, E) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !mf(u, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function wa(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = ya(e), m = o || s ? [...u ? Or(u) : [], ...t ? Or(t) : []] : [];
  m.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const d = u && a ? eS(u, n) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === u && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), u && !l && h.observe(u), t && h.observe(t));
  let g, v = l ? Nn(e) : null;
  l && b();
  function b() {
    const w = Nn(e);
    v && !mf(v, w) && n(), v = w, g = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    m.forEach((x) => {
      o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), d?.(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(g);
  };
}
const tS = kC, nS = AC, rS = DC, oS = _C, sS = TC, ml = RC, iS = IC, aS = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: JC,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return OC(e, t, {
    ...o,
    platform: s
  });
};
var cS = typeof document < "u", lS = function() {
}, bo = cS ? Ru : lS;
function Ao(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ao(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Ao(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function pl(e, t) {
  const n = pf(e);
  return Math.round(t * n) / n;
}
function ks(e) {
  const t = c.useRef(e);
  return bo(() => {
    t.current = e;
  }), t;
}
function xa(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: u
  } = e, [m, d] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = c.useState(r);
  Ao(p, r) || h(r);
  const [g, v] = c.useState(null), [b, w] = c.useState(null), x = c.useCallback((M) => {
    M !== S.current && (S.current = M, v(M));
  }, []), y = c.useCallback((M) => {
    M !== E.current && (E.current = M, w(M));
  }, []), C = s || g, P = i || b, S = c.useRef(null), E = c.useRef(null), N = c.useRef(m), R = l != null, k = ks(l), _ = ks(o), T = ks(u), L = c.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: p
    };
    _.current && (M.platform = _.current), aS(S.current, E.current, M).then(($) => {
      const O = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      F.current && !Ao(N.current, O) && (N.current = O, Ve.flushSync(() => {
        d(O);
      }));
    });
  }, [p, t, n, _, T]);
  bo(() => {
    u === !1 && N.current.isPositioned && (N.current.isPositioned = !1, d((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [u]);
  const F = c.useRef(!1);
  bo(() => (F.current = !0, () => {
    F.current = !1;
  }), []), bo(() => {
    if (C && (S.current = C), P && (E.current = P), C && P) {
      if (k.current)
        return k.current(C, P, L);
      L();
    }
  }, [C, P, L, k, R]);
  const z = c.useMemo(() => ({
    reference: S,
    floating: E,
    setReference: x,
    setFloating: y
  }), [x, y]), A = c.useMemo(() => ({
    reference: C,
    floating: P
  }), [C, P]), W = c.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return M;
    const $ = pl(A.floating, m.x), O = pl(A.floating, m.y);
    return a ? {
      ...M,
      transform: "translate(" + $ + "px, " + O + "px)",
      ...pf(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: O
    };
  }, [n, a, A.floating, m.x, m.y]);
  return c.useMemo(() => ({
    ...m,
    update: L,
    refs: z,
    elements: A,
    floatingStyles: W
  }), [m, L, z, A, W]);
}
const uS = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? ml({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ml({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Ca = (e, t) => {
  const n = tS(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Sa = (e, t) => {
  const n = nS(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ea = (e, t) => ({
  fn: iS(e).fn,
  options: [e, t]
}), Pa = (e, t) => {
  const n = rS(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Na = (e, t) => {
  const n = oS(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Oa = (e, t) => {
  const n = sS(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ra = (e, t) => {
  const n = uS(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var dS = "Arrow", hf = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ f(
    ne.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
hf.displayName = dS;
var fS = hf;
function gf(e) {
  const [t, n] = c.useState(void 0);
  return $e(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const l = s.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          i = u.inlineSize, a = u.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Da = "Popper", [vf, Zo] = Kt(Da), [mS, bf] = vf(Da), yf = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ f(mS, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
yf.displayName = Da;
var wf = "PopperAnchor", xf = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = bf(wf, n), i = c.useRef(null), a = le(t, i), l = c.useRef(null);
    return c.useEffect(() => {
      const u = l.current;
      l.current = r?.current || i.current, u !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ f(ne.div, { ...o, ref: a });
  }
);
xf.displayName = wf;
var Ta = "PopperContent", [pS, hS] = vf(Ta), Cf = c.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: m = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: g,
      ...v
    } = e, b = bf(Ta, n), [w, x] = c.useState(null), y = le(t, (j) => x(j)), [C, P] = c.useState(null), S = gf(C), E = S?.width ?? 0, N = S?.height ?? 0, R = r + (s !== "center" ? "-" + s : ""), k = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, _ = Array.isArray(u) ? u : [u], T = _.length > 0, L = {
      padding: k,
      boundary: _.filter(vS),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: T
    }, { refs: F, floatingStyles: z, placement: A, isPositioned: W, middlewareData: M } = xa({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...j) => wa(...j, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Ca({ mainAxis: o + N, alignmentAxis: i }),
        l && Sa({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Ea() : void 0,
          ...L
        }),
        l && Pa({ ...L }),
        Na({
          ...L,
          apply: ({ elements: j, rects: oe, availableWidth: K, availableHeight: ee }) => {
            const { width: se, height: ae } = oe.reference, me = j.floating.style;
            me.setProperty("--radix-popper-available-width", `${K}px`), me.setProperty("--radix-popper-available-height", `${ee}px`), me.setProperty("--radix-popper-anchor-width", `${se}px`), me.setProperty("--radix-popper-anchor-height", `${ae}px`);
          }
        }),
        C && Ra({ element: C, padding: a }),
        bS({ arrowWidth: E, arrowHeight: N }),
        p && Oa({ strategy: "referenceHidden", ...L })
      ]
    }), [$, O] = Pf(A), B = We(g);
    $e(() => {
      W && B?.();
    }, [W, B]);
    const Q = M.arrow?.x, re = M.arrow?.y, be = M.arrow?.centerOffset !== 0, [J, H] = c.useState();
    return $e(() => {
      w && H(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ f(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: W ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: J,
          "--radix-popper-transform-origin": [
            M.transformOrigin?.x,
            M.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...M.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          pS,
          {
            scope: n,
            placedSide: $,
            onArrowChange: P,
            arrowX: Q,
            arrowY: re,
            shouldHideArrow: be,
            children: /* @__PURE__ */ f(
              ne.div,
              {
                "data-side": $,
                "data-align": O,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: W ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Cf.displayName = Ta;
var Sf = "PopperArrow", gS = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ef = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = hS(Sf, r), i = gS[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f(
          fS,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Ef.displayName = Sf;
function vS(e) {
  return e !== null;
}
var bS = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, m] = Pf(n), d = { start: "0%", center: "50%", end: "100%" }[m], p = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let g = "", v = "";
    return u === "bottom" ? (g = i ? d : `${p}px`, v = `${-l}px`) : u === "top" ? (g = i ? d : `${p}px`, v = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, v = i ? d : `${h}px`) : u === "left" && (g = `${r.floating.width + l}px`, v = i ? d : `${h}px`), { data: { x: g, y: v } };
  }
});
function Pf(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Nf = yf, Ma = xf, Of = Cf, Rf = Ef, yS = "Portal", Qo = c.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = c.useState(!1);
  $e(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? Fb.createPortal(/* @__PURE__ */ f(ne.div, { ...r, ref: t }), i) : null;
});
Qo.displayName = yS;
function wS(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var vt = (e) => {
  const { present: t, children: n } = e, r = xS(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = le(r.ref, CS(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
};
vt.displayName = "Presence";
function xS(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = wS(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = io(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), $e(() => {
    const u = r.current, m = o.current;
    if (m !== e) {
      const p = s.current, h = io(u);
      e ? l("MOUNT") : h === "none" || u?.display === "none" ? l("UNMOUNT") : l(m && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), $e(() => {
    if (t) {
      let u;
      const m = t.ownerDocument.defaultView ?? window, d = (h) => {
        const v = io(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, p = (h) => {
        h.target === t && (s.current = io(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        m.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: c.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function io(e) {
  return e?.animationName || "none";
}
function CS(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function SS(e) {
  const t = /* @__PURE__ */ ES(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(NS);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ES(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = RS(o), a = OS(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? ar(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var PS = /* @__PURE__ */ Symbol("radix.slottable");
function NS(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === PS;
}
function OS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function RS(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var DS = c[" useInsertionEffect ".trim().toString()] || $e;
function On({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = TS({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o;
  {
    const m = c.useRef(e !== void 0);
    c.useEffect(() => {
      const d = m.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), m.current = a;
    }, [a, r]);
  }
  const u = c.useCallback(
    (m) => {
      if (a) {
        const d = MS(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function TS({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return DS(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function MS(e) {
  return typeof e == "function";
}
var kS = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Fn = /* @__PURE__ */ new WeakMap(), ao = /* @__PURE__ */ new WeakMap(), co = {}, As = 0, Df = function(e) {
  return e && (e.host || Df(e.parentNode));
}, AS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Df(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, IS = function(e, t, n, r) {
  var o = AS(t, Array.isArray(e) ? e : [e]);
  co[n] || (co[n] = /* @__PURE__ */ new WeakMap());
  var s = co[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var m = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (a.has(p))
        m(p);
      else
        try {
          var h = p.getAttribute(r), g = h !== null && h !== "false", v = (Fn.get(p) || 0) + 1, b = (s.get(p) || 0) + 1;
          Fn.set(p, v), s.set(p, b), i.push(p), v === 1 && g && ao.set(p, !0), b === 1 && p.setAttribute(n, "true"), g || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return m(t), a.clear(), As++, function() {
    i.forEach(function(d) {
      var p = Fn.get(d) - 1, h = s.get(d) - 1;
      Fn.set(d, p), s.set(d, h), p || (ao.has(d) || d.removeAttribute(r), ao.delete(d)), h || d.removeAttribute(n);
    }), As--, As || (Fn = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakMap(), ao = /* @__PURE__ */ new WeakMap(), co = {});
  };
}, Jo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = kS(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), IS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ct = function() {
  return Ct = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ct.apply(this, arguments);
};
function Tf(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function _S(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var yo = "right-scroll-bar-position", wo = "width-before-scroll-bar", $S = "with-scroll-bars-hidden", FS = "--removed-body-scroll-bar-size";
function Is(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function LS(e, t) {
  var n = pt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var WS = typeof window < "u" ? c.useLayoutEffect : c.useEffect, hl = /* @__PURE__ */ new WeakMap();
function zS(e, t) {
  var n = LS(null, function(r) {
    return e.forEach(function(o) {
      return Is(o, r);
    });
  });
  return WS(function() {
    var r = hl.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Is(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Is(a, i);
      });
    }
    hl.set(n, e);
  }, [e]), n;
}
function BS(e) {
  return e;
}
function HS(e, t) {
  t === void 0 && (t = BS);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var l = function() {
        var m = i;
        i = [], m.forEach(s);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(m) {
          i.push(m), u();
        },
        filter: function(m) {
          return i = i.filter(m), n;
        }
      };
    }
  };
  return o;
}
function VS(e) {
  e === void 0 && (e = {});
  var t = HS(null);
  return t.options = Ct({ async: !0, ssr: !1 }, e), t;
}
var Mf = function(e) {
  var t = e.sideCar, n = Tf(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, Ct({}, n));
};
Mf.isSideCarExport = !0;
function jS(e, t) {
  return e.useMedium(t), Mf;
}
var kf = VS(), _s = function() {
}, es = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: _s,
    onWheelCapture: _s,
    onTouchMoveCapture: _s
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, m = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, g = e.noIsolation, v = e.inert, b = e.allowPinchZoom, w = e.as, x = w === void 0 ? "div" : w, y = e.gapMode, C = Tf(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = p, S = zS([n, t]), E = Ct(Ct({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    m && c.createElement(P, { sideCar: kf, removeScrollBar: u, shards: d, noRelative: h, noIsolation: g, inert: v, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: y }),
    i ? c.cloneElement(c.Children.only(a), Ct(Ct({}, E), { ref: S })) : c.createElement(x, Ct({}, E, { className: l, ref: S }), a)
  );
});
es.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
es.classNames = {
  fullWidth: wo,
  zeroRight: yo
};
var US = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function YS() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = US();
  return t && e.setAttribute("nonce", t), e;
}
function GS(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function KS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var XS = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = YS()) && (GS(t, n), KS(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, qS = function() {
  var e = XS();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Af = function() {
  var e = qS(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, ZS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $s = function(e) {
  return parseInt(e || "", 10) || 0;
}, QS = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$s(n), $s(r), $s(o)];
}, JS = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ZS;
  var t = QS(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, eE = Af(), qn = "data-scroll-locked", tE = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat($S, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(qn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(yo, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(wo, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(yo, " .").concat(yo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(wo, " .").concat(wo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(qn, `] {
    `).concat(FS, ": ").concat(a, `px;
  }
`);
}, gl = function() {
  var e = parseInt(document.body.getAttribute(qn) || "0", 10);
  return isFinite(e) ? e : 0;
}, nE = function() {
  c.useEffect(function() {
    return document.body.setAttribute(qn, (gl() + 1).toString()), function() {
      var e = gl() - 1;
      e <= 0 ? document.body.removeAttribute(qn) : document.body.setAttribute(qn, e.toString());
    };
  }, []);
}, rE = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  nE();
  var s = c.useMemo(function() {
    return JS(o);
  }, [o]);
  return c.createElement(eE, { styles: tE(s, !t, o, n ? "" : "!important") });
}, ai = !1;
if (typeof window < "u")
  try {
    var lo = Object.defineProperty({}, "passive", {
      get: function() {
        return ai = !0, !0;
      }
    });
    window.addEventListener("test", lo, lo), window.removeEventListener("test", lo, lo);
  } catch {
    ai = !1;
  }
var Ln = ai ? { passive: !1 } : !1, oE = function(e) {
  return e.tagName === "TEXTAREA";
}, If = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !oE(e) && n[t] === "visible")
  );
}, sE = function(e) {
  return If(e, "overflowY");
}, iE = function(e) {
  return If(e, "overflowX");
}, vl = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = _f(e, r);
    if (o) {
      var s = $f(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, aE = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, cE = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, _f = function(e, t) {
  return e === "v" ? sE(t) : iE(t);
}, $f = function(e, t) {
  return e === "v" ? aE(t) : cE(t);
}, lE = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, uE = function(e, t, n, r, o) {
  var s = lE(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, m = i > 0, d = 0, p = 0;
  do {
    if (!a)
      break;
    var h = $f(e, a), g = h[0], v = h[1], b = h[2], w = v - b - s * g;
    (g || w) && _f(e, a) && (d += w, p += g);
    var x = a.parentNode;
    a = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (m && Math.abs(d) < 1 || !m && Math.abs(p) < 1) && (u = !0), u;
}, uo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, bl = function(e) {
  return [e.deltaX, e.deltaY];
}, yl = function(e) {
  return e && "current" in e ? e.current : e;
}, dE = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, fE = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, mE = 0, Wn = [];
function pE(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(mE++)[0], s = c.useState(Af)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = _S([e.lockRef.current], (e.shards || []).map(yl), !0).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = c.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = uo(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - w[0], C = "deltaY" in v ? v.deltaY : x[1] - w[1], P, S = v.target, E = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var N = window.getSelection(), R = N && N.anchorNode, k = R ? R === S || R.contains(S) : !1;
    if (k)
      return !1;
    var _ = vl(E, S);
    if (!_)
      return !0;
    if (_ ? P = E : (P = E === "v" ? "h" : "v", _ = vl(E, S)), !_)
      return !1;
    if (!r.current && "changedTouches" in v && (y || C) && (r.current = P), !P)
      return !0;
    var T = r.current || P;
    return uE(T, b, v, T === "h" ? y : C);
  }, []), l = c.useCallback(function(v) {
    var b = v;
    if (!(!Wn.length || Wn[Wn.length - 1] !== s)) {
      var w = "deltaY" in b ? bl(b) : uo(b), x = t.current.filter(function(P) {
        return P.name === b.type && (P.target === b.target || b.target === P.shadowParent) && dE(P.delta, w);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var y = (i.current.shards || []).map(yl).filter(Boolean).filter(function(P) {
          return P.contains(b.target);
        }), C = y.length > 0 ? a(b, y[0]) : !i.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, b, w, x) {
    var y = { name: v, delta: b, target: w, should: x, shadowParent: hE(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), m = c.useCallback(function(v) {
    n.current = uo(v), r.current = void 0;
  }, []), d = c.useCallback(function(v) {
    u(v.type, bl(v), v.target, a(v, e.lockRef.current));
  }, []), p = c.useCallback(function(v) {
    u(v.type, uo(v), v.target, a(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return Wn.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Ln), document.addEventListener("touchmove", l, Ln), document.addEventListener("touchstart", m, Ln), function() {
      Wn = Wn.filter(function(v) {
        return v !== s;
      }), document.removeEventListener("wheel", l, Ln), document.removeEventListener("touchmove", l, Ln), document.removeEventListener("touchstart", m, Ln);
    };
  }, []);
  var h = e.removeScrollBar, g = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    g ? c.createElement(s, { styles: fE(o) }) : null,
    h ? c.createElement(rE, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function hE(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const gE = jS(kf, pE);
var Wr = c.forwardRef(function(e, t) {
  return c.createElement(es, Ct({}, e, { ref: t, sideCar: gE }));
});
Wr.classNames = es.classNames;
var ts = "Popover", [Ff] = Kt(ts, [
  Zo
]), zr = Zo(), [vE, mn] = Ff(ts), Lf = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !1
  } = e, a = zr(t), l = c.useRef(null), [u, m] = c.useState(!1), [d, p] = On({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: ts
  });
  return /* @__PURE__ */ f(Nf, { ...a, children: /* @__PURE__ */ f(
    vE,
    {
      scope: t,
      contentId: zt(),
      triggerRef: l,
      open: d,
      onOpenChange: p,
      onOpenToggle: c.useCallback(() => p((h) => !h), [p]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: c.useCallback(() => m(!0), []),
      onCustomAnchorRemove: c.useCallback(() => m(!1), []),
      modal: i,
      children: n
    }
  ) });
};
Lf.displayName = ts;
var Wf = "PopoverAnchor", zf = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = mn(Wf, n), s = zr(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: a } = o;
    return c.useEffect(() => (i(), () => a()), [i, a]), /* @__PURE__ */ f(Ma, { ...s, ...r, ref: t });
  }
);
zf.displayName = Wf;
var Bf = "PopoverTrigger", Hf = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = mn(Bf, n), s = zr(n), i = le(t, o.triggerRef), a = /* @__PURE__ */ f(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Gf(o.open),
        ...r,
        ref: i,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ f(Ma, { asChild: !0, ...s, children: a });
  }
);
Hf.displayName = Bf;
var ka = "PopoverPortal", [bE, yE] = Ff(ka, {
  forceMount: void 0
}), Vf = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = mn(ka, t);
  return /* @__PURE__ */ f(bE, { scope: t, forceMount: n, children: /* @__PURE__ */ f(vt, { present: n || s.open, children: /* @__PURE__ */ f(Qo, { asChild: !0, container: o, children: r }) }) });
};
Vf.displayName = ka;
var tr = "PopoverContent", jf = c.forwardRef(
  (e, t) => {
    const n = yE(tr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = mn(tr, e.__scopePopover);
    return /* @__PURE__ */ f(vt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ f(xE, { ...o, ref: t }) : /* @__PURE__ */ f(CE, { ...o, ref: t }) });
  }
);
jf.displayName = tr;
var wE = /* @__PURE__ */ SS("PopoverContent.RemoveScroll"), xE = c.forwardRef(
  (e, t) => {
    const n = mn(tr, e.__scopePopover), r = c.useRef(null), o = le(t, r), s = c.useRef(!1);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return Jo(i);
    }, []), /* @__PURE__ */ f(Wr, { as: wE, allowPinchZoom: !0, children: /* @__PURE__ */ f(
      Uf,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), s.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: q(
          e.onPointerDownOutside,
          (i) => {
            const a = i.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, u = a.button === 2 || l;
            s.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: q(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), CE = c.forwardRef(
  (e, t) => {
    const n = mn(tr, e.__scopePopover), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ f(
      Uf,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          n.triggerRef.current?.contains(i) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Uf = c.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: m,
      ...d
    } = e, p = mn(tr, n), h = zr(n);
    return ma(), /* @__PURE__ */ f(
      Yo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ f(
          Uo,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: m,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ f(
              Of,
              {
                "data-state": Gf(p.open),
                role: "dialog",
                id: p.contentId,
                ...h,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Yf = "PopoverClose", SE = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = mn(Yf, n);
    return /* @__PURE__ */ f(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
SE.displayName = Yf;
var EE = "PopoverArrow", PE = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = zr(n);
    return /* @__PURE__ */ f(Rf, { ...o, ...r, ref: t });
  }
);
PE.displayName = EE;
function Gf(e) {
  return e ? "open" : "closed";
}
var NE = Lf, OE = zf, RE = Hf, DE = Vf, Kf = jf;
const Br = NE, Hr = RE, uI = OE, ur = c.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f(DE, { children: /* @__PURE__ */ f(
  Kf,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: I(
      "z-50 rounded-xl border border-border bg-surface p-4 text-text-base shadow-lg outline-none",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
      "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
      e
    ),
    ...r
  }
) }));
ur.displayName = Kf.displayName;
const TE = [
  "#f59e0b",
  // amber-500  (databeez primary)
  "#ef4444",
  // red-500
  "#f97316",
  // orange-500
  "#84cc16",
  // lime-500
  "#10b981",
  // emerald-500
  "#06b6d4",
  // cyan-500
  "#3b82f6",
  // blue-500
  "#8b5cf6",
  // violet-500
  "#ec4899",
  // pink-500
  "#6b7280",
  // gray-500
  "#1f2937",
  // gray-800
  "#ffffff"
  // white
];
function ME({
  value: e = "#f59e0b",
  onChange: t,
  presets: n = TE,
  label: r,
  error: o,
  helperText: s,
  disabled: i,
  className: a
}) {
  const l = c.useId(), [u, m] = c.useState(e);
  c.useEffect(() => {
    m(e);
  }, [e]);
  function d(h) {
    const g = h.target.value;
    m(g), /^#[0-9a-fA-F]{6}$/.test(g) && t?.(g);
  }
  function p(h) {
    m(h), t?.(h);
  }
  return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ f("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ D(Br, { children: [
      /* @__PURE__ */ f(Hr, { asChild: !0, children: /* @__PURE__ */ D(
        "button",
        {
          id: l,
          type: "button",
          disabled: i,
          className: I(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            o && "border-error focus:ring-error focus:border-error",
            a
          ),
          children: [
            /* @__PURE__ */ f(
              "span",
              {
                className: "h-5 w-5 rounded border border-border shrink-0",
                style: { backgroundColor: e }
              }
            ),
            /* @__PURE__ */ f("span", { className: "text-text-base font-mono text-xs uppercase", children: e }),
            /* @__PURE__ */ f(zb, { className: "ml-auto h-4 w-4 text-text-muted shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ f(ur, { className: "w-64", align: "start", children: /* @__PURE__ */ D("div", { className: "space-y-3", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "h-16 w-full rounded-lg border border-border",
            style: { backgroundColor: e }
          }
        ),
        /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ f(
            "input",
            {
              type: "color",
              value: e,
              onChange: (h) => {
                m(h.target.value), t?.(h.target.value);
              },
              className: "h-10 w-10 rounded-lg border border-border cursor-pointer bg-transparent p-0.5",
              disabled: i
            }
          ),
          /* @__PURE__ */ f(
            "input",
            {
              type: "text",
              value: u,
              onChange: d,
              placeholder: "#000000",
              maxLength: 7,
              className: I(
                "flex-1 h-10 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-mono uppercase",
                "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
                "placeholder:text-text-muted"
              ),
              disabled: i
            }
          )
        ] }),
        n.length > 0 && /* @__PURE__ */ f("div", { className: "grid grid-cols-6 gap-1.5", children: n.map((h) => /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: () => p(h),
            className: I(
              "h-7 w-full rounded-md border transition-all",
              e === h ? "border-databeez-primary ring-2 ring-databeez-primary/30 scale-110" : "border-border hover:scale-110"
            ),
            style: { backgroundColor: h },
            title: h,
            disabled: i
          },
          h
        )) })
      ] }) })
    ] }),
    o && /* @__PURE__ */ f("p", { className: "text-xs text-error-fg", children: o }),
    s && !o && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: s })
  ] });
}
ME.displayName = "ColorPicker";
function kE({
  options: e,
  value: t,
  onChange: n,
  placeholder: r = "Seleziona...",
  searchPlaceholder: o = "Cerca...",
  emptyMessage: s = "Nessun risultato.",
  label: i,
  error: a,
  helperText: l,
  disabled: u,
  className: m,
  clearable: d = !1
}) {
  const p = c.useId(), [h, g] = c.useState(!1), [v, b] = c.useState(""), w = c.useRef(null), x = c.useMemo(() => {
    if (!v) return e;
    const S = v.toLowerCase();
    return e.filter((E) => E.label.toLowerCase().includes(S));
  }, [e, v]), y = e.find((S) => S.value === t);
  function C(S) {
    n?.(S === t ? "" : S), g(!1), b("");
  }
  function P(S) {
    S.stopPropagation(), n?.("");
  }
  return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
    i && /* @__PURE__ */ f("label", { htmlFor: p, className: "block text-sm font-medium text-text-base", children: i }),
    /* @__PURE__ */ D(Br, { open: h, onOpenChange: (S) => {
      g(S), S || b("");
    }, children: [
      /* @__PURE__ */ f(Hr, { asChild: !0, children: /* @__PURE__ */ D(
        "button",
        {
          id: p,
          type: "button",
          role: "combobox",
          "aria-expanded": h,
          disabled: u,
          className: I(
            "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !y && "text-text-muted",
            a && "border-error focus:ring-error focus:border-error",
            m
          ),
          children: [
            /* @__PURE__ */ f("span", { className: "truncate", children: y?.label ?? r }),
            /* @__PURE__ */ D("div", { className: "flex items-center gap-1 shrink-0", children: [
              d && t && /* @__PURE__ */ f(
                or,
                {
                  className: "h-3.5 w-3.5 text-text-muted hover:text-text-base cursor-pointer",
                  onClick: P
                }
              ),
              /* @__PURE__ */ f(Ki, { className: "h-4 w-4 text-text-muted" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ D(ur, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: [
        /* @__PURE__ */ D("div", { className: "flex items-center border-b border-border px-3", children: [
          /* @__PURE__ */ f(Xi, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ f(
            "input",
            {
              ref: w,
              value: v,
              onChange: (S) => b(S.target.value),
              placeholder: o,
              className: "flex-1 bg-transparent py-3 pl-2 text-sm outline-none placeholder:text-text-muted",
              autoFocus: !0
            }
          )
        ] }),
        /* @__PURE__ */ f("div", { className: "max-h-[15rem] overflow-y-auto p-1", children: x.length === 0 ? /* @__PURE__ */ f("div", { className: "py-6 text-center text-sm text-text-muted", children: s }) : x.map((S) => /* @__PURE__ */ D(
          "button",
          {
            type: "button",
            disabled: S.disabled,
            onClick: () => C(S.value),
            className: I(
              "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none transition-colors",
              "hover:bg-subtle focus:bg-subtle",
              "disabled:pointer-events-none disabled:opacity-50",
              S.value === t && "font-medium"
            ),
            children: [
              /* @__PURE__ */ f("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: S.value === t && /* @__PURE__ */ f(Ir, { className: "h-4 w-4 text-databeez-primary" }) }),
              S.label
            ]
          },
          S.value
        )) })
      ] })
    ] }),
    a && /* @__PURE__ */ f("p", { className: "text-xs text-error-fg", children: a }),
    l && !a && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: l })
  ] });
}
kE.displayName = "Combobox";
const wl = {
  O: { label: "Organizzazione", icon: qi },
  P: { label: "Persona", icon: Nr }
};
function AE(e) {
  return wl[e ?? ""] ?? wl.O;
}
const IE = {
  F: { label: "Persona fisica", icon: Nr },
  P: { label: "Professionista", icon: Gb },
  A: { label: "Altro", icon: Nr }
};
function _E(e) {
  return IE[e] ?? { label: "Persona", icon: Nr };
}
const $E = {
  S: { label: "Società", icon: qi },
  D: { label: "Ditta individuale", icon: Yb },
  E: { label: "Ente pubblico", icon: Ub },
  X: { label: "Estera", icon: jb },
  P: { label: "PIVA", icon: Vb },
  A: { label: "Altro", icon: Hb }
}, FE = { label: "Organizzazione", icon: qi };
function LE(e) {
  return $E[e ?? ""] ?? FE;
}
const dI = {
  label: "Indirizzo",
  icon: $u
}, fI = {
  label: "Sede",
  icon: Bb
}, WE = {
  banca: { label: "Banca", icon: Xb },
  fiduciaria: { label: "Società fiduciaria", icon: Kb }
};
function mI(e) {
  return WE[e];
}
function Xf({
  text: e,
  label: t,
  resetDelay: n = 2e3,
  className: r,
  ...o
}) {
  const [s, i] = c.useState(!1);
  return /* @__PURE__ */ D(Be, { children: [
    /* @__PURE__ */ D(
      "button",
      {
        type: "button",
        onClick: async (l) => {
          l.stopPropagation(), await navigator.clipboard.writeText(e), i(!0), setTimeout(() => i(!1), n);
        },
        "aria-label": `Copia${t ? ` ${t}` : ""}`,
        className: I(
          "inline-flex items-center gap-1.5 text-sm transition-colors",
          s ? "text-success-fg" : "text-text-muted hover:text-text-base",
          r
        ),
        ...o,
        children: [
          s ? /* @__PURE__ */ f(Ir, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ f(Fu, { className: "h-4 w-4 shrink-0" }),
          t && /* @__PURE__ */ f("span", { children: s ? "Copiato!" : t })
        ]
      }
    ),
    /* @__PURE__ */ f("span", { role: "status", "aria-live": "polite", className: "sr-only", children: s ? "Copiato" : "" })
  ] });
}
const zE = fn(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        success: "bg-success/10 text-success-fg",
        warning: "bg-warning/10 text-warning-fg",
        error: "bg-error/10 text-error-fg",
        info: "bg-info/10 text-info-fg",
        neutral: "bg-subtle text-text-muted"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
), BE = {
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  neutral: "bg-text-muted"
};
function HE({
  variant: e = "neutral",
  label: t,
  dot: n = !0,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ D(
    "span",
    {
      className: I(zE({ variant: e }), r),
      ...o,
      children: [
        n && /* @__PURE__ */ f(
          "span",
          {
            className: I(
              "h-1.5 w-1.5 rounded-full shrink-0",
              BE[e ?? "neutral"]
            )
          }
        ),
        t
      ]
    }
  );
}
function VE(e) {
  const t = e.trim().toLowerCase();
  return /cessat|chius|falliment/.test(t) ? "error" : /sospes|inattiv|liquidaz|sciogliment/.test(t) ? "warning" : /attiv|in corso/.test(t) ? "success" : "neutral";
}
const zn = (e) => !!e && e.trim() !== "";
function xl({ label: e, value: t }) {
  return /* @__PURE__ */ D("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ f("span", { className: "text-xs text-text-muted", children: e }),
    /* @__PURE__ */ f("span", { className: "font-mono tabular-nums text-sm text-text-base", children: t }),
    /* @__PURE__ */ f(Xf, { text: t, label: "", "aria-label": `Copia ${e} ${t}` })
  ] });
}
function pI({
  tipoSoggetto: e = "O",
  sottotipo: t,
  nome: n,
  codiceFiscale: r,
  partitaIva: o,
  ateco: s,
  formaGiuridica: i,
  stato: a,
  statoVariant: l,
  sede: u,
  actions: m,
  headingLevel: d = "h2",
  className: p,
  ...h
}) {
  const g = AE(e), v = e === "P" ? _E(t ?? void 0) : LE(t ?? void 0), b = v.icon ?? g.icon, w = d, x = [s?.codice, s?.descrizione].filter(zn).join(" — "), y = zn(r), C = zn(o), P = zn(i), S = zn(a), E = zn(u), N = y || C || !!x || E;
  return /* @__PURE__ */ D("header", { className: I("flex items-start gap-3", p), ...h, children: [
    /* @__PURE__ */ f(
      "div",
      {
        className: "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-subtle text-text-muted",
        "aria-hidden": "true",
        children: /* @__PURE__ */ f(b, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ D("div", { className: "min-w-0 flex-1 space-y-1.5", children: [
      /* @__PURE__ */ D("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-1", children: [
        /* @__PURE__ */ f(w, { className: "text-lg font-semibold text-text-base break-words", children: n }),
        S && /* @__PURE__ */ f(
          HE,
          {
            label: a,
            variant: l ?? VE(a)
          }
        )
      ] }),
      /* @__PURE__ */ D("p", { className: "text-xs text-text-muted", children: [
        g.label,
        v.label !== g.label ? ` · ${v.label}` : "",
        P ? ` · ${i}` : ""
      ] }),
      N && /* @__PURE__ */ D("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1", children: [
        y && /* @__PURE__ */ f(xl, { label: "CF", value: r }),
        C && /* @__PURE__ */ f(xl, { label: "P.IVA", value: o }),
        !!x && /* @__PURE__ */ D("span", { className: "text-sm text-text-base", children: [
          /* @__PURE__ */ f("span", { className: "text-xs text-text-muted", children: "ATECO " }),
          /* @__PURE__ */ f("span", { className: "tabular-nums", children: x })
        ] }),
        E && /* @__PURE__ */ D("span", { className: "inline-flex items-center gap-1 text-sm text-text-base", children: [
          /* @__PURE__ */ f($u, { className: "h-3.5 w-3.5 text-text-muted", "aria-hidden": "true" }),
          u
        ] })
      ] })
    ] }),
    m && /* @__PURE__ */ f("div", { className: "flex shrink-0 items-center gap-2", children: m })
  ] });
}
// @__NO_SIDE_EFFECTS__
function jE(e) {
  const t = /* @__PURE__ */ UE(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(GE);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function UE(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = XE(o), a = KE(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? ar(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var YE = /* @__PURE__ */ Symbol("radix.slottable");
function GE(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === YE;
}
function KE(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function XE(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ns = "Dialog", [qf] = Kt(ns), [qE, bt] = qf(ns), Zf = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = c.useRef(null), l = c.useRef(null), [u, m] = On({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: ns
  });
  return /* @__PURE__ */ f(
    qE,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: zt(),
      titleId: zt(),
      descriptionId: zt(),
      open: u,
      onOpenChange: m,
      onOpenToggle: c.useCallback(() => m((d) => !d), [m]),
      modal: i,
      children: n
    }
  );
};
Zf.displayName = ns;
var Qf = "DialogTrigger", Jf = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = bt(Qf, n), s = le(t, o.triggerRef);
    return /* @__PURE__ */ f(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": _a(o.open),
        ...r,
        ref: s,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Jf.displayName = Qf;
var Aa = "DialogPortal", [ZE, em] = qf(Aa, {
  forceMount: void 0
}), tm = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = bt(Aa, t);
  return /* @__PURE__ */ f(ZE, { scope: t, forceMount: n, children: c.Children.map(r, (i) => /* @__PURE__ */ f(vt, { present: n || s.open, children: /* @__PURE__ */ f(Qo, { asChild: !0, container: o, children: i }) })) });
};
tm.displayName = Aa;
var Io = "DialogOverlay", nm = c.forwardRef(
  (e, t) => {
    const n = em(Io, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = bt(Io, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ f(vt, { present: r || s.open, children: /* @__PURE__ */ f(JE, { ...o, ref: t }) }) : null;
  }
);
nm.displayName = Io;
var QE = /* @__PURE__ */ jE("DialogOverlay.RemoveScroll"), JE = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = bt(Io, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f(Wr, { as: QE, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f(
        ne.div,
        {
          "data-state": _a(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Rn = "DialogContent", rm = c.forwardRef(
  (e, t) => {
    const n = em(Rn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = bt(Rn, e.__scopeDialog);
    return /* @__PURE__ */ f(vt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ f(e0, { ...o, ref: t }) : /* @__PURE__ */ f(t0, { ...o, ref: t }) });
  }
);
rm.displayName = Rn;
var e0 = c.forwardRef(
  (e, t) => {
    const n = bt(Rn, e.__scopeDialog), r = c.useRef(null), o = le(t, n.contentRef, r);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return Jo(s);
    }, []), /* @__PURE__ */ f(
      om,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: q(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), t0 = c.forwardRef(
  (e, t) => {
    const n = bt(Rn, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ f(
      om,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          n.triggerRef.current?.contains(i) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), om = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = bt(Rn, n), l = c.useRef(null), u = le(t, l);
    return ma(), /* @__PURE__ */ D(Be, { children: [
      /* @__PURE__ */ f(
        Yo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ f(
            Uo,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": _a(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ D(Be, { children: [
        /* @__PURE__ */ f(n0, { titleId: a.titleId }),
        /* @__PURE__ */ f(o0, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), Ia = "DialogTitle", sm = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = bt(Ia, n);
    return /* @__PURE__ */ f(ne.h2, { id: o.titleId, ...r, ref: t });
  }
);
sm.displayName = Ia;
var im = "DialogDescription", am = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = bt(im, n);
    return /* @__PURE__ */ f(ne.p, { id: o.descriptionId, ...r, ref: t });
  }
);
am.displayName = im;
var cm = "DialogClose", lm = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = bt(cm, n);
    return /* @__PURE__ */ f(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
lm.displayName = cm;
function _a(e) {
  return e ? "open" : "closed";
}
var um = "DialogTitleWarning", [hI, dm] = Vx(um, {
  contentName: Rn,
  titleName: Ia,
  docsSlug: "dialog"
}), n0 = ({ titleId: e }) => {
  const t = dm(um), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, r0 = "DialogDescriptionWarning", o0 = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${dm(r0).contentName}}.`;
  return c.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, s0 = Zf, i0 = Jf, a0 = tm, fm = nm, mm = rm, pm = sm, hm = am, gm = lm;
const c0 = s0, l0 = i0, u0 = a0, gI = gm, vm = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  fm,
  {
    ref: n,
    className: I(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
vm.displayName = fm.displayName;
const bm = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ D(u0, { children: [
  /* @__PURE__ */ f(vm, {}),
  /* @__PURE__ */ D(
    mm,
    {
      ref: r,
      className: I(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ D(gm, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-transparent transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-subtle data-[state=open]:text-text-muted text-text-base", children: [
          /* @__PURE__ */ f(or, { className: "h-4 w-4" }),
          /* @__PURE__ */ f("span", { className: "sr-only", children: "Chiudi" })
        ] })
      ]
    }
  )
] }));
bm.displayName = mm.displayName;
const ym = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: I(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
ym.displayName = "DialogHeader";
const wm = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
wm.displayName = "DialogFooter";
const xm = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  pm,
  {
    ref: n,
    className: I(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
xm.displayName = pm.displayName;
const Cm = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  hm,
  {
    ref: n,
    className: I("text-sm text-text-muted", e),
    ...t
  }
));
Cm.displayName = hm.displayName;
function vI({
  open: e,
  onOpenChange: t,
  trigger: n,
  title: r,
  description: o,
  confirmLabel: s = "Conferma",
  cancelLabel: i = "Annulla",
  destructive: a = !1,
  onConfirm: l,
  onError: u
}) {
  const [m, d] = c.useState(!1), [p, h] = c.useState(!1), g = c.useRef(!0);
  c.useEffect(() => (g.current = !0, () => {
    g.current = !1;
  }), []);
  const v = e !== void 0, b = v ? e : m, w = (C) => {
    p && !C || (v || d(C), t?.(C));
  }, x = (C) => {
    u ? u(C) : queueMicrotask(() => {
      throw C;
    });
  }, y = async () => {
    if (p) return;
    let C;
    try {
      C = l();
    } catch (P) {
      x(P);
      return;
    }
    if (C && typeof C.then == "function") {
      h(!0);
      try {
        await C;
      } catch (P) {
        g.current && h(!1), x(P);
        return;
      }
      g.current && h(!1);
    }
    v || d(!1), t?.(!1);
  };
  return /* @__PURE__ */ D(c0, { open: b, onOpenChange: w, children: [
    n && /* @__PURE__ */ f(l0, { asChild: !0, children: n }),
    /* @__PURE__ */ D(bm, { children: [
      /* @__PURE__ */ D(ym, { children: [
        /* @__PURE__ */ f(xm, { children: r }),
        o && /* @__PURE__ */ f(Cm, { children: o })
      ] }),
      /* @__PURE__ */ D(wm, { className: "gap-2 sm:space-x-0", children: [
        /* @__PURE__ */ f(
          Jn,
          {
            type: "button",
            variant: "outline",
            "aria-disabled": p || void 0,
            className: I(p && "cursor-not-allowed opacity-50"),
            onClick: () => {
              p || w(!1);
            },
            children: i
          }
        ),
        /* @__PURE__ */ D(
          Jn,
          {
            type: "button",
            variant: a ? "destructive" : "default",
            "aria-disabled": p || void 0,
            "aria-busy": p || void 0,
            className: I(p && "cursor-not-allowed opacity-75"),
            onClick: y,
            children: [
              p && /* @__PURE__ */ f(qb, { "aria-hidden": "true", className: "mr-2 h-4 w-4 animate-spin" }),
              p && /* @__PURE__ */ f("span", { className: "sr-only", children: "Operazione in corso: " }),
              s
            ]
          }
        )
      ] })
    ] })
  ] });
}
const d0 = c.lazy(async () => {
  const [{ Prism: e }, { oneDark: t }] = await Promise.all([
    import("./index-DXRejwmT.mjs").then((n) => n.ca),
    import("./index-CFVSE0Ln.mjs")
  ]);
  return {
    default: ({ children: n, language: r }) => /* @__PURE__ */ f(
      e,
      {
        language: r,
        style: t,
        customStyle: { margin: 0, borderRadius: 0, fontSize: "0.875rem", lineHeight: "1.6" },
        showLineNumbers: !1,
        children: n
      }
    )
  };
});
function bI({
  code: e,
  language: t = "text",
  copyable: n = !0,
  className: r,
  ...o
}) {
  const [s, i] = c.useState(!1), a = async () => {
    await navigator.clipboard.writeText(e), i(!0), setTimeout(() => i(!1), 2e3);
  };
  return /* @__PURE__ */ D(
    "div",
    {
      className: I("relative rounded-xl overflow-hidden text-sm", r),
      ...o,
      children: [
        /* @__PURE__ */ D("div", { className: "flex items-center justify-between px-4 py-2 bg-[#282c34] border-b border-border", children: [
          /* @__PURE__ */ f("span", { className: "text-xs font-mono text-text-muted uppercase tracking-wider", children: t }),
          n && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: a,
              className: "flex items-center gap-1.5 text-xs text-text-muted hover:text-white/80 transition-colors",
              "aria-label": "Copia codice",
              children: s ? /* @__PURE__ */ D(Be, { children: [
                /* @__PURE__ */ f(Ir, { className: "h-3.5 w-3.5 text-green-400" }),
                /* @__PURE__ */ f("span", { className: "text-green-400", children: "Copiato" })
              ] }) : /* @__PURE__ */ D(Be, { children: [
                /* @__PURE__ */ f(Fu, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ f("span", { children: "Copia" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ f(c.Suspense, { fallback: /* @__PURE__ */ f("pre", { className: "m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto", children: e }), children: /* @__PURE__ */ f(d0, { language: t, children: e }) })
      ]
    }
  );
}
const Cl = "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-info-bg border border-info-border", Sl = "text-info-fg shrink-0", El = "text-[9px] font-medium text-info-fg leading-none", Pl = "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-accent-bg border border-accent-border", Nl = "text-accent-fg shrink-0", Ol = "text-[9px] font-medium text-accent-fg leading-none";
function yI({ source: e }) {
  return e === "mixed" ? /* @__PURE__ */ D("span", { className: "inline-flex items-center gap-1.5", children: [
    /* @__PURE__ */ D("span", { className: Cl, children: [
      /* @__PURE__ */ f(Mc, { size: 9, className: Sl }),
      /* @__PURE__ */ f("span", { className: El, children: "Dati reali" })
    ] }),
    /* @__PURE__ */ D("span", { className: Pl, children: [
      /* @__PURE__ */ f(kc, { size: 9, className: Nl }),
      /* @__PURE__ */ f("span", { className: Ol, children: "Simulato" })
    ] })
  ] }) : e === "simulated" ? /* @__PURE__ */ D("span", { className: Pl, children: [
    /* @__PURE__ */ f(kc, { size: 9, className: Nl }),
    /* @__PURE__ */ f("span", { className: Ol, children: "Simulato" })
  ] }) : /* @__PURE__ */ D("span", { className: Cl, children: [
    /* @__PURE__ */ f(Mc, { size: 9, className: Sl }),
    /* @__PURE__ */ f("span", { className: El, children: "Dati reali" })
  ] });
}
const kn = "—", Cr = " ", Rr = "−", Rl = /* @__PURE__ */ new Map();
function Dr(e, t) {
  const n = `${e}-${t}`;
  let r = Rl.get(n);
  return r || (r = new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: e,
    maximumFractionDigits: t,
    useGrouping: "always"
  }), Rl.set(n, r)), r;
}
function rs(e) {
  return typeof e == "number" && Number.isFinite(e);
}
function os(e, t) {
  return Math.round(e * 10 ** t) === 0;
}
function Fs(e, t = 0) {
  if (!rs(e)) return kn;
  const n = Math.abs(e);
  return (e < 0 && !os(n, t) ? Rr : "") + Dr(t, t).format(n);
}
function wI(e, t = {}) {
  if (!rs(e)) return kn;
  const { cents: n = !1, compact: r = !1 } = t, o = Math.abs(e);
  if (r && o >= 1e6) {
    const a = o / 1e6, l = a >= 100 ? 0 : 1, u = Dr(l, l).format(a).replace(/,0$/, "");
    return `${e < 0 ? Rr + Cr : ""}€${Cr}${u}${Cr}mln`;
  }
  const s = n ? 2 : 0;
  return `${e < 0 && !os(o, s) ? Rr + Cr : ""}€${Cr}${Dr(s, s).format(o)}`;
}
function xI(e, t = {}) {
  if (!rs(e)) return kn;
  const { fractionDigits: n = 1, fixed: r = !1 } = t, o = r ? n : 0, s = Math.abs(e);
  return `${e < 0 && !os(s, n) ? Rr : ""}${Dr(o, n).format(s)}%`;
}
function f0(e, t = 0) {
  if (!rs(e)) return kn;
  const n = Math.abs(e);
  return (os(n, t) ? "" : e > 0 ? "+" : Rr) + Dr(t, t).format(n);
}
const m0 = /^(\d{4})-(\d{2})-(\d{2})$/;
function Sm(e) {
  if (e == null || e === "") return null;
  let t;
  if (e instanceof Date)
    t = e;
  else {
    const n = m0.exec(e);
    if (t = n ? new Date(Number(n[1]), Number(n[2]) - 1, Number(n[3])) : new Date(e), n && (t.getMonth() !== Number(n[2]) - 1 || t.getDate() !== Number(n[3]))) return null;
  }
  return Number.isNaN(t.getTime()) ? null : t;
}
const _o = (e) => String(e).padStart(2, "0");
function p0(e) {
  const t = Sm(e);
  return t ? `${_o(t.getDate())}/${_o(t.getMonth() + 1)}/${t.getFullYear()}` : kn;
}
function CI(e) {
  const t = Sm(e);
  return t ? `${p0(t)}, ${_o(t.getHours())}:${_o(t.getMinutes())}` : kn;
}
function h0(e, t = "up-is-good", n = 0) {
  if (typeof e != "number" || !Number.isFinite(e) || Math.abs(e) <= n)
    return { direction: "flat", tone: "neutral" };
  const r = e > 0 ? "up" : "down";
  return { direction: r, tone: r === "up" == (t === "up-is-good") ? "positive" : "negative" };
}
const Dl = {
  positive: "text-trend-positive",
  negative: "text-trend-negative",
  neutral: "text-trend-neutral"
}, g0 = {
  up: "in aumento",
  down: "in calo",
  flat: "invariato"
}, v0 = { up: Wu, down: Lu, flat: Iu };
function b0({
  value: e,
  polarity: t = "up-is-good",
  threshold: n = 0,
  format: r,
  suffix: o = "",
  size: s = "sm",
  className: i,
  ...a
}) {
  const l = I(
    "inline-flex items-center gap-0.5 font-medium tabular-nums",
    s === "sm" ? "text-xs" : "text-sm",
    i
  );
  if (typeof e != "number" || !Number.isFinite(e))
    return /* @__PURE__ */ f("span", { className: I(l, Dl.neutral), ...a, children: kn });
  const u = r ? n : Math.max(n, Math.abs(e) < 0.5 ? Math.abs(e) : 0), { direction: m, tone: d } = h0(e, t, u), p = r ?? ((v) => f0(v)), h = v0[m], g = s === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";
  return /* @__PURE__ */ D("span", { className: I(l, Dl[d]), ...a, children: [
    /* @__PURE__ */ f(h, { className: g, "aria-hidden": "true" }),
    /* @__PURE__ */ D("span", { className: "sr-only", children: [
      g0[m],
      d === "positive" ? ", positivo" : d === "negative" ? ", negativo" : "",
      ":",
      " "
    ] }),
    /* @__PURE__ */ D("span", { children: [
      p(e),
      o
    ] })
  ] });
}
function SI({ width: e, height: t = 48, className: n, variant: r = "color" }) {
  return /* @__PURE__ */ D(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 293 328",
      width: e,
      height: t,
      className: n,
      "aria-label": "DataBeez logo",
      role: "img",
      children: [
        /* @__PURE__ */ f("g", { fill: r === "mono" ? "currentColor" : "#363d45", children: /* @__PURE__ */ f("path", { d: "M128.5 314.6 c-22 -12.4 -29.6 -17.5 -31.7 -21.6 -1.5 -2.9 -1.8 -6 -1.8 -19.7 0 -9.9 -0.4 -16.4 -1 -16.8 -0.6 -0.4 -7 2.8 -14.3 7.1 -11.2 6.6 -14 7.8 -18.7 8.1 -5.3 0.4 -6 0.2 -17 -6.2 -6.3 -3.7 -14.8 -8.5 -18.9 -10.8 -9.6 -5.4 -14.6 -10.1 -16 -15.2 -0.6 -2.3 -1.1 -12.8 -1.1 -25 0 -27.6 -0.2 -27.2 16.2 -37 6.5 -3.8 13.2 -7.8 15 -8.8 l3.3 -1.9 -2.3 -1.9 c-1.3 -1 -5.8 -3.7 -10 -6 -22.7 -12.5 -22.1 -11.4 -22.2 -41.2 0 -23.7 0.4 -26.1 5.6 -30.8 1.6 -1.4 11.5 -7.7 21.9 -13.9 15.1 -9 20 -11.4 23.7 -11.8 5 -0.5 4.2 -0.8 24.3 10.7 5 2.8 9.6 5.1 10.3 5.1 0.9 0 1.2 -4 1.2 -16.7 0 -15.6 0.2 -17.1 2.3 -20.5 2.9 -4.9 4.2 -5.8 25.7 -18.4 16.7 -9.7 19 -10.8 23.5 -10.8 5.3 -0.1 5.6 0 33 16.2 18.8 11.1 18.5 10.5 18.5 33.1 0 10.7 0.4 17.2 1 17.6 0.6 0.4 5.4 -1.9 10.8 -5.1 18.9 -11.2 19.4 -11.4 24.7 -11.4 4.6 0 6.5 0.9 22.5 10.4 21.4 12.7 24.8 15.2 27.2 19.6 1.6 3.1 1.8 6 1.8 26.8 0 25.2 -0.2 26.3 -5.7 31.3 -1.5 1.4 -7.4 5.2 -13.1 8.4 -5.7 3.2 -11.3 6.6 -12.4 7.5 l-2.2 1.7 2.5 1.5 c1.3 0.8 7.8 4.7 14.4 8.5 17.1 10 16.5 8.7 16.5 38.7 0 25.7 -0.2 26.6 -5.7 31.8 -1.5 1.4 -11.1 7.5 -21.3 13.4 -24.9 14.4 -23.6 14.3 -43.5 3 -8.2 -4.7 -15.4 -8.5 -16 -8.3 -0.6 0.2 -1.2 8.1 -1.5 19.6 l-0.5 19.2 -4.5 4.2 c-2.5 2.3 -12.7 8.8 -22.6 14.5 -23.3 13.1 -21.8 13.1 -41.9 1.8z m32.5 -17.6 c5.6 -3.3 10.4 -6 10.7 -6 0.2 0 2.4 -1.4 4.9 -3 l4.4 -3.1 0 -17.8 0 -17.8 -6.2 -3.3 c-3.5 -1.9 -8.1 -4.5 -10.3 -5.9 -5.6 -3.6 -6.7 -4.2 -12.9 -7.5 l-5.5 -2.9 -17.1 10.3 -17 10.2 0.2 16.6 0.3 16.7 5 3.3 c2.8 1.8 7 4.3 9.5 5.6 2.5 1.3 7.9 4.5 12 7 5 3.1 8.2 4.4 9.7 4.1 1.2 -0.3 6.7 -3.2 12.3 -6.5z m-91.4 -48.7 c11.8 -6.6 12 -6.7 13.5 -8 0.8 -0.6 4.2 -2.6 7.7 -4.4 14.3 -7.7 15.2 -8.3 15.2 -10.9 0 -1 -2.8 -4.4 -6.2 -7.5 -3.5 -3.1 -6.8 -6.6 -7.5 -7.8 -0.8 -1.5 -1.2 -7.4 -1.3 -17.3 l0 -15 -3.5 -1.7 c-4.2 -2 -9.1 -8.5 -10.6 -14.1 -1.6 -5.7 -0.6 -15.3 2 -20.1 2.9 -5.2 8.5 -10.2 13 -11.5 4.9 -1.4 14.5 -1.3 19.5 0.2 5.7 1.7 13 9.3 14.5 15.2 2.8 11.2 0.4 21.4 -6.6 27.5 -2.5 2.3 -5.2 4.1 -5.9 4.1 -1.1 0 -1.4 2.2 -1.4 9.9 l0 9.9 6.6 5.8 c3.7 3.2 7.2 7 7.8 8.5 l1.1 2.7 4 -2.7 4 -2.7 0.2 -41.9 0.3 -42 -8.8 -5.1 c-4.8 -2.8 -18.1 -10.8 -29.5 -17.7 -11.4 -7 -21 -12.7 -21.2 -12.7 -0.2 0 -3.9 -2.1 -8.2 -4.6 l-7.8 -4.7 -3 1.8 c-1.6 1 -8.8 5.1 -16 9.2 -7.2 4.1 -13.6 8 -14.3 8.5 -0.9 0.8 -1.2 5.4 -1 18.7 l0.3 17.6 9 5.1 c5 2.9 12.3 6.9 16.4 9.1 4.1 2.1 8.9 5.2 10.7 6.9 3.2 2.9 3.4 3.6 3.4 9.5 0 4.6 -0.5 7 -1.8 8.5 -0.9 1.2 -7.5 5.4 -14.7 9.4 -7.2 3.9 -15.4 8.6 -18.3 10.3 l-5.2 3.1 0.2 18.4 0.3 18.4 5 2.9 c2.8 1.6 5.9 3.4 7 3.9 1.1 0.6 2.7 1.5 3.5 2 3.1 2.1 17.5 10 18.2 10 0.5 0 4.7 -2.1 9.4 -4.7z m183.3 -5.7 l15.6 -9.2 0.3 -17.6 0.2 -17.7 -3.3 -2.5 c-1.8 -1.4 -5.6 -3.8 -8.3 -5.2 -28.8 -15.4 -28.4 -15 -28.4 -24.2 0 -6.5 2.3 -10.2 7.7 -12.6 4.2 -1.8 26.5 -14.5 30.1 -17.1 2.1 -1.5 2.2 -2.1 2.2 -19 l0 -17.4 -3.2 -2.4 c-1.8 -1.3 -6.9 -4.4 -11.3 -6.7 -4.4 -2.4 -10.7 -6 -14.1 -8.1 l-6.1 -3.7 -29.9 18 c-16.4 9.9 -33.6 20.2 -38.1 22.9 l-8.3 5 0 41.9 0 41.9 3.7 2.5 c3.9 2.7 5.3 2.6 5.3 -0.4 0 -1.1 3 -4.6 7 -8.1 l7 -6.3 0 -9.6 -0.1 -9.5 -3.7 -2.3 c-2.1 -1.3 -5.1 -4.4 -6.7 -7 -2.8 -4.4 -3 -5.3 -3 -14.7 0 -12 1.7 -15.5 9.7 -20.6 4.4 -2.8 6.1 -3.3 13.2 -3.7 8.9 -0.5 12.9 0.7 19.1 5.4 5.8 4.4 7.7 10 7.3 20.8 -0.3 8.2 -0.6 9.6 -3.3 13.6 -1.7 2.5 -5 5.5 -7.3 6.8 l-4.2 2.3 0 14.5 c0 17 -0.2 17.7 -8.9 25.2 -3.4 3 -6.1 5.9 -6.1 6.7 0 0.7 4.4 3.9 9.8 7 5.3 3.1 15.8 9.2 23.2 13.6 9.1 5.3 14.1 7.7 15.4 7.3 1.1 -0.4 8.9 -4.8 17.5 -9.8z m-148.5 -86.5 c1.9 -2.1 1.4 -4.1 -1.5 -5.9 -1.8 -1.1 -2.4 -1.1 -4 0.4 -2.3 2.1 -2.4 3.2 -0.2 5.6 2.1 2.3 3.6 2.3 5.7 -0.1z m91 -0.3 c1.5 -2.1 1.4 -2.4 -0.9 -4.7 -2.4 -2.4 -2.5 -2.4 -4.5 -0.6 -2.3 2 -2.6 4.5 -0.8 6.3 1.9 1.9 4.5 1.4 6.2 -1z m-36.9 -58.5 c2.8 -1.6 5.7 -3.2 6.5 -3.6 0.8 -0.4 2.9 -1.6 4.5 -2.7 1.7 -1.1 3.7 -2.3 4.5 -2.7 0.8 -0.4 2.7 -1.6 4.3 -2.7 l2.7 -2 0 -17.1 0 -17.1 -3 -2.2 c-1.6 -1.2 -3.2 -2.2 -3.6 -2.2 -0.3 0 -1.9 -0.9 -3.4 -2 -1.5 -1.1 -7.6 -4.7 -13.5 -8 l-10.8 -6 -12.1 7 c-6.7 3.8 -14.3 8.4 -17.1 10.2 l-5 3.3 -0.3 16.7 -0.2 16.7 4.7 2.8 c2.7 1.5 7.7 4.6 11.3 6.9 3.6 2.3 9.4 5.7 13 7.7 6.5 3.5 6.5 3.5 9.5 1.7 1.7 -1 5.3 -3.1 8 -4.7z" }) }),
        /* @__PURE__ */ D("g", { fill: "#f49e09", children: [
          /* @__PURE__ */ f("path", { d: "M137.5 303.3 c-4.9 -3 -11 -6.6 -13.5 -7.9 -2.5 -1.3 -6.7 -3.8 -9.5 -5.6 l-5 -3.3 -0.3 -19.7 -0.2 -19.6 15.7 -9.5 c23.6 -14.1 20.6 -13.2 28.8 -8.6 3.9 2.1 7.7 4.2 8.5 4.6 0.8 0.4 3.3 1.9 5.5 3.4 2.2 1.4 6.8 4.1 10.3 5.9 l6.2 3.3 0 20.8 0 20.8 -4.4 3.1 c-2.5 1.6 -4.7 3 -4.9 3 -0.3 0 -3.8 1.9 -7.9 4.3 -11.4 6.8 -18.6 10.7 -19.5 10.6 -0.4 0 -4.8 -2.5 -9.8 -5.6z" }),
          /* @__PURE__ */ f("path", { d: "M51 252.9 c-4.7 -2.7 -9.4 -5.4 -10.5 -5.9 -1.1 -0.6 -3.3 -1.9 -5 -2.9 -1.6 -1 -5 -3 -7.5 -4.4 l-4.5 -2.5 -0.3 -21.4 -0.2 -21.4 5.2 -3.1 c2.9 -1.7 11.2 -6.4 18.3 -10.3 7.2 -4 13.8 -8.2 14.7 -9.4 1 -1.1 1.8 -3.6 1.8 -5.5 0 -4.3 -4.1 -8.2 -14.1 -13.4 -4.1 -2.2 -11.4 -6.2 -16.4 -9.1 l-9 -5.1 -0.3 -20.6 c-0.2 -15.7 0.1 -20.9 1 -21.7 1.1 -0.8 15.7 -9.4 32.3 -18.8 l4.1 -2.3 9.3 5.4 c5.1 3 9.5 5.5 9.7 5.5 0.2 0 9.7 5.7 21.1 12.7 11.4 6.9 24.7 14.9 29.5 17.7 l8.8 5.1 -0.3 45 -0.2 45 -6.5 4.2 c-3.6 2.4 -6.8 4.3 -7.2 4.3 -0.5 0 -0.8 -1.5 -0.8 -3.2 0 -2.8 -1.1 -4.4 -7.5 -10.3 l-7.5 -7.1 0 -12.7 c0 -10 0.3 -12.7 1.4 -12.7 0.7 0 3.4 -1.8 6 -4.1 6.1 -5.4 8.4 -12.6 6.6 -20.6 -2.1 -9.4 -11.9 -17.3 -21.6 -17.3 -10.2 0 -19.9 8.5 -21.9 19.3 -1.4 7.2 4.3 18.2 11 21.4 l3.5 1.7 0 15 c0.1 9.9 0.5 15.8 1.3 17.3 0.7 1.2 4 4.7 7.5 7.8 6 5.5 6.2 5.9 6.2 10.5 0 5.9 0.5 5.5 -15.2 13.9 -3.5 1.8 -6.9 3.8 -7.7 4.4 -1.6 1.3 -2.1 1.6 -15.4 9 -5.8 3.1 -10.7 5.7 -10.8 5.6 -0.2 0 -4.2 -2.3 -8.9 -5z" }),
          /* @__PURE__ */ f("path", { d: "M227 253.7 c-4.1 -2.4 -11.3 -6.5 -16 -9.1 -4.7 -2.7 -12.7 -7.4 -17.7 -10.4 l-9.3 -5.4 0 -4.3 c0 -4.1 0.4 -4.7 6.1 -9.7 8.7 -7.5 8.9 -8.2 8.9 -25.2 l0 -14.5 4.2 -2.3 c12.7 -7 14.6 -26.6 3.3 -35.2 -8.8 -6.7 -17.7 -7.3 -26.5 -1.6 -7 4.5 -9.4 8.9 -9.4 17.5 -0.1 6.1 0.3 7.6 2.9 11.7 1.6 2.6 4.6 5.7 6.7 7 l3.7 2.3 0.1 12.5 0 12.6 -6.9 6.2 c-5.7 5.1 -7 6.8 -7.6 10.2 -0.4 2.2 -0.8 4 -1.1 4 -0.6 0 -7.8 -4.1 -10.6 -6.2 l-2.8 -1.9 0 -44.9 0 -44.9 9.8 -5.9 c39 -23.5 65.8 -39.5 67.7 -40.4 2 -0.9 3.6 -0.3 10.7 4 4.5 2.7 11.5 6.7 15.3 8.7 3.9 2.1 8.5 4.9 10.3 6.2 l3.2 2.4 0 20.4 c0 20 0 20.4 -2.2 22 -3.6 2.6 -25.9 15.3 -30.1 17.1 -6.6 2.9 -9.3 8.8 -6.4 14.3 1.2 2.4 5.3 4.9 27.1 16.5 2.7 1.4 6.4 3.8 8.3 5.2 l3.3 2.5 -0.2 20.7 -0.3 20.6 -12.5 7.4 c-6.9 4.1 -14.6 8.5 -17.3 9.9 -2.6 1.4 -5 2.9 -5.3 3.4 -0.8 1.4 -1.5 1.2 -9.4 -3.4z" }),
          /* @__PURE__ */ f("path", { d: "M95.9 159.1 c-3.4 -3.5 -3.7 -6.8 -0.8 -10.5 2.9 -3.6 8.6 -3.6 12.3 0 3.6 3.7 3.4 7.5 -0.5 10.8 -4 3.4 -7.4 3.3 -11 -0.3z" }),
          /* @__PURE__ */ f("path", { d: "M186.5 159.5 c-5.1 -5 -1.7 -13.5 5.4 -13.5 4.7 0 8.1 3.3 8.1 7.9 0 4.2 -3.8 8.1 -8 8.1 -1.9 0 -4 -0.9 -5.5 -2.5z" }),
          /* @__PURE__ */ f("path", { d: "M145 107.6 c-0.8 -0.8 -4.2 -2.9 -7.5 -4.6 -3.3 -1.8 -8.9 -5.1 -12.5 -7.4 -3.6 -2.3 -8.6 -5.4 -11.3 -6.9 l-4.7 -2.8 0.2 -19.7 0.3 -19.7 5 -3.3 c10 -6.6 31.2 -18.2 33.2 -18.2 1.2 0 2.5 0.4 2.8 1 0.3 0.5 4.5 3.1 9.3 5.6 4.8 2.6 10.6 6 12.9 7.6 2.3 1.5 4.4 2.8 4.8 2.8 0.3 0 1.9 1 3.5 2.2 l3 2.2 0 20.1 0 20.1 -2.7 2 c-1.6 1.1 -3.5 2.3 -4.3 2.7 -0.8 0.4 -2.8 1.6 -4.5 2.7 -1.6 1.1 -3.7 2.3 -4.5 2.7 -0.8 0.3 -5.9 3.3 -11.2 6.5 -5.4 3.2 -9.9 5.8 -10.1 5.8 -0.1 0 -0.9 -0.6 -1.7 -1.4z" })
        ] })
      ]
    }
  );
}
function y0(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const w0 = {}, Sr = {};
function Sn(e, t) {
  try {
    const r = (w0[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Sr ? Sr[r] : Tl(r, r.split(":"));
  } catch {
    if (e in Sr) return Sr[e];
    const n = e?.match(x0);
    return n ? Tl(e, n.slice(1)) : NaN;
  }
}
const x0 = /([+-]\d\d):?(\d\d)?/;
function Tl(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Sr[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Nt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Sn(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Em(this), ci(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Nt(...n, t) : new Nt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Nt(+this, t);
  }
  getTimezoneOffset() {
    const t = -Sn(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), ci(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Nt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ml = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Ml.test(e)) return;
  const t = e.replace(Ml, "$1UTC");
  Nt.prototype[t] && (e.startsWith("get") ? Nt.prototype[e] = function() {
    return this.internal[t]();
  } : (Nt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), C0(this), +this;
  }, Nt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), ci(this), +this;
  }));
});
function ci(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Sn(e.timeZone, e) * 60));
}
function C0(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Em(e);
}
function Em(e) {
  const t = Sn(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = o - s, a = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  i && a && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + i);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const u = /* @__PURE__ */ new Date(+e);
  u.setUTCSeconds(0);
  const m = o > 0 ? u.getSeconds() : (u.getSeconds() - 60) % 60, d = Math.round(-(Sn(e.timeZone, e) * 60)) % 60;
  (d || m) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + d), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + d + m));
  const p = Sn(e.timeZone, e), h = p > 0 ? Math.floor(p) : Math.ceil(p), v = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, b = h !== n, w = v - l;
  if (b && w) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w);
    const x = Sn(e.timeZone, e), y = x > 0 ? Math.floor(x) : Math.ceil(x), C = h - y;
    C && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + C), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + C));
  }
}
class Fe extends Nt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Fe(...n, t) : new Fe(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t?.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${y0(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new Fe(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Fe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Pm = 6048e5, S0 = 864e5, kl = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Oe(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && kl in e ? e[kl](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ge(e, t) {
  return Oe(t || e, e);
}
function Nm(e, t, n) {
  const r = ge(e, n?.in);
  return isNaN(t) ? Oe(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Om(e, t, n) {
  const r = ge(e, n?.in);
  if (isNaN(t)) return Oe(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = Oe(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const i = s.getDate();
  return o >= i ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
let E0 = {};
function Vr() {
  return E0;
}
function cn(e, t) {
  const n = Vr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ge(e, t?.in), s = o.getDay(), i = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Tr(e, t) {
  return cn(e, { ...t, weekStartsOn: 1 });
}
function Rm(e, t) {
  const n = ge(e, t?.in), r = n.getFullYear(), o = Oe(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Tr(o), i = Oe(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Tr(i);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= a.getTime() ? r : r - 1;
}
function Al(e) {
  const t = ge(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function An(e, ...t) {
  const n = Oe.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Mr(e, t) {
  const n = ge(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function $a(e, t, n) {
  const [r, o] = An(
    n?.in,
    e,
    t
  ), s = Mr(r), i = Mr(o), a = +s - Al(s), l = +i - Al(i);
  return Math.round((a - l) / S0);
}
function P0(e, t) {
  const n = Rm(e, t), r = Oe(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Tr(r);
}
function N0(e, t, n) {
  return Nm(e, t * 7, n);
}
function O0(e, t, n) {
  return Om(e, t * 12, n);
}
function R0(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Oe.bind(null, o));
    const s = ge(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), Oe(r, n || NaN);
}
function D0(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Oe.bind(null, o));
    const s = ge(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), Oe(r, n || NaN);
}
function T0(e, t, n) {
  const [r, o] = An(
    n?.in,
    e,
    t
  );
  return +Mr(r) == +Mr(o);
}
function Dm(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function M0(e) {
  return !(!Dm(e) && typeof e != "number" || isNaN(+ge(e)));
}
function Tm(e, t, n) {
  const [r, o] = An(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return s * 12 + i;
}
function k0(e, t) {
  const n = ge(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Mm(e, t) {
  const [n, r] = An(e, t.start, t.end);
  return { start: n, end: r };
}
function A0(e, t) {
  const { start: n, end: r } = Mm(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let a = 1;
  const l = [];
  for (; +i <= s; )
    l.push(Oe(n, i)), i.setMonth(i.getMonth() + a);
  return o ? l.reverse() : l;
}
function I0(e, t) {
  const n = ge(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function _0(e, t) {
  const n = ge(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function km(e, t) {
  const n = ge(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function $0(e, t) {
  const { start: n, end: r } = Mm(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
  let a = 1;
  const l = [];
  for (; +i <= s; )
    l.push(Oe(n, i)), i.setFullYear(i.getFullYear() + a);
  return o ? l.reverse() : l;
}
function Am(e, t) {
  const n = Vr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ge(e, t?.in), s = o.getDay(), i = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function F0(e, t) {
  return Am(e, { ...t, weekStartsOn: 1 });
}
const L0 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, W0 = (e, t, n) => {
  let r;
  const o = L0[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Zn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const z0 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, B0 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, H0 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, V0 = {
  date: Zn({
    formats: z0,
    defaultWidth: "full"
  }),
  time: Zn({
    formats: B0,
    defaultWidth: "full"
  }),
  dateTime: Zn({
    formats: H0,
    defaultWidth: "full"
  })
}, j0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, U0 = (e, t, n, r) => j0[e];
function St(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, a = n?.width ? String(n.width) : i;
      o = e.formattingValues[a] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, a = n?.width ? String(n.width) : e.defaultWidth;
      o = e.values[a] || e.values[i];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const Y0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, G0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, K0 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, X0 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, q0 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Z0 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Q0 = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, J0 = {
  ordinalNumber: Q0,
  era: St({
    values: Y0,
    defaultWidth: "wide"
  }),
  quarter: St({
    values: G0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: St({
    values: K0,
    defaultWidth: "wide"
  }),
  day: St({
    values: X0,
    defaultWidth: "wide"
  }),
  dayPeriod: St({
    values: q0,
    defaultWidth: "wide",
    formattingValues: Z0,
    defaultFormattingWidth: "wide"
  })
};
function Et(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const i = s[0], a = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(a) ? t1(a, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      e1(a, (d) => d.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const m = t.slice(i.length);
    return { value: u, rest: m };
  };
}
function e1(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function t1(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Im(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let i = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const a = t.slice(o.length);
    return { value: i, rest: a };
  };
}
const n1 = /^(\d+)(th|st|nd|rd)?/i, r1 = /\d+/i, o1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, s1 = {
  any: [/^b/i, /^(a|c)/i]
}, i1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, a1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, l1 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, u1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, d1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, f1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, m1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, p1 = {
  ordinalNumber: Im({
    matchPattern: n1,
    parsePattern: r1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Et({
    matchPatterns: o1,
    defaultMatchWidth: "wide",
    parsePatterns: s1,
    defaultParseWidth: "any"
  }),
  quarter: Et({
    matchPatterns: i1,
    defaultMatchWidth: "wide",
    parsePatterns: a1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Et({
    matchPatterns: c1,
    defaultMatchWidth: "wide",
    parsePatterns: l1,
    defaultParseWidth: "any"
  }),
  day: Et({
    matchPatterns: u1,
    defaultMatchWidth: "wide",
    parsePatterns: d1,
    defaultParseWidth: "any"
  }),
  dayPeriod: Et({
    matchPatterns: f1,
    defaultMatchWidth: "any",
    parsePatterns: m1,
    defaultParseWidth: "any"
  })
}, Un = {
  code: "en-US",
  formatDistance: W0,
  formatLong: V0,
  formatRelative: U0,
  localize: J0,
  match: p1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function h1(e, t) {
  const n = ge(e, t?.in);
  return $a(n, km(n)) + 1;
}
function Fa(e, t) {
  const n = ge(e, t?.in), r = +Tr(n) - +P0(n);
  return Math.round(r / Pm) + 1;
}
function _m(e, t) {
  const n = ge(e, t?.in), r = n.getFullYear(), o = Vr(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = Oe(t?.in || e, 0);
  i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
  const a = cn(i, t), l = Oe(t?.in || e, 0);
  l.setFullYear(r, 0, s), l.setHours(0, 0, 0, 0);
  const u = cn(l, t);
  return +n >= +a ? r + 1 : +n >= +u ? r : r - 1;
}
function g1(e, t) {
  const n = Vr(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = _m(e, t), s = Oe(t?.in || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), cn(s, t);
}
function La(e, t) {
  const n = ge(e, t?.in), r = +cn(n, t) - +g1(n, t);
  return Math.round(r / Pm) + 1;
}
function fe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Qt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return fe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : fe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return fe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return fe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return fe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return fe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return fe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return fe(o, t.length);
  }
}, Bn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Il = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Qt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = _m(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = s % 100;
      return fe(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : fe(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Rm(e);
    return fe(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return fe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return fe(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return fe(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Qt.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return fe(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = La(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : fe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Fa(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : fe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Qt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = h1(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : fe(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return fe(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return fe(s, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return fe(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = Bn.noon : r === 0 ? o = Bn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = Bn.evening : r >= 12 ? o = Bn.afternoon : r >= 4 ? o = Bn.morning : o = Bn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Qt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Qt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : fe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : fe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Qt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Qt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Qt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return $l(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return xn(r);
      // Hours and minutes with `:` delimiter
      default:
        return xn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return $l(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return xn(r);
      // Hours and minutes with `:` delimiter
      default:
        return xn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + _l(r, ":");
      default:
        return "GMT" + xn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + _l(r, ":");
      default:
        return "GMT" + xn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return fe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return fe(+e, t.length);
  }
};
function _l(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + fe(s, 2);
}
function $l(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + fe(Math.abs(e) / 60, 2) : xn(e, t);
}
function xn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = fe(Math.trunc(r / 60), 2), s = fe(r % 60, 2);
  return n + o + t + s;
}
const Fl = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, $m = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, v1 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Fl(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Fl(r, t)).replace("{{time}}", $m(o, t));
}, b1 = {
  p: $m,
  P: v1
}, y1 = /^D+$/, w1 = /^Y+$/, x1 = ["D", "DD", "YY", "YYYY"];
function C1(e) {
  return y1.test(e);
}
function S1(e) {
  return w1.test(e);
}
function E1(e, t, n) {
  const r = P1(e, t, n);
  if (console.warn(r), x1.includes(e)) throw new RangeError(r);
}
function P1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const N1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, O1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, R1 = /^'([^]*?)'?$/, D1 = /''/g, T1 = /[a-zA-Z]/;
function Ft(e, t, n) {
  const r = Vr(), o = n?.locale ?? r.locale ?? Un, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = ge(e, n?.in);
  if (!M0(a))
    throw new RangeError("Invalid time value");
  let l = t.match(O1).map((m) => {
    const d = m[0];
    if (d === "p" || d === "P") {
      const p = b1[d];
      return p(m, o.formatLong);
    }
    return m;
  }).join("").match(N1).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const d = m[0];
    if (d === "'")
      return { isToken: !1, value: M1(m) };
    if (Il[d])
      return { isToken: !0, value: m };
    if (d.match(T1))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + d + "`"
      );
    return { isToken: !1, value: m };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(a, l));
  const u = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: o
  };
  return l.map((m) => {
    if (!m.isToken) return m.value;
    const d = m.value;
    (!n?.useAdditionalWeekYearTokens && S1(d) || !n?.useAdditionalDayOfYearTokens && C1(d)) && E1(d, t, String(e));
    const p = Il[d[0]];
    return p(a, d, o.localize, u);
  }).join("");
}
function M1(e) {
  const t = e.match(R1);
  return t ? t[1].replace(D1, "'") : e;
}
function k1(e, t) {
  const n = ge(e, t?.in), r = n.getFullYear(), o = n.getMonth(), s = Oe(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function A1(e, t) {
  return ge(e, t?.in).getMonth();
}
function I1(e, t) {
  return ge(e, t?.in).getFullYear();
}
function _1(e, t) {
  return +ge(e) > +ge(t);
}
function $1(e, t) {
  return +ge(e) < +ge(t);
}
function Ll(e, t, n) {
  const [r, o] = An(
    n?.in,
    e,
    t
  );
  return +cn(r, n) == +cn(o, n);
}
function F1(e, t, n) {
  const [r, o] = An(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function L1(e, t, n) {
  const [r, o] = An(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function W1(e, t, n) {
  const r = ge(e, n?.in), o = r.getFullYear(), s = r.getDate(), i = Oe(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const a = k1(i);
  return r.setMonth(t, Math.min(s, a)), r;
}
function z1(e, t, n) {
  const r = ge(e, n?.in);
  return isNaN(+r) ? Oe(e, NaN) : (r.setFullYear(t), r);
}
const Wl = 5, B1 = 4;
function H1(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, Wl * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? Wl : B1;
}
function Fm(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function V1(e, t) {
  const n = Fm(e, t), r = H1(e, t);
  return t.addDays(n, r * 7 - 1);
}
const j1 = {
  lessThanXSeconds: {
    one: "meno di un secondo",
    other: "meno di {{count}} secondi"
  },
  xSeconds: {
    one: "un secondo",
    other: "{{count}} secondi"
  },
  halfAMinute: "alcuni secondi",
  lessThanXMinutes: {
    one: "meno di un minuto",
    other: "meno di {{count}} minuti"
  },
  xMinutes: {
    one: "un minuto",
    other: "{{count}} minuti"
  },
  aboutXHours: {
    one: "circa un'ora",
    other: "circa {{count}} ore"
  },
  xHours: {
    one: "un'ora",
    other: "{{count}} ore"
  },
  xDays: {
    one: "un giorno",
    other: "{{count}} giorni"
  },
  aboutXWeeks: {
    one: "circa una settimana",
    other: "circa {{count}} settimane"
  },
  xWeeks: {
    one: "una settimana",
    other: "{{count}} settimane"
  },
  aboutXMonths: {
    one: "circa un mese",
    other: "circa {{count}} mesi"
  },
  xMonths: {
    one: "un mese",
    other: "{{count}} mesi"
  },
  aboutXYears: {
    one: "circa un anno",
    other: "circa {{count}} anni"
  },
  xYears: {
    one: "un anno",
    other: "{{count}} anni"
  },
  overXYears: {
    one: "più di un anno",
    other: "più di {{count}} anni"
  },
  almostXYears: {
    one: "quasi un anno",
    other: "quasi {{count}} anni"
  }
}, U1 = (e, t, n) => {
  let r;
  const o = j1[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "tra " + r : r + " fa" : r;
}, Y1 = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, G1 = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, K1 = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, X1 = {
  date: Zn({
    formats: Y1,
    defaultWidth: "full"
  }),
  time: Zn({
    formats: G1,
    defaultWidth: "full"
  }),
  dateTime: Zn({
    formats: K1,
    defaultWidth: "full"
  })
}, Wa = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato"
];
function q1(e) {
  return e === 0 ? "'domenica scorsa alle' p" : "'" + Wa[e] + " scorso alle' p";
}
function zl(e) {
  return "'" + Wa[e] + " alle' p";
}
function Z1(e) {
  return e === 0 ? "'domenica prossima alle' p" : "'" + Wa[e] + " prossimo alle' p";
}
const Q1 = {
  lastWeek: (e, t, n) => {
    const r = e.getDay();
    return Ll(e, t, n) ? zl(r) : q1(r);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: (e, t, n) => {
    const r = e.getDay();
    return Ll(e, t, n) ? zl(r) : Z1(r);
  },
  other: "P"
}, J1 = (e, t, n, r) => {
  const o = Q1[e];
  return typeof o == "function" ? o(t, n, r) : o;
}, eP = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["avanti Cristo", "dopo Cristo"]
}, tP = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, nP = {
  narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
  abbreviated: [
    "gen",
    "feb",
    "mar",
    "apr",
    "mag",
    "giu",
    "lug",
    "ago",
    "set",
    "ott",
    "nov",
    "dic"
  ],
  wide: [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre"
  ]
}, rP = {
  narrow: ["D", "L", "M", "M", "G", "V", "S"],
  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  wide: [
    "domenica",
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato"
  ]
}, oP = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  }
}, sP = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  }
}, iP = (e, t) => {
  const n = Number(e);
  return String(n);
}, aP = {
  ordinalNumber: iP,
  era: St({
    values: eP,
    defaultWidth: "wide"
  }),
  quarter: St({
    values: tP,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: St({
    values: nP,
    defaultWidth: "wide"
  }),
  day: St({
    values: rP,
    defaultWidth: "wide"
  }),
  dayPeriod: St({
    values: oP,
    defaultWidth: "wide",
    formattingValues: sP,
    defaultFormattingWidth: "wide"
  })
}, cP = /^(\d+)(º)?/i, lP = /\d+/i, uP = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}, dP = {
  any: [/^a/i, /^(d|e)/i]
}, fP = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, mP = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, pP = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}, hP = {
  narrow: [
    /^g/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^g/i,
    /^l/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ge/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mag/i,
    /^gi/i,
    /^l/i,
    /^ag/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, gP = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}, vP = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}, bP = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}, yP = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mezza/i,
    noon: /^mezzo/i,
    morning: /mattina/i,
    afternoon: /pomeriggio/i,
    evening: /sera/i,
    night: /notte/i
  }
}, wP = {
  ordinalNumber: Im({
    matchPattern: cP,
    parsePattern: lP,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Et({
    matchPatterns: uP,
    defaultMatchWidth: "wide",
    parsePatterns: dP,
    defaultParseWidth: "any"
  }),
  quarter: Et({
    matchPatterns: fP,
    defaultMatchWidth: "wide",
    parsePatterns: mP,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Et({
    matchPatterns: pP,
    defaultMatchWidth: "wide",
    parsePatterns: hP,
    defaultParseWidth: "any"
  }),
  day: Et({
    matchPatterns: gP,
    defaultMatchWidth: "wide",
    parsePatterns: vP,
    defaultParseWidth: "any"
  }),
  dayPeriod: Et({
    matchPatterns: bP,
    defaultMatchWidth: "any",
    parsePatterns: yP,
    defaultParseWidth: "any"
  })
}, xP = {
  code: "it",
  formatDistance: U1,
  formatLong: X1,
  formatRelative: J1,
  localize: aP,
  match: wP,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Lm = {
  ...Un,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, a) => Ft(i, a, { locale: Un, ...n });
      let s = o(e, "PPPP");
      return t.today && (s = `Today, ${s}`), t.selected && (s = `${s}, selected`), s;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => Ft(o, s, { locale: Un, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, a) => Ft(i, a, { locale: Un, ...n });
      let s = o(e, "PPPP");
      return t?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => Ft(o, s, { locale: Un, ...t }), r(e, "cccc");
    }
  }
};
class et {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Fe.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new Fe(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : Nm(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : Om(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : N0(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : O0(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : $a(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Tm(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : A0(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : $0(r), s = new Set(o.map((a) => this.getYear(a)));
      if (s.size === o.length)
        return o;
      const i = [];
      return s.forEach((a) => {
        i.push(new Date(a, 0, 1));
      }), i;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : V1(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : F0(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : k0(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : Am(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : _0(r), this.format = (r, o, s) => {
      const i = this.overrides?.format ? this.overrides.format(r, o, this.options) : Ft(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : Fa(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : A1(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : I1(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : La(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : _1(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : $1(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : Dm(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : T0(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : F1(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : L1(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : R0(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : D0(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : W1(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : z1(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Fm(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : Mr(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Tr(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : I0(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : cn(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : km(r), this.options = { locale: Lm, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && et.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n?.code;
    if (s && et.yearFirstLocales.has(s))
      try {
        return new Intl.DateTimeFormat(s, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const i = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, i);
  }
}
et.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const kt = new et();
class Wm {
  constructor(t, n, r = kt) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class CP {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class SP {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function EP(e) {
  return V.createElement("button", { ...e });
}
function PP(e) {
  return V.createElement("span", { ...e });
}
function NP(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    V.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && V.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && V.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && V.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && V.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function OP(e) {
  const { day: t, modifiers: n, ...r } = e;
  return V.createElement("td", { ...r });
}
function RP(e) {
  const { day: t, modifiers: n, ...r } = e, o = V.useRef(null);
  return V.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), V.createElement("button", { ref: o, ...r });
}
var G;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(G || (G = {}));
var we;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(we || (we = {}));
var mt;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(mt || (mt = {}));
var Ye;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ye || (Ye = {}));
function DP(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, i = [o[G.Dropdown], n].join(" "), a = t?.find(({ value: l }) => l === s.value);
  return V.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[G.DropdownRoot] },
    V.createElement(r.Select, { className: i, ...s }, t?.map(({ value: l, label: u, disabled: m }) => V.createElement(r.Option, { key: l, value: l, disabled: m }, u))),
    V.createElement(
      "span",
      { className: o[G.CaptionLabel], "aria-hidden": !0 },
      a?.label,
      V.createElement(r.Chevron, { orientation: "down", size: 18, className: o[G.Chevron] })
    )
  );
}
function TP(e) {
  return V.createElement("div", { ...e });
}
function MP(e) {
  return V.createElement("div", { ...e });
}
function kP(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r }, e.children);
}
function AP(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r });
}
function IP(e) {
  return V.createElement("table", { ...e });
}
function _P(e) {
  return V.createElement("div", { ...e });
}
const zm = Du(void 0);
function jr() {
  const e = Tu(zm);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function $P(e) {
  const { components: t } = jr();
  return V.createElement(t.Dropdown, { ...e });
}
function FP(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: i, classNames: a, labels: { labelPrevious: l, labelNext: u } } = jr(), m = Ue((p) => {
    o && n?.(p);
  }, [o, n]), d = Ue((p) => {
    r && t?.(p);
  }, [r, t]);
  return V.createElement(
    "nav",
    { ...s },
    V.createElement(
      i.PreviousMonthButton,
      { type: "button", className: a[G.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: d },
      V.createElement(i.Chevron, { disabled: r ? void 0 : !0, className: a[G.Chevron], orientation: "left" })
    ),
    V.createElement(
      i.NextMonthButton,
      { type: "button", className: a[G.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": u(o), onClick: m },
      V.createElement(i.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: a[G.Chevron] })
    )
  );
}
function LP(e) {
  const { components: t } = jr();
  return V.createElement(t.Button, { ...e });
}
function WP(e) {
  return V.createElement("option", { ...e });
}
function zP(e) {
  const { components: t } = jr();
  return V.createElement(t.Button, { ...e });
}
function BP(e) {
  const { rootRef: t, ...n } = e;
  return V.createElement("div", { ...n, ref: t });
}
function HP(e) {
  return V.createElement("select", { ...e });
}
function VP(e) {
  const { week: t, ...n } = e;
  return V.createElement("tr", { ...n });
}
function jP(e) {
  return V.createElement("th", { ...e });
}
function UP(e) {
  return V.createElement(
    "thead",
    { "aria-hidden": !0 },
    V.createElement("tr", { ...e })
  );
}
function YP(e) {
  const { week: t, ...n } = e;
  return V.createElement("th", { ...n });
}
function GP(e) {
  return V.createElement("th", { ...e });
}
function KP(e) {
  return V.createElement("tbody", { ...e });
}
function XP(e) {
  const { components: t } = jr();
  return V.createElement(t.Dropdown, { ...e });
}
const qP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: EP,
  CaptionLabel: PP,
  Chevron: NP,
  Day: OP,
  DayButton: RP,
  Dropdown: DP,
  DropdownNav: TP,
  Footer: MP,
  Month: kP,
  MonthCaption: AP,
  MonthGrid: IP,
  Months: _P,
  MonthsDropdown: $P,
  Nav: FP,
  NextMonthButton: LP,
  Option: WP,
  PreviousMonthButton: zP,
  Root: BP,
  Select: HP,
  Week: VP,
  WeekNumber: YP,
  WeekNumberHeader: GP,
  Weekday: jP,
  Weekdays: UP,
  Weeks: KP,
  YearsDropdown: XP
}, Symbol.toStringTag, { value: "Module" }));
function Lt(e, t, n = !1, r = kt) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: i, isSameDay: a } = r;
  return o && s ? (i(s, o) < 0 && ([o, s] = [s, o]), i(t, o) >= (n ? 1 : 0) && i(s, t) >= (n ? 1 : 0)) : !n && s ? a(s, t) : !n && o ? a(o, t) : !1;
}
function za(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ss(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Ba(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ha(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Bm(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Hm(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Wt(e, t, n = kt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: i } = n;
  return r.some((a) => {
    if (typeof a == "boolean")
      return a;
    if (n.isDate(a))
      return o(e, a);
    if (Hm(a, n))
      return a.some((l) => o(e, l));
    if (ss(a))
      return Lt(a, e, !1, n);
    if (Bm(a))
      return Array.isArray(a.dayOfWeek) ? a.dayOfWeek.includes(e.getDay()) : a.dayOfWeek === e.getDay();
    if (za(a)) {
      const l = s(a.before, e), u = s(a.after, e), m = l > 0, d = u < 0;
      return i(a.before, a.after) ? d && m : m || d;
    }
    return Ba(a) ? s(e, a.after) > 0 : Ha(a) ? s(a.before, e) > 0 : typeof a == "function" ? a(e) : !1;
  });
}
function ZP(e, t, n, r, o) {
  const { disabled: s, hidden: i, modifiers: a, showOutsideDays: l, broadcastCalendar: u, today: m = o.today() } = t, { isSameDay: d, isSameMonth: p, startOfMonth: h, isBefore: g, endOfMonth: v, isAfter: b } = o, w = n && h(n), x = r && v(r), y = {
    [we.focused]: [],
    [we.outside]: [],
    [we.disabled]: [],
    [we.hidden]: [],
    [we.today]: []
  }, C = {};
  for (const P of e) {
    const { date: S, displayMonth: E } = P, N = !!(E && !p(S, E)), R = !!(w && g(S, w)), k = !!(x && b(S, x)), _ = !!(s && Wt(S, s, o)), T = !!(i && Wt(S, i, o)) || R || k || // Broadcast calendar will show outside days as default
    !u && !l && N || u && l === !1 && N, L = d(S, m);
    N && y.outside.push(P), _ && y.disabled.push(P), T && y.hidden.push(P), L && y.today.push(P), a && Object.keys(a).forEach((F) => {
      const z = a?.[F];
      z && Wt(S, z, o) && (C[F] ? C[F].push(P) : C[F] = [P]);
    });
  }
  return (P) => {
    const S = {
      [we.focused]: !1,
      [we.disabled]: !1,
      [we.hidden]: !1,
      [we.outside]: !1,
      [we.today]: !1
    }, E = {};
    for (const N in y) {
      const R = y[N];
      S[N] = R.some((k) => k === P);
    }
    for (const N in C)
      E[N] = C[N].some((R) => R === P);
    return {
      ...S,
      // custom modifiers should override all the previous ones
      ...E
    };
  };
}
function QP(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[we[s]] ? o.push(t[we[s]]) : t[mt[s]] && o.push(t[mt[s]]), o), [t[G.Day]]);
}
function JP(e) {
  return {
    ...qP,
    ...e
  };
}
function eN(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function tN() {
  const e = {};
  for (const t in G)
    e[G[t]] = `rdp-${G[t]}`;
  for (const t in we)
    e[we[t]] = `rdp-${we[t]}`;
  for (const t in mt)
    e[mt[t]] = `rdp-${mt[t]}`;
  for (const t in Ye)
    e[Ye[t]] = `rdp-${Ye[t]}`;
  return e;
}
function Vm(e, t, n) {
  return (n ?? new et(t)).formatMonthYear(e);
}
const nN = Vm;
function rN(e, t, n) {
  return (n ?? new et(t)).format(e, "d");
}
function oN(e, t = kt) {
  return t.format(e, "LLLL");
}
function sN(e, t, n) {
  return (n ?? new et(t)).format(e, "cccccc");
}
function iN(e, t = kt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function aN() {
  return "";
}
function jm(e, t = kt) {
  return t.format(e, "yyyy");
}
const cN = jm, lN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Vm,
  formatDay: rN,
  formatMonthCaption: nN,
  formatMonthDropdown: oN,
  formatWeekNumber: iN,
  formatWeekNumberHeader: aN,
  formatWeekdayName: sN,
  formatYearCaption: cN,
  formatYearDropdown: jm
}, Symbol.toStringTag, { value: "Module" }));
function uN(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...lN,
    ...e
  };
}
function Va(e, t, n, r) {
  let o = (r ?? new et(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const dN = Va;
function ja(e, t, n) {
  return (n ?? new et(t)).formatMonthYear(e);
}
const fN = ja;
function Um(e, t, n, r) {
  let o = (r ?? new et(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function Ym(e) {
  return "Choose the Month";
}
function Gm() {
  return "";
}
const mN = "Go to the Next Month";
function Km(e, t) {
  return mN;
}
function Xm(e) {
  return "Go to the Previous Month";
}
function qm(e, t, n) {
  return (n ?? new et(t)).format(e, "cccc");
}
function Zm(e, t) {
  return `Week ${e}`;
}
function Qm(e) {
  return "Week Number";
}
function Jm(e) {
  return "Choose the Year";
}
const pN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: fN,
  labelDay: dN,
  labelDayButton: Va,
  labelGrid: ja,
  labelGridcell: Um,
  labelMonthDropdown: Ym,
  labelNav: Gm,
  labelNext: Km,
  labelPrevious: Xm,
  labelWeekNumber: Zm,
  labelWeekNumberHeader: Qm,
  labelWeekday: qm,
  labelYearDropdown: Jm
}, Symbol.toStringTag, { value: "Module" })), dt = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function hN(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...pN,
    ...e ?? {},
    labelDayButton: dt(Va, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: dt(Ym, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: dt(Km, e?.labelNext, n.labelNext),
    labelPrevious: dt(Xm, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: dt(Zm, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: dt(Jm, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: dt(ja, e?.labelGrid, n.labelGrid),
    labelGridcell: dt(Um, e?.labelGridcell, n.labelGridcell),
    labelNav: dt(Gm, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: dt(Qm, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: dt(qm, e?.labelWeekday, n.labelWeekday)
  };
}
function gN(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: i, endOfYear: a, eachMonthOfInterval: l, getMonth: u } = o;
  return l({
    start: i(e),
    end: a(e)
  }).map((p) => {
    const h = r.formatMonthDropdown(p, o), g = u(p), v = t && p < s(t) || n && p > s(n) || !1;
    return { value: g, label: h, disabled: v };
  });
}
function vN(e, t = {}, n = {}) {
  let r = { ...t?.[G.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function bN(e, t, n, r) {
  const o = r ?? e.today(), s = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), i = [];
  for (let a = 0; a < 7; a++) {
    const l = e.addDays(s, a);
    i.push(l);
  }
  return i;
}
function yN(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: i, eachYearOfInterval: a, getYear: l } = r, u = s(e), m = i(t), d = a({ start: u, end: m });
  return o && d.reverse(), d.map((p) => {
    const h = n.formatYearDropdown(p, r);
    return {
      value: l(p),
      label: h,
      disabled: !1
    };
  });
}
function wN(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, s = (a) => {
    const l = typeof a == "number" || typeof a == "string" ? new Date(a) : a;
    return new Fe(l.getFullYear(), l.getMonth(), l.getDate(), 12, 0, 0, e);
  }, i = (a) => {
    const l = s(a);
    return new Date(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => s(Fe.tz(e)),
    newDate: (a, l, u) => new Fe(a, l, u, 12, 0, 0, e),
    startOfDay: (a) => s(a),
    startOfWeek: (a, l) => {
      const u = s(a), m = l?.weekStartsOn ?? o, d = (u.getDay() - m + 7) % 7;
      return u.setDate(u.getDate() - d), u;
    },
    startOfISOWeek: (a) => {
      const l = s(a), u = (l.getDay() - 1 + 7) % 7;
      return l.setDate(l.getDate() - u), l;
    },
    startOfMonth: (a) => {
      const l = s(a);
      return l.setDate(1), l;
    },
    startOfYear: (a) => {
      const l = s(a);
      return l.setMonth(0, 1), l;
    },
    endOfWeek: (a, l) => {
      const u = s(a), p = (((l?.weekStartsOn ?? o) + 6) % 7 - u.getDay() + 7) % 7;
      return u.setDate(u.getDate() + p), u;
    },
    endOfISOWeek: (a) => {
      const l = s(a), u = (7 - l.getDay()) % 7;
      return l.setDate(l.getDate() + u), l;
    },
    endOfMonth: (a) => {
      const l = s(a);
      return l.setMonth(l.getMonth() + 1, 0), l;
    },
    endOfYear: (a) => {
      const l = s(a);
      return l.setMonth(11, 31), l;
    },
    eachMonthOfInterval: (a) => {
      const l = s(a.start), u = s(a.end), m = [], d = new Fe(l.getFullYear(), l.getMonth(), 1, 12, 0, 0, e), p = u.getFullYear() * 12 + u.getMonth();
      for (; d.getFullYear() * 12 + d.getMonth() <= p; )
        m.push(new Fe(d, e)), d.setMonth(d.getMonth() + 1, 1);
      return m;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (a, l) => {
      const u = s(a);
      return u.setDate(u.getDate() + l), u;
    },
    addWeeks: (a, l) => {
      const u = s(a);
      return u.setDate(u.getDate() + l * 7), u;
    },
    addMonths: (a, l) => {
      const u = s(a);
      return u.setMonth(u.getMonth() + l), u;
    },
    addYears: (a, l) => {
      const u = s(a);
      return u.setFullYear(u.getFullYear() + l), u;
    },
    eachYearOfInterval: (a) => {
      const l = s(a.start), u = s(a.end), m = [], d = new Fe(l.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; d.getFullYear() <= u.getFullYear(); )
        m.push(new Fe(d, e)), d.setFullYear(d.getFullYear() + 1, 0, 1);
      return m;
    },
    getWeek: (a, l) => {
      const u = i(a);
      return La(u, {
        weekStartsOn: l?.weekStartsOn ?? o,
        firstWeekContainsDate: l?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (a) => {
      const l = i(a);
      return Fa(l);
    },
    differenceInCalendarDays: (a, l) => {
      const u = i(a), m = i(l);
      return $a(u, m);
    },
    differenceInCalendarMonths: (a, l) => {
      const u = i(a), m = i(l);
      return Tm(u, m);
    }
  };
}
const Ur = (e) => e instanceof HTMLElement ? e : null, Ls = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], xN = (e) => Ur(e.querySelector("[data-animated-month]")), Ws = (e) => Ur(e.querySelector("[data-animated-caption]")), zs = (e) => Ur(e.querySelector("[data-animated-weeks]")), CN = (e) => Ur(e.querySelector("[data-animated-nav]")), SN = (e) => Ur(e.querySelector("[data-animated-weekdays]"));
function EN(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const i = tn(null), a = tn(r), l = tn(!1);
  Ru(() => {
    const u = a.current;
    if (a.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || u.length === 0 || r.length !== u.length)
      return;
    const m = s.isSameMonth(r[0].date, u[0].date), d = s.isAfter(r[0].date, u[0].date), p = d ? n[Ye.caption_after_enter] : n[Ye.caption_before_enter], h = d ? n[Ye.weeks_after_enter] : n[Ye.weeks_before_enter], g = i.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (Ls(v).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const C = xN(y);
      C && y.contains(C) && y.removeChild(C);
      const P = Ws(y);
      P && P.classList.remove(p);
      const S = zs(y);
      S && S.classList.remove(h);
    }), i.current = v) : i.current = null, l.current || m || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = g instanceof HTMLElement ? Ls(g) : [], w = Ls(e.current);
    if (w?.every((x) => x instanceof HTMLElement) && b && b.every((x) => x instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const x = CN(e.current);
      x && (x.style.zIndex = "1"), w.forEach((y, C) => {
        const P = b[C];
        if (!P)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const S = Ws(y);
        S && S.classList.add(p);
        const E = zs(y);
        E && E.classList.add(h);
        const N = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), x && (x.style.zIndex = ""), S && S.classList.remove(p), E && E.classList.remove(h), y.style.position = "", y.style.overflow = "", y.contains(P) && y.removeChild(P);
        };
        P.style.pointerEvents = "none", P.style.position = "absolute", P.style.overflow = "hidden", P.setAttribute("aria-hidden", "true");
        const R = SN(P);
        R && (R.style.opacity = "0");
        const k = Ws(P);
        k && (k.classList.add(d ? n[Ye.caption_before_exit] : n[Ye.caption_after_exit]), k.addEventListener("animationend", N));
        const _ = zs(P);
        _ && _.classList.add(d ? n[Ye.weeks_before_exit] : n[Ye.weeks_after_exit]), y.insertBefore(P, y.firstChild);
      });
    }
  });
}
function PN(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: i, fixedWeeks: a, broadcastCalendar: l } = n ?? {}, { addDays: u, differenceInCalendarDays: m, differenceInCalendarMonths: d, endOfBroadcastWeek: p, endOfISOWeek: h, endOfMonth: g, endOfWeek: v, isAfter: b, startOfBroadcastWeek: w, startOfISOWeek: x, startOfWeek: y } = r, C = l ? w(o, r) : i ? x(o) : y(o), P = l ? p(s) : i ? h(g(s)) : v(g(s)), S = t && (l ? p(t) : i ? h(t) : v(t)), E = S && b(P, S) ? S : P, N = m(E, C), R = d(s, o) + 1, k = [];
  for (let L = 0; L <= N; L++) {
    const F = u(C, L);
    k.push(F);
  }
  const T = (l ? 35 : 42) * R;
  if (a && k.length < T) {
    const L = T - k.length;
    for (let F = 0; F < L; F++) {
      const z = u(k[k.length - 1], 1);
      k.push(z);
    }
  }
  return k;
}
function NN(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, i) => s.concat(i.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function ON(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let i = 0; i < o; i++) {
    const a = r.addMonths(e, i);
    if (t && a > t)
      break;
    s.push(a);
  }
  return s;
}
function Bl(e, t, n, r) {
  const { month: o, defaultMonth: s, today: i = r.today(), numberOfMonths: a = 1 } = e;
  let l = o || s || i;
  const { differenceInCalendarMonths: u, addMonths: m, startOfMonth: d } = r;
  if (n && u(n, l) < a - 1) {
    const p = -1 * (a - 1);
    l = m(n, p);
  }
  return t && u(l, t) < 0 && (l = t), d(l);
}
function RN(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: i, endOfMonth: a, endOfWeek: l, getISOWeek: u, getWeek: m, startOfBroadcastWeek: d, startOfISOWeek: p, startOfWeek: h } = r, g = e.reduce((v, b) => {
    const w = n.broadcastCalendar ? d(b, r) : n.ISOWeek ? p(b) : h(b), x = n.broadcastCalendar ? s(b) : n.ISOWeek ? i(a(b)) : l(a(b)), y = t.filter((E) => E >= w && E <= x), C = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < C) {
      const E = t.filter((N) => {
        const R = C - y.length;
        return N > x && N <= o(x, R);
      });
      y.push(...E);
    }
    const P = y.reduce((E, N) => {
      const R = n.ISOWeek ? u(N) : m(N), k = E.find((T) => T.weekNumber === R), _ = new Wm(N, b, r);
      return k ? k.days.push(_) : E.push(new SP(R, [_])), E;
    }, []), S = new CP(b, P);
    return v.push(S), v;
  }, []);
  return n.reverseMonths ? g.reverse() : g;
}
function DN(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: i, endOfMonth: a, addYears: l, endOfYear: u, newDate: m, today: d } = t, { fromYear: p, toYear: h, fromMonth: g, toMonth: v } = e;
  !n && g && (n = g), !n && p && (n = t.newDate(p, 0, 1)), !r && v && (r = v), !r && h && (r = m(h, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : p ? n = m(p, 0, 1) : !n && b && (n = o(l(e.today ?? d(), -100))), r ? r = a(r) : h ? r = m(h, 11, 31) : !r && b && (r = u(e.today ?? d())), [
    n && s(n),
    r && s(r)
  ];
}
function TN(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: i, addMonths: a, differenceInCalendarMonths: l } = r, u = o ? s : 1, m = i(e);
  if (!t)
    return a(m, u);
  if (!(l(t, e) < s))
    return a(m, u);
}
function MN(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: i, addMonths: a, differenceInCalendarMonths: l } = r, u = o ? s ?? 1 : 1, m = i(e);
  if (!t)
    return a(m, -u);
  if (!(l(m, t) <= 0))
    return a(m, -u);
}
function kN(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function is(e, t) {
  const [n, r] = pt(e);
  return [t === void 0 ? n : t, r];
}
function AN(e, t) {
  const [n, r] = DN(e, t), { startOfMonth: o, endOfMonth: s } = t, i = Bl(e, n, r, t), [a, l] = is(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  Pn(() => {
    const C = Bl(e, n, r, t);
    l(C);
  }, [e.timeZone]);
  const { months: u, weeks: m, days: d, previousMonth: p, nextMonth: h } = ho(() => {
    const C = ON(a, r, { numberOfMonths: e.numberOfMonths }, t), P = PN(C, e.endMonth ? s(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), S = RN(C, P, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), E = kN(S), N = NN(S), R = MN(a, n, e, t), k = TN(a, r, e, t);
    return {
      months: S,
      weeks: E,
      days: N,
      previousMonth: R,
      nextMonth: k
    };
  }, [
    t,
    a.getTime(),
    r?.getTime(),
    n?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: g, onMonthChange: v } = e, b = (C) => m.some((P) => P.days.some((S) => S.isEqualTo(C))), w = (C) => {
    if (g)
      return;
    let P = o(C);
    n && P < o(n) && (P = o(n)), r && P > o(r) && (P = o(r)), l(P), v?.(P);
  };
  return {
    months: u,
    weeks: m,
    days: d,
    navStart: n,
    navEnd: r,
    previousMonth: p,
    nextMonth: h,
    goToMonth: w,
    goToDay: (C) => {
      b(C) || w(C.date);
    }
  };
}
var wt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(wt || (wt = {}));
function Hl(e) {
  return !e[we.disabled] && !e[we.hidden] && !e[we.outside];
}
function IN(e, t, n, r) {
  let o, s = -1;
  for (const i of e) {
    const a = t(i);
    Hl(a) && (a[we.focused] && s < wt.FocusedModifier ? (o = i, s = wt.FocusedModifier) : r?.isEqualTo(i) && s < wt.LastFocused ? (o = i, s = wt.LastFocused) : n(i.date) && s < wt.Selected ? (o = i, s = wt.Selected) : a[we.today] && s < wt.Today && (o = i, s = wt.Today));
  }
  return o || (o = e.find((i) => Hl(t(i)))), o;
}
function _N(e, t, n, r, o, s, i) {
  const { ISOWeek: a, broadcastCalendar: l } = s, { addDays: u, addMonths: m, addWeeks: d, addYears: p, endOfBroadcastWeek: h, endOfISOWeek: g, endOfWeek: v, max: b, min: w, startOfBroadcastWeek: x, startOfISOWeek: y, startOfWeek: C } = i;
  let S = {
    day: u,
    week: d,
    month: m,
    year: p,
    startOfWeek: (E) => l ? x(E, i) : a ? y(E) : C(E),
    endOfWeek: (E) => l ? h(E) : a ? g(E) : v(E)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? S = b([r, S]) : t === "after" && o && (S = w([o, S])), S;
}
function ep(e, t, n, r, o, s, i, a = 0) {
  if (a > 365)
    return;
  const l = _N(e, t, n.date, r, o, s, i), u = !!(s.disabled && Wt(l, s.disabled, i)), m = !!(s.hidden && Wt(l, s.hidden, i)), d = l, p = new Wm(l, d, i);
  return !u && !m ? p : ep(e, t, p, r, o, s, i, a + 1);
}
function $N(e, t, n, r, o) {
  const { autoFocus: s } = e, [i, a] = pt(), l = IN(t.days, n, r || (() => !1), i), [u, m] = pt(s ? l : void 0);
  return {
    isFocusTarget: (v) => !!l?.isEqualTo(v),
    setFocused: m,
    focused: u,
    blur: () => {
      a(u), m(void 0);
    },
    moveFocus: (v, b) => {
      if (!u)
        return;
      const w = ep(v, b, u, t.navStart, t.navEnd, e, o);
      w && (e.disableNavigation && !t.days.some((y) => y.isEqualTo(w)) || (t.goToDay(w), m(w)));
    }
  };
}
function FN(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = is(n, o ? n : void 0), a = o ? n : s, { isSameDay: l } = t, u = (h) => a?.some((g) => l(g, h)) ?? !1, { min: m, max: d } = e;
  return {
    selected: a,
    select: (h, g, v) => {
      let b = [...a ?? []];
      if (u(h)) {
        if (a?.length === m || r && a?.length === 1)
          return;
        b = a?.filter((w) => !l(w, h));
      } else
        a?.length === d ? b = [h] : b = [...b, h];
      return o || i(b), o?.(b, h, g, v), b;
    },
    isSelected: u
  };
}
function LN(e, t, n = 0, r = 0, o = !1, s = kt) {
  const { from: i, to: a } = t || {}, { isSameDay: l, isAfter: u, isBefore: m } = s;
  let d;
  if (!i && !a)
    d = { from: e, to: n > 0 ? void 0 : e };
  else if (i && !a)
    l(i, e) ? n === 0 ? d = { from: i, to: e } : o ? d = { from: i, to: void 0 } : d = void 0 : m(e, i) ? d = { from: e, to: i } : d = { from: i, to: e };
  else if (i && a)
    if (l(i, e) && l(a, e))
      o ? d = { from: i, to: a } : d = void 0;
    else if (l(i, e))
      d = { from: i, to: n > 0 ? void 0 : e };
    else if (l(a, e))
      d = { from: e, to: n > 0 ? void 0 : e };
    else if (m(e, i))
      d = { from: e, to: a };
    else if (u(e, i))
      d = { from: i, to: e };
    else if (u(e, a))
      d = { from: i, to: e };
    else
      throw new Error("Invalid range");
  if (d?.from && d?.to) {
    const p = s.differenceInCalendarDays(d.to, d.from);
    r > 0 && p > r ? d = { from: e, to: void 0 } : n > 1 && p < n && (d = { from: e, to: void 0 });
  }
  return d;
}
function WN(e, t, n = kt) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const s = n.differenceInCalendarDays(e.to, e.from), i = Math.min(s, 6);
  for (let a = 0; a <= i; a++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Vl(e, t, n = kt) {
  return Lt(e, t.from, !1, n) || Lt(e, t.to, !1, n) || Lt(t, e.from, !1, n) || Lt(t, e.to, !1, n);
}
function zN(e, t, n = kt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((a) => typeof a != "function").some((a) => typeof a == "boolean" ? a : n.isDate(a) ? Lt(e, a, !1, n) : Hm(a, n) ? a.some((l) => Lt(e, l, !1, n)) : ss(a) ? a.from && a.to ? Vl(e, { from: a.from, to: a.to }, n) : !1 : Bm(a) ? WN(e, a.dayOfWeek, n) : za(a) ? n.isAfter(a.before, a.after) ? Vl(e, {
    from: n.addDays(a.after, 1),
    to: n.addDays(a.before, -1)
  }, n) : Wt(e.from, a, n) || Wt(e.to, a, n) : Ba(a) || Ha(a) ? Wt(e.from, a, n) || Wt(e.to, a, n) : !1))
    return !0;
  const i = r.filter((a) => typeof a == "function");
  if (i.length) {
    let a = e.from;
    const l = n.differenceInCalendarDays(e.to, e.from);
    for (let u = 0; u <= l; u++) {
      if (i.some((m) => m(a)))
        return !0;
      a = n.addDays(a, 1);
    }
  }
  return !1;
}
function BN(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: o, selected: s, required: i, onSelect: a } = e, [l, u] = is(s, a ? s : void 0), m = a ? s : l;
  return {
    selected: m,
    select: (h, g, v) => {
      const { min: b, max: w } = e;
      let x;
      if (h) {
        const y = m?.from, C = m?.to, P = !!y && !!C, S = !!y && !!C && t.isSameDay(y, C) && t.isSameDay(h, y);
        o && (P || !m?.from) ? !i && S ? x = void 0 : x = { from: h, to: void 0 } : x = LN(h, m, b, w, i, t);
      }
      return r && n && x?.from && x.to && zN({ from: x.from, to: x.to }, n, t) && (x.from = h, x.to = void 0), a || u(x), a?.(x, h, g, v), x;
    },
    isSelected: (h) => m && Lt(m, h, !1, t)
  };
}
function HN(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = is(n, o ? n : void 0), a = o ? n : s, { isSameDay: l } = t;
  return {
    selected: a,
    select: (d, p, h) => {
      let g = d;
      return !r && a && a && l(d, a) && (g = void 0), o || i(g), o?.(g, d, p, h), g;
    },
    isSelected: (d) => a ? l(a, d) : !1
  };
}
function VN(e, t) {
  const n = HN(e, t), r = FN(e, t), o = BN(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function nt(e, t) {
  return e instanceof Fe && e.timeZone === t ? e : new Fe(e, t);
}
function Hn(e, t, n) {
  return nt(e, t);
}
function jl(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Hn(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? Hn(r, t) : r) : ss(e) ? {
    ...e,
    from: e.from ? nt(e.from, t) : e.from,
    to: e.to ? nt(e.to, t) : e.to
  } : za(e) ? {
    before: Hn(e.before, t),
    after: Hn(e.after, t)
  } : Ba(e) ? {
    after: Hn(e.after, t)
  } : Ha(e) ? {
    before: Hn(e.before, t)
  } : e;
}
function Bs(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => jl(r, t)) : jl(e, t));
}
function jN(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = nt(t.today, n)), t.month && (t.month = nt(t.month, n)), t.defaultMonth && (t.defaultMonth = nt(t.defaultMonth, n)), t.startMonth && (t.startMonth = nt(t.startMonth, n)), t.endMonth && (t.endMonth = nt(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = nt(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((te) => nt(te, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? nt(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? nt(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Bs(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Bs(t.hidden, n)), t.modifiers)) {
    const te = {};
    Object.keys(t.modifiers).forEach((de) => {
      te[de] = Bs(t.modifiers?.[de], n);
    }), t.modifiers = te;
  }
  const { components: r, formatters: o, labels: s, dateLib: i, locale: a, classNames: l } = ho(() => {
    const te = { ...Lm, ...t.locale }, de = t.broadcastCalendar ? 1 : t.weekStartsOn, Z = t.noonSafe && t.timeZone ? wN(t.timeZone, {
      weekStartsOn: de,
      locale: te
    }) : void 0, ue = t.dateLib && Z ? { ...Z, ...t.dateLib } : t.dateLib ?? Z, je = new et({
      locale: te,
      weekStartsOn: de,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, ue);
    return {
      dateLib: je,
      components: JP(t.components),
      formatters: uN(t.formatters),
      labels: hN(t.labels, je.options),
      locale: te,
      classNames: { ...tN(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: i.today() });
  const { captionLayout: u, mode: m, navLayout: d, numberOfMonths: p = 1, onDayBlur: h, onDayClick: g, onDayFocus: v, onDayKeyDown: b, onDayMouseEnter: w, onDayMouseLeave: x, onNextClick: y, onPrevClick: C, showWeekNumber: P, styles: S } = t, { formatCaption: E, formatDay: N, formatMonthDropdown: R, formatWeekNumber: k, formatWeekNumberHeader: _, formatWeekdayName: T, formatYearDropdown: L } = o, F = AN(t, i), { days: z, months: A, navStart: W, navEnd: M, previousMonth: $, nextMonth: O, goToMonth: B } = F, Q = ZP(z, t, W, M, i), { isSelected: re, select: be, selected: J } = VN(t, i) ?? {}, { blur: H, focused: j, isFocusTarget: oe, moveFocus: K, setFocused: ee } = $N(t, F, Q, re ?? (() => !1), i), { labelDayButton: se, labelGridcell: ae, labelGrid: me, labelMonthDropdown: ye, labelNav: ve, labelPrevious: br, labelNext: yr, labelWeekday: hb, labelWeekNumber: gb, labelWeekNumberHeader: vb, labelYearDropdown: bb } = s, yb = ho(() => bN(i, t.ISOWeek, t.broadcastCalendar, t.today), [i, t.ISOWeek, t.broadcastCalendar, t.today]), Oc = m !== void 0 || g !== void 0, Cs = Ue(() => {
    $ && (B($), C?.($));
  }, [$, B, C]), Ss = Ue(() => {
    O && (B(O), y?.(O));
  }, [B, O, y]), wb = Ue((te, de) => (Z) => {
    Z.preventDefault(), Z.stopPropagation(), ee(te), !de.disabled && (be?.(te.date, de, Z), g?.(te.date, de, Z));
  }, [be, g, ee]), xb = Ue((te, de) => (Z) => {
    ee(te), v?.(te.date, de, Z);
  }, [v, ee]), Cb = Ue((te, de) => (Z) => {
    H(), h?.(te.date, de, Z);
  }, [H, h]), Sb = Ue((te, de) => (Z) => {
    const ue = {
      ArrowLeft: [
        Z.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        Z.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [Z.shiftKey ? "year" : "week", "after"],
      ArrowUp: [Z.shiftKey ? "year" : "week", "before"],
      PageUp: [Z.shiftKey ? "year" : "month", "before"],
      PageDown: [Z.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ue[Z.key]) {
      Z.preventDefault(), Z.stopPropagation();
      const [je, ce] = ue[Z.key];
      K(je, ce);
    }
    b?.(te.date, de, Z);
  }, [K, b, t.dir]), Eb = Ue((te, de) => (Z) => {
    w?.(te.date, de, Z);
  }, [w]), Pb = Ue((te, de) => (Z) => {
    x?.(te.date, de, Z);
  }, [x]), Nb = Ue((te) => (de) => {
    const Z = Number(de.target.value), ue = i.setMonth(i.startOfMonth(te), Z);
    B(ue);
  }, [i, B]), Ob = Ue((te) => (de) => {
    const Z = Number(de.target.value), ue = i.setYear(i.startOfMonth(te), Z);
    B(ue);
  }, [i, B]), { className: Rb, style: Db } = ho(() => ({
    className: [l[G.Root], t.className].filter(Boolean).join(" "),
    style: { ...S?.[G.Root], ...t.style }
  }), [l, t.className, t.style, S]), Tb = eN(t), Rc = tn(null);
  EN(Rc, !!t.animate, {
    classNames: l,
    months: A,
    focused: j,
    dateLib: i
  });
  const Mb = {
    dayPickerProps: t,
    selected: J,
    select: be,
    isSelected: re,
    months: A,
    nextMonth: O,
    previousMonth: $,
    goToMonth: B,
    getModifiers: Q,
    components: r,
    classNames: l,
    styles: S,
    labels: s,
    formatters: o
  };
  return V.createElement(
    zm.Provider,
    { value: Mb },
    V.createElement(
      r.Root,
      { rootRef: t.animate ? Rc : void 0, className: Rb, style: Db, dir: t.dir, id: t.id, lang: t.lang ?? a.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Tb },
      V.createElement(
        r.Months,
        { className: l[G.Months], style: S?.[G.Months] },
        !t.hideNavigation && !d && V.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[G.Nav], style: S?.[G.Nav], "aria-label": ve(), onPreviousClick: Cs, onNextClick: Ss, previousMonth: $, nextMonth: O }),
        A.map((te, de) => V.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: l[G.Month],
            style: S?.[G.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: de,
            displayIndex: de,
            calendarMonth: te
          },
          d === "around" && !t.hideNavigation && de === 0 && V.createElement(
            r.PreviousMonthButton,
            { type: "button", className: l[G.PreviousMonthButton], tabIndex: $ ? void 0 : -1, "aria-disabled": $ ? void 0 : !0, "aria-label": br($), onClick: Cs, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(r.Chevron, { disabled: $ ? void 0 : !0, className: l[G.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          V.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: l[G.MonthCaption], style: S?.[G.MonthCaption], calendarMonth: te, displayIndex: de }, u?.startsWith("dropdown") ? V.createElement(
            r.DropdownNav,
            { className: l[G.Dropdowns], style: S?.[G.Dropdowns] },
            (() => {
              const Z = u === "dropdown" || u === "dropdown-months" ? V.createElement(r.MonthsDropdown, { key: "month", className: l[G.MonthsDropdown], "aria-label": ye(), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: Nb(te.date), options: gN(te.date, W, M, o, i), style: S?.[G.Dropdown], value: i.getMonth(te.date) }) : V.createElement("span", { key: "month" }, R(te.date, i)), ue = u === "dropdown" || u === "dropdown-years" ? V.createElement(r.YearsDropdown, { key: "year", className: l[G.YearsDropdown], "aria-label": bb(i.options), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: Ob(te.date), options: yN(W, M, o, i, !!t.reverseYears), style: S?.[G.Dropdown], value: i.getYear(te.date) }) : V.createElement("span", { key: "year" }, L(te.date, i));
              return i.getMonthYearOrder() === "year-first" ? [ue, Z] : [Z, ue];
            })(),
            V.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, E(te.date, i.options, i))
          ) : V.createElement(r.CaptionLabel, { className: l[G.CaptionLabel], role: "status", "aria-live": "polite" }, E(te.date, i.options, i))),
          d === "around" && !t.hideNavigation && de === p - 1 && V.createElement(
            r.NextMonthButton,
            { type: "button", className: l[G.NextMonthButton], tabIndex: O ? void 0 : -1, "aria-disabled": O ? void 0 : !0, "aria-label": yr(O), onClick: Ss, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(r.Chevron, { disabled: O ? void 0 : !0, className: l[G.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          de === p - 1 && d === "after" && !t.hideNavigation && V.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[G.Nav], style: S?.[G.Nav], "aria-label": ve(), onPreviousClick: Cs, onNextClick: Ss, previousMonth: $, nextMonth: O }),
          V.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": m === "multiple" || m === "range", "aria-label": me(te.date, i.options, i) || void 0, className: l[G.MonthGrid], style: S?.[G.MonthGrid] },
            !t.hideWeekdays && V.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: l[G.Weekdays], style: S?.[G.Weekdays] },
              P && V.createElement(r.WeekNumberHeader, { "aria-label": vb(i.options), className: l[G.WeekNumberHeader], style: S?.[G.WeekNumberHeader], scope: "col" }, _()),
              yb.map((Z) => V.createElement(r.Weekday, { "aria-label": hb(Z, i.options, i), className: l[G.Weekday], key: String(Z), style: S?.[G.Weekday], scope: "col" }, T(Z, i.options, i)))
            ),
            V.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: l[G.Weeks], style: S?.[G.Weeks] }, te.weeks.map((Z) => V.createElement(
              r.Week,
              { className: l[G.Week], key: Z.weekNumber, style: S?.[G.Week], week: Z },
              P && V.createElement(r.WeekNumber, { week: Z, style: S?.[G.WeekNumber], "aria-label": gb(Z.weekNumber, {
                locale: a
              }), className: l[G.WeekNumber], scope: "row", role: "rowheader" }, k(Z.weekNumber, i)),
              Z.days.map((ue) => {
                const { date: je } = ue, ce = Q(ue);
                if (ce[we.focused] = !ce.hidden && !!j?.isEqualTo(ue), ce[mt.selected] = re?.(je) || ce.selected, ss(J)) {
                  const { from: Es, to: Ps } = J;
                  ce[mt.range_start] = !!(Es && Ps && i.isSameDay(je, Es)), ce[mt.range_end] = !!(Es && Ps && i.isSameDay(je, Ps)), ce[mt.range_middle] = Lt(J, je, !0, i);
                }
                const kb = vN(ce, S, t.modifiersStyles), Ab = QP(ce, l, t.modifiersClassNames), Ib = !Oc && !ce.hidden ? ae(je, ce, i.options, i) : void 0;
                return V.createElement(r.Day, { key: `${ue.isoDate}_${ue.displayMonthId}`, day: ue, modifiers: ce, className: Ab.join(" "), style: kb, role: "gridcell", "aria-selected": ce.selected || void 0, "aria-label": Ib, "data-day": ue.isoDate, "data-month": ue.outside ? ue.dateMonthId : void 0, "data-selected": ce.selected || void 0, "data-disabled": ce.disabled || void 0, "data-hidden": ce.hidden || void 0, "data-outside": ue.outside || void 0, "data-focused": ce.focused || void 0, "data-today": ce.today || void 0 }, !ce.hidden && Oc ? V.createElement(r.DayButton, { className: l[G.DayButton], style: S?.[G.DayButton], type: "button", day: ue, modifiers: ce, disabled: !ce.focused && ce.disabled || void 0, "aria-disabled": ce.focused && ce.disabled || void 0, tabIndex: oe(ue) ? 0 : -1, "aria-label": se(je, ce, i.options, i), onClick: wb(ue, ce), onBlur: Cb(ue, ce), onFocus: xb(ue, ce), onKeyDown: Sb(ue, ce), onMouseEnter: Eb(ue, ce), onMouseLeave: Pb(ue, ce) }, N(je, i.options, i)) : !ce.hidden && N(ue.date, i.options, i));
              })
            )))
          )
        ))
      ),
      t.footer && V.createElement(r.Footer, { className: l[G.Footer], style: S?.[G.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function Ua({ className: e, classNames: t, ...n }) {
  return /* @__PURE__ */ f(
    jN,
    {
      locale: xP,
      className: I("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month_caption: "flex justify-center pt-1 relative items-center text-sm font-medium text-text-base",
        nav: "flex items-center gap-1",
        button_previous: "absolute left-1 top-0 inline-flex items-center justify-center rounded-md h-7 w-7 bg-transparent text-text-muted hover:bg-subtle hover:text-text-base transition-colors",
        button_next: "absolute right-1 top-0 inline-flex items-center justify-center rounded-md h-7 w-7 bg-transparent text-text-muted hover:bg-subtle hover:text-text-base transition-colors",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-text-muted rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-1",
        day: "h-9 w-9 text-center text-sm relative flex items-center justify-center rounded-md transition-colors hover:bg-subtle focus-within:relative focus-within:z-20",
        day_button: "h-9 w-9 rounded-md text-sm font-normal aria-selected:opacity-100 cursor-pointer",
        selected: "bg-primary text-primary-fg hover:bg-primary hover:text-primary-fg focus:bg-primary focus:text-primary-fg rounded-md",
        today: "bg-subtle text-text-base font-semibold",
        outside: "text-text-muted opacity-50",
        disabled: "text-text-muted opacity-50 cursor-not-allowed",
        hidden: "invisible",
        range_middle: "bg-databeez-primary/15 text-text-base rounded-none",
        range_start: "rounded-l-md",
        range_end: "rounded-r-md",
        ...t
      },
      ...n
    }
  );
}
Ua.displayName = "Calendar";
function UN({
  value: e,
  onChange: t,
  placeholder: n = "Seleziona data...",
  label: r,
  error: o,
  helperText: s,
  disabled: i,
  className: a,
  displayFormat: l = "dd/MM/yyyy"
}) {
  const u = c.useId();
  return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ f("label", { htmlFor: u, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ D(Br, { children: [
      /* @__PURE__ */ f(Hr, { asChild: !0, children: /* @__PURE__ */ D(
        "button",
        {
          id: u,
          type: "button",
          disabled: i,
          className: I(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !e && "text-text-muted",
            o && "border-error focus:ring-error focus:border-error",
            a
          ),
          children: [
            /* @__PURE__ */ f(zu, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ f("span", { className: "truncate", children: e ? Ft(e, l) : n })
          ]
        }
      ) }),
      /* @__PURE__ */ f(ur, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ f(
        Ua,
        {
          mode: "single",
          selected: e,
          onSelect: t,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ f("p", { className: "text-xs text-error-fg", children: o }),
    s && !o && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: s })
  ] });
}
UN.displayName = "DatePicker";
function YN({
  value: e,
  onChange: t,
  placeholder: n = "Seleziona intervallo...",
  label: r,
  error: o,
  helperText: s,
  disabled: i,
  className: a,
  displayFormat: l = "dd/MM/yyyy",
  numberOfMonths: u = 2
}) {
  const m = c.useId(), d = c.useMemo(() => e?.from ? e.to ? `${Ft(e.from, l)} — ${Ft(e.to, l)}` : Ft(e.from, l) : null, [e, l]);
  return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ f("label", { htmlFor: m, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ D(Br, { children: [
      /* @__PURE__ */ f(Hr, { asChild: !0, children: /* @__PURE__ */ D(
        "button",
        {
          id: m,
          type: "button",
          disabled: i,
          className: I(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !d && "text-text-muted",
            o && "border-error focus:ring-error focus:border-error",
            a
          ),
          children: [
            /* @__PURE__ */ f(zu, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ f("span", { className: "truncate", children: d ?? n })
          ]
        }
      ) }),
      /* @__PURE__ */ f(ur, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ f(
        Ua,
        {
          mode: "range",
          selected: e,
          onSelect: t,
          numberOfMonths: u,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ f("p", { className: "text-xs text-error-fg", children: o }),
    s && !o && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: s })
  ] });
}
YN.displayName = "DateRangePicker";
var GN = Object.defineProperty, dr = (e, t) => GN(e, "name", { value: t, configurable: !0 }), tp = !!(typeof window < "u" && window.document && window.document.createElement);
function kr(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ dr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
dr(kr, "composeEventHandlers");
function KN(e) {
  if (!tp)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
dr(KN, "getOwnerWindow");
function li(e) {
  if (!tp)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
dr(li, "getOwnerDocument");
function np(e, t = !1) {
  const { activeElement: n } = li(e);
  if (!n?.nodeName)
    return null;
  if (rp(n) && n.contentDocument)
    return np(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = li(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
dr(np, "getActiveElement");
function rp(e) {
  return e.tagName === "IFRAME";
}
dr(rp, "isFrame");
var XN = Object.defineProperty, Ya = (e, t) => XN(e, "name", { value: t, configurable: !0 });
function ui(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ya(ui, "setRef");
function op(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = ui(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : ui(e[o], null);
        }
      };
  };
}
Ya(op, "composeRefs");
function sp(...e) {
  return c.useCallback(op(...e), e);
}
Ya(sp, "useComposedRefs");
var qN = Object.defineProperty, st = (e, t) => qN(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function ZN(e, t) {
  const n = c.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ st((s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ f(n.Provider, { value: l, children: i });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(s, i = {}) {
    const { optional: a = !1 } = i, l = c.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return st(o, "useContext"), [r, o];
}
st(ZN, "createContext");
// @__NO_SIDE_EFFECTS__
function ip(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i);
    a.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ st((d) => {
      const { scope: p, children: h, ...g } = d, v = p?.[e]?.[l] || a, b = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ f(v.Provider, { value: b, children: h });
    }, "Provider");
    u.displayName = s + "Provider";
    function m(d, p, h = {}) {
      const { optional: g = !1 } = h, v = p?.[e]?.[l] || a, b = c.useContext(v);
      if (b) return b;
      if (i !== void 0) return i;
      if (!g)
        throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return st(m, "useContext"), [u, m];
  }
  st(r, "createContext");
  const o = /* @__PURE__ */ st(() => {
    const s = n.map((i) => c.createContext(i));
    return /* @__PURE__ */ st(function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, ap(o, ...t)];
}
st(ip, "createContextScope");
function ap(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ st(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ st(function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
st(ap, "composeContextScopes");
var Ga = globalThis?.document ? c.useLayoutEffect : () => {
}, QN = Object.defineProperty, JN = (e, t) => QN(e, "name", { value: t, configurable: !0 }), Ul = c[" useEffectEvent ".trim().toString()], Yl = c[" useInsertionEffect ".trim().toString()];
function cp(e) {
  if (typeof Ul == "function")
    return Ul(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Yl == "function" ? Yl(() => {
    t.current = e;
  }) : Ga(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
JN(cp, "useEffectEvent");
var eO = Object.defineProperty, Yr = (e, t) => eO(e, "name", { value: t, configurable: !0 }), tO = c[" useInsertionEffect ".trim().toString()] || Ga;
function lp({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Yr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = up({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = dp(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
Yr(lp, "useControllableState");
function up({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return tO(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
Yr(up, "useUncontrolledState");
function dp(e) {
  return typeof e == "function";
}
Yr(dp, "isFunction");
var Gl = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function nO(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = cp(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === Gl)
        return { ...b, state: w.state };
      const x = e(b, w);
      return l && !Object.is(x.state, b.state) && u(x.state), x;
    },
    ...m
  ), h = d.state, g = c.useRef(h);
  c.useEffect(() => {
    g.current !== h && (g.current = h, l || u(h));
  }, [h, g, l]);
  const v = c.useMemo(() => o !== void 0 ? { ...d, state: o } : d, [d, o]);
  return c.useEffect(() => {
    l && !Object.is(o, d.state) && p({ type: Gl, state: o });
  }, [o, d.state, l]), [v, p];
}
Yr(nO, "useControllableStateReducer");
var rO = Object.defineProperty, oO = (e, t) => rO(e, "name", { value: t, configurable: !0 }), sO = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], iO = sO.reduce((e, t) => {
  const n = /* @__PURE__ */ Pe(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function aO(e, t) {
  e && Ve.flushSync(() => e.dispatchEvent(t));
}
oO(aO, "dispatchDiscreteCustomEvent");
var cO = Object.defineProperty, fr = (e, t) => cO(e, "name", { value: t, configurable: !0 }), fp = !!(typeof window < "u" && window.document && window.document.createElement);
function xe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ fr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
fr(xe, "composeEventHandlers");
function lO(e) {
  if (!fp)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
fr(lO, "getOwnerWindow");
function di(e) {
  if (!fp)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
fr(di, "getOwnerDocument");
function mp(e, t = !1) {
  const { activeElement: n } = di(e);
  if (!n?.nodeName)
    return null;
  if (pp(n) && n.contentDocument)
    return mp(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = di(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
fr(mp, "getActiveElement");
function pp(e) {
  return e.tagName === "IFRAME";
}
fr(pp, "isFrame");
var uO = Object.defineProperty, it = (e, t) => uO(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function dO(e, t) {
  const n = c.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ it((s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ f(n.Provider, { value: l, children: i });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(s, i = {}) {
    const { optional: a = !1 } = i, l = c.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return it(o, "useContext"), [r, o];
}
it(dO, "createContext");
// @__NO_SIDE_EFFECTS__
function mr(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i);
    a.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ it((d) => {
      const { scope: p, children: h, ...g } = d, v = p?.[e]?.[l] || a, b = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ f(v.Provider, { value: b, children: h });
    }, "Provider");
    u.displayName = s + "Provider";
    function m(d, p, h = {}) {
      const { optional: g = !1 } = h, v = p?.[e]?.[l] || a, b = c.useContext(v);
      if (b) return b;
      if (i !== void 0) return i;
      if (!g)
        throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return it(m, "useContext"), [u, m];
  }
  it(r, "createContext");
  const o = /* @__PURE__ */ it(() => {
    const s = n.map((i) => c.createContext(i));
    return /* @__PURE__ */ it(function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, hp(o, ...t)];
}
it(mr, "createContextScope");
function hp(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ it(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ it(function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
it(hp, "composeContextScopes");
var fO = Object.defineProperty, Ka = (e, t) => fO(e, "name", { value: t, configurable: !0 });
function fi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ka(fi, "setRef");
function gp(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = fi(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : fi(e[o], null);
        }
      };
  };
}
Ka(gp, "composeRefs");
function ze(...e) {
  return c.useCallback(gp(...e), e);
}
Ka(ze, "useComposedRefs");
var Je = globalThis?.document ? c.useLayoutEffect : () => {
}, mO = Object.defineProperty, Me = (e, t) => mO(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Xa(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ mr(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ Me((v) => {
    const { scope: b, children: w } = v, x = c.useRef(null), y = c.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: y, collectionRef: x, children: w });
  }, "CollectionProvider");
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Pe(a), u = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x } = v, y = s(a, w), C = ze(b, y.collectionRef);
      return /* @__PURE__ */ f(l, { ref: C, children: x });
    }
  );
  u.displayName = a;
  const m = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Pe(m), h = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x, ...y } = v, C = c.useRef(null), P = ze(b, C), S = s(m, w);
      return c.useEffect(() => (S.itemMap.set(C, { ref: C, ...y }), () => {
        S.itemMap.delete(C);
      })), /* @__PURE__ */ f(p, { [d]: "", ref: P, children: x });
    }
  );
  h.displayName = m;
  function g(v) {
    const b = s(e + "CollectionConsumer", v);
    return c.useCallback(() => {
      const x = b.collectionRef.current;
      if (!x) return [];
      const y = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(b.itemMap.values()).sort(
        (S, E) => y.indexOf(S.ref.current) - y.indexOf(E.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return Me(g, "useCollection"), [
    { Provider: i, Slot: u, ItemSlot: h },
    g,
    r
  ];
}
Me(Xa, "createCollection");
var Kl = /* @__PURE__ */ new WeakMap(), Se, Ke, fo = (Ke = class extends Map {
  constructor(n) {
    super(n);
    to(this, Se);
    bn(this, Se, [...super.keys()]), Kl.set(this, !0);
  }
  set(n, r) {
    return Kl.get(this) && !this.has(n) && X(this, Se).push(n), super.set(n, r), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(n, r, o) {
    const s = this.has(r), i = s ? this.size : this.size + 1, a = qa(n), l = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
    if (s ? X(this, Se).indexOf(r) === l : l === this.size)
      return this.set(r, o), this;
    const u = X(this, Se).filter((d) => d !== r);
    u.splice(l, 0, r);
    const m = u.map((d) => [
      d,
      d === r ? o : this.get(d)
    ]);
    this.clear();
    for (const [d, p] of m)
      this.set(d, p);
    return this;
  }
  with(n, r, o) {
    const s = new Ke(this);
    return s.insert(n, r, o), s;
  }
  before(n) {
    const r = X(this, Se).indexOf(n) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, r, o) {
    const s = X(this, Se).indexOf(n);
    if (s === -1)
      return this;
    const i = X(this, Se).indexOf(r), a = i !== -1 && i < s ? s - 1 : s;
    return this.insert(a, r, o);
  }
  after(n) {
    let r = X(this, Se).indexOf(n);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, r, o) {
    const s = X(this, Se).indexOf(n);
    if (s === -1)
      return this;
    const i = X(this, Se).indexOf(r), a = i !== -1 && i <= s ? s : s + 1;
    return this.insert(a, r, o);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return bn(this, Se, []), super.clear();
  }
  delete(n) {
    const r = super.delete(n);
    return r && X(this, Se).splice(X(this, Se).indexOf(n), 1), r;
  }
  deleteAt(n) {
    const r = this.keyAt(n);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(n) {
    const r = xo(X(this, Se), n);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(n) {
    const r = xo(X(this, Se), n);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(n) {
    return X(this, Se).indexOf(n);
  }
  keyAt(n) {
    return xo(X(this, Se), n);
  }
  from(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let s = o + r;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.at(s);
  }
  keyFrom(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let s = o + r;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.keyAt(s);
  }
  find(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return s;
      o++;
    }
  }
  findIndex(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return o;
      o++;
    }
    return -1;
  }
  filter(n, r) {
    const o = [];
    let s = 0;
    for (const i of this)
      Reflect.apply(n, r, [i, s, this]) && o.push(i), s++;
    return new Ke(o);
  }
  map(n, r) {
    const o = [];
    let s = 0;
    for (const i of this)
      o.push([i[0], Reflect.apply(n, r, [i, s, this])]), s++;
    return new Ke(o);
  }
  reduce(...n) {
    const [r, o] = n, s = n.length > 1;
    if (!s && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let i = 0, a = o;
    for (const l of this)
      i === 0 && !s ? a = l : a = Reflect.apply(r, this, [a, l, i, this]), i++;
    return a;
  }
  reduceRight(...n) {
    const [r, o] = n, s = n.length > 1;
    if (!s && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let i = o;
    for (let a = this.size - 1; a >= 0; a--) {
      const l = this.entryAt(a);
      a === this.size - 1 && !s ? i = l : i = Reflect.apply(r, this, [i, l, a, this]);
    }
    return i;
  }
  /**
   * Sorts the dictionary in place. This method mutates the dictionary and
   * returns a reference to the same object
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  sort(n) {
    if (typeof n != "function")
      throw new TypeError("OrderedDict.sort requires a compare function");
    const r = [...this.entries()].sort(n);
    this.clear();
    for (const [o, s] of r)
      this.set(o, s);
    return this;
  }
  /**
   * Returns a copy of the dictionary with its elements sorted.
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  toSorted(n) {
    if (typeof n != "function")
      throw new TypeError("OrderedDict.toSorted requires a compare function");
    const r = [...this.entries()].sort(n);
    return new Ke(r);
  }
  toReversed() {
    const n = new Ke();
    for (let r = this.size - 1; r >= 0; r--) {
      const o = this.keyAt(r), s = this.get(o);
      n.set(o, s);
    }
    return n;
  }
  toSpliced(...n) {
    const r = [...this.entries()];
    return r.splice(...n), new Ke(r);
  }
  slice(n, r) {
    const o = new Ke();
    for (const s of X(this, Se).slice(n, r))
      o.set(s, this.get(s));
    return o;
  }
  every(n, r) {
    let o = 0;
    for (const s of this) {
      if (!Reflect.apply(n, r, [s, o, this]))
        return !1;
      o++;
    }
    return !0;
  }
  some(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return !0;
      o++;
    }
    return !1;
  }
}, Se = new WeakMap(), Me(Ke, "OrderedDict"), Ke);
function xo(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = vp(e, t);
  return n === -1 ? void 0 : e[n];
}
Me(xo, "at");
function vp(e, t) {
  const n = e.length, r = qa(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
Me(vp, "toSafeIndex");
function qa(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Me(qa, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function pO(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ mr(t), [o, s] = n(t);
  o.displayName = e + "CollectionStableContextProvider";
  const [i, a] = n(t);
  i.displayName = e + "CollectionStatefulContextProvider";
  const l = /* @__PURE__ */ Me(({ state: S, ...E }) => S ? /* @__PURE__ */ f(m, { ...E, state: S }) : /* @__PURE__ */ f(u, { ...E }), "CollectionProvider");
  l.displayName = t;
  const u = /* @__PURE__ */ Me((S) => {
    const E = x();
    return /* @__PURE__ */ f(m, { ...S, state: E });
  }, "CollectionInit");
  u.displayName = e + "CollectionInit";
  const m = /* @__PURE__ */ Me((S) => {
    const { scope: E, children: N, state: R } = S, k = c.useRef(null), [_, T] = c.useState(
      null
    ), L = ze(k, T), [F, z] = R, A = c.useRef(
      new fo()
    ), W = c.useCallback(() => {
      const M = A.current;
      return wp(M) || M.sort(Co), M;
    }, []);
    return c.useEffect(() => {
      if (!_)
        return;
      const M = xp(() => {
        z(($) => {
          const O = $.toSorted(Co);
          return O.some(([Q], re) => $.keyAt(re) !== Q) ? O : $;
        });
      });
      return M.observe(_, {
        childList: !0,
        subtree: !0
      }), () => {
        M.disconnect();
      };
    }, [_, z]), /* @__PURE__ */ f(
      o,
      {
        scope: E,
        collectionElementRef: L,
        collectionElementRefObject: k,
        getCollection: W,
        setCollection: z,
        registryRef: A,
        children: /* @__PURE__ */ f(
          i,
          {
            scope: E,
            collectionElement: _,
            collection: F,
            children: N
          }
        )
      }
    );
  }, "CollectionProviderImpl");
  m.displayName = e + "CollectionProviderImpl";
  const d = e + "CollectionSlot", p = /* @__PURE__ */ Pe(d), h = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R } = S, k = s(d, N), _ = ze(E, k.collectionElementRef);
      return /* @__PURE__ */ f(p, { ref: _, children: R });
    }
  );
  h.displayName = d;
  const g = e + "CollectionItemSlot", v = "data-radix-collection-item", b = /* @__PURE__ */ Pe(g), w = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R, ...k } = S, _ = c.useRef(null), T = s(g, N), { setCollection: L, registryRef: F } = T, z = c.useRef(k);
      bp(z.current, k) || (z.current = k);
      const A = z.current, W = c.useCallback(
        (O) => {
          const B = F.current;
          O ? B.set(O, {
            ...z.current,
            element: O
          }) : _.current && B.delete(_.current);
        },
        [F]
      ), M = ze(E, W, _);
      Je(() => {
        const O = _.current, B = F.current;
        O && B.has(O) && B.set(O, { ...A, element: O });
      }, [A, F]);
      const $ = c.useRef(null);
      return c.useEffect(() => {
        const O = _.current, B = $.current;
        (B?.element ?? null) === O && (!O || B?.itemData === A) || ($.current = O ? { element: O, itemData: A } : null, L((Q) => {
          const re = new fo(Q);
          return B && B.element !== O && re.delete(B.element), O && re.set(O, { ...A, element: O }), re.sort(Co);
        }));
      }), c.useEffect(() => () => {
        const O = $.current;
        $.current = null, O && L((B) => {
          if (!B.has(O.element))
            return B;
          const Q = new fo(B);
          return Q.delete(O.element), Q;
        });
      }, [L]), /* @__PURE__ */ f(b, { [v]: "", ref: M, children: R });
    }
  );
  w.displayName = g;
  function x() {
    return c.useState(new fo());
  }
  Me(x, "useInitCollection");
  function y(S) {
    const { collection: E } = a(e + "CollectionConsumer", S);
    return E;
  }
  Me(y, "useCollection");
  function C(S) {
    const { getCollection: E } = s(e + "CollectionConsumer", S);
    return E;
  }
  return Me(C, "useGetCollection"), [
    { Provider: l, Slot: h, ItemSlot: w },
    {
      createCollectionScope: r,
      useCollection: y,
      useGetCollection: C,
      useInitCollection: x
    }
  ];
}
Me(pO, "createCollection");
function bp(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
Me(bp, "shallowEqual");
function yp(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Me(yp, "isElementPreceding");
function wp(e) {
  let t;
  for (const n of e.keys()) {
    if (t) {
      const r = t.compareDocumentPosition(n);
      if (!(r & Node.DOCUMENT_POSITION_DISCONNECTED) && r & Node.DOCUMENT_POSITION_PRECEDING)
        return !1;
    }
    t = n;
  }
  return !0;
}
Me(wp, "isInDocumentOrder");
function Co(e, t) {
  return !e[1].element || !t[1].element ? 0 : yp(e[1].element, t[1].element) ? -1 : 1;
}
Me(Co, "sortByDocumentPosition");
function xp(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
Me(xp, "getChildListObserver");
var hO = Object.defineProperty, gO = (e, t) => hO(e, "name", { value: t, configurable: !0 }), vO = {
  LTR: "ltr"
}, bO = c.createContext(void 0);
function Za(e) {
  const t = c.useContext(bO);
  return e || t || vO.LTR;
}
gO(Za, "useDirection");
var yO = Object.defineProperty, wO = (e, t) => yO(e, "name", { value: t, configurable: !0 }), xO = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], yt = xO.reduce((e, t) => {
  const n = /* @__PURE__ */ Pe(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Qa(e, t) {
  e && Ve.flushSync(() => e.dispatchEvent(t));
}
wO(Qa, "dispatchDiscreteCustomEvent");
var CO = Object.defineProperty, SO = (e, t) => CO(e, "name", { value: t, configurable: !0 }), Xl = c[" useInsertionEffect ".trim().toString()];
function jt(e) {
  const t = c.useRef(e);
  return typeof Xl == "function" ? Xl(() => {
    t.current = e;
  }) : Je(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
SO(jt, "useCallbackRef");
var EO = Object.defineProperty, Ie = (e, t) => EO(e, "name", { value: t, configurable: !0 }), mi = "dismissableLayer.update", PO = "dismissableLayer.pointerDownOutside", NO = "dismissableLayer.focusOutside", ql, Cp = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), OO = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ie(function(t, n) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: o = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...m
    } = t, d = c.useContext(Cp), [p, h] = c.useState(null), g = p?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), b = ze(n, h), w = Array.from(d.layers), [x] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), y = x ? w.indexOf(x) : -1, C = p ? w.indexOf(p) : -1, P = d.layersWithOutsidePointerEventsDisabled.size > 0, S = C >= y, E = c.useRef(!1), N = Sp(
      (T) => {
        i?.(T), l?.(T), T.defaultPrevented || u?.();
      },
      {
        ownerDocument: g,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: E,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: c.useCallback(
          (T) => {
            if (!(T instanceof Node))
              return !1;
            const L = [...d.branches].some(
              (F) => F.contains(T)
            );
            return S && !L;
          },
          [d.branches, S]
        )
      }
    ), R = Ep((T) => {
      if (o && E.current)
        return;
      const L = T.target;
      [...d.branches].some((z) => z.contains(L)) || (a?.(T), l?.(T), T.defaultPrevented || u?.());
    }, g), k = p ? C === w.length - 1 : !1, _ = jt((T) => {
      T.key === "Escape" && (s?.(T), !T.defaultPrevented && u && (T.preventDefault(), u()));
    });
    return c.useEffect(() => {
      if (k)
        return g.addEventListener("keydown", _, { capture: !0 }), () => g.removeEventListener("keydown", _, { capture: !0 });
    }, [g, k, _]), c.useEffect(() => {
      if (p)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (ql = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), pi(), () => {
          r && (d.layersWithOutsidePointerEventsDisabled.delete(p), d.layersWithOutsidePointerEventsDisabled.size === 0 && (g.body.style.pointerEvents = ql));
        };
    }, [p, g, r, d]), c.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), pi());
    }, [p, d]), c.useEffect(() => {
      const T = /* @__PURE__ */ Ie(() => v({}), "handleUpdate");
      return document.addEventListener(mi, T), () => document.removeEventListener(mi, T);
    }, []), /* @__PURE__ */ f(
      yt.div,
      {
        ...m,
        ref: b,
        style: {
          pointerEvents: P ? S ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: xe(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: xe(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: xe(
          t.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function RO() {
  const e = c.useContext(Cp), [t, n] = c.useState(null);
  return c.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
Ie(RO, "useDismissableLayerSurface");
var DO = /* @__PURE__ */ Ie(() => !0, "IS_TRUE");
function Sp(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = DO
  } = t, a = jt(e), l = c.useRef(!1), u = c.useRef(!1), m = c.useRef(/* @__PURE__ */ new Map()), d = c.useRef(() => {
  });
  return c.useEffect(() => {
    function p() {
      u.current = !1, o.current = !1, m.current.clear();
    }
    Ie(p, "resetOutsideInteraction");
    function h() {
      return Array.from(m.current.values()).some(Boolean);
    }
    Ie(h, "isOutsideInteractionIntercepted");
    function g(y) {
      if (!u.current)
        return;
      const C = y.target;
      C instanceof Node && [...s].some((S) => S.contains(C)) || m.current.set(y.type, !0), y.type === "click" && window.setTimeout(() => {
        u.current && d.current();
      }, 0);
    }
    Ie(g, "handleInteractionCapture");
    function v(y) {
      u.current && m.current.set(y.type, !1);
    }
    Ie(v, "handleInteractionBubble");
    const b = /* @__PURE__ */ Ie((y) => {
      if (y.target && !l.current) {
        let C = function() {
          n.removeEventListener("click", d.current);
          const S = h();
          p(), S || Ja(
            PO,
            a,
            P,
            { discrete: !0 }
          );
        };
        if (Ie(C, "handleAndDispatchPointerDownOutsideEvent"), !i(y.target)) {
          n.removeEventListener("click", d.current), p(), l.current = !1;
          return;
        }
        const P = { originalEvent: y };
        u.current = !0, o.current = r && y.button === 0, m.current.clear(), !r || y.button !== 0 ? C() : (n.removeEventListener("click", d.current), d.current = C, n.addEventListener("click", d.current, { once: !0 }));
      } else
        n.removeEventListener("click", d.current), p();
      l.current = !1;
    }, "handlePointerDown"), w = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const y of w)
      n.addEventListener(y, g, !0), n.addEventListener(y, v);
    const x = window.setTimeout(() => {
      n.addEventListener("pointerdown", b);
    }, 0);
    return () => {
      window.clearTimeout(x), n.removeEventListener("pointerdown", b), n.removeEventListener("click", d.current);
      for (const y of w)
        n.removeEventListener(y, g, !0), n.removeEventListener(y, v);
    };
  }, [
    n,
    a,
    r,
    o,
    s,
    i
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ Ie(() => l.current = !0, "onPointerDownCapture")
  };
}
Ie(Sp, "usePointerDownOutside");
function Ep(e, t = globalThis?.document) {
  const n = jt(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = /* @__PURE__ */ Ie((s) => {
      s.target && !r.current && Ja(NO, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ Ie(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ Ie(() => r.current = !1, "onBlurCapture")
  };
}
Ie(Ep, "useFocusOutside");
function pi() {
  const e = new CustomEvent(mi);
  document.dispatchEvent(e);
}
Ie(pi, "dispatchUpdate");
function Ja(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Qa(o, s) : o.dispatchEvent(s);
}
Ie(Ja, "handleAndDispatchCustomEvent");
var TO = Object.defineProperty, ec = (e, t) => TO(e, "name", { value: t, configurable: !0 }), mo = 0, Vn = null;
function MO(e) {
  return tc(), e.children;
}
ec(MO, "FocusGuards");
function tc() {
  c.useEffect(() => {
    Vn || (Vn = { start: hi(), end: hi() });
    const { start: e, end: t } = Vn;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), mo++, () => {
      mo === 1 && (Vn?.start.remove(), Vn?.end.remove(), Vn = null), mo = Math.max(0, mo - 1);
    };
  }, []);
}
ec(tc, "useFocusGuards");
function hi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
ec(hi, "createFocusGuard");
var kO = Object.defineProperty, Ne = (e, t) => kO(e, "name", { value: t, configurable: !0 }), Hs = "focusScope.autoFocusOnMount", Vs = "focusScope.autoFocusOnUnmount", Zl = { bubbles: !1, cancelable: !0 }, AO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Ne(function(t, n) {
    const {
      loop: r = !1,
      trapped: o = !1,
      branches: s,
      onMountAutoFocus: i,
      onUnmountAutoFocus: a,
      ...l
    } = t, [u, m] = c.useState(null), d = jt(i), p = jt(a), h = c.useRef(null), g = ze(n, m), v = c.useRef(s);
    c.useEffect(() => {
      v.current = s;
    });
    const b = c.useCallback(
      (y) => y ? u?.contains(y) ? !0 : !!v.current?.some((C) => C.contains(y)) : !1,
      [u]
    ), w = c.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    c.useEffect(() => {
      if (o) {
        let y = function(E) {
          if (w.paused || !u) return;
          const N = E.target;
          b(N) ? h.current = N : $t(h.current, { select: !0 });
        }, C = function(E) {
          if (w.paused || !u) return;
          const N = E.relatedTarget;
          N !== null && (b(N) || $t(h.current, { select: !0 }));
        }, P = function(E) {
          if (document.activeElement === document.body)
            for (const R of E)
              R.removedNodes.length > 0 && $t(u);
        };
        Ne(y, "handleFocusIn"), Ne(C, "handleFocusOut"), Ne(P, "handleMutations"), document.addEventListener("focusin", y), document.addEventListener("focusout", C);
        const S = new MutationObserver(P);
        return u && S.observe(u, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", y), document.removeEventListener("focusout", C), S.disconnect();
        };
      }
    }, [o, u, w.paused, b]), c.useEffect(() => {
      if (u) {
        Ql.add(w);
        const y = document.activeElement;
        if (!u.contains(y)) {
          const P = new CustomEvent(Hs, Zl);
          u.addEventListener(Hs, d), u.dispatchEvent(P), P.defaultPrevented || (Dp(Ip(nc(u)), { select: !0 }), document.activeElement === y && $t(u));
        }
        return () => {
          u.removeEventListener(Hs, d);
          const P = u.ownerDocument, S = CustomEvent;
          setTimeout(() => {
            const E = new S(Vs, Zl);
            u.addEventListener(Vs, p), u.dispatchEvent(E), E.defaultPrevented || $t(y ?? P.body, { select: !0 }), u.removeEventListener(Vs, p), Ql.remove(w);
          }, 0);
        };
      }
    }, [u, d, p, w]);
    const x = c.useCallback(
      (y) => {
        if (!r && !o || w.paused) return;
        const C = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, P = document.activeElement;
        if (C && P) {
          const S = y.currentTarget, [E, N] = Tp(S);
          E && N ? !y.shiftKey && P === N ? (y.preventDefault(), r && $t(E, { select: !0 })) : y.shiftKey && P === E && (y.preventDefault(), r && $t(N, { select: !0 })) : P === S && y.preventDefault();
        }
      },
      [r, o, w.paused]
    );
    return /* @__PURE__ */ f(yt.div, { tabIndex: -1, ...l, ref: g, onKeyDown: x });
  }, "FocusScope")
), Pp = c.createContext(null);
function Np({ registry: e, children: t }) {
  return e ? /* @__PURE__ */ f(Pp.Provider, { value: e, children: t }) : t;
}
Ne(Np, "FocusScopeBranchProvider");
function Op() {
  const [e, t] = c.useState([]), n = c.useMemo(
    () => ({
      add: /* @__PURE__ */ Ne((r) => t((o) => o.includes(r) ? o : [...o, r]), "add"),
      remove: /* @__PURE__ */ Ne((r) => t((o) => o.filter((s) => s !== r)), "remove")
    }),
    []
  );
  return { nodes: e, registry: n };
}
Ne(Op, "useFocusScopeBranchRegistry");
function Rp(e) {
  const t = c.useContext(Pp);
  c.useEffect(() => {
    if (!(!e || !t))
      return t.add(e), () => t.remove(e);
  }, [e, t]);
}
Ne(Rp, "useFocusScopeBranch");
function Dp(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ($t(r, { select: t }), document.activeElement !== n) return;
}
Ne(Dp, "focusFirst");
function Tp(e) {
  const t = nc(e), n = gi(t, e), r = gi(t.reverse(), e);
  return [n, r];
}
Ne(Tp, "getTabbableEdges");
function nc(e) {
  const t = [], r = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Ne((o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
Ne(nc, "getTabbableCandidates");
function gi(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Mp(r, { upTo: t })))
      return r;
}
Ne(gi, "findVisible");
function Mp(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
Ne(Mp, "isHidden");
function kp(e) {
  return e.tagName === "INPUT" && typeof e.select == "function";
}
Ne(kp, "isSelectableInput");
function $t(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = (e.ownerDocument ?? document).activeElement;
    e.focus({ preventScroll: !0 }), e !== r && kp(e) && t && e.select();
  }
}
Ne($t, "focus");
var Ql = Ap();
function Ap() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = vi(e, t), e.unshift(t);
    },
    remove(t) {
      e = vi(e, t), e[0]?.resume();
    }
  };
}
Ne(Ap, "createFocusScopesStack");
function vi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
Ne(vi, "arrayRemove");
function Ip(e) {
  return e.filter((t) => t.tagName !== "A");
}
Ne(Ip, "removeLinks");
var IO = Object.defineProperty, _O = (e, t) => IO(e, "name", { value: t, configurable: !0 }), $O = c[" useId ".trim().toString()] || (() => {
}), FO = 0;
function _p(e) {
  const [t, n] = c.useState($O());
  return Je(() => {
    e || n((r) => r ?? String(FO++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
_O(_p, "useId");
var LO = Object.defineProperty, WO = (e, t) => LO(e, "name", { value: t, configurable: !0 });
function $p(e) {
  const [t, n] = c.useState(void 0);
  return Je(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      let r = 0;
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        window.cancelAnimationFrame(r), r = window.requestAnimationFrame(() => {
          let a, l;
          if ("borderBoxSize" in i) {
            const u = i.borderBoxSize, m = Array.isArray(u) ? u[0] : u;
            a = m.inlineSize, l = m.blockSize;
          } else
            a = e.offsetWidth, l = e.offsetHeight;
          n({ width: a, height: l });
        });
      });
      return o.observe(e, { box: "border-box" }), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    } else
      n(void 0);
  }, [e]), t;
}
WO($p, "useSize");
var zO = Object.defineProperty, nn = (e, t) => zO(e, "name", { value: t, configurable: !0 }), Jl = {
  Partial: "partial"
}, eu = {
  Optimized: "optimized",
  Always: "always"
}, Fp = "Popper", [Lp, Wp] = /* @__PURE__ */ mr(Fp), [BO, zp] = Lp(Fp), HO = /* @__PURE__ */ nn((e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null), [s, i] = c.useState(void 0);
  return /* @__PURE__ */ f(
    BO,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
}, "Popper"), VO = "PopperAnchor", jO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ nn(function(t, n) {
    const { __scopePopper: r, virtualRef: o, ...s } = t, i = zp(VO, r), a = c.useRef(null), l = i.onAnchorChange, u = c.useCallback(
      (v) => {
        a.current = v, v && l(v);
      },
      [l]
    ), m = ze(n, u), d = c.useRef(null);
    c.useEffect(() => {
      if (!o)
        return;
      const v = d.current;
      d.current = o.current, v !== d.current && l(d.current);
    });
    const p = i.placementState && as(i.placementState), h = p?.[0], g = p?.[1];
    return o ? null : /* @__PURE__ */ f(
      yt.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": g,
        ...s,
        ref: m
      }
    );
  }, "PopperAnchor")
), Bp = "PopperContent", [UO, EI] = Lp(Bp), YO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ nn(function(t, n) {
    const {
      __scopePopper: r,
      side: o = "bottom",
      sideOffset: s = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: l = 0,
      avoidCollisions: u = !0,
      collisionBoundary: m = [],
      collisionPadding: d = 0,
      sticky: p = Jl.Partial,
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = eu.Optimized,
      onPlaced: v,
      ...b
    } = t, w = zp(Bp, r), [x, y] = c.useState(null), C = ze(n, y), [P, S] = c.useState(null), E = $p(P), N = E?.width ?? 0, R = E?.height ?? 0, k = o + (i !== "center" ? "-" + i : ""), _ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, T = Array.isArray(m) ? m : [m], L = T.length > 0, F = {
      padding: _,
      boundary: T.filter(Hp),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: z, floatingStyles: A, placement: W, isPositioned: M, middlewareData: $ } = xa({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: k,
      whileElementsMounted: /* @__PURE__ */ nn((...K) => wa(...K, {
        animationFrame: g === eu.Always
      }), "whileElementsMounted"),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Ca({ mainAxis: s + R, alignmentAxis: a }),
        u && Sa({
          mainAxis: !0,
          crossAxis: !1,
          // Spread rather than passing `limiter: undefined`, which
          // `exactOptionalPropertyTypes` rejects for Floating UI's optional option.
          ...p === Jl.Partial ? { limiter: Ea() } : {},
          ...F
        }),
        u && Pa({ ...F }),
        Na({
          ...F,
          apply: /* @__PURE__ */ nn(({ elements: K, rects: ee, availableWidth: se, availableHeight: ae }) => {
            const { width: me, height: ye } = ee.reference, ve = K.floating.style;
            ve.setProperty("--radix-popper-available-width", `${se}px`), ve.setProperty("--radix-popper-available-height", `${ae}px`), ve.setProperty("--radix-popper-anchor-width", `${me}px`), ve.setProperty("--radix-popper-anchor-height", `${ye}px`);
          }, "apply")
        }),
        P && Ra({ element: P, padding: l }),
        GO({ arrowWidth: N, arrowHeight: R }),
        h && // `hide` detects whether the anchor (reference) is clipped, so when
        // no explicit `collisionBoundary` is set we omit `boundary` entirely
        // and fall back to Floating UI's default clipping ancestors (e.g. a
        // scrollable menu). This lets an occluded submenu hide once its anchor
        // scrolls out of view (#3237). The collision/size middlewares
        // deliberately keep the viewport-based default to avoid clamping
        // content rendered inside transformed or overflow-clipping portal
        // containers. The key is omitted rather than set to `undefined`
        // because `exactOptionalPropertyTypes` rejects the explicit value.
        Oa(
          L ? { strategy: "referenceHidden", ...F } : {
            strategy: "referenceHidden",
            padding: F.padding,
            altBoundary: F.altBoundary
          }
        )
      ]
    }), O = w.setPlacementState;
    Je(() => (O(W), () => {
      O(void 0);
    }), [W, O]);
    const [B, Q] = as(W), re = jt(v);
    Je(() => {
      M && re?.();
    }, [M, re]);
    const be = $.arrow?.x, J = $.arrow?.y, H = $.arrow?.centerOffset !== 0, [j, oe] = c.useState();
    return Je(() => {
      x && oe(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ f(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...A,
          transform: M ? A.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: j,
          "--radix-popper-transform-origin": [
            $.transformOrigin?.x,
            $.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...$.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ f(
          UO,
          {
            scope: r,
            placedSide: B,
            placedAlign: Q,
            onArrowChange: S,
            arrowX: be,
            arrowY: J,
            shouldHideArrow: H,
            children: /* @__PURE__ */ f(
              yt.div,
              {
                "data-side": B,
                "data-align": Q,
                ...b,
                ref: C,
                style: {
                  ...b.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: M ? b.style?.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function Hp(e) {
  return e !== null;
}
nn(Hp, "isNotNull");
var GO = /* @__PURE__ */ nn((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, m] = as(n), d = { start: "0%", center: "50%", end: "100%" }[m], p = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let g = "", v = "";
    return u === "bottom" ? (g = i ? d : `${p}px`, v = `${-l}px`) : u === "top" ? (g = i ? d : `${p}px`, v = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, v = i ? d : `${h}px`) : u === "left" && (g = `${r.floating.width + l}px`, v = i ? d : `${h}px`), { data: { x: g, y: v } };
  }
}), "transformOrigin");
function as(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
nn(as, "getSideAndAlignFromPlacement");
var KO = Object.defineProperty, XO = (e, t) => KO(e, "name", { value: t, configurable: !0 }), qO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ XO(function(t, n) {
    const { container: r, ...o } = t, [s, i] = c.useState(!1);
    Je(() => i(!0), []);
    const a = r || s && globalThis?.document?.body;
    return a ? Ve.createPortal(/* @__PURE__ */ f(yt.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), ZO = Object.defineProperty, Ut = (e, t) => ZO(e, "name", { value: t, configurable: !0 });
function Vp(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
Ut(Vp, "useStateMachine");
var jp = /* @__PURE__ */ Ut((e) => {
  const { present: t, children: n } = e, r = Up(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = Yp(r.ref, Gp(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
}, "Presence");
function Up(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = c.useRef(void 0), a = e ? "mounted" : "unmounted", [l, u] = Vp(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    l === "mounted" ? (s.current = i.current ?? Yn(r.current), i.current = void 0) : s.current = "none";
  }, [l]), Je(() => {
    const m = r.current, d = o.current;
    if (d !== e) {
      const h = s.current, g = Yn(m);
      e ? (i.current = g, u("MOUNT")) : g === "none" || m?.display === "none" ? u("UNMOUNT") : u(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), Je(() => {
    if (t) {
      let m;
      const d = t.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ Ut((g) => {
        const b = Yn(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && b && (u("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Ut((g) => {
        g.target === t && (s.current = Yn(r.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(m), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: c.useCallback((m) => {
      if (m) {
        const d = getComputedStyle(m);
        r.current = d, i.current = Yn(d);
      } else
        r.current = null;
      n(m);
    }, [])
  };
}
Ut(Up, "usePresence");
function bi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ut(bi, "setRef");
function Yp(...e) {
  const t = c.useRef(e);
  return t.current = e, c.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((i) => {
      const a = bi(i, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == "function" ? a() : bi(r[i], null);
        }
      };
  }, []);
}
Ut(Yp, "useStableComposedRefs");
function Yn(e) {
  return e?.animationName || "none";
}
Ut(Yn, "getAnimationName");
function Gp(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ut(Gp, "getElementRef");
var QO = Object.defineProperty, JO = (e, t) => QO(e, "name", { value: t, configurable: !0 }), tu = c[" useEffectEvent ".trim().toString()], nu = c[" useInsertionEffect ".trim().toString()];
function Kp(e) {
  if (typeof tu == "function")
    return tu(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof nu == "function" ? nu(() => {
    t.current = e;
  }) : Je(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
JO(Kp, "useEffectEvent");
var eR = Object.defineProperty, Gr = (e, t) => eR(e, "name", { value: t, configurable: !0 }), tR = c[" useInsertionEffect ".trim().toString()] || Je;
function Xp({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Gr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = qp({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = Zp(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
Gr(Xp, "useControllableState");
function qp({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return tR(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
Gr(qp, "useUncontrolledState");
function Zp(e) {
  return typeof e == "function";
}
Gr(Zp, "isFunction");
var ru = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function nR(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = Kp(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === ru)
        return { ...b, state: w.state };
      const x = e(b, w);
      return l && !Object.is(x.state, b.state) && u(x.state), x;
    },
    ...m
  ), h = d.state, g = c.useRef(h);
  c.useEffect(() => {
    g.current !== h && (g.current = h, l || u(h));
  }, [h, g, l]);
  const v = c.useMemo(() => o !== void 0 ? { ...d, state: o } : d, [d, o]);
  return c.useEffect(() => {
    l && !Object.is(o, d.state) && p({ type: ru, state: o });
  }, [o, d.state, l]), [v, p];
}
Gr(nR, "useControllableStateReducer");
var rR = Object.defineProperty, rc = (e, t) => rR(e, "name", { value: t, configurable: !0 }), js = !1;
function Qp() {
  const [e, t] = c.useState(js);
  return c.useEffect(() => {
    js || (js = !0, t(!0));
  }, []), e;
}
rc(Qp, "useIsHydrated");
var Jp = c[" useSyncExternalStore ".trim().toString()];
function eh() {
  return () => {
  };
}
rc(eh, "subscribe");
function th() {
  return Jp(
    eh,
    () => !0,
    () => !1
  );
}
rc(th, "useIsHydratedModern");
var oR = typeof Jp == "function" ? th : Qp, sR = Object.defineProperty, In = (e, t) => sR(e, "name", { value: t, configurable: !0 }), Us = "rovingFocusGroup.onEntryFocus", iR = { bubbles: !1, cancelable: !0 }, cs = "RovingFocusGroup", [yi, nh, aR] = /* @__PURE__ */ Xa(cs), [cR, rh] = /* @__PURE__ */ mr(
  cs,
  [aR]
), ou = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, lR = {
  RTL: "rtl"
}, [uR, dR] = cR(cs), fR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ In(function(t, n) {
    return /* @__PURE__ */ f(yi.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(yi.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(mR, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), mR = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ In(function(t, n) {
  const {
    __scopeRovingFocusGroup: r,
    orientation: o,
    loop: s = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: u,
    onEntryFocus: m,
    preventScrollOnEntryFocus: d = !1,
    ...p
  } = t, h = c.useRef(null), g = ze(n, h), v = Za(i), [b, w] = Xp({
    prop: a,
    defaultProp: l ?? null,
    onChange: u,
    caller: cs
  }), [x, y] = c.useState(!1), C = jt(m), P = nh(r), S = c.useRef(!1), [E, N] = c.useState(0);
  return c.useEffect(() => {
    const R = h.current;
    if (R)
      return R.addEventListener(Us, C), () => R.removeEventListener(Us, C);
  }, [C]), /* @__PURE__ */ f(
    uR,
    {
      scope: r,
      orientation: o,
      dir: v,
      loop: s,
      currentTabStopId: b,
      onItemFocus: c.useCallback(
        (R) => w(R),
        [w]
      ),
      onItemShiftTab: c.useCallback(() => y(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => N((R) => R + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => N((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ f(
        yt.div,
        {
          tabIndex: x || E === 0 ? -1 : 0,
          "data-orientation": o,
          ...p,
          ref: g,
          style: { outline: "none", ...t.style },
          onMouseDown: xe(t.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: xe(t.onFocus, (R) => {
            const k = !S.current;
            if (R.target === R.currentTarget && k && !x) {
              const _ = new CustomEvent(Us, iR);
              if (R.currentTarget.dispatchEvent(_), !_.defaultPrevented) {
                const T = P().filter((W) => W.focusable), L = T.find((W) => W.active), F = T.find((W) => W.id === b), A = [L, F, ...T].filter(
                  Boolean
                ).map((W) => W.ref.current);
                oc(A, d);
              }
            }
            S.current = !1;
          }),
          onBlur: xe(t.onBlur, () => y(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), pR = "RovingFocusGroupItem", hR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ In(function(t, n) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: o = !0,
      active: s = !1,
      tabStopId: i,
      children: a,
      ...l
    } = t, u = _p(), m = i || u, d = dR(pR, r), p = d.currentTabStopId === m, h = nh(r), { onFocusableItemAdd: g, onFocusableItemRemove: v, currentTabStopId: b } = d, w = oR();
    return Je(() => {
      if (!(!w || !o))
        return g(), () => v();
    }, [w, o, g, v]), c.useEffect(() => {
      if (!(w || !o))
        return g(), () => v();
    }, [w, o, g, v]), /* @__PURE__ */ f(
      yi.ItemSlot,
      {
        scope: r,
        id: m,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ f(
          yt.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": d.orientation,
            ...l,
            ref: n,
            onMouseDown: xe(t.onMouseDown, (x) => {
              o ? d.onItemFocus(m) : x.preventDefault();
            }),
            onFocus: xe(t.onFocus, () => d.onItemFocus(m)),
            onKeyDown: xe(t.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const y = sh(x, d.orientation, d.dir);
              if (y !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let P = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") P.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && P.reverse();
                  const S = P.indexOf(x.currentTarget);
                  P = d.loop ? ih(P, S + 1) : P.slice(S + 1);
                }
                setTimeout(() => oc(P));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: p, hasTabStop: b != null }) : a
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), gR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function oh(e, t) {
  return t !== lR.RTL ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
In(oh, "getDirectionAwareKey");
function sh(e, t, n) {
  const r = oh(e.key, n);
  if (!(t === ou.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === ou.Horizontal && ["ArrowUp", "ArrowDown"].includes(r)))
    return gR[r];
}
In(sh, "getFocusIntent");
function oc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
In(oc, "focusFirst");
function ih(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
In(ih, "wrapArray");
var vR = Object.defineProperty, he = (e, t) => vR(e, "name", { value: t, configurable: !0 }), bR = ["Enter", " "], yR = ["ArrowDown", "PageUp", "Home"], ah = ["ArrowUp", "PageDown", "End"], wR = [...yR, ...ah], ls = "Menu", [wi, xR, CR] = /* @__PURE__ */ Xa(ls), [_n, ch] = /* @__PURE__ */ mr(ls, [
  CR,
  Wp,
  rh
]), sc = Wp(), lh = rh(), [SR, Kr] = _n(ls), [ER, ic] = _n(ls), PR = /* @__PURE__ */ he((e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: i = !0 } = e, a = sc(t), [l, u] = c.useState(null), m = c.useRef(!1), d = jt(s), p = Za(o);
  return c.useEffect(() => {
    const h = /* @__PURE__ */ he(() => {
      m.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, "handleKeyDown"), g = /* @__PURE__ */ he(() => m.current = !1, "handlePointer");
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), c.useEffect(() => {
    if (!n)
      return;
    const h = /* @__PURE__ */ he(() => d(!1), "handleBlur");
    return window.addEventListener("blur", h), () => window.removeEventListener("blur", h);
  }, [n, d]), /* @__PURE__ */ f(HO, { ...a, children: /* @__PURE__ */ f(
    SR,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ f(
        ER,
        {
          scope: t,
          onClose: c.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: m,
          dir: p,
          modal: i,
          children: r
        }
      )
    }
  ) });
}, "Menu"), NR = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const { __scopeMenu: r, ...o } = t, s = sc(r);
    return /* @__PURE__ */ f(jO, { ...s, ...o, ref: n });
  }, "MenuAnchor")
), uh = "MenuPortal", [OR, RR] = _n(uh, {
  forceMount: void 0
}), DR = /* @__PURE__ */ he((e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Kr(uh, t);
  return /* @__PURE__ */ f(OR, { scope: t, forceMount: n, children: /* @__PURE__ */ f(jp, { present: n || s.open, children: /* @__PURE__ */ f(qO, { asChild: !0, container: o, children: r }) }) });
}, "MenuPortal"), rn = "MenuContent", [TR, dh] = _n(rn), MR = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const r = RR(rn, t.__scopeMenu), { forceMount: o = r.forceMount, ...s } = t, i = Kr(rn, t.__scopeMenu), a = ic(rn, t.__scopeMenu);
    return /* @__PURE__ */ f(wi.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ f(jp, { present: o || i.open, children: /* @__PURE__ */ f(wi.Slot, { scope: t.__scopeMenu, children: a.modal ? /* @__PURE__ */ f(kR, { ...s, ref: n }) : /* @__PURE__ */ f(AR, { ...s, ref: n }) }) }) });
  }, "MenuContent")
), kR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ he(function(t, n) {
    const r = Kr(rn, t.__scopeMenu), o = c.useRef(null), s = ze(n, o);
    return c.useEffect(() => {
      const i = o.current;
      if (i) return Jo(i);
    }, []), /* @__PURE__ */ f(
      fh,
      {
        ...t,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: xe(
          t.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), AR = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ he(function(t, n) {
  const r = Kr(rn, t.__scopeMenu);
  return /* @__PURE__ */ f(
    fh,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), IR = /* @__PURE__ */ Pe("MenuContent.ScrollLock"), fh = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ he(function(t, n) {
    const {
      __scopeMenu: r,
      loop: o = !1,
      trapFocus: s,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: l,
      onEntryFocus: u,
      onEscapeKeyDown: m,
      onPointerDownOutside: d,
      onFocusOutside: p,
      onInteractOutside: h,
      onDismiss: g,
      disableOutsideScroll: v,
      ...b
    } = t, w = Kr(rn, r), x = ic(rn, r), y = sc(r), C = lh(r), P = xR(r), [S, E] = c.useState(null), N = c.useRef(null), [R, k] = c.useState(null);
    Rp(R);
    const { nodes: _, registry: T } = Op(), L = !!(s || v), F = ze(
      n,
      N,
      w.onContentChange,
      k
    ), z = c.useRef(0), A = c.useRef(""), W = c.useRef(0), M = c.useRef(null), $ = c.useRef("right"), O = c.useRef(0), B = c.useMemo(
      () => v ? [N, ..._.map((H) => ({ current: H }))] : [],
      [N, _, v]
    ), Q = v ? Wr : c.Fragment, re = v ? {
      as: IR,
      allowPinchZoom: !0,
      shards: B
    } : void 0, be = /* @__PURE__ */ he((H) => {
      const j = A.current + H, oe = P().filter((ve) => !ve.disabled), K = document.activeElement, ee = oe.find((ve) => ve.ref.current === K)?.textValue, se = oe.map((ve) => ve.textValue), ae = vh(se, j, ee), me = oe.find((ve) => ve.textValue === ae)?.ref.current;
      function ye(ve) {
        A.current = ve, window.clearTimeout(z.current), ve !== "" && (z.current = window.setTimeout(() => ye(""), 1e3));
      }
      he(ye, "updateSearch"), ye(j), me && setTimeout(() => me.focus());
    }, "handleTypeaheadSearch");
    c.useEffect(() => () => window.clearTimeout(z.current), []), tc();
    const J = c.useCallback((H) => $.current === M.current?.side && yh(H, M.current?.area), []);
    return /* @__PURE__ */ f(
      TR,
      {
        scope: r,
        searchRef: A,
        onItemEnter: c.useCallback(
          (H) => {
            J(H) && H.preventDefault();
          },
          [J]
        ),
        onItemLeave: c.useCallback(
          (H) => {
            J(H) || (N.current?.focus(), E(null));
          },
          [J]
        ),
        onTriggerLeave: c.useCallback(
          (H) => {
            J(H) && H.preventDefault();
          },
          [J]
        ),
        pointerGraceTimerRef: W,
        onPointerGraceIntentChange: c.useCallback((H) => {
          M.current = H;
        }, []),
        children: /* @__PURE__ */ f(Np, { registry: L ? T : null, children: /* @__PURE__ */ f(Q, { ...re, children: /* @__PURE__ */ f(
          AO,
          {
            asChild: !0,
            trapped: s,
            branches: _,
            onMountAutoFocus: xe(i, (H) => {
              H.preventDefault(), N.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ f(
              OO,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: m,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ f(
                  fR,
                  {
                    asChild: !0,
                    ...C,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: xe(u, (H) => {
                      x.isUsingKeyboardRef.current || H.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ f(
                      YO,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": mh(w.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...y,
                        ...b,
                        ref: F,
                        style: { outline: "none", ...b.style },
                        onKeyDown: xe(b.onKeyDown, (H) => {
                          const oe = H.target.closest("[data-radix-menu-content]") === H.currentTarget, K = H.ctrlKey || H.altKey || H.metaKey, ee = H.key.length === 1;
                          oe && (H.key === "Tab" && H.preventDefault(), !K && ee && be(H.key));
                          const se = N.current;
                          if (H.target !== se || !wR.includes(H.key)) return;
                          H.preventDefault();
                          const me = P().filter((ye) => !ye.disabled).map((ye) => ye.ref.current);
                          ah.includes(H.key) && me.reverse(), hh(me);
                        }),
                        onBlur: xe(t.onBlur, (H) => {
                          H.currentTarget.contains(H.target) || (window.clearTimeout(z.current), A.current = "");
                        }),
                        onPointerMove: xe(
                          t.onPointerMove,
                          $o((H) => {
                            const j = H.target, oe = O.current !== H.clientX;
                            if (H.currentTarget.contains(j) && oe) {
                              const K = H.clientX > O.current ? "right" : "left";
                              $.current = K, O.current = H.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) }) })
      }
    );
  }, "MenuContentImpl")
), _R = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ f(yt.div, { role: "group", ...o, ref: n });
  }, "MenuGroup")
), $R = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ f(yt.div, { ...o, ref: n });
  }, "MenuLabel")
), xi = "MenuItem", su = "menu.itemSelect", FR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ he(function(t, n) {
    const { disabled: r = !1, onSelect: o, ...s } = t, i = c.useRef(null), a = ic(xi, t.__scopeMenu), l = dh(xi, t.__scopeMenu), u = ze(n, i), m = c.useRef(!1), d = /* @__PURE__ */ he(() => {
      const p = i.current;
      if (!r && p) {
        const h = new CustomEvent(su, { bubbles: !0, cancelable: !0 });
        p.addEventListener(su, (g) => o?.(g), { once: !0 }), Qa(p, h), h.defaultPrevented ? m.current = !1 : a.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ f(
      LR,
      {
        ...s,
        ref: u,
        disabled: r,
        onClick: xe(t.onClick, d),
        onPointerDown: (p) => {
          t.onPointerDown?.(p), m.current = !0;
        },
        onPointerUp: xe(t.onPointerUp, (p) => {
          m.current || p.currentTarget?.click();
        }),
        onKeyDown: xe(t.onKeyDown, (p) => {
          r || p.target !== p.currentTarget || l.searchRef.current !== "" && p.key === " " || bR.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }, "MenuItem")
), LR = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const { __scopeMenu: r, disabled: o = !1, textValue: s, ...i } = t, a = dh(xi, r), l = lh(r), u = c.useRef(null), m = ze(n, u), [d, p] = c.useState(!1), [h, g] = c.useState("");
    return c.useEffect(() => {
      const v = u.current;
      v && g((v.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ f(
      wi.ItemSlot,
      {
        scope: r,
        disabled: o,
        textValue: s ?? h,
        children: /* @__PURE__ */ f(hR, { asChild: !0, ...l, focusable: !o, children: /* @__PURE__ */ f(
          yt.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...i,
            ref: m,
            onPointerMove: xe(
              t.onPointerMove,
              $o((v) => {
                o ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: xe(
              t.onPointerLeave,
              $o((v) => a.onItemLeave(v))
            ),
            onFocus: xe(t.onFocus, () => p(!0)),
            onBlur: xe(t.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), WR = "MenuRadioGroup", [PI, NI] = _n(
  WR,
  { value: void 0, onValueChange: /* @__PURE__ */ he(() => {
  }, "onValueChange") }
), zR = "MenuItemIndicator", [OI, RI] = _n(
  zR,
  { checked: !1 }
), BR = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ f(
      yt.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }, "MenuSeparator")
), HR = "MenuSub", [DI, TI] = _n(HR);
function mh(e) {
  return e ? "open" : "closed";
}
he(mh, "getOpenState");
function ph(e) {
  return e === "indeterminate";
}
he(ph, "isIndeterminate");
function VR(e) {
  return ph(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
he(VR, "getCheckedState");
function hh(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
he(hh, "focusFirst");
function gh(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
he(gh, "wrapArray");
function vh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = gh(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
he(vh, "getNextMatch");
function bh(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], u = a.x, m = a.y, d = l.x, p = l.y;
    m > r != p > r && n < (d - u) * (r - m) / (p - m) + u && (o = !o);
  }
  return o;
}
he(bh, "isPointInPolygon");
function yh(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return bh(n, t);
}
he(yh, "isPointerInGraceArea");
function $o(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
he($o, "whenMouse");
var jR = Object.defineProperty, UR = (e, t) => jR(e, "name", { value: t, configurable: !0 }), YR = c[" useId ".trim().toString()] || (() => {
}), GR = 0;
function Ci(e) {
  const [t, n] = c.useState(YR());
  return Ga(() => {
    e || n((r) => r ?? String(GR++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
UR(Ci, "useId");
var KR = Object.defineProperty, pn = (e, t) => KR(e, "name", { value: t, configurable: !0 }), ac = "DropdownMenu", [XR, MI] = /* @__PURE__ */ ip(
  ac,
  [ch]
), hn = ch(), [qR, wh] = XR(ac), ZR = /* @__PURE__ */ pn((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: i,
    modal: a = !0
  } = e, l = hn(t), u = c.useRef(null), [m, d] = lp({
    prop: o,
    defaultProp: s ?? !1,
    onChange: i,
    caller: ac
  });
  return /* @__PURE__ */ f(
    qR,
    {
      scope: t,
      triggerId: Ci(),
      triggerRef: u,
      contentId: Ci(),
      open: m,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((p) => !p), [d]),
      modal: a,
      children: /* @__PURE__ */ f(PR, { ...l, open: m, onOpenChange: d, dir: r, modal: a, children: n })
    }
  );
}, "DropdownMenu"), QR = "DropdownMenuTrigger", JR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pn(function(t, n) {
    const { __scopeDropdownMenu: r, disabled: o = !1, ...s } = t, i = wh(QR, r), a = hn(r), l = sp(n, i.triggerRef);
    return /* @__PURE__ */ f(NR, { asChild: !0, ...a, children: /* @__PURE__ */ f(
      iO.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...s,
        ref: l,
        onPointerDown: kr(t.onPointerDown, (u) => {
          !o && u.button === 0 && u.ctrlKey === !1 && (i.onOpenToggle(), i.open || u.preventDefault());
        }),
        onKeyDown: kr(t.onKeyDown, (u) => {
          o || (["Enter", " "].includes(u.key) && i.onOpenToggle(), u.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), eD = /* @__PURE__ */ pn((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = hn(t);
  return /* @__PURE__ */ f(DR, { ...r, ...n });
}, "DropdownMenuPortal"), tD = "DropdownMenuContent", nD = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pn(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, s = wh(tD, r), i = hn(r), a = c.useRef(!1);
    return /* @__PURE__ */ f(
      MR,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ...o,
        ref: n,
        onCloseAutoFocus: kr(t.onCloseAutoFocus, (l) => {
          a.current || s.triggerRef.current?.focus(), a.current = !1, l.preventDefault();
        }),
        onInteractOutside: kr(t.onInteractOutside, (l) => {
          const u = l.detail.originalEvent, m = u.button === 0 && u.ctrlKey === !0, d = u.button === 2 || m;
          (!s.modal || d) && (a.current = !0);
        }),
        style: {
          ...t.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }, "DropdownMenuContent")
), rD = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pn(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, s = hn(r);
    return /* @__PURE__ */ f(_R, { ...s, ...o, ref: n });
  }, "DropdownMenuGroup")
), oD = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pn(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, s = hn(r);
    return /* @__PURE__ */ f($R, { ...s, ...o, ref: n });
  }, "DropdownMenuLabel")
), sD = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pn(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, s = hn(r);
    return /* @__PURE__ */ f(FR, { ...s, ...o, ref: n });
  }, "DropdownMenuItem")
), iD = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ pn(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, s = hn(r);
  return /* @__PURE__ */ f(BR, { ...s, ...o, ref: n });
}, "DropdownMenuSeparator"));
const kI = ZR, AI = JR, II = rD, aD = c.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f(eD, { children: /* @__PURE__ */ f(
  nD,
  {
    ref: r,
    sideOffset: t,
    className: I(
      "z-[9999] min-w-[12rem] overflow-hidden rounded-md border border-border bg-surface p-1 text-text-base shadow-lg",
      e
    ),
    ...n
  }
) }));
aD.displayName = "DropdownMenuContent";
const cD = c.forwardRef(({ className: e, destructive: t = !1, ...n }, r) => /* @__PURE__ */ f(
  sD,
  {
    ref: r,
    className: I(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t ? "text-error-fg data-[highlighted]:bg-error-bg" : "text-text-base data-[highlighted]:bg-subtle",
      e
    ),
    ...n
  }
));
cD.displayName = "DropdownMenuItem";
const lD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  oD,
  {
    ref: n,
    className: I("px-2 py-1.5 text-xs font-medium text-text-muted", e),
    ...t
  }
));
lD.displayName = "DropdownMenuLabel";
const uD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  iD,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
uD.displayName = "DropdownMenuSeparator";
function _I({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: o,
  ...s
}) {
  return /* @__PURE__ */ D(
    "div",
    {
      className: I(
        "flex flex-col items-center justify-center text-center py-12 px-6 gap-4",
        o
      ),
      ...s,
      children: [
        e && /* @__PURE__ */ f("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-databeez-primary/10", children: /* @__PURE__ */ f(e, { className: "h-6 w-6 text-databeez-primary" }) }),
        /* @__PURE__ */ D("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f("p", { className: "font-semibold text-text-base", children: t }),
          n && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted max-w-sm", children: n })
        ] }),
        r && /* @__PURE__ */ f("div", { children: r })
      ]
    }
  );
}
const dD = [
  "prose prose-sm max-w-none",
  "prose-headings:text-text-base",
  "prose-p:text-text-base",
  "prose-strong:text-text-base",
  "prose-li:text-text-base",
  "prose-a:text-databeez-primary",
  "prose-code:text-databeez-primary prose-code:bg-subtle prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs",
  "prose-pre:bg-subtle prose-pre:border prose-pre:border-border prose-pre:rounded-lg",
  "prose-table:text-text-base",
  "prose-th:text-text-base prose-th:border prose-th:border-border prose-th:px-2 prose-th:py-1",
  "prose-td:text-text-base prose-td:border prose-td:border-border prose-td:px-2 prose-td:py-1"
].join(" "), fD = c.forwardRef(
  ({ children: e, className: t }, n) => /* @__PURE__ */ f("div", { ref: n, className: I(dD, t), children: e })
);
fD.displayName = "MarkdownContent";
function $I({
  content: e,
  role: t,
  onRegenerate: n,
  onFeedback: r,
  showActions: o,
  children: s,
  className: i
}) {
  const a = t === "user", [l, u] = c.useState(null), m = (d) => {
    const p = l === d ? null : d;
    u(p), r?.(p);
  };
  return /* @__PURE__ */ f(
    "div",
    {
      className: I(
        "flex flex-col gap-1",
        a ? "items-end" : "items-start",
        i
      ),
      children: /* @__PURE__ */ D("div", { className: "flex flex-col max-w-[80%]", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: I(
              "rounded-2xl px-4 py-3 text-sm leading-relaxed",
              a ? "bg-primary text-primary-fg rounded-tr-sm" : "bg-surface border border-border text-text-base rounded-tl-sm"
            ),
            children: a ? /* @__PURE__ */ f("p", { className: "whitespace-pre-wrap", children: e }) : s ?? /* @__PURE__ */ f("p", { className: "whitespace-pre-wrap", children: e })
          }
        ),
        !a && o && /* @__PURE__ */ D("div", { className: "flex items-center gap-1 self-end mt-1", children: [
          /* @__PURE__ */ f(Xf, { text: e }),
          n && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: n,
              "aria-label": "Rigenera risposta",
              className: "inline-flex items-center text-text-muted hover:text-text-base transition-colors",
              children: /* @__PURE__ */ f(Zb, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => m("up"),
              "aria-label": "Risposta utile",
              className: I(
                "inline-flex items-center transition-colors",
                l === "up" ? "text-success-fg" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ f(Qb, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => m("down"),
              "aria-label": "Risposta non utile",
              className: I(
                "inline-flex items-center transition-colors",
                l === "down" ? "text-error-fg" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ f(Jb, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    }
  );
}
function FI({
  icon: e,
  iconColor: t,
  iconBg: n,
  title: r,
  description: o,
  action: s,
  horizontal: i = !1,
  className: a,
  ...l
}) {
  return i ? /* @__PURE__ */ f(
    "div",
    {
      className: I(
        "bg-surface rounded-xl shadow-sm border border-border p-6",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        a
      ),
      ...l,
      children: /* @__PURE__ */ D("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10",
            style: n ? { backgroundColor: n } : void 0,
            children: /* @__PURE__ */ f(e, { className: "h-6 w-6 text-primary", style: t ? { color: t } : void 0 })
          }
        ),
        /* @__PURE__ */ D("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ f("h3", { className: "text-base font-semibold text-text-base", children: r }),
          o && /* @__PURE__ */ f("p", { className: "mt-1 text-sm text-text-muted", children: o }),
          s && /* @__PURE__ */ f("div", { className: "mt-3", children: s })
        ] })
      ] })
    }
  ) : /* @__PURE__ */ D(
    "div",
    {
      className: I(
        "bg-surface rounded-xl shadow-sm border border-border p-8 text-center",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        a
      ),
      ...l,
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-primary/10",
            style: n ? { backgroundColor: n } : void 0,
            children: /* @__PURE__ */ f(e, { className: "h-8 w-8 text-primary", style: t ? { color: t } : void 0 })
          }
        ),
        /* @__PURE__ */ f("h3", { className: "text-lg font-semibold text-text-base mb-3", children: r }),
        o && /* @__PURE__ */ f("p", { className: "text-text-muted text-sm leading-relaxed", children: o }),
        s && /* @__PURE__ */ f("div", { className: "mt-5", children: s })
      ]
    }
  );
}
const mD = "inline-flex h-7 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50", iu = "border-border bg-surface text-text-muted hover:bg-subtle hover:text-text-base", au = "border-primary bg-primary-light text-text-base", pD = c.forwardRef(
  ({ label: e, active: t = !1, onClick: n, onRemove: r, removeLabel: o, icon: s, className: i, disabled: a, ...l }, u) => {
    const m = /* @__PURE__ */ D(Be, { children: [
      s,
      /* @__PURE__ */ f("span", { className: "truncate", children: e })
    ] });
    if (!r)
      return /* @__PURE__ */ f(
        "button",
        {
          ref: u,
          type: "button",
          "aria-pressed": t,
          disabled: a,
          onClick: n,
          className: I(mD, t ? au : iu, i),
          ...l,
          children: m
        }
      );
    const d = o ?? (typeof e == "string" ? e : "filtro");
    return /* @__PURE__ */ D(
      "span",
      {
        className: I(
          "inline-flex h-7 items-center rounded-full border text-xs font-medium transition-colors",
          t ? au : iu,
          a && "cursor-not-allowed opacity-50",
          i
        ),
        children: [
          n ? /* @__PURE__ */ f(
            "button",
            {
              ref: u,
              type: "button",
              "aria-pressed": t,
              disabled: a,
              onClick: n,
              className: "inline-flex h-full items-center gap-1.5 rounded-l-full pl-3 pr-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              ...l,
              children: m
            }
          ) : (
            // Solo rimovibile: senza onClick un pulsante con aria-pressed non farebbe nulla
            /* @__PURE__ */ f("span", { className: "inline-flex h-full items-center gap-1.5 pl-3 pr-1.5", children: m })
          ),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              disabled: a,
              onClick: r,
              "aria-label": `Rimuovi ${d}`,
              className: "mr-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-text-muted hover:bg-emphasis hover:text-text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              children: /* @__PURE__ */ f(or, { className: "h-3 w-3", "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
pD.displayName = "FilterChip";
const Cn = 8, xh = 32, Ch = 140;
function hD(e, t, n) {
  const r = c.useCallback((l) => typeof window > "u" ? l : {
    x: Math.min(
      Math.max(l.x, Cn),
      Math.max(Cn, window.innerWidth - Cn - Ch)
    ),
    y: Math.min(
      Math.max(l.y, Cn),
      Math.max(Cn, window.innerHeight - xh - Cn)
    )
  }, []), [o, s] = c.useState(() => {
    if (typeof window > "u") return { x: 100, y: 100 };
    const l = e === "right" ? window.innerWidth - t : t;
    return r({ x: l, y: window.innerHeight - n });
  }), i = c.useRef(o);
  i.current = o, c.useEffect(() => {
    const l = () => s((u) => r(u));
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, [r]);
  function a(l) {
    if (l.button !== 0) return;
    l.preventDefault(), l.stopPropagation();
    const u = l.clientX - i.current.x, m = l.clientY - i.current.y, d = (h) => s(r({ x: h.clientX - u, y: h.clientY - m })), p = () => {
      window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", p);
    };
    window.addEventListener("mousemove", d), window.addEventListener("mouseup", p);
  }
  return { pos: o, startDrag: a };
}
function gD(e) {
  return typeof window > "u" ? 400 : Math.max(120, window.innerHeight - e - xh - Cn * 2);
}
function LI({
  title: e,
  children: t,
  anchor: n = "right",
  offsetX: r = 240,
  offsetY: o = 480,
  collapsible: s = !0,
  collapsed: i,
  defaultCollapsed: a = !1,
  onCollapsedChange: l,
  className: u
}) {
  const [m, d] = c.useState(a), p = i !== void 0, h = p ? !!i : m;
  function g() {
    const w = !h;
    p || d(w), l?.(w);
  }
  const { pos: v, startDrag: b } = hD(n, r, o);
  return /* @__PURE__ */ D(
    "div",
    {
      className: I(
        "fixed z-50 overflow-hidden rounded-md border border-border bg-surface shadow-lg",
        u
      ),
      style: { minWidth: Ch, left: v.x, top: v.y },
      onMouseDown: (w) => w.stopPropagation(),
      children: [
        /* @__PURE__ */ D(
          "div",
          {
            onMouseDown: b,
            className: I(
              "flex h-8 cursor-grab items-center gap-1.5 px-2.5 text-text-base",
              !h && "border-b border-border"
            ),
            children: [
              /* @__PURE__ */ f(ey, { className: "h-3 w-3 shrink-0 text-text-muted" }),
              /* @__PURE__ */ f("span", { className: "flex-1 truncate text-[10px] font-semibold uppercase tracking-wide text-text-muted", children: e }),
              s && /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: (w) => {
                    w.stopPropagation(), g();
                  },
                  "aria-label": h ? "Espandi pannello" : "Comprimi pannello",
                  className: "flex shrink-0 items-center justify-center leading-none text-text-base",
                  children: h ? /* @__PURE__ */ f(rr, { className: "h-3 w-3" }) : /* @__PURE__ */ f(Bu, { className: "h-3 w-3" })
                }
              )
            ]
          }
        ),
        !h && /* @__PURE__ */ f(
          "div",
          {
            className: "flex flex-col gap-1.5 overflow-y-auto p-2.5",
            style: { maxHeight: gD(v.y) },
            children: t
          }
        )
      ]
    }
  );
}
const vD = _b(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...s }, i) => {
    const a = $b(), l = o || a;
    return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ f("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: t }),
      /* @__PURE__ */ f(
        "input",
        {
          id: l,
          className: ua(
            "block w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base shadow-sm focus:border-databeez-primary focus:ring-2 focus:ring-databeez-primary focus:outline-none placeholder:text-text-muted",
            n && "border-error focus:border-error focus:ring-error",
            e
          ),
          ref: i,
          ...s
        }
      ),
      n && /* @__PURE__ */ f("p", { className: "text-sm text-error-fg", children: n }),
      r && !n && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted", children: r })
    ] });
  }
);
vD.displayName = "Input";
const bD = c.forwardRef(
  ({
    icon: e,
    label: t,
    error: n,
    helperText: r,
    rightElement: o,
    className: s,
    id: i,
    ...a
  }, l) => {
    const u = c.useId(), m = i ?? u;
    return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: m,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ D("div", { className: "relative", children: [
        /* @__PURE__ */ f(e, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
        /* @__PURE__ */ f(
          "input",
          {
            ref: l,
            id: m,
            className: I(
              "block w-full rounded-lg border border-border bg-surface py-2.5 pl-10 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "placeholder:text-text-muted transition-colors",
              o ? "pr-10" : "pr-4",
              n && "border-error focus:ring-error focus:border-error",
              s
            ),
            ...a
          }
        ),
        o && /* @__PURE__ */ f("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: o })
      ] }),
      n && /* @__PURE__ */ f("p", { className: "text-xs text-error-fg", children: n }),
      r && !n && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: r })
    ] });
  }
);
bD.displayName = "InputWithIcon";
const yD = {
  GET: "bg-success-bg text-success-fg border-success-border",
  POST: "bg-info-bg text-info-fg border-info-border",
  PUT: "bg-warning-bg text-warning-fg border-warning-border",
  PATCH: "bg-warning-bg text-warning-fg border-warning-border",
  DELETE: "bg-error-bg text-error-fg border-error-border",
  HEAD: "bg-subtle text-text-muted border-border",
  OPTIONS: "bg-subtle text-text-muted border-border"
};
function WI({ method: e, className: t, ...n }) {
  const r = e.toUpperCase(), o = yD[r] ?? "bg-subtle text-text-muted border-border";
  return /* @__PURE__ */ f(
    "span",
    {
      className: I(
        "inline-flex items-center px-2 py-0.5 rounded border text-xs font-mono font-bold tracking-wide",
        o,
        t
      ),
      ...n,
      children: r
    }
  );
}
const wD = (e) => e === 1 ? "1 selezionato" : `${e} selezionati`;
function xD({
  options: e,
  value: t,
  onChange: n,
  placeholder: r = "Seleziona...",
  searchPlaceholder: o = "Cerca...",
  emptyMessage: s = "Nessun risultato.",
  label: i,
  error: a,
  helperText: l,
  disabled: u,
  className: m,
  showBulkActions: d = !1,
  selectAllLabel: p = "Seleziona tutto",
  clearLabel: h = "Deseleziona",
  maxVisibleLabels: g = 2,
  summaryLabel: v = wD
}) {
  const b = c.useId(), w = `${b}-list`, [x, y] = c.useState(!1), [C, P] = c.useState(""), [S, E] = c.useState(0), N = c.useMemo(() => {
    if (!C) return e;
    const M = C.toLowerCase();
    return e.filter(($) => $.label.toLowerCase().includes(M));
  }, [e, C]), R = c.useMemo(() => new Set(t), [t]), k = e.filter((M) => R.has(M.value)), _ = (M) => `${b}-opt-${M}`, T = Math.min(S, Math.max(0, N.length - 1));
  c.useEffect(() => {
    x && document.getElementById(_(T))?.scrollIntoView?.({ block: "nearest" });
  }, [T, x]);
  function L(M) {
    M.disabled || n(
      R.has(M.value) ? t.filter(($) => $ !== M.value) : [...t, M.value]
    );
  }
  function F() {
    const M = N.filter(($) => !$.disabled && !R.has($.value)).map(($) => $.value);
    n([...t, ...M]);
  }
  function z() {
    const M = new Set(N.filter(($) => !$.disabled).map(($) => $.value));
    n(t.filter(($) => !M.has($)));
  }
  function A(M) {
    if (N.length !== 0)
      switch (M.key) {
        case "ArrowDown":
          M.preventDefault(), E((T + 1) % N.length);
          break;
        case "ArrowUp":
          M.preventDefault(), E((T - 1 + N.length) % N.length);
          break;
        case "Home":
          M.ctrlKey && (M.preventDefault(), E(0));
          break;
        case "End":
          M.ctrlKey && (M.preventDefault(), E(N.length - 1));
          break;
        case "Enter":
          M.preventDefault(), L(N[T]);
          break;
      }
  }
  let W = null;
  return k.length > 0 && (g > 0 && k.length <= g ? W = k.map((M) => M.label).join(", ") : g > 0 ? W = `${k.slice(0, g).map(($) => $.label).join(", ")} +${k.length - g}` : W = v(k.length)), /* @__PURE__ */ D("div", { className: "space-y-1", children: [
    i && /* @__PURE__ */ f("label", { htmlFor: b, className: "block text-sm font-medium text-text-base", children: i }),
    /* @__PURE__ */ D(
      Br,
      {
        open: x,
        onOpenChange: (M) => {
          y(M), M || P(""), E(0);
        },
        children: [
          /* @__PURE__ */ f(Hr, { asChild: !0, children: /* @__PURE__ */ D(
            "button",
            {
              id: b,
              type: "button",
              role: "combobox",
              "aria-haspopup": "listbox",
              "aria-expanded": x,
              "aria-controls": x ? w : void 0,
              "aria-invalid": a ? !0 : void 0,
              "aria-describedby": a ? `${b}-error` : l ? `${b}-help` : void 0,
              disabled: u,
              className: I(
                "flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                "disabled:cursor-not-allowed disabled:opacity-50",
                !W && "text-text-muted",
                a && "border-error focus:ring-error focus:border-error",
                m
              ),
              children: [
                /* @__PURE__ */ f("span", { className: "truncate", children: W ?? r }),
                /* @__PURE__ */ f(Ki, { className: "h-4 w-4 shrink-0 text-text-muted", "aria-hidden": "true" })
              ]
            }
          ) }),
          /* @__PURE__ */ D(ur, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: [
            /* @__PURE__ */ D("div", { className: "flex items-center border-b border-border px-3", children: [
              /* @__PURE__ */ f(Xi, { className: "h-4 w-4 shrink-0 text-text-muted", "aria-hidden": "true" }),
              /* @__PURE__ */ f(
                "input",
                {
                  value: C,
                  onChange: (M) => {
                    P(M.target.value), E(0);
                  },
                  onKeyDown: A,
                  placeholder: o,
                  "aria-label": o,
                  role: "combobox",
                  "aria-expanded": "true",
                  "aria-autocomplete": "list",
                  "aria-controls": w,
                  "aria-activedescendant": N.length > 0 ? _(T) : void 0,
                  className: "flex-1 bg-transparent py-3 pl-2 text-sm text-text-base outline-none placeholder:text-text-muted",
                  autoFocus: !0
                }
              )
            ] }),
            d && /* @__PURE__ */ D("div", { className: "flex items-center justify-between border-b border-border px-3 py-1.5 text-xs", children: [
              /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: F,
                  className: "rounded px-1 py-0.5 font-medium text-text-base hover:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  children: p
                }
              ),
              /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: z,
                  className: "rounded px-1 py-0.5 text-text-muted hover:bg-subtle hover:text-text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  children: h
                }
              )
            ] }),
            /* @__PURE__ */ f(
              "ul",
              {
                id: w,
                role: "listbox",
                "aria-multiselectable": "true",
                "aria-label": i ?? r,
                className: "max-h-[15rem] overflow-y-auto p-1",
                children: N.map((M, $) => {
                  const O = R.has(M.value);
                  return /* @__PURE__ */ D(
                    "li",
                    {
                      id: _($),
                      role: "option",
                      "aria-selected": O,
                      "aria-disabled": M.disabled || void 0,
                      onClick: () => L(M),
                      onMouseDown: (B) => B.preventDefault(),
                      onMouseMove: () => $ !== T && E($),
                      className: I(
                        "flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm text-text-base",
                        $ === T && "bg-subtle",
                        M.disabled && "pointer-events-none opacity-50",
                        O && "font-medium"
                      ),
                      children: [
                        /* @__PURE__ */ f("span", { "aria-hidden": "true", className: "pointer-events-none inline-flex", children: /* @__PURE__ */ f(Do, { tabIndex: -1, checked: O, readOnly: !0, onChange: () => {
                        } }) }),
                        /* @__PURE__ */ f("span", { className: "truncate", children: M.label })
                      ]
                    },
                    M.value
                  );
                })
              }
            ),
            N.length === 0 && /* @__PURE__ */ f("div", { className: "py-6 text-center text-sm text-text-muted", role: "status", children: s })
          ] })
        ]
      }
    ),
    a && /* @__PURE__ */ f("p", { id: `${b}-error`, className: "text-xs text-error-fg", children: a }),
    l && !a && /* @__PURE__ */ f("p", { id: `${b}-help`, className: "text-xs text-text-muted", children: l })
  ] });
}
xD.displayName = "MultiSelect";
function zI({
  title: e,
  description: t,
  actions: n,
  breadcrumb: r,
  className: o,
  ...s
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: I("bg-surface border-b border-border", o),
      ...s,
      children: /* @__PURE__ */ D("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
        r && /* @__PURE__ */ f("div", { className: "mb-3", children: r }),
        /* @__PURE__ */ D("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ D("div", { className: "min-w-0", children: [
            /* @__PURE__ */ f("h1", { className: "text-3xl font-bold text-text-base truncate", children: e }),
            t && /* @__PURE__ */ f("p", { className: "mt-1 text-text-muted", children: t })
          ] }),
          n && /* @__PURE__ */ f("div", { className: "flex items-center gap-3 shrink-0", children: n })
        ] })
      ] })
    }
  );
}
const CD = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  // accent-fg e non accent: in beegraph `bg-accent` è ridefinito dal tema shadcn
  accent: "bg-accent-fg"
};
function BI({
  value: e,
  max: t = 100,
  tone: n = "primary",
  label: r,
  showValue: o = !1,
  className: s,
  "aria-label": i,
  "aria-labelledby": a,
  "aria-valuetext": l,
  ...u
}) {
  const m = t > 0 ? t : 100, d = Number.isFinite(e) ? Math.min(Math.max(e, 0), m) : 0, p = d / m * 100;
  return /* @__PURE__ */ D("div", { className: I("space-y-1", s), ...u, children: [
    (r || o) && /* @__PURE__ */ D("div", { className: "flex items-center justify-between text-xs", children: [
      r && /* @__PURE__ */ f("span", { className: "text-text-muted", children: r }),
      o && /* @__PURE__ */ D("span", { className: "ml-auto font-medium tabular-nums text-text-base", children: [
        Math.round(p),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ f(
      "div",
      {
        role: "progressbar",
        "aria-valuenow": d,
        "aria-valuemin": 0,
        "aria-valuemax": m,
        "aria-valuetext": l,
        "aria-labelledby": a,
        "aria-label": a ? void 0 : i ?? r ?? "Avanzamento",
        className: "h-2 overflow-hidden rounded-full bg-emphasis",
        children: /* @__PURE__ */ f(
          "div",
          {
            className: I("h-full rounded-full transition-all", CD[n]),
            style: { width: `${p}%` }
          }
        )
      }
    )
  ] });
}
function HI(e, t, { higherIsRiskier: n = !0 } = {}) {
  if (e == null || !Number.isFinite(e)) return "na";
  const [r, o, s] = t;
  if (![r, o, s].every(Number.isFinite) || !(r <= o && o <= s)) return "na";
  const i = e < r ? 0 : e < o ? 1 : e < s ? 2 : 3;
  return (n ? ["low", "med", "high", "very-high"] : ["very-high", "high", "med", "low"])[i];
}
const SD = {
  na: "n.d.",
  low: "Basso",
  med: "Medio",
  high: "Alto",
  "very-high": "Molto alto"
}, ED = {
  na: "text-risk-na-fg bg-risk-na-bg",
  low: "text-risk-low-fg bg-risk-low-bg",
  med: "text-risk-med-fg bg-risk-med-bg",
  high: "text-risk-high-fg bg-risk-high-bg",
  "very-high": "text-risk-very-high-fg bg-risk-very-high-bg"
};
function VI({
  level: e,
  labels: t,
  value: n,
  subject: r = "Rischio",
  className: o,
  ...s
}) {
  const i = t?.[e] ?? SD[e], a = n != null && n !== "";
  return /* @__PURE__ */ f(
    "span",
    {
      role: "img",
      "aria-label": `${r}: ${i}${a ? `, ${n}` : ""}`,
      className: I(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
        ED[e],
        o
      ),
      ...s,
      children: /* @__PURE__ */ D("span", { "aria-hidden": "true", className: "inline-flex items-center gap-1.5", children: [
        i,
        a && /* @__PURE__ */ f("span", { className: "tabular-nums font-semibold", children: n })
      ] })
    }
  );
}
var PD = c.createContext(void 0);
function us(e) {
  const t = c.useContext(PD);
  return e || t || "ltr";
}
function Si(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function ND(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var cc = "ScrollArea", [Sh] = Kt(cc), [OD, ut] = Sh(cc), Eh = c.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: s = 600,
      ...i
    } = e, [a, l] = c.useState(null), [u, m] = c.useState(null), [d, p] = c.useState(null), [h, g] = c.useState(null), [v, b] = c.useState(null), [w, x] = c.useState(0), [y, C] = c.useState(0), [P, S] = c.useState(!1), [E, N] = c.useState(!1), R = le(t, (_) => l(_)), k = us(o);
    return /* @__PURE__ */ f(
      OD,
      {
        scope: n,
        type: r,
        dir: k,
        scrollHideDelay: s,
        scrollArea: a,
        viewport: u,
        onViewportChange: m,
        content: d,
        onContentChange: p,
        scrollbarX: h,
        onScrollbarXChange: g,
        scrollbarXEnabled: P,
        onScrollbarXEnabledChange: S,
        scrollbarY: v,
        onScrollbarYChange: b,
        scrollbarYEnabled: E,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: x,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ f(
          ne.div,
          {
            dir: k,
            ...i,
            ref: R,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": w + "px",
              "--radix-scroll-area-corner-height": y + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Eh.displayName = cc;
var Ph = "ScrollAreaViewport", Nh = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...s } = e, i = ut(Ph, n), a = c.useRef(null), l = le(t, a, i.onViewportChange);
    return /* @__PURE__ */ D(Be, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ f(
        ne.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...s,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ f("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Nh.displayName = Ph;
var At = "ScrollAreaScrollbar", lc = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ut(At, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o, a = e.orientation === "horizontal";
    return c.useEffect(() => (a ? s(!0) : i(!0), () => {
      a ? s(!1) : i(!1);
    }), [a, s, i]), o.type === "hover" ? /* @__PURE__ */ f(RD, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ f(DD, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ f(Oh, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ f(uc, { ...r, ref: t }) : null;
  }
);
lc.displayName = At;
var RD = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ut(At, e.__scopeScrollArea), [s, i] = c.useState(!1);
  return c.useEffect(() => {
    const a = o.scrollArea;
    let l = 0;
    if (a) {
      const u = () => {
        window.clearTimeout(l), i(!0);
      }, m = () => {
        l = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return a.addEventListener("pointerenter", u), a.addEventListener("pointerleave", m), () => {
        window.clearTimeout(l), a.removeEventListener("pointerenter", u), a.removeEventListener("pointerleave", m);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ f(vt, { present: n || s, children: /* @__PURE__ */ f(
    Oh,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), DD = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ut(At, e.__scopeScrollArea), s = e.orientation === "horizontal", i = fs(() => l("SCROLL_END"), 100), [a, l] = ND("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return c.useEffect(() => {
    if (a === "idle") {
      const u = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [a, o.scrollHideDelay, l]), c.useEffect(() => {
    const u = o.viewport, m = s ? "scrollLeft" : "scrollTop";
    if (u) {
      let d = u[m];
      const p = () => {
        const h = u[m];
        d !== h && (l("SCROLL"), i()), d = h;
      };
      return u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
    }
  }, [o.viewport, s, l, i]), /* @__PURE__ */ f(vt, { present: n || a !== "hidden", children: /* @__PURE__ */ f(
    uc,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: q(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: q(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Oh = c.forwardRef((e, t) => {
  const n = ut(At, e.__scopeScrollArea), { forceMount: r, ...o } = e, [s, i] = c.useState(!1), a = e.orientation === "horizontal", l = fs(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, m = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(a ? u : m);
    }
  }, 10);
  return nr(n.viewport, l), nr(n.content, l), /* @__PURE__ */ f(vt, { present: r || s, children: /* @__PURE__ */ f(
    uc,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), uc = c.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = ut(At, e.__scopeScrollArea), s = c.useRef(null), i = c.useRef(0), [a, l] = c.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = kh(a.viewport, a.content), m = {
    ...r,
    sizes: a,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (p) => s.current = p,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (p) => i.current = p
  };
  function d(p, h) {
    return _D(p, i.current, a, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ f(
    TD,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollLeft, h = cu(p, a, o.dir);
          s.current.style.transform = `translate3d(${h}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = d(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ f(
    MD,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollTop, h = cu(p, a);
          s.current.style.transform = `translate3d(0, ${h}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = d(p));
      }
    }
  ) : null;
}), TD = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = ut(At, e.__scopeScrollArea), [i, a] = c.useState(), l = c.useRef(null), u = le(t, l, s.onScrollbarXChange);
  return c.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ f(
    Dh,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": ds(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.x),
      onDragScroll: (m) => e.onDragScroll(m.x),
      onWheelScroll: (m, d) => {
        if (s.viewport) {
          const p = s.viewport.scrollLeft + m.deltaX;
          e.onWheelScroll(p), Ih(p, d) && m.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && i && r({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: Lo(i.paddingLeft),
            paddingEnd: Lo(i.paddingRight)
          }
        });
      }
    }
  );
}), MD = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = ut(At, e.__scopeScrollArea), [i, a] = c.useState(), l = c.useRef(null), u = le(t, l, s.onScrollbarYChange);
  return c.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ f(
    Dh,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": ds(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.y),
      onDragScroll: (m) => e.onDragScroll(m.y),
      onWheelScroll: (m, d) => {
        if (s.viewport) {
          const p = s.viewport.scrollTop + m.deltaY;
          e.onWheelScroll(p), Ih(p, d) && m.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && i && r({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: Lo(i.paddingTop),
            paddingEnd: Lo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [kD, Rh] = Sh(At), Dh = c.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: s,
    onThumbPointerUp: i,
    onThumbPointerDown: a,
    onThumbPositionChange: l,
    onDragScroll: u,
    onWheelScroll: m,
    onResize: d,
    ...p
  } = e, h = ut(At, n), [g, v] = c.useState(null), b = le(t, (R) => v(R)), w = c.useRef(null), x = c.useRef(""), y = h.viewport, C = r.content - r.viewport, P = We(m), S = We(l), E = fs(d, 10);
  function N(R) {
    if (w.current) {
      const k = R.clientX - w.current.left, _ = R.clientY - w.current.top;
      u({ x: k, y: _ });
    }
  }
  return c.useEffect(() => {
    const R = (k) => {
      const _ = k.target;
      g?.contains(_) && P(k, C);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [y, g, C, P]), c.useEffect(S, [r, S]), nr(g, E), nr(h.content, E), /* @__PURE__ */ f(
    kD,
    {
      scope: n,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: We(s),
      onThumbPointerUp: We(i),
      onThumbPositionChange: S,
      onThumbPointerDown: We(a),
      children: /* @__PURE__ */ f(
        ne.div,
        {
          ...p,
          ref: b,
          style: { position: "absolute", ...p.style },
          onPointerDown: q(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), w.current = g.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), N(R));
          }),
          onPointerMove: q(e.onPointerMove, N),
          onPointerUp: q(e.onPointerUp, (R) => {
            const k = R.target;
            k.hasPointerCapture(R.pointerId) && k.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = x.current, h.viewport && (h.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), Fo = "ScrollAreaThumb", Th = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Rh(Fo, e.__scopeScrollArea);
    return /* @__PURE__ */ f(vt, { present: n || o.hasThumb, children: /* @__PURE__ */ f(AD, { ref: t, ...r }) });
  }
), AD = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, s = ut(Fo, n), i = Rh(Fo, n), { onThumbPositionChange: a } = i, l = le(
      t,
      (d) => i.onThumbChange(d)
    ), u = c.useRef(void 0), m = fs(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return c.useEffect(() => {
      const d = s.viewport;
      if (d) {
        const p = () => {
          if (m(), !u.current) {
            const h = $D(d, a);
            u.current = h, a();
          }
        };
        return a(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
      }
    }, [s.viewport, m, a]), /* @__PURE__ */ f(
      ne.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: q(e.onPointerDownCapture, (d) => {
          const h = d.target.getBoundingClientRect(), g = d.clientX - h.left, v = d.clientY - h.top;
          i.onThumbPointerDown({ x: g, y: v });
        }),
        onPointerUp: q(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
Th.displayName = Fo;
var dc = "ScrollAreaCorner", Mh = c.forwardRef(
  (e, t) => {
    const n = ut(dc, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ f(ID, { ...e, ref: t }) : null;
  }
);
Mh.displayName = dc;
var ID = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = ut(dc, n), [s, i] = c.useState(0), [a, l] = c.useState(0), u = !!(s && a);
  return nr(o.scrollbarX, () => {
    const m = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(m), l(m);
  }), nr(o.scrollbarY, () => {
    const m = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(m), i(m);
  }), u ? /* @__PURE__ */ f(
    ne.div,
    {
      ...r,
      ref: t,
      style: {
        width: s,
        height: a,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Lo(e) {
  return e ? parseInt(e, 10) : 0;
}
function kh(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ds(e) {
  const t = kh(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function _D(e, t, n, r = "ltr") {
  const o = ds(n), s = o / 2, i = t || s, a = o - i, l = n.scrollbar.paddingStart + i, u = n.scrollbar.size - n.scrollbar.paddingEnd - a, m = n.content - n.viewport, d = r === "ltr" ? [0, m] : [m * -1, 0];
  return Ah([l, u], d)(e);
}
function cu(e, t, n = "ltr") {
  const r = ds(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, i = t.content - t.viewport, a = s - r, l = n === "ltr" ? [0, i] : [i * -1, 0], u = Si(e, l);
  return Ah([0, i], [0, a])(u);
}
function Ah(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Ih(e, t) {
  return e > 0 && e < t;
}
var $D = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== s.left, a = n.top !== s.top;
    (i || a) && t(), n = s, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function fs(e, t) {
  const n = We(e), r = c.useRef(0);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), c.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function nr(e, t) {
  const n = We(t);
  $e(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var _h = Eh, FD = Nh, LD = Mh;
const WD = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ D(
  _h,
  {
    ref: r,
    className: I("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f(FD, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f($h, {}),
      /* @__PURE__ */ f(LD, {})
    ]
  }
));
WD.displayName = _h.displayName;
const $h = c.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f(
  lc,
  {
    ref: r,
    orientation: t,
    className: I(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f(Th, { className: "relative flex-1 rounded-full bg-border" })
  }
));
$h.displayName = lc.displayName;
const zD = c.forwardRef(
  ({ value: e, onChange: t, onClear: n, className: r, placeholder: o = "Cerca...", ...s }, i) => {
    const a = () => {
      t(""), n?.();
    };
    return /* @__PURE__ */ D("div", { className: I("relative", r), children: [
      /* @__PURE__ */ f(Xi, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
      /* @__PURE__ */ f(
        "input",
        {
          ref: i,
          type: "text",
          value: e,
          onChange: (l) => t(l.target.value),
          placeholder: o,
          className: I(
            "w-full pl-10 pr-9 py-2 text-sm border border-border rounded-lg bg-surface",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "placeholder:text-text-muted text-text-base transition-colors"
          ),
          ...s
        }
      ),
      e && /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: a,
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-base transition-colors",
          "aria-label": "Cancella ricerca",
          children: /* @__PURE__ */ f(or, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
zD.displayName = "SearchInput";
// @__NO_SIDE_EFFECTS__
function lu(e) {
  const t = /* @__PURE__ */ BD(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(VD);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function BD(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = UD(o), a = jD(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? ar(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var HD = /* @__PURE__ */ Symbol("radix.slottable");
function VD(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === HD;
}
function jD(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function UD(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Fh(e) {
  const t = e + "CollectionProvider", [n, r] = Kt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: b, children: w } = v, x = V.useRef(null), y = V.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: y, collectionRef: x, children: w });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ lu(a), u = V.forwardRef(
    (v, b) => {
      const { scope: w, children: x } = v, y = s(a, w), C = le(b, y.collectionRef);
      return /* @__PURE__ */ f(l, { ref: C, children: x });
    }
  );
  u.displayName = a;
  const m = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ lu(m), h = V.forwardRef(
    (v, b) => {
      const { scope: w, children: x, ...y } = v, C = V.useRef(null), P = le(b, C), S = s(m, w);
      return V.useEffect(() => (S.itemMap.set(C, { ref: C, ...y }), () => {
        S.itemMap.delete(C);
      })), /* @__PURE__ */ f(p, { [d]: "", ref: P, children: x });
    }
  );
  h.displayName = m;
  function g(v) {
    const b = s(e + "CollectionConsumer", v);
    return V.useCallback(() => {
      const x = b.collectionRef.current;
      if (!x) return [];
      const y = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(b.itemMap.values()).sort(
        (S, E) => y.indexOf(S.ref.current) - y.indexOf(E.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: h },
    g,
    r
  ];
}
// @__NO_SIDE_EFFECTS__
function YD(e) {
  const t = /* @__PURE__ */ GD(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(XD);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function GD(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = ZD(o), a = qD(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? ar(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var KD = /* @__PURE__ */ Symbol("radix.slottable");
function XD(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === KD;
}
function qD(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ZD(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Lh(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Wh = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), QD = "VisuallyHidden", JD = c.forwardRef(
  (e, t) => /* @__PURE__ */ f(
    ne.span,
    {
      ...e,
      ref: t,
      style: { ...Wh, ...e.style }
    }
  )
);
JD.displayName = QD;
var eT = [" ", "Enter", "ArrowUp", "ArrowDown"], tT = [" ", "Enter"], Dn = "Select", [ms, ps, nT] = Fh(Dn), [pr] = Kt(Dn, [
  nT,
  Zo
]), hs = Zo(), [rT, gn] = pr(Dn), [oT, sT] = pr(Dn), zh = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: l,
    dir: u,
    name: m,
    autoComplete: d,
    disabled: p,
    required: h,
    form: g
  } = e, v = hs(t), [b, w] = c.useState(null), [x, y] = c.useState(null), [C, P] = c.useState(!1), S = us(u), [E, N] = On({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Dn
  }), [R, k] = On({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: Dn
  }), _ = c.useRef(null), T = b ? g || !!b.closest("form") : !0, [L, F] = c.useState(/* @__PURE__ */ new Set()), z = Array.from(L).map((A) => A.props.value).join(";");
  return /* @__PURE__ */ f(Nf, { ...v, children: /* @__PURE__ */ D(
    rT,
    {
      required: h,
      scope: t,
      trigger: b,
      onTriggerChange: w,
      valueNode: x,
      onValueNodeChange: y,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: P,
      contentId: zt(),
      value: R,
      onValueChange: k,
      open: E,
      onOpenChange: N,
      dir: S,
      triggerPointerDownPosRef: _,
      disabled: p,
      children: [
        /* @__PURE__ */ f(ms.Provider, { scope: t, children: /* @__PURE__ */ f(
          oT,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback((A) => {
              F((W) => new Set(W).add(A));
            }, []),
            onNativeOptionRemove: c.useCallback((A) => {
              F((W) => {
                const M = new Set(W);
                return M.delete(A), M;
              });
            }, []),
            children: n
          }
        ) }),
        T ? /* @__PURE__ */ D(
          dg,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: m,
            autoComplete: d,
            value: R,
            onChange: (A) => k(A.target.value),
            disabled: p,
            form: g,
            children: [
              R === void 0 ? /* @__PURE__ */ f("option", { value: "" }) : null,
              Array.from(L)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
zh.displayName = Dn;
var Bh = "SelectTrigger", Hh = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = hs(n), i = gn(Bh, n), a = i.disabled || r, l = le(t, i.onTriggerChange), u = ps(n), m = c.useRef("touch"), [d, p, h] = mg((v) => {
      const b = u().filter((y) => !y.disabled), w = b.find((y) => y.value === i.value), x = pg(b, v, w);
      x !== void 0 && i.onValueChange(x.value);
    }), g = (v) => {
      a || (i.onOpenChange(!0), h()), v && (i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ f(Ma, { asChild: !0, ...s, children: /* @__PURE__ */ f(
      ne.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": fg(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: q(o.onClick, (v) => {
          v.currentTarget.focus(), m.current !== "mouse" && g(v);
        }),
        onPointerDown: q(o.onPointerDown, (v) => {
          m.current = v.pointerType;
          const b = v.target;
          b.hasPointerCapture(v.pointerId) && b.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (g(v), v.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (v) => {
          const b = d.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key), !(b && v.key === " ") && eT.includes(v.key) && (g(), v.preventDefault());
        })
      }
    ) });
  }
);
Hh.displayName = Bh;
var Vh = "SelectValue", jh = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = gn(Vh, n), { onValueNodeHasChildrenChange: u } = l, m = s !== void 0, d = le(t, l.onValueNodeChange);
    return $e(() => {
      u(m);
    }, [u, m]), /* @__PURE__ */ f(
      ne.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: fg(l.value) ? /* @__PURE__ */ f(Be, { children: i }) : s
      }
    );
  }
);
jh.displayName = Vh;
var iT = "SelectIcon", Uh = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ f(ne.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Uh.displayName = iT;
var aT = "SelectPortal", Yh = (e) => /* @__PURE__ */ f(Qo, { asChild: !0, ...e });
Yh.displayName = aT;
var Tn = "SelectContent", Gh = c.forwardRef(
  (e, t) => {
    const n = gn(Tn, e.__scopeSelect), [r, o] = c.useState();
    if ($e(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Ve.createPortal(
        /* @__PURE__ */ f(Kh, { scope: e.__scopeSelect, children: /* @__PURE__ */ f(ms.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ f(Xh, { ...e, ref: t });
  }
);
Gh.displayName = Tn;
var ft = 10, [Kh, vn] = pr(Tn), cT = "SelectContentImpl", lT = /* @__PURE__ */ YD("SelectContent.RemoveScroll"), Xh = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: m,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: b,
      //
      ...w
    } = e, x = gn(Tn, n), [y, C] = c.useState(null), [P, S] = c.useState(null), E = le(t, (j) => C(j)), [N, R] = c.useState(null), [k, _] = c.useState(
      null
    ), T = ps(n), [L, F] = c.useState(!1), z = c.useRef(!1);
    c.useEffect(() => {
      if (y) return Jo(y);
    }, [y]), ma();
    const A = c.useCallback(
      (j) => {
        const [oe, ...K] = T().map((ae) => ae.ref.current), [ee] = K.slice(-1), se = document.activeElement;
        for (const ae of j)
          if (ae === se || (ae?.scrollIntoView({ block: "nearest" }), ae === oe && P && (P.scrollTop = 0), ae === ee && P && (P.scrollTop = P.scrollHeight), ae?.focus(), document.activeElement !== se)) return;
      },
      [T, P]
    ), W = c.useCallback(
      () => A([N, y]),
      [A, N, y]
    );
    c.useEffect(() => {
      L && W();
    }, [L, W]);
    const { onOpenChange: M, triggerPointerDownPosRef: $ } = x;
    c.useEffect(() => {
      if (y) {
        let j = { x: 0, y: 0 };
        const oe = (ee) => {
          j = {
            x: Math.abs(Math.round(ee.pageX) - ($.current?.x ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - ($.current?.y ?? 0))
          };
        }, K = (ee) => {
          j.x <= 10 && j.y <= 10 ? ee.preventDefault() : y.contains(ee.target) || M(!1), document.removeEventListener("pointermove", oe), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", oe), document.addEventListener("pointerup", K, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", oe), document.removeEventListener("pointerup", K, { capture: !0 });
        };
      }
    }, [y, M, $]), c.useEffect(() => {
      const j = () => M(!1);
      return window.addEventListener("blur", j), window.addEventListener("resize", j), () => {
        window.removeEventListener("blur", j), window.removeEventListener("resize", j);
      };
    }, [M]);
    const [O, B] = mg((j) => {
      const oe = T().filter((se) => !se.disabled), K = oe.find((se) => se.ref.current === document.activeElement), ee = pg(oe, j, K);
      ee && setTimeout(() => ee.ref.current.focus());
    }), Q = c.useCallback(
      (j, oe, K) => {
        const ee = !z.current && !K;
        (x.value !== void 0 && x.value === oe || ee) && (R(j), ee && (z.current = !0));
      },
      [x.value]
    ), re = c.useCallback(() => y?.focus(), [y]), be = c.useCallback(
      (j, oe, K) => {
        const ee = !z.current && !K;
        (x.value !== void 0 && x.value === oe || ee) && _(j);
      },
      [x.value]
    ), J = r === "popper" ? Ei : qh, H = J === Ei ? {
      side: a,
      sideOffset: l,
      align: u,
      alignOffset: m,
      arrowPadding: d,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ f(
      Kh,
      {
        scope: n,
        content: y,
        viewport: P,
        onViewportChange: S,
        itemRefCallback: Q,
        selectedItem: N,
        onItemLeave: re,
        itemTextRefCallback: be,
        focusSelectedItem: W,
        selectedItemText: k,
        position: r,
        isPositioned: L,
        searchRef: O,
        children: /* @__PURE__ */ f(Wr, { as: lT, allowPinchZoom: !0, children: /* @__PURE__ */ f(
          Yo,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (j) => {
              j.preventDefault();
            },
            onUnmountAutoFocus: q(o, (j) => {
              x.trigger?.focus({ preventScroll: !0 }), j.preventDefault();
            }),
            children: /* @__PURE__ */ f(
              Uo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (j) => j.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ f(
                  J,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (j) => j.preventDefault(),
                    ...w,
                    ...H,
                    onPlaced: () => F(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: q(w.onKeyDown, (j) => {
                      const oe = j.ctrlKey || j.altKey || j.metaKey;
                      if (j.key === "Tab" && j.preventDefault(), !oe && j.key.length === 1 && B(j.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(j.key)) {
                        let ee = T().filter((se) => !se.disabled).map((se) => se.ref.current);
                        if (["ArrowUp", "End"].includes(j.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(j.key)) {
                          const se = j.target, ae = ee.indexOf(se);
                          ee = ee.slice(ae + 1);
                        }
                        setTimeout(() => A(ee)), j.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Xh.displayName = cT;
var uT = "SelectItemAlignedPosition", qh = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = gn(Tn, n), i = vn(Tn, n), [a, l] = c.useState(null), [u, m] = c.useState(null), d = le(t, (E) => m(E)), p = ps(n), h = c.useRef(!1), g = c.useRef(!0), { viewport: v, selectedItem: b, selectedItemText: w, focusSelectedItem: x } = i, y = c.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && v && b && w) {
      const E = s.trigger.getBoundingClientRect(), N = u.getBoundingClientRect(), R = s.valueNode.getBoundingClientRect(), k = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const se = k.left - N.left, ae = R.left - se, me = E.left - ae, ye = E.width + me, ve = Math.max(ye, N.width), br = window.innerWidth - ft, yr = Si(ae, [
          ft,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ft, br - ve)
        ]);
        a.style.minWidth = ye + "px", a.style.left = yr + "px";
      } else {
        const se = N.right - k.right, ae = window.innerWidth - R.right - se, me = window.innerWidth - E.right - ae, ye = E.width + me, ve = Math.max(ye, N.width), br = window.innerWidth - ft, yr = Si(ae, [
          ft,
          Math.max(ft, br - ve)
        ]);
        a.style.minWidth = ye + "px", a.style.right = yr + "px";
      }
      const _ = p(), T = window.innerHeight - ft * 2, L = v.scrollHeight, F = window.getComputedStyle(u), z = parseInt(F.borderTopWidth, 10), A = parseInt(F.paddingTop, 10), W = parseInt(F.borderBottomWidth, 10), M = parseInt(F.paddingBottom, 10), $ = z + A + L + M + W, O = Math.min(b.offsetHeight * 5, $), B = window.getComputedStyle(v), Q = parseInt(B.paddingTop, 10), re = parseInt(B.paddingBottom, 10), be = E.top + E.height / 2 - ft, J = T - be, H = b.offsetHeight / 2, j = b.offsetTop + H, oe = z + A + j, K = $ - oe;
      if (oe <= be) {
        const se = _.length > 0 && b === _[_.length - 1].ref.current;
        a.style.bottom = "0px";
        const ae = u.clientHeight - v.offsetTop - v.offsetHeight, me = Math.max(
          J,
          H + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (se ? re : 0) + ae + W
        ), ye = oe + me;
        a.style.height = ye + "px";
      } else {
        const se = _.length > 0 && b === _[0].ref.current;
        a.style.top = "0px";
        const me = Math.max(
          be,
          z + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (se ? Q : 0) + H
        ) + K;
        a.style.height = me + "px", v.scrollTop = oe - be + v.offsetTop;
      }
      a.style.margin = `${ft}px 0`, a.style.minHeight = O + "px", a.style.maxHeight = T + "px", r?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    s.trigger,
    s.valueNode,
    a,
    u,
    v,
    b,
    w,
    s.dir,
    r
  ]);
  $e(() => y(), [y]);
  const [C, P] = c.useState();
  $e(() => {
    u && P(window.getComputedStyle(u).zIndex);
  }, [u]);
  const S = c.useCallback(
    (E) => {
      E && g.current === !0 && (y(), x?.(), g.current = !1);
    },
    [y, x]
  );
  return /* @__PURE__ */ f(
    fT,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: S,
      children: /* @__PURE__ */ f(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ f(
            ne.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
qh.displayName = uT;
var dT = "SelectPopperPosition", Ei = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ft,
    ...s
  } = e, i = hs(n);
  return /* @__PURE__ */ f(
    Of,
    {
      ...i,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ei.displayName = dT;
var [fT, fc] = pr(Tn, {}), Pi = "SelectViewport", Zh = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = vn(Pi, n), i = fc(Pi, n), a = le(t, s.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ D(Be, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ f(ms.Slot, { scope: n, children: /* @__PURE__ */ f(
        ne.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: q(o.onScroll, (u) => {
            const m = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: p } = i;
            if (p?.current && d) {
              const h = Math.abs(l.current - m.scrollTop);
              if (h > 0) {
                const g = window.innerHeight - ft * 2, v = parseFloat(d.style.minHeight), b = parseFloat(d.style.height), w = Math.max(v, b);
                if (w < g) {
                  const x = w + h, y = Math.min(g, x), C = x - y;
                  d.style.height = y + "px", d.style.bottom === "0px" && (m.scrollTop = C > 0 ? C : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = m.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Zh.displayName = Pi;
var Qh = "SelectGroup", [mT, pT] = pr(Qh), Jh = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = zt();
    return /* @__PURE__ */ f(mT, { scope: n, id: o, children: /* @__PURE__ */ f(ne.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Jh.displayName = Qh;
var eg = "SelectLabel", tg = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = pT(eg, n);
    return /* @__PURE__ */ f(ne.div, { id: o.id, ...r, ref: t });
  }
);
tg.displayName = eg;
var Wo = "SelectItem", [hT, ng] = pr(Wo), rg = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = gn(Wo, n), l = vn(Wo, n), u = a.value === r, [m, d] = c.useState(s ?? ""), [p, h] = c.useState(!1), g = le(
      t,
      (x) => l.itemRefCallback?.(x, r, o)
    ), v = zt(), b = c.useRef("touch"), w = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f(
      hT,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: c.useCallback((x) => {
          d((y) => y || (x?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f(
          ms.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: m,
            children: /* @__PURE__ */ f(
              ne.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": u && p,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: g,
                onFocus: q(i.onFocus, () => h(!0)),
                onBlur: q(i.onBlur, () => h(!1)),
                onClick: q(i.onClick, () => {
                  b.current !== "mouse" && w();
                }),
                onPointerUp: q(i.onPointerUp, () => {
                  b.current === "mouse" && w();
                }),
                onPointerDown: q(i.onPointerDown, (x) => {
                  b.current = x.pointerType;
                }),
                onPointerMove: q(i.onPointerMove, (x) => {
                  b.current = x.pointerType, o ? l.onItemLeave?.() : b.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: q(i.onPointerLeave, (x) => {
                  x.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: q(i.onKeyDown, (x) => {
                  l.searchRef?.current !== "" && x.key === " " || (tT.includes(x.key) && w(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
rg.displayName = Wo;
var Er = "SelectItemText", og = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = gn(Er, n), a = vn(Er, n), l = ng(Er, n), u = sT(Er, n), [m, d] = c.useState(null), p = le(
      t,
      (w) => d(w),
      l.onItemTextChange,
      (w) => a.itemTextRefCallback?.(w, l.value, l.disabled)
    ), h = m?.textContent, g = c.useMemo(
      () => /* @__PURE__ */ f("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: b } = u;
    return $e(() => (v(g), () => b(g)), [v, b, g]), /* @__PURE__ */ D(Be, { children: [
      /* @__PURE__ */ f(ne.span, { id: l.textId, ...s, ref: p }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ve.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
og.displayName = Er;
var sg = "SelectItemIndicator", ig = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ng(sg, n).isSelected ? /* @__PURE__ */ f(ne.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
ig.displayName = sg;
var Ni = "SelectScrollUpButton", ag = c.forwardRef((e, t) => {
  const n = vn(Ni, e.__scopeSelect), r = fc(Ni, e.__scopeSelect), [o, s] = c.useState(!1), i = le(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    lg,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
ag.displayName = Ni;
var Oi = "SelectScrollDownButton", cg = c.forwardRef((e, t) => {
  const n = vn(Oi, e.__scopeSelect), r = fc(Oi, e.__scopeSelect), [o, s] = c.useState(!1), i = le(t, r.onScrollButtonChange);
  return $e(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, m = Math.ceil(l.scrollTop) < u;
        s(m);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    lg,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: l } = n;
        a && l && (a.scrollTop = a.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
cg.displayName = Oi;
var lg = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = vn("SelectScrollButton", n), i = c.useRef(null), a = ps(n), l = c.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), $e(() => {
    a().find((m) => m.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ f(
    ne.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: q(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: q(o.onPointerMove, () => {
        s.onItemLeave?.(), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: q(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), gT = "SelectSeparator", ug = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ f(ne.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
ug.displayName = gT;
var Ri = "SelectArrow", vT = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = hs(n), s = gn(Ri, n), i = vn(Ri, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ f(Rf, { ...o, ...r, ref: t }) : null;
  }
);
vT.displayName = Ri;
var bT = "SelectBubbleInput", dg = c.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = c.useRef(null), s = le(r, o), i = Lh(t);
    return c.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLSelectElement.prototype, m = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (i !== t && m) {
        const d = new Event("change", { bubbles: !0 });
        m.call(a, t), a.dispatchEvent(d);
      }
    }, [i, t]), /* @__PURE__ */ f(
      ne.select,
      {
        ...n,
        style: { ...Wh, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
dg.displayName = bT;
function fg(e) {
  return e === "" || e === void 0;
}
function mg(e) {
  const t = We(e), n = c.useRef(""), r = c.useRef(0), o = c.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), (function l(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(a);
    },
    [t]
  ), s = c.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function pg(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = yT(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function yT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var wT = zh, hg = Hh, xT = jh, CT = Uh, ST = Yh, gg = Gh, ET = Zh, PT = Jh, vg = tg, bg = rg, NT = og, OT = ig, yg = ag, wg = cg, xg = ug;
const jI = wT, UI = PT, YI = xT, RT = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ D(
  hg,
  {
    ref: r,
    className: I(
      "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base",
      "placeholder:text-text-muted",
      "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ f(CT, { asChild: !0, children: /* @__PURE__ */ f(rr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
RT.displayName = hg.displayName;
const Cg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  yg,
  {
    ref: n,
    className: I("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f(Bu, { className: "h-4 w-4" })
  }
));
Cg.displayName = yg.displayName;
const Sg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  wg,
  {
    ref: n,
    className: I("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f(rr, { className: "h-4 w-4" })
  }
));
Sg.displayName = wg.displayName;
const DT = c.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f(ST, { children: /* @__PURE__ */ D(
  gg,
  {
    ref: o,
    className: I(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-surface text-text-base shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ f(Cg, {}),
      /* @__PURE__ */ f(
        ET,
        {
          className: I(
            "p-1 overflow-y-auto",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ f(Sg, {})
    ]
  }
) }));
DT.displayName = gg.displayName;
const TT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  vg,
  {
    ref: n,
    className: I("py-1.5 pl-8 pr-2 text-xs font-semibold text-text-muted uppercase tracking-wider", e),
    ...t
  }
));
TT.displayName = vg.displayName;
const MT = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ D(
  bg,
  {
    ref: r,
    className: I(
      "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none",
      "focus:bg-subtle focus:text-text-base",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f(OT, { children: /* @__PURE__ */ f(Ir, { className: "h-4 w-4 text-databeez-primary" }) }) }),
      /* @__PURE__ */ f(NT, { children: t })
    ]
  }
));
MT.displayName = bg.displayName;
const kT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  xg,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
kT.displayName = xg.displayName;
function en(e, t, n) {
  return Number.isFinite(e) ? Math.min(Math.max(e, t), Math.max(t, n)) : t;
}
function AT(e, t, n, r, o, s) {
  const i = r === "right" ? t - n : n - t;
  return en(e + i, o, s);
}
function IT(e, t, n, r, o, s = 16, i = !1) {
  const a = i ? s * 5 : s, l = n === "right" ? "ArrowLeft" : "ArrowRight", u = n === "right" ? "ArrowRight" : "ArrowLeft";
  return e === l ? en(t + a, r, o) : e === u ? en(t - a, r, o) : e === "Home" ? en(r, r, o) : e === "End" ? en(o, r, o) : null;
}
function GI({
  open: e,
  onClose: t,
  width: n = 380,
  header: r,
  resizable: o = !1,
  minWidth: s = 280,
  maxWidth: i = 640,
  defaultWidth: a,
  onWidthChange: l,
  children: u,
  className: m,
  ...d
}) {
  const [p, h] = c.useState(
    () => en(a ?? n, s, i)
  ), g = c.useRef(null), v = c.useId(), b = d.id ?? v, w = a ?? n;
  if (c.useEffect(() => {
    h(en(w, s, i));
  }, [w, s, i]), !e) return null;
  const x = o ? en(p, s, i) : n;
  function y(P) {
    P !== x && (h(P), l?.(P));
  }
  const C = /* @__PURE__ */ D(
    "div",
    {
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        width: x,
        height: "100vh",
        zIndex: 50,
        overflowY: "auto"
      },
      className: I(
        "bg-surface border-l border-border shadow-2xl",
        m
      ),
      ...d,
      id: o ? b : d.id,
      children: [
        /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: t,
            className: "absolute top-3 right-3 z-10 rounded-md p-1.5 text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
            "aria-label": "Chiudi pannello",
            children: /* @__PURE__ */ f(or, { className: "size-5" })
          }
        ),
        r && /* @__PURE__ */ f("div", { className: "px-4 pt-4 pb-2 pr-10", children: r }),
        /* @__PURE__ */ f("div", { className: I(r ? "" : "pt-4"), children: u })
      ]
    }
  );
  return o ? /* @__PURE__ */ D(Be, { children: [
    C,
    /* @__PURE__ */ f(
      "div",
      {
        role: "separator",
        "aria-orientation": "vertical",
        "aria-label": "Ridimensiona pannello",
        "aria-controls": b,
        "aria-valuenow": x,
        "aria-valuemin": s,
        "aria-valuemax": i,
        tabIndex: 0,
        style: {
          position: "fixed",
          top: 0,
          right: x - 3,
          width: 6,
          height: "100vh",
          zIndex: 50,
          touchAction: "none"
        },
        className: "cursor-col-resize bg-transparent transition-colors hover:bg-primary/40 focus-visible:bg-primary/60 focus-visible:outline-none active:bg-primary/60",
        onPointerDown: (P) => {
          P.preventDefault(), P.currentTarget.setPointerCapture(P.pointerId), g.current = { x: P.clientX, width: x };
        },
        onPointerMove: (P) => {
          g.current && y(AT(g.current.width, g.current.x, P.clientX, "right", s, i));
        },
        onPointerUp: () => {
          g.current = null;
        },
        onPointerCancel: () => {
          g.current = null;
        },
        onKeyDown: (P) => {
          const S = IT(P.key, x, "right", s, i, 16, P.shiftKey);
          S !== null && (P.preventDefault(), y(S));
        }
      }
    )
  ] }) : C;
}
function Eg({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: I("animate-pulse rounded-md bg-subtle", e),
      ...t
    }
  );
}
function _T({ lines: e = 3, className: t }) {
  return /* @__PURE__ */ f("div", { className: I("space-y-2", t), children: Array.from({ length: e }).map((n, r) => /* @__PURE__ */ f(
    Eg,
    {
      className: I("h-4", r === e - 1 ? "w-2/3" : "w-full")
    },
    r
  )) });
}
function KI({ className: e }) {
  return /* @__PURE__ */ D("div", { className: I("rounded-xl border border-border bg-surface p-6 space-y-4", e), children: [
    /* @__PURE__ */ f(Eg, { className: "h-5 w-1/3" }),
    /* @__PURE__ */ f(_T, { lines: 3 })
  ] });
}
function XI({
  data: e,
  width: t = 80,
  height: n = 24,
  strokeWidth: r = 1.5,
  area: o = !1,
  className: s,
  "aria-label": i,
  ...a
}) {
  const l = e.filter((g) => Number.isFinite(g)), u = r, m = Math.max(t - 2 * u, 0), d = Math.max(n - 2 * u, 0);
  let p = "", h = "";
  if (l.length > 0) {
    const g = Math.min(...l), b = Math.max(...l) - g, w = (y) => b === 0 ? n / 2 : u + d - (y - g) / b * d;
    let x;
    if (l.length === 1 ? x = [
      [u, w(l[0])],
      [t - u, w(l[0])]
    ] : x = l.map((y, C) => [u + C / (l.length - 1) * m, w(y)]), p = x.map(([y, C], P) => `${P === 0 ? "M" : "L"}${y.toFixed(1)},${C.toFixed(1)}`).join(" "), o) {
      const y = x[x.length - 1];
      h = `${p} L${y[0].toFixed(1)},${n} L${x[0][0].toFixed(1)},${n} Z`;
    }
  }
  return /* @__PURE__ */ D(
    "svg",
    {
      width: t,
      height: n,
      viewBox: `0 0 ${t} ${n}`,
      className: I("text-primary", s),
      role: i ? "img" : void 0,
      "aria-label": i,
      "aria-hidden": i ? void 0 : !0,
      ...a,
      children: [
        h && /* @__PURE__ */ f("path", { d: h, fill: "currentColor", fillOpacity: 0.15, stroke: "none" }),
        p && /* @__PURE__ */ f(
          "path",
          {
            d: p,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: r,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
const $T = fn(
  "animate-spin rounded-full border-4 border-databeez-primary border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        default: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
function FT({ className: e, size: t, label: n = "Caricamento...", ...r }) {
  return /* @__PURE__ */ D(
    "div",
    {
      role: "status",
      "aria-label": n,
      className: I("inline-flex items-center justify-center", e),
      ...r,
      children: [
        /* @__PURE__ */ f("div", { className: $T({ size: t }) }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: n })
      ]
    }
  );
}
function qI({ label: e }) {
  return /* @__PURE__ */ D("div", { className: "flex flex-col items-center justify-center py-12 gap-3", children: [
    /* @__PURE__ */ f(FT, { size: "lg", label: e }),
    e && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted", children: e })
  ] });
}
const LT = fn(
  "flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-colors select-none",
  {
    variants: {
      state: {
        completed: "bg-primary text-primary-fg",
        active: "bg-primary text-primary-fg",
        upcoming: "bg-emphasis text-text-muted"
      }
    },
    defaultVariants: {
      state: "upcoming"
    }
  }
), WT = fn("text-sm transition-colors", {
  variants: {
    state: {
      completed: "text-text-subtle",
      active: "font-medium text-text-base",
      upcoming: "text-text-subtle"
    }
  },
  defaultVariants: {
    state: "upcoming"
  }
}), zT = fn("w-8 h-px transition-colors", {
  variants: {
    completed: {
      true: "bg-databeez-primary",
      false: "bg-emphasis"
    }
  },
  defaultVariants: {
    completed: !1
  }
});
function BT(e) {
  return typeof e == "string" ? { label: e } : e;
}
function HT(e, t) {
  return e < t ? "completed" : e === t ? "active" : "upcoming";
}
const VT = c.forwardRef(
  ({ className: e, steps: t, activeStep: n, completedIcon: r = "✓", ...o }, s) => /* @__PURE__ */ f(
    "div",
    {
      ref: s,
      className: I("flex items-center justify-center gap-2", e),
      role: "navigation",
      "aria-label": "Progresso",
      ...o,
      children: t.map((i, a) => {
        const l = BT(i), u = HT(a, n);
        return /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ f(
            "div",
            {
              className: I(LT({ state: u })),
              "aria-current": u === "active" ? "step" : void 0,
              children: l.icon ? l.icon : u === "completed" ? r : a + 1
            }
          ),
          /* @__PURE__ */ f("span", { className: I(WT({ state: u })), children: l.label }),
          a < t.length - 1 && /* @__PURE__ */ f(
            "div",
            {
              className: I(
                zT({ completed: a < n })
              ),
              "aria-hidden": "true"
            }
          )
        ] }, l.label);
      })
    }
  )
);
VT.displayName = "Stepper";
var gs = "Switch", [jT] = Kt(gs), [UT, YT] = jT(gs), Pg = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: i,
      disabled: a,
      value: l = "on",
      onCheckedChange: u,
      form: m,
      ...d
    } = e, [p, h] = c.useState(null), g = le(t, (y) => h(y)), v = c.useRef(!1), b = p ? m || !!p.closest("form") : !0, [w, x] = On({
      prop: o,
      defaultProp: s ?? !1,
      onChange: u,
      caller: gs
    });
    return /* @__PURE__ */ D(UT, { scope: n, checked: w, disabled: a, children: [
      /* @__PURE__ */ f(
        ne.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": Dg(w),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...d,
          ref: g,
          onClick: q(e.onClick, (y) => {
            x((C) => !C), b && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ f(
        Rg,
        {
          control: p,
          bubbles: !v.current,
          name: r,
          value: l,
          checked: w,
          required: i,
          disabled: a,
          form: m,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Pg.displayName = gs;
var Ng = "SwitchThumb", Og = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = YT(Ng, n);
    return /* @__PURE__ */ f(
      ne.span,
      {
        "data-state": Dg(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Og.displayName = Ng;
var GT = "SwitchBubbleInput", Rg = c.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const i = c.useRef(null), a = le(i, s), l = Lh(n), u = gf(t);
    return c.useEffect(() => {
      const m = i.current;
      if (!m) return;
      const d = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (l !== n && h) {
        const g = new Event("click", { bubbles: r });
        h.call(m, n), m.dispatchEvent(g);
      }
    }, [l, n, r]), /* @__PURE__ */ f(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: a,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Rg.displayName = GT;
function Dg(e) {
  return e ? "checked" : "unchecked";
}
var KT = Pg, XT = Og;
const qT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  KT,
  {
    className: I(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-databeez-primary data-[state=unchecked]:bg-subtle",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f(
      XT,
      {
        className: I(
          "pointer-events-none block h-5 w-5 rounded-full bg-surface shadow-sm ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
qT.displayName = "Switch";
function ZI({
  icon: e,
  iconColor: t,
  label: n,
  value: r,
  trend: o,
  hint: s,
  size: i = "default",
  className: a,
  ...l
}) {
  const u = i === "compact";
  return /* @__PURE__ */ D(
    "div",
    {
      className: I(
        "bg-surface rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow",
        u ? "p-3 text-left" : "p-4 text-center",
        a
      ),
      ...l,
      children: [
        e && /* @__PURE__ */ f(
          e,
          {
            className: I("h-6 w-6 text-primary", u ? "mb-1" : "mx-auto mb-2"),
            style: t ? { color: t } : void 0
          }
        ),
        /* @__PURE__ */ f("div", { className: I("font-bold tabular-nums text-text-base", u ? "text-xl" : "text-2xl"), children: r }),
        /* @__PURE__ */ f("div", { className: "text-sm text-text-muted mt-0.5", children: n }),
        o && (typeof o.value == "string" ? /* @__PURE__ */ f(
          "div",
          {
            className: I(
              "text-xs font-medium mt-1",
              o.positive ? "text-trend-positive" : "text-trend-negative"
            ),
            children: o.value
          }
        ) : /* @__PURE__ */ f("div", { className: "mt-1", children: /* @__PURE__ */ f(b0, { ...o }) })),
        s && /* @__PURE__ */ f("div", { className: "text-xs text-text-muted mt-1", children: s })
      ]
    }
  );
}
const ZT = {
  operational: { dot: "bg-success", text: "text-success-fg", label: "Operational" },
  degraded: { dot: "bg-warning", text: "text-warning-fg", label: "Degraded" },
  outage: { dot: "bg-error", text: "text-error-fg", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" }
};
function QI({
  label: e,
  status: t,
  statusLabel: n,
  className: r,
  ...o
}) {
  const s = ZT[t];
  return /* @__PURE__ */ D("div", { className: I("flex items-center justify-between", r), ...o, children: [
    /* @__PURE__ */ D("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f("div", { className: I("h-2 w-2 rounded-full mr-3", s.dot) }),
      /* @__PURE__ */ f("span", { className: "text-sm font-medium", children: e })
    ] }),
    /* @__PURE__ */ f("span", { className: I("text-sm", s.text), children: n ?? s.label })
  ] });
}
function JI({ tabs: e, activeTab: t, onChange: n, className: r }) {
  return /* @__PURE__ */ f("div", { className: I("border-b border-border", r), children: /* @__PURE__ */ f("nav", { className: "-mb-px flex space-x-1", role: "tablist", children: e.map((o) => {
    const s = t === o.id, i = o.icon;
    return /* @__PURE__ */ D(
      "button",
      {
        role: "tab",
        "aria-selected": s,
        onClick: () => n(o.id),
        className: I(
          "inline-flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors whitespace-nowrap",
          s ? "border-databeez-primary text-databeez-primary" : "border-transparent text-text-muted hover:text-text-base hover:border-border"
        ),
        children: [
          i && /* @__PURE__ */ f(i, { className: "h-4 w-4" }),
          o.label
        ]
      },
      o.id
    );
  }) }) });
}
const QT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f(
  "table",
  {
    ref: n,
    className: I("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
QT.displayName = "Table";
const JT = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("thead", { ref: n, className: I("bg-subtle border-b border-border", e), ...t }));
JT.displayName = "TableHeader";
const eM = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tbody",
  {
    ref: n,
    className: I("divide-y divide-border", e),
    ...t
  }
));
eM.displayName = "TableBody";
const tM = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tfoot",
  {
    ref: n,
    className: I("bg-subtle border-t border-border font-medium", e),
    ...t
  }
));
tM.displayName = "TableFooter";
const nM = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tr",
  {
    ref: n,
    className: I(
      "transition-colors hover:bg-subtle data-[state=selected]:bg-primary-light",
      e
    ),
    ...t
  }
));
nM.displayName = "TableRow";
const Tg = c.forwardRef(({ className: e, numeric: t, ...n }, r) => /* @__PURE__ */ f(
  "th",
  {
    ref: r,
    className: I(
      "h-10 px-4 text-left align-middle font-semibold text-text-muted text-xs uppercase tracking-wider",
      t && "text-right tabular-nums whitespace-nowrap",
      e
    ),
    ...n
  }
));
Tg.displayName = "TableHead";
const rM = { asc: "ascending", desc: "descending" }, oM = c.forwardRef(
  ({ className: e, numeric: t, direction: n, onSort: r, children: o, ...s }, i) => {
    const a = n === "asc" ? Wu : n === "desc" ? Lu : Ki;
    return /* @__PURE__ */ f(
      Tg,
      {
        ref: i,
        numeric: t,
        "aria-sort": n ? rM[n] : "none",
        className: e,
        ...s,
        children: /* @__PURE__ */ D(
          "button",
          {
            type: "button",
            onClick: r,
            className: I(
              "inline-flex items-center gap-1 rounded-sm uppercase tracking-wider hover:text-text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              n && "text-text-base"
            ),
            children: [
              o,
              /* @__PURE__ */ f(a, { "aria-hidden": "true", className: I("h-3.5 w-3.5 shrink-0", !n && "text-text-subtle") })
            ]
          }
        )
      }
    );
  }
);
oM.displayName = "TableSortHead";
const sM = c.forwardRef(({ className: e, numeric: t, ...n }, r) => /* @__PURE__ */ f(
  "td",
  {
    ref: r,
    className: I(
      "px-4 py-3 align-middle text-text-base",
      t && "text-right tabular-nums whitespace-nowrap",
      e
    ),
    ...n
  }
));
sM.displayName = "TableCell";
const iM = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "caption",
  {
    ref: n,
    className: I("mt-4 text-sm text-text-muted", e),
    ...t
  }
));
iM.displayName = "TableCaption";
const aM = c.forwardRef(
  ({ className: e, page: t, pageCount: n, onPageChange: r, totalItems: o, "aria-label": s = "Paginazione", ...i }, a) => {
    const l = Math.max(1, n), u = Math.min(Math.max(1, t), l);
    return /* @__PURE__ */ D(
      "nav",
      {
        ref: a,
        "aria-label": s,
        className: I("flex items-center justify-between gap-4 text-sm text-text-muted", e),
        ...i,
        children: [
          /* @__PURE__ */ f("span", { children: o !== void 0 ? `${Fs(o)} ${o === 1 ? "risultato" : "risultati"}` : null }),
          /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ f(
              Jn,
              {
                type: "button",
                variant: "outline",
                size: "icon",
                "aria-label": "Pagina precedente",
                disabled: u <= 1,
                onClick: () => r(u - 1),
                children: /* @__PURE__ */ f(ty, { "aria-hidden": "true", className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ D("span", { "aria-live": "polite", className: "tabular-nums text-text-base", children: [
              "Pagina ",
              Fs(u),
              " di ",
              Fs(l)
            ] }),
            /* @__PURE__ */ f(
              Jn,
              {
                type: "button",
                variant: "outline",
                size: "icon",
                "aria-label": "Pagina successiva",
                disabled: u >= l,
                onClick: () => r(u + 1),
                children: /* @__PURE__ */ f(_u, { "aria-hidden": "true", className: "h-4 w-4" })
              }
            )
          ] })
        ]
      }
    );
  }
);
aM.displayName = "Pagination";
var Ys = "rovingFocusGroup.onEntryFocus", cM = { bubbles: !1, cancelable: !0 }, Xr = "RovingFocusGroup", [Di, Mg, lM] = Fh(Xr), [uM, kg] = Kt(
  Xr,
  [lM]
), [dM, fM] = uM(Xr), Ag = c.forwardRef(
  (e, t) => /* @__PURE__ */ f(Di.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(Di.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(mM, { ...e, ref: t }) }) })
);
Ag.displayName = Xr;
var mM = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: m = !1,
    ...d
  } = e, p = c.useRef(null), h = le(t, p), g = us(s), [v, b] = On({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Xr
  }), [w, x] = c.useState(!1), y = We(u), C = Mg(n), P = c.useRef(!1), [S, E] = c.useState(0);
  return c.useEffect(() => {
    const N = p.current;
    if (N)
      return N.addEventListener(Ys, y), () => N.removeEventListener(Ys, y);
  }, [y]), /* @__PURE__ */ f(
    dM,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: v,
      onItemFocus: c.useCallback(
        (N) => b(N),
        [b]
      ),
      onItemShiftTab: c.useCallback(() => x(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => E((N) => N + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => E((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ f(
        ne.div,
        {
          tabIndex: w || S === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: q(e.onFocus, (N) => {
            const R = !P.current;
            if (N.target === N.currentTarget && R && !w) {
              const k = new CustomEvent(Ys, cM);
              if (N.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const _ = C().filter((A) => A.focusable), T = _.find((A) => A.active), L = _.find((A) => A.id === v), z = [T, L, ..._].filter(
                  Boolean
                ).map((A) => A.ref.current);
                $g(z, m);
              }
            }
            P.current = !1;
          }),
          onBlur: q(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), Ig = "RovingFocusGroupItem", _g = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = zt(), u = s || l, m = fM(Ig, n), d = m.currentTabStopId === u, p = Mg(n), { onFocusableItemAdd: h, onFocusableItemRemove: g, currentTabStopId: v } = m;
    return c.useEffect(() => {
      if (r)
        return h(), () => g();
    }, [r, h, g]), /* @__PURE__ */ f(
      Di.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ f(
          ne.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": m.orientation,
            ...a,
            ref: t,
            onMouseDown: q(e.onMouseDown, (b) => {
              r ? m.onItemFocus(u) : b.preventDefault();
            }),
            onFocus: q(e.onFocus, () => m.onItemFocus(u)),
            onKeyDown: q(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const w = gM(b, m.orientation, m.dir);
              if (w !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let y = p().filter((C) => C.focusable).map((C) => C.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const C = y.indexOf(b.currentTarget);
                  y = m.loop ? vM(y, C + 1) : y.slice(C + 1);
                }
                setTimeout(() => $g(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: v != null }) : i
          }
        )
      }
    );
  }
);
_g.displayName = Ig;
var pM = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function hM(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function gM(e, t, n) {
  const r = hM(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return pM[r];
}
function $g(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function vM(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var bM = Ag, yM = _g, vs = "Tabs", [wM] = Kt(vs, [
  kg
]), Fg = kg(), [xM, mc] = wM(vs), Lg = c.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: i = "horizontal",
      dir: a,
      activationMode: l = "automatic",
      ...u
    } = e, m = us(a), [d, p] = On({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: vs
    });
    return /* @__PURE__ */ f(
      xM,
      {
        scope: n,
        baseId: zt(),
        value: d,
        onValueChange: p,
        orientation: i,
        dir: m,
        activationMode: l,
        children: /* @__PURE__ */ f(
          ne.div,
          {
            dir: m,
            "data-orientation": i,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
Lg.displayName = vs;
var Wg = "TabsList", zg = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = mc(Wg, n), i = Fg(n);
    return /* @__PURE__ */ f(
      bM,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ f(
          ne.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
zg.displayName = Wg;
var Bg = "TabsTrigger", Hg = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = mc(Bg, n), a = Fg(n), l = Ug(i.baseId, r), u = Yg(i.baseId, r), m = r === i.value;
    return /* @__PURE__ */ f(
      yM,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: m,
        children: /* @__PURE__ */ f(
          ne.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": m,
            "aria-controls": u,
            "data-state": m ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...s,
            ref: t,
            onMouseDown: q(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: q(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(r);
            }),
            onFocus: q(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !m && !o && d && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Hg.displayName = Bg;
var Vg = "TabsContent", jg = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = mc(Vg, n), l = Ug(a.baseId, r), u = Yg(a.baseId, r), m = r === a.value, d = c.useRef(m);
    return c.useEffect(() => {
      const p = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ f(vt, { present: o || m, children: ({ present: p }) => /* @__PURE__ */ f(
      ne.div,
      {
        "data-state": m ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !p,
        id: u,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: p && s
      }
    ) });
  }
);
jg.displayName = Vg;
function Ug(e, t) {
  return `${e}-trigger-${t}`;
}
function Yg(e, t) {
  return `${e}-content-${t}`;
}
var CM = Lg, Gg = zg, Kg = Hg, Xg = jg;
const e_ = CM, SM = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Gg,
  {
    ref: n,
    className: I(
      "inline-flex h-10 items-center justify-center rounded-lg bg-subtle p-1 text-text-muted",
      e
    ),
    ...t
  }
));
SM.displayName = Gg.displayName;
const EM = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Kg,
  {
    ref: n,
    className: I(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-surface data-[state=active]:text-text-base data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
EM.displayName = Kg.displayName;
const PM = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Xg,
  {
    ref: n,
    className: I(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
PM.displayName = Xg.displayName;
const NM = c.forwardRef(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...s }, i) => {
    const a = o ?? t?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ D("div", { className: "w-full space-y-1.5", children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: a,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ f(
        "textarea",
        {
          id: a,
          ref: i,
          className: I(
            "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-base placeholder:text-text-muted",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-subtle",
            "resize-y min-h-[80px] transition-colors",
            n && "border-error focus:ring-error focus:border-error",
            e
          ),
          "aria-invalid": !!n,
          "aria-describedby": n ? `${a}-error` : r ? `${a}-helper` : void 0,
          ...s
        }
      ),
      n && /* @__PURE__ */ f("p", { id: `${a}-error`, className: "text-xs text-error-fg", children: n }),
      !n && r && /* @__PURE__ */ f("p", { id: `${a}-helper`, className: "text-xs text-text-muted", children: r })
    ] });
  }
);
NM.displayName = "Textarea";
function OM({
  value: e = "",
  onChange: t,
  label: n,
  error: r,
  helperText: o,
  disabled: s,
  className: i,
  minuteStep: a = 1,
  showSeconds: l = !1
}) {
  const u = c.useId(), m = c.useMemo(() => {
    const [b = "", w = "", x = ""] = e.split(":");
    return { hours: b, minutes: w, seconds: x };
  }, [e]), d = Array.from({ length: 24 }, (b, w) => String(w).padStart(2, "0")), p = Array.from(
    { length: Math.ceil(60 / a) },
    (b, w) => String(w * a).padStart(2, "0")
  ), h = Array.from({ length: 60 }, (b, w) => String(w).padStart(2, "0"));
  function g(b, w) {
    const x = { ...m, [b]: w };
    x.hours || (x.hours = "00"), x.minutes || (x.minutes = "00");
    const y = l ? `${x.hours}:${x.minutes}:${x.seconds || "00"}` : `${x.hours}:${x.minutes}`;
    t?.(y);
  }
  const v = I(
    "h-10 rounded-lg border border-border bg-surface px-2 py-2 text-sm text-text-base appearance-none",
    "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
    "disabled:cursor-not-allowed disabled:opacity-50",
    r && "border-error focus:ring-error focus:border-error"
  );
  return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
    n && /* @__PURE__ */ f("label", { htmlFor: u, className: "block text-sm font-medium text-text-base", children: n }),
    /* @__PURE__ */ D(
      "div",
      {
        className: I("flex items-center gap-2", i),
        children: [
          /* @__PURE__ */ f(ny, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ D(
            "select",
            {
              id: u,
              disabled: s,
              value: m.hours,
              onChange: (b) => g("hours", b.target.value),
              className: v,
              "aria-label": "Ore",
              children: [
                /* @__PURE__ */ f("option", { value: "", disabled: !0, children: "HH" }),
                d.map((b) => /* @__PURE__ */ f("option", { value: b, children: b }, b))
              ]
            }
          ),
          /* @__PURE__ */ f("span", { className: "text-text-muted font-medium", children: ":" }),
          /* @__PURE__ */ D(
            "select",
            {
              disabled: s,
              value: m.minutes,
              onChange: (b) => g("minutes", b.target.value),
              className: v,
              "aria-label": "Minuti",
              children: [
                /* @__PURE__ */ f("option", { value: "", disabled: !0, children: "MM" }),
                p.map((b) => /* @__PURE__ */ f("option", { value: b, children: b }, b))
              ]
            }
          ),
          l && /* @__PURE__ */ D(Be, { children: [
            /* @__PURE__ */ f("span", { className: "text-text-muted font-medium", children: ":" }),
            /* @__PURE__ */ D(
              "select",
              {
                disabled: s,
                value: m.seconds,
                onChange: (b) => g("seconds", b.target.value),
                className: v,
                "aria-label": "Secondi",
                children: [
                  /* @__PURE__ */ f("option", { value: "", disabled: !0, children: "SS" }),
                  h.map((b) => /* @__PURE__ */ f("option", { value: b, children: b }, b))
                ]
              }
            )
          ] })
        ]
      }
    ),
    r && /* @__PURE__ */ f("p", { className: "text-xs text-error-fg", children: r }),
    o && !r && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: o })
  ] });
}
OM.displayName = "TimePicker";
var RM = Object.defineProperty, hr = (e, t) => RM(e, "name", { value: t, configurable: !0 }), qg = !!(typeof window < "u" && window.document && window.document.createElement);
function He(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ hr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
hr(He, "composeEventHandlers");
function DM(e) {
  if (!qg)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
hr(DM, "getOwnerWindow");
function Ti(e) {
  if (!qg)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
hr(Ti, "getOwnerDocument");
function Zg(e, t = !1) {
  const { activeElement: n } = Ti(e);
  if (!n?.nodeName)
    return null;
  if (Qg(n) && n.contentDocument)
    return Zg(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Ti(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
hr(Zg, "getActiveElement");
function Qg(e) {
  return e.tagName === "IFRAME";
}
hr(Qg, "isFrame");
var TM = Object.defineProperty, pc = (e, t) => TM(e, "name", { value: t, configurable: !0 });
function Mi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
pc(Mi, "setRef");
function Jg(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Mi(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Mi(e[o], null);
        }
      };
  };
}
pc(Jg, "composeRefs");
function Rt(...e) {
  return c.useCallback(Jg(...e), e);
}
pc(Rt, "useComposedRefs");
var MM = Object.defineProperty, at = (e, t) => MM(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function kM(e, t) {
  const n = c.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ at((s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ f(n.Provider, { value: l, children: i });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(s, i = {}) {
    const { optional: a = !1 } = i, l = c.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return at(o, "useContext"), [r, o];
}
at(kM, "createContext");
// @__NO_SIDE_EFFECTS__
function bs(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i);
    a.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ at((d) => {
      const { scope: p, children: h, ...g } = d, v = p?.[e]?.[l] || a, b = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ f(v.Provider, { value: b, children: h });
    }, "Provider");
    u.displayName = s + "Provider";
    function m(d, p, h = {}) {
      const { optional: g = !1 } = h, v = p?.[e]?.[l] || a, b = c.useContext(v);
      if (b) return b;
      if (i !== void 0) return i;
      if (!g)
        throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return at(m, "useContext"), [u, m];
  }
  at(r, "createContext");
  const o = /* @__PURE__ */ at(() => {
    const s = n.map((i) => c.createContext(i));
    return /* @__PURE__ */ at(function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, ev(o, ...t)];
}
at(bs, "createContextScope");
function ev(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ at(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ at(function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
at(ev, "composeContextScopes");
var ln = globalThis?.document ? c.useLayoutEffect : () => {
}, AM = Object.defineProperty, ke = (e, t) => AM(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function tv(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ bs(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ ke((v) => {
    const { scope: b, children: w } = v, x = c.useRef(null), y = c.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: y, collectionRef: x, children: w });
  }, "CollectionProvider");
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Pe(a), u = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x } = v, y = s(a, w), C = Rt(b, y.collectionRef);
      return /* @__PURE__ */ f(l, { ref: C, children: x });
    }
  );
  u.displayName = a;
  const m = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Pe(m), h = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x, ...y } = v, C = c.useRef(null), P = Rt(b, C), S = s(m, w);
      return c.useEffect(() => (S.itemMap.set(C, { ref: C, ...y }), () => {
        S.itemMap.delete(C);
      })), /* @__PURE__ */ f(p, { [d]: "", ref: P, children: x });
    }
  );
  h.displayName = m;
  function g(v) {
    const b = s(e + "CollectionConsumer", v);
    return c.useCallback(() => {
      const x = b.collectionRef.current;
      if (!x) return [];
      const y = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(b.itemMap.values()).sort(
        (S, E) => y.indexOf(S.ref.current) - y.indexOf(E.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return ke(g, "useCollection"), [
    { Provider: i, Slot: u, ItemSlot: h },
    g,
    r
  ];
}
ke(tv, "createCollection");
var uu = /* @__PURE__ */ new WeakMap(), Ee, Xe, po = (Xe = class extends Map {
  constructor(n) {
    super(n);
    to(this, Ee);
    bn(this, Ee, [...super.keys()]), uu.set(this, !0);
  }
  set(n, r) {
    return uu.get(this) && !this.has(n) && X(this, Ee).push(n), super.set(n, r), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(n, r, o) {
    const s = this.has(r), i = s ? this.size : this.size + 1, a = hc(n), l = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
    if (s ? X(this, Ee).indexOf(r) === l : l === this.size)
      return this.set(r, o), this;
    const u = X(this, Ee).filter((d) => d !== r);
    u.splice(l, 0, r);
    const m = u.map((d) => [
      d,
      d === r ? o : this.get(d)
    ]);
    this.clear();
    for (const [d, p] of m)
      this.set(d, p);
    return this;
  }
  with(n, r, o) {
    const s = new Xe(this);
    return s.insert(n, r, o), s;
  }
  before(n) {
    const r = X(this, Ee).indexOf(n) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, r, o) {
    const s = X(this, Ee).indexOf(n);
    if (s === -1)
      return this;
    const i = X(this, Ee).indexOf(r), a = i !== -1 && i < s ? s - 1 : s;
    return this.insert(a, r, o);
  }
  after(n) {
    let r = X(this, Ee).indexOf(n);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, r, o) {
    const s = X(this, Ee).indexOf(n);
    if (s === -1)
      return this;
    const i = X(this, Ee).indexOf(r), a = i !== -1 && i <= s ? s : s + 1;
    return this.insert(a, r, o);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return bn(this, Ee, []), super.clear();
  }
  delete(n) {
    const r = super.delete(n);
    return r && X(this, Ee).splice(X(this, Ee).indexOf(n), 1), r;
  }
  deleteAt(n) {
    const r = this.keyAt(n);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(n) {
    const r = So(X(this, Ee), n);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(n) {
    const r = So(X(this, Ee), n);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(n) {
    return X(this, Ee).indexOf(n);
  }
  keyAt(n) {
    return So(X(this, Ee), n);
  }
  from(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let s = o + r;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.at(s);
  }
  keyFrom(n, r) {
    const o = this.indexOf(n);
    if (o === -1)
      return;
    let s = o + r;
    return s < 0 && (s = 0), s >= this.size && (s = this.size - 1), this.keyAt(s);
  }
  find(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return s;
      o++;
    }
  }
  findIndex(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return o;
      o++;
    }
    return -1;
  }
  filter(n, r) {
    const o = [];
    let s = 0;
    for (const i of this)
      Reflect.apply(n, r, [i, s, this]) && o.push(i), s++;
    return new Xe(o);
  }
  map(n, r) {
    const o = [];
    let s = 0;
    for (const i of this)
      o.push([i[0], Reflect.apply(n, r, [i, s, this])]), s++;
    return new Xe(o);
  }
  reduce(...n) {
    const [r, o] = n, s = n.length > 1;
    if (!s && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let i = 0, a = o;
    for (const l of this)
      i === 0 && !s ? a = l : a = Reflect.apply(r, this, [a, l, i, this]), i++;
    return a;
  }
  reduceRight(...n) {
    const [r, o] = n, s = n.length > 1;
    if (!s && this.size === 0)
      throw new TypeError("Reduce of empty OrderedDict with no initial value");
    let i = o;
    for (let a = this.size - 1; a >= 0; a--) {
      const l = this.entryAt(a);
      a === this.size - 1 && !s ? i = l : i = Reflect.apply(r, this, [i, l, a, this]);
    }
    return i;
  }
  /**
   * Sorts the dictionary in place. This method mutates the dictionary and
   * returns a reference to the same object
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  sort(n) {
    if (typeof n != "function")
      throw new TypeError("OrderedDict.sort requires a compare function");
    const r = [...this.entries()].sort(n);
    this.clear();
    for (const [o, s] of r)
      this.set(o, s);
    return this;
  }
  /**
   * Returns a copy of the dictionary with its elements sorted.
   *
   * @param compareFn Function used to determine the order of the elements. It
   * is expected to return a negative value if the first argument is less than
   * the second argument, zero if they're equal, and a positive value otherwise.
   */
  toSorted(n) {
    if (typeof n != "function")
      throw new TypeError("OrderedDict.toSorted requires a compare function");
    const r = [...this.entries()].sort(n);
    return new Xe(r);
  }
  toReversed() {
    const n = new Xe();
    for (let r = this.size - 1; r >= 0; r--) {
      const o = this.keyAt(r), s = this.get(o);
      n.set(o, s);
    }
    return n;
  }
  toSpliced(...n) {
    const r = [...this.entries()];
    return r.splice(...n), new Xe(r);
  }
  slice(n, r) {
    const o = new Xe();
    for (const s of X(this, Ee).slice(n, r))
      o.set(s, this.get(s));
    return o;
  }
  every(n, r) {
    let o = 0;
    for (const s of this) {
      if (!Reflect.apply(n, r, [s, o, this]))
        return !1;
      o++;
    }
    return !0;
  }
  some(n, r) {
    let o = 0;
    for (const s of this) {
      if (Reflect.apply(n, r, [s, o, this]))
        return !0;
      o++;
    }
    return !1;
  }
}, Ee = new WeakMap(), ke(Xe, "OrderedDict"), Xe);
function So(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = nv(e, t);
  return n === -1 ? void 0 : e[n];
}
ke(So, "at");
function nv(e, t) {
  const n = e.length, r = hc(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
ke(nv, "toSafeIndex");
function hc(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
ke(hc, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function IM(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ bs(t), [o, s] = n(t);
  o.displayName = e + "CollectionStableContextProvider";
  const [i, a] = n(t);
  i.displayName = e + "CollectionStatefulContextProvider";
  const l = /* @__PURE__ */ ke(({ state: S, ...E }) => S ? /* @__PURE__ */ f(m, { ...E, state: S }) : /* @__PURE__ */ f(u, { ...E }), "CollectionProvider");
  l.displayName = t;
  const u = /* @__PURE__ */ ke((S) => {
    const E = x();
    return /* @__PURE__ */ f(m, { ...S, state: E });
  }, "CollectionInit");
  u.displayName = e + "CollectionInit";
  const m = /* @__PURE__ */ ke((S) => {
    const { scope: E, children: N, state: R } = S, k = c.useRef(null), [_, T] = c.useState(
      null
    ), L = Rt(k, T), [F, z] = R, A = c.useRef(
      new po()
    ), W = c.useCallback(() => {
      const M = A.current;
      return sv(M) || M.sort(Eo), M;
    }, []);
    return c.useEffect(() => {
      if (!_)
        return;
      const M = iv(() => {
        z(($) => {
          const O = $.toSorted(Eo);
          return O.some(([Q], re) => $.keyAt(re) !== Q) ? O : $;
        });
      });
      return M.observe(_, {
        childList: !0,
        subtree: !0
      }), () => {
        M.disconnect();
      };
    }, [_, z]), /* @__PURE__ */ f(
      o,
      {
        scope: E,
        collectionElementRef: L,
        collectionElementRefObject: k,
        getCollection: W,
        setCollection: z,
        registryRef: A,
        children: /* @__PURE__ */ f(
          i,
          {
            scope: E,
            collectionElement: _,
            collection: F,
            children: N
          }
        )
      }
    );
  }, "CollectionProviderImpl");
  m.displayName = e + "CollectionProviderImpl";
  const d = e + "CollectionSlot", p = /* @__PURE__ */ Pe(d), h = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R } = S, k = s(d, N), _ = Rt(E, k.collectionElementRef);
      return /* @__PURE__ */ f(p, { ref: _, children: R });
    }
  );
  h.displayName = d;
  const g = e + "CollectionItemSlot", v = "data-radix-collection-item", b = /* @__PURE__ */ Pe(g), w = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R, ...k } = S, _ = c.useRef(null), T = s(g, N), { setCollection: L, registryRef: F } = T, z = c.useRef(k);
      rv(z.current, k) || (z.current = k);
      const A = z.current, W = c.useCallback(
        (O) => {
          const B = F.current;
          O ? B.set(O, {
            ...z.current,
            element: O
          }) : _.current && B.delete(_.current);
        },
        [F]
      ), M = Rt(E, W, _);
      ln(() => {
        const O = _.current, B = F.current;
        O && B.has(O) && B.set(O, { ...A, element: O });
      }, [A, F]);
      const $ = c.useRef(null);
      return c.useEffect(() => {
        const O = _.current, B = $.current;
        (B?.element ?? null) === O && (!O || B?.itemData === A) || ($.current = O ? { element: O, itemData: A } : null, L((Q) => {
          const re = new po(Q);
          return B && B.element !== O && re.delete(B.element), O && re.set(O, { ...A, element: O }), re.sort(Eo);
        }));
      }), c.useEffect(() => () => {
        const O = $.current;
        $.current = null, O && L((B) => {
          if (!B.has(O.element))
            return B;
          const Q = new po(B);
          return Q.delete(O.element), Q;
        });
      }, [L]), /* @__PURE__ */ f(b, { [v]: "", ref: M, children: R });
    }
  );
  w.displayName = g;
  function x() {
    return c.useState(new po());
  }
  ke(x, "useInitCollection");
  function y(S) {
    const { collection: E } = a(e + "CollectionConsumer", S);
    return E;
  }
  ke(y, "useCollection");
  function C(S) {
    const { getCollection: E } = s(e + "CollectionConsumer", S);
    return E;
  }
  return ke(C, "useGetCollection"), [
    { Provider: l, Slot: h, ItemSlot: w },
    {
      createCollectionScope: r,
      useCollection: y,
      useGetCollection: C,
      useInitCollection: x
    }
  ];
}
ke(IM, "createCollection");
function rv(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
ke(rv, "shallowEqual");
function ov(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
ke(ov, "isElementPreceding");
function sv(e) {
  let t;
  for (const n of e.keys()) {
    if (t) {
      const r = t.compareDocumentPosition(n);
      if (!(r & Node.DOCUMENT_POSITION_DISCONNECTED) && r & Node.DOCUMENT_POSITION_PRECEDING)
        return !1;
    }
    t = n;
  }
  return !0;
}
ke(sv, "isInDocumentOrder");
function Eo(e, t) {
  return !e[1].element || !t[1].element ? 0 : ov(e[1].element, t[1].element) ? -1 : 1;
}
ke(Eo, "sortByDocumentPosition");
function iv(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
ke(iv, "getChildListObserver");
var _M = Object.defineProperty, $M = (e, t) => _M(e, "name", { value: t, configurable: !0 }), FM = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], It = FM.reduce((e, t) => {
  const n = /* @__PURE__ */ Pe(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function gc(e, t) {
  e && Ve.flushSync(() => e.dispatchEvent(t));
}
$M(gc, "dispatchDiscreteCustomEvent");
var LM = Object.defineProperty, WM = (e, t) => LM(e, "name", { value: t, configurable: !0 }), du = c[" useInsertionEffect ".trim().toString()];
function un(e) {
  const t = c.useRef(e);
  return typeof du == "function" ? du(() => {
    t.current = e;
  }) : ln(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
WM(un, "useCallbackRef");
var zM = Object.defineProperty, De = (e, t) => zM(e, "name", { value: t, configurable: !0 }), ki = "dismissableLayer.update", BM = "dismissableLayer.pointerDownOutside", HM = "dismissableLayer.focusOutside", fu, vc = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), VM = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ De(function(t, n) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: o = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...m
    } = t, d = c.useContext(vc), [p, h] = c.useState(null), g = p?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), b = Rt(n, h), w = Array.from(d.layers), [x] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), y = x ? w.indexOf(x) : -1, C = p ? w.indexOf(p) : -1, P = d.layersWithOutsidePointerEventsDisabled.size > 0, S = C >= y, E = c.useRef(!1), N = av(
      (T) => {
        i?.(T), l?.(T), T.defaultPrevented || u?.();
      },
      {
        ownerDocument: g,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: E,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: c.useCallback(
          (T) => {
            if (!(T instanceof Node))
              return !1;
            const L = [...d.branches].some(
              (F) => F.contains(T)
            );
            return S && !L;
          },
          [d.branches, S]
        )
      }
    ), R = cv((T) => {
      if (o && E.current)
        return;
      const L = T.target;
      [...d.branches].some((z) => z.contains(L)) || (a?.(T), l?.(T), T.defaultPrevented || u?.());
    }, g), k = p ? C === w.length - 1 : !1, _ = un((T) => {
      T.key === "Escape" && (s?.(T), !T.defaultPrevented && u && (T.preventDefault(), u()));
    });
    return c.useEffect(() => {
      if (k)
        return g.addEventListener("keydown", _, { capture: !0 }), () => g.removeEventListener("keydown", _, { capture: !0 });
    }, [g, k, _]), c.useEffect(() => {
      if (p)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (fu = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Ai(), () => {
          r && (d.layersWithOutsidePointerEventsDisabled.delete(p), d.layersWithOutsidePointerEventsDisabled.size === 0 && (g.body.style.pointerEvents = fu));
        };
    }, [p, g, r, d]), c.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Ai());
    }, [p, d]), c.useEffect(() => {
      const T = /* @__PURE__ */ De(() => v({}), "handleUpdate");
      return document.addEventListener(ki, T), () => document.removeEventListener(ki, T);
    }, []), /* @__PURE__ */ f(
      It.div,
      {
        ...m,
        ref: b,
        style: {
          pointerEvents: P ? S ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: He(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: He(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: He(
          t.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
), jM = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ De(function(t, n) {
  const r = c.useContext(vc), o = c.useRef(null), s = Rt(n, o);
  return c.useEffect(() => {
    const i = o.current;
    if (i)
      return r.branches.add(i), () => {
        r.branches.delete(i);
      };
  }, [r.branches]), /* @__PURE__ */ f(It.div, { ...t, ref: s });
}, "DismissableLayerBranch"));
function UM() {
  const e = c.useContext(vc), [t, n] = c.useState(null);
  return c.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
De(UM, "useDismissableLayerSurface");
var YM = /* @__PURE__ */ De(() => !0, "IS_TRUE");
function av(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = YM
  } = t, a = un(e), l = c.useRef(!1), u = c.useRef(!1), m = c.useRef(/* @__PURE__ */ new Map()), d = c.useRef(() => {
  });
  return c.useEffect(() => {
    function p() {
      u.current = !1, o.current = !1, m.current.clear();
    }
    De(p, "resetOutsideInteraction");
    function h() {
      return Array.from(m.current.values()).some(Boolean);
    }
    De(h, "isOutsideInteractionIntercepted");
    function g(y) {
      if (!u.current)
        return;
      const C = y.target;
      C instanceof Node && [...s].some((S) => S.contains(C)) || m.current.set(y.type, !0), y.type === "click" && window.setTimeout(() => {
        u.current && d.current();
      }, 0);
    }
    De(g, "handleInteractionCapture");
    function v(y) {
      u.current && m.current.set(y.type, !1);
    }
    De(v, "handleInteractionBubble");
    const b = /* @__PURE__ */ De((y) => {
      if (y.target && !l.current) {
        let C = function() {
          n.removeEventListener("click", d.current);
          const S = h();
          p(), S || bc(
            BM,
            a,
            P,
            { discrete: !0 }
          );
        };
        if (De(C, "handleAndDispatchPointerDownOutsideEvent"), !i(y.target)) {
          n.removeEventListener("click", d.current), p(), l.current = !1;
          return;
        }
        const P = { originalEvent: y };
        u.current = !0, o.current = r && y.button === 0, m.current.clear(), !r || y.button !== 0 ? C() : (n.removeEventListener("click", d.current), d.current = C, n.addEventListener("click", d.current, { once: !0 }));
      } else
        n.removeEventListener("click", d.current), p();
      l.current = !1;
    }, "handlePointerDown"), w = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const y of w)
      n.addEventListener(y, g, !0), n.addEventListener(y, v);
    const x = window.setTimeout(() => {
      n.addEventListener("pointerdown", b);
    }, 0);
    return () => {
      window.clearTimeout(x), n.removeEventListener("pointerdown", b), n.removeEventListener("click", d.current);
      for (const y of w)
        n.removeEventListener(y, g, !0), n.removeEventListener(y, v);
    };
  }, [
    n,
    a,
    r,
    o,
    s,
    i
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ De(() => l.current = !0, "onPointerDownCapture")
  };
}
De(av, "usePointerDownOutside");
function cv(e, t = globalThis?.document) {
  const n = un(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = /* @__PURE__ */ De((s) => {
      s.target && !r.current && bc(HM, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ De(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ De(() => r.current = !1, "onBlurCapture")
  };
}
De(cv, "useFocusOutside");
function Ai() {
  const e = new CustomEvent(ki);
  document.dispatchEvent(e);
}
De(Ai, "dispatchUpdate");
function bc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? gc(o, s) : o.dispatchEvent(s);
}
De(bc, "handleAndDispatchCustomEvent");
var GM = Object.defineProperty, KM = (e, t) => GM(e, "name", { value: t, configurable: !0 }), XM = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ KM(function(t, n) {
    const { container: r, ...o } = t, [s, i] = c.useState(!1);
    ln(() => i(!0), []);
    const a = r || s && globalThis?.document?.body;
    return a ? Ve.createPortal(/* @__PURE__ */ f(It.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), qM = Object.defineProperty, Yt = (e, t) => qM(e, "name", { value: t, configurable: !0 });
function lv(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
Yt(lv, "useStateMachine");
var ZM = /* @__PURE__ */ Yt((e) => {
  const { present: t, children: n } = e, r = uv(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = dv(r.ref, fv(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
}, "Presence");
function uv(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = c.useRef(void 0), a = e ? "mounted" : "unmounted", [l, u] = lv(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    l === "mounted" ? (s.current = i.current ?? Gn(r.current), i.current = void 0) : s.current = "none";
  }, [l]), ln(() => {
    const m = r.current, d = o.current;
    if (d !== e) {
      const h = s.current, g = Gn(m);
      e ? (i.current = g, u("MOUNT")) : g === "none" || m?.display === "none" ? u("UNMOUNT") : u(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), ln(() => {
    if (t) {
      let m;
      const d = t.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ Yt((g) => {
        const b = Gn(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && b && (u("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Yt((g) => {
        g.target === t && (s.current = Gn(r.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(m), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: c.useCallback((m) => {
      if (m) {
        const d = getComputedStyle(m);
        r.current = d, i.current = Gn(d);
      } else
        r.current = null;
      n(m);
    }, [])
  };
}
Yt(uv, "usePresence");
function Ii(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Yt(Ii, "setRef");
function dv(...e) {
  const t = c.useRef(e);
  return t.current = e, c.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((i) => {
      const a = Ii(i, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == "function" ? a() : Ii(r[i], null);
        }
      };
  }, []);
}
Yt(dv, "useStableComposedRefs");
function Gn(e) {
  return e?.animationName || "none";
}
Yt(Gn, "getAnimationName");
function fv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Yt(fv, "getElementRef");
var QM = Object.defineProperty, JM = (e, t) => QM(e, "name", { value: t, configurable: !0 }), mu = c[" useEffectEvent ".trim().toString()], pu = c[" useInsertionEffect ".trim().toString()];
function mv(e) {
  if (typeof mu == "function")
    return mu(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof pu == "function" ? pu(() => {
    t.current = e;
  }) : ln(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
JM(mv, "useEffectEvent");
var ek = Object.defineProperty, qr = (e, t) => ek(e, "name", { value: t, configurable: !0 }), tk = c[" useInsertionEffect ".trim().toString()] || ln;
function pv({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ qr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = hv({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = gv(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
qr(pv, "useControllableState");
function hv({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return tk(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
qr(hv, "useUncontrolledState");
function gv(e) {
  return typeof e == "function";
}
qr(gv, "isFunction");
var hu = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function nk(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = mv(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === hu)
        return { ...b, state: w.state };
      const x = e(b, w);
      return l && !Object.is(x.state, b.state) && u(x.state), x;
    },
    ...m
  ), h = d.state, g = c.useRef(h);
  c.useEffect(() => {
    g.current !== h && (g.current = h, l || u(h));
  }, [h, g, l]);
  const v = c.useMemo(() => o !== void 0 ? { ...d, state: o } : d, [d, o]);
  return c.useEffect(() => {
    l && !Object.is(o, d.state) && p({ type: hu, state: o });
  }, [o, d.state, l]), [v, p];
}
qr(nk, "useControllableStateReducer");
var rk = Object.defineProperty, ok = (e, t) => rk(e, "name", { value: t, configurable: !0 }), sk = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), vv = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ ok(function(t, n) {
    return /* @__PURE__ */ f(
      It.span,
      {
        ...t,
        ref: n,
        style: { ...sk, ...t.style }
      }
    );
  }, "VisuallyHidden")
), ik = Object.defineProperty, pe = (e, t) => ik(e, "name", { value: t, configurable: !0 }), gu = c[" startTransition ".trim().toString()] || (() => {
}), bv = "ToastProvider", [yc, yv, ak] = /* @__PURE__ */ tv("Toast"), _i = {
  Left: "left",
  Right: "right"
}, vu = {
  Foreground: "foreground"
}, [wv, t_] = /* @__PURE__ */ bs("Toast", [ak]), [ck, ys] = wv(bv);
function Po(e) {
  typeof gu == "function" ? gu(e) : e();
}
pe(Po, "scheduleUpdate");
var lk = /* @__PURE__ */ pe((e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = _i.Right,
    swipeThreshold: s = 50,
    announcerContainer: i,
    children: a
  } = e, [l, u] = c.useState(null), [m, d] = c.useState(0), p = c.useRef(!1), h = c.useCallback((b) => {
    Po(() => u(b));
  }, []), g = c.useCallback(() => {
    Po(() => d((b) => b + 1));
  }, []), v = c.useCallback(() => {
    Po(() => d((b) => b - 1));
  }, []);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${bv}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ f(yc.Provider, { scope: t, children: /* @__PURE__ */ f(
    ck,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: m,
      viewport: l,
      onViewportChange: h,
      onToastAdd: g,
      onToastRemove: v,
      isClosePausedRef: p,
      announcerContainer: i,
      children: a
    }
  ) });
}, "ToastProvider"), uk = "ToastViewport", dk = ["F8"], $i = "toast.viewportPause", Fi = "toast.viewportResume", fk = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const {
      __scopeToast: r,
      hotkey: o = dk,
      label: s = "Notifications ({hotkey})",
      ...i
    } = t, a = ys(uk, r), l = yv(r), u = c.useRef(null), m = c.useRef(null), d = c.useRef(null), p = c.useRef(null), h = Rt(n, p, a.onViewportChange), g = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = a.toastCount > 0;
    c.useEffect(() => {
      const w = /* @__PURE__ */ pe((x) => {
        o.length !== 0 && o.every((C) => x[C] || x.code === C) && p.current?.focus();
      }, "handleKeyDown");
      return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
    }, [o]), c.useEffect(() => {
      const w = u.current, x = p.current;
      if (v && w && x) {
        const y = /* @__PURE__ */ pe(() => {
          if (!a.isClosePausedRef.current) {
            const E = new CustomEvent($i);
            x.dispatchEvent(E), a.isClosePausedRef.current = !0;
          }
        }, "handlePause"), C = /* @__PURE__ */ pe(() => {
          if (a.isClosePausedRef.current) {
            const E = new CustomEvent(Fi);
            x.dispatchEvent(E), a.isClosePausedRef.current = !1;
          }
        }, "handleResume"), P = /* @__PURE__ */ pe((E) => {
          !w.contains(E.relatedTarget) && C();
        }, "handleFocusOutResume"), S = /* @__PURE__ */ pe(() => {
          w.contains(document.activeElement) || C();
        }, "handlePointerLeaveResume");
        return w.addEventListener("focusin", y), w.addEventListener("focusout", P), w.addEventListener("pointermove", y), w.addEventListener("pointerleave", S), window.addEventListener("blur", y), window.addEventListener("focus", C), () => {
          w.removeEventListener("focusin", y), w.removeEventListener("focusout", P), w.removeEventListener("pointermove", y), w.removeEventListener("pointerleave", S), window.removeEventListener("blur", y), window.removeEventListener("focus", C);
        };
      }
    }, [v, a.isClosePausedRef]);
    const b = c.useCallback(
      ({ tabbingDirection: w }) => {
        const y = l().map((C) => {
          const P = C.ref.current, S = [P, ...Pv(P)];
          return w === "forwards" ? S : S.reverse();
        });
        return (w === "forwards" ? y.reverse() : y).flat();
      },
      [l]
    );
    return c.useEffect(() => {
      const w = p.current;
      if (w) {
        const x = /* @__PURE__ */ pe((y) => {
          const C = y.altKey || y.ctrlKey || y.metaKey;
          if (y.key === "Tab" && !C) {
            const S = document.activeElement, E = y.shiftKey;
            if (y.target === w && E) {
              m.current?.focus();
              return;
            }
            const k = b({ tabbingDirection: E ? "backwards" : "forwards" }), _ = k.findIndex((T) => T === S);
            No(k.slice(_ + 1)) ? y.preventDefault() : E ? m.current?.focus() : d.current?.focus();
          }
        }, "handleKeyDown");
        return w.addEventListener("keydown", x), () => w.removeEventListener("keydown", x);
      }
    }, [l, b]), /* @__PURE__ */ D(
      jM,
      {
        ref: u,
        role: "region",
        "aria-label": s.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ f(
            bu,
            {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const w = b({
                  tabbingDirection: "forwards"
                });
                No(w);
              }
            }
          ),
          /* @__PURE__ */ f(yc.Slot, { scope: r, children: /* @__PURE__ */ f(It.ol, { tabIndex: -1, ...i, ref: h }) }),
          v && /* @__PURE__ */ f(
            bu,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = b({
                  tabbingDirection: "backwards"
                });
                No(w);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
), mk = "ToastFocusProxy", bu = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeToast: r, onFocusFromOutsideViewport: o, ...s } = t, i = ys(mk, r);
    return /* @__PURE__ */ f(
      vv,
      {
        tabIndex: 0,
        ...s,
        ref: n,
        style: { position: "fixed" },
        onFocus: (a) => {
          const l = a.relatedTarget;
          !i.viewport?.contains(l) && o();
        }
      }
    );
  }, "ToastFocusProxy")
), ws = "Toast", pk = "toast.swipeStart", hk = "toast.swipeMove", gk = "toast.swipeCancel", vk = "toast.swipeEnd", bk = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
    const { forceMount: r, open: o, defaultOpen: s, onOpenChange: i, ...a } = t, [l, u] = pv({
      prop: o,
      defaultProp: s ?? !0,
      onChange: i,
      caller: ws
    });
    return /* @__PURE__ */ f(ZM, { present: r || l, children: /* @__PURE__ */ f(
      xk,
      {
        open: l,
        ...a,
        ref: n,
        onClose: () => u(!1),
        onPause: un(t.onPause),
        onResume: un(t.onResume),
        onSwipeStart: He(t.onSwipeStart, (m) => {
          m.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: He(t.onSwipeMove, (m) => {
          const { x: d, y: p } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "move"), m.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
        }),
        onSwipeCancel: He(t.onSwipeCancel, (m) => {
          m.currentTarget.setAttribute("data-swipe", "cancel"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: He(t.onSwipeEnd, (m) => {
          const { x: d, y: p } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "end"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), m.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), m.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), u(!1);
        })
      }
    ) });
  }, "Toast")
), [yk, wk] = wv(ws, {
  onClose() {
  }
}), xk = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const {
      __scopeToast: r,
      type: o = vu.Foreground,
      duration: s,
      open: i,
      onClose: a,
      onEscapeKeyDown: l,
      onPause: u,
      onResume: m,
      onSwipeStart: d,
      onSwipeMove: p,
      onSwipeCancel: h,
      onSwipeEnd: g,
      ...v
    } = t, b = ys(ws, r), w = yv(r), [x, y] = c.useState(null), C = Rt(n, y), P = c.useRef(null), S = c.useRef(null), E = s || b.duration, N = c.useRef(0), R = c.useRef(E), k = c.useRef(0), { onToastAdd: _, onToastRemove: T } = b, L = un(() => {
      x?.contains(document.activeElement) && b.viewport?.focus(), a();
    }), F = c.useCallback(
      (A) => {
        !A || A === 1 / 0 || (window.clearTimeout(k.current), N.current = (/* @__PURE__ */ new Date()).getTime(), k.current = window.setTimeout(L, A));
      },
      [L]
    );
    c.useEffect(() => {
      const A = b.viewport;
      if (A) {
        const W = /* @__PURE__ */ pe(() => {
          F(R.current), m?.();
        }, "handleResume"), M = /* @__PURE__ */ pe(() => {
          const $ = (/* @__PURE__ */ new Date()).getTime() - N.current;
          R.current = R.current - $, window.clearTimeout(k.current), u?.();
        }, "handlePause");
        return A.addEventListener($i, M), A.addEventListener(Fi, W), () => {
          A.removeEventListener($i, M), A.removeEventListener(Fi, W);
        };
      }
    }, [b.viewport, E, u, m, F]), c.useEffect(() => {
      R.current = E, i && !b.isClosePausedRef.current && F(E);
    }, [i, E, b.isClosePausedRef, F]), c.useEffect(() => () => {
      window.clearTimeout(k.current);
    }, []), c.useEffect(() => (_(), () => T()), [_, T]);
    const z = c.useMemo(() => x ? wc(x) : null, [x]);
    return b.viewport ? /* @__PURE__ */ D(Be, { children: [
      z && /* @__PURE__ */ f(
        Ck,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": o === vu.Foreground ? "assertive" : "polite",
          children: z
        }
      ),
      /* @__PURE__ */ f(yk, { scope: r, onClose: L, children: Ve.createPortal(
        /* @__PURE__ */ f(yc.ItemSlot, { scope: r, children: /* @__PURE__ */ f(
          VM,
          {
            asChild: !0,
            onEscapeKeyDown: He(l, (A) => {
              w().some(
                (M) => M.ref.current?.contains(A.target)
              ) || L();
            }),
            children: /* @__PURE__ */ f(
              It.li,
              {
                tabIndex: 0,
                "data-state": i ? "open" : "closed",
                "data-swipe-direction": b.swipeDirection,
                ...v,
                ref: C,
                style: { userSelect: "none", touchAction: "none", ...t.style },
                onKeyDown: He(t.onKeyDown, (A) => {
                  A.key === "Escape" && (l?.(A.nativeEvent), A.nativeEvent.defaultPrevented || L());
                }),
                onPointerDown: He(t.onPointerDown, (A) => {
                  A.button === 0 && (P.current = { x: A.clientX, y: A.clientY });
                }),
                onPointerMove: He(t.onPointerMove, (A) => {
                  if (!P.current) return;
                  const W = A.clientX - P.current.x, M = A.clientY - P.current.y, $ = !!S.current, O = ["left", "right"].includes(b.swipeDirection), B = ["left", "up"].includes(b.swipeDirection) ? Math.min : Math.max, Q = O ? B(0, W) : 0, re = O ? 0 : B(0, M), be = A.pointerType === "touch" ? 10 : 2, J = { x: Q, y: re }, H = { originalEvent: A, delta: J };
                  $ ? (S.current = J, Pr(hk, p, H, {
                    discrete: !1
                  })) : yu(J, b.swipeDirection, be) ? (S.current = J, Pr(pk, d, H, {
                    discrete: !1
                  }), A.target.setPointerCapture(A.pointerId)) : (Math.abs(W) > be || Math.abs(M) > be) && (P.current = null);
                }),
                onPointerUp: He(t.onPointerUp, (A) => {
                  const W = S.current, M = A.target;
                  if (M.hasPointerCapture(A.pointerId) && M.releasePointerCapture(A.pointerId), S.current = null, P.current = null, W) {
                    const $ = A.currentTarget, O = { originalEvent: A, delta: W };
                    yu(W, b.swipeDirection, b.swipeThreshold) ? Pr(vk, g, O, {
                      discrete: !0
                    }) : Pr(
                      gk,
                      h,
                      O,
                      {
                        discrete: !0
                      }
                    ), $.addEventListener("click", (B) => B.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        b.viewport
      ) })
    ] }) : null;
  }, "ToastImpl")
), Ck = /* @__PURE__ */ pe((e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = ys(ws, t), [s, i] = c.useState(!1), [a, l] = c.useState(!1);
  return Sv(() => i(!0)), c.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), a ? null : /* @__PURE__ */ f(XM, { asChild: !0, container: o.announcerContainer || void 0, children: /* @__PURE__ */ f(vv, { ...r, children: s && /* @__PURE__ */ D(Be, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, "ToastAnnounce"), Sk = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeToast: r, ...o } = t;
    return /* @__PURE__ */ f(It.div, { ...o, ref: n });
  }, "ToastTitle")
), Ek = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeToast: r, ...o } = t;
    return /* @__PURE__ */ f(It.div, { ...o, ref: n });
  }, "ToastDescription")
), Pk = "ToastAction", Nk = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { altText: r, ...o } = t;
    return r.trim() ? /* @__PURE__ */ f(Cv, { altText: r, asChild: !0, children: /* @__PURE__ */ f(xv, { ...o, ref: n }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Pk}\`. Expected non-empty \`string\`.`
    ), null);
  }, "ToastAction")
), Ok = "ToastClose", xv = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ pe(function(t, n) {
    const { __scopeToast: r, ...o } = t, s = wk(Ok, r);
    return /* @__PURE__ */ f(Cv, { asChild: !0, children: /* @__PURE__ */ f(
      It.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: He(t.onClick, s.onClose)
      }
    ) });
  }, "ToastClose")
), Cv = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ pe(function(t, n) {
  const { __scopeToast: r, altText: o, ...s } = t;
  return /* @__PURE__ */ f(
    It.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": o || void 0,
      ...s,
      ref: n
    }
  );
}, "ToastAnnounceExclude"));
function wc(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Ev(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...wc(r));
    }
  }), t;
}
pe(wc, "getAnnounceTextContent");
function Pr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? gc(o, s) : o.dispatchEvent(s);
}
pe(Pr, "handleAndDispatchCustomEvent");
var yu = /* @__PURE__ */ pe((e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === _i.Left || t === _i.Right ? s && r > n : !s && o > n;
}, "isDeltaInDirection");
function Sv(e = () => {
}) {
  const t = un(e);
  ln(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
pe(Sv, "useNextFrame");
function Ev(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
pe(Ev, "isHTMLElement");
function Pv(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ pe((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
pe(Pv, "getTabbableCandidates");
function No(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
pe(No, "focusFirst");
const Rk = 5e3, Dk = 5;
function Tk(e) {
  return e === void 0 ? Rk : e === null || !Number.isFinite(e) || e <= 0 ? null : e;
}
function Mk(e) {
  return e === "error" || e === "warning" ? "assertive" : "polite";
}
function kk(e = Dk) {
  let t = [], n = 0;
  const r = /* @__PURE__ */ new Set(), o = (s) => {
    t = s, r.forEach((i) => i());
  };
  return {
    subscribe(s) {
      return r.add(s), () => {
        r.delete(s);
      };
    },
    getSnapshot: () => t,
    add(s) {
      n += 1;
      const i = s.id ?? `toast-${n}`, a = {
        id: i,
        title: s.title,
        description: s.description,
        variant: s.variant ?? "neutral",
        duration: Tk(s.duration),
        action: s.action
      }, l = t.filter((u) => u.id !== i);
      return o([...l, a].slice(-e)), i;
    },
    dismiss(s) {
      o(s === void 0 ? [] : t.filter((i) => i.id !== s));
    }
  };
}
const Dt = kk();
function Zr(e) {
  return Dt.add(e);
}
Zr.success = (e, t) => Dt.add({ ...t, title: e, variant: "success" });
Zr.error = (e, t) => Dt.add({ ...t, title: e, variant: "error" });
Zr.warning = (e, t) => Dt.add({ ...t, title: e, variant: "warning" });
Zr.info = (e, t) => Dt.add({ ...t, title: e, variant: "info" });
function Ak(e) {
  Dt.dismiss(e);
}
function Ik() {
  return { toasts: c.useSyncExternalStore(
    Dt.subscribe,
    Dt.getSnapshot,
    Dt.getSnapshot
  ), toast: Zr, dismiss: Ak };
}
const _k = {
  neutral: "bg-surface border-border text-text-base",
  info: "bg-info-bg border-info-border text-info-fg",
  success: "bg-success-bg border-success-border text-success-fg",
  warning: "bg-warning-bg border-warning-border text-warning-fg",
  error: "bg-error-bg border-error-border text-error-fg"
}, $k = {
  neutral: null,
  info: Ks,
  success: Au,
  warning: ku,
  error: Mu
};
function Fk({ item: e }) {
  const t = $k[e.variant];
  return /* @__PURE__ */ D(
    bk,
    {
      type: Mk(e.variant) === "assertive" ? "foreground" : "background",
      duration: e.duration ?? 1 / 0,
      onOpenChange: (n) => {
        n || Dt.dismiss(e.id);
      },
      className: I(
        "flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm shadow-lg",
        _k[e.variant]
      ),
      children: [
        t && /* @__PURE__ */ f(t, { className: "mt-0.5 h-4 w-4 shrink-0" }),
        /* @__PURE__ */ D("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ f(Sk, { className: "font-medium", children: e.title }),
          e.description && /* @__PURE__ */ f(Ek, { className: "mt-0.5 text-xs opacity-90", children: e.description })
        ] }),
        e.action && /* @__PURE__ */ f(Nk, { altText: e.action.label, asChild: !0, children: /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: e.action.onClick,
            className: "shrink-0 rounded-md px-2 py-1 text-xs font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            children: e.action.label
          }
        ) }),
        /* @__PURE__ */ f(xv, { asChild: !0, children: /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            "aria-label": "Chiudi notifica",
            className: "shrink-0 rounded-sm opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            children: /* @__PURE__ */ f(or, { className: "h-4 w-4" })
          }
        ) })
      ]
    }
  );
}
function n_({ label: e = "Notifiche ({hotkey})", className: t }) {
  const { toasts: n } = Ik();
  return /* @__PURE__ */ D(lk, { label: e, swipeDirection: "right", children: [
    n.map((r) => /* @__PURE__ */ f(Fk, { item: r }, r.id)),
    /* @__PURE__ */ f(
      fk,
      {
        className: I(
          "fixed bottom-4 right-4 z-[10000] m-0 flex w-[360px] max-w-[calc(100vw-2rem)] list-none flex-col gap-2 p-0 outline-none",
          t
        )
      }
    )
  ] });
}
var Lk = Object.defineProperty, gr = (e, t) => Lk(e, "name", { value: t, configurable: !0 }), Nv = !!(typeof window < "u" && window.document && window.document.createElement);
function xt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ gr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
gr(xt, "composeEventHandlers");
function Wk(e) {
  if (!Nv)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
gr(Wk, "getOwnerWindow");
function Li(e) {
  if (!Nv)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
gr(Li, "getOwnerDocument");
function Ov(e, t = !1) {
  const { activeElement: n } = Li(e);
  if (!n?.nodeName)
    return null;
  if (Rv(n) && n.contentDocument)
    return Ov(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Li(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
gr(Ov, "getActiveElement");
function Rv(e) {
  return e.tagName === "IFRAME";
}
gr(Rv, "isFrame");
var zk = Object.defineProperty, xc = (e, t) => zk(e, "name", { value: t, configurable: !0 });
function Wi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
xc(Wi, "setRef");
function Dv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Wi(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Wi(e[o], null);
        }
      };
  };
}
xc(Dv, "composeRefs");
function $n(...e) {
  return c.useCallback(Dv(...e), e);
}
xc($n, "useComposedRefs");
var Bk = Object.defineProperty, ct = (e, t) => Bk(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Hk(e, t) {
  const n = c.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ ct((s) => {
    const { children: i, ...a } = s, l = c.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ f(n.Provider, { value: l, children: i });
  }, "Provider");
  r.displayName = e + "Provider";
  function o(s, i = {}) {
    const { optional: a = !1 } = i, l = c.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return ct(o, "useContext"), [r, o];
}
ct(Hk, "createContext");
// @__NO_SIDE_EFFECTS__
function Cc(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i);
    a.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ ct((d) => {
      const { scope: p, children: h, ...g } = d, v = p?.[e]?.[l] || a, b = c.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ f(v.Provider, { value: b, children: h });
    }, "Provider");
    u.displayName = s + "Provider";
    function m(d, p, h = {}) {
      const { optional: g = !1 } = h, v = p?.[e]?.[l] || a, b = c.useContext(v);
      if (b) return b;
      if (i !== void 0) return i;
      if (!g)
        throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return ct(m, "useContext"), [u, m];
  }
  ct(r, "createContext");
  const o = /* @__PURE__ */ ct(() => {
    const s = n.map((i) => c.createContext(i));
    return /* @__PURE__ */ ct(function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, Tv(o, ...t)];
}
ct(Cc, "createContextScope");
function Tv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ ct(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ ct(function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
ct(Tv, "composeContextScopes");
var Vk = Object.defineProperty, jk = (e, t) => Vk(e, "name", { value: t, configurable: !0 }), Uk = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], vr = Uk.reduce((e, t) => {
  const n = /* @__PURE__ */ Pe(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Mv(e, t) {
  e && Ve.flushSync(() => e.dispatchEvent(t));
}
jk(Mv, "dispatchDiscreteCustomEvent");
var lt = globalThis?.document ? c.useLayoutEffect : () => {
}, Yk = Object.defineProperty, Gk = (e, t) => Yk(e, "name", { value: t, configurable: !0 }), wu = c[" useInsertionEffect ".trim().toString()];
function Qr(e) {
  const t = c.useRef(e);
  return typeof wu == "function" ? wu(() => {
    t.current = e;
  }) : lt(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
Gk(Qr, "useCallbackRef");
var Kk = Object.defineProperty, _e = (e, t) => Kk(e, "name", { value: t, configurable: !0 }), zi = "dismissableLayer.update", Xk = "dismissableLayer.pointerDownOutside", qk = "dismissableLayer.focusOutside", xu, kv = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), Zk = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ _e(function(t, n) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: o = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...m
    } = t, d = c.useContext(kv), [p, h] = c.useState(null), g = p?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), b = $n(n, h), w = Array.from(d.layers), [x] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), y = x ? w.indexOf(x) : -1, C = p ? w.indexOf(p) : -1, P = d.layersWithOutsidePointerEventsDisabled.size > 0, S = C >= y, E = c.useRef(!1), N = Av(
      (T) => {
        i?.(T), l?.(T), T.defaultPrevented || u?.();
      },
      {
        ownerDocument: g,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: E,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: c.useCallback(
          (T) => {
            if (!(T instanceof Node))
              return !1;
            const L = [...d.branches].some(
              (F) => F.contains(T)
            );
            return S && !L;
          },
          [d.branches, S]
        )
      }
    ), R = Iv((T) => {
      if (o && E.current)
        return;
      const L = T.target;
      [...d.branches].some((z) => z.contains(L)) || (a?.(T), l?.(T), T.defaultPrevented || u?.());
    }, g), k = p ? C === w.length - 1 : !1, _ = Qr((T) => {
      T.key === "Escape" && (s?.(T), !T.defaultPrevented && u && (T.preventDefault(), u()));
    });
    return c.useEffect(() => {
      if (k)
        return g.addEventListener("keydown", _, { capture: !0 }), () => g.removeEventListener("keydown", _, { capture: !0 });
    }, [g, k, _]), c.useEffect(() => {
      if (p)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (xu = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Bi(), () => {
          r && (d.layersWithOutsidePointerEventsDisabled.delete(p), d.layersWithOutsidePointerEventsDisabled.size === 0 && (g.body.style.pointerEvents = xu));
        };
    }, [p, g, r, d]), c.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Bi());
    }, [p, d]), c.useEffect(() => {
      const T = /* @__PURE__ */ _e(() => v({}), "handleUpdate");
      return document.addEventListener(zi, T), () => document.removeEventListener(zi, T);
    }, []), /* @__PURE__ */ f(
      vr.div,
      {
        ...m,
        ref: b,
        style: {
          pointerEvents: P ? S ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: xt(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: xt(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: xt(
          t.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function Qk() {
  const e = c.useContext(kv), [t, n] = c.useState(null);
  return c.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
_e(Qk, "useDismissableLayerSurface");
var Jk = /* @__PURE__ */ _e(() => !0, "IS_TRUE");
function Av(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = Jk
  } = t, a = Qr(e), l = c.useRef(!1), u = c.useRef(!1), m = c.useRef(/* @__PURE__ */ new Map()), d = c.useRef(() => {
  });
  return c.useEffect(() => {
    function p() {
      u.current = !1, o.current = !1, m.current.clear();
    }
    _e(p, "resetOutsideInteraction");
    function h() {
      return Array.from(m.current.values()).some(Boolean);
    }
    _e(h, "isOutsideInteractionIntercepted");
    function g(y) {
      if (!u.current)
        return;
      const C = y.target;
      C instanceof Node && [...s].some((S) => S.contains(C)) || m.current.set(y.type, !0), y.type === "click" && window.setTimeout(() => {
        u.current && d.current();
      }, 0);
    }
    _e(g, "handleInteractionCapture");
    function v(y) {
      u.current && m.current.set(y.type, !1);
    }
    _e(v, "handleInteractionBubble");
    const b = /* @__PURE__ */ _e((y) => {
      if (y.target && !l.current) {
        let C = function() {
          n.removeEventListener("click", d.current);
          const S = h();
          p(), S || Sc(
            Xk,
            a,
            P,
            { discrete: !0 }
          );
        };
        if (_e(C, "handleAndDispatchPointerDownOutsideEvent"), !i(y.target)) {
          n.removeEventListener("click", d.current), p(), l.current = !1;
          return;
        }
        const P = { originalEvent: y };
        u.current = !0, o.current = r && y.button === 0, m.current.clear(), !r || y.button !== 0 ? C() : (n.removeEventListener("click", d.current), d.current = C, n.addEventListener("click", d.current, { once: !0 }));
      } else
        n.removeEventListener("click", d.current), p();
      l.current = !1;
    }, "handlePointerDown"), w = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const y of w)
      n.addEventListener(y, g, !0), n.addEventListener(y, v);
    const x = window.setTimeout(() => {
      n.addEventListener("pointerdown", b);
    }, 0);
    return () => {
      window.clearTimeout(x), n.removeEventListener("pointerdown", b), n.removeEventListener("click", d.current);
      for (const y of w)
        n.removeEventListener(y, g, !0), n.removeEventListener(y, v);
    };
  }, [
    n,
    a,
    r,
    o,
    s,
    i
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ _e(() => l.current = !0, "onPointerDownCapture")
  };
}
_e(Av, "usePointerDownOutside");
function Iv(e, t = globalThis?.document) {
  const n = Qr(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = /* @__PURE__ */ _e((s) => {
      s.target && !r.current && Sc(qk, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ _e(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ _e(() => r.current = !1, "onBlurCapture")
  };
}
_e(Iv, "useFocusOutside");
function Bi() {
  const e = new CustomEvent(zi);
  document.dispatchEvent(e);
}
_e(Bi, "dispatchUpdate");
function Sc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Mv(o, s) : o.dispatchEvent(s);
}
_e(Sc, "handleAndDispatchCustomEvent");
var eA = Object.defineProperty, Le = (e, t) => eA(e, "name", { value: t, configurable: !0 }), _v = c.createContext(null);
function tA({ registry: e, children: t }) {
  return e ? /* @__PURE__ */ f(_v.Provider, { value: e, children: t }) : t;
}
Le(tA, "FocusScopeBranchProvider");
function nA() {
  const [e, t] = c.useState([]), n = c.useMemo(
    () => ({
      add: /* @__PURE__ */ Le((r) => t((o) => o.includes(r) ? o : [...o, r]), "add"),
      remove: /* @__PURE__ */ Le((r) => t((o) => o.filter((s) => s !== r)), "remove")
    }),
    []
  );
  return { nodes: e, registry: n };
}
Le(nA, "useFocusScopeBranchRegistry");
function $v(e) {
  const t = c.useContext(_v);
  c.useEffect(() => {
    if (!(!e || !t))
      return t.add(e), () => t.remove(e);
  }, [e, t]);
}
Le($v, "useFocusScopeBranch");
function rA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (zv(r, { select: t }), document.activeElement !== n) return;
}
Le(rA, "focusFirst");
function oA(e) {
  const t = Fv(e), n = Hi(t, e), r = Hi(t.reverse(), e);
  return [n, r];
}
Le(oA, "getTabbableEdges");
function Fv(e) {
  const t = [], r = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Le((o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
Le(Fv, "getTabbableCandidates");
function Hi(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Lv(r, { upTo: t })))
      return r;
}
Le(Hi, "findVisible");
function Lv(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
Le(Lv, "isHidden");
function Wv(e) {
  return e.tagName === "INPUT" && typeof e.select == "function";
}
Le(Wv, "isSelectableInput");
function zv(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = (e.ownerDocument ?? document).activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Wv(e) && t && e.select();
  }
}
Le(zv, "focus");
function sA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Vi(e, t), e.unshift(t);
    },
    remove(t) {
      e = Vi(e, t), e[0]?.resume();
    }
  };
}
Le(sA, "createFocusScopesStack");
function Vi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
Le(Vi, "arrayRemove");
function iA(e) {
  return e.filter((t) => t.tagName !== "A");
}
Le(iA, "removeLinks");
var aA = Object.defineProperty, cA = (e, t) => aA(e, "name", { value: t, configurable: !0 }), lA = c[" useId ".trim().toString()] || (() => {
}), uA = 0;
function Bv(e) {
  const [t, n] = c.useState(lA());
  return lt(() => {
    e || n((r) => r ?? String(uA++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
cA(Bv, "useId");
var dA = Object.defineProperty, fA = (e, t) => dA(e, "name", { value: t, configurable: !0 });
function Hv(e) {
  const [t, n] = c.useState(void 0);
  return lt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      let r = 0;
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        window.cancelAnimationFrame(r), r = window.requestAnimationFrame(() => {
          let a, l;
          if ("borderBoxSize" in i) {
            const u = i.borderBoxSize, m = Array.isArray(u) ? u[0] : u;
            a = m.inlineSize, l = m.blockSize;
          } else
            a = e.offsetWidth, l = e.offsetHeight;
          n({ width: a, height: l });
        });
      });
      return o.observe(e, { box: "border-box" }), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    } else
      n(void 0);
  }, [e]), t;
}
fA(Hv, "useSize");
var mA = Object.defineProperty, on = (e, t) => mA(e, "name", { value: t, configurable: !0 }), Cu = {
  Partial: "partial"
}, Su = {
  Optimized: "optimized",
  Always: "always"
}, Vv = "Popper", [jv, Uv] = /* @__PURE__ */ Cc(Vv), [pA, Yv] = jv(Vv), hA = /* @__PURE__ */ on((e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null), [s, i] = c.useState(void 0);
  return /* @__PURE__ */ f(
    pA,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
}, "Popper"), gA = "PopperAnchor", vA = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ on(function(t, n) {
    const { __scopePopper: r, virtualRef: o, ...s } = t, i = Yv(gA, r), a = c.useRef(null), l = i.onAnchorChange, u = c.useCallback(
      (v) => {
        a.current = v, v && l(v);
      },
      [l]
    ), m = $n(n, u), d = c.useRef(null);
    c.useEffect(() => {
      if (!o)
        return;
      const v = d.current;
      d.current = o.current, v !== d.current && l(d.current);
    });
    const p = i.placementState && xs(i.placementState), h = p?.[0], g = p?.[1];
    return o ? null : /* @__PURE__ */ f(
      vr.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": g,
        ...s,
        ref: m
      }
    );
  }, "PopperAnchor")
), Gv = "PopperContent", [bA, r_] = jv(Gv), yA = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ on(function(t, n) {
    const {
      __scopePopper: r,
      side: o = "bottom",
      sideOffset: s = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: l = 0,
      avoidCollisions: u = !0,
      collisionBoundary: m = [],
      collisionPadding: d = 0,
      sticky: p = Cu.Partial,
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = Su.Optimized,
      onPlaced: v,
      ...b
    } = t, w = Yv(Gv, r), [x, y] = c.useState(null), C = $n(n, y), [P, S] = c.useState(null), E = Hv(P), N = E?.width ?? 0, R = E?.height ?? 0, k = o + (i !== "center" ? "-" + i : ""), _ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, T = Array.isArray(m) ? m : [m], L = T.length > 0, F = {
      padding: _,
      boundary: T.filter(Kv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: z, floatingStyles: A, placement: W, isPositioned: M, middlewareData: $ } = xa({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: k,
      whileElementsMounted: /* @__PURE__ */ on((...K) => wa(...K, {
        animationFrame: g === Su.Always
      }), "whileElementsMounted"),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Ca({ mainAxis: s + R, alignmentAxis: a }),
        u && Sa({
          mainAxis: !0,
          crossAxis: !1,
          // Spread rather than passing `limiter: undefined`, which
          // `exactOptionalPropertyTypes` rejects for Floating UI's optional option.
          ...p === Cu.Partial ? { limiter: Ea() } : {},
          ...F
        }),
        u && Pa({ ...F }),
        Na({
          ...F,
          apply: /* @__PURE__ */ on(({ elements: K, rects: ee, availableWidth: se, availableHeight: ae }) => {
            const { width: me, height: ye } = ee.reference, ve = K.floating.style;
            ve.setProperty("--radix-popper-available-width", `${se}px`), ve.setProperty("--radix-popper-available-height", `${ae}px`), ve.setProperty("--radix-popper-anchor-width", `${me}px`), ve.setProperty("--radix-popper-anchor-height", `${ye}px`);
          }, "apply")
        }),
        P && Ra({ element: P, padding: l }),
        wA({ arrowWidth: N, arrowHeight: R }),
        h && // `hide` detects whether the anchor (reference) is clipped, so when
        // no explicit `collisionBoundary` is set we omit `boundary` entirely
        // and fall back to Floating UI's default clipping ancestors (e.g. a
        // scrollable menu). This lets an occluded submenu hide once its anchor
        // scrolls out of view (#3237). The collision/size middlewares
        // deliberately keep the viewport-based default to avoid clamping
        // content rendered inside transformed or overflow-clipping portal
        // containers. The key is omitted rather than set to `undefined`
        // because `exactOptionalPropertyTypes` rejects the explicit value.
        Oa(
          L ? { strategy: "referenceHidden", ...F } : {
            strategy: "referenceHidden",
            padding: F.padding,
            altBoundary: F.altBoundary
          }
        )
      ]
    }), O = w.setPlacementState;
    lt(() => (O(W), () => {
      O(void 0);
    }), [W, O]);
    const [B, Q] = xs(W), re = Qr(v);
    lt(() => {
      M && re?.();
    }, [M, re]);
    const be = $.arrow?.x, J = $.arrow?.y, H = $.arrow?.centerOffset !== 0, [j, oe] = c.useState();
    return lt(() => {
      x && oe(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ f(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...A,
          transform: M ? A.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: j,
          "--radix-popper-transform-origin": [
            $.transformOrigin?.x,
            $.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...$.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ f(
          bA,
          {
            scope: r,
            placedSide: B,
            placedAlign: Q,
            onArrowChange: S,
            arrowX: be,
            arrowY: J,
            shouldHideArrow: H,
            children: /* @__PURE__ */ f(
              vr.div,
              {
                "data-side": B,
                "data-align": Q,
                ...b,
                ref: C,
                style: {
                  ...b.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: M ? b.style?.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
);
function Kv(e) {
  return e !== null;
}
on(Kv, "isNotNull");
var wA = /* @__PURE__ */ on((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, m] = xs(n), d = { start: "0%", center: "50%", end: "100%" }[m], p = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let g = "", v = "";
    return u === "bottom" ? (g = i ? d : `${p}px`, v = `${-l}px`) : u === "top" ? (g = i ? d : `${p}px`, v = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, v = i ? d : `${h}px`) : u === "left" && (g = `${r.floating.width + l}px`, v = i ? d : `${h}px`), { data: { x: g, y: v } };
  }
}), "transformOrigin");
function xs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
on(xs, "getSideAndAlignFromPlacement");
var xA = Object.defineProperty, CA = (e, t) => xA(e, "name", { value: t, configurable: !0 }), SA = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ CA(function(t, n) {
    const { container: r, ...o } = t, [s, i] = c.useState(!1);
    lt(() => i(!0), []);
    const a = r || s && globalThis?.document?.body;
    return a ? Ve.createPortal(/* @__PURE__ */ f(vr.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), EA = Object.defineProperty, Gt = (e, t) => EA(e, "name", { value: t, configurable: !0 });
function Xv(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
Gt(Xv, "useStateMachine");
var qv = /* @__PURE__ */ Gt((e) => {
  const { present: t, children: n } = e, r = Zv(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = Qv(r.ref, Jv(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
}, "Presence");
function Zv(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = c.useRef(void 0), a = e ? "mounted" : "unmounted", [l, u] = Xv(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    l === "mounted" ? (s.current = i.current ?? Kn(r.current), i.current = void 0) : s.current = "none";
  }, [l]), lt(() => {
    const m = r.current, d = o.current;
    if (d !== e) {
      const h = s.current, g = Kn(m);
      e ? (i.current = g, u("MOUNT")) : g === "none" || m?.display === "none" ? u("UNMOUNT") : u(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), lt(() => {
    if (t) {
      let m;
      const d = t.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ Gt((g) => {
        const b = Kn(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && b && (u("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Gt((g) => {
        g.target === t && (s.current = Kn(r.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(m), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: c.useCallback((m) => {
      if (m) {
        const d = getComputedStyle(m);
        r.current = d, i.current = Kn(d);
      } else
        r.current = null;
      n(m);
    }, [])
  };
}
Gt(Zv, "usePresence");
function ji(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Gt(ji, "setRef");
function Qv(...e) {
  const t = c.useRef(e);
  return t.current = e, c.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((i) => {
      const a = ji(i, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == "function" ? a() : ji(r[i], null);
        }
      };
  }, []);
}
Gt(Qv, "useStableComposedRefs");
function Kn(e) {
  return e?.animationName || "none";
}
Gt(Kn, "getAnimationName");
function Jv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Gt(Jv, "getElementRef");
var PA = Object.defineProperty, NA = (e, t) => PA(e, "name", { value: t, configurable: !0 }), Eu = c[" useEffectEvent ".trim().toString()], Pu = c[" useInsertionEffect ".trim().toString()];
function eb(e) {
  if (typeof Eu == "function")
    return Eu(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Pu == "function" ? Pu(() => {
    t.current = e;
  }) : lt(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
NA(eb, "useEffectEvent");
var OA = Object.defineProperty, Jr = (e, t) => OA(e, "name", { value: t, configurable: !0 }), RA = c[" useInsertionEffect ".trim().toString()] || lt;
function tb({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Jr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = nb({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = rb(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
Jr(tb, "useControllableState");
function nb({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return RA(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
Jr(nb, "useUncontrolledState");
function rb(e) {
  return typeof e == "function";
}
Jr(rb, "isFunction");
var Nu = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function DA(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = eb(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === Nu)
        return { ...b, state: w.state };
      const x = e(b, w);
      return l && !Object.is(x.state, b.state) && u(x.state), x;
    },
    ...m
  ), h = d.state, g = c.useRef(h);
  c.useEffect(() => {
    g.current !== h && (g.current = h, l || u(h));
  }, [h, g, l]);
  const v = c.useMemo(() => o !== void 0 ? { ...d, state: o } : d, [d, o]);
  return c.useEffect(() => {
    l && !Object.is(o, d.state) && p({ type: Nu, state: o });
  }, [o, d.state, l]), [v, p];
}
Jr(DA, "useControllableStateReducer");
var TA = Object.defineProperty, MA = (e, t) => TA(e, "name", { value: t, configurable: !0 }), kA = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), AA = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ MA(function(t, n) {
    return /* @__PURE__ */ f(
      vr.span,
      {
        ...t,
        ref: n,
        style: { ...kA, ...t.style }
      }
    );
  }, "VisuallyHidden")
), IA = Object.defineProperty, Ae = (e, t) => IA(e, "name", { value: t, configurable: !0 }), [Ec, o_] = /* @__PURE__ */ Cc("Tooltip", [
  Uv
]), Pc = Uv(), _A = "TooltipProvider", $A = 700, Ui = "tooltip.open", [FA, Nc] = Ec(_A), LA = /* @__PURE__ */ Ae((e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = $A,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = c.useRef(!0), a = c.useRef(!1), l = c.useRef(0);
  return c.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ f(
    FA,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: c.useCallback(() => {
        r <= 0 || (window.clearTimeout(l.current), i.current = !1);
      }, [r]),
      onClose: c.useCallback(() => {
        r <= 0 || (window.clearTimeout(l.current), l.current = window.setTimeout(
          () => i.current = !0,
          r
        ));
      }, [r]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: c.useCallback((u) => {
        a.current = u;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
}, "TooltipProvider"), Yi = "Tooltip", [WA, eo] = Ec(Yi), zA = /* @__PURE__ */ Ae((e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = Nc(Yi, e.__scopeTooltip), u = Pc(t), [m, d] = c.useState(null), [p, h] = c.useState(void 0), g = Bv(), v = c.useRef(0), b = i ?? l.disableHoverableContent, w = a ?? l.delayDuration, x = c.useRef(!1), [y, C] = tb({
    prop: r,
    defaultProp: o ?? !1,
    onChange: /* @__PURE__ */ Ae((k) => {
      k ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ui))) : l.onClose(), s?.(k);
    }, "onChange"),
    caller: Yi
  }), P = c.useMemo(() => y ? x.current ? "delayed-open" : "instant-open" : "closed", [y]), S = c.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, x.current = !1, C(!0);
  }, [C]), E = c.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, C(!1);
  }, [C]), N = c.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      x.current = !0, C(!0), v.current = 0;
    }, w);
  }, [w, C]);
  return c.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ f(hA, { ...u, children: /* @__PURE__ */ f(
    WA,
    {
      scope: t,
      contentId: p ?? g,
      setContentId: h,
      open: y,
      stateAttribute: P,
      trigger: m,
      onTriggerChange: d,
      onTriggerEnter: c.useCallback(() => {
        l.isOpenDelayedRef.current ? N() : S();
      }, [l.isOpenDelayedRef, N, S]),
      onTriggerLeave: c.useCallback(() => {
        b ? E() : (window.clearTimeout(v.current), v.current = 0);
      }, [E, b]),
      onOpen: S,
      onClose: E,
      disableHoverableContent: b,
      children: n
    }
  ) });
}, "Tooltip"), Ou = "TooltipTrigger", BA = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Ae(function(t, n) {
    const { __scopeTooltip: r, "aria-describedby": o, ...s } = t, i = eo(Ou, r), a = Nc(Ou, r), l = Pc(r), u = c.useRef(null), m = $n(n, u, i.onTriggerChange), d = c.useRef(!1), p = c.useRef(!1), h = c.useCallback(() => d.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ f(vA, { asChild: !0, ...l, children: /* @__PURE__ */ f(
      vr.button,
      {
        "aria-describedby": i.open ? fb(o, i.contentId) : o,
        "data-state": i.stateAttribute,
        ...s,
        ref: m,
        onPointerMove: xt(t.onPointerMove, (g) => {
          g.pointerType !== "touch" && !p.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: xt(t.onPointerLeave, () => {
          i.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: xt(t.onPointerDown, () => {
          i.open && i.onClose(), d.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: xt(t.onFocus, () => {
          d.current || i.onOpen();
        }),
        onBlur: xt(t.onBlur, i.onClose),
        onClick: xt(t.onClick, i.onClose)
      }
    ) });
  }, "TooltipTrigger")
), ob = "TooltipPortal", [HA, VA] = Ec(ob, {
  forceMount: void 0
}), jA = /* @__PURE__ */ Ae((e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = eo(ob, t);
  return /* @__PURE__ */ f(HA, { scope: t, forceMount: n, children: /* @__PURE__ */ f(qv, { present: n || s.open, children: /* @__PURE__ */ f(SA, { asChild: !0, container: o, children: r }) }) });
}, "TooltipPortal"), Ar = "TooltipContent", UA = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Ae(function(t, n) {
    const r = VA(Ar, t.__scopeTooltip), { forceMount: o = r.forceMount, side: s = "top", ...i } = t, a = eo(Ar, t.__scopeTooltip);
    return /* @__PURE__ */ f(qv, { present: o || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ f(sb, { side: s, ...i, ref: n }) : /* @__PURE__ */ f(YA, { side: s, ...i, ref: n }) });
  }, "TooltipContent")
), YA = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ Ae(function(t, n) {
  const r = eo(Ar, t.__scopeTooltip), o = Nc(Ar, t.__scopeTooltip), s = c.useRef(null), i = $n(n, s), [a, l] = c.useState(null), { trigger: u, onClose: m } = r, d = s.current, { onPointerInTransitChange: p } = o, h = c.useCallback(() => {
    l(null), p(!1);
  }, [p]), g = c.useCallback(
    (v, b) => {
      const w = v.currentTarget, x = { x: v.clientX, y: v.clientY }, y = ib(x, w.getBoundingClientRect()), C = ab(x, y), P = cb(b.getBoundingClientRect()), S = ub([...C, ...P]);
      l(S), p(!0);
    },
    [p]
  );
  return c.useEffect(() => () => h(), [h]), c.useEffect(() => {
    if (u && d) {
      const v = /* @__PURE__ */ Ae((w) => g(w, d), "handleTriggerLeave"), b = /* @__PURE__ */ Ae((w) => g(w, u), "handleContentLeave");
      return u.addEventListener("pointerleave", v), d.addEventListener("pointerleave", b), () => {
        u.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", b);
      };
    }
  }, [u, d, g, h]), c.useEffect(() => {
    if (a) {
      const v = /* @__PURE__ */ Ae((b) => {
        const w = b.target, x = { x: b.clientX, y: b.clientY }, y = u?.contains(w) || d?.contains(w), C = !lb(x, a);
        y ? h() : C && (h(), m());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [u, d, a, m, h]), /* @__PURE__ */ f(sb, { ...t, ref: i });
}, "TooltipContentHoverable")), GA = /* @__PURE__ */ Gu("TooltipContent"), sb = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ae(function(t, n) {
    const {
      __scopeTooltip: r,
      children: o,
      "aria-label": s,
      id: i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = t, m = eo(Ar, r), d = Pc(r), { onClose: p } = m, [h, g] = c.useState(null), v = $n(n, g);
    $v(h), c.useEffect(() => (document.addEventListener(Ui, p), () => document.removeEventListener(Ui, p)), [p]), c.useEffect(() => {
      if (m.trigger) {
        const w = /* @__PURE__ */ Ae((x) => {
          x.target instanceof Node && x.target.contains(m.trigger) && p();
        }, "handleScroll");
        return window.addEventListener("scroll", w, { capture: !0 }), () => window.removeEventListener("scroll", w, { capture: !0 });
      }
    }, [m.trigger, p]);
    const { setContentId: b } = m;
    return lt(() => (b(i), () => {
      b(void 0);
    }), [i, b]), /* @__PURE__ */ f(
      Zk,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ D(
          yA,
          {
            "data-state": m.stateAttribute,
            role: s ? void 0 : "tooltip",
            id: s ? void 0 : m.contentId,
            ...d,
            ...u,
            ref: v,
            style: {
              ...u.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ f(GA, { children: o }),
              s ? /* @__PURE__ */ f(AA, { id: m.contentId, role: "tooltip", children: s }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
);
function ib(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
Ae(ib, "getExitSideFromRect");
function ab(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
Ae(ab, "getPaddedExitPoints");
function cb(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
Ae(cb, "getPointsFromRect");
function lb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], u = a.x, m = a.y, d = l.x, p = l.y;
    m > r != p > r && n < (d - u) * (r - m) / (p - m) + u && (o = !o);
  }
  return o;
}
Ae(lb, "isPointInPolygon");
function ub(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), db(t);
}
Ae(ub, "getHull");
function db(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
Ae(db, "getHullPresorted");
function fb(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (typeof n == "string")
      for (const r of String(n).trim().split(/\s+/))
        r && t.add(r);
  return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
Ae(fb, "concatAriaDescribedby");
const KA = LA, XA = zA, qA = BA, mb = c.forwardRef(({ className: e, sideOffset: t = 6, ...n }, r) => /* @__PURE__ */ f(jA, { children: /* @__PURE__ */ f(
  UA,
  {
    ref: r,
    sideOffset: t,
    className: I(
      "z-[9999] max-w-xs rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs text-text-base shadow-md",
      e
    ),
    ...n
  }
) }));
mb.displayName = "TooltipContent";
function s_({
  content: e,
  children: t,
  side: n = "top",
  align: r = "center",
  delayDuration: o = 200,
  className: s
}) {
  return e == null || e === "" || e === !1 ? t : /* @__PURE__ */ f(KA, { delayDuration: o, children: /* @__PURE__ */ D(XA, { children: [
    /* @__PURE__ */ f(qA, { asChild: !0, children: t }),
    /* @__PURE__ */ f(mb, { side: n, align: r, className: s, children: e })
  ] }) });
}
const Gi = "databeez-theme", i_ = `(function(){var t=localStorage.getItem('${Gi}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`, pb = Du({
  theme: "system",
  setTheme: () => {
  }
});
function a_({ children: e }) {
  const [t, n] = pt("system"), r = (s) => {
    const i = document.documentElement, a = window.matchMedia("(prefers-color-scheme: dark)").matches;
    s === "dark" || s === "system" && a ? i.classList.add("dark") : i.classList.remove("dark");
  };
  Pn(() => {
    const i = localStorage.getItem(Gi) ?? "system";
    n(i), r(i);
  }, []), Pn(() => {
    if (t !== "system") return;
    const s = window.matchMedia("(prefers-color-scheme: dark)"), i = () => r("system");
    return s.addEventListener("change", i), () => s.removeEventListener("change", i);
  }, [t]);
  const o = (s) => {
    n(s), localStorage.setItem(Gi, s), r(s);
  };
  return /* @__PURE__ */ f(pb.Provider, { value: { theme: t, setTheme: o }, children: e });
}
function ZA() {
  return Tu(pb);
}
const Gs = ["light", "dark", "system"];
function c_() {
  const { theme: e, setTheme: t } = ZA(), [n, r] = pt(!1);
  Pn(() => {
    r(!0);
  }, []);
  const o = () => {
    const s = Gs.indexOf(e);
    t(Gs[(s + 1) % Gs.length]);
  };
  return n ? /* @__PURE__ */ f(
    "button",
    {
      onClick: o,
      className: "p-2 rounded-lg text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
      "aria-label": `Tema: ${e}`,
      title: `Tema corrente: ${e}`,
      children: e === "dark" ? /* @__PURE__ */ f(ry, { className: "h-4 w-4" }) : e === "system" ? /* @__PURE__ */ f(oy, { className: "h-4 w-4" }) : /* @__PURE__ */ f(sy, { className: "h-4 w-4" })
    }
  ) : null;
}
function l_({ user: e, bumblebeeUrl: t, extraItems: n, onLogout: r, showLaunchpadLink: o = !0 }) {
  const [s, i] = pt(!1), [a, l] = pt({}), u = tn(null), m = tn(null), d = tn(null);
  Pn(() => {
    const g = (v) => {
      u.current && !u.current.contains(v.target) && (!d.current || !d.current.contains(v.target)) && i(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []), Pn(() => {
    if (s && m.current) {
      const g = m.current.getBoundingClientRect();
      l({
        top: g.bottom + 8,
        right: window.innerWidth - g.right
      });
    }
  }, [s]);
  const p = r ?? (() => {
    window.location.href = `${t}/logout`;
  }), h = n && n.length > 0;
  return /* @__PURE__ */ D("div", { className: "relative", ref: u, children: [
    /* @__PURE__ */ D(
      "button",
      {
        ref: m,
        onClick: () => i(!s),
        className: "flex items-center space-x-2 text-text-muted hover:text-databeez-primary px-3 py-2 text-sm font-medium transition-colors",
        children: [
          /* @__PURE__ */ f(Nr, { className: "h-4 w-4" }),
          /* @__PURE__ */ f("span", { className: "hidden sm:block", children: e.fullname }),
          /* @__PURE__ */ f(rr, { className: "h-4 w-4" })
        ]
      }
    ),
    s && Lb(
      /* @__PURE__ */ D(
        "div",
        {
          ref: d,
          style: a,
          className: "fixed w-56 bg-surface border border-border rounded-md shadow-lg py-1 z-[9999]",
          children: [
            /* @__PURE__ */ D("div", { className: "px-4 py-2 border-b border-border", children: [
              /* @__PURE__ */ f("p", { className: "text-sm font-medium text-text-base truncate", children: e.fullname }),
              /* @__PURE__ */ f("p", { className: "text-xs text-text-muted truncate", children: e.email })
            ] }),
            h && /* @__PURE__ */ D(Be, { children: [
              n.map(
                (g, v) => g.href ? /* @__PURE__ */ D(
                  "a",
                  {
                    href: g.href,
                    className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
                    onClick: () => i(!1),
                    children: [
                      g.icon && /* @__PURE__ */ f("span", { className: "mr-2 flex-shrink-0", children: g.icon }),
                      g.label
                    ]
                  },
                  v
                ) : /* @__PURE__ */ D(
                  "button",
                  {
                    onClick: () => {
                      i(!1), g.onClick?.();
                    },
                    className: "flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle",
                    children: [
                      g.icon && /* @__PURE__ */ f("span", { className: "mr-2 flex-shrink-0", children: g.icon }),
                      g.label
                    ]
                  },
                  v
                )
              ),
              /* @__PURE__ */ f("div", { className: "border-t border-border my-1" })
            ] }),
            /* @__PURE__ */ D(
              "a",
              {
                href: `${t}/profile`,
                className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
                onClick: () => i(!1),
                children: [
                  /* @__PURE__ */ f(iy, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
                  "Gestione Profilo"
                ]
              }
            ),
            o && /* @__PURE__ */ D(
              "a",
              {
                href: `${t}/launchpad`,
                className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
                onClick: () => i(!1),
                children: [
                  /* @__PURE__ */ f(ay, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
                  "Torna al LaunchPad"
                ]
              }
            ),
            /* @__PURE__ */ f("div", { className: "border-t border-border my-1" }),
            /* @__PURE__ */ D(
              "button",
              {
                onClick: () => {
                  i(!1), p();
                },
                className: "flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle",
                children: [
                  /* @__PURE__ */ f(cy, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
                  "Logout"
                ]
              }
            )
          ]
        }
      ),
      document.body
    )
  ] });
}
function u_(e, t = {}) {
  const { immediate: n = !0 } = t, [r, o] = pt(null), [s, i] = pt(n), [a, l] = pt(null), u = tn(e);
  u.current = e;
  const m = Ue(async () => {
    i(!0), l(null);
    try {
      const d = await u.current();
      d.success && d.data !== void 0 ? o(d.data) : l(d.error?.message ?? "Si è verificato un errore");
    } catch (d) {
      l(d instanceof Error ? d.message : "Si è verificato un errore");
    } finally {
      i(!1);
    }
  }, []);
  return Pn(() => {
    n && m();
  }, t.deps ?? []), { data: r, loading: s, error: a, refetch: m };
}
function d_(e, t) {
  return !Number.isFinite(e) || !Number.isFinite(t) || t <= 0 ? 1 : Math.max(1, Math.ceil(e / t));
}
function f_(e, t) {
  return Number.isFinite(e) ? Math.min(Math.max(1, Math.trunc(e)), Math.max(1, t)) : 1;
}
export {
  dI as ADDRESS_META,
  Jd as APP_LOGOS,
  oI as APP_LOGO_SLUGS,
  Cx as Accordion,
  Px as AccordionContent,
  Sx as AccordionItem,
  Ex as AccordionTrigger,
  Rx as Alert,
  sI as AppLogo,
  cI as Badge,
  Tx as BeeGraphLogo,
  Mx as BeeMapLogo,
  kx as BeeScoutLogo,
  Jn as Button,
  Ua as Calendar,
  $x as Card,
  zx as CardContent,
  Wx as CardDescription,
  Bx as CardFooter,
  Fx as CardHeader,
  Lx as CardTitle,
  Hx as ChatInput,
  Do as Checkbox,
  lI as CheckboxTree,
  bI as CodeBlock,
  ME as ColorPicker,
  kE as Combobox,
  pI as CompanyHeader,
  vI as ConfirmDialog,
  Xf as CopyButton,
  TE as DEFAULT_PRESETS,
  SI as DataBeezLogo,
  yI as DataSourceBadge,
  UN as DatePicker,
  YN as DateRangePicker,
  b0 as Delta,
  c0 as Dialog,
  gI as DialogClose,
  bm as DialogContent,
  Cm as DialogDescription,
  wm as DialogFooter,
  ym as DialogHeader,
  vm as DialogOverlay,
  u0 as DialogPortal,
  xm as DialogTitle,
  l0 as DialogTrigger,
  kI as DropdownMenu,
  aD as DropdownMenuContent,
  II as DropdownMenuGroup,
  cD as DropdownMenuItem,
  lD as DropdownMenuLabel,
  uD as DropdownMenuSeparator,
  AI as DropdownMenuTrigger,
  _I as EmptyState,
  kn as FORMAT_PLACEHOLDER,
  FI as FeatureCard,
  pD as FilterChip,
  LI as FloatingPanel,
  Ax as HaiveLogo,
  iI as InfoRow,
  vD as Input,
  bD as InputWithIcon,
  fI as LOCATION_META,
  fD as MarkdownContent,
  $I as MessageBubble,
  WI as MethodBadge,
  xD as MultiSelect,
  $E as ORG_TYPE_META,
  IE as PERSON_TYPE_META,
  WE as PONTE_META,
  zI as PageHeader,
  aM as Pagination,
  Br as Popover,
  uI as PopoverAnchor,
  ur as PopoverContent,
  Hr as PopoverTrigger,
  BI as ProgressBar,
  SD as RISK_LEVEL_LABELS,
  VI as RiskBadge,
  wl as SUBJECT_TYPE_META,
  WD as ScrollArea,
  $h as ScrollBar,
  zD as SearchInput,
  aI as Section,
  jI as Select,
  DT as SelectContent,
  UI as SelectGroup,
  MT as SelectItem,
  TT as SelectLabel,
  Sg as SelectScrollDownButton,
  Cg as SelectScrollUpButton,
  kT as SelectSeparator,
  RT as SelectTrigger,
  YI as SelectValue,
  GI as SidePanel,
  Eg as Skeleton,
  KI as SkeletonCard,
  _T as SkeletonText,
  XI as Sparkline,
  FT as Spinner,
  qI as SpinnerOverlay,
  ZI as StatCard,
  HE as StatusBadge,
  QI as StatusIndicatorRow,
  VT as Stepper,
  Dx as SwarmLogo,
  qT as Switch,
  i_ as THEME_ANTI_FOUC_SCRIPT,
  Gi as THEME_STORAGE_KEY,
  JI as TabSwitch,
  QT as Table,
  eM as TableBody,
  iM as TableCaption,
  sM as TableCell,
  tM as TableFooter,
  Tg as TableHead,
  JT as TableHeader,
  nM as TableRow,
  oM as TableSortHead,
  e_ as Tabs,
  PM as TabsContent,
  SM as TabsList,
  EM as TabsTrigger,
  NM as Textarea,
  a_ as ThemeProvider,
  c_ as ThemeSwitcher,
  OM as TimePicker,
  n_ as Toaster,
  s_ as Tooltip,
  mb as TooltipContent,
  KA as TooltipProvider,
  XA as TooltipRoot,
  qA as TooltipTrigger,
  l_ as UserMenu,
  Nx as alertVariants,
  Ix as badgeVariants,
  _x as buttonVariants,
  f_ as clampPage,
  en as clampWidth,
  I as cn,
  VE as deriveStatoVariant,
  Ak as dismissToast,
  p0 as formatDate,
  CI as formatDateTime,
  f0 as formatDelta,
  wI as formatEuro,
  Fs as formatNumber,
  xI as formatPercent,
  h0 as getDeltaState,
  LE as getOrgMeta,
  d_ as getPageCount,
  _E as getPersonMeta,
  mI as getPonteMeta,
  AE as getSubjectMeta,
  HI as riskLevelFromScore,
  $T as spinnerVariants,
  zE as statusBadgeVariants,
  LT as stepCircleVariants,
  zT as stepConnectorVariants,
  WT as stepLabelVariants,
  Zr as toast,
  u_ as useAsyncData,
  ZA as useTheme,
  Ik as useToast,
  AT as widthAfterDrag,
  IT as widthAfterKey
};
