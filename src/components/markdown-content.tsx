import * as React from "react"
import { cn } from "@/lib/utils"

export interface MarkdownContentProps {
  children: React.ReactNode
  className?: string
}

const proseClasses = [
  "prose prose-sm max-w-none",
  "prose-headings:text-text-base",
  "prose-p:text-text-base",
  "prose-strong:text-text-base",
  "prose-li:text-text-base",
  "prose-a:text-databeez-primary",
  "prose-code:text-databeez-primary prose-code:bg-background prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs",
  "prose-pre:bg-background prose-pre:border prose-pre:border-border prose-pre:rounded-lg",
  "prose-table:text-text-base",
  "prose-th:text-text-base prose-th:border prose-th:border-border prose-th:px-2 prose-th:py-1",
  "prose-td:text-text-base prose-td:border prose-td:border-border prose-td:px-2 prose-td:py-1",
].join(" ")

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
const MarkdownContent = React.forwardRef<HTMLDivElement, MarkdownContentProps>(
  ({ children, className }, ref) => (
    <div ref={ref} className={cn(proseClasses, className)}>
      {children}
    </div>
  )
)
MarkdownContent.displayName = "MarkdownContent"

export { MarkdownContent }
