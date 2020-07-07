import mongoose from 'mongoose';
import dotenv from 'dotenv';

const environment = dotenv.config({ path: '../../.env.dev' });

mongoose.Promise = Promise;

const { DB_USER, DB_NAME, DB_PASSWORD } = environment.parsed;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xr7bk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });
