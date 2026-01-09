import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Event1 = mongoose.Schema({
    userid: {
        type: String,
      },
    Eventtype: 
    {
        type: String,
    },
    date:
    {
        type: Date,
    },
    ipAddress:
    {
        type: String, 
    },
    browserInfo:
    {
        type: String, 
    },
    flag:
    {
        type:String,
    },
    username1:
    {
        type:String,
    }
    },
    {
        timestamps: true,
      }
);

const Event = mongoose.model("eventdb", Event1);

export default Event;
 