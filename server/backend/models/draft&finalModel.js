import mongoose from "mongoose";
import bcrypt from "bcryptjs";
var Schema = mongoose.Schema;

const formSchema = mongoose.Schema(
  {
    filename: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    fileapi: {
      type: String,
      default: "",
    },
    userid: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "final",
    },
  },
  {
    timestamps: true,
  }
);

const Copyfile = mongoose.model("Copyfile", formSchema);

export default Copyfile;
