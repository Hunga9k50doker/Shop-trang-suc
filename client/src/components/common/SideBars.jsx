import React from "react";
import { NavLink, Link } from "react-router-dom";

const arrItemAdmin = [
  {
    title: "Trang Chủ",
    link: "/admin/",
    icon: "bx bx-home-alt",
  },
  {
    title: "Đơn đặt hàng",
    link: "/admin/don-dat-hang/",
    icon: "bx bxs-news",
  },
  {
    title: "Sản phẩm",
    link: "/admin/san-pham/",
    icon: "bx bx-cube-alt bx-rotate-90",
  },
  {
    title: "Khách hàng",
    link: "/admin/khach-hang/",
    icon: "bx bx-user",
  },
  {
    title: "Trạng thái",
    link: "/admin/trang-thai/",
    icon: "bx bx-line-chart-down bx-rotate-270",
  },
  {
    title: "Cài đặt",
    link: "/admin/cai-dat/",
    icon: "bx bx-cog",
  },
];

const DataOverall = [
  {
    title: "Đơn đặt hàng",
    count: 300,
    icon: "bx bxs-news",
  },
  {
    title: "Khách hàng",
    count: 9.876,
    icon: "bx bx-user",
  },
  {
    title: "Sản phẩm",
    count: 1.234,

    icon: "bx bx-cube-alt bx-rotate-90",
  },

  {
    title: "Doanh thu",
    count: "56784",
    icon: "bx bx-dollar",
  },
];
const SideBarLeftAdmin = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__left__admin">
        {/* <Link to="/">
        </Link> */}
        <i className="header__icon bx bxs-category-alt mt-5 mb-5"></i>
        <ul className="sidebar__list pe-0">
          {arrItemAdmin.map((e, id) => (
            <li key={id} className="sidebar__item slidebar__left__item pe-0">
              <NavLink
                className={({ isActive }) =>
                  isActive ? " selected  p-2 pe-0" : "  p-2 pe-0"
                }
                to={e.link}
              >
                <p className="sidebar__item__icon">
                  <i className={e.icon}></i>
                </p>
                <h6 className="m-0 sidebar__item__title">{e.title}</h6>
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to={"/"} title="Đăng xuất" className="sidebar__item__logout p-4">
          <i className="bx bx-log-out-circle m-2"></i>
          Đăng xuất
        </Link>
      </div>
    </div>
  );
};
const SideBarRightAdmin = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__right__admin">
        <div className="sidebar__right__item ps-4 pt-4 pe-4">
          <h5 className="sidebar__item__title">Tổng quan</h5>
          <ul className="item__list">
            {DataOverall.map((e, id) => (
              <li className="item" key={id}>
                <i className={`item__icon me-4 ${e.icon}`}></i>
                <h5 className="item__body">
                  <p className="item__body__title">{e.count}K</p>
                  <p className="item__body__subtitle">{e.title}</p>
                </h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar__right__item ps-4 pt-4 pe-4">
          <h5 className="sidebar__item__title">Doanh thu từ các kênh</h5>
          <ul className="item__list">
            <li className="item">
              <h5 className="item__body">
                <p className="item__body__title">Đường liên kết</p>
                <p className="item__body__percent">70%</p>
              </h5>
              <p className="progress">
                <span className="progess__percent"></span>
              </p>
            </li>
            <li className="item">
              {" "}
              <h5 className="item__body">
                <p className="item__body__title">Tìm kiếm bên ngoài</p>
                <p className="item__body__percent">40%</p>
              </h5>
              <p className="progress">
                <span className="progess__percent"></span>
              </p>
            </li>
            <li className="item">
              <h5 className="item__body">
                <p className="item__body__title">Giới thiệu</p>
                <p className="item__body__percent">60%</p>
              </h5>
              <p className="progress">
                <span className="progess__percent"></span>
              </p>
            </li>{" "}
            <li className="item">
              {" "}
              <h5 className="item__body">
                <p className="item__body__title">Mạng xã hội</p>
                <p className="item__body__percent">30%</p>
              </h5>
              <p className="progress">
                <span className="progess__percent"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { SideBarLeftAdmin, SideBarRightAdmin };
