import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ShowMyPost from './ShowMyPost';

const MyPostedTask = () => {

    const initialTask = useLoaderData();
    // console.log(myPostedTask);
    const [tasks, setTasks] = useState(initialTask);
    // console.log(tasks);

    return (
        <div>
            <h1 className='text-center text-2xl md:text-3xl lg:text-5xl font-semibold font-serif my-12'>My Posted Task</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 lg:my-0'>
                {
                    tasks.map(myPost => <ShowMyPost key={myPost._id} tasks={tasks} setTasks={setTasks} myPost={myPost}></ShowMyPost> )
                }
            </div>
        </div>
    );
};

export default MyPostedTask;