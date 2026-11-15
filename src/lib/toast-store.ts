// Logica pura dei toast: coda, durate, chiusura. Nessuna dipendenza da React/DOM.

export type ToastVariant = "neutral" | "success" | "warning" | "error" | "info"

export interface ToastAction {
  label: string
  onClick: () => void
}

export interface ToastOptions {
  title: string
  description?: string
  variant?: ToastVariant
  /** Millisecondi prima della chiusura automatica. `null` o `Infinity` = non si chiude da solo. */
  duration?: number | null
  action?: ToastAction
  /** Id esplicito: un toast con lo stesso id sostituisce quello esistente. */
  id?: string
}

export interface ToastItem {
  id: string
  title: string
  description?: string
  variant: ToastVariant
  /** `null` = nessuna chiusura automatica. */
  duration: number | null
  action?: ToastAction
}

export const DEFAULT_TOAST_DURATION = 5000
export const DEFAULT_MAX_TOASTS = 5

export function resolveToastDuration(duration: number | null | undefined): number | null {
  if (duration === undefined) return DEFAULT_TOAST_DURATION
  if (duration === null || !Number.isFinite(duration) || duration <= 0) return null
  return duration
}

/** Errori e avvisi vanno annunciati subito (role alert), il resto in modo cortese. */
export function toastAnnouncement(variant: ToastVariant): "assertive" | "polite" {
  return variant === "error" || variant === "warning" ? "assertive" : "polite"
}

export interface ToastStore {
  subscribe: (listener: () => void) => () => void
  getSnapshot: () => readonly ToastItem[]
  add: (options: ToastOptions) => string
  dismiss: (id?: string) => void
}

export function createToastStore(maxToasts: number = DEFAULT_MAX_TOASTS): ToastStore {
  let items: readonly ToastItem[] = []
  let counter = 0
  const listeners = new Set<() => void>()

  const emit = (next: readonly ToastItem[]) => {
    items = next
    listeners.forEach((l) => l())
  }

  return {
    subscribe(listener) {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    getSnapshot: () => items,
    add(options) {
      counter += 1
      const id = options.id ?? `toast-${counter}`
      const item: ToastItem = {
        id,
        title: options.title,
        description: options.description,
        variant: options.variant ?? "neutral",
        duration: resolveToastDuration(options.duration),
        action: options.action,
      }
      const without = items.filter((t) => t.id !== id)
      // Oltre il massimo si scartano i più vecchi.
      emit([...without, item].slice(-maxToasts))
      return id
    },
    dismiss(id) {
      emit(id === undefined ? [] : items.filter((t) => t.id !== id))
    },
  }
}
