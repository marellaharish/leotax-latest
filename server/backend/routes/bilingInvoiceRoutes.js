import express from "express";
const router = express.Router();
import multer from "multer";
import {
  DownloadFile,
  uploadInvoiceProcces,
  getFilesById,
  DeleteFile,
  getFilesHistyById,
  CreateFileHistory,
  uploadTaxForm,
  uploadCopyfile,
  getcopyFileById,
  DeleteCopyFile,
  getTaxForm,
  getAllTaxForm,
  DeleteTaxFile,
} from "../controllers/bilingInvoiceController.js";
import { sessioncheck } from "../middleware/authMiddleware.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

// router.route("/upload").post(upload.single("file"), UploadingInvoice);
router.route("/upload").post(upload.single("file"), uploadInvoiceProcces);

router.route("/taxupload").post(upload.single("file"), uploadTaxForm);
router.route("/copyupload").post(upload.single("file"), uploadCopyfile);

// router.get("/download/:key", DownloadFile);
router.route("/download/:id").get(DownloadFile);
router.route("/gefiles/:id").get(sessioncheck, getFilesById);
router.route("/delete/:id").delete(sessioncheck, DeleteFile);
router
  .route("/getcopyfile/:id")
  .get(sessioncheck, getcopyFileById)
  .delete(DeleteCopyFile);
router
  .route("/filehistory/:id")
  .get(sessioncheck, getFilesHistyById)
  .put(CreateFileHistory);

router.route("/getTaxForm").get(sessioncheck, getTaxForm);
router.route("/getalltaxform").get(sessioncheck, getAllTaxForm)
router.route("/taxfile/:id").delete(DeleteTaxFile)


export default router;
