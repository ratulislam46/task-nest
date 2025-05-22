import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { TbCurrencyTaka } from 'react-icons/tb';

const RecentTask = ({ task }) => {

    console.log(task);
    const { budget, category, deadline, description, email, name, title, _id } = task;

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body border border-gray-100 hover:rounded-md hover:border-amber-200">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <span className="text-xl btn btn-soft btn-info"> <IoMdAdd size={24} /> Bids</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Category: {category}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Deadline: {deadline}</span>
                    </li>
                     <p className=' text-gray-500 border border-blue-300 py-4 px-2 rounded-md'>Describtion : {description}</p>
                   <div className='flex justify-between mx-1'>
                    <h1>Post: {name}</h1>
                    <h1 className='font-semibold flex items-center'><TbCurrencyTaka size={16} /><span className='font-bold text-green-600'>{budget}</span></h1>
                   </div>
                </ul>
            </div>
        </div>
    );
};

export default RecentTask;