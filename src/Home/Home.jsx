import React from 'react';
import Banner from './Banner';
import AllTask from './AllTask';
import Talk from '../ExSection/Talk';
import Markquee from '../ExSection/Markquee';

const Home = () => {
    

    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Markquee></Markquee>
            </section>
            
            <section>
                <AllTask></AllTask>
            </section>
            <section>
                <Talk></Talk>
            </section>
        </div>
    );
};

export default Home;