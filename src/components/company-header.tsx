import * as React from "react"
import { MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { getOrgMeta, getPersonMeta, getSubjectMeta } from "@/entities"
import { CopyButton } from "./copy-button"
import { StatusBadge, type StatusBadgeProps } from "./status-badge"

export interface CompanyHeaderAteco {
  codice?: string | null
  descrizione?: string | null
}

export interface CompanyHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Tipo soggetto: "O" = organizzazione (default), "P" = persona. */
  tipoSoggetto?: "O" | "P"
  /** Sottotipo: tipo organizzazione (S, D, E, X, P, A) o tipo persona (F, P, A), secondo tipoSoggetto. */
  sottotipo?: string | null
  /** Denominazione o nome e cognome (titolo). */
  nome: string
  codiceFiscale?: string | null
  partitaIva?: string | null
  ateco?: CompanyHeaderAteco | null
  formaGiuridica?: string | null
  /** Stato attività in chiaro («Attiva», «Cessata», …): il tono si deduce dal testo, vedi statoVariant. */
  stato?: string | null
  /** Tono dello stato; se omesso: attiv = success, cessat/chius = error, sospes/inattiv/liquidaz = warning, altro = neutral. */
  statoVariant?: StatusBadgeProps["variant"]
  /** Sede o comune. */
  sede?: string | null
  /** Slot a destra del titolo: azioni, RiskBadge, … */
  actions?: React.ReactNode
  /** Livello del titolo (default h2). */
  headingLevel?: "h1" | "h2" | "h3"
}

/**
 * Tono dello stato attività, dedotto dal testo: descrizioni o codici di honey.stati_attivita
 * («Attività in corso», «Attività cessata», «In liquidazione», CESSATA, …).
 * I casi negativi vanno controllati PRIMA: «Attività cessata» contiene anche «attiv».
 */
export function deriveStatoVariant(stato: string): NonNullable<StatusBadgeProps["variant"]> {
  const s = stato.trim().toLowerCase()
  if (/cessat|chius|falliment/.test(s)) return "error"
  if (/sospes|inattiv|liquidaz|sciogliment/.test(s)) return "warning"
  if (/attiv|in corso/.test(s)) return "success"
  return "neutral"
}

const present = (v: string | null | undefined): v is string => !!v && v.trim() !== ""

function IdField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-xs text-text-muted">{label}</span>
      <span className="font-mono tabular-nums text-sm text-text-base">{value}</span>
      <CopyButton text={value} label="" aria-label={`Copia ${label} ${value}`} />
    </div>
  )
}

function CompanyHeader({
  tipoSoggetto = "O",
  sottotipo,
  nome,
  codiceFiscale,
  partitaIva,
  ateco,
  formaGiuridica,
  stato,
  statoVariant,
  sede,
  actions,
  headingLevel = "h2",
  className,
  ...props
}: CompanyHeaderProps) {
  const subject = getSubjectMeta(tipoSoggetto)
  const meta =
    tipoSoggetto === "P" ? getPersonMeta(sottotipo ?? undefined) : getOrgMeta(sottotipo ?? undefined)
  const Icon = meta.icon ?? subject.icon
  const Heading = headingLevel

  const atecoText = [ateco?.codice, ateco?.descrizione].filter(present).join(" — ")
  const hasCf = present(codiceFiscale)
  const hasPiva = present(partitaIva)
  const hasForma = present(formaGiuridica)
  const hasStato = present(stato)
  const hasSede = present(sede)
  const hasMeta = hasCf || hasPiva || !!atecoText || hasSede

  return (
    <header className={cn("flex items-start gap-3", className)} {...props}>
      <div
        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-subtle text-text-muted"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <Heading className="text-lg font-semibold text-text-base break-words">{nome}</Heading>
          {hasStato && (
            <StatusBadge
              label={stato}
              variant={statoVariant ?? deriveStatoVariant(stato)}
            />
          )}
        </div>
        <p className="text-xs text-text-muted">
          {subject.label}
          {/* Senza sottotipo i metadati ripiegano sull'etichetta del tipo: niente «Organizzazione · Organizzazione» */}
          {meta.label !== subject.label ? ` · ${meta.label}` : ""}
          {hasForma ? ` · ${formaGiuridica}` : ""}
        </p>
        {hasMeta && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {hasCf && <IdField label="CF" value={codiceFiscale} />}
            {hasPiva && <IdField label="P.IVA" value={partitaIva} />}
            {!!atecoText && (
              <span className="text-sm text-text-base">
                <span className="text-xs text-text-muted">ATECO </span>
                <span className="tabular-nums">{atecoText}</span>
              </span>
            )}
            {hasSede && (
              <span className="inline-flex items-center gap-1 text-sm text-text-base">
                <MapPin className="h-3.5 w-3.5 text-text-muted" aria-hidden="true" />
                {sede}
              </span>
            )}
          </div>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </header>
  )
}

export { CompanyHeader }
