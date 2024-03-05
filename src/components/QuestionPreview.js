import { NavLink } from 'react-router-dom'

function QuestionPreview({id,category,difficulty,question,a,b,c,d,answer}) {

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

        if(category === 'geography') {
            return '🗺'
        } else if (category === 'history') {
            return '📜'
        }
    }
    return(
        <NavLink to={`/questions/${id}`} className='question-preview-nav'> 

        <div className='question-preview'>
            <h5>{question}</h5>

            <div className='question-preview-details'>

                <span>{handleDiffEmoji()}  {difficulty}</span>
                <span>{handleCategoryEmoji()}   {category}</span>

            </div>
        </div>

        </NavLink>
    )
}

export default QuestionPreview