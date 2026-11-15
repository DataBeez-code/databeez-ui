import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Building2, Users, MapPin } from "lucide-react"
import { TabSwitch } from "@/components/tab-switch"

const meta: Meta<typeof TabSwitch> = {
  title: "Components/TabSwitch",
  component: TabSwitch,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TabSwitch>

export const Default: Story = {
  render: () => {
    const [tab, setTab] = React.useState("anagrafica")
    return (
      <div className="max-w-xl">
        <TabSwitch
          activeTab={tab}
          onChange={setTab}
          tabs={[
            { id: "anagrafica", label: "Anagrafica" },
            { id: "bilanci", label: "Bilanci" },
            { id: "soci", label: "Soci" },
          ]}
        />
        <p className="py-4 text-sm text-text-muted">Scheda attiva: {tab}</p>
      </div>
    )
  },
}

export const ConIcone: Story = {
  render: () => {
    const [tab, setTab] = React.useState("azienda")
    return (
      <TabSwitch
        className="max-w-xl"
        activeTab={tab}
        onChange={setTab}
        tabs={[
          { id: "azienda", label: "Azienda", icon: Building2 },
          { id: "persone", label: "Persone", icon: Users },
          { id: "sedi", label: "Sedi", icon: MapPin },
        ]}
      />
    )
  },
}
