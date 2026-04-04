import * as React from "react";
export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: React.ReactNode;
    description?: string;
    actions?: React.ReactNode;
    breadcrumb?: React.ReactNode;
}
declare function PageHeader({ title, description, actions, breadcrumb, className, ...props }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
export { PageHeader };
