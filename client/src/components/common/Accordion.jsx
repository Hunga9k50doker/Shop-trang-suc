import { useState } from "react";

export default function Accordion(props) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`accordion ${active ? "active" : ""} ${
        props.classNameAccordion ? props.classNameAccordion : ""
      }`}
    >
      <h5 className="accordion__title" onClick={() => setActive(!active)}>
        <p>{props.title}</p>
        <i className="bx bx-chevron-down"></i>
      </h5>
      <div className="accordion__content">{props.children}</div>
    </div>
  );
}
