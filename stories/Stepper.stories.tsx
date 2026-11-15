import type { Meta, StoryObj } from "@storybook/react-vite"
import { Building2 } from "lucide-react"
import { Stepper } from "@/components/stepper"

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: { activeStep: { control: { type: "number", min: 0, max: 4 } } },
}

export default meta
type Story = StoryObj<typeof Stepper>

export const Default: Story = {
  args: { steps: ["Ricerca", "Selezione", "Esportazione"], activeStep: 1 },
}

export const Completato: Story = {
  args: { steps: ["Ricerca", "Selezione", "Esportazione"], activeStep: 3 },
}

export const ConIconaPersonalizzata: Story = {
  args: {
    steps: [{ label: "Azienda", icon: <Building2 className="h-3.5 w-3.5" /> }, "Soci", "Bilanci", "Riepilogo"],
    activeStep: 2,
    completedIcon: "ok",
  },
}
