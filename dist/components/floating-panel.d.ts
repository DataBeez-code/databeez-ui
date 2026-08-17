import * as React from "react";
export interface FloatingPanelProps {
    title: string;
    children: React.ReactNode;
    /** Lato di ancoraggio della posizione iniziale. Default `"right"`. */
    anchor?: "left" | "right";
    /** Distanza iniziale, in px, dal bordo di ancoraggio. */
    offsetX?: number;
    /** Distanza iniziale, in px, dal bordo inferiore. */
    offsetY?: number;
    collapsible?: boolean;
    /** Stato collassato controllato. Se omesso, il componente lo gestisce da sé. */
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    onCollapsedChange?: (collapsed: boolean) => void;
    className?: string;
}
/**
 * Pannello flottante trascinabile con intestazione (maniglia + titolo +
 * collapse), `position: fixed` e corpo a scorrimento con altezza massima
 * calcolata. Estratto dai due pannelli di filtro duplicati in BeeGraph
 * (`NodeFilterPanel.tsx` / `EdgeFilterPanel.tsx`) e da `panelAnchor.ts`.
 *
 * Le coordinate di posizionamento restano inline (sono dinamiche, calcolate
 * dal drag); bordi, colori e tipografia passano dai token del design system.
 */
declare function FloatingPanel({ title, children, anchor, offsetX, offsetY, collapsible, collapsed, defaultCollapsed, onCollapsedChange, className, }: FloatingPanelProps): import("react/jsx-runtime").JSX.Element;
export { FloatingPanel };
