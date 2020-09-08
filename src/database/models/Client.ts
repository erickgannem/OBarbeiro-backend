import mongoose, { Schema } from 'mongoose';

import IClient from '../interfaces/IClient';

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cpf: {type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  appointments: [{type: Schema.Types.ObjectId, ref: 'Appointment'}]
}, { timestamps: true });

const Client = mongoose.model<IClient>('Client', clientSchema);

export default Client;
