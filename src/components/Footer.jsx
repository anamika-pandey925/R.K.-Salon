import { Scissors, ArrowUp, Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { salonInfo, navLinks, serviceCategories } from '../config/salonData';

/* Inline SVG social icons (lucide-react doesn't include brand icons) */
const SocialIcon = ({ type, className = 'w-5 h-5' }) => {
  const icons = {
    instagram: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    facebook: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    youtube: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1a1a1a" />
      </svg>
    ),
    twitter: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };
  return icons[type] || null;
};

const socialEntries = [
  { key: 'instagram', label: 'Instagram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'twitter', label: 'X / Twitter' },
];

const Footer = () => {
  const allServices = serviceCategories.flatMap((cat) => cat.services).slice(0, 6);

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 — Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <Scissors className="w-6 h-6 text-gold" />
                <div>
                  <h2 className="text-3xl font-heading font-bold text-gold leading-none">R.K</h2>
                  <p className="text-[10px] tracking-[0.3em] text-gold/80 uppercase">SALON</p>
                </div>
              </div>
            </a>
            <p className="text-white/60 mb-6 leading-relaxed text-sm">
              Premium beauty and salon services crafted to make you look and feel your best.
            </p>
            <div className="flex gap-3">
              {socialEntries.map(({ key, label }) =>
                salonInfo.socialLinks?.[key] ? (
                  <a
                    key={key}
                    href={salonInfo.socialLinks[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-charcoal text-white/70 flex items-center justify-center transition-all duration-300"
                  >
                    <SocialIcon type={key} />
                  </a>
                ) : null
              )}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-gold transition py-1 block text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {allServices.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/60 hover:text-gold transition py-1 block text-sm">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>{salonInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href={`tel:${salonInfo.phone}`} className="hover:text-gold transition">
                  {salonInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href={`mailto:${salonInfo.email}`} className="hover:text-gold transition break-all">
                  {salonInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p>{salonInfo.openingHours.days}</p>
                  <p className="text-white/80 font-medium">{salonInfo.openingHours.time}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>{salonInfo.copyright}</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for beauty
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
