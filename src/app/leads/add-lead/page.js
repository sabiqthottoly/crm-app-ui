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
        <main className="flex-grow p-5" style={{ marginLeft: '256px' }}>
          <Heading title="Add Leads" />
          <form onSubmit={handleSubmit} className="space-y-8 mt-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700">Mobile</label>
                  <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Additional Mobile Number</label>
                  <input type="text" name="additionalMobile" value={formData.additionalMobile} onChange={handleChange} placeholder="Additional Mobile Number" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Customer Name</label>
                  <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Customer Name" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">GSTN</label>
                  <input type="text" name="gstn" value={formData.gstn} onChange={handleChange} placeholder="GSTN" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Nature of Business</label>
                  <select name="natureOfBusiness" value={formData.natureOfBusiness} onChange={handleChange} className="border p-2 rounded-lg w-full">
                    <option value="" disabled>Select Nature of Business</option>
                    {natureOfBusinessOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Contact Person Name</label>
                  <input type="text" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} placeholder="Contact Person Name" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Contact Person Number</label>
                  <input type="text" name="contactPersonNumber" value={formData.contactPersonNumber} onChange={handleChange} placeholder="Contact Person Number" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Pincode</label>
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">District</label>
                  <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Country</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Last Follow-up Date</label>
                  <input type="date" name="lastFollowUpDate" value={formData.lastFollowUpDate} onChange={handleChange} className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Source of Lead</label>
                  <input type="text" name="sourceOfLead" value={formData.sourceOfLead} onChange={handleChange} placeholder="Source of Lead" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Lead Status</label>
                  <input type="text" name="leadStatus" value={formData.leadStatus} onChange={handleChange} placeholder="Lead Status" className="border p-2 rounded-lg w-full"/>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Lead Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700">Branch</label>
                  <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Branch" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Product Category</label>
                  <select name="productCategory" value={formData.productCategory} onChange={handleChange} className="border p-2 rounded-lg w-full">
                    <option value="" disabled>Select Product Category</option>
                    {productCategoryOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Assign Product</label>
                  <select name="assignProduct" value={formData.assignProduct} onChange={handleChange} className="border p-2 rounded-lg w-full">
                    <option value="" disabled>Select Product</option>
                    {assignProductOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Comments</label>
                  <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" className="border p-2 rounded-lg w-full"/>
                </div>
                <div>
                  <label className="block mb-1 text-gray-700">Priority</label>
                  <select name="priority" value={formData.priority} onChange={handleChange} className="border p-2 rounded-lg w-full">
                    <option value="" disabled>Select Priority</option>
                    {priorityOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button type="button" onClick={() => history.back()} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Add Lead</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddLeadPage;
