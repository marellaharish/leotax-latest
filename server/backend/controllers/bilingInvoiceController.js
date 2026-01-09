import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import puppeteer from "puppeteer";
import { format } from "date-fns";
import moment from "moment-timezone";
import AWS from "aws-sdk";
import path from "path";
import fs from "fs";
import Files from "../models/filesModel.js";
import Filehistory from "../models/filesHistoryModel.js";
import TaxForm from "../models/taxFormModel.js";
import Copyfile from "../models/draft&finalModel.js";

// const UploadingInvoice =  asyncHandler(async (req, res) => {

//     try {
//         if (!req.file) {
//           return res.status(400).json({ error: 'No file uploaded' });
//         }
//         const s3 = new AWS.S3();
//         const fileContent = req.file.buffer;
//         const fileName = `${Date.now()}-${path.basename(req.file.originalname)}`;

//         const params = {
//           Bucket: process.env.S3_BUCKET_NAME,
//           Key: fileName,
//           Body: fileContent,
//           ContentType: req.file.mimetype,
//         };

//         // Upload file to S3
//         const data = await s3.upload(params).promise();

//         res.status(200).json({ message: 'File uploaded successfully', url: data.Location });
//       } catch (error) {
//         console.error('Error uploading to S3:', error);
//         res.status(500).json({ error: 'Error uploading file' });
//       }
// });

// const DownloadFile = asyncHandler(async (req, res) => {
//   try {
//     console.log('0000000000000');
//       // const { key } = req.params;
//       let key="1735150228672-SREENU RESUME.docx"
//       console.log(key);
//       if (!key) {
//           return res.status(400).json({ error: "File key is required" });
//       }

//       const s3 = new AWS.S3();

//       const params = {
//           Bucket: process.env.S3_BUCKET_NAME,
//           Key: key,
//       };

//       const data = await s3.getObject(params).promise();

//       res.setHeader("Content-Type", data.ContentType);
//       res.setHeader("Content-Disposition", `attachment; filename="${key}"`);

//       res.send(data.Body);
//   } catch (error) {
//       console.error("Error downloading file from S3:", error);
//       res.status(500).json({ error: "Error downloading file" });
//   }
// });

const uploadInvoiceProcces = asyncHandler(async (req, res) => {
  const file = req.file;
  const id = req.body.id;
  const rootDirectory = path.resolve();
  const folderPath = path.join(rootDirectory, "./backend/invoices", id);
  try {
    await fs.promises.mkdir(folderPath, { recursive: true });

    const fileExtension = path
      .extname(file.originalname)
      .toLowerCase()
      .replace(".", "");

    const subFolderPath = path.join(folderPath, fileExtension);

    await fs.promises.mkdir(subFolderPath, { recursive: true });

    const originalFileName = file.originalname;
    const filePath = path.join(subFolderPath, originalFileName);

    await fs.promises.writeFile(filePath, file.buffer);

    const fileLink =
      process.env.THIS_URL +
      `/api/invoice/download/${id}?token=${originalFileName}`;

    const uInfo = new Files({
      filename: originalFileName,
      link: fileLink,
      fileapi: `api/invoice/download/${id}?token=${originalFileName}`,
      userid: id,
      year: req.body.year,
      category: req.body.category,
    });
    const info = await uInfo.save();
    res.status(200).json({ success: true, fileLink });
  } catch (error) {
    console.error("Error uploading the file:", error);
    res
      .status(500)
      .json({ success: false, message: "File upload failed", error });
  }
});

const DownloadFile = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const token = req.query.token;
    const fileType = path.extname(token).slice(1);

    const __dirname = path.resolve();
    const filePath = path.join(
      __dirname,
      `./backend/invoices/${id}/${fileType}`,
      `${token}`
    );
    console.log(filePath);


    if (fs.existsSync(filePath)) {
      console.log("File exists, proceeding to download.");
      return res.download(filePath, `${token}`);
    } else {
      res.status(200).json({ error: "File not found" });
    }
  } catch (err) {
    console.error("Error in downloading file:", err);
    res.status(500).json({ error: "Error in downloading file" });
  }
});

const getFilesById = asyncHandler(async (req, res) => {
  try {
    const ObjectId = mongoose.Types.ObjectId;

    console.log(req.params.id, "id");
    const filesinfo = await Files.aggregate([
      {
        $match: { userid: req.params.id },
      },
      {
        $sort: { createdAt: -1 },
      },
    ]);
    console.log(filesinfo);
    if (filesinfo) {
      res.json(filesinfo);
    } else {
      res.status(404);
      throw new Error("files not found");
    }
  } catch (error) {
    console.error("Error in getPlansById" + error);
  }
});

const DeleteFile = asyncHandler(async (req, res) => {
  try {
    console.log("inside");

    const file = await Files.findById(req.params.id);
    console.log(file);
    const userid = file.userid;
    const token = file.filename;
    const fileType = path.extname(token).slice(1);

    const __dirname = path.resolve();
    const filePath = path.join(
      __dirname,
      `./backend/invoices/${userid}/${fileType}`,
      `${token}`
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("File deleted successfully:", filePath);

      await file.remove();
      res.status(200).json({ message: "File deleted successfully" });
    } else {
      await file.remove();
      res.status(404).json({ error: "File not found" });
    }
  } catch (err) {
    console.error("Error deleting file:", err);
    res.status(500).json({ error: "Error deleting file" });
  }
});

const CreateFileHistory = asyncHandler(async (req, res) => {
  try {
    const uInfo = new Filehistory({
      filename: req.body.filename,
      link: req.body.link,
      userid: req.params.id,
      year: req.body.year,
      category: req.body.category,
    });
    const info = await uInfo.save();
    res.status(200).json({ success: true, message: "Inserted successfully" });
  } catch (error) {
    console.error("Error uploading the file:", error);
    res
      .status(500)
      .json({ success: false, message: "File upload failed", error });
  }
});

const getFilesHistyById = asyncHandler(async (req, res) => {
  try {
    const ObjectId = mongoose.Types.ObjectId;

    console.log(req.params.id, "id");
    const filesinfo = await Filehistory.aggregate([
      {
        $match: { userid: req.params.id },
      },
      {
        $sort: { createdAt: -1 },
      },
    ]);
    console.log(filesinfo);
    if (filesinfo) {
      res.json(filesinfo);
    } else {
      res.status(404);
      throw new Error("files not found");
    }
  } catch (error) {
    console.error("Error in getPlansById" + error);
  }
});

// const uploadTaxForm = asyncHandler(async (req, res) => {
//   const file = req.file;
//   const rootDirectory = path.resolve();
//   const folderPath = path.join(rootDirectory, "./backend/invoices","taxform" );
//   try {

//     await fs.promises.mkdir(folderPath, { recursive: true });

//     const fileExtension = path.extname(file.originalname).toLowerCase().replace(".", "");

//     const subFolderPath = path.join(folderPath, fileExtension);

//     await fs.promises.mkdir(subFolderPath, { recursive: true });

//     const originalFileName = file.originalname;
//     const filePath = path.join(subFolderPath, originalFileName);

//     await fs.promises.writeFile(filePath, file.buffer);

//     const fileLink =
//       process.env.THIS_URL + `/api/invoice/download/taxform?token=${originalFileName}`;

//       const uInfo = new TaxForm({
//         filename: originalFileName,
//         link: fileLink,
//         fileapi: `api/invoice/download/taxform?token=${originalFileName}`,
//         year: req.body.year,
//         category: req.body.category

//       });
//       const info = await uInfo.save();
//     res.status(200).json({ success: true, fileLink });
//   } catch (error) {
//     console.error("Error uploading the file:", error);
//     res.status(500).json({ success: false, message: "File upload failed", error });
//   }
// });

// const uploadTaxForm = asyncHandler(async (req, res) => {
//   const file = req.file;
//   const rootDirectory = path.resolve();
//   const folderPath = path.join(rootDirectory, "./backend/invoices", "taxform");

//   try {
//     await fs.promises.mkdir(folderPath, { recursive: true });

//     const fileExtension = path.extname(file.originalname).toLowerCase().replace(".", "");
//     const subFolderPath = path.join(folderPath, fileExtension);
//     await fs.promises.mkdir(subFolderPath, { recursive: true });

//     const originalFileName = file.originalname;
//     const filePath = path.join(subFolderPath, originalFileName);

//     // Check if a file with the same name exists in the database
//     const existingFile = await TaxForm.findOne({ filename: originalFileName });

//     if (existingFile) {
//       // Update the file content
//       await fs.promises.writeFile(filePath, file.buffer);

//       // Update the database entry
//       existingFile.link = process.env.THIS_URL + `/api/invoice/download/taxform?token=${originalFileName}`;
//       existingFile.fileapi = `api/invoice/download/taxform?token=${originalFileName}`;
//       existingFile.year = req.body.year;
//       existingFile.category = req.body.category;

//       await existingFile.save();

//       return res.status(200).json({
//         success: true,
//         message: "File updated successfully",
//         fileLink: existingFile.link
//       });
//     } else {
//       // Save the new file
//       await fs.promises.writeFile(filePath, file.buffer);

//       // Save the new file details to the database
//       const fileLink = process.env.THIS_URL + `/api/invoice/download/taxform?token=${originalFileName}`;
//       const uInfo = new TaxForm({
//         filename: originalFileName,
//         link: fileLink,
//         fileapi: `api/invoice/download/taxform?token=${originalFileName}`,
//         year: req.body.year,
//         category: req.body.category,
//         primary:req.body.primary
//       });

//       const info = await uInfo.save();
//       return res.status(200).json({ success: true, fileLink });
//     }
//   } catch (error) {
//     console.error("Error uploading the file:", error);
//     res.status(500).json({ success: false, message: "File upload failed", error });
//   }
// });

const uploadTaxForm = asyncHandler(async (req, res) => {
  const file = req.file;
  const rootDirectory = path.resolve();
  const folderPath = path.join(rootDirectory, "./backend/invoices", "taxform");

  try {
    await fs.promises.mkdir(folderPath, { recursive: true });

    const fileExtension = path
      .extname(file.originalname)
      .toLowerCase()
      .replace(".", "");
    const subFolderPath = path.join(folderPath, fileExtension);
    await fs.promises.mkdir(subFolderPath, { recursive: true });

    const originalFileName = file.originalname;
    const filePath = path.join(subFolderPath, originalFileName);

    // Check if a file with the same name exists in the database
    const existingFile = await TaxForm.findOne({ filename: originalFileName });

    if (existingFile) {
      // Update the file content
      await fs.promises.writeFile(filePath, file.buffer);

      // Update the database entry
      existingFile.link =
        process.env.THIS_URL +
        `/api/invoice/download/taxform?token=${originalFileName}`;
      existingFile.fileapi = `api/invoice/download/taxform?token=${originalFileName}`;
      existingFile.year = req.body.year;
      existingFile.category = req.body.category;
      existingFile.primary = req.body.primary;

      if (req.body.primary) {
        // Update other records to set `primary` to false
        await TaxForm.updateMany(
          { primary: true, _id: { $ne: existingFile._id } },
          { $set: { primary: false } }
        );
      }

      await existingFile.save();

      return res.status(200).json({
        success: true,
        message: "File updated successfully",
        fileLink: existingFile.link,
      });
    } else {
      // Save the new file
      await fs.promises.writeFile(filePath, file.buffer);

      // If `primary` is true, set all other records' `primary` field to false
      if (req.body.primary) {
        await TaxForm.updateMany(
          { primary: true },
          { $set: { primary: false } }
        );
      }

      // Save the new file details to the database
      const fileLink =
        process.env.THIS_URL +
        `/api/invoice/download/taxform?token=${originalFileName}`;
      const uInfo = new TaxForm({
        filename: originalFileName,
        link: fileLink,
        fileapi: `api/invoice/download/taxform?token=${originalFileName}`,
        year: req.body.year,
        category: req.body.category,
        primary: req.body.primary,
      });

      const info = await uInfo.save();
      return res.status(200).json({ success: true, fileLink });
    }
  } catch (error) {
    console.error("Error uploading the file:", error);
    res
      .status(500)
      .json({ success: false, message: "File upload failed", error });
  }
});

const uploadCopyfile = asyncHandler(async (req, res) => {
  const file = req.file;
  const rootDirectory = path.resolve();
  const folderPath = path.join(
    rootDirectory,
    "./backend/invoices",
    req.body.type
  );
  console.log(req.body.userid);
  try {
    await fs.promises.mkdir(folderPath, { recursive: true });

    const fileExtension = path
      .extname(file.originalname)
      .toLowerCase()
      .replace(".", "");
    const subFolderPath = path.join(folderPath, fileExtension);
    await fs.promises.mkdir(subFolderPath, { recursive: true });

    const originalFileName = file.originalname;
    const filePath = path.join(subFolderPath, originalFileName);

    const existingFile = await TaxForm.findOne({ filename: originalFileName });

    if (existingFile) {
      await fs.promises.writeFile(filePath, file.buffer);

      existingFile.link =
        process.env.THIS_URL +
        `/api/invoice/download/${req.body.type}?token=${originalFileName}`;
      existingFile.fileapi = `api/invoice/download/${req.body.type}?token=${originalFileName}`;
      existingFile.year = req.body.year;
      existingFile.category = req.body.category;
      existingFile.type = req.body.type;

      await existingFile.save();

      return res.status(200).json({
        success: true,
        message: "File updated successfully",
        fileLink: existingFile.link,
      });
    } else {
      // Save the new file
      await fs.promises.writeFile(filePath, file.buffer);

      // Save the new file details to the database
      const fileLink =
        process.env.THIS_URL +
        `/api/invoice/download/${req.body.type}?token=${originalFileName}`;
      const uInfo = new Copyfile({
        filename: originalFileName,
        link: fileLink,
        userid: req.body.userid,
        fileapi: `api/invoice/download/${req.body.type}?token=${originalFileName}`,
        year: req.body.year,
        category: req.body.category,
        type: req.body.type,
      });

      const info = await uInfo.save();
      return res.status(200).json({ success: true, fileLink });
    }
  } catch (error) {
    console.error("Error uploading the file:", error);
    res
      .status(500)
      .json({ success: false, message: "File upload failed", error });
  }
});

const getcopyFileById = asyncHandler(async (req, res) => {
  try {
    const ObjectId = mongoose.Types.ObjectId;
    const type = req.query.type;
    console.log(req.params.id, type, "id");
    const filesinfo = await Copyfile.aggregate([
      {
        $match: {
          userid: req.params.id,
          type: type,
        },
      },
      {
        $sort: { createdAt: -1 },
      },
    ]);
    console.log(filesinfo);
    if (filesinfo) {
      res.json(filesinfo);
    } else {
      res.status(404);
      throw new Error("files not found");
    }
  } catch (error) {
    console.error("Error in getPlansById" + error);
  }
});

const DeleteCopyFile = asyncHandler(async (req, res) => {
  try {
    const file = await Copyfile.findById(req.params.id);
    console.log(file);
    const type = file.type;
    const token = file.filename;
    const fileType = path.extname(token).slice(1);

    const __dirname = path.resolve();
    const filePath = path.join(
      __dirname,
      `./backend/invoices/${type}/${fileType}`,
      `${token}`
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("File deleted successfully:", filePath);

      await file.remove();
      res.status(200).json({ message: "File deleted successfully" });
    } else {
      await file.remove();
      res.status(404).json({ error: "File not found" });
    }
  } catch (err) {
    console.error("Error deleting file:", err);
    res.status(500).json({ error: "Error deleting file" });
  }
});

const getTaxForm = asyncHandler(async (req, res) => {
  try {
    const existingFile = await TaxForm.findOne({ primary: true });
    if (existingFile) {
      return res.status(200).json(existingFile);
    }
    return res.status(404).json({ Message: "File not found" });
  } catch (error) {
    console.error("Error uploading the file:", error);
    res.status(500).json({ message: "File upload failed" });
  }
});

const getAllTaxForm = asyncHandler(async (req, res) => {
  try {
    const existingFile = await TaxForm.find();
    if (existingFile.length > 0) {
      return res.status(200).json(existingFile);
    }
    return res.status(404).json([]);
  } catch (error) {
    console.error("Error uploading the file:", error);
    res.status(500).json({ message: "File upload failed" });
  }
});

const DeleteTaxFile = asyncHandler(async (req, res) => {
  try {
    const file = await TaxForm.findById(req.params.id);
    console.log(file);
    const token = file.filename;
    const fileType = path.extname(token).slice(1);

    const __dirname = path.resolve();
    const filePath = path.join(
      __dirname,
      `./backend/invoices/taxform/${fileType}`,
      `${token}`
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("File deleted successfully:", filePath);

      await file.remove();
      res.status(200).json({ message: "File deleted successfully" });
    } else {
      await file.remove();
      res.status(404).json({ error: "File not found" });
    }
  } catch (err) {
    console.error("Error deleting file:", err);
    res.status(500).json({ error: "Error deleting file" });
  }
});
export {
  // UploadingInvoice,
  DownloadFile,
  uploadInvoiceProcces,
  getFilesById,
  DeleteFile,
  CreateFileHistory,
  getFilesHistyById,
  uploadTaxForm,
  uploadCopyfile,
  getcopyFileById,
  DeleteCopyFile,
  getTaxForm,
  getAllTaxForm,
  DeleteTaxFile
};
