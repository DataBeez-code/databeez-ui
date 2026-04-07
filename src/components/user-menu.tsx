'use client'

import { useState, useEffect, useRef } from 'react'
import { User, ChevronDown, LogOut, ExternalLink, LayoutGrid } from 'lucide-react'

export interface UserMenuItem {
  label: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
}

export interface UserMenuProps {
  user: {
    fullname: string
    email: string
    avatarUrl?: string
  }
  bumblebeeUrl: string
  extraItems?: UserMenuItem[]
  onLogout?: () => void
  showLaunchpadLink?: boolean
}

export function UserMenu({ user, bumblebeeUrl, extraItems, onLogout, showLaunchpadLink = true }: UserMenuProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleLogout = onLogout ?? (() => {
    window.location.href = `${bumblebeeUrl}/logout`
  })

  const hasExtra = extraItems && extraItems.length > 0

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 text-text-muted hover:text-databeez-primary px-3 py-2 text-sm font-medium transition-colors"
      >
        <User className="h-4 w-4" />
        <span className="hidden sm:block">{user.fullname}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-surface border border-border rounded-md shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-border">
            <p className="text-sm font-medium text-text-base truncate">{user.fullname}</p>
            <p className="text-xs text-text-muted truncate">{user.email}</p>
          </div>

          {hasExtra && (
            <>
              {extraItems!.map((item, i) =>
                item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle"
                    onClick={() => setOpen(false)}
                  >
                    {item.icon && <span className="mr-2 flex-shrink-0">{item.icon}</span>}
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={i}
                    onClick={() => { setOpen(false); item.onClick?.() }}
                    className="flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle"
                  >
                    {item.icon && <span className="mr-2 flex-shrink-0">{item.icon}</span>}
                    {item.label}
                  </button>
                )
              )}
              <div className="border-t border-border my-1" />
            </>
          )}

          <a
            href={`${bumblebeeUrl}/profile`}
            className="flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle"
            onClick={() => setOpen(false)}
          >
            <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />
            Gestione Profilo
          </a>

          {showLaunchpadLink && (
            <a
              href={`${bumblebeeUrl}/launchpad`}
              className="flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle"
              onClick={() => setOpen(false)}
            >
              <LayoutGrid className="h-4 w-4 mr-2 flex-shrink-0" />
              Torna al LaunchPad
            </a>
          )}

          <div className="border-t border-border my-1" />

          <button
            onClick={() => { setOpen(false); handleLogout() }}
            className="flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle"
          >
            <LogOut className="h-4 w-4 mr-2 flex-shrink-0" />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
