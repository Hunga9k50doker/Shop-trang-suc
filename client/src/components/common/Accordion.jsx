import { useState } from "react";
import { Link } from "react-router-dom";
export default function Accordion(props) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`accordion ${active ? "active" : ""} ${
        props.classNameAccordion ? props.classNameAccordion : ""
      }`}
    >
      {props.classNameAccordion === "accordion__title__link" ? (
        <Link to={props.link} style={{ width: "100%" }}>
          <h5 className="accordion__title" onClick={() => setActive(!active)}>
            <p>{props.title}</p>
            <i className={`bx bx-chevron-down ${props.classNameIcon}`}></i>
          </h5>
        </Link>
      ) : (
        <h5 className="accordion__title" onClick={() => setActive(!active)}>
          <p>{props.title}</p>
          <i className={`bx bx-chevron-down ${props.classNameIcon}`}></i>
        </h5>
      )}
      <div className="accordion__content">{props.children}</div>
    </div>
  );
}
