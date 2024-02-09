import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  // State for managing dropdown visibility
  const [isMentalHealthDropdownOpen, setIsMentalHealthDropdownOpen] = useState(false)
  const [isAdrenalineQuizDropdownOpen, setIsAdrenalineQuizDropdownOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const [isAdrenalineLeaderboardDropdownOpen, setIsAdrenalineLeaderboardDropdownOpen] = useState(false)
  const [isDiscussionForumDropdownOpen, setIsDiscussionForumDropdownOpen] = useState(false);
  const [isDiscussionGroupDropdownOpen, setIsDiscussionGroupDropdownOpen] = useState(false);
  // Function to toggle the dropdown visibility
  const toggleMentalHealthDropdown = () => {
    setIsMentalHealthDropdownOpen(!isMentalHealthDropdownOpen)
  }

  const toggleAdrenalineQuizDropdown = () => {
    setIsAdrenalineQuizDropdownOpen(!isAdrenalineQuizDropdownOpen)
  }

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen)
  }

  const toggleAdrenalineLeaderboardDropdown = () => {
    setIsAdrenalineLeaderboardDropdownOpen(!isAdrenalineLeaderboardDropdownOpen)

  }

  const toggleDiscussionForumDropdown = () => {
    setIsDiscussionForumDropdownOpen(!isDiscussionForumDropdownOpen);
  };
  
  const toggleDiscussionGroupDropdown = () => {
    setIsDiscussionGroupDropdownOpen(!isDiscussionGroupDropdownOpen);
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

            {/* Adrenaline Quiz Dropdown Button */}
            <div className="relative inline-block text-left">
              <button onClick={toggleAdrenalineQuizDropdown} className="rounded-md bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-400">
                Adrenaline Quiz
              </button>
              {/* Dropdown Menu */}
              {isAdrenalineQuizDropdownOpen && (
                <div className={`origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isAdrenalineQuizDropdownOpen ? 'block' : 'hidden'}`}>
                  <div className="py-1">
                    {/* These are your dropdown links, add as many as you have topics */}
                    <Link to="/adrenaline-quiz/quiz1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Quiz 1</Link>
                    <Link to="/adrenaline-quiz/quiz2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Quiz 2</Link>
                    <Link to="/adrenaline-quiz/quiz3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Quiz 3</Link>
                    {/* ... other links ... */}
                  </div>
                </div>
              )}
            </div>

            {/* Projects Dropdown Button */}
            <div className="relative inline-block text-left">
              <button onClick={toggleProjectsDropdown} className="rounded-md bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-400">
                Projects
              </button>
              {/* Dropdown Menu */}
              {isProjectsDropdownOpen && (
                <div className={`origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isProjectsDropdownOpen ? 'block' : 'hidden'}`}>
                  <div className="py-1">
                    {/* These are your dropdown links, add as many as you have topics */}
                    <Link to="/projects/project1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Project 1</Link>
                    <Link to="/projects/project2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Project 2</Link>
                    <Link to="/projects/project3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Project 3</Link>
                    {/* ... other links ... */}
                  </div>
                </div>
              )}
            </div>

            <div className="relative inline-block text-left">
              <button onClick={toggleAdrenalineLeaderboardDropdown} className="rounded-md bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-400">
                Adrenaline Leaderboard
              </button>
              {/* Dropdown Menu */}
              {isAdrenalineLeaderboardDropdownOpen && (
                <div className={`origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isAdrenalineLeaderboardDropdownOpen ? 'block' : 'hidden'}`}>
                  <div className="py-1">
                    {/* These are your dropdown links, add as many as you have topics */}
                    <Link to="/adrenaline-Leaderboard/Overall" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Overall</Link>
                    <Link to="/adrenaline-Leaderboard/C++" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">C++</Link>
                    <Link to="/adrenaline-Leaderboard/Mathematics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mathematics</Link>
                    <Link to="/adrenaline-Leaderboard/Physics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Physics</Link>
                    <Link to="/adrenaline-Leaderboard/Chemistry" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Physics</Link>
                    <Link to="/adrenaline-Leaderboard/Java" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Chemistry</Link>
                    <Link to="/adrenaline-Leaderboard/Strength-of-Material" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Strength-of-Material</Link>
                    
                    {/* ... other links ... */}
                  </div>
                </div>
              )}
            </div>

            {/* Discussion Forum Dropdown Button */}
           <div className="relative inline-block text-left">
             <button onClick={toggleDiscussionForumDropdown} className="rounded-md bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-400">
                Discussion Forum
             </button>
            {/* Dropdown Menu */}
             {isDiscussionForumDropdownOpen && (
                <div className={`origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isDiscussionForumDropdownOpen ? 'block' : 'hidden'}`}>
                <div className="py-1">
                {/* These are your dropdown links, add as many as you have topics */}
                 <Link to="/discussion-forum/topic1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Topic 1</Link>
                 <Link to="/discussion-forum/topic2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Topic 2</Link>
          {/* ... other links ... */}
               </div>
             </div>
              )}
            </div>

              {/* Discussion Group Dropdown Button */}
             <div className="relative inline-block text-left">
                <button onClick={toggleDiscussionGroupDropdown} className="rounded-md bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-400">
                  Discussion Group
                </button>
               {/* Dropdown Menu */}
               {isDiscussionGroupDropdownOpen && (
                 <div className={`origin-top-right absolute left-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isDiscussionGroupDropdownOpen ? 'block' : 'hidden'}`}>
               <div className="py-1">
                {/* These are your dropdown links, add as many as you have topics */}
                <Link to={`./Discussiongroup/GroupPage1`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Group 1</Link>
                <Link to="/discussion-group/group2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Group 2</Link>
                {/* ... other links ... */}
              </div>
            </div>
            )}
           </div>

            

            

            {/* Other Links */}
            
            {/* ... more links */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar