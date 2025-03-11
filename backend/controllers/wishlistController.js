const User = require("../models/userModel");
const Property = require("../models/propertyModel");
const asyncHandler = require("express-async-handler");

const wishlistController={
// Add Property to Wishlist
    addToWishlist : asyncHandler(async (req, res) => {
    const { id } = req.params;
        const userId=req.user.id
    const user = await User.findById(userId);
    const Property = await Property.findById(id);
        if(!Property){
            throw new Error("Property not found")
        }
    // Check if Property is already in wishlist
    if (user.wishlist.includes(id)) {
        res.send("Property already in wishlist");
    }

    user.wishlist.push(id);
    await user.save();

    res.status(200).send({ message: "Property added to wishlist", wishlist: user.wishlist });
}),

    removeFromWishlist : asyncHandler(async (req, res) => {
    const { id:PropertyId } = req.params;
    const userId=req.user.id
    const user = await User.findById(userId);

    user.wishlist = user.wishlist.filter(id => id.toString() !== PropertyId);
    await user.save();

    res.status(200).send({ message: "Property removed from wishlist", wishlist: user.wishlist });
}),

    getWishlist : asyncHandler(async (req, res) => {
        const userId=req.user.id
    const user = await User.findById(userId).populate("wishlist");

    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ wishlist: user.wishlist });
})
}

module.exports = wishlistController;
