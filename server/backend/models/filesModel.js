import mongoose from "mongoose";
import bcrypt from "bcryptjs";
var Schema = mongoose.Schema;

const FilesSchema = mongoose.Schema(
  {
   
    filename: {
      type: String,
      default:""
    },
    link: {
      type: String,
      default:""
    },
    fileapi: {
      type: String,
      default:""
    },
    userid: {
        type: String,
        default:""
      },
      category:{
        type:String,
        default:''
      },
      year:{
        type:String,
        default:''
      }
  
  },
  {
    timestamps: true,
  }
);

const Files = mongoose.model("files", FilesSchema);

export default Files;
