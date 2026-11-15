import type { Meta, StoryObj } from "@storybook/react-vite"
import { Search, Building2 } from "lucide-react"
import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/button"

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    icon: Search,
    title: "Nessun risultato",
    description: "Nessuna azienda corrisponde ai filtri selezionati. Prova ad allargare la provincia o il codice ATECO.",
  },
}

export const ConAzione: Story = {
  args: {
    icon: Building2,
    title: "Nessuna azienda salvata",
    description: "Salva un'azienda dalla ricerca per ritrovarla qui.",
    action: <Button>Vai alla ricerca</Button>,
  },
}

export const SoloTitolo: Story = {
  args: { title: "Nessun dato disponibile" },
}
