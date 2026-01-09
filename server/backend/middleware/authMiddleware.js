import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Staff from "../models/userModel.js";
import User from "../models/userModel.js";

const sessioncheck = asyncHandler(async (req, res, next) => {
  let token;

  console.log(req.headers)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log(token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded); 
      req.user = await User.findById(decoded.id).select("-password");
      //console.log(req.user);
      next(); 
    } catch (error) { 
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { sessioncheck, admin };
