"use client";
import React, { useState } from "react";

const Step3 = ({ propertyType, setStepStatus, dataFromStep }) => {
  const [dataFromStep3, setDataFromStep3] = useState({
    startDate: "",
    endDate: "",
    price: "",
    rent: "",
  });
  const handleChange = (e) => {
    setDataFromStep3({
      ...dataFromStep3,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dataFromStep(dataFromStep3);
    setStepStatus(4);
  };

  return (
    <div>
      {propertyType === "Rental" ? (
        <div>
          <h1>Step 3</h1>
          <div className="flex flex-col mb-4">
            <div>
              <label htmlFor="startDate" className="text-gray-600">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="border-2 border-gray-300 p-2 rounded-md"
                required
                value={dataFromStep3.startDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="endDate" className="text-gray-600">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="border-2 border-gray-300 p-2 rounded-md"
                required
                value={dataFromStep3.endDate}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="rent" className="text-gray-600">
                Rent
              </label>
              <input
                type="number"
                id="rent"
                name="rent"
                value={dataFromStep3.rent}
                className="border-2 border-gray-300 p-2 rounded-md"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Step 3</h1>
          <div className="flex flex-col mb-4">
            <div>
              <label htmlFor="price" className="text-gray-600">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="border-2 border-gray-300 p-2 rounded-md"
                required
                value={dataFromStep3.price}
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step3;
