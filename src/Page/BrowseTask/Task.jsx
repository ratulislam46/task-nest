import React from 'react';
import { Link } from 'react-router';

const Task = ({ task }) => {

    const { name, email, title, deadline, description, budget } = task;

    return (
        <div>
            <div className="card bg-[#fb6376] card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="justify-end card-actions">
                        <Link><button className='btn bg-green-400'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;