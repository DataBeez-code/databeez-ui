import { LucideIcon } from 'lucide-react';
import * as React from "react";
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: LucideIcon;
    iconColor?: string;
    label: string;
    value: React.ReactNode;
    trend?: {
        value: string;
        positive?: boolean;
    };
}
declare function StatCard({ icon: Icon, iconColor, label, value, trend, className, ...props }: StatCardProps): import("react/jsx-runtime").JSX.Element;
export { StatCard };
