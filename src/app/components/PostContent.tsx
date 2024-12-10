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
import { Icon } from '../components/common/Icon'


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
    <div className='flex flex-col md:flex-row md:space-x-10'>
      
      <article className="flex flex-col w-full md:w-2/3">
        <div className="flex flex-row align-middle text-sm pt-4">
          <div className='pr-1'>BLOG </div>
          <div className="mr-2 mt-[5px] block w-1.5 shrink-0"><Icon name="chevron-right" /></div> 
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold text-blue-600 py-2">{post.title}</h1>
        <h3 className="text-sm text-gray-700 pb-8">{post.author.toUpperCase()} - {postDate.toUpperCase()} </h3>
        <div className="mb-3">
         <MDXContent components={mdxPostComponents} />
        </div>
      </article>
      <div className='hidden md:flex flex-col w-full md:w-1/3 p-4 border-l relative bg-red-400'>
        <nav className="text-sm md:sticky top-[80px]" aria-label="Table of contents">
          <h4 className="mb-4 font-medium text-slate-600 dark:text-slate-300">
            ON THIS PAGE
          </h4>
          <PageNavigation headings={post.headings} />
        </nav>
      </div>
    
    
      
    </div>
  )
} 