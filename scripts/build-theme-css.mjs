// Genera theme.css (CSS ufficiale per Tailwind v4) dalle stesse fonti del preset v3:
//   - globals.css        -> valori dei token (blocchi :root e .dark)
//   - tailwind.config.js -> nomi delle classi colore (funzioni token() e statusTone())
// Uso:  node scripts/build-theme-css.mjs          (riscrive theme.css)
//       node scripts/build-theme-css.mjs --check  (exit 1 se theme.css non è allineato)
import { readFileSync, realpathSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(import.meta.url)
const OUT = join(root, 'theme.css')

// Le variabili grezze (triplet RGB) hanno nel CSS v4 il prefisso --dbz-, non --color-:
// in Tailwind v4 `--color-*` è il namespace del tema, e `--color-success: rgb(var(--color-success))`
// sarebbe un ciclo (nelle app funzionava solo perché @layer base batte @layer theme).
const rename = (s) => s.replace(/--color-/g, '--dbz-')

// Estrae le dichiarazioni `--color-x: valore; /* commento */` di un blocco (selettore) di globals.css
export function readBlock(css, selector) {
  const start = css.search(new RegExp(String.raw`^\s*${selector.replace('.', String.raw`\.`)}\s*\{`, 'm'))
  if (start < 0) throw new Error(`Blocco ${selector} non trovato in globals.css`)
  const open = css.indexOf('{', start)
  const body = css.slice(open + 1, css.indexOf('}', open))
  const decls = body
    .split('\n')
    .map((line) => line.match(/^\s*(--color-[\w-]+)\s*:\s*([^;]+);\s*(\/\*.*\*\/)?\s*$/))
    .filter(Boolean)
    .map(([, name, value, comment]) => ({ name, value: value.trim(), comment }))
  // Il parser legge una dichiarazione per riga: se il blocco ne contiene di più (su più righe,
  // due sulla stessa riga, commento non chiuso) un token sparirebbe in silenzio. Meglio fallire.
  const expected = (body.replace(/\/\*[\s\S]*?\*\//g, '').match(/--color-[\w-]+\s*:/g) ?? []).length
  if (expected !== decls.length) {
    throw new Error(
      `Blocco ${selector} di globals.css: ${expected} dichiarazioni --color-* ma solo ${decls.length} lette. ` +
        'Scrivi una dichiarazione per riga, nella forma `--color-x: valore; /* commento opzionale */`.'
    )
  }
  return decls
}

// Appiattisce la mappa colori del preset in [nomeClasse, valore] (DEFAULT -> nome del genitore)
function flattenColors(obj, prefix = []) {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = key === 'DEFAULT' ? prefix : [...prefix, key]
    return typeof value === 'object' ? flattenColors(value, path) : [[path.join('-'), value]]
  })
}

export function buildThemeCss() {
  const globals = readFileSync(join(root, 'globals.css'), 'utf8')
  const config = require(join(root, 'tailwind.config.js'))
  const colors = flattenColors(config.theme.extend.colors).filter(([name]) => !name.startsWith('gray-'))
  const shadows = Object.entries(config.theme.extend.boxShadow).filter(([k]) => k.startsWith('databeez'))

  const block = (selector) =>
    readBlock(globals, selector)
      .map((d) => `    ${rename(d.name)}: ${rename(d.value)};${d.comment ? ' ' + d.comment : ''}`)
      .join('\n')

  const tokenRe = /^rgb\(var\(--color-([\w-]+)\) \/ <alpha-value>\)$/
  const theme = colors
    .map(([name, value]) => {
      const m = value.match(tokenRe)
      return `  --color-${name}: ${m ? `rgb(var(--dbz-${m[1]}))` : value};`
    })
    .concat(shadows.map(([k, v]) => `  --shadow-${k}: ${v};`))
    .concat(`  --font-heading: ${config.theme.extend.fontFamily.heading.join(', ')};`)
    .join('\n')

  // Un colore che tokenRe non riconosce (funzione, formato nuovo) verrebbe copiato tale e quale:
  // fermiamo il build invece di pubblicare un theme.css con valori non validi in CSS.
  const invalid = theme.split('\n').filter((l) => /<alpha-value>|=>|\[object|undefined/.test(l))
  if (invalid.length) throw new Error(`Valori non validi nel @theme generato:\n${invalid.join('\n')}`)

  return `/* GENERATO da scripts/build-theme-css.mjs — NON modificare a mano.
 * Fonti: globals.css (valori dei token, :root e .dark) e tailwind.config.js (nomi delle classi).
 * Rigenerazione: npm run build:theme (parte anche con npm run build).
 *
 * Uso in un'app Tailwind v4:
 *   @import "tailwindcss";
 *   @import "@databeez-code/ui/theme.css";
 */

/* Classi della libreria. Percorso relativo a questo file (dentro node_modules/@databeez-code/ui).
 * Solo index.*: i chunk di dist/ sono lingue di syntax highlighting caricate a richiesta, senza classi
 * Tailwind, e scansionarli genererebbe CSS inutile. */
@source "./dist/index.{mjs,cjs}";

/* Dark mode a classe: .dark su <html> o su un contenitore (come darkMode: 'class' di v3) */
@custom-variant dark (&:where(.dark, .dark *));

/* Valori grezzi (triplet RGB), tematizzati light/dark. Prefisso --dbz-: vedi nota sopra. */
@layer base {
  :root {
${block(':root')}
  }

  .dark {
${block('.dark')}
  }

  /* Stili base equivalenti a quelli di globals.css (preset v3). I font restano all'app,
   * che di solito li carica con next/font o simili: vedi README. */
  body {
    background-color: rgb(var(--dbz-bg-base));
    color: rgb(var(--dbz-text-base));
  }
}

/* Mappa verso le utility (bg-surface, text-error-fg, bg-success/10, …). inline: le utility
 * leggono direttamente rgb(var(--dbz-*)), così il valore segue la classe .dark più vicina. */
@theme inline {
${theme}
}
`
}

// Avvio da riga di comando. Il confronto dei percorsi tollera alias e maiuscole diverse
// (Windows): se fallisse, lo script uscirebbe senza scrivere niente e senza dirlo.
const samePath = (a, b) => {
  try {
    const [ra, rb] = [realpathSync(a), realpathSync(b)]
    return process.platform === 'win32' ? ra.toLowerCase() === rb.toLowerCase() : ra === rb
  } catch {
    return false
  }
}

if (process.argv[1] && samePath(process.argv[1], fileURLToPath(import.meta.url))) {
  const css = buildThemeCss()
  if (process.argv.includes('--check')) {
    let current = ''
    try { current = readFileSync(OUT, 'utf8') } catch {}
    if (current.replace(/\r\n/g, '\n') !== css) {
      console.error('theme.css non allineato a globals.css / tailwind.config.js: esegui `npm run build:theme`')
      process.exit(1)
    }
    console.log('theme.css allineato')
  } else {
    writeFileSync(OUT, css)
    console.log('theme.css generato')
  }
}
