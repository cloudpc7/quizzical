import React from 'react'
import Quiz from '../components/Quiz'
export default function StartPage() {
    const [startGame, setStartGame] = React.useState(false)

    function start() {
        setStartGame(prevState => !prevState)
    }

    return (
        <main className="container">
        <img className="yellow-blob" src="./images/yellow.png"/>
        {
            startGame 
            ?
            <Quiz />
            
            :
            <div>
            <h2>Quizzical</h2>
            <p>Some description if needed</p>
            <button className="mainBtn" onClick={start}>Start Quiz</button>
            </div>
         }
        <img className="blue-blob" src="./images/blue.png" /> 
        </main>
        
    )
}