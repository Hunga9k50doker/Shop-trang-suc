import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/common/Banner";
import { banner_sub_02 } from "../assets/img";
import { CardItem } from "../components/common/CardItem";
import { SideBarFilter } from "../components/common/SideBars";
import { to_slug } from "../utils/utils";

import arrPro from "../assets/fake-data/Product";
const arr = [
  {
    title: "Nhẫn",
    path: "/trang-suc/nhan/",
  },
  { title: "Nhẫn cặp", path: "/trang-suc/nhan-cap/" },
  { title: "Lắc", path: "/trang-suc/lac/" },
  { title: "Bông tai", path: "/trang-suc/bong-tai/" },
  { title: "Vòng tay", path: "/trang-suc/vong-tay/" },
  { title: "Dây cổ", path: "/trang-suc/day-co/" },
  {
    title: "Kim cương",
    path: "/trang-suc/kim-cuong/",
  },
  { title: "Ecz-Cz", path: "/trang-suc/ecz-cz/" },
  { title: "Không đính đá", path: "/trang-suc/khong-dinh-da/" },
  {
    title: "24k",
    path: "/trang-suc/24k/",
  },
  { title: "22k", path: "/trang-suc/22k/" },
  { title: "18k", path: "/trang-suc/18k/" },
];

export default function Jewels() {
  let [path, setPath] = useState("");
  path = window.location.pathname;
  useEffect(() => setPath(), [path]);

  return (
    <div className="jewels">
      {arr.map(
        (e, id) =>
          e.path === path && (
            <Banner key={id} img={banner_sub_02} title={`Trang sức ${e.title}`}>
              <div className="sub__link">
                <Link to="/">Trang chủ</Link>
                <i className="bx bx-chevron-right"></i>
                <p>
                  Trang sức
                  <i className="bx bx-chevron-right"></i>
                  {e.title}
                </p>
              </div>
            </Banner>
          )
      )}
      <div className="container">
        <div className="row">
          <div className="col col-xl-3 col-md-3 col-sm-12">
            <SideBarFilter />
          </div>
          <div className="col col-xl-9 col-md-9 col-sm-12">
            <div className="row">
              {arrPro.map((e, id) => (
                <div className="col col-xl-4 col-md-6 col-sm-12">
                  <Link to={`/chi-tiet/${to_slug(e.title)}`}>
                    <CardItem img={e.img} title={e.title} price={e.price} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
