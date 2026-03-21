import * as React from "react";
export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
    width?: number;
    /** Contenuto dell'header (titolo, icona, badge…) */
    header?: React.ReactNode;
}
declare function SidePanel({ open, onClose, width, header, children, className, ...props }: SidePanelProps): import("react/jsx-runtime").JSX.Element | null;
export { SidePanel };
