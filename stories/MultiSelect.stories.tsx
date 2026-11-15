import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { MultiSelect } from "@/components/multi-select"

const meta: Meta<typeof MultiSelect> = {
  title: "Pickers/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof MultiSelect>

const REGIONI = [
  { value: "lom", label: "Lombardia" },
  { value: "pie", label: "Piemonte" },
  { value: "ven", label: "Veneto" },
  { value: "emr", label: "Emilia-Romagna" },
  { value: "tos", label: "Toscana" },
  { value: "laz", label: "Lazio" },
  { value: "cam", label: "Campania", disabled: true },
  { value: "pug", label: "Puglia" },
]

function Demo(props: Partial<React.ComponentProps<typeof MultiSelect>>) {
  const [value, setValue] = useState<string[]>(props.value ?? [])
  return (
    <div className="w-80">
      <MultiSelect options={REGIONI} {...props} value={value} onChange={setValue} />
    </div>
  )
}

export const Default: Story = { render: () => <Demo label="Regioni" /> }

export const ConSelezionati: Story = {
  render: () => <Demo label="Regioni" value={["lom", "pie", "ven"]} />,
}

export const RiepilogoNumerico: Story = {
  render: () => <Demo label="Regioni" value={["lom", "pie", "ven"]} maxVisibleLabels={0} />,
}

export const ConAzioniDiMassa: Story = {
  render: () => (
    <Demo label="Regioni" showBulkActions helperText="Seleziona tutto agisce sui risultati filtrati." />
  ),
}

export const ConErrore: Story = {
  render: () => <Demo label="Regioni" error="Seleziona almeno una regione." />,
}

export const Disabilitato: Story = {
  render: () => <Demo label="Regioni" disabled value={["lom"]} />,
}
