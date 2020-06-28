import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const CLUSTER = process.env.MONGO_CLUSTER;

const MONGO_URL = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.mongodb.net/TinyHouse?retryWrites=true&w=majority`;

const connectDatabase = async () => {
  const client = await MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db('TinyHouse');

  return {
    listings: db.collection('test_listings'),
  };
};

export default connectDatabase;
