import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {question, options, id, correctAnswer} = quiz;
    // console.log(quiz)
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);

    const handleCorrectAnsCount = (id, option) => {
        
        if(quiz.id === id && quiz.correctAnswer === option){
            toast.success('Answer is correct! Great Job!', {
                position: toast.POSITION.TOP_RIGHT
            });
            
            setCorrect(correct+1);
            console.log(correct);
        }
        else{
            toast.error('Wrong Answer! Please try again!', {
                position: toast.POSITION.TOP_RIGHT
            });
            setWrong(wrong+1);
            console.log('wrong: ',wrong);
        }
        
    }

    let [answer, setAnswer] = useState('');
    const handleEye = (id) => {
        console.log('clicked!, id: ', id);

        if(quiz.id === id){
            console.log(quiz.correctAnswer);
            answer = quiz.correctAnswer;
            setAnswer(answer);

            toast.info(answer, {
                position: toast.POSITION.TOP_CENTER
            });
        }
        
    }
    
    
    return (
        <div className='quiz w-3/4 md:w-1/2 mx-auto p-5 border-solid border-4 border-purple-600 mb-8 rounded-lg bg-white'>
            <div className="question-part flex">
                <h2 className='text-xl md:text-2xl font-bold text-center pb-8'>Question: {question.slice (3, -4)}</h2>
                <FontAwesomeIcon onClick={() => handleEye(id)} className='text-2xl text-purple-500 cursor-pointer px-2 py-2' icon={faEye} /> <ToastContainer />
            </div>
            <div className="flex flex-col font-semibold">
                {
                    options.map(option => 
                        <label for={option} className='py-3 px-4 text-xl border-solid border-2 mb-3 flex'>
                            <input onClick={()=>handleCorrectAnsCount(id, option)} type="radio" id={option} name={id} value={option}/> <ToastContainer />
                                <span className='pl-3'>{option}</span>
                        </label>
                    )

                }
                
            </div>
        </div>
    );
};

export default Quiz;