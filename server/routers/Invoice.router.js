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
router.get("/user", verifyToken, getInvoiceUser);
router.post("/user", verifyToken, createInvoice);
router.put("/user", verifyToken, changeStatus);

export default router;
