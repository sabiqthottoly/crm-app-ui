'use client';
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaCalendarAlt, FaFilter } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useRouter } from 'next/navigation';

const rolesMockData = [
  {
    id: 1,
    name: 'Sales Manager',
    date: '1 May, 2024',
    description: 'Oversees the sales team and drives sales strategies to achieve targets.',
    status: 'Active',
    admins: 5,
    assigned: true
  },
  {
    id: 2,
    name: 'Customer Support',
    date: '1 May, 2024',
    description: 'Handles customer inquiries and resolves issues to ensure customer satisfaction.',
    status: 'Active',
    admins: 3,
    assigned: true
  },
  {
    id: 3,
    name: 'Marketing Specialist',
    date: '1 May, 2024',
    description: 'Develops and executes marketing campaigns to promote products and services.',
    status: 'Deactivated',
    admins: 0,
    assigned: false
  },
  {
    id: 4,
    name: 'Product Manager',
    date: '1 May, 2024',
    description: 'Manages product development and ensures alignment with customer needs.',
    status: 'Deactivated',
    admins: 0,
    assigned: false
  },
  {
    id: 5,
    name: 'Business Analyst',
    date: '1 May, 2024',
    description: 'Analyzes business processes and identifies opportunities for improvement.',
    status: 'Active',
    admins: 2,
    assigned: true
  },
  {
    id: 6,
    name: 'CRM Administrator',
    date: '1 May, 2024',
    description: 'Manages the CRM system and ensures data integrity and system performance.',
    status: 'Active',
    admins: 1,
    assigned: true
  },
];

const RoleManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const router = useRouter();
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  const handleCreateRole = () => {
    router.push('/configurations/role/create-role');
  };
  
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const filteredRoles = rolesMockData.filter((role) => {
    const matchesSearch = role.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate ? role.date === selectedDate : true;
    const matchesStatus = selectedStatus === 'All' || role.status === selectedStatus;

    return matchesSearch && matchesDate && matchesStatus;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-5" style={{ marginLeft: '256px' }}>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-black">Role Management</h1>
            <button onClick={handleCreateRole} className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              Create new role
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-1/3">
              <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search by role name"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 w-full"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="date"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <select
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  value={selectedStatus}
                  onChange={(e) => handleStatusChange(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Deactivated">Deactivated</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRoles.map((role) => (
              <div key={role.id} className="p-5 border border-gray-300 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-2">{role.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{role.date}</p>
                <p className="text-sm mb-4">{role.description}</p>
                {role.assigned ? (
                  <div className="flex items-center mb-4">
                    <img src="/vercel.svg" alt="Admins" className="h-6 w-6 rounded-full mr-2" />
                    <span className="text-sm">{role.admins} admins assigned</span>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 mb-4">No admin assigned</p>
                )}
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${role.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{role.status}</span>
                  <a href="#" className="text-sm text-green-600 hover:underline">View role &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RoleManagement;
