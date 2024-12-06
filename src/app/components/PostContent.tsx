import { PageNavigation } from './PageNavigation'
import { sluggifyTitle, getNodeText } from '../../utils/sluggify'
import type { MDXComponents } from 'mdx/types'
import { Post } from 'contentlayer/generated'
import { format } from 'date-fns'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import Link from 'next/link'
import React from 'react'
import { Callout } from '@/app/components/common/Callout'
import { ChevronLink } from '@/app/components/common/ChevronLink'
import { Label } from '@/app/components/common/Label'
import Image from 'next/image'

interface PostContentProps {
  post: Post;
}

const mdxPostComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  h2: ({ children }) => <h2 id={sluggifyTitle(getNodeText(children))} className="text-xl mb-2 mt-4">{children}</h2>,
  h3: ({ children }) => <h3 id={sluggifyTitle(getNodeText(children))} className="text-lg mb-1 mt-3">{children}</h3>,
  h4: ({ children }) => <h4 id={sluggifyTitle(getNodeText(children))} className="text-md mb-1 mt-1">{children}</h4>,
  Callout,
  Image,
  Link,
  ChevronLink,
  Label
}

export function PostContent({ post }: PostContentProps) {
  const postDate = format(post.date, "LLLL dd, yyyy")
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className='flex space-x-20'>
      <div className="flex flex-col w-4/5">
        <span className="text-gray-700 text-sm pt-4">BREADCRUMBS GO HERE</span>
        <h1 className="text-6xl font-semibold text-blue-600 py-2">{post.title}</h1>
        <h3 className="text-sm text-gray-700 pb-8">{post.author.toUpperCase()} - {postDate.toUpperCase()} </h3>
        <article className="mb-3">
         <MDXContent components={mdxPostComponents} />
        </article>
      </div>
      <div className='flex flex-col w-1/5 p-4 border-l'>
        <PageNavigation headings={post.headings} />
      </div>
    </div>
  )
} 