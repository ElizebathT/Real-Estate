const express=require("express");
const userRoutes = require("./userRouter");
const wishlistRoutes = require("./wishlistRoutes");
const propertyRoutes = require("./propertyRouter");
const reviewRoutes = require("./reviewRouter");
const paymentRouter = require("./paymentRouter");
const chatRoutes = require("./chatRouter");
const adminRoutes = require("./adminRouter");
const router=express()

router.use("/payment", paymentRouter);

router.use(express.json())

router.use("/users", userRoutes);
router.use("/admin", adminRoutes);
router.use("/wishlist", wishlistRoutes);
router.use("/property", propertyRoutes);
router.use("/review", reviewRoutes);
router.use("/agent", propertyRoutes);
router.use("/messages", chatRoutes);

module.exports=router