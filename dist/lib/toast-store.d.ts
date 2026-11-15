export type ToastVariant = "neutral" | "success" | "warning" | "error" | "info";
export interface ToastAction {
    label: string;
    onClick: () => void;
}
export interface ToastOptions {
    title: string;
    description?: string;
    variant?: ToastVariant;
    /** Millisecondi prima della chiusura automatica. `null` o `Infinity` = non si chiude da solo. */
    duration?: number | null;
    action?: ToastAction;
    /** Id esplicito: un toast con lo stesso id sostituisce quello esistente. */
    id?: string;
}
export interface ToastItem {
    id: string;
    title: string;
    description?: string;
    variant: ToastVariant;
    /** `null` = nessuna chiusura automatica. */
    duration: number | null;
    action?: ToastAction;
}
export declare const DEFAULT_TOAST_DURATION = 5000;
export declare const DEFAULT_MAX_TOASTS = 5;
export declare function resolveToastDuration(duration: number | null | undefined): number | null;
/** Errori e avvisi vanno annunciati subito (role alert), il resto in modo cortese. */
export declare function toastAnnouncement(variant: ToastVariant): "assertive" | "polite";
export interface ToastStore {
    subscribe: (listener: () => void) => () => void;
    getSnapshot: () => readonly ToastItem[];
    add: (options: ToastOptions) => string;
    dismiss: (id?: string) => void;
}
export declare function createToastStore(maxToasts?: number): ToastStore;
