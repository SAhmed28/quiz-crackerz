import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const {questions, name} = quizes.data;
    console.log(name);
    
    return (
        <form className='bg-gradient-to-r from-green-200 to-blue-300 py-4'>
            <h2 className='text-center py-4 text-3xl font-bold'>Quiz of {name}</h2>
            {
                questions.map(quiz=> <Quiz 
                    key={quiz.id}
                    quiz = {quiz}
                    ></Quiz>)
            }
        </form>
    );
};

export default Quizes;