import { LucideIcon } from 'lucide-react';
import * as React from "react";
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: LucideIcon;
    iconColor?: string;
    iconBg?: string;
    title: string;
    description?: string;
    action?: React.ReactNode;
    horizontal?: boolean;
}
declare function FeatureCard({ icon: Icon, iconColor, iconBg, title, description, action, horizontal, className, ...props }: FeatureCardProps): import("react/jsx-runtime").JSX.Element;
export { FeatureCard };
