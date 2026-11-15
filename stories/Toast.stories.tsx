import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toaster, toast, dismissToast } from "@/components/toast"
import { Button } from "@/components/button"

const meta: Meta<typeof Toaster> = {
  title: "Components/Toast",
  component: Toaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Varianti: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button type="button" variant="outline" onClick={() => toast({ title: "Salvato", description: "Le modifiche sono state registrate." })}>Neutro</Button>
      <Button type="button" variant="outline" onClick={() => toast.success("Richiesta inviata", { description: "Ti avviseremo in app." })}>Success</Button>
      <Button type="button" variant="outline" onClick={() => toast.warning("Quota quasi esaurita", { description: "Restano 12 ricerche." })}>Warning</Button>
      <Button type="button" variant="outline" onClick={() => toast.error("Operazione non riuscita", { description: "Riprova tra qualche istante." })}>Error</Button>
      <Button type="button" variant="outline" onClick={() => toast.info("Nuova versione disponibile")}>Info</Button>
    </div>
  ),
}

export const ConAnnulla: Story = {
  render: () => (
    <Button
      type="button"
      onClick={() =>
        toast.success("Richiesta catasto inviata", {
          description: "Ti avviseremo in app e via email.",
          duration: 8000,
          action: { label: "Annulla", onClick: () => toast({ title: "Richiesta annullata" }) },
        })
      }
    >
      Invia richiesta
    </Button>
  ),
}

export const SenzaChiusuraAutomatica: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button type="button" onClick={() => toast.error("Connessione persa", { id: "conn", duration: null })}>
        Mostra persistente
      </Button>
      <Button type="button" variant="outline" onClick={() => dismissToast()}>
        Chiudi tutti
      </Button>
    </div>
  ),
}
