import * as React from "react"
import type { AppLogoProps } from "./types"
import { SwarmLogo } from "./SwarmLogo"
import { BeeGraphLogo } from "./BeeGraphLogo"
import { BeeMapLogo } from "./BeeMapLogo"
import { BeeScoutLogo } from "./BeeScoutLogo"
import { HaiveLogo } from "./HaiveLogo"

export type { AppLogoProps }

export { SwarmLogo, BeeGraphLogo, BeeMapLogo, BeeScoutLogo, HaiveLogo }

/** Registry dei loghi disponibili: slug → { label, component } */
export const APP_LOGOS: Record<string, { label: string; component: React.FC<AppLogoProps> }> = {
  swarm:    { label: 'Swarm',    component: SwarmLogo },
  beegraph: { label: 'BeeGraph', component: BeeGraphLogo },
  beemap:   { label: 'BeeMap',   component: BeeMapLogo },
  beescout: { label: 'BeeScout', component: BeeScoutLogo },
  haive:    { label: 'Haive',    component: HaiveLogo },
}

/** Lista degli slug disponibili */
export const APP_LOGO_SLUGS = Object.keys(APP_LOGOS)

export interface AppLogoComponentProps extends AppLogoProps {
  /** Slug del logo (es. "swarm", "beegraph") */
  slug: string
  /** Testo alternativo per il fallback (default: prima lettera dello slug) */
  fallback?: string
}

/**
 * Renderizza il logo di un'app DataBeez dato lo slug.
 * Se lo slug non corrisponde a nessun logo, mostra un fallback con la prima lettera.
 */
export function AppLogo({ slug, size = 48, className, fallback }: AppLogoComponentProps) {
  const entry = APP_LOGOS[slug]
  if (entry) {
    const LogoComponent = entry.component
    return <LogoComponent size={size} className={className} />
  }

  const letter = (fallback ?? slug ?? '?').charAt(0).toUpperCase()
  return (
    <div
      className={`rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-2xl text-amber-600 shrink-0 ${className ?? ''}`}
      style={{ width: size, height: size }}
    >
      {letter}
    </div>
  )
}
