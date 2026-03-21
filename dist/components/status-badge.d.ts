import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const statusBadgeVariants: (props?: ({
    variant?: "info" | "success" | "warning" | "error" | "neutral" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof statusBadgeVariants> {
    label: string;
    dot?: boolean;
}
declare function StatusBadge({ variant, label, dot, className, ...props }: StatusBadgeProps): import("react/jsx-runtime").JSX.Element;
export { StatusBadge, statusBadgeVariants };
