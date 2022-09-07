import React from 'react'
import he from 'he'
import Question from '../components/Question'
    
export default function Quiz() {

const [questions, setQuestions] = React.useState([])

React.useEffect(function ()  {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(res => res.json()) 
    .then(data => setQuestions(data.results))
}, [])

const formsArray = questions.map(question => {
    console.log(question)
    const answerArray = []
    answerArray.push(question.incorrect_answers)

    console.log(answerArray)
    console.log(question.correct_answer)
   return  (
    <Question 
        question={question.question}
        answer={question.correct_answer}
        incorrect={answerArray}
    />
   )
})

    return (
        <div>
            {formsArray}
        </div>
    )
}