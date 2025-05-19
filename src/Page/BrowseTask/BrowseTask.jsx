import React from 'react';
import { useLoaderData } from 'react-router';
import Task from './Task';



const BrowseTask = () => {

    const allTask = useLoaderData()
    // console.log(allTask);

    return (
        <div className='mt-24'>
            <h1>browse all task </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allTask.map(task=><Task key={task._id} task={task}></Task>)
                }
            </div>
        </div>
    );
};

export default BrowseTask;