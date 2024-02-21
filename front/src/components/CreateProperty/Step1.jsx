"use client";
import React, { useState } from "react";

const Step1 = ({ setStepStatus, dataFromStep }) => {
  const [type, setType] = useState("");
  const handleChange = (e) => {
    setType(e.target.value);
  };
  return (
    <div className="m-10">
      <h1>Step 1</h1>

      <div className="flex flex-col mb-4">
        <div>
          <input
            type="radio"
            id="Rental"
            name="propertyType"
            value="Rental"
            onChange={handleChange}
            className=""
            required
          />
          <label htmlFor="title" className="text-gray-600">
            Rental
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="Selling"
            name="propertyType"
            value="Selling"
            onChange={handleChange}
            className=""
            required
          />
          <label htmlFor="title" className="text-gray-600">
            Selling
          </label>
        </div>
        <div>
          {/* whrite a next button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setStepStatus(2);
              dataFromStep({ type: type });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
