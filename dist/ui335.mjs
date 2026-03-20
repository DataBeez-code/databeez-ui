var a, u;
function v() {
  if (u) return a;
  u = 1;
  function r(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function t(...e) {
    return e.map((n) => r(n)).join("");
  }
  function i(...e) {
    return "(" + e.map((n) => r(n)).join("|") + ")";
  }
  function g(e) {
    const s = {
      className: "string",
      begin: /"(""|[^/n])"C\b/
    }, n = {
      className: "string",
      begin: /"/,
      end: /"/,
      illegal: /\n/,
      contains: [
        {
          // double quote escape
          begin: /""/
        }
      ]
    }, o = /\d{1,2}\/\d{1,2}\/\d{4}/, l = /\d{4}-\d{1,2}-\d{1,2}/, c = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, d = /\d{1,2}(:\d{1,2}){1,2}/, m = {
      className: "literal",
      variants: [
        {
          // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
          begin: t(/# */, i(l, o), / *#/)
        },
        {
          // #H:mm[:ss]# (24h Time)
          begin: t(/# */, d, / *#/)
        },
        {
          // #h[:mm[:ss]] A# (12h Time)
          begin: t(/# */, c, / *#/)
        },
        {
          // date plus time
          begin: t(
            /# */,
            i(l, o),
            / +/,
            i(c, d),
            / *#/
          )
        }
      ]
    }, f = {
      className: "number",
      relevance: 0,
      variants: [
        {
          // Float
          begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
        },
        {
          // Integer (base 10)
          begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 16)
          begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 8)
          begin: /&O[0-7_]+((U?[SIL])|[%&])?/
        },
        {
          // Integer (base 2)
          begin: /&B[01_]+((U?[SIL])|[%&])?/
        }
      ]
    }, y = {
      className: "label",
      begin: /^\w+:/
    }, p = e.COMMENT(/'''/, /$/, {
      contains: [
        {
          className: "doctag",
          begin: /<\/?/,
          end: />/
        }
      ]
    }), b = e.COMMENT(null, /$/, {
      variants: [
        {
          begin: /'/
        },
        {
          // TODO: Use `beforeMatch:` for leading spaces
          begin: /([\t ]|^)REM(?=\s)/
        }
      ]
    });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: {
        label: "symbol"
      },
      keywords: {
        keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in: (
          // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
          "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort"
        ),
        type: (
          // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
          "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort"
        ),
        literal: "true false nothing"
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [
        s,
        n,
        m,
        f,
        y,
        p,
        b,
        {
          className: "meta",
          // TODO: Use `beforeMatch:` for indentation once available
          begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: {
            "meta-keyword": "const disable else elseif enable end externalsource if region then"
          },
          contains: [b]
        }
      ]
    };
  }
  return a = g, a;
}
export {
  v as __require
};
