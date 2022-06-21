import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import * as path from 'path';
import { buildSchema } from 'type-graphql';

async function bootstrap(){
    const schema = await buildSchema({
        resolvers: [],
        emitSchemaFile: path.resolve(__dirname,"schema.gql"),
    })
}