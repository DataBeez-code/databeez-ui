import { useState as t, useRef as g, useCallback as y, useEffect as v } from "react";
function S(s, a = {}) {
  const { immediate: c = !0 } = a, [f, l] = t(null), [d, n] = t(c), [m, r] = t(null), o = g(s);
  o.current = s;
  const u = y(async () => {
    var i;
    n(!0), r(null);
    try {
      const e = await o.current();
      e.success && e.data !== void 0 ? l(e.data) : r(((i = e.error) == null ? void 0 : i.message) ?? "Si è verificato un errore");
    } catch (e) {
      r(e instanceof Error ? e.message : "Si è verificato un errore");
    } finally {
      n(!1);
    }
  }, []);
  return v(() => {
    c && u();
  }, a.deps ?? []), { data: f, loading: d, error: m, refetch: u };
}
export {
  S as useAsyncData
};
