import * as React from "react"
import { RefreshCw, ThumbsUp, ThumbsDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { CopyButton } from "./copy-button"

export interface MessageBubbleProps {
  content: string
  role: "user" | "assistant"
  onRegenerate?: () => void
  onFeedback?: (feedback: "up" | "down" | null) => void
  showActions?: boolean
  children?: React.ReactNode
  className?: string
}

function MessageBubble({
  content,
  role,
  onRegenerate,
  onFeedback,
  showActions,
  children,
  className,
}: MessageBubbleProps) {
  const isUser = role === "user"
  const [feedback, setFeedback] = React.useState<"up" | "down" | null>(null)

  const handleFeedback = (value: "up" | "down") => {
    const next = feedback === value ? null : value
    setFeedback(next)
    onFeedback?.(next)
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        isUser ? "items-end" : "items-start",
        className
      )}
    >
      <div className="flex flex-col max-w-[80%]">
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm leading-relaxed",
            isUser
              ? "bg-databeez-primary text-white rounded-tr-sm"
              : "bg-surface border border-border text-text-base rounded-tl-sm"
          )}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap">{content}</p>
          ) : (
            children ?? <p className="whitespace-pre-wrap">{content}</p>
          )}
        </div>

        {!isUser && showActions && (
          <div className="flex items-center gap-1 self-end mt-1">
            <CopyButton text={content} />

            {onRegenerate && (
              <button
                type="button"
                onClick={onRegenerate}
                aria-label="Rigenera risposta"
                className="inline-flex items-center text-text-muted hover:text-text-base transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => handleFeedback("up")}
              aria-label="Risposta utile"
              className={cn(
                "inline-flex items-center transition-colors",
                feedback === "up"
                  ? "text-green-600"
                  : "text-text-muted hover:text-text-base"
              )}
            >
              <ThumbsUp className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => handleFeedback("down")}
              aria-label="Risposta non utile"
              className={cn(
                "inline-flex items-center transition-colors",
                feedback === "down"
                  ? "text-red-500"
                  : "text-text-muted hover:text-text-base"
              )}
            >
              <ThumbsDown className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export { MessageBubble }
