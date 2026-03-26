import { LucideIcon } from 'lucide-react';
export type SubjectType = 'A' | 'P';
export interface SubjectMeta {
    label: string;
    icon: LucideIcon;
}
export declare const SUBJECT_TYPE_META: Record<SubjectType, SubjectMeta>;
export declare function getSubjectMeta(tipoSoggetto: string | undefined): SubjectMeta;
export interface PersonMeta {
    label: string;
    icon: LucideIcon;
}
export declare function getPersonMeta(subType: string | undefined): PersonMeta;
export type OrgType = 'S' | 'D' | 'E' | 'X' | 'P' | 'A';
export interface OrgMeta {
    label: string;
    icon: LucideIcon;
}
export declare const ORG_TYPE_META: Record<OrgType, OrgMeta>;
export declare function getOrgMeta(tipoOrg: string | undefined): OrgMeta;
export declare const ADDRESS_META: {
    readonly label: "Indirizzo";
    readonly icon: LucideIcon;
};
