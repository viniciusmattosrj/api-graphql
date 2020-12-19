import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers }) {

    mongoose.connect('mongodb://10.11.0.4:27017/graphql', { useNewUrlParser:true});
    const server = new ApolloServer({ typeDefs, resolvers});
    server.listen().then(() => console.log(`Server started at`));
}

export default startServer;