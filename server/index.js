import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./routers/User.router.js";
import ProductRouter from "./routers/Product.router.js";
import CartRouter from "./routers/Cart.router.js";
import FavouriteRouter from "./routers/Favourite.router.js";
import InvoiceRouter from "./routers/Invoice.router.js";

const app = express();

app.use(express.json());
app.use(cors());
//User router
app.use("/api/users", UserRouter);
app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);
app.use("/api/favourite", FavouriteRouter);
app.use("/api/invoice", InvoiceRouter);
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
