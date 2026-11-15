import type { Meta, StoryObj } from "@storybook/react-vite"
import type { LucideIcon } from "lucide-react"
import {
  ADDRESS_META,
  LOCATION_META,
  ORG_TYPE_META,
  PERSON_TYPE_META,
  PONTE_META,
  SUBJECT_TYPE_META,
  getOrgMeta,
  getPersonMeta,
  getPonteMeta,
  getSubjectMeta,
} from "@/entities"

function Row({ code, label, icon: Icon }: { code: string; label: string; icon: LucideIcon }) {
  return (
    <tr className="border-b border-border last:border-0">
      <td className="px-4 py-2"><code className="text-xs text-databeez-primary">{code}</code></td>
      <td className="px-4 py-2"><Icon className="h-5 w-5 text-text-base" /></td>
      <td className="px-4 py-2 text-sm text-text-base">{label}</td>
    </tr>
  )
}

function Group({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="mb-8 max-w-xl">
      <h3 className="text-sm font-semibold text-text-base mb-1">{title}</h3>
      {note && <p className="text-xs text-text-muted mb-2">{note}</p>}
      <table className="w-full bg-surface border border-border rounded-lg overflow-hidden">
        <thead className="bg-subtle">
          <tr className="text-left text-xs uppercase tracking-wider text-text-muted">
            <th className="px-4 py-2">Codice</th>
            <th className="px-4 py-2">Icona</th>
            <th className="px-4 py-2">Etichetta</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </section>
  )
}

const meta: Meta = {
  title: "Entities/Metadati entità",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Mappe `*_META` e funzioni `get*Meta` di `src/entities`: etichetta e icona per ogni tipo di soggetto, persona, organizzazione e nodo ponte.",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const TipiSoggetto: Story = {
  render: () => (
    <Group title="SUBJECT_TYPE_META / getSubjectMeta" note="O = Organizzazione, P = Persona. Un valore sconosciuto ricade su Organizzazione.">
      {Object.entries(SUBJECT_TYPE_META).map(([k, m]) => <Row key={k} code={k} {...m} />)}
    </Group>
  ),
}

export const SottotipiPersona: Story = {
  render: () => (
    <Group
      title="PERSON_TYPE_META / getPersonMeta"
      note="Semantica di honey.persona.tipo_persona: F = fisica, P = professionista, A = altro. La migration 030 di honey-core ha invertito i valori rispetto al passato (prima F era il professionista): la mappa è corretta così, non va invertita."
    >
      {Object.entries(PERSON_TYPE_META).map(([k, m]) => <Row key={k} code={k} {...m} />)}
    </Group>
  ),
}

export const TipiOrganizzazione: Story = {
  render: () => (
    <Group title="ORG_TYPE_META / getOrgMeta" note="Un valore sconosciuto ricade su Organizzazione generica.">
      {Object.entries(ORG_TYPE_META).map(([k, m]) => <Row key={k} code={k} {...m} />)}
    </Group>
  ),
}

export const NodiPonte: Story = {
  render: () => (
    <Group
      title="PONTE_META / getPonteMeta"
      note="Banche e società fiduciarie, che rendono illeggibile un grafo di connessioni. Per qualsiasi altro valore getPonteMeta restituisce undefined (caso normale: nessuna icona)."
    >
      {Object.entries(PONTE_META).map(([k, m]) => <Row key={k} code={k} {...m} />)}
    </Group>
  ),
}

export const IndirizzoESede: Story = {
  render: () => (
    <Group title="ADDRESS_META / LOCATION_META">
      <Row code="indirizzo" {...ADDRESS_META} />
      <Row code="localizzazione" {...LOCATION_META} />
    </Group>
  ),
}

export const Fallback: Story = {
  render: () => {
    const sconosciuto = "?"
    const rows: [string, string, LucideIcon][] = [
      ["getSubjectMeta('?')", getSubjectMeta(sconosciuto).label, getSubjectMeta(sconosciuto).icon],
      ["getPersonMeta('?')", getPersonMeta(sconosciuto).label, getPersonMeta(sconosciuto).icon],
      ["getOrgMeta('?')", getOrgMeta(sconosciuto).label, getOrgMeta(sconosciuto).icon],
    ]
    return (
      <Group title="Valori non riconosciuti" note={`getPonteMeta('?') = ${String(getPonteMeta(sconosciuto))}`}>
        {rows.map(([code, label, icon]) => <Row key={code} code={code} label={label} icon={icon} />)}
      </Group>
    )
  },
}
