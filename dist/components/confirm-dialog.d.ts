import * as React from "react";
export interface ConfirmDialogProps {
    /** Controllo esterno. Se omesso, il dialog è non controllato (usare `trigger`). */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Elemento che apre il dialog (non controllato): va passato un `<button type="button">` o un `Button`. */
    trigger?: React.ReactElement;
    title: React.ReactNode;
    description?: React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    /** Conferma con `Button destructive`. */
    destructive?: boolean;
    /**
     * Eseguita alla conferma. Se restituisce una Promise, il dialog resta aperto con i pulsanti
     * inattivi finché non si risolve (poi si chiude); se lancia o rigetta, il dialog resta aperto
     * e l'errore va a `onError`.
     */
    onConfirm: () => void | Promise<unknown>;
    /**
     * Riceve l'errore se `onConfirm` lancia o rigetta (es. per mostrare un toast). Se omessa,
     * l'errore viene rilanciato in modo asincrono: finisce in console e nei sistemi di
     * tracciamento invece di sparire in silenzio.
     */
    onError?: (error: unknown) => void;
}
declare function ConfirmDialog({ open: openProp, onOpenChange, trigger, title, description, confirmLabel, cancelLabel, destructive, onConfirm, onError, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
export { ConfirmDialog };
