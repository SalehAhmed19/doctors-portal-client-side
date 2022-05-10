import React from "react";

const Service = ({ service }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={service.img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
