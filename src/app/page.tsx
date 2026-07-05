import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import Marquee from "@/components/Marquee";
import AnimatedSection from "@/components/AnimatedSection";
import WhySection from "@/components/WhySection";

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
      title: "Professional Service",
      description:
        "Licensed, insured, and impeccably trained. We bring the expertise of a top-tier bar to your event.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
    },
    {
      title: "Crafted Cocktails",
      description:
        "From classic favorites to custom signature drinks, every cocktail is crafted with care and precision.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    },
    {
      title: "Stress-Free Setup",
      description:
        "We arrive fully equipped with everything needed. You provide the drinks, we handle the rest.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    },
    {
      title: "Personal Touch",
      description:
        "Every event is unique. We work with you to create a bar experience that perfectly matches your vision.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
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
      <WhySection reasons={reasons} />

      {/* 6. LEAVE A REVIEW */}
      <section className="py-24 bg-warm-white px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-brown">
                Leave a Review
              </h2>
              <div className="w-16 h-px bg-gold mx-auto mt-6 mb-6" />
              <p className="font-sans text-brown-light leading-relaxed mb-8">
                Had a great experience with Gin &amp; Jack? We&apos;d love to
                hear about it! Your feedback means the world to us.
              </p>
              <a
                href="https://www.facebook.com/share/1C6y57HcrP/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-gold text-gold px-10 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-warm-white transition-all duration-300 font-sans"
              >
                Leave a Review on Facebook
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. CTA BANNER */}
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
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
