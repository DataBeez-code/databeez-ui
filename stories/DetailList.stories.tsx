import type { Meta, StoryObj } from "@storybook/react-vite"
import { InfoRow, Section } from "@/components/detail-list"

const meta: Meta<typeof Section> = {
  title: "Components/DetailList",
  component: Section,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Section>

export const SchedaAzienda: Story = {
  args: { title: "Anagrafica", className: "max-w-sm" },
  render: (args) => (
    <div className="p-4 bg-surface">
      <Section {...args}>
        <InfoRow label="Denominazione" value="Rossi Meccanica S.r.l." />
        <InfoRow label="Partita IVA" value="01234567897" />
        <InfoRow label="Codice fiscale" value="01234567897" />
        <InfoRow label="ATECO" value="25.62 - Lavori di meccanica generale" />
        <InfoRow label="Sede" value="Via dell'Industria 12, 25125 Brescia (BS)" />
      </Section>
    </div>
  ),
}

export const ValoreMancante: Story = {
  render: () => (
    <div className="p-4 bg-surface max-w-sm">
      <Section title="Contatti">
        <InfoRow label="PEC" value="rossimeccanica@pec.example.it" />
        <InfoRow label="Sito web" />
        <InfoRow label="Telefono" value={null} />
      </Section>
    </div>
  ),
}

export const PiuSezioni: Story = {
  render: () => (
    <div className="p-4 bg-surface max-w-sm flex flex-col gap-6">
      <Section title="Anagrafica">
        <InfoRow label="Denominazione" value="Bianchi Logistica S.p.A." />
        <InfoRow label="Partita IVA" value="09876543217" />
      </Section>
      <Section title="Dimensione">
        <InfoRow label="Addetti" value="128" />
        <InfoRow label="Fatturato 2024" value="€ 14.200.000" />
      </Section>
    </div>
  ),
}
