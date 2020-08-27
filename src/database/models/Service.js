import mongoose from 'mongoose';
import path from 'path';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  imgURL: { type: String, required: true },
  professionals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Professional',
    required: true,
  }],
}, { timestamps: true });

serviceSchema.pre('validate', function photoUrlHandler(next) {
  if (!this.imgURL || this.imgURL.length === 0) {
    this.imgURL = path.resolve('src', 'assets', 'images', 'image-coming-soon.jpg');
    return next();
  }
  return next();
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
