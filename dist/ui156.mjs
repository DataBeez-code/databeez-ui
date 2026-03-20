var r, c;
function t() {
  if (c) return r;
  c = 1;
  function s(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function i(...e) {
    return e.map((a) => s(a)).join("");
  }
  function l(...e) {
    return "(" + e.map((a) => s(a)).join("|") + ")";
  }
  function o(e) {
    const n = [
      "GET",
      "POST",
      "HEAD",
      "PUT",
      "DELETE",
      "CONNECT",
      "OPTIONS",
      "PATCH",
      "TRACE"
    ];
    return {
      name: "Apache Access Log",
      contains: [
        // IP
        {
          className: "number",
          begin: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,
          relevance: 5
        },
        // Other numbers
        {
          className: "number",
          begin: /\b\d+\b/,
          relevance: 0
        },
        // Requests
        {
          className: "string",
          begin: i(/"/, l(...n)),
          end: /"/,
          keywords: n,
          illegal: /\n/,
          relevance: 5,
          contains: [
            {
              begin: /HTTP\/[12]\.\d'/,
              relevance: 5
            }
          ]
        },
        // Dates
        {
          className: "string",
          // dates must have a certain length, this prevents matching
          // simple array accesses a[123] and [] and other common patterns
          // found in other languages
          begin: /\[\d[^\]\n]{8,}\]/,
          illegal: /\n/,
          relevance: 1
        },
        {
          className: "string",
          begin: /\[/,
          end: /\]/,
          illegal: /\n/,
          relevance: 0
        },
        // User agent / relevance boost
        {
          className: "string",
          begin: /"Mozilla\/\d\.\d \(/,
          end: /"/,
          illegal: /\n/,
          relevance: 3
        },
        // Strings
        {
          className: "string",
          begin: /"/,
          end: /"/,
          illegal: /\n/,
          relevance: 0
        }
      ]
    };
  }
  return r = o, r;
}
export {
  t as __require
};
