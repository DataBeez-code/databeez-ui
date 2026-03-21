import type { Meta, StoryObj } from "@storybook/react-vite"
import { StatusBadge } from "@/components/status-badge"

const meta: Meta<typeof StatusBadge> = {
  title: "Components/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "warning", "error", "info", "neutral"],
    },
    dot: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof StatusBadge>

export const Default: Story = {
  args: { label: "Attivo", variant: "success" },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      <StatusBadge variant="success" label="Operativo" />
      <StatusBadge variant="warning" label="In attesa" />
      <StatusBadge variant="error" label="Errore" />
      <StatusBadge variant="info" label="In revisione" />
      <StatusBadge variant="neutral" label="Disattivo" />
    </div>
  ),
}

export const WithoutDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      <StatusBadge variant="success" label="Operativo" dot={false} />
      <StatusBadge variant="error" label="Errore" dot={false} />
    </div>
  ),
}
