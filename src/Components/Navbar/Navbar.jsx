import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../auth/AuthProvider/AuthProver';
import toast from 'react-hot-toast';

const Navbar = () => {

    const { user, LogOut } = use(AuthContext);
    // console.log(user);

    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/addtask'>Add Task</NavLink></li>
            <li><NavLink to='/browseTask'>Browse Task</NavLink></li>
            <li><NavLink to='/myPostedTask'>My Posted Task</NavLink></li>
        </>


const handleLogOut = () =>{
    LogOut()
    .then(()=>{
        toast.success('Logout succefully')
    })
    .catch((error)=>{
        console.log(error);
    })
}

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src="https://i.postimg.cc/y6FHKDtp/icon.jpg" alt="logo" className='w-16' />
                    <h3 className='font-semibold text-2xl'>TaskNest</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>

            <div className="navbar-end">
                <div>
                    {
                        user ? user?.photoURL ?
                            <img src={user.photoURL} className={`h-[40px] rounded-2xl mr-2 hover:${user.email}`}></img> :
                            <p className='mr-2 text-white font-semibold text-xl'>{user.email}</p>
                            : " "
                    }
                </div>
                {
                    user ?
                        <button onClick={handleLogOut} className='btn'>Log out</button> :
                        <Link to='/login' className='btn'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;