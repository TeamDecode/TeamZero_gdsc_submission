import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '@fontsource/barlow';
import '@fontsource/courgette';
import '@fontsource/source-sans-pro';
import './App.css';
import Projects from './pages/Projects';
import LoginPage from './pages/LoginPage';
import Quiz from './components/quiz';
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
    // Correctly wrap the entire Router component with GoogleOAuthProvider
    <GoogleOAuthProvider clientId="90070660946-ilqn28d8taeu2md03729kcs0k0b22397.apps.googleusercontent.com">
      <Router>
        <Navbar /> {/* This will render the Navbar on every page */}
        <div className='body2'> {/* Changed from <body> to <div> for valid HTML structure */}
          <Routes>
            <Route path='/LoginPage' element={<LoginPage />} />
            <Route path='/SignupPage' element={<SignupPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/Quiz' element={<Quiz />} />
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
        </div>
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
    </GoogleOAuthProvider>
  );
}

export default App;
