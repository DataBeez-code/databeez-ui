import type { Meta, StoryObj } from "@storybook/react"
import { Zap, Shield, Globe } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"
import { Button } from "@/components/button"

const meta: Meta<typeof FeatureCard> = {
  title: "Components/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
  argTypes: {
    horizontal: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof FeatureCard>

export const Vertical: Story = {
  render: () => (
    <div className="w-72">
      <FeatureCard
        icon={Zap}
        title="Alta Performance"
        description="Risposte in meno di 100ms garantite dal nostro infrastruttura cloud."
        action={<Button size="sm" variant="outline">Scopri di più</Button>}
      />
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="max-w-lg">
      <FeatureCard
        icon={Shield}
        title="Sicurezza Enterprise"
        description="Autenticazione OAuth2, rate limiting e audit log inclusi."
        horizontal
      />
    </div>
  ),
}

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-4">
      <FeatureCard icon={Zap} title="Veloce" description="Latenza minima garantita." />
      <FeatureCard icon={Shield} title="Sicuro" description="Crittografia end-to-end." />
      <FeatureCard icon={Globe} title="Globale" description="CDN worldwide." />
    </div>
  ),
}
