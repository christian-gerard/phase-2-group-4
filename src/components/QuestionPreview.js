import { NavLink, useOutletContext } from 'react-router-dom'


function QuestionPreview({id,category,difficulty,question,a,b,c,d,answer}) {
    const {handleDelete} = useOutletContext()
    const handleDiffEmoji = () => {
        if(difficulty === 'easy') {
            return '😌'
        } else if (difficulty === 'medium') {
            return '🤔'
        } else if (difficulty === 'hard') {
            return '😤'
        }
    }

    const handleCategoryEmoji = () => {

        if(category === 'Geography') {
            return '🗺'
        } else if (category === 'History') {
            return '📜'
        } else if (category === 'General Knowledge') {
            return '🧠'
        } else if (category === 'Sports') {
            return '⚽️'
        } else if (category === 'Movies') {
            return '🎬'
        } else if (category === 'devops') {
            return '🧑🏻‍💻'
        }
    }


    return(
        <>
        <div className='question-preview'>
        
        <button onClick={() => handleDelete(id)}>❌</button>
        <NavLink to={`/questions/${id}`} className='question-preview-nav'> 

        
            
            <p>{question}</p>

            <div className='question-preview-details'>

                <span>{handleCategoryEmoji()}   {category}</span>
                <span>{handleDiffEmoji()}  {difficulty}</span>

            
        </div>

        </NavLink>
        
        </div>
        </>
    )
}

export default QuestionPreview