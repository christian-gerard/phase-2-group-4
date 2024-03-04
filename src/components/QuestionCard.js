import { useState } from 'react';

function QuestionCard({id,category,difficulty,question,a,b,c,d,answer}) {



    return(
        <div className='question-card'>
            <span>{id}</span>
            <span>{category}</span>
            <span>{difficulty}</span>
            <span>{question}</span>
        </div>
    )
}

export default QuestionCard