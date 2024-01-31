import React, { useState } from "react";
import axiosConfig from "../utils/axiosConfig";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
// import { selectUser } from "../redux/slice/userSlice";
import { useRouter } from "next/router";

const CreateProperty = () => {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const router = useRouter();
  const axiosInstance = axiosConfig();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    image: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if(e.target.type === "file"){
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
    setFormData({ ...formData, imageUrl: data.file.imageUrl});
    // setFormData({ ...formData, imageUrl: data.file.imageUrl, image: data.file.filename});
    console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        "/api/properties",
        {
          formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      console.log(response);

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Property created successfully",
          showConfirmButton: true,
          timer: 1500,
        });
        router.push("/admin_panel/allProperties");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      console.error("Error creating account:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
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
              value={formData.title}
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
              value={formData.country}
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
              value={formData.province}
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
              value={formData.city}
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
              value={formData.street}
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
              value={formData.postalCode}
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
              value={formData.description}
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
              <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                <div className={`absolute left-0 right-0 h-full ${ progress? `w-[${progress}%]` : "w-0"} rounded-lg bg-[#6A64F1]`}></div>
              </div>
             
            </div>
            
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Create Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProperty;
