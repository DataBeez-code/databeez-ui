import type { Meta, StoryObj } from "@storybook/react-vite"
import { FloatingPanel } from "@/components/floating-panel"

const meta: Meta<typeof FloatingPanel> = {
  title: "Components/FloatingPanel",
  component: FloatingPanel,
  tags: ["autodocs"],
  parameters: {
    // Il pannello è `position: fixed` e si ancora ai bordi della viewport:
    // niente centratura del layout di Storybook, che lo sposterebbe.
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj<typeof FloatingPanel>

export const AnchoredRight: Story = {
  render: () => (
    <div style={{ position: "relative", height: "70vh" }}>
      <FloatingPanel title="Nodi" offsetX={240} offsetY={320}>
        <label className="flex items-center gap-2 text-xs text-text-base">
          <input type="checkbox" defaultChecked />
          Persone
        </label>
        <label className="flex items-center gap-2 text-xs text-text-base">
          <input type="checkbox" defaultChecked />
          Organizzazioni
        </label>
        <label className="flex items-center gap-2 text-xs text-text-base">
          <input type="checkbox" />
          Indirizzi
        </label>
      </FloatingPanel>
    </div>
  ),
}

export const AnchoredLeft: Story = {
  render: () => (
    <div style={{ position: "relative", height: "70vh" }}>
      <FloatingPanel title="Relazioni" anchor="left" offsetX={40} offsetY={320}>
        <p className="text-xs text-text-muted">Trascina dall&apos;intestazione per spostare.</p>
      </FloatingPanel>
    </div>
  ),
}

export const NotCollapsible: Story = {
  render: () => (
    <div style={{ position: "relative", height: "70vh" }}>
      <FloatingPanel title="Legenda" collapsible={false} offsetX={240} offsetY={200}>
        <p className="text-xs text-text-muted">Contenuto sempre visibile.</p>
      </FloatingPanel>
    </div>
  ),
}
