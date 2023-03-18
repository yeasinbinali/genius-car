import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregisterd";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("https://genius-car-server-nine-bay.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("Place ordered successfully");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <form className="bg-gray-200 p-5" onSubmit={handleCheckout}>
      <h2 className="text-3xl text-center">
        You are about to: <b>{title}</b>
      </h2>
      <h2 className="text-2xl text-center">
        Price: <b>${price}</b>
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input input-bordered w-full my-2"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="input input-bordered w-full my-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          className="input input-bordered w-full my-2"
        />
        <input
          type="text"
          name="email"
          defaultValue={user?.email}
          readOnly
          placeholder="Your Email"
          className="input input-bordered w-full my-2"
        />
      </div>
      <textarea
        placeholder="Your Message"
        name="message"
        className="textarea textarea-bordered textarea-lg w-full my-2"
      ></textarea>
      <input
        className="btn btn-wide my-3"
        type="submit"
        value="Place you order"
      />
    </form>
  );
};

export default Checkout;
