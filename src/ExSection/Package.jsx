import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../auth/AuthProvider/AuthProver';
import PlanBox from './PlanBox';

const Package = () => {

    // const { setLoading } = use(AuthContext);

    const [planData, setPlanData] = useState([])
    // console.log(planData);

    useEffect(() => {
        const data = fetch('/Bussiness.json')
            .then(res => res.json())
            .then(data => {
                setPlanData(data)
            })
    }, [])

    return (
        <div className='bg-gray-100 py-2'>
            <div className='w-11/12 mx-auto my-30'>
                <div className='text-center space-y-5'>
                    <h3 className='font-bold'>Best Plans to Go With</h3>
                    <h1 className='text-4xl lg:text-5xl font-semibold -mt-4'>Tailored Packages for Every Business Stage and Size</h1>
                    <p className='text-gray-500'>Enter a realm of limitless possibilities, where extraordinary talent thrives and beckons you to unfold your boundless potential.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {
                        planData.map(singlePlan => <PlanBox key={singlePlan.id} singlePlan={singlePlan}></PlanBox>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Package;