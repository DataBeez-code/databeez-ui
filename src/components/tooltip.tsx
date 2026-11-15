"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider
const TooltipRoot = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-[9999] max-w-xs rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs text-text-base shadow-md",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = "TooltipContent"

export interface TooltipProps {
  /** Testo (o nodo) del tooltip. Se vuoto, il figlio viene reso senza tooltip. */
  content: React.ReactNode
  /** Elemento trigger: deve accettare ref e props (button, a...). */
  children: React.ReactElement
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  /** Ritardo di apertura in ms. */
  delayDuration?: number
  className?: string
}

/**
 * Caso comune: `<Tooltip content="Elimina"><button type="button">...</button></Tooltip>`.
 * Si apre in hover e al focus da tastiera, si chiude con Esc.
 * Include il proprio provider: non serve montarne uno nell'app.
 */
function Tooltip({
  content,
  children,
  side = "top",
  align = "center",
  delayDuration = 200,
  className,
}: TooltipProps) {
  if (content === null || content === undefined || content === "" || content === false) {
    return children
  }
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align} className={className}>
          {content}
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}

export { Tooltip, TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent }
