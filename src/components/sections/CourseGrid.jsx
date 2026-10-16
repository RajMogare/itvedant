import React, { useState } from 'react';
import { coursesData } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import { ArrowUpRight, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseGrid({ limit }) {
  const { enrollCourse } = useAuth();
  const [enrolledMap, setEnrolledMap] = useState({});

  const displayedCourses = limit ? coursesData.slice(0, limit) : coursesData;

  const handleEnroll = (course) => {
    enrollCourse(course.title);
    setEnrolledMap((prev) => ({ ...prev, [course.id]: true }));
  };

  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <h2 className="font-semibold text-2xl sm:text-3xl text-[#3E3E3E] tracking-tight">
              All Courses
            </h2>
            <div className="w-3.5 h-3.5 rounded-full bg-[#C2F578] animate-pulse" />
          </div>

          <p className="text-xs sm:text-sm text-[#686868] hidden sm:block">
            Showing top curated masterclasses
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedCourses.map((course, idx) => {
            const isEnrolled = enrolledMap[course.id];
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#ECEDEF] rounded-xl p-3 border border-[#EAEDEB] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="w-full h-44 overflow-hidden rounded-lg bg-white relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#C2F578] fill-[#C2F578]" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-3">
                    <h3 className="text-[#373636] font-semibold text-base line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-[#686868] text-xs mt-1.5 line-clamp-2 h-12 leading-relaxed">
                      {course.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Price & Enroll CTA */}
                <div className="flex justify-between items-center mt-5 pt-3 border-t border-[#dfdfdf]">
                  <div>
                    <span className="text-xs text-[#686868] block">Tuition</span>
                    <span className="text-[#373636] font-bold text-lg">
                      ${course.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleEnroll(course)}
                    className={`font-semibold text-xs px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${
                      isEnrolled 
                        ? 'bg-[#373636] text-[#C2F578]' 
                        : 'bg-[#C2F578] text-[#373636] hover:bg-[#a5d064]'
                    }`}
                  >
                    {isEnrolled ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Enrolled</span>
                      </>
                    ) : (
                      <>
                        <span>Enroll</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
