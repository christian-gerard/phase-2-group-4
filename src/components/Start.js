import { useState } from 'react'
import Timer from './Timer'
import { useOutletContext } from "react-router-dom";


function Start() {
	
	const { questions } = useOutletContext();
	const [inGame, setInGame] = useState(false);
	const [gameQuestions, setGameQuestions] = useState([]);
	const [gameDifficulty, setGameDifficulty] = useState('easy');
	const [gameAnswers, setGameAnswers] = useState([]);
	const [numberCorrect, setNumberCorrect] = useState(0);
	const [currentAnswer, setCurrentAnswer] = useState([]);

	const handleGameDifficultyChange = (e) => { setGameDifficulty(e.target.value) }
	const handleStart = () => {
		setInGame(!inGame)
		setGameQuestions(questions.filter(question => question.difficulty === gameDifficulty))
	}
	
const handleAnswerChange = (e) => {setCurrentAnswer(...currentAnswer, e.target.value)}
	
	
	const handleAnswersSubmit = (e, answer) => {
		e.preventDefault();
		
		setGameAnswers([...gameAnswers, answer]);
		if (answer.toLowerCase() === e.answer.toLowerCase()) {
			setNumberCorrect(numberCorrect + 1)
		}
	}
	
	return (
   <section>
      {inGame ? (
        <div>
          <h1>In Game</h1>
						<Timer />
					<div>
						{gameQuestions.map(question => (
						<form onSubmit={handleAnswersSubmit}>
							<p>{question.question}</p>
							<p>A: {question.a}</p>
                <p>B: {question.b}</p>
                <p>C: {question.c}</p>
                <p>D: {question.d}</p>
								Answer:<input onChange={handleAnswerChange}type="text" name="answer" value={currentAnswer}></input>
						</form>))}
					</div>
          <button onClick={handleStart}>End Game</button>
			</div>
			) : (
					
					
					
					
        <div>
          <h1>Welcome to Trivial </h1>
          <p>
            Trivial will ask you trivia questions. You will have to answer under
            a certain time limit.
						</p>
						
						
						
          <form onChange={handleGameDifficultyChange}>
            <label htmlFor="type">Choose Difficulty</label>
            <select name="difficulty">
              <option value="">Select One</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </form>
          <button onClick={handleStart}> Start Trivia! </button>
        </div>
      )}
    </section>
  );
}
export default Start