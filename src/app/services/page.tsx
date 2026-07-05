import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPage() {
  const eventTypes = [
    {
      title: "Weddings",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      description:
        "Your wedding day deserves a bar experience as beautiful as your love story. From cocktail hour to the last dance, we provide seamless, professional bartending that elevates your celebration.",
    },
    {
      title: "Engagements",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
      description:
        "Celebrate your engagement in style with a curated bar experience. Whether it's an intimate gathering or a party for all your favorite people, we set the perfect tone for this special milestone.",
    },
    {
      title: "Private Events",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      description:
        "Birthdays, anniversaries, corporate events, holiday parties, or any occasion worth celebrating. We bring the full mobile bar experience right to your venue.",
    },
  ];

  const packages = [
    {
      name: "The Neat",
      price: "$800",
      featured: false,
      features: [
        "Premium Acrylic Cups",
        "High Quality Napkins",
        "Black Bar Straws",
      ],
    },
    {
      name: "The Crafted",
      price: "$1,000",
      featured: true,
      features: [
        "Premium Acrylic Cups",
        "High Quality Napkins",
        "Black Bar Straws",
        "Fresh Fruits",
        "Mixed Drinks",
      ],
    },
    {
      name: "The Curated",
      price: "$1,400",
      featured: false,
      features: [
        "Premium Acrylic Cups",
        "High Quality Napkins",
        "Black Bar Straws",
        "Fresh Fruits",
        "2 Mixers",
        "Timeless Bar Decorations",
        "Personalized His & Hers Specialty Cocktails",
        "Tea & Lemonade",
      ],
    },
  ];

  return (
    <>
      {/* 1. PAGE HERO BANNER */}
      <section className="h-[50vh] md:h-[60vh] relative flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1920&q=80"
          alt="Bartender pouring a drink"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-warm-white">
            Services &amp; Packages
          </h1>
          <p className="font-script text-2xl text-gold-light mt-3">
            Everything you need for an unforgettable bar experience
          </p>
        </div>
      </section>

      {/* 2. EVENT TYPES SECTION */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brown">
              Events We Serve
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <AnimatedSection key={event.title} delay={index * 0.15}>
                <div className="bg-warm-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-brown mb-3">
                      {event.title}
                    </h3>
                    <p className="font-sans text-brown-light text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <Link
                      href="/contact"
                      className="text-gold text-sm font-sans hover:text-gold-dark transition"
                    >
                      Book Now &rarr;
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PACKAGES SECTION */}
      <section className="py-24 md:py-32 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-serif text-3xl md:text-4xl text-brown">
              Our Packages
            </h2>
            <p className="font-sans text-brown-light mt-4">
              Choose the perfect bar experience for your celebration
            </p>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={index * 0.15}>
                <div
                  className={`bg-warm-white rounded-xl p-8 text-center relative flex flex-col ${
                    pkg.featured
                      ? "border-2 border-gold md:scale-105 shadow-lg"
                      : "border border-gold/10"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-warm-white text-xs uppercase px-4 py-1 rounded-full font-sans tracking-wider">
                      Most Popular
                    </span>
                  )}

                  <h3 className="font-serif text-2xl text-brown mt-2">
                    {pkg.name}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-wider text-brown-light mt-4">
                    Starting at
                  </p>
                  <p className="font-serif text-4xl md:text-5xl text-gold font-bold mt-1">
                    {pkg.price}
                  </p>
                  <div className="w-12 h-px bg-gold/30 mx-auto my-6" />

                  <ul className="space-y-3 mb-6 flex-grow">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="font-sans text-sm text-brown-light flex items-start justify-center gap-2"
                      >
                        <span className="text-sage font-bold mt-0.5 shrink-0">
                          &#10003;
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="font-sans text-xs text-gold italic mb-6">
                    Beer and wine served with package
                  </p>

                  <Link
                    href="/contact"
                    className={`inline-block w-full py-3 text-sm uppercase tracking-[0.15em] font-sans transition-all duration-300 rounded-lg ${
                      pkg.featured
                        ? "bg-gold text-warm-white hover:bg-gold-dark"
                        : "border-2 border-gold text-gold hover:bg-gold hover:text-warm-white"
                    }`}
                  >
                    Select Package
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Fine print */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <div className="w-12 h-px bg-gold/30 mx-auto mb-6" />
            <p className="text-sm text-brown-light font-sans leading-relaxed">
              All packages include 1 phone call consultation and shopping list
              upon booking. All packages include 1 bartender per 85 guests for
              6 hours of service. Beer, wine, and liquor are not
              included — all packages are BYOB (Bring Your Own Booze).
            </p>
            <p className="text-sm text-brown-light font-sans leading-relaxed mt-4">
              A 20% gratuity will be added to the final payment if a tip jar is
              not preferred.
            </p>
          </div>
        </div>
      </section>

      {/* 4. ADD-ONS / ADDITIONAL INFO */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h3 className="font-serif text-2xl md:text-3xl text-brown mb-4">
              Not Sure Which Package Is Right for You?
            </h3>
            <p className="font-sans text-brown-light leading-relaxed mb-8">
              Have questions about which package is right for you? We&apos;d
              love to help you find the perfect fit. Every event is different,
              and we&apos;re happy to customize our services to match your
              vision.
            </p>
            <Link
              href="/contact"
              className="inline-block border-2 border-gold text-gold px-10 py-3.5 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-warm-white transition-all duration-300 font-sans"
            >
              Let&apos;s Chat
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
