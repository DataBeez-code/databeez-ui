import type { Meta, StoryObj } from "@storybook/react-vite"
import { MarkdownContent } from "@/components/markdown-content"

const meta: Meta<typeof MarkdownContent> = {
  title: "Components/MarkdownContent",
  component: MarkdownContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Contenitore di stile per markdown già renderizzato: si avvolge il renderer (es. ReactMarkdown). Qui il contenuto è HTML statico equivalente.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof MarkdownContent>

export const Default: Story = {
  render: () => (
    <MarkdownContent>
      <h2>Sintesi azienda</h2>
      <p>
        <strong>Rossi Meccanica S.r.l.</strong> opera a Brescia nel settore <em>lavori di meccanica generale</em> (ATECO 25.62).
      </p>
      <ul>
        <li>Addetti: 42</li>
        <li>Fatturato 2024: € 6.800.000</li>
      </ul>
      <p>
        Per i dettagli consulta la <a href="#">scheda completa</a> o usa <code>cerca_azienda</code>.
      </p>
      <pre>{"SELECT denominazione FROM honey.organizzazione\nWHERE provincia = 'BS';"}</pre>
      <table>
        <thead>
          <tr><th>Anno</th><th>Fatturato</th></tr>
        </thead>
        <tbody>
          <tr><td>2023</td><td>€ 6.100.000</td></tr>
          <tr><td>2024</td><td>€ 6.800.000</td></tr>
        </tbody>
      </table>
    </MarkdownContent>
  ),
}
