import React from "react";

export const Banner = (props) => {
  return (
    <div className={`banner `} style={props.style}>
      <div
        className={`banner__body ${
          props.classNameSub ? props.classNameSub : ""
        }`}
      >
        <p className="banner__solgan">{props.sologan}</p>
        <h3 className="banner__title">{props.title}</h3>
        <div className="banner__subtitle">{props.subtitle}</div>
        {props.children}
      </div>
      <img className="banner__img" src={props.img} alt="" />
    </div>
  );
};
