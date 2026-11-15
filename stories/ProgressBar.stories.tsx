import type { Meta, StoryObj } from "@storybook/react-vite"
import { ProgressBar } from "@/components/progress-bar"

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-sm p-4">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: { value: 64, label: "Copertura catastale", showValue: true },
}

export const Toni: Story = {
  render: () => (
    <div className="space-y-3">
      <ProgressBar value={72} tone="primary" label="Primary" showValue />
      <ProgressBar value={88} tone="success" label="Investment score" showValue />
      <ProgressBar value={45} tone="warning" label="Completezza anagrafica" showValue />
      <ProgressBar value={18} tone="error" label="Check superati" showValue />
      <ProgressBar value={60} tone="info" label="Imprese geocodificate" showValue />
      <ProgressBar value={35} tone="accent" label="Accent" showValue />
    </div>
  ),
}

export const ConMax: Story = {
  args: { value: 3, max: 5, label: "Fonti caricate", showValue: true, tone: "success" },
}

export const ValoriFuoriScala: Story = {
  render: () => (
    <div className="space-y-3">
      <ProgressBar value={-10} label="Negativo (limitato a 0)" showValue />
      <ProgressBar value={140} label="Oltre il massimo (limitato a 100)" showValue />
    </div>
  ),
}

export const SenzaEtichetta: Story = {
  args: { value: 50, "aria-label": "Avanzamento" },
}
