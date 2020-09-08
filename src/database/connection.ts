import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Client from './models/Client.js';
import Professional from './models/Professional.js';
import Service from './models/Service.js';

dotenv.config({ path: '.env.dev' });
const db = { Client, Professional, Service };

mongoose.Promise = Promise;

const { DB_USER , DB_NAME, DB_PASSWORD } = process.env;

async function dbConnect() {
  try {
    await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@cluster0-shard-00-00.xr7bk.mongodb.net:27017,cluster0-shard-00-01.xr7bk.mongodb.net:27017,cluster0-shard-00-02.xr7bk.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=atlas-nfsbib-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
  } catch (error) {
    console.log(error);
  }
}
dbConnect();

export default db;
