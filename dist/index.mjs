"use client";
var Dc = (e) => {
  throw TypeError(e);
};
var Mc = (e, t, n) => t.has(e) || Dc("Cannot " + n);
var q = (e, t, n) => (Mc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), no = (e, t, n) => t.has(e) ? Dc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), yn = (e, t, n, r) => (Mc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
import { jsx as f, jsxs as k, Fragment as Ve } from "react/jsx-runtime";
import * as c from "react";
import V, { forwardRef as Du, createElement as Tc, useLayoutEffect as Mu, useState as ht, createContext as Tu, useContext as Au, useCallback as Ye, useRef as nn, useEffect as Nn, useMemo as go, useId as Lb } from "react";
import * as je from "react-dom";
import Wb, { createPortal as zb } from "react-dom";
var Bb = Object.defineProperty, ot = (e, t) => Bb(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Hb(e, t) {
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
ot(Hb, "createContext");
// @__NO_SIDE_EFFECTS__
function Bo(e, t = []) {
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
  return o.scopeName = e, [r, Iu(o, ...t)];
}
ot(Bo, "createContextScope");
function Iu(...e) {
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
ot(Iu, "composeContextScopes");
var Vb = Object.defineProperty, qi = (e, t) => Vb(e, "name", { value: t, configurable: !0 });
function qs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
qi(qs, "setRef");
function _u(...e) {
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
qi(_u, "composeRefs");
function Pn(...e) {
  return c.useCallback(_u(...e), e);
}
qi(Pn, "useComposedRefs");
var jb = Object.defineProperty, Xi = (e, t) => jb(e, "name", { value: t, configurable: !0 });
function Xs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Xi(Xs, "setRef");
function $u(...e) {
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
Xi($u, "composeRefs");
function Fu(...e) {
  return c.useCallback($u(...e), e);
}
Xi(Fu, "useComposedRefs");
var Ub = Object.defineProperty, nt = (e, t) => Ub(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  const t = c.forwardRef((n, r) => {
    let { children: o, ...s } = n, i = null, a = !1;
    const l = [];
    o = ju(o), c.Children.forEach(o, (p) => {
      if (Hu(p)) {
        a = !0;
        const h = p;
        let g = "child" in h.props ? h.props.child : h.props.children;
        for (; Zi(g) && typeof Ro == "function"; )
          g = Ro(g._payload);
        i = Gb(h, g), l.push(i?.props?.children);
      } else
        l.push(p);
    }), i ? i = c.cloneElement(i, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !a && c.Children.count(o) === 1 && c.isValidElement(o) && (i = o)
    );
    const u = i ? Bu(i) : void 0, m = Fu(r, u);
    if (!i) {
      if (o || o === 0)
        throw new Error(
          a ? Xb(e) : qb(e)
        );
      return o;
    }
    const d = zu(s, i.props ?? {});
    return i.type !== c.Fragment && (d.ref = r ? m : u), c.cloneElement(i, d);
  });
  return t.displayName = `${e}.Slot`, t;
}
nt(Ne, "createSlot");
var Yb = /* @__PURE__ */ Ne("Slot"), Lu = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Wu(e) {
  const t = /* @__PURE__ */ nt((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = Lu, t;
}
nt(Wu, "createSlottable");
var Gb = /* @__PURE__ */ nt((e, t) => "child" in e.props ? c.isValidElement(t) ? c.cloneElement(t, void 0, e.props.children(t.props.children)) : null : c.isValidElement(t) ? t : null, "getSlottableElementFromSlottable");
function zu(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const l = s(...a);
      return o(...a), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" ? n[r] = [o, s].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = Uu(s, o));
  }
  return { ...e, ...n };
}
nt(zu, "mergeProps");
function Bu(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
nt(Bu, "getElementRef");
function Hu(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Lu;
}
nt(Hu, "isSlottable");
var Kb = /* @__PURE__ */ Symbol.for("react.lazy");
function Zi(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Kb && "_payload" in e && Vu(e._payload);
}
nt(Zi, "isLazyComponent");
function Vu(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
nt(Vu, "isPromiseLike");
function ju(e) {
  let t = e;
  for (; Zi(t) && typeof Ro == "function"; )
    t = Ro(t._payload);
  return t;
}
nt(ju, "useUnwrappedLazy");
function Uu(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (typeof n == "string")
      for (const r of String(n).trim().split(/\s+/))
        r && t.add(r);
  return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
nt(Uu, "concatAriaDescribedby");
var qb = /* @__PURE__ */ nt((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Xb = /* @__PURE__ */ nt((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Ro = c[" use ".trim().toString()], Ho = globalThis?.document ? c.useLayoutEffect : () => {
}, Zb = Object.defineProperty, Me = (e, t) => Zb(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Qb(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ Bo(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ Me((v) => {
    const { scope: b, children: w } = v, x = c.useRef(null), y = c.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: y, collectionRef: x, children: w });
  }, "CollectionProvider");
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Ne(a), u = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x } = v, y = s(a, w), C = Pn(b, y.collectionRef);
      return /* @__PURE__ */ f(l, { ref: C, children: x });
    }
  );
  u.displayName = a;
  const m = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Ne(m), h = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x, ...y } = v, C = c.useRef(null), P = Pn(b, C), S = s(m, w);
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
Me(Qb, "createCollection");
var Ac = /* @__PURE__ */ new WeakMap(), Se, Ke, ro = (Ke = class extends Map {
  constructor(n) {
    super(n);
    no(this, Se);
    yn(this, Se, [...super.keys()]), Ac.set(this, !0);
  }
  set(n, r) {
    return Ac.get(this) && !this.has(n) && q(this, Se).push(n), super.set(n, r), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(n, r, o) {
    const s = this.has(r), i = s ? this.size : this.size + 1, a = Qi(n), l = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
    if (s ? q(this, Se).indexOf(r) === l : l === this.size)
      return this.set(r, o), this;
    const u = q(this, Se).filter((d) => d !== r);
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
    const r = q(this, Se).indexOf(n) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, r, o) {
    const s = q(this, Se).indexOf(n);
    if (s === -1)
      return this;
    const i = q(this, Se).indexOf(r), a = i !== -1 && i < s ? s - 1 : s;
    return this.insert(a, r, o);
  }
  after(n) {
    let r = q(this, Se).indexOf(n);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, r, o) {
    const s = q(this, Se).indexOf(n);
    if (s === -1)
      return this;
    const i = q(this, Se).indexOf(r), a = i !== -1 && i <= s ? s : s + 1;
    return this.insert(a, r, o);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return yn(this, Se, []), super.clear();
  }
  delete(n) {
    const r = super.delete(n);
    return r && q(this, Se).splice(q(this, Se).indexOf(n), 1), r;
  }
  deleteAt(n) {
    const r = this.keyAt(n);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(n) {
    const r = vo(q(this, Se), n);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(n) {
    const r = vo(q(this, Se), n);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(n) {
    return q(this, Se).indexOf(n);
  }
  keyAt(n) {
    return vo(q(this, Se), n);
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
    for (const s of q(this, Se).slice(n, r))
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
function vo(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = Yu(e, t);
  return n === -1 ? void 0 : e[n];
}
Me(vo, "at");
function Yu(e, t) {
  const n = e.length, r = Qi(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
Me(Yu, "toSafeIndex");
function Qi(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Me(Qi, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Gu(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ Bo(t), [o, s] = n(t);
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
    const { scope: E, children: N, state: R } = S, T = c.useRef(null), [_, D] = c.useState(
      null
    ), L = Pn(T, D), [F, z] = R, A = c.useRef(
      new ro()
    ), W = c.useCallback(() => {
      const M = A.current;
      return Xu(M) || M.sort(bo), M;
    }, []);
    return c.useEffect(() => {
      if (!_)
        return;
      const M = Zu(() => {
        z(($) => {
          const O = $.toSorted(bo);
          return O.some(([J], oe) => $.keyAt(oe) !== J) ? O : $;
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
        collectionElementRefObject: T,
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
  const d = e + "CollectionSlot", p = /* @__PURE__ */ Ne(d), h = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R } = S, T = s(d, N), _ = Pn(E, T.collectionElementRef);
      return /* @__PURE__ */ f(p, { ref: _, children: R });
    }
  );
  h.displayName = d;
  const g = e + "CollectionItemSlot", v = "data-radix-collection-item", b = /* @__PURE__ */ Ne(g), w = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R, ...T } = S, _ = c.useRef(null), D = s(g, N), { setCollection: L, registryRef: F } = D, z = c.useRef(T);
      Ku(z.current, T) || (z.current = T);
      const A = z.current, W = c.useCallback(
        (O) => {
          const B = F.current;
          O ? B.set(O, {
            ...z.current,
            element: O
          }) : _.current && B.delete(_.current);
        },
        [F]
      ), M = Pn(E, W, _);
      Ho(() => {
        const O = _.current, B = F.current;
        O && B.has(O) && B.set(O, { ...A, element: O });
      }, [A, F]);
      const $ = c.useRef(null);
      return c.useEffect(() => {
        const O = _.current, B = $.current;
        (B?.element ?? null) === O && (!O || B?.itemData === A) || ($.current = O ? { element: O, itemData: A } : null, L((J) => {
          const oe = new ro(J);
          return B && B.element !== O && oe.delete(B.element), O && oe.set(O, { ...A, element: O }), oe.sort(bo);
        }));
      }), c.useEffect(() => () => {
        const O = $.current;
        $.current = null, O && L((B) => {
          if (!B.has(O.element))
            return B;
          const J = new ro(B);
          return J.delete(O.element), J;
        });
      }, [L]), /* @__PURE__ */ f(b, { [v]: "", ref: M, children: R });
    }
  );
  w.displayName = g;
  function x() {
    return c.useState(new ro());
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
Me(Gu, "createCollection");
function Ku(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
Me(Ku, "shallowEqual");
function qu(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Me(qu, "isElementPreceding");
function Xu(e) {
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
Me(Xu, "isInDocumentOrder");
function bo(e, t) {
  return !e[1].element || !t[1].element ? 0 : qu(e[1].element, t[1].element) ? -1 : 1;
}
Me(bo, "sortByDocumentPosition");
function Zu(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
Me(Zu, "getChildListObserver");
var Jb = Object.defineProperty, or = (e, t) => Jb(e, "name", { value: t, configurable: !0 }), Qu = !!(typeof window < "u" && window.document && window.document.createElement);
function Ju(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ or(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
or(Ju, "composeEventHandlers");
function ey(e) {
  if (!Qu)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
or(ey, "getOwnerWindow");
function Zs(e) {
  if (!Qu)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
or(Zs, "getOwnerDocument");
function ed(e, t = !1) {
  const { activeElement: n } = Zs(e);
  if (!n?.nodeName)
    return null;
  if (td(n) && n.contentDocument)
    return ed(n.contentDocument.body, t);
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
or(ed, "getActiveElement");
function td(e) {
  return e.tagName === "IFRAME";
}
or(td, "isFrame");
var ty = Object.defineProperty, ny = (e, t) => ty(e, "name", { value: t, configurable: !0 }), Ic = c[" useEffectEvent ".trim().toString()], _c = c[" useInsertionEffect ".trim().toString()];
function nd(e) {
  if (typeof Ic == "function")
    return Ic(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof _c == "function" ? _c(() => {
    t.current = e;
  }) : Ho(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
ny(nd, "useEffectEvent");
var ry = Object.defineProperty, _r = (e, t) => ry(e, "name", { value: t, configurable: !0 }), oy = c[" useInsertionEffect ".trim().toString()] || Ho;
function Ji({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ _r(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = rd({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = od(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
_r(Ji, "useControllableState");
function rd({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return oy(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
_r(rd, "useUncontrolledState");
function od(e) {
  return typeof e == "function";
}
_r(od, "isFunction");
var $c = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function sy(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = nd(i), m = [{ ...n, state: s }];
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
_r(sy, "useControllableStateReducer");
var iy = Object.defineProperty, ay = (e, t) => iy(e, "name", { value: t, configurable: !0 }), cy = [
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
], sd = cy.reduce((e, t) => {
  const n = /* @__PURE__ */ Ne(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ly(e, t) {
  e && je.flushSync(() => e.dispatchEvent(t));
}
ay(ly, "dispatchDiscreteCustomEvent");
var uy = Object.defineProperty, sr = (e, t) => uy(e, "name", { value: t, configurable: !0 }), id = !!(typeof window < "u" && window.document && window.document.createElement);
function ad(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ sr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
sr(ad, "composeEventHandlers");
function dy(e) {
  if (!id)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
sr(dy, "getOwnerWindow");
function Qs(e) {
  if (!id)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
sr(Qs, "getOwnerDocument");
function cd(e, t = !1) {
  const { activeElement: n } = Qs(e);
  if (!n?.nodeName)
    return null;
  if (ld(n) && n.contentDocument)
    return cd(n.contentDocument.body, t);
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
sr(cd, "getActiveElement");
function ld(e) {
  return e.tagName === "IFRAME";
}
sr(ld, "isFrame");
var fy = Object.defineProperty, st = (e, t) => fy(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function my(e, t) {
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
st(my, "createContext");
// @__NO_SIDE_EFFECTS__
function ud(e, t = []) {
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
  return o.scopeName = e, [r, dd(o, ...t)];
}
st(ud, "createContextScope");
function dd(...e) {
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
st(dd, "composeContextScopes");
var Jn = globalThis?.document ? c.useLayoutEffect : () => {
}, py = Object.defineProperty, hy = (e, t) => py(e, "name", { value: t, configurable: !0 }), Fc = c[" useEffectEvent ".trim().toString()], Lc = c[" useInsertionEffect ".trim().toString()];
function fd(e) {
  if (typeof Fc == "function")
    return Fc(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Lc == "function" ? Lc(() => {
    t.current = e;
  }) : Jn(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
hy(fd, "useEffectEvent");
var gy = Object.defineProperty, $r = (e, t) => gy(e, "name", { value: t, configurable: !0 }), vy = c[" useInsertionEffect ".trim().toString()] || Jn;
function md({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ $r(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = pd({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = hd(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
$r(md, "useControllableState");
function pd({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return vy(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
$r(pd, "useUncontrolledState");
function hd(e) {
  return typeof e == "function";
}
$r(hd, "isFunction");
var Wc = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function by(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = fd(i), m = [{ ...n, state: s }];
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
$r(by, "useControllableStateReducer");
var yy = Object.defineProperty, ea = (e, t) => yy(e, "name", { value: t, configurable: !0 });
function Js(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
ea(Js, "setRef");
function gd(...e) {
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
ea(gd, "composeRefs");
function vd(...e) {
  return c.useCallback(gd(...e), e);
}
ea(vd, "useComposedRefs");
var wy = Object.defineProperty, xy = (e, t) => wy(e, "name", { value: t, configurable: !0 }), Cy = [
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
], ta = Cy.reduce((e, t) => {
  const n = /* @__PURE__ */ Ne(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Sy(e, t) {
  e && je.flushSync(() => e.dispatchEvent(t));
}
xy(Sy, "dispatchDiscreteCustomEvent");
var Ey = Object.defineProperty, Ht = (e, t) => Ey(e, "name", { value: t, configurable: !0 });
function bd(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
Ht(bd, "useStateMachine");
var Py = /* @__PURE__ */ Ht((e) => {
  const { present: t, children: n } = e, r = yd(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = wd(r.ref, xd(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
}, "Presence");
function yd(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = c.useRef(void 0), a = e ? "mounted" : "unmounted", [l, u] = bd(a, {
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
    l === "mounted" ? (s.current = i.current ?? Un(r.current), i.current = void 0) : s.current = "none";
  }, [l]), Jn(() => {
    const m = r.current, d = o.current;
    if (d !== e) {
      const h = s.current, g = Un(m);
      e ? (i.current = g, u("MOUNT")) : g === "none" || m?.display === "none" ? u("UNMOUNT") : u(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), Jn(() => {
    if (t) {
      let m;
      const d = t.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ Ht((g) => {
        const b = Un(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && b && (u("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Ht((g) => {
        g.target === t && (s.current = Un(r.current));
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
        r.current = d, i.current = Un(d);
      } else
        r.current = null;
      n(m);
    }, [])
  };
}
Ht(yd, "usePresence");
function ei(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ht(ei, "setRef");
function wd(...e) {
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
Ht(wd, "useStableComposedRefs");
function Un(e) {
  return e?.animationName || "none";
}
Ht(Un, "getAnimationName");
function xd(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ht(xd, "getElementRef");
var Ny = Object.defineProperty, Oy = (e, t) => Ny(e, "name", { value: t, configurable: !0 }), Ry = c[" useId ".trim().toString()] || (() => {
}), ky = 0;
function Cd(e) {
  const [t, n] = c.useState(Ry());
  return Jn(() => {
    e || n((r) => r ?? String(ky++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
Oy(Cd, "useId");
var Dy = Object.defineProperty, Fr = (e, t) => Dy(e, "name", { value: t, configurable: !0 }), na = "Collapsible", [My, Sd] = /* @__PURE__ */ ud(na), [Ty, ra] = My(na), Ay = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Fr(function(t, n) {
    const {
      __scopeCollapsible: r,
      open: o,
      defaultOpen: s,
      disabled: i,
      onOpenChange: a,
      ...l
    } = t, [u, m] = md({
      prop: o,
      defaultProp: s ?? !1,
      onChange: a,
      caller: na
    });
    return /* @__PURE__ */ f(
      Ty,
      {
        scope: r,
        disabled: i,
        contentId: Cd(),
        open: u,
        onOpenToggle: c.useCallback(() => m((d) => !d), [m]),
        children: /* @__PURE__ */ f(
          ta.div,
          {
            "data-state": Vo(u),
            "data-disabled": i ? "" : void 0,
            ...l,
            ref: n
          }
        )
      }
    );
  }, "Collapsible")
), Iy = "CollapsibleTrigger", _y = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Fr(function(t, n) {
    const { __scopeCollapsible: r, ...o } = t, s = ra(Iy, r);
    return /* @__PURE__ */ f(
      ta.button,
      {
        type: "button",
        "aria-controls": s.open ? s.contentId : void 0,
        "aria-expanded": s.open || !1,
        "data-state": Vo(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        disabled: s.disabled,
        ...o,
        ref: n,
        onClick: ad(t.onClick, s.onOpenToggle)
      }
    );
  }, "CollapsibleTrigger")
), Ed = "CollapsibleContent", $y = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Fr(function(t, n) {
    const { forceMount: r, ...o } = t, s = ra(Ed, t.__scopeCollapsible);
    return /* @__PURE__ */ f(Py, { present: r || s.open, children: ({ present: i }) => /* @__PURE__ */ f(Fy, { ...o, ref: n, present: i }) });
  }, "CollapsibleContent")
), Fy = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ Fr(function(t, n) {
  const { __scopeCollapsible: r, present: o, children: s, ...i } = t, a = ra(Ed, r), [l, u] = c.useState(o), m = c.useRef(null), d = vd(n, m), p = c.useRef(0), h = p.current, g = c.useRef(0), v = g.current, b = a.open || l, w = c.useRef(b), x = c.useRef(void 0);
  return c.useEffect(() => {
    const y = requestAnimationFrame(() => w.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), Jn(() => {
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
    ta.div,
    {
      "data-state": Vo(a.open),
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
function Vo(e) {
  return e ? "open" : "closed";
}
Fr(Vo, "getState");
var Ly = Object.defineProperty, Wy = (e, t) => Ly(e, "name", { value: t, configurable: !0 }), zy = c[" useId ".trim().toString()] || (() => {
}), By = 0;
function Pd(e) {
  const [t, n] = c.useState(zy());
  return Ho(() => {
    e || n((r) => r ?? String(By++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
Wy(Pd, "useId");
var Hy = Object.defineProperty, Vy = (e, t) => Hy(e, "name", { value: t, configurable: !0 }), jy = {
  LTR: "ltr"
}, Uy = c.createContext(void 0);
function Nd(e) {
  const t = c.useContext(Uy);
  return e || t || jy.LTR;
}
Vy(Nd, "useDirection");
var Yy = Object.defineProperty, Qe = (e, t) => Yy(e, "name", { value: t, configurable: !0 }), Gy = {
  Multiple: "multiple"
}, xr = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, Ky = {
  LTR: "ltr"
}, Mt = "Accordion", qy = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [oa, { useGetCollection: Xy, createCollectionScope: Zy }] = /* @__PURE__ */ Gu(Mt), [jo, iA] = /* @__PURE__ */ Bo(Mt, [
  Zy,
  Sd
]), sa = Sd(), Qy = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(t, n) {
    const { type: r, ...o } = t, s = o, i = o;
    return /* @__PURE__ */ f(oa.Provider, { scope: t.__scopeAccordion, children: r === Gy.Multiple ? /* @__PURE__ */ f(nw, { ...i, ref: n }) : /* @__PURE__ */ f(tw, { ...s, ref: n }) });
  }, "Accordion")
), [Od, Jy] = jo(Mt), [Rd, ew] = jo(
  Mt,
  { collapsible: !1 }
), tw = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(t, n) {
    const {
      value: r,
      defaultValue: o,
      onValueChange: s = /* @__PURE__ */ Qe(() => {
      }, "onValueChange"),
      collapsible: i = !1,
      ...a
    } = t, [l, u] = Ji({
      prop: r,
      defaultProp: o ?? "",
      onChange: s,
      caller: Mt
    });
    return /* @__PURE__ */ f(
      Od,
      {
        scope: t.__scopeAccordion,
        value: c.useMemo(() => l ? [l] : [], [l]),
        onItemOpen: u,
        onItemClose: c.useCallback(() => i && u(""), [i, u]),
        children: /* @__PURE__ */ f(Rd, { scope: t.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ f(kd, { ...a, ref: n }) })
      }
    );
  }, "AccordionImplSingle")
), nw = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ Qe(function(t, n) {
  const {
    value: r,
    defaultValue: o,
    onValueChange: s = /* @__PURE__ */ Qe(() => {
    }, "onValueChange"),
    ...i
  } = t, [a, l] = Ji({
    prop: r,
    defaultProp: o ?? [],
    onChange: s,
    caller: Mt
  }), u = c.useCallback(
    (d) => l((p = []) => [...p, d]),
    [l]
  ), m = c.useCallback(
    (d) => l((p = []) => p.filter((h) => h !== d)),
    [l]
  );
  return /* @__PURE__ */ f(
    Od,
    {
      scope: t.__scopeAccordion,
      value: a,
      onItemOpen: u,
      onItemClose: m,
      children: /* @__PURE__ */ f(Rd, { scope: t.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ f(kd, { ...i, ref: n }) })
    }
  );
}, "AccordionImplMultiple")), [rw, Uo] = jo(Mt), kd = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Qe(function(t, n) {
    const {
      __scopeAccordion: r,
      disabled: o,
      dir: s,
      orientation: i = xr.Vertical,
      ...a
    } = t, l = c.useRef(null), u = Pn(l, n), m = Xy(r), p = Nd(s) === Ky.LTR, h = Ju(t.onKeyDown, (g) => {
      if (!qy.includes(g.key))
        return;
      const v = m(), b = g.target, w = v.filter(([, T]) => !T.element.disabled), x = w.findIndex(([, T]) => T.element === b), y = w.size;
      if (x === -1)
        return;
      g.preventDefault();
      let C = x;
      const P = 0, S = y - 1, E = /* @__PURE__ */ Qe(() => {
        C = x + 1, C > S && (C = P);
      }, "moveNext"), N = /* @__PURE__ */ Qe(() => {
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
          i === xr.Horizontal && (p ? E() : N());
          break;
        case "ArrowDown":
          i === xr.Vertical && E();
          break;
        case "ArrowLeft":
          i === xr.Horizontal && (p ? N() : E());
          break;
        case "ArrowUp":
          i === xr.Vertical && N();
          break;
      }
      const R = C % y;
      w.at(R)?.element.focus();
    });
    return /* @__PURE__ */ f(
      rw,
      {
        scope: r,
        disabled: o,
        direction: s,
        orientation: i,
        children: /* @__PURE__ */ f(oa.Slot, { scope: r, children: /* @__PURE__ */ f(
          sd.div,
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
), ti = "AccordionItem", [ow, ia] = jo(ti), sw = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Qe(function(t, n) {
    const { __scopeAccordion: r, value: o, ...s } = t, i = Uo(ti, r), a = Jy(ti, r), l = sa(r), u = Pd(), m = o && a.value.includes(o) || !1, d = i.disabled || t.disabled;
    return /* @__PURE__ */ f(
      ow,
      {
        scope: r,
        open: m,
        disabled: d,
        triggerId: u,
        children: /* @__PURE__ */ f(
          Ay,
          {
            "data-orientation": i.orientation,
            "data-state": aa(m),
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
), iw = "AccordionHeader", aw = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(t, n) {
    const { __scopeAccordion: r, ...o } = t, s = Uo(Mt, r), i = ia(iw, r);
    return /* @__PURE__ */ f(
      sd.h3,
      {
        "data-orientation": s.orientation,
        "data-state": aa(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    );
  }, "AccordionHeader")
), zc = "AccordionTrigger", cw = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(t, n) {
    const { __scopeAccordion: r, ...o } = t, s = Uo(Mt, r), i = ia(zc, r), a = ew(zc, r), l = sa(r);
    return /* @__PURE__ */ f(oa.ItemSlot, { scope: r, children: /* @__PURE__ */ f(
      _y,
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
), lw = "AccordionContent", uw = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Qe(function(t, n) {
    const { __scopeAccordion: r, ...o } = t, s = Uo(Mt, r), i = ia(lw, r), a = sa(r);
    return /* @__PURE__ */ f(
      $y,
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
function aa(e) {
  return e ? "open" : "closed";
}
Qe(aa, "getState");
var dw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const fw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Q = (e, t) => {
  const n = Du(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: s = 2, absoluteStrokeWidth: i, children: a, ...l }, u) => Tc(
      "svg",
      {
        ref: u,
        ...dw,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: i ? Number(s) * 24 / Number(o) : s,
        className: `lucide lucide-${fw(e)}`,
        ...l
      },
      [
        ...t.map(([m, d]) => Tc(m, d)),
        ...(Array.isArray(a) ? a : [a]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, Dd = Q("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Md = Q("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]), Td = Q("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]), mw = Q("Banknote", [
  [
    "rect",
    { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }
  ],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]), pw = Q("Briefcase", [
  [
    "rect",
    {
      width: "20",
      height: "14",
      x: "2",
      y: "7",
      rx: "2",
      ry: "2",
      key: "eto64e"
    }
  ],
  ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" }]
]), ca = Q("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]), Ad = Q("Calendar", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      ry: "2",
      key: "eu3xkr"
    }
  ],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]
]), Id = Q("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]), Lr = Q("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), ir = Q("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), hw = Q("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), _d = Q("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), $d = Q("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), la = Q("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), gw = Q("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]), Fd = Q("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea"
    }
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf"
    }
  ]
]), Bc = Q("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]), vw = Q("ExternalLink", [
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
    }
  ],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
]), bw = Q("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]), yw = Q("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]), ww = Q("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), ni = Q("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), xw = Q("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]), Cw = Q("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }
  ],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }
  ],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }
  ]
]), Sw = Q("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]), Ew = Q("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), Ld = Q("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]), Wd = Q("Minus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }]
]), Pw = Q("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]), Nw = Q("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), Ow = Q("Pipette", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1"
    }
  ]
]), Rw = Q("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
      key: "wqdwcb"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17V7", key: "pyj7ub" }]
]), kw = Q("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]), ua = Q("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Dw = Q("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]), Mw = Q("ShieldCheck", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]), Hc = Q("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]), Tw = Q("Store", [
  [
    "path",
    {
      d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
      key: "ztvudi"
    }
  ],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      key: "jon5kx"
    }
  ]
]), Aw = Q("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), Iw = Q("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]), _w = Q("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]), Or = Q("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), $w = Q("Warehouse", [
  [
    "path",
    {
      d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
      key: "gksnxg"
    }
  ],
  ["path", { d: "M6 18h12", key: "9pbo8z" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }],
  ["rect", { width: "12", height: "12", x: "6", y: "10", key: "apd30q" }]
]), zd = Q("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]), ar = Q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Bd(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Bd(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function da() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Bd(e)) && (r && (r += " "), r += t);
  return r;
}
const Fw = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Lw = (e, t) => ({
  classGroupId: e,
  validator: t
}), Hd = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), ko = "-", Vc = [], Ww = "arbitrary..", zw = (e) => {
  const t = Hw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return Bw(i);
      const a = i.split(ko), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return Vd(a, l, t);
    },
    getConflictingClassGroupIds: (i, a) => {
      if (a) {
        const l = r[i], u = n[i];
        return l ? u ? Fw(u, l) : l : u || Vc;
      }
      return n[i] || Vc;
    }
  };
}, Vd = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const u = Vd(e, t + 1, s);
    if (u) return u;
  }
  const i = n.validators;
  if (i === null)
    return;
  const a = t === 0 ? e.join(ko) : e.slice(t).join(ko), l = i.length;
  for (let u = 0; u < l; u++) {
    const m = i[u];
    if (m.validator(a))
      return m.classGroupId;
  }
}, Bw = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Ww + r : void 0;
})(), Hw = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Vw(n, t);
}, Vw = (e, t) => {
  const n = Hd();
  for (const r in e) {
    const o = e[r];
    fa(o, n, r, t);
  }
  return n;
}, fa = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const i = e[s];
    jw(i, t, n, r);
  }
}, jw = (e, t, n, r) => {
  if (typeof e == "string") {
    Uw(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Yw(e, t, n, r);
    return;
  }
  Gw(e, t, n, r);
}, Uw = (e, t, n) => {
  const r = e === "" ? t : jd(t, e);
  r.classGroupId = n;
}, Yw = (e, t, n, r) => {
  if (Kw(e)) {
    fa(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Lw(n, e));
}, Gw = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let i = 0; i < s; i++) {
    const [a, l] = o[i];
    fa(l, jd(t, a), n, r);
  }
}, jd = (e, t) => {
  let n = e;
  const r = t.split(ko), o = r.length;
  for (let s = 0; s < o; s++) {
    const i = r[s];
    let a = n.nextPart.get(i);
    a || (a = Hd(), n.nextPart.set(i, a)), n = a;
  }
  return n;
}, Kw = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, qw = (e) => {
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
}, ri = "!", jc = ":", Xw = [], Uc = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Zw = (e) => {
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
        if (b === jc) {
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
    d.endsWith(ri) ? (p = d.slice(0, -1), h = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      d.startsWith(ri) && (p = d.slice(1), h = !0)
    );
    const g = u && u > l ? u - l : void 0;
    return Uc(s, h, p, g);
  };
  if (t) {
    const o = t + jc, s = r;
    r = (i) => i.startsWith(o) ? s(i.slice(o.length)) : Uc(Xw, !1, i, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, Qw = (e) => {
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
}, Jw = (e) => ({
  cache: qw(e.cacheSize),
  parseClassName: Zw(e),
  sortModifiers: Qw(e),
  ...zw(e)
}), ex = /\s+/, tx = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(ex);
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
    const x = p.length === 0 ? "" : p.length === 1 ? p[0] : s(p).join(":"), y = h ? x + ri : x, C = y + w;
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
}, nx = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Ud(n)) && (o && (o += " "), o += r);
  return o;
}, Ud = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ud(e[r])) && (n && (n += " "), n += t);
  return n;
}, rx = (e, ...t) => {
  let n, r, o, s;
  const i = (l) => {
    const u = t.reduce((m, d) => d(m), e());
    return n = Jw(u), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }, a = (l) => {
    const u = r(l);
    if (u)
      return u;
    const m = tx(l, n);
    return o(l, m), m;
  };
  return s = i, (...l) => s(nx(...l));
}, ox = [], ke = (e) => {
  const t = (n) => n[e] || ox;
  return t.isThemeGetter = !0, t;
}, Yd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gd = /^\((?:(\w[\w-]*):)?(.+)\)$/i, sx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ix = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ax = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, cx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, lx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ux = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Zt = (e) => sx.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), Qt = (e) => !!e && Number.isInteger(Number(e)), Os = (e) => e.endsWith("%") && ae(e.slice(0, -1)), $t = (e) => ix.test(e), Kd = () => !0, dx = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ax.test(e) && !cx.test(e)
), ma = () => !1, fx = (e) => lx.test(e), mx = (e) => ux.test(e), px = (e) => !U(e) && !Y(e), hx = (e) => fn(e, Zd, ma), U = (e) => Yd.test(e), wn = (e) => fn(e, Qd, dx), Yc = (e) => fn(e, Sx, ae), gx = (e) => fn(e, ef, Kd), vx = (e) => fn(e, Jd, ma), Gc = (e) => fn(e, qd, ma), bx = (e) => fn(e, Xd, mx), oo = (e) => fn(e, tf, fx), Y = (e) => Gd.test(e), Cr = (e) => Tn(e, Qd), yx = (e) => Tn(e, Jd), Kc = (e) => Tn(e, qd), wx = (e) => Tn(e, Zd), xx = (e) => Tn(e, Xd), so = (e) => Tn(e, tf, !0), Cx = (e) => Tn(e, ef, !0), fn = (e, t, n) => {
  const r = Yd.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Tn = (e, t, n = !1) => {
  const r = Gd.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, qd = (e) => e === "position" || e === "percentage", Xd = (e) => e === "image" || e === "url", Zd = (e) => e === "length" || e === "size" || e === "bg-size", Qd = (e) => e === "length", Sx = (e) => e === "number", Jd = (e) => e === "family-name", ef = (e) => e === "number" || e === "weight", tf = (e) => e === "shadow", Ex = () => {
  const e = ke("color"), t = ke("font"), n = ke("text"), r = ke("font-weight"), o = ke("tracking"), s = ke("leading"), i = ke("breakpoint"), a = ke("container"), l = ke("spacing"), u = ke("radius"), m = ke("shadow"), d = ke("inset-shadow"), p = ke("text-shadow"), h = ke("drop-shadow"), g = ke("blur"), v = ke("perspective"), b = ke("aspect"), w = ke("ease"), x = ke("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], P = () => [...C(), Y, U], S = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], N = () => [Y, U, l], R = () => [Zt, "full", "auto", ...N()], T = () => [Qt, "none", "subgrid", Y, U], _ = () => ["auto", {
    span: ["full", Qt, Y, U]
  }, Qt, Y, U], D = () => [Qt, "auto", Y, U], L = () => ["auto", "min", "max", "fr", Y, U], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...N()], W = () => [Zt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], M = () => [Zt, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], $ = () => [Zt, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], O = () => [e, Y, U], B = () => [...C(), Kc, Gc, {
    position: [Y, U]
  }], J = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], oe = () => ["auto", "cover", "contain", wx, hx, {
    size: [Y, U]
  }], ye = () => [Os, Cr, wn], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Y,
    U
  ], H = () => ["", ae, Cr, wn], j = () => ["solid", "dashed", "dotted", "double"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => [ae, Os, Kc, Gc], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    Y,
    U
  ], ie = () => ["none", ae, Y, U], ce = () => ["none", ae, Y, U], pe = () => [ae, Y, U], we = () => [Zt, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [$t],
      breakpoint: [$t],
      color: [Kd],
      container: [$t],
      "drop-shadow": [$t],
      ease: ["in", "out", "in-out"],
      font: [px],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [$t],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [$t],
      shadow: [$t],
      spacing: ["px", ae],
      text: [$t],
      "text-shadow": [$t],
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
        aspect: ["auto", "square", Zt, U, Y, b]
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
        columns: [ae, U, Y, a]
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
        z: [Qt, "auto", Y, U]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Zt, "full", "auto", a, ...N()]
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
        flex: [ae, Zt, "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, Y, U]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, Y, U]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Qt, "first", "last", "none", Y, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": T()
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
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": T()
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
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        text: ["base", n, Cr, wn]
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
        font: [r, Cx, gx]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Os, U]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yx, vx, t]
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
        "line-clamp": [ae, "none", Y, Yc]
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
        decoration: [ae, "from-font", "auto", Y, wn]
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
        "underline-offset": [ae, "auto", Y, U]
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
        bg: J()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: oe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Qt, Y, U],
          radial: ["", Y, U],
          conic: [Qt, Y, U]
        }, xx, bx]
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
        from: ye()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ye()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ye()
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
        rounded: ee()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ee()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ee()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ee()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ee()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ee()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ee()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ee()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ee()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ee()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ee()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ee()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ee()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ee()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ee()
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
        "outline-offset": [ae, Y, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, Cr, wn]
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
          so,
          oo
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
        "inset-shadow": ["none", d, so, oo]
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
        "ring-offset": [ae, wn]
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
        "text-shadow": ["none", p, so, oo]
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
        opacity: [ae, Y, U]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        "mask-linear": [ae]
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
        "mask-conic": [ae]
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
        mask: J()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: oe()
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
        blur: te()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, Y, U]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, Y, U]
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
          so,
          oo
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
        grayscale: ["", ae, Y, U]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, Y, U]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, Y, U]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, Y, U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, Y, U]
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
        "backdrop-blur": te()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, Y, U]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, Y, U]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, Y, U]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, Y, U]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, Y, U]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, Y, U]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, Y, U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, Y, U]
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
        duration: [ae, "initial", Y, U]
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
        delay: [ae, Y, U]
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
        rotate: ie()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ie()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ie()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ie()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ce()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ce()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ce()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ce()
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
        skew: pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pe()
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
        translate: we()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": we()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": we()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": we()
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
        stroke: [ae, Cr, wn, Yc]
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
}, Px = /* @__PURE__ */ rx(Ex);
function I(...e) {
  return Px(da(e));
}
const Nx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Qy,
  {
    ref: n,
    className: I("w-full divide-y divide-border rounded-lg border border-border bg-surface", e),
    ...t
  }
));
Nx.displayName = "Accordion";
const Ox = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(sw, { ref: n, className: I("first:rounded-t-lg last:rounded-b-lg", e), ...t }));
Ox.displayName = "AccordionItem";
const Rx = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(aw, { className: "flex", children: /* @__PURE__ */ k(
  cw,
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
        ir,
        {
          "aria-hidden": "true",
          className: "h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
        }
      )
    ]
  }
) }));
Rx.displayName = "AccordionTrigger";
const kx = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ f(
  uw,
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
kx.displayName = "AccordionContent";
const qc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Xc = da, mn = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return Xc(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((u) => {
    const m = n?.[u], d = s?.[u];
    if (m === null) return null;
    const p = qc(m) || qc(d);
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
  return Xc(e, i, l, n?.class, n?.className);
}, Dx = mn(
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
), Mx = {
  default: ni,
  info: ni,
  success: Id,
  warning: Dd,
  destructive: zd
}, Tx = c.forwardRef(
  ({ className: e, variant: t = "default", title: n, children: r, ...o }, s) => {
    const i = Mx[t ?? "default"];
    return /* @__PURE__ */ k(
      "div",
      {
        ref: s,
        role: "alert",
        className: I(Dx({ variant: t }), e),
        ...o,
        children: [
          /* @__PURE__ */ f(i, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
            n && /* @__PURE__ */ f("p", { className: "font-semibold mb-0.5", children: n }),
            r && /* @__PURE__ */ f("p", { className: "leading-relaxed", children: r })
          ] })
        ]
      }
    );
  }
);
Tx.displayName = "Alert";
function Ax({ size: e = 48, className: t }) {
  return /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
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
function Ix({ size: e = 48, className: t }) {
  return /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
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
function _x({ size: e = 48, className: t }) {
  return /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ f("path", { d: "M24 12c-4.4 0-8 3.6-8 8 0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "24", cy: "20", r: "3.5", fill: "#FFFBEB" }),
    /* @__PURE__ */ f("line", { x1: "12", y1: "30", x2: "36", y2: "30", stroke: "#D97706", strokeWidth: "1", opacity: "0.4" }),
    /* @__PURE__ */ f("line", { x1: "14", y1: "34", x2: "34", y2: "34", stroke: "#D97706", strokeWidth: "1", opacity: "0.3" }),
    /* @__PURE__ */ f("line", { x1: "18", y1: "30", x2: "16", y2: "34", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.3" }),
    /* @__PURE__ */ f("line", { x1: "30", y1: "30", x2: "32", y2: "34", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.3" })
  ] });
}
function $x({ size: e = 48, className: t }) {
  return /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
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
function Fx({ size: e = 48, className: t }) {
  return /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
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
const nf = {
  swarm: { label: "Swarm", component: Ax },
  beegraph: { label: "BeeGraph", component: Ix },
  beemap: { label: "BeeMap", component: _x },
  beescout: { label: "BeeScout", component: $x },
  haive: { label: "Haive", component: Fx }
}, aA = Object.keys(nf);
function cA({ slug: e, size: t = 48, className: n, fallback: r }) {
  const o = nf[e];
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
function lA({ label: e, value: t, className: n, ...r }) {
  return /* @__PURE__ */ k("div", { className: I("flex flex-col gap-0.5", n), ...r, children: [
    /* @__PURE__ */ f("span", { className: "text-xs text-text-muted", children: e }),
    /* @__PURE__ */ f("span", { className: "text-sm font-medium break-words text-text-base", children: t ?? "—" })
  ] });
}
function uA({ title: e, children: t, className: n, ...r }) {
  return /* @__PURE__ */ k("div", { className: I("flex flex-col gap-3", n), ...r, children: [
    /* @__PURE__ */ f("h3", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border pb-1", children: e }),
    /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: t })
  ] });
}
const Lx = mn(
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
function dA({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f("div", { className: I(Lx({ variant: t }), e), ...n });
}
const Wx = mn(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-databeez-primary text-white hover:bg-databeez-accent shadow-sm",
        destructive: "bg-error-500 text-white hover:bg-error-500/90 shadow-sm",
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
), er = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => /* @__PURE__ */ f(
    r ? Yb : "button",
    {
      className: I(Wx({ variant: t, size: n, className: e })),
      ref: s,
      ...o
    }
  )
);
er.displayName = "Button";
const zx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
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
zx.displayName = "Card";
const Bx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { ref: n, className: I("flex flex-col space-y-1.5 p-6", e), ...t }));
Bx.displayName = "CardHeader";
const Hx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "h3",
  {
    ref: n,
    className: I("text-lg font-semibold leading-none tracking-tight text-text-base", e),
    ...t
  }
));
Hx.displayName = "CardTitle";
const Vx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "p",
  {
    ref: n,
    className: I("text-sm text-text-muted", e),
    ...t
  }
));
Vx.displayName = "CardDescription";
const jx = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { ref: n, className: I("p-6 pt-0", e), ...t }));
jx.displayName = "CardContent";
const Ux = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "div",
  {
    ref: n,
    className: I("flex items-center p-6 pt-0", e),
    ...t
  }
));
Ux.displayName = "CardFooter";
const Yx = c.forwardRef(
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
    return /* @__PURE__ */ k("div", { className: I("border-t border-border bg-surface px-4 py-3", r), children: [
      /* @__PURE__ */ k("div", { className: "max-w-4xl mx-auto flex gap-3 items-end", children: [
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
          er,
          {
            onClick: m,
            disabled: t || !i.trim(),
            size: "icon",
            className: "h-11 w-11 rounded-xl flex-shrink-0 shadow-databeez hover:shadow-databeez-lg",
            children: /* @__PURE__ */ f(Dw, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ f("p", { className: "text-center text-xs text-text-muted mt-2", children: "Invio per inviare · Shift+Invio per andare a capo" })
    ] });
  }
);
Yx.displayName = "ChatInput";
const Zc = {
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
    return /* @__PURE__ */ k("span", { className: I("relative inline-flex shrink-0", Zc[n]), children: [
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
            Zc[n],
            e
          ),
          ...a
        }
      ),
      /* @__PURE__ */ f(
        Lr,
        {
          strokeWidth: 3,
          className: I(
            "pointer-events-none absolute inset-0 h-full w-full p-[2px] text-surface",
            v ? "opacity-100" : "opacity-0"
          )
        }
      ),
      /* @__PURE__ */ f(
        Wd,
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
function fA({
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
  return /* @__PURE__ */ k("div", { className: a, children: [
    /* @__PURE__ */ k("div", { className: "flex items-center gap-1.5", children: [
      l ? /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: () => s(!o),
          "aria-label": o ? "Comprimi" : "Espandi",
          "aria-expanded": o,
          className: "flex shrink-0 items-center justify-center text-text-muted hover:text-text-base",
          children: o ? /* @__PURE__ */ f(ir, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ f(_d, { className: "h-3.5 w-3.5" })
        }
      ) : /* @__PURE__ */ f("span", { className: "w-3.5 shrink-0" }),
      /* @__PURE__ */ k("label", { className: "flex cursor-pointer select-none items-center gap-2", children: [
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
      return /* @__PURE__ */ k(
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
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function Qc(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function cr(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Qc(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Qc(e[o], null);
        }
      };
  };
}
function ue(...e) {
  return c.useCallback(cr(...e), e);
}
function Gx(e, t) {
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
function qt(e, t = []) {
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
  return o.scopeName = e, [r, Kx(o, ...t)];
}
function Kx(...e) {
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
function qx(e) {
  const t = /* @__PURE__ */ Xx(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(Qx);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Xx(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = e1(o), a = Jx(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? cr(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Zx = /* @__PURE__ */ Symbol("radix.slottable");
function Qx(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zx;
}
function Jx(e, t) {
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
function e1(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var t1 = [
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
], re = t1.reduce((e, t) => {
  const n = /* @__PURE__ */ qx(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function n1(e, t) {
  e && je.flushSync(() => e.dispatchEvent(t));
}
function ze(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => t.current?.(...n), []);
}
function r1(e, t = globalThis?.document) {
  const n = ze(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var o1 = "DismissableLayer", oi = "dismissableLayer.update", s1 = "dismissableLayer.pointerDownOutside", i1 = "dismissableLayer.focusOutside", Jc, rf = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yo = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...l
    } = e, u = c.useContext(rf), [m, d] = c.useState(null), p = m?.ownerDocument ?? globalThis?.document, [, h] = c.useState({}), g = ue(t, (E) => d(E)), v = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(b), x = m ? v.indexOf(m) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= w, P = l1((E) => {
      const N = E.target, R = [...u.branches].some((T) => T.contains(N));
      !C || R || (o?.(E), i?.(E), E.defaultPrevented || a?.());
    }, p), S = u1((E) => {
      const N = E.target;
      [...u.branches].some((T) => T.contains(N)) || (s?.(E), i?.(E), E.defaultPrevented || a?.());
    }, p);
    return r1((E) => {
      x === u.layers.size - 1 && (r?.(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, p), c.useEffect(() => {
      if (m)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Jc = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(m)), u.layers.add(m), el(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Jc);
        };
    }, [m, p, n, u]), c.useEffect(() => () => {
      m && (u.layers.delete(m), u.layersWithOutsidePointerEventsDisabled.delete(m), el());
    }, [m, u]), c.useEffect(() => {
      const E = () => h({});
      return document.addEventListener(oi, E), () => document.removeEventListener(oi, E);
    }, []), /* @__PURE__ */ f(
      re.div,
      {
        ...l,
        ref: g,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          P.onPointerDownCapture
        )
      }
    );
  }
);
Yo.displayName = o1;
var a1 = "DismissableLayerBranch", c1 = c.forwardRef((e, t) => {
  const n = c.useContext(rf), r = c.useRef(null), o = ue(t, r);
  return c.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ f(re.div, { ...e, ref: o });
});
c1.displayName = a1;
function l1(e, t = globalThis?.document) {
  const n = ze(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          of(
            s1,
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
function u1(e, t = globalThis?.document) {
  const n = ze(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && of(i1, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function el() {
  const e = new CustomEvent(oi);
  document.dispatchEvent(e);
}
function of(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? n1(o, s) : o.dispatchEvent(s);
}
var Rs = 0;
function pa() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? tl()), document.body.insertAdjacentElement("beforeend", e[1] ?? tl()), Rs++, () => {
      Rs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Rs--;
    };
  }, []);
}
function tl() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ks = "focusScope.autoFocusOnMount", Ds = "focusScope.autoFocusOnUnmount", nl = { bubbles: !1, cancelable: !0 }, d1 = "FocusScope", Go = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = c.useState(null), u = ze(o), m = ze(s), d = c.useRef(null), p = ue(t, (v) => l(v)), h = c.useRef({
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
        a.contains(C) ? d.current = C : en(d.current, { select: !0 });
      }, b = function(y) {
        if (h.paused || !a) return;
        const C = y.relatedTarget;
        C !== null && (a.contains(C) || en(d.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const P of y)
            P.removedNodes.length > 0 && en(a);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", b);
      const x = new MutationObserver(w);
      return a && x.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", b), x.disconnect();
      };
    }
  }, [r, a, h.paused]), c.useEffect(() => {
    if (a) {
      ol.add(h);
      const v = document.activeElement;
      if (!a.contains(v)) {
        const w = new CustomEvent(ks, nl);
        a.addEventListener(ks, u), a.dispatchEvent(w), w.defaultPrevented || (f1(v1(sf(a)), { select: !0 }), document.activeElement === v && en(a));
      }
      return () => {
        a.removeEventListener(ks, u), setTimeout(() => {
          const w = new CustomEvent(Ds, nl);
          a.addEventListener(Ds, m), a.dispatchEvent(w), w.defaultPrevented || en(v ?? document.body, { select: !0 }), a.removeEventListener(Ds, m), ol.remove(h);
        }, 0);
      };
    }
  }, [a, u, m, h]);
  const g = c.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (b && w) {
        const x = v.currentTarget, [y, C] = m1(x);
        y && C ? !v.shiftKey && w === C ? (v.preventDefault(), n && en(y, { select: !0 })) : v.shiftKey && w === y && (v.preventDefault(), n && en(C, { select: !0 })) : w === x && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ f(re.div, { tabIndex: -1, ...i, ref: p, onKeyDown: g });
});
Go.displayName = d1;
function f1(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (en(r, { select: t }), document.activeElement !== n) return;
}
function m1(e) {
  const t = sf(e), n = rl(t, e), r = rl(t.reverse(), e);
  return [n, r];
}
function sf(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function rl(e, t) {
  for (const n of e)
    if (!p1(n, { upTo: t })) return n;
}
function p1(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function h1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function en(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && h1(e) && t && e.select();
  }
}
var ol = g1();
function g1() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = sl(e, t), e.unshift(t);
    },
    remove(t) {
      e = sl(e, t), e[0]?.resume();
    }
  };
}
function sl(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function v1(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Fe = globalThis?.document ? c.useLayoutEffect : () => {
}, b1 = c[" useId ".trim().toString()] || (() => {
}), y1 = 0;
function Bt(e) {
  const [t, n] = c.useState(b1());
  return Fe(() => {
    n((r) => r ?? String(y1++));
  }, [e]), t ? `radix-${t}` : "";
}
const w1 = ["top", "right", "bottom", "left"], an = Math.min, Ze = Math.max, Mo = Math.round, io = Math.floor, Rt = (e) => ({
  x: e,
  y: e
}), x1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function si(e, t, n) {
  return Ze(e, an(t, n));
}
function Vt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jt(e) {
  return e.split("-")[0];
}
function lr(e) {
  return e.split("-")[1];
}
function ha(e) {
  return e === "x" ? "y" : "x";
}
function ga(e) {
  return e === "y" ? "height" : "width";
}
function Nt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function va(e) {
  return ha(Nt(e));
}
function C1(e, t, n) {
  n === void 0 && (n = !1);
  const r = lr(e), o = va(e), s = ga(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = To(i)), [i, To(i)];
}
function S1(e) {
  const t = To(e);
  return [ii(e), t, ii(t)];
}
function ii(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const il = ["left", "right"], al = ["right", "left"], E1 = ["top", "bottom"], P1 = ["bottom", "top"];
function N1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? al : il : t ? il : al;
    case "left":
    case "right":
      return t ? E1 : P1;
    default:
      return [];
  }
}
function O1(e, t, n, r) {
  const o = lr(e);
  let s = N1(jt(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(ii)))), s;
}
function To(e) {
  const t = jt(e);
  return x1[t] + e.slice(t.length);
}
function R1(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function af(e) {
  return typeof e != "number" ? R1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ao(e) {
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
function cl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Nt(t), i = va(t), a = ga(i), l = jt(t), u = s === "y", m = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[a] / 2 - o[a] / 2;
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
  switch (lr(t)) {
    case "start":
      h[i] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      h[i] += p * (n && u ? -1 : 1);
      break;
  }
  return h;
}
async function k1(e, t) {
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
  } = Vt(t, e), g = af(h), b = a[p ? d === "floating" ? "reference" : "floating" : d], w = Ao(await s.getClippingRect({
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
  }, P = Ao(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const D1 = 50, M1 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = i.detectOverflow ? i : {
    ...i,
    detectOverflow: k1
  }, l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: m,
    y: d
  } = cl(u, r, l), p = r, h = 0;
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
    }, S && h < D1 && (h++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: m,
      y: d
    } = cl(u, p, l)), v = -1);
  }
  return {
    x: m,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: g
  };
}, T1 = (e) => ({
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
    } = Vt(e, t) || {};
    if (u == null)
      return {};
    const d = af(m), p = {
      x: n,
      y: r
    }, h = va(o), g = ga(h), v = await i.getDimensions(u), b = h === "y", w = b ? "top" : "left", x = b ? "bottom" : "right", y = b ? "clientHeight" : "clientWidth", C = s.reference[g] + s.reference[h] - p[h] - s.floating[g], P = p[h] - s.reference[h], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let E = S ? S[y] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(S))) && (E = a.floating[y] || s.floating[g]);
    const N = C / 2 - P / 2, R = E / 2 - v[g] / 2 - 1, T = an(d[w], R), _ = an(d[x], R), D = T, L = E - v[g] - _, F = E / 2 - v[g] / 2 + N, z = si(D, F, L), A = !l.arrow && lr(o) != null && F !== z && s.reference[g] / 2 - (F < D ? T : _) - v[g] / 2 < 0, W = A ? F < D ? F - D : F - L : 0;
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
}), A1 = function(e) {
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
      } = Vt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = jt(o), x = Nt(a), y = jt(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), P = p || (y || !v ? [To(a)] : S1(a)), S = g !== "none";
      !p && S && P.push(...O1(a, v, g, C));
      const E = [a, ...P], N = await l.detectOverflow(t, b), R = [];
      let T = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (m && R.push(N[w]), d) {
        const F = C1(o, i, C);
        R.push(N[F[0]], N[F[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: R
      }], !R.every((F) => F <= 0)) {
        var _, D;
        const F = (((_ = s.flip) == null ? void 0 : _.index) || 0) + 1, z = E[F];
        if (z && (!(d === "alignment" ? x !== Nt(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((M) => Nt(M.placement) === x ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: T
            },
            reset: {
              placement: z
            }
          };
        let A = (D = T.filter((W) => W.overflows[0] <= 0).sort((W, M) => W.overflows[1] - M.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!A)
          switch (h) {
            case "bestFit": {
              var L;
              const W = (L = T.filter((M) => {
                if (S) {
                  const $ = Nt(M.placement);
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
function ll(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ul(e) {
  return w1.some((t) => e[t] >= 0);
}
const I1 = function(e) {
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
      } = Vt(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), a = ll(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: ul(a)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), a = ll(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: ul(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, cf = /* @__PURE__ */ new Set(["left", "top"]);
async function _1(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = jt(n), a = lr(n), l = Nt(n) === "y", u = cf.has(i) ? -1 : 1, m = s && l ? -1 : 1, d = Vt(t, e);
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
const $1 = function(e) {
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
      } = t, l = await _1(t, e);
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
}, F1 = function(e) {
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
      } = Vt(e, t), m = {
        x: n,
        y: r
      }, d = await s.detectOverflow(t, u), p = Nt(jt(o)), h = ha(p);
      let g = m[h], v = m[p];
      if (i) {
        const w = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", y = g + d[w], C = g - d[x];
        g = si(y, g, C);
      }
      if (a) {
        const w = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", y = v + d[w], C = v - d[x];
        v = si(y, v, C);
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
}, L1 = function(e) {
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
      } = Vt(e, t), m = {
        x: n,
        y: r
      }, d = Nt(o), p = ha(d);
      let h = m[p], g = m[d];
      const v = Vt(a, t), b = typeof v == "number" ? {
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
        const y = p === "y" ? "width" : "height", C = cf.has(jt(o)), P = s.reference[d] - s.floating[y] + (C && ((w = i.offset) == null ? void 0 : w[d]) || 0) + (C ? 0 : b.crossAxis), S = s.reference[d] + s.reference[y] + (C ? 0 : ((x = i.offset) == null ? void 0 : x[d]) || 0) - (C ? b.crossAxis : 0);
        g < P ? g = P : g > S && (g = S);
      }
      return {
        [p]: h,
        [d]: g
      };
    }
  };
}, W1 = function(e) {
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
      } = Vt(e, t), m = await i.detectOverflow(t, u), d = jt(o), p = lr(o), h = Nt(o) === "y", {
        width: g,
        height: v
      } = s.floating;
      let b, w;
      d === "top" || d === "bottom" ? (b = d, w = p === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = d, b = p === "end" ? "top" : "bottom");
      const x = v - m.top - m.bottom, y = g - m.left - m.right, C = an(v - m[b], x), P = an(g - m[w], y), S = !t.middlewareData.shift;
      let E = C, N = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = y), (r = t.middlewareData.shift) != null && r.enabled.y && (E = x), S && !p) {
        const T = Ze(m.left, 0), _ = Ze(m.right, 0), D = Ze(m.top, 0), L = Ze(m.bottom, 0);
        h ? N = g - 2 * (T !== 0 || _ !== 0 ? T + _ : Ze(m.left, m.right)) : E = v - 2 * (D !== 0 || L !== 0 ? D + L : Ze(m.top, m.bottom));
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
function Ko() {
  return typeof window < "u";
}
function ur(e) {
  return lf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tt(e) {
  var t;
  return (t = (lf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function lf(e) {
  return Ko() ? e instanceof Node || e instanceof Je(e).Node : !1;
}
function gt(e) {
  return Ko() ? e instanceof Element || e instanceof Je(e).Element : !1;
}
function Xt(e) {
  return Ko() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1;
}
function dl(e) {
  return !Ko() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot;
}
function Wr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = vt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function z1(e) {
  return /^(table|td|th)$/.test(ur(e));
}
function qo(e) {
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
const B1 = /transform|translate|scale|rotate|perspective|filter/, H1 = /paint|layout|strict|content/, xn = (e) => !!e && e !== "none";
let Ms;
function ba(e) {
  const t = gt(e) ? vt(e) : e;
  return xn(t.transform) || xn(t.translate) || xn(t.scale) || xn(t.rotate) || xn(t.perspective) || !ya() && (xn(t.backdropFilter) || xn(t.filter)) || B1.test(t.willChange || "") || H1.test(t.contain || "");
}
function V1(e) {
  let t = cn(e);
  for (; Xt(t) && !tr(t); ) {
    if (ba(t))
      return t;
    if (qo(t))
      return null;
    t = cn(t);
  }
  return null;
}
function ya() {
  return Ms == null && (Ms = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Ms;
}
function tr(e) {
  return /^(html|body|#document)$/.test(ur(e));
}
function vt(e) {
  return Je(e).getComputedStyle(e);
}
function Xo(e) {
  return gt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function cn(e) {
  if (ur(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    dl(e) && e.host || // Fallback.
    Tt(e)
  );
  return dl(t) ? t.host : t;
}
function uf(e) {
  const t = cn(e);
  return tr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xt(t) && Wr(t) ? t : uf(t);
}
function Rr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = uf(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Je(o);
  if (s) {
    const a = ai(i);
    return t.concat(i, i.visualViewport || [], Wr(o) ? o : [], a && n ? Rr(a) : []);
  } else
    return t.concat(o, Rr(o, [], n));
}
function ai(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function df(e) {
  const t = vt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Xt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = Mo(n) !== s || Mo(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function wa(e) {
  return gt(e) ? e : e.contextElement;
}
function Xn(e) {
  const t = wa(e);
  if (!Xt(t))
    return Rt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = df(t);
  let i = (s ? Mo(n.width) : n.width) / r, a = (s ? Mo(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const j1 = /* @__PURE__ */ Rt(0);
function ff(e) {
  const t = Je(e);
  return !ya() || !t.visualViewport ? j1 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function U1(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Je(e) ? !1 : t;
}
function On(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = wa(e);
  let i = Rt(1);
  t && (r ? gt(r) && (i = Xn(r)) : i = Xn(e));
  const a = U1(s, n, r) ? ff(s) : Rt(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, m = o.width / i.x, d = o.height / i.y;
  if (s) {
    const p = Je(s), h = r && gt(r) ? Je(r) : r;
    let g = p, v = ai(g);
    for (; v && r && h !== g; ) {
      const b = Xn(v), w = v.getBoundingClientRect(), x = vt(v), y = w.left + (v.clientLeft + parseFloat(x.paddingLeft)) * b.x, C = w.top + (v.clientTop + parseFloat(x.paddingTop)) * b.y;
      l *= b.x, u *= b.y, m *= b.x, d *= b.y, l += y, u += C, g = Je(v), v = ai(g);
    }
  }
  return Ao({
    width: m,
    height: d,
    x: l,
    y: u
  });
}
function Zo(e, t) {
  const n = Xo(e).scrollLeft;
  return t ? t.left + n : On(Tt(e)).left + n;
}
function mf(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Zo(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Y1(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Tt(r), a = t ? qo(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Rt(1);
  const m = Rt(0), d = Xt(r);
  if ((d || !d && !s) && ((ur(r) !== "body" || Wr(i)) && (l = Xo(r)), d)) {
    const h = On(r);
    u = Xn(r), m.x = h.x + r.clientLeft, m.y = h.y + r.clientTop;
  }
  const p = i && !d && !s ? mf(i, l) : Rt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + m.x + p.x,
    y: n.y * u.y - l.scrollTop * u.y + m.y + p.y
  };
}
function G1(e) {
  return Array.from(e.getClientRects());
}
function K1(e) {
  const t = Tt(e), n = Xo(e), r = e.ownerDocument.body, o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Zo(e);
  const a = -n.scrollTop;
  return vt(r).direction === "rtl" && (i += Ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const fl = 25;
function q1(e, t) {
  const n = Je(e), r = Tt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const m = ya();
    (!m || m && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const u = Zo(r);
  if (u <= 0) {
    const m = r.ownerDocument, d = m.body, p = getComputedStyle(d), h = m.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, g = Math.abs(r.clientWidth - d.clientWidth - h);
    g <= fl && (s -= g);
  } else u <= fl && (s += u);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
function X1(e, t) {
  const n = On(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Xt(e) ? Xn(e) : Rt(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: u
  };
}
function ml(e, t, n) {
  let r;
  if (t === "viewport")
    r = q1(e, n);
  else if (t === "document")
    r = K1(Tt(e));
  else if (gt(t))
    r = X1(t, n);
  else {
    const o = ff(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ao(r);
}
function pf(e, t) {
  const n = cn(e);
  return n === t || !gt(n) || tr(n) ? !1 : vt(n).position === "fixed" || pf(n, t);
}
function Z1(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Rr(e, [], !1).filter((a) => gt(a) && ur(a) !== "body"), o = null;
  const s = vt(e).position === "fixed";
  let i = s ? cn(e) : e;
  for (; gt(i) && !tr(i); ) {
    const a = vt(i), l = ba(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || Wr(i) && !l && pf(e, i)) ? r = r.filter((m) => m !== i) : o = a, i = cn(i);
  }
  return t.set(e, r), r;
}
function Q1(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? qo(t) ? [] : Z1(t, this._c) : [].concat(n), r], a = ml(t, i[0], o);
  let l = a.top, u = a.right, m = a.bottom, d = a.left;
  for (let p = 1; p < i.length; p++) {
    const h = ml(t, i[p], o);
    l = Ze(h.top, l), u = an(h.right, u), m = an(h.bottom, m), d = Ze(h.left, d);
  }
  return {
    width: u - d,
    height: m - l,
    x: d,
    y: l
  };
}
function J1(e) {
  const {
    width: t,
    height: n
  } = df(e);
  return {
    width: t,
    height: n
  };
}
function eC(e, t, n) {
  const r = Xt(t), o = Tt(t), s = n === "fixed", i = On(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Rt(0);
  function u() {
    l.x = Zo(o);
  }
  if (r || !r && !s)
    if ((ur(t) !== "body" || Wr(o)) && (a = Xo(t)), r) {
      const h = On(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const m = o && !r && !s ? mf(o, a) : Rt(0), d = i.left + a.scrollLeft - l.x - m.x, p = i.top + a.scrollTop - l.y - m.y;
  return {
    x: d,
    y: p,
    width: i.width,
    height: i.height
  };
}
function Ts(e) {
  return vt(e).position === "static";
}
function pl(e, t) {
  if (!Xt(e) || vt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Tt(e) === n && (n = n.ownerDocument.body), n;
}
function hf(e, t) {
  const n = Je(e);
  if (qo(e))
    return n;
  if (!Xt(e)) {
    let o = cn(e);
    for (; o && !tr(o); ) {
      if (gt(o) && !Ts(o))
        return o;
      o = cn(o);
    }
    return n;
  }
  let r = pl(e, t);
  for (; r && z1(r) && Ts(r); )
    r = pl(r, t);
  return r && tr(r) && Ts(r) && !ba(r) ? n : r || V1(e) || n;
}
const tC = async function(e) {
  const t = this.getOffsetParent || hf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: eC(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function nC(e) {
  return vt(e).direction === "rtl";
}
const rC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Y1,
  getDocumentElement: Tt,
  getClippingRect: Q1,
  getOffsetParent: hf,
  getElementRects: tC,
  getClientRects: G1,
  getDimensions: J1,
  getScale: Xn,
  isElement: gt,
  isRTL: nC
};
function gf(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function oC(e, t) {
  let n = null, r;
  const o = Tt(e);
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
    const g = io(d), v = io(o.clientWidth - (m + p)), b = io(o.clientHeight - (d + h)), w = io(m), y = {
      rootMargin: -g + "px " + -v + "px " + -b + "px " + -w + "px",
      threshold: Ze(0, an(1, l)) || 1
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
      E === 1 && !gf(u, e.getBoundingClientRect()) && i(), C = !1;
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
function xa(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = wa(e), m = o || s ? [...u ? Rr(u) : [], ...t ? Rr(t) : []] : [];
  m.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const d = u && a ? oC(u, n) : null;
  let p = -1, h = null;
  i && (h = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === u && h && t && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), u && !l && h.observe(u), t && h.observe(t));
  let g, v = l ? On(e) : null;
  l && b();
  function b() {
    const w = On(e);
    v && !gf(v, w) && n(), v = w, g = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    m.forEach((x) => {
      o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), d?.(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(g);
  };
}
const sC = $1, iC = F1, aC = A1, cC = W1, lC = I1, hl = T1, uC = L1, dC = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: rC,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return M1(e, t, {
    ...o,
    platform: s
  });
};
var fC = typeof document < "u", mC = function() {
}, yo = fC ? Mu : mC;
function Io(e, t) {
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
        if (!Io(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !Io(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gl(e, t) {
  const n = vf(e);
  return Math.round(t * n) / n;
}
function As(e) {
  const t = c.useRef(e);
  return yo(() => {
    t.current = e;
  }), t;
}
function Ca(e) {
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
  Io(p, r) || h(r);
  const [g, v] = c.useState(null), [b, w] = c.useState(null), x = c.useCallback((M) => {
    M !== S.current && (S.current = M, v(M));
  }, []), y = c.useCallback((M) => {
    M !== E.current && (E.current = M, w(M));
  }, []), C = s || g, P = i || b, S = c.useRef(null), E = c.useRef(null), N = c.useRef(m), R = l != null, T = As(l), _ = As(o), D = As(u), L = c.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: p
    };
    _.current && (M.platform = _.current), dC(S.current, E.current, M).then(($) => {
      const O = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: D.current !== !1
      };
      F.current && !Io(N.current, O) && (N.current = O, je.flushSync(() => {
        d(O);
      }));
    });
  }, [p, t, n, _, D]);
  yo(() => {
    u === !1 && N.current.isPositioned && (N.current.isPositioned = !1, d((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [u]);
  const F = c.useRef(!1);
  yo(() => (F.current = !0, () => {
    F.current = !1;
  }), []), yo(() => {
    if (C && (S.current = C), P && (E.current = P), C && P) {
      if (T.current)
        return T.current(C, P, L);
      L();
    }
  }, [C, P, L, T, R]);
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
    const $ = gl(A.floating, m.x), O = gl(A.floating, m.y);
    return a ? {
      ...M,
      transform: "translate(" + $ + "px, " + O + "px)",
      ...vf(A.floating) >= 1.5 && {
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
const pC = (e) => {
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
      return r && t(r) ? r.current != null ? hl({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? hl({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Sa = (e, t) => {
  const n = sC(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ea = (e, t) => {
  const n = iC(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Pa = (e, t) => ({
  fn: uC(e).fn,
  options: [e, t]
}), Na = (e, t) => {
  const n = aC(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Oa = (e, t) => {
  const n = cC(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ra = (e, t) => {
  const n = lC(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ka = (e, t) => {
  const n = pC(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var hC = "Arrow", bf = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ f(
    re.svg,
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
bf.displayName = hC;
var gC = bf;
function yf(e) {
  const [t, n] = c.useState(void 0);
  return Fe(() => {
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
var Da = "Popper", [wf, Qo] = qt(Da), [vC, xf] = wf(Da), Cf = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ f(vC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Cf.displayName = Da;
var Sf = "PopperAnchor", Ef = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = xf(Sf, n), i = c.useRef(null), a = ue(t, i), l = c.useRef(null);
    return c.useEffect(() => {
      const u = l.current;
      l.current = r?.current || i.current, u !== l.current && s.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ f(re.div, { ...o, ref: a });
  }
);
Ef.displayName = Sf;
var Ma = "PopperContent", [bC, yC] = wf(Ma), Pf = c.forwardRef(
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
    } = e, b = xf(Ma, n), [w, x] = c.useState(null), y = ue(t, (j) => x(j)), [C, P] = c.useState(null), S = yf(C), E = S?.width ?? 0, N = S?.height ?? 0, R = r + (s !== "center" ? "-" + s : ""), T = typeof m == "number" ? m : { top: 0, right: 0, bottom: 0, left: 0, ...m }, _ = Array.isArray(u) ? u : [u], D = _.length > 0, L = {
      padding: T,
      boundary: _.filter(xC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: D
    }, { refs: F, floatingStyles: z, placement: A, isPositioned: W, middlewareData: M } = Ca({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...j) => xa(...j, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Sa({ mainAxis: o + N, alignmentAxis: i }),
        l && Ea({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Pa() : void 0,
          ...L
        }),
        l && Na({ ...L }),
        Oa({
          ...L,
          apply: ({ elements: j, rects: se, availableWidth: K, availableHeight: te }) => {
            const { width: ie, height: ce } = se.reference, pe = j.floating.style;
            pe.setProperty("--radix-popper-available-width", `${K}px`), pe.setProperty("--radix-popper-available-height", `${te}px`), pe.setProperty("--radix-popper-anchor-width", `${ie}px`), pe.setProperty("--radix-popper-anchor-height", `${ce}px`);
          }
        }),
        C && ka({ element: C, padding: a }),
        CC({ arrowWidth: E, arrowHeight: N }),
        p && Ra({ strategy: "referenceHidden", ...L })
      ]
    }), [$, O] = Rf(A), B = ze(g);
    Fe(() => {
      W && B?.();
    }, [W, B]);
    const J = M.arrow?.x, oe = M.arrow?.y, ye = M.arrow?.centerOffset !== 0, [ee, H] = c.useState();
    return Fe(() => {
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
          zIndex: ee,
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
          bC,
          {
            scope: n,
            placedSide: $,
            onArrowChange: P,
            arrowX: J,
            arrowY: oe,
            shouldHideArrow: ye,
            children: /* @__PURE__ */ f(
              re.div,
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
Pf.displayName = Ma;
var Nf = "PopperArrow", wC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Of = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = yC(Nf, r), i = wC[s.placedSide];
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
          gC,
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
Of.displayName = Nf;
function xC(e) {
  return e !== null;
}
var CC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, m] = Rf(n), d = { start: "0%", center: "50%", end: "100%" }[m], p = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let g = "", v = "";
    return u === "bottom" ? (g = i ? d : `${p}px`, v = `${-l}px`) : u === "top" ? (g = i ? d : `${p}px`, v = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, v = i ? d : `${h}px`) : u === "left" && (g = `${r.floating.width + l}px`, v = i ? d : `${h}px`), { data: { x: g, y: v } };
  }
});
function Rf(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var kf = Cf, Ta = Ef, Df = Pf, Mf = Of, SC = "Portal", Jo = c.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = c.useState(!1);
  Fe(() => s(!0), []);
  const i = n || o && globalThis?.document?.body;
  return i ? Wb.createPortal(/* @__PURE__ */ f(re.div, { ...r, ref: t }), i) : null;
});
Jo.displayName = SC;
function EC(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var bt = (e) => {
  const { present: t, children: n } = e, r = PC(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = ue(r.ref, NC(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
};
bt.displayName = "Presence";
function PC(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = EC(i, {
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
    const u = ao(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), Fe(() => {
    const u = r.current, m = o.current;
    if (m !== e) {
      const p = s.current, h = ao(u);
      e ? l("MOUNT") : h === "none" || u?.display === "none" ? l("UNMOUNT") : l(m && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Fe(() => {
    if (t) {
      let u;
      const m = t.ownerDocument.defaultView ?? window, d = (h) => {
        const v = ao(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = m.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, p = (h) => {
        h.target === t && (s.current = ao(r.current));
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
function ao(e) {
  return e?.animationName || "none";
}
function NC(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function OC(e) {
  const t = /* @__PURE__ */ RC(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(DC);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function RC(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = TC(o), a = MC(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? cr(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var kC = /* @__PURE__ */ Symbol("radix.slottable");
function DC(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === kC;
}
function MC(e, t) {
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
function TC(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var AC = c[" useInsertionEffect ".trim().toString()] || Fe;
function Rn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = IC({
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
        const d = _C(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function IC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return AC(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function _C(e) {
  return typeof e == "function";
}
var $C = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ln = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), lo = {}, Is = 0, Tf = function(e) {
  return e && (e.host || Tf(e.parentNode));
}, FC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Tf(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, LC = function(e, t, n, r) {
  var o = FC(t, Array.isArray(e) ? e : [e]);
  lo[n] || (lo[n] = /* @__PURE__ */ new WeakMap());
  var s = lo[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var m = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (a.has(p))
        m(p);
      else
        try {
          var h = p.getAttribute(r), g = h !== null && h !== "false", v = (Ln.get(p) || 0) + 1, b = (s.get(p) || 0) + 1;
          Ln.set(p, v), s.set(p, b), i.push(p), v === 1 && g && co.set(p, !0), b === 1 && p.setAttribute(n, "true"), g || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return m(t), a.clear(), Is++, function() {
    i.forEach(function(d) {
      var p = Ln.get(d) - 1, h = s.get(d) - 1;
      Ln.set(d, p), s.set(d, h), p || (co.has(d) || d.removeAttribute(r), co.delete(d)), h || d.removeAttribute(n);
    }), Is--, Is || (Ln = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), lo = {});
  };
}, es = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = $C(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), LC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, St = function() {
  return St = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, St.apply(this, arguments);
};
function Af(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function WC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var wo = "right-scroll-bar-position", xo = "width-before-scroll-bar", zC = "with-scroll-bars-hidden", BC = "--removed-body-scroll-bar-size";
function _s(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function HC(e, t) {
  var n = ht(function() {
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
var VC = typeof window < "u" ? c.useLayoutEffect : c.useEffect, vl = /* @__PURE__ */ new WeakMap();
function jC(e, t) {
  var n = HC(null, function(r) {
    return e.forEach(function(o) {
      return _s(o, r);
    });
  });
  return VC(function() {
    var r = vl.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || _s(a, null);
      }), s.forEach(function(a) {
        o.has(a) || _s(a, i);
      });
    }
    vl.set(n, e);
  }, [e]), n;
}
function UC(e) {
  return e;
}
function YC(e, t) {
  t === void 0 && (t = UC);
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
function GC(e) {
  e === void 0 && (e = {});
  var t = YC(null);
  return t.options = St({ async: !0, ssr: !1 }, e), t;
}
var If = function(e) {
  var t = e.sideCar, n = Af(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, St({}, n));
};
If.isSideCarExport = !0;
function KC(e, t) {
  return e.useMedium(t), If;
}
var _f = GC(), $s = function() {
}, ts = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: $s,
    onWheelCapture: $s,
    onTouchMoveCapture: $s
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, m = e.enabled, d = e.shards, p = e.sideCar, h = e.noRelative, g = e.noIsolation, v = e.inert, b = e.allowPinchZoom, w = e.as, x = w === void 0 ? "div" : w, y = e.gapMode, C = Af(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), P = p, S = jC([n, t]), E = St(St({}, C), o);
  return c.createElement(
    c.Fragment,
    null,
    m && c.createElement(P, { sideCar: _f, removeScrollBar: u, shards: d, noRelative: h, noIsolation: g, inert: v, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: y }),
    i ? c.cloneElement(c.Children.only(a), St(St({}, E), { ref: S })) : c.createElement(x, St({}, E, { className: l, ref: S }), a)
  );
});
ts.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ts.classNames = {
  fullWidth: xo,
  zeroRight: wo
};
var qC = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function XC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = qC();
  return t && e.setAttribute("nonce", t), e;
}
function ZC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function QC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var JC = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = XC()) && (ZC(t, n), QC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, e0 = function() {
  var e = JC();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $f = function() {
  var e = e0(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, t0 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Fs = function(e) {
  return parseInt(e || "", 10) || 0;
}, n0 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Fs(n), Fs(r), Fs(o)];
}, r0 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return t0;
  var t = n0(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, o0 = $f(), Zn = "data-scroll-locked", s0 = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(zC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Zn, `] {
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
  
  .`).concat(wo, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(xo, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(wo, " .").concat(wo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(xo, " .").concat(xo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Zn, `] {
    `).concat(BC, ": ").concat(a, `px;
  }
`);
}, bl = function() {
  var e = parseInt(document.body.getAttribute(Zn) || "0", 10);
  return isFinite(e) ? e : 0;
}, i0 = function() {
  c.useEffect(function() {
    return document.body.setAttribute(Zn, (bl() + 1).toString()), function() {
      var e = bl() - 1;
      e <= 0 ? document.body.removeAttribute(Zn) : document.body.setAttribute(Zn, e.toString());
    };
  }, []);
}, a0 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  i0();
  var s = c.useMemo(function() {
    return r0(o);
  }, [o]);
  return c.createElement(o0, { styles: s0(s, !t, o, n ? "" : "!important") });
}, ci = !1;
if (typeof window < "u")
  try {
    var uo = Object.defineProperty({}, "passive", {
      get: function() {
        return ci = !0, !0;
      }
    });
    window.addEventListener("test", uo, uo), window.removeEventListener("test", uo, uo);
  } catch {
    ci = !1;
  }
var Wn = ci ? { passive: !1 } : !1, c0 = function(e) {
  return e.tagName === "TEXTAREA";
}, Ff = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !c0(e) && n[t] === "visible")
  );
}, l0 = function(e) {
  return Ff(e, "overflowY");
}, u0 = function(e) {
  return Ff(e, "overflowX");
}, yl = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Lf(e, r);
    if (o) {
      var s = Wf(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, d0 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, f0 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Lf = function(e, t) {
  return e === "v" ? l0(t) : u0(t);
}, Wf = function(e, t) {
  return e === "v" ? d0(t) : f0(t);
}, m0 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, p0 = function(e, t, n, r, o) {
  var s = m0(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, m = i > 0, d = 0, p = 0;
  do {
    if (!a)
      break;
    var h = Wf(e, a), g = h[0], v = h[1], b = h[2], w = v - b - s * g;
    (g || w) && Lf(e, a) && (d += w, p += g);
    var x = a.parentNode;
    a = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (m && Math.abs(d) < 1 || !m && Math.abs(p) < 1) && (u = !0), u;
}, fo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, wl = function(e) {
  return [e.deltaX, e.deltaY];
}, xl = function(e) {
  return e && "current" in e ? e.current : e;
}, h0 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, g0 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, v0 = 0, zn = [];
function b0(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(v0++)[0], s = c.useState($f)[0], i = c.useRef(e);
  c.useEffect(function() {
    i.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = WC([e.lockRef.current], (e.shards || []).map(xl), !0).filter(Boolean);
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
    var w = fo(v), x = n.current, y = "deltaX" in v ? v.deltaX : x[0] - w[0], C = "deltaY" in v ? v.deltaY : x[1] - w[1], P, S = v.target, E = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in v && E === "h" && S.type === "range")
      return !1;
    var N = window.getSelection(), R = N && N.anchorNode, T = R ? R === S || R.contains(S) : !1;
    if (T)
      return !1;
    var _ = yl(E, S);
    if (!_)
      return !0;
    if (_ ? P = E : (P = E === "v" ? "h" : "v", _ = yl(E, S)), !_)
      return !1;
    if (!r.current && "changedTouches" in v && (y || C) && (r.current = P), !P)
      return !0;
    var D = r.current || P;
    return p0(D, b, v, D === "h" ? y : C);
  }, []), l = c.useCallback(function(v) {
    var b = v;
    if (!(!zn.length || zn[zn.length - 1] !== s)) {
      var w = "deltaY" in b ? wl(b) : fo(b), x = t.current.filter(function(P) {
        return P.name === b.type && (P.target === b.target || b.target === P.shadowParent) && h0(P.delta, w);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var y = (i.current.shards || []).map(xl).filter(Boolean).filter(function(P) {
          return P.contains(b.target);
        }), C = y.length > 0 ? a(b, y[0]) : !i.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(v, b, w, x) {
    var y = { name: v, delta: b, target: w, should: x, shadowParent: y0(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), m = c.useCallback(function(v) {
    n.current = fo(v), r.current = void 0;
  }, []), d = c.useCallback(function(v) {
    u(v.type, wl(v), v.target, a(v, e.lockRef.current));
  }, []), p = c.useCallback(function(v) {
    u(v.type, fo(v), v.target, a(v, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return zn.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Wn), document.addEventListener("touchmove", l, Wn), document.addEventListener("touchstart", m, Wn), function() {
      zn = zn.filter(function(v) {
        return v !== s;
      }), document.removeEventListener("wheel", l, Wn), document.removeEventListener("touchmove", l, Wn), document.removeEventListener("touchstart", m, Wn);
    };
  }, []);
  var h = e.removeScrollBar, g = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    g ? c.createElement(s, { styles: g0(o) }) : null,
    h ? c.createElement(a0, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function y0(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const w0 = KC(_f, b0);
var zr = c.forwardRef(function(e, t) {
  return c.createElement(ts, St({}, e, { ref: t, sideCar: w0 }));
});
zr.classNames = ts.classNames;
var ns = "Popover", [zf] = qt(ns, [
  Qo
]), Br = Qo(), [x0, pn] = zf(ns), Bf = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !1
  } = e, a = Br(t), l = c.useRef(null), [u, m] = c.useState(!1), [d, p] = Rn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: ns
  });
  return /* @__PURE__ */ f(kf, { ...a, children: /* @__PURE__ */ f(
    x0,
    {
      scope: t,
      contentId: Bt(),
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
Bf.displayName = ns;
var Hf = "PopoverAnchor", Vf = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pn(Hf, n), s = Br(n), { onCustomAnchorAdd: i, onCustomAnchorRemove: a } = o;
    return c.useEffect(() => (i(), () => a()), [i, a]), /* @__PURE__ */ f(Ta, { ...s, ...r, ref: t });
  }
);
Vf.displayName = Hf;
var jf = "PopoverTrigger", Uf = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pn(jf, n), s = Br(n), i = ue(t, o.triggerRef), a = /* @__PURE__ */ f(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Xf(o.open),
        ...r,
        ref: i,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ f(Ta, { asChild: !0, ...s, children: a });
  }
);
Uf.displayName = jf;
var Aa = "PopoverPortal", [C0, S0] = zf(Aa, {
  forceMount: void 0
}), Yf = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = pn(Aa, t);
  return /* @__PURE__ */ f(C0, { scope: t, forceMount: n, children: /* @__PURE__ */ f(bt, { present: n || s.open, children: /* @__PURE__ */ f(Jo, { asChild: !0, container: o, children: r }) }) });
};
Yf.displayName = Aa;
var nr = "PopoverContent", Gf = c.forwardRef(
  (e, t) => {
    const n = S0(nr, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = pn(nr, e.__scopePopover);
    return /* @__PURE__ */ f(bt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ f(P0, { ...o, ref: t }) : /* @__PURE__ */ f(N0, { ...o, ref: t }) });
  }
);
Gf.displayName = nr;
var E0 = /* @__PURE__ */ OC("PopoverContent.RemoveScroll"), P0 = c.forwardRef(
  (e, t) => {
    const n = pn(nr, e.__scopePopover), r = c.useRef(null), o = ue(t, r), s = c.useRef(!1);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return es(i);
    }, []), /* @__PURE__ */ f(zr, { as: E0, allowPinchZoom: !0, children: /* @__PURE__ */ f(
      Kf,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
          i.preventDefault(), s.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: X(
          e.onPointerDownOutside,
          (i) => {
            const a = i.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, u = a.button === 2 || l;
            s.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: X(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), N0 = c.forwardRef(
  (e, t) => {
    const n = pn(nr, e.__scopePopover), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ f(
      Kf,
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
), Kf = c.forwardRef(
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
    } = e, p = pn(nr, n), h = Br(n);
    return pa(), /* @__PURE__ */ f(
      Go,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ f(
          Yo,
          {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: m,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ f(
              Df,
              {
                "data-state": Xf(p.open),
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
), qf = "PopoverClose", O0 = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pn(qf, n);
    return /* @__PURE__ */ f(
      re.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
O0.displayName = qf;
var R0 = "PopoverArrow", k0 = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Br(n);
    return /* @__PURE__ */ f(Mf, { ...o, ...r, ref: t });
  }
);
k0.displayName = R0;
function Xf(e) {
  return e ? "open" : "closed";
}
var D0 = Bf, M0 = Vf, T0 = Uf, A0 = Yf, Zf = Gf;
const Hr = D0, Vr = T0, mA = M0, dr = c.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f(A0, { children: /* @__PURE__ */ f(
  Zf,
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
dr.displayName = Zf.displayName;
const I0 = [
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
function _0({
  value: e = "#f59e0b",
  onChange: t,
  presets: n = I0,
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
  return /* @__PURE__ */ k("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ f("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ k(Hr, { children: [
      /* @__PURE__ */ f(Vr, { asChild: !0, children: /* @__PURE__ */ k(
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
            /* @__PURE__ */ f(Ow, { className: "ml-auto h-4 w-4 text-text-muted shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ f(dr, { className: "w-64", align: "start", children: /* @__PURE__ */ k("div", { className: "space-y-3", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "h-16 w-full rounded-lg border border-border",
            style: { backgroundColor: e }
          }
        ),
        /* @__PURE__ */ k("div", { className: "flex items-center gap-2", children: [
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
_0.displayName = "ColorPicker";
function $0({
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
  return /* @__PURE__ */ k("div", { className: "space-y-1", children: [
    i && /* @__PURE__ */ f("label", { htmlFor: p, className: "block text-sm font-medium text-text-base", children: i }),
    /* @__PURE__ */ k(Hr, { open: h, onOpenChange: (S) => {
      g(S), S || b("");
    }, children: [
      /* @__PURE__ */ f(Vr, { asChild: !0, children: /* @__PURE__ */ k(
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
            /* @__PURE__ */ k("div", { className: "flex items-center gap-1 shrink-0", children: [
              d && t && /* @__PURE__ */ f(
                ar,
                {
                  className: "h-3.5 w-3.5 text-text-muted hover:text-text-base cursor-pointer",
                  onClick: P
                }
              ),
              /* @__PURE__ */ f(la, { className: "h-4 w-4 text-text-muted" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ k(dr, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: [
        /* @__PURE__ */ k("div", { className: "flex items-center border-b border-border px-3", children: [
          /* @__PURE__ */ f(ua, { className: "h-4 w-4 text-text-muted shrink-0" }),
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
        /* @__PURE__ */ f("div", { className: "max-h-[15rem] overflow-y-auto p-1", children: x.length === 0 ? /* @__PURE__ */ f("div", { className: "py-6 text-center text-sm text-text-muted", children: s }) : x.map((S) => /* @__PURE__ */ k(
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
              /* @__PURE__ */ f("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: S.value === t && /* @__PURE__ */ f(Lr, { className: "h-4 w-4 text-databeez-primary" }) }),
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
$0.displayName = "Combobox";
const Cl = {
  O: { label: "Organizzazione", icon: ca },
  P: { label: "Persona", icon: Or }
};
function F0(e) {
  return Cl[e ?? ""] ?? Cl.O;
}
const L0 = {
  F: { label: "Persona fisica", icon: Or },
  P: { label: "Professionista", icon: pw },
  A: { label: "Altro", icon: Or }
};
function W0(e) {
  return L0[e] ?? { label: "Persona", icon: Or };
}
const z0 = {
  S: { label: "Società", icon: ca },
  D: { label: "Ditta individuale", icon: Tw },
  E: { label: "Ente pubblico", icon: xw },
  X: { label: "Estera", icon: bw },
  P: { label: "PIVA", icon: Rw },
  A: { label: "Altro", icon: ww }
}, B0 = { label: "Organizzazione", icon: ca };
function H0(e) {
  return z0[e ?? ""] ?? B0;
}
const pA = {
  label: "Indirizzo",
  icon: Ld
}, hA = {
  label: "Sede",
  icon: $w
}, V0 = {
  banca: { label: "Banca", icon: mw },
  fiduciaria: { label: "Società fiduciaria", icon: Mw }
};
function gA(e) {
  return V0[e];
}
function Qf({
  text: e,
  label: t,
  resetDelay: n = 2e3,
  className: r,
  ...o
}) {
  const [s, i] = c.useState(!1);
  return /* @__PURE__ */ k(
    "button",
    {
      type: "button",
      onClick: async (l) => {
        l.stopPropagation(), await navigator.clipboard.writeText(e), i(!0), setTimeout(() => i(!1), n);
      },
      "aria-label": s ? "Copiato!" : `Copia${t ? ` ${t}` : ""}`,
      className: I(
        "inline-flex items-center gap-1.5 text-sm transition-colors",
        s ? "text-success-fg" : "text-text-muted hover:text-text-base",
        r
      ),
      ...o,
      children: [
        s ? /* @__PURE__ */ f(Lr, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ f(Fd, { className: "h-4 w-4 shrink-0" }),
        t && /* @__PURE__ */ f("span", { children: s ? "Copiato!" : t })
      ]
    }
  );
}
const j0 = mn(
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
), U0 = {
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  neutral: "bg-text-muted"
};
function Y0({
  variant: e = "neutral",
  label: t,
  dot: n = !0,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ k(
    "span",
    {
      className: I(j0({ variant: e }), r),
      ...o,
      children: [
        n && /* @__PURE__ */ f(
          "span",
          {
            className: I(
              "h-1.5 w-1.5 rounded-full shrink-0",
              U0[e ?? "neutral"]
            )
          }
        ),
        t
      ]
    }
  );
}
function G0(e) {
  const t = e.trim().toLowerCase();
  return /cessat|chius|falliment/.test(t) ? "error" : /sospes|inattiv|liquidaz|sciogliment/.test(t) ? "warning" : /attiv|in corso/.test(t) ? "success" : "neutral";
}
const Bn = (e) => !!e && e.trim() !== "";
function Sl({ label: e, value: t }) {
  return /* @__PURE__ */ k("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ f("span", { className: "text-xs text-text-muted", children: e }),
    /* @__PURE__ */ f("span", { className: "font-mono tabular-nums text-sm text-text-base", children: t }),
    /* @__PURE__ */ f(Qf, { text: t, label: "", "aria-label": `Copia ${e} ${t}` })
  ] });
}
function vA({
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
  const g = F0(e), v = e === "P" ? W0(t ?? void 0) : H0(t ?? void 0), b = v.icon ?? g.icon, w = d, x = [s?.codice, s?.descrizione].filter(Bn).join(" — "), y = Bn(r), C = Bn(o), P = Bn(i), S = Bn(a), E = Bn(u), N = y || C || !!x || E;
  return /* @__PURE__ */ k("header", { className: I("flex items-start gap-3", p), ...h, children: [
    /* @__PURE__ */ f(
      "div",
      {
        className: "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-subtle text-text-muted",
        "aria-hidden": "true",
        children: /* @__PURE__ */ f(b, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ k("div", { className: "min-w-0 flex-1 space-y-1.5", children: [
      /* @__PURE__ */ k("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-1", children: [
        /* @__PURE__ */ f(w, { className: "text-lg font-semibold text-text-base break-words", children: n }),
        S && /* @__PURE__ */ f(
          Y0,
          {
            label: a,
            variant: l ?? G0(a)
          }
        )
      ] }),
      /* @__PURE__ */ k("p", { className: "text-xs text-text-muted", children: [
        g.label,
        v.label !== g.label ? ` · ${v.label}` : "",
        P ? ` · ${i}` : ""
      ] }),
      N && /* @__PURE__ */ k("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1", children: [
        y && /* @__PURE__ */ f(Sl, { label: "CF", value: r }),
        C && /* @__PURE__ */ f(Sl, { label: "P.IVA", value: o }),
        !!x && /* @__PURE__ */ k("span", { className: "text-sm text-text-base", children: [
          /* @__PURE__ */ f("span", { className: "text-xs text-text-muted", children: "ATECO " }),
          /* @__PURE__ */ f("span", { className: "tabular-nums", children: x })
        ] }),
        E && /* @__PURE__ */ k("span", { className: "inline-flex items-center gap-1 text-sm text-text-base", children: [
          /* @__PURE__ */ f(Ld, { className: "h-3.5 w-3.5 text-text-muted", "aria-hidden": "true" }),
          u
        ] })
      ] })
    ] }),
    m && /* @__PURE__ */ f("div", { className: "flex shrink-0 items-center gap-2", children: m })
  ] });
}
// @__NO_SIDE_EFFECTS__
function K0(e) {
  const t = /* @__PURE__ */ q0(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(Z0);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function q0(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = J0(o), a = Q0(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? cr(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var X0 = /* @__PURE__ */ Symbol("radix.slottable");
function Z0(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === X0;
}
function Q0(e, t) {
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
function J0(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var rs = "Dialog", [Jf] = qt(rs), [eS, yt] = Jf(rs), em = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = c.useRef(null), l = c.useRef(null), [u, m] = Rn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: rs
  });
  return /* @__PURE__ */ f(
    eS,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Bt(),
      titleId: Bt(),
      descriptionId: Bt(),
      open: u,
      onOpenChange: m,
      onOpenToggle: c.useCallback(() => m((d) => !d), [m]),
      modal: i,
      children: n
    }
  );
};
em.displayName = rs;
var tm = "DialogTrigger", nm = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = yt(tm, n), s = ue(t, o.triggerRef);
    return /* @__PURE__ */ f(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": $a(o.open),
        ...r,
        ref: s,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
nm.displayName = tm;
var Ia = "DialogPortal", [tS, rm] = Jf(Ia, {
  forceMount: void 0
}), om = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = yt(Ia, t);
  return /* @__PURE__ */ f(tS, { scope: t, forceMount: n, children: c.Children.map(r, (i) => /* @__PURE__ */ f(bt, { present: n || s.open, children: /* @__PURE__ */ f(Jo, { asChild: !0, container: o, children: i }) })) });
};
om.displayName = Ia;
var _o = "DialogOverlay", sm = c.forwardRef(
  (e, t) => {
    const n = rm(_o, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = yt(_o, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ f(bt, { present: r || s.open, children: /* @__PURE__ */ f(rS, { ...o, ref: t }) }) : null;
  }
);
sm.displayName = _o;
var nS = /* @__PURE__ */ K0("DialogOverlay.RemoveScroll"), rS = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = yt(_o, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f(zr, { as: nS, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f(
        re.div,
        {
          "data-state": $a(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), kn = "DialogContent", im = c.forwardRef(
  (e, t) => {
    const n = rm(kn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = yt(kn, e.__scopeDialog);
    return /* @__PURE__ */ f(bt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ f(oS, { ...o, ref: t }) : /* @__PURE__ */ f(sS, { ...o, ref: t }) });
  }
);
im.displayName = kn;
var oS = c.forwardRef(
  (e, t) => {
    const n = yt(kn, e.__scopeDialog), r = c.useRef(null), o = ue(t, n.contentRef, r);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return es(s);
    }, []), /* @__PURE__ */ f(
      am,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: X(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: X(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), sS = c.forwardRef(
  (e, t) => {
    const n = yt(kn, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ f(
      am,
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
), am = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = yt(kn, n), l = c.useRef(null), u = ue(t, l);
    return pa(), /* @__PURE__ */ k(Ve, { children: [
      /* @__PURE__ */ f(
        Go,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ f(
            Yo,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": $a(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ k(Ve, { children: [
        /* @__PURE__ */ f(iS, { titleId: a.titleId }),
        /* @__PURE__ */ f(cS, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), _a = "DialogTitle", cm = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = yt(_a, n);
    return /* @__PURE__ */ f(re.h2, { id: o.titleId, ...r, ref: t });
  }
);
cm.displayName = _a;
var lm = "DialogDescription", um = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = yt(lm, n);
    return /* @__PURE__ */ f(re.p, { id: o.descriptionId, ...r, ref: t });
  }
);
um.displayName = lm;
var dm = "DialogClose", fm = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = yt(dm, n);
    return /* @__PURE__ */ f(
      re.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
fm.displayName = dm;
function $a(e) {
  return e ? "open" : "closed";
}
var mm = "DialogTitleWarning", [bA, pm] = Gx(mm, {
  contentName: kn,
  titleName: _a,
  docsSlug: "dialog"
}), iS = ({ titleId: e }) => {
  const t = pm(mm), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, aS = "DialogDescriptionWarning", cS = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${pm(aS).contentName}}.`;
  return c.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, lS = em, uS = nm, dS = om, hm = sm, gm = im, vm = cm, bm = um, ym = fm;
const fS = lS, mS = uS, pS = dS, yA = ym, wm = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  hm,
  {
    ref: n,
    className: I(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
wm.displayName = hm.displayName;
const xm = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ k(pS, { children: [
  /* @__PURE__ */ f(wm, {}),
  /* @__PURE__ */ k(
    gm,
    {
      ref: r,
      className: I(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ k(ym, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-transparent transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-subtle data-[state=open]:text-text-muted text-text-base", children: [
          /* @__PURE__ */ f(ar, { className: "h-4 w-4" }),
          /* @__PURE__ */ f("span", { className: "sr-only", children: "Chiudi" })
        ] })
      ]
    }
  )
] }));
xm.displayName = gm.displayName;
const Cm = ({
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
Cm.displayName = "DialogHeader";
const Sm = ({
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
Sm.displayName = "DialogFooter";
const Em = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  vm,
  {
    ref: n,
    className: I(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Em.displayName = vm.displayName;
const Pm = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  bm,
  {
    ref: n,
    className: I("text-sm text-text-muted", e),
    ...t
  }
));
Pm.displayName = bm.displayName;
function wA({
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
  return /* @__PURE__ */ k(fS, { open: b, onOpenChange: w, children: [
    n && /* @__PURE__ */ f(mS, { asChild: !0, children: n }),
    /* @__PURE__ */ k(xm, { children: [
      /* @__PURE__ */ k(Cm, { children: [
        /* @__PURE__ */ f(Em, { children: r }),
        o && /* @__PURE__ */ f(Pm, { children: o })
      ] }),
      /* @__PURE__ */ k(Sm, { className: "gap-2 sm:space-x-0", children: [
        /* @__PURE__ */ f(
          er,
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
        /* @__PURE__ */ k(
          er,
          {
            type: "button",
            variant: a ? "destructive" : "default",
            "aria-disabled": p || void 0,
            "aria-busy": p || void 0,
            className: I(p && "cursor-not-allowed opacity-75"),
            onClick: y,
            children: [
              p && /* @__PURE__ */ f(Sw, { "aria-hidden": "true", className: "mr-2 h-4 w-4 animate-spin" }),
              p && /* @__PURE__ */ f("span", { className: "sr-only", children: "Operazione in corso: " }),
              s
            ]
          }
        )
      ] })
    ] })
  ] });
}
const hS = c.lazy(async () => {
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
function xA({
  code: e,
  language: t = "text",
  copyable: n = !0,
  className: r,
  ...o
}) {
  const [s, i] = c.useState(!1), a = async () => {
    await navigator.clipboard.writeText(e), i(!0), setTimeout(() => i(!1), 2e3);
  };
  return /* @__PURE__ */ k(
    "div",
    {
      className: I("relative rounded-xl overflow-hidden text-sm", r),
      ...o,
      children: [
        /* @__PURE__ */ k("div", { className: "flex items-center justify-between px-4 py-2 bg-[#282c34] border-b border-border", children: [
          /* @__PURE__ */ f("span", { className: "text-xs font-mono text-text-muted uppercase tracking-wider", children: t }),
          n && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: a,
              className: "flex items-center gap-1.5 text-xs text-text-muted hover:text-white/80 transition-colors",
              "aria-label": "Copia codice",
              children: s ? /* @__PURE__ */ k(Ve, { children: [
                /* @__PURE__ */ f(Lr, { className: "h-3.5 w-3.5 text-green-400" }),
                /* @__PURE__ */ f("span", { className: "text-green-400", children: "Copiato" })
              ] }) : /* @__PURE__ */ k(Ve, { children: [
                /* @__PURE__ */ f(Fd, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ f("span", { children: "Copia" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ f(c.Suspense, { fallback: /* @__PURE__ */ f("pre", { className: "m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto", children: e }), children: /* @__PURE__ */ f(hS, { language: t, children: e }) })
      ]
    }
  );
}
const El = "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-info-bg border border-info-border", Pl = "text-info-fg shrink-0", Nl = "text-[9px] font-medium text-info-fg leading-none", Ol = "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-accent-bg border border-accent-border", Rl = "text-accent-fg shrink-0", kl = "text-[9px] font-medium text-accent-fg leading-none";
function CA({ source: e }) {
  return e === "mixed" ? /* @__PURE__ */ k("span", { className: "inline-flex items-center gap-1.5", children: [
    /* @__PURE__ */ k("span", { className: El, children: [
      /* @__PURE__ */ f(Bc, { size: 9, className: Pl }),
      /* @__PURE__ */ f("span", { className: Nl, children: "Dati reali" })
    ] }),
    /* @__PURE__ */ k("span", { className: Ol, children: [
      /* @__PURE__ */ f(Hc, { size: 9, className: Rl }),
      /* @__PURE__ */ f("span", { className: kl, children: "Simulato" })
    ] })
  ] }) : e === "simulated" ? /* @__PURE__ */ k("span", { className: Ol, children: [
    /* @__PURE__ */ f(Hc, { size: 9, className: Rl }),
    /* @__PURE__ */ f("span", { className: kl, children: "Simulato" })
  ] }) : /* @__PURE__ */ k("span", { className: El, children: [
    /* @__PURE__ */ f(Bc, { size: 9, className: Pl }),
    /* @__PURE__ */ f("span", { className: Nl, children: "Dati reali" })
  ] });
}
const An = "—", Sr = " ", kr = "−", Dl = /* @__PURE__ */ new Map();
function Dr(e, t) {
  const n = `${e}-${t}`;
  let r = Dl.get(n);
  return r || (r = new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: e,
    maximumFractionDigits: t,
    useGrouping: "always"
  }), Dl.set(n, r)), r;
}
function os(e) {
  return typeof e == "number" && Number.isFinite(e);
}
function ss(e, t) {
  return Math.round(e * 10 ** t) === 0;
}
function Ls(e, t = 0) {
  if (!os(e)) return An;
  const n = Math.abs(e);
  return (e < 0 && !ss(n, t) ? kr : "") + Dr(t, t).format(n);
}
function SA(e, t = {}) {
  if (!os(e)) return An;
  const { cents: n = !1, compact: r = !1 } = t, o = Math.abs(e);
  if (r && o >= 1e6) {
    const a = o / 1e6, l = a >= 100 ? 0 : 1, u = Dr(l, l).format(a).replace(/,0$/, "");
    return `${e < 0 ? kr + Sr : ""}€${Sr}${u}${Sr}mln`;
  }
  const s = n ? 2 : 0;
  return `${e < 0 && !ss(o, s) ? kr + Sr : ""}€${Sr}${Dr(s, s).format(o)}`;
}
function EA(e, t = {}) {
  if (!os(e)) return An;
  const { fractionDigits: n = 1, fixed: r = !1 } = t, o = r ? n : 0, s = Math.abs(e);
  return `${e < 0 && !ss(s, n) ? kr : ""}${Dr(o, n).format(s)}%`;
}
function gS(e, t = 0) {
  if (!os(e)) return An;
  const n = Math.abs(e);
  return (ss(n, t) ? "" : e > 0 ? "+" : kr) + Dr(t, t).format(n);
}
const vS = /^(\d{4})-(\d{2})-(\d{2})$/;
function Nm(e) {
  if (e == null || e === "") return null;
  let t;
  if (e instanceof Date)
    t = e;
  else {
    const n = vS.exec(e);
    if (t = n ? new Date(Number(n[1]), Number(n[2]) - 1, Number(n[3])) : new Date(e), n && (t.getMonth() !== Number(n[2]) - 1 || t.getDate() !== Number(n[3]))) return null;
  }
  return Number.isNaN(t.getTime()) ? null : t;
}
const $o = (e) => String(e).padStart(2, "0");
function bS(e) {
  const t = Nm(e);
  return t ? `${$o(t.getDate())}/${$o(t.getMonth() + 1)}/${t.getFullYear()}` : An;
}
function PA(e) {
  const t = Nm(e);
  return t ? `${bS(t)}, ${$o(t.getHours())}:${$o(t.getMinutes())}` : An;
}
function yS(e, t = "up-is-good", n = 0) {
  if (typeof e != "number" || !Number.isFinite(e) || Math.abs(e) <= n)
    return { direction: "flat", tone: "neutral" };
  const r = e > 0 ? "up" : "down";
  return { direction: r, tone: r === "up" == (t === "up-is-good") ? "positive" : "negative" };
}
const Ml = {
  positive: "text-trend-positive",
  negative: "text-trend-negative",
  neutral: "text-trend-neutral"
}, wS = {
  up: "in aumento",
  down: "in calo",
  flat: "invariato"
}, xS = { up: Td, down: Md, flat: Wd };
function CS({
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
    return /* @__PURE__ */ f("span", { className: I(l, Ml.neutral), ...a, children: An });
  const u = r ? n : Math.max(n, Math.abs(e) < 0.5 ? Math.abs(e) : 0), { direction: m, tone: d } = yS(e, t, u), p = r ?? ((v) => gS(v)), h = xS[m], g = s === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";
  return /* @__PURE__ */ k("span", { className: I(l, Ml[d]), ...a, children: [
    /* @__PURE__ */ f(h, { className: g, "aria-hidden": "true" }),
    /* @__PURE__ */ k("span", { className: "sr-only", children: [
      wS[m],
      d === "positive" ? ", positivo" : d === "negative" ? ", negativo" : "",
      ":",
      " "
    ] }),
    /* @__PURE__ */ k("span", { children: [
      p(e),
      o
    ] })
  ] });
}
function NA({ width: e, height: t = 48, className: n, variant: r = "color" }) {
  return /* @__PURE__ */ k(
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
        /* @__PURE__ */ k("g", { fill: "#f49e09", children: [
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
function SS(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const ES = {}, Er = {};
function En(e, t) {
  try {
    const r = (ES[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Er ? Er[r] : Tl(r, r.split(":"));
  } catch {
    if (e in Er) return Er[e];
    const n = e?.match(PS);
    return n ? Tl(e, n.slice(1)) : NaN;
  }
}
const PS = /([+-]\d\d):?(\d\d)?/;
function Tl(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Er[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Ot extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(En(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Om(this), li(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Ot(...n, t) : new Ot(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Ot(+this, t);
  }
  getTimezoneOffset() {
    const t = -En(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), li(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Ot(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Al = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Al.test(e)) return;
  const t = e.replace(Al, "$1UTC");
  Ot.prototype[t] && (e.startsWith("get") ? Ot.prototype[e] = function() {
    return this.internal[t]();
  } : (Ot.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), NS(this), +this;
  }, Ot.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), li(this), +this;
  }));
});
function li(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-En(e.timeZone, e) * 60));
}
function NS(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Om(e);
}
function Om(e) {
  const t = En(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), i = o - s, a = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  i && a && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + i);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const u = /* @__PURE__ */ new Date(+e);
  u.setUTCSeconds(0);
  const m = o > 0 ? u.getSeconds() : (u.getSeconds() - 60) % 60, d = Math.round(-(En(e.timeZone, e) * 60)) % 60;
  (d || m) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + d), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + d + m));
  const p = En(e.timeZone, e), h = p > 0 ? Math.floor(p) : Math.ceil(p), v = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, b = h !== n, w = v - l;
  if (b && w) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w);
    const x = En(e.timeZone, e), y = x > 0 ? Math.floor(x) : Math.ceil(x), C = h - y;
    C && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + C), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + C));
  }
}
class Le extends Ot {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Le(...n, t) : new Le(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${SS(this.timeZone, this)})`;
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
    return new Le(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Le(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Rm = 6048e5, OS = 864e5, Il = /* @__PURE__ */ Symbol.for("constructDateFrom");
function Re(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Il in e ? e[Il](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ve(e, t) {
  return Re(t || e, e);
}
function km(e, t, n) {
  const r = ve(e, n?.in);
  return isNaN(t) ? Re(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Dm(e, t, n) {
  const r = ve(e, n?.in);
  if (isNaN(t)) return Re(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = Re(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const i = s.getDate();
  return o >= i ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
let RS = {};
function jr() {
  return RS;
}
function ln(e, t) {
  const n = jr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ve(e, t?.in), s = o.getDay(), i = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Mr(e, t) {
  return ln(e, { ...t, weekStartsOn: 1 });
}
function Mm(e, t) {
  const n = ve(e, t?.in), r = n.getFullYear(), o = Re(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Mr(o), i = Re(n, 0);
  i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
  const a = Mr(i);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= a.getTime() ? r : r - 1;
}
function _l(e) {
  const t = ve(e), n = new Date(
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
function In(e, ...t) {
  const n = Re.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Tr(e, t) {
  const n = ve(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Fa(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  ), s = Tr(r), i = Tr(o), a = +s - _l(s), l = +i - _l(i);
  return Math.round((a - l) / OS);
}
function kS(e, t) {
  const n = Mm(e, t), r = Re(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Mr(r);
}
function DS(e, t, n) {
  return km(e, t * 7, n);
}
function MS(e, t, n) {
  return Dm(e, t * 12, n);
}
function TS(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Re.bind(null, o));
    const s = ve(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), Re(r, n || NaN);
}
function AS(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Re.bind(null, o));
    const s = ve(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), Re(r, n || NaN);
}
function IS(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  );
  return +Tr(r) == +Tr(o);
}
function Tm(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function _S(e) {
  return !(!Tm(e) && typeof e != "number" || isNaN(+ve(e)));
}
function Am(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), i = r.getMonth() - o.getMonth();
  return s * 12 + i;
}
function $S(e, t) {
  const n = ve(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Im(e, t) {
  const [n, r] = In(e, t.start, t.end);
  return { start: n, end: r };
}
function FS(e, t) {
  const { start: n, end: r } = Im(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setDate(1);
  let a = 1;
  const l = [];
  for (; +i <= s; )
    l.push(Re(n, i)), i.setMonth(i.getMonth() + a);
  return o ? l.reverse() : l;
}
function LS(e, t) {
  const n = ve(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function WS(e, t) {
  const n = ve(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function _m(e, t) {
  const n = ve(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function zS(e, t) {
  const { start: n, end: r } = Im(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, i = o ? r : n;
  i.setHours(0, 0, 0, 0), i.setMonth(0, 1);
  let a = 1;
  const l = [];
  for (; +i <= s; )
    l.push(Re(n, i)), i.setFullYear(i.getFullYear() + a);
  return o ? l.reverse() : l;
}
function $m(e, t) {
  const n = jr(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ve(e, t?.in), s = o.getDay(), i = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function BS(e, t) {
  return $m(e, { ...t, weekStartsOn: 1 });
}
const HS = {
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
}, VS = (e, t, n) => {
  let r;
  const o = HS[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Qn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const jS = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, US = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, YS = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, GS = {
  date: Qn({
    formats: jS,
    defaultWidth: "full"
  }),
  time: Qn({
    formats: US,
    defaultWidth: "full"
  }),
  dateTime: Qn({
    formats: YS,
    defaultWidth: "full"
  })
}, KS = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, qS = (e, t, n, r) => KS[e];
function Et(e) {
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
const XS = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ZS = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, QS = {
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
}, JS = {
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
}, eE = {
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
}, tE = {
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
}, nE = (e, t) => {
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
}, rE = {
  ordinalNumber: nE,
  era: Et({
    values: XS,
    defaultWidth: "wide"
  }),
  quarter: Et({
    values: ZS,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Et({
    values: QS,
    defaultWidth: "wide"
  }),
  day: Et({
    values: JS,
    defaultWidth: "wide"
  }),
  dayPeriod: Et({
    values: eE,
    defaultWidth: "wide",
    formattingValues: tE,
    defaultFormattingWidth: "wide"
  })
};
function Pt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const i = s[0], a = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(a) ? sE(a, (d) => d.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      oE(a, (d) => d.test(i))
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
function oE(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function sE(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Fm(e) {
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
const iE = /^(\d+)(th|st|nd|rd)?/i, aE = /\d+/i, cE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, lE = {
  any: [/^b/i, /^(a|c)/i]
}, uE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, dE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, fE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, mE = {
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
}, pE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, hE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, gE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, vE = {
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
}, bE = {
  ordinalNumber: Fm({
    matchPattern: iE,
    parsePattern: aE,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Pt({
    matchPatterns: cE,
    defaultMatchWidth: "wide",
    parsePatterns: lE,
    defaultParseWidth: "any"
  }),
  quarter: Pt({
    matchPatterns: uE,
    defaultMatchWidth: "wide",
    parsePatterns: dE,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Pt({
    matchPatterns: fE,
    defaultMatchWidth: "wide",
    parsePatterns: mE,
    defaultParseWidth: "any"
  }),
  day: Pt({
    matchPatterns: pE,
    defaultMatchWidth: "wide",
    parsePatterns: hE,
    defaultParseWidth: "any"
  }),
  dayPeriod: Pt({
    matchPatterns: gE,
    defaultMatchWidth: "any",
    parsePatterns: vE,
    defaultParseWidth: "any"
  })
}, Yn = {
  code: "en-US",
  formatDistance: VS,
  formatLong: GS,
  formatRelative: qS,
  localize: rE,
  match: bE,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function yE(e, t) {
  const n = ve(e, t?.in);
  return Fa(n, _m(n)) + 1;
}
function La(e, t) {
  const n = ve(e, t?.in), r = +Mr(n) - +kS(n);
  return Math.round(r / Rm) + 1;
}
function Lm(e, t) {
  const n = ve(e, t?.in), r = n.getFullYear(), o = jr(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, i = Re(t?.in || e, 0);
  i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
  const a = ln(i, t), l = Re(t?.in || e, 0);
  l.setFullYear(r, 0, s), l.setHours(0, 0, 0, 0);
  const u = ln(l, t);
  return +n >= +a ? r + 1 : +n >= +u ? r : r - 1;
}
function wE(e, t) {
  const n = jr(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = Lm(e, t), s = Re(t?.in || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), ln(s, t);
}
function Wa(e, t) {
  const n = ve(e, t?.in), r = +ln(n, t) - +wE(n, t);
  return Math.round(r / Rm) + 1;
}
function me(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Jt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return me(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : me(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return me(e.getDate(), t.length);
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
    return me(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return me(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return me(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return me(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return me(o, t.length);
  }
}, Hn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, $l = {
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
    return Jt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Lm(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = s % 100;
      return me(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : me(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Mm(e);
    return me(n, t.length);
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
    return me(n, t.length);
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
        return me(r, 2);
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
        return me(r, 2);
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
        return Jt.M(e, t);
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
        return me(r + 1, 2);
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
    const o = Wa(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : me(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = La(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : me(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Jt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = yE(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : me(r, t.length);
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
        return me(s, 2);
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
        return me(s, t.length);
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
        return me(o, t.length);
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
    switch (r === 12 ? o = Hn.noon : r === 0 ? o = Hn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Hn.evening : r >= 12 ? o = Hn.afternoon : r >= 4 ? o = Hn.morning : o = Hn.night, t) {
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
    return Jt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Jt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : me(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : me(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Jt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Jt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Jt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Ll(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Cn(r);
      // Hours and minutes with `:` delimiter
      default:
        return Cn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Ll(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Cn(r);
      // Hours and minutes with `:` delimiter
      default:
        return Cn(r, ":");
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
        return "GMT" + Fl(r, ":");
      default:
        return "GMT" + Cn(r, ":");
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
        return "GMT" + Fl(r, ":");
      default:
        return "GMT" + Cn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return me(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return me(+e, t.length);
  }
};
function Fl(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + me(s, 2);
}
function Ll(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + me(Math.abs(e) / 60, 2) : Cn(e, t);
}
function Cn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = me(Math.trunc(r / 60), 2), s = me(r % 60, 2);
  return n + o + t + s;
}
const Wl = (e, t) => {
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
}, Wm = (e, t) => {
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
}, xE = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Wl(e, t);
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
  return s.replace("{{date}}", Wl(r, t)).replace("{{time}}", Wm(o, t));
}, CE = {
  p: Wm,
  P: xE
}, SE = /^D+$/, EE = /^Y+$/, PE = ["D", "DD", "YY", "YYYY"];
function NE(e) {
  return SE.test(e);
}
function OE(e) {
  return EE.test(e);
}
function RE(e, t, n) {
  const r = kE(e, t, n);
  if (console.warn(r), PE.includes(e)) throw new RangeError(r);
}
function kE(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const DE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ME = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, TE = /^'([^]*?)'?$/, AE = /''/g, IE = /[a-zA-Z]/;
function Lt(e, t, n) {
  const r = jr(), o = n?.locale ?? r.locale ?? Yn, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, a = ve(e, n?.in);
  if (!_S(a))
    throw new RangeError("Invalid time value");
  let l = t.match(ME).map((m) => {
    const d = m[0];
    if (d === "p" || d === "P") {
      const p = CE[d];
      return p(m, o.formatLong);
    }
    return m;
  }).join("").match(DE).map((m) => {
    if (m === "''")
      return { isToken: !1, value: "'" };
    const d = m[0];
    if (d === "'")
      return { isToken: !1, value: _E(m) };
    if ($l[d])
      return { isToken: !0, value: m };
    if (d.match(IE))
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
    (!n?.useAdditionalWeekYearTokens && OE(d) || !n?.useAdditionalDayOfYearTokens && NE(d)) && RE(d, t, String(e));
    const p = $l[d[0]];
    return p(a, d, o.localize, u);
  }).join("");
}
function _E(e) {
  const t = e.match(TE);
  return t ? t[1].replace(AE, "'") : e;
}
function $E(e, t) {
  const n = ve(e, t?.in), r = n.getFullYear(), o = n.getMonth(), s = Re(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function FE(e, t) {
  return ve(e, t?.in).getMonth();
}
function LE(e, t) {
  return ve(e, t?.in).getFullYear();
}
function WE(e, t) {
  return +ve(e) > +ve(t);
}
function zE(e, t) {
  return +ve(e) < +ve(t);
}
function zl(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  );
  return +ln(r, n) == +ln(o, n);
}
function BE(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function HE(e, t, n) {
  const [r, o] = In(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function VE(e, t, n) {
  const r = ve(e, n?.in), o = r.getFullYear(), s = r.getDate(), i = Re(e, 0);
  i.setFullYear(o, t, 15), i.setHours(0, 0, 0, 0);
  const a = $E(i);
  return r.setMonth(t, Math.min(s, a)), r;
}
function jE(e, t, n) {
  const r = ve(e, n?.in);
  return isNaN(+r) ? Re(e, NaN) : (r.setFullYear(t), r);
}
const Bl = 5, UE = 4;
function YE(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, Bl * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? Bl : UE;
}
function zm(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function GE(e, t) {
  const n = zm(e, t), r = YE(e, t);
  return t.addDays(n, r * 7 - 1);
}
const KE = {
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
}, qE = (e, t, n) => {
  let r;
  const o = KE[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "tra " + r : r + " fa" : r;
}, XE = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, ZE = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, QE = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, JE = {
  date: Qn({
    formats: XE,
    defaultWidth: "full"
  }),
  time: Qn({
    formats: ZE,
    defaultWidth: "full"
  }),
  dateTime: Qn({
    formats: QE,
    defaultWidth: "full"
  })
}, za = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato"
];
function eP(e) {
  return e === 0 ? "'domenica scorsa alle' p" : "'" + za[e] + " scorso alle' p";
}
function Hl(e) {
  return "'" + za[e] + " alle' p";
}
function tP(e) {
  return e === 0 ? "'domenica prossima alle' p" : "'" + za[e] + " prossimo alle' p";
}
const nP = {
  lastWeek: (e, t, n) => {
    const r = e.getDay();
    return zl(e, t, n) ? Hl(r) : eP(r);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: (e, t, n) => {
    const r = e.getDay();
    return zl(e, t, n) ? Hl(r) : tP(r);
  },
  other: "P"
}, rP = (e, t, n, r) => {
  const o = nP[e];
  return typeof o == "function" ? o(t, n, r) : o;
}, oP = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["avanti Cristo", "dopo Cristo"]
}, sP = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, iP = {
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
}, aP = {
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
}, cP = {
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
}, lP = {
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
}, uP = (e, t) => {
  const n = Number(e);
  return String(n);
}, dP = {
  ordinalNumber: uP,
  era: Et({
    values: oP,
    defaultWidth: "wide"
  }),
  quarter: Et({
    values: sP,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Et({
    values: iP,
    defaultWidth: "wide"
  }),
  day: Et({
    values: aP,
    defaultWidth: "wide"
  }),
  dayPeriod: Et({
    values: cP,
    defaultWidth: "wide",
    formattingValues: lP,
    defaultFormattingWidth: "wide"
  })
}, fP = /^(\d+)(º)?/i, mP = /\d+/i, pP = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}, hP = {
  any: [/^a/i, /^(d|e)/i]
}, gP = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, vP = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bP = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}, yP = {
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
}, wP = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}, xP = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}, CP = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}, SP = {
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
}, EP = {
  ordinalNumber: Fm({
    matchPattern: fP,
    parsePattern: mP,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Pt({
    matchPatterns: pP,
    defaultMatchWidth: "wide",
    parsePatterns: hP,
    defaultParseWidth: "any"
  }),
  quarter: Pt({
    matchPatterns: gP,
    defaultMatchWidth: "wide",
    parsePatterns: vP,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Pt({
    matchPatterns: bP,
    defaultMatchWidth: "wide",
    parsePatterns: yP,
    defaultParseWidth: "any"
  }),
  day: Pt({
    matchPatterns: wP,
    defaultMatchWidth: "wide",
    parsePatterns: xP,
    defaultParseWidth: "any"
  }),
  dayPeriod: Pt({
    matchPatterns: CP,
    defaultMatchWidth: "any",
    parsePatterns: SP,
    defaultParseWidth: "any"
  })
}, PP = {
  code: "it",
  formatDistance: qE,
  formatLong: JE,
  formatRelative: rP,
  localize: dP,
  match: EP,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Bm = {
  ...Yn,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, a) => Lt(i, a, { locale: Yn, ...n });
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
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => Lt(o, s, { locale: Yn, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (i, a) => Lt(i, a, { locale: Yn, ...n });
      let s = o(e, "PPPP");
      return t?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => Lt(o, s, { locale: Yn, ...t }), r(e, "cccc");
    }
  }
};
class tt {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Le.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new Le(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : km(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : Dm(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : DS(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : MS(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Fa(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Am(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : FS(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : zS(r), s = new Set(o.map((a) => this.getYear(a)));
      if (s.size === o.length)
        return o;
      const i = [];
      return s.forEach((a) => {
        i.push(new Date(a, 0, 1));
      }), i;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : GE(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : BS(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : $S(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : $m(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : WS(r), this.format = (r, o, s) => {
      const i = this.overrides?.format ? this.overrides.format(r, o, this.options) : Lt(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(i) : i;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : La(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : FE(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : LE(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : Wa(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : WE(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : zE(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : Tm(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : IS(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : BE(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : HE(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : TS(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : AS(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : VE(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : jE(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : zm(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : Tr(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Mr(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : LS(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : ln(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : _m(r), this.options = { locale: Bm, ...t }, this.overrides = n;
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
    return t && tt.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n?.code;
    if (s && tt.yearFirstLocales.has(s))
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
tt.yearFirstLocales = /* @__PURE__ */ new Set([
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
const At = new tt();
class Hm {
  constructor(t, n, r = At) {
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
class NP {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class OP {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function RP(e) {
  return V.createElement("button", { ...e });
}
function kP(e) {
  return V.createElement("span", { ...e });
}
function DP(e) {
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
function MP(e) {
  const { day: t, modifiers: n, ...r } = e;
  return V.createElement("td", { ...r });
}
function TP(e) {
  const { day: t, modifiers: n, ...r } = e, o = V.useRef(null);
  return V.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), V.createElement("button", { ref: o, ...r });
}
var G;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(G || (G = {}));
var xe;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(xe || (xe = {}));
var pt;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(pt || (pt = {}));
var Ge;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ge || (Ge = {}));
function AP(e) {
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
function IP(e) {
  return V.createElement("div", { ...e });
}
function _P(e) {
  return V.createElement("div", { ...e });
}
function $P(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r }, e.children);
}
function FP(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return V.createElement("div", { ...r });
}
function LP(e) {
  return V.createElement("table", { ...e });
}
function WP(e) {
  return V.createElement("div", { ...e });
}
const Vm = Tu(void 0);
function Ur() {
  const e = Au(Vm);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function zP(e) {
  const { components: t } = Ur();
  return V.createElement(t.Dropdown, { ...e });
}
function BP(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: i, classNames: a, labels: { labelPrevious: l, labelNext: u } } = Ur(), m = Ye((p) => {
    o && n?.(p);
  }, [o, n]), d = Ye((p) => {
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
function HP(e) {
  const { components: t } = Ur();
  return V.createElement(t.Button, { ...e });
}
function VP(e) {
  return V.createElement("option", { ...e });
}
function jP(e) {
  const { components: t } = Ur();
  return V.createElement(t.Button, { ...e });
}
function UP(e) {
  const { rootRef: t, ...n } = e;
  return V.createElement("div", { ...n, ref: t });
}
function YP(e) {
  return V.createElement("select", { ...e });
}
function GP(e) {
  const { week: t, ...n } = e;
  return V.createElement("tr", { ...n });
}
function KP(e) {
  return V.createElement("th", { ...e });
}
function qP(e) {
  return V.createElement(
    "thead",
    { "aria-hidden": !0 },
    V.createElement("tr", { ...e })
  );
}
function XP(e) {
  const { week: t, ...n } = e;
  return V.createElement("th", { ...n });
}
function ZP(e) {
  return V.createElement("th", { ...e });
}
function QP(e) {
  return V.createElement("tbody", { ...e });
}
function JP(e) {
  const { components: t } = Ur();
  return V.createElement(t.Dropdown, { ...e });
}
const e2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: RP,
  CaptionLabel: kP,
  Chevron: DP,
  Day: MP,
  DayButton: TP,
  Dropdown: AP,
  DropdownNav: IP,
  Footer: _P,
  Month: $P,
  MonthCaption: FP,
  MonthGrid: LP,
  Months: WP,
  MonthsDropdown: zP,
  Nav: BP,
  NextMonthButton: HP,
  Option: VP,
  PreviousMonthButton: jP,
  Root: UP,
  Select: YP,
  Week: GP,
  WeekNumber: XP,
  WeekNumberHeader: ZP,
  Weekday: KP,
  Weekdays: qP,
  Weeks: QP,
  YearsDropdown: JP
}, Symbol.toStringTag, { value: "Module" }));
function Wt(e, t, n = !1, r = At) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: i, isSameDay: a } = r;
  return o && s ? (i(s, o) < 0 && ([o, s] = [s, o]), i(t, o) >= (n ? 1 : 0) && i(s, t) >= (n ? 1 : 0)) : !n && s ? a(s, t) : !n && o ? a(o, t) : !1;
}
function Ba(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function is(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Ha(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Va(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function jm(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Um(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function zt(e, t, n = At) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: i } = n;
  return r.some((a) => {
    if (typeof a == "boolean")
      return a;
    if (n.isDate(a))
      return o(e, a);
    if (Um(a, n))
      return a.some((l) => o(e, l));
    if (is(a))
      return Wt(a, e, !1, n);
    if (jm(a))
      return Array.isArray(a.dayOfWeek) ? a.dayOfWeek.includes(e.getDay()) : a.dayOfWeek === e.getDay();
    if (Ba(a)) {
      const l = s(a.before, e), u = s(a.after, e), m = l > 0, d = u < 0;
      return i(a.before, a.after) ? d && m : m || d;
    }
    return Ha(a) ? s(e, a.after) > 0 : Va(a) ? s(a.before, e) > 0 : typeof a == "function" ? a(e) : !1;
  });
}
function t2(e, t, n, r, o) {
  const { disabled: s, hidden: i, modifiers: a, showOutsideDays: l, broadcastCalendar: u, today: m = o.today() } = t, { isSameDay: d, isSameMonth: p, startOfMonth: h, isBefore: g, endOfMonth: v, isAfter: b } = o, w = n && h(n), x = r && v(r), y = {
    [xe.focused]: [],
    [xe.outside]: [],
    [xe.disabled]: [],
    [xe.hidden]: [],
    [xe.today]: []
  }, C = {};
  for (const P of e) {
    const { date: S, displayMonth: E } = P, N = !!(E && !p(S, E)), R = !!(w && g(S, w)), T = !!(x && b(S, x)), _ = !!(s && zt(S, s, o)), D = !!(i && zt(S, i, o)) || R || T || // Broadcast calendar will show outside days as default
    !u && !l && N || u && l === !1 && N, L = d(S, m);
    N && y.outside.push(P), _ && y.disabled.push(P), D && y.hidden.push(P), L && y.today.push(P), a && Object.keys(a).forEach((F) => {
      const z = a?.[F];
      z && zt(S, z, o) && (C[F] ? C[F].push(P) : C[F] = [P]);
    });
  }
  return (P) => {
    const S = {
      [xe.focused]: !1,
      [xe.disabled]: !1,
      [xe.hidden]: !1,
      [xe.outside]: !1,
      [xe.today]: !1
    }, E = {};
    for (const N in y) {
      const R = y[N];
      S[N] = R.some((T) => T === P);
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
function n2(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[xe[s]] ? o.push(t[xe[s]]) : t[pt[s]] && o.push(t[pt[s]]), o), [t[G.Day]]);
}
function r2(e) {
  return {
    ...e2,
    ...e
  };
}
function o2(e) {
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
function s2() {
  const e = {};
  for (const t in G)
    e[G[t]] = `rdp-${G[t]}`;
  for (const t in xe)
    e[xe[t]] = `rdp-${xe[t]}`;
  for (const t in pt)
    e[pt[t]] = `rdp-${pt[t]}`;
  for (const t in Ge)
    e[Ge[t]] = `rdp-${Ge[t]}`;
  return e;
}
function Ym(e, t, n) {
  return (n ?? new tt(t)).formatMonthYear(e);
}
const i2 = Ym;
function a2(e, t, n) {
  return (n ?? new tt(t)).format(e, "d");
}
function c2(e, t = At) {
  return t.format(e, "LLLL");
}
function l2(e, t, n) {
  return (n ?? new tt(t)).format(e, "cccccc");
}
function u2(e, t = At) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function d2() {
  return "";
}
function Gm(e, t = At) {
  return t.format(e, "yyyy");
}
const f2 = Gm, m2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Ym,
  formatDay: a2,
  formatMonthCaption: i2,
  formatMonthDropdown: c2,
  formatWeekNumber: u2,
  formatWeekNumberHeader: d2,
  formatWeekdayName: l2,
  formatYearCaption: f2,
  formatYearDropdown: Gm
}, Symbol.toStringTag, { value: "Module" }));
function p2(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...m2,
    ...e
  };
}
function ja(e, t, n, r) {
  let o = (r ?? new tt(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const h2 = ja;
function Ua(e, t, n) {
  return (n ?? new tt(t)).formatMonthYear(e);
}
const g2 = Ua;
function Km(e, t, n, r) {
  let o = (r ?? new tt(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function qm(e) {
  return "Choose the Month";
}
function Xm() {
  return "";
}
const v2 = "Go to the Next Month";
function Zm(e, t) {
  return v2;
}
function Qm(e) {
  return "Go to the Previous Month";
}
function Jm(e, t, n) {
  return (n ?? new tt(t)).format(e, "cccc");
}
function ep(e, t) {
  return `Week ${e}`;
}
function tp(e) {
  return "Week Number";
}
function np(e) {
  return "Choose the Year";
}
const b2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: g2,
  labelDay: h2,
  labelDayButton: ja,
  labelGrid: Ua,
  labelGridcell: Km,
  labelMonthDropdown: qm,
  labelNav: Xm,
  labelNext: Zm,
  labelPrevious: Qm,
  labelWeekNumber: ep,
  labelWeekNumberHeader: tp,
  labelWeekday: Jm,
  labelYearDropdown: np
}, Symbol.toStringTag, { value: "Module" })), ft = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function y2(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...b2,
    ...e ?? {},
    labelDayButton: ft(ja, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: ft(qm, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: ft(Zm, e?.labelNext, n.labelNext),
    labelPrevious: ft(Qm, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: ft(ep, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: ft(np, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: ft(Ua, e?.labelGrid, n.labelGrid),
    labelGridcell: ft(Km, e?.labelGridcell, n.labelGridcell),
    labelNav: ft(Xm, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: ft(tp, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: ft(Jm, e?.labelWeekday, n.labelWeekday)
  };
}
function w2(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: i, endOfYear: a, eachMonthOfInterval: l, getMonth: u } = o;
  return l({
    start: i(e),
    end: a(e)
  }).map((p) => {
    const h = r.formatMonthDropdown(p, o), g = u(p), v = t && p < s(t) || n && p > s(n) || !1;
    return { value: g, label: h, disabled: v };
  });
}
function x2(e, t = {}, n = {}) {
  let r = { ...t?.[G.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function C2(e, t, n, r) {
  const o = r ?? e.today(), s = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), i = [];
  for (let a = 0; a < 7; a++) {
    const l = e.addDays(s, a);
    i.push(l);
  }
  return i;
}
function S2(e, t, n, r, o = !1) {
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
function E2(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, s = (a) => {
    const l = typeof a == "number" || typeof a == "string" ? new Date(a) : a;
    return new Le(l.getFullYear(), l.getMonth(), l.getDate(), 12, 0, 0, e);
  }, i = (a) => {
    const l = s(a);
    return new Date(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => s(Le.tz(e)),
    newDate: (a, l, u) => new Le(a, l, u, 12, 0, 0, e),
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
      const l = s(a.start), u = s(a.end), m = [], d = new Le(l.getFullYear(), l.getMonth(), 1, 12, 0, 0, e), p = u.getFullYear() * 12 + u.getMonth();
      for (; d.getFullYear() * 12 + d.getMonth() <= p; )
        m.push(new Le(d, e)), d.setMonth(d.getMonth() + 1, 1);
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
      const l = s(a.start), u = s(a.end), m = [], d = new Le(l.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; d.getFullYear() <= u.getFullYear(); )
        m.push(new Le(d, e)), d.setFullYear(d.getFullYear() + 1, 0, 1);
      return m;
    },
    getWeek: (a, l) => {
      const u = i(a);
      return Wa(u, {
        weekStartsOn: l?.weekStartsOn ?? o,
        firstWeekContainsDate: l?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (a) => {
      const l = i(a);
      return La(l);
    },
    differenceInCalendarDays: (a, l) => {
      const u = i(a), m = i(l);
      return Fa(u, m);
    },
    differenceInCalendarMonths: (a, l) => {
      const u = i(a), m = i(l);
      return Am(u, m);
    }
  };
}
const Yr = (e) => e instanceof HTMLElement ? e : null, Ws = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], P2 = (e) => Yr(e.querySelector("[data-animated-month]")), zs = (e) => Yr(e.querySelector("[data-animated-caption]")), Bs = (e) => Yr(e.querySelector("[data-animated-weeks]")), N2 = (e) => Yr(e.querySelector("[data-animated-nav]")), O2 = (e) => Yr(e.querySelector("[data-animated-weekdays]"));
function R2(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const i = nn(null), a = nn(r), l = nn(!1);
  Mu(() => {
    const u = a.current;
    if (a.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || u.length === 0 || r.length !== u.length)
      return;
    const m = s.isSameMonth(r[0].date, u[0].date), d = s.isAfter(r[0].date, u[0].date), p = d ? n[Ge.caption_after_enter] : n[Ge.caption_before_enter], h = d ? n[Ge.weeks_after_enter] : n[Ge.weeks_before_enter], g = i.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (Ws(v).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const C = P2(y);
      C && y.contains(C) && y.removeChild(C);
      const P = zs(y);
      P && P.classList.remove(p);
      const S = Bs(y);
      S && S.classList.remove(h);
    }), i.current = v) : i.current = null, l.current || m || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = g instanceof HTMLElement ? Ws(g) : [], w = Ws(e.current);
    if (w?.every((x) => x instanceof HTMLElement) && b && b.every((x) => x instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const x = N2(e.current);
      x && (x.style.zIndex = "1"), w.forEach((y, C) => {
        const P = b[C];
        if (!P)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const S = zs(y);
        S && S.classList.add(p);
        const E = Bs(y);
        E && E.classList.add(h);
        const N = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), x && (x.style.zIndex = ""), S && S.classList.remove(p), E && E.classList.remove(h), y.style.position = "", y.style.overflow = "", y.contains(P) && y.removeChild(P);
        };
        P.style.pointerEvents = "none", P.style.position = "absolute", P.style.overflow = "hidden", P.setAttribute("aria-hidden", "true");
        const R = O2(P);
        R && (R.style.opacity = "0");
        const T = zs(P);
        T && (T.classList.add(d ? n[Ge.caption_before_exit] : n[Ge.caption_after_exit]), T.addEventListener("animationend", N));
        const _ = Bs(P);
        _ && _.classList.add(d ? n[Ge.weeks_before_exit] : n[Ge.weeks_after_exit]), y.insertBefore(P, y.firstChild);
      });
    }
  });
}
function k2(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: i, fixedWeeks: a, broadcastCalendar: l } = n ?? {}, { addDays: u, differenceInCalendarDays: m, differenceInCalendarMonths: d, endOfBroadcastWeek: p, endOfISOWeek: h, endOfMonth: g, endOfWeek: v, isAfter: b, startOfBroadcastWeek: w, startOfISOWeek: x, startOfWeek: y } = r, C = l ? w(o, r) : i ? x(o) : y(o), P = l ? p(s) : i ? h(g(s)) : v(g(s)), S = t && (l ? p(t) : i ? h(t) : v(t)), E = S && b(P, S) ? S : P, N = m(E, C), R = d(s, o) + 1, T = [];
  for (let L = 0; L <= N; L++) {
    const F = u(C, L);
    T.push(F);
  }
  const D = (l ? 35 : 42) * R;
  if (a && T.length < D) {
    const L = D - T.length;
    for (let F = 0; F < L; F++) {
      const z = u(T[T.length - 1], 1);
      T.push(z);
    }
  }
  return T;
}
function D2(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, i) => s.concat(i.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function M2(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let i = 0; i < o; i++) {
    const a = r.addMonths(e, i);
    if (t && a > t)
      break;
    s.push(a);
  }
  return s;
}
function Vl(e, t, n, r) {
  const { month: o, defaultMonth: s, today: i = r.today(), numberOfMonths: a = 1 } = e;
  let l = o || s || i;
  const { differenceInCalendarMonths: u, addMonths: m, startOfMonth: d } = r;
  if (n && u(n, l) < a - 1) {
    const p = -1 * (a - 1);
    l = m(n, p);
  }
  return t && u(l, t) < 0 && (l = t), d(l);
}
function T2(e, t, n, r) {
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
      const R = n.ISOWeek ? u(N) : m(N), T = E.find((D) => D.weekNumber === R), _ = new Hm(N, b, r);
      return T ? T.days.push(_) : E.push(new OP(R, [_])), E;
    }, []), S = new NP(b, P);
    return v.push(S), v;
  }, []);
  return n.reverseMonths ? g.reverse() : g;
}
function A2(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: i, endOfMonth: a, addYears: l, endOfYear: u, newDate: m, today: d } = t, { fromYear: p, toYear: h, fromMonth: g, toMonth: v } = e;
  !n && g && (n = g), !n && p && (n = t.newDate(p, 0, 1)), !r && v && (r = v), !r && h && (r = m(h, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = i(n) : p ? n = m(p, 0, 1) : !n && b && (n = o(l(e.today ?? d(), -100))), r ? r = a(r) : h ? r = m(h, 11, 31) : !r && b && (r = u(e.today ?? d())), [
    n && s(n),
    r && s(r)
  ];
}
function I2(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: i, addMonths: a, differenceInCalendarMonths: l } = r, u = o ? s : 1, m = i(e);
  if (!t)
    return a(m, u);
  if (!(l(t, e) < s))
    return a(m, u);
}
function _2(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: i, addMonths: a, differenceInCalendarMonths: l } = r, u = o ? s ?? 1 : 1, m = i(e);
  if (!t)
    return a(m, -u);
  if (!(l(m, t) <= 0))
    return a(m, -u);
}
function $2(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function as(e, t) {
  const [n, r] = ht(e);
  return [t === void 0 ? n : t, r];
}
function F2(e, t) {
  const [n, r] = A2(e, t), { startOfMonth: o, endOfMonth: s } = t, i = Vl(e, n, r, t), [a, l] = as(
    i,
    // initialMonth is always computed from props.month if provided
    e.month ? i : void 0
  );
  Nn(() => {
    const C = Vl(e, n, r, t);
    l(C);
  }, [e.timeZone]);
  const { months: u, weeks: m, days: d, previousMonth: p, nextMonth: h } = go(() => {
    const C = M2(a, r, { numberOfMonths: e.numberOfMonths }, t), P = k2(C, e.endMonth ? s(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), S = T2(C, P, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), E = $2(S), N = D2(S), R = _2(a, n, e, t), T = I2(a, r, e, t);
    return {
      months: S,
      weeks: E,
      days: N,
      previousMonth: R,
      nextMonth: T
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
var xt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(xt || (xt = {}));
function jl(e) {
  return !e[xe.disabled] && !e[xe.hidden] && !e[xe.outside];
}
function L2(e, t, n, r) {
  let o, s = -1;
  for (const i of e) {
    const a = t(i);
    jl(a) && (a[xe.focused] && s < xt.FocusedModifier ? (o = i, s = xt.FocusedModifier) : r?.isEqualTo(i) && s < xt.LastFocused ? (o = i, s = xt.LastFocused) : n(i.date) && s < xt.Selected ? (o = i, s = xt.Selected) : a[xe.today] && s < xt.Today && (o = i, s = xt.Today));
  }
  return o || (o = e.find((i) => jl(t(i)))), o;
}
function W2(e, t, n, r, o, s, i) {
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
function rp(e, t, n, r, o, s, i, a = 0) {
  if (a > 365)
    return;
  const l = W2(e, t, n.date, r, o, s, i), u = !!(s.disabled && zt(l, s.disabled, i)), m = !!(s.hidden && zt(l, s.hidden, i)), d = l, p = new Hm(l, d, i);
  return !u && !m ? p : rp(e, t, p, r, o, s, i, a + 1);
}
function z2(e, t, n, r, o) {
  const { autoFocus: s } = e, [i, a] = ht(), l = L2(t.days, n, r || (() => !1), i), [u, m] = ht(s ? l : void 0);
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
      const w = rp(v, b, u, t.navStart, t.navEnd, e, o);
      w && (e.disableNavigation && !t.days.some((y) => y.isEqualTo(w)) || (t.goToDay(w), m(w)));
    }
  };
}
function B2(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = as(n, o ? n : void 0), a = o ? n : s, { isSameDay: l } = t, u = (h) => a?.some((g) => l(g, h)) ?? !1, { min: m, max: d } = e;
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
function H2(e, t, n = 0, r = 0, o = !1, s = At) {
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
function V2(e, t, n = At) {
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
function Ul(e, t, n = At) {
  return Wt(e, t.from, !1, n) || Wt(e, t.to, !1, n) || Wt(t, e.from, !1, n) || Wt(t, e.to, !1, n);
}
function j2(e, t, n = At) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((a) => typeof a != "function").some((a) => typeof a == "boolean" ? a : n.isDate(a) ? Wt(e, a, !1, n) : Um(a, n) ? a.some((l) => Wt(e, l, !1, n)) : is(a) ? a.from && a.to ? Ul(e, { from: a.from, to: a.to }, n) : !1 : jm(a) ? V2(e, a.dayOfWeek, n) : Ba(a) ? n.isAfter(a.before, a.after) ? Ul(e, {
    from: n.addDays(a.after, 1),
    to: n.addDays(a.before, -1)
  }, n) : zt(e.from, a, n) || zt(e.to, a, n) : Ha(a) || Va(a) ? zt(e.from, a, n) || zt(e.to, a, n) : !1))
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
function U2(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: o, selected: s, required: i, onSelect: a } = e, [l, u] = as(s, a ? s : void 0), m = a ? s : l;
  return {
    selected: m,
    select: (h, g, v) => {
      const { min: b, max: w } = e;
      let x;
      if (h) {
        const y = m?.from, C = m?.to, P = !!y && !!C, S = !!y && !!C && t.isSameDay(y, C) && t.isSameDay(h, y);
        o && (P || !m?.from) ? !i && S ? x = void 0 : x = { from: h, to: void 0 } : x = H2(h, m, b, w, i, t);
      }
      return r && n && x?.from && x.to && j2({ from: x.from, to: x.to }, n, t) && (x.from = h, x.to = void 0), a || u(x), a?.(x, h, g, v), x;
    },
    isSelected: (h) => m && Wt(m, h, !1, t)
  };
}
function Y2(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, i] = as(n, o ? n : void 0), a = o ? n : s, { isSameDay: l } = t;
  return {
    selected: a,
    select: (d, p, h) => {
      let g = d;
      return !r && a && a && l(d, a) && (g = void 0), o || i(g), o?.(g, d, p, h), g;
    },
    isSelected: (d) => a ? l(a, d) : !1
  };
}
function G2(e, t) {
  const n = Y2(e, t), r = B2(e, t), o = U2(e, t);
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
function rt(e, t) {
  return e instanceof Le && e.timeZone === t ? e : new Le(e, t);
}
function Vn(e, t, n) {
  return rt(e, t);
}
function Yl(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Vn(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? Vn(r, t) : r) : is(e) ? {
    ...e,
    from: e.from ? rt(e.from, t) : e.from,
    to: e.to ? rt(e.to, t) : e.to
  } : Ba(e) ? {
    before: Vn(e.before, t),
    after: Vn(e.after, t)
  } : Ha(e) ? {
    after: Vn(e.after, t)
  } : Va(e) ? {
    before: Vn(e.before, t)
  } : e;
}
function Hs(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Yl(r, t)) : Yl(e, t));
}
function K2(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = rt(t.today, n)), t.month && (t.month = rt(t.month, n)), t.defaultMonth && (t.defaultMonth = rt(t.defaultMonth, n)), t.startMonth && (t.startMonth = rt(t.startMonth, n)), t.endMonth && (t.endMonth = rt(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = rt(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((ne) => rt(ne, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? rt(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? rt(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Hs(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Hs(t.hidden, n)), t.modifiers)) {
    const ne = {};
    Object.keys(t.modifiers).forEach((fe) => {
      ne[fe] = Hs(t.modifiers?.[fe], n);
    }), t.modifiers = ne;
  }
  const { components: r, formatters: o, labels: s, dateLib: i, locale: a, classNames: l } = go(() => {
    const ne = { ...Bm, ...t.locale }, fe = t.broadcastCalendar ? 1 : t.weekStartsOn, Z = t.noonSafe && t.timeZone ? E2(t.timeZone, {
      weekStartsOn: fe,
      locale: ne
    }) : void 0, de = t.dateLib && Z ? { ...Z, ...t.dateLib } : t.dateLib ?? Z, Ue = new tt({
      locale: ne,
      weekStartsOn: fe,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, de);
    return {
      dateLib: Ue,
      components: r2(t.components),
      formatters: p2(t.formatters),
      labels: y2(t.labels, Ue.options),
      locale: ne,
      classNames: { ...s2(), ...t.classNames }
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
  const { captionLayout: u, mode: m, navLayout: d, numberOfMonths: p = 1, onDayBlur: h, onDayClick: g, onDayFocus: v, onDayKeyDown: b, onDayMouseEnter: w, onDayMouseLeave: x, onNextClick: y, onPrevClick: C, showWeekNumber: P, styles: S } = t, { formatCaption: E, formatDay: N, formatMonthDropdown: R, formatWeekNumber: T, formatWeekNumberHeader: _, formatWeekdayName: D, formatYearDropdown: L } = o, F = F2(t, i), { days: z, months: A, navStart: W, navEnd: M, previousMonth: $, nextMonth: O, goToMonth: B } = F, J = t2(z, t, W, M, i), { isSelected: oe, select: ye, selected: ee } = G2(t, i) ?? {}, { blur: H, focused: j, isFocusTarget: se, moveFocus: K, setFocused: te } = z2(t, F, J, oe ?? (() => !1), i), { labelDayButton: ie, labelGridcell: ce, labelGrid: pe, labelMonthDropdown: we, labelNav: be, labelPrevious: yr, labelNext: wr, labelWeekday: bb, labelWeekNumber: yb, labelWeekNumberHeader: wb, labelYearDropdown: xb } = s, Cb = go(() => C2(i, t.ISOWeek, t.broadcastCalendar, t.today), [i, t.ISOWeek, t.broadcastCalendar, t.today]), Rc = m !== void 0 || g !== void 0, Ss = Ye(() => {
    $ && (B($), C?.($));
  }, [$, B, C]), Es = Ye(() => {
    O && (B(O), y?.(O));
  }, [B, O, y]), Sb = Ye((ne, fe) => (Z) => {
    Z.preventDefault(), Z.stopPropagation(), te(ne), !fe.disabled && (ye?.(ne.date, fe, Z), g?.(ne.date, fe, Z));
  }, [ye, g, te]), Eb = Ye((ne, fe) => (Z) => {
    te(ne), v?.(ne.date, fe, Z);
  }, [v, te]), Pb = Ye((ne, fe) => (Z) => {
    H(), h?.(ne.date, fe, Z);
  }, [H, h]), Nb = Ye((ne, fe) => (Z) => {
    const de = {
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
    if (de[Z.key]) {
      Z.preventDefault(), Z.stopPropagation();
      const [Ue, le] = de[Z.key];
      K(Ue, le);
    }
    b?.(ne.date, fe, Z);
  }, [K, b, t.dir]), Ob = Ye((ne, fe) => (Z) => {
    w?.(ne.date, fe, Z);
  }, [w]), Rb = Ye((ne, fe) => (Z) => {
    x?.(ne.date, fe, Z);
  }, [x]), kb = Ye((ne) => (fe) => {
    const Z = Number(fe.target.value), de = i.setMonth(i.startOfMonth(ne), Z);
    B(de);
  }, [i, B]), Db = Ye((ne) => (fe) => {
    const Z = Number(fe.target.value), de = i.setYear(i.startOfMonth(ne), Z);
    B(de);
  }, [i, B]), { className: Mb, style: Tb } = go(() => ({
    className: [l[G.Root], t.className].filter(Boolean).join(" "),
    style: { ...S?.[G.Root], ...t.style }
  }), [l, t.className, t.style, S]), Ab = o2(t), kc = nn(null);
  R2(kc, !!t.animate, {
    classNames: l,
    months: A,
    focused: j,
    dateLib: i
  });
  const Ib = {
    dayPickerProps: t,
    selected: ee,
    select: ye,
    isSelected: oe,
    months: A,
    nextMonth: O,
    previousMonth: $,
    goToMonth: B,
    getModifiers: J,
    components: r,
    classNames: l,
    styles: S,
    labels: s,
    formatters: o
  };
  return V.createElement(
    Vm.Provider,
    { value: Ib },
    V.createElement(
      r.Root,
      { rootRef: t.animate ? kc : void 0, className: Mb, style: Tb, dir: t.dir, id: t.id, lang: t.lang ?? a.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Ab },
      V.createElement(
        r.Months,
        { className: l[G.Months], style: S?.[G.Months] },
        !t.hideNavigation && !d && V.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[G.Nav], style: S?.[G.Nav], "aria-label": be(), onPreviousClick: Ss, onNextClick: Es, previousMonth: $, nextMonth: O }),
        A.map((ne, fe) => V.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: l[G.Month],
            style: S?.[G.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: fe,
            displayIndex: fe,
            calendarMonth: ne
          },
          d === "around" && !t.hideNavigation && fe === 0 && V.createElement(
            r.PreviousMonthButton,
            { type: "button", className: l[G.PreviousMonthButton], tabIndex: $ ? void 0 : -1, "aria-disabled": $ ? void 0 : !0, "aria-label": yr($), onClick: Ss, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(r.Chevron, { disabled: $ ? void 0 : !0, className: l[G.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          V.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: l[G.MonthCaption], style: S?.[G.MonthCaption], calendarMonth: ne, displayIndex: fe }, u?.startsWith("dropdown") ? V.createElement(
            r.DropdownNav,
            { className: l[G.Dropdowns], style: S?.[G.Dropdowns] },
            (() => {
              const Z = u === "dropdown" || u === "dropdown-months" ? V.createElement(r.MonthsDropdown, { key: "month", className: l[G.MonthsDropdown], "aria-label": we(), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: kb(ne.date), options: w2(ne.date, W, M, o, i), style: S?.[G.Dropdown], value: i.getMonth(ne.date) }) : V.createElement("span", { key: "month" }, R(ne.date, i)), de = u === "dropdown" || u === "dropdown-years" ? V.createElement(r.YearsDropdown, { key: "year", className: l[G.YearsDropdown], "aria-label": xb(i.options), classNames: l, components: r, disabled: !!t.disableNavigation, onChange: Db(ne.date), options: S2(W, M, o, i, !!t.reverseYears), style: S?.[G.Dropdown], value: i.getYear(ne.date) }) : V.createElement("span", { key: "year" }, L(ne.date, i));
              return i.getMonthYearOrder() === "year-first" ? [de, Z] : [Z, de];
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
            } }, E(ne.date, i.options, i))
          ) : V.createElement(r.CaptionLabel, { className: l[G.CaptionLabel], role: "status", "aria-live": "polite" }, E(ne.date, i.options, i))),
          d === "around" && !t.hideNavigation && fe === p - 1 && V.createElement(
            r.NextMonthButton,
            { type: "button", className: l[G.NextMonthButton], tabIndex: O ? void 0 : -1, "aria-disabled": O ? void 0 : !0, "aria-label": wr(O), onClick: Es, "data-animated-button": t.animate ? "true" : void 0 },
            V.createElement(r.Chevron, { disabled: O ? void 0 : !0, className: l[G.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          fe === p - 1 && d === "after" && !t.hideNavigation && V.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: l[G.Nav], style: S?.[G.Nav], "aria-label": be(), onPreviousClick: Ss, onNextClick: Es, previousMonth: $, nextMonth: O }),
          V.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": m === "multiple" || m === "range", "aria-label": pe(ne.date, i.options, i) || void 0, className: l[G.MonthGrid], style: S?.[G.MonthGrid] },
            !t.hideWeekdays && V.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: l[G.Weekdays], style: S?.[G.Weekdays] },
              P && V.createElement(r.WeekNumberHeader, { "aria-label": wb(i.options), className: l[G.WeekNumberHeader], style: S?.[G.WeekNumberHeader], scope: "col" }, _()),
              Cb.map((Z) => V.createElement(r.Weekday, { "aria-label": bb(Z, i.options, i), className: l[G.Weekday], key: String(Z), style: S?.[G.Weekday], scope: "col" }, D(Z, i.options, i)))
            ),
            V.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: l[G.Weeks], style: S?.[G.Weeks] }, ne.weeks.map((Z) => V.createElement(
              r.Week,
              { className: l[G.Week], key: Z.weekNumber, style: S?.[G.Week], week: Z },
              P && V.createElement(r.WeekNumber, { week: Z, style: S?.[G.WeekNumber], "aria-label": yb(Z.weekNumber, {
                locale: a
              }), className: l[G.WeekNumber], scope: "row", role: "rowheader" }, T(Z.weekNumber, i)),
              Z.days.map((de) => {
                const { date: Ue } = de, le = J(de);
                if (le[xe.focused] = !le.hidden && !!j?.isEqualTo(de), le[pt.selected] = oe?.(Ue) || le.selected, is(ee)) {
                  const { from: Ps, to: Ns } = ee;
                  le[pt.range_start] = !!(Ps && Ns && i.isSameDay(Ue, Ps)), le[pt.range_end] = !!(Ps && Ns && i.isSameDay(Ue, Ns)), le[pt.range_middle] = Wt(ee, Ue, !0, i);
                }
                const _b = x2(le, S, t.modifiersStyles), $b = n2(le, l, t.modifiersClassNames), Fb = !Rc && !le.hidden ? ce(Ue, le, i.options, i) : void 0;
                return V.createElement(r.Day, { key: `${de.isoDate}_${de.displayMonthId}`, day: de, modifiers: le, className: $b.join(" "), style: _b, role: "gridcell", "aria-selected": le.selected || void 0, "aria-label": Fb, "data-day": de.isoDate, "data-month": de.outside ? de.dateMonthId : void 0, "data-selected": le.selected || void 0, "data-disabled": le.disabled || void 0, "data-hidden": le.hidden || void 0, "data-outside": de.outside || void 0, "data-focused": le.focused || void 0, "data-today": le.today || void 0 }, !le.hidden && Rc ? V.createElement(r.DayButton, { className: l[G.DayButton], style: S?.[G.DayButton], type: "button", day: de, modifiers: le, disabled: !le.focused && le.disabled || void 0, "aria-disabled": le.focused && le.disabled || void 0, tabIndex: se(de) ? 0 : -1, "aria-label": ie(Ue, le, i.options, i), onClick: Sb(de, le), onBlur: Pb(de, le), onFocus: Eb(de, le), onKeyDown: Nb(de, le), onMouseEnter: Ob(de, le), onMouseLeave: Rb(de, le) }, N(Ue, i.options, i)) : !le.hidden && N(de.date, i.options, i));
              })
            )))
          )
        ))
      ),
      t.footer && V.createElement(r.Footer, { className: l[G.Footer], style: S?.[G.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function Ya({ className: e, classNames: t, ...n }) {
  return /* @__PURE__ */ f(
    K2,
    {
      locale: PP,
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
        selected: "bg-databeez-primary text-white hover:bg-databeez-primary hover:text-white focus:bg-databeez-primary focus:text-white rounded-md",
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
Ya.displayName = "Calendar";
function q2({
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
  return /* @__PURE__ */ k("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ f("label", { htmlFor: u, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ k(Hr, { children: [
      /* @__PURE__ */ f(Vr, { asChild: !0, children: /* @__PURE__ */ k(
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
            /* @__PURE__ */ f(Ad, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ f("span", { className: "truncate", children: e ? Lt(e, l) : n })
          ]
        }
      ) }),
      /* @__PURE__ */ f(dr, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ f(
        Ya,
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
q2.displayName = "DatePicker";
function X2({
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
  const m = c.useId(), d = c.useMemo(() => e?.from ? e.to ? `${Lt(e.from, l)} — ${Lt(e.to, l)}` : Lt(e.from, l) : null, [e, l]);
  return /* @__PURE__ */ k("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ f("label", { htmlFor: m, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ k(Hr, { children: [
      /* @__PURE__ */ f(Vr, { asChild: !0, children: /* @__PURE__ */ k(
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
            /* @__PURE__ */ f(Ad, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ f("span", { className: "truncate", children: d ?? n })
          ]
        }
      ) }),
      /* @__PURE__ */ f(dr, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ f(
        Ya,
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
X2.displayName = "DateRangePicker";
var Z2 = Object.defineProperty, fr = (e, t) => Z2(e, "name", { value: t, configurable: !0 }), op = !!(typeof window < "u" && window.document && window.document.createElement);
function Ar(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ fr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
fr(Ar, "composeEventHandlers");
function Q2(e) {
  if (!op)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
fr(Q2, "getOwnerWindow");
function ui(e) {
  if (!op)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
fr(ui, "getOwnerDocument");
function sp(e, t = !1) {
  const { activeElement: n } = ui(e);
  if (!n?.nodeName)
    return null;
  if (ip(n) && n.contentDocument)
    return sp(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = ui(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
fr(sp, "getActiveElement");
function ip(e) {
  return e.tagName === "IFRAME";
}
fr(ip, "isFrame");
var J2 = Object.defineProperty, Ga = (e, t) => J2(e, "name", { value: t, configurable: !0 });
function di(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Ga(di, "setRef");
function ap(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = di(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : di(e[o], null);
        }
      };
  };
}
Ga(ap, "composeRefs");
function cp(...e) {
  return c.useCallback(ap(...e), e);
}
Ga(cp, "useComposedRefs");
var eN = Object.defineProperty, it = (e, t) => eN(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function tN(e, t) {
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
it(tN, "createContext");
// @__NO_SIDE_EFFECTS__
function lp(e, t = []) {
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
  return o.scopeName = e, [r, up(o, ...t)];
}
it(lp, "createContextScope");
function up(...e) {
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
it(up, "composeContextScopes");
var Ka = globalThis?.document ? c.useLayoutEffect : () => {
}, nN = Object.defineProperty, rN = (e, t) => nN(e, "name", { value: t, configurable: !0 }), Gl = c[" useEffectEvent ".trim().toString()], Kl = c[" useInsertionEffect ".trim().toString()];
function dp(e) {
  if (typeof Gl == "function")
    return Gl(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Kl == "function" ? Kl(() => {
    t.current = e;
  }) : Ka(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
rN(dp, "useEffectEvent");
var oN = Object.defineProperty, Gr = (e, t) => oN(e, "name", { value: t, configurable: !0 }), sN = c[" useInsertionEffect ".trim().toString()] || Ka;
function fp({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Gr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = mp({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = pp(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
Gr(fp, "useControllableState");
function mp({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return sN(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
Gr(mp, "useUncontrolledState");
function pp(e) {
  return typeof e == "function";
}
Gr(pp, "isFunction");
var ql = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function iN(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = dp(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === ql)
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
    l && !Object.is(o, d.state) && p({ type: ql, state: o });
  }, [o, d.state, l]), [v, p];
}
Gr(iN, "useControllableStateReducer");
var aN = Object.defineProperty, cN = (e, t) => aN(e, "name", { value: t, configurable: !0 }), lN = [
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
], uN = lN.reduce((e, t) => {
  const n = /* @__PURE__ */ Ne(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function dN(e, t) {
  e && je.flushSync(() => e.dispatchEvent(t));
}
cN(dN, "dispatchDiscreteCustomEvent");
var fN = Object.defineProperty, mr = (e, t) => fN(e, "name", { value: t, configurable: !0 }), hp = !!(typeof window < "u" && window.document && window.document.createElement);
function Ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ mr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
mr(Ce, "composeEventHandlers");
function mN(e) {
  if (!hp)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
mr(mN, "getOwnerWindow");
function fi(e) {
  if (!hp)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
mr(fi, "getOwnerDocument");
function gp(e, t = !1) {
  const { activeElement: n } = fi(e);
  if (!n?.nodeName)
    return null;
  if (vp(n) && n.contentDocument)
    return gp(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = fi(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
mr(gp, "getActiveElement");
function vp(e) {
  return e.tagName === "IFRAME";
}
mr(vp, "isFrame");
var pN = Object.defineProperty, at = (e, t) => pN(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function hN(e, t) {
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
at(hN, "createContext");
// @__NO_SIDE_EFFECTS__
function pr(e, t = []) {
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
  return o.scopeName = e, [r, bp(o, ...t)];
}
at(pr, "createContextScope");
function bp(...e) {
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
at(bp, "composeContextScopes");
var gN = Object.defineProperty, qa = (e, t) => gN(e, "name", { value: t, configurable: !0 });
function mi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
qa(mi, "setRef");
function yp(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = mi(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : mi(e[o], null);
        }
      };
  };
}
qa(yp, "composeRefs");
function Be(...e) {
  return c.useCallback(yp(...e), e);
}
qa(Be, "useComposedRefs");
var et = globalThis?.document ? c.useLayoutEffect : () => {
}, vN = Object.defineProperty, Te = (e, t) => vN(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Xa(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ pr(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ Te((v) => {
    const { scope: b, children: w } = v, x = c.useRef(null), y = c.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: y, collectionRef: x, children: w });
  }, "CollectionProvider");
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Ne(a), u = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x } = v, y = s(a, w), C = Be(b, y.collectionRef);
      return /* @__PURE__ */ f(l, { ref: C, children: x });
    }
  );
  u.displayName = a;
  const m = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Ne(m), h = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x, ...y } = v, C = c.useRef(null), P = Be(b, C), S = s(m, w);
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
Te(Xa, "createCollection");
var Xl = /* @__PURE__ */ new WeakMap(), Ee, qe, mo = (qe = class extends Map {
  constructor(n) {
    super(n);
    no(this, Ee);
    yn(this, Ee, [...super.keys()]), Xl.set(this, !0);
  }
  set(n, r) {
    return Xl.get(this) && !this.has(n) && q(this, Ee).push(n), super.set(n, r), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(n, r, o) {
    const s = this.has(r), i = s ? this.size : this.size + 1, a = Za(n), l = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
    if (s ? q(this, Ee).indexOf(r) === l : l === this.size)
      return this.set(r, o), this;
    const u = q(this, Ee).filter((d) => d !== r);
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
    const s = new qe(this);
    return s.insert(n, r, o), s;
  }
  before(n) {
    const r = q(this, Ee).indexOf(n) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, r, o) {
    const s = q(this, Ee).indexOf(n);
    if (s === -1)
      return this;
    const i = q(this, Ee).indexOf(r), a = i !== -1 && i < s ? s - 1 : s;
    return this.insert(a, r, o);
  }
  after(n) {
    let r = q(this, Ee).indexOf(n);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, r, o) {
    const s = q(this, Ee).indexOf(n);
    if (s === -1)
      return this;
    const i = q(this, Ee).indexOf(r), a = i !== -1 && i <= s ? s : s + 1;
    return this.insert(a, r, o);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return yn(this, Ee, []), super.clear();
  }
  delete(n) {
    const r = super.delete(n);
    return r && q(this, Ee).splice(q(this, Ee).indexOf(n), 1), r;
  }
  deleteAt(n) {
    const r = this.keyAt(n);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(n) {
    const r = Co(q(this, Ee), n);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(n) {
    const r = Co(q(this, Ee), n);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(n) {
    return q(this, Ee).indexOf(n);
  }
  keyAt(n) {
    return Co(q(this, Ee), n);
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
    return new qe(o);
  }
  map(n, r) {
    const o = [];
    let s = 0;
    for (const i of this)
      o.push([i[0], Reflect.apply(n, r, [i, s, this])]), s++;
    return new qe(o);
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
    return new qe(r);
  }
  toReversed() {
    const n = new qe();
    for (let r = this.size - 1; r >= 0; r--) {
      const o = this.keyAt(r), s = this.get(o);
      n.set(o, s);
    }
    return n;
  }
  toSpliced(...n) {
    const r = [...this.entries()];
    return r.splice(...n), new qe(r);
  }
  slice(n, r) {
    const o = new qe();
    for (const s of q(this, Ee).slice(n, r))
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
}, Ee = new WeakMap(), Te(qe, "OrderedDict"), qe);
function Co(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = wp(e, t);
  return n === -1 ? void 0 : e[n];
}
Te(Co, "at");
function wp(e, t) {
  const n = e.length, r = Za(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
Te(wp, "toSafeIndex");
function Za(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Te(Za, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function bN(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ pr(t), [o, s] = n(t);
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
    const { scope: E, children: N, state: R } = S, T = c.useRef(null), [_, D] = c.useState(
      null
    ), L = Be(T, D), [F, z] = R, A = c.useRef(
      new mo()
    ), W = c.useCallback(() => {
      const M = A.current;
      return Sp(M) || M.sort(So), M;
    }, []);
    return c.useEffect(() => {
      if (!_)
        return;
      const M = Ep(() => {
        z(($) => {
          const O = $.toSorted(So);
          return O.some(([J], oe) => $.keyAt(oe) !== J) ? O : $;
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
        collectionElementRefObject: T,
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
  const d = e + "CollectionSlot", p = /* @__PURE__ */ Ne(d), h = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R } = S, T = s(d, N), _ = Be(E, T.collectionElementRef);
      return /* @__PURE__ */ f(p, { ref: _, children: R });
    }
  );
  h.displayName = d;
  const g = e + "CollectionItemSlot", v = "data-radix-collection-item", b = /* @__PURE__ */ Ne(g), w = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R, ...T } = S, _ = c.useRef(null), D = s(g, N), { setCollection: L, registryRef: F } = D, z = c.useRef(T);
      xp(z.current, T) || (z.current = T);
      const A = z.current, W = c.useCallback(
        (O) => {
          const B = F.current;
          O ? B.set(O, {
            ...z.current,
            element: O
          }) : _.current && B.delete(_.current);
        },
        [F]
      ), M = Be(E, W, _);
      et(() => {
        const O = _.current, B = F.current;
        O && B.has(O) && B.set(O, { ...A, element: O });
      }, [A, F]);
      const $ = c.useRef(null);
      return c.useEffect(() => {
        const O = _.current, B = $.current;
        (B?.element ?? null) === O && (!O || B?.itemData === A) || ($.current = O ? { element: O, itemData: A } : null, L((J) => {
          const oe = new mo(J);
          return B && B.element !== O && oe.delete(B.element), O && oe.set(O, { ...A, element: O }), oe.sort(So);
        }));
      }), c.useEffect(() => () => {
        const O = $.current;
        $.current = null, O && L((B) => {
          if (!B.has(O.element))
            return B;
          const J = new mo(B);
          return J.delete(O.element), J;
        });
      }, [L]), /* @__PURE__ */ f(b, { [v]: "", ref: M, children: R });
    }
  );
  w.displayName = g;
  function x() {
    return c.useState(new mo());
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
Te(bN, "createCollection");
function xp(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
Te(xp, "shallowEqual");
function Cp(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Te(Cp, "isElementPreceding");
function Sp(e) {
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
Te(Sp, "isInDocumentOrder");
function So(e, t) {
  return !e[1].element || !t[1].element ? 0 : Cp(e[1].element, t[1].element) ? -1 : 1;
}
Te(So, "sortByDocumentPosition");
function Ep(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
Te(Ep, "getChildListObserver");
var yN = Object.defineProperty, wN = (e, t) => yN(e, "name", { value: t, configurable: !0 }), xN = {
  LTR: "ltr"
}, CN = c.createContext(void 0);
function Qa(e) {
  const t = c.useContext(CN);
  return e || t || xN.LTR;
}
wN(Qa, "useDirection");
var SN = Object.defineProperty, EN = (e, t) => SN(e, "name", { value: t, configurable: !0 }), PN = [
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
], wt = PN.reduce((e, t) => {
  const n = /* @__PURE__ */ Ne(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ja(e, t) {
  e && je.flushSync(() => e.dispatchEvent(t));
}
EN(Ja, "dispatchDiscreteCustomEvent");
var NN = Object.defineProperty, ON = (e, t) => NN(e, "name", { value: t, configurable: !0 }), Zl = c[" useInsertionEffect ".trim().toString()];
function Ut(e) {
  const t = c.useRef(e);
  return typeof Zl == "function" ? Zl(() => {
    t.current = e;
  }) : et(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
ON(Ut, "useCallbackRef");
var RN = Object.defineProperty, _e = (e, t) => RN(e, "name", { value: t, configurable: !0 }), pi = "dismissableLayer.update", kN = "dismissableLayer.pointerDownOutside", DN = "dismissableLayer.focusOutside", Ql, Pp = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), MN = /* @__PURE__ */ c.forwardRef(
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
    } = t, d = c.useContext(Pp), [p, h] = c.useState(null), g = p?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), b = Be(n, h), w = Array.from(d.layers), [x] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), y = x ? w.indexOf(x) : -1, C = p ? w.indexOf(p) : -1, P = d.layersWithOutsidePointerEventsDisabled.size > 0, S = C >= y, E = c.useRef(!1), N = Np(
      (D) => {
        i?.(D), l?.(D), D.defaultPrevented || u?.();
      },
      {
        ownerDocument: g,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: E,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: c.useCallback(
          (D) => {
            if (!(D instanceof Node))
              return !1;
            const L = [...d.branches].some(
              (F) => F.contains(D)
            );
            return S && !L;
          },
          [d.branches, S]
        )
      }
    ), R = Op((D) => {
      if (o && E.current)
        return;
      const L = D.target;
      [...d.branches].some((z) => z.contains(L)) || (a?.(D), l?.(D), D.defaultPrevented || u?.());
    }, g), T = p ? C === w.length - 1 : !1, _ = Ut((D) => {
      D.key === "Escape" && (s?.(D), !D.defaultPrevented && u && (D.preventDefault(), u()));
    });
    return c.useEffect(() => {
      if (T)
        return g.addEventListener("keydown", _, { capture: !0 }), () => g.removeEventListener("keydown", _, { capture: !0 });
    }, [g, T, _]), c.useEffect(() => {
      if (p)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Ql = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), hi(), () => {
          r && (d.layersWithOutsidePointerEventsDisabled.delete(p), d.layersWithOutsidePointerEventsDisabled.size === 0 && (g.body.style.pointerEvents = Ql));
        };
    }, [p, g, r, d]), c.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), hi());
    }, [p, d]), c.useEffect(() => {
      const D = /* @__PURE__ */ _e(() => v({}), "handleUpdate");
      return document.addEventListener(pi, D), () => document.removeEventListener(pi, D);
    }, []), /* @__PURE__ */ f(
      wt.div,
      {
        ...m,
        ref: b,
        style: {
          pointerEvents: P ? S ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: Ce(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: Ce(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: Ce(
          t.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function TN() {
  const e = c.useContext(Pp), [t, n] = c.useState(null);
  return c.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
_e(TN, "useDismissableLayerSurface");
var AN = /* @__PURE__ */ _e(() => !0, "IS_TRUE");
function Np(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = AN
  } = t, a = Ut(e), l = c.useRef(!1), u = c.useRef(!1), m = c.useRef(/* @__PURE__ */ new Map()), d = c.useRef(() => {
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
          p(), S || ec(
            kN,
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
_e(Np, "usePointerDownOutside");
function Op(e, t = globalThis?.document) {
  const n = Ut(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = /* @__PURE__ */ _e((s) => {
      s.target && !r.current && ec(DN, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ _e(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ _e(() => r.current = !1, "onBlurCapture")
  };
}
_e(Op, "useFocusOutside");
function hi() {
  const e = new CustomEvent(pi);
  document.dispatchEvent(e);
}
_e(hi, "dispatchUpdate");
function ec(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ja(o, s) : o.dispatchEvent(s);
}
_e(ec, "handleAndDispatchCustomEvent");
var IN = Object.defineProperty, tc = (e, t) => IN(e, "name", { value: t, configurable: !0 }), po = 0, jn = null;
function _N(e) {
  return nc(), e.children;
}
tc(_N, "FocusGuards");
function nc() {
  c.useEffect(() => {
    jn || (jn = { start: gi(), end: gi() });
    const { start: e, end: t } = jn;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), po++, () => {
      po === 1 && (jn?.start.remove(), jn?.end.remove(), jn = null), po = Math.max(0, po - 1);
    };
  }, []);
}
tc(nc, "useFocusGuards");
function gi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
tc(gi, "createFocusGuard");
var $N = Object.defineProperty, Oe = (e, t) => $N(e, "name", { value: t, configurable: !0 }), Vs = "focusScope.autoFocusOnMount", js = "focusScope.autoFocusOnUnmount", Jl = { bubbles: !1, cancelable: !0 }, FN = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Oe(function(t, n) {
    const {
      loop: r = !1,
      trapped: o = !1,
      branches: s,
      onMountAutoFocus: i,
      onUnmountAutoFocus: a,
      ...l
    } = t, [u, m] = c.useState(null), d = Ut(i), p = Ut(a), h = c.useRef(null), g = Be(n, m), v = c.useRef(s);
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
          b(N) ? h.current = N : Ft(h.current, { select: !0 });
        }, C = function(E) {
          if (w.paused || !u) return;
          const N = E.relatedTarget;
          N !== null && (b(N) || Ft(h.current, { select: !0 }));
        }, P = function(E) {
          if (document.activeElement === document.body)
            for (const R of E)
              R.removedNodes.length > 0 && Ft(u);
        };
        Oe(y, "handleFocusIn"), Oe(C, "handleFocusOut"), Oe(P, "handleMutations"), document.addEventListener("focusin", y), document.addEventListener("focusout", C);
        const S = new MutationObserver(P);
        return u && S.observe(u, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", y), document.removeEventListener("focusout", C), S.disconnect();
        };
      }
    }, [o, u, w.paused, b]), c.useEffect(() => {
      if (u) {
        eu.add(w);
        const y = document.activeElement;
        if (!u.contains(y)) {
          const P = new CustomEvent(Vs, Jl);
          u.addEventListener(Vs, d), u.dispatchEvent(P), P.defaultPrevented || (Tp(Fp(rc(u)), { select: !0 }), document.activeElement === y && Ft(u));
        }
        return () => {
          u.removeEventListener(Vs, d);
          const P = u.ownerDocument, S = CustomEvent;
          setTimeout(() => {
            const E = new S(js, Jl);
            u.addEventListener(js, p), u.dispatchEvent(E), E.defaultPrevented || Ft(y ?? P.body, { select: !0 }), u.removeEventListener(js, p), eu.remove(w);
          }, 0);
        };
      }
    }, [u, d, p, w]);
    const x = c.useCallback(
      (y) => {
        if (!r && !o || w.paused) return;
        const C = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, P = document.activeElement;
        if (C && P) {
          const S = y.currentTarget, [E, N] = Ap(S);
          E && N ? !y.shiftKey && P === N ? (y.preventDefault(), r && Ft(E, { select: !0 })) : y.shiftKey && P === E && (y.preventDefault(), r && Ft(N, { select: !0 })) : P === S && y.preventDefault();
        }
      },
      [r, o, w.paused]
    );
    return /* @__PURE__ */ f(wt.div, { tabIndex: -1, ...l, ref: g, onKeyDown: x });
  }, "FocusScope")
), Rp = c.createContext(null);
function kp({ registry: e, children: t }) {
  return e ? /* @__PURE__ */ f(Rp.Provider, { value: e, children: t }) : t;
}
Oe(kp, "FocusScopeBranchProvider");
function Dp() {
  const [e, t] = c.useState([]), n = c.useMemo(
    () => ({
      add: /* @__PURE__ */ Oe((r) => t((o) => o.includes(r) ? o : [...o, r]), "add"),
      remove: /* @__PURE__ */ Oe((r) => t((o) => o.filter((s) => s !== r)), "remove")
    }),
    []
  );
  return { nodes: e, registry: n };
}
Oe(Dp, "useFocusScopeBranchRegistry");
function Mp(e) {
  const t = c.useContext(Rp);
  c.useEffect(() => {
    if (!(!e || !t))
      return t.add(e), () => t.remove(e);
  }, [e, t]);
}
Oe(Mp, "useFocusScopeBranch");
function Tp(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ft(r, { select: t }), document.activeElement !== n) return;
}
Oe(Tp, "focusFirst");
function Ap(e) {
  const t = rc(e), n = vi(t, e), r = vi(t.reverse(), e);
  return [n, r];
}
Oe(Ap, "getTabbableEdges");
function rc(e) {
  const t = [], r = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ Oe((o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
Oe(rc, "getTabbableCandidates");
function vi(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Ip(r, { upTo: t })))
      return r;
}
Oe(vi, "findVisible");
function Ip(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
Oe(Ip, "isHidden");
function _p(e) {
  return e.tagName === "INPUT" && typeof e.select == "function";
}
Oe(_p, "isSelectableInput");
function Ft(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = (e.ownerDocument ?? document).activeElement;
    e.focus({ preventScroll: !0 }), e !== r && _p(e) && t && e.select();
  }
}
Oe(Ft, "focus");
var eu = $p();
function $p() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = bi(e, t), e.unshift(t);
    },
    remove(t) {
      e = bi(e, t), e[0]?.resume();
    }
  };
}
Oe($p, "createFocusScopesStack");
function bi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
Oe(bi, "arrayRemove");
function Fp(e) {
  return e.filter((t) => t.tagName !== "A");
}
Oe(Fp, "removeLinks");
var LN = Object.defineProperty, WN = (e, t) => LN(e, "name", { value: t, configurable: !0 }), zN = c[" useId ".trim().toString()] || (() => {
}), BN = 0;
function Lp(e) {
  const [t, n] = c.useState(zN());
  return et(() => {
    e || n((r) => r ?? String(BN++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
WN(Lp, "useId");
var HN = Object.defineProperty, VN = (e, t) => HN(e, "name", { value: t, configurable: !0 });
function Wp(e) {
  const [t, n] = c.useState(void 0);
  return et(() => {
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
VN(Wp, "useSize");
var jN = Object.defineProperty, rn = (e, t) => jN(e, "name", { value: t, configurable: !0 }), tu = {
  Partial: "partial"
}, nu = {
  Optimized: "optimized",
  Always: "always"
}, zp = "Popper", [Bp, Hp] = /* @__PURE__ */ pr(zp), [UN, Vp] = Bp(zp), YN = /* @__PURE__ */ rn((e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null), [s, i] = c.useState(void 0);
  return /* @__PURE__ */ f(
    UN,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
}, "Popper"), GN = "PopperAnchor", KN = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ rn(function(t, n) {
    const { __scopePopper: r, virtualRef: o, ...s } = t, i = Vp(GN, r), a = c.useRef(null), l = i.onAnchorChange, u = c.useCallback(
      (v) => {
        a.current = v, v && l(v);
      },
      [l]
    ), m = Be(n, u), d = c.useRef(null);
    c.useEffect(() => {
      if (!o)
        return;
      const v = d.current;
      d.current = o.current, v !== d.current && l(d.current);
    });
    const p = i.placementState && cs(i.placementState), h = p?.[0], g = p?.[1];
    return o ? null : /* @__PURE__ */ f(
      wt.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": g,
        ...s,
        ref: m
      }
    );
  }, "PopperAnchor")
), jp = "PopperContent", [qN, OA] = Bp(jp), XN = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ rn(function(t, n) {
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
      sticky: p = tu.Partial,
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = nu.Optimized,
      onPlaced: v,
      ...b
    } = t, w = Vp(jp, r), [x, y] = c.useState(null), C = Be(n, y), [P, S] = c.useState(null), E = Wp(P), N = E?.width ?? 0, R = E?.height ?? 0, T = o + (i !== "center" ? "-" + i : ""), _ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, D = Array.isArray(m) ? m : [m], L = D.length > 0, F = {
      padding: _,
      boundary: D.filter(Up),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: z, floatingStyles: A, placement: W, isPositioned: M, middlewareData: $ } = Ca({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: /* @__PURE__ */ rn((...K) => xa(...K, {
        animationFrame: g === nu.Always
      }), "whileElementsMounted"),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Sa({ mainAxis: s + R, alignmentAxis: a }),
        u && Ea({
          mainAxis: !0,
          crossAxis: !1,
          // Spread rather than passing `limiter: undefined`, which
          // `exactOptionalPropertyTypes` rejects for Floating UI's optional option.
          ...p === tu.Partial ? { limiter: Pa() } : {},
          ...F
        }),
        u && Na({ ...F }),
        Oa({
          ...F,
          apply: /* @__PURE__ */ rn(({ elements: K, rects: te, availableWidth: ie, availableHeight: ce }) => {
            const { width: pe, height: we } = te.reference, be = K.floating.style;
            be.setProperty("--radix-popper-available-width", `${ie}px`), be.setProperty("--radix-popper-available-height", `${ce}px`), be.setProperty("--radix-popper-anchor-width", `${pe}px`), be.setProperty("--radix-popper-anchor-height", `${we}px`);
          }, "apply")
        }),
        P && ka({ element: P, padding: l }),
        ZN({ arrowWidth: N, arrowHeight: R }),
        h && // `hide` detects whether the anchor (reference) is clipped, so when
        // no explicit `collisionBoundary` is set we omit `boundary` entirely
        // and fall back to Floating UI's default clipping ancestors (e.g. a
        // scrollable menu). This lets an occluded submenu hide once its anchor
        // scrolls out of view (#3237). The collision/size middlewares
        // deliberately keep the viewport-based default to avoid clamping
        // content rendered inside transformed or overflow-clipping portal
        // containers. The key is omitted rather than set to `undefined`
        // because `exactOptionalPropertyTypes` rejects the explicit value.
        Ra(
          L ? { strategy: "referenceHidden", ...F } : {
            strategy: "referenceHidden",
            padding: F.padding,
            altBoundary: F.altBoundary
          }
        )
      ]
    }), O = w.setPlacementState;
    et(() => (O(W), () => {
      O(void 0);
    }), [W, O]);
    const [B, J] = cs(W), oe = Ut(v);
    et(() => {
      M && oe?.();
    }, [M, oe]);
    const ye = $.arrow?.x, ee = $.arrow?.y, H = $.arrow?.centerOffset !== 0, [j, se] = c.useState();
    return et(() => {
      x && se(window.getComputedStyle(x).zIndex);
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
          qN,
          {
            scope: r,
            placedSide: B,
            placedAlign: J,
            onArrowChange: S,
            arrowX: ye,
            arrowY: ee,
            shouldHideArrow: H,
            children: /* @__PURE__ */ f(
              wt.div,
              {
                "data-side": B,
                "data-align": J,
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
function Up(e) {
  return e !== null;
}
rn(Up, "isNotNull");
var ZN = /* @__PURE__ */ rn((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, m] = cs(n), d = { start: "0%", center: "50%", end: "100%" }[m], p = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let g = "", v = "";
    return u === "bottom" ? (g = i ? d : `${p}px`, v = `${-l}px`) : u === "top" ? (g = i ? d : `${p}px`, v = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, v = i ? d : `${h}px`) : u === "left" && (g = `${r.floating.width + l}px`, v = i ? d : `${h}px`), { data: { x: g, y: v } };
  }
}), "transformOrigin");
function cs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
rn(cs, "getSideAndAlignFromPlacement");
var QN = Object.defineProperty, JN = (e, t) => QN(e, "name", { value: t, configurable: !0 }), eO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ JN(function(t, n) {
    const { container: r, ...o } = t, [s, i] = c.useState(!1);
    et(() => i(!0), []);
    const a = r || s && globalThis?.document?.body;
    return a ? je.createPortal(/* @__PURE__ */ f(wt.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), tO = Object.defineProperty, Yt = (e, t) => tO(e, "name", { value: t, configurable: !0 });
function Yp(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
Yt(Yp, "useStateMachine");
var Gp = /* @__PURE__ */ Yt((e) => {
  const { present: t, children: n } = e, r = Kp(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = qp(r.ref, Xp(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
}, "Presence");
function Kp(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = c.useRef(void 0), a = e ? "mounted" : "unmounted", [l, u] = Yp(a, {
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
  }, [l]), et(() => {
    const m = r.current, d = o.current;
    if (d !== e) {
      const h = s.current, g = Gn(m);
      e ? (i.current = g, u("MOUNT")) : g === "none" || m?.display === "none" ? u("UNMOUNT") : u(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), et(() => {
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
Yt(Kp, "usePresence");
function yi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Yt(yi, "setRef");
function qp(...e) {
  const t = c.useRef(e);
  return t.current = e, c.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((i) => {
      const a = yi(i, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == "function" ? a() : yi(r[i], null);
        }
      };
  }, []);
}
Yt(qp, "useStableComposedRefs");
function Gn(e) {
  return e?.animationName || "none";
}
Yt(Gn, "getAnimationName");
function Xp(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Yt(Xp, "getElementRef");
var nO = Object.defineProperty, rO = (e, t) => nO(e, "name", { value: t, configurable: !0 }), ru = c[" useEffectEvent ".trim().toString()], ou = c[" useInsertionEffect ".trim().toString()];
function Zp(e) {
  if (typeof ru == "function")
    return ru(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof ou == "function" ? ou(() => {
    t.current = e;
  }) : et(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
rO(Zp, "useEffectEvent");
var oO = Object.defineProperty, Kr = (e, t) => oO(e, "name", { value: t, configurable: !0 }), sO = c[" useInsertionEffect ".trim().toString()] || et;
function Qp({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Kr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = Jp({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = eh(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
Kr(Qp, "useControllableState");
function Jp({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return sO(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
Kr(Jp, "useUncontrolledState");
function eh(e) {
  return typeof e == "function";
}
Kr(eh, "isFunction");
var su = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function iO(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = Zp(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === su)
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
    l && !Object.is(o, d.state) && p({ type: su, state: o });
  }, [o, d.state, l]), [v, p];
}
Kr(iO, "useControllableStateReducer");
var aO = Object.defineProperty, oc = (e, t) => aO(e, "name", { value: t, configurable: !0 }), Us = !1;
function th() {
  const [e, t] = c.useState(Us);
  return c.useEffect(() => {
    Us || (Us = !0, t(!0));
  }, []), e;
}
oc(th, "useIsHydrated");
var nh = c[" useSyncExternalStore ".trim().toString()];
function rh() {
  return () => {
  };
}
oc(rh, "subscribe");
function oh() {
  return nh(
    rh,
    () => !0,
    () => !1
  );
}
oc(oh, "useIsHydratedModern");
var cO = typeof nh == "function" ? oh : th, lO = Object.defineProperty, _n = (e, t) => lO(e, "name", { value: t, configurable: !0 }), Ys = "rovingFocusGroup.onEntryFocus", uO = { bubbles: !1, cancelable: !0 }, ls = "RovingFocusGroup", [wi, sh, dO] = /* @__PURE__ */ Xa(ls), [fO, ih] = /* @__PURE__ */ pr(
  ls,
  [dO]
), iu = {
  Vertical: "vertical",
  Horizontal: "horizontal"
}, mO = {
  RTL: "rtl"
}, [pO, hO] = fO(ls), gO = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ _n(function(t, n) {
    return /* @__PURE__ */ f(wi.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(wi.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(vO, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), vO = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ _n(function(t, n) {
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
  } = t, h = c.useRef(null), g = Be(n, h), v = Qa(i), [b, w] = Qp({
    prop: a,
    defaultProp: l ?? null,
    onChange: u,
    caller: ls
  }), [x, y] = c.useState(!1), C = Ut(m), P = sh(r), S = c.useRef(!1), [E, N] = c.useState(0);
  return c.useEffect(() => {
    const R = h.current;
    if (R)
      return R.addEventListener(Ys, C), () => R.removeEventListener(Ys, C);
  }, [C]), /* @__PURE__ */ f(
    pO,
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
        wt.div,
        {
          tabIndex: x || E === 0 ? -1 : 0,
          "data-orientation": o,
          ...p,
          ref: g,
          style: { outline: "none", ...t.style },
          onMouseDown: Ce(t.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: Ce(t.onFocus, (R) => {
            const T = !S.current;
            if (R.target === R.currentTarget && T && !x) {
              const _ = new CustomEvent(Ys, uO);
              if (R.currentTarget.dispatchEvent(_), !_.defaultPrevented) {
                const D = P().filter((W) => W.focusable), L = D.find((W) => W.active), F = D.find((W) => W.id === b), A = [L, F, ...D].filter(
                  Boolean
                ).map((W) => W.ref.current);
                sc(A, d);
              }
            }
            S.current = !1;
          }),
          onBlur: Ce(t.onBlur, () => y(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), bO = "RovingFocusGroupItem", yO = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ _n(function(t, n) {
    const {
      __scopeRovingFocusGroup: r,
      focusable: o = !0,
      active: s = !1,
      tabStopId: i,
      children: a,
      ...l
    } = t, u = Lp(), m = i || u, d = hO(bO, r), p = d.currentTabStopId === m, h = sh(r), { onFocusableItemAdd: g, onFocusableItemRemove: v, currentTabStopId: b } = d, w = cO();
    return et(() => {
      if (!(!w || !o))
        return g(), () => v();
    }, [w, o, g, v]), c.useEffect(() => {
      if (!(w || !o))
        return g(), () => v();
    }, [w, o, g, v]), /* @__PURE__ */ f(
      wi.ItemSlot,
      {
        scope: r,
        id: m,
        focusable: o,
        active: s,
        children: /* @__PURE__ */ f(
          wt.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": d.orientation,
            ...l,
            ref: n,
            onMouseDown: Ce(t.onMouseDown, (x) => {
              o ? d.onItemFocus(m) : x.preventDefault();
            }),
            onFocus: Ce(t.onFocus, () => d.onItemFocus(m)),
            onKeyDown: Ce(t.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const y = ch(x, d.orientation, d.dir);
              if (y !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let P = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") P.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && P.reverse();
                  const S = P.indexOf(x.currentTarget);
                  P = d.loop ? lh(P, S + 1) : P.slice(S + 1);
                }
                setTimeout(() => sc(P));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: p, hasTabStop: b != null }) : a
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), wO = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ah(e, t) {
  return t !== mO.RTL ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
_n(ah, "getDirectionAwareKey");
function ch(e, t, n) {
  const r = ah(e.key, n);
  if (!(t === iu.Vertical && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === iu.Horizontal && ["ArrowUp", "ArrowDown"].includes(r)))
    return wO[r];
}
_n(ch, "getFocusIntent");
function sc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
_n(sc, "focusFirst");
function lh(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
_n(lh, "wrapArray");
var xO = Object.defineProperty, ge = (e, t) => xO(e, "name", { value: t, configurable: !0 }), CO = ["Enter", " "], SO = ["ArrowDown", "PageUp", "Home"], uh = ["ArrowUp", "PageDown", "End"], EO = [...SO, ...uh], us = "Menu", [xi, PO, NO] = /* @__PURE__ */ Xa(us), [$n, dh] = /* @__PURE__ */ pr(us, [
  NO,
  Hp,
  ih
]), ic = Hp(), fh = ih(), [OO, qr] = $n(us), [RO, ac] = $n(us), kO = /* @__PURE__ */ ge((e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: i = !0 } = e, a = ic(t), [l, u] = c.useState(null), m = c.useRef(!1), d = Ut(s), p = Qa(o);
  return c.useEffect(() => {
    const h = /* @__PURE__ */ ge(() => {
      m.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, "handleKeyDown"), g = /* @__PURE__ */ ge(() => m.current = !1, "handlePointer");
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), c.useEffect(() => {
    if (!n)
      return;
    const h = /* @__PURE__ */ ge(() => d(!1), "handleBlur");
    return window.addEventListener("blur", h), () => window.removeEventListener("blur", h);
  }, [n, d]), /* @__PURE__ */ f(YN, { ...a, children: /* @__PURE__ */ f(
    OO,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ f(
        RO,
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
}, "Menu"), DO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t, s = ic(r);
    return /* @__PURE__ */ f(KN, { ...s, ...o, ref: n });
  }, "MenuAnchor")
), mh = "MenuPortal", [MO, TO] = $n(mh, {
  forceMount: void 0
}), AO = /* @__PURE__ */ ge((e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = qr(mh, t);
  return /* @__PURE__ */ f(MO, { scope: t, forceMount: n, children: /* @__PURE__ */ f(Gp, { present: n || s.open, children: /* @__PURE__ */ f(eO, { asChild: !0, container: o, children: r }) }) });
}, "MenuPortal"), on = "MenuContent", [IO, ph] = $n(on), _O = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const r = TO(on, t.__scopeMenu), { forceMount: o = r.forceMount, ...s } = t, i = qr(on, t.__scopeMenu), a = ac(on, t.__scopeMenu);
    return /* @__PURE__ */ f(xi.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ f(Gp, { present: o || i.open, children: /* @__PURE__ */ f(xi.Slot, { scope: t.__scopeMenu, children: a.modal ? /* @__PURE__ */ f($O, { ...s, ref: n }) : /* @__PURE__ */ f(FO, { ...s, ref: n }) }) }) });
  }, "MenuContent")
), $O = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const r = qr(on, t.__scopeMenu), o = c.useRef(null), s = Be(n, o);
    return c.useEffect(() => {
      const i = o.current;
      if (i) return es(i);
    }, []), /* @__PURE__ */ f(
      hh,
      {
        ...t,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: r.open,
        disableOutsideScroll: !0,
        onFocusOutside: Ce(
          t.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => r.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), FO = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ ge(function(t, n) {
  const r = qr(on, t.__scopeMenu);
  return /* @__PURE__ */ f(
    hh,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => r.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), LO = /* @__PURE__ */ Ne("MenuContent.ScrollLock"), hh = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
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
    } = t, w = qr(on, r), x = ac(on, r), y = ic(r), C = fh(r), P = PO(r), [S, E] = c.useState(null), N = c.useRef(null), [R, T] = c.useState(null);
    Mp(R);
    const { nodes: _, registry: D } = Dp(), L = !!(s || v), F = Be(
      n,
      N,
      w.onContentChange,
      T
    ), z = c.useRef(0), A = c.useRef(""), W = c.useRef(0), M = c.useRef(null), $ = c.useRef("right"), O = c.useRef(0), B = c.useMemo(
      () => v ? [N, ..._.map((H) => ({ current: H }))] : [],
      [N, _, v]
    ), J = v ? zr : c.Fragment, oe = v ? {
      as: LO,
      allowPinchZoom: !0,
      shards: B
    } : void 0, ye = /* @__PURE__ */ ge((H) => {
      const j = A.current + H, se = P().filter((be) => !be.disabled), K = document.activeElement, te = se.find((be) => be.ref.current === K)?.textValue, ie = se.map((be) => be.textValue), ce = wh(ie, j, te), pe = se.find((be) => be.textValue === ce)?.ref.current;
      function we(be) {
        A.current = be, window.clearTimeout(z.current), be !== "" && (z.current = window.setTimeout(() => we(""), 1e3));
      }
      ge(we, "updateSearch"), we(j), pe && setTimeout(() => pe.focus());
    }, "handleTypeaheadSearch");
    c.useEffect(() => () => window.clearTimeout(z.current), []), nc();
    const ee = c.useCallback((H) => $.current === M.current?.side && Ch(H, M.current?.area), []);
    return /* @__PURE__ */ f(
      IO,
      {
        scope: r,
        searchRef: A,
        onItemEnter: c.useCallback(
          (H) => {
            ee(H) && H.preventDefault();
          },
          [ee]
        ),
        onItemLeave: c.useCallback(
          (H) => {
            ee(H) || (N.current?.focus(), E(null));
          },
          [ee]
        ),
        onTriggerLeave: c.useCallback(
          (H) => {
            ee(H) && H.preventDefault();
          },
          [ee]
        ),
        pointerGraceTimerRef: W,
        onPointerGraceIntentChange: c.useCallback((H) => {
          M.current = H;
        }, []),
        children: /* @__PURE__ */ f(kp, { registry: L ? D : null, children: /* @__PURE__ */ f(J, { ...oe, children: /* @__PURE__ */ f(
          FN,
          {
            asChild: !0,
            trapped: s,
            branches: _,
            onMountAutoFocus: Ce(i, (H) => {
              H.preventDefault(), N.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ f(
              MN,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: m,
                onPointerDownOutside: d,
                onFocusOutside: p,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ f(
                  gO,
                  {
                    asChild: !0,
                    ...C,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: Ce(u, (H) => {
                      x.isUsingKeyboardRef.current || H.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ f(
                      XN,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": gh(w.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...y,
                        ...b,
                        ref: F,
                        style: { outline: "none", ...b.style },
                        onKeyDown: Ce(b.onKeyDown, (H) => {
                          const se = H.target.closest("[data-radix-menu-content]") === H.currentTarget, K = H.ctrlKey || H.altKey || H.metaKey, te = H.key.length === 1;
                          se && (H.key === "Tab" && H.preventDefault(), !K && te && ye(H.key));
                          const ie = N.current;
                          if (H.target !== ie || !EO.includes(H.key)) return;
                          H.preventDefault();
                          const pe = P().filter((we) => !we.disabled).map((we) => we.ref.current);
                          uh.includes(H.key) && pe.reverse(), bh(pe);
                        }),
                        onBlur: Ce(t.onBlur, (H) => {
                          H.currentTarget.contains(H.target) || (window.clearTimeout(z.current), A.current = "");
                        }),
                        onPointerMove: Ce(
                          t.onPointerMove,
                          Fo((H) => {
                            const j = H.target, se = O.current !== H.clientX;
                            if (H.currentTarget.contains(j) && se) {
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
), WO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ f(wt.div, { role: "group", ...o, ref: n });
  }, "MenuGroup")
), zO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ f(wt.div, { ...o, ref: n });
  }, "MenuLabel")
), Ci = "MenuItem", au = "menu.itemSelect", BO = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ge(function(t, n) {
    const { disabled: r = !1, onSelect: o, ...s } = t, i = c.useRef(null), a = ac(Ci, t.__scopeMenu), l = ph(Ci, t.__scopeMenu), u = Be(n, i), m = c.useRef(!1), d = /* @__PURE__ */ ge(() => {
      const p = i.current;
      if (!r && p) {
        const h = new CustomEvent(au, { bubbles: !0, cancelable: !0 });
        p.addEventListener(au, (g) => o?.(g), { once: !0 }), Ja(p, h), h.defaultPrevented ? m.current = !1 : a.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ f(
      HO,
      {
        ...s,
        ref: u,
        disabled: r,
        onClick: Ce(t.onClick, d),
        onPointerDown: (p) => {
          t.onPointerDown?.(p), m.current = !0;
        },
        onPointerUp: Ce(t.onPointerUp, (p) => {
          m.current || p.currentTarget?.click();
        }),
        onKeyDown: Ce(t.onKeyDown, (p) => {
          r || p.target !== p.currentTarget || l.searchRef.current !== "" && p.key === " " || CO.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }, "MenuItem")
), HO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, disabled: o = !1, textValue: s, ...i } = t, a = ph(Ci, r), l = fh(r), u = c.useRef(null), m = Be(n, u), [d, p] = c.useState(!1), [h, g] = c.useState("");
    return c.useEffect(() => {
      const v = u.current;
      v && g((v.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ f(
      xi.ItemSlot,
      {
        scope: r,
        disabled: o,
        textValue: s ?? h,
        children: /* @__PURE__ */ f(yO, { asChild: !0, ...l, focusable: !o, children: /* @__PURE__ */ f(
          wt.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...i,
            ref: m,
            onPointerMove: Ce(
              t.onPointerMove,
              Fo((v) => {
                o ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Ce(
              t.onPointerLeave,
              Fo((v) => a.onItemLeave(v))
            ),
            onFocus: Ce(t.onFocus, () => p(!0)),
            onBlur: Ce(t.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), VO = "MenuRadioGroup", [RA, kA] = $n(
  VO,
  { value: void 0, onValueChange: /* @__PURE__ */ ge(() => {
  }, "onValueChange") }
), jO = "MenuItemIndicator", [DA, MA] = $n(
  jO,
  { checked: !1 }
), UO = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ ge(function(t, n) {
    const { __scopeMenu: r, ...o } = t;
    return /* @__PURE__ */ f(
      wt.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: n
      }
    );
  }, "MenuSeparator")
), YO = "MenuSub", [TA, AA] = $n(YO);
function gh(e) {
  return e ? "open" : "closed";
}
ge(gh, "getOpenState");
function vh(e) {
  return e === "indeterminate";
}
ge(vh, "isIndeterminate");
function GO(e) {
  return vh(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
ge(GO, "getCheckedState");
function bh(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
ge(bh, "focusFirst");
function yh(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
ge(yh, "wrapArray");
function wh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = yh(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
ge(wh, "getNextMatch");
function xh(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], u = a.x, m = a.y, d = l.x, p = l.y;
    m > r != p > r && n < (d - u) * (r - m) / (p - m) + u && (o = !o);
  }
  return o;
}
ge(xh, "isPointInPolygon");
function Ch(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return xh(n, t);
}
ge(Ch, "isPointerInGraceArea");
function Fo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
ge(Fo, "whenMouse");
var KO = Object.defineProperty, qO = (e, t) => KO(e, "name", { value: t, configurable: !0 }), XO = c[" useId ".trim().toString()] || (() => {
}), ZO = 0;
function Si(e) {
  const [t, n] = c.useState(XO());
  return Ka(() => {
    e || n((r) => r ?? String(ZO++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
qO(Si, "useId");
var QO = Object.defineProperty, hn = (e, t) => QO(e, "name", { value: t, configurable: !0 }), cc = "DropdownMenu", [JO, IA] = /* @__PURE__ */ lp(
  cc,
  [dh]
), gn = dh(), [eR, Sh] = JO(cc), tR = /* @__PURE__ */ hn((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: i,
    modal: a = !0
  } = e, l = gn(t), u = c.useRef(null), [m, d] = fp({
    prop: o,
    defaultProp: s ?? !1,
    onChange: i,
    caller: cc
  });
  return /* @__PURE__ */ f(
    eR,
    {
      scope: t,
      triggerId: Si(),
      triggerRef: u,
      contentId: Si(),
      open: m,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((p) => !p), [d]),
      modal: a,
      children: /* @__PURE__ */ f(kO, { ...l, open: m, onOpenChange: d, dir: r, modal: a, children: n })
    }
  );
}, "DropdownMenu"), nR = "DropdownMenuTrigger", rR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ hn(function(t, n) {
    const { __scopeDropdownMenu: r, disabled: o = !1, ...s } = t, i = Sh(nR, r), a = gn(r), l = cp(n, i.triggerRef);
    return /* @__PURE__ */ f(DO, { asChild: !0, ...a, children: /* @__PURE__ */ f(
      uN.button,
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
        onPointerDown: Ar(t.onPointerDown, (u) => {
          !o && u.button === 0 && u.ctrlKey === !1 && (i.onOpenToggle(), i.open || u.preventDefault());
        }),
        onKeyDown: Ar(t.onKeyDown, (u) => {
          o || (["Enter", " "].includes(u.key) && i.onOpenToggle(), u.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(u.key) && u.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), oR = /* @__PURE__ */ hn((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = gn(t);
  return /* @__PURE__ */ f(AO, { ...r, ...n });
}, "DropdownMenuPortal"), sR = "DropdownMenuContent", iR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ hn(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, s = Sh(sR, r), i = gn(r), a = c.useRef(!1);
    return /* @__PURE__ */ f(
      _O,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ...o,
        ref: n,
        onCloseAutoFocus: Ar(t.onCloseAutoFocus, (l) => {
          a.current || s.triggerRef.current?.focus(), a.current = !1, l.preventDefault();
        }),
        onInteractOutside: Ar(t.onInteractOutside, (l) => {
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
), aR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ hn(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, s = gn(r);
    return /* @__PURE__ */ f(WO, { ...s, ...o, ref: n });
  }, "DropdownMenuGroup")
), cR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ hn(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, s = gn(r);
    return /* @__PURE__ */ f(zO, { ...s, ...o, ref: n });
  }, "DropdownMenuLabel")
), lR = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ hn(function(t, n) {
    const { __scopeDropdownMenu: r, ...o } = t, s = gn(r);
    return /* @__PURE__ */ f(BO, { ...s, ...o, ref: n });
  }, "DropdownMenuItem")
), uR = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ hn(function(t, n) {
  const { __scopeDropdownMenu: r, ...o } = t, s = gn(r);
  return /* @__PURE__ */ f(UO, { ...s, ...o, ref: n });
}, "DropdownMenuSeparator"));
const _A = tR, $A = rR, FA = aR, dR = c.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ f(oR, { children: /* @__PURE__ */ f(
  iR,
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
dR.displayName = "DropdownMenuContent";
const fR = c.forwardRef(({ className: e, destructive: t = !1, ...n }, r) => /* @__PURE__ */ f(
  lR,
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
fR.displayName = "DropdownMenuItem";
const mR = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  cR,
  {
    ref: n,
    className: I("px-2 py-1.5 text-xs font-medium text-text-muted", e),
    ...t
  }
));
mR.displayName = "DropdownMenuLabel";
const pR = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  uR,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
pR.displayName = "DropdownMenuSeparator";
function LA({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: o,
  ...s
}) {
  return /* @__PURE__ */ k(
    "div",
    {
      className: I(
        "flex flex-col items-center justify-center text-center py-12 px-6 gap-4",
        o
      ),
      ...s,
      children: [
        e && /* @__PURE__ */ f("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-databeez-primary/10", children: /* @__PURE__ */ f(e, { className: "h-6 w-6 text-databeez-primary" }) }),
        /* @__PURE__ */ k("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f("p", { className: "font-semibold text-text-base", children: t }),
          n && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted max-w-sm", children: n })
        ] }),
        r && /* @__PURE__ */ f("div", { children: r })
      ]
    }
  );
}
const hR = [
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
].join(" "), gR = c.forwardRef(
  ({ children: e, className: t }, n) => /* @__PURE__ */ f("div", { ref: n, className: I(hR, t), children: e })
);
gR.displayName = "MarkdownContent";
function WA({
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
      children: /* @__PURE__ */ k("div", { className: "flex flex-col max-w-[80%]", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: I(
              "rounded-2xl px-4 py-3 text-sm leading-relaxed",
              a ? "bg-databeez-primary text-white rounded-tr-sm" : "bg-surface border border-border text-text-base rounded-tl-sm"
            ),
            children: a ? /* @__PURE__ */ f("p", { className: "whitespace-pre-wrap", children: e }) : s ?? /* @__PURE__ */ f("p", { className: "whitespace-pre-wrap", children: e })
          }
        ),
        !a && o && /* @__PURE__ */ k("div", { className: "flex items-center gap-1 self-end mt-1", children: [
          /* @__PURE__ */ f(Qf, { text: e }),
          n && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: n,
              "aria-label": "Rigenera risposta",
              className: "inline-flex items-center text-text-muted hover:text-text-base transition-colors",
              children: /* @__PURE__ */ f(kw, { className: "h-4 w-4" })
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
              children: /* @__PURE__ */ f(_w, { className: "h-4 w-4" })
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
              children: /* @__PURE__ */ f(Iw, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    }
  );
}
function zA({
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
      children: /* @__PURE__ */ k("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10",
            style: n ? { backgroundColor: n } : void 0,
            children: /* @__PURE__ */ f(e, { className: "h-6 w-6 text-primary", style: t ? { color: t } : void 0 })
          }
        ),
        /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ f("h3", { className: "text-base font-semibold text-text-base", children: r }),
          o && /* @__PURE__ */ f("p", { className: "mt-1 text-sm text-text-muted", children: o }),
          s && /* @__PURE__ */ f("div", { className: "mt-3", children: s })
        ] })
      ] })
    }
  ) : /* @__PURE__ */ k(
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
const vR = "inline-flex h-7 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50", cu = "border-border bg-surface text-text-muted hover:bg-subtle hover:text-text-base", lu = "border-primary bg-primary-light text-text-base", bR = c.forwardRef(
  ({ label: e, active: t = !1, onClick: n, onRemove: r, removeLabel: o, icon: s, className: i, disabled: a, ...l }, u) => {
    const m = /* @__PURE__ */ k(Ve, { children: [
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
          className: I(vR, t ? lu : cu, i),
          ...l,
          children: m
        }
      );
    const d = o ?? (typeof e == "string" ? e : "filtro");
    return /* @__PURE__ */ k(
      "span",
      {
        className: I(
          "inline-flex h-7 items-center rounded-full border text-xs font-medium transition-colors",
          t ? lu : cu,
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
              children: /* @__PURE__ */ f(ar, { className: "h-3 w-3", "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
bR.displayName = "FilterChip";
const Sn = 8, Eh = 32, Ph = 140;
function yR(e, t, n) {
  const r = c.useCallback((l) => typeof window > "u" ? l : {
    x: Math.min(
      Math.max(l.x, Sn),
      Math.max(Sn, window.innerWidth - Sn - Ph)
    ),
    y: Math.min(
      Math.max(l.y, Sn),
      Math.max(Sn, window.innerHeight - Eh - Sn)
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
function wR(e) {
  return typeof window > "u" ? 400 : Math.max(120, window.innerHeight - e - Eh - Sn * 2);
}
function BA({
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
  const { pos: v, startDrag: b } = yR(n, r, o);
  return /* @__PURE__ */ k(
    "div",
    {
      className: I(
        "fixed z-50 overflow-hidden rounded-md border border-border bg-surface shadow-lg",
        u
      ),
      style: { minWidth: Ph, left: v.x, top: v.y },
      onMouseDown: (w) => w.stopPropagation(),
      children: [
        /* @__PURE__ */ k(
          "div",
          {
            onMouseDown: b,
            className: I(
              "flex h-8 cursor-grab items-center gap-1.5 px-2.5 text-text-base",
              !h && "border-b border-border"
            ),
            children: [
              /* @__PURE__ */ f(yw, { className: "h-3 w-3 shrink-0 text-text-muted" }),
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
                  children: h ? /* @__PURE__ */ f(ir, { className: "h-3 w-3" }) : /* @__PURE__ */ f($d, { className: "h-3 w-3" })
                }
              )
            ]
          }
        ),
        !h && /* @__PURE__ */ f(
          "div",
          {
            className: "flex flex-col gap-1.5 overflow-y-auto p-2.5",
            style: { maxHeight: wR(v.y) },
            children: t
          }
        )
      ]
    }
  );
}
const xR = Du(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...s }, i) => {
    const a = Lb(), l = o || a;
    return /* @__PURE__ */ k("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ f("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: t }),
      /* @__PURE__ */ f(
        "input",
        {
          id: l,
          className: da(
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
xR.displayName = "Input";
const CR = c.forwardRef(
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
    return /* @__PURE__ */ k("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: m,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ k("div", { className: "relative", children: [
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
CR.displayName = "InputWithIcon";
const SR = {
  GET: "bg-success-bg text-success-fg border-success-border",
  POST: "bg-info-bg text-info-fg border-info-border",
  PUT: "bg-warning-bg text-warning-fg border-warning-border",
  PATCH: "bg-warning-bg text-warning-fg border-warning-border",
  DELETE: "bg-error-bg text-error-fg border-error-border",
  HEAD: "bg-subtle text-text-muted border-border",
  OPTIONS: "bg-subtle text-text-muted border-border"
};
function HA({ method: e, className: t, ...n }) {
  const r = e.toUpperCase(), o = SR[r] ?? "bg-subtle text-text-muted border-border";
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
const ER = (e) => e === 1 ? "1 selezionato" : `${e} selezionati`;
function PR({
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
  summaryLabel: v = ER
}) {
  const b = c.useId(), w = `${b}-list`, [x, y] = c.useState(!1), [C, P] = c.useState(""), [S, E] = c.useState(0), N = c.useMemo(() => {
    if (!C) return e;
    const M = C.toLowerCase();
    return e.filter(($) => $.label.toLowerCase().includes(M));
  }, [e, C]), R = c.useMemo(() => new Set(t), [t]), T = e.filter((M) => R.has(M.value)), _ = (M) => `${b}-opt-${M}`, D = Math.min(S, Math.max(0, N.length - 1));
  c.useEffect(() => {
    x && document.getElementById(_(D))?.scrollIntoView?.({ block: "nearest" });
  }, [D, x]);
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
          M.preventDefault(), E((D + 1) % N.length);
          break;
        case "ArrowUp":
          M.preventDefault(), E((D - 1 + N.length) % N.length);
          break;
        case "Home":
          M.ctrlKey && (M.preventDefault(), E(0));
          break;
        case "End":
          M.ctrlKey && (M.preventDefault(), E(N.length - 1));
          break;
        case "Enter":
          M.preventDefault(), L(N[D]);
          break;
      }
  }
  let W = null;
  return T.length > 0 && (g > 0 && T.length <= g ? W = T.map((M) => M.label).join(", ") : g > 0 ? W = `${T.slice(0, g).map(($) => $.label).join(", ")} +${T.length - g}` : W = v(T.length)), /* @__PURE__ */ k("div", { className: "space-y-1", children: [
    i && /* @__PURE__ */ f("label", { htmlFor: b, className: "block text-sm font-medium text-text-base", children: i }),
    /* @__PURE__ */ k(
      Hr,
      {
        open: x,
        onOpenChange: (M) => {
          y(M), M || P(""), E(0);
        },
        children: [
          /* @__PURE__ */ f(Vr, { asChild: !0, children: /* @__PURE__ */ k(
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
                /* @__PURE__ */ f(la, { className: "h-4 w-4 shrink-0 text-text-muted", "aria-hidden": "true" })
              ]
            }
          ) }),
          /* @__PURE__ */ k(dr, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: [
            /* @__PURE__ */ k("div", { className: "flex items-center border-b border-border px-3", children: [
              /* @__PURE__ */ f(ua, { className: "h-4 w-4 shrink-0 text-text-muted", "aria-hidden": "true" }),
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
                  "aria-activedescendant": N.length > 0 ? _(D) : void 0,
                  className: "flex-1 bg-transparent py-3 pl-2 text-sm text-text-base outline-none placeholder:text-text-muted",
                  autoFocus: !0
                }
              )
            ] }),
            d && /* @__PURE__ */ k("div", { className: "flex items-center justify-between border-b border-border px-3 py-1.5 text-xs", children: [
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
                  return /* @__PURE__ */ k(
                    "li",
                    {
                      id: _($),
                      role: "option",
                      "aria-selected": O,
                      "aria-disabled": M.disabled || void 0,
                      onClick: () => L(M),
                      onMouseDown: (B) => B.preventDefault(),
                      onMouseMove: () => $ !== D && E($),
                      className: I(
                        "flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm text-text-base",
                        $ === D && "bg-subtle",
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
PR.displayName = "MultiSelect";
function VA({
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
      children: /* @__PURE__ */ k("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
        r && /* @__PURE__ */ f("div", { className: "mb-3", children: r }),
        /* @__PURE__ */ k("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ k("div", { className: "min-w-0", children: [
            /* @__PURE__ */ f("h1", { className: "text-3xl font-bold text-text-base truncate", children: e }),
            t && /* @__PURE__ */ f("p", { className: "mt-1 text-text-muted", children: t })
          ] }),
          n && /* @__PURE__ */ f("div", { className: "flex items-center gap-3 shrink-0", children: n })
        ] })
      ] })
    }
  );
}
const NR = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  // accent-fg e non accent: in beegraph `bg-accent` è ridefinito dal tema shadcn
  accent: "bg-accent-fg"
};
function jA({
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
  return /* @__PURE__ */ k("div", { className: I("space-y-1", s), ...u, children: [
    (r || o) && /* @__PURE__ */ k("div", { className: "flex items-center justify-between text-xs", children: [
      r && /* @__PURE__ */ f("span", { className: "text-text-muted", children: r }),
      o && /* @__PURE__ */ k("span", { className: "ml-auto font-medium tabular-nums text-text-base", children: [
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
            className: I("h-full rounded-full transition-all", NR[n]),
            style: { width: `${p}%` }
          }
        )
      }
    )
  ] });
}
function UA(e, t, { higherIsRiskier: n = !0 } = {}) {
  if (e == null || !Number.isFinite(e)) return "na";
  const [r, o, s] = t;
  if (![r, o, s].every(Number.isFinite) || !(r <= o && o <= s)) return "na";
  const i = e < r ? 0 : e < o ? 1 : e < s ? 2 : 3;
  return (n ? ["low", "med", "high", "very-high"] : ["very-high", "high", "med", "low"])[i];
}
const OR = {
  na: "n.d.",
  low: "Basso",
  med: "Medio",
  high: "Alto",
  "very-high": "Molto alto"
}, RR = {
  na: "text-risk-na-fg bg-risk-na-bg",
  low: "text-risk-low-fg bg-risk-low-bg",
  med: "text-risk-med-fg bg-risk-med-bg",
  high: "text-risk-high-fg bg-risk-high-bg",
  "very-high": "text-risk-very-high-fg bg-risk-very-high-bg"
};
function YA({
  level: e,
  labels: t,
  value: n,
  subject: r = "Rischio",
  className: o,
  ...s
}) {
  const i = t?.[e] ?? OR[e], a = n != null && n !== "";
  return /* @__PURE__ */ f(
    "span",
    {
      role: "img",
      "aria-label": `${r}: ${i}${a ? `, ${n}` : ""}`,
      className: I(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
        RR[e],
        o
      ),
      ...s,
      children: /* @__PURE__ */ k("span", { "aria-hidden": "true", className: "inline-flex items-center gap-1.5", children: [
        i,
        a && /* @__PURE__ */ f("span", { className: "tabular-nums font-semibold", children: n })
      ] })
    }
  );
}
var kR = c.createContext(void 0);
function ds(e) {
  const t = c.useContext(kR);
  return e || t || "ltr";
}
function Ei(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function DR(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var lc = "ScrollArea", [Nh] = qt(lc), [MR, dt] = Nh(lc), Oh = c.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: s = 600,
      ...i
    } = e, [a, l] = c.useState(null), [u, m] = c.useState(null), [d, p] = c.useState(null), [h, g] = c.useState(null), [v, b] = c.useState(null), [w, x] = c.useState(0), [y, C] = c.useState(0), [P, S] = c.useState(!1), [E, N] = c.useState(!1), R = ue(t, (_) => l(_)), T = ds(o);
    return /* @__PURE__ */ f(
      MR,
      {
        scope: n,
        type: r,
        dir: T,
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
          re.div,
          {
            dir: T,
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
Oh.displayName = lc;
var Rh = "ScrollAreaViewport", kh = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...s } = e, i = dt(Rh, n), a = c.useRef(null), l = ue(t, a, i.onViewportChange);
    return /* @__PURE__ */ k(Ve, { children: [
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
        re.div,
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
kh.displayName = Rh;
var It = "ScrollAreaScrollbar", uc = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = dt(It, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o, a = e.orientation === "horizontal";
    return c.useEffect(() => (a ? s(!0) : i(!0), () => {
      a ? s(!1) : i(!1);
    }), [a, s, i]), o.type === "hover" ? /* @__PURE__ */ f(TR, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ f(AR, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ f(Dh, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ f(dc, { ...r, ref: t }) : null;
  }
);
uc.displayName = It;
var TR = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(It, e.__scopeScrollArea), [s, i] = c.useState(!1);
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
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ f(bt, { present: n || s, children: /* @__PURE__ */ f(
    Dh,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), AR = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = dt(It, e.__scopeScrollArea), s = e.orientation === "horizontal", i = ms(() => l("SCROLL_END"), 100), [a, l] = DR("hidden", {
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
  }, [o.viewport, s, l, i]), /* @__PURE__ */ f(bt, { present: n || a !== "hidden", children: /* @__PURE__ */ f(
    dc,
    {
      "data-state": a === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: X(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: X(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), Dh = c.forwardRef((e, t) => {
  const n = dt(It, e.__scopeScrollArea), { forceMount: r, ...o } = e, [s, i] = c.useState(!1), a = e.orientation === "horizontal", l = ms(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, m = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(a ? u : m);
    }
  }, 10);
  return rr(n.viewport, l), rr(n.content, l), /* @__PURE__ */ f(bt, { present: r || s, children: /* @__PURE__ */ f(
    dc,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), dc = c.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = dt(It, e.__scopeScrollArea), s = c.useRef(null), i = c.useRef(0), [a, l] = c.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = _h(a.viewport, a.content), m = {
    ...r,
    sizes: a,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (p) => s.current = p,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (p) => i.current = p
  };
  function d(p, h) {
    return WR(p, i.current, a, h);
  }
  return n === "horizontal" ? /* @__PURE__ */ f(
    IR,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollLeft, h = uu(p, a, o.dir);
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
    _R,
    {
      ...m,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollTop, h = uu(p, a);
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
}), IR = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = dt(It, e.__scopeScrollArea), [i, a] = c.useState(), l = c.useRef(null), u = ue(t, l, s.onScrollbarXChange);
  return c.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ f(
    Th,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": fs(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.x),
      onDragScroll: (m) => e.onDragScroll(m.x),
      onWheelScroll: (m, d) => {
        if (s.viewport) {
          const p = s.viewport.scrollLeft + m.deltaX;
          e.onWheelScroll(p), Fh(p, d) && m.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && i && r({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: Wo(i.paddingLeft),
            paddingEnd: Wo(i.paddingRight)
          }
        });
      }
    }
  );
}), _R = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = dt(It, e.__scopeScrollArea), [i, a] = c.useState(), l = c.useRef(null), u = ue(t, l, s.onScrollbarYChange);
  return c.useEffect(() => {
    l.current && a(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ f(
    Th,
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
        "--radix-scroll-area-thumb-height": fs(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (m) => e.onThumbPointerDown(m.y),
      onDragScroll: (m) => e.onDragScroll(m.y),
      onWheelScroll: (m, d) => {
        if (s.viewport) {
          const p = s.viewport.scrollTop + m.deltaY;
          e.onWheelScroll(p), Fh(p, d) && m.preventDefault();
        }
      },
      onResize: () => {
        l.current && s.viewport && i && r({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: Wo(i.paddingTop),
            paddingEnd: Wo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [$R, Mh] = Nh(It), Th = c.forwardRef((e, t) => {
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
  } = e, h = dt(It, n), [g, v] = c.useState(null), b = ue(t, (R) => v(R)), w = c.useRef(null), x = c.useRef(""), y = h.viewport, C = r.content - r.viewport, P = ze(m), S = ze(l), E = ms(d, 10);
  function N(R) {
    if (w.current) {
      const T = R.clientX - w.current.left, _ = R.clientY - w.current.top;
      u({ x: T, y: _ });
    }
  }
  return c.useEffect(() => {
    const R = (T) => {
      const _ = T.target;
      g?.contains(_) && P(T, C);
    };
    return document.addEventListener("wheel", R, { passive: !1 }), () => document.removeEventListener("wheel", R, { passive: !1 });
  }, [y, g, C, P]), c.useEffect(S, [r, S]), rr(g, E), rr(h.content, E), /* @__PURE__ */ f(
    $R,
    {
      scope: n,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: ze(s),
      onThumbPointerUp: ze(i),
      onThumbPositionChange: S,
      onThumbPointerDown: ze(a),
      children: /* @__PURE__ */ f(
        re.div,
        {
          ...p,
          ref: b,
          style: { position: "absolute", ...p.style },
          onPointerDown: X(e.onPointerDown, (R) => {
            R.button === 0 && (R.target.setPointerCapture(R.pointerId), w.current = g.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", h.viewport && (h.viewport.style.scrollBehavior = "auto"), N(R));
          }),
          onPointerMove: X(e.onPointerMove, N),
          onPointerUp: X(e.onPointerUp, (R) => {
            const T = R.target;
            T.hasPointerCapture(R.pointerId) && T.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = x.current, h.viewport && (h.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), Lo = "ScrollAreaThumb", Ah = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Mh(Lo, e.__scopeScrollArea);
    return /* @__PURE__ */ f(bt, { present: n || o.hasThumb, children: /* @__PURE__ */ f(FR, { ref: t, ...r }) });
  }
), FR = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, s = dt(Lo, n), i = Mh(Lo, n), { onThumbPositionChange: a } = i, l = ue(
      t,
      (d) => i.onThumbChange(d)
    ), u = c.useRef(void 0), m = ms(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return c.useEffect(() => {
      const d = s.viewport;
      if (d) {
        const p = () => {
          if (m(), !u.current) {
            const h = zR(d, a);
            u.current = h, a();
          }
        };
        return a(), d.addEventListener("scroll", p), () => d.removeEventListener("scroll", p);
      }
    }, [s.viewport, m, a]), /* @__PURE__ */ f(
      re.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: X(e.onPointerDownCapture, (d) => {
          const h = d.target.getBoundingClientRect(), g = d.clientX - h.left, v = d.clientY - h.top;
          i.onThumbPointerDown({ x: g, y: v });
        }),
        onPointerUp: X(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
Ah.displayName = Lo;
var fc = "ScrollAreaCorner", Ih = c.forwardRef(
  (e, t) => {
    const n = dt(fc, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ f(LR, { ...e, ref: t }) : null;
  }
);
Ih.displayName = fc;
var LR = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = dt(fc, n), [s, i] = c.useState(0), [a, l] = c.useState(0), u = !!(s && a);
  return rr(o.scrollbarX, () => {
    const m = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(m), l(m);
  }), rr(o.scrollbarY, () => {
    const m = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(m), i(m);
  }), u ? /* @__PURE__ */ f(
    re.div,
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
function Wo(e) {
  return e ? parseInt(e, 10) : 0;
}
function _h(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function fs(e) {
  const t = _h(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function WR(e, t, n, r = "ltr") {
  const o = fs(n), s = o / 2, i = t || s, a = o - i, l = n.scrollbar.paddingStart + i, u = n.scrollbar.size - n.scrollbar.paddingEnd - a, m = n.content - n.viewport, d = r === "ltr" ? [0, m] : [m * -1, 0];
  return $h([l, u], d)(e);
}
function uu(e, t, n = "ltr") {
  const r = fs(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, i = t.content - t.viewport, a = s - r, l = n === "ltr" ? [0, i] : [i * -1, 0], u = Ei(e, l);
  return $h([0, i], [0, a])(u);
}
function $h(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Fh(e, t) {
  return e > 0 && e < t;
}
var zR = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== s.left, a = n.top !== s.top;
    (i || a) && t(), n = s, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function ms(e, t) {
  const n = ze(e), r = c.useRef(0);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), c.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function rr(e, t) {
  const n = ze(t);
  Fe(() => {
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
var Lh = Oh, BR = kh, HR = Ih;
const VR = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ k(
  Lh,
  {
    ref: r,
    className: I("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f(BR, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f(Wh, {}),
      /* @__PURE__ */ f(HR, {})
    ]
  }
));
VR.displayName = Lh.displayName;
const Wh = c.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f(
  uc,
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
    children: /* @__PURE__ */ f(Ah, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Wh.displayName = uc.displayName;
const jR = c.forwardRef(
  ({ value: e, onChange: t, onClear: n, className: r, placeholder: o = "Cerca...", ...s }, i) => {
    const a = () => {
      t(""), n?.();
    };
    return /* @__PURE__ */ k("div", { className: I("relative", r), children: [
      /* @__PURE__ */ f(ua, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
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
          children: /* @__PURE__ */ f(ar, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
jR.displayName = "SearchInput";
// @__NO_SIDE_EFFECTS__
function du(e) {
  const t = /* @__PURE__ */ UR(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(GR);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function UR(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = qR(o), a = KR(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? cr(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var YR = /* @__PURE__ */ Symbol("radix.slottable");
function GR(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === YR;
}
function KR(e, t) {
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
function qR(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function zh(e) {
  const t = e + "CollectionProvider", [n, r] = qt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: b, children: w } = v, x = V.useRef(null), y = V.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: y, collectionRef: x, children: w });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ du(a), u = V.forwardRef(
    (v, b) => {
      const { scope: w, children: x } = v, y = s(a, w), C = ue(b, y.collectionRef);
      return /* @__PURE__ */ f(l, { ref: C, children: x });
    }
  );
  u.displayName = a;
  const m = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ du(m), h = V.forwardRef(
    (v, b) => {
      const { scope: w, children: x, ...y } = v, C = V.useRef(null), P = ue(b, C), S = s(m, w);
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
function XR(e) {
  const t = /* @__PURE__ */ ZR(e), n = c.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = c.Children.toArray(s), l = a.find(JR);
    if (l) {
      const u = l.props.children, m = a.map((d) => d === l ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, m) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ZR(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (c.isValidElement(o)) {
      const i = tk(o), a = ek(s, o.props);
      return o.type !== c.Fragment && (a.ref = r ? cr(r, i) : i), c.cloneElement(o, a);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var QR = /* @__PURE__ */ Symbol("radix.slottable");
function JR(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === QR;
}
function ek(e, t) {
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
function tk(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Bh(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Hh = Object.freeze({
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
}), nk = "VisuallyHidden", rk = c.forwardRef(
  (e, t) => /* @__PURE__ */ f(
    re.span,
    {
      ...e,
      ref: t,
      style: { ...Hh, ...e.style }
    }
  )
);
rk.displayName = nk;
var ok = [" ", "Enter", "ArrowUp", "ArrowDown"], sk = [" ", "Enter"], Dn = "Select", [ps, hs, ik] = zh(Dn), [hr] = qt(Dn, [
  ik,
  Qo
]), gs = Qo(), [ak, vn] = hr(Dn), [ck, lk] = hr(Dn), Vh = (e) => {
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
  } = e, v = gs(t), [b, w] = c.useState(null), [x, y] = c.useState(null), [C, P] = c.useState(!1), S = ds(u), [E, N] = Rn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Dn
  }), [R, T] = Rn({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: Dn
  }), _ = c.useRef(null), D = b ? g || !!b.closest("form") : !0, [L, F] = c.useState(/* @__PURE__ */ new Set()), z = Array.from(L).map((A) => A.props.value).join(";");
  return /* @__PURE__ */ f(kf, { ...v, children: /* @__PURE__ */ k(
    ak,
    {
      required: h,
      scope: t,
      trigger: b,
      onTriggerChange: w,
      valueNode: x,
      onValueNodeChange: y,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: P,
      contentId: Bt(),
      value: R,
      onValueChange: T,
      open: E,
      onOpenChange: N,
      dir: S,
      triggerPointerDownPosRef: _,
      disabled: p,
      children: [
        /* @__PURE__ */ f(ps.Provider, { scope: t, children: /* @__PURE__ */ f(
          ck,
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
        D ? /* @__PURE__ */ k(
          pg,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: m,
            autoComplete: d,
            value: R,
            onChange: (A) => T(A.target.value),
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
Vh.displayName = Dn;
var jh = "SelectTrigger", Uh = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = gs(n), i = vn(jh, n), a = i.disabled || r, l = ue(t, i.onTriggerChange), u = hs(n), m = c.useRef("touch"), [d, p, h] = gg((v) => {
      const b = u().filter((y) => !y.disabled), w = b.find((y) => y.value === i.value), x = vg(b, v, w);
      x !== void 0 && i.onValueChange(x.value);
    }), g = (v) => {
      a || (i.onOpenChange(!0), h()), v && (i.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ f(Ta, { asChild: !0, ...s, children: /* @__PURE__ */ f(
      re.button,
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
        "data-placeholder": hg(i.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: X(o.onClick, (v) => {
          v.currentTarget.focus(), m.current !== "mouse" && g(v);
        }),
        onPointerDown: X(o.onPointerDown, (v) => {
          m.current = v.pointerType;
          const b = v.target;
          b.hasPointerCapture(v.pointerId) && b.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (g(v), v.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (v) => {
          const b = d.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key), !(b && v.key === " ") && ok.includes(v.key) && (g(), v.preventDefault());
        })
      }
    ) });
  }
);
Uh.displayName = jh;
var Yh = "SelectValue", Gh = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = vn(Yh, n), { onValueNodeHasChildrenChange: u } = l, m = s !== void 0, d = ue(t, l.onValueNodeChange);
    return Fe(() => {
      u(m);
    }, [u, m]), /* @__PURE__ */ f(
      re.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: hg(l.value) ? /* @__PURE__ */ f(Ve, { children: i }) : s
      }
    );
  }
);
Gh.displayName = Yh;
var uk = "SelectIcon", Kh = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ f(re.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Kh.displayName = uk;
var dk = "SelectPortal", qh = (e) => /* @__PURE__ */ f(Jo, { asChild: !0, ...e });
qh.displayName = dk;
var Mn = "SelectContent", Xh = c.forwardRef(
  (e, t) => {
    const n = vn(Mn, e.__scopeSelect), [r, o] = c.useState();
    if (Fe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? je.createPortal(
        /* @__PURE__ */ f(Zh, { scope: e.__scopeSelect, children: /* @__PURE__ */ f(ps.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ f(Qh, { ...e, ref: t });
  }
);
Xh.displayName = Mn;
var mt = 10, [Zh, bn] = hr(Mn), fk = "SelectContentImpl", mk = /* @__PURE__ */ XR("SelectContent.RemoveScroll"), Qh = c.forwardRef(
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
    } = e, x = vn(Mn, n), [y, C] = c.useState(null), [P, S] = c.useState(null), E = ue(t, (j) => C(j)), [N, R] = c.useState(null), [T, _] = c.useState(
      null
    ), D = hs(n), [L, F] = c.useState(!1), z = c.useRef(!1);
    c.useEffect(() => {
      if (y) return es(y);
    }, [y]), pa();
    const A = c.useCallback(
      (j) => {
        const [se, ...K] = D().map((ce) => ce.ref.current), [te] = K.slice(-1), ie = document.activeElement;
        for (const ce of j)
          if (ce === ie || (ce?.scrollIntoView({ block: "nearest" }), ce === se && P && (P.scrollTop = 0), ce === te && P && (P.scrollTop = P.scrollHeight), ce?.focus(), document.activeElement !== ie)) return;
      },
      [D, P]
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
        const se = (te) => {
          j = {
            x: Math.abs(Math.round(te.pageX) - ($.current?.x ?? 0)),
            y: Math.abs(Math.round(te.pageY) - ($.current?.y ?? 0))
          };
        }, K = (te) => {
          j.x <= 10 && j.y <= 10 ? te.preventDefault() : y.contains(te.target) || M(!1), document.removeEventListener("pointermove", se), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", se), document.addEventListener("pointerup", K, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", se), document.removeEventListener("pointerup", K, { capture: !0 });
        };
      }
    }, [y, M, $]), c.useEffect(() => {
      const j = () => M(!1);
      return window.addEventListener("blur", j), window.addEventListener("resize", j), () => {
        window.removeEventListener("blur", j), window.removeEventListener("resize", j);
      };
    }, [M]);
    const [O, B] = gg((j) => {
      const se = D().filter((ie) => !ie.disabled), K = se.find((ie) => ie.ref.current === document.activeElement), te = vg(se, j, K);
      te && setTimeout(() => te.ref.current.focus());
    }), J = c.useCallback(
      (j, se, K) => {
        const te = !z.current && !K;
        (x.value !== void 0 && x.value === se || te) && (R(j), te && (z.current = !0));
      },
      [x.value]
    ), oe = c.useCallback(() => y?.focus(), [y]), ye = c.useCallback(
      (j, se, K) => {
        const te = !z.current && !K;
        (x.value !== void 0 && x.value === se || te) && _(j);
      },
      [x.value]
    ), ee = r === "popper" ? Pi : Jh, H = ee === Pi ? {
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
      Zh,
      {
        scope: n,
        content: y,
        viewport: P,
        onViewportChange: S,
        itemRefCallback: J,
        selectedItem: N,
        onItemLeave: oe,
        itemTextRefCallback: ye,
        focusSelectedItem: W,
        selectedItemText: T,
        position: r,
        isPositioned: L,
        searchRef: O,
        children: /* @__PURE__ */ f(zr, { as: mk, allowPinchZoom: !0, children: /* @__PURE__ */ f(
          Go,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (j) => {
              j.preventDefault();
            },
            onUnmountAutoFocus: X(o, (j) => {
              x.trigger?.focus({ preventScroll: !0 }), j.preventDefault();
            }),
            children: /* @__PURE__ */ f(
              Yo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (j) => j.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ f(
                  ee,
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
                    onKeyDown: X(w.onKeyDown, (j) => {
                      const se = j.ctrlKey || j.altKey || j.metaKey;
                      if (j.key === "Tab" && j.preventDefault(), !se && j.key.length === 1 && B(j.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(j.key)) {
                        let te = D().filter((ie) => !ie.disabled).map((ie) => ie.ref.current);
                        if (["ArrowUp", "End"].includes(j.key) && (te = te.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(j.key)) {
                          const ie = j.target, ce = te.indexOf(ie);
                          te = te.slice(ce + 1);
                        }
                        setTimeout(() => A(te)), j.preventDefault();
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
Qh.displayName = fk;
var pk = "SelectItemAlignedPosition", Jh = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = vn(Mn, n), i = bn(Mn, n), [a, l] = c.useState(null), [u, m] = c.useState(null), d = ue(t, (E) => m(E)), p = hs(n), h = c.useRef(!1), g = c.useRef(!0), { viewport: v, selectedItem: b, selectedItemText: w, focusSelectedItem: x } = i, y = c.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && v && b && w) {
      const E = s.trigger.getBoundingClientRect(), N = u.getBoundingClientRect(), R = s.valueNode.getBoundingClientRect(), T = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ie = T.left - N.left, ce = R.left - ie, pe = E.left - ce, we = E.width + pe, be = Math.max(we, N.width), yr = window.innerWidth - mt, wr = Ei(ce, [
          mt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(mt, yr - be)
        ]);
        a.style.minWidth = we + "px", a.style.left = wr + "px";
      } else {
        const ie = N.right - T.right, ce = window.innerWidth - R.right - ie, pe = window.innerWidth - E.right - ce, we = E.width + pe, be = Math.max(we, N.width), yr = window.innerWidth - mt, wr = Ei(ce, [
          mt,
          Math.max(mt, yr - be)
        ]);
        a.style.minWidth = we + "px", a.style.right = wr + "px";
      }
      const _ = p(), D = window.innerHeight - mt * 2, L = v.scrollHeight, F = window.getComputedStyle(u), z = parseInt(F.borderTopWidth, 10), A = parseInt(F.paddingTop, 10), W = parseInt(F.borderBottomWidth, 10), M = parseInt(F.paddingBottom, 10), $ = z + A + L + M + W, O = Math.min(b.offsetHeight * 5, $), B = window.getComputedStyle(v), J = parseInt(B.paddingTop, 10), oe = parseInt(B.paddingBottom, 10), ye = E.top + E.height / 2 - mt, ee = D - ye, H = b.offsetHeight / 2, j = b.offsetTop + H, se = z + A + j, K = $ - se;
      if (se <= ye) {
        const ie = _.length > 0 && b === _[_.length - 1].ref.current;
        a.style.bottom = "0px";
        const ce = u.clientHeight - v.offsetTop - v.offsetHeight, pe = Math.max(
          ee,
          H + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ie ? oe : 0) + ce + W
        ), we = se + pe;
        a.style.height = we + "px";
      } else {
        const ie = _.length > 0 && b === _[0].ref.current;
        a.style.top = "0px";
        const pe = Math.max(
          ye,
          z + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ie ? J : 0) + H
        ) + K;
        a.style.height = pe + "px", v.scrollTop = se - ye + v.offsetTop;
      }
      a.style.margin = `${mt}px 0`, a.style.minHeight = O + "px", a.style.maxHeight = D + "px", r?.(), requestAnimationFrame(() => h.current = !0);
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
  Fe(() => y(), [y]);
  const [C, P] = c.useState();
  Fe(() => {
    u && P(window.getComputedStyle(u).zIndex);
  }, [u]);
  const S = c.useCallback(
    (E) => {
      E && g.current === !0 && (y(), x?.(), g.current = !1);
    },
    [y, x]
  );
  return /* @__PURE__ */ f(
    gk,
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
            re.div,
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
Jh.displayName = pk;
var hk = "SelectPopperPosition", Pi = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = mt,
    ...s
  } = e, i = gs(n);
  return /* @__PURE__ */ f(
    Df,
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
Pi.displayName = hk;
var [gk, mc] = hr(Mn, {}), Ni = "SelectViewport", eg = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = bn(Ni, n), i = mc(Ni, n), a = ue(t, s.onViewportChange), l = c.useRef(0);
    return /* @__PURE__ */ k(Ve, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ f(ps.Slot, { scope: n, children: /* @__PURE__ */ f(
        re.div,
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
          onScroll: X(o.onScroll, (u) => {
            const m = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: p } = i;
            if (p?.current && d) {
              const h = Math.abs(l.current - m.scrollTop);
              if (h > 0) {
                const g = window.innerHeight - mt * 2, v = parseFloat(d.style.minHeight), b = parseFloat(d.style.height), w = Math.max(v, b);
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
eg.displayName = Ni;
var tg = "SelectGroup", [vk, bk] = hr(tg), ng = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Bt();
    return /* @__PURE__ */ f(vk, { scope: n, id: o, children: /* @__PURE__ */ f(re.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ng.displayName = tg;
var rg = "SelectLabel", og = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = bk(rg, n);
    return /* @__PURE__ */ f(re.div, { id: o.id, ...r, ref: t });
  }
);
og.displayName = rg;
var zo = "SelectItem", [yk, sg] = hr(zo), ig = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = vn(zo, n), l = bn(zo, n), u = a.value === r, [m, d] = c.useState(s ?? ""), [p, h] = c.useState(!1), g = ue(
      t,
      (x) => l.itemRefCallback?.(x, r, o)
    ), v = Bt(), b = c.useRef("touch"), w = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f(
      yk,
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
          ps.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: m,
            children: /* @__PURE__ */ f(
              re.div,
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
                onFocus: X(i.onFocus, () => h(!0)),
                onBlur: X(i.onBlur, () => h(!1)),
                onClick: X(i.onClick, () => {
                  b.current !== "mouse" && w();
                }),
                onPointerUp: X(i.onPointerUp, () => {
                  b.current === "mouse" && w();
                }),
                onPointerDown: X(i.onPointerDown, (x) => {
                  b.current = x.pointerType;
                }),
                onPointerMove: X(i.onPointerMove, (x) => {
                  b.current = x.pointerType, o ? l.onItemLeave?.() : b.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(i.onPointerLeave, (x) => {
                  x.currentTarget === document.activeElement && l.onItemLeave?.();
                }),
                onKeyDown: X(i.onKeyDown, (x) => {
                  l.searchRef?.current !== "" && x.key === " " || (sk.includes(x.key) && w(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ig.displayName = zo;
var Pr = "SelectItemText", ag = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = vn(Pr, n), a = bn(Pr, n), l = sg(Pr, n), u = lk(Pr, n), [m, d] = c.useState(null), p = ue(
      t,
      (w) => d(w),
      l.onItemTextChange,
      (w) => a.itemTextRefCallback?.(w, l.value, l.disabled)
    ), h = m?.textContent, g = c.useMemo(
      () => /* @__PURE__ */ f("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: b } = u;
    return Fe(() => (v(g), () => b(g)), [v, b, g]), /* @__PURE__ */ k(Ve, { children: [
      /* @__PURE__ */ f(re.span, { id: l.textId, ...s, ref: p }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? je.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
ag.displayName = Pr;
var cg = "SelectItemIndicator", lg = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return sg(cg, n).isSelected ? /* @__PURE__ */ f(re.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
lg.displayName = cg;
var Oi = "SelectScrollUpButton", ug = c.forwardRef((e, t) => {
  const n = bn(Oi, e.__scopeSelect), r = mc(Oi, e.__scopeSelect), [o, s] = c.useState(!1), i = ue(t, r.onScrollButtonChange);
  return Fe(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    fg,
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
ug.displayName = Oi;
var Ri = "SelectScrollDownButton", dg = c.forwardRef((e, t) => {
  const n = bn(Ri, e.__scopeSelect), r = mc(Ri, e.__scopeSelect), [o, s] = c.useState(!1), i = ue(t, r.onScrollButtonChange);
  return Fe(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, m = Math.ceil(l.scrollTop) < u;
        s(m);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    fg,
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
dg.displayName = Ri;
var fg = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = bn("SelectScrollButton", n), i = c.useRef(null), a = hs(n), l = c.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return c.useEffect(() => () => l(), [l]), Fe(() => {
    a().find((m) => m.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ f(
    re.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: X(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: X(o.onPointerMove, () => {
        s.onItemLeave?.(), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: X(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), wk = "SelectSeparator", mg = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ f(re.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
mg.displayName = wk;
var ki = "SelectArrow", xk = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = gs(n), s = vn(ki, n), i = bn(ki, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ f(Mf, { ...o, ...r, ref: t }) : null;
  }
);
xk.displayName = ki;
var Ck = "SelectBubbleInput", pg = c.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = c.useRef(null), s = ue(r, o), i = Bh(t);
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
      re.select,
      {
        ...n,
        style: { ...Hh, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
pg.displayName = Ck;
function hg(e) {
  return e === "" || e === void 0;
}
function gg(e) {
  const t = ze(e), n = c.useRef(""), r = c.useRef(0), o = c.useCallback(
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
function vg(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Sk(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Sk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Ek = Vh, bg = Uh, Pk = Gh, Nk = Kh, Ok = qh, yg = Xh, Rk = eg, kk = ng, wg = og, xg = ig, Dk = ag, Mk = lg, Cg = ug, Sg = dg, Eg = mg;
const GA = Ek, KA = kk, qA = Pk, Tk = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ k(
  bg,
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
      /* @__PURE__ */ f(Nk, { asChild: !0, children: /* @__PURE__ */ f(ir, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Tk.displayName = bg.displayName;
const Pg = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Cg,
  {
    ref: n,
    className: I("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f($d, { className: "h-4 w-4" })
  }
));
Pg.displayName = Cg.displayName;
const Ng = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Sg,
  {
    ref: n,
    className: I("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f(ir, { className: "h-4 w-4" })
  }
));
Ng.displayName = Sg.displayName;
const Ak = c.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f(Ok, { children: /* @__PURE__ */ k(
  yg,
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
      /* @__PURE__ */ f(Pg, {}),
      /* @__PURE__ */ f(
        Rk,
        {
          className: I(
            "p-1 overflow-y-auto",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ f(Ng, {})
    ]
  }
) }));
Ak.displayName = yg.displayName;
const Ik = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  wg,
  {
    ref: n,
    className: I("py-1.5 pl-8 pr-2 text-xs font-semibold text-text-muted uppercase tracking-wider", e),
    ...t
  }
));
Ik.displayName = wg.displayName;
const _k = c.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ k(
  xg,
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
      /* @__PURE__ */ f("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f(Mk, { children: /* @__PURE__ */ f(Lr, { className: "h-4 w-4 text-databeez-primary" }) }) }),
      /* @__PURE__ */ f(Dk, { children: t })
    ]
  }
));
_k.displayName = xg.displayName;
const $k = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Eg,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
$k.displayName = Eg.displayName;
function tn(e, t, n) {
  return Number.isFinite(e) ? Math.min(Math.max(e, t), Math.max(t, n)) : t;
}
function Fk(e, t, n, r, o, s) {
  const i = r === "right" ? t - n : n - t;
  return tn(e + i, o, s);
}
function Lk(e, t, n, r, o, s = 16, i = !1) {
  const a = i ? s * 5 : s, l = n === "right" ? "ArrowLeft" : "ArrowRight", u = n === "right" ? "ArrowRight" : "ArrowLeft";
  return e === l ? tn(t + a, r, o) : e === u ? tn(t - a, r, o) : e === "Home" ? tn(r, r, o) : e === "End" ? tn(o, r, o) : null;
}
function XA({
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
    () => tn(a ?? n, s, i)
  ), g = c.useRef(null), v = c.useId(), b = d.id ?? v, w = a ?? n;
  if (c.useEffect(() => {
    h(tn(w, s, i));
  }, [w, s, i]), !e) return null;
  const x = o ? tn(p, s, i) : n;
  function y(P) {
    P !== x && (h(P), l?.(P));
  }
  const C = /* @__PURE__ */ k(
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
            children: /* @__PURE__ */ f(ar, { className: "size-5" })
          }
        ),
        r && /* @__PURE__ */ f("div", { className: "px-4 pt-4 pb-2 pr-10", children: r }),
        /* @__PURE__ */ f("div", { className: I(r ? "" : "pt-4"), children: u })
      ]
    }
  );
  return o ? /* @__PURE__ */ k(Ve, { children: [
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
          g.current && y(Fk(g.current.width, g.current.x, P.clientX, "right", s, i));
        },
        onPointerUp: () => {
          g.current = null;
        },
        onPointerCancel: () => {
          g.current = null;
        },
        onKeyDown: (P) => {
          const S = Lk(P.key, x, "right", s, i, 16, P.shiftKey);
          S !== null && (P.preventDefault(), y(S));
        }
      }
    )
  ] }) : C;
}
function Og({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: I("animate-pulse rounded-md bg-subtle", e),
      ...t
    }
  );
}
function Wk({ lines: e = 3, className: t }) {
  return /* @__PURE__ */ f("div", { className: I("space-y-2", t), children: Array.from({ length: e }).map((n, r) => /* @__PURE__ */ f(
    Og,
    {
      className: I("h-4", r === e - 1 ? "w-2/3" : "w-full")
    },
    r
  )) });
}
function ZA({ className: e }) {
  return /* @__PURE__ */ k("div", { className: I("rounded-xl border border-border bg-surface p-6 space-y-4", e), children: [
    /* @__PURE__ */ f(Og, { className: "h-5 w-1/3" }),
    /* @__PURE__ */ f(Wk, { lines: 3 })
  ] });
}
function QA({
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
  return /* @__PURE__ */ k(
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
const zk = mn(
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
function Bk({ className: e, size: t, label: n = "Caricamento...", ...r }) {
  return /* @__PURE__ */ k(
    "div",
    {
      role: "status",
      "aria-label": n,
      className: I("inline-flex items-center justify-center", e),
      ...r,
      children: [
        /* @__PURE__ */ f("div", { className: zk({ size: t }) }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: n })
      ]
    }
  );
}
function JA({ label: e }) {
  return /* @__PURE__ */ k("div", { className: "flex flex-col items-center justify-center py-12 gap-3", children: [
    /* @__PURE__ */ f(Bk, { size: "lg", label: e }),
    e && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted", children: e })
  ] });
}
const Hk = mn(
  "flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-colors select-none",
  {
    variants: {
      state: {
        completed: "bg-databeez-primary text-white",
        active: "bg-databeez-primary text-white",
        upcoming: "bg-emphasis text-text-muted"
      }
    },
    defaultVariants: {
      state: "upcoming"
    }
  }
), Vk = mn("text-sm transition-colors", {
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
}), jk = mn("w-8 h-px transition-colors", {
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
function Uk(e) {
  return typeof e == "string" ? { label: e } : e;
}
function Yk(e, t) {
  return e < t ? "completed" : e === t ? "active" : "upcoming";
}
const Gk = c.forwardRef(
  ({ className: e, steps: t, activeStep: n, completedIcon: r = "✓", ...o }, s) => /* @__PURE__ */ f(
    "div",
    {
      ref: s,
      className: I("flex items-center justify-center gap-2", e),
      role: "navigation",
      "aria-label": "Progresso",
      ...o,
      children: t.map((i, a) => {
        const l = Uk(i), u = Yk(a, n);
        return /* @__PURE__ */ k("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ f(
            "div",
            {
              className: I(Hk({ state: u })),
              "aria-current": u === "active" ? "step" : void 0,
              children: l.icon ? l.icon : u === "completed" ? r : a + 1
            }
          ),
          /* @__PURE__ */ f("span", { className: I(Vk({ state: u })), children: l.label }),
          a < t.length - 1 && /* @__PURE__ */ f(
            "div",
            {
              className: I(
                jk({ completed: a < n })
              ),
              "aria-hidden": "true"
            }
          )
        ] }, l.label);
      })
    }
  )
);
Gk.displayName = "Stepper";
var vs = "Switch", [Kk] = qt(vs), [qk, Xk] = Kk(vs), Rg = c.forwardRef(
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
    } = e, [p, h] = c.useState(null), g = ue(t, (y) => h(y)), v = c.useRef(!1), b = p ? m || !!p.closest("form") : !0, [w, x] = Rn({
      prop: o,
      defaultProp: s ?? !1,
      onChange: u,
      caller: vs
    });
    return /* @__PURE__ */ k(qk, { scope: n, checked: w, disabled: a, children: [
      /* @__PURE__ */ f(
        re.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": i,
          "data-state": Tg(w),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...d,
          ref: g,
          onClick: X(e.onClick, (y) => {
            x((C) => !C), b && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ f(
        Mg,
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
Rg.displayName = vs;
var kg = "SwitchThumb", Dg = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Xk(kg, n);
    return /* @__PURE__ */ f(
      re.span,
      {
        "data-state": Tg(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Dg.displayName = kg;
var Zk = "SwitchBubbleInput", Mg = c.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const i = c.useRef(null), a = ue(i, s), l = Bh(n), u = yf(t);
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
Mg.displayName = Zk;
function Tg(e) {
  return e ? "checked" : "unchecked";
}
var Qk = Rg, Jk = Dg;
const eD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Qk,
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
      Jk,
      {
        className: I(
          "pointer-events-none block h-5 w-5 rounded-full bg-surface shadow-sm ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
eD.displayName = "Switch";
function eI({
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
  return /* @__PURE__ */ k(
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
        ) : /* @__PURE__ */ f("div", { className: "mt-1", children: /* @__PURE__ */ f(CS, { ...o }) })),
        s && /* @__PURE__ */ f("div", { className: "text-xs text-text-muted mt-1", children: s })
      ]
    }
  );
}
const tD = {
  operational: { dot: "bg-success", text: "text-success-fg", label: "Operational" },
  degraded: { dot: "bg-warning", text: "text-warning-fg", label: "Degraded" },
  outage: { dot: "bg-error", text: "text-error-fg", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" }
};
function tI({
  label: e,
  status: t,
  statusLabel: n,
  className: r,
  ...o
}) {
  const s = tD[t];
  return /* @__PURE__ */ k("div", { className: I("flex items-center justify-between", r), ...o, children: [
    /* @__PURE__ */ k("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f("div", { className: I("h-2 w-2 rounded-full mr-3", s.dot) }),
      /* @__PURE__ */ f("span", { className: "text-sm font-medium", children: e })
    ] }),
    /* @__PURE__ */ f("span", { className: I("text-sm", s.text), children: n ?? s.label })
  ] });
}
function nI({ tabs: e, activeTab: t, onChange: n, className: r }) {
  return /* @__PURE__ */ f("div", { className: I("border-b border-border", r), children: /* @__PURE__ */ f("nav", { className: "-mb-px flex space-x-1", role: "tablist", children: e.map((o) => {
    const s = t === o.id, i = o.icon;
    return /* @__PURE__ */ k(
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
const nD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f(
  "table",
  {
    ref: n,
    className: I("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
nD.displayName = "Table";
const rD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("thead", { ref: n, className: I("bg-subtle border-b border-border", e), ...t }));
rD.displayName = "TableHeader";
const oD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tbody",
  {
    ref: n,
    className: I("divide-y divide-border", e),
    ...t
  }
));
oD.displayName = "TableBody";
const sD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tfoot",
  {
    ref: n,
    className: I("bg-subtle border-t border-border font-medium", e),
    ...t
  }
));
sD.displayName = "TableFooter";
const iD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
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
iD.displayName = "TableRow";
const Ag = c.forwardRef(({ className: e, numeric: t, ...n }, r) => /* @__PURE__ */ f(
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
Ag.displayName = "TableHead";
const aD = { asc: "ascending", desc: "descending" }, cD = c.forwardRef(
  ({ className: e, numeric: t, direction: n, onSort: r, children: o, ...s }, i) => {
    const a = n === "asc" ? Td : n === "desc" ? Md : la;
    return /* @__PURE__ */ f(
      Ag,
      {
        ref: i,
        numeric: t,
        "aria-sort": n ? aD[n] : "none",
        className: e,
        ...s,
        children: /* @__PURE__ */ k(
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
cD.displayName = "TableSortHead";
const lD = c.forwardRef(({ className: e, numeric: t, ...n }, r) => /* @__PURE__ */ f(
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
lD.displayName = "TableCell";
const uD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "caption",
  {
    ref: n,
    className: I("mt-4 text-sm text-text-muted", e),
    ...t
  }
));
uD.displayName = "TableCaption";
const dD = c.forwardRef(
  ({ className: e, page: t, pageCount: n, onPageChange: r, totalItems: o, "aria-label": s = "Paginazione", ...i }, a) => {
    const l = Math.max(1, n), u = Math.min(Math.max(1, t), l);
    return /* @__PURE__ */ k(
      "nav",
      {
        ref: a,
        "aria-label": s,
        className: I("flex items-center justify-between gap-4 text-sm text-text-muted", e),
        ...i,
        children: [
          /* @__PURE__ */ f("span", { children: o !== void 0 ? `${Ls(o)} ${o === 1 ? "risultato" : "risultati"}` : null }),
          /* @__PURE__ */ k("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ f(
              er,
              {
                type: "button",
                variant: "outline",
                size: "icon",
                "aria-label": "Pagina precedente",
                disabled: u <= 1,
                onClick: () => r(u - 1),
                children: /* @__PURE__ */ f(hw, { "aria-hidden": "true", className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ k("span", { "aria-live": "polite", className: "tabular-nums text-text-base", children: [
              "Pagina ",
              Ls(u),
              " di ",
              Ls(l)
            ] }),
            /* @__PURE__ */ f(
              er,
              {
                type: "button",
                variant: "outline",
                size: "icon",
                "aria-label": "Pagina successiva",
                disabled: u >= l,
                onClick: () => r(u + 1),
                children: /* @__PURE__ */ f(_d, { "aria-hidden": "true", className: "h-4 w-4" })
              }
            )
          ] })
        ]
      }
    );
  }
);
dD.displayName = "Pagination";
var Gs = "rovingFocusGroup.onEntryFocus", fD = { bubbles: !1, cancelable: !0 }, Xr = "RovingFocusGroup", [Di, Ig, mD] = zh(Xr), [pD, _g] = qt(
  Xr,
  [mD]
), [hD, gD] = pD(Xr), $g = c.forwardRef(
  (e, t) => /* @__PURE__ */ f(Di.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(Di.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(vD, { ...e, ref: t }) }) })
);
$g.displayName = Xr;
var vD = c.forwardRef((e, t) => {
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
  } = e, p = c.useRef(null), h = ue(t, p), g = ds(s), [v, b] = Rn({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: Xr
  }), [w, x] = c.useState(!1), y = ze(u), C = Ig(n), P = c.useRef(!1), [S, E] = c.useState(0);
  return c.useEffect(() => {
    const N = p.current;
    if (N)
      return N.addEventListener(Gs, y), () => N.removeEventListener(Gs, y);
  }, [y]), /* @__PURE__ */ f(
    hD,
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
        re.div,
        {
          tabIndex: w || S === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: X(e.onFocus, (N) => {
            const R = !P.current;
            if (N.target === N.currentTarget && R && !w) {
              const T = new CustomEvent(Gs, fD);
              if (N.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const _ = C().filter((A) => A.focusable), D = _.find((A) => A.active), L = _.find((A) => A.id === v), z = [D, L, ..._].filter(
                  Boolean
                ).map((A) => A.ref.current);
                Wg(z, m);
              }
            }
            P.current = !1;
          }),
          onBlur: X(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), Fg = "RovingFocusGroupItem", Lg = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = Bt(), u = s || l, m = gD(Fg, n), d = m.currentTabStopId === u, p = Ig(n), { onFocusableItemAdd: h, onFocusableItemRemove: g, currentTabStopId: v } = m;
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
          re.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": m.orientation,
            ...a,
            ref: t,
            onMouseDown: X(e.onMouseDown, (b) => {
              r ? m.onItemFocus(u) : b.preventDefault();
            }),
            onFocus: X(e.onFocus, () => m.onItemFocus(u)),
            onKeyDown: X(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                m.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const w = wD(b, m.orientation, m.dir);
              if (w !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let y = p().filter((C) => C.focusable).map((C) => C.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const C = y.indexOf(b.currentTarget);
                  y = m.loop ? xD(y, C + 1) : y.slice(C + 1);
                }
                setTimeout(() => Wg(y));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: v != null }) : i
          }
        )
      }
    );
  }
);
Lg.displayName = Fg;
var bD = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function yD(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function wD(e, t, n) {
  const r = yD(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return bD[r];
}
function Wg(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function xD(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var CD = $g, SD = Lg, bs = "Tabs", [ED] = qt(bs, [
  _g
]), zg = _g(), [PD, pc] = ED(bs), Bg = c.forwardRef(
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
    } = e, m = ds(a), [d, p] = Rn({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: bs
    });
    return /* @__PURE__ */ f(
      PD,
      {
        scope: n,
        baseId: Bt(),
        value: d,
        onValueChange: p,
        orientation: i,
        dir: m,
        activationMode: l,
        children: /* @__PURE__ */ f(
          re.div,
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
Bg.displayName = bs;
var Hg = "TabsList", Vg = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = pc(Hg, n), i = zg(n);
    return /* @__PURE__ */ f(
      CD,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ f(
          re.div,
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
Vg.displayName = Hg;
var jg = "TabsTrigger", Ug = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = pc(jg, n), a = zg(n), l = Kg(i.baseId, r), u = qg(i.baseId, r), m = r === i.value;
    return /* @__PURE__ */ f(
      SD,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: m,
        children: /* @__PURE__ */ f(
          re.button,
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
            onMouseDown: X(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: X(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(r);
            }),
            onFocus: X(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !m && !o && d && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Ug.displayName = jg;
var Yg = "TabsContent", Gg = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = pc(Yg, n), l = Kg(a.baseId, r), u = qg(a.baseId, r), m = r === a.value, d = c.useRef(m);
    return c.useEffect(() => {
      const p = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ f(bt, { present: o || m, children: ({ present: p }) => /* @__PURE__ */ f(
      re.div,
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
Gg.displayName = Yg;
function Kg(e, t) {
  return `${e}-trigger-${t}`;
}
function qg(e, t) {
  return `${e}-content-${t}`;
}
var ND = Bg, Xg = Vg, Zg = Ug, Qg = Gg;
const rI = ND, OD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Xg,
  {
    ref: n,
    className: I(
      "inline-flex h-10 items-center justify-center rounded-lg bg-subtle p-1 text-text-muted",
      e
    ),
    ...t
  }
));
OD.displayName = Xg.displayName;
const RD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Zg,
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
RD.displayName = Zg.displayName;
const kD = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Qg,
  {
    ref: n,
    className: I(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
kD.displayName = Qg.displayName;
const DD = c.forwardRef(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...s }, i) => {
    const a = o ?? t?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ k("div", { className: "w-full space-y-1.5", children: [
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
DD.displayName = "Textarea";
function MD({
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
  return /* @__PURE__ */ k("div", { className: "space-y-1", children: [
    n && /* @__PURE__ */ f("label", { htmlFor: u, className: "block text-sm font-medium text-text-base", children: n }),
    /* @__PURE__ */ k(
      "div",
      {
        className: I("flex items-center gap-2", i),
        children: [
          /* @__PURE__ */ f(gw, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ k(
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
          /* @__PURE__ */ k(
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
          l && /* @__PURE__ */ k(Ve, { children: [
            /* @__PURE__ */ f("span", { className: "text-text-muted font-medium", children: ":" }),
            /* @__PURE__ */ k(
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
MD.displayName = "TimePicker";
var TD = Object.defineProperty, gr = (e, t) => TD(e, "name", { value: t, configurable: !0 }), Jg = !!(typeof window < "u" && window.document && window.document.createElement);
function He(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ gr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
gr(He, "composeEventHandlers");
function AD(e) {
  if (!Jg)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
gr(AD, "getOwnerWindow");
function Mi(e) {
  if (!Jg)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
gr(Mi, "getOwnerDocument");
function ev(e, t = !1) {
  const { activeElement: n } = Mi(e);
  if (!n?.nodeName)
    return null;
  if (tv(n) && n.contentDocument)
    return ev(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Mi(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
gr(ev, "getActiveElement");
function tv(e) {
  return e.tagName === "IFRAME";
}
gr(tv, "isFrame");
var ID = Object.defineProperty, hc = (e, t) => ID(e, "name", { value: t, configurable: !0 });
function Ti(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
hc(Ti, "setRef");
function nv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Ti(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Ti(e[o], null);
        }
      };
  };
}
hc(nv, "composeRefs");
function kt(...e) {
  return c.useCallback(nv(...e), e);
}
hc(kt, "useComposedRefs");
var _D = Object.defineProperty, ct = (e, t) => _D(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function $D(e, t) {
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
ct($D, "createContext");
// @__NO_SIDE_EFFECTS__
function ys(e, t = []) {
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
  return o.scopeName = e, [r, rv(o, ...t)];
}
ct(ys, "createContextScope");
function rv(...e) {
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
ct(rv, "composeContextScopes");
var un = globalThis?.document ? c.useLayoutEffect : () => {
}, FD = Object.defineProperty, Ae = (e, t) => FD(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function ov(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ ys(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = /* @__PURE__ */ Ae((v) => {
    const { scope: b, children: w } = v, x = c.useRef(null), y = c.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: y, collectionRef: x, children: w });
  }, "CollectionProvider");
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Ne(a), u = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x } = v, y = s(a, w), C = kt(b, y.collectionRef);
      return /* @__PURE__ */ f(l, { ref: C, children: x });
    }
  );
  u.displayName = a;
  const m = e + "CollectionItemSlot", d = "data-radix-collection-item", p = /* @__PURE__ */ Ne(m), h = c.forwardRef(
    (v, b) => {
      const { scope: w, children: x, ...y } = v, C = c.useRef(null), P = kt(b, C), S = s(m, w);
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
  return Ae(g, "useCollection"), [
    { Provider: i, Slot: u, ItemSlot: h },
    g,
    r
  ];
}
Ae(ov, "createCollection");
var fu = /* @__PURE__ */ new WeakMap(), Pe, Xe, ho = (Xe = class extends Map {
  constructor(n) {
    super(n);
    no(this, Pe);
    yn(this, Pe, [...super.keys()]), fu.set(this, !0);
  }
  set(n, r) {
    return fu.get(this) && !this.has(n) && q(this, Pe).push(n), super.set(n, r), this;
  }
  /**
   * Sets a key-value pair so that it ends up at the given index.
   * - Existing keys are moved
   * - Negative indices count from the end of the resulting dictionary, so
   *   inserting at -1 makes the item the last one, -2 the second to last, etc.
   * - Out-of-range indices are clamped
   */
  insert(n, r, o) {
    const s = this.has(r), i = s ? this.size : this.size + 1, a = gc(n), l = a >= 0 ? Math.min(a, i - 1) : Math.max(i + a, 0);
    if (s ? q(this, Pe).indexOf(r) === l : l === this.size)
      return this.set(r, o), this;
    const u = q(this, Pe).filter((d) => d !== r);
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
    const r = q(this, Pe).indexOf(n) - 1;
    if (!(r < 0))
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, r, o) {
    const s = q(this, Pe).indexOf(n);
    if (s === -1)
      return this;
    const i = q(this, Pe).indexOf(r), a = i !== -1 && i < s ? s - 1 : s;
    return this.insert(a, r, o);
  }
  after(n) {
    let r = q(this, Pe).indexOf(n);
    if (r = r === -1 || r === this.size - 1 ? -1 : r + 1, r !== -1)
      return this.entryAt(r);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, r, o) {
    const s = q(this, Pe).indexOf(n);
    if (s === -1)
      return this;
    const i = q(this, Pe).indexOf(r), a = i !== -1 && i <= s ? s : s + 1;
    return this.insert(a, r, o);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return yn(this, Pe, []), super.clear();
  }
  delete(n) {
    const r = super.delete(n);
    return r && q(this, Pe).splice(q(this, Pe).indexOf(n), 1), r;
  }
  deleteAt(n) {
    const r = this.keyAt(n);
    return r !== void 0 ? this.delete(r) : !1;
  }
  at(n) {
    const r = Eo(q(this, Pe), n);
    if (r !== void 0)
      return this.get(r);
  }
  entryAt(n) {
    const r = Eo(q(this, Pe), n);
    if (r !== void 0)
      return [r, this.get(r)];
  }
  indexOf(n) {
    return q(this, Pe).indexOf(n);
  }
  keyAt(n) {
    return Eo(q(this, Pe), n);
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
    for (const s of q(this, Pe).slice(n, r))
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
}, Pe = new WeakMap(), Ae(Xe, "OrderedDict"), Xe);
function Eo(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = sv(e, t);
  return n === -1 ? void 0 : e[n];
}
Ae(Eo, "at");
function sv(e, t) {
  const n = e.length, r = gc(t), o = r >= 0 ? r : n + r;
  return o < 0 || o >= n ? -1 : o;
}
Ae(sv, "toSafeIndex");
function gc(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Ae(gc, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function LD(e) {
  const t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ ys(t), [o, s] = n(t);
  o.displayName = e + "CollectionStableContextProvider";
  const [i, a] = n(t);
  i.displayName = e + "CollectionStatefulContextProvider";
  const l = /* @__PURE__ */ Ae(({ state: S, ...E }) => S ? /* @__PURE__ */ f(m, { ...E, state: S }) : /* @__PURE__ */ f(u, { ...E }), "CollectionProvider");
  l.displayName = t;
  const u = /* @__PURE__ */ Ae((S) => {
    const E = x();
    return /* @__PURE__ */ f(m, { ...S, state: E });
  }, "CollectionInit");
  u.displayName = e + "CollectionInit";
  const m = /* @__PURE__ */ Ae((S) => {
    const { scope: E, children: N, state: R } = S, T = c.useRef(null), [_, D] = c.useState(
      null
    ), L = kt(T, D), [F, z] = R, A = c.useRef(
      new ho()
    ), W = c.useCallback(() => {
      const M = A.current;
      return cv(M) || M.sort(Po), M;
    }, []);
    return c.useEffect(() => {
      if (!_)
        return;
      const M = lv(() => {
        z(($) => {
          const O = $.toSorted(Po);
          return O.some(([J], oe) => $.keyAt(oe) !== J) ? O : $;
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
        collectionElementRefObject: T,
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
  const d = e + "CollectionSlot", p = /* @__PURE__ */ Ne(d), h = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R } = S, T = s(d, N), _ = kt(E, T.collectionElementRef);
      return /* @__PURE__ */ f(p, { ref: _, children: R });
    }
  );
  h.displayName = d;
  const g = e + "CollectionItemSlot", v = "data-radix-collection-item", b = /* @__PURE__ */ Ne(g), w = c.forwardRef(
    (S, E) => {
      const { scope: N, children: R, ...T } = S, _ = c.useRef(null), D = s(g, N), { setCollection: L, registryRef: F } = D, z = c.useRef(T);
      iv(z.current, T) || (z.current = T);
      const A = z.current, W = c.useCallback(
        (O) => {
          const B = F.current;
          O ? B.set(O, {
            ...z.current,
            element: O
          }) : _.current && B.delete(_.current);
        },
        [F]
      ), M = kt(E, W, _);
      un(() => {
        const O = _.current, B = F.current;
        O && B.has(O) && B.set(O, { ...A, element: O });
      }, [A, F]);
      const $ = c.useRef(null);
      return c.useEffect(() => {
        const O = _.current, B = $.current;
        (B?.element ?? null) === O && (!O || B?.itemData === A) || ($.current = O ? { element: O, itemData: A } : null, L((J) => {
          const oe = new ho(J);
          return B && B.element !== O && oe.delete(B.element), O && oe.set(O, { ...A, element: O }), oe.sort(Po);
        }));
      }), c.useEffect(() => () => {
        const O = $.current;
        $.current = null, O && L((B) => {
          if (!B.has(O.element))
            return B;
          const J = new ho(B);
          return J.delete(O.element), J;
        });
      }, [L]), /* @__PURE__ */ f(b, { [v]: "", ref: M, children: R });
    }
  );
  w.displayName = g;
  function x() {
    return c.useState(new ho());
  }
  Ae(x, "useInitCollection");
  function y(S) {
    const { collection: E } = a(e + "CollectionConsumer", S);
    return E;
  }
  Ae(y, "useCollection");
  function C(S) {
    const { getCollection: E } = s(e + "CollectionConsumer", S);
    return E;
  }
  return Ae(C, "useGetCollection"), [
    { Provider: l, Slot: h, ItemSlot: w },
    {
      createCollectionScope: r,
      useCollection: y,
      useGetCollection: C,
      useInitCollection: x
    }
  ];
}
Ae(LD, "createCollection");
function iv(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n)
    if (!Object.prototype.hasOwnProperty.call(t, o) || e[o] !== t[o]) return !1;
  return !0;
}
Ae(iv, "shallowEqual");
function av(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Ae(av, "isElementPreceding");
function cv(e) {
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
Ae(cv, "isInDocumentOrder");
function Po(e, t) {
  return !e[1].element || !t[1].element ? 0 : av(e[1].element, t[1].element) ? -1 : 1;
}
Ae(Po, "sortByDocumentPosition");
function lv(e) {
  return new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList") {
        e();
        return;
      }
  });
}
Ae(lv, "getChildListObserver");
var WD = Object.defineProperty, zD = (e, t) => WD(e, "name", { value: t, configurable: !0 }), BD = [
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
], _t = BD.reduce((e, t) => {
  const n = /* @__PURE__ */ Ne(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function vc(e, t) {
  e && je.flushSync(() => e.dispatchEvent(t));
}
zD(vc, "dispatchDiscreteCustomEvent");
var HD = Object.defineProperty, VD = (e, t) => HD(e, "name", { value: t, configurable: !0 }), mu = c[" useInsertionEffect ".trim().toString()];
function dn(e) {
  const t = c.useRef(e);
  return typeof mu == "function" ? mu(() => {
    t.current = e;
  }) : un(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
VD(dn, "useCallbackRef");
var jD = Object.defineProperty, De = (e, t) => jD(e, "name", { value: t, configurable: !0 }), Ai = "dismissableLayer.update", UD = "dismissableLayer.pointerDownOutside", YD = "dismissableLayer.focusOutside", pu, bc = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), GD = /* @__PURE__ */ c.forwardRef(
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
    } = t, d = c.useContext(bc), [p, h] = c.useState(null), g = p?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), b = kt(n, h), w = Array.from(d.layers), [x] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), y = x ? w.indexOf(x) : -1, C = p ? w.indexOf(p) : -1, P = d.layersWithOutsidePointerEventsDisabled.size > 0, S = C >= y, E = c.useRef(!1), N = uv(
      (D) => {
        i?.(D), l?.(D), D.defaultPrevented || u?.();
      },
      {
        ownerDocument: g,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: E,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: c.useCallback(
          (D) => {
            if (!(D instanceof Node))
              return !1;
            const L = [...d.branches].some(
              (F) => F.contains(D)
            );
            return S && !L;
          },
          [d.branches, S]
        )
      }
    ), R = dv((D) => {
      if (o && E.current)
        return;
      const L = D.target;
      [...d.branches].some((z) => z.contains(L)) || (a?.(D), l?.(D), D.defaultPrevented || u?.());
    }, g), T = p ? C === w.length - 1 : !1, _ = dn((D) => {
      D.key === "Escape" && (s?.(D), !D.defaultPrevented && u && (D.preventDefault(), u()));
    });
    return c.useEffect(() => {
      if (T)
        return g.addEventListener("keydown", _, { capture: !0 }), () => g.removeEventListener("keydown", _, { capture: !0 });
    }, [g, T, _]), c.useEffect(() => {
      if (p)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (pu = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Ii(), () => {
          r && (d.layersWithOutsidePointerEventsDisabled.delete(p), d.layersWithOutsidePointerEventsDisabled.size === 0 && (g.body.style.pointerEvents = pu));
        };
    }, [p, g, r, d]), c.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Ii());
    }, [p, d]), c.useEffect(() => {
      const D = /* @__PURE__ */ De(() => v({}), "handleUpdate");
      return document.addEventListener(Ai, D), () => document.removeEventListener(Ai, D);
    }, []), /* @__PURE__ */ f(
      _t.div,
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
), KD = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ De(function(t, n) {
  const r = c.useContext(bc), o = c.useRef(null), s = kt(n, o);
  return c.useEffect(() => {
    const i = o.current;
    if (i)
      return r.branches.add(i), () => {
        r.branches.delete(i);
      };
  }, [r.branches]), /* @__PURE__ */ f(_t.div, { ...t, ref: s });
}, "DismissableLayerBranch"));
function qD() {
  const e = c.useContext(bc), [t, n] = c.useState(null);
  return c.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
De(qD, "useDismissableLayerSurface");
var XD = /* @__PURE__ */ De(() => !0, "IS_TRUE");
function uv(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = XD
  } = t, a = dn(e), l = c.useRef(!1), u = c.useRef(!1), m = c.useRef(/* @__PURE__ */ new Map()), d = c.useRef(() => {
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
          p(), S || yc(
            UD,
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
De(uv, "usePointerDownOutside");
function dv(e, t = globalThis?.document) {
  const n = dn(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = /* @__PURE__ */ De((s) => {
      s.target && !r.current && yc(YD, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ De(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ De(() => r.current = !1, "onBlurCapture")
  };
}
De(dv, "useFocusOutside");
function Ii() {
  const e = new CustomEvent(Ai);
  document.dispatchEvent(e);
}
De(Ii, "dispatchUpdate");
function yc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? vc(o, s) : o.dispatchEvent(s);
}
De(yc, "handleAndDispatchCustomEvent");
var ZD = Object.defineProperty, QD = (e, t) => ZD(e, "name", { value: t, configurable: !0 }), JD = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ QD(function(t, n) {
    const { container: r, ...o } = t, [s, i] = c.useState(!1);
    un(() => i(!0), []);
    const a = r || s && globalThis?.document?.body;
    return a ? je.createPortal(/* @__PURE__ */ f(_t.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), eM = Object.defineProperty, Gt = (e, t) => eM(e, "name", { value: t, configurable: !0 });
function fv(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
Gt(fv, "useStateMachine");
var tM = /* @__PURE__ */ Gt((e) => {
  const { present: t, children: n } = e, r = mv(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = pv(r.ref, hv(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
}, "Presence");
function mv(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = c.useRef(void 0), a = e ? "mounted" : "unmounted", [l, u] = fv(a, {
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
  }, [l]), un(() => {
    const m = r.current, d = o.current;
    if (d !== e) {
      const h = s.current, g = Kn(m);
      e ? (i.current = g, u("MOUNT")) : g === "none" || m?.display === "none" ? u("UNMOUNT") : u(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), un(() => {
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
Gt(mv, "usePresence");
function _i(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Gt(_i, "setRef");
function pv(...e) {
  const t = c.useRef(e);
  return t.current = e, c.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((i) => {
      const a = _i(i, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == "function" ? a() : _i(r[i], null);
        }
      };
  }, []);
}
Gt(pv, "useStableComposedRefs");
function Kn(e) {
  return e?.animationName || "none";
}
Gt(Kn, "getAnimationName");
function hv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Gt(hv, "getElementRef");
var nM = Object.defineProperty, rM = (e, t) => nM(e, "name", { value: t, configurable: !0 }), hu = c[" useEffectEvent ".trim().toString()], gu = c[" useInsertionEffect ".trim().toString()];
function gv(e) {
  if (typeof hu == "function")
    return hu(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof gu == "function" ? gu(() => {
    t.current = e;
  }) : un(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
rM(gv, "useEffectEvent");
var oM = Object.defineProperty, Zr = (e, t) => oM(e, "name", { value: t, configurable: !0 }), sM = c[" useInsertionEffect ".trim().toString()] || un;
function vv({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Zr(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = bv({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = yv(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
Zr(vv, "useControllableState");
function bv({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return sM(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
Zr(bv, "useUncontrolledState");
function yv(e) {
  return typeof e == "function";
}
Zr(yv, "isFunction");
var vu = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function iM(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = gv(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === vu)
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
    l && !Object.is(o, d.state) && p({ type: vu, state: o });
  }, [o, d.state, l]), [v, p];
}
Zr(iM, "useControllableStateReducer");
var aM = Object.defineProperty, cM = (e, t) => aM(e, "name", { value: t, configurable: !0 }), lM = Object.freeze({
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
}), wv = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ cM(function(t, n) {
    return /* @__PURE__ */ f(
      _t.span,
      {
        ...t,
        ref: n,
        style: { ...lM, ...t.style }
      }
    );
  }, "VisuallyHidden")
), uM = Object.defineProperty, he = (e, t) => uM(e, "name", { value: t, configurable: !0 }), bu = c[" startTransition ".trim().toString()] || (() => {
}), xv = "ToastProvider", [wc, Cv, dM] = /* @__PURE__ */ ov("Toast"), $i = {
  Left: "left",
  Right: "right"
}, yu = {
  Foreground: "foreground"
}, [Sv, oI] = /* @__PURE__ */ ys("Toast", [dM]), [fM, ws] = Sv(xv);
function No(e) {
  typeof bu == "function" ? bu(e) : e();
}
he(No, "scheduleUpdate");
var mM = /* @__PURE__ */ he((e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = $i.Right,
    swipeThreshold: s = 50,
    announcerContainer: i,
    children: a
  } = e, [l, u] = c.useState(null), [m, d] = c.useState(0), p = c.useRef(!1), h = c.useCallback((b) => {
    No(() => u(b));
  }, []), g = c.useCallback(() => {
    No(() => d((b) => b + 1));
  }, []), v = c.useCallback(() => {
    No(() => d((b) => b - 1));
  }, []);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${xv}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ f(wc.Provider, { scope: t, children: /* @__PURE__ */ f(
    fM,
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
}, "ToastProvider"), pM = "ToastViewport", hM = ["F8"], Fi = "toast.viewportPause", Li = "toast.viewportResume", gM = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const {
      __scopeToast: r,
      hotkey: o = hM,
      label: s = "Notifications ({hotkey})",
      ...i
    } = t, a = ws(pM, r), l = Cv(r), u = c.useRef(null), m = c.useRef(null), d = c.useRef(null), p = c.useRef(null), h = kt(n, p, a.onViewportChange), g = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = a.toastCount > 0;
    c.useEffect(() => {
      const w = /* @__PURE__ */ he((x) => {
        o.length !== 0 && o.every((C) => x[C] || x.code === C) && p.current?.focus();
      }, "handleKeyDown");
      return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
    }, [o]), c.useEffect(() => {
      const w = u.current, x = p.current;
      if (v && w && x) {
        const y = /* @__PURE__ */ he(() => {
          if (!a.isClosePausedRef.current) {
            const E = new CustomEvent(Fi);
            x.dispatchEvent(E), a.isClosePausedRef.current = !0;
          }
        }, "handlePause"), C = /* @__PURE__ */ he(() => {
          if (a.isClosePausedRef.current) {
            const E = new CustomEvent(Li);
            x.dispatchEvent(E), a.isClosePausedRef.current = !1;
          }
        }, "handleResume"), P = /* @__PURE__ */ he((E) => {
          !w.contains(E.relatedTarget) && C();
        }, "handleFocusOutResume"), S = /* @__PURE__ */ he(() => {
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
          const P = C.ref.current, S = [P, ...Rv(P)];
          return w === "forwards" ? S : S.reverse();
        });
        return (w === "forwards" ? y.reverse() : y).flat();
      },
      [l]
    );
    return c.useEffect(() => {
      const w = p.current;
      if (w) {
        const x = /* @__PURE__ */ he((y) => {
          const C = y.altKey || y.ctrlKey || y.metaKey;
          if (y.key === "Tab" && !C) {
            const S = document.activeElement, E = y.shiftKey;
            if (y.target === w && E) {
              m.current?.focus();
              return;
            }
            const T = b({ tabbingDirection: E ? "backwards" : "forwards" }), _ = T.findIndex((D) => D === S);
            Oo(T.slice(_ + 1)) ? y.preventDefault() : E ? m.current?.focus() : d.current?.focus();
          }
        }, "handleKeyDown");
        return w.addEventListener("keydown", x), () => w.removeEventListener("keydown", x);
      }
    }, [l, b]), /* @__PURE__ */ k(
      KD,
      {
        ref: u,
        role: "region",
        "aria-label": s.replace("{hotkey}", g),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v && /* @__PURE__ */ f(
            wu,
            {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const w = b({
                  tabbingDirection: "forwards"
                });
                Oo(w);
              }
            }
          ),
          /* @__PURE__ */ f(wc.Slot, { scope: r, children: /* @__PURE__ */ f(_t.ol, { tabIndex: -1, ...i, ref: h }) }),
          v && /* @__PURE__ */ f(
            wu,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = b({
                  tabbingDirection: "backwards"
                });
                Oo(w);
              }
            }
          )
        ]
      }
    );
  }, "ToastViewport")
), vM = "ToastFocusProxy", wu = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ he(function(t, n) {
    const { __scopeToast: r, onFocusFromOutsideViewport: o, ...s } = t, i = ws(vM, r);
    return /* @__PURE__ */ f(
      wv,
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
), xs = "Toast", bM = "toast.swipeStart", yM = "toast.swipeMove", wM = "toast.swipeCancel", xM = "toast.swipeEnd", CM = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ he(function(t, n) {
    const { forceMount: r, open: o, defaultOpen: s, onOpenChange: i, ...a } = t, [l, u] = vv({
      prop: o,
      defaultProp: s ?? !0,
      onChange: i,
      caller: xs
    });
    return /* @__PURE__ */ f(tM, { present: r || l, children: /* @__PURE__ */ f(
      PM,
      {
        open: l,
        ...a,
        ref: n,
        onClose: () => u(!1),
        onPause: dn(t.onPause),
        onResume: dn(t.onResume),
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
), [SM, EM] = Sv(xs, {
  onClose() {
  }
}), PM = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const {
      __scopeToast: r,
      type: o = yu.Foreground,
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
    } = t, b = ws(xs, r), w = Cv(r), [x, y] = c.useState(null), C = kt(n, y), P = c.useRef(null), S = c.useRef(null), E = s || b.duration, N = c.useRef(0), R = c.useRef(E), T = c.useRef(0), { onToastAdd: _, onToastRemove: D } = b, L = dn(() => {
      x?.contains(document.activeElement) && b.viewport?.focus(), a();
    }), F = c.useCallback(
      (A) => {
        !A || A === 1 / 0 || (window.clearTimeout(T.current), N.current = (/* @__PURE__ */ new Date()).getTime(), T.current = window.setTimeout(L, A));
      },
      [L]
    );
    c.useEffect(() => {
      const A = b.viewport;
      if (A) {
        const W = /* @__PURE__ */ he(() => {
          F(R.current), m?.();
        }, "handleResume"), M = /* @__PURE__ */ he(() => {
          const $ = (/* @__PURE__ */ new Date()).getTime() - N.current;
          R.current = R.current - $, window.clearTimeout(T.current), u?.();
        }, "handlePause");
        return A.addEventListener(Fi, M), A.addEventListener(Li, W), () => {
          A.removeEventListener(Fi, M), A.removeEventListener(Li, W);
        };
      }
    }, [b.viewport, E, u, m, F]), c.useEffect(() => {
      R.current = E, i && !b.isClosePausedRef.current && F(E);
    }, [i, E, b.isClosePausedRef, F]), c.useEffect(() => () => {
      window.clearTimeout(T.current);
    }, []), c.useEffect(() => (_(), () => D()), [_, D]);
    const z = c.useMemo(() => x ? xc(x) : null, [x]);
    return b.viewport ? /* @__PURE__ */ k(Ve, { children: [
      z && /* @__PURE__ */ f(
        NM,
        {
          __scopeToast: r,
          role: "status",
          "aria-live": o === yu.Foreground ? "assertive" : "polite",
          children: z
        }
      ),
      /* @__PURE__ */ f(SM, { scope: r, onClose: L, children: je.createPortal(
        /* @__PURE__ */ f(wc.ItemSlot, { scope: r, children: /* @__PURE__ */ f(
          GD,
          {
            asChild: !0,
            onEscapeKeyDown: He(l, (A) => {
              w().some(
                (M) => M.ref.current?.contains(A.target)
              ) || L();
            }),
            children: /* @__PURE__ */ f(
              _t.li,
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
                  const W = A.clientX - P.current.x, M = A.clientY - P.current.y, $ = !!S.current, O = ["left", "right"].includes(b.swipeDirection), B = ["left", "up"].includes(b.swipeDirection) ? Math.min : Math.max, J = O ? B(0, W) : 0, oe = O ? 0 : B(0, M), ye = A.pointerType === "touch" ? 10 : 2, ee = { x: J, y: oe }, H = { originalEvent: A, delta: ee };
                  $ ? (S.current = ee, Nr(yM, p, H, {
                    discrete: !1
                  })) : xu(ee, b.swipeDirection, ye) ? (S.current = ee, Nr(bM, d, H, {
                    discrete: !1
                  }), A.target.setPointerCapture(A.pointerId)) : (Math.abs(W) > ye || Math.abs(M) > ye) && (P.current = null);
                }),
                onPointerUp: He(t.onPointerUp, (A) => {
                  const W = S.current, M = A.target;
                  if (M.hasPointerCapture(A.pointerId) && M.releasePointerCapture(A.pointerId), S.current = null, P.current = null, W) {
                    const $ = A.currentTarget, O = { originalEvent: A, delta: W };
                    xu(W, b.swipeDirection, b.swipeThreshold) ? Nr(xM, g, O, {
                      discrete: !0
                    }) : Nr(
                      wM,
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
), NM = /* @__PURE__ */ he((e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = ws(xs, t), [s, i] = c.useState(!1), [a, l] = c.useState(!1);
  return Nv(() => i(!0)), c.useEffect(() => {
    const u = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(u);
  }, []), a ? null : /* @__PURE__ */ f(JD, { asChild: !0, container: o.announcerContainer || void 0, children: /* @__PURE__ */ f(wv, { ...r, children: s && /* @__PURE__ */ k(Ve, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, "ToastAnnounce"), OM = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const { __scopeToast: r, ...o } = t;
    return /* @__PURE__ */ f(_t.div, { ...o, ref: n });
  }, "ToastTitle")
), RM = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ he(function(t, n) {
    const { __scopeToast: r, ...o } = t;
    return /* @__PURE__ */ f(_t.div, { ...o, ref: n });
  }, "ToastDescription")
), kM = "ToastAction", DM = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const { altText: r, ...o } = t;
    return r.trim() ? /* @__PURE__ */ f(Pv, { altText: r, asChild: !0, children: /* @__PURE__ */ f(Ev, { ...o, ref: n }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${kM}\`. Expected non-empty \`string\`.`
    ), null);
  }, "ToastAction")
), MM = "ToastClose", Ev = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ he(function(t, n) {
    const { __scopeToast: r, ...o } = t, s = EM(MM, r);
    return /* @__PURE__ */ f(Pv, { asChild: !0, children: /* @__PURE__ */ f(
      _t.button,
      {
        type: "button",
        ...o,
        ref: n,
        onClick: He(t.onClick, s.onClose)
      }
    ) });
  }, "ToastClose")
), Pv = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ he(function(t, n) {
  const { __scopeToast: r, altText: o, ...s } = t;
  return /* @__PURE__ */ f(
    _t.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": o || void 0,
      ...s,
      ref: n
    }
  );
}, "ToastAnnounceExclude"));
function xc(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Ov(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const i = r.dataset.radixToastAnnounceAlt;
          i && t.push(i);
        } else
          t.push(...xc(r));
    }
  }), t;
}
he(xc, "getAnnounceTextContent");
function Nr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? vc(o, s) : o.dispatchEvent(s);
}
he(Nr, "handleAndDispatchCustomEvent");
var xu = /* @__PURE__ */ he((e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === $i.Left || t === $i.Right ? s && r > n : !s && o > n;
}, "isDeltaInDirection");
function Nv(e = () => {
}) {
  const t = dn(e);
  un(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
he(Nv, "useNextFrame");
function Ov(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
he(Ov, "isHTMLElement");
function Rv(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ he((r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
he(Rv, "getTabbableCandidates");
function Oo(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
he(Oo, "focusFirst");
const TM = 5e3, AM = 5;
function IM(e) {
  return e === void 0 ? TM : e === null || !Number.isFinite(e) || e <= 0 ? null : e;
}
function _M(e) {
  return e === "error" || e === "warning" ? "assertive" : "polite";
}
function $M(e = AM) {
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
        duration: IM(s.duration),
        action: s.action
      }, l = t.filter((u) => u.id !== i);
      return o([...l, a].slice(-e)), i;
    },
    dismiss(s) {
      o(s === void 0 ? [] : t.filter((i) => i.id !== s));
    }
  };
}
const Dt = $M();
function Qr(e) {
  return Dt.add(e);
}
Qr.success = (e, t) => Dt.add({ ...t, title: e, variant: "success" });
Qr.error = (e, t) => Dt.add({ ...t, title: e, variant: "error" });
Qr.warning = (e, t) => Dt.add({ ...t, title: e, variant: "warning" });
Qr.info = (e, t) => Dt.add({ ...t, title: e, variant: "info" });
function FM(e) {
  Dt.dismiss(e);
}
function LM() {
  return { toasts: c.useSyncExternalStore(
    Dt.subscribe,
    Dt.getSnapshot,
    Dt.getSnapshot
  ), toast: Qr, dismiss: FM };
}
const WM = {
  neutral: "bg-surface border-border text-text-base",
  info: "bg-info-bg border-info-border text-info-fg",
  success: "bg-success-bg border-success-border text-success-fg",
  warning: "bg-warning-bg border-warning-border text-warning-fg",
  error: "bg-error-bg border-error-border text-error-fg"
}, zM = {
  neutral: null,
  info: ni,
  success: Id,
  warning: Dd,
  error: zd
};
function BM({ item: e }) {
  const t = zM[e.variant];
  return /* @__PURE__ */ k(
    CM,
    {
      type: _M(e.variant) === "assertive" ? "foreground" : "background",
      duration: e.duration ?? 1 / 0,
      onOpenChange: (n) => {
        n || Dt.dismiss(e.id);
      },
      className: I(
        "flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm shadow-lg",
        WM[e.variant]
      ),
      children: [
        t && /* @__PURE__ */ f(t, { className: "mt-0.5 h-4 w-4 shrink-0" }),
        /* @__PURE__ */ k("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ f(OM, { className: "font-medium", children: e.title }),
          e.description && /* @__PURE__ */ f(RM, { className: "mt-0.5 text-xs opacity-90", children: e.description })
        ] }),
        e.action && /* @__PURE__ */ f(DM, { altText: e.action.label, asChild: !0, children: /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: e.action.onClick,
            className: "shrink-0 rounded-md px-2 py-1 text-xs font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            children: e.action.label
          }
        ) }),
        /* @__PURE__ */ f(Ev, { asChild: !0, children: /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            "aria-label": "Chiudi notifica",
            className: "shrink-0 rounded-sm opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            children: /* @__PURE__ */ f(ar, { className: "h-4 w-4" })
          }
        ) })
      ]
    }
  );
}
function sI({ label: e = "Notifiche ({hotkey})", className: t }) {
  const { toasts: n } = LM();
  return /* @__PURE__ */ k(mM, { label: e, swipeDirection: "right", children: [
    n.map((r) => /* @__PURE__ */ f(BM, { item: r }, r.id)),
    /* @__PURE__ */ f(
      gM,
      {
        className: I(
          "fixed bottom-4 right-4 z-[10000] m-0 flex w-[360px] max-w-[calc(100vw-2rem)] list-none flex-col gap-2 p-0 outline-none",
          t
        )
      }
    )
  ] });
}
var HM = Object.defineProperty, vr = (e, t) => HM(e, "name", { value: t, configurable: !0 }), kv = !!(typeof window < "u" && window.document && window.document.createElement);
function Ct(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ vr(function(o) {
    if (e?.(o), n === !1 || !o || !o.defaultPrevented)
      return t?.(o);
  }, "handleEvent");
}
vr(Ct, "composeEventHandlers");
function VM(e) {
  if (!kv)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
vr(VM, "getOwnerWindow");
function Wi(e) {
  if (!kv)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
vr(Wi, "getOwnerDocument");
function Dv(e, t = !1) {
  const { activeElement: n } = Wi(e);
  if (!n?.nodeName)
    return null;
  if (Mv(n) && n.contentDocument)
    return Dv(n.contentDocument.body, t);
  if (t) {
    const r = n.getAttribute("aria-activedescendant");
    if (r) {
      const o = Wi(n).getElementById(r);
      if (o)
        return o;
    }
  }
  return n;
}
vr(Dv, "getActiveElement");
function Mv(e) {
  return e.tagName === "IFRAME";
}
vr(Mv, "isFrame");
var jM = Object.defineProperty, Cc = (e, t) => jM(e, "name", { value: t, configurable: !0 });
function zi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Cc(zi, "setRef");
function Tv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = zi(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : zi(e[o], null);
        }
      };
  };
}
Cc(Tv, "composeRefs");
function Fn(...e) {
  return c.useCallback(Tv(...e), e);
}
Cc(Fn, "useComposedRefs");
var UM = Object.defineProperty, lt = (e, t) => UM(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function YM(e, t) {
  const n = c.createContext(t);
  n.displayName = e + "Context";
  const r = /* @__PURE__ */ lt((s) => {
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
  return lt(o, "useContext"), [r, o];
}
lt(YM, "createContext");
// @__NO_SIDE_EFFECTS__
function Sc(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = c.createContext(i);
    a.displayName = s + "Context";
    const l = n.length;
    n = [...n, i];
    const u = /* @__PURE__ */ lt((d) => {
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
    return lt(m, "useContext"), [u, m];
  }
  lt(r, "createContext");
  const o = /* @__PURE__ */ lt(() => {
    const s = n.map((i) => c.createContext(i));
    return /* @__PURE__ */ lt(function(a) {
      const l = a?.[e] || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e, [r, Av(o, ...t)];
}
lt(Sc, "createContextScope");
function Av(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ lt(() => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return /* @__PURE__ */ lt(function(s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
lt(Av, "composeContextScopes");
var GM = Object.defineProperty, KM = (e, t) => GM(e, "name", { value: t, configurable: !0 }), qM = [
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
], br = qM.reduce((e, t) => {
  const n = /* @__PURE__ */ Ne(`Primitive.${t}`), r = c.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Iv(e, t) {
  e && je.flushSync(() => e.dispatchEvent(t));
}
KM(Iv, "dispatchDiscreteCustomEvent");
var ut = globalThis?.document ? c.useLayoutEffect : () => {
}, XM = Object.defineProperty, ZM = (e, t) => XM(e, "name", { value: t, configurable: !0 }), Cu = c[" useInsertionEffect ".trim().toString()];
function Jr(e) {
  const t = c.useRef(e);
  return typeof Cu == "function" ? Cu(() => {
    t.current = e;
  }) : ut(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
ZM(Jr, "useCallbackRef");
var QM = Object.defineProperty, $e = (e, t) => QM(e, "name", { value: t, configurable: !0 }), Bi = "dismissableLayer.update", JM = "dismissableLayer.pointerDownOutside", eT = "dismissableLayer.focusOutside", Su, _v = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), tT = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ $e(function(t, n) {
    const {
      disableOutsidePointerEvents: r = !1,
      deferPointerDownOutside: o = !1,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: u,
      ...m
    } = t, d = c.useContext(_v), [p, h] = c.useState(null), g = p?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), b = Fn(n, h), w = Array.from(d.layers), [x] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), y = x ? w.indexOf(x) : -1, C = p ? w.indexOf(p) : -1, P = d.layersWithOutsidePointerEventsDisabled.size > 0, S = C >= y, E = c.useRef(!1), N = $v(
      (D) => {
        i?.(D), l?.(D), D.defaultPrevented || u?.();
      },
      {
        ownerDocument: g,
        deferPointerDownOutside: o,
        isDeferredPointerDownOutsideRef: E,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: c.useCallback(
          (D) => {
            if (!(D instanceof Node))
              return !1;
            const L = [...d.branches].some(
              (F) => F.contains(D)
            );
            return S && !L;
          },
          [d.branches, S]
        )
      }
    ), R = Fv((D) => {
      if (o && E.current)
        return;
      const L = D.target;
      [...d.branches].some((z) => z.contains(L)) || (a?.(D), l?.(D), D.defaultPrevented || u?.());
    }, g), T = p ? C === w.length - 1 : !1, _ = Jr((D) => {
      D.key === "Escape" && (s?.(D), !D.defaultPrevented && u && (D.preventDefault(), u()));
    });
    return c.useEffect(() => {
      if (T)
        return g.addEventListener("keydown", _, { capture: !0 }), () => g.removeEventListener("keydown", _, { capture: !0 });
    }, [g, T, _]), c.useEffect(() => {
      if (p)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Su = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Hi(), () => {
          r && (d.layersWithOutsidePointerEventsDisabled.delete(p), d.layersWithOutsidePointerEventsDisabled.size === 0 && (g.body.style.pointerEvents = Su));
        };
    }, [p, g, r, d]), c.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Hi());
    }, [p, d]), c.useEffect(() => {
      const D = /* @__PURE__ */ $e(() => v({}), "handleUpdate");
      return document.addEventListener(Bi, D), () => document.removeEventListener(Bi, D);
    }, []), /* @__PURE__ */ f(
      br.div,
      {
        ...m,
        ref: b,
        style: {
          pointerEvents: P ? S ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: Ct(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: Ct(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: Ct(
          t.onPointerDownCapture,
          N.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function nT() {
  const e = c.useContext(_v), [t, n] = c.useState(null);
  return c.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
$e(nT, "useDismissableLayerSurface");
var rT = /* @__PURE__ */ $e(() => !0, "IS_TRUE");
function $v(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: r = !1,
    isDeferredPointerDownOutsideRef: o,
    dismissableSurfaces: s,
    shouldHandlePointerDownOutside: i = rT
  } = t, a = Jr(e), l = c.useRef(!1), u = c.useRef(!1), m = c.useRef(/* @__PURE__ */ new Map()), d = c.useRef(() => {
  });
  return c.useEffect(() => {
    function p() {
      u.current = !1, o.current = !1, m.current.clear();
    }
    $e(p, "resetOutsideInteraction");
    function h() {
      return Array.from(m.current.values()).some(Boolean);
    }
    $e(h, "isOutsideInteractionIntercepted");
    function g(y) {
      if (!u.current)
        return;
      const C = y.target;
      C instanceof Node && [...s].some((S) => S.contains(C)) || m.current.set(y.type, !0), y.type === "click" && window.setTimeout(() => {
        u.current && d.current();
      }, 0);
    }
    $e(g, "handleInteractionCapture");
    function v(y) {
      u.current && m.current.set(y.type, !1);
    }
    $e(v, "handleInteractionBubble");
    const b = /* @__PURE__ */ $e((y) => {
      if (y.target && !l.current) {
        let C = function() {
          n.removeEventListener("click", d.current);
          const S = h();
          p(), S || Ec(
            JM,
            a,
            P,
            { discrete: !0 }
          );
        };
        if ($e(C, "handleAndDispatchPointerDownOutsideEvent"), !i(y.target)) {
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
    onPointerDownCapture: /* @__PURE__ */ $e(() => l.current = !0, "onPointerDownCapture")
  };
}
$e($v, "usePointerDownOutside");
function Fv(e, t = globalThis?.document) {
  const n = Jr(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = /* @__PURE__ */ $e((s) => {
      s.target && !r.current && Ec(eT, n, { originalEvent: s }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ $e(() => r.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ $e(() => r.current = !1, "onBlurCapture")
  };
}
$e(Fv, "useFocusOutside");
function Hi() {
  const e = new CustomEvent(Bi);
  document.dispatchEvent(e);
}
$e(Hi, "dispatchUpdate");
function Ec(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Iv(o, s) : o.dispatchEvent(s);
}
$e(Ec, "handleAndDispatchCustomEvent");
var oT = Object.defineProperty, We = (e, t) => oT(e, "name", { value: t, configurable: !0 }), Lv = c.createContext(null);
function sT({ registry: e, children: t }) {
  return e ? /* @__PURE__ */ f(Lv.Provider, { value: e, children: t }) : t;
}
We(sT, "FocusScopeBranchProvider");
function iT() {
  const [e, t] = c.useState([]), n = c.useMemo(
    () => ({
      add: /* @__PURE__ */ We((r) => t((o) => o.includes(r) ? o : [...o, r]), "add"),
      remove: /* @__PURE__ */ We((r) => t((o) => o.filter((s) => s !== r)), "remove")
    }),
    []
  );
  return { nodes: e, registry: n };
}
We(iT, "useFocusScopeBranchRegistry");
function Wv(e) {
  const t = c.useContext(Lv);
  c.useEffect(() => {
    if (!(!e || !t))
      return t.add(e), () => t.remove(e);
  }, [e, t]);
}
We(Wv, "useFocusScopeBranch");
function aT(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Vv(r, { select: t }), document.activeElement !== n) return;
}
We(aT, "focusFirst");
function cT(e) {
  const t = zv(e), n = Vi(t, e), r = Vi(t.reverse(), e);
  return [n, r];
}
We(cT, "getTabbableEdges");
function zv(e) {
  const t = [], r = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ We((o) => {
      const s = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
We(zv, "getTabbableCandidates");
function Vi(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const r of e)
    if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Bv(r, { upTo: t })))
      return r;
}
We(Vi, "findVisible");
function Bv(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
We(Bv, "isHidden");
function Hv(e) {
  return e.tagName === "INPUT" && typeof e.select == "function";
}
We(Hv, "isSelectableInput");
function Vv(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = (e.ownerDocument ?? document).activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Hv(e) && t && e.select();
  }
}
We(Vv, "focus");
function lT() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = ji(e, t), e.unshift(t);
    },
    remove(t) {
      e = ji(e, t), e[0]?.resume();
    }
  };
}
We(lT, "createFocusScopesStack");
function ji(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
We(ji, "arrayRemove");
function uT(e) {
  return e.filter((t) => t.tagName !== "A");
}
We(uT, "removeLinks");
var dT = Object.defineProperty, fT = (e, t) => dT(e, "name", { value: t, configurable: !0 }), mT = c[" useId ".trim().toString()] || (() => {
}), pT = 0;
function jv(e) {
  const [t, n] = c.useState(mT());
  return ut(() => {
    e || n((r) => r ?? String(pT++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
fT(jv, "useId");
var hT = Object.defineProperty, gT = (e, t) => hT(e, "name", { value: t, configurable: !0 });
function Uv(e) {
  const [t, n] = c.useState(void 0);
  return ut(() => {
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
gT(Uv, "useSize");
var vT = Object.defineProperty, sn = (e, t) => vT(e, "name", { value: t, configurable: !0 }), Eu = {
  Partial: "partial"
}, Pu = {
  Optimized: "optimized",
  Always: "always"
}, Yv = "Popper", [Gv, Kv] = /* @__PURE__ */ Sc(Yv), [bT, qv] = Gv(Yv), yT = /* @__PURE__ */ sn((e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null), [s, i] = c.useState(void 0);
  return /* @__PURE__ */ f(
    bT,
    {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      placementState: s,
      setPlacementState: i,
      children: n
    }
  );
}, "Popper"), wT = "PopperAnchor", xT = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ sn(function(t, n) {
    const { __scopePopper: r, virtualRef: o, ...s } = t, i = qv(wT, r), a = c.useRef(null), l = i.onAnchorChange, u = c.useCallback(
      (v) => {
        a.current = v, v && l(v);
      },
      [l]
    ), m = Fn(n, u), d = c.useRef(null);
    c.useEffect(() => {
      if (!o)
        return;
      const v = d.current;
      d.current = o.current, v !== d.current && l(d.current);
    });
    const p = i.placementState && Cs(i.placementState), h = p?.[0], g = p?.[1];
    return o ? null : /* @__PURE__ */ f(
      br.div,
      {
        "data-radix-popper-side": h,
        "data-radix-popper-align": g,
        ...s,
        ref: m
      }
    );
  }, "PopperAnchor")
), Xv = "PopperContent", [CT, iI] = Gv(Xv), ST = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ sn(function(t, n) {
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
      sticky: p = Eu.Partial,
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = Pu.Optimized,
      onPlaced: v,
      ...b
    } = t, w = qv(Xv, r), [x, y] = c.useState(null), C = Fn(n, y), [P, S] = c.useState(null), E = Uv(P), N = E?.width ?? 0, R = E?.height ?? 0, T = o + (i !== "center" ? "-" + i : ""), _ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, D = Array.isArray(m) ? m : [m], L = D.length > 0, F = {
      padding: _,
      boundary: D.filter(Zv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: z, floatingStyles: A, placement: W, isPositioned: M, middlewareData: $ } = Ca({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: /* @__PURE__ */ sn((...K) => xa(...K, {
        animationFrame: g === Pu.Always
      }), "whileElementsMounted"),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Sa({ mainAxis: s + R, alignmentAxis: a }),
        u && Ea({
          mainAxis: !0,
          crossAxis: !1,
          // Spread rather than passing `limiter: undefined`, which
          // `exactOptionalPropertyTypes` rejects for Floating UI's optional option.
          ...p === Eu.Partial ? { limiter: Pa() } : {},
          ...F
        }),
        u && Na({ ...F }),
        Oa({
          ...F,
          apply: /* @__PURE__ */ sn(({ elements: K, rects: te, availableWidth: ie, availableHeight: ce }) => {
            const { width: pe, height: we } = te.reference, be = K.floating.style;
            be.setProperty("--radix-popper-available-width", `${ie}px`), be.setProperty("--radix-popper-available-height", `${ce}px`), be.setProperty("--radix-popper-anchor-width", `${pe}px`), be.setProperty("--radix-popper-anchor-height", `${we}px`);
          }, "apply")
        }),
        P && ka({ element: P, padding: l }),
        ET({ arrowWidth: N, arrowHeight: R }),
        h && // `hide` detects whether the anchor (reference) is clipped, so when
        // no explicit `collisionBoundary` is set we omit `boundary` entirely
        // and fall back to Floating UI's default clipping ancestors (e.g. a
        // scrollable menu). This lets an occluded submenu hide once its anchor
        // scrolls out of view (#3237). The collision/size middlewares
        // deliberately keep the viewport-based default to avoid clamping
        // content rendered inside transformed or overflow-clipping portal
        // containers. The key is omitted rather than set to `undefined`
        // because `exactOptionalPropertyTypes` rejects the explicit value.
        Ra(
          L ? { strategy: "referenceHidden", ...F } : {
            strategy: "referenceHidden",
            padding: F.padding,
            altBoundary: F.altBoundary
          }
        )
      ]
    }), O = w.setPlacementState;
    ut(() => (O(W), () => {
      O(void 0);
    }), [W, O]);
    const [B, J] = Cs(W), oe = Jr(v);
    ut(() => {
      M && oe?.();
    }, [M, oe]);
    const ye = $.arrow?.x, ee = $.arrow?.y, H = $.arrow?.centerOffset !== 0, [j, se] = c.useState();
    return ut(() => {
      x && se(window.getComputedStyle(x).zIndex);
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
          CT,
          {
            scope: r,
            placedSide: B,
            placedAlign: J,
            onArrowChange: S,
            arrowX: ye,
            arrowY: ee,
            shouldHideArrow: H,
            children: /* @__PURE__ */ f(
              br.div,
              {
                "data-side": B,
                "data-align": J,
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
function Zv(e) {
  return e !== null;
}
sn(Zv, "isNotNull");
var ET = /* @__PURE__ */ sn((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, i = o.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, m] = Cs(n), d = { start: "0%", center: "50%", end: "100%" }[m], p = (o.arrow?.x ?? 0) + a / 2, h = (o.arrow?.y ?? 0) + l / 2;
    let g = "", v = "";
    return u === "bottom" ? (g = i ? d : `${p}px`, v = `${-l}px`) : u === "top" ? (g = i ? d : `${p}px`, v = `${r.floating.height + l}px`) : u === "right" ? (g = `${-l}px`, v = i ? d : `${h}px`) : u === "left" && (g = `${r.floating.width + l}px`, v = i ? d : `${h}px`), { data: { x: g, y: v } };
  }
}), "transformOrigin");
function Cs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
sn(Cs, "getSideAndAlignFromPlacement");
var PT = Object.defineProperty, NT = (e, t) => PT(e, "name", { value: t, configurable: !0 }), OT = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ NT(function(t, n) {
    const { container: r, ...o } = t, [s, i] = c.useState(!1);
    ut(() => i(!0), []);
    const a = r || s && globalThis?.document?.body;
    return a ? je.createPortal(/* @__PURE__ */ f(br.div, { ...o, ref: n }), a) : null;
  }, "Portal")
), RT = Object.defineProperty, Kt = (e, t) => RT(e, "name", { value: t, configurable: !0 });
function Qv(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
Kt(Qv, "useStateMachine");
var Jv = /* @__PURE__ */ Kt((e) => {
  const { present: t, children: n } = e, r = eb(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), s = tb(r.ref, nb(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: s }) : null;
}, "Presence");
function eb(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), s = c.useRef("none"), i = c.useRef(void 0), a = e ? "mounted" : "unmounted", [l, u] = Qv(a, {
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
    l === "mounted" ? (s.current = i.current ?? qn(r.current), i.current = void 0) : s.current = "none";
  }, [l]), ut(() => {
    const m = r.current, d = o.current;
    if (d !== e) {
      const h = s.current, g = qn(m);
      e ? (i.current = g, u("MOUNT")) : g === "none" || m?.display === "none" ? u("UNMOUNT") : u(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), ut(() => {
    if (t) {
      let m;
      const d = t.ownerDocument.defaultView ?? window, p = /* @__PURE__ */ Kt((g) => {
        const b = qn(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && b && (u("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, "handleAnimationEnd"), h = /* @__PURE__ */ Kt((g) => {
        g.target === t && (s.current = qn(r.current));
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
        r.current = d, i.current = qn(d);
      } else
        r.current = null;
      n(m);
    }, [])
  };
}
Kt(eb, "usePresence");
function Ui(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Kt(Ui, "setRef");
function tb(...e) {
  const t = c.useRef(e);
  return t.current = e, c.useCallback((n) => {
    const r = t.current;
    let o = !1;
    const s = r.map((i) => {
      const a = Ui(i, n);
      return !o && typeof a == "function" && (o = !0), a;
    });
    if (o)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const a = s[i];
          typeof a == "function" ? a() : Ui(r[i], null);
        }
      };
  }, []);
}
Kt(tb, "useStableComposedRefs");
function qn(e) {
  return e?.animationName || "none";
}
Kt(qn, "getAnimationName");
function nb(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Kt(nb, "getElementRef");
var kT = Object.defineProperty, DT = (e, t) => kT(e, "name", { value: t, configurable: !0 }), Nu = c[" useEffectEvent ".trim().toString()], Ou = c[" useInsertionEffect ".trim().toString()];
function rb(e) {
  if (typeof Nu == "function")
    return Nu(e);
  const t = c.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof Ou == "function" ? Ou(() => {
    t.current = e;
  }) : ut(() => {
    t.current = e;
  }), c.useMemo(() => ((...n) => t.current?.(...n)), []);
}
DT(rb, "useEffectEvent");
var MT = Object.defineProperty, eo = (e, t) => MT(e, "name", { value: t, configurable: !0 }), TT = c[" useInsertionEffect ".trim().toString()] || ut;
function ob({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ eo(() => {
  }, "onChange"),
  caller: r
}) {
  const [o, s, i] = sb({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : o, u = c.useCallback(
    (m) => {
      if (a) {
        const d = ib(m) ? m(e) : m;
        d !== e && i.current?.(d);
      } else
        s(m);
    },
    [a, e, s, i]
  );
  return [l, u];
}
eo(ob, "useControllableState");
function sb({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), s = c.useRef(t);
  return TT(() => {
    s.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
eo(sb, "useUncontrolledState");
function ib(e) {
  return typeof e == "function";
}
eo(ib, "isFunction");
var Ru = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function AT(e, t, n, r) {
  const { prop: o, defaultProp: s, onChange: i, caller: a } = t, l = o !== void 0, u = rb(i), m = [{ ...n, state: s }];
  r && m.push(r);
  const [d, p] = c.useReducer(
    (b, w) => {
      if (w.type === Ru)
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
    l && !Object.is(o, d.state) && p({ type: Ru, state: o });
  }, [o, d.state, l]), [v, p];
}
eo(AT, "useControllableStateReducer");
var IT = Object.defineProperty, _T = (e, t) => IT(e, "name", { value: t, configurable: !0 }), $T = Object.freeze({
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
}), FT = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ _T(function(t, n) {
    return /* @__PURE__ */ f(
      br.span,
      {
        ...t,
        ref: n,
        style: { ...$T, ...t.style }
      }
    );
  }, "VisuallyHidden")
), LT = Object.defineProperty, Ie = (e, t) => LT(e, "name", { value: t, configurable: !0 }), [Pc, aI] = /* @__PURE__ */ Sc("Tooltip", [
  Kv
]), Nc = Kv(), WT = "TooltipProvider", zT = 700, Yi = "tooltip.open", [BT, Oc] = Pc(WT), HT = /* @__PURE__ */ Ie((e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = zT,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, i = c.useRef(!0), a = c.useRef(!1), l = c.useRef(0);
  return c.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ f(
    BT,
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
}, "TooltipProvider"), Gi = "Tooltip", [VT, to] = Pc(Gi), jT = /* @__PURE__ */ Ie((e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, l = Oc(Gi, e.__scopeTooltip), u = Nc(t), [m, d] = c.useState(null), [p, h] = c.useState(void 0), g = jv(), v = c.useRef(0), b = i ?? l.disableHoverableContent, w = a ?? l.delayDuration, x = c.useRef(!1), [y, C] = ob({
    prop: r,
    defaultProp: o ?? !1,
    onChange: /* @__PURE__ */ Ie((T) => {
      T ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Yi))) : l.onClose(), s?.(T);
    }, "onChange"),
    caller: Gi
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
  }, []), /* @__PURE__ */ f(yT, { ...u, children: /* @__PURE__ */ f(
    VT,
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
}, "Tooltip"), ku = "TooltipTrigger", UT = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Ie(function(t, n) {
    const { __scopeTooltip: r, "aria-describedby": o, ...s } = t, i = to(ku, r), a = Oc(ku, r), l = Nc(r), u = c.useRef(null), m = Fn(n, u, i.onTriggerChange), d = c.useRef(!1), p = c.useRef(!1), h = c.useCallback(() => d.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ f(xT, { asChild: !0, ...l, children: /* @__PURE__ */ f(
      br.button,
      {
        "aria-describedby": i.open ? hb(o, i.contentId) : o,
        "data-state": i.stateAttribute,
        ...s,
        ref: m,
        onPointerMove: Ct(t.onPointerMove, (g) => {
          g.pointerType !== "touch" && !p.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: Ct(t.onPointerLeave, () => {
          i.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: Ct(t.onPointerDown, () => {
          i.open && i.onClose(), d.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: Ct(t.onFocus, () => {
          d.current || i.onOpen();
        }),
        onBlur: Ct(t.onBlur, i.onClose),
        onClick: Ct(t.onClick, i.onClose)
      }
    ) });
  }, "TooltipTrigger")
), ab = "TooltipPortal", [YT, GT] = Pc(ab, {
  forceMount: void 0
}), KT = /* @__PURE__ */ Ie((e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = to(ab, t);
  return /* @__PURE__ */ f(YT, { scope: t, forceMount: n, children: /* @__PURE__ */ f(Jv, { present: n || s.open, children: /* @__PURE__ */ f(OT, { asChild: !0, container: o, children: r }) }) });
}, "TooltipPortal"), Ir = "TooltipContent", qT = /* @__PURE__ */ c.forwardRef(
  /* @__PURE__ */ Ie(function(t, n) {
    const r = GT(Ir, t.__scopeTooltip), { forceMount: o = r.forceMount, side: s = "top", ...i } = t, a = to(Ir, t.__scopeTooltip);
    return /* @__PURE__ */ f(Jv, { present: o || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ f(cb, { side: s, ...i, ref: n }) : /* @__PURE__ */ f(XT, { side: s, ...i, ref: n }) });
  }, "TooltipContent")
), XT = /* @__PURE__ */ c.forwardRef(/* @__PURE__ */ Ie(function(t, n) {
  const r = to(Ir, t.__scopeTooltip), o = Oc(Ir, t.__scopeTooltip), s = c.useRef(null), i = Fn(n, s), [a, l] = c.useState(null), { trigger: u, onClose: m } = r, d = s.current, { onPointerInTransitChange: p } = o, h = c.useCallback(() => {
    l(null), p(!1);
  }, [p]), g = c.useCallback(
    (v, b) => {
      const w = v.currentTarget, x = { x: v.clientX, y: v.clientY }, y = lb(x, w.getBoundingClientRect()), C = ub(x, y), P = db(b.getBoundingClientRect()), S = mb([...C, ...P]);
      l(S), p(!0);
    },
    [p]
  );
  return c.useEffect(() => () => h(), [h]), c.useEffect(() => {
    if (u && d) {
      const v = /* @__PURE__ */ Ie((w) => g(w, d), "handleTriggerLeave"), b = /* @__PURE__ */ Ie((w) => g(w, u), "handleContentLeave");
      return u.addEventListener("pointerleave", v), d.addEventListener("pointerleave", b), () => {
        u.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", b);
      };
    }
  }, [u, d, g, h]), c.useEffect(() => {
    if (a) {
      const v = /* @__PURE__ */ Ie((b) => {
        const w = b.target, x = { x: b.clientX, y: b.clientY }, y = u?.contains(w) || d?.contains(w), C = !fb(x, a);
        y ? h() : C && (h(), m());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [u, d, a, m, h]), /* @__PURE__ */ f(cb, { ...t, ref: i });
}, "TooltipContentHoverable")), ZT = /* @__PURE__ */ Wu("TooltipContent"), cb = /* @__PURE__ */ c.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Ie(function(t, n) {
    const {
      __scopeTooltip: r,
      children: o,
      "aria-label": s,
      id: i,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...u
    } = t, m = to(Ir, r), d = Nc(r), { onClose: p } = m, [h, g] = c.useState(null), v = Fn(n, g);
    Wv(h), c.useEffect(() => (document.addEventListener(Yi, p), () => document.removeEventListener(Yi, p)), [p]), c.useEffect(() => {
      if (m.trigger) {
        const w = /* @__PURE__ */ Ie((x) => {
          x.target instanceof Node && x.target.contains(m.trigger) && p();
        }, "handleScroll");
        return window.addEventListener("scroll", w, { capture: !0 }), () => window.removeEventListener("scroll", w, { capture: !0 });
      }
    }, [m.trigger, p]);
    const { setContentId: b } = m;
    return ut(() => (b(i), () => {
      b(void 0);
    }), [i, b]), /* @__PURE__ */ f(
      tT,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (w) => w.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ k(
          ST,
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
              /* @__PURE__ */ f(ZT, { children: o }),
              s ? /* @__PURE__ */ f(FT, { id: m.contentId, role: "tooltip", children: s }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
);
function lb(e, t) {
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
Ie(lb, "getExitSideFromRect");
function ub(e, t, n = 5) {
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
Ie(ub, "getPaddedExitPoints");
function db(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
Ie(db, "getPointsFromRect");
function fb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], l = t[i], u = a.x, m = a.y, d = l.x, p = l.y;
    m > r != p > r && n < (d - u) * (r - m) / (p - m) + u && (o = !o);
  }
  return o;
}
Ie(fb, "isPointInPolygon");
function mb(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), pb(t);
}
Ie(mb, "getHull");
function pb(e) {
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
Ie(pb, "getHullPresorted");
function hb(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    if (typeof n == "string")
      for (const r of String(n).trim().split(/\s+/))
        r && t.add(r);
  return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
Ie(hb, "concatAriaDescribedby");
const QT = HT, JT = jT, eA = UT, gb = c.forwardRef(({ className: e, sideOffset: t = 6, ...n }, r) => /* @__PURE__ */ f(KT, { children: /* @__PURE__ */ f(
  qT,
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
gb.displayName = "TooltipContent";
function cI({
  content: e,
  children: t,
  side: n = "top",
  align: r = "center",
  delayDuration: o = 200,
  className: s
}) {
  return e == null || e === "" || e === !1 ? t : /* @__PURE__ */ f(QT, { delayDuration: o, children: /* @__PURE__ */ k(JT, { children: [
    /* @__PURE__ */ f(eA, { asChild: !0, children: t }),
    /* @__PURE__ */ f(gb, { side: n, align: r, className: s, children: e })
  ] }) });
}
const Ki = "databeez-theme", lI = `(function(){var t=localStorage.getItem('${Ki}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`, vb = Tu({
  theme: "system",
  setTheme: () => {
  }
});
function uI({ children: e }) {
  const [t, n] = ht("system"), r = (s) => {
    const i = document.documentElement, a = window.matchMedia("(prefers-color-scheme: dark)").matches;
    s === "dark" || s === "system" && a ? i.classList.add("dark") : i.classList.remove("dark");
  };
  Nn(() => {
    const i = localStorage.getItem(Ki) ?? "system";
    n(i), r(i);
  }, []), Nn(() => {
    if (t !== "system") return;
    const s = window.matchMedia("(prefers-color-scheme: dark)"), i = () => r("system");
    return s.addEventListener("change", i), () => s.removeEventListener("change", i);
  }, [t]);
  const o = (s) => {
    n(s), localStorage.setItem(Ki, s), r(s);
  };
  return /* @__PURE__ */ f(vb.Provider, { value: { theme: t, setTheme: o }, children: e });
}
function tA() {
  return Au(vb);
}
const Ks = ["light", "dark", "system"];
function dI() {
  const { theme: e, setTheme: t } = tA(), [n, r] = ht(!1);
  Nn(() => {
    r(!0);
  }, []);
  const o = () => {
    const s = Ks.indexOf(e);
    t(Ks[(s + 1) % Ks.length]);
  };
  return n ? /* @__PURE__ */ f(
    "button",
    {
      onClick: o,
      className: "p-2 rounded-lg text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
      "aria-label": `Tema: ${e}`,
      title: `Tema corrente: ${e}`,
      children: e === "dark" ? /* @__PURE__ */ f(Nw, { className: "h-4 w-4" }) : e === "system" ? /* @__PURE__ */ f(Pw, { className: "h-4 w-4" }) : /* @__PURE__ */ f(Aw, { className: "h-4 w-4" })
    }
  ) : null;
}
function fI({ user: e, bumblebeeUrl: t, extraItems: n, onLogout: r, showLaunchpadLink: o = !0 }) {
  const [s, i] = ht(!1), [a, l] = ht({}), u = nn(null), m = nn(null), d = nn(null);
  Nn(() => {
    const g = (v) => {
      u.current && !u.current.contains(v.target) && (!d.current || !d.current.contains(v.target)) && i(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, []), Nn(() => {
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
  return /* @__PURE__ */ k("div", { className: "relative", ref: u, children: [
    /* @__PURE__ */ k(
      "button",
      {
        ref: m,
        onClick: () => i(!s),
        className: "flex items-center space-x-2 text-text-muted hover:text-databeez-primary px-3 py-2 text-sm font-medium transition-colors",
        children: [
          /* @__PURE__ */ f(Or, { className: "h-4 w-4" }),
          /* @__PURE__ */ f("span", { className: "hidden sm:block", children: e.fullname }),
          /* @__PURE__ */ f(ir, { className: "h-4 w-4" })
        ]
      }
    ),
    s && zb(
      /* @__PURE__ */ k(
        "div",
        {
          ref: d,
          style: a,
          className: "fixed w-56 bg-surface border border-border rounded-md shadow-lg py-1 z-[9999]",
          children: [
            /* @__PURE__ */ k("div", { className: "px-4 py-2 border-b border-border", children: [
              /* @__PURE__ */ f("p", { className: "text-sm font-medium text-text-base truncate", children: e.fullname }),
              /* @__PURE__ */ f("p", { className: "text-xs text-text-muted truncate", children: e.email })
            ] }),
            h && /* @__PURE__ */ k(Ve, { children: [
              n.map(
                (g, v) => g.href ? /* @__PURE__ */ k(
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
                ) : /* @__PURE__ */ k(
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
            /* @__PURE__ */ k(
              "a",
              {
                href: `${t}/profile`,
                className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
                onClick: () => i(!1),
                children: [
                  /* @__PURE__ */ f(vw, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
                  "Gestione Profilo"
                ]
              }
            ),
            o && /* @__PURE__ */ k(
              "a",
              {
                href: `${t}/launchpad`,
                className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
                onClick: () => i(!1),
                children: [
                  /* @__PURE__ */ f(Cw, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
                  "Torna al LaunchPad"
                ]
              }
            ),
            /* @__PURE__ */ f("div", { className: "border-t border-border my-1" }),
            /* @__PURE__ */ k(
              "button",
              {
                onClick: () => {
                  i(!1), p();
                },
                className: "flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle",
                children: [
                  /* @__PURE__ */ f(Ew, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
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
function mI(e, t = {}) {
  const { immediate: n = !0 } = t, [r, o] = ht(null), [s, i] = ht(n), [a, l] = ht(null), u = nn(e);
  u.current = e;
  const m = Ye(async () => {
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
  return Nn(() => {
    n && m();
  }, t.deps ?? []), { data: r, loading: s, error: a, refetch: m };
}
function pI(e, t) {
  return !Number.isFinite(e) || !Number.isFinite(t) || t <= 0 ? 1 : Math.max(1, Math.ceil(e / t));
}
function hI(e, t) {
  return Number.isFinite(e) ? Math.min(Math.max(1, Math.trunc(e)), Math.max(1, t)) : 1;
}
export {
  pA as ADDRESS_META,
  nf as APP_LOGOS,
  aA as APP_LOGO_SLUGS,
  Nx as Accordion,
  kx as AccordionContent,
  Ox as AccordionItem,
  Rx as AccordionTrigger,
  Tx as Alert,
  cA as AppLogo,
  dA as Badge,
  Ix as BeeGraphLogo,
  _x as BeeMapLogo,
  $x as BeeScoutLogo,
  er as Button,
  Ya as Calendar,
  zx as Card,
  jx as CardContent,
  Vx as CardDescription,
  Ux as CardFooter,
  Bx as CardHeader,
  Hx as CardTitle,
  Yx as ChatInput,
  Do as Checkbox,
  fA as CheckboxTree,
  xA as CodeBlock,
  _0 as ColorPicker,
  $0 as Combobox,
  vA as CompanyHeader,
  wA as ConfirmDialog,
  Qf as CopyButton,
  I0 as DEFAULT_PRESETS,
  NA as DataBeezLogo,
  CA as DataSourceBadge,
  q2 as DatePicker,
  X2 as DateRangePicker,
  CS as Delta,
  fS as Dialog,
  yA as DialogClose,
  xm as DialogContent,
  Pm as DialogDescription,
  Sm as DialogFooter,
  Cm as DialogHeader,
  wm as DialogOverlay,
  pS as DialogPortal,
  Em as DialogTitle,
  mS as DialogTrigger,
  _A as DropdownMenu,
  dR as DropdownMenuContent,
  FA as DropdownMenuGroup,
  fR as DropdownMenuItem,
  mR as DropdownMenuLabel,
  pR as DropdownMenuSeparator,
  $A as DropdownMenuTrigger,
  LA as EmptyState,
  An as FORMAT_PLACEHOLDER,
  zA as FeatureCard,
  bR as FilterChip,
  BA as FloatingPanel,
  Fx as HaiveLogo,
  lA as InfoRow,
  xR as Input,
  CR as InputWithIcon,
  hA as LOCATION_META,
  gR as MarkdownContent,
  WA as MessageBubble,
  HA as MethodBadge,
  PR as MultiSelect,
  z0 as ORG_TYPE_META,
  L0 as PERSON_TYPE_META,
  V0 as PONTE_META,
  VA as PageHeader,
  dD as Pagination,
  Hr as Popover,
  mA as PopoverAnchor,
  dr as PopoverContent,
  Vr as PopoverTrigger,
  jA as ProgressBar,
  OR as RISK_LEVEL_LABELS,
  YA as RiskBadge,
  Cl as SUBJECT_TYPE_META,
  VR as ScrollArea,
  Wh as ScrollBar,
  jR as SearchInput,
  uA as Section,
  GA as Select,
  Ak as SelectContent,
  KA as SelectGroup,
  _k as SelectItem,
  Ik as SelectLabel,
  Ng as SelectScrollDownButton,
  Pg as SelectScrollUpButton,
  $k as SelectSeparator,
  Tk as SelectTrigger,
  qA as SelectValue,
  XA as SidePanel,
  Og as Skeleton,
  ZA as SkeletonCard,
  Wk as SkeletonText,
  QA as Sparkline,
  Bk as Spinner,
  JA as SpinnerOverlay,
  eI as StatCard,
  Y0 as StatusBadge,
  tI as StatusIndicatorRow,
  Gk as Stepper,
  Ax as SwarmLogo,
  eD as Switch,
  lI as THEME_ANTI_FOUC_SCRIPT,
  Ki as THEME_STORAGE_KEY,
  nI as TabSwitch,
  nD as Table,
  oD as TableBody,
  uD as TableCaption,
  lD as TableCell,
  sD as TableFooter,
  Ag as TableHead,
  rD as TableHeader,
  iD as TableRow,
  cD as TableSortHead,
  rI as Tabs,
  kD as TabsContent,
  OD as TabsList,
  RD as TabsTrigger,
  DD as Textarea,
  uI as ThemeProvider,
  dI as ThemeSwitcher,
  MD as TimePicker,
  sI as Toaster,
  cI as Tooltip,
  gb as TooltipContent,
  QT as TooltipProvider,
  JT as TooltipRoot,
  eA as TooltipTrigger,
  fI as UserMenu,
  Dx as alertVariants,
  Lx as badgeVariants,
  Wx as buttonVariants,
  hI as clampPage,
  tn as clampWidth,
  I as cn,
  G0 as deriveStatoVariant,
  FM as dismissToast,
  bS as formatDate,
  PA as formatDateTime,
  gS as formatDelta,
  SA as formatEuro,
  Ls as formatNumber,
  EA as formatPercent,
  yS as getDeltaState,
  H0 as getOrgMeta,
  pI as getPageCount,
  W0 as getPersonMeta,
  gA as getPonteMeta,
  F0 as getSubjectMeta,
  UA as riskLevelFromScore,
  zk as spinnerVariants,
  j0 as statusBadgeVariants,
  Hk as stepCircleVariants,
  jk as stepConnectorVariants,
  Vk as stepLabelVariants,
  Qr as toast,
  mI as useAsyncData,
  tA as useTheme,
  LM as useToast,
  Fk as widthAfterDrag,
  Lk as widthAfterKey
};
