import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataSourceBadge } from "@/components/data-source-badge"

const meta: Meta<typeof DataSourceBadge> = {
  title: "Components/DataSourceBadge",
  component: DataSourceBadge,
  tags: ["autodocs"],
  argTypes: { source: { control: "radio", options: ["real", "simulated", "mixed"] } },
}

export default meta
type Story = StoryObj<typeof DataSourceBadge>

export const Reali: Story = { args: { source: "real" } }
export const Simulati: Story = { args: { source: "simulated" } }
export const Misti: Story = { args: { source: "mixed" } }

export const InIntestazione: Story = {
  render: () => (
    <div className="flex items-center gap-3 p-4 bg-surface border border-border rounded-lg max-w-md">
      <span className="text-text-base font-semibold">Fatturato per provincia</span>
      <DataSourceBadge source="mixed" />
    </div>
  ),
}
