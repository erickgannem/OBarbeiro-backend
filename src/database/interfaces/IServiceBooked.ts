import { Document } from 'mongoose';

import IAppointment from './IAppointment';
import IService from './IService';
import IProfessional from './IProfessional';


interface IServiceBooked extends Document {
  appointmentId: IAppointment['_id'];
  serviceId: IService['_id'];
  dateBooked: Date;
  price: number;
  professionalId: IProfessional['_id'];
}

export default IServiceBooked;