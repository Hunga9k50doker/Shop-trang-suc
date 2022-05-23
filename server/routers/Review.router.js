import express from "express";
import {
  fetchReviews,
  fetchReviewsByProductId,
  addReview,
} from "../controllers/Review.controller.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, verifyAdmin, fetchReviews);
router
  .route("/:productId")
  .get(verifyToken, verifyAdmin, fetchReviewsByProductId)
  .post(verifyToken, verifyAdmin, addReview);

export default router;
