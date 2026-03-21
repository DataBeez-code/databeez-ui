import type { Meta, StoryObj } from "@storybook/react-vite"
import { Users, Key, Activity, TrendingUp } from "lucide-react"
import { StatCard } from "@/components/stat-card"

const meta: Meta<typeof StatCard> = {
  title: "Components/StatCard",
  component: StatCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof StatCard>

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
