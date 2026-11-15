import type { Meta, StoryObj } from "@storybook/react-vite"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover"
import { Button } from "@/components/button"
import { InfoRow } from "@/components/detail-list"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <div className="p-16">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Apri dettagli</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 flex flex-col gap-3">
          <InfoRow label="Denominazione" value="Rossi Meccanica S.r.l." />
          <InfoRow label="Partita IVA" value="01234567897" />
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const Aperto: Story = {
  render: () => (
    <div className="p-16 pb-48">
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <Button variant="outline">Filtri</Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-64">
          <p className="text-sm text-text-muted">Provincia: Brescia · ATECO 25.62</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}
