import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TimePicker } from "@/components/time-picker"

const meta: Meta<typeof TimePicker> = {
  title: "Pickers/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
}
export default meta

export const Default: StoryObj<typeof TimePicker> = {
  render: () => {
    const [time, setTime] = useState("09:30")
    return (
      <div className="max-w-xs p-4">
        <TimePicker
          value={time}
          onChange={setTime}
          label="Orario appuntamento"
          helperText="Seleziona ore e minuti."
        />
      </div>
    )
  },
}

export const WithSeconds: StoryObj<typeof TimePicker> = {
  name: "Con secondi",
  render: () => {
    const [time, setTime] = useState("14:30:00")
    return (
      <div className="max-w-xs p-4">
        <TimePicker
          value={time}
          onChange={setTime}
          label="Timestamp"
          showSeconds
        />
      </div>
    )
  },
}

export const Step15Min: StoryObj<typeof TimePicker> = {
  name: "Step 15 minuti",
  render: () => {
    const [time, setTime] = useState("10:00")
    return (
      <div className="max-w-xs p-4">
        <TimePicker
          value={time}
          onChange={setTime}
          label="Fascia oraria"
          minuteStep={15}
        />
      </div>
    )
  },
}

export const WithError: StoryObj<typeof TimePicker> = {
  name: "Con errore",
  render: () => (
    <div className="max-w-xs p-4">
      <TimePicker
        label="Orario"
        error="L'orario è obbligatorio."
      />
    </div>
  ),
}

export const Disabled: StoryObj<typeof TimePicker> = {
  name: "Disabilitato",
  render: () => (
    <div className="max-w-xs p-4">
      <TimePicker
        value="08:00"
        label="Orario fisso"
        disabled
      />
    </div>
  ),
}
