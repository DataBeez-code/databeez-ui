import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog"
import { Button } from "@/components/button"
import { Input } from "@/components/input"

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Apri dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dettagli azienda</DialogTitle>
          <DialogDescription>Rossi Meccanica S.r.l. - P.IVA 01234567897, Brescia (BS).</DialogDescription>
        </DialogHeader>
        <p className="text-sm text-text-base">
          Azienda attiva dal 1998, ATECO 25.62 (lavori di meccanica generale), 42 addetti.
        </p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Chiudi</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const ConfermaDistruttiva: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Elimina lista</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminare la lista &quot;Metalmeccaniche BS&quot;?</DialogTitle>
          <DialogDescription>
            La lista contiene 1.284 aziende e verrà eliminata per tutti i membri del team. L&apos;operazione non si può annullare.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose asChild>
            <Button variant="outline">Annulla</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive">Elimina definitivamente</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const ConModulo: Story = {
  render: () => {
    const [nome, setNome] = React.useState("")
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Nuova lista</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nuova lista di aziende</DialogTitle>
            <DialogDescription>Dai un nome alla lista: potrai aggiungere le aziende dalla ricerca.</DialogDescription>
          </DialogHeader>
          <Input label="Nome lista" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Es. Logistica Lombardia" />
          <DialogFooter className="gap-2 sm:gap-0">
            <DialogClose asChild>
              <Button variant="outline">Annulla</Button>
            </DialogClose>
            <Button disabled={!nome.trim()}>Crea lista</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}
