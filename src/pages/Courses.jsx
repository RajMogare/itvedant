import React, { useState } from 'react';
import CourseGrid from '../components/sections/CourseGrid';
import { Search } from 'lucide-react';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web Development', 'Data Science', 'UI/UX Design', 'Programming'];

  return (
    <div className="bg-[#F5F5F5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#373636]">
            Explore All Courses
          </h1>
          <p className="text-sm text-[#686868] mt-2">
            Broaden your horizons with comprehensive, project-driven curriculums led by seasoned industry experts.
          </p>

          {/* Search bar */}
          <div className="relative mt-6 max-w-md mx-auto">
            <Search className="w-4 h-4 text-[#88868d] absolute left-4 top-3.5" />
            <input 
              type="text" 
              placeholder="Search by topic, instructor, or skill..." 
              className="w-full bg-[#ECEDEF] border border-[#EAEDEB] rounded-xl pl-11 pr-4 py-2.5 text-sm text-[#373636] placeholder-[#88868d] outline-none focus:ring-2 focus:ring-[#C2F578]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#C2F578] text-[#373636] font-semibold shadow-sm'
                    : 'bg-[#ECEDEF] text-[#686868] hover:bg-[#e2e4e8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <CourseGrid />

      </div>
    </div>
  );
}
