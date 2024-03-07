import { useState } from "react";
import Start from "./Start";

function GamePlay(props) {
  const gameQuestions = props.gameQuestions;
  const [numberOfGameQuestions, setNumberOfGameQuestions] = useState(gameQuestions.length);
  const [currentQuestion, setCurrentQuestion] = useState(gameQuestions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [gameQuestionsCount, setGameQuestionsCount] = useState(numberOfGameQuestions );

  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

	const handleSubmitAnswer = (e) => {
		e.preventDefault();
		
		if (selectedAnswer === ("") || selectedAnswer === null) {
			alert('You must select an answer')
	return (<></>)
	} else {
			setGameQuestionsCount(gameQuestions.length);
		}
		if (selectedAnswer === currentQuestion.answer) {
			setNumberCorrect(numberCorrect + 1);
		}
		if (gameQuestionsCount === 0) {
			return (
			<><h1>You got {numberCorrect} out of {gameQuestionsCount} correct!</h1>
		<h2>Congratulations! You have done what very few people have, or ever will. You have played this game!</h2>
			</>)
		}
		else {
			setCurrentQuestion(gameQuestions.shift());
			setSelectedAnswer("");
		}
	}

  return (
    <div>
      <h1>Number Correct:{numberCorrect}</h1>
      <>
        <form onSubmit={handleSubmitAnswer}>
				<p>{currentQuestion.question}</p>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="a"
                  checked={selectedAnswer === "a"}
                  onChange={handleOptionChange}
                />
                A. {currentQuestion.a}
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="b"
                  checked={selectedAnswer === "b"}
                  onChange={handleOptionChange}
                />
                B. {currentQuestion.b}
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="c"
                  checked={selectedAnswer === "c"}
                  onChange={handleOptionChange}
                />
                C. {currentQuestion.c}
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="d"
                  checked={selectedAnswer === "d"}
                  onChange={handleOptionChange}
                />
                D. {currentQuestion.d}
              </label>
            </li>
          </ul>
          <button className="answer-button" type="submit">
            Submit Answer
          </button>
        </form>
      </>
    </div>
  );
}
export default GamePlay;
