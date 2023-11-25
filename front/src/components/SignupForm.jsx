import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const router = useRouter();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      // Handle successful response (e.g., redirect or show success message)
      console.log(response.data);
       // Redirect to the login page after successful signup
       router.push('/login');
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {/* ... (same as before) */}
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        {/* ... (same as before) */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        {/* ... (similar changes for other input fields) */}
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Create an account
        </button>
        {/* ... (same as before) */}
      </form>
      {/* ... (same as before) */}
    </section>
  );
};

export default SignupForm;
