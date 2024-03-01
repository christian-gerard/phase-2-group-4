import { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard'
import CountdownTimer from './Timer';

function Question() {
    const questions = useOutletContext()
    const [questionFilter, setQuestionFilter ] = useState('')
    const [questionNumber, setQuestionNumber] = useState(0)

    const handleFilter = (newFilter) => {
        setQuestionFilter((questionFilter) =>  newFilter )
        setQuestionNumber(0)
    }
    const handleNext = () => {

        setQuestionNumber(questionNumber =>  renderQuestion().length - 1 <= questionNumber ? 0 : questionNumber += 1)
        console.log(questionNumber)
    }


    const renderQuestion = () => {

        if(questionFilter === '') {
            
            return questions.map((question) => <QuestionCard 
            key={question.id} 
            {...question} 
            handleNext={handleNext} 
            questionNumber={questionNumber} />)
        } else {

          return   questions.filter((question) => question.type === questionFilter).map((question) => <QuestionCard 
          key={question.id} 
          {...question} 
          handleNext={handleNext} 
          questionNumber={questionNumber} />)
        }


    }
    


    return(
        <div>
            <h1>Questions</h1>
            <select type='dropdown' onChange={(e) => handleFilter(e.target.value)} >
                <option value=''>All</option>
                <option value='geography'>Geography</option>
                <option value='movies'>Movies</option>
                <option value='history'>History</option>
            </select>
            <CountdownTimer>Timer</CountdownTimer>
            <div>
                {renderQuestion()[questionNumber]}
            </div>
        </div>
    )
}

export default Question