import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;
/**
 * Sezioni comprimibili. `type="single"` (con `collapsible` per poter chiudere
 * l'aperta) oppure `type="multiple"`. Tastiera: Tab fra gli header, frecce su/giu',
 * Home/End; Invio/Spazio aprono e chiudono (gestiti da Radix).
 */
declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
/**
 * L'animazione usa la transizione di `grid-template-rows` (0fr -> 1fr), non
 * `animate-in`/keyframe di plugin: la libreria non ha `tailwindcss-animate`.
 * `forceMount` tiene il contenuto nel DOM; lo nascondiamo da chiuso con
 * `invisible` (via visibility, quindi fuori da tab order e accessibility tree).
 */
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export type { AccordionProps };
