import * as React from "react";
export interface MessageBubbleProps {
    content: string;
    role: "user" | "assistant";
    onRegenerate?: () => void;
    onFeedback?: (feedback: "up" | "down" | null) => void;
    showActions?: boolean;
    children?: React.ReactNode;
    className?: string;
}
declare function MessageBubble({ content, role, onRegenerate, onFeedback, showActions, children, className, }: MessageBubbleProps): import("react/jsx-runtime").JSX.Element;
export { MessageBubble };
