import { verify } from 'crypto';
import mongoose from 'mongoose'
import { type } from 'os';

const userSchema = new mongoose.Schema({
         username : {
            type: String,
            required: [true, "Please provide a username!"],
            unique: true,

         },
         email : {
            type: String,
            required: [true,"Please provide a email!"],
            unique: true,

         },
         password: {
            type: String,
            required: [true, "Please create your password"],

         },
         isVerified: {
            type: Boolean,
            default: false,
         },
         isAdmin: {
            type: Boolean,
            default: false,
         },
         forgetPasswordToken: String,
         forgetPasswordTokenExpiry: Date,
         verifyToken: String,
         verifyTokenExpiry:Date,

         
})
const User = mongoose.model.users || mongoose.model("User",userSchema);

export default  User;