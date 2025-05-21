import React from 'react';
import Marquee from 'react-fast-marquee';

const Markquee = () => {
    return (
        <div className='bg-gray-100 py-6'>
            <Marquee speed={90} gradient={false} pauseOnHover={true}>
               <h1 className='font-bold text-2xl mr-56'>Post your task now & get it done by top freelancers!</h1>
               <h1 className='font-bold text-2xl mr-56'>Need something done? Post a task & relax!</h1>
               <h1 className='font-bold text-2xl mr-56'>Skilled freelancers are ready to complete your tasks!</h1>
               <h1 className='font-bold text-2xl mr-56'>Your task, their skill — success delivered!</h1>
               <h1 className='font-bold text-2xl mr-56'>Fast, affordable, and reliable task completion starts here!</h1>
            </Marquee>
        </div>
    );
};

export default Markquee;