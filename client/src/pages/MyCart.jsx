import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { to_slug, get_random } from "../utils/utils";
import Helmet from "../components/common/Helmet";
import { Banner } from "../components/common/Banner";
import Button from "../components/common/Button";
import { banner_sub_02, product_img_01 } from "../assets/img";
import arrPro from "../assets/fake-data/Product";
export default function MyCart({ products, setProducts, handleChange }) {
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  const inputRef = useRef(null);
  return (
    <Helmet title="Giỏ hàng">
      <div className="mycart">
        <Banner img={banner_sub_02} title="Giỏ Hàng" />
        <div className="container">
          <table className="mycart__table mb-5" style={{ marginTop: "8rem" }}>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th> </th>
                <th></th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {arrPro.map((e, id) => (
                <tr key={id}>
                  <td className="td__checkbox">
                    <input type="checkbox" />
                  </td>
                  <td className="td__trash">
                    <i className="bx bx-trash"></i>
                  </td>
                  <td>
                    <img src={e.img} alt="" />
                  </td>
                  <td>{e.title}</td>
                  <td>
                    <input
                      ref={inputRef}
                      defaultValue={1}
                      type="number"
                      min={1}
                      max={1000}
                    />
                  </td>
                  <td className="td__price"></td>
                  <td>Còn hàng</td>
                </tr>
              ))}
              <tr>
                <td colspan="7">
                  <p>Tổng tiền : 123123123 vnd</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Helmet>
  );
}
