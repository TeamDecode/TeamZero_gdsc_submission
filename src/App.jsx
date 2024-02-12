import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/barlow';
import '@fontsource/courgette';
import '@fontsource/source-sans-pro';
import './App.css';

import Breath from './pages/Breath';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';

import LoginPage from './pages/LoginPage';


import SignupPage from './pages/SignupPage';



import Anxiety from './components/MentalHealth/MentalHealthPages/Anxiety';
import Anger from './components/MentalHealth/MentalHealthPages/Anger';
import Envy from './components/MentalHealth/MentalHealthPages/Envy';
import Fear from './components/MentalHealth/MentalHealthPages/Fear';
import Irritation from './components/MentalHealth/MentalHealthPages/Irritation';
import Sadness from './components/MentalHealth/MentalHealthPages/Sadness';
import Worry from './components/MentalHealth/MentalHealthPages/Worry';

import EssayGlobalPollution from './components/Projects/ProjectsList/EssayGlobalPollution';

import Navbar from './components/Navbar/Navbarall';



import Profile from './components/Profile';







function App() {

  return (
    <Router>
      <Navbar /> {/* This will render the Navbar on every page */}
      
      
      <Routes>

        <Route path='/LoginPage' element={<LoginPage />}/>

        
        <Route path='/SignupPage' element={<SignupPage />} />

        <Route path="/profile" element={<Profile />} />

        <Route path='/Anger' element={<Anger />} />
        <Route path='/Anxiety' element={<Anxiety />} />
        <Route path='/Envy' element={<Envy />} />
        <Route path='/Fear' element={<Fear />} />
        <Route path='/Irritation' element={<Irritation />} />
        <Route path='/Sadness' element={<Sadness />} />
        <Route path='/Worry' element={<Worry />} />
      
        <Route path='/projects' element={<Projects />} />

        <Route path='/EssayGlobalPollution' element={<EssayGlobalPollution />} />


        
        

        


        
      </Routes>
    </Router>
  )
}

export default App
