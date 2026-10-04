import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../config/salonData';

const categories = ['All', 'Salon', 'Hair', 'Makeup', 'Nails', 'Beauty'];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeFilter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold"></div>
            <span className="text-gold font-semibold tracking-wider uppercase text-sm">
              Our Gallery
            </span>
            <div className="h-px w-8 bg-gold"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-charcoal/70 text-lg">
            Explore our portfolio of transformations and discover the artistry behind our salon's signature styles.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-12 justify-start md:justify-center gap-2 md:gap-4 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-medium cursor-pointer ${
                activeFilter === category
                  ? 'bg-gold text-charcoal font-semibold shadow-md scale-105'
                  : 'bg-white text-charcoal/60 hover:text-gold shadow-sm hover:shadow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry/Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id || img.src || idx}
                className="group relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src || img.url}
                  alt={img.alt || 'R.K Salon Gallery'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold/90 text-charcoal flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src || selectedImage.url}
                alt={selectedImage.alt || 'R.K Salon Gallery'}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-2xl border border-gold/30"
              />
              <p className="text-white/90 mt-4 text-lg font-heading tracking-wide text-center">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
