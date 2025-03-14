import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // Update this path

import authRoutes from './routes/authRoutes.js'; // Update this path
import bookRoutes from './routes/bookRoutes.js'; // Update this path
import userRoutes from './routes/userRoutes.js'; // Update this path


// Allow requests from your frontend


dotenv.config();

const app = express();
app.use(cors({
  // origin: 'http://localhost:3000', // Change this to your frontend's URL
  origin: 'https://lms-sitesculptors-frontend.onrender.com',
  credentials: true
}));

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
