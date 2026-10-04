import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '../config/salonData';

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-24 bg-charcoal text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold tracking-widest text-sm font-semibold uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover why our clients trust us with their hair and beauty needs.
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all transform -translate-x-1/2 md:translate-x-0"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all transform translate-x-1/2 md:translate-x-0"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel */}
          <div className="relative min-h-[400px] md:min-h-[300px] flex items-center justify-center px-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full text-center absolute"
              >
                <div className="flex justify-center mb-6">
                  <Quote className="w-16 h-16 text-gold/30" />
                </div>
                
                <p className="text-lg md:text-xl text-white/90 italic leading-relaxed max-w-3xl mx-auto mb-8 font-light">
                  "{reviews[activeIndex].review || reviews[activeIndex].text}"
                </p>
                
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < reviews[activeIndex].rating
                          ? 'text-gold fill-gold'
                          : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>
                
                <div>
                  <div className="flex items-center justify-center gap-3 mb-1">
                    <h4 className="text-white font-semibold text-lg">
                      {reviews[activeIndex].name}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-1 rounded text-white/60">
                      Sample Review
                    </span>
                  </div>
                  <p className="text-gold/70 text-sm">
                    {reviews[activeIndex].service}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8 z-10 relative">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > activeIndex ? 1 : -1);
                  setActiveIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
