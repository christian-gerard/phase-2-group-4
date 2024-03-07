import { useState } from 'react'
import Timer from './Timer'
import GamePlay from './GamePlay'
import Start from './Start'

const GameOver = (props) => {

	const numberCorrect = props.numberCorrect
	const numberOfGameQuestions = props.numberOfGameQuestions
	
	return (
    <>
      <h1>You got {numberCorrect} out of {numberOfGameQuestions} correct!</h1>
      <h2>Congratulations! You have done what very few people have, or ever will. You have played this game!</h2>
    </>
	)
}
export default GameOver