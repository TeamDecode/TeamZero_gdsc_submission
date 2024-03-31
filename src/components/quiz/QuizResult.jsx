import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score2'>
        Your Score:{props.score}<br/><br></br>
        Total Score:{5}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult