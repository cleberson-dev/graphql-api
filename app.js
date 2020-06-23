const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const db = require('./db');

const server = new ApolloServer({ typeDefs, resolvers });

db
  .authenticate()
  .then(() => {
    console.log('Banco de dados rodando');
    return db.sync({ force: true });
  })
  .catch(err => {
    console.error(err);
    process.exit(0);
  });

server
  .listen()
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));