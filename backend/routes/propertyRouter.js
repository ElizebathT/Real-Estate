const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const propertyController = require("../controllers/propertyController");
const { upload } = require("../middlewares/cloudinary");
const propertyRoutes = express.Router();
propertyRoutes.delete("/delete",userAuthentication, propertyController.deleteProperty);
propertyRoutes.get("/viewall", userAuthentication,propertyController.getAllProperties);
propertyRoutes.post("/add", userAuthentication,upload.fields([{ name: "photos", maxCount: 1 },{ name: "videos", maxCount: 1 },]),propertyController.createProperty);
propertyRoutes.get("/search", userAuthentication,propertyController.searchProperties);
propertyRoutes.put("/edit", userAuthentication,propertyController.updateProperty);

module.exports = propertyRoutes;