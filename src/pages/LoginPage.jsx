import Popup from "../components/PageAccessories/Popup"
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHippo, faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.css"

import { useGoogleLogin } from '@react-oauth/google';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [password, setPassword] = useState('');

    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
            // Here, you can handle the successful authentication,
            // such as redirecting the user or saving the session.
        },
        onError: () => console.log('Google login failed'),
        scope: 'email profile', // Adjust according to your needs
    });
 
    const validateEverything = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailRegex.test(email)!=true){
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);       
        }
        else {
            if (password !== confirmPassword) {
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                }, 3000);  
            }
            else {

            }
        }
    };

  return (
    <section>
      <div className="body">
          <div className="login">
          <div className="">
              <h2 className="login-text">
                  Login To Your account
              </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> {/* paddding */}
              <form className="space-y-6" onSubmit={validateEverything}>
                  <div>
                      <label htmlFor="email" className=" text-xl/ block text-sm font-medium leading-6 ">
                      <FontAwesomeIcon icon={faEnvelope} /> Email address
                      </label>
                      
                      <div className="mt-2">
                      
                          <input
                              id="email"
                              name="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              autoComplete="email"
                              placeholder="Type your Email ID"
                              required
                                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 italic"
                          ></input>
                      </div>
                  </div>

                  <div>
                      <div className="flex items-center justify-between">
                          <label htmlFor="password" className="block text-sm font-medium leading-6 " >
                          <FontAwesomeIcon icon={faLock} />  Password
                          </label>
                      </div>
                      <div className="mt-2">
                     
                          <input
                              id="password"
                              name="password"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Type your Password"
                              autoComplete="current-password"
                              required
                                  className=" italic border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                          />
                      </div>
                  </div>


                  <div>
                      <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          Sign in
                      </button>
                  </div>
              </form>
                  <p className="mt-4 text-sm font-light text-gray-400">
                      Haven't created an account yet? <Link to={"/SignupPage"} className=" text-white font-bold hover:underline">Sign Up Here</Link>
                  </p>
          </div>

          {showPopup && <Popup alertTitle="Invalid" alertText="Check if the email ID is valid and both the passwords are same!" />}
          </div>
      </div>

      <button onClick={() => googleLogin()} className="google-sign-in-button">
                Sign in with Google
            </button>
            {showPopup && <Popup alertTitle="Invalid" alertText="Check if the email ID is valid!" />}
       
       </section>
  )
}

export default LoginPage;
