"use client"

import * as React from "react"

import { Button } from "@/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog"
import { Spinner } from "@/components/spinner"

export interface ConfirmDialogProps {
  /** Controllo esterno. Se omesso, il dialog è non controllato (usare `trigger`). */
  open?: boolean
  onOpenChange?: (open: boolean) => void
  /** Elemento che apre il dialog (non controllato): va passato un `<button type="button">` o un `Button`. */
  trigger?: React.ReactElement
  title: React.ReactNode
  description?: React.ReactNode
  confirmLabel?: string
  cancelLabel?: string
  /** Conferma con `Button destructive`. */
  destructive?: boolean
  /**
   * Eseguita alla conferma. Se restituisce una Promise, il dialog resta aperto con i pulsanti
   * disabilitati finché non si risolve (poi si chiude); se rigetta resta aperto.
   */
  onConfirm: () => void | Promise<unknown>
}

function ConfirmDialog({
  open: openProp,
  onOpenChange,
  trigger,
  title,
  description,
  confirmLabel = "Conferma",
  cancelLabel = "Annulla",
  destructive = false,
  onConfirm,
}: ConfirmDialogProps) {
  const [openState, setOpenState] = React.useState(false)
  const [pending, setPending] = React.useState(false)
  const mounted = React.useRef(true)
  React.useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  const controlled = openProp !== undefined
  const open = controlled ? openProp : openState

  const setOpen = (next: boolean) => {
    if (pending && !next) return // non si chiude mentre la conferma è in corso
    if (!controlled) setOpenState(next)
    onOpenChange?.(next)
  }

  const handleConfirm = async () => {
    let result: void | Promise<unknown>
    try {
      result = onConfirm()
    } catch {
      return // errore sincrono: il dialog resta aperto
    }
    if (result && typeof (result as Promise<unknown>).then === "function") {
      setPending(true)
      try {
        await result
      } catch {
        // rigettata: il dialog resta aperto, l'errore va gestito da chi chiama
        if (mounted.current) setPending(false)
        return
      }
      if (mounted.current) setPending(false)
    }
    if (!controlled) setOpenState(false)
    onOpenChange?.(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <DialogFooter className="gap-2 sm:space-x-0">
          <Button
            type="button"
            variant="outline"
            disabled={pending}
            onClick={() => setOpen(false)}
          >
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant={destructive ? "destructive" : "default"}
            disabled={pending}
            aria-busy={pending || undefined}
            onClick={handleConfirm}
          >
            {pending && <Spinner size="sm" label="Operazione in corso..." className="mr-2" />}
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { ConfirmDialog }
