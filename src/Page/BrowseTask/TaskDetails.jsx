import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {

    const singleTask = useLoaderData();
    const { _id, title, name, email, deadline, category, description, budget } = singleTask;


    return (
        <div className='my-20 border border-gray-400 rounded-md flex justify-between items-center px-5 lg:px-10 py-10 w-11/12 mx-auto bg-gray-100'>
            <div className='space-y-4'>
                <h1 className='text-xl font-serif'>{name}</h1>
                <h1 className='text-xl font-serif -mt-4 border-b-2 border-b-cyan-950 pb-2'>{email}</h1>
                <h1 className='text-3xl font-semibold font-serif'>Title: {title}</h1>
                <h1 className='text-gray-500'>Deadline: {deadline}</h1>
                <h1 className='text-gray-500'>Category: {category}</h1>
                <h1 className='text-gray-500'>Description: {description}</h1>
                <h1 className='text-gray-500'>Budget: <span className='text-green-500 font-semibold'>{budget}</span></h1>
            </div>
            <div className='hidden md:block'>
                <img src="https://i.postimg.cc/1RdF0mrs/1-AHYE5p7ry-TDc-VBtr-F0h-M7w.gif" alt="" />
            </div>
        </div>
    );
};

export default TaskDetails;