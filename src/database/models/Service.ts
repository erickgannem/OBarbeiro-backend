import mongoose, {Document, Schema} from 'mongoose';
import path from 'path';

interface IService extends Document {
  name: string;
  duration: number;
  price: number;
  imageUrl: string
}
const serviceSchema = new Schema({
  name: { type: String, required: true },
  duration: {type: Number, required: true},
  price: { type: Number, required: true },
  imageUrl: String
}, { timestamps: true });

serviceSchema.pre<IService>('validate', function photoUrlHandler(next) {
  if (!this.imageUrl || this.imageUrl.length === 0) {
    this.imageUrl = path.resolve('src', 'assets', 'images', 'image-coming-soon.jpg');
    return next();
  }
  return next();
});

const Service = mongoose.model<IService>('Service', serviceSchema);

export default Service;
