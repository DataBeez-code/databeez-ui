import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollArea, ScrollBar } from "@/components/scroll-area"

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const comuni = ["Brescia", "Bergamo", "Cremona", "Mantova", "Lecco", "Como", "Varese", "Sondrio", "Pavia", "Lodi", "Monza", "Milano", "Verona", "Vicenza", "Padova", "Treviso"]

export const Verticale: Story = {
  render: () => (
    <ScrollArea className="h-56 w-64 rounded-lg border border-border bg-surface">
      <ul className="p-3 text-sm text-text-base">
        {comuni.map((c) => (
          <li key={c} className="py-2 border-b border-border last:border-0">{c}</li>
        ))}
      </ul>
    </ScrollArea>
  ),
}

export const Orizzontale: Story = {
  render: () => (
    <ScrollArea className="w-80 rounded-lg border border-border bg-surface">
      <div className="flex gap-3 p-3 w-max text-sm text-text-base">
        {comuni.map((c) => (
          <span key={c} className="px-3 py-1.5 rounded-md bg-subtle">{c}</span>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
