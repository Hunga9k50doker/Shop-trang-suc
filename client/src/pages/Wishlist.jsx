import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { FavouriteContext } from "../provider/context/FavouriteContext";
import { Banner } from "../components/common/Banner";
import Button from "../components/common/Button";
import Helmet from "../components/common/Helmet";
import { WishlistItem } from "../components/common/WishListItem";
import { banner_sub_02 } from "../assets/img";

export default function Wishlist() {
  const {
    favouriteState: { loading, products },
  } = useContext(FavouriteContext);

  if (loading) {
    return <Skeleton height="200px" width={"100%"} />;
  }

  return (
    <Helmet title="Danh sách yêu thích">
      <div className="wishlist">
        <Banner img={banner_sub_02} title="Danh sách yêu thích" />
        <div className="container ">
          {products.length > 0 ? (
            <table
              className="wishlist__table mb-4"
              style={{ marginTop: "8rem" }}
            >
              <thead>
                <tr>
                  <th> </th>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Giá (vnđ)</th>
                  <th>Trạng thái sản phẩm</th>
                  <th>Thêm vào giỏ hàng</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 &&
                  products.map((e, id) => <WishlistItem key={id} e={e} />)}
                <tr
                  className="last__row
                "
                >
                  <td colSpan={5}>
                  
                    <Button content="Thêm tất cả sản phẩm vào giỏ hàng" />
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div style={{ marginTop: "8rem", textAlign: "center" }}>
              <h3>Bạn chưa có sản phẩm nào trong danh sách yêu thích</h3>
              <Link to="/trang-suc/nhan/">
                <Button content="Thêm ngay" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
}
