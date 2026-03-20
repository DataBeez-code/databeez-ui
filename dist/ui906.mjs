import { create as n } from "./ui921.mjs";
const r = n({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, l) {
    return "xlink:" + l.slice(5).toLowerCase();
  }
});
export {
  r as xlink
};
