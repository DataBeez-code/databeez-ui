import * as React from "react"
import type { AppLogoProps } from "./types"

export function BeeScoutLogo({ size = 48, className }: AppLogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} className={className}>
      <path d="M24 3L41 13v22L24 45 7 35V13z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
      <path d="M24 10l11 6.5v13L24 36l-11-6.5v-13z" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1" opacity="0.6"/>
      <circle cx="22" cy="22" r="7.5" stroke="#D97706" strokeWidth="2.2"/>
      <line x1="27.5" y1="27.5" x2="34" y2="34" stroke="#D97706" strokeWidth="2.4" strokeLinecap="round"/>
      <circle cx="22" cy="22" r="2" fill="#F59E0B"/>
      <line x1="22" y1="15.5" x2="22" y2="18" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="22" y1="26" x2="22" y2="28.5" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="15.5" y1="22" x2="18" y2="22" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="26" y1="22" x2="28.5" y2="22" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  )
}
