'use client';

import { FC, useEffect, useState, useRef } from 'react'
import { type DocHeading } from '../components/types'
import { getNodeText, sluggifyTitle } from '../../utils/sluggify'
import { Icon } from '../components/common/Icon'

export const PageNavigation: FC<{ headings: DocHeading[] }> = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
       
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting)
        
        if (visibleEntries.length > 0) {
          const firstVisibleHeading = visibleEntries[0]
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
  
    headingsToObserve.forEach(heading => {
      const slug = sluggifyTitle(getNodeText(heading.title))
      const element = document.getElementById(slug)
      if (element) {
        observerRef.current?.observe(element)
      } else {
        console.warn('Could not find element with id:', slug)
      }
    })


    return () => {
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
        ON THIS PAGE
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
                    __html: getNodeText(title).replace(
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