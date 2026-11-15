import type { Meta, StoryObj } from "@storybook/react-vite"
import { Search } from "lucide-react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table"
import { Badge } from "@/components/badge"
import { EmptyState } from "@/components/empty-state"
import { formatEuro } from "@/lib/format"

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Table>

const AZIENDE = [
  { nome: "Rossi Meccanica S.r.l.", piva: "01234567897", comune: "Brescia", ateco: "25.62", fatturato: 6_800_000 },
  { nome: "Bianchi Logistica S.p.A.", piva: "09876543217", comune: "Verona", ateco: "49.41", fatturato: 14_200_000 },
  { nome: "Verdi Acciai S.p.A.", piva: "02468135795", comune: "Bergamo", ateco: "24.10", fatturato: 11_800_000 },
  { nome: "Neri Impianti S.n.c.", piva: "01357924689", comune: "Cremona", ateco: "43.22", fatturato: 940_500 },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Denominazione</TableHead>
          <TableHead>P.IVA</TableHead>
          <TableHead>Comune</TableHead>
          <TableHead>ATECO</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {AZIENDE.map((a) => (
          <TableRow key={a.piva}>
            <TableCell className="font-medium">{a.nome}</TableCell>
            <TableCell className="font-mono">{a.piva}</TableCell>
            <TableCell>{a.comune}</TableCell>
            <TableCell>{a.ateco}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const ConImporti: Story = {
  render: () => {
    const totale = AZIENDE.reduce((s, a) => s + a.fatturato, 0)
    return (
      <Table>
        <TableCaption>Fatturato 2024 (valori fittizi)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Denominazione</TableHead>
            <TableHead>Stato</TableHead>
            <TableHead className="text-right">Fatturato</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {AZIENDE.map((a) => (
            <TableRow key={a.piva}>
              <TableCell className="font-medium">{a.nome}</TableCell>
              <TableCell><Badge variant="secondary">Attiva</Badge></TableCell>
              <TableCell className="text-right tabular-nums">{formatEuro(a.fatturato)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Totale</TableCell>
            <TableCell className="text-right tabular-nums">{formatEuro(totale)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  },
}

export const RigaSelezionata: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Denominazione</TableHead>
          <TableHead>Comune</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {AZIENDE.slice(0, 3).map((a, i) => (
          <TableRow key={a.piva} data-state={i === 1 ? "selected" : undefined}>
            <TableCell>{a.nome}</TableCell>
            <TableCell>{a.comune}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Vuota: Story = {
  render: () => (
    <div className="border border-border rounded-lg bg-surface">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Denominazione</TableHead>
            <TableHead>P.IVA</TableHead>
            <TableHead className="text-right">Fatturato</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}>
              <EmptyState
                icon={Search}
                title="Nessuna azienda trovata"
                description="Modifica i filtri di ricerca per vedere altri risultati."
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}
