import React from "react";
import { Link, Outlet } from "react-router-dom";

function ServicesPage() {
  return (
    <div>
      <h1>Our services</h1>
      <br />
      <Link to="/services/Marketing_Services"> Marketing</Link>
      <Link to="/services/WebDev_Services"> WebDev</Link>
      <Outlet />
    </div>
  );
}

export default ServicesPage;
