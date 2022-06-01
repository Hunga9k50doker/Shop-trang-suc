import React, { useEffect, useState, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import Helmet from "../../components/common/Helmet";
import Table from "../../components/common/Table";
import { FormDetail } from "../../components/common/Forms";
import { numberWithCommas } from "../../utils/utils";
import { OrderContext } from "../../provider/context/OrderContext";
import { AdminContext } from "../../provider/context/AdminContext";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
const StatusAdmin = () => {
  const [viewDetail, setViewDetail] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const status = document.querySelectorAll(".status");
    for (let i of status) {
      i.textContent === "Đang giao"
        ? (i.style.color = "red")
        : (i.style.color = "#16D96F");
    }
  });
  const {
    orderState: { order, loadingOrder },
    fetchOneOrder,
  } = useContext(OrderContext);
  const {
    adminState: { orders },
  } = useContext(AdminContext);
  const showOrderById = (id) => {
    setViewDetail(id);
    fetchOneOrder(id);
  };

  return (
    <Helmet title="Quản lý trạng thái">
      <div className="status__admin">
        <div className="container mt-4">
          <div className="row ">
            <div className="col">
              <Table title="Danh sách trạng thái đặt hàng">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  onChange={(e) => setSearchItem(e.target.value)}
                />
                <table
                  border="1"
                  cellSpacing="0"
                  cellPadding="5"
                  className="p-4"
                >
                  <thead>
                    <tr>
                      <td>STT</td>
                      <td>Tên khách hàng</td>
                      <td>Số điện thoại</td>
                      <td>Thời gian đặt hàng</td>
                      <td>Trạng thái</td>
                      <td>Tổng tiền</td>
                      <td>Chi tiết</td>
                    </tr>
                  </thead>
                  <tbody>
                    {orders
                      .filter((val) => {
                        if (searchItem === "") {
                          return val;
                        } else if (
                          val.phoneNumber
                            .toLowerCase()
                            .includes(searchItem.toLowerCase()) ||
                          val.name
                            .toLowerCase()
                            .includes(searchItem.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((e, id) => (
                        <tr key={id}>
                          <td>{id + 1}</td>
                          <td>{e.name}</td>
                          <td>{e.phoneNumber}</td>
                          <td>{moment(e.updatedAt).format("LLL")}</td>
                          <td className="status">{e.status}</td>
                          <td> {numberWithCommas(e.total)} </td>
                          <td className="view__details">
                            <Button
                              content="Chi tiết"
                              onClick={() => showOrderById(e._id)}
                            ></Button>
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
                                    <br />
                                    <p> Số điện thoại: {e.phoneNumber}</p>
                                    <br />
                                    <p> Địa chỉ: {e.address}</p>
                                    <br />
                                    <p>
                                      Thời gian đặt hàng
                                      {moment(e.updatedAt).format("LLL")}
                                    </p>
                                    <br />
                                    <p>
                                      Tổng tiền:
                                      <strong>
                                        {numberWithCommas(e.total)} vnđ
                                      </strong>
                                    </p>
                                    <br />
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
                      ))}
                  </tbody>
                </table>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default StatusAdmin;
