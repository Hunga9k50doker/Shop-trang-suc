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
export default function Wishlist() {
  const checkBoxItems = document.querySelectorAll(".wishlist__checked__item");
  const [wishlist, setWishlist] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [checkItem, setCheckItem] = useState(false);

  const { slug } = useParams();

  const refCheckAll = useRef(null);
  useEffect(() => {
    setWishlist(whitelistData);
    setCheckAll();
  }, []);

  // refCheckAll.current.addEventListener("change", () => {
  //   console.log(123);
  //   setCheckAll(!checkAll);
  // });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checkAll) {
      let tempPro = wishlist.map((element) => {
        return { ...element, isChecked: checked };
      });
      setWishlist(tempPro);
    } else {
      let tempPro = wishlist.map((element) =>
        element.name === name ? { ...name, isChecked: checked } : element
      );
      setWishlist(tempPro);
    }
  };

  return (
    <Helmet title='Danh sách yêu thích'>

    <div className="wishlist">
      <Banner img={banner_sub_02} title="Danh sách yêu thích" />
      <div className="container ">
        <table className="wishlist__table mb-4" style={{ marginTop: "8rem" }}>
          <thead>
            <tr>
              <th>
                <input
                  onChange={handleChange}
                  ref={refCheckAll}
                  checked={
                    !wishlist.some((wishitem) => wishitem?.isChecked !== true)
                  }
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
            {wishlist.length > 0 &&
              wishlist.map((e, id) => (
                <tr key={id}>
                  <td className="wishlist__checkbox">
                    <input
                      className="wishlist__checked__item"
                      type="checkbox"
                      name={e.title}
                      onChange={handleChange}
                      checked={e?.isChecked || false}
                    />
                  </td>
                  <td className="wishlist__trash">
                    <i className="bx bx-trash"></i>
                  </td>
                  <td>
                    <img src={e.img} alt="" />
                  </td>
                  <td>{e.title}</td>
                  <td className="wishlist__price">{e.price} vnđ</td>
                  <td>{e.status}</td>
                  <td>
                    <Button content="Thêm vào giỏ hàng" />
                  </td>
                </tr>
              ))}
            <tr className="last__row">
              <td></td>
              <td>
                <Button
                  classNameBtn="wishlist__delete__selected"
                  content="Xóa các sản phẩm đã chọn"
                />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
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
