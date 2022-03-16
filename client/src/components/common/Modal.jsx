import React from "react";
export default function Modal(props) {
  return (
    <div className="modal" onClick={() => props.setActive(!props.active)}>
      {props.children}
    </div>
  );
}
