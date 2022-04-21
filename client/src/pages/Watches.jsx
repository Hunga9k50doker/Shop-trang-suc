import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/common/Banner";
import Helmet from "../components/common/Helmet";
import { banner_sub_02 } from "../assets/img";
import { SideBarFilter } from "../components/common/SideBars";

const arr = [
  {
    title: "Gucci",
    path: "/dong-ho/gucci/",
  },
  { title: "Citizen", path: "/dong-ho/citizen/" },
  { title: "Casio", path: "/dong-ho/casio/" },
  {
    title: "Nam",
    path: "/dong-ho/nam/",
  },
  { title: "Nữ", path: "/dong-ho/nu/" },
  { title: "Unisex", path: "/dong-ho/unisex/" },
  {
    title: "Đồng hồ",
    path: "/dong-ho/dong-ho/",
  },
  { title: "Mắt kính", path: "/dong-ho/mat-kinh/" },
  { title: "Đồng hồ cặp", path: "/dong-ho/dong-ho-cap/" },
  { title: "Phụ kiện", path: "/dong-ho/phu-kien/" },
];
export default function Watches() {
  let [path, setPath] = useState("");
  path = window.location.pathname;
  useEffect(() => setPath(), [path]);
  return (
    <Helmet title="Đồng hồ">
      <div className="watches">
        {arr.map(
          (e, id) =>
            e.path === path && (
              <Banner key={id} img={banner_sub_02} title={`Đồng Hồ ${e.title}`}>
                <div className="sub__link">
                  <Link to="/">Trang chủ</Link>
                  <i className="bx bx-chevron-right"></i>
                  <p>
                    Đồng hồ
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
