const express=require("express");
const userRoutes = require("./userRouter");
const wishlistRoutes = require("./wishlistRoutes");
const propertyRoutes = require("./propertyRouter");
const reviewRoutes = require("./reviewRouter");
const router=express()

router.use("/users", userRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/property", propertyRoutes);
router.use("/review", reviewRoutes);
router.use("/agent", propertyRoutes);

module.exports=router