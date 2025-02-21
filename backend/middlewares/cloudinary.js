const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Storage for Images
const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "images",
    resource_type: "image", // Specify as image
    allowed_formats: ["jpeg", "png", "jpg", "webp"],
  },
});

// Storage for Videos
const videoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "videos",
    resource_type: "video", // Specify as video
    allowed_formats: ["mp4", "mov", "avi", "mkv"],
  },
});

// Multer Uploads
const uploadImage = multer({ storage: imageStorage });
const uploadVideo = multer({ storage: videoStorage });

module.exports = { uploadImage, uploadVideo };
