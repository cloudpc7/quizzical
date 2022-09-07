import React from 'react'
import he from 'he'

export default function Question(props) {
    const incorrect = props.incorrect.map(answer => {
        return <button>{answer}</button>
    })
    return (
        <section>
            <p className="questions">{he.decode(props.question)}</p>
            {incorrect}
        </section>
    )
}