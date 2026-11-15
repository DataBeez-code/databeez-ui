import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Pagination } from "@/components/pagination"

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => {
    const [page, setPage] = React.useState(2)
    return <Pagination page={page} pageCount={7} onPageChange={setPage} />
  },
}

export const ConTotale: Story = {
  render: () => {
    const [page, setPage] = React.useState(1)
    return <Pagination page={page} pageCount={124} onPageChange={setPage} totalItems={1234} />
  },
}
