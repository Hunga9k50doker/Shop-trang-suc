import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/img/logo/DC_Logo_New_opt.png";
import Modal from "./Modal";
import { FormSearch } from "./Forms";
const arrNav = [
  {
    nav_title: "Trang chủ",
    path: "/",
    sub_nav: [
      {
        sub_nav_title: "",
        sub_nav_desc: [{ title: "", path: "" }],
      },
    ],
  },
  {
    nav_title: "Trang sức",
    path: "#",

    sub_nav: [
      {
        sub_nav_title: "Chủng loại",
        sub_nav_desc: [
          {
            title: "Nhẫn",
            path: "/trang-suc/nhan/",
          },
          { title: "Nhẫn cặp", path: "/trang-suc/nhan-cap/" },
          { title: "Lắc", path: "/trang-suc/lac/" },
          { title: "Bông tai", path: "/trang-suc/bong-tai/" },
          { title: "Vòng tay", path: "/trang-suc/vong-tay/" },
          { title: "Dây cổ", path: "/trang-suc/day-co/" },
        ],
      },
      {
        sub_nav_title: "Dòng trang sức",
        sub_nav_desc: [
          {
            title: "Kim cương",
            path: "/trang-suc/kim-cuong/",
          },
          { title: "Ecz-Cz", path: "/trang-suc/ecz-cz/" },
          { title: "Không đính đá", path: "/trang-suc/khong-dinh-da/" },
        ],
      },
      {
        sub_nav_title: "Chất liệu",
        sub_nav_desc: [
          {
            title: "24k",
            path: "/trang-suc/24k/",
          },
          { title: "22k", path: "/trang-suc/22k/" },
          { title: "18k", path: "/trang-suc/18k/" },
        ],
      },
    ],
  },
  {
    nav_title: "Đồng hồ",
    path: "#",

    sub_nav: [
      {
        sub_nav_title: "Thương hiệu",
        sub_nav_desc: [
          {
            title: "Gucci",
            path: "/dong-ho/gucci/",
          },
          { title: "Citizen", path: "/dong-ho/citizen/" },
          { title: "Casio", path: "/dong-ho/casio/" },
        ],
      },
      {
        sub_nav_title: "Giới tính",
        sub_nav_desc: [
          {
            title: "Nam",
            path: "/dong-ho/nam/",
          },
          { title: "Nữ", path: "/dong-ho/nu/" },
          { title: "Unisex", path: "/dong-ho/unisex/" },
        ],
      },
      {
        sub_nav_title: "Chủng loại",
        sub_nav_desc: [
          {
            title: "Đồng hồ",
            path: "/dong-ho/dong-ho/",
          },
          { title: "Mắt kính", path: "/dong-ho/mat-kinh/" },
          { title: "Đồng hồ cặp", path: "/dong-ho/dong-ho-cap/" },
          { title: "Phụ kiện", path: "/dong-ho/phu-kien/" },
        ],
      },
    ],
  },
  {
    nav_title: "Quà tặng",
    path: "#",
    sub_nav: [
      {
        sub_nav_title: "",
        sub_nav_desc: [
          {
            title: "Cho nàng",
            path: "/qua-tang/cho-nang/",
          },
          { title: "Cho chàng", path: "/qua-tang/cho-chang/" },
          { title: "Cho cha", path: "/qua-tang/cho-cha/" },
          { title: "Cho mẹ", path: "qua-tang/cho-me/" },
          { title: "Cho bé", path: "qua-tang/cho-be/" },
        ],
      },
    ],
  },
  {
    nav_title: "Liên hệ",
    path: "/lien-he",

    sub_nav: [
      {
        sub_nav_title: "",
        sub_nav_desc: [
          {
            title: "",
            path: "",
          },
        ],
      },
    ],
  },
];

export default function Navigation() {
  const [active, setActive] = useState(false);
  return (
    <div className="container-fluid">
      <div className={`nav `}>
        <div className="nav__logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <ul className="nav__list">
          {arrNav.map((e, id) => (
            <li key={id} className="nav__item">
              <NavLink
                // className={({ isActive }) =>
                //   isActive
                //     ? "nav__item__Navlink selected "
                //     : " nav__item__Navlink "
                // }
                // className="nav__item__Navlink"
                // activeclassname="selected"
                to={e.path}
                // exact
              >
                {e.nav_title}
              </NavLink>
              <div
                className={` sub__nav ${
                  e.nav_title === "Trang chủ"
                    ? "hidden"
                    : `${e.nav_title === "Liên hệ" ? "hidden" : ""}`
                }`}
              >
                {e.sub_nav.map((element, index) => (
                  <ul key={index} className="sub__nav__list">
                    <h3 className="sub__nav__title">{element.sub_nav_title}</h3>
                    <li className="sub__nav__item">
                      {element.sub_nav_desc.map((ele, ix) => (
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "selected " : "  "
                          }
                          key={ix}
                          to={ele.path}
                        >
                          {ele.title}
                        </NavLink>
                      ))}
                    </li>
                  </ul>
                ))}
              </div>
            </li>
          ))}
          <li className="nav__item">
            <NavLink
              // className={({ isActive }) => (isActive ? " selected " : "  ")}
              // className="nav__item__Navlink"
              to={"/admin"}
            >
              Admin
            </NavLink>
          </li>
        </ul>
        <div className="nav__right">
          <div className={`nav__right__item `}>
            <i
              onClick={() => setActive(!active)}
              className={`bx bx-search-alt-2 `}
            ></i>
          </div>
          <Link
            to="/danh-sach-san-pham-yeu-thich/"
            className="nav__right__item"
          >
            <i className="bx bx-heart"></i>
          </Link>
          <Link to="/gio-hang-cua-ban/" className="nav__right__item">
            <i className="bx bx-cart-alt"></i>
          </Link>
        </div>
        {active ? (
          <Modal active={active} setActive={setActive}>
            <FormSearch />
          </Modal>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
