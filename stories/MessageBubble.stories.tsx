import type { Meta, StoryObj } from "@storybook/react-vite"
import { MessageBubble } from "@/components/message-bubble"

const meta: Meta<typeof MessageBubble> = {
  title: "Components/MessageBubble",
  component: MessageBubble,
  tags: ["autodocs"],
  argTypes: { role: { control: "radio", options: ["user", "assistant"] } },
}

export default meta
type Story = StoryObj<typeof MessageBubble>

export const Utente: Story = {
  args: { role: "user", content: "Quante aziende metalmeccaniche ci sono in provincia di Brescia?" },
}

export const Assistente: Story = {
  args: {
    role: "assistant",
    content: "In provincia di Brescia risultano 1.284 aziende attive con ATECO 25 (fabbricazione di prodotti in metallo).",
  },
}

export const ConAzioni: Story = {
  args: {
    role: "assistant",
    content: "In provincia di Brescia risultano 1.284 aziende attive con ATECO 25.",
    showActions: true,
    onRegenerate: () => console.log("rigenera"),
    onFeedback: (f) => console.log("feedback", f),
  },
}

export const Conversazione: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4 bg-base max-w-xl">
      <MessageBubble role="user" content="Mostrami le prime tre per fatturato." />
      <MessageBubble
        role="assistant"
        showActions
        onRegenerate={() => {}}
        content={"1. Bianchi Logistica S.p.A. - € 14,2 mln\n2. Verdi Acciai S.p.A. - € 11,8 mln\n3. Rossi Meccanica S.r.l. - € 6,8 mln"}
      />
    </div>
  ),
}
