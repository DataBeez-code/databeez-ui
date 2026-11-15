import type { Meta, StoryObj } from "@storybook/react-vite"
import { CompanyHeader } from "@/components/company-header"
import { RiskBadge } from "@/components/risk-badge"

// Dati INVENTATI: ragioni sociali, CF e P.IVA sono fittizi.
const meta: Meta<typeof CompanyHeader> = {
  title: "Components/CompanyHeader",
  component: CompanyHeader,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="p-4"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof CompanyHeader>

export const OrganizzazioneCompleta: Story = {
  args: {
    tipoSoggetto: "O",
    sottotipo: "S",
    nome: "Esempio Costruzioni S.r.l.",
    codiceFiscale: "00000000000",
    partitaIva: "00000000000",
    ateco: { codice: "41.20.00", descrizione: "Costruzione di edifici residenziali e non residenziali" },
    formaGiuridica: "Società a responsabilità limitata",
    stato: "Attiva",
    sede: "Città di Esempio (XX)",
    actions: <RiskBadge level="med" value={54} subject="Score" />,
  },
}

export const PersonaFisica: Story = {
  args: {
    tipoSoggetto: "P",
    sottotipo: "F",
    nome: "Mario Esempio",
    codiceFiscale: "XXXMRA00A01Z000X",
    sede: "Città di Esempio (XX)",
  },
}

export const DatiParziali: Story = {
  args: {
    tipoSoggetto: "O",
    nome: "Ditta Fittizia di Prova",
    partitaIva: "11111111111",
  },
}

export const Cessato: Story = {
  args: {
    tipoSoggetto: "O",
    sottotipo: "D",
    nome: "Bottega Inventata di Prova",
    codiceFiscale: "YYYBTG00A01Z000Y",
    partitaIva: "22222222222",
    ateco: { codice: "47.19.90", descrizione: "Commercio al dettaglio di altri prodotti" },
    stato: "Cessata",
    actions: <RiskBadge level="na" />,
  },
}
