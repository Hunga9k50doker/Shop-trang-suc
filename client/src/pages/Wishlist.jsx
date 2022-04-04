import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../components/common/Banner";
import Button from "../components/common/Button";
import Helmet from "../components/common/Helmet";
import { banner_sub_02, product_img_01 } from "../assets/img";

const whitelistData = [
  {
    img: product_img_01,
    title: "Nhẫn kim tiền vàng 18k",
    price: 12000000,
    status: "còn hàng",
  },
  {
    img: product_img_01,
    title: "Nhẫn kim tiền vàng 18k",
    price: 12000000,
    status: "còn hàng",
  },
  {
    img: product_img_01,
    title: "Nhẫn kim tiền vàng 18k",
    price: 12000000,
    status: "còn hàng",
  },
  {
    img: product_img_01,
    title: "Nhẫn kim tiền vàng 18k",
    price: 12000000,
    status: "còn hàng",
  },
];
export default function Wishlist({ handleAddWishlist }) {
  const [wishlist, setWishlist] = useState(whitelistData);
  const [product, setProduct] = useState([]);
  // handleEvents
  const handleEvents = {
    // handleAdd: () => {},
    // handleRemove: (id) => {
    //   const arr = wishlist.filter((item) => id !== item.id);
    //   setWishlist(arr);
    //   handleEvents.handlePrice();
    // },
    // handlePrice: () => {
    //   let ans = 0;
    //   wishlist.map((item) => (ans += item.amount + item.price));
    //   setPrice(ans);
    // },
  };
  useEffect(() => setWishlist(wishlist), [wishlist]);

  const handleAdd = (item) => {
    setProduct([...product, item]);
    console.log(product);
  };

  return (
    <Helmet title="Danh sách yêu thích">
      <div className="wishlist">
        <Banner img={banner_sub_02} title="Danh sách yêu thích" />
        <div className="container ">
          <table className="wishlist__table mb-4" style={{ marginTop: "8rem" }}>
            <thead>
              <tr>
                <th>
                  <input
                    // ref={refCheckAll}
                    className="wishlist__checked__all"
                    type="checkbox"
                  />
                </th>
                <th> </th>
                <th></th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Trạng thái sản phẩm</th>
                <th>Thêm vào giỏ hàng</th>
              </tr>
            </thead>
            <tbody>
              {whitelistData.length > 0 &&
                whitelistData.map((e, id) => (
                  <tr key={id}>
                    <td className="td__checkbox">
                      <input
                        className="wishlist__checked__item"
                        type="checkbox"
                        name={e.title}
                        // onChange={handleChange}
                      />
                    </td>
                    <td className="td__trash">
                      <i className="bx bx-trash"></i>
                    </td>
                    <td>
                      <img src={e.img} alt="" />
                    </td>
                    <td>{e.title}</td>
                    <td className="td__price">{e.price} vnđ</td>
                    <td>{e.status}</td>
                    <td>
                      <Button content="Thêm vào giỏ hàng" />
                    </td>
                  </tr>
                ))}
              <tr
                className="last__row
                "
              >
                <td colspan={7}>
                  <Button
                    classNameBtn="wishlist__delete__selected"
                    content="Xóa các sản phẩm đã chọn"
                  />

                  <Button
                    classNameBtn="m-2"
                    content="Thêm sản phẩm đã chọn vào giỏ hàng"
                  />
                  <Button content="Thêm tất cả sản phẩm vào giỏ hàng" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Helmet>
  );
}
