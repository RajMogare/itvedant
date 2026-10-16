import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isLoggedIn, logout } = useAuth();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-[#F5F5F5]/90 backdrop-blur-md border-b border-[#EAEDEB] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo & Nav Links */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/assets/logo-CSs2XfzI.png" 
                alt="ClassIQ Logo" 
                className="h-9 hidden sm:block object-contain transition-transform group-hover:scale-105" 
              />
              <img 
                src="/assets/m-logo-6JdjZV3d.svg" 
                alt="ClassIQ Icon" 
                className="h-9 block sm:hidden object-contain" 
              />
            </Link>

            {/* Single "Cources" link matching reference design */}
            <nav className="hidden md:flex items-center">
              <Link
                to="/courses"
                className={`text-sm font-medium transition-colors hover:text-black ${
                  location.pathname === '/courses' ? 'text-black font-semibold' : 'text-[#595959]'
                }`}
              >
                Courses
              </Link>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link 
                  to="/dashboard"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ECEDEF] border border-[#EAEDEB] text-xs font-medium text-[#373636] hover:bg-[#e2e4e8] transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-[#C2F578] flex items-center justify-center font-bold text-xs text-black">
                    {user?.fullName ? user.fullName[0].toUpperCase() : 'U'}
                  </div>
                  <span>{user?.fullName || 'Student'}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#595959] hover:text-red-600 transition-colors px-2 py-1.5"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-white bg-black hover:bg-neutral-800 px-5 py-2 rounded-lg transition-all shadow-sm"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-medium text-white bg-black hover:bg-neutral-800 px-5 py-2 rounded-lg transition-all shadow-sm"
                >
                  SignUp
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#373636] hover:bg-[#ECEDEF] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-[#EAEDEB] bg-[#F5F5F5] px-4 pt-2 pb-6 space-y-3"
          >
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-[#373636] hover:bg-[#ECEDEF]"
            >
              Courses
            </Link>

            <div className="pt-4 border-t border-[#EAEDEB] flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-2 px-3 py-2 text-sm text-[#373636]">
                    <div className="w-7 h-7 rounded-full bg-[#C2F578] flex items-center justify-center font-bold text-xs text-black">
                      {user?.fullName ? user.fullName[0].toUpperCase() : 'U'}
                    </div>
                    <span className="font-medium">{user?.fullName || 'Student'}</span>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold text-red-600 bg-red-50 py-2.5 rounded-lg"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center text-sm font-medium text-white bg-black hover:bg-neutral-800 py-2.5 rounded-lg"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center text-sm font-medium text-white bg-black hover:bg-neutral-800 py-2.5 rounded-lg shadow-sm"
                  >
                    SignUp
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
