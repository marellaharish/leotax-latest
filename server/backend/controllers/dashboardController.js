import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Filehistory from "../models/filesHistoryModel.js";
import Files from "../models/filesModel.js";
import User from "../models/userModel.js";
import Copyfile from "../models/draft&finalModel.js";

const countRecordsByUserId = asyncHandler(async (req, res) => {
  try {
    const userid = req.params.id;
    const filesCount = await Files.countDocuments({ userid });
    const historyCount = await Filehistory.countDocuments({ userid });
    const draftsCount = await Copyfile.countDocuments({
      userid: userid,
      type: "draft",
    });
    const finalCount = await Copyfile.countDocuments({
      userid: userid,
      type: "final",
    });

    res
      .status(200)
      .json({
        FilesHistoryCount: historyCount,
        filesUploadCount: filesCount,
        draftsCount: draftsCount,
        finalCount: finalCount,
      });
  } catch (err) {
    console.error("Error counting records:", err);
    res.status(500).json({ error: "Failed to count records" });
  }
});

const countRecords = asyncHandler(async (req, res) => {
  try {
    // const userid = req.params.id;
    const filesCount = await Files.countDocuments({});
    const historyCount = await Filehistory.countDocuments({});
    const userCount = await User.countDocuments({ role: { $ne: "admin" } });

    res.status(200).json({
      FormdownloadCount: historyCount,
      filesUploadCount: filesCount,
      userCount: userCount,
    });
  } catch (err) {
    console.error("Error counting records:", err);
    res.status(500).json({ error: "Failed to count records" });
  }
});
export { countRecordsByUserId, countRecords };
