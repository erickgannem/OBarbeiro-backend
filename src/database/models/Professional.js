import mongoose from 'mongoose';
import path from 'path';

const professionalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  photoURL: { type: String, required: true },
  availability: [{ type: String, required: true }],
  services: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  }],
}, { timestamps: true });

professionalSchema.pre('validate', function photoUrlHandler(next) {
  if (!this.photoURL || this.photoURL.length === 0) {
    this.photoURL = path.resolve('src', 'assets', 'images', 'profile-placeholder.png');
    return next();
  }
  return next();
});

const Professional = mongoose.model('Professional', professionalSchema);

export default Professional;
