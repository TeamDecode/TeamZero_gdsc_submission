import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.module.css";


const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  return (
    <nav className="bg-slate-800 shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-blue-400 italic">
          TEAMZER0.
        </Link>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link to="/explore" className="px-3 py-2 rounded text-slate-300 text-sm duration-200 hover:bg-slate-700">Explore</Link>
          <Link to="/LoginPage" className="px-3 py-2 rounded text-slate-300 text-sm duration-200 hover:bg-slate-700">Log In</Link>
          <Link to="/SignupPage" className="px-3 py-2 bg-blue-600 text-slate-200 text-sm rounded duration-200 hover:bg-blue-700">Join for Free</Link>
          <Link to="/profile" className="px-3 py-2 bg-blue-600 text-slate-200 text-sm rounded duration-200 hover:bg-blue-700">Profile</Link>
        </div>
        <div className='md:hidden hover:rotate-90 duration-200 select-none' onClick={() => setNavBar(!navBar)}>
          <span className="material-symbols-outlined">
            menu
          </span>
        </div>
      </div>
      {navBar && (
        <div className='md:hidden flex flex-col z-30 gap-2 bg-slate-800 px-4 py-4 rounded-md absolute right-5 text-center'>
          <Link to="/explore" className="px-3 py-2 rounded text-slate-300 text-sm duration-200 hover:bg-slate-700">Explore</Link>
          <Link to="/LoginPage" className="px-3 py-2 rounded text-slate-300 text-sm duration-200 hover:bg-slate-700">Log In</Link>
          <Link to="/SignupPage" className="px-3 py-2 bg-blue-600 text-slate-200 text-sm rounded duration-200 hover:bg-blue-700">Join for Free</Link>
          <Link to="/profile" className="px-3 py-2 bg-blue-600 text-slate-200 text-sm rounded duration-200 hover:bg-blue-700">Profile</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar