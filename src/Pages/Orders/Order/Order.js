import React, { useEffect, useState } from "react";

const Order = ({ order, handleDelete, handleUpdate }) => {
  const { _id, service, customer, phone, price, serviceName, status } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`https://genius-car-server-nine-bay.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
          X
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-16 h-16">
              <img
                src={orderService?.img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">Phone: {phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">Price: ${price}</span>
      </td>
      <td>Purple</td>
      <th>
        {status ? (
          <>{order.status}</>
        ) : (
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

export default Order;
