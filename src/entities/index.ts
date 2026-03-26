import {
  Building2,
  Briefcase,
  Landmark,
  Globe,
  Receipt,
  HelpCircle,
  User,
  MapPin,
  type LucideIcon,
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Tipi soggetto (A = Organizzazione, P = Persona)
// ---------------------------------------------------------------------------

export type SubjectType = 'A' | 'P'

export interface SubjectMeta {
  label: string
  icon: LucideIcon
}

export const SUBJECT_TYPE_META: Record<SubjectType, SubjectMeta> = {
  A: { label: 'Organizzazione', icon: Building2 },
  P: { label: 'Persona',        icon: User },
}

export function getSubjectMeta(tipoSoggetto: string | undefined): SubjectMeta {
  return SUBJECT_TYPE_META[(tipoSoggetto as SubjectType) ?? ''] ?? SUBJECT_TYPE_META.A
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
  S: { label: 'Società',           icon: Building2  },
  D: { label: 'Ditta individuale', icon: Briefcase  },
  E: { label: 'Ente pubblico',     icon: Landmark   },
  X: { label: 'Estera',            icon: Globe      },
  P: { label: 'PIVA',              icon: Receipt    },
  A: { label: 'Altro',             icon: HelpCircle },
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
