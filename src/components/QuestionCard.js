import { useState } from 'react';

function QuestionCard({id,category,difficulty,question,a,b,c,d,answer}) {



    return(
        <div className='question-card'>
            <h3>{question}</h3>

            <div className='question-details'>
            <span>Difficulty: {difficulty}</span>
            <span>Category: {category}</span>

            </div>
            

            <div className='question-answers'>
                <ol type='A'>
                    <li>{a}</li>
                    <li>{b}</li>
                    <li>{c}</li>
                    <li>{d}</li>
                </ol>

                <h5> Answer: {answer}</h5>

            </div>
            
        </div>
    )
}

export default QuestionCard