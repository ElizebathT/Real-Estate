const express = require("express");
const adminAuthentication = require("../middlewares/admin");
const adminController = require("../controllers/adminController");
const userAuthentication = require("../middlewares/userAuthentication");
const adminRoutes = express.Router();
adminRoutes.put("/verify/:id",userAuthentication, adminAuthentication,adminController.verifyUser);
adminRoutes.get("/dashboard", userAuthentication,adminAuthentication,adminController.getDashboardData);

module.exports = adminRoutes;
