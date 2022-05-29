import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { CartContext } from "../provider/context/CartContext";
import { AuthContext } from "../provider/context/AuthContext";
import { OrderContext } from "../provider/context/OrderContext";
import { numberWithCommas } from "../utils/utils";
import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import Button from "../components/common/Button";
import { banner_sub_02 } from "../assets/img";

export default function Payment() {
  const navigate = useNavigate();

  const [price, setPrice] = useState(0);
  const {
    cartState: { loading, products },
  } = useContext(CartContext);

  const { createOrder } = useContext(OrderContext);

  const {
    authState: { user },
  } = useContext(AuthContext);
  const [dataShip, setDataShip] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    total: 0,
    invoiceDetails: [],
  });
  const handlePrice = () => {
    let ans = 0;
    products.map((item) => (ans += item.quantity * item.product[0].price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  }, []);
  useEffect(() => {
    if (user) {
      console.log(user);
      setDataShip({
        name: user.name,
        address: user.address,
        phoneNumber: user.telephone,
      });
    }
  }, [user]);
  if (loading) {
    return <Skeleton height="200px" width={"100%"} />;
  }

  const handleChange = (e) => {
    setDataShip({
      ...dataShip,
      [e.target.name]: e.target.value,
    });
  };

  const handlePay = () => {
    if (dataShip.name && dataShip.address && dataShip.phoneNumber) {
      let invoiceDetails = products.map((item) => {
        return { product: item.product[0]._id, quantity: item.quantity };
      });
      createOrder({ ...dataShip, invoiceDetails, total: price });
      setTimeout(() => {
        navigate("/");
      }, 1000);
      toast.success("Thanh toán thành công!");
    } else {
      toast.warning("Bạn chưa nhập đầy đủ thông tin");
    }
  };

  return (
    <Helmet title="Xác nhận thanh toán">
      <div className="mycart">
        <Banner img={banner_sub_02} title="Xác nhận thanh toán" />
        <div className="container">
          <div className="cart__info__txt" style={{ marginTop: "8rem" }}>
            <h4 style={{ width: "100%", textAlign: "center" }}>
              Địa chỉ giao hàng
            </h4>
          </div>
          <ul>
            <li>
              <h5>Tên người nhận: </h5>
              <input
                style={{ border: "1px solid #ccc" }}
                type="text"
                defaultValue={dataShip.name}
                name="name"
                key="name"
                required="required"
                onChange={handleChange}
              />
            </li>
            <li>
              <h5>Số điện thoại: </h5>
              <input
                style={{ border: "1px solid #ccc" }}
                type="text"
                key={"phone"}
                required="required"
                defaultValue={dataShip.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
              />
            </li>
            <li>
              <h5>Địa chỉ: </h5>
              <textarea
                style={{ border: "1px solid #ccc" }}
                rows="4"
                required="required"
                cols="50"
                type="text"
                defaultValue={dataShip.address}
                name="address"
                key="address"
                onChange={handleChange}
              />
            </li>
          </ul>
        </div>
        <div className="container">
          {products.length > 0 ? (
            <>
              <div className="cart__info__txt" style={{ marginTop: "8rem" }}>
                <h4 style={{ width: "100%", textAlign: "center" }}>
                  Thông tin thanh toán
                </h4>
              </div>
              <table className="mycart__table mb-5">
                <thead>
                  <tr>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((e, id) => (
                    <tr key={id}>
                      {e.product[0] && (
                        <>
                          <td>{e.product[0].name}</td>
                          <td>
                            <p>{e.quantity}</p>
                          </td>
                          <td className="td__price">
                            {numberWithCommas(Number(e.product[0].price))}
                          </td>
                          <td>Còn hàng</td>
                        </>
                      )}
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="7">
                      <h4>{`Tổng tiền : ${numberWithCommas(
                        Number(price)
                      )} VND`}</h4>
                      <Button
                        content="Xác nhận thanh toán"
                        classNameBtn="m-2"
                        onClick={() => handlePay()}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <div
              style={{ marginTop: "8rem", width: "100%", textAlign: "center" }}
            >
              <h3>Bạn chưa có sản phẩm nào trong giỏ hàng</h3>
              <Link to="/trang-suc/nhan/">
                <Button content="Mua ngay" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
}
