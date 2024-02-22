import React, { useState } from "react";
// import axiosConfig from "../../utils/axiosConfig";

// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/slice/userSlice";
// import { useRouter } from "next/router";

const Step2 = ({ setStepStatus, dataFromStep }) => {
  const [dataOfStep2, setDataOfStep2] = useState({
    title: "",
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
  const handleSubmit = () => {
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

          <div className="mb-6 pt-4">
            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
              Upload File
            </label>

            <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
              <div className="flex items-center justify-between">
                <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                  {file ? file.name : ""}
                </span>
                <button className="text-[#07074D]">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
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
