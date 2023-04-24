import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

// import Modal from "./Modal";
import { to_slug } from "../../utils/utils";
import { CardItem } from "./CardItem";
import { AuthContext } from "../../provider/context/AuthContext";
import { ProductContext } from "../../provider/context/ProductContext";

import { theme_fb, theme_gg, theme_gh } from "../../assets/img";

const FormContact = (props) => {
  return (
    <form action="#" className="form  form__contact" style={{ background: `url(${props.url})` }}>
      <h3 className="form__title"> {props.title}</h3>
      <div className="form__body">
        <input
          type="
      text"
          placeholder={props.placeholder}
          className="form__input"
        />
        <Button classNameBtn="btn__submit" icon="bx bxl-telegram" content={props.content}></Button>
      </div>
    </form>
  );
};

const FormSearch = ({ active, setActive }) => {
  const {
    productState: { products },
  } = useContext(ProductContext);
  const [data, setData] = useState(products);
  const refInputSearch = useRef();
  const [searchItem, setSearchItem] = useState("");
  let item = 8;
  let count = 0;
  return (
    <form action="#" onClick={(e) => e.stopPropagation()} className="form">
      <div className="form__body">
        <input
          ref={refInputSearch}
          type="
      text"
          placeholder="Tìm sản phẩm..."
          className="form__input"
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
      <div className="form__render">
        {data
          .filter((val) => {
            if (searchItem === "") {
              return val;
            } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
              count++;
              item = count;
              return val;
            }
          })
          .slice(0, item)
          .map((e, id) => (
            <Link
              key={id}
              to={`/chi-tiet/${to_slug(e._id)}`}
              onClick={() => {
                setActive(!active);
              }}
            >
              <CardItem item={e} />
            </Link>
          ))}
      </div>
    </form>
  );
};
// ============login========================
const FormLogin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { login, LoginWithFirebase } = useContext(AuthContext);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <div className="form ">
      <form action="#" onClick={(e) => e.stopPropagation()} className="form__login p-4">
        <ul className="form__list">
          <li className="form__item m-2">
            <input
              type="text"
              className="form__username"
              placeholder="Tên đăng nhập"
              maxLength="20"
              minLength="6"
              onChange={handleChange}
              name="username"
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
              onChange={handleChange}
              name="password"
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
          <li className="form__item m-2" onClick={handleSubmit}>
            <Button content="Đăng nhập" classNameBtn="btn__submit" />
          </li>
          <li className="form__item form__item__login__auth m-2">
            <img disabled={true} src={theme_gg} alt="" onClick={() => LoginWithFirebase("GOOGLE_LOGIN")} />
          </li>
        </ul>
      </form>
    </div>
  );
};

const FormRegister = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    repassword: "",
    name: "",
    telephone: "",
  });
  const { register } = useContext(AuthContext);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    register(user);
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit} className="form__register p-4">
        <p style={{ textAlign: "center", color: "red", width: "100%" }}>Các trường ở dưới là bắt buộc</p>
        <ul className="form__list">
          <li className="form__item m-2">
            <input
              type="text"
              required="required"
              className="form__name"
              placeholder="Tên của bạn"
              maxLength="20"
              minLength="2"
              name="name"
              onChange={handleChange}
            />
            <i className="bx bxs-user-detail"></i>
          </li>
          <li className="form__item m-2">
            <input
              type="tel"
              className="form__number"
              required="required"
              placeholder="Số điện thoại (0331314462)"
              pattern="[0-9]{10}"
              name="telephone"
              onChange={handleChange}
            />
            <i className="bx bx-phone"></i>
          </li>

          <li className="form__item m-2">
            <input
              type="text"
              required="required"
              className="form__username"
              placeholder="Tên đăng nhập"
              maxLength="20"
              minLength="6"
              name="username"
              onChange={handleChange}
            />
            <i className="bx bx-user"></i>
          </li>
          <li className="form__item m-2">
            <input
              type="password"
              required="required"
              className="form__password"
              placeholder="Mật khẩu"
              maxLength="20"
              minLength="6"
              name="password"
              onChange={handleChange}
            />
            <i className="bx bx-lock-open-alt"></i>
          </li>
          <li className="form__item m-2">
            <input
              type="password"
              className="form__confirm__password"
              placeholder="Xác nhận mật khẩu"
              required="required"
              name="repassword"
              onChange={handleChange}
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
            <Button type={"submit"} content="Đăng ký" classNameBtn="btn__submit" />
          </li>
        </ul>
      </form>
    </div>
  );
};

const FormDetail = (props) => {
  return (
    <div className="form form__detail">
      <p className="form__title">Thông tin chi tiết đơn hàng: {props.title} </p>
      <div className="">{props.children}</div>
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
      <p className="form__subtitle">Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được đánh dấu *</p>
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
            <textarea name="text__content" id="text__content" cols="30" rows="10" placeholder="Nội dung*"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-12 col-md-12 col-sm-12">
            <Button style={{ float: "right" }} content="Gửi ý kiến" />
          </div>
        </div>
      </div>
    </form>
  );
};

const FormConfirm = (props) => {
  return (
    <div className="form__confirm">
      <h3 className="form__title">{props.title ? props.title : "Bạn muốn xác nhận hành động này?"}</h3>
      <Button content="Xác nhận" />
      <Button content="Hủy" />
    </div>
  );
};
const FormEdit = (props) => {
  // const [isActive, setIsActive] = useState(false);
  return (
    <form className="form form__edit" method="post" onClick={(e) => e.preventDefault()}>
      <h3 className="form__title">{props.title}</h3>
      <ul className="form__list">{props.children}</ul>
    </form>
  );
};
const FormAdd = (props) => {
  return (
    <form onSubmit={(e) => props.onSubmit(e)} action="" method="post" className="form form__add">
      <h3 className="form__title">{props.title}</h3>
      <ul className="form__list">{props.children}</ul>
      <div className="row">
        <div className="col" style={{ display: "flex", justifyContent: "center" }}>
          <Button content="Thêm sản phẩm" onClick={props.handleClick} />
        </div>
      </div>
    </form>
  );
};
export { FormContact, FormSearch, FormLogin, FormRegister, FormDetail, FormSubmit, FormConfirm, FormEdit, FormAdd };
