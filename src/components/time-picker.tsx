"use client"

import * as React from "react"
import { Clock } from "lucide-react"

import { cn } from "@/lib/utils"

interface TimePickerProps {
  value?: string // "HH:mm" format
  onChange?: (time: string) => void
  label?: string
  error?: string
  helperText?: string
  disabled?: boolean
  className?: string
  /** Minute step (default 1) */
  minuteStep?: number
  /** Allow seconds selection */
  showSeconds?: boolean
}

function TimePicker({
  value = "",
  onChange,
  label,
  error,
  helperText,
  disabled,
  className,
  minuteStep = 1,
  showSeconds = false,
}: TimePickerProps) {
  const id = React.useId()

  const parts = React.useMemo(() => {
    const [h = "", m = "", s = ""] = value.split(":")
    return { hours: h, minutes: m, seconds: s }
  }, [value])

  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"))
  const minutes = Array.from({ length: Math.ceil(60 / minuteStep) }, (_, i) =>
    String(i * minuteStep).padStart(2, "0")
  )
  const seconds = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"))

  function handleChange(field: "hours" | "minutes" | "seconds", val: string) {
    const next = { ...parts, [field]: val }
    if (!next.hours) next.hours = "00"
    if (!next.minutes) next.minutes = "00"
    const time = showSeconds
      ? `${next.hours}:${next.minutes}:${next.seconds || "00"}`
      : `${next.hours}:${next.minutes}`
    onChange?.(time)
  }

  const selectClasses = cn(
    "h-10 rounded-lg border border-border bg-surface px-2 py-2 text-sm text-text-base appearance-none",
    "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
    "disabled:cursor-not-allowed disabled:opacity-50",
    error && "border-red-300 focus:ring-red-500 focus:border-red-500"
  )

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-base">
          {label}
        </label>
      )}
      <div
        className={cn("flex items-center gap-2", className)}
      >
        <Clock className="h-4 w-4 text-text-muted shrink-0" />
        <select
          id={id}
          disabled={disabled}
          value={parts.hours}
          onChange={(e) => handleChange("hours", e.target.value)}
          className={selectClasses}
          aria-label="Ore"
        >
          <option value="" disabled>HH</option>
          {hours.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
        <span className="text-text-muted font-medium">:</span>
        <select
          disabled={disabled}
          value={parts.minutes}
          onChange={(e) => handleChange("minutes", e.target.value)}
          className={selectClasses}
          aria-label="Minuti"
        >
          <option value="" disabled>MM</option>
          {minutes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        {showSeconds && (
          <>
            <span className="text-text-muted font-medium">:</span>
            <select
              disabled={disabled}
              value={parts.seconds}
              onChange={(e) => handleChange("seconds", e.target.value)}
              className={selectClasses}
              aria-label="Secondi"
            >
              <option value="" disabled>SS</option>
              {seconds.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </>
        )}
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-text-muted">{helperText}</p>
      )}
    </div>
  )
}
TimePicker.displayName = "TimePicker"

export { TimePicker }
export type { TimePickerProps }
