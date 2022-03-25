import React from "react";
import Helmet from "../../components/common/Helmet";
import Table from "../../components/common/Table";
import Button from "../../components/common/Button";
import { product_img_12 } from "../../assets/img";
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
          <div className="col col-xl-12 col-md-12 col-sm-12 ">
            <Table title="Danh sách sản phẩm">
              <input
                type="text"
                name="search_order"
                id="search_order"
                placeholder="Tìm kiếm sản phẩm..."
              />
              <Button content="Thêm sản phẩm" classNameBtn="ms-4 btn__add" />
              <table className="p-4">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td></td>
                    <td>Tên sản phẩm</td>
                    <td>Giá</td>
                    <td>Thời gian cập nhật</td>
                    <td>Chỉnh sửa</td>
                    <td>Xóa</td>
                  </tr>
                </thead>
                <tbody>
                  {dataTable_02.map((e, id) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>
                        <img src={product_img_12} alt="" />
                      </td>
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
