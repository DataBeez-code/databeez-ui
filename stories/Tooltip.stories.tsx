import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Info, Trash2 } from "lucide-react"
import { Tooltip } from "@/components/tooltip"
import { Button } from "@/components/button"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content="Esporta la lista in Excel">
      <Button variant="outline">Esporta</Button>
    </Tooltip>
  ),
}

export const SoloIcona: Story = {
  render: () => (
    <div className="flex gap-3">
      <Tooltip content="Elimina azienda" side="bottom">
        <Button type="button" variant="ghost" size="icon" aria-label="Elimina azienda">
          <Trash2 className="h-4 w-4" />
        </Button>
      </Tooltip>
      <Tooltip content="Il fatturato è riferito all'ultimo bilancio depositato" side="right">
        <button type="button" aria-label="Informazioni sul fatturato" className="rounded-full p-2 text-text-muted hover:bg-subtle">
          <Info className="h-4 w-4" />
        </button>
      </Tooltip>
    </div>
  ),
}
