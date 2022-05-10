import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse p-0">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
        <div className="px-6">
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            ducimus illum incidunt, explicabo iste esse quisquam culpa a
            laudantium rerum perferendis iure veritatis dolorem est fugiat hic
            enim repudiandae ratione.
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
