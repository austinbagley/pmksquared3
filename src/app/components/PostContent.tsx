'use client'
import { PageNavigation } from './PageNavigation'
import { type DocHeading } from '../components/types'
import { sluggifyTitle } from '../../utils/sluggify'
import { useEffect, useRef } from 'react'




interface PostContentProps {
  html: string
  headings: DocHeading[] // Replace with proper type from your headings
}

export function PostContent({ html, headings }: PostContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('PostContent mounted with:', {
      htmlLength: html.length,
      headings: headings,
      contentRef: contentRef.current
    })

    // Wait a brief moment for the HTML to be injected
    setTimeout(() => {
      if (contentRef.current) {
        const headingElements = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6')
        console.log('Found heading elements:', Array.from(headingElements).map(el => ({
          tag: el.tagName,
          text: el.textContent,
          currentId: el.id
        })))

        // Add IDs to headings
        headingElements.forEach((element) => {
          const headingText = element.textContent || ''
          const slug = sluggifyTitle(headingText)
          element.id = slug
          console.log(`Added ID "${slug}" to heading "${headingText}"`)
        })
      }
    }, 100)
  }, [html, headings])

  return (
    <div className='flex space-x-20'>
      <div 
        ref={contentRef}
        className="flex flex-col w-2/3 [&>*]:mb-3 [&>*:last-child]:mb-0 " 
        dangerouslySetInnerHTML={{ __html: html }} 
      />
      <div className='flex flex-col w-1/3 overflow-hidden'>
        
          <PageNavigation headings={headings} />
        
      </div>
    </div>
  )
} 