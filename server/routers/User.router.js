import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  login,
  register,
  updateUser,
} from "../controllers/User.controller.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
//user logged in
router.get("/", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
//admin only
router.get("/admin", verifyToken, verifyAdmin, getAllUsers);
router.delete("/admin/:id", verifyToken, verifyAdmin, deleteUser);

export default router;
