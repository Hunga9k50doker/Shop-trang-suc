/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";
import { FormSubmit } from "../components/common/Forms";

import { Banner } from "../components/common/Banner";
import { banner_sub_02 } from "../assets/img";
export default function Contact() {
  return (
    <div className="contact main">
      <Banner img={banner_sub_02} title={"Liên hệ"}>
        <div className="sub__link">
          <Link to="/">Trang chủ</Link>
          <i className="bx bx-chevron-right"></i>
          <p>Liên Hệ</p>
        </div>
      </Banner>
      <div className="container contact__body" style={{ marginTop: "8rem" }}>
        <div className="row">
          <h3 className="contact__title m-4">
            Hãy cho chúng tôi biết bạn nghĩ gì?
          </h3>
        </div>
        <div className="row m-4">
          <div className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12 contact__list__item">
            <i className="contact__icon bx bx-current-location"></i>
            <div className="item__content">
              <h5 className="item__title">Địa chỉ</h5>
              <p className="item__subtitle">
                155 Lê Văn Chí, Phường Linh Trung, Thủ Đức, Thành phố Hồ Chí
                Minh, Việt Nam
              </p>
            </div>
          </div>
          <div className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12 contact__list__item">
            <i className="contact__icon bx bxs-phone-call"></i>
            <div className="item__content">
              <h5 className="item__title">Số điện thoại</h5>
              <p className="item__subtitle">(+84) 040220013</p>
            </div>
          </div>
          <div className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12 contact__list__item">
            <i className="contact__icon bx bx-envelope"></i>
            <div className="item__content">
              <h5 className="item__title">Email</h5>
              <p className="item__subtitle">info@gmail.com</p>
            </div>
          </div>
          <div className="col col-xxl-3 col-xl-3 col-md-6 col-sm-12 contact__list__item">
            <i className="contact__icon bx bx-time-five"></i>
            <div className="item__content">
              <h5 className="item__title">Giờ làm việc</h5>
              <p className="item__subtitle">
                Các ngày trong tuần, 7am - 11h20pm
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col col-xl-6 col-md-12 col-sm-12">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.969555529453!2d106.77710832354661!3d10.860904682264001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527708365450f%3A0x72328c734a864ce2!2zMTU1IEzDqiBWxINuIENow60sIFBoxrDhu51uZyBMaW5oIFRydW5nLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1647939465382!5m2!1svi!2s"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col col-xl-6 col-md-12 col-sm-12">
          <FormSubmit />
        </div>
      </div>
    </div>
  );
}
