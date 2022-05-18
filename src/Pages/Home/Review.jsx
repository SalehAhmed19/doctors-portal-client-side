import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vero dolor ducimus ex amet veniam.
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img className="w-16" src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <h5>{review.location}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
