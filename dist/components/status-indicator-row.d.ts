import * as React from "react";
type StatusVariant = "operational" | "degraded" | "outage" | "maintenance";
export interface StatusIndicatorRowProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    status: StatusVariant;
    statusLabel?: string;
}
declare function StatusIndicatorRow({ label, status, statusLabel, className, ...props }: StatusIndicatorRowProps): import("react/jsx-runtime").JSX.Element;
export { StatusIndicatorRow };
