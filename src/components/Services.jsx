import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Flower2, Palette, Paintbrush, ArrowRight } from 'lucide-react';
import { serviceCategories } from '../config/salonData';

const iconMap = {
  Scissors,
  Flower2,
  Palette,
  Paintbrush,
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="h-px w-8 bg-gold"></div>
            <span className="text-gold font-semibold tracking-wider text-sm uppercase">Our Services</span>
            <div className="h-px w-8 bg-gold"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6"
          >
            Premium Beauty Services
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-charcoal/60 text-lg"
          >
            Discover our wide range of professional beauty and grooming services.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-12 justify-start md:justify-center gap-4 scrollbar-hide">
          {serviceCategories.map((item, index) => {
            const Icon = iconMap[item.icon] || Scissors;
            const categoryName = item.category || item.name || 'Category';
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 font-medium cursor-pointer ${
                  activeCategory === index
                    ? 'bg-gold text-charcoal shadow-lg font-semibold scale-105'
                    : 'bg-white text-charcoal/70 hover:text-gold shadow hover:shadow-md'
                }`}
              >
                <Icon size={18} />
                <span>{categoryName}</span>
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(serviceCategories[activeCategory]?.services || []).map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-xl font-semibold text-charcoal">{service.name}</h3>
                      {service.price && (
                        <span className="text-gold font-bold">{service.price}</span>
                      )}
                    </div>
                    
                    <p className="text-charcoal/60 text-sm mb-6 line-clamp-2">
                      {service.description}
                    </p>
                    
                    <a 
                      href="#appointment" 
                      className="inline-flex items-center gap-1.5 text-gold font-semibold hover:text-gold-dark transition-colors group/link"
                    >
                      Book Now 
                      <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
