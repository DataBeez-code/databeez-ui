import { forwardRef as n, createElement as s } from "react";
import b from "./ui142.mjs";
const i = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), $ = (e, m) => {
  const a = n(
    ({ color: u = "currentColor", size: r = 24, strokeWidth: o = 2, absoluteStrokeWidth: c, children: t, ...l }, p) => s(
      "svg",
      {
        ref: p,
        ...b,
        width: r,
        height: r,
        stroke: u,
        strokeWidth: c ? Number(o) * 24 / Number(r) : o,
        className: `lucide lucide-${i(e)}`,
        ...l
      },
      [
        ...m.map(([d, f]) => s(d, f)),
        ...(Array.isArray(t) ? t : [t]) || []
      ]
    )
  );
  return a.displayName = `${e}`, a;
};
export {
  $ as default,
  i as toKebabCase
};
