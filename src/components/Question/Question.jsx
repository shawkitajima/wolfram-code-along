import React from 'react';

const Question = props => (
    <>
        <div>
            <div>
                <div>{props.question.question}</div>
            </div>
            <div>
                <div>{props.question.answer}</div>
            </div>
        </div>
    </>
)

export default Question;