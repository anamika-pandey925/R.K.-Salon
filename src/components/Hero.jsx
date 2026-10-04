import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Users, Gem, Heart } from 'lucide-react';
import { heroData } from '../config/salonData';

const iconMap = {
  Users,
  Gem,
  Heart,
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  // Helper function to safely render heading with highlighted words
  const renderHeading = (text) => {
    if (!text) return null;
    
    // Highlight "Beauty" or "Passion" if they exist in the heading
    const words = text.split(' ');
    return words.map((word, index) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
      if (cleanWord === 'beauty' || cleanWord === 'passion') {
        return <span key={index} className="text-gold">{word} </span>;
      }
      return word + ' ';
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.image}
          alt="R.K. Salon Welcome"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Welcome Badge */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <span className="w-8 md:w-12 h-[2px] bg-gold"></span>
            <span className="text-gold uppercase tracking-widest text-xs sm:text-sm font-semibold">
              Welcome to R.K Salon
            </span>
            <span className="w-8 h-[2px] bg-gold md:hidden"></span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
            {renderHeading(heroData.heading)}
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg text-white/80 max-w-xl mx-auto md:mx-0 mb-10">
            {heroData.subheading}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-16">
            <a 
              href="#appointment" 
              className="btn-primary w-full sm:w-auto"
            >
              Book an Appointment
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#services" 
              className="btn-secondary w-full sm:w-auto"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust Badges */}
          {heroData.trustBadges && heroData.trustBadges.length > 0 && (
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 pt-8 border-t border-white/20">
              {heroData.trustBadges.map((badge, index) => {
                const IconComponent = iconMap[badge.icon] || Heart;
                return (
                  <React.Fragment key={index}>
                    <div className="flex items-center gap-2 text-white/70">
                      <IconComponent className="w-5 h-5 text-gold" />
                      <span className="text-sm font-medium">{badge.label}</span>
                    </div>
                    {index < heroData.trustBadges.length - 1 && (
                      <div className="hidden sm:block w-px h-6 bg-white/20"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest hidden sm:block">Scroll to explore</span>
        <a href="#about" className="p-2 text-white/80 hover:text-gold transition-colors mt-1">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
