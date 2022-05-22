import React, { useState, useContext } from "react";
import moment from "moment";
import { AdminContext } from "../../provider/context/AdminContext";
import Table from "../../components/common/Table";
import Helmet from "../../components/common/Helmet";

const CustomerAdmin = () => {
  const [searchItem, setSearchItem] = useState("");
  const {
    adminState: { users },
    deleteUser,
  } = useContext(AdminContext);
  const deleteUserId = (id) => {
    deleteUser(id);
  };
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
                    <td>Vai trò</td>
                    <td>Số điện thoại</td>
                    <td>Thời gian đăng ký</td>
                    <td>Xóa</td>
                  </tr>
                </thead>
                <tbody>
                  {users
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
                        <td>{e.name}</td>
                        <td>{e.role}</td>
                        <td>{e.telephone}</td>
                        <td>{moment(e.createdAt).format("LLLL")}</td>
                        <td>
                          <i
                            className="bx bx-trash"
                            onClick={() => {
                              deleteUserId(e._id);
                            }}
                          ></i>
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
