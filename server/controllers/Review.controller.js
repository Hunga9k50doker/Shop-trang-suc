import ReviewModel from "../models/Review.model.js";
import mongoose from "mongoose";

export const fetchReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.find();
    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const fetchReviewsByProductId = async (req, res) => {
  const { productId } = req.params;
  try {
    // const reviews = await ReviewModel.find({
    //   product: mongoose.Types.ObjectId(productId),
    // });
    const reviews = await ReviewModel.aggregate([
      {
        $match: {
          product: mongoose.Types.ObjectId(productId),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
    ]);
    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const addReview = async (req, res) => {
  const { _id } = req;
  const { productId } = req.params;
  const { description, rating } = req.body;
  try {
    const review = new ReviewModel({
      user: _id,
      product: productId,
      description,
      rating,
    });
    await review.save();
    return res.json({ success: true, data: review });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
