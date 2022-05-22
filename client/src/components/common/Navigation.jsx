import React, { useState, useRef, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/img/logo/DC_Logo_New_opt.png";
import Modal from "./Modal";
import Accordion from "./Accordion";
import { FormSearch } from "./Forms";
import { AuthContext } from "../../provider/context/AuthContext";
import { FavouriteContext } from "../../provider/context/FavouriteContext";
import { CartContext } from "../../provider/context/CartContext";

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
          { title: "Cho mẹ", path: "/qua-tang/cho-me/" },
          { title: "Cho bé", path: "/qua-tang/cho-be/" },
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

export default function Navigation({ size, sizeFavorite }) {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);
  const [screenWitdh, setScreenWitdh] = useState(window.screen.width);
  const navRef = useRef(null);
  const { favouriteState } = useContext(FavouriteContext);
  const { cartState } = useContext(CartContext);
  // size = cartState.products.length
  // sizeFavorite=favouriteState.products.length
  useEffect(() => {
    setScreenWitdh(window.screen.width);
  }, [screenWitdh]);
  useEffect(
    () =>
      window.addEventListener("scroll", () => {
        const currentOffsetY = window.pageYOffset;
        if (navRef.current)
          navRef.current.style.top = currentOffsetY > 30 ? "0" : "2.9rem";
      }),
    []
  );
  const checkLogin = (e) => {
    if (!user) {
      e.preventDefault();
      toast.warning("Bạn chưa đăng nhập!");
    } else {
    }
  };
  return (
    <div ref={navRef} className="nav">
      {screenWitdh < 786 ? (
        <div
          className="menu__mobile
        "
        >
          <i className="bx bx-menu" onClick={() => setMenu(!menu)}></i>
          {menu && (
            <Modal active={menu} setActive={setMenu}>
              <ul className="nav__mobile__list">
                {arrNav.map((e, id) => (
                  <li key={id} className="nav__item">
                    <Accordion
                      classNameAccordion="accordion__title__link"
                      link={e.path}
                      title={e.nav_title}
                      classNameIcon={`  ${
                        e.nav_title === "Trang chủ"
                          ? "hidden"
                          : `${e.nav_title === "Liên hệ" ? "hidden" : ""}`
                      }`}
                    >
                      {e.sub_nav.map((element, index) => (
                        <ul key={index} className="sub__nav__list">
                          <h3 className="sub__nav__title">
                            {element.sub_nav_title}
                          </h3>
                          <ul className="sub__nav__list">
                            <li className="sub__nav__item">
                              {element.sub_nav_desc.map((ele, ix) => (
                                <NavLink
                                  onClick={() => setMenu(false)}
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
                        </ul>
                      ))}
                    </Accordion>
                  </li>
                ))}
                {user && user.role === "admin" && (
                  <li className="nav__item">
                    <NavLink className="nav__link__admin" to={"/admin"}>
                      Admin
                    </NavLink>
                  </li>
                )}
              </ul>
            </Modal>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="nav__logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <ul className="nav__list">
        {arrNav.map((e, id) => (
          <li key={id} className="nav__item">
            <NavLink to={e.path}>{e.nav_title}</NavLink>
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
        {user && user.role === "admin" && (
          <li className="nav__item">
            <NavLink to={"/admin"}>Admin</NavLink>
          </li>
        )}
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
          onClick={(e) => checkLogin(e)}
        >
          <i className="bx bx-heart"></i>
          <p className="nav__count__product">
            {favouriteState ? favouriteState.products.length : 0}
          </p>
        </Link>
        <Link
          to="/gio-hang-cua-ban/"
          className="nav__right__item"
          onClick={(e) => checkLogin(e)}
        >
          <i className="bx bx-cart-alt"></i>
          <p className="nav__count__product">
            {cartState ? cartState.products.length : 0}
          </p>
        </Link>
      </div>
      {active ? (
        <Modal active={active} setActive={setActive}>
          <FormSearch active={active} setActive={setActive} />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}
