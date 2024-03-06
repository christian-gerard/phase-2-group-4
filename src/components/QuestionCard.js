import { useState, useMemo } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
import QuestionEdit from './QuestionEdit'

function QuestionCard() {

    //Variable Declaration
    const nav = useNavigate()
    const params = useParams();
    const { questions, handleQuestionPatch, handleDelete } = useOutletContext();
    const [inEditMode, setInEditMode] = useState(false);

    //Function Declaration
    const handleEditMode = () => {
        setInEditMode(!inEditMode)
    }

    //Initialize Questions => reupdate on changes in state to questions 
    const question = useMemo(() => {
        const q = questions.filter((question) => question.id === params.id)[0]
        
        if(!q) {
            nav(-1)
        }
      return q

    },[questions])  
    
    return(
        <>

        {/* Toggle Between View and Edit Mode */}

        <div className='edit-delete-buttons'>

            <button onClick={handleEditMode}> {inEditMode ? 'End Edit' : 'Edit'} </button>

        </div>


        {/* Toggle Logic Here */}

        { inEditMode ?    
        
        <QuestionEdit {...question} handleQuestionPatch={handleQuestionPatch} handleEditMode={handleEditMode} />
            
        :
   
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

        }


        </>


            
           
    )
}

export default QuestionCard