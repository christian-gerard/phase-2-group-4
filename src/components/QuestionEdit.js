import { useState } from 'react'

function QuestionEdit({id,question,difficulty,category,a,b,c,d,answer,handleQuestionPatch,handleEditMode}) {

    const newQuestionInitial = {
        id: id,
        question: question,
        difficulty: difficulty,
        category: category,
        a: a,
        b: b,
        c: c,
        d: d,
        answer: answer
    }

    const [newQuestion, setNewQuestion] = useState(newQuestionInitial)

    const handleQuestionChange = (event) => {
        
        setNewQuestion({ ...newQuestion, [event.target.name]: event.target.value })
    
    
    }

        


    return (



        <div >
        <form 
        className='edit-question'
        onChange={handleQuestionChange}
        onSubmit={(e) => handleQuestionPatch(e,newQuestion,handleEditMode)}
        >

        <h1>Edit Question</h1>

        <label>Question</label>
        <input name ='question' value={newQuestion.question} className='question-field'></input>

        <label>Difficulty</label>
        <select name ='difficulty' value={newQuestion.difficulty}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
        </select>

        <label>Category</label>
        <select name ='category' value={newQuestion.category}>
            <option value='General Knowledge'>General Knowledge</option>
            <option value='Sports'>Sports</option>
            <option value='Geography'>Geography</option>
        </select>

        <label>Answers</label>
        <label>A</label>
        <input name='a'  value={newQuestion.a}></input>
        <label>B</label>
        <input name='b'  value={newQuestion.b}></input>
        <label>C</label>
        <input name='c'  value={newQuestion.c}></input>
        <label>D</label>
        <input name='d' value={newQuestion.d}></input>

        <label>Correct Answer</label>
        <select name='answer' value={newQuestion.answer}>
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
        </select>


        <button>Edit Question</button>
        </form>
        
        </div> 

    )
}

export default QuestionEdit