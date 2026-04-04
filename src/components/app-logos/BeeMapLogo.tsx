import * as React from "react"
import type { AppLogoProps } from "./types"

export function BeeMapLogo({ size = 48, className }: AppLogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} className={className}>
      <path d="M24 4L38.7 13v18L24 40 9.3 31V13z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.5"/>
      <path d="M24 12c-4.4 0-8 3.6-8 8 0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z" fill="#F59E0B"/>
      <circle cx="24" cy="20" r="3.5" fill="#FFFBEB"/>
      <line x1="12" y1="30" x2="36" y2="30" stroke="#D97706" strokeWidth="1" opacity="0.4"/>
      <line x1="14" y1="34" x2="34" y2="34" stroke="#D97706" strokeWidth="1" opacity="0.3"/>
      <line x1="18" y1="30" x2="16" y2="34" stroke="#D97706" strokeWidth="0.8" opacity="0.3"/>
      <line x1="30" y1="30" x2="32" y2="34" stroke="#D97706" strokeWidth="0.8" opacity="0.3"/>
    </svg>
  )
}
