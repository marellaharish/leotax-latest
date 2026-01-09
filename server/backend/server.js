import path from "path";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import moment from 'moment-timezone';
import connectDB from "./config/db.js";
import bilingInvoiceRoutes from "./routes/bilingInvoiceRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dashboardRouter from "./routes/dashboardRouter.js";
import AWS from "aws-sdk";
import logeventRouter from "./routes/eventrouter.js"



dotenv.config();
connectDB();
// initMail().catch(console.error);
const app = express();





process.on('SIGINT', () => {
  process.exit();
});

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Load from environment variables
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Load from environment variables
  region: process.env.AWS_REGION || 'ap-south-1', // Default region
});

const PORT = process.env.PORT || 5010;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

if (process.env.NODE_ENV === "development") {
  morgan.token('date', (req, res) => {
    return moment().tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss'); // Adjust timezone if needed
  });

  morgan.token('client-ip', (req, res) => {
    return req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  });

  const customFormat = ':method :url :status :response-time ms --[:date] :client-ip';

  app.use(morgan(customFormat));
  // app.use(morgan("dev"));
}
// app.use(express.json());
app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "*",
  })
);

const __dirname = path.resolve();


app.use("/api/invoice", bilingInvoiceRoutes);
app.use("/api/user", userRoutes);
app.use("/api/dashboad", dashboardRouter)
app.use("/api/logevent", logeventRouter)
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}




