import { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard'
import CountdownTimer from './Timer';

function Question() {
    const { questions } = useOutletContext()




    console.log(questions)
    
    const renderQuestions = questions.map((question) => <QuestionCard key={question.id} {...question} />)

    return(
        <div>
            <h1>Questions</h1>
            <CountdownTimer>Timer</CountdownTimer>
            <div>
                {renderQuestions}
            </div>
        </div>
    )
}

export default Question