'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: string;
  packageInterest: string;
  message: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  guestCount: '',
  packageInterest: '',
  message: '',
};

const inputClasses =
  'w-full border border-gold/30 rounded-lg px-4 py-3 bg-warm-white text-brown font-sans focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition';

const labelClasses = 'block font-sans text-sm uppercase tracking-wider text-brown-light mb-2';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect to Web3Forms — replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6 animate-fade-in">
        {/* Champagne emoji */}
        <div className="text-6xl mb-6">🥂</div>

        {/* Heading */}
        <h3 className="font-serif text-3xl md:text-4xl text-brown mb-3">
          Cheers to That!
        </h3>

        {/* Script subheading */}
        <p className="font-script text-xl md:text-2xl text-gold mb-6">
          Here&apos;s to new beginnings and unforgettable celebrations
        </p>

        {/* Body text */}
        <p className="font-sans text-brown-light max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for reaching out! We&apos;ve received your inquiry and Emily
          will be in touch within 24 hours to start planning your perfect event.
        </p>

        {/* Instagram CTA */}
        <p className="font-sans text-brown-light text-sm mb-4">
          In the meantime, follow us for cocktail inspiration!
        </p>
        <a
          href="https://www.instagram.com/ginandjackk/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition font-sans font-medium"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
          @ginandjackk
        </a>

        {/* Reset button */}
        <div className="mt-8">
          <button
            onClick={resetForm}
            className="text-gold hover:text-gold-dark underline underline-offset-4 font-sans text-sm transition"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            className={inputClasses}
          />
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className={labelClasses}>
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className={labelClasses}>
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="" disabled>
              Select event type
            </option>
            <option value="Wedding">Wedding</option>
            <option value="Engagement">Engagement</option>
            <option value="Private Party">Private Party</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Birthday">Birthday</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Estimated Guest Count */}
        <div>
          <label htmlFor="guestCount" className={labelClasses}>
            Estimated Guest Count
          </label>
          <input
            type="number"
            id="guestCount"
            name="guestCount"
            required
            min="1"
            value={formData.guestCount}
            onChange={handleChange}
            placeholder="Number of guests"
            className={inputClasses}
          />
        </div>

        {/* Package Interest */}
        <div className="md:col-span-2">
          <label htmlFor="packageInterest" className={labelClasses}>
            Package Interest
          </label>
          <select
            id="packageInterest"
            name="packageInterest"
            required
            value={formData.packageInterest}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="" disabled>
              Select a package
            </option>
            <option value="To Have and To Hold ($800)">
              To Have and To Hold ($800)
            </option>
            <option value="Cheers To Us ($1,000)">
              Cheers To Us ($1,000)
            </option>
            <option value="Happily Ever After ($1,400)">
              Happily Ever After ($1,400)
            </option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your event! Any special requests, themes, or questions?"
            className={`${inputClasses} min-h-[120px] resize-y`}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto bg-gold text-warm-white px-10 py-3.5 text-sm uppercase tracking-[0.2em] font-sans font-medium hover:bg-gold-dark transition-all duration-300 rounded-lg mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Inquiry'
          )}
        </button>
      </div>
    </form>
  );
}
