import mongoose, {Schema, Document} from 'mongoose';

interface IAppointment extends Document {
  clientId: string;
  services_booked: string[];
  duration_expected: string;
  services_provided: string[];
  price_full: number,
  discount: number,
  price_total: number,
  canceled: boolean,
  cancellationReason: String
}

const appointmentSchema = new Schema({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client'
  },
  servicesBooked: [{
    type: Schema.Types.ObjectId,
    ref: "ServiceBooked"
  }],
  endTimeExpected: String,
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