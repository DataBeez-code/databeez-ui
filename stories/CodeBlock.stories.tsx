import type { Meta, StoryObj } from "@storybook/react-vite"
import { CodeBlock } from "@/components/code-block"

const meta: Meta<typeof CodeBlock> = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof CodeBlock>

export const JavaScript: Story = {
  args: {
    language: "javascript",
    code: `const response = await fetch('https://api.databeez.ai/v1/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})

const data = await response.json()
console.log(data)`,
  },
}

export const Python: Story = {
  args: {
    language: "python",
    code: `import requests

response = requests.get(
    'https://api.databeez.ai/v1/data',
    headers={'Authorization': 'Bearer YOUR_API_KEY'}
)

print(response.json())`,
  },
}

export const NoCopy: Story = {
  args: {
    language: "bash",
    copyable: false,
    code: `curl -X GET https://api.databeez.ai/v1/data \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
  },
}
