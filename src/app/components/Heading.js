"use client";
import React from 'react';

const Heading = ({ title }) => {
  return (
    <div className="py-5 bg-white">
      <h1 className="text-2xl font-semibold text-black">{title}</h1>
    </div>
  );
};

export default Heading;
