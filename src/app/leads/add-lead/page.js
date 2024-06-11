"use client";
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Heading from '../../components/Heading';

const AddLeadPage = () => {
  const [formData, setFormData] = useState({
    mobile: '',
    additionalMobile: '',
    customerName: '',
    email: '',
    gstn: '',
    natureOfBusiness: '',
    contactPersonName: '',
    contactPersonNumber: '',
    address: '',
    pincode: '',
    city: '',
    district: '',
    state: '',
    country: '',
    lastFollowUpDate: '',
    sourceOfLead: '',
    leadStatus: '',
    branch: '',
    productCategory: '',
    assignProduct: '',
    comments: '',
    priority: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const natureOfBusinessOptions = ['Retail', 'Wholesale', 'Manufacturing', 'Service'];
  const priorityOptions = ['High', 'Medium', 'Low'];
  const productCategoryOptions = ['Electronics', 'Furniture', 'Clothing'];
  const assignProductOptions = ['Laptop', 'Chair', 'Shirt'];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-5" style={{ marginLeft: '200px' }}>
          <Heading title="Add Leads" />
          <form onSubmit={handleSubmit} className="space-y-8 mt-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4 text-black">Customer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Mobile</label>
                  <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your Mobile" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Additional Mobile Number</label>
                  <input type="text" name="additionalMobile" value={formData.additionalMobile} onChange={handleChange} placeholder="Enter your Additional Mobile Number" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Customer Name</label>
                  <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Enter your Customer Name" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">GSTN</label>
                  <input type="text" name="gstn" value={formData.gstn} onChange={handleChange} placeholder="Enter your GSTN" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Nature of Business</label>
                  <select name="natureOfBusiness" value={formData.natureOfBusiness} onChange={handleChange} className="border p-2 rounded-lg w-full text-sm">
                    <option value="" disabled>Select Nature of Business</option>
                    {natureOfBusinessOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Contact Person Name</label>
                  <input type="text" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} placeholder="Enter your Contact Person Name" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Contact Person Number</label>
                  <input type="text" name="contactPersonNumber" value={formData.contactPersonNumber} onChange={handleChange} placeholder="Enter your Contact Person Number" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter your Address" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Pincode</label>
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Enter your Pincode" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your City" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">District</label>
                  <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="Enter your District" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="Enter your State" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Country</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Enter your Country" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Last Follow-up Date</label>
                  <input type="date" name="lastFollowUpDate" value={formData.lastFollowUpDate} onChange={handleChange} className="border p-2 rounded-lg w-full text-sm"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Source of Lead</label>
                  <input type="text" name="sourceOfLead" value={formData.sourceOfLead} onChange={handleChange} placeholder="Enter your Source of Lead" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Lead Status</label>
                  <input type="text" name="leadStatus" value={formData.leadStatus} onChange={handleChange} placeholder="Enter your Lead Status" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Lead Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Branch</label>
                  <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Enter your Branch" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Product Category</label>
                  <select name="productCategory" value={formData.productCategory} onChange={handleChange} className="border p-2 rounded-lg w-full text-sm">
                    <option value="" disabled>Select Product Category</option>
                    {productCategoryOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Assign Product</label>
                  <select name="assignProduct" value={formData.assignProduct} onChange={handleChange} className="border p-2 rounded-lg w-full text-sm">
                    <option value="" disabled>Select Product</option>
                    {assignProductOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Comments</label>
                  <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Enter your Comments" className="border p-2 rounded-lg w-full text-sm placeholder-gray-400"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 text-sm font-semibold">Priority</label>
                  <select name="priority" value={formData.priority} onChange={handleChange} className="border p-2 rounded-lg w-full text-sm">
                    <option value="" disabled>Select Priority</option>
                    {priorityOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button type="button" onClick={() => history.back()} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 text-sm">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 text-sm">Add Lead</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddLeadPage;
