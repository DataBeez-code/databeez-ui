"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  label?: string
  resetDelay?: number
}

function CopyButton({
  text,
  label,
  resetDelay = 2000,
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), resetDelay)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copiato!" : `Copia${label ? ` ${label}` : ""}`}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm transition-colors",
        copied
          ? "text-green-600"
          : "text-text-muted hover:text-text-base",
        className
      )}
      {...props}
    >
      {copied ? (
        <Check className="h-4 w-4 shrink-0" />
      ) : (
        <Copy className="h-4 w-4 shrink-0" />
      )}
      {label && (
        <span>{copied ? "Copiato!" : label}</span>
      )}
    </button>
  )
}

export { CopyButton }
