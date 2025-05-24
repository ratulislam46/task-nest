import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthProvider/AuthProver';

const AddTask = () => {

    const {user} = use(AuthContext);
    // console.log(user);
    // console.log(user.email);

    const handleAddTask = (e) => {
        e.preventDefault()

        const from = e.target;
        const formData = new FormData(from)
        const allValue = Object.fromEntries(formData.entries())
        console.log(allValue);

        fetch('https://tasknest-server-six.vercel.app/addtask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allValue)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Your task added successfully",
                        icon: "success",
                        draggable: true
                    });
                }
                console.log('after added', data);
            })
            
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 border px-8 py-8">
                <form onSubmit={handleAddTask}>
                    <h1 className='text-center font-semibold mb-6 border-b pb-4 border-red-50'>Add Task</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' defaultValue={user.email} readOnly  className="input" placeholder="Email" required />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Task Title</label>
                            <input type="text" name='title' className="input" placeholder="Title" required />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Deadline</label>
                            <input type="date" name='deadline' className="input" placeholder="Deadline" required />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Budget</label>
                            <input type="text" name='budget' className="input" placeholder="Budget" required />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Description</label>
                            <input type="text" name='description' className="input" placeholder="Description . . ." required />
                        </fieldset>
                        <fieldset className='border border-gray-300 rounded-md px-2 py-3'>
                            <label className='label'>Category:</label>
                            <select name='category' required>
                                <option>Developer</option>
                                <option>UI/UX Designer</option>
                                <option>Writing</option>
                                <option>SEO</option>
                                <option>Marketing</option>
                            </select>
                        </fieldset>
                    </div>
                    <input type="submit" value="Submit" className='w-full my-6 btn btn-accent hover:text-white' />
                </form>
            </div>
        </div>
    );
};

export default AddTask;