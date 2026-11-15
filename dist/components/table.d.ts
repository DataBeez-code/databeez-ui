import * as React from "react";
declare const Table: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
interface NumericProps {
    /** Colonna numerica: allineata a destra, cifre tabulari, importi su una riga. */
    numeric?: boolean;
}
declare const TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & NumericProps & React.RefAttributes<HTMLTableCellElement>>;
export type SortDirection = "asc" | "desc";
export interface TableSortHeadProps extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "onClick">, NumericProps {
    /** Direzione di ordinamento corrente di questa colonna; `null` se la tabella non è ordinata per essa. */
    direction: SortDirection | null;
    /** Chiamata all'attivazione (clic, Invio, Spazio): l'ordinamento dei dati è a carico dell'app. */
    onSort: () => void;
}
declare const TableSortHead: React.ForwardRefExoticComponent<TableSortHeadProps & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & NumericProps & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableSortHead, TableRow, TableCell, TableCaption, };
