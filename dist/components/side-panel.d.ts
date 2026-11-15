import * as React from "react";
export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    width?: number;
    /** Contenuto dell'header (titolo, icona, badge…) */
    header?: React.ReactNode;
    /** Abilita la maniglia di ridimensionamento sul bordo sinistro. Default: false (comportamento invariato). */
    resizable?: boolean;
    /** Larghezza minima in px quando `resizable` (default 280). */
    minWidth?: number;
    /** Larghezza massima in px quando `resizable` (default 640). */
    maxWidth?: number;
    /** Larghezza iniziale quando `resizable`; se omessa si usa `width`. */
    defaultWidth?: number;
    /** Chiamata a ogni variazione di larghezza (trascinamento o tastiera). */
    onWidthChange?: (width: number) => void;
}
declare function SidePanel({ open, onClose, width, header, resizable, minWidth, maxWidth, defaultWidth, onWidthChange, children, className, ...props }: SidePanelProps): import("react/jsx-runtime").JSX.Element | null;
export { SidePanel };
