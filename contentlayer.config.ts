// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { mdxToMarkdown } from 'mdast-util-mdx'
import { Root, Heading, Parent } from 'mdast'
import { toMarkdown } from 'mdast-util-to-markdown'
import { DocHeading } from 'src/app/components/types'

import type * as unified from 'unified'

import { bundleMDX } from 'mdx-bundler'


export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: {type: 'string', required: false},
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    headings: {
      type: 'json',
      resolve: async (doc) => {
        const headings: DocHeading[] = []

        await bundleMDX({
          source: doc.body.raw,
          mdxOptions: (opts) => {
            opts.remarkPlugins = [...(opts.remarkPlugins ?? []), tocPlugin(headings)]
            return opts
          },
        })

        return [{ level: 1, title: doc.title }, ...headings]
      },
    },
  },
}))

const tocPlugin =
  (headings: DocHeading[]): unified.Plugin =>
  () => {
    return (node: Root) => {
      const children = (node as Parent).children
      for (const element of children.filter((node): node is Heading => node.type === 'heading')) {
        const title = toMarkdown({ type: 'paragraph', children: element.children }, { extensions: [mdxToMarkdown()] })
          .trim()
          .replace(/<.*$/g, '')
          .replace(/\\/g, '')
          .trim()
        headings.push({ level: element.depth, title })
      }
    }
  };

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })