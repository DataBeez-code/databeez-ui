import type { Meta, StoryObj } from "@storybook/react-vite"
import { Settings, Key, CreditCard } from "lucide-react"
import { UserMenu } from "@/components/user-menu"

const meta: Meta<typeof UserMenu> = {
  title: "Components/UserMenu",
  component: UserMenu,
  tags: ["autodocs"],
  args: {
    user: { fullname: "Mario Esempio", email: "mario.esempio@example.com" },
    bumblebeeUrl: "https://bumblebee.example.com",
    onLogout: () => console.log("logout"),
  },
  decorators: [
    (Story) => (
      <div className="flex justify-end p-4 pb-72 bg-surface border border-border rounded-lg max-w-2xl">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: { description: { component: "Il menu si apre al click sul nome utente." } },
  },
}

export default meta
type Story = StoryObj<typeof UserMenu>

export const Default: Story = {}

export const ConVociExtra: Story = {
  args: {
    extraItems: [
      { label: "Impostazioni", icon: <Settings className="h-4 w-4" />, onClick: () => console.log("impostazioni") },
      { label: "Chiavi API", icon: <Key className="h-4 w-4" />, href: "#api-keys" },
      { label: "Fatturazione", icon: <CreditCard className="h-4 w-4" />, href: "#billing" },
    ],
  },
}

export const SenzaLinkLaunchpad: Story = {
  args: { showLaunchpadLink: false },
}

export const NomeLungo: Story = {
  args: {
    user: {
      fullname: "Maria Chiara Esempio Dell'Orto Bianchi",
      email: "maria.chiara.esempio.dellorto@azienda-di-esempio.example.com",
    },
  },
}
