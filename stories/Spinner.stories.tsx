import type { Meta, StoryObj } from "@storybook/react-vite"
import { Spinner, SpinnerOverlay } from "@/components/spinner"

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = { args: {} }

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-4">
      <Spinner size="sm" />
      <Spinner size="default" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
}

export const Overlay: StoryObj<typeof SpinnerOverlay> = {
  render: () => <SpinnerOverlay label="Caricamento in corso..." />,
}
