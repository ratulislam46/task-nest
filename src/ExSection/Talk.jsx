import React from 'react';
import { Link } from 'react-router';

const Talk = () => {
    return (
        <div className='lg:flex justify-between items-center my-24'>
            <div className=' space-y-5'>
                <h3 className='text-xl text-amber-500 font-semibold'>Talk to support</h3>
                <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold -mt-4'>Frequently asked questiions</h1>
                <p className='text-gray-500'>Find answers to your questions instantly. Need more guidance? Dive into our extensive documentation for all your queries.</p>
                <Link to='/'><button className='btn bg-amber-400 px-6 md:px-8 lg:px-10 p rounded'>Contact Our Team</button></Link>
            </div>

            <div className=' mt-12 lg:mt-0'>
                <div className="collapse collapse-plus bg-gray-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">How do I get started as a freelancer?</div>
                    <div className="collapse-content text-sm text-gray-500">Sign up, complete your profile, and start browsing projects. Submit proposals and communicate with clients to get hired.</div>
                </div>
                <div className="collapse collapse-plus bg-gray-100 border border-base-300 mt-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">What kind of projects can I find?</div>
                    <div className="collapse-content text-sm text-gray-500">Our marketplace offers a variety of projects across industries like writing, design, programming, marketing, and more.</div>
                </div>
                <div className="collapse collapse-plus bg-gray-100 border border-base-300 mt-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">How do I ensure payment security?</div>
                    <div className="collapse-content text-sm text-gray-500">Use our secure payment system. Funds are held in escrow until you complete the project and both parties are satisfied.</div>
                </div>
                <div className="collapse collapse-plus bg-gray-100 border border-base-300 mt-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">What fees are involved for freelancers?</div>
                    <div className="collapse-content text-sm text-gray-500">We charge a service fee on completed projects, typically a percentage of the project's total value. Check our fee structure for details.</div>
                </div>
                <div className="collapse collapse-plus bg-gray-100 border border-base-300 mt-3">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">How can I build trust with clients?</div>
                    <div className="collapse-content text-sm text-gray-500">Maintain clear communication, deliver high-quality work on time, and ask for reviews. A strong portfolio also helps showcase your skills.</div>
                </div>
            </div>
        </div>
    );
};

export default Talk;