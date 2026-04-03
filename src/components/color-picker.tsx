"use client"

import * as React from "react"
import { Pipette } from "lucide-react"

import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

const DEFAULT_PRESETS = [
  "#f59e0b", // amber-500  (databeez primary)
  "#ef4444", // red-500
  "#f97316", // orange-500
  "#84cc16", // lime-500
  "#10b981", // emerald-500
  "#06b6d4", // cyan-500
  "#3b82f6", // blue-500
  "#8b5cf6", // violet-500
  "#ec4899", // pink-500
  "#6b7280", // gray-500
  "#1f2937", // gray-800
  "#ffffff", // white
]

interface ColorPickerProps {
  value?: string
  onChange?: (color: string) => void
  presets?: string[]
  label?: string
  error?: string
  helperText?: string
  disabled?: boolean
  className?: string
}

function ColorPicker({
  value = "#f59e0b",
  onChange,
  presets = DEFAULT_PRESETS,
  label,
  error,
  helperText,
  disabled,
  className,
}: ColorPickerProps) {
  const id = React.useId()
  const [inputValue, setInputValue] = React.useState(value)

  React.useEffect(() => {
    setInputValue(value)
  }, [value])

  function handleHexChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value
    setInputValue(v)
    if (/^#[0-9a-fA-F]{6}$/.test(v)) {
      onChange?.(v)
    }
  }

  function handlePresetClick(color: string) {
    setInputValue(color)
    onChange?.(color)
  }

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
              error && "border-red-300 focus:ring-red-500 focus:border-red-500",
              className
            )}
          >
            <span
              className="h-5 w-5 rounded border border-border shrink-0"
              style={{ backgroundColor: value }}
            />
            <span className="text-text-base font-mono text-xs uppercase">{value}</span>
            <Pipette className="ml-auto h-4 w-4 text-text-muted shrink-0" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <div className="space-y-3">
            {/* Color preview */}
            <div
              className="h-16 w-full rounded-lg border border-border"
              style={{ backgroundColor: value }}
            />

            {/* Native color input + hex */}
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={value}
                onChange={(e) => {
                  setInputValue(e.target.value)
                  onChange?.(e.target.value)
                }}
                className="h-10 w-10 rounded-lg border border-border cursor-pointer bg-transparent p-0.5"
                disabled={disabled}
              />
              <input
                type="text"
                value={inputValue}
                onChange={handleHexChange}
                placeholder="#000000"
                maxLength={7}
                className={cn(
                  "flex-1 h-10 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-mono uppercase",
                  "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
                  "placeholder:text-text-muted"
                )}
                disabled={disabled}
              />
            </div>

            {/* Preset grid */}
            {presets.length > 0 && (
              <div className="grid grid-cols-6 gap-1.5">
                {presets.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => handlePresetClick(color)}
                    className={cn(
                      "h-7 w-full rounded-md border transition-all",
                      value === color
                        ? "border-databeez-primary ring-2 ring-databeez-primary/30 scale-110"
                        : "border-border hover:scale-110"
                    )}
                    style={{ backgroundColor: color }}
                    title={color}
                    disabled={disabled}
                  />
                ))}
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-text-muted">{helperText}</p>
      )}
    </div>
  )
}
ColorPicker.displayName = "ColorPicker"

export { ColorPicker, DEFAULT_PRESETS }
export type { ColorPickerProps }
