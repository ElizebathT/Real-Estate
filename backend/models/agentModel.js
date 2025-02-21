const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    specializations: {
    type: [String],
    enum: ['residential', 'commercial', 'rentals'],
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    maxlength: 500,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
  profileCompleted: {
    type: Boolean,
    default: false,
  },
  averageRating: { 
    type: Number, 
    default: 0 
},
}, { timestamps: true });

const Agent = mongoose.model("Agent", agentSchema);
module.exports = Agent;