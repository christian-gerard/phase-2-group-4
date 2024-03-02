import { useState } from 'react';

const initialState = {
  type: "",
  question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
	correctAnswer: "",
};
	
function AddQuestion() {
	const [formData, setFormData] = useState(initialState);
	const handleFormChange = (event) => { setFormData({ ...formData, [event.target.name]: event.target.value }) };
	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
  };
	
	return (
    <section>
      <form
        className="form"
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
      >
        <h3>Add your own Question</h3>
        <label htmlFor="type">
          Category
          <br />
        </label>
        <select name="type" value={formData.type}>
          <option value="">Select One</option>
          <option value="geography">Geography</option>
          <option value="history">History</option>
          <option value="science">Science</option>
          <option value="movies">Movies</option>
          <option value="devops">Devops</option>
        </select>
        <label htmlFor="question">
          <br />
          <br /> Enter Question
          <br />
        </label>
        <input
          value={formData.question}
          style={{ width: 300, height: 100 }}
          type="text"
          name="question"
          placeHolder="Question Text"
        />
        <label htmlFor="answer1">
          <br />
          <br />
          Answer Choice 1<br />
        </label>
        <input
          value={formData.answer1}
          type="text"
          style={{ width: 300 }}
          name="answer1"
          placeHolder="Answer Choice"
        />
        <label htmlFor="answer2">
          <br />
          <br /> Answer Choice 2<br />
        </label>
        <input
          value={formData.answer2}
          type="text"
          style={{ width: 300 }}
          name="answer2"
          placeHolder="Answer Choice"
        />
        <label htmlFor="answer3">
          <br />
          <br />
          Answer Choice 3<br />
        </label>
        <input
          value={formData.answer3}
          style={{ width: 300 }}
          type="text"
          name="answer3"
          placeHolder="Answer Choice"
        />
        <label htmlFor="answer4">
          <br />
          <br />
          Answer Choice 4<br />
        </label>
        <input
          value={formData.answer4}
          style={{ width: 300 }}
          type="text"
          name="answer4"
          placeHolder="Answer Choice"
        />
        <label htmlFor="correctAnswer">
          <br />
          <br />
          Correct Answer
          <br />
          <br />
        </label>
        <input
          value={formData.correctAnswer}
          type="text"
          name="correctAnswer"
          placeHolder="Correct Answer"
        />
        <br />
        <br />
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}
export default AddQuestion