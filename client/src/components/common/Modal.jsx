import React from "react";
export default function Modal(props) {
  return (
    <div className="modal">
      {props.children}
    </div>
  );
}
