import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer'
import Mood from '../Components/Navbar/Mood';
import { ThemeProvider } from '../Components/Navbar/ThemeProvider';

const Layout = () => {
    return (
        <>
            <ThemeProvider>
                <div className='bg-white dark:bg-gray-900 '>
                    <div className='absolute ml-72 lg:ml-96 pt-5'>
                        <Mood></Mood>
                    </div>
                    <nav>
                        <Navbar></Navbar>
                    </nav>
                    <main className=' min-h-[calc(100vh-250px)]'>
                        <Outlet></Outlet>
                    </main>
                    <footer>
                        <Footer></Footer>
                    </footer>
                </div>
            </ThemeProvider>
        </>
    );
};

export default Layout;