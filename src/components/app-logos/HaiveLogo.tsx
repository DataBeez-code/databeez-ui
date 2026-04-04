import * as React from "react"
import type { AppLogoProps } from "./types"

export function HaiveLogo({ size = 48, className }: AppLogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} className={className}>
      <path d="M24 4L38.7 13v18L24 40 9.3 31V13z" stroke="#F59E0B" strokeWidth="2.5" fill="#FEF3C7"/>
      <path d="M24 12L32.5 17v10L24 32l-8.5-5V17z" stroke="#F59E0B" strokeWidth="1.5" fill="#FFFBEB"/>
      <circle cx="24" cy="22" r="3.5" fill="#F59E0B"/>
      <circle cx="16" cy="17" r="2" fill="#D97706"/>
      <circle cx="32" cy="17" r="2" fill="#D97706"/>
      <circle cx="16" cy="27" r="2" fill="#D97706"/>
      <circle cx="32" cy="27" r="2" fill="#D97706"/>
      <line x1="24" y1="22" x2="16" y2="17" stroke="#D97706" strokeWidth="1.2"/>
      <line x1="24" y1="22" x2="32" y2="17" stroke="#D97706" strokeWidth="1.2"/>
      <line x1="24" y1="22" x2="16" y2="27" stroke="#D97706" strokeWidth="1.2"/>
      <line x1="24" y1="22" x2="32" y2="27" stroke="#D97706" strokeWidth="1.2"/>
      <line x1="16" y1="17" x2="16" y2="27" stroke="#D97706" strokeWidth="0.8" opacity="0.5"/>
      <line x1="32" y1="17" x2="32" y2="27" stroke="#D97706" strokeWidth="0.8" opacity="0.5"/>
    </svg>
  )
}
