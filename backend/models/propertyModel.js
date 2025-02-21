const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    propertyType: { 
        type: String, 
        enum: ['house', 'apartment', 'commercial'], 
        required: true 
    },
    location: {
        address: { 
            type: String, 
            required: true 
        },
        city: { 
            type: String, 
            required: true 
        },
        neighborhood: { 
            type: String 
        },
        zipCode: { 
            type: String, 
            required: true 
        }
    },
    price: { 
        type: Number, 
        required: true 
    },
    rentOrSale: { 
        type: String, 
        enum: ['rent', 'sale'], 
        required: true 
    },
    bedrooms: { 
        type: Number, 
        required: true 
    },
    bathrooms: { 
        type: Number, 
        required: true 
    },
    squareFootage: { 
        type: Number, 
        required: true 
    },
    features: [
        { type: String }
    ],
    amenities: [
        { type: String }
    ],
    photos: [
        { type: String }
    ], // Array of image URLs
    videos: [
        { type: String }
    ], // Optional: for virtual tours
    mapCoordinates: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    isAvailable: { 
        type: Boolean, 
        default: true 
    },
    agentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Agent', 
        required: true 
    },
    averageRating: { 
        type: Number, 
        default: 0 
    },
}, { timestamps: true });

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;