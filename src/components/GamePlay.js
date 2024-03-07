import { useState } from 'react'
import Timer from './Timer'
import {useParams,  useOutletContext } from 'react-router-dom';
import Start from './Start'

function GamePlay(props) {
	const params = useParams();
	const gameQuestions = props.gameQuestions
	const [currentQuestion, setCurrentQuestion] = useState(gameQuestions[0]);
	const [numberCorrect, setNumberCorrect] = useState("")
	
	const handleSubmitAnswer = (e) => {
		e.preventDefault()
	
		if (currentQuestion.answer === e.target.value) {
			console.log(e.target.value)
			console.log(numberCorrect)
			setNumberCorrect(numberCorrect + 1)
			setCurrentQuestion(gameQuestions.shift())
		}

		else { setCurrentQuestion(gameQuestions.shift()) }
    }
	
	

	return (
		<div>
		<h1>Number Correct:{numberCorrect}</h1>
		
      <form onSubmit={handleSubmitAnswer}>
				<p>{currentQuestion.question}</p>
				<ul>
	        <button className="buttonA" name="A" value="a">
	          <label htmlFor="A">A.</label>
	          {currentQuestion.a}
	        </button>
	        <button className="buttonB" name="B" value="b">
	          <label htmlFor="B">`B.{currentQuestion.b}`</label>
	        </button>
	        <button className="buttonC" name="C" value="c">
	          <label htmlFor="C">`C.{currentQuestion.c}`</label>
	        </button>
	        <button className="buttonD" name="D" value="d">
	          <label htmlFor="D">`D.{currentQuestion.d}`</label>
	        </button></ul>
      </form>
   </div>
			);

}
export default GamePlay