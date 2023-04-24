import React, { useState, useRef, useEffect } from "react";
// import Modal from "./Modal";
export default function Button(props) {
  const [active, setActive] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.addEventListener("click", () => setActive(!active));
  }, [active]);
  return (
    <button
      type={props.type ?? "button"}
      ref={buttonRef}
      style={props.style}
      onClick={props.onClick ? () => props.onClick() : null}
      className={`btn ${props.classNameBtn ? props.classNameBtn : ""}`}
    >
      <i className={`icon ${props.icon}`}></i>
      <span className={`span ${props.classNameContent}`}>{props.content}</span>
      {props.children}
    </button>
  );
}
