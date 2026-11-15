import type { Meta, StoryObj } from "@storybook/react-vite"
import { Switch } from "@/components/switch"

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const Attivo: Story = { args: { defaultChecked: true } }

export const Disabilitato: Story = {
  render: () => (
    <div className="flex gap-4 p-2">
      <Switch disabled />
      <Switch disabled defaultChecked />
    </div>
  ),
}

export const ConEtichetta: Story = {
  render: () => (
    <label className="flex items-center gap-3 text-sm text-text-base">
      <Switch defaultChecked />
      Includi aziende cessate
    </label>
  ),
}
