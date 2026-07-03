'use client';

export default function Marquee() {
  const taglines = [
    'We bring the bar. You make the memories.',
    'Crafting unforgettable cocktails for life\'s biggest celebrations.',
    'Professional Service. Crafted Cocktails. Unforgettable Experiences.',
  ];

  const separator = <span className="text-gold mx-8">◆</span>;

  const taglineRow = taglines.map((tagline, i) => (
    <span key={i} className="inline-flex items-center">
      {i > 0 && separator}
      <span>{tagline}</span>
    </span>
  ));

  return (
    <div className="bg-warm-white border-y border-gold/20 overflow-hidden">
      <div className="py-4 md:py-5">
        <div className="animate-marquee flex whitespace-nowrap font-serif text-lg md:text-xl text-brown/80">
          <div className="flex items-center shrink-0">
            {taglineRow}
            {separator}
          </div>
          <div className="flex items-center shrink-0">
            {taglineRow}
            {separator}
          </div>
        </div>
      </div>
    </div>
  );
}
