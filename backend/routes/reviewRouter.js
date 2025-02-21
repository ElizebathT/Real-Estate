const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const reviewController = require("../controllers/reviewController");
const reviewRoutes = express.Router();

reviewRoutes.delete("/delete",userAuthentication, reviewController.deleteReview);
reviewRoutes.get("/viewall", userAuthentication,reviewController.getReviews);
reviewRoutes.post("/add", userAuthentication,reviewController.addReview);

module.exports = reviewRoutes;