"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Calendar } from "./date-picker"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

interface DateRangePickerProps {
  value?: DateRange
  onChange?: (range: DateRange | undefined) => void
  placeholder?: string
  label?: string
  error?: string
  helperText?: string
  disabled?: boolean
  className?: string
  displayFormat?: string
  /** Number of months to display side-by-side */
  numberOfMonths?: number
}

function DateRangePicker({
  value,
  onChange,
  placeholder = "Seleziona intervallo...",
  label,
  error,
  helperText,
  disabled,
  className,
  displayFormat = "dd/MM/yyyy",
  numberOfMonths = 2,
}: DateRangePickerProps) {
  const id = React.useId()

  const displayValue = React.useMemo(() => {
    if (!value?.from) return null
    if (!value.to) return format(value.from, displayFormat)
    return `${format(value.from, displayFormat)} — ${format(value.to, displayFormat)}`
  }, [value, displayFormat])

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
              !displayValue && "text-text-muted",
              error && "border-red-300 focus:ring-red-500 focus:border-red-500",
              className
            )}
          >
            <CalendarIcon className="h-4 w-4 text-text-muted shrink-0" />
            <span className="truncate">
              {displayValue ?? placeholder}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            selected={value}
            onSelect={onChange}
            numberOfMonths={numberOfMonths}
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
DateRangePicker.displayName = "DateRangePicker"

export { DateRangePicker }
export type { DateRangePickerProps }
