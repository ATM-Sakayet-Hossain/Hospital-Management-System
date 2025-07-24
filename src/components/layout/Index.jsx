import React from "react";
import Navbar from "./Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header } from "./Header";

const Layout = () => {
  const userData = useSelector((state) => state.userData.user);
  if (!userData) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
