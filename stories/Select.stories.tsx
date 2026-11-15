import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/select"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="w-72 p-4"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Forma giuridica" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="srl">S.r.l.</SelectItem>
        <SelectItem value="spa">S.p.A.</SelectItem>
        <SelectItem value="snc">S.n.c.</SelectItem>
        <SelectItem value="ditta">Ditta individuale</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const ConValoreIniziale: Story = {
  render: () => (
    <Select defaultValue="spa">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="srl">S.r.l.</SelectItem>
        <SelectItem value="spa">S.p.A.</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Disabilitato: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Provincia" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="bs">Brescia</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const ConGruppi: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Settore ATECO" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Manifattura</SelectLabel>
          <SelectItem value="25.62">25.62 - Meccanica generale</SelectItem>
          <SelectItem value="28.29">28.29 - Macchine per impieghi generali</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Trasporti</SelectLabel>
          <SelectItem value="49.41">49.41 - Trasporto merci su strada</SelectItem>
          <SelectItem value="52.29">52.29 - Altre attività di supporto ai trasporti</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

const PROVINCE: [string, string][] = [
  ["AG", "Agrigento"], ["AL", "Alessandria"], ["AN", "Ancona"], ["AO", "Aosta"], ["AR", "Arezzo"],
  ["AP", "Ascoli Piceno"], ["AT", "Asti"], ["AV", "Avellino"], ["BA", "Bari"], ["BT", "Barletta-Andria-Trani"],
  ["BL", "Belluno"], ["BN", "Benevento"], ["BG", "Bergamo"], ["BI", "Biella"], ["BO", "Bologna"],
  ["BZ", "Bolzano"], ["BS", "Brescia"], ["BR", "Brindisi"], ["CA", "Cagliari"], ["CL", "Caltanissetta"],
  ["CB", "Campobasso"], ["CE", "Caserta"], ["CT", "Catania"], ["CZ", "Catanzaro"], ["CH", "Chieti"],
  ["CO", "Como"], ["CS", "Cosenza"], ["CR", "Cremona"], ["KR", "Crotone"], ["CN", "Cuneo"],
  ["FI", "Firenze"], ["GE", "Genova"], ["MI", "Milano"], ["NA", "Napoli"], ["PD", "Padova"],
  ["RM", "Roma"], ["TO", "Torino"], ["VR", "Verona"],
]

export const MolteOpzioni: Story = {
  render: () => {
    const [value, setValue] = React.useState("BS")
    return (
      <div className="flex flex-col gap-2">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger>
            <SelectValue placeholder="Provincia" />
          </SelectTrigger>
          <SelectContent>
            {PROVINCE.map(([sigla, nome]) => (
              <SelectItem key={sigla} value={sigla}>{nome} ({sigla})</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-text-muted">Selezionata: {value}</p>
      </div>
    )
  },
}
