import React from "react";

export const CardItem = (props) => {
  return (
    <div className="card__item">
      <div className="card__item__header">
        <img src={props.img} alt="" />
      </div>
      <div className="card__item__body">
        <p className="card__item__title">{props.title}</p>
        <p className="card__item__price">{props.price} vnđ</p>
      </div>
    </div>
  );
};
