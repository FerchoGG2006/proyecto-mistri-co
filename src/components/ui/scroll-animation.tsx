'use client';

import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'slideLeft' | 'slideRight';
  delay?: number;
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeUp':
        return 'opacity-0 translate-y-8 transition-all duration-800 ease-out';
      case 'slideLeft':
        return 'opacity-0 -translate-x-8 transition-all duration-800 ease-out';
      case 'slideRight':
        return 'opacity-0 translate-x-8 transition-all duration-800 ease-out';
      default:
        return 'opacity-0 translate-y-8 transition-all duration-800 ease-out';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

// CSS para la clase visible
const styles = `
.scroll-animation.visible {
  opacity: 1 !important;
  transform: translateY(0) translateX(0) !important;
}
`;

// Inyectar estilos si no existen
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  if (!document.head.querySelector('style[data-scroll-animation]')) {
    styleSheet.setAttribute('data-scroll-animation', 'true');
    document.head.appendChild(styleSheet);
  }
}