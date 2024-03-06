import { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard'
import CountdownTimer from './Timer';
import QuestionPreview from './QuestionPreview';

function Question() {
    const { questions } = useOutletContext()

    const renderQuestions = questions.map((question) => <QuestionPreview key={question.id} {...question} />)
		
    return(
        <div className='questions'>

				<h1>Questions</h1>

            <div id='view-questions'>
                {renderQuestions ? renderQuestions : <h1>LOADING</h1>}
            </div>

        </div>
    )
}

export default Question