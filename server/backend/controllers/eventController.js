import asyncHandler from "express-async-handler";
import Event from "../models/eventmodel.js";

const Insert = asyncHandler(async (req,res) => {
  const {
    Eventtype,
    ip,
    flag,
    browserinfo,
    id,
    username1,
  }=req.body;

    try {
      console.log(req.body);
      const eInfo = new Event({
        Eventtype: Eventtype,
        ipAddress: ip,
        browserInfo: browserinfo,
        date: new Date(),
        flag:flag,
        userid:id,
        username1:username1,
      });
      const info = await eInfo.save()
        .then((val) => 
        {res.json({ msg: "Created Successfully", val: val });
      });
      res.status(200).json(info);
    }
    catch (error) {
      console.error("Error.. " + error);
    }
 
  });
  const  Select = asyncHandler(async (req, res) => {
    try {
      console.log("inside");
      const loginfo = await Event.aggregate([
    
        { $sort: { date: -1 }}]);
      if (loginfo) {
        res.json(loginfo);
      } else {
        res.status(404);
        throw new Error("Events not found");
      }
    } 
    catch (error) {
      console.error(error);
    }
  });
const Delete = asyncHandler(async (req, res) => {
  try {
    await Event.deleteOne({ _id: req.params.id });
    res.json({ msg: "Deleted Successfully" });
  }
  catch (error) {
    console.error(error);
  }
});
export { Insert, Select, Delete };