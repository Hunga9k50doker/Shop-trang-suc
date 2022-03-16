import React from "react";
import { useParams } from "react-router-dom";
import { to_slug } from "../utils/utils";
import arrPro from "../assets/fake-data/Product";
export default function Product() {
  const { slug } = useParams();
  return (
    <div className="product">
      <div className="container">
        {arrPro.map(
          (e, id) =>
            to_slug(e.title) === slug && (
              <div className="row" key={id}>
                <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
                  <div className="product__img">
                    <div className="product__slide__img">
                      <img src={e.img} alt="" />
                      <img src={e.img} alt="" />
                      <img src={e.img} alt="" />
                      <img src={e.img} alt="" />
                    </div>
                    <div className="product__item__img">
                      <img src={e.img} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-6 col-xl-6 col-md-6 col-sm-12">
                  <div className="product__detail">
                    <div className="product__title">{e.title}</div>
                    <p className="product__price">Giá: {e.price} vnd</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
