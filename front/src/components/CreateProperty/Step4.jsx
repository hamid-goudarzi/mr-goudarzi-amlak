"use client";
import React, { useState } from "react";
import axiosConfig from "../../utils/axiosConfig";

const Step4 = ({ setStepStatus, setFormData }) => {
  const axiosInstance = axiosConfig();
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFile(e.target.files[0]);
    }
  };
  const uploadImageProperty = async (e) => {
    // const file = formData.image;
    // bayad ba dom file ro begirirm bala eshtebahan adrese file ro gereftim ebteda
    // const fileInput = e.target.previousSibling;
    // const file = fileInput.files[0];

    if (!file) {
      console.error("No file selected");
      return;
    }
    const formDataUpload = new FormData();
    formDataUpload.append("image", file);

    const res = await axiosInstance.post(
      "/api/properties/upload",
      formDataUpload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const progressPercentage = Math.round((loaded / total) * 100);
          setProgress(progressPercentage);
        },
      }
    );
    const data = await res.data;
    setFormData({
      ...formData,
      imageUrl: data.file.imageUrl,
      imageFileName: data.file.filename,
    });
  };
  return (
    <div>
      <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
        <div
          className={`absolute left-0 right-0 h-full ${
            progress ? `w-[${progress}%]` : "w-0"
          } rounded-lg bg-[#6A64F1]`}
        ></div>
      </div>
      <div className="mb-8">
        <input
          type="file"
          name="image"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />

        <button
          type="button"
          onClick={uploadImageProperty}
          className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 
              text-base font-medium text-[#07074D]"
        >
          Upload
        </button>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setStepStatus(4);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
