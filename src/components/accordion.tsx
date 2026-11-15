"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>

/**
 * Sezioni comprimibili. `type="single"` (con `collapsible` per poter chiudere
 * l'aperta) oppure `type="multiple"`. Tastiera: Tab fra gli header, frecce su/giu',
 * Home/End; Invio/Spazio aprono e chiudono (gestiti da Radix).
 */
const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn("w-full divide-y divide-border rounded-lg border border-border bg-surface", className)}
    {...props}
  />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("first:rounded-t-lg last:rounded-b-lg", className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium text-text-base transition-colors",
        "hover:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

/**
 * L'animazione usa la transizione di `grid-template-rows` (0fr -> 1fr), non
 * `animate-in`/keyframe di plugin: la libreria non ha `tailwindcss-animate`.
 * `forceMount` tiene il contenuto nel DOM; lo nascondiamo da chiuso con
 * `invisible` (via visibility, quindi fuori da tab order e accessibility tree).
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    forceMount
    className={cn(
      "grid text-sm text-text-base transition-[grid-template-rows,visibility] duration-200 motion-reduce:transition-none",
      "data-[state=closed]:invisible data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]"
    )}
    {...props}
  >
    <div className="overflow-hidden">
      <div className={cn("px-4 pb-4 pt-1", className)}>{children}</div>
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
export type { AccordionProps }
