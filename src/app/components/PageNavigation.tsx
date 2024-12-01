'use client';

import { FC, useEffect, useState, useRef } from 'react'
import { type DocHeading } from '../components/types'
import { getNodeText, sluggifyTitle } from '../../utils/sluggify'
import { Icon } from '../components/common/Icon'

export const PageNavigation: FC<{ headings: DocHeading[] }> = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Wait a bit for DOM to be ready
    const timer = setTimeout(() => {
      console.log('Setting up observer...')
      
      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          console.log('Observer callback triggered', entries)
          const visibleEntries = entries.filter(entry => entry.isIntersecting)
          console.log('Visible entries:', visibleEntries.map(e => e.target.id))
          
          if (visibleEntries.length > 0) {
            const firstVisibleHeading = visibleEntries[0]
            console.log('Setting active heading to:', firstVisibleHeading.target.id)
            setActiveHeading(firstVisibleHeading.target.id)
          }
        },
        {
          // More lenient observer options
          rootMargin: '-10% 0px -70% 0px',
          threshold: [0, 0.1, 0.5, 1]
        }
      )

      const headingsToObserve = headings.filter(h => h.level > 1)
      console.log('Looking for these headings:', 
        headingsToObserve.map(h => sluggifyTitle(getNodeText(h.title)))
      )

      headingsToObserve.forEach(heading => {
        const slug = sluggifyTitle(getNodeText(heading.title))
        const element = document.getElementById(slug)
        if (element) {
          console.log('Found and observing element:', slug)
          observerRef.current?.observe(element)
        } else {
          console.warn('Could not find element with id:', slug)
        }
      })

      // Log all IDs in the document to help debug
      const allIds = Array.from(document.getElementsByTagName('*'))
        .filter(el => el.id)
        .map(el => el.id)
      console.log('All IDs in document:', allIds)

    }, 100) // Small delay to ensure DOM is ready

    return () => {
      clearTimeout(timer)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [headings])

  const headingsToRender = headings.filter(h => h.level > 1)

  if (headingsToRender.length === 0) return null

  return (
    <nav className="text-sm fixed" aria-label="Table of contents">
      <h4 className="mb-4 font-medium text-slate-600 dark:text-slate-300">
        On this page
      </h4>
      <ul className="space-y-2">
        {headingsToRender.map(({ title, level }, index) => {
          const slug = sluggifyTitle(getNodeText(title))
          return (
            <li key={index}
              style={{ marginLeft: (level - 2) * 16 }}
              className={`flex ${
                slug === activeHeading
                  ? 'text-violet-600 dark:text-violet-400'
                  : 'hover:text-slate-600 dark:hover:text-slate-300'
              }`}
              onClick={() => {
                // Add click handler to help debug
                console.log('Clicked heading:', slug)
                setActiveHeading(slug)
              }}
              aria-current={slug === activeHeading ? 'location' : undefined}
              >
                <span className="mr-2 mt-[5px] block w-1.5 shrink-0">
                  <Icon name="chevron-right" />
                </span>
                <a href={`#${slug}`}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: title.replace(
                        /`(.*?)`/g, 
                        '<code style="font-size: 0.75rem;">$1</code>'
                      ),
                    }}
                  />
                </a>
             
            </li>
          )
        })}
      </ul>
    </nav>
  )
}