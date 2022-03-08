import { GraphQLServer, PubSub } from "graphql-yoga";

import Query from "./resolvers/Query";
// import Author from "./help_resolvers/Author";
// import Book from "./help_resolvers/Book";
import Mutation from "./resolvers/Mutation";

// import Subscription from "./resolvers/Subscription";

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const pubsub = new PubSub()

const resolvers = {
    Query,
    Mutation,
    // Subscription,
}

const context = {
    prisma,
    pubsub
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            ...context
        }
    },
})

server.start(() => console.log("server is running on localhost:4000"))