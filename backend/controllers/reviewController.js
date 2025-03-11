const Review = require("../models/reviewModel");
const Property = require("../models/propertyModel");
const Agent = require("../models/agentModel");
const asyncHandler = require("express-async-handler");
const Notification = require("../models/notificationModel");

const reviewController = {
    addReview: asyncHandler(async (req, res) => {
        const { propertyId, agentId, rating, comment } = req.body;
        const userId = req.user.id;

        if (!rating || !comment) {
            return res.status(400).send({ message: "Rating and comment are required." });
        }

        if (!propertyId && !agentId) {
            return res.status(400).send({ message: "Review must be for either a property or an agent." });
        }

        // Prevent duplicate reviews by the same user
        const existingReview = await Review.findOne({
            user: userId,
            ...(propertyId && { property: propertyId }),
            ...(agentId && { agent: agentId })
        });

        if (existingReview) {
            return res.status(400).send({ message: "You have already reviewed this item." });
        }

        const review = new Review({
            user: userId,
            property: propertyId || undefined,
            agent: agentId || undefined,
            rating,
            comment
        });

        await review.save();
        const property=await Property.findById(propertyId)
        if(property){
        await Notification.create({
            user: review.agent,
            message: `📝 Review Added: A new review has been posted for your property, ${property.title}.`,
        });
    }
    if(review.agent){
        await Notification.create({
            user: agentId,
            message: `⭐ New Review: A client has rated you. Check their feedback!`,
        });
    }
        // Update average rating for Property or Agent
        if (propertyId) await updateAverageRating(Property, propertyId, "property");
        if (agentId) await updateAverageRating(Agent, agentId, "agent");

        res.status(201).send({ message: "Review added successfully.", review });
    }),

    // ➤ Get Reviews (for Property or Agent)
    getReviews: asyncHandler(async (req, res) => {
        const { propertyId, agentId } = req.body;

        const filter = {};
        if (propertyId) filter.property = propertyId;
        if (agentId) filter.agent = agentId;

        const reviews = await Review.find(filter)
            .populate("user", "name")
            .sort({ createdAt: -1 });

        res.status(200).send(reviews);
    }),

    // ➤ Delete Review
    deleteReview: asyncHandler(async (req, res) => {
        const {id}=req.body
        const review = await Review.findById(id);

        if (!review) {
            return res.status(404).send({ message: "Review not found." });
        }

        // Only the user who created the review can delete it
        if (review.user.toString() !== req.user._id.toString()) {
            return res.status(403).send({ message: "Not authorized to delete this review." });
        }

        const propertyId = review.property;
        const agentId = review.agent;

        await review.deleteOne();

        // Update average rating
        if (propertyId) await updateAverageRating(Property, propertyId, "property");
        if (agentId) await updateAverageRating(Agent, agentId, "agent");

        res.status(200).send({ message: "Review deleted successfully." });
    })
};

// ➤ Utility Function: Update Average Rating
const updateAverageRating = async (Model, id, type) => {
    const reviews = await Review.find({ [type]: id });
    const avgRating = reviews.length
        ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
        : 0;

    await Model.findByIdAndUpdate(id, { averageRating: avgRating });
};

module.exports = reviewController;
