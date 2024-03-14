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

function App() {

  return (

    <Router>
      <Navbar />
      <body className='body2'>
        <Routes>

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
      </body>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Track Order</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#"> Twitter</a></li>
              <li><a href="#"> Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </Router>

  )
}

export default App
