import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  imgURL: { type: String, required: true },
  Professionals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Professional',
    required: true,
  }],
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

export default Service;
