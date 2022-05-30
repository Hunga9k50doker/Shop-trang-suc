import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import { CartContext } from "../provider/context/CartContext";
import { AuthContext } from "../provider/context/AuthContext";
import { OrderContext } from "../provider/context/OrderContext";
import { numberWithCommas } from "../utils/utils";
import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import Button from "../components/common/Button";
import { banner_sub_02 } from "../assets/img";
import Modal from "../components/common/Modal";
import { FormDetail } from "../components/common/Forms";

export default function OrderDetail() {
  const [price, setPrice] = useState(0);
  const [viewDetail, setViewDetail] = useState(null);

  const {
    cartState: { products },
  } = useContext(CartContext);
  const {
    orderState: { orders, order, loadingOrder, loading },
    fetchOneOrder,
  } = useContext(OrderContext);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const handlePrice = () => {
    let ans = 0;
    products.map((item) => (ans += item.quantity * item.product[0].price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  }, []);
  const showOrderById = (id) => {
    setViewDetail(id);
    fetchOneOrder(id);
  };
  if (loading) {
    return <Skeleton height="200px" width={"100%"} />;
  }

  return (
    <Helmet title="Thông tin đơn hàng">
      <div className="mycart">
        <Banner img={banner_sub_02} title="Thông tin đơn hàng" />
        <div className="container" style={{ marginTop: "8rem" }}>
          {orders.length > 0 ? (
            <>
              <table className="mycart__table mb-5">
                <thead>
                  <tr>
                    <th>Mã đơn hàng</th>
                    <th>Ngày đặt</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                    <th>Chi tiết</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.reverse().map(
                    (e, id) =>
                      e.user === user._id && (
                        <tr key={id}>
                          <td>{e._id}</td>
                          <td>{moment(e.createdAt).format("LLLL")}</td>
                          <td>{numberWithCommas(e.total)}</td>
                          <td>{e.status}</td>
                          <td
                            className="view__details"
                            onClick={() => showOrderById(e._id)}
                          >
                            Xem chi tiết
                          </td>
                          {viewDetail === e._id ? (
                            <Modal
                              setViewDetail={setViewDetail}
                              style={{
                                backgroundImage:
                                  "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)",
                              }}
                            >
                              {loadingOrder ? (
                                <Skeleton height={"300px"} />
                              ) : (
                                <FormDetail title={e._id}>
                                  <div className="form__detail__header">
                                    <p>Tên khách hàng: {e.name}</p>
                                    <p> Số điện thoại: {e.phoneNumber}</p>
                                    <p> Địa chỉ: {e.address}</p>
                                    <p>
                                      Thời gian đặt hàng:{" "}
                                      {moment(e.updatedAt).format("LLL")}
                                    </p>
                                    <p>
                                      Tổng tiền:{" "}
                                      <strong>
                                        {numberWithCommas(e.total)} vnđ
                                      </strong>
                                    </p>
                                    <p>
                                      Trạng thái:
                                      {e.status}
                                    </p>
                                  </div>
                                  <div className="form__detail__body">
                                    <h5 className="form__detail__body__title mt-5">
                                      Thông tin chi tiết
                                    </h5>
                                    <table>
                                      <thead>
                                        <tr>
                                          <td></td>
                                          <td>Tên sản phẩm</td>
                                          <td>Số lượng</td>
                                          <td>Giá tiền</td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {order.map((o, i) => (
                                          <tr key={i}>
                                            <td></td>
                                            <td>
                                              {o.invoiceDetails.product[0].name}
                                            </td>
                                            <td>{o.invoiceDetails.quantity}</td>
                                            <td>
                                              {numberWithCommas(
                                                o.invoiceDetails.quantity *
                                                  o.invoiceDetails.product[0]
                                                    .price
                                              )}
                                            </td>
                                          </tr>
                                        ))}
                                        <tr>
                                          <td colSpan="4">
                                            Tổng tiền:{" "}
                                            {numberWithCommas(e.total)}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </FormDetail>
                              )}
                            </Modal>
                          ) : (
                            ""
                          )}
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <div
              style={{
                marginTop: "8rem",
                width: "100%",
                textAlign: "center",
              }}
            >
              <h3>Bạn chưa có đơn hàng nào</h3>
              <Link to="/trang-suc/nhan/">
                <Button content="Tạo ngay" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
}
