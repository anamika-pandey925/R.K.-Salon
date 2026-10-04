import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, CalendarCheck } from 'lucide-react';
import { salonInfo } from '../config/salonData';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-20 md:bottom-6 left-6 z-40 group">
        <a 
          href={`https://wa.me/${salonInfo.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#1ebd5a] hover:scale-110 transition-all duration-300 relative"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle pulse effect */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping"></div>
          <MessageCircle className="w-7 h-7 relative z-10" />
        </a>
        {/* Tooltip */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-charcoal text-white text-sm px-3 py-1.5 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 md:bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gold text-charcoal shadow-lg flex items-center justify-center hover:bg-gold-light hover:shadow-xl transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Mobile Book Appointment Button */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href="#appointment"
          className="bg-gold hover:bg-gold-light text-charcoal py-4 px-4 flex items-center justify-center gap-2 font-semibold text-lg transition-colors w-full"
        >
          <CalendarCheck className="w-5 h-5" />
          Book Appointment
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
