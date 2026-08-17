"use client"

import * as React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Checkbox } from "./checkbox"

export /* Le etichette sono ReactNode e non stringhe perché un consumatore tipico ci
   mette anche un indicatore accanto al testo — nel pannello dei filtri di
   BeeGraph, il pallino con il colore del tipo di nodo, che è ciò che lega la riga
   del filtro al nodo sul canvas. */
interface CheckboxTreeChild {
  key: string
  label: React.ReactNode
  checked: boolean
  onToggle: () => void
  /** Disabilitazione propria del figlio, indipendente dal padre. */
  disabled?: boolean
}

export interface CheckboxTreeProps {
  label: React.ReactNode
  /**
   * Interruttore del padre, INDIPENDENTE dallo stato dei figli — l'equivalente
   * di `!companyHidden` in BeeGraph, non un aggregato "tutti i figli accesi".
   * Gli stati mostrati (acceso / trattino / spento) vengono derivati qui
   * dentro combinando questo interruttore con lo stato dei figli: non sono
   * accettati come booleani indipendenti dall'esterno, perché è proprio quel
   * disallineamento ad aver causato il difetto originale in BeeGraph.
   */
  checked: boolean
  /** Flip del solo interruttore del padre. */
  onToggle: () => void
  children: CheckboxTreeChild[]
  expanded: boolean
  onExpandedChange: (expanded: boolean) => void
  size?: "default" | "sm"
  className?: string
}

/**
 * Casella padre con figli, a tre stati. Replica generalizzata di
 * `handleOrgParent` in BeeGraph (`NodeFilterPanel.tsx`).
 *
 * Semantica del click sul padre (la parte non ovvia):
 * - se il gruppo è acceso o in trattino → SPEGNE solo l'interruttore del
 *   padre. I figli non vengono toccati: riaccendendo il padre l'utente
 *   ritrova la stessa selezione che aveva.
 * - se il gruppo è spento perché l'interruttore del padre è spento →
 *   riaccende SOLO quello.
 * - se il gruppo è spento perché tutti i figli sono stati spenti uno per uno
 *   (padre ancora acceso) → riaccende i figli.
 *
 * Il difetto che questo evita: un click dal trattino che riaccende tutti i
 * figli spenti invece di spegnere il gruppo — una casella che aggiunge
 * elementi quando la spegni è l'opposto di quel che promette.
 */
function CheckboxTree({
  label,
  checked,
  onToggle,
  children,
  expanded,
  onExpandedChange,
  size = "default",
  className,
}: CheckboxTreeProps) {
  const hasChildren = children.length > 0
  const allChildrenOff = hasChildren && children.every((c) => !c.checked)
  const someChildrenOff =
    hasChildren && !allChildrenOff && children.some((c) => !c.checked)

  const visuallyOn = checked && !allChildrenOff
  const visuallyIndeterminate = checked && someChildrenOff

  function handleParentToggle() {
    if (visuallyOn || visuallyIndeterminate) {
      if (checked) onToggle()
      return
    }
    if (!checked) {
      onToggle()
      return
    }
    children.forEach((c) => {
      if (!c.checked) c.onToggle()
    })
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-1.5">
        {/*
          Il chevron è FRATELLO del <label>, non figlio, e non è una scelta
          di stile. Un <button> è un "labelable element": dentro il <label>
          senza `for`, il controllo etichettato è il primo discendente
          etichettabile in ordine di albero (HTML §4.10.4), quindi il
          bottone ruberebbe il ruolo alla casella e cliccare l'etichetta
          espanderebbe invece di spuntare.
        */}
        {hasChildren ? (
          <button
            type="button"
            onClick={() => onExpandedChange(!expanded)}
            aria-label={expanded ? "Comprimi" : "Espandi"}
            aria-expanded={expanded}
            className="flex shrink-0 items-center justify-center text-text-muted hover:text-text-base"
          >
            {expanded ? (
              <ChevronDown className="h-3.5 w-3.5" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5" />
            )}
          </button>
        ) : (
          <span className="w-3.5 shrink-0" />
        )}
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            size={size}
            checked={visuallyOn}
            indeterminate={visuallyIndeterminate}
            onChange={handleParentToggle}
          />
          <span
            className={cn(
              "text-sm",
              visuallyOn || visuallyIndeterminate ? "text-text-base" : "text-text-muted"
            )}
          >
            {label}
          </span>
        </label>
      </div>

      {hasChildren && expanded && (
        <div className="ml-5 mt-1 flex flex-col gap-1">
          {children.map((child) => {
            const isDisabled = !checked || !!child.disabled
            return (
              <label
                key={child.key}
                className={cn(
                  "flex select-none items-center gap-2",
                  isDisabled ? "cursor-default opacity-50" : "cursor-pointer"
                )}
              >
                <Checkbox
                  size="sm"
                  checked={child.checked}
                  disabled={isDisabled}
                  onChange={child.onToggle}
                />
                <span className="text-xs text-text-base">{child.label}</span>
              </label>
            )
          })}
        </div>
      )}
    </div>
  )
}

export { CheckboxTree }
