# CLAUDE.md — databeez-ui

Libreria di componenti React condivisa tra tutti i prodotti DataBeez.
Pubblicata come pacchetto GitHub (`github:DataBeez-code/databeez-ui#vX.Y.Z`).

## Comandi di sviluppo

```bash
npm run dev        # build watch (Vite library mode)
npm run build      # build produzione in dist/
npm run storybook  # documentazione interattiva su http://localhost:6006
npm run lint       # type-check TypeScript
```

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

Ogni app consumatrice deve dichiarare questi token nel proprio CSS globale. Vedi la sezione "Dark mode" nel README per l'esempio completo.

## App consumatrici e versione corrente

| App | Versione in uso |
|-----|----------------|
| BeeMap | `v0.4.4` |
| BeeGraph | `v0.4.4` |
| BeeScout | `v0.4.4` |
| Haive (frontend) | `v0.4.4` |
| Swarm | da verificare |
