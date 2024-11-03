'use client'
import { PageNavigation } from './PageNavigation'
import { type DocHeading } from '../components/types'


interface PostContentProps {
  html: string
  headings: DocHeading[] // Replace with proper type from your headings
}

export function PostContent({ html, headings }: PostContentProps) {
  return (
    <div className='flex bg-red-500'>
      <div 
        className="[&>*]:mb-3 [&>*:last-child]:mb-0 flex-initial " 
        dangerouslySetInnerHTML={{ __html: html }} 
      />
      <div className='flex-initial bg-blue-500'>
        <PageNavigation headings={headings} />
      </div>
    </div>
  )
}