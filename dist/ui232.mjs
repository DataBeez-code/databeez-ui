var n, a;
function r() {
  if (a) return n;
  a = 1;
  function t(e) {
    return {
      name: "Haxe",
      aliases: ["hx"],
      keywords: {
        keyword: "break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while " + "Int Float String Bool Dynamic Void Array ",
        built_in: "trace this",
        literal: "true false null _"
      },
      contains: [
        {
          className: "string",
          // interpolate-able strings
          begin: "'",
          end: "'",
          contains: [
            e.BACKSLASH_ESCAPE,
            {
              className: "subst",
              // interpolation
              begin: "\\$\\{",
              end: "\\}"
            },
            {
              className: "subst",
              // interpolation
              begin: "\\$",
              end: /\W\}/
            }
          ]
        },
        e.QUOTE_STRING_MODE,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        e.C_NUMBER_MODE,
        {
          className: "meta",
          // compiler meta
          begin: "@:",
          end: "$"
        },
        {
          className: "meta",
          // compiler conditionals
          begin: "#",
          end: "$",
          keywords: {
            "meta-keyword": "if else elseif end error"
          }
        },
        {
          className: "type",
          // function types
          begin: ":[ 	]*",
          end: "[^A-Za-z0-9_ 	\\->]",
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0
        },
        {
          className: "type",
          // types
          begin: ":[ 	]*",
          end: "\\W",
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "type",
          // instantiation
          begin: "new *",
          end: "\\W",
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "class",
          // enums
          beginKeywords: "enum",
          end: "\\{",
          contains: [e.TITLE_MODE]
        },
        {
          className: "class",
          // abstracts
          beginKeywords: "abstract",
          end: "[\\{$]",
          contains: [
            {
              className: "type",
              begin: "\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0
            },
            {
              className: "type",
              begin: "from +",
              end: "\\W",
              excludeBegin: !0,
              excludeEnd: !0
            },
            {
              className: "type",
              begin: "to +",
              end: "\\W",
              excludeBegin: !0,
              excludeEnd: !0
            },
            e.TITLE_MODE
          ],
          keywords: {
            keyword: "abstract from to"
          }
        },
        {
          className: "class",
          // classes
          begin: "\\b(class|interface) +",
          end: "[\\{$]",
          excludeEnd: !0,
          keywords: "class interface",
          contains: [
            {
              className: "keyword",
              begin: "\\b(extends|implements) +",
              keywords: "extends implements",
              contains: [
                {
                  className: "type",
                  begin: e.IDENT_RE,
                  relevance: 0
                }
              ]
            },
            e.TITLE_MODE
          ]
        },
        {
          className: "function",
          beginKeywords: "function",
          end: "\\(",
          excludeEnd: !0,
          illegal: "\\S",
          contains: [e.TITLE_MODE]
        }
      ],
      illegal: /<\//
    };
  }
  return n = t, n;
}
export {
  r as __require
};
