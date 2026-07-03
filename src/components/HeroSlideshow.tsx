'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80',
    alt: 'Elegant cocktails being crafted',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1920&q=80',
    alt: 'Beautiful bar setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80',
    alt: 'Wedding celebration',
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80',
    alt: 'Joyful celebration',
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-brown/40" />
        </div>
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Logo */}
        <div className="relative w-[280px] md:w-[450px] h-[180px] md:h-[280px] mb-6">
          <Image
            src="/logos/full-light.png"
            alt="Gin & Jack Mobile Bar"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Subtitle */}
        <p className="font-sans text-warm-white/90 text-base md:text-lg uppercase tracking-[0.3em] mb-4">
          Mobile Bartending
        </p>

        {/* Tagline */}
        <p className="font-script text-3xl md:text-5xl text-gold-light">
          We bring the bar. You make the memories.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="mt-10 border-2 border-warm-white text-warm-white px-10 py-4 text-sm md:text-base uppercase tracking-[0.2em] font-sans hover:bg-warm-white hover:text-brown transition-all duration-300 inline-block"
        >
          Book Your Event
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-warm-white/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
