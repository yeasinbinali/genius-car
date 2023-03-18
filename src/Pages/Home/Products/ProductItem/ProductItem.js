import React from "react";
import './ProductItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ProductItem = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="card w-76 bg-base-100 shadow-xl w-100 mx-auto">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl product-img"
        />
      </figure>
      <div className="card-body items-center text-center">
        <p className='text-orange-600'><FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} /></p>
        <h2 className="card-title">{name}</h2>
        <p className='text-orange-600 font-bold'>${price}.00</p>
      </div>
    </div>
  );
};

export default ProductItem;
