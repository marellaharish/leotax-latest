import mongoose from "mongoose";
import bcrypt from "bcryptjs";
var Schema = mongoose.Schema;

const formSchema = mongoose.Schema(
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
      category:{
        type:String,
        default:''
      },
      year:{
        type:String,
        default:''
      },
      primary:{
        type:Boolean,
        default:false
      }
  
  },
  {
    timestamps: true,
  }
);

const TaxForm = mongoose.model("taxform", formSchema);

export default TaxForm;