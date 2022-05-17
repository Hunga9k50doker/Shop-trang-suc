import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";

import Button from "./Button";
import { FavouriteContext } from "../../provider/context/FavouriteContext";
import { CartContext } from "../../provider/context/CartContext";
import { numberWithCommas } from "../../utils/utils";

export const WishlistItem = ({ e, isChecked, handleChange }) => {
  const notify = (mes) => toast(mes);
  const { deleteOneProductFromFavourite } = useContext(FavouriteContext);
  const { addProductToCart } = useContext(CartContext);
  const handleDeleteFromFavourite = () => {
    deleteOneProductFromFavourite({ id: e._id });
    notify("Xóa thành công!");
  };
  const handleAddToCart = () => {
    addProductToCart({ id: e._id, quantity: 1 }, e);
  };
  return (
    <tr>
      <td className="td__checkbox">
        <input
          className="wishlist__checked__item"
          type="checkbox"
          name={e.name}
          checked={e?.isChecked || false}
          onChange={handleChange}
        />
      </td>
      <td className="td__trash">
        <i className="bx bx-trash" onClick={handleDeleteFromFavourite}></i>
      </td>
      <td>
        <img src={e.imgsUrl[0]} alt="" />
      </td>
      <td>{e.name}</td>
      <td className="td__price">{numberWithCommas(e.price)} </td>
      <td>Còn hàng</td>
      <td>
        <Button content="Thêm vào giỏ hàng" onClick={handleAddToCart} />
      </td>
    </tr>
  );
};
