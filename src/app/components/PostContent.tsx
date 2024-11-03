'use client'
import { PageNavigation } from './PageNavigation'
import { type DocHeading } from '../components/types'


interface PostContentProps {
  html: string
  headings: DocHeading[] // Replace with proper type from your headings
}

export function PostContent({ html, headings }: PostContentProps) {
  return (
    <div className='flex space-x-20'>
      <div 
        className="flex flex-col w-2/3 [&>*]:mb-3 [&>*:last-child]:mb-0 " 
        dangerouslySetInnerHTML={{ __html: html }} 
      />
      <div className='flex flex-col w-1/3 '>
        <PageNavigation headings={headings} />
      </div>
    </div>
  )
}