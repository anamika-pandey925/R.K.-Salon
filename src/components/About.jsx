import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Zap, Heart, ShieldCheck } from 'lucide-react';
import { aboutData } from '../config/salonData';

const aboutIconMap = {
  Award,
  Sparkles,
  Zap,
  Heart,
  ShieldCheck,
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-8 bg-gold"></span>
              <span className="uppercase tracking-widest text-gold text-sm font-semibold">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
              {aboutData.heading}
            </h2>
            
            <p className="text-charcoal/70 text-lg leading-relaxed mb-10">
              {aboutData.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutData.highlights.map((highlight, index) => {
                const Icon = aboutIconMap[highlight.icon] || Sparkles;
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="flex flex-col gap-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Icon className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed">
                        {highlight.text || highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative mt-10 lg:mt-0"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={aboutData.image} 
                alt="About R.K. Salon" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            
            {/* Decorative Gold Frame */}
            <div className="absolute top-6 -right-6 bottom-6 -left-6 border-2 border-gold/30 rounded-2xl -z-10 hidden sm:block"></div>
            
            {/* Additional Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
