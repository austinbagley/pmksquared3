import { useRef } from 'react';
import { useInView } from '@/app/hooks/useInView';

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedDiv({ children, className = '' }: AnimatedDivProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef);

  return (
    <div
      ref={divRef}
      className={`
        transform transition-all duration-700
        ${isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}