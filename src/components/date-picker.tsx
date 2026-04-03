"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import { it } from "date-fns/locale"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

/* ------------------------------------------------------------------ */
/*  Calendar (standalone)                                              */
/* ------------------------------------------------------------------ */

type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      locale={it}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month_caption: "flex justify-center pt-1 relative items-center text-sm font-medium text-text-base",
        nav: "flex items-center gap-1",
        button_previous: "absolute left-1 top-0 inline-flex items-center justify-center rounded-md h-7 w-7 bg-transparent text-text-muted hover:bg-subtle hover:text-text-base transition-colors",
        button_next: "absolute right-1 top-0 inline-flex items-center justify-center rounded-md h-7 w-7 bg-transparent text-text-muted hover:bg-subtle hover:text-text-base transition-colors",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-text-muted rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-1",
        day: "h-9 w-9 text-center text-sm relative flex items-center justify-center rounded-md transition-colors hover:bg-subtle focus-within:relative focus-within:z-20",
        day_button: "h-9 w-9 rounded-md text-sm font-normal aria-selected:opacity-100 cursor-pointer",
        selected: "bg-databeez-primary text-white hover:bg-databeez-primary hover:text-white focus:bg-databeez-primary focus:text-white rounded-md",
        today: "bg-subtle text-text-base font-semibold",
        outside: "text-text-muted opacity-50",
        disabled: "text-text-muted opacity-50 cursor-not-allowed",
        hidden: "invisible",
        range_middle: "bg-databeez-primary/15 text-text-base rounded-none",
        range_start: "rounded-l-md",
        range_end: "rounded-r-md",
        ...classNames,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

/* ------------------------------------------------------------------ */
/*  DatePicker                                                         */
/* ------------------------------------------------------------------ */

interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  label?: string
  error?: string
  helperText?: string
  disabled?: boolean
  className?: string
  /** date-fns format string */
  displayFormat?: string
}

function DatePicker({
  value,
  onChange,
  placeholder = "Seleziona data...",
  label,
  error,
  helperText,
  disabled,
  className,
  displayFormat = "dd/MM/yyyy",
}: DatePickerProps) {
  const id = React.useId()

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-base">
          {label}
        </label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "disabled:cursor-not-allowed disabled:opacity-50",
              !value && "text-text-muted",
              error && "border-red-300 focus:ring-red-500 focus:border-red-500",
              className
            )}
          >
            <CalendarIcon className="h-4 w-4 text-text-muted shrink-0" />
            <span className="truncate">
              {value ? format(value, displayFormat) : placeholder}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            autoFocus
          />
        </PopoverContent>
      </Popover>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-text-muted">{helperText}</p>
      )}
    </div>
  )
}
DatePicker.displayName = "DatePicker"

export { Calendar, DatePicker }
export type { CalendarProps, DatePickerProps }
