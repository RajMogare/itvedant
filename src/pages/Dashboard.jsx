import React from 'react';
import { useAuth } from '../context/AuthContext';
import CourseGrid from '../components/sections/CourseGrid';
import { Award, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Welcome Hero Banner from Reference */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#ECEDEF] rounded-2xl pt-10 px-8 sm:px-12 flex flex-col lg:flex-row justify-between items-center border border-[#EAEDEB] shadow-sm overflow-hidden"
        >
          <div className="w-full lg:w-1/2 pb-10">
            <h1 className="font-semibold text-2xl sm:text-3xl text-[#373636]">
              Enroll in your favorite courses
            </h1>
            <p className="text-[#373636] font-normal text-sm sm:text-base mt-1">
              And Here’s Why You Should
            </p>

            {/* Badges */}
            <ul className="mt-5 space-y-2">
              <li className="bg-[#C2F578] text-black text-xs font-semibold px-3 py-1.5 rounded-md w-fit flex items-center gap-2 shadow-xs">
                <Award className="w-3.5 h-3.5" />
                <span>Certifications</span>
              </li>
              <li className="bg-[#C2F578] text-black text-xs font-semibold px-3 py-1.5 rounded-md w-fit flex items-center gap-2 shadow-xs">
                <Users className="w-3.5 h-3.5" />
                <span>Expert Instructors</span>
              </li>
              <li className="bg-[#C2F578] text-black text-xs font-semibold px-3 py-1.5 rounded-md w-fit flex items-center gap-2 shadow-xs">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Affordable Pricing</span>
              </li>
            </ul>

            {/* Accent underline title */}
            <div className="border-b-4 border-[#C2F578] pb-2 mt-8 text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-[#373636] tracking-tight">
              Learn With ClassIQ
            </div>
          </div>

          {/* Right Dashboard Vector Art */}
          <div className="w-full lg:w-1/2 flex justify-center items-end relative">
            <img 
              src="/assets/dashboard-JcnWWWB4.svg" 
              alt="Dashboard Visual" 
              className="relative z-10 max-h-72 object-contain" 
            />
          </div>
        </motion.div>

        {/* Student's Course Catalog */}
        <CourseGrid />

      </div>
    </div>
  );
}
