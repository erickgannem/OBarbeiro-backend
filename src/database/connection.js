import mongoose from 'mongoose';
import dotenv from 'dotenv';

import User from './models/User.js';
import Professional from './models/Professional.js';
import Service from './models/Service.js';

const environment = dotenv.config({ path: '.env.dev' });
const db = { User, Professional, Service };

mongoose.Promise = Promise;

const { DB_USER, DB_NAME, DB_PASSWORD } = environment.parsed;

async function dbConnect() {
  try {
    await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@cluster0-shard-00-00.xr7bk.mongodb.net:27017,cluster0-shard-00-01.xr7bk.mongodb.net:27017,cluster0-shard-00-02.xr7bk.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=atlas-nfsbib-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    console.log(error);
  }
}
dbConnect();

export default db;
