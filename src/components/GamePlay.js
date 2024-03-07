import { useState } from "react";

import { useOutletContext } from "react-router-dom";
function GamePlay(props) {
  const gameQuestions = props.gameQuestions;
  const [currentQuestion, setCurrentQuestion] = useState(gameQuestions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [numberCorrect, setNumberCorrect] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const handleOptionChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();

    if (selectedAnswer === "" || selectedAnswer === null) {
      alert("You must select an answer");
      return <></>;
    }
    if (selectedAnswer === currentQuestion.answer) {
      setNumberCorrect(numberCorrect + 1);
    }

    if (gameQuestions.length > 1) {
      setCurrentQuestion(gameQuestions[1]);
      gameQuestions.shift();
      setSelectedAnswer("");
    } else {
      setGameOver(true);
    }
  };
  if (gameOver) {
    return (
      <>
        <h1>You got {numberCorrect} correct!</h1>
        <h2>Congratulations! You have played this game!</h2>
      </>
    );
  }

  return (
    <div>
      <h1>Number Correct:{numberCorrect}</h1>

      <>
        <form onSubmit={handleSubmitAnswer}>
          <p>{currentQuestion.question}</p>
          <br />
          <label>
            <input
              type="radio"
              value="a"
              checked={selectedAnswer === "a"}
              onChange={handleOptionChange}
            />
            A. {currentQuestion.a}
          </label>

          <br />
          <label>
            <input
              type="radio"
              value="b"
              checked={selectedAnswer === "b"}
              onChange={handleOptionChange}
            />
            B. {currentQuestion.b}
          </label>

          <br />
          <label>
            <input
              type="radio"
              value="c"
              checked={selectedAnswer === "c"}
              onChange={handleOptionChange}
            />
            C. {currentQuestion.c}
          </label>

          <br />
          <label>
            <input
              type="radio"
              value="d"
              checked={selectedAnswer === "d"}
              onChange={handleOptionChange}
            />
            D. {currentQuestion.d}
          </label>
          <br />
          <br />
          <button className="answer-button" type="submit">
            Submit Answer
          </button>
        </form>
      </>
      <br />
      <br />
      <br />
    </div>
  );
}
export default GamePlay;
