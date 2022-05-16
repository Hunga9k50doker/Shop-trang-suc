import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import { banner_sub_02 } from "../assets/img";
import { SideBarFilter } from "../components/common/SideBars";

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
  let typeData;
  const handleFilter = () => {
    if (path === "/trang-suc/nhan/") {
      typeData = "Nhẫn";
    } else if (path === "/trang-suc/nhan-cap/") {
      typeData = "Nhẫn Cặp";
    } else if (path === "/trang-suc/lac/") {
      typeData = "Lắc";
    } else if (path === "/trang-suc/bong-tai/") {
      typeData = "Bông tai";
    } else if (path === "/trang-suc/vong-tay/") {
      typeData = "Vòng tay";
    } else if (path === "/trang-suc/day-co/") {
      typeData = "Dây cổ";
    }
  };
  useEffect(() => setPath(), [path]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleFilter(), [path]);
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
        <SideBarFilter path={path} typeData={typeData} />
      </div>
    </Helmet>
  );
}
