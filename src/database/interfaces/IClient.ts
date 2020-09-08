import { Document } from 'mongoose';

import IAppointment from './IAppointment';

interface IClient extends Document {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  appointments: Array<IAppointment['_id']>
}

export default IClient;