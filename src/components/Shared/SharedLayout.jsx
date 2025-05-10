import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex justify-center  min-h-screen items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
