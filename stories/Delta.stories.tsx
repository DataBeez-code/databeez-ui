import type { Meta, StoryObj } from "@storybook/react-vite"
import { Delta } from "@/components/delta"
import { formatDelta } from "@/lib/format"

const meta: Meta<typeof Delta> = {
  title: "Components/Delta",
  component: Delta,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Delta>

export const Default: Story = {
  args: { value: 12.4, suffix: "%", format: (v: number) => formatDelta(v, 1) },
}

export const Negativo: Story = {
  args: { value: -3.8, suffix: "%", format: (v: number) => formatDelta(v, 1) },
}

/** Più errori di qualità dati = peggio: la freccia sale ma il colore è negativo. */
export const UpIsBad: Story = {
  args: { value: 14, polarity: "up-is-bad", suffix: " errori" },
}

export const UpIsBadInCalo: Story = {
  args: { value: -6, polarity: "up-is-bad", suffix: " errori" },
}

export const Neutro: Story = {
  args: { value: 0 },
}

/** Sotto soglia (|0,2| <= 0,5 pp) la variazione è considerata neutra. */
export const SottoSoglia: Story = {
  args: { value: 0.2, threshold: 0.5, suffix: " pp", format: (v: number) => formatDelta(v, 1) },
}

export const ValoreMancante: Story = {
  args: { value: null },
}

export const Dimensioni: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4">
      <Delta value={8} suffix="%" size="sm" />
      <Delta value={8} suffix="%" size="md" />
    </div>
  ),
}

export const Panoramica: Story = {
  render: () => (
    <table className="text-sm text-text-base">
      <tbody>
        {[
          { label: "Fatturato", v: 4.2, suffix: "%", polarity: "up-is-good" as const },
          { label: "Addetti", v: -1.3, suffix: "%", polarity: "up-is-good" as const },
          { label: "Compravendite", v: 0, suffix: "%", polarity: "up-is-good" as const },
          { label: "Errori di qualità dati", v: 9, suffix: "", polarity: "up-is-bad" as const },
          { label: "Anomalie aperte", v: -4, suffix: "", polarity: "up-is-bad" as const },
        ].map((r) => (
          <tr key={r.label}>
            <td className="pr-6 py-1 text-text-muted">{r.label}</td>
            <td className="py-1">
              <Delta value={r.v} suffix={r.suffix} polarity={r.polarity} format={(v) => formatDelta(v, 1)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
}
