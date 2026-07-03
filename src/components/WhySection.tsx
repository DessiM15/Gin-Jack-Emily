'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Reason {
  title: string;
  description: string;
  image: string;
}

interface WhySectionProps {
  reasons: Reason[];
}

export default function WhySection({ reasons }: WhySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const images = imageRefs.current.filter(Boolean);
    const triggers: ScrollTrigger[] = [];

    images.forEach((img) => {
      if (!img) return;
      const card = img.closest('[data-card]');
      if (!card) return;

      const trig = gsap.to(img, {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      if (trig.scrollTrigger) triggers.push(trig.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="bg-cream">
      {/* Heading */}
      <div className="text-center py-16 md:py-20 px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-brown">
          Why Gin &amp; Jack
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </div>

      {/* Cards — grid on desktop, horizontal scroll on mobile */}
      <div className="hidden md:grid md:grid-cols-4">
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            data-card
            className="relative aspect-[3/5] overflow-hidden group cursor-default"
          >
            <Image
              ref={(el) => { imageRefs.current[index] = el as unknown as HTMLImageElement; }}
              src={reason.image}
              alt={reason.title}
              fill
              className="object-cover scale-100"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-brown/55 group-hover:bg-brown/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-warm-white mb-3">
                {reason.title}
              </h3>
              <div className="w-10 h-px bg-gold mb-3" />
              <p className="font-sans text-sm text-warm-white/85 leading-relaxed max-w-[220px]">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: horizontal snap scroll */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            data-card
            className="relative min-w-[75vw] aspect-[3/4] overflow-hidden snap-center flex-shrink-0"
          >
            <Image
              ref={(el) => { imageRefs.current[index + 4] = el as unknown as HTMLImageElement; }}
              src={reason.image}
              alt={reason.title}
              fill
              className="object-cover"
              sizes="75vw"
            />
            <div className="absolute inset-0 bg-brown/55" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h3 className="font-serif text-xl text-warm-white mb-2">
                {reason.title}
              </h3>
              <div className="w-8 h-px bg-gold mb-2" />
              <p className="font-sans text-xs text-warm-white/85 leading-relaxed">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
