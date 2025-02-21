const Property = require("../models/propertyModel");
const asyncHandler = require("express-async-handler");

const propertyController = {
    createProperty: asyncHandler(async (req, res) => {
        const newProperty = new Property(req.body);
        const encodedAddress = encodeURIComponent(address);
        
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}&travelmode=driving`;
        
        const savedProperty = await newProperty.save();
        res.status(201).send(savedProperty);
    }),

    getAllProperties: asyncHandler(async (req, res) => {
        const properties = await Property.find().populate("agentId", "name email");
        res.status(200).send(properties);
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
