import type { Meta, StoryObj } from "@storybook/react-vite"
import { RiskBadge, riskLevelFromScore, type RiskLevel } from "@/components/risk-badge"

const meta: Meta<typeof RiskBadge> = {
  title: "Components/RiskBadge",
  component: RiskBadge,
  tags: ["autodocs"],
  argTypes: {
    level: { control: "select", options: ["na", "low", "med", "high", "very-high"] },
  },
}

export default meta
type Story = StoryObj<typeof RiskBadge>

const LEVELS: RiskLevel[] = ["na", "low", "med", "high", "very-high"]

export const Default: Story = { args: { level: "med" } }

export const AllLevels: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      {LEVELS.map((l) => (
        <RiskBadge key={l} level={l} />
      ))}
    </div>
  ),
}

export const WithValue: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      {[12, 45, 68, 91].map((v) => (
        <RiskBadge key={v} level={riskLevelFromScore(v, [30, 60, 80])} value={v} subject="Score" />
      ))}
      <RiskBadge level={riskLevelFromScore(null, [30, 60, 80])} />
    </div>
  ),
}

export const CustomLabels: Story = {
  args: { level: "very-high", labels: { "very-high": "Critico" }, value: 95 },
}
