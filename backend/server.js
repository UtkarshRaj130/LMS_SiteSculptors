import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // Update this path

import authRoutes from './routes/authRoutes.js'; // Update this path
import bookRoutes from './routes/bookRoutes.js'; // Update this path
import userRoutes from './routes/userRoutes.js'; // Update this path

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
