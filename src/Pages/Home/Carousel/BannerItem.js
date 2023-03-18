import React from "react";
import './BannerItem.css';

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full banner-item"
    >
      <div className='carousel-img'>
        <img src={image} alt="" className="w-full rounded-lg" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 md:left-24 left-6 top-1/4">
        <h1 className="lg:text-6xl text-white md:text-5xl text-3xl font-bold sm:mb-5">
          Affordabe <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>

      <div className="absolute flex justify-start transform -translate-y-1/2 md:left-24 left-6 top-1/2 md:mt-0 mt-12">
        <p className="text-white w-2/3">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form.
        </p>
      </div>

      {/* <div className="absolute flex justify-start transform -translate-y-1/2 md:left-24 left-6 top-3/4">
        <button className="btn btn-warning mr-5">Discover More</button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
      </div> */}

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
