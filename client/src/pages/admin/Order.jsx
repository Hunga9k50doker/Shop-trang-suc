import React, { useState, useRef, useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import Helmet from "../../components/common/Helmet";
import Table from "../../components/common/Table";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { FormDetail } from "../../components/common/Forms";
import { numberWithCommas } from "../../utils/utils";
import Skeleton from "react-loading-skeleton";
import { OrderContext } from "../../provider/context/OrderContext";
import { AdminContext } from "../../provider/context/AdminContext";
const dataTable_01 = [
  {
    province: "TP. Hồ Chí Minh",
    users: 725,
    percent: 15.6,
    exits: 233,
  },
  {
    province: "Nha trang",
    users: 456,
    percent: 18.6,
    exits: 255,
  },
  {
    province: "Quảng trị",
    users: 400,
    percent: 10.6,
    exits: 50,
  },
  {
    province: "Hà Nội",
    users: 387,
    percent: 20.6,
    exits: 42,
  },
];

ChartJS.register(ArcElement, Title, Tooltip, Legend);
const Selection = ({ product }) => {
  const selectedRef = useRef(null);
  const { changeStatusOrder } = useContext(OrderContext);
  const handleChange = () => {
    if (selectedRef.current) {
      if (Number(selectedRef.current.value) === 1) {
        selectedRef.current.style.color = "red";
        changeStatusOrder("Đang giao", product._id);
      } else if (Number(selectedRef.current.value) === 2) {
        selectedRef.current.style.color = "green";
        changeStatusOrder("Đã giao", product._id);
      } else {
        selectedRef.current.style.color = "black";
        changeStatusOrder("Xác nhận", product._id);
      }
    }
  };
  return (
    <select
      style={{ fontWeight: "bold" }}
      onChange={handleChange}
      ref={selectedRef}
      value={
        product.status === "Đang giao"
          ? "1"
          : product.status === "Đã giao"
          ? "2"
          : "0"
      }
    >
      <option value="0" style={{ color: "black" }}>
        Xác nhận
      </option>
      <option style={{ color: "red" }} value="1">
        Đang giao
      </option>
      <option style={{ color: "green" }} value="2">
        Đã giao
      </option>
    </select>
  );
};
const OrderAdmin = () => {
  const [viewDetail, setViewDetail] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const {
    orderState: { order, loadingOrder },
    fetchOneOrder,
  } = useContext(OrderContext);
  const {
    adminState: { orders },
  } = useContext(AdminContext);

  const dataOrder = {
    labels: ["Trên 20k", "Trên 15k", "Trên 10k", "Trên 5k"],
    datasets: [
      {
        label: "# of votes",
        data: [23, 15, 10, 5],
        backgroundColor: ["#098035", "#2bff88", "#2bd2ff", "#fa8bff"],
        borderColor: ["rgba(255, 255, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "dought",
    data: dataOrder,
    maintainAspectRatio: false,

    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  const showOrderById = (id) => {
    setViewDetail(id);
    fetchOneOrder(id);
  };

  return (
    <Helmet title="Quản lý đơn hàng">
      <div className="order__admin">
        <div className="container mt-4">
          <div className="row">
            <div className="col col-xl-6 col-sm-12 col-md-12 ps-0">
              <Table
                title="Đơn đặt hàng từ các tỉnh"
                subtitle="Đơn đặt hàng dự trên vị trí quốc gia bạn"
              >
                <table>
                  <thead>
                    <tr>
                      <td>Tỉnh</td>
                      <td>Số lượng khách hàng</td>
                      <td>Phần trăm</td>
                      <td>Số lượng thoát</td>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTable_01.map((e, id) => (
                      <tr key={id}>
                        <td>{e.province}</td>
                        <td>{e.users}</td>
                        <td>{e.percent}</td>
                        <td>{e.exits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Table>
            </div>
            <div className="col col-xl-6 col-sm-12 col-md-12">
              <Table
                title="Đơn đặt hàng đang hoạt động"
                subtitle="Thông tin đơn hàng thời gian thực và dữ liệu xếp hạng"
              >
                <div className="table__body">
                  <div className="row">
                    <div className="col-6">
                      <ul className="table__body__data">
                        <li>
                          <span></span>
                          23,213K
                        </li>
                        <li>
                          <span></span>
                          15,13K
                        </li>
                        <li>
                          <span></span>
                          10,23K
                        </li>
                        <li>
                          <span></span>
                          5,3K
                        </li>
                      </ul>
                    </div>
                    <div className="col col-6 ">
                      <Doughnut
                        data={dataOrder}
                        height={400}
                        width={600}
                        options={config}
                      />
                    </div>
                  </div>
                </div>
              </Table>
            </div>
          </div>
          <div className="row mt-4">
            <Table title="Danh sách đặt hàng">
              <input
                type="text"
                placeholder="Tìm kiếm sdt,Id đặt hàng"
                onChange={(e) => setSearchItem(e.target.value)}
              />
              <table>
                <thead>
                  <tr>
                    <td>STT</td>
                    <td>Tên </td>
                    <td>Số điện thoại</td>
                    <td>ID đặt hàng</td>
                    <td>Tổng tiền</td>
                    <td>Thời gian</td>
                    <td>Chi tiết</td>
                    <td>Trạng thái</td>
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
                        val._id
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
                        <td>{e._id}</td>
                        <td>{numberWithCommas(e.total)} </td>
                        <td>{moment(e.createdAt).format("LLL")}</td>
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
                                          Tổng tiền: {numberWithCommas(e.total)}
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
                        <td>
                          <Selection product={e} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Table>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default OrderAdmin;
