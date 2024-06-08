"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaHome, FaRegAddressCard } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineSetting, AiOutlineTool } from 'react-icons/ai';

export default function Sidebar() {
    const [selected, setSelected] = useState('/');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setSelected(router.pathname);
        }
    }, [router.pathname]);

    const isActive = (path) => selected === path;

    return (
        <div className="fixed top-16 bg-white border-r border-gray-300 w-64 p-5 h-full">
            <div className="space-y-5">
                <div>
                    <h3 className="font-semibold text-sm mb-2">General</h3>
                    <ul className="space-y-2.5">
                        <li>
                            <Link href="/" legacyBehavior>
                                <a
                                    className={`flex items-center justify-between block py-2.5 px-3 rounded-lg cursor-pointer ${
                                        isActive('/') ? 'text-purple-500 border-l-4 border-purple-500' : 'text-gray-700 hover:text-gray-900'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <FaHome className={`mr-3 text-lg ${isActive('/') ? 'text-purple-500' : ''}`} /> Home
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/leads" legacyBehavior>
                                <a
                                    className={`flex items-center justify-between block py-2.5 px-3 rounded-lg cursor-pointer ${
                                        true ? 'text-purple-500 border-l-4 border-purple-500' : 'text-gray-700 hover:text-gray-900'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <FaRegAddressCard className={`mr-3 text-lg ${true ? 'text-purple-500' : ''}`} /> Leads
                                    </div>
                                    <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">8</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/followup" legacyBehavior>
                                <a
                                    className={`flex items-center justify-between block py-2.5 px-3 rounded-lg cursor-pointer ${
                                        isActive('/followup') ? 'text-purple-500 border-l-4 border-purple-500' : 'text-gray-700 hover:text-gray-900'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <IoIosPeople className={`mr-3 text-lg ${isActive('/followup') ? 'text-purple-500' : ''}`} /> Followup
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-sm mb-2">Support</h3>
                    <ul className="space-y-2.5">
                        <li>
                            <Link href="/settings" legacyBehavior>
                                <a
                                    className={`flex items-center justify-between block py-2.5 px-3 rounded-lg cursor-pointer ${
                                        isActive('/settings') ? 'text-purple-500 border-l-4 border-purple-500' : 'text-gray-700 hover:text-gray-900'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <AiOutlineSetting className={`mr-3 text-lg ${isActive('/settings') ? 'text-purple-500' : ''}`} /> Settings
                                    </div>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/configurations" legacyBehavior>
                                <a
                                    className={`flex items-center justify-between block py-2.5 px-3 rounded-lg cursor-pointer ${
                                        isActive('/configurations') ? 'text-purple-500 border-l-4 border-purple-500' : 'text-gray-700 hover:text-gray-900'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <AiOutlineTool className={`mr-3 text-lg ${isActive('/configurations') ? 'text-purple-500' : ''}`} /> Configurations
                                    </div>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
