import { ApolloServer } from "apollo-server-express";
import express from 'express';
import cors from 'cors'
import { resolvers } from "../schema/resolvers";
import { typeDefs } from "../schema/typeDefs";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import corn from "node-cron"
import { graphqlUploadExpress } from 'graphql-upload'
import pendonorDetailQueries from '../queries/pendonorDetailQueries'

async function startServer() {
    const app = express()
    app.use(cors())
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.header("Access-Control-Allow-Credentials", false);
        next();
        });
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    })
  ]
    })

    await server.start();

    app.use(graphqlUploadExpress());
    server.applyMiddleware({ app, path: "/graphql" });

    app.listen({ port: 80 }, () => {
        console.log(`🚀 Server ready at http://localhost:80${server.graphqlPath}`)
    })
    app.get('/', (req,res,next) => {
        res.redirect('/graphql')
    })

    corn.schedule('0 0 0 * * *', () => {
        pendonorDetailQueries.updateLockedData()
    })
}

startServer()