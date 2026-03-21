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
    "@databeez-code/ui": "github:DataBeez-code/databeez-ui#v0.1.0"
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
| **Layout** | `Card`, `PageHeader`, `TabSwitch`, `Tabs` |
| **Feedback** | `Alert`, `EmptyState`, `Skeleton` |
| **Content** | `CodeBlock`, `CopyButton`, `FeatureCard`, `StatCard` |
| **System** | `Table`, `Dialog`, `StatusIndicatorRow`, `ThemeProvider` |

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
