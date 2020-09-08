import { Document } from 'mongoose';

import IClient from './IClient';
import IServiceBooked from './IServiceBooked';
import IServiceProvided from './IServiceProvided';

interface IAppointment extends Document {
  clientId: IClient['_id'];
  servicesBooked: Array<IServiceBooked['_id']>;
  durationExpected: number;
  servicesProvided: Array<IServiceProvided['_id']>;
  priceFull: number;
  discount: number;
  priceTotal: number;
  canceled: boolean;
  cancellationReason: string;
}

export default IAppointment;