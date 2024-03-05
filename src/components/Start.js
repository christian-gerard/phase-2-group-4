import { useState } from 'react'
import QuestionCard from './QuestionCard'
import Settings from './Settings';
import Timer from './Timer'


function Start() {
    const [inGame, setInGame] = useState(false);

    const handleStart = () => {

        setInGame(!inGame)
    }

    return (
        <>
        {inGame ? 

        <> 
        <Timer />


        <QuestionCard />


        <button onClick={handleStart}>End Game</button>
        
    

        
        
        </>
        
        : 
        <> 


        <h1>Welcome to Trivial </h1> 
        <p>Trivial will ask you trivia questions. You will have to answer under a certain time limit.</p>

        <Settings/>

        <button onClick={handleStart}> Start Trivia! </button>
        </>
        
        
        }
        </>
        
    )
}

export default Start