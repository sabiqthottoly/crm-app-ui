// components/Header.js
import React from 'react';
import { IoIosNotifications, IoMdPerson } from 'react-icons/io';

export default function Header() {
    return (
        <div className="w-full border-b border-gray-300 bg-white px-4 py-2 flex justify-between items-center z-10 sticky top-0">
            <div className="flex items-center space-x-2">
                <img src="/vercel.svg" alt="Logo" className="h-6" />
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <IoIosNotifications className="text-lg"/>
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
                </div>
                <div className="flex items-center pl-4 border-l border-gray-300">
                    <IoMdPerson className="text-2xl rounded-full bg-purple-500 p-1 text-white" />
                    <div className="flex flex-col ml-2">
                        <span>Sabiq</span>
                        <span className="text-xs text-gray-600">Business</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
