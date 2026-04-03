import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import type { DateRange } from "react-day-picker"
import { Calendar, DatePicker } from "@/components/date-picker"
import { DateRangePicker } from "@/components/date-range-picker"

/* ------------------------------------------------------------------ */
/*  Calendar                                                           */
/* ------------------------------------------------------------------ */

const calendarMeta: Meta<typeof Calendar> = {
  title: "Pickers/Calendar",
  component: Calendar,
  tags: ["autodocs"],
}
export default calendarMeta

export const CalendarDefault: StoryObj<typeof Calendar> = {
  name: "Calendar",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
      <div className="p-4">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </div>
    )
  },
}

/* ------------------------------------------------------------------ */
/*  DatePicker                                                         */
/* ------------------------------------------------------------------ */

export const DatePickerDefault: StoryObj = {
  name: "DatePicker",
  render: () => {
    const [date, setDate] = useState<Date | undefined>()
    return (
      <div className="max-w-xs p-4">
        <DatePicker
          value={date}
          onChange={setDate}
          label="Data di nascita"
          helperText="Seleziona la data dal calendario."
        />
      </div>
    )
  },
}

export const DatePickerWithError: StoryObj = {
  name: "DatePicker con errore",
  render: () => (
    <div className="max-w-xs p-4">
      <DatePicker
        label="Scadenza"
        error="La data è obbligatoria."
      />
    </div>
  ),
}

export const DatePickerDisabled: StoryObj = {
  name: "DatePicker disabilitato",
  render: () => (
    <div className="max-w-xs p-4">
      <DatePicker
        label="Data"
        value={new Date()}
        disabled
      />
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  DateRangePicker                                                    */
/* ------------------------------------------------------------------ */

export const DateRangePickerDefault: StoryObj = {
  name: "DateRangePicker",
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>()
    return (
      <div className="max-w-sm p-4">
        <DateRangePicker
          value={range}
          onChange={setRange}
          label="Periodo"
          helperText="Seleziona data inizio e fine."
        />
      </div>
    )
  },
}

export const DateRangePickerSingleMonth: StoryObj = {
  name: "DateRangePicker (1 mese)",
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>()
    return (
      <div className="max-w-xs p-4">
        <DateRangePicker
          value={range}
          onChange={setRange}
          label="Intervallo"
          numberOfMonths={1}
        />
      </div>
    )
  },
}
