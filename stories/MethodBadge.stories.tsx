import type { Meta, StoryObj } from "@storybook/react-vite"
import { MethodBadge } from "@/components/method-badge"

const meta: Meta<typeof MethodBadge> = {
  title: "Components/MethodBadge",
  component: MethodBadge,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MethodBadge>

export const AllMethods: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      <MethodBadge method="GET" />
      <MethodBadge method="POST" />
      <MethodBadge method="PUT" />
      <MethodBadge method="PATCH" />
      <MethodBadge method="DELETE" />
      <MethodBadge method="HEAD" />
      <MethodBadge method="OPTIONS" />
    </div>
  ),
}
