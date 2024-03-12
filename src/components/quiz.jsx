import React, { useState, useEffect } from 'react';
import { db } from '../data/firebase'; // Adjust the path as necessary
import { collection, getDocs } from 'firebase/firestore';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questionsCollectionRef = collection(db, "quizquestion");


  useEffect(() => {
    const fetchQuestions = async () => {
      const questionsCollectionRef = collection(db, "quizquestion");
      const data = await getDocs(questionsCollectionRef);
      setQuestions(data.docs.map((doc) => {
        const docData = doc.data();
        return {
          questionText: docData.question,
          answerOptions: docData.options.map((option, index) => {
            return {
              answerText: option,
              isCorrect: index === docData.options.indexOf(docData.answer) // Assuming 'answer' is the correct option
            };
          })
        };
      }));
    };
  
    fetchQuestions();
  }, []);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
      {showScore ? (
        <div className='text-xl font-semibold mb-4'>
          You scored <span className='text-green-500'>{score}</span> out of {questions.length}
        </div>
      ) : (
        <>
          <div className='bg-white shadow-md rounded-lg p-8 mb-6'>
            <div className='mb-4'>
              <span className='text-lg font-semibold'>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            {questions.length > 0 ? (
              <div className='text-lg mb-6'>
                {questions[currentQuestion]?.questionText}
              </div>
            ) : (
              <div>Loading questions...</div>
            )}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {questions[currentQuestion]?.answerOptions?.map((answerOption, index) => (
                <button key={index}
                        onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;