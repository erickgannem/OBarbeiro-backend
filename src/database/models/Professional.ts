import mongoose, { Schema } from 'mongoose';
import path from 'path';

import IProfessional from '../interfaces/IProfessional';

const professionalSchema = new Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  groups: [{type: Schema.Types.ObjectId, ref: 'Group'}],
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  schedule: [{ type: String, required: true }],
  photoUrl: { type: String },
}, { timestamps: true });

professionalSchema.pre<IProfessional>('validate', function photoUrlHandler(next) {
  if (!this.photoUrl || this.photoUrl.length === 0) {
    this.photoUrl = path.resolve('src', 'assets', 'images', 'profile-placeholder.png');
    return next();
  }
  return next();
});

const Professional = mongoose.model<IProfessional>('Professional', professionalSchema);

export default Professional;
