import express from "express";
import {
  changeStatus,
  createInvoice,
  getAllInvoice,
  getInvoiceUser,
} from "../controllers/Invoice.controller.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, getAllInvoice);
router
  .route("/user")
  .get(verifyToken, getInvoiceUser)
  .post(verifyToken, createInvoice)
  .put(verifyToken, changeStatus);

export default router;
