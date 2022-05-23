import React, { useEffect, useState } from "react";
import Helmet from "../../components/common/Helmet";
import Table from "../../components/common/Table";

const dataTable_02 = [
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đã giao",
  },
  {
    usename: "dsas",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đã giao",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đang giao",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đang giao",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đang giao",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đã giao",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đã giao",
  },
  {
    usename: "2d2s",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đang giao",
  },
  {
    usename: "12sdse1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đang giao",
  },
  {
    usename: "fwwq",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đã giao",
  },
  {
    usename: "12e134231",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    product_name: "Bông tai vài Y 18k",
    price: 123000212,
    date: "23/2/2022",
    status: "Đang giao",
  },
];
const StatusAdmin = () => {
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const status = document.querySelectorAll(".status");
    for (let i of status) {
      i.textContent === "Đang giao"
        ? (i.style.color = "red")
        : (i.style.color = "#16D96F");
    }
  });

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
                    {dataTable_02
                      .filter((val) => {
                        if (searchItem === "") {
                          return val;
                        } else if (
                          val.sdt
                            .toLowerCase()
                            .includes(searchItem.toLowerCase()) ||
                          val.status
                            .toLowerCase()
                            .includes(searchItem.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((e, id) => (
                        <tr key={id}>
                          <td>{id + 1}</td>
                          <td>{e.name_customer}</td>
                          <td>{e.sdt}</td>
                          <td>{e.date}</td>
                          <td className="status">{e.status}</td>
                          <td>123231</td>
                          <td className="view__details">Xem chi tiết</td>
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
