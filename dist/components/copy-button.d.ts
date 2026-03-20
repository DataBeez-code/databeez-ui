import * as React from "react";
export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    label?: string;
    resetDelay?: number;
}
declare function CopyButton({ text, label, resetDelay, className, ...props }: CopyButtonProps): import("react/jsx-runtime").JSX.Element;
export { CopyButton };
