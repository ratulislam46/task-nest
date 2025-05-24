import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ShowMyPost = ({ myPost, setTasks, tasks }) => {


    const { _id, title, deadline, description } = myPost;


    const handleDeleteTask = (id) => {
        // console.log('delete', id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://tasknest-server-six.vercel.app/addtask/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete', data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                const remainingTask = tasks.filter(task => task._id !== id)
                setTasks(remainingTask)
            }
        });

    }

    return (
        <div className="card bg-[#fb6376] hover:bg-[#fb6376]">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{deadline}</p>
                <p>{description}</p>

                {/* button  */}
                <div className='flex  gap-5'>
                    <Link to={`/updateTask/${_id}`} className='btn btn-soft btn-accent'>Update</Link>
                    <Link className='btn btn-soft btn-secondary'>Bids</Link>
                    <Link onClick={() => handleDeleteTask(_id)} className='btn btn-soft btn-warning'>Delete</Link>
                </div>

            </div>
        </div>
    );
};

export default ShowMyPost;