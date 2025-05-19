import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {

    const singleTask = useLoaderData();
    const { _id, title, name, email, deadline, description, budget } = singleTask;

    return (
        <div className='border px-10 py-10'>
            <h1>Title: {title}</h1>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Deadline: {deadline}</h1>
            <h1>Description: {description}</h1>
            <h1>Budget: {budget}</h1>
            <h1>id:{_id}</h1>
        </div>
    );
};

export default TaskDetails;