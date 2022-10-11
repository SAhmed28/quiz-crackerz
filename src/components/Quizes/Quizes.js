import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const {questions} = quizes.data;
    console.log(questions);
    
    return (
        <div className='m-8'>
            {
                questions.map(quiz=> <Quiz 
                    key={quiz.id}
                    quiz = {quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizes;