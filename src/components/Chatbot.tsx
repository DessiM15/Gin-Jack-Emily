'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface ChatOption {
  label: string;
  action: string;
}

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  options?: ChatOption[];
}

const INITIAL_OPTIONS: ChatOption[] = [
  { label: 'Our Packages', action: 'Our Packages' },
  { label: "What's Included", action: "What's Included" },
  { label: 'Service Area', action: 'Service Area' },
  { label: 'Event Types', action: 'Event Types' },
  { label: 'How Booking Works', action: 'How Booking Works' },
  { label: 'Something Else', action: 'Something Else' },
];

function getBotResponse(action: string): { text: string; options: ChatOption[] } {
  switch (action) {
    case 'Our Packages':
      return {
        text: 'We offer three beautiful packages:\n\n🥂 To Have and To Hold — $800\n🍸 Cheers To Us — $1,000\n✨ Happily Ever After — $1,400\n\nAll packages include 1 bartender for up to 125 guests with 6 hours of service!',
        options: [
          { label: "What's Included", action: "What's Included" },
          { label: 'How Booking Works', action: 'How Booking Works' },
          { label: 'Back to Menu', action: 'Back to Menu' },
        ],
      };
    case "What's Included":
      return {
        text: "Here's what each package includes:\n\n🥂 To Have & To Hold: Cups, napkins, straws, beer & wine service\n\n🍸 Cheers To Us: Everything above plus fruits & mixed drinks\n\n✨ Happily Ever After: The full experience — 3 mixers, bar decor, personalized His & Hers specialty cocktails, plus water, tea & lemonade!\n\nNote: Beer, wine, and liquor are not included in any package — you provide the drinks, we provide the magic!",
        options: [
          { label: 'Our Packages', action: 'Our Packages' },
          { label: 'How Booking Works', action: 'How Booking Works' },
          { label: 'Back to Menu', action: 'Back to Menu' },
        ],
      };
    case 'Service Area':
      return {
        text: "We're proudly based in Houston, Texas and serve the entire Houston metro and surrounding areas! Whether your event is in the city, the suburbs, or a gorgeous countryside venue nearby — we'll be there, bar and all! 🍸",
        options: [
          { label: 'Our Packages', action: 'Our Packages' },
          { label: 'How Booking Works', action: 'How Booking Works' },
          { label: 'Back to Menu', action: 'Back to Menu' },
        ],
      };
    case 'Event Types':
      return {
        text: "We bring the bar to all kinds of celebrations!\n\n💒 Weddings\n💍 Engagements\n🎉 Private Parties\n🥂 Anniversaries\n🎂 Birthdays\n🏢 Corporate Events\n\nIf there's a reason to celebrate, we're there!",
        options: [
          { label: 'Our Packages', action: 'Our Packages' },
          { label: 'How Booking Works', action: 'How Booking Works' },
          { label: 'Back to Menu', action: 'Back to Menu' },
        ],
      };
    case 'How Booking Works':
      return {
        text: "Booking with us is easy!\n\n1️⃣ Reach out through our contact form or give us a call\n2️⃣ We'll chat about your event details and vision\n3️⃣ Choose your perfect package\n4️⃣ We handle the rest — you just enjoy your party!\n\nWe'd love to hear about your event!",
        options: [
          { label: 'Contact Emily', action: 'Contact Emily' },
          { label: 'Our Packages', action: 'Our Packages' },
          { label: 'Back to Menu', action: 'Back to Menu' },
        ],
      };
    case 'Something Else':
    case 'Contact Emily':
      return {
        text: "We'd love to hear from you personally! Here's how to reach Emily:\n\n📧 emily@ginandjackbar.com\n📞 832-207-9269\n\nDon't be shy — whether you have a quick question or want to start planning your dream event, Emily would love to chat! 💛",
        options: [{ label: 'Back to Menu', action: 'Back to Menu' }],
      };
    case 'Back to Menu':
      return {
        text: 'What else can I help you with? 😊',
        options: INITIAL_OPTIONS,
      };
    default:
      return {
        text: 'What else can I help you with? 😊',
        options: INITIAL_OPTIONS,
      };
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hey there! 🥂 Welcome to Gin & Jack Mobile Bar! I'd love to help you learn more about our services. What would you like to know?",
      isBot: true,
      options: INITIAL_OPTIONS,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(2);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen, scrollToBottom]);

  const handleOptionClick = (option: ChatOption) => {
    const userMessageId = nextIdRef.current++;
    const botMessageId = nextIdRef.current++;

    const userMessage: ChatMessage = {
      id: userMessageId,
      text: option.label,
      isBot: false,
    };

    const response = getBotResponse(option.action);

    const botMessage: ChatMessage = {
      id: botMessageId,
      text: response.text,
      isBot: true,
      options: response.options,
    };

    setMessages((prev) => {
      const updated = prev.map((msg) => {
        if (msg.options) {
          return { ...msg, options: undefined };
        }
        return msg;
      });
      return [...updated, userMessage, botMessage];
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold text-warm-white shadow-lg hover:bg-gold-dark transition-all duration-300 flex items-center justify-center"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {/* Pulse ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
        )}

        {isOpen ? (
          <svg
            className="w-6 h-6 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 md:w-96 h-[28rem] bg-warm-white rounded-2xl shadow-2xl border border-gold/20 flex flex-col z-50 transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gold text-warm-white p-4 rounded-t-2xl shrink-0">
          <h3 className="font-serif text-lg">Gin &amp; Jack</h3>
          <p className="text-warm-white/80 text-xs font-sans">
            How can we help?
          </p>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div key={message.id}>
              {message.isBot ? (
                <div className="flex flex-col items-start">
                  <div className="bg-cream-dark rounded-2xl rounded-tl-sm p-3 text-sm text-brown max-w-[85%] whitespace-pre-line">
                    {message.text}
                  </div>
                  {message.options && message.options.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {message.options.map((option, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => handleOptionClick(option)}
                          className="border border-gold text-gold text-xs px-3 py-1.5 rounded-full hover:bg-gold hover:text-warm-white transition cursor-pointer font-sans"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex justify-end">
                  <div className="bg-gold text-warm-white rounded-2xl rounded-tr-sm p-3 text-sm max-w-[85%] ml-auto font-sans">
                    {message.text}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </>
  );
}
