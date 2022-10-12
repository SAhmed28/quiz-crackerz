import React from 'react';
import {useLoaderData} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faPaperPlane, faRuler, faCertificate } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import Topic from '../Topic/Topic';

const Header = () => {
    const data = useLoaderData();
    const topics = data.data
    console.log(topics)
    return (
        <div className=''>
            <div className="header mx-8 flex flex-col md:flex-row">
                <div className="header-info">
                    <h1 className='text-3xl font-bold pb-2'>Learn Anything</h1>
                    <p className='text-xl font-semibold'>Get Access for award winning online courses</p>
                    <ul className='md:mt-6 font-semibold'>
                        <li><FontAwesomeIcon className='pr-2 text-cyan-500' icon={faLightbulb} />Creative Study Pattern</li>
                        <li><FontAwesomeIcon className='pr-2 text-cyan-500' icon={faPaperPlane} />Quick Crash Courses</li>
                        <li><FontAwesomeIcon className='pr-2 text-cyan-500' icon={faRuler} />Provided with Experimental Examples</li>
                        <li><FontAwesomeIcon className='pr-2 text-cyan-500' icon={faCertificate} />Certification Awarded</li>
                    </ul>
                </div>
                <div className="header-img">
                    <img src="https://miro.medium.com/max/1272/1*ZSVmWGcc1weENb0ShawWxw.gif" alt="header-image" />
                </div>
            </div>

            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:p-10 my-10">
                {
                    topics.map(topic => <Topic 
                        key={topic.id}
                        topic={topic}></Topic>)
                }
            </div>
            
        </div>
    );
};

export default Header;