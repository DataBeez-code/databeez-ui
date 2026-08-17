export interface CheckboxTreeChild {
    key: string;
    label: string;
    checked: boolean;
    onToggle: () => void;
    /** Disabilitazione propria del figlio, indipendente dal padre. */
    disabled?: boolean;
}
export interface CheckboxTreeProps {
    label: string;
    /**
     * Interruttore del padre, INDIPENDENTE dallo stato dei figli — l'equivalente
     * di `!companyHidden` in BeeGraph, non un aggregato "tutti i figli accesi".
     * Gli stati mostrati (acceso / trattino / spento) vengono derivati qui
     * dentro combinando questo interruttore con lo stato dei figli: non sono
     * accettati come booleani indipendenti dall'esterno, perché è proprio quel
     * disallineamento ad aver causato il difetto originale in BeeGraph.
     */
    checked: boolean;
    /** Flip del solo interruttore del padre. */
    onToggle: () => void;
    children: CheckboxTreeChild[];
    expanded: boolean;
    onExpandedChange: (expanded: boolean) => void;
    size?: "default" | "sm";
    className?: string;
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
declare function CheckboxTree({ label, checked, onToggle, children, expanded, onExpandedChange, size, className, }: CheckboxTreeProps): import("react/jsx-runtime").JSX.Element;
export { CheckboxTree };
