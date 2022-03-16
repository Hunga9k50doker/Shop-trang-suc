import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { to_slug } from "../utils/utils";
import { Banner } from "../components/common/Banner";
import Button from "../components/common/Button";
import { banner_sub_02, product_img_01 } from "../assets/img";
import arrPro from "../assets/fake-data/Product";
export default function MyCart() {
  const [price, setPrice] = useState("122000");
  // const [price, setPrice] = useState();
  console.log(price);
  useEffect(() => setPrice(), []);
  const { slug } = useParams();
  return (
    <div className="wishlist">
      <Banner img={banner_sub_02} title="Giỏ Hàng" />
      <div className="container">
        <table className="wishlist__table">
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
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="wishlist__checkbox">
                <input type="checkbox" />
              </td>
              <td className="wishlist__trash">
                <i className="bx bx-trash"></i>
              </td>
              <td>
                <img src={product_img_01} alt="" />
              </td>
              <td>Nhẫn kim tiền vàng 18k</td>
              <tr>
                <input
                  defaultValue={1}
                  type="number"
                  min={0}
                  max={1000}
                  onChange={(e) => setPrice(e.target.value * price)}
                />
              </tr>
              <td className="wishlist__price">{price}</td>
              <td>Còn trong kho</td>
              <td>
                <Button content="Thêm vào giỏ hàng" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
