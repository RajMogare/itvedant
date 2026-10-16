import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('classiq_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const login = (email, password) => {
    if (!email || !password) {
      showToast('Please enter both email and password', 'error');
      return false;
    }
    const userData = { email, fullName: email.split('@')[0] };
    setUser(userData);
    localStorage.setItem('classiq_user', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    showToast('Logged in successfully!');
    return true;
  };

  const signup = (fullName, email, password) => {
    if (!fullName || !email || !password) {
      showToast('Please fill in all registration fields', 'error');
      return false;
    }
    const userData = { fullName, email };
    setUser(userData);
    localStorage.setItem('classiq_user', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    showToast('User Created Successfully!');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('classiq_user');
    localStorage.removeItem('isLoggedIn');
    showToast('Logged out successfully');
  };

  const enrollCourse = (courseTitle) => {
    showToast(`Successfully enrolled in "${courseTitle}"!`);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, signup, logout, enrollCourse, showToast }}>
      {children}
      {toast && (
        <div 
          className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-xl transition-all duration-300 transform translate-y-0 ${
            toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-[#373636] text-[#C2F578] border border-[#C2F578]/30'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#C2F578] animate-ping" />
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
