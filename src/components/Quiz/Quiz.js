import React from 'react';

const Quiz = ({quiz}) => {
    const {question, options, correctAnswer, id} = quiz;
    return (
        <div className='mx-auto p-10'>
            <h2>Question: {question}</h2>
            <div className="options">
                {
                    options.map(option => 
                    <label for={id}>
                        <input type="radio" id={id} name={id} value="HTML"/>{option}
                    </label>)

                }
                

            </div>
        </div>
    );
};

export default Quiz;