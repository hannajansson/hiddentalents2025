import React from 'react';
import { useState } from "react"

interface ExtendableQuestionProps {
    question: string
    answer: string
}

const ExtendableQuestion: React.FC<ExtendableQuestionProps> = ({
    question,
    answer,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='questionWrapper' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (<p className="arrowIcon">A</p>) : (<p className="arrowIcon">V</p>)}
                <p className=''>{question}</p>
            </div>
            {isOpen && <p className="answer">{answer}</p>}
        </>
    )
}

export default ExtendableQuestion