import { ToastItem, ToastOptions } from '../lib/toast-store';
export type { ToastAction, ToastOptions, ToastVariant } from '../lib/toast-store';
/** Mostra un toast. Ritorna l'id, utilizzabile con `dismissToast`. */
declare function toast(options: ToastOptions): string;
declare namespace toast {
    var success: (title: string, options?: Omit<ToastOptions, "title" | "variant">) => string;
    var error: (title: string, options?: Omit<ToastOptions, "title" | "variant">) => string;
    var warning: (title: string, options?: Omit<ToastOptions, "title" | "variant">) => string;
    var info: (title: string, options?: Omit<ToastOptions, "title" | "variant">) => string;
}
/** Chiude un toast per id, o tutti se senza argomento. */
declare function dismissToast(id?: string): void;
/** Hook equivalente alle funzioni globali, comodo nei componenti. */
declare function useToast(): {
    toasts: readonly ToastItem[];
    toast: typeof toast;
    dismiss: typeof dismissToast;
};
export interface ToasterProps {
    /** Etichetta della regione annunciata ai lettori di schermo. */
    label?: string;
    className?: string;
}
/**
 * Da montare una sola volta (layout root). Mostra i toast creati con `toast()`.
 * In basso a destra; Radix gestisce pausa in hover/focus, swipe ed F8 per il focus.
 */
declare function Toaster({ label, className }: ToasterProps): import("react/jsx-runtime").JSX.Element;
export { Toaster, toast, dismissToast, useToast };
