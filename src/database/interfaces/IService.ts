import { Document } from 'mongoose';

interface IService extends Document {
  name: string;
  duration: number;
  price: number;
  imageUrl: string;
}

export default IService;