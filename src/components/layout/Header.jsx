import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { loggedUser } from "../../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";

export const Header = () => {
  const userData = useSelector((state) => state.userData.user);
  const disptch = useDispatch();
  const [isNavOpen, setNavIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handellogout = () => {
    disptch(loggedUser(null));
  };
  return (
    <header className="w-full flex items-center justify-between bg-blue-400 text-white px-20 py-2">
      <div className="text-xl flex items-center gap-4">
        <Link to="/" className="text-xl font-bold">Hospital</Link>
        {isNavOpen ? (
          <TfiArrowCircleLeft onClick={() => setNavIsOpen(!isNavOpen)} />
        ) : (
          <TfiArrowCircleRight onClick={() => setNavIsOpen(!isNavOpen)} />
        )}
      </div>
      <div className="flex items-center gap-2">
        {isOpen ? (
          <button className="text-xl font-bold" onClick={handellogout}>
            Logout
          </button>
        ) : (
          <span
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-xl font-bold"
          >
            <FaUser />
            {userData.displayName}
          </span>
        )}
      </div>
    </header>
  );
};
