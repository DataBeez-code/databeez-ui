import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Building2 } from "lucide-react"
import { SidePanel } from "@/components/side-panel"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { InfoRow, Section } from "@/components/detail-list"

const meta: Meta<typeof SidePanel> = {
  title: "Components/SidePanel",
  component: SidePanel,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
}

export default meta
type Story = StoryObj<typeof SidePanel>

function Demo({ children, header, width }: { children: React.ReactNode; header?: React.ReactNode; width?: number }) {
  const [open, setOpen] = React.useState(true)
  return (
    <div className="p-6 min-h-screen bg-base">
      <Button variant="outline" onClick={() => setOpen(true)}>Apri pannello</Button>
      <SidePanel open={open} onClose={() => setOpen(false)} header={header} width={width}>
        {children}
      </SidePanel>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <Demo>
      <div className="px-4 pb-4">
        <p className="text-sm text-text-base">Seleziona un&apos;azienda dalla mappa per vedere i dettagli.</p>
      </div>
    </Demo>
  ),
}

export const ConHeader: Story = {
  render: () => (
    <Demo
      header={
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-databeez-primary" />
          <h2 className="font-semibold text-text-base truncate">Rossi Meccanica S.r.l.</h2>
          <Badge>Attiva</Badge>
        </div>
      }
    >
      <div className="p-4 flex flex-col gap-4">
        <Section title="Anagrafica">
          <InfoRow label="Partita IVA" value="01234567897" />
          <InfoRow label="Sede" value="Via dell'Industria 12, Brescia (BS)" />
        </Section>
      </div>
    </Demo>
  ),
}

export const ContenutoLungo: Story = {
  render: () => (
    <Demo
      width={420}
      header={<h2 className="font-semibold text-text-base">Verdi Acciai S.p.A.</h2>}
    >
      <div className="p-4 flex flex-col gap-6">
        {["Anagrafica", "Sede", "Attività", "Dimensione", "Bilancio", "Esponenti", "Soci"].map((titolo) => (
          <Section key={titolo} title={titolo}>
            <InfoRow label="Campo 1" value="Valore di esempio per la sezione" />
            <InfoRow label="Campo 2" value="Via Roma 1, 24121 Bergamo (BG)" />
            <InfoRow label="Campo 3" />
          </Section>
        ))}
      </div>
    </Demo>
  ),
}
