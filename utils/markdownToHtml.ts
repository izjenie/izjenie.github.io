import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export default async function markdownStringToHtml(content: string) {
  const result = await remark().use(html).use(remarkGfm).process(content)
  return result.toString()
}
