import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  birth: { type: Date, required: true },
  isClient: { type: Boolean, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;
