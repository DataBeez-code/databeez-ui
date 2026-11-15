import * as React from "react";
export type ProgressBarTone = "primary" | "success" | "warning" | "error" | "info" | "accent";
export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    value: number;
    /** Valore massimo. Default `100`. */
    max?: number;
    tone?: ProgressBarTone;
    label?: string;
    /** Mostra la percentuale (valore/max) accanto all'etichetta. */
    showValue?: boolean;
}
declare function ProgressBar({ value, max, tone, label, showValue, className, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-valuetext": ariaValueText, ...props }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
export { ProgressBar };
