import React from 'react';

const statuses = ['All', 'New', 'Contacted', 'Qualified', 'Lost'];

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {
  return (
    <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg border border-gray-200">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setSelectedStatus(status)}
          className={`px-2 py-1 rounded-lg text-sm ${
            selectedStatus === status
              ? 'bg-white text-black shadow'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default StatusFilter;
