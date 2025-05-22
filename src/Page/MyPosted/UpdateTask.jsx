import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTask = () => {

    const initialInfo = useLoaderData();

    const { _id, title, name, email, deadline, category, description, budget } = initialInfo


    const hanleUpdate = (e) => {
        e.preventDefault()
        console.log('clicked update');

        const title = e.target.title.value;
        const deadline = e.target.deadline.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const budget = e.target.budget.value;
        console.log(title);

        const updateValue = {
            _id, title, deadline, category, description, budget
        }

        fetch('http://localhost:3000/addtask', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after update', data);
                Swal.fire({
                    title: "Update your task!",
                    icon: "success",
                    draggable: true
                });
            })

    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 border px-8 py-8">
                <form onSubmit={hanleUpdate}>
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
                    <input type="submit" value="Update" className='w-full my-6 btn btn-accent hover:text-white' />
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;