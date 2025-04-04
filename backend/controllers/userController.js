const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler=require("express-async-handler")
const express=require('express');
const User = require("../models/userModel");

const userController={
    register : asyncHandler(async(req,res)=>{        
      const {name,middleName,lastName,username,email,password,role,address, phone}=req.body
      const userExits=await User.findOne({email})
      if(userExits){
          throw new Error("User already exists")
      }
      const hashed_password=await bcrypt.hash(password,10)
      const userCreated=await User.create({
          name,
          middleName,
          lastName,
          username,
          email,
          password:hashed_password,
          role,
          address, 
          phone
      })
      
      if(!userCreated){
          throw new Error("User creation failed")
      }
      const payload={
          email:userCreated.email,
          id:userCreated.id
      }
      const token=jwt.sign(payload,process.env.JWT_SECRET_KEY)
      res.json({token,role})
    }),  
  
    login :asyncHandler(async(req,res)=>{
        const {email,password}=req.body
        const userExist=await User.findOne({email})
        if(!userExist){
            throw new Error("User not found")
        }
        const passwordMatch= bcrypt.compare(userExist.password,password)
        if(!passwordMatch){
            throw new Error("Passwords not matching")
        }
        const payload={
            email:userExist.email,
            id:userExist.id
        }
        const token=jwt.sign(payload,process.env.JWT_SECRET_KEY)
        const role=userExist.role  
        const name=userExist.name     
        res.json({ token,role,name });
        }),

    logout:asyncHandler(async(req,res)=>{
        res.clearCookie("token")
        res.send("User logged out")
        }),

    profile: asyncHandler(async (req, res) => {
        const { username, name, email, password, role, phone, address } = req.body;
        const userId = req.user.id;         
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            if (password) {
                user.password = await bcrypt.hash(password, 10);
            }
            user.username = username || user.username;
            user.name = name || user.name;
            user.email = email || user.email;
            user.role = role || user.role;
            user.phone = phone || user.phone;
            user.address = address || user.address;
            // user.profilePic = profilePic || user.profilePic;
            const updatedUser = await user.save();
            if (!updatedUser) {
                return res.status(500).send({ message: "Error updating profile" });
            }        
            res.send("User profile saved successfully");
    }),
        

    getUserProfile : asyncHandler(async (req, res) => {
        const userId = req.user.id;     
        const user = await User.findById(userId).select("-password"); 
        if (!user) {
            throw new Error("User not found");
        }    
        res.send({
            message: "User details retrieved successfully",
            user
        });
    })
}
module.exports=userController