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
  // đồng hồ, trang sức, phụ kiện.
  type: {
    type: String,
    required: true,
  },
  category: {
    //Vàng bạc kim cương
    material: {
      type: String,
      required: true,
    },
    //22k, 24k
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
    brand: {
      type: String,
      required: true,
    },
    isCouple: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  // Cho nàng, cha mẹ, ...
  gift: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("product", ProductSchema);
