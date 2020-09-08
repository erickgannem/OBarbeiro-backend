import { Document } from 'mongoose';
import IGroup from './IGroup';

interface IProfessional extends Document {
  name: string;
  cpf: string;
  groups: Array<IGroup['_id']>
  email: string;
  phoneNumber: string;
  schedule: string[];
  photoUrl: string;
}

export default IProfessional;