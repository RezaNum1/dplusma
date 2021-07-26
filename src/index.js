import { ApolloServer } from "apollo-server-express";
import express from 'express';
import cors from 'cors'
import { resolvers } from "../schema/resolvers";
import { typeDefs } from "../schema/typeDefs";

async function startServer() {
    const app = express()
    app.use(cors())
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start();

    server.applyMiddleware({ app, path: "/graphql", cors: false });

    app.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    })
}

startServer()