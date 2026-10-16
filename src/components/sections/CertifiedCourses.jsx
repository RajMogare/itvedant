import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BarChart3, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CertifiedCourses() {
  const tracks = [
    {
      title: "Web Development",
      icon: Code,
      desc: "Master frontend, backend, APIs, and modern cloud deployment architectures."
    },
    {
      title: "Data Science",
      icon: BarChart3,
      desc: "Analyze big data, build machine learning models, and create predictive pipelines."
    },
    {
      title: "App Development",
      icon: Smartphone,
      desc: "Design and build cross-platform mobile experiences for iOS and Android."
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-2xl sm:text-3xl text-[#373636] font-light">
            Certified Courses for <span className="font-bold">Professionals</span>
          </p>
          <p className="text-sm text-[#686868] mt-2 max-w-md mx-auto">
            Practical, industry-recognized certificates designed to accelerate your technical career.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-[#ECEDEF] border border-[#EAEDEB] w-full max-w-sm p-8 flex flex-col items-center rounded-2xl shadow-sm hover:shadow-md transition-all text-center"
              >
                {/* Circular Icon Container */}
                <div className="w-16 h-16 shadow-sm rounded-full bg-[#F5F5F5] flex justify-center items-center text-[#373636] mb-5 border border-white">
                  <Icon className="w-7 h-7 text-[#373636]" />
                </div>

                <h2 className="font-semibold text-lg sm:text-xl text-[#373636]">
                  {track.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#686868] mt-2 mb-6 leading-relaxed">
                  {track.desc}
                </p>

                <Link
                  to="/courses"
                  className="mt-auto bg-[#C2F578] hover:bg-[#a5d064] rounded-lg px-6 py-2.5 text-xs font-semibold text-[#373636] shadow-sm transition-all transform hover:scale-105 active:scale-95 inline-flex items-center gap-1.5"
                >
                  <span>View Course</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
