import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Combobox } from "@/components/combobox"

const meta: Meta<typeof Combobox> = {
  title: "Pickers/Combobox",
  component: Combobox,
  tags: ["autodocs"],
}
export default meta

const regioni = [
  { value: "lombardia", label: "Lombardia" },
  { value: "lazio", label: "Lazio" },
  { value: "campania", label: "Campania" },
  { value: "sicilia", label: "Sicilia" },
  { value: "veneto", label: "Veneto" },
  { value: "emilia-romagna", label: "Emilia-Romagna" },
  { value: "piemonte", label: "Piemonte" },
  { value: "puglia", label: "Puglia" },
  { value: "toscana", label: "Toscana" },
  { value: "calabria", label: "Calabria" },
  { value: "sardegna", label: "Sardegna" },
  { value: "liguria", label: "Liguria" },
  { value: "marche", label: "Marche" },
  { value: "abruzzo", label: "Abruzzo" },
  { value: "friuli-venezia-giulia", label: "Friuli Venezia Giulia" },
  { value: "trentino-alto-adige", label: "Trentino-Alto Adige" },
  { value: "umbria", label: "Umbria" },
  { value: "basilicata", label: "Basilicata" },
  { value: "molise", label: "Molise" },
  { value: "valle-d-aosta", label: "Valle d'Aosta" },
]

export const Default: StoryObj<typeof Combobox> = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="max-w-xs p-4">
        <Combobox
          options={regioni}
          value={value}
          onChange={setValue}
          label="Regione"
          placeholder="Seleziona regione..."
          searchPlaceholder="Cerca regione..."
          helperText="Digita per filtrare le regioni."
        />
      </div>
    )
  },
}

export const Clearable: StoryObj<typeof Combobox> = {
  name: "Con cancellazione",
  render: () => {
    const [value, setValue] = useState("lombardia")
    return (
      <div className="max-w-xs p-4">
        <Combobox
          options={regioni}
          value={value}
          onChange={setValue}
          label="Regione"
          clearable
        />
      </div>
    )
  },
}

export const WithError: StoryObj<typeof Combobox> = {
  name: "Con errore",
  render: () => (
    <div className="max-w-xs p-4">
      <Combobox
        options={regioni}
        label="Regione"
        error="La regione è obbligatoria."
      />
    </div>
  ),
}

export const FewOptions: StoryObj<typeof Combobox> = {
  name: "Poche opzioni",
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="max-w-xs p-4">
        <Combobox
          options={[
            { value: "si", label: "Sì" },
            { value: "no", label: "No" },
            { value: "forse", label: "Forse" },
          ]}
          value={value}
          onChange={setValue}
          label="Conferma"
          placeholder="Seleziona..."
        />
      </div>
    )
  },
}

export const Disabled: StoryObj<typeof Combobox> = {
  name: "Disabilitato",
  render: () => (
    <div className="max-w-xs p-4">
      <Combobox
        options={regioni}
        value="lombardia"
        label="Regione"
        disabled
      />
    </div>
  ),
}
