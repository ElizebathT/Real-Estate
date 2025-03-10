const Agent = require("../models/agentModel");
const Property = require("../models/propertyModel");
const asyncHandler = require("express-async-handler");

const propertyController = {
    createProperty: asyncHandler(async (req, res) => {
            const agent=await Agent.findOne({user:req.user.id})
            const agentProperties = await Property.countDocuments({ agentId:agent._id });
    
            // Check if the agent has already listed 5 properties
            if (agentProperties >= 5) {
                const hasActiveSubscription = await Payment.findOne({ agentId, status: "active" });
    
                if (!hasActiveSubscription) {
                    return res.status(403).json({ 
                        message: "You have reached the free listing limit. Please subscribe to continue." 
                    });
                }
            }
    
            // Create new property
            const newProperty = new Property({
                ...req.body,
                agentId,
                photos: req.files["photos"] ? req.files["photos"][0].path : null,
                videos: req.files["videos"] ? req.files["videos"][0].path : null,
            });
    
            const savedProperty = await newProperty.save();
            res.status(201).send(savedProperty);
    }),

    getAllProperties: asyncHandler(async (req, res) => {
        const properties = await Property.find().populate("agentId", "name email");
        res.send(properties);
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
