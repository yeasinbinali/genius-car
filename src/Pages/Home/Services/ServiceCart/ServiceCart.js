import React from "react";
import { Link } from "react-router-dom";

const ServiceCart = ({service}) => {
    const {_id, img, title, price} = service;
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl w-100 mx-auto">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-orange-600 font-semibold'>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
