import * as React from "react"
import { Send } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
  placeholder?: string
  className?: string
  maxHeight?: number
}

const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(
  (
    {
      onSend,
      disabled,
      placeholder = "Scrivi un messaggio...",
      className,
      maxHeight = 160,
    },
    ref
  ) => {
    const [value, setValue] = React.useState("")
    const internalRef = React.useRef<HTMLTextAreaElement>(null)
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) ?? internalRef

    const handleSend = () => {
      const trimmed = value.trim()
      if (!trimmed || disabled) return
      onSend(trimmed)
      setValue("")
      if (textareaRef.current) textareaRef.current.style.height = "auto"
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    }

    const handleInput = () => {
      const el = textareaRef.current
      if (!el) return
      el.style.height = "auto"
      el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`
    }

    return (
      <div className={cn("border-t border-border bg-surface px-4 py-3", className)}>
        <div className="max-w-4xl mx-auto flex gap-3 items-end">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleInput}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className={cn(
              "flex-1 resize-none rounded-xl border border-border bg-base px-4 py-3 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "placeholder:text-text-muted transition-colors",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "min-h-[44px]"
            )}
            style={{ maxHeight }}
          />
          <Button
            onClick={handleSend}
            disabled={disabled || !value.trim()}
            size="icon"
            className="h-11 w-11 rounded-xl flex-shrink-0 shadow-databeez hover:shadow-databeez-lg"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-center text-xs text-text-muted mt-2">
          Invio per inviare · Shift+Invio per andare a capo
        </p>
      </div>
    )
  }
)
ChatInput.displayName = "ChatInput"

export { ChatInput }
