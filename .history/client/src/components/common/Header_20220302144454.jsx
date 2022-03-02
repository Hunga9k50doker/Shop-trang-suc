import React from "react";
import { Link } from "react-router-dom";
export default function Header({ active, setActive }) {
  return (
    <div className="header">
      <h1 className="header__logo">
        <Link to="/">Logo</Link>
      </h1>
      <div
        className={`header__menu ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      ></div>
    </div>
  );
}
