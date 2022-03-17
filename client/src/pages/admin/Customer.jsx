import React from "react";
import Table from "../../components/common/Table";

const dataTable_02 = [
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "dsas",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "2d2s",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12sdse1ew",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "fwwq",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e134231",
    name_customer: "Tran Ngoc Huy",
    sdt: "0342411175",
    date: "23/2/2022 13:03 pm",
  },
];
const CustomerAdmin = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <Table title="Danh sách người dùng">
              <input
                type="text"
                name="search_order"
                id="search_order"
                placeholder="Tìm kiếm..."
              />
              <table className="p-4">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Tên tài khoản</td>
                    <td>Tên khách hàng</td>
                    <td>Số điện thoại</td>
                    <td>Thời gian đăng ký</td>
                    <td>Chỉnh sửa</td>
                    <td>Xóa</td>
                  </tr>
                </thead>
                <tbody>
                  {dataTable_02.map((e, id) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{e.usename}</td>
                      <td>{e.name_customer}</td>
                      <td>{e.sdt}</td>
                      <td>{e.date}</td>

                      <td>
                        <i className="bx bx-edit-alt"></i>
                      </td>
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
    </div>
  );
};

export default CustomerAdmin;
