import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CardItem } from "./CardItem";
import arrPro from "../../assets/fake-data/Product";

const FormContact = (props) => {
  return (
    <form
      action="#"
      className="form  form__contact"
      style={{ background: `url(${props.url})` }}
    >
      <h3 className="form__title"> {props.title}</h3>
      <div className="form__body">
        <input
          type="
      text"
          placeholder={props.placeholder}
          className="form__input"
        />
        <Button
          classNameBtn="btn__submit"
          icon="bx bxl-telegram"
          content={props.content}
        ></Button>
      </div>
    </form>
  );
};

const FormSearch = () => {
  const [items, setItems] = useState();
  const refInputSearch = useRef();
  useEffect(() => {
    setItems();
  }, []);
  return (
    <form action="#" onClick={(e) => e.stopPropagation()} className="form">
      <div className="form__body">
        <input
          ref={refInputSearch}
          type="
      text"
          placeholder="Tìm sản phẩm..."
          className="form__input"
          onChange={() => setItems()}
        />
        <Button
          classNameBtn="btn__search"
          icon="bx bx-search-alt bx-tada"
          content="Tìm kiếm"
        ></Button>
      </div>
      <div className="form__render">
        {arrPro.slice(0, 4).map((e, id) => (
          <Link to="#" key={id}>
            <CardItem img={e.img} title={e.title} price={e.price} />
          </Link>
        ))}
      </div>
    </form>
  );
};

const FormLogin = () => {
  return (
    <div className="form ">
      <form
        action="#"
        onClick={(e) => e.stopPropagation()}
        className="form__login p-4"
      >
        <ul className="form__list">
          <li className="form__item m-2">
            <input
              type="text"
              className="form__username"
              placeholder="Tên đăng nhập"
              maxLength="20"
              minLength="6"
            />
            <i className="bx bx-user"></i>
          </li>
          <li className="form__item m-2">
            <input
              type="password"
              className="form__password"
              placeholder="Mật khẩu"
              maxLength="20"
              minLength="6"
            />
            <i className="bx bx-lock-alt"></i>
          </li>
          <li className="form__item  form__label m-2">
            <p className="form__forgot__password">
              <Link to="#">Quên mật khẩu</Link>
            </p>
            <p className="not__accout">
              Chưa có tài khoản?
              <strong className="label__register ms-1">Đăng ký</strong>
            </p>
          </li>
          <li className="form__item m-2">
            <Button content="Đăng nhập" classNameBtn="btn__submit" />
          </li>
        </ul>
      </form>
    </div>
  );
};

const FormRegister = () => {
  return (
    <div className="form">
      <form
        action="#"
        onClick={(e) => e.stopPropagation()}
        className="form__register p-4"
      >
        <ul className="form__list">
          <li className="form__item m-2">
            <input
              type="text"
              className="form__name"
              placeholder="Tên của bạn"
              maxLength="20"
              minLength="2"
            />
            <i className="bx bxs-user-detail"></i>
          </li>
          <li className="form__item m-2">
            <input
              type="text"
              className="form__number"
              placeholder="Số điện thoại"
              minLength="9"
              maxLength="11"
            />
            <i className="bx bx-phone"></i>
          </li>

          <li className="form__item m-2">
            <input
              type="text"
              className="form__username"
              placeholder="Tên đăng nhập"
              maxLength="20"
              minLength="6"
            />
            <i className="bx bx-user"></i>
          </li>
          <li className="form__item m-2">
            <input
              type="password"
              className="form__password"
              placeholder="Mật khẩu"
              maxLength="20"
              minLength="6"
            />
            <i className="bx bx-lock-open-alt"></i>
          </li>
          <li className="form__item m-2">
            <input
              type="password"
              className="form__confirm__password"
              placeholder="Xác nhận mật khẩu"
            />
            <i className="bx bx-lock-alt"></i>
          </li>
          <li className="form__item  form__label m-2">
            <p className="have__accout">
              Đã có tài khoản?
              <strong className="label__login ms-1">Đăng nhập</strong>
            </p>
          </li>
          <li className="form__item m-2">
            <Button content="Đăng ký" classNameBtn="btn__submit" />
          </li>
        </ul>
      </form>
    </div>
  );
};

const FormDetail = (props) => {
  return (
    <div className="form">
      <div className="form__detail">
        <h3 className="form__detail__header">
          <p className="form__title">
            Thông tin chi tiết đơn hàng: {props.title}{" "}
          </p>
        </h3>
        <div className="form__detail__body">{props.children}</div>
      </div>
    </div>
  );
};

const FormSubmit = () => {
  return (
    <form
      action="
    /"
      className="form__submit "
    >
      <h5 className="form__title">Liên hệ với chúng tôi</h5>
      <p className="form__subtitle">
        Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được
        đánh dấu *
      </p>
      <div className="container">
        <div className="row">
          <div className="col col-xl-6 col-md-12 col-sm-12">
            <input type="text" placeholder="Tên của bạn*" />
          </div>
          <div className="col col-xl-6 col-md-12 col-sm-12">
            <input type="email" placeholder="Email của bạn*" />
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-12 col-md-12 col-sm-12">
            <input type="text" placeholder="Tiêu đề" />
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-12 col-md-12 col-sm-12">
            <textarea
              name="text__content"
              id="text__content"
              cols="30"
              rows="10"
              placeholder="Nội dung*"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  );
};

export {
  FormContact,
  FormSearch,
  FormLogin,
  FormRegister,
  FormDetail,
  FormSubmit,
};
