import React, { useEffect, useState } from 'react';
import RecentTask from './RecentTask';

const AllTask = () => {

    const [tasks, setTasks] = useState([])
    // console.log(tasks);

    useEffect(() => {
        fetch('https://tasknest-server-six.vercel.app/addtask')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTasks(data.reverse().slice(0, 6))
            })
    }, [])

    return (
        <div className='my-14'>
            <h1 className='text-4xl lg:text-5xl font-semibold text-center pb-4 '>Recently posted tasks</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                {
                    tasks.map(task=><RecentTask key={task._id} task={task}></RecentTask>)
                }
            </div>
        </div>
    );
};

export default AllTask;