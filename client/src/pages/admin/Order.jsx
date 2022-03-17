import React, { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  DoughnutController,
} from "chart.js";
import Table from "../../components/common/Table";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  DoughnutController,
  Title,
  Tooltip,
  Legend
);
const OrderAdmin = () => {
  const revenueByMonths = {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    revenuedata: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: "#F7CE68",
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    // type: "doughnut",
    labels: revenueByMonths.labels,

    datasets: [
      {
        label: "Doanh thu",
        data: revenueByMonths.revenuedata,
      },
    ],
  };

  const dataOrder = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "bar",
    data: dataOrder,
  };

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
                        <span ></span>
                        23,213K</li>
                      <li>
                        <span ></span>
                        15,13K</li>
                      <li>
                        <span ></span>
                        10,23K</li>
                      <li>
                        <span ></span>
                        5,3K</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <Bar
                      options={chartOptions}
                      data={chartData}
                      height={`250px`}
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
              placeholder="Tìm kiếm đơn đặt hàng,sdt,tên khách hàng,..."
            />
            <table>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Tên tài khoản</td>
                  <td>Số điện thoại</td>
                  <td>ID đặt hàng</td>
                  <td>Tên sản phẩm</td>
                  <td>Giá</td>
                  <td>Thời gian</td>
                </tr>
              </thead>
              <tbody>
                {dataTable_02.map((e, id) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{e.usename}</td>
                    <td>{e.sdt}</td>
                    <td>{e.id_order}</td>
                    <td>{e.product_name}</td>
                    <td>{e.price}</td>
                    <td>{e.date}</td>
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
