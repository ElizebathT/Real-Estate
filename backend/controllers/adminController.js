const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Property = require("../models/propertyModel");
const Agent = require("../models/agentModel");

const adminController={
    getDashboardData :asyncHandler(async (req, res) => {
        const users = await User.find();
        const agents = await Agent.find();
        const properties=await Property.find()
        const dashboard = {
          agents,
            users,
            properties
          };
      
        res.send(dashboard);        
      }),
      
      verifyUser: asyncHandler(async (req, res) => {
        const { id } = req.body;
    
        const user = await User.findById(id);
    
        if (!user) {
            res.status(404);
            throw new Error("User not found");
        }
    
        if (user.verified) {
            return res.status(400).json({ message: "User is already verified" });
        }
    
        user.verified = true;
        await user.save();
    
        res.status(200).json({ message: "User verified successfully" });
    }),
    
}
module.exports=adminController