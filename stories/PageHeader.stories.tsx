import type { Meta, StoryObj } from "@storybook/react-vite"
import { Download, Plus } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/button"

const meta: Meta<typeof PageHeader> = {
  title: "Components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  args: { title: "Aziende" },
}

export const ConDescrizione: Story = {
  args: { title: "Aziende", description: "Ricerca e confronto delle imprese del Registro Imprese." },
}

export const ConAzioni: Story = {
  args: {
    title: "Aziende",
    description: "1.284 risultati in provincia di Brescia",
    actions: (
      <>
        <Button variant="outline"><Download className="h-4 w-4 mr-2" />Esporta</Button>
        <Button><Plus className="h-4 w-4 mr-2" />Nuova lista</Button>
      </>
    ),
  },
}

export const ConBreadcrumb: Story = {
  args: {
    title: "Rossi Meccanica S.r.l.",
    description: "P.IVA 01234567897 · Brescia (BS)",
    breadcrumb: <span className="text-sm text-text-muted">Aziende / Brescia / Rossi Meccanica S.r.l.</span>,
  },
}
