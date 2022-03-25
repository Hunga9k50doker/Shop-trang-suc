import express from "express";
import {
  getAllFavorite,
  getFavouriteUser,
  addProductToFavourite,
  createFavourite,
  deleteProductFromFavourite,
} from "../controllers/Favourite.controller.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, getAllFavorite);
router.get("/user", verifyToken, getFavouriteUser);
router.post("/user", verifyToken, createFavourite);
router.put("/user", verifyToken, addProductToFavourite);
router.delete("/user", verifyToken, deleteProductFromFavourite);

export default router;
