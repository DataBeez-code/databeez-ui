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
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

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
   * inattivi finché non si risolve (poi si chiude); se lancia o rigetta, il dialog resta aperto
   * e l'errore va a `onError`.
   */
  onConfirm: () => void | Promise<unknown>
  /**
   * Riceve l'errore se `onConfirm` lancia o rigetta (es. per mostrare un toast). Se omessa,
   * l'errore viene rilanciato in modo asincrono: finisce in console e nei sistemi di
   * tracciamento invece di sparire in silenzio.
   */
  onError?: (error: unknown) => void
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
  onError,
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

  const reportError = (error: unknown) => {
    if (onError) onError(error)
    else
      queueMicrotask(() => {
        throw error
      })
  }

  const handleConfirm = async () => {
    if (pending) return
    let result: void | Promise<unknown>
    try {
      result = onConfirm()
    } catch (error) {
      reportError(error) // errore sincrono: il dialog resta aperto
      return
    }
    if (result && typeof (result as Promise<unknown>).then === "function") {
      setPending(true)
      try {
        await result
      } catch (error) {
        // rigettata: il dialog resta aperto
        if (mounted.current) setPending(false)
        reportError(error)
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
          {/* aria-disabled e non disabled: un pulsante disabilitato mentre ha il focus lo
              cede a <body>, e Radix non lo riporta nel dialog. */}
          <Button
            type="button"
            variant="outline"
            aria-disabled={pending || undefined}
            className={cn(pending && "cursor-not-allowed opacity-50")}
            onClick={() => {
              if (!pending) setOpen(false)
            }}
          >
            {cancelLabel}
          </Button>
          <Button
            type="button"
            variant={destructive ? "destructive" : "default"}
            aria-disabled={pending || undefined}
            aria-busy={pending || undefined}
            className={cn(pending && "cursor-not-allowed opacity-75")}
            onClick={handleConfirm}
          >
            {/* Icona nel colore del testo del pulsante: visibile su ogni variante */}
            {pending && <Loader2 aria-hidden="true" className="mr-2 h-4 w-4 animate-spin" />}
            {pending && <span className="sr-only">Operazione in corso: </span>}
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { ConfirmDialog }
