import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './src/routes/authRoutes.js';
import authMiddleware from './src/middleware/authMiddleware.js';
import dotenv from 'dotenv';

dotenv.config();

// Tambahkan log untuk memeriksa JWT_SECRET
console.log('JWT_SECRET:', process.env.JWT_SECRET);

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is not set in .env file');
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

// Contoh rute yang dilindungi
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Lindungi rute product, cart, dan cart/checkout
app.use('/api/product', authMiddleware);
app.use('/api/cart', authMiddleware);

// Contoh rute product (tanpa implementasi)
app.get('/api/product', (req, res) => {
  res.json({ message: 'Product route' });
});

// Contoh rute cart (tanpa implementasi)
app.get('/api/cart', (req, res) => {
  res.json({ message: 'Cart route' });
});

// Contoh rute cart/checkout (tanpa implementasi)
app.get('/api/cart/checkout', (req, res) => {
  res.json({ message: 'Checkout route' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});