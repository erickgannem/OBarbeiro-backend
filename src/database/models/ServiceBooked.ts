import mongoose, { Schema } from 'mongoose';
import IServiceBooked from '../interfaces/IServiceBooked';

const ServiceBookedSchema = new Schema({
  appointment: {
    type: Schema.Types.ObjectId,
    ref: 'Appointment'
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service'
  },
  dateBooked: Date,
  price: Number,
  professional: {
    type: Schema.Types.ObjectId,
    ref: 'Professional'
  }
})

const ServiceBooked = mongoose.model<IServiceBooked>('ServiceBooked', ServiceBookedSchema);

export default ServiceBooked;
