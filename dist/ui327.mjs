var s, E;
function T() {
  if (E) return s;
  E = 1;
  function b(e) {
    var n = "true false yes no null", a = "[\\w#;/?:@&=+$,.~*'()[\\]]+", c = {
      className: "attr",
      variants: [
        { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
        { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' },
        // double quoted keys
        { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" }
        // single quoted keys
      ]
    }, g = {
      className: "template-variable",
      variants: [
        { begin: /\{\{/, end: /\}\}/ },
        // jinja templates Ansible
        { begin: /%\{/, end: /\}/ }
        // Ruby i18n
      ]
    }, t = {
      className: "string",
      relevance: 0,
      variants: [
        { begin: /'/, end: /'/ },
        { begin: /"/, end: /"/ },
        { begin: /\S+/ }
      ],
      contains: [
        e.BACKSLASH_ESCAPE,
        g
      ]
    }, v = e.inherit(t, {
      variants: [
        { begin: /'/, end: /'/ },
        { begin: /"/, end: /"/ },
        { begin: /[^\s,{}[\]]+/ }
      ]
    }), N = "[0-9]{4}(-[0-9][0-9]){0,2}", m = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?", u = "(\\.[0-9]*)?", R = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?", _ = {
      className: "number",
      begin: "\\b" + N + m + u + R + "\\b"
    }, r = {
      end: ",",
      endsWithParent: !0,
      excludeEnd: !0,
      keywords: n,
      relevance: 0
    }, d = {
      begin: /\{/,
      end: /\}/,
      contains: [r],
      illegal: "\\n",
      relevance: 0
    }, A = {
      begin: "\\[",
      end: "\\]",
      contains: [r],
      illegal: "\\n",
      relevance: 0
    }, l = [
      c,
      {
        className: "meta",
        begin: "^---\\s*$",
        relevance: 10
      },
      {
        // multi line string
        // Blocks start with a | or > followed by a newline
        //
        // Indentation of subsequent lines must be the same to
        // be considered part of the block
        className: "string",
        begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
      },
      {
        // Ruby/Rails erb
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      },
      {
        // named tags
        className: "type",
        begin: "!\\w+!" + a
      },
      // https://yaml.org/spec/1.2/spec.html#id2784064
      {
        // verbatim tags
        className: "type",
        begin: "!<" + a + ">"
      },
      {
        // primary tags
        className: "type",
        begin: "!" + a
      },
      {
        // secondary tags
        className: "type",
        begin: "!!" + a
      },
      {
        // fragment id &ref
        className: "meta",
        begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // fragment reference *ref
        className: "meta",
        begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
      },
      {
        // array listing
        className: "bullet",
        // TODO: remove |$ hack when we have proper look-ahead support
        begin: "-(?=[ ]|$)",
        relevance: 0
      },
      e.HASH_COMMENT_MODE,
      {
        beginKeywords: n,
        keywords: { literal: n }
      },
      _,
      // numbers are any valid C-style number that
      // sit isolated from other words
      {
        className: "number",
        begin: e.C_NUMBER_RE + "\\b",
        relevance: 0
      },
      d,
      A,
      t
    ], i = [...l];
    return i.pop(), i.push(v), r.contains = i, {
      name: "YAML",
      case_insensitive: !0,
      aliases: ["yml"],
      contains: l
    };
  }
  return s = b, s;
}
export {
  T as __require
};
