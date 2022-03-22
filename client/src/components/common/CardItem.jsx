import React, { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
const CardItem = (props) => {

  return (
    <div className="card__item">
      <i
        onClick={(e) => e.preventDefault()}
        className={`card__icon__like bx ${props.like ? "bxs-heart" : "bx-heart"}`}
      ></i>
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

const CardStyleOne = (props) => {
  return (
    <div className="card__item__style__01 p-2">
      <div className="card__item__body">
        <p className="card__item__title">{props.title}</p>
        <p className="card__item__subtitle">{props.subtitle}</p>
        <p className="card__item__data">{props.value}K </p>
      </div>
      <div className="card__item__percent">
        <CircularProgressbarWithChildren
          value={props.percent}
          strokeWidth={10}
          styles={buildStyles({
            pathColor:
              props.percent < 50
                ? `rgba(62, 152, 199, ${props.percent / 100})`
                : `rgba(62, 152, 199, ${props.percent / 100})`,
            trailColor: "transparent",
            strokeLinecap: "round",
          })}
        ></CircularProgressbarWithChildren>
        <p className="card__item__percent__value">{props.percent}%</p>
      </div>
    </div>
  );
};

export { CardItem, CardStyleOne };
