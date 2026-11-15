import * as React from "react";
export interface FilterChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type"> {
    label: React.ReactNode;
    /** Stato attivo (toggle). Esposto con `aria-pressed`. */
    active?: boolean;
    /** Click sul chip: toggle del filtro. */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Se presente il chip e' rimovibile: compare il pulsante «Rimuovi <label>». */
    onRemove?: () => void;
    /** Testo per l'`aria-label` del pulsante di rimozione quando `label` non e' una stringa. */
    removeLabel?: string;
    /** Icona opzionale a sinistra. */
    icon?: React.ReactNode;
}
/**
 * Chip di filtro. Senza `onRemove` e' un pulsante toggle (`aria-pressed`);
 * con `onRemove` il chip e' un gruppo: il corpo resta il toggle e accanto
 * c'e' un pulsante separato «Rimuovi <label>».
 */
declare const FilterChip: React.ForwardRefExoticComponent<FilterChipProps & React.RefAttributes<HTMLButtonElement>>;
export { FilterChip };
