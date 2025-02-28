// backend/src/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    // Cek apakah token ada di database
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { token: true },
    });

    if (!user || user.token !== token) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token' });
  }
};

export default authenticate;