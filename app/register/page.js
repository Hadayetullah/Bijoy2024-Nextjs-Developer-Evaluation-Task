"use client";

import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zipcode: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = (formData) => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Please provide your name";
    }

    // if (!formData.phone) {
    //   errors.phone = "Please provide your phone number";
    // } else if (
    //   !/(^(\+88|88)?(01){1}[3456789]{1}(\d){8})$/.test(formData.phone)
    // ) {
    //   errors.phone = "Invalid phone number";
    // }

    if (!formData.email) {
      errors.email = "Please provide your email address";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Please provide password";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!formData.password2) {
      errors.password2 = "Please provide password again";
    } else if (formData.password2 !== formData.password) {
      errors.password2 = "Password doesn't match";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="w-full mt-[80px]">
      <div className="w-full flex justify-center">
        <div className="mb-5 min-w-[0px] max-w-[300px]">
          <h2 className="text-4xl border-b">Signup Form</h2>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <form
          onSubmit={handleSubmit}
          className="min-w-[0px] max-w-[800px] space-y-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

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
          {errors.password && <p className="text-red-500">{errors.password}</p>}

          <input
            type="password"
            name="password2"
            placeholder="Enter confirm password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={formData.password2}
            onChange={handleChange}
            required
          />
          {errors.password2 && (
            <p className="text-red-500">{errors.password2}</p>
          )}

          <button
            type="submit"
            className="w-[200px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 font-bold"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
