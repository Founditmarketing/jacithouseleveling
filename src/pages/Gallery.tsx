import React, { useState } from 'react';
import { ArrowRight, Maximize, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const galleryItems = [
  { src: "/jacitgallery.jpeg", title: "Wall Lifting", desc: "Hydraulic lifting of exterior brick foundation." },
  { src: "/jacitgallery2.jpeg", title: "Exterior Excavation", desc: "Foundation excavation on residential structure." },
  { src: "/jacitgallery3.jpeg", title: "Interior Leveling", desc: "Completed interior with newly leveled floors." },
  { src: "/jacitgallery4.jpeg", title: "Concrete Supports", desc: "Deep concrete block installation for stability." },
  { src: "/jacitgallery5.png", title: "Subfloor Installation", desc: "Installing new structural subfloors." },
  { src: "/jacitgallery6.png", title: "Joist Replacement", desc: "Replacing damaged floor joists." },
  { src: "/jacitgallery7.png", title: "Framework Repair", desc: "Securing interior joist framework." },
  { src: "/jacitimage.jpg", title: "Foundation Reinforcement", desc: "Expert assessment and repair of structural damage." },
  { src: "/presspiers.png", title: "Press Piers System", desc: "Heavy duty steel and concrete press pier installation." },
];

export default function Gallery({ isLoading }: { isLoading?: boolean }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-jac-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/jacitgallery.jpeg"
            alt="Jac-It Gallery Background"
            className="w-full h-full object-cover object-center grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-jac-charcoal/80 mix-blend-multiply"></div>
          {/* Subtle Green Overlay */}
          <div className="absolute inset-0 bg-jac-green/20 mix-blend-overlay"></div>

          {/* White Bottom Corner Design */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {/* Sub Layer 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 1.0 : 0.3 }}
              className="absolute inset-0 bg-white/20" style={{ clipPath: 'polygon(calc(100% - 38vw) 100%, 100% calc(100% - 38vw), 100% 100%)' }}
            ></motion.div>

            {/* Sub Layer 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
              className="absolute inset-0 bg-white/40" style={{ clipPath: 'polygon(calc(100% - 34vw) 100%, 100% calc(100% - 34vw), 100% 100%)' }}
            ></motion.div>

            {/* Solid White Corner */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
              className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(calc(100% - 30vw) 100%, 100% calc(100% - 30vw), 100% 100%)' }}
            ></motion.div>
          </div>
        </div>

        <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10 text-left">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.8 : 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-white uppercase tracking-tight leading-[0.9] mb-4"
          >
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-jac-lime to-jac-green">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: isLoading ? 0.9 : 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl leading-relaxed"
          >
            Take a look at our professional foundation repair, house leveling, and structural restoration projects across East Texas.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white p-2 md:p-4 border-b border-gray-200 -mt-px relative z-20">
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setLightboxIndex(idx)} 
                className="group cursor-pointer relative overflow-hidden aspect-[4/3] bg-gray-100 rounded-sm"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-jac-charcoal/90 via-jac-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Maximize className="w-8 h-8 text-jac-lime mb-4 scale-75 group-hover:scale-100 transition-transform duration-300 delay-100" />
                  <h3 className="text-white font-subdisplay font-bold text-2xl uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-jac-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-jac-green/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Contact us today for a free evaluation and professional structural assessment.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto bg-jac-lime text-jac-charcoal px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:18776552248" className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-jac-charcoal transition-colors text-center">
              1-877-65-JACIT
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer group/lightbox" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-jac-lime transition-colors z-50">
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/50 hover:text-white hover:scale-110 transition-all z-50 opacity-100 md:opacity-0 md:group-hover/lightbox:opacity-100"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1); }}
          >
            <ArrowRight className="w-8 h-8 md:w-12 md:h-12 rotate-180" />
          </button>

          <img src={galleryItems[lightboxIndex].src} className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl" onClick={(e) => e.stopPropagation()} />

          <button 
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/50 hover:text-white hover:scale-110 transition-all z-50 opacity-100 md:opacity-0 md:group-hover/lightbox:opacity-100"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(prev => prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0); }}
          >
            <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
            <p className="text-white/70 font-medium tracking-wide">
              {lightboxIndex + 1} / {galleryItems.length}
            </p>
            <h3 className="text-white font-bold text-xl uppercase mt-2">{galleryItems[lightboxIndex].title}</h3>
          </div>
        </div>
      )}
    </>
  );
}
