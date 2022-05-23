import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./routers/User.router.js";
import ProductRouter from "./routers/Product.router.js";
import CartRouter from "./routers/Cart.router.js";
import FavouriteRouter from "./routers/Favourite.router.js";
import InvoiceRouter from "./routers/Invoice.router.js";
import ReviewRouter from "./routers/Review.router.js";
import multer from "multer";

const app = express();

var storage = multer.diskStorage({
  destination: "../client/public/images",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
//User router
app.use("/api/users", UserRouter);
app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);
app.use("/api/favourite", FavouriteRouter);
app.use("/api/invoice", InvoiceRouter);
app.use("/api/review", ReviewRouter);
app.post("/api/uploadfile", upload.single("myFile"), (req, res, next) => {
  console.log(req.file.originalname + " file successfully uploaded !!");
  res.sendStatus(200);
});
//Not found page
app.all("*", (req, res) => {
  res.status(404).json({ success: false, message: "Not found" });
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect DB success");
  } catch (error) {
    console.log(error.message);
  }
};

connectDB();

app.listen(5000, () => console.log("Port 5000"));
