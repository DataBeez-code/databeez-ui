import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "@/components/textarea"

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="max-w-md p-4"><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: { label: "Note", placeholder: "Scrivi una nota sull'azienda..." },
}

export const ConHelperText: Story = {
  args: { label: "Descrizione lista", helperText: "Visibile a tutti i membri del team.", defaultValue: "Aziende metalmeccaniche del bresciano" },
}

export const ConErrore: Story = {
  args: { label: "Motivazione", error: "Campo obbligatorio", placeholder: "Perché vuoi esportare questi dati?" },
}

export const Disabilitata: Story = {
  args: { label: "Note", disabled: true, defaultValue: "Non modificabile" },
}
