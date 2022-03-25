import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/Product.controller.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", verifyToken, verifyAdmin, createProduct);
router.put("/:id", verifyToken, verifyAdmin, updateProduct);
router.delete("/:id", verifyToken, verifyAdmin, deleteProduct);

export default router;
