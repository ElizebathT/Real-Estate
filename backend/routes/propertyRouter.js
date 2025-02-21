const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const propertyController = require("../controllers/propertyController");
const propertyRoutes = express.Router();
const { uploadImage, uploadVideo } = require("../middlewares/cloudinary")

propertyRoutes.delete("/delete",userAuthentication, propertyController.deleteProperty);
propertyRoutes.get("/viewall", userAuthentication,propertyController.getAllProperties);
propertyRoutes.post("/add", userAuthentication,uploadImage.array("photos", 5), uploadVideo.single("video"),propertyController.createProperty);
propertyRoutes.get("/search", userAuthentication,propertyController.searchProperties);
propertyRoutes.put("/edit", userAuthentication,propertyController.updateProperty);

module.exports = propertyRoutes;