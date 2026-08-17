"use client"

import * as React from "react"
import { Check, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Stato intermedio (trattino) — es. il nodo padre di un CheckboxTree. */
  indeterminate?: boolean
  size?: "default" | "sm"
}

const SIZE_CLASSES: Record<NonNullable<CheckboxProps["size"]>, string> = {
  default: "h-4 w-4",
  sm: "h-3.5 w-3.5",
}

/**
 * Primitivo mancante nel design system (la libreria ha solo `Switch`).
 *
 * Implementato su `<input type="checkbox">` nativo, non su Radix: il repo
 * non ha `@radix-ui/react-checkbox` tra le dipendenze e il perimetro del
 * task vieta di aggiungerne di nuove (vedi package.json). Un checkbox
 * nativo resta pienamente accessibile — focus da tastiera, ruolo e stato
 * annunciati dagli screen reader — l'unico stato che l'HTML non espone in
 * modo dichiarativo è `indeterminate`, che qui va impostato in modo
 * imperativo sul nodo DOM (stesso pattern già usato in BeeGraph).
 *
 * Lo stile nativo del check viene nascosto (`appearance-none`) e sostituito
 * da un'icona sovrapposta, quindi il componente si tiene sempre "controllato"
 * internamente: se non arriva una prop `checked` dall'esterno, mantiene da
 * sé lo stato (inizializzato da `defaultChecked`) così il segno di spunta
 * segue comunque il click anche in uso non controllato.
 */
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      indeterminate = false,
      size = "default",
      checked,
      defaultChecked,
      disabled,
      onChange,
      ...props
    },
    forwardedRef
  ) => {
    const innerRef = React.useRef<HTMLInputElement | null>(null)
    const isControlled = checked !== undefined
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked ?? false
    )
    const isChecked = isControlled ? !!checked : internalChecked

    React.useEffect(() => {
      if (innerRef.current) innerRef.current.indeterminate = indeterminate
    }, [indeterminate])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      if (!isControlled) setInternalChecked(event.target.checked)
      onChange?.(event)
    }

    const showCheck = isChecked && !indeterminate
    const showDash = indeterminate

    return (
      <span className={cn("relative inline-flex shrink-0", SIZE_CLASSES[size])}>
        <input
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          ref={(el) => {
            innerRef.current = el
            if (typeof forwardedRef === "function") forwardedRef(el)
            else if (forwardedRef) forwardedRef.current = el
          }}
          className={cn(
            "peer m-0 shrink-0 cursor-pointer appearance-none rounded border transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            "disabled:cursor-not-allowed disabled:opacity-50",
            showCheck || showDash
              ? "border-databeez-primary bg-databeez-primary"
              : "border-border bg-surface",
            SIZE_CLASSES[size],
            className
          )}
          {...props}
        />
        <Check
          strokeWidth={3}
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full p-[2px] text-surface",
            showCheck ? "opacity-100" : "opacity-0"
          )}
        />
        <Minus
          strokeWidth={3}
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full p-[2px] text-surface",
            showDash ? "opacity-100" : "opacity-0"
          )}
        />
      </span>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
