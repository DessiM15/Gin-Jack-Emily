import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import Marquee from "@/components/Marquee";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const services = [
    {
      title: "Weddings",
      description:
        "Your wedding day deserves a bar experience as beautiful as your love story. We handle every detail so you can focus on what matters most.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-12 h-12 text-gold mx-auto"
        >
          <path d="M24 4c-3 6-10 10-10 18a10 10 0 0 0 20 0C34 14 27 10 24 4z" />
          <path d="M19 44v-6a5 5 0 0 1 10 0v6" />
          <circle cx="24" cy="22" r="3" />
        </svg>
      ),
    },
    {
      title: "Engagements",
      description:
        "Pop the champagne and leave the rest to us. From intimate engagement parties to elaborate celebrations, we set the perfect tone.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-12 h-12 text-gold mx-auto"
        >
          <path d="M14 28l4-20h4l-2 20" />
          <path d="M34 28l-4-20h-4l2 20" />
          <ellipse cx="16" cy="28" rx="5" ry="2" />
          <ellipse cx="32" cy="28" rx="5" ry="2" />
          <path d="M16 30v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M11 6l4 2M37 6l-4 2M18 5l1 3M30 5l-1 3M24 3v5" />
        </svg>
      ),
    },
    {
      title: "Private Events",
      description:
        "Birthdays, anniversaries, corporate gatherings, or just because — we bring the full bar experience to any occasion worth celebrating.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-12 h-12 text-gold mx-auto"
        >
          <polygon points="24,4 28,16 40,16 30,24 34,36 24,28 14,36 18,24 8,16 20,16" />
          <circle cx="10" cy="40" r="2" />
          <circle cx="38" cy="40" r="2" />
          <circle cx="24" cy="42" r="2" />
          <path d="M6 10l2 1M42 10l-2 1" />
        </svg>
      ),
    },
  ];

  const reasons = [
    {
      number: "01",
      title: "Professional Service",
      description:
        "Licensed, insured, and impeccably trained. We bring the expertise of a top-tier bar to your event.",
    },
    {
      number: "02",
      title: "Crafted Cocktails",
      description:
        "From classic favorites to custom signature drinks, every cocktail is crafted with care and precision.",
    },
    {
      number: "03",
      title: "Stress-Free Setup",
      description:
        "We arrive fully equipped with everything needed. You provide the drinks, we handle the rest.",
    },
    {
      number: "04",
      title: "Personal Touch",
      description:
        "Every event is unique. We work with you to create a bar experience that perfectly matches your vision.",
    },
  ];

  return (
    <>
      {/* 1. HERO */}
      <HeroSlideshow />

      {/* 2. WELCOME SECTION */}
      <section className="py-24 md:py-32 bg-cream px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold text-xs tracking-[0.3em] font-sans uppercase mb-6">
              Welcome
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-brown leading-tight">
              Houston&apos;s Premier Mobile Bartending Experience
            </h2>
            <div className="w-16 h-px bg-gold mx-auto my-6" />
            <p className="font-sans text-brown-light leading-relaxed text-base md:text-lg">
              At Gin &amp; Jack, we believe every celebration deserves an
              exceptional bar experience. From intimate engagements to grand
              wedding receptions, we bring professional bartending, crafted
              cocktails, and an unforgettable atmosphere — right to your venue.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 text-gold font-sans text-sm uppercase tracking-wider hover:text-gold-dark transition"
            >
              Our Story &rarr;
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. MARQUEE */}
      <Marquee />

      {/* 4. SERVICES PREVIEW */}
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brown">
              What We Do
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.15}>
                <div className="text-center p-8">
                  {service.icon}
                  <h3 className="font-serif text-2xl text-brown mt-6 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-brown-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-block mt-4 text-gold text-sm font-sans hover:text-gold-dark transition"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brown">
              Why Gin &amp; Jack
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 0.1}>
                <div className="text-center">
                  <span className="font-serif text-4xl text-gold font-bold">
                    {reason.number}
                  </span>
                  <h3 className="font-serif text-xl text-brown mt-4 mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-sm text-brown-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-20 md:py-28 bg-brown text-center px-6">
        <AnimatedSection direction="none">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-white">
            Let&apos;s Make Your Event Unforgettable
          </h2>
          <p className="font-script text-xl md:text-2xl text-gold-light mt-4">
            Your celebration, our passion
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-gold text-gold px-10 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-warm-white transition-all duration-300 mt-8 font-sans"
          >
            Get in Touch
          </Link>
        </AnimatedSection>
      </section>

      {/* 7. TESTIMONIALS PLACEHOLDER */}
      <section className="py-24 bg-warm-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brown">
              Kind Words
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <p className="font-sans text-brown-light italic text-center mb-12">
            Coming soon — we can&apos;t wait to share what our clients have to
            say!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="border border-gold/20 rounded-lg p-8 text-center min-h-[200px] flex flex-col items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gold/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-sans text-brown-light/40 text-sm italic">
                    Your review here
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
