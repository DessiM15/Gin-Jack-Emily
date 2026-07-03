'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const distance = isMobile ? 20 : 40;
    const duration = isMobile ? 0.5 : 0.8;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
    };

    switch (direction) {
      case 'up':
        fromVars.y = distance;
        break;
      case 'left':
        fromVars.x = -distance;
        break;
      case 'right':
        fromVars.x = distance;
        break;
      case 'none':
      default:
        break;
    }

    const toVars: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    };

    gsap.fromTo(el, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [delay, direction]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
