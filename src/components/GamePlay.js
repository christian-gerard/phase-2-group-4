import { useState } from 'react'
import Timer from './Timer'
import { useState } from 'react-router-dom';
import Start from './Start'


const [gameAnswers, setGameAnswers] = useState([]);
const [numberCorrect, setNumberCorrect] = useState(0);
const [currentAnswer, setCurrentAnswer] = useState([]);

const handleAnswerChange = (e) => {
  setCurrentAnswer(...currentAnswer, e.target.value);
};

const handleAnswersSubmit = (e, answer) => {
  e.preventDefault();

  setGameAnswers([...gameAnswers, answer]);
  if (answer.toLowerCase() === e.answer.toLowerCase()) {
    setNumberCorrect(numberCorrect + 1);
  }
};

<div>
  {gameQuestions.map((question) => (
    <form onSubmit={handleAnswersSubmit} onChange={handleAnswerChange}>
      <p>{question.question}</p>
      <p>A: {question.a}</p>
      <p>B: {question.b}</p>
      <p>C: {question.c}</p>
      <p>D: {question.d}</p>
      Answer:<input type="text" name="answer" value={currentAnswer}></input>
    </form>
  ))}
</div>;