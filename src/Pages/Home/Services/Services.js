import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart/ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://genius-car-server-nine-bay.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-20">
      <div className="text-center my-5">
        <h2 className="text-orange-600 font-bold">Service</h2>
        <h1 className="text-4xl font-semibold">Our Services Area</h1>
        <small>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </small>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
