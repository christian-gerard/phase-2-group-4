import { useState } from 'react'

function QuestionEdit({question,difficulty,category,a,b,c,d,answer,handleQuestionPatch}) {

    const newQuestionInitial = {
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



        <div className='question-card'>
        <form 
        className='edit-question'
        onChange={handleQuestionChange}
        onSubmit={(e) => handleQuestionPatch(e,newQuestion)}
        >

        <label>Question</label>
        <input name ='question' value={newQuestion.question}></input>

        <label>Difficulty</label>
        <select name ='difficulty' value={newQuestion.difficulty}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
        </select>

        <label>Category</label>
        <select name ='category' value={newQuestion.category}>
            <option>General Knowledge</option>
            <option>Sports</option>
            <option>Geography</option>
        </select>

        <label>Answers</label>
        <label>A</label>
        <input name='a' type='text' value={a}></input>
        <label>B</label>
        <input name='b' type='text' value={b}></input>
        <label>C</label>
        <input name='c' type='text' value={c}></input>
        <label>D</label>
        <input name='d' type='text' value={d}></input>

        <label>Correct Answer</label>
        <select name='answer'>
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