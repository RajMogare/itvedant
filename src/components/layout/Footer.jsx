
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useAuth();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to ClassIQ newsletter successfully!');
    setEmail('');
  };

  return (
    <footer className="bg-[#F5F5F5] border-t border-[#EAEDEB] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Logo & Subscribe */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/logo-CSs2XfzI.png" 
                alt="ClassIQ Logo" 
                className="h-9 opacity-90 object-contain hidden sm:block" 
              />
              <img 
                src="/assets/m-logo-6JdjZV3d.svg" 
                alt="ClassIQ Logo" 
                className="h-9 sm:hidden block object-contain" 
              />
            </Link>

            <div className="pt-2">
              <h3 className="font-semibold text-[#3E3E3E] text-sm tracking-wide">Subscribe</h3>
              <p className="font-light text-[#88868d] text-xs mt-1 max-w-md">
                Subscribe for the latest courses, tips, and updates. Join our learning community today!
              </p>

              <form onSubmit={handleSubscribe} className="bg-white w-fit rounded-lg p-1.5 mt-5 flex items-center shadow-sm border border-[#EAEDEB]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="rounded-lg px-4 py-2 outline-none w-64 sm:w-72 text-sm text-[#373636] placeholder-[#88868d]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#C2F578] hover:bg-[#a5d064] text-[#373636] font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-black" /> : null}
                  <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: ClassIQ Business */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-[#373636] text-sm mb-4">ClassIQ Bussiness</h3>
            <ul className="text-[#373636] text-sm space-y-3 font-normal">
              <li>
                <Link to="/courses" className="hover:text-black hover:underline transition-all">Teach on ClassIQ</Link>
              </li>
              <li>
                <span className="hover:text-black cursor-pointer transition-all">Teaching Tools</span>
              </li>
              <li>
                <span className="hover:text-black cursor-pointer transition-all">ClassIQ app</span>
              </li>
              <li>
                <span className="hover:text-black cursor-pointer transition-all">Contact us</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Careers */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-[#373636] text-sm mb-4">Careers</h3>
            <ul className="text-[#373636] text-sm space-y-3 font-normal">
              <li>
                <span className="hover:text-black cursor-pointer transition-all">Blog</span>
              </li>
              <li>
                <span className="hover:text-black cursor-pointer transition-all">Affiliate</span>
              </li>
              <li>
                <span className="hover:text-black cursor-pointer transition-all">Support</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-b border-[#EAEDEB] mt-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 gap-4">
          <p className="text-[#373636] text-sm text-center sm:text-left">
            © 2024 ClassIQ. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="bg-[#C2F578] hover:bg-[#a5d064] p-2 rounded-sm text-[#373636] transition-transform hover:scale-110 flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="bg-[#C2F578] hover:bg-[#a5d064] p-2 rounded-sm text-[#373636] transition-transform hover:scale-110 flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="bg-[#C2F578] hover:bg-[#a5d064] p-2 rounded-sm text-[#373636] transition-transform hover:scale-110 flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
