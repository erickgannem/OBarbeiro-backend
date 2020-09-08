import { Document } from 'mongoose';

import IAppointment from './IAppointment';
import IService from './IService';
import IProfessional from './IProfessional';


interface IServiceProvided extends Document {
  appointments: IAppointment['_id'];
  serviceId: IService['_id'];
  dateBooked: Date;
  price: number;
  professionalId: IProfessional['_id'];
}

export default IServiceProvided;