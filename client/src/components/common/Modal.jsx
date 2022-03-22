import React from "react";
export default function Modal(props) {
  return (
    <div className="modal">
      <p className="modal__close">
        <i
          className="bx bx-x"
          onClick={() => props.setActive(!props.active)}
        ></i>
      </p>
      {props.children}
    </div>
  );
}
