import { LucideIcon } from 'lucide-react';
import * as React from "react";
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: LucideIcon;
    title: string;
    description?: string;
    action?: React.ReactNode;
}
declare function EmptyState({ icon: Icon, title, description, action, className, ...props }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
export { EmptyState };
