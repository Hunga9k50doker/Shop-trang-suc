import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
    required: true,
  },
  imgsUrl: {
    type: Array,
    default: [],
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    jewelryType: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    materialGold: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.model("product", ProductSchema);
