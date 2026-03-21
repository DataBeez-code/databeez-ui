import type { Meta, StoryObj } from "@storybook/react-vite"
import { Alert } from "@/components/alert"

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "destructive"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: { title: "Nota", children: "Questo è un messaggio informativo." },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 p-4 max-w-lg">
      <Alert variant="default" title="Default">Messaggio di default.</Alert>
      <Alert variant="info" title="Info">Operazione completata con successo.</Alert>
      <Alert variant="success" title="Successo">I dati sono stati salvati.</Alert>
      <Alert variant="warning" title="Attenzione">Verifica i dati prima di procedere.</Alert>
      <Alert variant="destructive" title="Errore">Si è verificato un problema.</Alert>
    </div>
  ),
}
