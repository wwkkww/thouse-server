import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';
// import { schema } from './graphql';
// import bodyParser from 'body-parser';

const app = express();
// app.use(bodyParser.json());
const port = 5000;

// const server = new ApolloServer({ typeDefs: ``, resolvers: {} });
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/api' });

app.listen(port, () => console.log(`Server started at port ${port}`));
