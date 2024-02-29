import { useState } from 'react';

function QuestionCard({id,type,question,answer1,answer2,answer3,answer4,correctAnswer}) {

    const [isCorrect, setIsCorrect] = useState(false);

    const checkAnswer = (e) => {
    
        if(e.target.name === correctAnswer) {
            
            console.log('CORRECT')
            e.target.checked = false;
        } else {
            console.log('WRONG')
        }
        

    }

    return(
        <div className='question-card'>
            <h1>{question}</h1>

            <div className='answers' onChange={checkAnswer}>
                <span><input name='answer1' type="checkbox"/>{answer1}</span>
                <span><input name='answer2' type="checkbox"/>{answer2}</span>
                <span><input name='answer3' type="checkbox"/>{answer3}</span>
                <span><input name='answer4' type="checkbox"/>{answer4}</span>
            </div>
            
        </div>
    )
}

export default QuestionCard