import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll when loading
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-charcoal flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-5xl font-heading font-bold text-gold"
            >
              R.K
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-2 text-sm tracking-[0.4em] text-gold/80 uppercase ml-1"
            >
              Salon
            </motion.span>
            
            <motion.div
              initial={{ scaleX: 0, opacity: 0.5 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="mt-8 w-24 h-0.5 bg-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
