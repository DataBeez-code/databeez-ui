import * as React from "react";
export interface MarkdownContentProps {
    children: React.ReactNode;
    className?: string;
}
/**
 * Styled container for rendered markdown content.
 * Wrap your markdown renderer (e.g. ReactMarkdown) with this component
 * to get consistent prose styling across the design system.
 *
 * @example
 * <MarkdownContent>
 *   <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
 * </MarkdownContent>
 */
declare const MarkdownContent: React.ForwardRefExoticComponent<MarkdownContentProps & React.RefAttributes<HTMLDivElement>>;
export { MarkdownContent };
