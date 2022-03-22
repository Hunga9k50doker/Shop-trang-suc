import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
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

const OrderAdmin = () => {
  const [viewDetail, setViewDetail] = useState(false);
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

  // useEffect(() => {
  //   setViewDetail();
  // }, [viewDetail]);
  return (
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
              name="search_order"
              id="search_order"
              placeholder="Tìm kiếm sdt..."
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
                {dataTable_02.map((e, id) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{e.usename}</td>
                    <td>{e.sdt}</td>
                    <td>{e.id_order}</td>
                    <td>{e.price}</td>
                    <td>{e.date}</td>
                    <td
                      className="view__details"
                      onClick={(current) =>
                        current
                          ? setViewDetail(!viewDetail)
                          : console.log(current)
                      }
                    >
                      Xem chi tiết
                      {viewDetail ? (
                        <Modal>
                          <FormDetail title={e.id_order}>
                            <p>adsad</p>
                          </FormDetail>
                        </Modal>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      <Button content="Xác nhận" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OrderAdmin;
