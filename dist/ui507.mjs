import a from "./ui361.mjs";
t.displayName = "n4js";
t.aliases = ["n4jsd"];
function t(e) {
  e.register(a), e.languages.n4js = e.languages.extend("javascript", {
    // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
    keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
  }), e.languages.insertBefore("n4js", "constant", {
    // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
    annotation: {
      pattern: /@+\w+/,
      alias: "operator"
    }
  }), e.languages.n4jsd = e.languages.n4js;
}
export {
  t as default
};
