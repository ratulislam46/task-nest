import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ShowMyPost from './ShowMyPost';
import { AuthContext } from '../../auth/AuthProvider/AuthProver';

const MyPostedTask = () => {

    const {user} = use(AuthContext)

    const initialTask = useLoaderData();
    // console.log(initialTask);
    const [tasks, setTasks] = useState(initialTask);
    // console.log(tasks);

    useEffect(()=>{
        const remainingPost = tasks.filter(userPost=>userPost.email === user.email )
        // console.log(remainingPost);
        setTasks(remainingPost)
    },[])

    return (
        <div className='w-11/12 mx-auto mb-12'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-5xl font-semibold font-serif my-12 dark:text-white'>My Posted Task</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 lg:my-0'>
                {
                    tasks.map(myPost => <ShowMyPost key={myPost._id} tasks={tasks} setTasks={setTasks} myPost={myPost}></ShowMyPost>)
                }
            </div>
        </div>
    );
};

export default MyPostedTask;