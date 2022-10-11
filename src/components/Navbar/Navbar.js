import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='md:flex md:justify-between md:items-center md:m-4 md:p-4 text-center'>
            <div className="title">
                <h1 className='font-bold md:text-4xl text-2xl text-cyan-500'><span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>Quizio</span> - eLearning Platform</h1>
            </div>
            <div className="font-semibold flex flex-col py-2 md:flex md:flex-row md:text-2xl link text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                <NavLink className="md:px-4 py-1" to='/'>Home</NavLink>
                <NavLink className="md:px-4 py-1" to='/topics'>Topics</NavLink>
                <NavLink className="md:px-4 py-1" to='/statistics'>Statistics</NavLink>
                <NavLink className="md:px-4 py-1" to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
