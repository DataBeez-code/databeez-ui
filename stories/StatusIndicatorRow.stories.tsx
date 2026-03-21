import type { Meta, StoryObj } from "@storybook/react-vite"
import { StatusIndicatorRow } from "@/components/status-indicator-row"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card"

const meta: Meta<typeof StatusIndicatorRow> = {
  title: "Components/StatusIndicatorRow",
  component: StatusIndicatorRow,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof StatusIndicatorRow>

export const Default: Story = {
  args: { label: "API Gateway", status: "operational" },
}

export const SystemStatus: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Stato Sistema</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <StatusIndicatorRow label="API Gateway" status="operational" />
        <StatusIndicatorRow label="Database" status="operational" />
        <StatusIndicatorRow label="Cache Redis" status="degraded" />
        <StatusIndicatorRow label="CDN" status="maintenance" statusLabel="In manutenzione" />
      </CardContent>
    </Card>
  ),
}
