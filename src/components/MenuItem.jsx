import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const MenuItem = ({ title, open, onToggle, subItems }) => {
  return (
    <>
      <li
        onClick={onToggle}
        className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-green-400 select-none text-xl border-gray-200 text-white"
      >
        <span className="text-base font-semibold">{title}</span>
        <span className="text-base font-bold">
          {open ? <FaMinusCircle /> : <FaPlusCircle />
}
        </span>
      </li>
      {open && subItems && (
        <ul className="bg-green-100 text-black">
          {subItems.map((sub, idx) => (
            <li
              key={idx}
              className="pl-8 py-1 cursor-default text-sm hover:bg-green-200"
            >
              » {sub.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuItem;
