"use client";

import React, { useState } from "react";

export default function Signup() {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zipcode: "",
    password: "",
    password2: "",
  });

  return (
    <div className="w-full mt-[80px]">
      <div className="w-full flex justify-center">
        <div className="mb-5 min-w-[0px] max-w-[300px]">
          <h2 className="text-4xl border-b">Signup Form</h2>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <form className="min-w-[0px] max-w-[800px] space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="zipcode"
            placeholder="Enter zipcode"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password2"
            placeholder="Enter confirm password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.password2}
            onChange={handleChange}
            required
          />

          <div className="w-full flex justify-start">
            <button
              type="submit"
              className="w-[200px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 font-bold"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
