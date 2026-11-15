import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { InfoRow, Section } from "@/components/detail-list"
import { EmptyState } from "@/components/empty-state"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/table"
import { formatEuro } from "@/lib/format"

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="uno" className="max-w-md">
      <TabsList>
        <TabsTrigger value="uno">Anagrafica</TabsTrigger>
        <TabsTrigger value="due">Bilanci</TabsTrigger>
        <TabsTrigger value="tre">Soci</TabsTrigger>
      </TabsList>
      <TabsContent value="uno" className="text-sm text-text-base">Contenuto anagrafica.</TabsContent>
      <TabsContent value="due" className="text-sm text-text-base">Contenuto bilanci.</TabsContent>
      <TabsContent value="tre" className="text-sm text-text-base">Contenuto soci.</TabsContent>
    </Tabs>
  ),
}

export const SchedaAzienda: Story = {
  render: () => (
    <Tabs defaultValue="anagrafica" className="max-w-xl bg-surface border border-border rounded-lg p-4">
      <TabsList>
        <TabsTrigger value="anagrafica">Anagrafica</TabsTrigger>
        <TabsTrigger value="bilanci">Bilanci</TabsTrigger>
        <TabsTrigger value="soci">Soci</TabsTrigger>
        <TabsTrigger value="sedi" disabled>Sedi (non disponibile)</TabsTrigger>
      </TabsList>
      <TabsContent value="anagrafica" className="pt-3">
        <Section title="Anagrafica">
          <InfoRow label="Denominazione" value="Rossi Meccanica S.r.l." />
          <InfoRow label="Partita IVA" value="01234567897" />
          <InfoRow label="ATECO" value="25.62" />
        </Section>
      </TabsContent>
      <TabsContent value="bilanci">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Anno</TableHead>
              <TableHead className="text-right">Fatturato</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>2024</TableCell><TableCell className="text-right">{formatEuro(6_800_000)}</TableCell></TableRow>
            <TableRow><TableCell>2023</TableCell><TableCell className="text-right">{formatEuro(6_100_000)}</TableCell></TableRow>
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="soci">
        <EmptyState title="Nessun socio registrato" description="Il Registro Imprese non riporta soci per questa azienda." />
      </TabsContent>
    </Tabs>
  ),
}
