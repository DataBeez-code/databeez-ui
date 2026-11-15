import * as React from "react"
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
  TableSortHead,
  type SortDirection,
} from "@/components/table"
import { Pagination } from "@/components/pagination"
import { Badge } from "@/components/badge"
import { EmptyState } from "@/components/empty-state"
import { formatEuro } from "@/lib/format"
import { getPageCount } from "@/lib/pagination"

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

const MOVIMENTI = [
  { id: 1, causale: "Incasso fattura 2024/118", importo: 1_234 },
  { id: 2, causale: "Pagamento fornitore", importo: -2_500 },
  { id: 3, causale: "Canone annuale", importo: 48_000 },
  { id: 4, causale: "Rimborso spese", importo: -87 },
  { id: 5, causale: "Vendita impianto", importo: 3_450_000 },
  { id: 6, causale: "Acquisto macchinari", importo: -1_250_000 },
  { id: 7, causale: "Incasso fattura 2024/121", importo: 12_900 },
  { id: 8, causale: "Imposte", importo: -18_340 },
  { id: 9, causale: "Finanziamento", importo: 14_200_000 },
  { id: 10, causale: "Interessi passivi", importo: -960 },
  { id: 11, causale: "Incasso fattura 2024/130", importo: 7_800 },
  { id: 12, causale: "Stipendi", importo: -65_400 },
]

const PAGE_SIZE = 5

/** Colonna importi: forma piena di `formatEuro` (mai `compact`), decimali uniformi, allineata a destra. */
export const ImportiOrdinabiliPaginati: Story = {
  render: () => {
    const [direction, setDirection] = React.useState<SortDirection | null>(null)
    const [page, setPage] = React.useState(1)

    const rows = React.useMemo(() => {
      if (!direction) return MOVIMENTI
      const sign = direction === "asc" ? 1 : -1
      return [...MOVIMENTI].sort((a, b) => sign * (a.importo - b.importo))
    }, [direction])

    const pageCount = getPageCount(rows.length, PAGE_SIZE)
    const visible = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

    const toggleSort = () => {
      setDirection((d) => (d === null ? "desc" : d === "desc" ? "asc" : null))
      setPage(1)
    }

    return (
      <div className="space-y-4">
        <Table>
          <TableCaption>Movimenti (valori fittizi)</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Causale</TableHead>
              <TableSortHead numeric direction={direction} onSort={toggleSort}>
                Importo
              </TableSortHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.map((m) => (
              <TableRow key={m.id}>
                <TableCell className="font-medium">{m.causale}</TableCell>
                <TableCell numeric>{formatEuro(m.importo)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination page={page} pageCount={pageCount} onPageChange={setPage} totalItems={rows.length} />
      </div>
    )
  },
}

export const ColonneNumericheCentesimi: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Voce</TableHead>
          <TableHead numeric>Importo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1234.5, -2500.1, 1_250_000, 7.05].map((v) => (
          <TableRow key={v}>
            <TableCell>Voce di esempio</TableCell>
            <TableCell numeric>{formatEuro(v, { cents: true })}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
