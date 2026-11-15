import type { Meta, StoryObj } from "@storybook/react-vite"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion"

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Accordion>

const SEZIONI = [
  ["anagrafica", "Anagrafica", "Ragione sociale, partita IVA, forma giuridica e data di costituzione."],
  ["sede", "Sede e unità locali", "Sede legale e unità locali attive, con indirizzo e data di apertura."],
  ["bilancio", "Bilancio", "Ricavi, utile, patrimonio netto e addetti degli ultimi esercizi."],
] as const

export const Singola: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="single" collapsible defaultValue="anagrafica">
        {SEZIONI.map(([v, t, c]) => (
          <AccordionItem key={v} value={v}>
            <AccordionTrigger>{t}</AccordionTrigger>
            <AccordionContent>{c}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
}

export const Multipla: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="multiple" defaultValue={["anagrafica", "bilancio"]}>
        {SEZIONI.map(([v, t, c]) => (
          <AccordionItem key={v} value={v}>
            <AccordionTrigger>{t}</AccordionTrigger>
            <AccordionContent>{c}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
}

export const ConVoceDisabilitata: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="single" collapsible>
        <AccordionItem value="a">
          <AccordionTrigger>Disponibile</AccordionTrigger>
          <AccordionContent>Contenuto della sezione.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="b" disabled>
          <AccordionTrigger>Non disponibile</AccordionTrigger>
          <AccordionContent>Non visibile.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}
