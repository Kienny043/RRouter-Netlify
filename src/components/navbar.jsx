import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24 sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-white">
          Kienny
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <NavLink to="/" className="hover:text-pink-400 transition">Home</NavLink>
          <NavLink to="/about" className="hover:text-pink-400 transition">About</NavLink>
          <NavLink to="/services" className="hover:text-pink-400 transition">Services</NavLink>
          <NavLink to="/projects" className="hover:text-pink-400 transition">Projects</NavLink>
        </div>

        {/* Hire Me Button */}
        <NavLink to="/contact">
          <button className="bg-gradient-to-r from-pink-500 to-purple-700 px-5 py-2 text-sm rounded-full shadow hover:scale-105 transition-transform">
            Hire Me!
          </button>
        </NavLink>
      </div>

      {/* Responsive Navigation */}
      <div className="flex md:hidden justify-center gap-4 pb-3 text-sm font-medium">
        <NavLink to="/" className="hover:text-pink-400 transition">Home</NavLink>
        <NavLink to="/about" className="hover:text-pink-400 transition">About</NavLink>
        <NavLink to="/services" className="hover:text-pink-400 transition">Services</NavLink>
        <NavLink to="/projects" className="hover:text-pink-400 transition">Projects</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
