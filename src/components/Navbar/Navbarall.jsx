import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  // State for managing dropdown visibility
  const [isMentalHealthDropdownOpen, setIsMentalHealthDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleMentalHealthDropdown = () => {
    setIsMentalHealthDropdownOpen(!isMentalHealthDropdownOpen);
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
         <Link to="/" className="font-bold text-xl text-blue-600">
           TEAMZERO
         </Link>
       <div className="flex items-center space-x-4">
         <Link to="/explore" className="px-3 py-2 rounded text-gray-700 text-sm hover:bg-gray-100">Explore</Link>
      {/* ... other links ... */}
          <Link to="/login" className="text-gray-700 text-sm hover:underline">Log In</Link>
      <Link to="/signup" className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">Join for Free</Link>
    </div>
  </div>
</nav>

      {/* My Learning Section */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-4xl font-bold">My Learning</h1>
          <div className="flex mt-4 space-x-4 text-lg relative">
            {/* Mental Health Dropdown Button */}
            <div className="relative inline-block text-left">
              <button onClick={toggleMentalHealthDropdown} className="rounded-md bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-400">
               Mental health
              </button>
              {/* Dropdown Menu */}
              {isMentalHealthDropdownOpen && (
                <div className={`origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isMentalHealthDropdownOpen ? 'block' : 'hidden'}`}>
                <div className="py-1">
                  {/* These are your dropdown links, add as many as you have topics */}
                  <Link to="./Mentalhealth/MeantalHealthPages/Anger" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Anger</Link>
                  <Link to="./Mentalhealth/MeantalHealthPages/Anxiety" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Anxiety</Link>
                  <Link to="./Mentalhealth/MeantalHealthPages/Sadness" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sadness</Link>
                  {/* ... other links ... */}
                </div>
              </div>
              )}
            </div>
            {/* Other Links */}
            
            <Link to="/my-lists" className="hover:underline">Adrenaline Quiz</Link>
            <Link to="/wishlist" className="hover:underline">Work Calender</Link>
            <Link to="/archived" className="hover:underline">Projects</Link>
            <Link to="/learning-tools" className="hover:underline">Adrenaline Leaderboard</Link>
            {/* ... more links */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
