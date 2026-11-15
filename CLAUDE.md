# CLAUDE.md — databeez-ui

Libreria di componenti React condivisa tra tutti i prodotti DataBeez.
Pubblicata come pacchetto GitHub (`github:DataBeez-code/databeez-ui#vX.Y.Z`).

## Comandi di sviluppo

```bash
npm run build            # build produzione in dist/ (Vite library mode + .d.ts)
npm run storybook        # documentazione interattiva su http://localhost:6006
npm run build-storybook  # Storybook statico in storybook-static/ (non tocca dist/)
npx tsc --noEmit         # type-check TypeScript
```

Toolchain: Vite 7 (richiede Node ^20.19 o ≥ 22.12), Storybook 10.6. Ogni push su `main` ripubblica Storybook su https://ui.databeez.ai.

## Pubblicare una nuova versione

1. Apporta le modifiche ai componenti in `src/`
2. Aggiorna la versione in `package.json` (es. `0.4.4` → `0.4.5`)
3. Esegui `npm run build`
4. Committa e tagga: `git tag v0.4.5 && git push origin v0.4.5`
5. Nei progetti consumatori, aggiorna il tag nel loro `package.json` ed esegui `npm install`

> Non copiare mai file in `node_modules` dei progetti consumatori. Gestisci sempre la dipendenza tramite tag GitHub.

## Struttura

```
src/
  components/       # tutti i componenti esportati
  hooks/            # hook riutilizzabili (es. useAsyncData)
  lib/              # utilities (cn, ecc.)
  entities/         # tipi e interfacce condivise
  index.ts          # barrel export — ogni nuovo componente va aggiunto qui
dist/               # output build (non committare modifiche manuali qui)
```

## Aggiungere un nuovo componente

1. Crea `src/components/nome-componente.tsx`
2. Esporta tutto da `src/index.ts` con `export * from './components/nome-componente'`
3. Esegui build e verifica che `dist/` contenga i file `.d.ts` corrispondenti
4. Bumpa la versione e pubblica

## UserMenu e ThemeSwitcher

Componenti per l'header comune a tutti i prodotti DataBeez. Vedi README.md per la documentazione completa delle props e degli esempi d'uso.

### Aggiungere voci al menu da un'app consumatrice

Usa la prop `extraItems` di `UserMenu`. Le voci vengono inserite **prima** di quelle standard (Gestione Profilo, Torna al LaunchPad, Logout):

```tsx
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
      label: 'Azione custom',
      icon: <SomeIcon className="h-4 w-4" />,
      onClick: () => doSomething(),
    },
  ]}
/>
```

Non modificare `user-menu.tsx` per aggiungere voci specifiche di un solo prodotto — usa sempre `extraItems`.

### Override del logout

Per comportamenti di logout non standard (es. pulizia di stato locale prima del redirect):

```tsx
<UserMenu
  user={user}
  bumblebeeUrl={BUMBLEBEE_URL}
  onLogout={() => {
    clearLocalState()
    window.location.href = `${BUMBLEBEE_URL}/logout`
  }}
/>
```

## Design system

I componenti usano token semantici Tailwind definiti via `@theme inline` nel CSS di ogni app consumatrice:

| Token | Utilizzo |
|-------|---------|
| `bg-surface` | sfondo card/dropdown |
| `bg-subtle` | hover state |
| `text-text-base` | testo principale |
| `text-text-muted` | testo secondario/placeholder |
| `border-border` | bordi |
| `text-databeez-primary` | colore brand (hover link) |
| `bg-emphasis` | grigio più marcato di subtle (tracce, step non ancora raggiunti). Non si chiama `muted` per non collidere con shadcn |
| `text-text-subtle`, `border-border-strong` | testo terziario, bordo marcato |
| `bg-primary`, `text-primary`, `bg-primary-light`, `text-primary-fg` | brand tematizzato light/dark (la scala `primary-50…900` resta) |
| `success`, `warning`, `error`, `info`, `accent` | toni di stato: `bg-<tono>` pieno (pallini, icone), `text-<tono>-fg`, `bg-<tono>-bg`, `border-<tono>-border` |
| `text-trend-positive/negative/neutral` | variazioni: buono/cattivo/neutro. La polarità (su = bene o male) la decide il componente |
| `risk-na/low/med/high/very-high` (+ `-bg`) | livelli di rischio/score, stessi nomi di beemap |
| `tabular-nums` (utility Tailwind) | cifre a larghezza fissa nelle colonne numeriche |

I valori stanno in `globals.css` (`:root` e `.dark`, variabili RGB `--color-*`); `tailwind.config.js` li espone come classi. Nei componenti non si usano classi di palette grezze (`gray-500`, `red-600`…) né esadecimali: unica eccezione il tema sempre scuro di CodeBlock; le tinte selezionabili di ColorPicker e i colori del logo sono dati, non stili.

Le app su Tailwind v3 ricevono i token con il preset e l'import di `globals.css`. Le app su Tailwind v4 (beemap, beegraph, beescout) oggi ricopiano le variabili nel proprio CSS: vedi TASK-888.03 per il CSS v4 ufficiale.

## App consumatrici e versione corrente

Rilevato il 2026-11-15 dai `package.json` delle app:

| App | Percorso | Versione in uso |
|-----|----------|----------------|
| BeeGraph | `beegraph` | `v0.7.1` |
| BeeMap | `beemap` | `v0.5.0` |
| Data Alveus | `data-alveus/frontend` | `v0.5.0` |
| Bumblebee | `bumblebee/src/frontend` | `v0.4.5` |
| Swarm | `databeez-swarm/src/frontend` | `v0.4.5` |
| Haive | `databeez-haive/frontend` | `v0.4.4` |
| BeeScout | `beescout` | `v0.4.4` |

abbrevia-portal non usa la libreria e resta fuori dal design system: ha uno stile proprio.
Piano di allineamento: epic TASK-888 nel backlog (milestone «PROD - DESIGN SYSTEM»).
