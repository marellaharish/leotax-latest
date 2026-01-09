import mongoose from "mongoose";
import bcrypt from "bcryptjs";
var Schema = mongoose.Schema;

const FilesHistorySchema = mongoose.Schema(
  {
   
    filename: {
      type: String,
      default:""
    },
    link: {
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

const Filehistory = mongoose.model("filehistory", FilesHistorySchema);

export default Filehistory;
