"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { cn } from "@/lib/utils"

// Lazy load per evitare che react-syntax-highlighter acceda a `document`
// durante SSR (esegue document.createElement al momento dell'import)
const LazySyntaxHighlighter = React.lazy(async () => {
  const [{ Prism }, { oneDark }] = await Promise.all([
    import("react-syntax-highlighter"),
    import("react-syntax-highlighter/dist/esm/styles/prism"),
  ])
  return {
    default: ({ children, language }: { children: string; language: string }) => (
      <Prism
        language={language}
        style={oneDark}
        customStyle={{ margin: 0, borderRadius: 0, fontSize: "0.875rem", lineHeight: "1.6" }}
        showLineNumbers={false}
      >
        {children}
      </Prism>
    ),
  }
})

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  copyable?: boolean
}

function CodeBlock({
  code,
  language = "text",
  copyable = true,
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn("relative rounded-xl overflow-hidden text-sm", className)}
      {...props}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-[#282c34] border-b border-border">
        <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
          {language}
        </span>
        {copyable && (
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-white/80 transition-colors"
            aria-label="Copia codice"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-400" />
                <span className="text-green-400">Copiato</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copia</span>
              </>
            )}
          </button>
        )}
      </div>

      <React.Suspense fallback={
        <pre className="m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto">
          {code}
        </pre>
      }>
        <LazySyntaxHighlighter language={language}>{code}</LazySyntaxHighlighter>
      </React.Suspense>
    </div>
  )
}

export { CodeBlock }
