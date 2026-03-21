import * as React from "react";
export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string;
    language?: string;
    copyable?: boolean;
}
declare function CodeBlock({ code, language, copyable, className, ...props }: CodeBlockProps): import("react/jsx-runtime").JSX.Element;
export { CodeBlock };
