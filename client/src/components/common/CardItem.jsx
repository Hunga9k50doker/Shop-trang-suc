import React, { useRef, useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
const CardItem = ({ item, handleAddWishlist }) => {
  const { img, title, desc, price, colors, materials, material_golds, sexs } =
    item;
  const heartIconRef = useRef(null);
  const cardRef = useRef(null);

  const [like, setLike] = useState(false);

  const handleEvents = {
    addWishlist: (e) => {
      e.preventDefault();
      e.stopPropagation();
      heartIconRef.current.addEventListener("click", () => {
        // console.log(typeof handleAddWishlist(item));
      });
    },
  };
  useEffect(() => {
    heartIconRef.current.addEventListener("click", () => setLike(!like));
  }, [like]);

  return (
    <div className="card__item" ref={cardRef}>
      <i
        ref={heartIconRef}
        onClick={handleEvents.addWishlist}
        className={`card__icon__like bx ${like ? "bxs-heart" : "bx-heart"}`}
      ></i>
      <div className="card__item__header">
        <img src={img} alt="" />
      </div>
      <div className="card__item__body">
        <p className="card__item__title">{title}</p>
        <p className="card__item__price">{price} vnđ</p>
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
