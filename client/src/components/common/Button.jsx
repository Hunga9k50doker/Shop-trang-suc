import React from "react";

export default function Button(props) {
  return (
    <button className={`btn ${props.classNameBtn}`}>
      <i className={`icon ${props.icon}`}></i>
      <span className={`span ${props.classNameContent}`}>{props.content}</span>
      {props.children}
    </button>
  );
}
