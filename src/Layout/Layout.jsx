import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer'

const Layout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto min-h-[calc(100vh-200px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;