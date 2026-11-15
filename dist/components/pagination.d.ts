import * as React from "react";
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
    /** Pagina corrente, a partire da 1. */
    page: number;
    /** Numero totale di pagine. */
    pageCount: number;
    /** Chiamata con la nuova pagina (sempre nell'intervallo 1..pageCount). */
    onPageChange: (page: number) => void;
    /** Totale elementi: se presente mostra «1.234 risultati». */
    totalItems?: number;
    /** Etichetta accessibile del `nav`. Default «Paginazione». */
    "aria-label"?: string;
}
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
export { Pagination };
