'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [animatingOut, setAnimatingOut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineLeftRef = useRef<HTMLDivElement>(null);
  const lineRightRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll during loading screen
    document.body.style.overflow = 'hidden';

    // Entrance animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Start exit after a brief hold
        setTimeout(() => {
          setAnimatingOut(true);
          const exitTl = gsap.timeline({
            onComplete: () => {
              setShow(false);
              document.body.style.overflow = '';
            },
          });

          exitTl
            .to(subtitleRef.current, {
              opacity: 0,
              y: -10,
              duration: 0.3,
              ease: 'power2.in',
            })
            .to(
              [lineLeftRef.current, lineRightRef.current],
              { scaleX: 0, duration: 0.3, ease: 'power2.in' },
              '-=0.1'
            )
            .to(
              logoRef.current,
              { scale: 0.9, opacity: 0, duration: 0.4, ease: 'power2.in' },
              '-=0.2'
            )
            .to(
              containerRef.current,
              { yPercent: -100, duration: 0.6, ease: 'power3.inOut' },
              '-=0.1'
            );
        }, 600);
      },
    });

    // Entrance sequence
    tl.set(logoRef.current, { scale: 0.8, opacity: 0 })
      .set([lineLeftRef.current, lineRightRef.current], { scaleX: 0 })
      .set(subtitleRef.current, { opacity: 0, y: 10 })
      .to(logoRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      .to(
        [lineLeftRef.current, lineRightRef.current],
        { scaleX: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      .to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.2'
      )
      .to(
        shimmerRef.current,
        {
          x: '200%',
          duration: 0.8,
          ease: 'power2.inOut',
        },
        '-=0.4'
      );

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #C4A265 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div ref={logoRef} className="relative">
          <Image
            src="/logos/full-dark.png"
            alt="Gin & Jack Mobile Bar"
            width={320}
            height={96}
            className="h-20 md:h-28 w-auto"
            priority
          />
          {/* Gold shimmer sweep */}
          <div
            ref={shimmerRef}
            className="absolute inset-0 -translate-x-full pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(196,162,101,0.3) 50%, transparent 100%)',
            }}
          />
        </div>

        {/* Decorative lines */}
        <div className="flex items-center gap-4 mt-6">
          <div
            ref={lineLeftRef}
            className="w-12 md:w-20 h-px bg-gold origin-right"
          />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div
            ref={lineRightRef}
            className="w-12 md:w-20 h-px bg-gold origin-left"
          />
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mt-4">
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.35em] text-brown-light">
            Mobile Bartending
          </p>
        </div>
      </div>
    </div>
  );
}
