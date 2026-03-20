'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'

export const THEME_STORAGE_KEY = 'databeez-theme'

/**
 * Script inline da iniettare nel <head> prima del primo paint per evitare
 * il flash of unstyled content (FOUC) in modalità dark.
 *
 * Utilizzo in Next.js:
 *   <script dangerouslySetInnerHTML={{ __html: THEME_ANTI_FOUC_SCRIPT }} />
 *
 * Utilizzo in HTML puro:
 *   <script>{THEME_ANTI_FOUC_SCRIPT}</script>
 */
export const THEME_ANTI_FOUC_SCRIPT = `(function(){var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`

interface ThemeContextValue {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'system',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('system')

  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (mode === 'dark' || (mode === 'system' && prefersDark)) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
    const initial = stored ?? 'system'
    setThemeState(initial)
    applyTheme(initial)
  }, [])

  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode)
    localStorage.setItem(THEME_STORAGE_KEY, mode)
    applyTheme(mode)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
