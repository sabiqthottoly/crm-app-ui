// components/CreateRole.js
'use client';
import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';

const CreateRole = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const permissions = [
    {
      section: 'Configure access',
      items: [
        'Select all',
        'View Configure',
        'Create Configure',
        'Edit/Update Configure',
        'Delete Configure',
      ],
    },
    {
      section: 'Lead access',
      items: [
        'Select all',
        'View Leads',
        'Create Leads',
        'Edit/Update Leads',
        'Delete Leads',
        'View Only Created Leads',
      ],
    },
    {
      section: 'Follow up Task access',
      items: [
        'Select all',
        'View Follow up',
        'Create Follow up',
        'Edit/Update Follow up',
        'Delete Follow up',
        'View Only Created Task',
      ],
    },
    {
      section: 'Support Center access',
      items: [
        'Select all',
        'View Tickets',
        'Create Tickets',
        'Edit/Update Tickets',
        'Delete Tickets',
      ],
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-5" style={{ marginLeft: '256px' }}>
          <h1 className="text-2xl font-bold text-black mb-6">Create Role</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Role Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-1/3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-sm font-medium text-gray-700 mr-4">
              Status
            </label>
            <div
              className={`relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in ${
                isActive ? 'bg-purple-500' : 'bg-gray-300'
              }`}
              onClick={handleToggle}
            >
              <span
                className={`absolute block w-6 h-6 rounded-full bg-white shadow transform transition duration-200 ease-in ${
                  isActive ? 'translate-x-6' : ''
                }`}
              ></span>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Permission</h2>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="fullPermission"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label
              htmlFor="fullPermission"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              Full Permission
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {permissions.map((permission, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {permission.section}
                </h3>
                {permission.items.map((item, i) => (
                  <div key={i} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 text-sm text-gray-700">{item}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
            Create Role
          </button>
        </main>
      </div>
    </div>
  );
};

export default CreateRole;
