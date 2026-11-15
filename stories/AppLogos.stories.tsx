import type { Meta, StoryObj } from "@storybook/react-vite"
import { AppLogo, APP_LOGOS, APP_LOGO_SLUGS } from "@/components/app-logos"

const meta: Meta<typeof AppLogo> = {
  title: "Brand/AppLogos",
  component: AppLogo,
  tags: ["autodocs"],
  argTypes: {
    slug: { control: "select", options: APP_LOGO_SLUGS },
    size: { control: { type: "number", min: 16, max: 160 } },
  },
}

export default meta
type Story = StoryObj<typeof AppLogo>

export const Singolo: Story = {
  args: { slug: "beemap", size: 96 },
}

export const Registro: Story = {
  render: () => (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 p-4">
      {APP_LOGO_SLUGS.map((slug) => (
        <div key={slug} className="flex flex-col items-center gap-2 p-4 bg-surface border border-border rounded-lg">
          <AppLogo slug={slug} size={64} />
          <span className="text-sm font-medium text-text-base">{APP_LOGOS[slug].label}</span>
          <code className="text-xs text-text-muted">{slug}</code>
        </div>
      ))}
    </div>
  ),
}

export const Dimensioni: Story = {
  render: () => (
    <div className="flex items-end gap-4 p-4">
      {[24, 32, 48, 64, 96].map((size) => (
        <AppLogo key={size} slug="swarm" size={size} />
      ))}
    </div>
  ),
}

export const SlugSconosciuto: Story = {
  args: { slug: "nuova-app", size: 64, fallback: "Nuova app" },
}
