import React, { useState, useRef, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import Helmet from "../../components/common/Helmet";
import Table from "../../components/common/Table";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { FormDetail } from "../../components/common/Forms";
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

const dataTable_02 = [
  {
    usename: "12e1ew",
    sdt: "0423441532",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "dsas",
    sdt: "0442441532",
    id_order: "2112",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    sdt: "0423441532",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    sdt: "0423441532",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    sdt: "0423441532",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    sdt: "0423441532",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    sdt: "0423441532",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "2d2s",
    sdt: "0423441532",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12sdse1ew",
    sdt: "0423425532",
    id_order: "1312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "fwwq",
    sdt: "0973441532",
    id_order: "23123",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e134231",
    sdt: "0423441537",
    id_order: "2317",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
];
ChartJS.register(ArcElement, Title, Tooltip, Legend);
const Selection = () => {
  const selectedRef = useRef(null);
  const handleChange = () => {
    if (selectedRef.current) {
      if (selectedRef.current.value == 1) {
        selectedRef.current.style.color = "red";
      } else if (selectedRef.current.value == 2) {
        selectedRef.current.style.color = "green";
      }
    }
  };
  return (
    <select
      style={{ fontWeight: "bold" }}
      onChange={handleChange}
      ref={selectedRef}
    >
      <option value="0">Xác nhận</option>
      <option value="1">Đang giao</option>
      <option value="2">Đã giao</option>
    </select>
  );
};
const OrderAdmin = () => {
  const [viewDetail, setViewDetail] = useState(null);
  const [searchItem, setSearchItem] = useState("");

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
                placeholder="Tìm kiếm sdt..."
                onChange={(e) => setSearchItem(e.target.value)}
              />
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Tên tài khoản</td>
                    <td>Số điện thoại</td>
                    <td>ID đặt hàng</td>
                    <td>Tổng tiền</td>
                    <td>Thời gian</td>
                    <td>Chi tiết</td>
                    <td>Trạng thái</td>
                  </tr>
                </thead>
                <tbody>
                  {dataTable_02
                    .filter((val) => {
                      if (searchItem === "") {
                        return val;
                      } else if (
                        val.sdt
                          .toLowerCase()
                          .includes(searchItem.toLowerCase()) ||
                        val.id_order
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((e, id) => (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{e.usename}</td>
                        <td>{e.sdt}</td>
                        <td>{e.id_order}</td>
                        <td>{e.price}</td>
                        <td>{e.date}</td>
                        <td className="view__details">
                          <Button
                            content="Xem chi tiết"
                            onClick={() => setViewDetail(id)}
                          ></Button>
                        </td>
                        {viewDetail === id ? (
                          <Modal
                            setViewDetail={setViewDetail}
                            style={{
                              backgroundImage:
                                " linear-gradient(to top, #cc208e 0%, #6713d2 100%)",
                            }}
                          >
                            <FormDetail title={e.id_order}>
                              <div className="form__detail__header">
                                <p>Tên khách hàng: {e.usename}</p>
                                <p> Số điện thoại: {e.sdt}</p>
                                <p>Thời gian đặt hàng: {e.date}</p>
                                <p>
                                  Tổng tiền: <strong>{e.price} vnđ</strong>
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
                                    <tr>
                                      <td></td>
                                      <td>Nhẫn vàng 18k</td>
                                      <td>3</td>
                                      <td>23000</td>
                                    </tr>
                                    <tr>
                                      <td colspan="4">Tổng tiền: {e.price}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </FormDetail>
                          </Modal>
                        ) : (
                          ""
                        )}
                        <td>
                          <Selection />
                          {/* <Button content="Xác nhận" /> */}
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
