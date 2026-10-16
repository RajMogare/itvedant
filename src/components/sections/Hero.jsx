import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-between font-poppins pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          
          {/* Left Column: Headline and CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-5 sm:space-y-6 text-left"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-[58px] text-[#222222] leading-[1.2] sm:leading-[1.18] font-normal tracking-tight">
              <span className="block font-light text-[#2b2b2b]">Empower Your</span>
              <span className="block font-light text-[#2b2b2b] mt-1">Learning Journey</span>
              <span className="block font-light text-[#2b2b2b] mt-1">
                with{' '}
                <span className="font-bold text-black relative inline-block">
                  ClassIQ
                  {/* Lime-green hand-drawn curved underline doodle */}
                  <svg 
                    className="absolute left-0 -bottom-1.5 sm:-bottom-2 w-full h-2.5 sm:h-3" 
                    viewBox="0 0 262 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M2 13C65.5 3 195.5 -2 260 9" 
                      stroke="#C2F578" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="text-[#777777] text-xs sm:text-[13px] sm:leading-relaxed max-w-lg font-normal pt-1">
              Unlock a world of knowledge and skills with our innovative online courses, expert instructors, and interactive learning tools.
            </p>

            <div className="pt-2">
              <Link
                to="/courses"
                className="inline-block font-semibold text-[#1a1a1a] text-sm sm:text-base px-6 sm:px-7 py-3 rounded-xl bg-[#C2F578] hover:bg-[#a5d064] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                Explore Courses
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Graphic with glow & decorative doodles */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg flex items-center justify-center">
              
              {/* Radial gradient glow in background */}
              <img 
                src="/assets/gradient-BYEXk_2H.png" 
                alt="Background glow" 
                className="opacity-70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none object-contain pointer-events-none select-none -z-10" 
              />
              
              {/* Curly arrow doodle on left side */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute left-0 sm:left-2 top-[28%] z-20 pointer-events-none select-none"
              >
                <svg 
                  className="w-8 sm:w-10 h-8 sm:h-10 text-[#373636]" 
                  viewBox="0 0 50 50" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M 16 10 C 10 18, 12 28, 22 25 C 29 23, 27 15, 20 17 C 14 19, 14 30, 26 34 C 31 36, 38 37, 44 38" />
                  <path d="M 38 32 L 44 38 L 37 42" />
                </svg>
              </motion.div>

              {/* Purple badge on upper-right */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-4 sm:right-12 top-6 sm:top-10 z-20 pointer-events-none select-none"
              >
                <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg border-2 border-[#8A2BE2] bg-white/70 backdrop-blur-xs flex items-center justify-center p-1 shadow-sm rotate-6">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#8A2BE2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21V3" />
                    <path d="M7 6c1.5 2 3.5 3 5 3" />
                    <path d="M17 6c-1.5 2-3.5 3-5 3" />
                    <path d="M6 11c2 1.5 4 2 6 2" />
                    <path d="M18 11c-2 1.5-4 2-6 2" />
                    <path d="M7 16c1.5 1 3.5 1.5 5 1.5" />
                    <path d="M17 16c-1.5 1-3.5 1.5-5 1.5" />
                  </svg>
                </div>
              </motion.div>

              {/* White pill badge behind character */}
              <div className="absolute bottom-14 sm:bottom-20 left-4 sm:left-10 right-2 sm:right-4 z-0 flex justify-center pointer-events-none">
                <div className="bg-white/95 backdrop-blur-sm shadow-md rounded-2xl px-6 sm:px-10 py-3 sm:py-5 border border-[#EAEDEB] flex items-center justify-end w-full max-w-xs sm:max-w-sm">
                  <span className="font-semibold text-sm sm:text-lg text-[#222222] tracking-wide">5000+ Lessons</span>
                </div>
              </div>

              {/* Foreground Waving Avatar Hero Image */}
              <motion.img 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                src="/assets/hero_img.png" 
                alt="ClassIQ Learning Hero" 
                className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] object-contain drop-shadow-sm" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

