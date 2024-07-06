import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
    default: true,
  },
  recommended: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
