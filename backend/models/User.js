import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  reservedBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

const User = mongoose.model('User', userSchema);
export default User;

