import React from "react";
import {Banner} from "../components/common/Banner";
import { CardItem } from "../components/common/CardItem";

//  ip data
import { banner_01 } from "../assets/img";
import arrPro from "../assets/fake-data/Product";
export default function Home() {
  return (
    <div className="home">
      <Banner img={banner_01} />
      <div className="container">
        <h2 className="home__title">Các sản phẩm nổi bật</h2>
        <div className="row">
          {arrPro.map(
            (e, id) =>
              arrPro.length > 0 && (
                <div
                  key={id}
                  className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12"
                >
                  <CardItem img={e.img} title={e.title} price={e.price} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
