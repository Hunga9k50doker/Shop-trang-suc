import express from "express";
import {
  addMultipleProductToCart,
  createCart,
  getAllCarts,
  getUserCart,
  removeAllProductFromCart,
  removeMultipleProductFromCart,
  updateCartDetail,
} from "../controllers/Cart.controller.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

//quyền admin mới được truy cập
router.get("/", verifyToken, verifyAdmin, getAllCarts);
//quyền user được truy cập
router
  .route("/user")
  .get(verifyToken, getUserCart)
  .post(verifyToken, createCart)
  .delete(verifyToken, removeAllProductFromCart);
router.put("/user/quantity", verifyToken, updateCartDetail);
router.put("/user/products", verifyToken, addMultipleProductToCart);
router.delete("/user/sold", verifyToken, removeAllProductFromCart);
router.delete("/user/products", verifyToken, removeMultipleProductFromCart);

export default router;
