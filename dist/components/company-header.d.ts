import { StatusBadgeProps } from './status-badge';
import * as React from "react";
export interface CompanyHeaderAteco {
    codice?: string | null;
    descrizione?: string | null;
}
export interface CompanyHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    /** Tipo soggetto: "O" = organizzazione (default), "P" = persona. */
    tipoSoggetto?: "O" | "P";
    /** Sottotipo: tipo organizzazione (S, D, E, X, P, A) o tipo persona (F, P, A), secondo tipoSoggetto. */
    sottotipo?: string | null;
    /** Denominazione o nome e cognome (titolo). */
    nome: string;
    codiceFiscale?: string | null;
    partitaIva?: string | null;
    ateco?: CompanyHeaderAteco | null;
    formaGiuridica?: string | null;
    /** Stato attività in chiaro («Attiva», «Cessata», …): il tono si deduce dal testo, vedi statoVariant. */
    stato?: string | null;
    /** Tono dello stato; se omesso: attiv = success, cessat/chius = error, sospes/inattiv/liquidaz = warning, altro = neutral. */
    statoVariant?: StatusBadgeProps["variant"];
    /** Sede o comune. */
    sede?: string | null;
    /** Slot a destra del titolo: azioni, RiskBadge, … */
    actions?: React.ReactNode;
    /** Livello del titolo (default h2). */
    headingLevel?: "h1" | "h2" | "h3";
}
/**
 * Tono dello stato attività, dedotto dal testo: descrizioni o codici di honey.stati_attivita
 * («Attività in corso», «Attività cessata», «In liquidazione», CESSATA, …).
 * I casi negativi vanno controllati PRIMA: «Attività cessata» contiene anche «attiv».
 */
export declare function deriveStatoVariant(stato: string): NonNullable<StatusBadgeProps["variant"]>;
declare function CompanyHeader({ tipoSoggetto, sottotipo, nome, codiceFiscale, partitaIva, ateco, formaGiuridica, stato, statoVariant, sede, actions, headingLevel, className, ...props }: CompanyHeaderProps): import("react/jsx-runtime").JSX.Element;
export { CompanyHeader };
