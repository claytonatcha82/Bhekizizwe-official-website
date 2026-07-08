import React, { useState } from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Camera } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Civil Engineering', 'Industrial'];

const placeholderImages = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  category: categories[(i % (categories.length - 1)) + 1]
}));

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? placeholderImages 
    : placeholderImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Our Gallery" 
        subtitle="Visual proof of our commitment to excellence and precision craftsmanship across all sectors."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Admin Note */}
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-lg mb-12 flex items-start gap-4">
            <Camera className="w-6 h-6 shrink-0 text-amber-600" />
            <div>
              <h4 className="font-bold">Image Gallery Setup</h4>
              <p className="text-sm mt-1">Upload actual project images to the <code className="bg-white px-1 py-0.5 rounded border border-amber-100">public/assets/gallery/</code> folder to populate this gallery. The placeholders below show where images will be displayed.</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[#1B5E20] text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] shadow-sm flex flex-col items-center justify-center card-hover cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-0"></div>
                <ImageIcon className="w-16 h-16 text-white/30 mb-4 z-10" />
                <span className="text-white/80 font-display font-semibold z-10 px-4 py-1 bg-black/20 rounded-full text-sm">
                  {img.category}
                </span>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <p className="text-white text-sm font-medium text-center">Project Image Placeholder</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
