import ProductModel from "../models/Product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    return res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log(error.message);
  }
};

//filter products by category

export const createProduct = async (req, res) => {
  const {
    name,
    description,
    imgsUrl,
    price,
    type,
    category,
    gift,
    color,
    gender,
    isCouple,
  } = req.body;
  try {
    const product = await ProductModel.create({
      name,
      description,
      imgsUrl,
      price,
      category,
      gift,
      type,
      color,
      gender,
      isCouple,
    });
    await product.save();
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    imgsUrl,
    price,
    type,
    category,
    gift,
    color,
    gender,
    isCouple,
  } = req.body;
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    product.name = name;
    product.description = description;
    product.imgsUrl = imgsUrl;
    product.price = price;
    product.category = category;
    product.type = type;
    product.gift = gift;
    product.isCouple = isCouple;
    product.color = color;
    product.gender = gender
    await product.save();
    return res.status(200).json({ success: true, data: product });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    await product.remove();
    return res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
