import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Card = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Coffee",
      desc: "Coffee is Good for Health.",
      price: "$30",
      checked: false,
    },
    {
      id: 2,
      name: "Potato",
      desc: "Potato is Grow under Ground.",
      price: "$20",
      checked: false,
    },
    {
      id: 3,
      name: "Paneer",
      desc: "Milk product it Give us Energy.",
      price: "$50",
      checked: false,
    },
  ]);

  const handleCheck = (id) =>  {
    console.log(`id: ${id}`);

  };

  return (
    <div className="w-1/2 m-auto">
      <h1 className="text-2xl text-center font-bold underline mb-10 py-5 text-orange-600 font-mono">List & Key</h1>
      <ul className="flex my-5 gap-5">
        {items.map((item) => (
          <li key={item.id} className="border p-3 text-center flex flex-col items-center gap-3 bg-white hover:shadow-lg w-[300px]">
            <h1 className="text-amber-900 font-semibold text-2xl underline">
              {item.name}
            </h1>
            <div>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />{" "}
              <label>Buy?</label>
            </div>
            <div>
              <i className="">{item.desc}</i>
            </div>
            <p> Price: {item.price}</p>
            <div className="text-center">
              <FaTrash
                role="button"
                className="text-blue-800 text-2xl hover:text-red-600"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
