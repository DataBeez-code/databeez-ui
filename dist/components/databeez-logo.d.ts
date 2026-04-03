export interface DataBeezLogoProps {
    /** Larghezza del logo (default: auto, calcolata dall'altezza) */
    width?: number | string;
    /** Altezza del logo (default: 48) */
    height?: number | string;
    /** Classe CSS aggiuntiva */
    className?: string;
    /** Colore struttura esagonale (default: colori originali con supporto dark mode) */
    variant?: 'color' | 'mono';
}
export declare function DataBeezLogo({ width, height, className, variant }: DataBeezLogoProps): import("react/jsx-runtime").JSX.Element;
