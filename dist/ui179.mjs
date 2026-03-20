var n, o;
function T() {
  if (o) return n;
  o = 1;
  function i(e) {
    const r = "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var", c = "false true", d = [
      e.C_LINE_COMMENT_MODE,
      e.COMMENT(
        /\{/,
        /\}/,
        {
          relevance: 0
        }
      ),
      e.COMMENT(
        /\(\*/,
        /\*\)/,
        {
          relevance: 10
        }
      )
    ], a = {
      className: "string",
      begin: /'/,
      end: /'/,
      contains: [{
        begin: /''/
      }]
    }, t = {
      className: "string",
      begin: /(#\d+)+/
    }, E = {
      className: "number",
      begin: "\\b\\d+(\\.\\d+)?(DT|D|T)",
      relevance: 0
    }, u = {
      className: "string",
      // not a string technically but makes sense to be highlighted in the same style
      begin: '"',
      end: '"'
    }, s = {
      className: "function",
      beginKeywords: "procedure",
      end: /[:;]/,
      keywords: "procedure|10",
      contains: [
        e.TITLE_MODE,
        {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: r,
          contains: [
            a,
            t
          ]
        }
      ].concat(d)
    }, l = {
      className: "class",
      begin: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
      returnBegin: !0,
      contains: [
        e.TITLE_MODE,
        s
      ]
    };
    return {
      name: "C/AL",
      case_insensitive: !0,
      keywords: {
        keyword: r,
        literal: c
      },
      illegal: /\/\*/,
      contains: [
        a,
        t,
        E,
        u,
        e.NUMBER_MODE,
        l,
        s
      ]
    };
  }
  return n = i, n;
}
export {
  T as __require
};
