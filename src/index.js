import { ApolloServer } from "apollo-server-express";
import express from 'express';
import cors from 'cors'
import { resolvers } from "../schema/resolvers";
import { typeDefs } from "../schema/typeDefs";

async function startServer() {
    const app = express()
    // app.use(cors())
    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "http://localhost:4000/graphql"); // update to match the domain you will make the request from
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });
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