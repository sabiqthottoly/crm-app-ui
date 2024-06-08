// components/SummaryCards.js
import React from 'react';
import { FaEllipsisH, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const SummaryCards = () => {
  const summaryData = [
    { title: 'New Leads', count: 165, change: '18%', changeType: 'increase' },
    { title: 'Qualified', count: 26, change: '9%', changeType: 'decrease' },
    { title: 'High Priority', count: 58, change: '20%', changeType: 'increase' },
    { title: 'Follow Today', count: 12, change: '7%', changeType: 'decrease' },
  ];

  const changeColor = (type) => {
    return type === 'increase' ? 'text-green-500' : 'text-red-500';
  };

  const changeIcon = (type) => {
    return type === 'increase' ? <FaArrowUp /> : <FaArrowDown />;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pl-0 pr-0 pb-4">
      {summaryData.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
          <div className="flex justify-between items-start">
            <h3 className="text-gray-600">{item.title}</h3>
            <FaEllipsisH className="text-gray-400" />
          </div>
          <div className="mt-2">
            <h2 className="text-2xl font-bold">{item.count.toLocaleString()}</h2>
            <div className="flex items-center mt-1">
              <span className={`text-sm ${changeColor(item.changeType)} flex items-center`}>
                {changeIcon(item.changeType)} {item.change}
              </span>
              <span className="text-gray-500 text-sm ml-1">From last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
