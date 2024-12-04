'use client'
import { PageNavigation } from './PageNavigation'
// import { type DocHeading } from '../components/types'
import { sluggifyTitle } from '../../utils/sluggify'
import { useEffect, useRef } from 'react'
import { Post } from 'contentlayer/generated'
import { format } from 'date-fns'


interface PostContentProps {
  post: Post;
}

export function PostContent({ post }: PostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const postDate = format(post.date, "MMM dd, yyyy")

  useEffect(() => {
  
    if (contentRef.current) {
      const headingElements = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6')
      
      // Add IDs to headings
      headingElements.forEach((element) => {
        const headingText = element.textContent || ''
        const slug = sluggifyTitle(headingText)
        element.id = slug
        element.className = "scroll-mt-[80px] font-semibold"
      })
    }
  }, [post.body.html, post.title, post.author, post.headings])

  return (
    <div className='flex space-x-20'>
      <div className="flex flex-col w-4/5">
        <span className="text-gray-600 pt-4">breadcrumbs go here.</span>
        <h1 className="text-4xl font-semibold text-blue-600 py-2">{post.title}</h1>
        <h3 className="text-lg pb-8">{post.author} | {postDate} </h3>
        <div 
          ref={contentRef}
          className="[&>*]:mb-3 [&>*:last-child]:mb-0" 
          dangerouslySetInnerHTML={{ __html: post.body.html }} 
        />  
      </div>
      <div className='flex flex-col w-1/5 p-4 border-l'>
          <PageNavigation headings={post.headings} />
      </div>
    </div>
  )
} 