'use client';
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-5" style={{ marginLeft: '200px' }}>
          <h1 className="text-2xl font-bold text-black mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <Card title="Active Leads" value="320" change="+12%" changeValue="24 today" reportLink="#" />
            <Card title="New Leads" value="120" change="+8%" changeValue="10 today" reportLink="#" />
            <Card title="Completed Orders" value="80" change="+15%" changeValue="12 today" reportLink="#" />
            <Card title="Top Representative" value="John Doe" change="+20%" changeValue="50 sales" reportLink="#" />
          </div>
          <TopSellingProduct />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SalesReport />
            <MostVisitedLeads />
          </div>
        </main>
      </div>
    </div>
  );
};

const Card = ({ title, value, change, changeValue, reportLink }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200">
    <h2 className="text-lg font-semibold">{title}</h2>
    <div className="text-2xl font-bold mt-2">{value}</div>
    <div className={`text-sm mt-1 ${change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{change}</div>
    <div className="text-sm text-gray-500">{changeValue}</div>
    <a href={reportLink} className="text-blue-500 mt-2 block">View Report</a>
  </div>
);

const SalesReport = () => {
  const data = {
    labels: ['Agent A', 'Agent B', 'Agent C', 'Agent D', 'Agent E', 'Agent F', 'Agent G', 'Agent H', 'Agent I', 'Agent J'],
    datasets: [
      {
        label: 'Sales',
        data: [50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold">Top 10 Sales Agents</h2>
      <Bar data={data} className="mt-4" />
    </div>
  );
};

const MostVisitedLeads = () => {
  const data = {
    labels: ['Lead A', 'Lead B', 'Lead C', 'Lead D', 'Lead E', 'Lead F', 'Lead G', 'Lead H', 'Lead I', 'Lead J'],
    datasets: [
      {
        label: 'Visits',
        data: [30, 28, 26, 24, 22, 20, 18, 16, 14, 12],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold">Most Visited Leads</h2>
      <Bar data={data} className="mt-4" />
    </div>
  );
};

const TopSellingProduct = () => (
  <div className="bg-white p-4 mt-5 rounded-lg border border-gray-200 col-span-1 md:col-span-2">
    <h2 className="text-lg font-semibold">Top Selling Product</h2>
    <div className="mt-4 flex items-center">
      <div className="ml-4">
        <p className="font-semibold">Denim Jacket with White Feathers</p>
        <p className="text-gray-500">Item sold out</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
