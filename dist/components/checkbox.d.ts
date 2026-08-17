import * as React from "react";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
    /** Stato intermedio (trattino) — es. il nodo padre di un CheckboxTree. */
    indeterminate?: boolean;
    size?: "default" | "sm";
}
/**
 * Primitivo mancante nel design system (la libreria ha solo `Switch`).
 *
 * Implementato su `<input type="checkbox">` nativo, non su Radix: il repo
 * non ha `@radix-ui/react-checkbox` tra le dipendenze e il perimetro del
 * task vieta di aggiungerne di nuove (vedi package.json). Un checkbox
 * nativo resta pienamente accessibile — focus da tastiera, ruolo e stato
 * annunciati dagli screen reader — l'unico stato che l'HTML non espone in
 * modo dichiarativo è `indeterminate`, che qui va impostato in modo
 * imperativo sul nodo DOM (stesso pattern già usato in BeeGraph).
 *
 * Lo stile nativo del check viene nascosto (`appearance-none`) e sostituito
 * da un'icona sovrapposta, quindi il componente si tiene sempre "controllato"
 * internamente: se non arriva una prop `checked` dall'esterno, mantiene da
 * sé lo stato (inizializzato da `defaultChecked`) così il segno di spunta
 * segue comunque il click anche in uso non controllato.
 */
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export { Checkbox };
