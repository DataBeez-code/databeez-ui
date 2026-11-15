import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  formatDate,
  formatDateTime,
  formatDelta,
  formatEuro,
  formatNumber,
  formatPercent,
} from "@/lib/format"

const meta: Meta = {
  title: "Utilities/Format",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Formattatori italiani standard DataBeez (`src/lib/format.ts`). Euro con simbolo a sinistra e spazio indivisibile, " +
          "migliaia sempre separate, meno vero U+2212 per i negativi. Valori mancanti (`null`, `undefined`, `NaN`) → `—`. " +
          "**Regola:** forma compatta (`€ 14,2 mln`) solo in KPI/card; forma piena nelle colonne numeriche, allineate a destra.",
      },
    },
  },
}

export default meta
type Story = StoryObj

function Rows({ rows }: { rows: [string, string][] }) {
  return (
    <table className="text-sm">
      <thead>
        <tr className="text-left text-gray-500">
          <th className="pr-8 pb-2 font-medium">Chiamata</th>
          <th className="pb-2 font-medium">Risultato</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([call, out]) => (
          <tr key={call}>
            <td className="pr-8 py-1 font-mono text-xs">{call}</td>
            <td className="py-1 font-mono">{out}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const Euro: Story = {
  render: () => (
    <Rows
      rows={[
        ["formatEuro(1234)", formatEuro(1234)],
        ["formatEuro(2500)", formatEuro(2500)],
        ["formatEuro(-2500)", formatEuro(-2500)],
        ["formatEuro(1234.5, { cents: true })", formatEuro(1234.5, { cents: true })],
        ["formatEuro(14_200_000)", formatEuro(14_200_000)],
        ["formatEuro(14_200_000, { compact: true })", formatEuro(14_200_000, { compact: true })],
        ["formatEuro(null)", formatEuro(null)],
      ]}
    />
  ),
}

export const NumeriPercentualiVariazioni: Story = {
  name: "Numeri, percentuali, variazioni",
  render: () => (
    <Rows
      rows={[
        ["formatNumber(1234567)", formatNumber(1234567)],
        ["formatNumber(1234.5, 2)", formatNumber(1234.5, 2)],
        ["formatPercent(12.5)  // punti percentuali", formatPercent(12.5)],
        ["formatPercent(12, { fixed: true })", formatPercent(12, { fixed: true })],
        ["formatDelta(6)", formatDelta(6)],
        ["formatDelta(-14)", formatDelta(-14)],
        ["formatDelta(2.5, 1)", formatDelta(2.5, 1)],
        ["formatPercent(undefined)", formatPercent(undefined)],
      ]}
    />
  ),
}

export const Date: Story = {
  render: () => (
    <Rows
      rows={[
        ['formatDate("2026-09-19")', formatDate("2026-09-19")],
        ["formatDateTime(new Date(2026, 8, 19, 18, 30))", formatDateTime(new (globalThis.Date)(2026, 8, 19, 18, 30))],
        ['formatDate("non una data")', formatDate("non una data")],
      ]}
    />
  ),
}

/** Forma piena nelle colonne (allineata a destra), compatta solo nelle card KPI. */
export const ColonneVsKpi: Story = {
  name: "Colonne vs KPI",
  render: () => {
    const values = [14_200_000, 2500, -980_000, 1234.5]
    return (
      <div className="flex gap-12 items-start">
        <table className="text-sm">
          <thead>
            <tr><th className="text-right pb-2 font-medium text-gray-500">Colonna (piena)</th></tr>
          </thead>
          <tbody>
            {values.map((v) => (
              <tr key={v}><td className="text-right font-mono tabular-nums py-1">{formatEuro(v, { cents: true })}</td></tr>
            ))}
          </tbody>
        </table>
        <div className="rounded-lg border p-4">
          <div className="text-xs text-gray-500">Patrimonio (KPI)</div>
          <div className="text-2xl font-semibold">{formatEuro(14_200_000, { compact: true })}</div>
        </div>
      </div>
    )
  },
}
