"use client";
import React, { useState } from "react";
import axiosConfig from "../../utils/axiosConfig";

const Step4 = ({ setStepStatus, dataFromStep }) => {
  const [dataFromStep4, setDataFromStep4] = useState({
    image: "",
    imageUrl: "",
    imageFileName: "",
  });
  const axiosInstance = axiosConfig();
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const handleChange = (e) => setFile(e.target.files[0]);

  const uploadImage = async () => {
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
          "authorization": "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const progressPercentage = Math.round((loaded / total) * 100);
          setProgress(progressPercentage);
        },
      }
    );
    const data = await res.data;
    setDataFromStep4({
      imageUrl: data.file.imageUrl,
      imageFileName: data.file.filename,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dataFromStep(dataFromStep4);
    setStepStatus(5);
  };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          value={dataFromStep4.image}
          onChange={handleChange}
        />

        <button
          type="button"
          onClick={uploadImage}
          className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 
              text-base font-medium text-[#07074D]"
        >
          Upload
        </button>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step4;
