const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique:true,
        minLength:[5,"Minimum 5 characters required"],
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  name:{ 
    type: String, 
    required: true,
  },
  password: { 
    type: String, 
    minLength:[5,"Minimum 5 characters required"]
  },
  role: { 
    type: String, 
    enum: ["agent", "admin", "customer","owner"], 
    required: true 
  },
  phone: { 
      type: String,
      default:''
  },
  profilePic:{
    type: String,
      default:''
  },
  address:{ 
      type:  String,
      default:''
  },
  wishlist: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Property" 
    }
  ],
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;