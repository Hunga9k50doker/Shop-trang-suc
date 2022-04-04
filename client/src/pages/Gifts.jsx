import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import { banner_sub_02 } from "../assets/img";
import { CardItem } from "../components/common/CardItem";
import { SideBarFilter } from "../components/common/SideBars";
import { to_slug } from "../utils/utils";
import arrPro from "../assets/fake-data/Product";
const arr = [
  {
    title: "Cho nàng",
    path: "/qua-tang/cho-nang/",
  },
  { title: "Cho chàng", path: "/qua-tang/cho-chang/" },
  { title: "Cho cha", path: "/qua-tang/cho-cha/" },
  { title: "Cho mẹ", path: "/qua-tang/cho-me/" },
  { title: "Cho bé", path: "/qua-tang/cho-be/" },
];
export default function Gifts() {
  let [path, setPath] = useState("");
  path = window.location.pathname;
  console.log(path);
  useEffect(() => setPath(), [path]);
  return (
    <Helmet title='Quà tặng'>
    <div className="gifts">
      {arr.map(
        (e, id) =>
          e.path === path && (
            <Banner key={id} img={banner_sub_02} title={`Quà tặng ${e.title}`}>
              <div className="sub__link">
                <Link to="/">Trang chủ</Link>
                <i className="bx bx-chevron-right"></i>
                <p>
                  Quà tặng
                  <i className="bx bx-chevron-right"></i>
                  {e.title}
                </p>
              </div>
            </Banner>
          )
      )}
    
            <SideBarFilter />
         
    </div>
    </Helmet>
  );
}
