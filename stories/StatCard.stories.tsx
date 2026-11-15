import type { Meta, StoryObj } from "@storybook/react-vite"
import { Users, Key, Activity, TrendingUp, Building2, AlertTriangle, Euro, Home } from "lucide-react"
import { StatCard } from "@/components/stat-card"
import { Sparkline } from "@/components/sparkline"
import { formatDelta, formatEuro, formatNumber } from "@/lib/format"

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof StatCard>

/** Forma storica: trend come testo con `positive`. Resta supportata. */
export const Default: Story = {
  args: {
    icon: Users,
    label: "Utenti Attivi",
    value: "1,234",
    trend: { value: "+12% vs mese scorso", positive: true },
  },
}

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-4 max-w-lg">
      <StatCard icon={Users} label="Utenti" value="1,234" trend={{ value: "+12%", positive: true }} />
      <StatCard icon={Key} label="API Keys" value="89" trend={{ value: "+5%", positive: true }} />
      <StatCard icon={Activity} label="Richieste/giorno" value="48.2K" trend={{ value: "-3%", positive: false }} />
      <StatCard icon={TrendingUp} label="Crediti usati" value="72%" />
    </div>
  ),
}

export const TrendStrutturato: Story = {
  args: {
    icon: Euro,
    label: "Fatturato aggregato",
    value: formatEuro(14_200_000, { compact: true }),
    trend: { value: 4.2, suffix: "%", format: (v: number) => formatDelta(v, 1) },
  },
}

/** Più errori = peggio: la freccia sale, il colore è negativo. */
export const TrendUpIsBad: Story = {
  args: {
    icon: AlertTriangle,
    label: "Errori di qualità dati",
    value: formatNumber(128),
    trend: { value: 9, polarity: "up-is-bad" },
  },
}

export const TrendNeutro: Story = {
  args: {
    icon: Building2,
    label: "Addetti",
    value: formatNumber(3420),
    trend: { value: 0.2, threshold: 0.5, suffix: "%", format: (v: number) => formatDelta(v, 1) },
  },
}

export const ConHint: Story = {
  args: {
    icon: Home,
    label: "Compravendite",
    value: formatNumber(1870),
    trend: { value: 6.1, suffix: "%", format: (v: number) => formatDelta(v, 1) },
    hint: "vs trimestre precedente · fonte OMI",
  },
}

export const Compatta: Story = {
  args: {
    size: "compact",
    icon: Building2,
    label: "Imprese attive",
    value: formatNumber(18_450),
    trend: { value: -1.4, suffix: "%", format: (v: number) => formatDelta(v, 1) },
    hint: "provincia di Torino",
    className: "max-w-[14rem]",
  },
}

export const GrigliaKpi: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 max-w-3xl">
      <StatCard
        size="compact"
        label="Fatturato"
        value={formatEuro(14_200_000, { compact: true })}
        trend={{ value: 4.2, suffix: "%", format: (v) => formatDelta(v, 1) }}
        hint="vs 2024"
      />
      <StatCard
        size="compact"
        label="Utile netto"
        value={formatEuro(-380_000)}
        trend={{ value: -12.5, suffix: "%", format: (v) => formatDelta(v, 1) }}
        hint="vs 2024"
      />
      <StatCard
        size="compact"
        label="Addetti"
        value={formatNumber(212)}
        trend={{ value: 0, suffix: "%" }}
        hint="invariati"
      />
      <StatCard
        size="compact"
        label="Errori qualità dati"
        value={formatNumber(128)}
        trend={{ value: 9, polarity: "up-is-bad" }}
        hint="ultimo run"
      />
    </div>
  ),
}

export const ConSparkline: Story = {
  render: () => (
    <div className="max-w-[14rem] p-4">
      <StatCard
        size="compact"
        label="Compravendite mensili"
        value={formatNumber(170)}
        trend={{ value: 5.6, suffix: "%", format: (v) => formatDelta(v, 1) }}
        hint={
          <Sparkline
            data={[112, 118, 109, 124, 131, 127, 140, 138, 152, 149, 161, 170]}
            className="text-trend-positive"
            area
            width={120}
          />
        }
      />
    </div>
  ),
}
