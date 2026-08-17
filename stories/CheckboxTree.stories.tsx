import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { CheckboxTree, type CheckboxTreeChild } from "@/components/checkbox-tree"

const meta: Meta<typeof CheckboxTree> = {
  title: "Components/CheckboxTree",
  component: CheckboxTree,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CheckboxTree>

const SUBTYPE_LABELS: Record<string, string> = {
  spa: "Società per azioni",
  srl: "Società a responsabilità limitata",
  ditta: "Ditta individuale",
}

/**
 * Riproduce lo scenario di BeeGraph (nodo "Organizzazione" con i sottotipi):
 * dal trattino un click spegne il gruppo senza toccare i figli, e i figli
 * ritrovano la loro selezione quando il padre viene riacceso.
 */
export const OrgParentSemantics: Story = {
  render: () => {
    const [parentOn, setParentOn] = useState(true)
    const [childOff, setChildOff] = useState<Set<string>>(new Set(["ditta"]))
    const [expanded, setExpanded] = useState(true)

    const children: CheckboxTreeChild[] = Object.keys(SUBTYPE_LABELS).map((key) => ({
      key,
      label: SUBTYPE_LABELS[key],
      checked: !childOff.has(key),
      onToggle: () =>
        setChildOff((prev) => {
          const next = new Set(prev)
          if (next.has(key)) next.delete(key)
          else next.add(key)
          return next
        }),
    }))

    return (
      <div className="w-72 rounded-md border border-border bg-surface p-3">
        <CheckboxTree
          label="Organizzazione"
          checked={parentOn}
          onToggle={() => setParentOn((v) => !v)}
          children={children}
          expanded={expanded}
          onExpandedChange={setExpanded}
        />
      </div>
    )
  },
}

export const NoChildren: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    const [expanded, setExpanded] = useState(false)
    return (
      <div className="w-72 rounded-md border border-border bg-surface p-3">
        <CheckboxTree
          label="Persone"
          checked={checked}
          onToggle={() => setChecked((v) => !v)}
          children={[]}
          expanded={expanded}
          onExpandedChange={setExpanded}
        />
      </div>
    )
  },
}
