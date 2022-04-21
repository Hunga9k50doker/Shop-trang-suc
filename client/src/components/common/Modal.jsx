import React from "react";
export default function Modal(props) {
  const handleClose = () => {
    props.setViewDetail
      ? props.setViewDetail(null)
      : props.setActive(!props.active);
  };
  return (
    <div className="modal" style={props.style}>
      <p className="modal__close">
        <i className="bx bx-x" onClick={handleClose}></i>
      </p>
      {props.children}
    </div>
  );
}
