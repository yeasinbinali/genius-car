import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem/ProductItem";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

  return (
    <div className='mb-20'>
      <div className='text-center'>
        <h5 className="text-orange-600 font-bold ">Popular Products</h5>
        <h2 className="text-4xl font-bold my-2">Browse Our Products</h2>
        <small>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </small>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
          {
              products.map(product => <ProductItem
                key = {product.id}
                product = {product}
              ></ProductItem>)
          }
      </div>
    </div>
  );
};

export default Products;
