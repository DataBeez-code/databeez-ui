import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataBeezLogo } from "@/components/databeez-logo"

const meta: Meta<typeof DataBeezLogo> = {
  title: "Brand/DataBeezLogo",
  component: DataBeezLogo,
  tags: ["autodocs"],
  argTypes: { variant: { control: "radio", options: ["color", "mono"] } },
}

export default meta
type Story = StoryObj<typeof DataBeezLogo>

export const Colore: Story = { args: { height: 96 } }

export const Monocromatico: Story = {
  args: { height: 96, variant: "mono", className: "text-text-base" },
}

export const Dimensioni: Story = {
  render: () => (
    <div className="flex items-end gap-6 p-4 text-text-base">
      {[24, 48, 96].map((h) => (
        <DataBeezLogo key={h} height={h} />
      ))}
    </div>
  ),
}
