"use client"

import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { AlertTriangle, CheckCircle, Info, X, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  createToastStore,
  toastAnnouncement,
  type ToastItem,
  type ToastOptions,
  type ToastVariant,
} from "@/lib/toast-store"

export type { ToastAction, ToastOptions, ToastVariant } from "@/lib/toast-store"

// Store globale: `toast()` funziona da qualsiasi punto, anche fuori da React.
const toastStore = createToastStore()

/** Mostra un toast. Ritorna l'id, utilizzabile con `dismissToast`. */
function toast(options: ToastOptions): string {
  return toastStore.add(options)
}
toast.success = (title: string, options?: Omit<ToastOptions, "title" | "variant">) =>
  toastStore.add({ ...options, title, variant: "success" })
toast.error = (title: string, options?: Omit<ToastOptions, "title" | "variant">) =>
  toastStore.add({ ...options, title, variant: "error" })
toast.warning = (title: string, options?: Omit<ToastOptions, "title" | "variant">) =>
  toastStore.add({ ...options, title, variant: "warning" })
toast.info = (title: string, options?: Omit<ToastOptions, "title" | "variant">) =>
  toastStore.add({ ...options, title, variant: "info" })

/** Chiude un toast per id, o tutti se senza argomento. */
function dismissToast(id?: string) {
  toastStore.dismiss(id)
}

/** Hook equivalente alle funzioni globali, comodo nei componenti. */
function useToast() {
  const toasts = React.useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    toastStore.getSnapshot
  )
  return { toasts, toast, dismiss: dismissToast }
}

const variantStyles: Record<ToastVariant, string> = {
  neutral: "bg-surface border-border text-text-base",
  info: "bg-info-bg border-info-border text-info-fg",
  success: "bg-success-bg border-success-border text-success-fg",
  warning: "bg-warning-bg border-warning-border text-warning-fg",
  error: "bg-error-bg border-error-border text-error-fg",
}

const variantIcons: Record<ToastVariant, React.ComponentType<{ className?: string }> | null> = {
  neutral: null,
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
}

function ToastView({ item }: { item: ToastItem }) {
  const Icon = variantIcons[item.variant]
  return (
    <ToastPrimitive.Root
      type={toastAnnouncement(item.variant) === "assertive" ? "foreground" : "background"}
      duration={item.duration ?? Infinity}
      onOpenChange={(open) => {
        if (!open) toastStore.dismiss(item.id)
      }}
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm shadow-lg",
        variantStyles[item.variant]
      )}
    >
      {Icon && <Icon className="mt-0.5 h-4 w-4 shrink-0" />}
      <div className="min-w-0 flex-1">
        <ToastPrimitive.Title className="font-medium">{item.title}</ToastPrimitive.Title>
        {item.description && (
          <ToastPrimitive.Description className="mt-0.5 text-xs opacity-90">
            {item.description}
          </ToastPrimitive.Description>
        )}
      </div>
      {item.action && (
        <ToastPrimitive.Action altText={item.action.label} asChild>
          <button
            type="button"
            onClick={item.action.onClick}
            className="shrink-0 rounded-md px-2 py-1 text-xs font-semibold underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {item.action.label}
          </button>
        </ToastPrimitive.Action>
      )}
      <ToastPrimitive.Close asChild>
        <button
          type="button"
          aria-label="Chiudi notifica"
          className="shrink-0 rounded-sm opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X className="h-4 w-4" />
        </button>
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  )
}

export interface ToasterProps {
  /** Etichetta della regione annunciata ai lettori di schermo. */
  label?: string
  className?: string
}

/**
 * Da montare una sola volta (layout root). Mostra i toast creati con `toast()`.
 * In basso a destra; Radix gestisce pausa in hover/focus, swipe ed F8 per il focus.
 */
function Toaster({ label = "Notifiche ({hotkey})", className }: ToasterProps) {
  const { toasts } = useToast()
  return (
    <ToastPrimitive.Provider label={label} swipeDirection="right">
      {toasts.map((t) => (
        <ToastView key={t.id} item={t} />
      ))}
      <ToastPrimitive.Viewport
        className={cn(
          "fixed bottom-4 right-4 z-[10000] m-0 flex w-[360px] max-w-[calc(100vw-2rem)] list-none flex-col gap-2 p-0 outline-none",
          className
        )}
      />
    </ToastPrimitive.Provider>
  )
}

export { Toaster, toast, dismissToast, useToast }
