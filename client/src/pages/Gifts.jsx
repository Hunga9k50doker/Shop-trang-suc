import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import { banner_sub_02 } from "../assets/img";
import { SideBarFilter } from "../components/common/SideBars";
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
  let typeData;
  const handleFilter = () => {
    if (path === "/qua-tang/cho-nang/") {
      typeData = "Cho nàng";
    } else if (path === "/qua-tang/cho-chang/") {
      typeData = "Cho chàng";
    } else if (path === "/qua-tang/cho-cha/") {
      typeData = "Cho cha";
    } else if (path === "/qua-tang/cho-me/") {
      typeData = "Cho me";
    } else if (path === "/qua-tang/cho-be/") {
      typeData = "Cho bé";
    }
  };
  useEffect(() => handleFilter(), [path]);
  useEffect(() => setPath(), [path]);
  return (
    <Helmet title="Quà tặng">
      <div className="gifts">
        {arr.map(
          (e, id) =>
            e.path === path && (
              <Banner
                key={id}
                img={banner_sub_02}
                title={`Quà tặng ${e.title}`}
              >
                <div data-aos="fade-up" className="sub__link">
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

        <SideBarFilter path={path} typeData={typeData} />
      </div>
    </Helmet>
  );
}
