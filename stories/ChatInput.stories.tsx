import type { Meta, StoryObj } from "@storybook/react-vite"
import { ChatInput } from "@/components/chat-input"

const meta: Meta<typeof ChatInput> = {
  title: "Components/ChatInput",
  component: ChatInput,
  tags: ["autodocs"],
  args: { onSend: (m: string) => console.log("invia:", m) },
}

export default meta
type Story = StoryObj<typeof ChatInput>

export const Default: Story = {}

export const PlaceholderPersonalizzato: Story = {
  args: { placeholder: "Chiedi qualcosa sulle aziende della provincia di Brescia..." },
}

export const Disabilitato: Story = {
  args: { disabled: true, placeholder: "Risposta in corso..." },
}
