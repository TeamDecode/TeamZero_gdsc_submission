import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Fetch questions from your JSON Server API
    fetch('http://localhost:3001/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswerOptionClick = (option) => {
    setUserAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = option;
      return newAnswers;
    });

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className='quiz-container'>
      {showResults ? (
        <div className='quiz-results'>
          <h2>Quiz Completed!</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.question} - {userAnswers[index] === question.answer ? 'Correct' : 'Incorrect'}
              </li>
            ))}
          </ul>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <div className='quiz-question'>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <h3>{questions[currentQuestionIndex]?.question}</h3>
          <div className='quiz-options'>
            {questions[currentQuestionIndex]?.options.map((option) => (
              <button key={option} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
