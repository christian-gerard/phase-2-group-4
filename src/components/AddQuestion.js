import { useState } from 'react';
import { useOutletContext } from 'react-router-dom'

const initialState = {
  category: "",
  difficulty: "",
  question: "",
  a: "",
  b: "",
  c: "",
  d: "",
  answer: "",
};
	
function AddQuestion() {
	const [formData, setFormData] = useState(initialState);
	const handleFormChange = (event) => { setFormData({ ...formData, [event.target.name]: event.target.value }) };
  const { handleFormSubmit } = useOutletContext()
  

	
	return (
    <section id='add-question'>

      <form
        className="form"
        onChange={handleFormChange}
        onSubmit={(e) => handleFormSubmit(e,formData)}
      >
        <h1>Add your own Question</h1>

        <label htmlFor="type">Category</label>

        <select name="category" value={formData.category}>
          <option value="">Select One</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Geography">Geography</option>
          <option value="History">History</option>
          <option value="Sports">Sports</option>
          <option value="Movies">Movies</option>
          
        </select>

        <label htmlFor="type">Difficulty</label>
        <select name="difficulty" value={formData.difficulty}>
            <option value="">Select One</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <label htmlFor="question">
           Enter Question
        </label>

        <input
          value={formData.question}

          type="text"
          name="question"
          placeHolder="Question Text"
        />

        <label htmlFor="answer1">
          Answer 'A'
        </label>
        <input
          value={formData.a}
          type="text"

          name="a"
          placeHolder="A"
        />

        <label htmlFor="answer2">
          Answer 'B'
        </label>
        <input
          value={formData.b}
          type="text"

          name="b"
          placeHolder="B"
        />

        <label htmlFor="answer3">
          Answer 'C'
        </label>
        <input
          value={formData.c}

          type="text"
          name="c"
          placeHolder="C"
        />

        <label htmlFor="answer4">
          Answer 'D'
        </label>
        <input
          value={formData.d}

          type="text"
          name="d"
          placeHolder="D"
        />
        <label htmlFor="correctAnswer">
          Correct Answer
        </label>

        <select name='answer'>
            <option value=''>Select Answer</option>    
            <option value='a'>A</option>
            <option value='b'>B</option>
            <option value='c'>C</option>
            <option value='d'>D</option>
        </select>
        
        <button type="submit">Add Question</button>

      </form>
    </section>
  );
}
export default AddQuestion