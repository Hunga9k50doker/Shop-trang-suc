import CartModel from "../models/Cart.model.js";
import mongoose from "mongoose";

export const getAllCarts = async (req, res) => {
  try {
    const carts = await CartModel.find();
    return res.status(200).json({ success: true, data: carts });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserCart = async (req, res) => {
  const { _id } = req;
  try {
    const cart = await CartModel.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(_id),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
    ]);
    return res.status(200).json({ success: true, data: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const addProductToCart = async (req, res) => {
  const { _id } = req;
  const { productId, quantity } = req.body;
  try {
    const cart = await CartModel.find({ user: _id, productId });
    if (cart.length !== 0) {
      return res
        .status(200)
        .json({ success: false, message: "Đã có sản phẩm trong giỏ" });
    }
    const newCart = new CartModel({
      user: _id,
      productId,
      quantity,
    });
    await newCart.save();
    return res.status(200).json({ success: true, data: newCart });
  } catch (error) {
    console.log(error.message);
  }
};

//remove product from cart
export const removeProductFromCart = async (req, res) => {
  const { _id } = req;
  const { productId } = req.body;
  console.log(_id, productId);
  try {
    const cart = await CartModel.findOne({
      user: _id,
      productId: mongoose.Types.ObjectId(productId),
    });
    if (!cart) {
      return res
        .status(200)
        .json({ success: false, message: "Product not found" });
    }
    await cart.remove();
    return res.status(200).json({ success: true, data: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeAllProductFromCart = async (req, res) => {
  const { _id } = req;
  try {
    const carts = await CartModel.deleteMany({
      user: mongoose.Types.ObjectId(_id),
    });
    return res.status(200).json({ success: true, data: carts });
  } catch (error) {
    console.log(error.message);
  }
};

//Thay đổi số lượng sản phẩm trong giỏ hàng
export const updateCartDetail = async (req, res) => {
  const { _id } = req;
  const { cartId, quantity } = req.body;
  try {
    const cart = await CartModel.findById(cartId);
    if (!cart) {
      return res
        .status(200)
        .json({ success: false, message: "Cart not found" });
    }
    cart.quantity = quantity;
    await cart.save();
    return res.json({ success: true, data: cart });
  } catch (error) {
    console.log(error.message);
  }
};
