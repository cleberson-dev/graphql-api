const { ApolloServer } = require('apollo-server');

const schema = require('./config/schema');
const resolvers = require('./resolvers');
const db = require('./config/db');

const server = new ApolloServer({ typeDefs: schema, resolvers });

db
  .authenticate()
  .then(() => {
    console.log('Banco de dados rodando');
    // Tabelas serão removidos toda vez que aplicação iniciar
    return db.sync({ force: true });
  })
  .catch(err => {
    console.error(err);
    process.exit(0);
  });

server
  .listen()
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));