import React from 'react';
import Marquee from 'react-fast-marquee';

const Markquee = () => {
    return (
        <div className='bg-gray-100 py-6'>
            <Marquee>
               <h1 className='font-bold text-2xl '>Post your task now & get it done by top freelancers!</h1>
            </Marquee>
        </div>
    );
};

export default Markquee;