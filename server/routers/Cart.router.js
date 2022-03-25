import express from "express";
import {
  createCart,
  getAllCarts,
  getUserCart,
  removeAllProductFromCart,
  removeProductFromCart,
  updateCartDetail,
} from "../controllers/Cart.controller.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, getAllCarts);
router.get("/user", verifyToken, getUserCart);
router.post("/user", verifyToken, createCart);
router.delete("/user", verifyToken, removeProductFromCart);
router.delete("/user/sold", verifyToken, removeAllProductFromCart);
router.put("/user/quantity", verifyToken, updateCartDetail);

export default router;
