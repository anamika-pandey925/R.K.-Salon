import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ArrowRight, Sparkles } from 'lucide-react';
import { specialOffers, salonInfo } from '../config/salonData';

const SpecialOffers = () => {
  return (
    <section id="offers" className="py-20 md:py-32 bg-charcoal">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-gold mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">Special Offers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Special Offers
          </h2>
          <p className="text-white/60 text-lg">
            Discover our latest promotions and seasonal packages designed to give you the ultimate pampering experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {specialOffers.map((offer, index) => (
            <motion.div
              key={offer.title || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#2d2d2d] rounded-2xl border border-gold/20 overflow-hidden group hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row relative"
            >
              {(offer.tag || offer.badge) && (
                <div className="absolute top-4 right-4 z-10 bg-gold text-charcoal rounded-full px-3 py-1 text-xs font-semibold shadow-md">
                  {offer.tag || offer.badge}
                </div>
              )}
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <h3 className="text-xl font-heading font-semibold text-white mb-2">
                  {offer.title}
                </h3>
                <p className="text-white/60 mb-4 text-sm">
                  {offer.description}
                </p>
                <div className="mt-auto">
                  <p className="text-gold/80 italic text-sm mb-4">
                    Contact us for details
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 text-sm font-semibold"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
