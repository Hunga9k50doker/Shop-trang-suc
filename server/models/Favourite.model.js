import mongoose from "mongoose";

const FavouiteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    favouriteDetails: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("favourite", FavouiteSchema);
