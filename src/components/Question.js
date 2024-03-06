import { useState, useMemo } from 'react'
import { useOutletContext } from 'react-router-dom';
import { render } from '@testing-library/react';
import QuestionCard from './QuestionCard'
import CountdownTimer from './Timer';
import QuestionPreview from './QuestionPreview';

function Question() {

    //Variable Declarations
    const { questions } = useOutletContext()
    const [filter, setFilter] = useState('')
    const [page,setPage] = useState({
        start: 0,
        stop: 9
    })

    //Function Declarations
    const handleFilter = (e) => {

        setFilter(e.target.value)

    }
    const handleNext = () => {

        if(filter && page.stop <= renderPreviews.length ) {

            setPage({...page, start: page.start + 9, stop: page.stop + 9})

        } else if (!filter && page.stop <= questions.length) {

            setPage({...page, start: page.start + 9, stop: page.stop + 9})
        }



            



    }
    const handlePrev = () => {

        if(page.start !== 0) {
            setPage({...page, start: page.start - 9, stop: page.stop - 9})

        }
        
    }

    //Initialize Question Previews => Update previews on changes in state for page, filter & questions
    const renderPreviews = useMemo(() => {

        const triviaQuestions = questions

        
            if(filter) {
                
                const filtered = triviaQuestions.filter((q) => q.category === filter).slice(page.start,page.stop).map((q) => <QuestionPreview key={q.id} {...q} />)

                return filtered.length === 0 ? <h1>No Questions in {filter.toLowerCase()} 😕</h1> : filtered
            } else {

                const unfiltered = triviaQuestions.slice(page.start,page.stop).map((q) => <QuestionPreview key={q.id} {...q} />)
                return unfiltered
            }


            debugger;
    },[page,filter,questions])



    return(

        <div className='questions'>

            <h1>Questions</h1>

            <select onChange={handleFilter}>
                <option value=''>All</option>
                <option value='General Knowledge'>General Knowledge</option>
                <option value='History'>History</option>
                <option value='Sports'>Sports</option>
                <option value='Geography'>Geography</option>
                <option value='Movies'>Movies</option>
            </select>

            <div id='view-questions'>
                {renderPreviews}
            </div>

            <div id='page-selector'>
                <button onClick={handlePrev}> ⬅️ Prev </button>
                <button onClick={handleNext}>Next ➡️</button>
            </div>

        </div>
    )
}

export default Question