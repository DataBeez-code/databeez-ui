import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { FilterChip } from "@/components/filter-chip"

const meta: Meta<typeof FilterChip> = {
  title: "Components/FilterChip",
  component: FilterChip,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof FilterChip>

function ToggleDemo() {
  const [on, setOn] = useState(false)
  return <FilterChip label="Solo attive" active={on} onClick={() => setOn(!on)} />
}

function InsiemeDemo() {
  const [attivi, setAttivi] = useState<string[]>(["Attive"])
  const tutti = ["Attive", "Cessate", "In liquidazione", "Con bilancio"]
  return (
    <div className="flex flex-wrap gap-2">
      {tutti.map((t) => (
        <FilterChip
          key={t}
          label={t}
          active={attivi.includes(t)}
          onClick={() => setAttivi((a) => (a.includes(t) ? a.filter((x) => x !== t) : [...a, t]))}
        />
      ))}
    </div>
  )
}

function RimovibiliDemo() {
  const [chips, setChips] = useState(["Lombardia", "ATECO 62", "Fatturato > 1 M"])
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((c) => (
        <FilterChip key={c} label={c} active onRemove={() => setChips((x) => x.filter((y) => y !== c))} />
      ))}
      {chips.length === 0 && <span className="text-sm text-text-muted">Nessun filtro attivo.</span>}
    </div>
  )
}

export const Toggle: Story = { render: () => <ToggleDemo /> }
export const InsiemeDiFiltri: Story = { render: () => <InsiemeDemo /> }
export const Rimovibili: Story = { render: () => <RimovibiliDemo /> }

export const Disabilitato: Story = {
  render: () => (
    <div className="flex gap-2">
      <FilterChip label="Disabilitato" disabled />
      <FilterChip label="Rimovibile" active disabled onRemove={() => {}} />
    </div>
  ),
}
