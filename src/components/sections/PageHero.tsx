import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ title, subtitle, className = "" }: PageHeroProps) {
  return (
    <section className={`pt-32 pb-20 md:pt-40 md:pb-28 green-gradient text-white relative overflow-hidden ${className}`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-white/5 rotate-12 blur-3xl rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[120%] bg-[#F9A825]/10 rotate-[-15deg] blur-2xl rounded-full mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="heading-xl mb-6">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-[#F9A825] mx-auto mt-8 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
