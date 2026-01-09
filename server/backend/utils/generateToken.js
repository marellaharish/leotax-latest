import jwt from "jsonwebtoken";
import moment from "moment-timezone";

const generateToken = (id) => {
  const startOfToken = moment.tz("Asia/Kolkata").toDate();
  const endOfToken = moment.tz("Asia/Kolkata").add(4, "hours").toDate();

  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return token;
};

export { generateToken };
