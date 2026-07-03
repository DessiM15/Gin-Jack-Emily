"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services & Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-md shadow-[0_1px_12px_rgba(61,50,41,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between px-6 lg:px-12 transition-all duration-300 ease-in-out ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            {/* Desktop logo */}
            <Image
              src="/logos/full-dark.png"
              alt="Gin & Jack Mobile Bar"
              width={160}
              height={48}
              className={`hidden md:block transition-all duration-300 ${
                scrolled ? "h-10 w-auto" : "h-12 w-auto"
              }`}
              priority
            />
            {/* Mobile logo */}
            <Image
              src="/logos/abbrev-dark.png"
              alt="Gin & Jack"
              width={50}
              height={50}
              className={`block md:hidden transition-all duration-300 ${
                scrolled ? "h-10 w-auto" : "h-12 w-auto"
              }`}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-brown hover:text-gold"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gold rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 bg-gold text-warm-white px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-sans hover:bg-gold-dark transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[6px]"
            aria-label="Open menu"
          >
            <span className="block w-6 h-[1.5px] bg-brown transition-all duration-300" />
            <span className="block w-6 h-[1.5px] bg-brown transition-all duration-300" />
            <span className="block w-4 h-[1.5px] bg-brown transition-all duration-300 self-end" />
          </button>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className={`transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`} />

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-cream/[0.97] backdrop-blur-sm" />

        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center"
          aria-label="Close menu"
        >
          <span className="relative w-6 h-6">
            <span className="absolute top-1/2 left-0 w-6 h-[1.5px] bg-brown rotate-45 -translate-y-1/2" />
            <span className="absolute top-1/2 left-0 w-6 h-[1.5px] bg-brown -rotate-45 -translate-y-1/2" />
          </span>
        </button>

        {/* Mobile nav links */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-serif transition-all duration-300 ${
                isActive(link.href)
                  ? "text-gold"
                  : "text-brown hover:text-gold"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${index * 80}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen
                  ? "translateY(0)"
                  : "translateY(16px)",
              }}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="block w-8 h-[1.5px] bg-gold mx-auto mt-1 rounded-full" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-gold text-warm-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-sans hover:bg-gold-dark transition-colors duration-300"
            style={{
              transitionDelay: mobileOpen
                ? `${navLinks.length * 80}ms`
                : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
            }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
