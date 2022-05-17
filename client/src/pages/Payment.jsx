import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CartContext } from "../provider/context/CartContext";
import { AuthContext } from "../provider/context/AuthContext";
import { OrderContext } from "../provider/context/OrderContext";
import { numberWithCommas } from "../utils/utils";
import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import Button from "../components/common/Button";
import { banner_sub_02 } from "../assets/img";

export default function Payment() {
  const NewStyle = styled.div`
    ul {
      margin-left: 16px;
      width: 100%;
    }
    li {
      margin-top: 1rem;
    }
    input {
      border: 1px solid #ccc;
    }
  `;
  const [price, setPrice] = useState(0);
  const {
    cartState: { loading, products },
  } = useContext(CartContext);

  const { createOrder } = useContext(OrderContext);

  const {
    authState: { user },
  } = useContext(AuthContext);
  const [dataShipName, setDataShipName] = useState(user.name);
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
    let invoiceDetails = products.map((item) => {
      return { product: item.product[0]._id, quantity: item.quantity };
    });
    createOrder({ ...dataShip, invoiceDetails, total: price });
    toast.success("Thanh toán thành công!");
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
          <NewStyle>
            <ul>
              <li>
                <h5>Tên người nhận: </h5>
                <input
                  type="text"
                  defaultValue={dataShipName}
                  onChange={(e) => setDataShipName(e.target.value)}
                  name="name"
                  key="name"
                  // onChange={handleChange}
                />
              </li>
              <li>
                <h5>Số điện thoại: </h5>
                <input
                  type="text"
                  key={"phone"}
                  value={dataShip.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </li>
              <li>
                <h5>Địa chỉ: </h5>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  value={dataShip.address}
                  name="address"
                  key="address"
                  onChange={handleChange}
                />
              </li>
            </ul>
          </NewStyle>
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
                      {console.log(e.product[0])}
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
