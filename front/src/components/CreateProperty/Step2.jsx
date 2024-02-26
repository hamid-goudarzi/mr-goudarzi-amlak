import React, { useState } from "react";
// import axiosConfig from "../../utils/axiosConfig";

// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/slice/userSlice";
// import { useRouter } from "next/router";

const Step2 = ({ setStepStatus, dataFromStep }) => {
  const [dataOfStep2, setDataOfStep2] = useState({
    title: "",
    area: "",
    description: "",
    startDate: "",
    endDate: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setDataOfStep2({
      ...dataOfStep2,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dataFromStep(dataOfStep2);
    setStepStatus(3);
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form
          className="py-6 px-9"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={dataOfStep2.title}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="area" className="block text-gray-600">
              Area
            </label>
            <input
              type="number"
              id="area"
              name="area"
              value={dataOfStep2.area}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-black">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={dataOfStep2.country}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="province" className="block text-black">
              Province
            </label>
            <input
              type="text"
              id="province"
              name="province"
              value={dataOfStep2.province}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={dataOfStep2.city}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="street" className="block text-gray-600">
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={dataOfStep2.street}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postalCode" className="block text-gray-600">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={dataOfStep2.postalCode}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
          </div>

          {/* Add similar blocks for other address fields (city, state, postalCode, country) */}

          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={dataOfStep2.description}
              onChange={handleChange}
              rows="5"
              className="w-full border p-2 rounded-md"
              required
            ></textarea>
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
