import fs from 'fs';
import csv from 'csv-parser';
import mongoose from 'mongoose';
import Book from './Book.js';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const importData = async () => {
  await connectDB();
  
  fs.createReadStream('boooks_data.csv')
    .pipe(csv())
    .on('data', async (row) => {
      const book = new Book({
        title: row.title,
        author: row.author,
        genre: row.genre,
        available: row.available === 'true',
      });

      await book.save();
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      mongoose.connection.close();
    });
};

importData();
