import express from "express";
const router = express.Router();

import { 
        Insert,
        Select,
        Delete
} from "../controllers/eventController.js";

import { sessioncheck } from "../middleware/authMiddleware.js";

router .route("/:id")
        .post(Insert)
        .get(sessioncheck,Select);
router.route("/deleteEventId/:id")
        .get(Delete);
export default router;
