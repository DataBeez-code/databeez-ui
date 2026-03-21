import type { Meta, StoryObj } from "@storybook/react-vite"
import { Skeleton, SkeletonText, SkeletonCard } from "@/components/skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: { className: "h-4 w-48" },
}

export const Text: StoryObj<typeof SkeletonText> = {
  render: () => <SkeletonText lines={4} className="max-w-sm" />,
}

export const CardLoader: StoryObj<typeof SkeletonCard> = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-xl p-4">
      <SkeletonCard />
      <SkeletonCard />
    </div>
  ),
}
