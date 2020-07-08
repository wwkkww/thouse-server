require('dotenv').config();
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';
import connectDatabase from './database';
// import { schema } from './graphql';
// import bodyParser from 'body-parser';

// const app = express();
// // app.use(bodyParser.json());
// const port = 5000;

// // const server = new ApolloServer({ typeDefs: ``, resolvers: {} });
// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app, path: '/api' });

// app.listen(port, () => console.log(`Server started at port ${port}`));

const mount = async (app: Application) => {
  const port = process.env.PORT;
  app.use(cookieParser(process.env.SECRET));
  const db = await connectDatabase();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ db, req, res }),
  });
  server.applyMiddleware({ app, path: '/api' });

  app.listen(port, () => console.log(`Server started at port:${process.env.PORT}`));

  // const listings = await db.listings.find({}).toArray();
  // console.log(listings);
};

mount(express());
