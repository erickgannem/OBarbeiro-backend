import mongoose from 'mongoose';

const professionalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  photoURL: { type: String, required: true },
  services: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Service',
    required: true,
  },
});

const Professional = mongoose.model('Professional', professionalSchema);

export default Professional;
