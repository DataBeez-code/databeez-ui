import * as React from "react"
import type { AppLogoProps } from "./types"

export function BeeGraphLogo({ size = 48, className }: AppLogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} className={className}>
      <path d="M24 4L38.7 13v18L24 40 9.3 31V13z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.5"/>
      <circle cx="16" cy="28" r="3" fill="#F59E0B"/>
      <circle cx="24" cy="14" r="3" fill="#F59E0B"/>
      <circle cx="32" cy="24" r="3" fill="#F59E0B"/>
      <circle cx="20" cy="20" r="2.5" fill="#D97706"/>
      <circle cx="28" cy="32" r="2.5" fill="#D97706"/>
      <line x1="16" y1="28" x2="20" y2="20" stroke="#D97706" strokeWidth="1.5"/>
      <line x1="20" y1="20" x2="24" y2="14" stroke="#D97706" strokeWidth="1.5"/>
      <line x1="24" y1="14" x2="32" y2="24" stroke="#D97706" strokeWidth="1.5"/>
      <line x1="32" y1="24" x2="28" y2="32" stroke="#D97706" strokeWidth="1.5"/>
      <line x1="28" y1="32" x2="16" y2="28" stroke="#D97706" strokeWidth="1.5"/>
      <line x1="20" y1="20" x2="32" y2="24" stroke="#D97706" strokeWidth="1" opacity="0.5"/>
    </svg>
  )
}
