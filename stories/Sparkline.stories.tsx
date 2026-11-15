import type { Meta, StoryObj } from "@storybook/react-vite"
import { Sparkline } from "@/components/sparkline"

const meta: Meta<typeof Sparkline> = {
  title: "Components/Sparkline",
  component: Sparkline,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Sparkline>

// Compravendite mensili, dati inventati
const compravendite = [112, 118, 109, 124, 131, 127, 140, 138, 152, 149, 161, 170]

export const Default: Story = {
  args: { data: compravendite, "aria-label": "Compravendite mensili, ultimi 12 mesi" },
}

export const ConArea: Story = {
  args: { data: compravendite, area: true, width: 120, height: 36 },
}

export const ColoriToken: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4">
      <Sparkline data={compravendite} className="text-trend-positive" area />
      <Sparkline data={[...compravendite].reverse()} className="text-trend-negative" area />
      <Sparkline data={compravendite} className="text-info" />
      <Sparkline data={compravendite} className="text-trend-neutral" />
    </div>
  ),
}

export const CasiLimite: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4 text-sm text-text-muted">
      <span>Vuota</span>
      <Sparkline data={[]} />
      <span>1 punto</span>
      <Sparkline data={[42]} />
      <span>Costante</span>
      <Sparkline data={[5, 5, 5, 5, 5]} area />
    </div>
  ),
}
