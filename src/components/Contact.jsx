import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { salonInfo } from '../config/salonData';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-2 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
            Contact Us
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Phone Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <Phone className="text-gold w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">{salonInfo.phone}</p>
            <a href={`tel:${salonInfo.phone}`} className="btn-primary mt-auto">Call Now</a>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <Mail className="text-gold w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-4 break-all">{salonInfo.email}</p>
            <a href={`mailto:${salonInfo.email}`} className="text-gold hover:text-gold-light font-medium flex items-center mt-auto">
              Send Message <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </motion.div>

          {/* Hours Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <Clock className="text-gold w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <div className="text-gray-600 mb-4">
              <p>{salonInfo.openingHours.days}</p>
              <p>{salonInfo.openingHours.time}</p>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons Row & Address */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
           <div className="flex gap-4">
              <a href={`tel:${salonInfo.phone}`} className="btn-primary rounded-full flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href={`https://wa.me/${salonInfo.whatsapp}`} target="_blank" rel="noreferrer" className="bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium hover:bg-[#1ebd5a] transition">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
           </div>
        </div>
        
        <div className="text-center mb-8 flex flex-col items-center justify-center">
            <MapPin className="text-gold w-8 h-8 mb-2" />
            <p className="text-lg text-charcoal">{salonInfo.address}</p>
        </div>

        {/* Map Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 md:h-96"
        >
          {salonInfo.mapEmbedUrl ? (
            <iframe 
              src={salonInfo.mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Location Map"
            ></iframe>
          ) : (
            <div className="bg-charcoal/5 h-full flex flex-col items-center justify-center text-gray-500">
              <MapPin className="w-12 h-12 mb-3 text-gray-400" />
              <p>Map will be added here</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
