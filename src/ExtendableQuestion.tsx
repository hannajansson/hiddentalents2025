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
                {isOpen ? (<img src="./assets/icons/Arrow icon.svg" className='arrowIconUp'/>) : (<img src="./assets/icons/Arrow icon.svg" className='arrowIconDown'/>)}
                <div className={isOpen ? "questionOpen" : "questionClosed"}>{question}</div>
            </div>
            {isOpen && <div className="answer">{answer}</div>}
        </>
    )
}

export default ExtendableQuestion