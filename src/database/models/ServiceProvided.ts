import mongoose, { Schema } from 'mongoose';
import IServiceProvided from '../interfaces/IServiceProvided';

const ServiceProvidedSchema = new Schema({
  appointment: {
    type: Schema.Types.ObjectId,
    ref: 'Appointment'
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service'
  },
  dateProvided: Date,
  price: Number,
  professional: {
    type: Schema.Types.ObjectId,
    ref: 'Professional'
  }
})

const ServiceBooked = mongoose.model<IServiceProvided>('ServiceBooked', ServiceProvidedSchema);

export default ServiceBooked;
