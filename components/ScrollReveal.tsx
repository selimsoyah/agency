'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Immediate setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: '0px 0px -150px 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = 
    direction === 'left' ? 'slide-in-left' :
    direction === 'right' ? 'slide-in-right' :
    'fade-in';

  return (
    <div 
      ref={ref} 
      className={`${animationClass} ${className}`}
      style={{ perspective: '1000px' }}
    >
      {children}
    </div>
  );
}
