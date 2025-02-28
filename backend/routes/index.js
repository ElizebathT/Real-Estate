const express=require("express");
const userRoutes = require("./userRouter");
const wishlistRoutes = require("./wishlistRoutes");
const propertyRoutes = require("./propertyRouter");
const reviewRoutes = require("./reviewRouter");
const paymentRouter = require("./paymentRouter");
const router=express()

router.use("/payment", paymentRouter);

router.use(express.json())

router.use("/users", userRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/property", propertyRoutes);
router.use("/review", reviewRoutes);
router.use("/agent", propertyRoutes);

module.exports=router