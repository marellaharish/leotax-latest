import express from "express";
const router = express.Router();
import { sessioncheck, admin } from "../middleware/authMiddleware.js";
import {
  countRecords,
  countRecordsByUserId,
} from "../controllers/dashboardController.js";

router.route("/:id").get(sessioncheck, countRecordsByUserId);

router.route("/admin/:id").get(sessioncheck, countRecords);

export default router;
