import { useState, useEffect, RefObject } from 'react';

export function useInView(ref: RefObject<HTMLElement>, options = { threshold: 0.1 }): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
}