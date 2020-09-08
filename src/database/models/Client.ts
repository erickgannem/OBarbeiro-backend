import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
}, { timestamps: true });

const Client = mongoose.model('Client', clientSchema);

export default Client;
