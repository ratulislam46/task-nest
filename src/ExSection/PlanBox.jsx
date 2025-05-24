import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const PlanBox = ({ singlePlan }) => {
    // console.log(singlePlan);

    const { credits, credits1, description, duration, duration1, featured, featured1, featured_task, featured_task1, money, plan, task_number, task_number1, title } = singlePlan;

    return (
        <div className='px-10 lg:px-8 pt-8 pb-4 bg-white border border-gray-100 hover:border-amber-300 rounded-xl shadow-xl mt-16 hover:border'>
            <div className='space-y-2'>
                <h3 className='card-title'>{title}</h3>
                <p className='text-gray-500'>{description}</p>
            </div>
            <div className='py-8'>
                <h1 className='text-4xl font-semibold'>${money} </h1>
                <p className='text-gray-500'>Incl all taxes</p>
            </div>

            <div className='space-y-3'>
                <p className='font-semibold'>It Includes</p>
                <div className='flex justify-between'>
                    <p className='text-gray-600'>{duration}</p>
                    <p className='text-gray-600'>{duration1}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-600'>{task_number}</p>
                    <p className='text-gray-600'>{task_number1}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-600'>{featured}</p>
                    <p className='text-gray-600'>{featured1}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-600'>{plan}</p>
                    <p className='text-gray-600'><AiOutlineCheck className='text-green-500' /></p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-600'>{credits}</p>
                    <p className='text-gray-600'>{credits1}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-gray-600'>{featured_task}</p>
                    <p className='text-gray-600'>{featured_task1}</p>
                </div>
            </div>

            <button className='btn w-full my-6 bg-amber-400'>Get Started</button>

        </div>
    );
};

export default PlanBox;