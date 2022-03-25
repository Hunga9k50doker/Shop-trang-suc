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
    <Helmet title="Trang sức">
      <div className="jewels">
        {arr.map(
          (e, id) =>
            e.path === path && (
              <Banner
                key={id}
                img={banner_sub_02}
                title={`Trang sức ${e.title}`}
              >
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
        <SideBarFilter />
      </div>
    </Helmet>
  );
}
