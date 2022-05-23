import React from "react";
import { useContext } from "react";

import Button from "./Button";
import { FavouriteContext } from "../../provider/context/FavouriteContext";
import { CartContext } from "../../provider/context/CartContext";
import { numberWithCommas } from "../../utils/utils";

export const WishlistItem = ({ e, isChecked, handleChange }) => {
  const { deleteOneProductFromFavourite } = useContext(FavouriteContext);
  const { addProductToCart } = useContext(CartContext);
  const handleDeleteFromFavourite = () => {
    deleteOneProductFromFavourite({ id: e._id });
  };
  const handleAddToCart = () => {
    addProductToCart({ id: e._id, quantity: 1 }, e, isChecked);
  };
  return (
    <tr>
      <td className="td__trash">
        <i className="bx bx-trash" onClick={handleDeleteFromFavourite}></i>
      </td>
      <td>
        <img src={`../../images/${e.imgsUrl[0]}`} alt="" />
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
