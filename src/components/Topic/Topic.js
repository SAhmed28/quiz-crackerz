import React from 'react';
import {Link} from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const {id,logo,name,total} = topic;
    return (
        <div className='topic mx-8'>
            <img src={logo} alt="" />
            <div className="topic-info pl-4 flex justify-between items-center my-3">
                <h2 className='p-2 font-bold'>{name}</h2>
                <p className='font-bold text-pink-600'><small>Total: {total}</small></p>
                <button className='p-2 mr-3 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-purple-500'>
                    <Link to = {`/quiz/${id}`}>Start Practice </Link></button>
            </div>
        </div>
    );
};

export default Topic;