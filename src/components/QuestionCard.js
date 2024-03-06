import { useState, useMemo } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
import QuestionEdit from './QuestionEdit'

function QuestionCard() {
    const params = useParams();
    const { questions, handleQuestionPatch, handleDelete } = useOutletContext();
    const nav = useNavigate()
    const [inEditMode, setInEditMode] = useState(false);

    const handleEditMode = () => {
        setInEditMode(!inEditMode)
    }


    const question = useMemo(() => {
        const q = questions.filter((question) => question.id === params.id)[0]
        
        if(!q) {
            nav(-1)
        }
      return q

    },[])  
    



    return(
        <>

        <div className='edit-delete-buttons'>

            <button onClick={handleEditMode}> {inEditMode ? 'End Edit' : 'Edit'} </button>



        </div>

        { 
        
        inEditMode ?    
        

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