import express from "express";
import {
  addProductToCart,
  getAllCarts,
  getUserCart,
  removeAllProductFromCart,
  updateCartDetail,
  removeProductFromCart,
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
  .post(verifyToken, addProductToCart)
  .delete(verifyToken, removeProductFromCart);
router.put("/user/quantity", verifyToken, updateCartDetail);
router.delete("/user/sold", verifyToken, removeAllProductFromCart);

export default router;
