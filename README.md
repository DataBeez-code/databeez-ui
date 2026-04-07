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
    "@databeez-code/ui": "github:DataBeez-code/databeez-ui#v0.4.4"
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
