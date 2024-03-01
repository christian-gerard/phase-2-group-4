import { useState } from 'react';

function QuestionCard({id,type,question,answer1,answer2,answer3,answer4,correctAnswer,handleNext,questionNumber}) {
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(false);


    const checkAnswer = (e) => {
    
        if(e.target.name === correctAnswer) {
            setSelectedAnswer(selectedAnswer => e.target.value)
            setIsCorrect(true)
            
        } else {
            setSelectedAnswer(selectedAnswer => e.target.value)
            console.log('WRONG')
        }
        

    }

    return(
        <div className='question-card'>
            <h2>Q.{questionNumber + 1}</h2>
            <h1>{question}</h1>
            <div className='answers' onChange={checkAnswer}>
                {isCorrect ? <h1>"{selectedAnswer}"" is Correct</h1> : selectedAnswer ?
                <>
                <h1>{selectedAnswer} is Incorrect😔</h1>
                <span><input name='answer1' type="checkbox" value={answer1}/>{answer1}</span>
                <span><input name='answer2' type="checkbox" value={answer2}/>{answer2}</span>
                <span><input name='answer3' type="checkbox" value={answer3}/>{answer3}</span>
                <span><input name='answer4' type="checkbox" value={answer4}/>{answer4}</span>
                </>

                :

                <>
                
                <span><input name='answer1' type="checkbox" value={answer1}/>{answer1}</span>
                <span><input name='answer2' type="checkbox" value={answer2}/>{answer2}</span>
                <span><input name='answer3' type="checkbox" value={answer3}/>{answer3}</span>
                <span><input name='answer4' type="checkbox" value={answer4}/>{answer4}</span>
                </>
                
                
                
                }
                
            </div>
            {isCorrect ? <button onClick={handleNext}>NEXT</button> : null}
        </div>
    )
}

export default QuestionCard