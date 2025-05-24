import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {

    const [text] = useTypewriter({
        words: [
            "Smart Marketplace for Freelance Tasks",
            "Where Work Finds the Right Hands",
            "Your Gateway to Freelance Opportunities",
            "Get Your Task Done by Real Talent",
            "Post Tasks. Get Bids. Hire the Best."
        ],
        loop: 0,
        delaySpeed: 2000,
    });
    // console.log('current text', text);

    return (
        <div>
            <div className='lg:flex justify-around items-center gap-28 bg-[#accadc] '>
                <div className='px-4 md:px-6 lg:px-10'>
                    <h1 className='text-4xl text-center lg:text-5xl font-semibold pt-10 md:pt-6 lg:pt-0'>

                        <span className='font-semibold text-amber-600'> {text}</span>
                        <span ><Cursor /></span>
                    </h1>
                    <p className='text-gray-500 pt-2 lg:pt-4 text-center'>TaskNest is a reliable and easy-to-use freelance task marketplace where clients post tasks and skilled freelancers get them done efficiently. From graphic design to web development, find talent or work - all in one nest.</p>
                </div>
                <div className='mt-8 lg:mt-0'>
                    <img src="https://i.postimg.cc/LXGF7xQx/1-AHYE5p7ry-TDc-VBtr-F0h-M7w.gif" alt="image" className='h-96 mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default Banner;