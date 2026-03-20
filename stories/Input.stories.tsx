import type { Meta, StoryObj } from "@storybook/react"
import { Mail, Lock, Search } from "lucide-react"
import { Input } from "@/components/input"
import { InputWithIcon } from "@/components/input-with-icon"
import { SearchInput } from "@/components/search-input"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { placeholder: "Inserisci testo..." },
}

export const WithLabel: Story = {
  args: { label: "Email", placeholder: "nome@esempio.com", type: "email" },
}

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "nome@esempio.com",
    error: "Inserisci un indirizzo email valido.",
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    helperText: "Minimo 8 caratteri, una maiuscola e un numero.",
  },
}

export const WithIconLeft: StoryObj<typeof InputWithIcon> = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm p-4">
      <InputWithIcon icon={Mail} label="Email" placeholder="nome@esempio.com" />
      <InputWithIcon icon={Lock} label="Password" type="password" placeholder="••••••••" />
      <InputWithIcon icon={Search} placeholder="Cerca..." />
    </div>
  ),
}

export const SearchInputStory: StoryObj<typeof SearchInput> = {
  name: "SearchInput",
  render: () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { useState } = require("react")
    const [value, setValue] = useState("")
    return (
      <div className="max-w-sm p-4">
        <SearchInput value={value} onChange={setValue} placeholder="Cerca API..." />
      </div>
    )
  },
}
