import { useState } from 'react'


function Start() {
    const [inGame, setInGame] = useState(false);

    const handleStart = () => {

        setInGame(!inGame)
    }

    return (
        <>
        {inGame ? 
        <> 
        <h1>In Game</h1>


        <button onClick={handleStart}>End Game</button>
        
        </>
        
        : 
        <> 
        <h1>Welcome to Trivial </h1> 
        <p>Trivial will ask you trivia questions. You will have to answer under a certain time limit.</p>

        <button onClick={handleStart}> Start Trivia! </button>
        </>
        
        
        }
        </>
        
    )
}

export default Start