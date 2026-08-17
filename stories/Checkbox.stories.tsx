import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox } from "@/components/checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <label className="flex items-center gap-2 text-sm text-text-base">
        <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        Ricevi notifiche
      </label>
    )
  },
}

export const Uncontrolled: Story = {
  render: () => (
    <label className="flex items-center gap-2 text-sm text-text-base">
      <Checkbox defaultChecked />
      Selezionato di default (stato gestito internamente)
    </label>
  ),
}

export const Indeterminate: Story = {
  render: () => (
    <label className="flex items-center gap-2 text-sm text-text-base">
      <Checkbox checked={false} indeterminate />
      Selezione parziale
    </label>
  ),
}

export const Small: Story = {
  render: () => (
    <label className="flex items-center gap-2 text-xs text-text-base">
      <Checkbox size="sm" defaultChecked />
      Dimensione compatta
    </label>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2 text-sm text-text-muted">
        <Checkbox disabled />
        Disabilitato, spento
      </label>
      <label className="flex items-center gap-2 text-sm text-text-muted">
        <Checkbox disabled defaultChecked />
        Disabilitato, acceso
      </label>
    </div>
  ),
}
