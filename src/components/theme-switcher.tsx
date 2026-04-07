'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme, type ThemeMode } from './theme-provider'

const THEME_CYCLE: ThemeMode[] = ['light', 'dark', 'system']

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const cycleTheme = () => {
    const idx = THEME_CYCLE.indexOf(theme)
    setTheme(THEME_CYCLE[(idx + 1) % THEME_CYCLE.length])
  }

  if (!mounted) return null

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg text-text-muted hover:text-text-base hover:bg-subtle transition-colors"
      aria-label={`Tema: ${theme}`}
      title={`Tema corrente: ${theme}`}
    >
      {theme === 'dark' ? (
        <Moon className="h-4 w-4" />
      ) : theme === 'system' ? (
        <Monitor className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  )
}
