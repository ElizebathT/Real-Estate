const Agent = require("../models/agentModel");
const Property = require("../models/propertyModel")
const Payment = require("../models/paymentModel");
const asyncHandler = require("express-async-handler");

const propertyController = {
    createProperty: asyncHandler(async (req, res) => {
        const agent = await Agent.findOne({ user: req.user.id });
        if (!agent) {
            return res.status(404).json({ message: "Agent not found." });
        }
    
        const agentProperties = await Property.countDocuments({ agentId: agent._id });
    
        // Fetch active subscription
        const activeSubscription = await Payment.findOne({ agentId: agent._id, status: "active" });
    
        let propertyLimit = 5; // Default free tier limit
    
        if (activeSubscription) {
            switch (activeSubscription.plan) {
                case "basic":
                    propertyLimit = 10;
                    break;
                case "premium":
                    propertyLimit = 15;
                    break;
                case "vip":
                    propertyLimit = 5;
            }
        }
    
        // Check property listing limit
        if (agentProperties >= propertyLimit) {
            return res.status(403).json({
                message: `You have reached your property limit (${propertyLimit}). Please upgrade your subscription to list more properties.`,
            });
        }
    
        // Create new property
        const newProperty = new Property({
            ...req.body,
            agentId: req.user.id,
            photos: req.files["photos"] ? req.files["photos"][0].path : null,
            videos: req.files["videos"] ? req.files["videos"][0].path : null,
        });
    
        const savedProperty = await newProperty.save();
        res.status(201).json(savedProperty);
    }),
    

    getAllProperties: asyncHandler(async (req, res) => {
        const properties = await Property.find().populate("agentId", "name email");
        res.send(properties);
    }),

    showProperty: asyncHandler(async (req, res) => {
        const {id}=req.params
        const property = await Property.findById(id)
        res.send(property);
    }),

    updateProperty: asyncHandler(async (req, res) => {
        const {id}=req.body
        const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProperty) {
            throw new Error("Property not found");
        }
        res.status(200).send(updatedProperty);
    }),

    deleteProperty: asyncHandler(async (req, res) => {
        const {id}=req.body
        const deletedProperty = await Property.findByIdAndDelete(id);
        if (!deletedProperty) {
            throw new Error("Property not found");
        }
        res.status(200).send({ message: "Property deleted successfully" });
    }),

    searchProperties: asyncHandler(async (req, res) => {
        const { city, propertyType, minPrice, maxPrice, bedrooms, isAvailable } = req.body;

        const filters = {
            ...(city && { "location.city": city }),
            ...(propertyType && { propertyType }),
            ...(minPrice && maxPrice && { price: { $gte: minPrice, $lte: maxPrice } }),
            ...(bedrooms && { bedrooms: { $gte: bedrooms } }),
            ...(isAvailable !== undefined && { isAvailable }),
        };

        const properties = await Property.find(filters);
        res.status(200).send(properties);
    })
};

module.exports = propertyController;
