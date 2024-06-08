import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';

const FilterModal = ({ isOpen, onClose, buttonRef }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && buttonRef.current && modalRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const modalRect = modalRef.current.getBoundingClientRect();

      // Calculate the position for the modal
      let top = buttonRect.bottom + window.scrollY;
      let left = buttonRect.left + window.scrollX;

      // Ensure the modal doesn't overflow the right edge of the viewport
      if (left + modalRect.width > window.innerWidth) {
        left = window.innerWidth - modalRect.width - 10; // 10px padding from the edge
      }

      // Ensure the modal doesn't overflow the bottom edge of the viewport
      if (top + modalRect.height > window.innerHeight) {
        top = window.innerHeight - modalRect.height - 10; // 10px padding from the edge
      }

      modalRef.current.style.top = `${top}px`;
      modalRef.current.style.left = `${left}px`;
    }
  }, [isOpen, buttonRef]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} className="absolute bg-white border border-gray-300 rounded-lg shadow-lg z-50 w-96 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filter</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Status</label>
        <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-purple-500">
          <option>Select Status</option>
          <option>Paid</option>
          <option>Unpaid</option>
          <option>Pending Paid</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Total Product</label>
        <div className="flex flex-wrap space-x-2">
          {['10-20', '30-40', '50-60', '70-80', '90-100'].map((range) => (
            <button key={range} className="border border-gray-300 rounded-lg p-2 hover:bg-gray-100">
              {range}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Transaction Amount</label>
        <div className="flex flex-wrap space-x-2">
          {['$500-$1000', '$1500-$2000', '$2500-$3000'].map((range) => (
            <button key={range} className="border border-gray-300 rounded-lg p-2 hover:bg-gray-100">
              {range}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
          Cancel
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          Add
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
