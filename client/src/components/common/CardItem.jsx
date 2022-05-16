import React, { useRef, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import { numberWithCommas } from "../../utils/utils";
import { FavouriteContext } from "../../provider/context/FavouriteContext";

const CardItem = ({ item }) => {
  const {
    addProductToFavourite,
    deleteOneProductFromFavourite,
    favouriteState,
  } = useContext(FavouriteContext);

  const { imgsUrl, name, price } = item;
  const heartIconRef = useRef(null);
  const cardRef = useRef(null);
  const notify = (mess) => toast(mess);

  const isFav = favouriteState.products.find((p) => p._id === item._id);
  const [like, setLike] = useState(() => {
    return isFav ? true : false;
  });

  const handleEvents = {
    addToFavourite: (e, product) => {
      e.preventDefault();
      setLike(true);
      addProductToFavourite({ product, id: product._id });
      notify("Thêm vào mục ưa thích thành công, hãy kiểm tra!");
    },
    handleDeleteFromFavourite: (e) => {
      e.preventDefault();
      setLike(false);
      deleteOneProductFromFavourite({ id: item._id });
      notify("Đã xóa khỏi mục ưa thích, hãy kiểm tra!");
    },
  };

  return (
    <div className="card__item" ref={cardRef}>
      <i
        ref={heartIconRef}
        onClick={(e) =>
          like
            ? handleEvents.handleDeleteFromFavourite(e)
            : handleEvents.addToFavourite(e, item)
        }
        className={`card__icon__like bx ${isFav ? "bxs-heart" : "bx-heart"}`}
      ></i>
      <ToastContainer autoClose={1000} />
      <div className="card__item__header">
        {imgsUrl.length > 0 && <img src={imgsUrl} alt="" />}
      </div>
      <div className="card__item__body">
        <p className="card__item__title">{name}</p>
        <p className="card__item__price">
          {numberWithCommas(Number(price))} vnđ
        </p>
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
