import React, { useState } from "react";
import Table from "../../components/common/Table";
import Helmet from "../../components/common/Helmet";

const dataTable_02 = [
  {
    email: "12e1@gmail.comew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "dsas@gmail.com",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "12e1@gmail.comew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "12e1@gmail.comew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "12e1@gmail.comew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "12e1@gmail.comew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "12e1@gmail.comew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "2d2s@gmail.com",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "12sd@gmail.comse1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "fwwq@gmail.com",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    email: "12e1@gmail.com34231",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
];
const CustomerAdmin = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <Helmet title="Quản lý người dùng">
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <Table title="Danh sách người dùng">
              <input
                type="text"
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder="Tìm kiếm..."
              />
              <table className="p-4">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Tên khách hàng</td>
                    <td>Email</td>
                    <td>Số điện thoại</td>
                    <td>Thời gian đăng ký</td>
                    <td>Xóa</td>
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
                        val.name_customer
                          .toLowerCase()
                          .includes(searchItem.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((e, id) => (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{e.name_customer}</td>
                        <td>{e.email}</td>
                        <td>{e.sdt}</td>
                        <td>{e.date}</td>
                        <td>
                          <i className="bx bx-trash"></i>
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

export default CustomerAdmin;
