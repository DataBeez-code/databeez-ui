import * as React from "react";
export interface SparklineProps extends Omit<React.SVGAttributes<SVGSVGElement>, "width" | "height"> {
    data: number[];
    width?: number;
    height?: number;
    strokeWidth?: number;
    /** Riempimento tenue sotto la linea. */
    area?: boolean;
}
/**
 * Sparkline SVG senza dipendenze. Il colore è `currentColor`: si cambia con una classe
 * token (`text-primary` di default, `text-trend-positive`, `text-info`…).
 * Senza `aria-label` è nascosta agli screen reader (`aria-hidden`).
 */
declare function Sparkline({ data, width, height, strokeWidth, area, className, "aria-label": ariaLabel, ...props }: SparklineProps): import("react/jsx-runtime").JSX.Element;
export { Sparkline };
