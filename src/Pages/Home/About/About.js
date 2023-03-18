import React from "react";
import person from "../../../images/images/about_us/person.jpg";
import parts from "../../../images/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative md:w-1/2">
          <img
            src={person}
            alt=""
            className="w-3/4 h-full rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            alt=""
            className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 md:mt-0 mt-20">
          <h5 className="text-orange-600">
            <b>About Us</b>
          </h5>
          <h1 className="my-5 text-4xl font-bold text-black">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="pb-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className='pb-3'>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
