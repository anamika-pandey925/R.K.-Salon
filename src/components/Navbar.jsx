import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { salonInfo, navLinks } from '../config/salonData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active link detection based on scroll position
      const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
      let current = 'home';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/95 glass-effect py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 z-50 relative" onClick={closeMenu}>
            <Scissors className="w-5 h-5 text-gold" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-gold leading-none">R.K</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold/80 mt-0.5">SALON</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                        activeSection === sectionId
                          ? 'text-gold'
                          : 'text-white/80 hover:text-gold'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a href="#appointment" className="btn-primary text-sm">
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal z-40 transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center ${
          mobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            return (
              <li key={link.href} className="w-full text-center">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`block text-2xl uppercase tracking-widest font-heading transition-colors duration-300 ${
                    activeSection === sectionId ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="w-full pt-4 flex justify-center">
            <a
              href="#appointment"
              onClick={closeMenu}
              className="btn-primary w-full max-w-[250px] text-center"
            >
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
