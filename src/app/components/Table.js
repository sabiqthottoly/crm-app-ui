'use client';
import React, { useState, useRef } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { FaFilter, FaCalendarAlt, FaEdit } from 'react-icons/fa';
import leadsMockData from './leadsMockData';
import FilterModal from './FilterModal';
import StatusFilter from './StatusFilter';

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const filterButtonRef = useRef(null);
  const itemsPerPage = 5;

  // Filter data based on search term and selected status
  const filteredData = leadsMockData.filter(
    (item) =>
      (selectedStatus === 'All' || item.leadStatus === selectedStatus) &&
      (item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.mobile.includes(searchTerm) ||
        item.contactPersonNumber.includes(searchTerm) ||
        item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sourceOfLead.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.assignProduct.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.priority.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const statusColor = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-200 text-blue-800';
      case 'Contacted':
        return 'bg-green-200 text-green-800';
      case 'Qualified':
        return 'bg-yellow-200 text-yellow-800';
      case 'Lost':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const priorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-500';
      case 'Medium':
        return 'text-orange-500';
      case 'Low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <>
      <div className="flex justify-between items-center space-x-2 pb-4">
        <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
        <div className="flex items-center space-x-2">
  <div className="relative">
    <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
    <input
      type="text"
      placeholder="Search anything"
      className="pl-8 pr-2 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-500"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
  <button
    ref={filterButtonRef}
    onClick={() => setIsFilterModalOpen(true)}
    className="flex items-center px-2 py-2 border border-gray-300 rounded-lg text-gray-700 text-xs hover:bg-gray-100"
  >
    <FaFilter className="mr-1 text-sm" /> Filter
  </button>
  <button className="flex items-center px-2 py-2 border border-gray-300 rounded-lg text-gray-700 text-xs hover:bg-gray-100">
    <FaCalendarAlt className="mr-1 text-sm" /> Date
  </button>
</div>

      </div>
      <div className="overflow-x-auto relative border border-gray-200 rounded-2xl">
        <table className="w-full text-sm text-left text-gray-700 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200 rounded-t-2xl">
            <tr>
              <th scope="col" className="py-3 px-6">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
              </th>
              <th scope="col" className="py-3 px-6">Customer Name</th>
              <th scope="col" className="py-3 px-6">Mobile</th>
              <th scope="col" className="py-3 px-6">Email</th>
              <th scope="col" className="py-3 px-6">Contact Person Number</th>
              <th scope="col" className="py-3 px-6">District</th>
              <th scope="col" className="py-3 px-6">Last Follow-up Date</th>
              <th scope="col" className="py-3 px-6">Source of Lead</th>
              <th scope="col" className="py-3 px-6">Lead Status</th>
              <th scope="col" className="py-3 px-6">Assign Product</th>
              <th scope="col" className="py-3 px-6">Priority</th>
              <th scope="col" className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white border-b last:rounded-b-2xl">
            {currentItems.map((item) => (
              <tr key={item.id} className="bg-white border-b last:border-none">
                <td className="py-4 px-6">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500" />
                </td>
                <td className="py-4 px-6 text-black font-bold">{item.customerName}</td>
                <td className="py-4 px-6 text-gray-700">{item.mobile}</td>
                <td className="py-4 px-6 text-gray-700">{item.email}</td>
                <td className="py-4 px-6 text-gray-700">{item.contactPersonNumber}</td>
                <td className="py-4 px-6 text-gray-700">{item.district}</td>
                <td className="py-4 px-6 text-gray-700">{item.lastFollowUpDate}</td>
                <td className="py-4 px-6 text-gray-700">{item.sourceOfLead}</td>
                <td className="py-4 px-6">{item.leadStatus}</td>
                <td className="py-4 px-6 text-gray-700">{item.assignProduct}</td>
                <td className="py-4 px-6">
                  <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${priorityColor(item.priority)}`}>
                    {item.priority}
                  </span>
                </td>
                <td className="py-4 px-6 flex space-x-2">
                  <button className="text-blue-400 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-green-600 hover:text-green-700">
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4 p-4">
          <div>
            Showing{' '}
            <strong>
              {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredData.length)}
            </strong>{' '}
            of <strong>{filteredData.length}</strong> entries
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => handleClick(currentPage > 1 ? currentPage - 1 : 1)}
              className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Previous
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handleClick(number)}
                className={`px-3 py-1 rounded border ${
                  currentPage === number
                    ? 'bg-purple-500 text-white'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() =>
                handleClick(
                  currentPage < pageNumbers.length
                    ? currentPage + 1
                    : pageNumbers.length
                )
              }
              className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <FilterModal isOpen={isFilterModalOpen} onClose={() => setIsFilterModalOpen(false)} buttonRef={filterButtonRef} />
    </>
  );
};

export default Table;
