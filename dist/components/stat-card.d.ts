import { LucideIcon } from 'lucide-react';
import { DeltaProps } from './delta';
import * as React from "react";
/** Trend strutturato (numerico), reso con `Delta`. */
export interface StatCardDeltaTrend extends Pick<DeltaProps, "polarity" | "format" | "suffix" | "threshold"> {
    value: number | null | undefined;
}
/** Trend legacy: testo libero e colore positivo/negativo. */
export interface StatCardLegacyTrend {
    value: string;
    positive?: boolean;
}
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: LucideIcon;
    iconColor?: string;
    label: string;
    value: React.ReactNode;
    trend?: StatCardLegacyTrend | StatCardDeltaTrend;
    /** Nota sotto il valore (periodo di confronto, fonte…). */
    hint?: React.ReactNode;
    /** `compact`: allineata a sinistra e più densa, per le griglie KPI. */
    size?: "default" | "compact";
}
declare function StatCard({ icon: Icon, iconColor, label, value, trend, hint, size, className, ...props }: StatCardProps): import("react/jsx-runtime").JSX.Element;
export { StatCard };
