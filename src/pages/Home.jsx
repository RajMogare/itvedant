import React from 'react';
import Hero from '../components/sections/Hero';
import Partners from '../components/sections/Partners';
import CertifiedCourses from '../components/sections/CertifiedCourses';
import SolutionSection from '../components/sections/SolutionSection';
import CourseGrid from '../components/sections/CourseGrid';

export default function Home() {
  return (
    <div className="bg-[#F5F5F5]">
      <Hero />
      <Partners />
      <CertifiedCourses />
      <SolutionSection />
      <CourseGrid />
    </div>
  );
}
