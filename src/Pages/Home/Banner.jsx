import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="px-6">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            ducimus illum incidunt, explicabo iste esse quisquam culpa a
            laudantium rerum perferendis iure veritatis dolorem est fugiat hic
            enim repudiandae ratione.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
