import * as React from "react"
import type { AppLogoProps } from "./types"

export function SwarmLogo({ size = 48, className }: AppLogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} className={className}>
      <path d="M24 4L38.7 13v18L24 40 9.3 31V13z" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.5"/>
      <ellipse cx="24" cy="22" rx="7" ry="5.5" fill="#F59E0B"/>
      <rect x="20" y="19" width="8" height="2" rx="1" fill="#92400E"/>
      <rect x="20" y="23" width="8" height="2" rx="1" fill="#92400E"/>
      <ellipse cx="19" cy="17" rx="4" ry="3" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="0.8" opacity="0.8"/>
      <ellipse cx="29" cy="17" rx="4" ry="3" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="0.8" opacity="0.8"/>
      <line x1="22" y1="17" x2="19" y2="12" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="26" y1="17" x2="29" y2="12" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="19" cy="12" r="1" fill="#D97706"/>
      <circle cx="29" cy="12" r="1" fill="#D97706"/>
      <path d="M31 22l4 2-4 2" fill="#D97706"/>
    </svg>
  )
}
