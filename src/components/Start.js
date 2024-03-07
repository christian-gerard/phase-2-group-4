import { useState } from 'react'
import Timer from './Timer'
import { useOutletContext } from "react-router-dom";
import GamePlay from './GamePlay';



function Start() {
	
	const { questions } = useOutletContext();

	const [inGame, setInGame] = useState(false);
	const [gameQuestions, setGameQuestions] = useState([]);
	const [gameDifficulty, setGameDifficulty] = useState('easy');

	const handleGameDifficultyChange = (e) => { setGameDifficulty(e.target.value) }
	
	const handleStart = () => {
		setInGame(!inGame)
		setGameQuestions(questions.filter(question => question.difficulty === gameDifficulty))
		}

	
	return (
   <section>
      {inGame ? (
        <div>
          <h1>In Game</h1>
						<Timer />
					<GamePlay gameQuestions={gameQuestions}  />
          <button onClick={handleStart}>Restart Game</button>
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