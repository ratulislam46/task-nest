import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {

    const singleTask = useLoaderData();
    const { _id, title, name, email, deadline, category, description, budget } = singleTask;

    const [bids, setBids] = useState(0)
    console.log(bids);


    return (
        <div className='w-11/12 mx-auto my-20 '>

            <p className='font-semibold text-2xl'>You bid {bids} task</p>

            <div className='mt-6 border border-gray-400 rounded-md flex justify-between items-center px-5 lg:px-10 py-10 bg-gray-100'>
                <div className='space-y-4'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-serif'>{name}</h1>
                        <span onClick={() => setBids(bids + 1)} className="text-xl btn btn-soft btn-info"> <IoMdAdd size={24} /> Bids</span>
                    </div>

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
        </div>
    );
};

export default TaskDetails;