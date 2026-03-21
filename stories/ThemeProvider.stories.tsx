import type { Meta, StoryObj } from "@storybook/react-vite"
import { Sun, Moon, Monitor } from "lucide-react"
import { ThemeProvider, useTheme, THEME_ANTI_FOUC_SCRIPT, THEME_STORAGE_KEY } from "@/components/theme-provider"
import { Button } from "@/components/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/card"
import { CodeBlock } from "@/components/code-block"

const meta: Meta = {
  title: "Theme/ThemeProvider",
  tags: ["autodocs"],
}

export default meta

function ThemeDemo() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex flex-col gap-4 p-6 bg-base min-h-[200px] rounded-xl">
      <p className="text-text-muted text-sm">Tema corrente: <strong className="text-text-base">{theme}</strong></p>
      <div className="flex gap-2">
        <Button
          variant={theme === "light" ? "default" : "outline"}
          size="sm"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-4 w-4 mr-1" /> Light
        </Button>
        <Button
          variant={theme === "dark" ? "default" : "outline"}
          size="sm"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4 mr-1" /> Dark
        </Button>
        <Button
          variant={theme === "system" ? "default" : "outline"}
          size="sm"
          onClick={() => setTheme("system")}
        >
          <Monitor className="h-4 w-4 mr-1" /> System
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Esempio card in tema corrente</CardTitle>
          <CardDescription>I colori cambiano automaticamente.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-text-base text-sm">Testo base</p>
          <p className="text-text-muted text-sm">Testo muted</p>
        </CardContent>
      </Card>
    </div>
  )
}

export const Interactive: StoryObj = {
  render: () => (
    <ThemeProvider>
      <ThemeDemo />
    </ThemeProvider>
  ),
}

export const AntiFoucScript: StoryObj = {
  name: "Anti-FOUC Script (Next.js)",
  render: () => (
    <div className="p-4 space-y-4 max-w-2xl">
      <p className="text-text-muted text-sm">
        Inietta questo script nel <code className="font-mono bg-subtle px-1 rounded">&lt;head&gt;</code> prima
        del primo paint per evitare il flash bianco in dark mode.
        La chiave localStorage è <code className="font-mono bg-subtle px-1 rounded">{THEME_STORAGE_KEY}</code>.
      </p>
      <CodeBlock
        language="tsx"
        code={`// Next.js app/layout.tsx
import { THEME_ANTI_FOUC_SCRIPT } from '@databeez/ui'

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_ANTI_FOUC_SCRIPT }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}`}
      />
    </div>
  ),
}
