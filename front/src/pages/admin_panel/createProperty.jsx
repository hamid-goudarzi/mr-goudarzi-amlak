"use client";
import React, { useState } from "react";
import AdLayout from "../../components/admin-panel/Layout";
import Step1 from "../../components/CreateProperty/Step1";
import Step2 from "../../components/CreateProperty/Step2";
import Step3 from "../../components/CreateProperty/Step3";
import Step4 from "../../components/CreateProperty/Step4";
import { useRouter } from "next/router";
import axiosConfig from "../../utils/axiosConfig";
import Swal from "sweetalert2";

function CreatePropertyPage() {
  const [stepStatus, setStepStatus] = useState(1);
  const [propertyType, setPropertyType] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    image: "",
    imageUrl: "",
    imageFileName: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    type: "",
  });
  const handleNextStep = () => {
    setStepStatus((prevStep) => prevStep + 1);
  };

  const dataFromStep = (data) => {
    setFormData({ ...formData, ...data });
  };
  const router = useRouter();
  const axiosInstance = axiosConfig();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        "/api/properties",
        {
          ...dataOfStep2,
          image: dataOfStep2.imageFileName,
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
    <AdLayout>
      {stepStatus === 1 && (
        <Step1
          setStepStatus={handleNextStep}
          setPropertyType={setPropertyType}
          dataFromStep={dataFromStep}
        />
      )}
      {stepStatus === 2 && (
        <Step2
          setStepStatus={setStepStatus}
          formData={formData}
          dataFromStep={dataFromStep}
        />
      )}
      {stepStatus === 3 && (
        <Step3
          propertyType={propertyType}
          setStepStatus={setStepStatus}
          dataFromStep={dataFromStep}
        />
      )}
      {stepStatus == 4 && (
        <Step4 setStepStatus={setStepStatus} dataFromStep={dataFromStep} />
      )}
      {/* Add more steps as needed */}
    </AdLayout>
  );
}

export default CreatePropertyPage;
