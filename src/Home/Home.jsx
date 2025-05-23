import React from 'react';
import Banner from './Banner';
import AllTask from './AllTask';
import Talk from '../ExSection/Talk';
import Markquee from '../ExSection/Markquee';
import Package from '../ExSection/Package';

const Home = () => {


    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Markquee></Markquee>
            </section>

            <section className='w-11/12 mx-auto'>
                <AllTask></AllTask>
            </section>
            <section className='w-11/12 mx-auto'>
                <Package></Package>
            </section>
            <section className='w-11/12 mx-auto'>
                <Talk></Talk>
            </section>

        </div>
    );
};

export default Home;