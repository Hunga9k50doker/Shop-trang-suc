import { useState, useEffect } from "react";
import { FormLogin, FormRegister } from "./Forms";
import Modal from "./Modal";
export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  useEffect(
    () => {
      const res = document.querySelector(".label__register");
      const log = document.querySelector(".label__login");

      if (res) {
        res.addEventListener("click", () => {
          setIsLogin(!isLogin);
          setIsRegister(!isRegister);
        });
      } else if (log) {
        log.addEventListener("click", () => {
          setIsLogin(!isLogin);
          setIsRegister(!isRegister);
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLogin, isRegister]
  );
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
            <li className="login strong" onClick={() => setIsLogin(!isLogin)}>
              <i className="bx bx-log-in"></i>
              <p>Đăng nhập</p>
            </li>
            {isLogin ? (
              <Modal active={isLogin} setActive={setIsLogin}>
                <FormLogin />
              </Modal>
            ) : (
              ""
            )}
            <li className="register" onClick={() => setIsRegister(!isRegister)}>
              <i className="bx bxs-registered"></i>
              <p>Đăng ký</p>
            </li>
            {isRegister ? (
              <Modal active={isRegister} setActive={setIsRegister}>
                <FormRegister />
              </Modal>
            ) : (
              ""
            )}
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
