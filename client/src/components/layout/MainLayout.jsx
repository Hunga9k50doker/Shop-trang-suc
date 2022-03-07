import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Navigation from "../common/Navigation";

export default function MainLayout(props) {
  return (
    <div className="component">
      <Header />
      <Navigation />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
