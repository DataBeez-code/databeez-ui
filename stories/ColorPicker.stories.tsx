import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ColorPicker } from "@/components/color-picker"

const meta: Meta<typeof ColorPicker> = {
  title: "Pickers/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
}
export default meta

export const Default: StoryObj<typeof ColorPicker> = {
  render: () => {
    const [color, setColor] = useState("#f59e0b")
    return (
      <div className="max-w-xs p-4">
        <ColorPicker
          value={color}
          onChange={setColor}
          label="Colore tema"
          helperText="Scegli un colore per il tema."
        />
      </div>
    )
  },
}

export const CustomPresets: StoryObj<typeof ColorPicker> = {
  name: "Preset personalizzati",
  render: () => {
    const [color, setColor] = useState("#3b82f6")
    return (
      <div className="max-w-xs p-4">
        <ColorPicker
          value={color}
          onChange={setColor}
          label="Colore categoria"
          presets={[
            "#3b82f6",
            "#10b981",
            "#f59e0b",
            "#ef4444",
            "#8b5cf6",
            "#ec4899",
          ]}
        />
      </div>
    )
  },
}

export const WithError: StoryObj<typeof ColorPicker> = {
  name: "Con errore",
  render: () => (
    <div className="max-w-xs p-4">
      <ColorPicker
        label="Colore"
        error="Seleziona un colore valido."
      />
    </div>
  ),
}

export const Disabled: StoryObj<typeof ColorPicker> = {
  name: "Disabilitato",
  render: () => (
    <div className="max-w-xs p-4">
      <ColorPicker
        value="#10b981"
        label="Colore fisso"
        disabled
      />
    </div>
  ),
}
