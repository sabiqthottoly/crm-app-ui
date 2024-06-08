"use client";
import React, { useState } from 'react';

const AddLeadForm = ({ onClose }) => {
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
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Add New Lead</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="additionalMobile" value={formData.additionalMobile} onChange={handleChange} placeholder="Additional Mobile Number" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Customer Name" className="border p-2 rounded-lg w-full"/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="gstn" value={formData.gstn} onChange={handleChange} placeholder="GSTN" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="natureOfBusiness" value={formData.natureOfBusiness} onChange={handleChange} placeholder="Nature of Business" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="contactPersonName" value={formData.contactPersonName} onChange={handleChange} placeholder="Contact Person Name" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="contactPersonNumber" value={formData.contactPersonNumber} onChange={handleChange} placeholder="Contact Person Number" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="border p-2 rounded-lg w-full"/>
            <input type="date" name="lastFollowUpDate" value={formData.lastFollowUpDate} onChange={handleChange} placeholder="Last Follow-up Date" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="sourceOfLead" value={formData.sourceOfLead} onChange={handleChange} placeholder="Source of Lead" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="leadStatus" value={formData.leadStatus} onChange={handleChange} placeholder="Lead Status" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Branch" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="productCategory" value={formData.productCategory} onChange={handleChange} placeholder="Product Category" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="assignProduct" value={formData.assignProduct} onChange={handleChange} placeholder="Assign Product" className="border p-2 rounded-lg w-full"/>
            <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" className="border p-2 rounded-lg w-full"/>
            <input type="text" name="priority" value={formData.priority} onChange={handleChange} placeholder="Priority" className="border p-2 rounded-lg w-full"/>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Add Lead</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLeadForm;
