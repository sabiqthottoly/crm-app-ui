"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaDownload, FaUpload, FaPlus } from 'react-icons/fa';

const ManageLeads = () => {
  const router = useRouter();

  const handleAddLeadsClick = () => {
    router.push('/leads/add-lead');
  };

  return (
    <div className="flex space-x-3">
      <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
        <FaDownload className="mr-2" /> Export
      </button>
      <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
        <FaUpload className="mr-2" /> Import
      </button>
      <button onClick={handleAddLeadsClick} className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
        <FaPlus className="mr-2" /> Add Leads
      </button>
    </div>
  );
};

export default ManageLeads;
