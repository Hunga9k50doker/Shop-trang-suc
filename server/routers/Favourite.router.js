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
router
  .route("/user")
  .get(verifyToken, getFavouriteUser)
  .post(verifyToken, createFavourite)
  .put(verifyToken, addProductToFavourite)
  .delete(verifyToken, deleteProductFromFavourite);

export default router;
