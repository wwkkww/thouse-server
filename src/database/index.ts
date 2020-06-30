import { MongoClient } from 'mongodb';
import { Database, User, Listing, Booking } from '../lib/types';

const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const CLUSTER = process.env.MONGO_CLUSTER;

const MONGO_URL = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}.mongodb.net/TinyHouse?retryWrites=true&w=majority`;

const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db('TinyHouse');

  return {
    bookings: db.collection<Booking>('bookings'),
    listings: db.collection<Listing>('listings'),
    users: db.collection<User>('users'),
  };
};

export default connectDatabase;
