import Popup from "../components/PageAccessories/Popup"
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHippo, faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.css"

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [showEmailPopup, setEmailShowPopup] = useState(false);
    const [showPasswordPopup, setshowPasswordPopup] = useState(false);
    const [showTermsPopup, setShowTermsPopup] = useState(false);
    const [terms, setTerms] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEverything = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email) != true || email == '') {
            setEmailShowPopup(true);
            setTimeout(() => {
                setEmailShowPopup(false);
            }, 3000);
        }
        else {
            if (password !== confirmPassword || password == '' || confirmPassword == '') {
                setshowPasswordPopup(true);
                setTimeout(() => {
                    setshowPasswordPopup(false);
                }, 3000);
            }
            else {
                if (!terms) {
                    setShowTermsPopup(true);
                    setTimeout(() => {
                        setShowTermsPopup(false);
                    }, 3000);
                }
                else {

                }
            }
        }
    };


    

    return (
        
        <section>
          
            <div className="body">
                <div className="login">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="login-text">
                            Create an account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className=" text-xl/ block text-m font-medium leading-6 "><FontAwesomeIcon icon={faEnvelope} /> Your email</label>
                                <input type="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className=" text-xl/ block text-m font-medium leading-6 ">
                                <FontAwesomeIcon icon={faLock} /> Password</label>
                                <input type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className=" text-xl/ block text-m font-medium leading-6 "><FontAwesomeIcon icon={faLock} /> Confirm password</label>
                                <input type="confirm-password" value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" onClick={() => setTerms(!terms)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button
                                type="submit" onClick={validateEverything}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign up
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to={"/LoginPage"} className=" text-white font-bold hover:underline">Login here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {showEmailPopup && <Popup alertTitle="Invalid Email ID" alertText="Please check if the email ID you typed is valid." />}
            {showPasswordPopup && <Popup alertTitle="Password Mismatch" alertText="Please check if you have typed different password while confirming it." />}
            {showEmailPopup && <Popup alertTitle="Terms and Conditions not agreed" alertText="Please accept the Terms and Conditions by clicking on the box." />}
        </section>
    )
}

export default SignupPage
