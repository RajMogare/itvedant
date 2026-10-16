import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, UserCheck, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SolutionSection() {
  const points = [
    { title: "Flexible Learning", icon: BookOpen },
    { title: "Expert Instructors", icon: UserCheck },
    { title: "Interactive Community", icon: Users }
  ];

  return (
    <section className="py-20 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          
          {/* Left: Illustration Card Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 h-[420px] bg-[#ECEDEF] rounded-2xl relative flex justify-center items-center overflow-hidden border border-[#EAEDEB] shadow-sm"
          >
            {/* Ambient Lime Glow Backdrop */}
            <div className="absolute w-64 h-64 blur-3xl opacity-40 rounded-full bg-[#C2F578] -top-10 z-0 pointer-events-none" />
            
            {/* Center card platform */}
            <div className="bg-[#f5f5f5] shadow-lg w-[75%] h-[60%] rounded-xl z-10 flex items-center justify-center p-4 border border-white">
              <img 
                src="/assets/feature_img-efng2f6_.svg" 
                alt="ClassIQ Platform Solution" 
                className="h-64 object-contain z-20 transition-transform duration-500 hover:scale-105" 
              />
            </div>
          </motion.div>

          {/* Right: Text and Key Points */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-6/12 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#373636] tracking-tight">
              All-In-One Solution
            </h2>
            <p className="text-[#595959] text-sm sm:text-base leading-relaxed">
              We provide the tools, support, and community you need to master real-world skills and achieve career excellence at your own pace.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <motion.div 
                    key={pt.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#C2F578]/40 border border-[#C2F578] flex items-center justify-center text-[#373636]">
                      <Icon className="w-5 h-5 text-[#373636]" />
                    </div>
                    <h3 className="text-[#373636] text-lg sm:text-xl font-medium">
                      {pt.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2.5 font-semibold text-[#3E3E3E] text-sm bg-[#C2F578] hover:bg-[#a5d064] px-6 py-3.5 rounded-lg shadow-sm transition-all transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4 text-[#3E3E3E]" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
