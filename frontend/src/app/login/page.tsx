import React from 'react';
import Link from 'next/link';
import { Mail, Lock, Github, Twitter, Heart, Sparkles, Cloud, Star } from 'lucide-react';

export default function LoginPage() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-4 relative overflow-hidden"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 text-white/40 animate-pulse">
        <Cloud size={80} />
      </div>
      <div className="absolute top-20 right-20 text-pink-300/40 animate-bounce">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-20 left-20 text-purple-300/40 animate-pulse">
        <Star size={50} />
      </div>
      <div className="absolute bottom-10 right-10 text-pink-400/30 animate-bounce cursor-pointer">
        <Heart size={70} />
      </div>
      
      {/* Large decorative circles */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-md p-8 relative z-10 border border-white/60">
        
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-tr from-pink-300 to-purple-400 p-3 rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <Heart className="text-white w-8 h-8" fill="currentColor" />
          </div>
        </div>
        
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">Welcome Back!</h1>
        <p className="text-center text-gray-500 mb-8 font-medium">Log in to find your perfect plushie companion. 🧸</p>

        {/* Tabs */}
        <div className="flex bg-gray-100/80 p-1 rounded-2xl mb-8">
          <Link href="/login" className="flex-1 py-2.5 text-center rounded-xl bg-white text-pink-500 font-bold shadow-sm transition-all">
            Login
          </Link>
          <Link href="/signup" className="flex-1 py-2.5 text-center rounded-xl text-gray-500 hover:text-pink-400 font-medium transition-all">
            Sign Up
          </Link>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-pink-300" />
            </div>
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-white/50 border-2 border-pink-100 rounded-2xl pl-11 pr-4 py-3 text-gray-700 outline-none focus:border-pink-400 focus:bg-white transition-all placeholder:text-gray-400"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-pink-300" />
            </div>
            <input 
              type="password" 
              placeholder="Password"
              className="w-full bg-white/50 border-2 border-pink-100 rounded-2xl pl-11 pr-4 py-3 text-gray-700 outline-none focus:border-pink-400 focus:bg-white transition-all placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm px-1 pt-1">
            <label className="flex items-center text-gray-500 hover:text-pink-500 cursor-pointer transition-colors">
              <input type="checkbox" className="mr-2 rounded text-pink-400 focus:ring-pink-400 border-pink-200 accent-pink-400" />
              Remember me
            </label>
            <a href="#" className="font-semibold text-pink-400 hover:text-pink-500 transition-colors">Forgot Password?</a>
          </div>

          <button 
            type="button"
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transition-all transform hover:-translate-y-0.5 mt-6"
          >
            Log In
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-gray-400 text-sm font-medium">Or continue with</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <div className="mt-6 flex gap-4">
          <button type="button" className="flex-1 bg-white hover:bg-pink-50 text-gray-700 border-2 border-pink-100 font-semibold py-2.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all group">
            <Github className="w-5 h-5 text-gray-600 group-hover:text-pink-500 transition-colors" />
            GitHub
          </button>
          <button type="button" className="flex-1 bg-white hover:bg-pink-50 text-gray-700 border-2 border-pink-100 font-semibold py-2.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all group">
            <Twitter className="w-5 h-5 text-blue-400 group-hover:text-pink-500 transition-colors" />
            Twitter
          </button>
        </div>
        
      </div>
    </div>
  );
}
