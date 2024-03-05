import { useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom'

function QuestionCard() {

    const params = useParams();
    const { questions } = useOutletContext();


    const question = questions.filter((question) => question.id === params.id)[0]



    return(
        <div className='question-card'>
            <h3>{question.question}</h3>

            <div className='question-details'>
            <span>Difficulty: {question.difficulty}</span>
            <span>Category: {question.category}</span>

            </div>
            


            <div className='question-answers'>
                <ol type='A'>
                    <li>{question.a}</li>
                    <li>{question.b}</li>
                    <li>{question.c}</li>
                    <li>{question.d}</li>
                </ol>

                <h5> Answer: {question.answer}</h5>

            </div>
            
        </div>
    )
}

export default QuestionCard