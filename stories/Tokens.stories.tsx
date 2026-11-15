import type { Meta, StoryObj } from "@storybook/react-vite"
import type { ReactNode } from "react"

const meta: Meta = {
  title: "Design Tokens/Colors",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Token di colore definiti come variabili CSS in `globals.css` (`:root` e `.dark`) ed esposti come classi Tailwind. " +
          "Ogni gruppo è mostrato nel tema corrente e, a destra, dentro un contenitore `.dark`: così si confrontano i due temi " +
          "e si verifica che i token funzionino anche quando `.dark` è applicato a un contenitore e non a `<html>`.",
      },
    },
  },
}

export default meta

// Le classi sono stringhe letterali complete: Tailwind le trova scansionando questo file.
type Swatch = { cls: string; name: string }

const surfaces: Swatch[] = [
  { cls: "bg-base", name: "base" },
  { cls: "bg-surface", name: "surface" },
  { cls: "bg-subtle", name: "subtle" },
  { cls: "bg-emphasis", name: "emphasis" },
  { cls: "bg-border", name: "border" },
  { cls: "bg-border-strong", name: "border-strong" },
]

const texts: Swatch[] = [
  { cls: "text-text-base", name: "text-base" },
  { cls: "text-text-muted", name: "text-muted" },
  { cls: "text-text-subtle", name: "text-subtle" },
]

const brand: Swatch[] = [
  { cls: "bg-primary", name: "primary" },
  { cls: "bg-primary-hover", name: "primary-hover" },
  { cls: "bg-primary-light", name: "primary-light" },
]

const tones = [
  { tone: "success", solid: "bg-success", badge: "bg-success-bg text-success-fg border-success-border" },
  { tone: "warning", solid: "bg-warning", badge: "bg-warning-bg text-warning-fg border-warning-border" },
  { tone: "error", solid: "bg-error", badge: "bg-error-bg text-error-fg border-error-border" },
  { tone: "info", solid: "bg-info", badge: "bg-info-bg text-info-fg border-info-border" },
  { tone: "accent", solid: "bg-accent", badge: "bg-accent-bg text-accent-fg border-accent-border" },
]

const trends = [
  { cls: "text-trend-positive", name: "trend-positive", sample: "▲ +12,4%" },
  { cls: "text-trend-negative", name: "trend-negative", sample: "▼ −3,1%" },
  { cls: "text-trend-neutral", name: "trend-neutral", sample: "● 0%" },
]

const risks = [
  { level: "na", text: "text-risk-na", bg: "bg-risk-na-bg", dot: "bg-risk-na", label: "n.d." },
  { level: "low", text: "text-risk-low", bg: "bg-risk-low-bg", dot: "bg-risk-low", label: "Basso" },
  { level: "med", text: "text-risk-med", bg: "bg-risk-med-bg", dot: "bg-risk-med", label: "Medio" },
  { level: "high", text: "text-risk-high", bg: "bg-risk-high-bg", dot: "bg-risk-high", label: "Alto" },
  { level: "very-high", text: "text-risk-very-high", bg: "bg-risk-very-high-bg", dot: "bg-risk-very-high", label: "Molto alto" },
]

function SwatchRow({ items }: { items: Swatch[] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((s) => (
        <div key={s.name} className="flex items-center gap-2">
          <div className={`h-8 w-8 rounded-md border border-border ${s.cls}`} />
          <code className="text-xs text-text-muted">{s.name}</code>
        </div>
      ))}
    </div>
  )
}

/** Mostra il contenuto nel tema corrente e, accanto, dentro un contenitore .dark */
function BothThemes({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-2">
      <h3 className="text-sm font-semibold text-text-base">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="mb-3 text-xs text-text-muted">Tema corrente</p>
          {children}
        </div>
        <div className="dark rounded-lg border border-border bg-surface p-4">
          <p className="mb-3 text-xs text-text-muted">Dark</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export const Palette: StoryObj = {
  render: () => (
    <div className="space-y-8 p-6">
      <BothThemes title="Superfici e bordi">
        <SwatchRow items={surfaces} />
      </BothThemes>

      <BothThemes title="Testo">
        <div className="space-y-1">
          {texts.map((t) => (
            <p key={t.name} className={`text-sm ${t.cls}`}>
              {t.name} — Ragione sociale, P.IVA, importi
            </p>
          ))}
        </div>
      </BothThemes>

      <BothThemes title="Brand">
        <SwatchRow items={brand} />
        <span className="mt-3 inline-flex rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-fg">
          primary + primary-fg
        </span>
      </BothThemes>

      <BothThemes title="Toni di stato (pieno, -fg, -bg, -border)">
        <div className="space-y-2">
          {tones.map((t) => (
            <div key={t.tone} className="flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${t.solid}`} />
              <span className={`rounded-md border px-2 py-0.5 text-xs font-medium ${t.badge}`}>{t.tone}</span>
            </div>
          ))}
        </div>
      </BothThemes>

      <BothThemes title="Variazioni (la polarità la sceglie il componente)">
        <div className="space-y-1">
          {trends.map((t) => (
            <p key={t.name} className="text-sm">
              <span className={`font-medium tabular-nums ${t.cls}`}>{t.sample}</span>{" "}
              <code className="text-xs text-text-muted">{t.name}</code>
            </p>
          ))}
        </div>
      </BothThemes>

      <BothThemes title="Rischio / score (stessi nomi di beemap)">
        <div className="flex flex-wrap gap-2">
          {risks.map((r) => (
            <span key={r.level} className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium ${r.bg} ${r.text}`}>
              <span className={`h-2 w-2 rounded-full ${r.dot}`} />
              {r.label}
            </span>
          ))}
        </div>
      </BothThemes>
    </div>
  ),
}

export const Typography: StoryObj = {
  render: () => (
    <div className="p-6 space-y-4 max-w-lg">
      <h1 className="text-4xl font-bold text-text-base">H1 — Heading 4xl</h1>
      <h2 className="text-3xl font-semibold text-text-base">H2 — Heading 3xl</h2>
      <h3 className="text-2xl font-semibold text-text-base">H3 — Heading 2xl</h3>
      <h4 className="text-xl font-semibold text-text-base">H4 — Heading xl</h4>
      <p className="text-base text-text-base">Body — Testo base. Font: Inter, 16px.</p>
      <p className="text-sm text-text-muted">Small muted — Descrizioni e helper text.</p>
      <p className="text-xs text-text-subtle">XS subtle — Label secondarie.</p>
      <p className="font-mono text-sm text-text-base">Mono — JetBrains Mono per il codice.</p>
      <p className="text-sm text-text-base tabular-nums">Cifre tabulari (tabular-nums) — € 1.234 · € 98.765</p>
    </div>
  ),
}
