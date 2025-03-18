const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Transaction = require("../models/transactionModel");
const Property = require("../models/propertyModel");

const adminController={
    getDashboardData :asyncHandler(async (req, res) => {
        const users = await User.find();
        const properties=await Property.find()
        const dashboard = {
            users,
            properties
          };
      
        res.send(dashboard);        
      }),
      
    verifyUser:asyncHandler(async (req, res) => {
      
        const user = await User.findById(req.params.id);
        
        if(!user){
            throw new Error('User not found')
        }
        user.verified=true
        const userSaved=await user.save()
        res.send("User verified")
    }),
}
module.exports=adminController