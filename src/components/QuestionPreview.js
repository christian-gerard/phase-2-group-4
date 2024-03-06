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
        <NavLink to={`/questions/${id}`} className='question-preview-nav'> 

        <div className='question-preview'>
            <h5>{question}</h5>

            <div className='question-preview-details'>

                <span>{handleCategoryEmoji()}   {category}</span>
                <span>{handleDiffEmoji()}  {difficulty}</span>

            </div>
        </div>

        </NavLink>
    )
}

export default QuestionPreview