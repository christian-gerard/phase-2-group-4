import { useState } from 'react'
import Timer from './Timer'
import { useOutletContext } from "react-router-dom";


function Start() {
	const { questions } = useOutletContext();
	const [inGame, setInGame] = useState(false);
	const [gameQuestions, setGameQuestions] = useState([]);
	const [gameDifficulty, setGameDifficulty] = useState('easy');
	const handleGameDifficultyChange = (e) => { setGameDifficulty(e.target.value) }
	const [gameAnswers, setGameAnswers] = useState([]);
	
	const handleAnswerSubmit = (e,answer) => {
    e.preventDefault();
    setGameAnswers([...gameAnswers, answer])
  }
	const handleStart = () => {
		setInGame(!inGame)
		setGameQuestions(questions.filter(question => question.difficulty === gameDifficulty))
	}
	return (
    <>
      {inGame ? (
        <div>
          <h1>In Game</h1>
          <div>
            <Timer />
            {gameQuestions.map((question) => (
              <div>
                <p>{question.question}</p>
                <p>A: {question.A}</p>
                <p>B: {question.B}</p>
                <p>C: {question.C}</p>
                <p>D: {question.D}</p>
                <input
                  type="text"
                  name="answer"
                  onSubmit={handleAnswerSubmit}
                />
              </div>
            ))}
          </div>
					<p>{gameAnswers}</p>
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
    </>
  );
}
export default Start