import { useState, useMemo } from 'react'
import { useOutletContext } from 'react-router-dom';
import QuestionCard from './QuestionCard'
import CountdownTimer from './Timer';
import QuestionPreview from './QuestionPreview';

function Question() {
    const { questions } = useOutletContext()
    const [filter, setFilter] = useState('')
    const [page,setPage] = useState({
        start: 0,
        stop: 9
    })

    const handleFilter = (e) => {

        setFilter(e.target.value)

    }

    const handleNext = () => {

        if(page.stop <= questions.length) {

            setPage({...page, start: page.start + 9, stop: page.stop + 9})

        }

    }

    const handlePrev = () => {

        if(page.start !== 0) {
            setPage({...page, start: page.start - 9, stop: page.stop - 9})

        }
        
    }

    const renderPreviews = useMemo(() => {

        const triviaQuestions = questions

        
            if(filter) {

                return triviaQuestions.filter((q) => q.category === filter).slice(page.start,page.stop).map((q) => <QuestionPreview key={q.id} {...q} />)

            } else {

                return triviaQuestions.slice(page.start,page.stop).map((q) => <QuestionPreview key={q.id} {...q} />)

            }



    },[page,filter,questions])

    return(

        <div className='questions'>

            <h1>Questions</h1>

            <select onChange={handleFilter}>
                <option value=''>Select Category</option>
                <option value='General Knowledge'>General Knowledge</option>
                <option value='history'>History</option>
                <option value='geography'>Geography</option>
                <option value='Movies'>Movies</option>
            </select>


    

            <div id='view-questions'>
                {renderPreviews}
            </div>

            <div>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>

        </div>
    )
}

export default Question