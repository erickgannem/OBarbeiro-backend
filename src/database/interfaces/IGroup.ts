import { Document } from 'mongoose';
import IProfessional from './IProfessional';

interface IGroup extends Document {
  name: string;
  professionals: Array<IProfessional['_id']>;
}

export default IGroup;