import React from 'react'
import Question from '../components/Question'
    
export default function Quiz() {

const [questions, setQuestions] = React.useState([])

React.useEffect(function ()  {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json()) 
    .then(data => setQuestions(data.results))
}, [])

const formsArray = questions.map(question => {

    return  (
    <Question 
        question={question.question}
        incorrect={question.incorrect_answers}
        correct={question.correct_answer}
    />
   )
})

    return (
        <div>
            {formsArray}
        </div>
    )
}