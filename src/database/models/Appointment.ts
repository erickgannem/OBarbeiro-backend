import mongoose, {Schema, Document} from 'mongoose';
import IAppointment from '../interfaces/IAppointment';

const appointmentSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client'
  },
  servicesBooked: [{
    type: Schema.Types.ObjectId,
    ref: "ServiceBooked"
  }],
  durationExpected: Number,
  servicesProvided: [{
    type: Schema.Types.ObjectId,
    ref: 'ServiceProvided'
  }],
  priceFull: Number,
  discount: Number,
  priceTotal: Number,
  canceled: Boolean,
  cancellationReason: String

})

const Appointment = mongoose.model<IAppointment>('Appointment', appointmentSchema);

export default Appointment;