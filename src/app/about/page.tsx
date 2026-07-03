import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  const values = [
    {
      title: "Craftsmanship",
      description:
        "Every cocktail is an art form. We take pride in precision, presentation, and flavor.",
    },
    {
      title: "Hospitality",
      description:
        "We treat your guests like our own. Warm, attentive service is at the heart of everything we do.",
    },
    {
      title: "Reliability",
      description:
        "Fully licensed and insured. We show up prepared, professional, and ready to exceed expectations.",
    },
  ];

  return (
    <>
      {/* 1. PAGE HERO BANNER */}
      <section className="h-[50vh] md:h-[60vh] relative flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1920&q=80"
          alt="Elegant bar setup"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-warm-white">
            About
          </h1>
          <p className="font-script text-2xl text-gold-light mt-3">
            Our Story
          </p>
        </div>
      </section>

      {/* 2. STORY SECTION */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid md:grid-cols-5 gap-12 items-start">
              {/* Left column - Photo placeholder */}
              <div className="md:col-span-2">
                <div className="aspect-[3/4] bg-cream-dark rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center px-6">
                    <div className="w-12 h-px bg-gold mx-auto mb-4" />
                    <p className="font-script text-xl text-gold">
                      Photo Coming Soon
                    </p>
                    <div className="w-12 h-px bg-gold mx-auto mt-4" />
                  </div>
                </div>
              </div>

              {/* Right column - Story text */}
              <div className="md:col-span-3">
                <h2 className="font-serif text-3xl md:text-4xl text-brown">
                  Meet Emily
                </h2>
                <div className="w-16 h-px bg-gold my-6" />
                <div className="space-y-6">
                  <p className="font-sans text-brown-light leading-relaxed">
                    Behind every great cocktail is a story, and ours begins with
                    a passion for bringing people together. Gin &amp; Jack
                    Mobile Bar was born from a simple belief: every celebration
                    — big or small — deserves a bar experience that feels
                    personal, professional, and truly special.
                  </p>
                  <p className="font-sans text-brown-light leading-relaxed">
                    As the owner and lead bartender, Emily Stanley brings
                    warmth, expertise, and a genuine love for the craft to every
                    event. What started as a love for mixology and a knack for
                    making people feel welcome has grown into Houston&apos;s
                    go-to mobile bartending service for weddings, engagements,
                    and private events.
                  </p>
                  <p className="font-sans text-brown-light leading-relaxed">
                    The name &ldquo;Gin &amp; Jack&rdquo; is a nod to two
                    timeless spirits that represent the best of bartending —
                    classic, versatile, and always a crowd favorite. Just like
                    the drinks we serve, our approach blends tradition with a
                    personal touch that makes every event one of a kind.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. MISSION SECTION */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-serif text-3xl text-brown">Our Promise</h2>
              <div className="w-16 h-px bg-gold mx-auto my-6" />
              <p className="font-script text-3xl md:text-4xl text-gold leading-snug">
                We bring the bar. You make the memories.
              </p>
              <p className="font-sans text-brown-light text-center mt-8 leading-relaxed">
                Every event we serve is personal to us. We don&apos;t just show
                up — we invest in your celebration. From the first consultation
                to the last cocktail poured, we&apos;re committed to making
                your experience seamless, stress-free, and absolutely
                unforgettable.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. VALUES/PILLARS */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brown">
              What We Stand For
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.15}>
                <div className="text-center p-8 border-t-2 border-gold">
                  <h3 className="font-serif text-2xl text-brown mb-4">
                    {value.title}
                  </h3>
                  <p className="font-sans text-brown-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-20 md:py-28 text-center px-6 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80"
          alt="Cocktails background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown/70" />
        <AnimatedSection direction="none">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl text-warm-white">
              Ready to Raise a Glass?
            </h2>
            <p className="font-script text-xl md:text-2xl text-gold-light mt-4">
              Let&apos;s celebrate together
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-gold text-gold px-10 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-warm-white transition-all duration-300 mt-8 font-sans"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
