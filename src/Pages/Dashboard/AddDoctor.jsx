import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:4000/services").then((res) => res.json())
  );

  /**
   * 3 ways to store images
   * 1. Third party storage -- for practice project
   * 2. Self Storage or server
   * 3. Database
   * YUP: to validate file
   */
  const imgStorageKey = "bcdc4ca4c6a7cbdf4843874a38dac800";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to database
          fetch("http://localhost:4000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add a doctor");
              }
            });
        }
        console.log(result);
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl">Add a new doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Please provide a valid email",
              },
            })}
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            {services.map((service) => (
              <option key={service._id} service={service} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          <label className="label">
            {errors.specialty?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.specialty.message}
              </span>
            )}
          </label>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Image</span>
            </label>
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
              type="file"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.photo?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.photo.message}
                </span>
              )}
            </label>
          </div>
          <input className="btn w-full" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
