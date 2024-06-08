'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaRegAddressCard, FaSignOutAlt } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineSetting, AiOutlineTool, AiOutlineUser, AiOutlineUsergroupAdd, AiOutlineAppstore, AiOutlineBranches, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function Sidebar() {
    const [isConfigOpen, setIsConfigOpen] = useState(false);
    const pathname = usePathname();

    const toggleConfigMenu = () => {
        setIsConfigOpen(!isConfigOpen);
    };

    const isActive = (path) => pathname === path;

    const activeStyle = "bg-purple-100 text-purple-600 border-r-4 border-purple-600";

    return (
        <div className="fixed top-0 bg-white border-r border-gray-300 w-64 h-full flex flex-col justify-between">
            <div className="p-5">
                <div className="mb-5 pb-5 border-b border-gray-300">
                    <img src="vercel.svg" alt="Logo" className="h-8" />
                </div>
                <div className="space-y-5">
                    <div>
                        <h3 className="font-semibold text-sm mb-2">General</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link href="/" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/') ? activeStyle : ''}`}>
                                    <FaHome className={`mr-3 text-lg ${isActive('/') ? 'fill-current' : ''}`} /> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/leads" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/leads') ? activeStyle : ''}`}>
                                    <FaRegAddressCard className={`mr-3 text-lg ${isActive('/leads') ? 'fill-current' : ''}`} /> Leads
                                </Link>
                            </li>
                            <li>
                                <Link href="/followup" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/followup') ? activeStyle : ''}`}>
                                    <IoIosPeople className={`mr-3 text-lg ${isActive('/followup') ? 'fill-current' : ''}`} /> Followup
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm mb-2">Support</h3>
                        <ul className="space-y-2.5">
                            <li>
                                <Link href="/settings" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/settings') ? activeStyle : ''}`}>
                                    <AiOutlineSetting className={`mr-3 text-lg ${isActive('/settings') ? 'fill-current' : ''}`} /> Settings
                                </Link>
                            </li>
                            <li>
                                <button onClick={toggleConfigMenu} className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md w-full text-left ${isActive('/configurations') ? activeStyle : ''}`}>
                                    <AiOutlineTool className={`mr-3 text-lg ${isConfigOpen ? 'fill-current' : ''}`} /> Configurations {isConfigOpen ? <MdKeyboardArrowUp className="ml-auto" /> : <MdKeyboardArrowDown className="ml-auto" />}
                                </button>
                                <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isConfigOpen ? 'max-h-screen' : 'max-h-0'}`}>
                                    <div className="pl-4">
                                        <h4 className="font-semibold text-sm mb-2">Employees</h4>
                                        <ul className="space-y-2.5 pl-4">
                                            <li>
                                                <Link href="/configurations/staff" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/configurations/staff') ? activeStyle : ''}`}>
                                                    <AiOutlineUser className={`mr-3 text-lg ${isActive('/configurations/staff') ? 'fill-current' : ''}`} /> Staff
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/configurations/role" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/configurations/role') ? activeStyle : ''}`}>
                                                    <AiOutlineUsergroupAdd className={`mr-3 text-lg ${isActive('/configurations/role') ? 'fill-current' : ''}`} /> Role
                                                </Link>
                                            </li>
                                        </ul>
                                        <h4 className="font-semibold text-sm mb-2 mt-4">Business</h4>
                                        <ul className="space-y-2.5 pl-4">
                                            <li>
                                                <Link href="/configurations/product-category" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/configurations/product-category') ? activeStyle : ''}`}>
                                                    <AiOutlineAppstore className={`mr-3 text-lg ${isActive('/configurations/product-category') ? 'fill-current' : ''}`} /> Product Category
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/configurations/products" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/configurations/products') ? activeStyle : ''}`}>
                                                    <AiOutlineAppstore className={`mr-3 text-lg ${isActive('/configurations/products') ? 'fill-current' : ''}`} /> Products
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/configurations/branch" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/configurations/branch') ? activeStyle : ''}`}>
                                                    <AiOutlineBranches className={`mr-3 text-lg ${isActive('/configurations/branch') ? 'fill-current' : ''}`} /> Branch
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/configurations/nature-of-business" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md ${isActive('/configurations/nature-of-business') ? activeStyle : ''}`}>
                                                    <AiOutlineInfoCircle className={`mr-3 text-lg ${isActive('/configurations/nature-of-business') ? 'fill-current' : ''}`} /> Nature of Business
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <ul className="space-y-2.5">
                    <li>
                        <Link href="/logout" className="flex items-center text-gray-700 hover:text-gray-900 block py-2.5 px-4 rounded-md">
                            <FaSignOutAlt className="mr-3 text-lg" /> Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
