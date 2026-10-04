import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gem, Heart, ShieldCheck, CalendarCheck, Star } from 'lucide-react';
import { whyChooseUs } from '../config/salonData';

const iconMap = {
  Sparkles,
  Gem,
  Heart,
  ShieldCheck,
  CalendarCheck,
  Star
};

const WhyChoose = () => {
  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-gold mb-4">
            <Star className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Why R.K Salon?
          </h2>
          <p className="text-charcoal/60 text-lg">
            Experience the perfect blend of luxury, expertise, and personalized care that sets us apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whyChooseUs.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;

            return (
              <motion.div
                key={feature.title || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-cream text-center border border-transparent hover:border-gold/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal/60 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
