import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  department: { type: String, required: true },
  count: { type: Number, required: true },
  vendor: { type: String, required: true },
  vendor_id: { type: Number, required: true },
  publisher: { type: String, required: true },
  publisher_id: { type: Number, required: true }
});

const Book = mongoose.model('Book', bookSchema);
export default Book;