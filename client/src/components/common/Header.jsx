import React from "react";
export default function Header() {
  let role = 0;
  return (
    <div className="header">
      <ul className="header__left">
        <li className="phone__number">
          <i className="bx bx-phone-call"></i>
          <p>123456789</p>
        </li>
        <li className="phone__number">
          <i className="bx bx-mail-send"></i>
          <p>info@gmail.com</p>
        </li>
      </ul>
      <ul className="header__right">
        {role === 0 ? (
          <>
            <li className="login strong">
              <i className="bx bx-log-in"></i>
              <p>Đăng nhập</p>
            </li>
            <li className="register">
              <i className="bx bxs-registered"></i>
              <p>Đăng ký</p>
            </li>
          </>
        ) : (
          <li className="my__account">
            <i className="bx bxs-user-circle"></i>
            <p>Tài khoản của tôi</p>
          </li>
        )}
      </ul>
    </div>
  );
}
