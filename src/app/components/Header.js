// components/Header.js
import React from 'react';
import { IoIosSearch, IoIosNotifications, IoMdPerson } from 'react-icons/io';

export default function Header() {
    return (
        <div className="w-full border-b border-gray-300 bg-white px-5 py-4 flex justify-between items-center z-10" style={{ position: 'relative' }}>
            <div className="flex items-center space-x-4">
                <img src="/vercel.svg" alt="Logo" className="h-8" />
            </div>
            <div className="relative ml-24"> {/* Margin left of 100px */}
                <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                <input 
                    type="search" 
                    placeholder="Search anything" 
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-96"
                    style={{ paddingLeft: '2.5rem' }}  // Padding left to accommodate the icon
                />
            </div>
            <div className="flex items-center space-x-4">  
                <div className="relative">
                    <IoIosNotifications className="text-xl"/>
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
                </div>
                <div className="flex items-center pl-4 border-l border-gray-300"> {/* Added left border */}
                    <IoMdPerson className="text-3xl rounded-full bg-purple-500 p-2 text-white" /> {/* Increased size and changed bg to purple */}
                    <div className="flex flex-col ml-2">
                        <span>Sabiq</span>
                        <span className="text-xs text-gray-600">Business</span> {/* Subtitle added */}
                    </div>
                </div>
            </div>
        </div>
    );
}
