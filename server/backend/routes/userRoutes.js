import express from "express";
const router = express.Router();
import {
  authuser,
  getuser,
  deleteuser,
  getuserById,
  updateuser,
  createuser,
  emailCheck,
  recoveryIdCheck,
  generatePassword,
  getallUsers,
} from "../controllers/userController.js";
import { sessioncheck, admin } from "../middleware/authMiddleware.js";
import { updatePassword } from "../controllers/userController.js";
import { resetPassword } from "../controllers/userController.js";

router.route("/allusers/:id").get(sessioncheck, getallUsers);
router.post("/login", authuser);
router.route("/profile/:id").get(sessioncheck, getuser);

router
  .route("/create")
  .delete(sessioncheck, deleteuser)
  .get(sessioncheck, getuserById)
  .put(sessioncheck, updateuser)
  .post(createuser);

router
  .route("/:id")
  .delete(deleteuser)
  .get(sessioncheck, getuserById)
  .put(updateuser);

router.route("/login/getresetPassword").post(resetPassword);
router.route("/login/restpassword").post(updatePassword);
router.route("/emailcheck/:id").post(emailCheck);
router.route("/password/recoveryIdCheck").post(recoveryIdCheck);
router.route("/password/generatepassword").post(generatePassword);

export default router;
