import * as React from "react";
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
export interface MethodBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    method: string;
}
declare function MethodBadge({ method, className, ...props }: MethodBadgeProps): import("react/jsx-runtime").JSX.Element;
export { MethodBadge };
