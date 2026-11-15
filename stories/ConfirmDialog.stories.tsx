import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ConfirmDialog } from "@/components/confirm-dialog"
import { Button } from "@/components/button"

const meta: Meta<typeof ConfirmDialog> = {
  title: "Components/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof ConfirmDialog>

export const Default: Story = {
  render: () => (
    <ConfirmDialog
      trigger={<Button type="button" variant="outline">Pubblica report</Button>}
      title="Pubblicare il report?"
      description="Sarà visibile a tutti i membri del team."
      confirmLabel="Pubblica"
      onConfirm={() => {}}
    />
  ),
}

export const Distruttivo: Story = {
  render: () => (
    <ConfirmDialog
      trigger={<Button type="button" variant="destructive">Elimina lista</Button>}
      title="Eliminare la lista?"
      description="La lista contiene 1.284 aziende. L'operazione non si può annullare."
      confirmLabel="Elimina"
      destructive
      onConfirm={() => {}}
    />
  ),
}

export const ConAttesa: Story = {
  render: () => (
    <ConfirmDialog
      trigger={<Button type="button" variant="destructive">Elimina (2 s di attesa)</Button>}
      title="Eliminare l'utente?"
      description="Il pulsante resta in attesa finché la Promise non si risolve."
      confirmLabel="Elimina"
      destructive
      onConfirm={() => new Promise((resolve) => setTimeout(resolve, 2000))}
    />
  ),
}

export const Controllato: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <>
        <Button type="button" onClick={() => setOpen(true)}>Apri</Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Uscire senza salvare?"
          confirmLabel="Esci"
          cancelLabel="Resta"
          onConfirm={() => {}}
        />
      </>
    )
  },
}
