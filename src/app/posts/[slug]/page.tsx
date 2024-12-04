import { allPosts } from 'contentlayer/generated'
import { PostContent } from '@/app/components/PostContent'
import { H2, H3, H4 } from '../../components/common/Headings'
import { Callout } from '@/app/components/common/Callout'
import { ChevronLink } from '@/app/components/common/ChevronLink'
import { Label } from '@/app/components/common/Label'
import Image from 'next/image'
import Link from 'next/link'
//import { useLiveReload, useMDXComponent } from 'next-contentlayer2/hooks'
//import type { FC } from 'react'
//import { format, parseISO } from 'date-fns'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const mdxComponents = {
  Callout,
  Image,
  Link,
  ChevronLink,
  Label,
  h2: H2,
  h3: H3,
  h4: H4,
  a: Link,
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  console.log(mdxComponents);
  
  return (
    <>
      <PostContent post={post} />
    </>
  )
}
export default PostLayout