/** Numero di pagine per `totalItems` elementi con `pageSize` per pagina (minimo 1). */
export declare function getPageCount(totalItems: number, pageSize: number): number;
/** Riporta `page` nell'intervallo valido 1..pageCount. */
export declare function clampPage(page: number, pageCount: number): number;
