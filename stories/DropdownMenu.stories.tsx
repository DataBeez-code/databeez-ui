import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Copy, Download, MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"
import { Button } from "@/components/button"

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="outline" size="icon" aria-label="Azioni lista">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Lista &quot;Metalmeccaniche BS&quot;</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem><Pencil className="h-4 w-4" />Rinomina</DropdownMenuItem>
          <DropdownMenuItem><Copy className="h-4 w-4" />Duplica</DropdownMenuItem>
          <DropdownMenuItem disabled><Download className="h-4 w-4" />Esporta (non disponibile)</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive><Trash2 className="h-4 w-4" />Elimina</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
