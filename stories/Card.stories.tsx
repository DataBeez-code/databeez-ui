import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/card"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Titolo Card</CardTitle>
        <CardDescription>Descrizione opzionale della card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-text-base text-sm">Contenuto della card. Può contenere qualsiasi elemento React.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm" variant="outline">Annulla</Button>
        <Button size="sm">Salva</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-80 p-6">
      <p className="text-text-base">Una card semplice senza subcomponenti.</p>
    </Card>
  ),
}
