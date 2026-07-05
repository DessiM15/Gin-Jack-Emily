"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

const faqData = [
  {
    question: "Do you provide the alcohol?",
    answer:
      "No, all packages are BYOB (Bring Your Own Booze). You provide the beer, wine, and liquor \u2014 we provide everything else including professional bartending, cups, napkins, straws, and depending on your package, mixers, fruits, and bar decor.",
  },
  {
    question: "How many guests can you serve?",
    answer:
      "Each package includes 1 bartender for up to 125 guests. For larger events, we add a second bartender at just $5 per additional guest over 125.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking as early as possible, especially for weekend weddings during peak season. However, we\u2019ll always do our best to accommodate last-minute requests!",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We\u2019re based in Houston, Texas and serve the entire Houston metro area and surrounding regions.",
  },
  {
    question: "How long is the service?",
    answer:
      "All packages include 6 hours of service. Additional hours are available at $75/hour.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gold/15">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-serif text-lg text-brown group-hover:text-gold transition-colors pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14M5 12h14"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="font-sans text-sm text-brown-light leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* 1. PAGE HERO BANNER */}
      <section className="h-[50vh] md:h-[60vh] relative flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1920&q=80"
          alt="Elegant event setting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brown/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-warm-white">
            Contact
          </h1>
          <p className="font-script text-2xl text-gold-light mt-3">
            Let&apos;s plan your perfect event
          </p>
        </div>
      </section>

      {/* 2. CONTACT SECTION */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Left column - Form */}
            <div className="md:col-span-3">
              <AnimatedSection direction="left">
                <h2 className="font-serif text-3xl text-brown">
                  Get in Touch
                </h2>
                <p className="font-sans text-brown-light mb-8 mt-2">
                  Fill out the form below and Emily will get back to you within
                  24 hours.
                </p>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Right column - Contact info */}
            <div className="md:col-span-2">
              <AnimatedSection direction="right">
                <div className="bg-cream-dark rounded-xl p-8">
                  <h3 className="font-serif text-2xl text-brown mb-6">
                    Contact Information
                  </h3>

                  {/* Email */}
                  <div className="flex items-start gap-3 mb-5">
                    <svg
                      className="w-5 h-5 text-gold mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <div>
                      <p className="font-sans text-xs text-brown-light uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:emily@ginandjackbar.com"
                        className="font-sans text-sm text-brown hover:text-gold transition"
                      >
                        emily@ginandjackbar.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 mb-5">
                    <svg
                      className="w-5 h-5 text-gold mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <div>
                      <p className="font-sans text-xs text-brown-light uppercase tracking-wider mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:832-207-9269"
                        className="font-sans text-sm text-brown hover:text-gold transition"
                      >
                        (832) 207-9269
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gold mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-sans text-xs text-brown-light uppercase tracking-wider mb-1">
                        Location
                      </p>
                      <p className="font-sans text-sm text-brown">
                        Houston &amp; Surrounding Areas
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gold/20 my-6" />

                  {/* Follow Us */}
                  <h4 className="font-serif text-lg text-brown mb-4">
                    Follow Us
                  </h4>
                  <div className="flex items-center gap-4">
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/ginandjackk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-warm-white transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/share/1C6y57HcrP/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-warm-white transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gold/20 my-6" />

                  {/* Hours */}
                  <h4 className="font-serif text-lg text-brown mb-3">Hours</h4>
                  <p className="font-sans text-sm text-brown-light leading-relaxed">
                    We&apos;re available 7 days a week for events. For
                    inquiries, we typically respond within 24 hours.
                  </p>

                  {/* Decorative note */}
                  <div className="mt-8 pt-6 border-t border-gold/20">
                    <p className="font-script text-gold text-lg text-center">
                      We can&apos;t wait to hear about your celebration!
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-brown">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>

          <div>
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
