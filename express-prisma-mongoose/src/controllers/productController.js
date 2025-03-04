import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fungsi untuk menambahkan produk baru
export const createProduct = async (req, res) => {
    const { title, price, images, sold, description } = req.body;
  
    try {
      // Validasi input gambar
      if (!images || !Array.isArray(images) || images.length === 0) {
        return res.status(400).json({ error: "Images are required" });
      }
  
      // Konversi Base64 ke Buffer
      const imageBuffers = images.map((img) => {
        if (!img) {
          throw new Error("Invalid image data");
        }
        return Buffer.from(img, "base64"); // Konversi Base64 ke Buffer
      });
  
      const product = await prisma.product.create({
        data: {
          name: title,
          price: parseFloat(price),
          imageUrl: imageBuffers[0], // Gambar utama
          additionalImages: imageBuffers.slice(1), // Gambar tambahan
          sold: parseInt(sold),
          description,
        },
      });
  
      res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create product" });
    }
  };

// Fungsi untuk mendapatkan semua produk
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();

    // Konversi Buffer ke Base64 untuk dikirim ke frontend
    const formattedProducts = products.map((product) => ({
      ...product,
      imageUrl: product.imageUrl ? product.imageUrl.toString("base64") : null,
      additionalImages: product.additionalImages.map((img) =>
        img.toString("base64")
      ),
    }));

    res.json(formattedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Fungsi untuk mendapatkan detail produk berdasarkan ID
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Konversi Buffer ke Base64
    const formattedProduct = {
      ...product,
      imageUrl: product.imageUrl ? product.imageUrl.toString("base64") : null,
      additionalImages: product.additionalImages.map((img) =>
        img.toString("base64")
      ),
    };

    res.json(formattedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

// Fungsi untuk memperbarui produk berdasarkan ID
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, images, sold, description } = req.body;

  try {
    // Konversi Base64 atau ArrayBuffer ke Buffer
    const imageBuffers = images.map((img) => Buffer.from(img.data));

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: title,
        price: parseFloat(price),
        imageUrl: imageBuffers[0],
        additionalImages: imageBuffers.slice(1),
        sold: parseInt(sold),
        description,
      },
    });

    res.json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update product" });
  }
};

// Fungsi untuk menghapus produk berdasarkan ID
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.product.delete({
      where: { id },
    });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};