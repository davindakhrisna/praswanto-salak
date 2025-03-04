import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/authRoutes.js";
import productRoutes from "./src/routes/productRoutes.js"; // Import product routes
import authMiddleware from "./src/middleware/authMiddleware.js";
import dotenv from "dotenv";

dotenv.config();

console.log("JWT_SECRET:", process.env.JWT_SECRET);

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET is not set in .env file");
  process.exit(1);
}

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json({ limit: "5mb" })); // Naikkan batas menjadi 5 MB
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes); // Tambahkan rute produk

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.use("/api/product", authMiddleware);
app.use("/api/cart", authMiddleware);

app.get("/api/product", (req, res) => {
  res.json({ message: "Product route" });
});

app.get("/api/cart", (req, res) => {
  res.json({ message: "Cart route" });
});

app.get("/api/cart/checkout", (req, res) => {
  res.json({ message: "Checkout route" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});