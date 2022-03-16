/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/img";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12">
            <div className="footer__logo">
              <img src={logo} alt="" />
            </div>
            <p className="footer__address">
              &copy; 2022 Công ty cổ phần một thành viên, Linh Trung, Thủ Đức,
              Tp.Hồ Chí Minh
            </p>
          </div>
          <div className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12">
            <ul className="footer__list">
              <h3 className="footer__title">Về Diamound</h3>
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="/trang-suc/nhan/">Trang sức</Link>
              </li>{" "}
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="/dong-ho/gucci/">Đồng hồ</Link>
              </li>{" "}
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="qua-tang/cho-nang/">Quà tặng</Link>
              </li>{" "}
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="/lien-he/">Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12">
            <ul className="footer__list">
              <h3 className="footer__title">Dịch vụ khách hàng</h3>
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="#">Hướng dẫn đo size trang sức</Link>
              </li>
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="#">Hướng dẫn mua hàng</Link>
              </li>{" "}
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="#">Chính sách giao hàng</Link>
              </li>{" "}
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="#">Chính sách bảo hành thu đổi</Link>
              </li>{" "}
              <li className="footer__item">
                <i className="bx bx-plus"></i>
                <Link to="#">Chính sách khách hàng thân thiết</Link>
              </li>
            </ul>
          </div>{" "}
          <div className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12">
            <ul className="footer__list">
              <h3 className="footer__title">Kết nối với chúng tôi</h3>
              <li className="footer__item">
                <p>
                  Liên hệ với chúng tôi qua email hoặc qua số điện thoại dưới
                  đây để được tư vấn cụ thể
                </p>
              </li>
              <li className="footer__item">
                <div className="footer__phone__number">
                  <i className="bx bx-plus"></i>
                  <p>1800123 124</p>
                </div>
                <div className="footer__email">
                  <p>info@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row ">
          <div className="footer__copy">
            <div className="copy__right">
              &copy; Copyright 2022. All rights reserved
            </div>
            <div className="copy__left">
              <a href="#"> Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
