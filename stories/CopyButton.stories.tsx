import type { Meta, StoryObj } from "@storybook/react-vite"
import { CopyButton } from "@/components/copy-button"

const meta: Meta<typeof CopyButton> = {
  title: "Components/CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
  args: { text: "01234567897" },
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const SoloIcona: Story = {}

export const ConEtichetta: Story = {
  args: { label: "P.IVA" },
}

export const AccantoAlValore: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-4 text-text-base">
      <span className="text-text-muted text-sm">P.IVA</span>
      <span className="font-mono">01234567897</span>
      <CopyButton text="01234567897" label="P.IVA" />
    </div>
  ),
}
