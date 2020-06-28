import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';
import connectDatabase from './database';
import dotenv from 'dotenv';
// import { schema } from './graphql';
// import bodyParser from 'body-parser';

dotenv.config();

// const app = express();
// // app.use(bodyParser.json());
// const port = 5000;

// // const server = new ApolloServer({ typeDefs: ``, resolvers: {} });
// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app, path: '/api' });

// app.listen(port, () => console.log(`Server started at port ${port}`));

const mount = async (app: Application) => {
  const port = process.env.PORT;
  const db = await connectDatabase();

  const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ db }) });
  server.applyMiddleware({ app, path: '/api' });

  app.listen(port, () => console.log(`Server started at port:${port}`));
};

mount(express());
