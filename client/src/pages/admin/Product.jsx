import React from "react";
import Table from "../../components/common/Table";

const dataTable_02 = [
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "dsas",
    id_order: "2112",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e1ew",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "2d2s",
    id_order: "2312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12sdse1ew",
    id_order: "1312",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "fwwq",
    id_order: "23123",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
  {
    usename: "12e134231",
    id_order: "2317",
    product_name: "Bông tai vài Y 18k",
    price: 12300000,
    date: "23/2/2022 13:03 pm",
  },
];
const ProductAdmin = () => {
  return (
    <div className="product__admin">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <Table title="Danh sách sản phẩm">
              <input
                type="text"
                name="search_order"
                id="search_order"
                placeholder="Tìm kiếm sản phẩm..."
              />
              <table className="p-4">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Tên tài khoản</td>
                    <td>ID đặt hàng</td>
                    <td>Tên sản phẩm</td>
                    <td>Giá</td>
                    <td>Thời gian</td>
                    <td className="col-span-1">Chỉnh sửa</td>
                    <td>Xóa</td>
                  </tr>
                </thead>
                <tbody>
                  {dataTable_02.map((e, id) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{e.usename}</td>
                      <td>{e.id_order}</td>
                      <td>{e.product_name}</td>
                      <td>{e.price}</td>
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

export default ProductAdmin;
