import React from 'react';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { useDarkMode } from './ThemeProvider';

const Mood = () => {

    const { darkMode, setDarkMode } = useDarkMode()

    return (
        <button onClick={() => setDarkMode(!darkMode)} className=' transition-all rounded-md bg-gray-200'>
            {
                darkMode ?
                    <div className='flex gap-1 px-2'><CiLight size={24} /> Light</div> :
                    <div className='flex gap-1 px-2'><MdDarkMode size={24} /> Dark</div>
            }
        </button>
    );
};

export default Mood;