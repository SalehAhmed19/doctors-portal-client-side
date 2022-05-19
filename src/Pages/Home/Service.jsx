import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
