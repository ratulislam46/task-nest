import React from 'react';
import { useLoaderData } from 'react-router';
import Task from './Task';



const BrowseTask = () => {

    const allTask = useLoaderData()
    // console.log(allTask);

    return (
        <div className='mt-14 mb-12 w-11/12 mx-auto'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl text-center mb-14 dark:text-white'>Browse 
                All Task </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allTask.map(task=><Task key={task._id} task={task}></Task>)
                }
            </div>
        </div>
    );
};

export default BrowseTask;