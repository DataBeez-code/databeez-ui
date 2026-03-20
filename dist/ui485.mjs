p.displayName = "http";
p.aliases = [];
function p(l) {
  (function(e) {
    function r(n) {
      return RegExp("(^(?:" + n + "):[ 	]*(?![ 	]))[^]+", "i");
    }
    e.languages.http = {
      "request-line": {
        pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
        inside: {
          // HTTP Method
          method: {
            pattern: /^[A-Z]+\b/,
            alias: "property"
          },
          // Request Target e.g. http://example.com, /path/to/file
          "request-target": {
            pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
            lookbehind: !0,
            alias: "url",
            inside: e.languages.uri
          },
          // HTTP Version
          "http-version": {
            pattern: /^(\s)HTTP\/[\d.]+/,
            lookbehind: !0,
            alias: "property"
          }
        }
      },
      "response-status": {
        pattern: /^HTTP\/[\d.]+ \d+ .+/m,
        inside: {
          // HTTP Version
          "http-version": {
            pattern: /^HTTP\/[\d.]+/,
            alias: "property"
          },
          // Status Code
          "status-code": {
            pattern: /^(\s)\d+(?=\s)/,
            lookbehind: !0,
            alias: "number"
          },
          // Reason Phrase
          "reason-phrase": {
            pattern: /^(\s).+/,
            lookbehind: !0,
            alias: "string"
          }
        }
      },
      header: {
        pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
        inside: {
          "header-value": [
            {
              pattern: r(/Content-Security-Policy/.source),
              lookbehind: !0,
              alias: ["csp", "languages-csp"],
              inside: e.languages.csp
            },
            {
              pattern: r(/Public-Key-Pins(?:-Report-Only)?/.source),
              lookbehind: !0,
              alias: ["hpkp", "languages-hpkp"],
              inside: e.languages.hpkp
            },
            {
              pattern: r(/Strict-Transport-Security/.source),
              lookbehind: !0,
              alias: ["hsts", "languages-hsts"],
              inside: e.languages.hsts
            },
            {
              pattern: r(/[^:]+/.source),
              lookbehind: !0
            }
          ],
          "header-name": {
            pattern: /^[^:]+/,
            alias: "keyword"
          },
          punctuation: /^:/
        }
      }
    };
    var t = e.languages, i = {
      "application/javascript": t.javascript,
      "application/json": t.json || t.javascript,
      "application/xml": t.xml,
      "text/xml": t.xml,
      "text/html": t.html,
      "text/css": t.css,
      "text/plain": t.plain
    }, u = {
      "application/json": !0,
      "application/xml": !0
    };
    function o(n) {
      var h = n.replace(/^[a-z]+\//, ""), g = "\\w+/(?:[\\w.-]+\\+)+" + h + "(?![+\\w.-])";
      return "(?:" + n + "|" + g + ")";
    }
    var s;
    for (var a in i)
      if (i[a]) {
        s = s || {};
        var d = u[a] ? o(a) : a;
        s[a.replace(/\//g, "-")] = {
          pattern: RegExp(
            "(" + /content-type:\s*/.source + d + /(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source + ")" + // This is a little interesting:
            // The HTTP format spec required 1 empty line before the body to make everything unambiguous.
            // However, when writing code by hand (e.g. to display on a website) people can forget about this,
            // so we want to be liberal here. We will allow the empty line to be omitted if the first line of
            // the body does not start with a [\w-] character (as headers do).
            /[^ \t\w-][\s\S]*/.source,
            "i"
          ),
          lookbehind: !0,
          inside: i[a]
        };
      }
    s && e.languages.insertBefore("http", "header", s);
  })(l);
}
export {
  p as default
};
