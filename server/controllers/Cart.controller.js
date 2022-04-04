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
    const userCart = await CartModel.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(_id),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "cartDetails.product",
          foreignField: "_id",
          as: "cartDetails.product",
        },
      },
    ]);
    const quantity = await CartModel.find(
      { user: _id },
      { "cartDetails.quantity": 1 }
    );
    return res.status(200).json({
      success: true,
      data: userCart,
      quantityProduct: quantity[0].cartDetails,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCart = async (req, res) => {
  const { _id } = req;
  const { total, cartDetails } = req.body;
  try {
    const cart = await CartModel.create({
      user: _id,
      total,
      cartDetails,
    });
    await cart.save();
    return res.status(200).json({ success: true, data: cart });
  } catch (error) {
    console.log(error.message);
  }
};

//remove product from cart
export const removeProductFromCart = async (req, res) => {
  const { _id } = req;
  const { productId } = req.body;
  try {
    const cart = await CartModel.findOne({ user: _id });
    const cartDetail = cart.cartDetails.find(
      (cartDetail) => cartDetail.product.toString() === productId
    );
    if (cartDetail) {
      cart.cartDetails.pull(cartDetail);
    }
    await cart.save();
    return res.status(200).json({ success: true, data: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeAllProductFromCart = async (req, res) => {
  const { _id } = req;
  try {
    const cart = await CartModel.findOne({ user: _id });
    cart.cartDetails = [];
    cart.total = 0;
    await cart.save();
    return res.status(200).json({ success: true, data: cart });
  } catch (error) {
    console.log(error.message);
  }
};

//Thay đổi số lượng sản phẩm trong giỏ hàng
export const updateCartDetail = async (req, res) => {
  const { _id } = req;
  const { productId, quantity } = req.body;
  try {
    const cart = await CartModel.findOne({ user: _id });
    const cartDetail = cart.cartDetails.find(
      (cartDetail) => cartDetail.product.toString() === productId
    );
    cartDetail.quantity = quantity;
    await cart.save();
    return res.status(200).json({ success: true, data: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const addMultipleProductToCart = async (req, res) => {
  const { _id } = req;
  const { idProducts } = req.body;
  try {
    const cart = await CartModel.findOne({ user: _id });
    idProducts.map((idProduct) => {
      const cartDetail = cart.cartDetails.find(
        (cartDetail) => cartDetail.product.toString() === idProduct
      );
      if (cartDetail) {
        cartDetail.quantity += 1;
      } else {
        cart.cartDetails.push({
          product: idProduct,
          quantity: 1,
        });
      }
    });

    await cart.save();
    return res.status(200).json({ success: true, data: cart });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeMultipleProductFromCart = async (req, res) => {
  const { _id } = req;
  const { idProducts } = req.body;
  try {
    const cart = await CartModel.findOne({ user: _id });
    idProducts.map((idProduct) => {
      const cartDetail = cart.cartDetails.find(
        (cartDetail) => cartDetail.product.toString() === idProduct
      );
      if (cartDetail) {
        cart.cartDetails.pull(cartDetail);
      }
    });

    await cart.save();
    return res.status(200).json({ success: true, data: cart });
  } catch (error) {
    console.log(error.message);
  }
};
