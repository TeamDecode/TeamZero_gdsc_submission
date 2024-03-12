import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.module.css";


const Navbar = () => {
 
  return (
      <nav className="bg-slate-800 shadow">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="font-bold text-xl text-blue-400 italic">
            TEAMZER0.
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/explore" className="px-3 py-2 rounded text-slate-300 text-sm duration-200 hover:bg-slate-700">Explore</Link>
            <Link to="/LoginPage" className="px-3 py-2 rounded text-slate-300 text-sm duration-200 hover:bg-slate-700">Log In</Link>
            <Link to="/SignupPage" className="px-3 py-2 bg-blue-600 text-slate-200 text-sm rounded duration-200 hover:bg-blue-700">Join for Free</Link>
            <Link to="/profile" className="px-3 py-2 bg-blue-600 text-slate-200 text-sm rounded duration-200 hover:bg-blue-700">Profile</Link>
          </div>
        </div>
      </nav>
  )
}

export default Navbar