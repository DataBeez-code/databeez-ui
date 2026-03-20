var R = 0, D = {}, v = {
  /**
   * A namespace for utility methods.
   *
   * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
   * change or disappear at any time.
   *
   * @namespace
   * @memberof Prism
   */
  util: {
    /**
     * Returns the name of the type of the given value.
     *
     * @param {any} o
     * @returns {string}
     * @example
     * type(null)      === 'Null'
     * type(undefined) === 'Undefined'
     * type(123)       === 'Number'
     * type('foo')     === 'String'
     * type(true)      === 'Boolean'
     * type([1, 2])    === 'Array'
     * type({})        === 'Object'
     * type(String)    === 'Function'
     * type(/abc+/)    === 'RegExp'
     */
    type: function(l) {
      return Object.prototype.toString.call(l).slice(8, -1);
    },
    /**
     * Returns a unique number for the given object. Later calls will still return the same number.
     *
     * @param {Object} obj
     * @returns {number}
     */
    objId: function(l) {
      return l.__id || Object.defineProperty(l, "__id", { value: ++R }), l.__id;
    },
    /**
     * Creates a deep clone of the given object.
     *
     * The main intended use of this function is to clone language definitions.
     *
     * @param {T} o
     * @param {Record<number, any>} [visited]
     * @returns {T}
     * @template T
     */
    clone: function l(n, a) {
      a = a || {};
      var r, u;
      switch (v.util.type(n)) {
        case "Object":
          if (u = v.util.objId(n), a[u])
            return a[u];
          r = /** @type {Record<string, any>} */
          {}, a[u] = r;
          for (var i in n)
            n.hasOwnProperty(i) && (r[i] = l(n[i], a));
          return (
            /** @type {any} */
            r
          );
        case "Array":
          return u = v.util.objId(n), a[u] ? a[u] : (r = [], a[u] = r, /** @type {any} */
          n.forEach(
            function(f, e) {
              r[e] = l(f, a);
            }
          ), /** @type {any} */
          r);
        default:
          return n;
      }
    }
  },
  /**
   * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
   *
   * @namespace
   * @memberof Prism
   * @public
   */
  languages: {
    /**
     * The grammar for plain, unformatted text.
     */
    plain: D,
    plaintext: D,
    text: D,
    txt: D,
    /**
     * Creates a deep copy of the language with the given id and appends the given tokens.
     *
     * If a token in `redef` also appears in the copied language, then the existing token in the copied language
     * will be overwritten at its original position.
     *
     * ## Best practices
     *
     * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
     * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
     * understand the language definition because, normally, the order of tokens matters in Prism grammars.
     *
     * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
     * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
     *
     * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
     * @param {Grammar} redef The new tokens to append.
     * @returns {Grammar} The new language created.
     * @public
     * @example
     * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
     *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
     *     // at its original position
     *     'comment': { ... },
     *     // CSS doesn't have a 'color' token, so this token will be appended
     *     'color': /\b(?:red|green|blue)\b/
     * });
     */
    extend: function(l, n) {
      var a = v.util.clone(v.languages[l]);
      for (var r in n)
        a[r] = n[r];
      return a;
    },
    /**
     * Inserts tokens _before_ another token in a language definition or any other grammar.
     *
     * ## Usage
     *
     * This helper method makes it easy to modify existing languages. For example, the CSS language definition
     * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
     * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
     * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
     * this:
     *
     * ```js
     * Prism.languages.markup.style = {
     *     // token
     * };
     * ```
     *
     * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
     * before existing tokens. For the CSS example above, you would use it like this:
     *
     * ```js
     * Prism.languages.insertBefore('markup', 'cdata', {
     *     'style': {
     *         // token
     *     }
     * });
     * ```
     *
     * ## Special cases
     *
     * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
     * will be ignored.
     *
     * This behavior can be used to insert tokens after `before`:
     *
     * ```js
     * Prism.languages.insertBefore('markup', 'comment', {
     *     'comment': Prism.languages.markup.comment,
     *     // tokens after 'comment'
     * });
     * ```
     *
     * ## Limitations
     *
     * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
     * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
     * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
     * deleting properties which is necessary to insert at arbitrary positions.
     *
     * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
     * Instead, it will create a new object and replace all references to the target object with the new one. This
     * can be done without temporarily deleting properties, so the iteration order is well-defined.
     *
     * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
     * you hold the target object in a variable, then the value of the variable will not change.
     *
     * ```js
     * var oldMarkup = Prism.languages.markup;
     * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
     *
     * assert(oldMarkup !== Prism.languages.markup);
     * assert(newMarkup === Prism.languages.markup);
     * ```
     *
     * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
     * object to be modified.
     * @param {string} before The key to insert before.
     * @param {Grammar} insert An object containing the key-value pairs to be inserted.
     * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
     * object to be modified.
     *
     * Defaults to `Prism.languages`.
     * @returns {Grammar} The new grammar object.
     * @public
     */
    insertBefore: function(l, n, a, r) {
      r = r || /** @type {any} */
      v.languages;
      var u = r[l], i = {};
      for (var f in u)
        if (u.hasOwnProperty(f)) {
          if (f == n)
            for (var e in a)
              a.hasOwnProperty(e) && (i[e] = a[e]);
          a.hasOwnProperty(f) || (i[f] = u[f]);
        }
      var x = r[l];
      return r[l] = i, v.languages.DFS(v.languages, function(h, o) {
        o === x && h != l && (this[h] = i);
      }), i;
    },
    // Traverse a language definition with Depth First Search
    DFS: function l(n, a, r, u) {
      u = u || {};
      var i = v.util.objId;
      for (var f in n)
        if (n.hasOwnProperty(f)) {
          a.call(n, f, n[f], r || f);
          var e = n[f], x = v.util.type(e);
          x === "Object" && !u[i(e)] ? (u[i(e)] = !0, l(e, a, null, u)) : x === "Array" && !u[i(e)] && (u[i(e)] = !0, l(e, a, f, u));
        }
    }
  },
  plugins: {},
  /**
   * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
   * and the language definitions to use, and returns a string with the HTML produced.
   *
   * The following hooks will be run:
   * 1. `before-tokenize`
   * 2. `after-tokenize`
   * 3. `wrap`: On each {@link Token}.
   *
   * @param {string} text A string with the code to be highlighted.
   * @param {Grammar} grammar An object containing the tokens to use.
   *
   * Usually a language definition like `Prism.languages.markup`.
   * @param {string} language The name of the language definition passed to `grammar`.
   * @returns {string} The highlighted HTML.
   * @memberof Prism
   * @public
   * @example
   * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
   */
  highlight: function(l, n, a) {
    var r = {
      code: l,
      grammar: n,
      language: a
    };
    if (v.hooks.run("before-tokenize", r), !r.grammar)
      throw new Error('The language "' + r.language + '" has no grammar.');
    return r.tokens = v.tokenize(r.code, r.grammar), v.hooks.run("after-tokenize", r), P.stringify(v.util.encode(r.tokens), r.language);
  },
  /**
   * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
   * and the language definitions to use, and returns an array with the tokenized code.
   *
   * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
   *
   * This method could be useful in other contexts as well, as a very crude parser.
   *
   * @param {string} text A string with the code to be highlighted.
   * @param {Grammar} grammar An object containing the tokens to use.
   *
   * Usually a language definition like `Prism.languages.markup`.
   * @returns {TokenStream} An array of strings and tokens, a token stream.
   * @memberof Prism
   * @public
   * @example
   * let code = `var foo = 0;`;
   * let tokens = Prism.tokenize(code, Prism.languages.javascript);
   * tokens.forEach(token => {
   *     if (token instanceof Prism.Token && token.type === 'number') {
   *         console.log(`Found numeric literal: ${token.content}`);
   *     }
   * });
   */
  tokenize: function(l, n) {
    var a = n.rest;
    if (a) {
      for (var r in a)
        n[r] = a[r];
      delete n.rest;
    }
    var u = new U();
    return E(u, u.head, l), H(l, u, n, u.head, 0), W(u);
  },
  /**
   * @namespace
   * @memberof Prism
   * @public
   */
  hooks: {
    all: {},
    /**
     * Adds the given callback to the list of callbacks for the given hook.
     *
     * The callback will be invoked when the hook it is registered for is run.
     * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
     *
     * One callback function can be registered to multiple hooks and the same hook multiple times.
     *
     * @param {string} name The name of the hook.
     * @param {HookCallback} callback The callback function which is given environment variables.
     * @public
     */
    add: function(l, n) {
      var a = v.hooks.all;
      a[l] = a[l] || [], a[l].push(n);
    },
    /**
     * Runs a hook invoking all registered callbacks with the given environment variables.
     *
     * Callbacks will be invoked synchronously and in the order in which they were registered.
     *
     * @param {string} name The name of the hook.
     * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
     * @public
     */
    run: function(l, n) {
      var a = v.hooks.all[l];
      if (!(!a || !a.length))
        for (var r = 0, u; u = a[r++]; )
          u(n);
    }
  },
  Token: P
};
function P(l, n, a, r) {
  this.type = l, this.content = n, this.alias = a, this.length = (r || "").length | 0;
}
function F(l, n, a, r) {
  l.lastIndex = n;
  var u = l.exec(a);
  if (u && r && u[1]) {
    var i = u[1].length;
    u.index += i, u[0] = u[0].slice(i);
  }
  return u;
}
function H(l, n, a, r, u, i) {
  for (var f in a)
    if (!(!a.hasOwnProperty(f) || !a[f])) {
      var e = a[f];
      e = Array.isArray(e) ? e : [e];
      for (var x = 0; x < e.length; ++x) {
        if (i && i.cause == f + "," + x)
          return;
        var h = e[x], o = h.inside, B = !!h.lookbehind, O = !!h.greedy, J = h.alias;
        if (O && !h.pattern.global) {
          var K = h.pattern.toString().match(/[imsuy]*$/)[0];
          h.pattern = RegExp(h.pattern.source, K + "g");
        }
        for (var T = h.pattern || h, g = r.next, c = u; g !== n.tail && !(i && c >= i.reach); c += g.value.length, g = g.next) {
          var s = g.value;
          if (n.length > l.length)
            return;
          if (!(s instanceof P)) {
            var I = 1, t;
            if (O) {
              if (t = F(T, c, l, B), !t || t.index >= l.length)
                break;
              var _ = t.index, M = t.index + t[0].length, w = c;
              for (w += g.value.length; _ >= w; )
                g = g.next, w += g.value.length;
              if (w -= g.value.length, c = w, g.value instanceof P)
                continue;
              for (var y = g; y !== n.tail && (w < M || typeof y.value == "string"); y = y.next)
                I++, w += y.value.length;
              I--, s = l.slice(c, w), t.index -= c;
            } else if (t = F(T, 0, s, B), !t)
              continue;
            var _ = t.index, A = t[0], G = s.slice(0, _), $ = s.slice(_ + A.length), S = c + s.length;
            i && S > i.reach && (i.reach = S);
            var z = g.prev;
            G && (z = E(n, z, G), c += G.length), V(n, z, I);
            var Q = new P(
              f,
              o ? v.tokenize(A, o) : A,
              J,
              A
            );
            if (g = E(n, z, Q), $ && E(n, g, $), I > 1) {
              var q = {
                cause: f + "," + x,
                reach: S
              };
              H(
                l,
                n,
                a,
                g.prev,
                c,
                q
              ), i && q.reach > i.reach && (i.reach = q.reach);
            }
          }
        }
      }
    }
}
function U() {
  var l = { value: null, prev: null, next: null }, n = { value: null, prev: l, next: null };
  l.next = n, this.head = l, this.tail = n, this.length = 0;
}
function E(l, n, a) {
  var r = n.next, u = { value: a, prev: n, next: r };
  return n.next = u, r.prev = u, l.length++, u;
}
function V(l, n, a) {
  for (var r = n.next, u = 0; u < a && r !== l.tail; u++)
    r = r.next;
  n.next = r, r.prev = n, l.length -= u;
}
function W(l) {
  for (var n = [], a = l.head.next; a !== l.tail; )
    n.push(a.value), a = a.next;
  return n;
}
const X = v;
export {
  X as Prism
};
