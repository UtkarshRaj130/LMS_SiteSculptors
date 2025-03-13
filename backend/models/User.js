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
  publisher_id: { type: Number, required: true },
  reservingTime: { type: String, required: true }, // Added field
  reservingDate: { type: String, required: true }, // Added field
  duedate: { type: String, required: true },
=======
  dueDate: { type: String, required: true },
>>>>>>> 013a6c55963d0f8890132df3c1a98879b94e035c
  borrowDate: { type: String, required: true }, // Date when the book was borrowed
  returnDate: { type: String, required: true },
}); // Add _id: false to prevent _id creation for subdocuments

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  reservedBooks: [bookSchema],
  returnedBooks: [bookSchema],
});

const User = mongoose.model('User', userSchema);
export default User;
