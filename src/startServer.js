import { ApolloServer, PubSub } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers }) {

    mongoose.connect('mongodb://10.11.0.4:27017/graphql', { useNewUrlParser:true});
    
    const pubsub = new PubSub();
    const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub }});
    server.listen().then(() => console.log(`Server started at`));
}

export default startServer;