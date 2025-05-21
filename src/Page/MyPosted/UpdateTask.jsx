import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateTask = () => {

    const data = useLoaderData();
    console.log(data);
    const { _id, title, name, email, deadline, category, description, budget } = data;


    const hanleUpdate = (e) => {
        e.preventDefault()
        console.log('update'); 
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 border px-8 py-8">
                <form>
                    <h1 className='text-center font-semibold mb-6 border-b pb-4 border-red-50'>Update Task info</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" defaultValue={name} name='name' className="input" placeholder="Name" disabled />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" defaultValue={email} name='email' className="input" placeholder="Email" disabled />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Task Title</label>
                            <input type="text" defaultValue={title} name='title' className="input" placeholder="Title" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Deadline</label>
                            <input type="date" defaultValue={deadline} name='deadline' className="input" placeholder="Deadline" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Budget</label>
                            <input type="text" defaultValue={budget} name='budget' className="input" placeholder="Budget" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Description</label>
                            <input type="text" defaultValue={description} name='description' className="input" placeholder="Description . . ." />
                        </fieldset>
                        <fieldset className='border border-gray-300 rounded-md px-2 py-3'>
                            <label className='label'>Category:</label>
                            <select name='category' defaultValue={category}>
                                <option>Developer</option>
                                <option>UI/UX Designer</option>
                                <option>Writing</option>
                                <option>SEO</option>
                                <option>Marketing</option>
                            </select>
                        </fieldset>
                    </div>
                    <input onClick={hanleUpdate} type="submit" value="Update" className='w-full my-6 btn btn-accent hover:text-white' />
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;