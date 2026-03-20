import * as React from "react"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface TabSwitchItem {
  id: string
  label: string
  icon?: LucideIcon
}

export interface TabSwitchProps {
  tabs: TabSwitchItem[]
  activeTab: string
  onChange: (id: string) => void
  className?: string
}

function TabSwitch({ tabs, activeTab, onChange, className }: TabSwitchProps) {
  return (
    <div className={cn("border-b border-border", className)}>
      <nav className="-mb-px flex space-x-1" role="tablist">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const Icon = tab.icon

          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors whitespace-nowrap",
                isActive
                  ? "border-databeez-primary text-databeez-primary"
                  : "border-transparent text-text-muted hover:text-text-base hover:border-border"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {tab.label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export { TabSwitch }
