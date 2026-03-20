import { create as e } from "./ui921.mjs";
const o = e({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(r, l) {
    return "xml:" + l.slice(3).toLowerCase();
  }
});
export {
  o as xml
};
