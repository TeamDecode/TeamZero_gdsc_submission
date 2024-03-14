import { Link } from 'react-router-dom';
import styles from "./Home.module.css";
import Typewriter from 'typewriter-effect';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { getUrl } from '/src/util.js';


const Home = () => {

    return (
        <div>
            <div className='flex flex-row m-8 text-xl md:text-2xl italic font-title'><div>It&apos;s Time to</div>&nbsp;<Typewriter
                options={{
                    strings: ['Discover Yourself...', 'Develop Yourself...', 'Transform Yourself...'],
                    autoStart: true,
                    loop: true,
                }}
            />
            </div>
            <div className='m-8'>
                <Carousel infiniteLoop autoPlay interval={3000}>
                    <Link to={"/health"}><div>
                        <img src={getUrl("teamzero-home1.png")} />
                        <p className="legend">Transform Your Mental Well-being</p>
                    </div></Link>
                    <Link to={"/projects"}><div>
                        <img src={getUrl("teamzero-home2.png")} />
                        <p className="legend">Your next project is waiting for you!</p>
                    </div></Link>
                    
                </Carousel>
            </div>
            <div className="container px-3 py-4 w-full lg:w-3/4 xl:w-2/3 mx-auto">
                <h3 className="text-2xl italic mt-6">What are you planning to do now?</h3>

                <div className='my-7 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25'>
                    <Link to={"/breath"}>
                        <div className='bg-slate-900 p-5 rounded-[10px] border duration-200 border-slate-700 hover:border hover:border-slate-500 mx-auto'>
                            <button className='relative float-right'>Move</button><h2 className='text-blue-300 align-middle flex gap-2 mb-2'><span className="material-symbols-outlined">
                                health_and_safety
                            </span>
                                <div className='text-lg font-title'>Transform Your Mental Well-being</div></h2>
                            <p>Struggling with anger, anxiety, envy, fear, irritation, sadness, or worry? </p>
                            <p>Enhance your mental health with TEAMZER0. Start now for a better state of mind!</p>
                        </div>
                    </Link>
                </div>

                <div className='my-7 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25'>
                    <Link to={"/quiz"}>
                        <div className='bg-slate-900 p-5 rounded-[10px] border duration-200 border-slate-700 hover:border hover:border-slate-500 mx-auto'>
                            <button className='relative float-right'>Move</button><h2 className='text-blue-300 align-middle flex gap-2 mb-2'><span className="material-symbols-outlined">
                                quiz
                            </span>
                                <div className='text-lg font-title'>Adrenaline Quiz</div></h2>
                            <p>Looking for a challenge related to your expertise? </p>
                            <p>Spend your time on something that will enhance your skills with TEAMZER0.</p>
                        </div>
                    </Link>
                </div>

                <div className='my-7 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25'>
                    <Link to={"/projects"}>
                        <div className='bg-slate-900 p-5 rounded-[10px] border duration-200 border-slate-700 hover:border hover:border-slate-500 mx-auto'>
                            <button className='relative float-right'>Move</button><h2 className='text-blue-300 align-middle flex gap-2 mb-2'><span className="material-symbols-outlined">
                                auto_stories
                            </span>
                                <div className='text-lg font-title'>Your next project is waiting for you!</div></h2>
                            <p>Looking for a way to boost your knowledge and skills?</p>
                            <p>Find opportunities to develop your skills and contribute to meaningful work with TEAMZERO.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
