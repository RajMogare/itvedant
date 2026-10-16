import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (data) => {
    const success = login(data.email, data.password);
    if (success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 bg-[#F5F5F5]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="bg-[#ECECEE] w-full max-w-[380px] p-6 sm:p-10 rounded-2xl shadow-sm border border-[#E0E0E2]"
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-black text-center mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Field 1: Enter Your Email */}
          <div>
            <input
              type="email"
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              placeholder="Enter Your Email"
              aria-invalid={errors.email ? 'true' : 'false'}
              className={`w-full bg-[#ECECEE] border rounded-lg px-4 py-2.5 text-sm font-semibold text-black placeholder:text-black/85 placeholder:font-semibold outline-none transition-all ${
                errors.email 
                  ? 'border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20' 
                  : 'border-black focus:ring-2 focus:ring-[#C2F578]'
              }`}
            />
            {errors.email && (
              <p className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5 font-medium animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          {/* Field 2: Enter Your Password */}
          <div>
            <input
              type="password"
              {...register('password', {
                required: 'Please enter your password',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
              placeholder="Enter Your Password"
              aria-invalid={errors.password ? 'true' : 'false'}
              className={`w-full bg-[#ECECEE] border rounded-lg px-4 py-2.5 text-sm font-semibold text-black placeholder:text-black/85 placeholder:font-semibold outline-none transition-all ${
                errors.password 
                  ? 'border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20' 
                  : 'border-black focus:ring-2 focus:ring-[#C2F578]'
              }`}
            />
            {errors.password && (
              <p className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5 font-medium animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.password.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#C2F578] hover:bg-[#a5d064] text-black font-semibold text-sm py-3 rounded-lg shadow-sm transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              {isSubmitting ? 'Logging In...' : 'Login'}
            </button>
          </div>
        </form>

        {/* Bottom Switch Link */}
        <p className="text-center text-xs text-[#222222] font-medium mt-8">
          Don't have an account?{' '}
          <Link to="/signup" className="text-black font-semibold hover:underline">
            SignUp
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
