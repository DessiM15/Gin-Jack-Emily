import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
      alt: "Cocktail being prepared",
      aspect: "aspect-square",
    },
    {
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80",
      alt: "Elegant cocktail",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
      alt: "Wedding celebration",
      aspect: "aspect-[4/3]",
    },
    {
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
      alt: "Bartender pouring",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80",
      alt: "Cocktail closeup",
      aspect: "aspect-square",
    },
    {
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
      alt: "Celebration event",
      aspect: "aspect-[3/4]",
    },
    {
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80",
      alt: "Bar setup",
      aspect: "aspect-[4/3]",
    },
    {
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
      alt: "Engagement celebration",
      aspect: "aspect-square",
    },
    {
      src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=600&q=80",
      alt: "Drinks and bar",
      aspect: "aspect-[4/3]",
    },
  ];

  return (
    <>
      {/* 1. PAGE HERO BANNER */}
      <section className="h-[50vh] md:h-[60vh] relative flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=1920&q=80"
          alt="Bar and drinks display"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-warm-white">
            Gallery
          </h1>
          <p className="font-script text-2xl text-gold-light mt-3">
            A look at our events
          </p>
        </div>
      </section>

      {/* 2. GALLERY GRID */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brown">
              Our Work
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div
                  className={`relative overflow-hidden rounded-lg group cursor-pointer ${image.aspect}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/20 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <p className="text-sm text-brown-light italic text-center mt-8">
            These are placeholder images. Our real event gallery is coming soon!
          </p>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-20 md:py-28 bg-brown text-center px-6">
        <AnimatedSection direction="none">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-white">
            Want to See Us in Action at Your Event?
          </h2>
          <p className="font-script text-xl md:text-2xl text-gold-light mt-4">
            Let&apos;s create something beautiful together
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-gold text-gold px-10 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-warm-white transition-all duration-300 mt-8 font-sans"
          >
            Book Your Event
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
