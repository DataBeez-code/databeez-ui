import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Design Tokens/Colors",
  tags: ["autodocs"],
}

export default meta

const colorTokens = [
  { name: "bg-base", class: "bg-base", label: "Background Base" },
  { name: "bg-surface", class: "bg-surface", label: "Surface" },
  { name: "bg-subtle", class: "bg-subtle", label: "Subtle" },
  { name: "border", class: "bg-border", label: "Border" },
  { name: "primary-500", class: "bg-primary-500", label: "Primary (Amber 500)" },
  { name: "primary-400", class: "bg-primary-400", label: "Primary Light (Amber 400)" },
  { name: "databeez-accent", class: "bg-databeez-accent", label: "Accent (Amber 600)" },
  { name: "databeez-success", class: "bg-databeez-success", label: "Success (Emerald 500)" },
  { name: "error-500", class: "bg-error-500", label: "Error (Red 500)" },
]

export const Palette: StoryObj = {
  render: () => (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-text-base">Color Tokens</h2>
      <div className="grid grid-cols-3 gap-3">
        {colorTokens.map((token) => (
          <div key={token.name} className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-lg border border-border ${token.class}`} />
            <div>
              <p className="text-sm font-medium text-text-base">{token.label}</p>
              <p className="text-xs text-text-muted font-mono">{token.name}</p>
            </div>
          </div>
        ))}
      </div>
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
    </div>
  ),
}
