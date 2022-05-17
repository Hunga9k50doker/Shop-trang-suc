import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
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
      jewel_type: {
        type: String,
      },
      jewel_line: {
        type: String,
      },
      //Vàng bạc kim cương
      material: {
        type: Array,
        required: true,
      },
      //22k, 24k
      materialGold: {
        type: Array,
      },
      brand: {
        type: String,
      },
      accessory_type: {
        type: String,
      },
    },
    gender: {
      type: String,
      required: true,
    },
    color: {
      type: Array,
      required: true,
    },
    //
    isCouple: {
      type: Boolean,
      required: true,
      default: false,
    },
    // Cho nàng, cha mẹ, ...
    gift: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("product", ProductSchema);
