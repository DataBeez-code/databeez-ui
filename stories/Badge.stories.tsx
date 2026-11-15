import type { Meta, StoryObj } from "@storybook/react-vite"
import { Badge } from "@/components/badge"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "top", "base", "vertical"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { children: "Attiva" },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-4">
      <Badge>default</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="top">top</Badge>
      <Badge variant="base">base</Badge>
      <Badge variant="vertical">vertical</Badge>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div className="flex items-center gap-3 p-4 bg-surface border border-border rounded-lg max-w-md">
      <span className="text-text-base font-medium">Rossi Meccanica S.r.l.</span>
      <Badge>Attiva</Badge>
      <Badge variant="outline">ATECO 25.62</Badge>
    </div>
  ),
}
