import FavouriteModel from "../models/Favourite.model.js";
import mongoose from "mongoose";

export const getAllFavorite = async (req, res) => {
  try {
    const favourites = await FavouriteModel.find();
    return res.status(200).json({ success: true, data: favourites });
  } catch (error) {
    console.log(error.message);
  }
};

export const getFavouriteUser = async (req, res) => {
  const { _id } = req;
  try {
    const favourite = await FavouriteModel.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(_id),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "favouriteDetails.product",
          foreignField: "_id",
          as: "favouriteDetails.product",
        },
      },
    ]);
    return res.status(200).json({ success: true, data: favourite[0] });
  } catch (error) {
    console.log(error.message);
  }
};

export const createFavourite = async (req, res) => {
  const { _id } = req;
  const { favouriteDetails } = req.body;
  try {
    const favourite = await FavouriteModel.create({
      user: _id,
      favouriteDetails,
    });
    await favourite.save();
    return res.status(200).json({ success: true, data: favourite });
  } catch (error) {
    console.log(error.message);
  }
};

export const addProductToFavourite = async (req, res) => {
  const { _id } = req;
  const { productId } = req.body;
  try {
    const favourite = await FavouriteModel.findOne({ user: _id });
    const checked = favourite.favouriteDetails.find(
      (product) => product.product.toString() === productId
    );
    if (checked) {
      return res.status(200).json({ success: true, data: favourite });
    }
    favourite.favouriteDetails.push({ product: productId });
    await favourite.save();
    return res.status(200).json({ success: true, data: favourite });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProductFromFavourite = async (req, res) => {
  const { _id } = req;
  const { productId } = req.body;
  try {
    const favourite = await FavouriteModel.findOne({ user: _id });
    const favouriteDetail = favourite.favouriteDetails.find(
      (product) => product.product.toString() === productId
    );
    if (favouriteDetail) {
      favourite.favouriteDetails.pull(favouriteDetail);
    }
    await favourite.save();
    return res.status(200).json({ success: true, data: favourite });
  } catch (error) {
    console.log(error.message);
  }
};
