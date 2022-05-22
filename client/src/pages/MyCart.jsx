import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { CartContext } from "../provider/context/CartContext";
import { to_slug, numberWithCommas } from "../utils/utils";
import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import Button from "../components/common/Button";
import CountNumber from "../components/common/CountNumber";
import { banner_sub_02, product_img_01 } from "../assets/img";

export default function MyCart({ cart, setCart }) {
  const [price, setPrice] = useState(0);
  const {
    cartState: { loading, products },
    deleteOneProductFromCart,
    changeQuantity,
  } = useContext(CartContext);

  const handleRemove = (id) => {
    deleteOneProductFromCart(id);
  };

  const handlePrice = () => {
    let ans = 0;
    products.map((item) => (ans += item.quantity * item.product[0].price));
    setPrice(ans);
  };

  const handleChangeQuantity = (id, quantity, product) => {
    changeQuantity({ id, quantity }, product);
  };

  useEffect(() => {
    handlePrice();
  });
  if (loading) {
    return <Skeleton height="200px" width={"100%"} />;
  }

  console.log(products);

  return (
    <Helmet title="Giỏ hàng">
      <div className="mycart">
        <Banner img={banner_sub_02} title="Giỏ Hàng" />
        <div className="container">
          {products.length > 0 ? (
            <>
              <div className="cart__info__txt" style={{ marginTop: "8rem" }}>
                <p style={{ width: "100%", textAlign: "center" }}>
                  Bạn đang có {products.length} sản phẩm trong giỏ hàng
                </p>
              </div>
              <table className="mycart__table mb-5">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th> </th>
                    <th>Hình ảnh</th>
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
                          <td className="td__checkbox">
                            <input type="checkbox" />
                          </td>
                          <td className="td__trash">
                            <i
                              className="bx bx-trash"
                              onClick={() => handleRemove(e.product[0]._id)}
                            ></i>
                          </td>
                          <td>
                            <img
                              src={`../../images/${e.product[0].imgsUrl[0]}`}
                              alt=""
                            />
                          </td>
                          <td>{e.product[0].name}</td>
                          <td>
                            <div style={{ display: "flex" }}>
                              <Button
                                onClick={() =>
                                  handleChangeQuantity(
                                    e._id,
                                    e.quantity - 1 >= 1 ? e.quantity - 1 : 1,
                                    e.product
                                  )
                                }
                              >
                                -
                              </Button>
                              <input
                                type="number"
                                style={{
                                  padding: "0",
                                  textAlign: "center",
                                  width: "40px",
                                }}
                                value={e.quantity}
                              />
                              <Button
                                onClick={() =>
                                  handleChangeQuantity(
                                    e._id,
                                    e.quantity + 1,
                                    e.product
                                  )
                                }
                              >
                                +
                              </Button>
                            </div>
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
                      <Link to="/thanh-toan">
                        <Button content="Thanh toán" classNameBtn="m-2" />
                      </Link>
                      <Link to="/trang-suc/nhan/">
                        <Button content="Tiếp tục mua hàng" />
                      </Link>
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
