import React from 'react';
import {useLoaderData} from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const topics = data.data;

    return (
        <div className='flex justify-center sm:m-2 md:m-12'>
            <ResponsiveContainer width="80%" height={200}>
                <LineChart  data={topics}>   
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
           
        </div>
    );
};

export default Statistics;