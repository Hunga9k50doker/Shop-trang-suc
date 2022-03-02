import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Menu({ active, setActive }) {
  const location = useLocation();
  React.useEffect(() => {
    setActive(false);
  }, [location]);
  return (
    <div className={`menu ${active ? "active" : ""}`}>
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu__item">
          <Link to="/product">Product</Link>
        </li>
        <li className="menu__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
