import React from "react";

export const Banner = (props) => {
  return (
    <div className="banner">
      <img src={props.img} alt="" />
      {props.children}
    </div>
  );
};
