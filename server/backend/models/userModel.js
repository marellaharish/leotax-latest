import mongoose from "mongoose";
import bcrypt from "bcryptjs";
var Schema = mongoose.Schema;

const userMemberSchema = mongoose.Schema(
  {
   
    name: {
      type: String,
      default:""
    },
    firstname: {
      type: String,
      default:""
    },
    lastname: {
      type: String,
      default:""
    },
    age: {
      type: String,
    },
    gender: {
      type: String,
    },
    alertnumber: {
      type: String,
    },
    email: {
      type: String,
    },

    password: {
      type: String,
    },
    isadmin: {
      type: Boolean,
    },
    number: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("usermember", userMemberSchema);

export default User;
