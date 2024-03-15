import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/barlow';
import '@fontsource/courgette';
import '@fontsource/source-sans-pro';
import './App.css';

import Projects from './pages/Projects';

import LoginPage from './pages/LoginPage';

import Quiz from './components/quiz';

import SignupPage from './pages/SignupPage';


import Breath from './pages/Breath';
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
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Error from './pages/ErrorPage/Error';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (

    <Router>
      <div className='min-h-full'>
        <Navbar />
        <Routes>

          <Route path='*' element={<ErrorPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/LoginPage' element={<LoginPage />} />

          <Route path='/SignupPage' element={<SignupPage />} />

          <Route path="/profile" element={<Profile />} />
          <Route path='/Quiz' element={<Quiz />} />

          <Route path='/health' element={<Breath />} />
          <Route path='/health/anger' element={<Anger />} />
          <Route path='/health/anxiety' element={<Anxiety />} />
          <Route path='/health/envy' element={<Envy />} />
          <Route path='/health/fear' element={<Fear />} />
          <Route path='/health/irritation' element={<Irritation />} />
          <Route path='/health/sadness' element={<Sadness />} />
          <Route path='/health/worry' element={<Worry />} />

          <Route path='/projects' element={<Projects />} />

          <Route path='/projects/essay-global-pollution' element={<EssayGlobalPollution />} />

        </Routes>
        <Footer />
      </div>
    </Router>

  )
}

export default App
