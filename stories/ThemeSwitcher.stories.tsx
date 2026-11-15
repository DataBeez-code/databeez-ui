import type { Meta, StoryObj } from "@storybook/react-vite"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSwitcher } from "@/components/theme-switcher"

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Theme/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "Cicla light, dark, system. Richiede un `ThemeProvider` a monte. Nota: nello Storybook il tema è governato anche dal toggle della toolbar, quindi i due possono sovrascriversi a vicenda.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Default: Story = {}

export const InBarraDiNavigazione: Story = {
  render: () => (
    <div className="flex items-center justify-between px-4 py-2 bg-surface border border-border rounded-lg max-w-md">
      <span className="font-semibold text-text-base">DataBeez</span>
      <ThemeSwitcher />
    </div>
  ),
}
