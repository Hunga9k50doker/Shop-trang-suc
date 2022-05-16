import React, { useState, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { FavouriteContext } from "../provider/context/FavouriteContext";
import { AuthContext } from "../provider/context/AuthContext";
import { Banner } from "../components/common/Banner";
import Button from "../components/common/Button";
import Helmet from "../components/common/Helmet";
import { WishlistItem } from "../components/common/WishListItem";
import { banner_sub_02 } from "../assets/img";

export default function Wishlist() {
  const {
    favouriteState: { loading, products },
  } = useContext(FavouriteContext);
  const {
    authState: { user, isAuthenticated, userAuth },
  } = useContext(AuthContext);
  // handleEvents
  // const [users, setUsers] = useState([]);

  // const handleChange = (e) => {
  //   const { name, checked } = e.target;
  //   if (name === "checkAll") {
  //     let tempUser = users.map((user) => {
  //       return { ...user, isChecked: checked };
  //     });
  //     setUsers(tempUser);
  //   } else {
  //     let tempUser = users.map((user) =>
  //       user.name === name ? { ...user, isChecked: checked } : user
  //     );
  //     setUsers(tempUser);
  //   }
  // };

  if (loading) {
    return <Skeleton height="200px" width={"100%"} />;
  }

  return (
    <Helmet title="Danh sách yêu thích">
      <div className="wishlist">
        <Banner img={banner_sub_02} title="Danh sách yêu thích" />
        <div className="container ">
          {user ? (
            <table
              className="wishlist__table mb-4"
              style={{ marginTop: "8rem" }}
            >
              <thead>
                <tr>
                  <th>
                    <input
                      // ref={refCheckAll}
                      className="wishlist__checked__all"
                      type="checkbox"
                      name="checkAll"
                      // checked={!users.some((user) => user?.isChecked !== true)}
                      // onChange={handleChange}
                    />
                  </th>
                  <th> </th>
                  <th></th>
                  <th>Tên sản phẩm</th>
                  <th>Giá (vnđ)</th>
                  <th>Trạng thái sản phẩm</th>
                  <th>Thêm vào giỏ hàng</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  products.map((e, id) => (
                    <WishlistItem
                      key={id}
                      e={e}
                      // isChecked={e.isChecked}
                      // handleChange={handleChange}
                    />
                  ))}
                <tr
                  className="last__row
                "
                >
                  <td colSpan={7}>
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
          ) : (
            <p> Bạn cần đăng nhập để xem các sản phẩm</p>
          )}
        </div>
      </div>
    </Helmet>
  );
}
