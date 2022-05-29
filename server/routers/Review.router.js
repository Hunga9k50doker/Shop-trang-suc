import express from "express";
import {
  fetchReviews,
  fetchReviewsByProductId,
  addReview,
} from "../controllers/Review.controller.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, fetchReviews);
router
  .route("/:productId")
  .get(fetchReviewsByProductId)
  .post(verifyToken, addReview);

export default router;
