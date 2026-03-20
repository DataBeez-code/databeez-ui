import t from "./ui359.mjs";
a.displayName = "processing";
a.aliases = [];
function a(e) {
  e.register(t), e.languages.processing = e.languages.extend("clike", {
    keyword: /\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
    // Spaces are allowed between function name and parenthesis
    function: /\b\w+(?=\s*\()/,
    operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
  }), e.languages.insertBefore("processing", "number", {
    // Special case: XML is a type
    constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
    type: {
      pattern: /\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,
      alias: "class-name"
    }
  });
}
export {
  a as default
};
