import {
  Building2,
  Store,
  Landmark,
  Globe,
  Receipt,
  HelpCircle,
  Briefcase,
  User,
  MapPin,
  Warehouse,
  Banknote,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Tipi soggetto (A = Organizzazione, P = Persona)
// ---------------------------------------------------------------------------

export type SubjectType = 'O' | 'P'

export interface SubjectMeta {
  label: string
  icon: LucideIcon
}

export const SUBJECT_TYPE_META: Record<SubjectType, SubjectMeta> = {
  O: { label: 'Organizzazione', icon: Building2 },
  P: { label: 'Persona', icon: User },
}

export function getSubjectMeta(tipoSoggetto: string | undefined): SubjectMeta {
  return SUBJECT_TYPE_META[(tipoSoggetto as SubjectType) ?? ''] ?? SUBJECT_TYPE_META.O
}

// ---------------------------------------------------------------------------
// Sottotipi persona
// ---------------------------------------------------------------------------

export interface PersonMeta {
  label: string
  icon: LucideIcon
}

// Semantica da honey.persona.tipo_persona (CHECK 'F','P','A'), vedi enum
// TipoPersona in honey-core/src/honey_core/models.py: F = FISICA, P = PROFESSIONISTA,
// A = ALTRO. La migration 030 di honey-core ha INVERTITO i valori (in precedenza
// 'F' era il professionista) — non "correggere" questa mappa al contrario.
export const PERSON_TYPE_META: Record<'F' | 'P' | 'A', PersonMeta> = {
  F: { label: 'Persona fisica', icon: User },
  P: { label: 'Professionista', icon: Briefcase },
  A: { label: 'Altro', icon: User },
}

export function getPersonMeta(subType: string | undefined): PersonMeta {
  return PERSON_TYPE_META[subType as 'F' | 'P' | 'A'] ?? { label: 'Persona', icon: User }
}

// ---------------------------------------------------------------------------
// Tipi organizzazione (S, D, E, X, P, A)
// ---------------------------------------------------------------------------

export type OrgType = 'S' | 'D' | 'E' | 'X' | 'P' | 'A'

export interface OrgMeta {
  label: string
  icon: LucideIcon
}

export const ORG_TYPE_META: Record<OrgType, OrgMeta> = {
  S: { label: 'Società', icon: Building2 },
  D: { label: 'Ditta individuale', icon: Store },
  E: { label: 'Ente pubblico', icon: Landmark },
  X: { label: 'Estera', icon: Globe },
  P: { label: 'PIVA', icon: Receipt },
  A: { label: 'Altro', icon: HelpCircle },
}

const ORG_TYPE_FALLBACK: OrgMeta = { label: 'Organizzazione', icon: Building2 }

export function getOrgMeta(tipoOrg: string | undefined): OrgMeta {
  return ORG_TYPE_META[(tipoOrg as OrgType) ?? ''] ?? ORG_TYPE_FALLBACK
}

// ---------------------------------------------------------------------------
// Entità indirizzo
// ---------------------------------------------------------------------------

export const ADDRESS_META = {
  label: 'Indirizzo',
  icon: MapPin,
} as const

// ---------------------------------------------------------------------------
// Entità localizzazione (sede registrata al Registro Imprese)
// ---------------------------------------------------------------------------

export const LOCATION_META = {
  label: 'Sede',
  icon: Warehouse,
} as const

// ---------------------------------------------------------------------------
// Nodi ponte (organizzazioni che rendono illeggibile un grafo di connessioni:
// banche e società fiduciarie — due soggetti che condividono la stessa banca
// non hanno alcun legame reale tra loro)
// ---------------------------------------------------------------------------

export type CategoriaPonte = 'banca' | 'fiduciaria'

export interface PonteMeta {
  label: string
  icon: LucideIcon
}

export const PONTE_META: Record<CategoriaPonte, PonteMeta> = {
  banca: { label: 'Banca', icon: Banknote },
  fiduciaria: { label: 'Società fiduciaria', icon: ShieldCheck },
}

// A differenza delle altre getMeta* di questo file, qui "nessuna categoria"
// (null/undefined/qualsiasi altro valore) è il caso NORMALE: la stragrande
// maggioranza delle organizzazioni non è un nodo ponte e il chiamante non deve
// disegnare alcuna icona. Un fallback finirebbe per marcare ogni
// organizzazione come ponte, quindi si ritorna undefined invece di un default.
export function getPonteMeta(categoria: string | undefined | null): PonteMeta | undefined {
  return PONTE_META[categoria as CategoriaPonte]
}
