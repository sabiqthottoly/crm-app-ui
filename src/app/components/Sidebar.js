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
        <div className="fixed top-0 bg-white border-r border-gray-300 w-52 h-full flex flex-col justify-between">
            <div className="p-4">
                <div className="space-y-4 mt-16">
                    <div>
                        <h3 className="font-semibold text-xs mb-2">General</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/dashboard" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/dashboard') ? activeStyle : ''}`}>
                                    <FaHome className={`mr-2 text-base ${isActive('/dashboard') ? 'fill-current' : ''}`} /> Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/leads" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/leads') ? activeStyle : ''}`}>
                                    <FaRegAddressCard className={`mr-2 text-base ${isActive('/leads') ? 'fill-current' : ''}`} /> Leads
                                </Link>
                            </li>
                            <li>
                                <Link href="/followup" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/followup') ? activeStyle : ''}`}>
                                    <IoIosPeople className={`mr-2 text-base ${isActive('/followup') ? 'fill-current' : ''}`} /> Followup
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xs mb-2">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/settings" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/settings') ? activeStyle : ''}`}>
                                    <AiOutlineSetting className={`mr-2 text-base ${isActive('/settings') ? 'fill-current' : ''}`} /> Settings
                                </Link>
                            </li>
                            <li>
                                <button onClick={toggleConfigMenu} className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md w-full text-left text-sm ${isActive('/configurations') ? activeStyle : ''}`}>
                                    <AiOutlineTool className={`mr-2 text-base ${isConfigOpen ? 'fill-current' : ''}`} /> Configurations {isConfigOpen ? <MdKeyboardArrowUp className="ml-auto" /> : <MdKeyboardArrowDown className="ml-auto" />}
                                </button>
                                <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isConfigOpen ? 'max-h-screen' : 'max-h-0'}`}>
                                    <div className="pl-3">
                                        <h4 className="font-semibold text-xs mb-2">Employees</h4>
                                        <ul className="space-y-2 pl-2">
                                            <li>
                                                <Link href="/configurations/staff" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/configurations/staff') ? activeStyle : ''}`}>
                                                    <AiOutlineUser className={`mr-2 text-base ${isActive('/configurations/staff') ? 'fill-current' : ''}`} /> Staff
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/configurations/role" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/configurations/role') ? activeStyle : ''}`}>
                                                    <AiOutlineUsergroupAdd className={`mr-2 text-base ${isActive('/configurations/role') ? 'fill-current' : ''}`} /> Role
                                                </Link>
                                            </li>
                                        </ul>
                                        <h4 className="font-semibold text-xs mb-2 mt-3">Business</h4>
                                        <ul className="space-y-2 pl-2">
                                            <li>
                                                <Link href="/configurations/product-category" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/configurations/product-category') ? activeStyle : ''}`}>
                                                    <AiOutlineAppstore className={`mr-2 text-base ${isActive('/configurations/product-category') ? 'fill-current' : ''}`} /> Product Category
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/configurations/products" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/configurations/products') ? activeStyle : ''}`}>
                                                    <AiOutlineAppstore className={`mr-2 text-base ${isActive('/configurations/products') ? 'fill-current' : ''}`} /> Products
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/configurations/branch" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/configurations/branch') ? activeStyle : ''}`}>
                                                    <AiOutlineBranches className={`mr-2 text-base ${isActive('/configurations/branch') ? 'fill-current' : ''}`} /> Branch
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/configurations/nature-of-business" className={`flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm ${isActive('/configurations/nature-of-business') ? activeStyle : ''}`}>
                                                    <AiOutlineInfoCircle className={`mr-2 text-base ${isActive('/configurations/nature-of-business') ? 'fill-current' : ''}`} /> Nature of Business
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
            <div className="mb-3">
                <ul className="space-y-2">
                    <li>
                        <Link href="/logout" className="flex items-center text-gray-700 hover:text-gray-900 block py-2 px-3 rounded-md text-sm">
                            <FaSignOutAlt className="mr-2 text-base" /> Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
