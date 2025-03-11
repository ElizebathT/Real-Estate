const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const wishlistController = require("../controllers/wishlistController");
const wishlistRoutes = express.Router();

wishlistRoutes.delete("/delete/:id",userAuthentication, wishlistController.removeFromWishlist);
wishlistRoutes.get("/view", userAuthentication,wishlistController.getWishlist);
wishlistRoutes.post("/save/:id", userAuthentication,wishlistController.addToWishlist);

module.exports = wishlistRoutes;