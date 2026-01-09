import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import { generateToken } from "../utils/generateToken.js";
import { log } from "console";
// import { sendEmail } from "./emailController.js";

const authuser = asyncHandler(async (req, res) => {
  console.log("Login request..!", req.body);

  const { email, password } = req.body;
  try {
    User.findOne({ email: email })

      .then(async (user) => {
        if (!user) {
          let nUser = null;
          await User.findOne({ email: email }).then(async (nUser) => {
            nUser = nUser;
          });
          if (!nUser) {
            return res.status(401).json({
              error: new Error("User not found!"),
              errorr: "User not found",
            });
          } else {
            User = nUser;
          }
        }
        let token = generateToken(user._id);
        console.log("tokennew", token);
        const role = user.isadmin ? "admin" : "";

        bcrypt
          .compare(password, user.password)
          .then(async (valid) => {
            console.log("Is Valid:: " + valid);
            if (!valid) {
              return res.status(401).json({
                error: new Error("Incorrect password!"),
                errorr: "Incorrect password!",
              });
            }
            console.log("Login Success..");
            console.log("Token ::" + token + "");
            console.log(user);

            res.json({
              userInfo: {
                _id: user._id,
                name:
                  user.firstname != "" || user.lastname != ""
                    ? user.firstname + " " + user.lastname
                    : user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                number: user.number,
                email: user.email,
                role: role,
              },
              token: token,
            });
          })
          .catch((error) => {
            console.log("Error :::::;; " + error);
            res.status(500).json({
              error: error,
            });
          });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      });
  } catch (error) {
    console.error("Error in authuser" + error);
  }
});

const getuserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  } catch (error) {
    console.error("Error in getuserProfile" + error + "".red.bold);
  }
});

const getuser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.error("Error in getuser" + error + "".red.bold);
  }
});

const deleteuser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    if (user) {
      console.log("0000");
      await user.remove();
      res.json({ message: "user removed" });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  } catch (error) {
    console.error("Error in deleteuser" + error + "".red.bold);
  }
});

const updateuser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.body._id);
    if (user) {
      user.firstname = req.body.firstName || user.firstname;
      user.lastname = req.body.lastName || user.lastname;
      let pwd = req.body.password
        ? bcrypt.hashSync(req.body.password, 10)
        : user.password;
      user.password = pwd;
      user.role = req.body.role || user.role;
      user.alertnumber = req.body.altContactNumber || user.alertnumber;
      user.number = req.body.number || user.number;
      user.email = req.body.email || user.email;
      const updateduser = await user.save();

      res.json({
        updateduser,
      });
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  } catch (error) {
    console.error("Error in updateuser" + error + "".red.bold);
  }
});

const createuser = asyncHandler(async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      password,
      number,
      altContactNumber,
      email,
      role,
      _id,
    } = req.body;

    if (_id != null && _id != -1) {
      updateuser(req, res);
      return;
    }
    console.log(req.body);
    const uInfo = new User({
      firstname: firstName,
      lastname: lastName,
      alertnumber: altContactNumber,
      number: number,
      email: email,
      role: role,
      password: bcrypt.hashSync(password, 10),
    });

    const info = await uInfo.save();
    let token = generateToken(info._id);
    res.status(200).json({
      userInfo: {
        _id: info._id,
        name: info.firstname + " " + info.lastname,
        firstname: info.firstname,
        lastname: info.lastname,
        number: info.number,
        email: info.email,
        role: info.role,
        alertnumber: info.alertnumber,
      },
      token: token,
    });
  } catch (error) {
    console.error("Error in createuser" + error);
  }
});

const getuserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.find({ userid: req.params.id });
    if (user) {
      res.json(user);
    } else {
      res.status(404);
      throw new Error("user not found");
    }
  } catch (error) {
    console.error("Error in getuserById" + error + "".red.bold);
  }
});

const resetPassword = async (req, res) => {
  const { email } = req.body;

  console.log("resetpasswordmailinreq.body", email);

  try {
    // Check if the user exists
    const user = await user.findOne({ email });
    if (!user) {
      return res.status(400).json({ Status: "email not existed" });
    }

    const r_name = user.username
      ? user.name
      : `${user.firstname} ${user.lastname}`;

    // Generate a unique recovery ID and expiration time
    const generateUniqueId = () => {
      const timestamp = Date.now().toString(16).slice(-5); // Last 5 hex chars of timestamp
      const random = Math.floor(Math.random() * 0x100000)
        .toString(16)
        .padStart(5, "0"); // Random 5 hex chars
      const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/~";
      const randomSpecialChar =
        specialChars[Math.floor(Math.random() * specialChars.length)];
      return (timestamp + random + randomSpecialChar).slice(0, 8);
    };

    const recoveryId = generateUniqueId();
    const expiration = new Date(Date.now() + 24 * 60 * 60 * 1000);

    // Save recovery link in the database
    // const recoveryLink = new RecoveryLink({ id: recoveryId, email, expiration });
    // await recoveryLink.save();

    // Generate recovery URL
    const recoveryUrl = `${process.env.SERVER_URL}login/restpassword/${recoveryId}`;

    // await sendEmail(
    //   {
    //     email: email,
    //     r_name: r_name ? r_name : (email + "").split("@")[0],
    //     recoveryUrl: recoveryUrl,
    //   },
    //   "forgotPassword",
    //   (error, info) => {
    //     if (error) {
    //       console.log("Error sending email: " + error);

    //     } else {
    //       console.log("Email sent successfully!");

    //     }
    //   }
    // );

    res.status(200).json({ Status: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ Status: "Error occurred during reset password process" });
  }
};

const updatePassword = async (req, res) => {
  const { password, recoveryId } = req.body;
  console.log("updateddddddddddddpassswordworking..........!!!", req.body);
  console.log("password, recoveryId", password, recoveryId);

  try {
    // Check if the recovery link exists and is valid
    const recoveryLink = await RecoveryLink.findOne({ id: recoveryId });

    if (!recoveryLink) {
      return res.status(400).json({ message: "Invalid recovery ID" });
    }

    // Check if the link has expired
    if (new Date() > recoveryLink.expiration) {
      return res.status(400).json({ message: "Recovery link has expired" });
    }

    // Find the user associated with the recovery link
    const user = await User.findOne({ email: recoveryLink.email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    // Delete the recovery link after use
    // await RecoveryLink.deleteOne({ id: recoveryId });

    return res.json({ message: "Password updated successfully" });
  } catch (e) {
    console.error("Error in updating password", e);
    res.status(500).json({ message: "Server error" });
  }
};

const emailCheck = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      res.json({ error: "Email already registered" });
    } else {
      res.json({ message: "Email is available" });
    }
  } catch (e) {
    console.log("Error in endSessionEvent::::::::::::::::::::::: " + e);
    res.status(500);
  }
});

const recoveryIdCheck = asyncHandler(async (req, res) => {
  const { recoveryId } = req.body;

  try {
    // const recoveryLink = await RecoveryLink.findOne({ id: recoveryId });

    // if (!recoveryLink) {
    //   return res.status(400).json({ message: "Invalid recovery ID" });
    // }
    const recoveryLink = {};
    res.status(200).json({ message: "Recovery ID is valid", recoveryLink });
  } catch (error) {
    console.error("Error in recoveryIdCheck:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const generatePassword = asyncHandler(async (req, res) => {
  const { userid, password } = req.body;

  try {
    const user = await User.findOne({ _id: userid });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    user.password = hashedPassword;
    user.issignup = true;

    await user.save();

    res.status(200).json({ message: "Password successfully updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const getallUsers = asyncHandler(async (req, res) => {
  try {
    const loginfo = await User.aggregate([{ $sort: { createdAt: -1 } }]);
    if (loginfo) {
      res.json(loginfo);
    } else {
      res.status(404);
      throw new Error("Users not found");
    }
  } catch (error) {
    console.error(error);
  }
});

export {
  authuser,
  createuser,
  getuserProfile,
  getuser,
  deleteuser,
  getuserById,
  updateuser,
  resetPassword,
  updatePassword,
  emailCheck,
  recoveryIdCheck,
  generatePassword,
  getallUsers,
};
