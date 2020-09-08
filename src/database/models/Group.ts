import mongoose, { Schema } from 'mongoose';
import IGroup from '../interfaces/IGroup';

const GroupSchema = new Schema({
  name: {type: String, required: true},
  professionals: [{type: Schema.Types.ObjectId, ref: 'Professional'}]
})

const Group = mongoose.model<IGroup>('Group', GroupSchema);

export default Group;