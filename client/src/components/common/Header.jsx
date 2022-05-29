import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/context/AuthContext";
import { FormLogin, FormRegister, FormEdit } from "./Forms";
import Modal from "./Modal";
import Button from "./Button";
export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isActiveForm, setIsActiveForm] = useState(false);
  const { logout } = useContext(AuthContext);

  const {
    authState: { user, loading, isAuthenticated },
    updateUser,
  } = useContext(AuthContext);
  const [data, setData] = useState({
    name: "",
    address: "",
    telephone: "",
  });
  useEffect(() => {
    if (user)
      setData({
        ...data,
        name: user.name,
        address: user.address,
        telephone: user.telephone,
      });
  }, [user]);
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.className] = e.target.value;
    setData(newData);
  };
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
  if (loading) return <Skeleton height="50px" />;
  const update = () => {
    updateUser(user._id, data);
  };

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
        {!isAuthenticated ? (
          <>
            {console.log()}
            <li
              className="login strong"
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
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
            <p> {user.name ? user.name : "user0123"} </p>
            <ul className="my__account__list">
              <Link to="/don-hang-cua-ban">
                <li className="my__account__item">
                  <i className="bx bx-news"></i>
                  Đơn hàng
                </li>
              </Link>
              <li
                className="my__account__item"
                onClick={() => setIsActiveForm(true)}
              >
                <i className="bx bx-cog me-2"></i>
                Cài đặt
              </li>

              <li
                className="my__account__item"
                onClick={() => {
                  logout();
                }}
              >
                <i className="bx bx-log-out-circle me-2"></i>
                Đăng xuất
              </li>
            </ul>
            {isActiveForm ? (
              <Modal
                style={{
                  backgroundImage:
                    "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)",
                }}
                active={isActiveForm}
                setActive={setIsActiveForm}
              >
                <FormEdit title="Cập nhật thông tin người dùng">
                  <li className="form__item">
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      defaultValue={data.name}
                      onChange={(e) => handleChange(e)}
                      className="name"
                    />
                  </li>
                  <li className="form__item">
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      defaultValue={data.address}
                      onChange={(e) => handleChange(e)}
                      className="address"
                    />
                  </li>
                  <li className="form__item">
                    <input
                      type="number"
                      placeholder="Số điện thoại"
                      defaultValue={data.telephone}
                      onChange={(e) => handleChange(e)}
                      className="telephone"
                    />
                  </li>
                  <li style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      content="Cập nhật"
                      onClick={() => {
                        update();
                        toast.success("Cập nhật thành công!");
                        setTimeout(() => {
                          setIsActiveForm(false);
                        }, 300);
                      }}
                    />
                  </li>
                </FormEdit>
              </Modal>
            ) : (
              ""
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
