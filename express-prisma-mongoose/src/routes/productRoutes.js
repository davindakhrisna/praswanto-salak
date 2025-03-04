import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// Route untuk menambahkan produk baru
router.post("/", createProduct);

// Route untuk mendapatkan semua produk
router.get("/", getProducts);

// Route untuk mendapatkan detail produk berdasarkan ID
router.get("/:id", getProductById);

// Route untuk memperbarui produk berdasarkan ID
router.put("/:id", updateProduct);

// Route untuk menghapus produk berdasarkan ID
router.delete("/:id", deleteProduct);

export default router;