import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';
require('dotenv').config()
const config = require('./config/enviroment.js');

function startServer({ typeDefs, resolvers }) {

    console.log(config);
    mongoose.connect(`${config.dbConnection}://${config.dbHost}:${config.dbPort}/${config.dbDatabase}`, { useNewUrlParser:true});
    
    const pubsub = new PubSub();
    const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub }});
    server.listen().then(() => console.log(`Server started at`));
}

export default startServer;