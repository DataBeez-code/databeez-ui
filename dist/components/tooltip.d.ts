import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const TooltipRoot: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface TooltipProps {
    /** Testo (o nodo) del tooltip. Se vuoto, il figlio viene reso senza tooltip. */
    content: React.ReactNode;
    /** Elemento trigger: deve accettare ref e props (button, a...). */
    children: React.ReactElement;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    /** Ritardo di apertura in ms. */
    delayDuration?: number;
    className?: string;
}
/**
 * Caso comune: `<Tooltip content="Elimina"><button type="button">...</button></Tooltip>`.
 * Si apre in hover e al focus da tastiera, si chiude con Esc.
 * Include il proprio provider: non serve montarne uno nell'app.
 */
declare function Tooltip({ content, children, side, align, delayDuration, className, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export { Tooltip, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent };
