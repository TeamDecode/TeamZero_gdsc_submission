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

function App() {

  return (
    <Router>
      <Navbar /> {/* This will render the Navbar on every page */}
      
      
      <Routes>
        
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />

        <Route path='./Mentalhealth/MeantalHealthPages/Anger' element={<Anger />} />
        <Route path='/mental-health/anxiety' element={<Anxiety />} />
        <Route path='/mental-health/envy' element={<Envy />} />
        <Route path='/mental-health/fear' element={<Fear />} />
        <Route path='/mental-health/irritation' element={<Irritation />} />
        <Route path='/mental-health/sadness' element={<Sadness />} />
        <Route path='/mental-health/worry' element={<Worry />} />
      
        <Route path='/projects' element={<Projects />} />

        <Route path='/projects/essay-global-pollution' element={<EssayGlobalPollution />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
