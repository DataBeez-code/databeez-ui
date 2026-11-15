# @databeez-code/ui

Design system ufficiale di **DataBeez.ai** — componenti React condivisi tra tutti i progetti frontend del team.

Costruito con **Tailwind CSS**, **Radix UI** e **TypeScript**. Documentazione interattiva disponibile su Storybook.

---

## Installazione

### Produzione (git dependency)

Aggiungi nel `package.json` del progetto consumatore:

```json
{
  "dependencies": {
    "@databeez-code/ui": "github:DataBeez-code/databeez-ui#v0.7.1"
  }
}
```

```bash
npm install
```

Nessun token o `.npmrc` necessario — il repo è pubblico. Per aggiornare a una nuova versione, cambia il tag (`#v0.1.1`, ecc.).

### Sviluppo locale (due repo in parallelo)

Se stai modificando i componenti in contemporanea con un progetto consumatore, usa il `file:` path per avere hot-reload immediato:

```json
{
  "dependencies": {
    "@databeez-code/ui": "file:../databeez-ui"
  }
}
```

Esegui `npm install` nel progetto consumatore: npm crea un symlink a questa cartella e qualsiasi modifica ai componenti è visibile immediatamente.

> **Attenzione:** con `file:` path le dipendenze di `@databeez-code/ui` non vengono hoisate automaticamente. Se il progetto consumatore usa direttamente un pacchetto già presente qui (es. `react-syntax-highlighter`, `lucide-react`), dichiaralo anche nel suo `package.json`.

---

## Utilizzo

```tsx
// 1. Importa i token CSS nel layout root
import '@databeez-code/ui/globals.css'

// 2. Estendi tailwind.config.js
const databeezeConfig = require('@databeez-code/ui/tailwind.config')
module.exports = {
  presets: [databeezeConfig],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@databeez-code/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
}

// 3. Usa i componenti
import { Button, Card, StatusBadge } from '@databeez-code/ui'
```

### Dark mode (anti-FOUC)

```tsx
// app/layout.tsx
import { THEME_ANTI_FOUC_SCRIPT, ThemeProvider } from '@databeez-code/ui'

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_ANTI_FOUC_SCRIPT }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
```

---

## Componenti disponibili

| Categoria | Componenti |
|-----------|-----------|
| **Form** | `Input`, `InputWithIcon`, `SearchInput`, `Textarea`, `Select` |
| **Display** | `Button`, `Badge`, `StatusBadge`, `MethodBadge`, `Spinner` |
| **Layout** | `Card`, `PageHeader`, `Stepper`, `TabSwitch`, `Tabs` |
| **Feedback** | `Alert`, `EmptyState`, `Skeleton` |
| **Content** | `CodeBlock`, `CopyButton`, `FeatureCard`, `StatCard` |
| **System** | `Table`, `Dialog`, `StatusIndicatorRow`, `ThemeProvider` |
| **App Shell** | `UserMenu`, `ThemeSwitcher` |

---

## Formattatori (`format`)

Formati italiani standard, esportati dal barrel: `formatEuro`, `formatNumber`, `formatPercent`, `formatDelta`, `formatDate`, `formatDateTime`.

```ts
import { formatEuro, formatPercent, formatDelta, formatDate } from "@databeez-code/ui"

formatEuro(1234)                           // "€ 1.234"      (spazio indivisibile U+00A0)
formatEuro(2500)                           // "€ 2.500"      (migliaia sempre separate)
formatEuro(-2500)                          // "− € 2.500"    (meno vero U+2212 davanti al simbolo)
formatEuro(1234.5, { cents: true })        // "€ 1.234,50"
formatEuro(14_200_000, { compact: true })  // "€ 14,2 mln"
formatPercent(12.5)                        // "12,5%"        (input in punti percentuali, non 0,125)
formatDelta(-14)                           // "−14"          (+6 per i positivi)
formatDate("2026-09-19")                   // "19/09/2026"
formatDateTime(new Date(2026, 8, 19, 18, 30)) // "19/09/2026, 18:30"
formatEuro(null)                           // "—"
```

- Valori mancanti (`null`, `undefined`, `NaN`, `Infinity`) e date non valide restituiscono il trattino lungo `—`, mai `NaN`.
- La forma compatta (`compact: true`) è **opt-in** e si usa **solo in KPI e card**. Nelle colonne numeriche si usa sempre la forma piena con decimali uniformi, così le cifre si allineano a destra.
- Le date accettano `string | Date`; le stringhe `AAAA-MM-GG` sono lette come data locale (nessuno slittamento di fuso).

### Test

```bash
npm test
```

Esegue solo gli unit test (progetto vitest `unit`, ambiente node). Non avvia Playwright né Storybook.

---

## Delta, StatCard, Sparkline, ProgressBar

### Delta

Variazione con freccia e valore col segno (meno vero U+2212). Colori solo dai token `text-trend-positive/negative/neutral`; per gli screen reader aggiunge «in aumento», «in calo» o «invariato».

```tsx
<Delta value={12.4} suffix="%" format={(v) => formatDelta(v, 1)} />      {/* più fatturato = bene */}
<Delta value={7} polarity="up-is-bad" />                                  {/* più errori = male (rosso) */}
<Delta value={0.2} threshold={0.5} suffix=" pp" />                        {/* |valore| <= soglia → neutro */}
```

- `polarity`: `"up-is-good"` (default) o `"up-is-bad"`. La freccia segue sempre il segno; cambia solo il colore.
- `threshold`: `|value| <= threshold` è neutro (default `0`). Valore mancante → `—`.
- La logica pura è esportata come `getDeltaState(value, polarity, threshold)`.

### StatCard

Prop nuove, tutte opzionali e retrocompatibili:

- `trend`: la forma storica `{ value: string, positive? }` resta valida; con `{ value: number, polarity?, format?, suffix?, threshold? }` è resa con `Delta`.
- `hint`: nota sotto il valore (periodo di confronto, fonte).
- `size="compact"`: allineata a sinistra e più densa, per le griglie KPI. Il valore usa `tabular-nums`.

```tsx
<StatCard size="compact" label="Fatturato" value={formatEuro(14_200_000, { compact: true })}
  trend={{ value: 4.2, suffix: "%" }} hint="vs 2024" />
```

### Sparkline

SVG senza dipendenze: `data`, `width`, `height`, `strokeWidth`, `area`. Il colore è `currentColor` (default `text-primary`): si cambia con una classe token, es. `className="text-trend-positive"`. Gestisce 0 o 1 punto e serie costanti. Senza `aria-label` è `aria-hidden`.

### ProgressBar

`value`, `max` (100), `tone` (`primary` | `success` | `warning` | `error` | `info` | `accent`), `label`, `showValue`. Ha ruolo `progressbar` con `aria-valuenow/min/max`; il valore è limitato fra 0 e `max`.

---

## UserMenu e ThemeSwitcher

Componenti per l'header comune a tutti i prodotti DataBeez. Vanno sempre affiancati: `ThemeSwitcher` a sinistra, `UserMenu` a destra.

```tsx
import { ThemeSwitcher, UserMenu } from '@databeez-code/ui'

<div className="flex items-center gap-1">
  <ThemeSwitcher />
  <UserMenu
    user={{ fullname: 'Mario Rossi', email: 'mario@databeez.ai' }}
    bumblebeeUrl="https://bumblebee.databeez.ai"
  />
</div>
```

### Props di UserMenu

```typescript
interface UserMenuProps {
  user: {
    fullname: string   // nome visualizzato nel trigger e nel dropdown
    email: string      // email visualizzata nel dropdown
    avatarUrl?: string // riservato per usi futuri
  }
  bumblebeeUrl: string      // URL base di Bumblebee (es. https://bumblebee.databeez.ai)
  extraItems?: UserMenuItem[] // voci aggiuntive specifiche del prodotto (opzionale)
  onLogout?: () => void       // override del comportamento logout (opzionale)
}

interface UserMenuItem {
  label: string
  href?: string           // link di navigazione
  onClick?: () => void    // azione custom (alternativa a href)
  icon?: React.ReactNode  // icona Lucide o qualsiasi ReactNode
}
```

### Struttura del dropdown

Il dropdown contiene sempre, nell'ordine:

1. Header con nome e email
2. Voci `extraItems` (se presenti), seguite da un separatore
3. **Gestione Profilo** → `{bumblebeeUrl}/profile`
4. **Torna al LaunchPad** → `{bumblebeeUrl}/launchpad`
5. Separatore
6. **Logout** → `{bumblebeeUrl}/logout` (o `onLogout` se fornito)

### Aggiungere voci specifiche per prodotto

Usa la prop `extraItems` per aggiungere voci prima di quelle standard. Ogni voce può essere un link o un'azione:

```tsx
import { Settings, FileText } from 'lucide-react'

<UserMenu
  user={user}
  bumblebeeUrl={BUMBLEBEE_URL}
  extraItems={[
    {
      label: 'Impostazioni',
      href: '/settings',
      icon: <Settings className="h-4 w-4" />,
    },
    {
      label: 'Esporta report',
      icon: <FileText className="h-4 w-4" />,
      onClick: () => handleExport(),
    },
  ]}
/>
```

### ThemeSwitcher

Nessuna prop richiesta. Legge e aggiorna il tema tramite `useTheme()` del `ThemeProvider`. Il ciclo è `light → dark → system → light`. Il tema è persistito in `localStorage` con chiave `databeez-theme`.

> `ThemeSwitcher` deve essere usato dentro un `ThemeProvider`. Se l'app usa Next.js App Router, il `ThemeProvider` va nel layout root. Per le SPA Vite, va wrappato attorno all'`<App />`.

---

## Storybook

```bash
npm run storybook
```

Apre la documentazione interattiva su `http://localhost:6006` con esempi e props di tutti i componenti.

---

## Stack

| Layer | Tecnologia |
|-------|-----------|
| Framework | React 18 |
| Stili | Tailwind CSS 3 + CSS Variables |
| Varianti | Class Variance Authority (CVA) |
| Primitivi accessibili | Radix UI (Dialog, Select, Tabs) |
| Icone | Lucide React |
| Evidenziazione codice | react-syntax-highlighter |
