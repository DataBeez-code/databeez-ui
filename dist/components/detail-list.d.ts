import * as React from "react";
export interface InfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value?: React.ReactNode;
}
declare function InfoRow({ label, value, className, ...props }: InfoRowProps): import("react/jsx-runtime").JSX.Element;
export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}
declare function Section({ title, children, className, ...props }: SectionProps): import("react/jsx-runtime").JSX.Element;
export { InfoRow, Section };
